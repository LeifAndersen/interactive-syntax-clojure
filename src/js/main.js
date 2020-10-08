import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/clojure/clojure'
import 'codemirror/keymap/vim'
import hljs from 'highlight.js'

window.ReactComponents = {
    'react': require('react'),
    'react-dom': require('react-dom'),
    'react-split-pane': require('react-split-pane'),
}

window.react = window.ReactComponents['react'];
window.react_dom = window.ReactComponents['react-dom'];

window.CodeMirror = CodeMirror;
window.hljs = hljs;
