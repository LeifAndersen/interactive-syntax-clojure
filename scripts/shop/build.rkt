#!/usr/bin/env racket
#lang racket

(require racket/runtime-path
         racket/cmdline
         file/glob)

(define main-db (make-parameter (dynamic-require "database.sml" 'doc)))
(define npm (find-executable-path "npm"))
(define npx (find-executable-path "npx"))
(define-runtime-path here-deps "deps")
(define-runtime-path webpack-config "webpack.config.js")
(define deps-param (make-parameter here-deps))

(define package
  (command-line
   #:program "VISr Dep Builder"
   #:once-each
   [("-d" "--database") "Use custom database" main-db]
   [("-o" "--output") "Chose output directory" deps-param]
   #:args ([package #f])
   package))

(define deps (deps-param))
(define database (main-db))

(make-directory* deps)

(define (entry->package entry)
  (if (string? entry)
      entry
      (format "~a@~a" (dict-ref entry 'name) (dict-ref entry 'version))))

(define (entry->path entry)
  (if (string? entry) entry (dict-ref entry 'name)))

(for ([(out d) (in-dict database)])
  (when (or (not package) (eq? (string->symbol package) out))
    (define path (or (dict-ref d 'full-path #f)
                     (format "./node_modules/~a/~a"
                             (entry->path (dict-ref d 'package))
                             (dict-ref d 'path))))
    (parameterize ([current-directory (make-temporary-file "tmp~a" 'directory)])
      (printf "Building: ~a~n" out)
      (copy-file webpack-config "webpack.config.js")
      (system* npm "install" "--save-dev" "-y" "webpack" "webpack-cli" "css-loader"
               "style-loader" "file-loader" "babel-loader" "assert" "buffer"
               "stream-browserify" "os-browserify" "path-browserify"
               "browserify-zlib" "crypto-browserify" "@babel/core"
               "@babel/preset-env" "@babel/preset-react")
      (if (generic-set? (dict-ref d 'package))
          (for ([p (dict-ref d 'package)])
            (system* npm "install" (entry->package p)))
          (system* npm "install" (entry->package (dict-ref d 'package))))
      (system* npx "webpack" path (format "--output-filename=~a.js" out))
      (for ([f (in-glob "dist/*")])
        (copy-file f (build-path deps (file-name-from-path f)) #t)))))

