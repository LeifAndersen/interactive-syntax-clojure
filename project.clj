(defproject interactive-syntax "0.1.0-SNAPSHOT"
  :description "Enables Interactive-Syntax Extensions in ClojureScript"
  :url "http://lang.video"
  :license {:name "Apache 2.0"
            :url "http://www.apache.org/licenses/LICENSE-2.0"}


  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.741"]
                 [org.clojure/core.match "1.0.0"]
                 [org.clojure/tools.reader "1.3.3"]
                 [reagent "0.10.0" :exclusions [cljsjs/react cljsjs/react-dom]]
                 [alandipert/storage-atom "1.2.4"]
                 [karma-reporter "3.1.0"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.20"]
            [lein-doo "0.1.11"]]

  :clean-targets ^{:protect false}

  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs ["public/css"]}

  :doo {:paths {:karma "./node_modules/karma/bin/karma"}}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "interactive-syntax.dev"
                         :output-to "public/js/development/app.js"
                         :output-dir "public/js/development"
                         :asset-path   "js/development"
                         :target :bundle
                         :bundle-cmd {:none ["npx" "webpack"
                                             "--mode=development"
                                             "--env=development"]
                                      :default ["npx" "webpack"
                                                "--env=development"]}
                         ;;:deps-cmd "npm"
                         :source-map true
                         :optimizations :none
                         :pretty-print  true}
                        :figwheel
                        {:on-jsload "interactive-syntax.core/mount-root"
                         :open-urls ["http://localhost:3449/index.html"]}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:main "interactive-syntax.prod"
                         :output-to "target/release/app.js"
                         :output-dir "target/release"
                         :externs ["src/js/externs.js"]
                         :target :bundle
                         :bundle-cmd {:none ["npx" "webpack"
                                             "--mode=development"
                                             "--env=release"]
                                      :default ["npx" "webpack"
                                                "--env=release"]}
                         ;;:deps-cmd "npm"
                         :infer-externs true
                         :optimizations :advanced
                         :closure-defines {cljs.core/*global* "window"}
                         :pretty-print false}}
                       :test
                       {:source-paths ["src" "env/test/cljs"]
                        :compiler
                        {:main "interactive-syntax.test"
                         :output-to "public/js/test/app.js"
                         :output-dir "public/js/test"
                         ;;:asset-path   "base/js/test"
                         :asset-path   "js/test"
                         :target :bundle
                         :bundle-cmd {:none ["npx" "webpack"
                                             "--mode=development"
                                             "--env=test"]
                                      :default ["npx" "webpack"
                                                "--env=test"]}
                         ;;:deps-cmd "npm"
                         :infer-externs true
                         ;;:silence-optimizations-warning true
                         :optimizations :simple
                         :closure-defines {cljs.core/*global* "window"}
                         :pseudo-names true}}}}

  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]
            "test-chrome" ["do" "clean" ["doo" "chrome" "test"]]
            "test-firefox" ["do" "clean" ["doo" "firefox" "test"]]}

  :profiles {:dev {:source-paths ["src" "env/dev/clj"]
                   :dependencies [[binaryage/devtools "1.0.2"]
                                  [figwheel-sidecar "0.5.20"]
                                  [nrepl "0.7.0"]
                                  [cider/piggieback "0.5.0"]]}})
