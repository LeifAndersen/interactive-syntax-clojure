let stopify = require('@leifandersen/stopify-tweak');
import {parse} from "@babel/parser";
import {polyfillHofFromAst} from "@stopify/higher-order-functions";
self.stopify = stopify;

let runner = stopify.stopifyLocally("", {newMethod: "direct"});
runner.run(() => {
    self.onmessage = ({data: {prog, poly}}) => {
        let ast = parse(prog);
        let polyfilled = poly ? polyfillHofFromAst(ast) : ast;
        self.postMessage({prog: runner.compileFromAst(polyfilled)});
    };
});

