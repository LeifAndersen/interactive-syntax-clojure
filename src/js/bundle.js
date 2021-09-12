import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

window.path = require('path');

// Puts System into global namespace
import 'systemjs';
import 'systemjs/dist/extras/amd';

// Horrible hack because stopify insists on being in the global namespace.
window.stopify = require('@leifandersen/stopify-tweak');
window.stopifyArray = function(array) {
    return require('@stopify/higher-order-functions/dist/ts/simpleHofPolyfill.lazy')
        .stopifyArray(array);
};

import asyncCompile from "./stopify-compile.worker.js";
let worker = new asyncCompile();
let workerTable = {};
let workerKey = 0;

worker.onmessage = ({data: {prog, key}}) => {
    let cb = workerTable[key];
    delete workerTable[key];
    cb(prog);
};

window.asyncStopifyCompile = (prog, cb) => {
    workerTable[workerKey] = cb;
    worker.postMessage({key: workerKey, prog});
    workerKey++;
};
