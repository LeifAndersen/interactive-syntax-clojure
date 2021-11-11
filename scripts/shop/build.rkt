#!/usr/bin/env racket
#lang racket

(require racket/runtime-path
         racket/cmdline
         file/glob)

(define main-db (make-parameter (dynamic-require "database.sml" 'doc)))
(define npm (find-executable-path "npm"))
(define npx (find-executable-path "npx"))
(define-runtime-path deps "deps")
(define-runtime-path webpack-config "webpack.config.js")

(define package
  (command-line
   #:program "VISr Dep Builder"
   #:once-each
   [("-d" "--database") "Use custom database" main-db]
   #:args ([package #f])
   package))

(define database (main-db))

(for ([(out d) (in-dict database)])
  (when (or (not package) (eq? (string->symbol package) out))
    (parameterize ([current-directory (make-temporary-file "tmp~a" 'directory)])
      (printf "Building: ~a~n" out)
      (copy-file webpack-config "webpack.config.js")
      (system* npm "install" "--save-dev" "-y" "webpack" "webpack-cli" 
               "css-loader" "style-loader" "file-loader")
      (system* npm "install" (dict-ref d 'package))
      (system* npx "webpack" (dict-ref d 'path)
               (format "--output-filename=~a.js" out))
      (for ([f (in-glob "dist/*")])
        (copy-file f (build-path deps (file-name-from-path f)) #t)))))

