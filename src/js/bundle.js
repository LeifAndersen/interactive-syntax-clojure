import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

window.path = require('path');

// Horrible hack because stopify insists on being in the global namespace.
window.stopify = require('@stopify/stopify');
window.stopifyArray = function(array) {
    return require('@stopify/higher-order-functions/dist/ts/simpleHofPolyfill.lazy')
        .stopifyArray(array);
};
