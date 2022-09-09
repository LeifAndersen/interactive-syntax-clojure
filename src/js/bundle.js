import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'codemirror/theme/neo.css';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/fold/foldgutter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

window.path = require('path');

// Puts System into global namespace
import 'systemjs';
import 'systemjs/dist/extras/amd';
import 'systemjs/dist/extras/named-register';

window.React = require('react');
window.ReactDOM = require('react-dom');

// Horrible hack because stopify insists on being in the global namespace.
window.stopify = require('@stopify/stopify');
window.stopifyArray = function(array) {
    return require(
        '@stopify/higher-order-functions/dist/ts/mozillaHofPolyfill.lazy')
        .stopifyArray(array);
};

import asyncCompile from "./stopify-compile.worker.js";
window.StopifyWorker = asyncCompile;
