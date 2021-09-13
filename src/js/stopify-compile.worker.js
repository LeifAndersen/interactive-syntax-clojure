let stopify = require('@leifandersen/stopify-tweak');
import {parse} from "@babel/parser";
import {polyfillHofFromAst} from "@stopify/higher-order-functions";
self.stopify = stopify;

let runner = stopify.stopifyLocally("");
runner.run(() => {
    self.onmessage = ({data: {prog}}) => {
        let ast = parse(prog);
        let polyfilled = polyfillHofFromAst(ast);
        self.postMessage({prog: runner.compileFromAst(polyfilled)});
    };
});

