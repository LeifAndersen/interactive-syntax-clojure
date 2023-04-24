#lang sml

bezier-js:
{package: "bezier-js" path: "dist/bezier.js"}

blockly:
{package: "blockly" path: "index.js"}

blockly-blocks:
{package: "blockly" path: "blocks.js" externals: {blockly: "blockly"}}

blockly-core:
{package: "blockly" path: "core.js"}

blockly-javascript:
{package: "blockly" path: "javascript.js" externals: {blockly: "blockly"}}

blockly-lua:
{package: "blockly" path: "lua.js" externals: {blockly: "blockly"}}

blockly-python:
{package: "blockly" path: "python.js" externals: {blockly: "blockly"}}

canvas2svg:
{package: "canvas2svg" path: "canvas2svg.js"}

d3:
{package: "d3" path: "dist/d3.js"}

file-type:
{package: "file-type" path: "browser.js"}

highlightjs:
{package: "highlight.js" path: "lib/index.js"}

highlightjs-css:
{package: "highlight.js" path: "styles/default.css"}

highlightjs-github-css:
{package: "highlight.js" path: "styles/github.css"}

iink-js:
{package: "iink-js" path: "dist/iink.min.js"}

js-numbers:
{package: "js-numbers"
 path: "src/js-numbers.js"}

konva:
{package: "konva" path: "konva.js"}

luxon:
{package: "luxon" path: "build/global/luxon.js"}

mathjs:
{package: "mathjs" path: "lib/browser/math.js"}

marked:
{package: "marked" path: "marked.min.js"}

model-viewer:
{package: "@google/model-viewer" path: "dist/model-viewer.min.js"}

opencascadejs:
{package: {name: "opencascade.js" version: "beta"} path: "dist/index.js"}

openpgp:
{package: "openpgp" path: "dist/openpgp.min.js"}

pepjs:
{package: "pepjs" path: "dist/pep.js"}

prismjs:
{package: "prismjs" path: "prism.js"}

re-resizable:
{package: "re-resizable" path: "lib/index.js"}

react-bezier-curve-editor:
{package: "react-bezier-curve-editor" path: "lib/index.js"}

react-blockly:
{package: "react-blockly" path: "dist/index.js"
 externals: {blockly: "blockly"}}

react-canvas-core:
{package: "@projectstorm/react-diagrams" path: "dist/index.js"}

react-color:
{package: "react-color" path: "lib/index.js"}

react-diagrams:
{package: "@projectstorm/react-diagrams" path: "dist/index.js"}

react-digraph:
{package: "react-digraph" path: "dist/main.min.js"}

react-file-drop:
{package: "react-file-drop" path: "index.js"}

react-flow-renderer:
{package: "react-flow-renderer" path: "dist/esm/index.js"}

react-frame-component:
{package: "react-frame-component" path: "lib/index.js"}

react-graph-vis:
{package: "react-graph-vis" path: "lib/index.js"}

react-hexgrid:
{package: "react-hexgrid" path: "lib/index.js"}

react-icons:
{package: "react-icons" path: "lib/esm/index.js"}

react-konva:
{package: ["react-konva" "konva"]
 full-path: "./node_modules/react-konva/lib/ReactKonva.js"
 ;; externals: {konva: "konva"}
 }

react-player:
{package: "react-player" path: "dist/ReactPlayer.js"}

react-scenejs-timeline:
{package: "react-scenejs-timeline" path: "dist/timeline.esm.js"}

react-sortable-pane:
{package: "react-sortable-pane" path: "lib/react-sortable-pane.js"}

react-three-a11y:
{package: "@react-three/a11y" path: "dist/index.js"}

react-three-drei:
{package: "@react-three/drei" path: "core/index.js"}

react-three-fiber:
{package: ["@react-three/fiber" "three"]
 full-path: "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"}

react-unity-webgl:
{package: {name: "react-unity-webgl" version: "8"} path: "distribution/index.js"}

react-video-editor:
{package: "react-video-editor" path: "src/Video_Editor/VideoEditor.js"}

react-video-editor-css:
{package: "react-video-editor" path: "src/Video_Editor/css/editor.css"}

react-video-editor-editor:
{package: "react-video-editor" path: "src/Video_Editor/Editor.js"}

react-video-renderer:
{package: ["react-video-renderer" "tslib"]
 full-path: "./node_modules/react-video-renderer/dist/es2015/index.js"}

scenejs:
{package: "scenejs" path: "dist/scene.js"}

showdown:
{package: "showdown" path: "dist/showdown.min.js"}

showdown-highlight:
{package: "showdown-highlight" path: "lib/index.js"}

survey-react:
{package: "survey-react" path: "survey.react.min.js"}

survey-react-css:
{package: "survey-react" path: "survey.min.css"}

survey-react-modern:
{package: "survey-react" path: "modern.min.css"}

three:
{package: "three" path: "build/three.js"}

videojs:
{package: "video.js" path: "dist/video.min.js"}

videojs-css:
{package: "video.js" path: "dist/video-js.min.css"}

vis-network-css:
{package: "vis-network" path: "dist/dist/vis-network.min.css"}
