#!/usr/bin/env racket
#lang racket

(require racket/runtime-path
         racket/cmdline
         file/glob
         json)

(define npm (find-executable-path "npm"))
(define npx (find-executable-path "npx"))
(define git (find-executable-path "git"))
(define-runtime-path here-deps "deps")
(define-runtime-path webpack-config "webpack.config.js")
(define-runtime-path dynamic-loader "dynamic-loader.js")
(define main-db (make-parameter "database.sml"))
(define deps-param (make-parameter here-deps))
(define verbose-param (make-parameter #f))

(define package
  (command-line
   #:program "VISr Dep Builder"
   #:once-each
   [("-d" "--database") db "Use custom database" (main-db db)]
   [("-o" "--output") output "Chose output directory" (deps-param output)]
   [("-v" "--verbose") "Verbose Output" (verbose-param #t)]
   #:args ([package #f])
   package))

(define deps (if (complete-path? (deps-param))
                 (deps-param)
                 (build-path (current-directory) (deps-param))))
(define database (dynamic-require (main-db) 'doc))
(define verbose (verbose-param))

(make-directory* deps)

(define (entry->package entry)
  (cond [(string? entry) entry]
        [(= (dict-ref entry 'type) "git") (dict-ref entry 'name)]
        [else (format "~a@~a" (dict-ref entry 'name) (dict-ref entry 'version))]))

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
      (when verbose
        (printf "Build Directory Location: ~a~n" (current-directory))
        (printf "Setting up environment...~n"))
      (copy-file webpack-config "webpack.config.js")
      (copy-file dynamic-loader "dynamic-loader.js")
      (with-output-to-file "extra-externals.js"
        (λ ()
          (printf "module.exports = ~a;"
                  (if (dict-has-key? d 'externals)
                      (jsexpr->string (for/hash ([(k v) (in-dict (dict-ref d 'externals))])
                                        (values k (list "dependencies" v))))
                      "{}"))))
      (system* npm "install" "--save-dev" "-y" "webpack" "webpack-cli" "css-loader"
               "style-loader" "file-loader" "raw-loader" "babel-loader" "assert" 
               "buffer" "stream-browserify" "os-browserify" "path-browserify"
               "browserify-zlib" "crypto-browserify" "@babel/core"
               "@babel/preset-env" "@babel/preset-react")
      (when verbose
        (printf "Downloading deps...~n"))
      (let loop ([d (dict-ref d 'package false)])
        (cond
          [(generic-set? d)
           (for ([p d])
             (loop p))]
          [(dict? d)
           (case (dict-ref d 'type)
             [("git") (system* git "clone" (dict-ref d 'url))]
             [else (system* npm "install" (entry->package d))])]
          [else (system* npm "install" (entry->package d))]))
      (system* npx "webpack" path (format "--output-filename=~a.js" out))
      (for ([f (in-glob "dist/*")])
        (copy-file f (build-path deps (file-name-from-path f)) #t)))))

