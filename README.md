
### Development mode
To start the Figwheel compiler, navigate to the project folder and run the following command in the terminal:

```
npm ci
clojure -A:fig
```

Figwheel will automatically push cljs changes to the browser.
Once Figwheel starts up, you should be able to open `localhost:9500` in the browser.

### Tests

With a development build running, open `localhost:9005/figwheel-extra-main/auto-testing` in the browser.

### REPL

The project is setup to start nREPL on port `7002` once Figwheel starts.
Once you connect to the nREPL, run `(cljs)` to switch to the ClojureScript REPL.

### Building for production

```
npm ci
clojure -A:package
```

Then go get a coffee, or just eat dinner, a production build seems 
to take a little over 15 minutes.
