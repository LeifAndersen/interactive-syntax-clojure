let stopify = require('@leifandersen/stopify-tweak');
self.stopify = stopify;

let runner = stopify.stopifyLocally("");
runner.run(() => {
    self.onmessage = ({data: {prog, key}}) => {
        self.postMessage({prog: runner.compileFromAst(prog), key});
    };
});

