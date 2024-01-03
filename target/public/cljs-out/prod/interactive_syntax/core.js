// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('interactive_syntax.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('cljs.core.match');
goog.require('oops.core');
goog.require('interactive_syntax.editor');
goog.require('interactive_syntax.db');
goog.require('interactive_syntax.utils');
goog.require('interactive_syntax.strings');
goog.require('interactive_syntax.env');
goog.require('interactive_syntax.stdlib');
goog.require('interactive_syntax.fs');
goog.require('interactive_syntax.git');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('alandipert.storage_atom');
goog.require('garden.core');
interactive_syntax.core.node$module$popper$js = require('popper.js');
interactive_syntax.core.node$module$bootstrap = require('bootstrap');
interactive_syntax.core.node$module$react_bootstrap = require('react-bootstrap');
interactive_syntax.core.node$module$react_frame_component = require('react-frame-component');
interactive_syntax.core.node$module$react_hotkeys = require('react-hotkeys');
interactive_syntax.core.node$module$codemirror = require('codemirror');
interactive_syntax.core.node$module$file_saver = require('file-saver');
interactive_syntax.core.node$module$react_codemirror2 = require('react-codemirror2');
interactive_syntax.core.node$module$codemirror$keymap$vim = require('codemirror/keymap/vim');
interactive_syntax.core.node$module$codemirror$keymap$emacs = require('codemirror/keymap/emacs');
interactive_syntax.core.node$module$codemirror$keymap$sublime = require('codemirror/keymap/sublime');
interactive_syntax.core.node$module$codemirror$addon$search$searchcursor = require('codemirror/addon/search/searchcursor');
interactive_syntax.core.node$module$codemirror$addon$hint$show_hint = require('codemirror/addon/hint/show-hint');
interactive_syntax.core.node$module$codemirror$addon$hint$anyword_hint = require('codemirror/addon/hint/anyword-hint');
interactive_syntax.core.node$module$codemirror$addon$edit$closebrackets = require('codemirror/addon/edit/closebrackets');
interactive_syntax.core.node$module$codemirror$addon$fold$foldcode$js = require('codemirror/addon/fold/foldcode.js');
interactive_syntax.core.node$module$codemirror$addon$fold$foldgutter$js = require('codemirror/addon/fold/foldgutter.js');
interactive_syntax.core.node$module$codemirror$addon$fold$brace_fold$js = require('codemirror/addon/fold/brace-fold.js');
interactive_syntax.core.node$module$codemirror$addon$fold$comment_fold$js = require('codemirror/addon/fold/comment-fold.js');
interactive_syntax.core.node$module$codemirror$mode$clojure$clojure = require('codemirror/mode/clojure/clojure');
interactive_syntax.core.node$module$browserfs = require('browserfs');
interactive_syntax.core.node$module$react_split_pane = require('react-split-pane');
interactive_syntax.core.node$module$react_split_pane$lib$Pane = require('react-split-pane/lib/Pane');
interactive_syntax.core.node$module$react_switch = require('react-switch');
interactive_syntax.core.node$module$react_dnd = require('react-dnd');
interactive_syntax.core.node$module$react_dnd_html5_backend = require('react-dnd-html5-backend');
interactive_syntax.core.node$module$react_to_print = require('react-to-print');
interactive_syntax.core.node$module$isomorphic_git = require('isomorphic-git');
interactive_syntax.core.node$module$isomorphic_git$http$web = require('isomorphic-git/http/web');
interactive_syntax.core.node$module$chonky = require('chonky');
interactive_syntax.core.node$module$chonky_icon_fontawesome = require('chonky-icon-fontawesome');
interactive_syntax.core.SplitPane = interactive_syntax.core.node$module$react_split_pane.default;
interactive_syntax.core.Switch = interactive_syntax.core.node$module$react_switch.default;
interactive_syntax.core.ReactToPrint = interactive_syntax.core.node$module$react_to_print.default;
interactive_syntax.core.Frame = interactive_syntax.core.node$module$react_frame_component.default;
interactive_syntax.core.splash_dialog = (function interactive_syntax$core$splash_dialog(p__61589){
var map__61590 = p__61589;
var map__61590__$1 = cljs.core.__destructure_map.call(null,map__61590);
var menu = cljs.core.get.call(null,map__61590__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var version = cljs.core.get.call(null,map__61590__$1,new cljs.core.Keyword(null,"version","version",425292698));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"splash","splash",-1122760796)),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
}),new cljs.core.Keyword(null,"size","size",1098693007),"xl"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),new cljs.core.Keyword(null,"true","true",-1114210334)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Welcome to VISr for ClojureScript! (v",interactive_syntax.db.version_short,")"], null)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Q: What is Hybrid Textual-Visual Syntax?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(560),new cljs.core.Keyword(null,"height","height",1025178622),(315),new cljs.core.Keyword(null,"src","src",-1651076051),"https://www.youtube-nocookie.com/embed/8htgAxJuK5c",new cljs.core.Keyword(null,"title","title",636505583),"Adding Interactive Visual Syntax to Textual Code",new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),(0),new cljs.core.Keyword(null,"allow","allow",-1857325745),"picture-in-picture; web-share; clipboard-write",new cljs.core.Keyword(null,"allowfullscreen","allowfullscreen",-1595290361),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Q: How do I get started?"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Take a look at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://blog.visr.pl/posts/intro/",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"this blog post"], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Q: More advanced topics?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can find more advanced topics on:",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://blog.visr.pl/",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"The VISr Blog"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www2.ccs.neu.edu/racket/pubs/#dissertation-andersen",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"Leif Andersen's Dissertation"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://dl.acm.org/doi/abs/10.1145/3428290",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"This Original Paper"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://study.visr.pl",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"A Small Survey"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Q: How can I participate?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contributions and bug reports welcome on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/LeifAndersen/interactive-syntax-clojure",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"this project's GitHub page"], null),"."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Q: What's new?"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Checkout ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/LeifAndersen/interactive-syntax-clojure/blob/main/CHANGELOG.md",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"the changelog"], null),"."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"This is an early prototype of VISr for ClojureScript."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"If the prototype crashes, you can reset browser's local"," storage to completely reset it."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"This page was built on: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Wed Jan  3 03:15:29 UTC 2024\n"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"This dialog will reappear when new versions are released,"," or you can view it again in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Project > About"], null),"."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),"Get Started!"], null)], null)], null);
});
interactive_syntax.core.import_dialog = (function interactive_syntax$core$import_dialog(p__61592){
var map__61593 = p__61592;
var map__61593__$1 = cljs.core.__destructure_map.call(null,map__61593);
var db = map__61593__$1;
var fs = cljs.core.get.call(null,map__61593__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__61593__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file = reagent.core.atom.call(null,null);
var show_confirm_QMARK_ = reagent.core.atom.call(null,false);
var import$ = (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,file))){
cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

return (function (){var target_obj_61594 = ((function (){var target_obj_61598 = cljs.core.deref.call(null,file);
var _STAR_runtime_state_STAR__orig_val__61601 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61602 = oops.state.prepare_state.call(null,target_obj_61598,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61602);

try{var next_obj_61599 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61598,(0),"target",true,true,false))?(target_obj_61598["target"]):null);
var next_obj_61600 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_61599,(0),"files",true,true,false))?(next_obj_61599["files"]):null);
return next_obj_61600;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61601);
}})()[(0)]);
var _STAR_runtime_state_STAR__orig_val__61603 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61604 = oops.state.prepare_state.call(null,target_obj_61594,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61604);

try{var call_info_61596 = [target_obj_61594,(function (){var next_obj_61597 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61594,(0),"arrayBuffer",true,true,false))?(target_obj_61594["arrayBuffer"]):null);
return next_obj_61597;
})()];
var fn_61595 = (call_info_61596[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_61595,oops.state.get_last_access_modifier.call(null))){
if((!((fn_61595 == null)))){
return fn_61595.call((call_info_61596[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61603);
}})().then((function (r){
return interactive_syntax.fs.import_from_zip.call(null,db,r,(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
}));
})).catch((function (e){
cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
}));
} else {
return null;
}
});
var wipe_PLUS_import = (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,file))){
cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

cljs.core.reset_BANG_.call(null,show_confirm_QMARK_,false);

return (function (){var target_obj_61605 = ((function (){var target_obj_61609 = cljs.core.deref.call(null,file);
var _STAR_runtime_state_STAR__orig_val__61612 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61613 = oops.state.prepare_state.call(null,target_obj_61609,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61613);

try{var next_obj_61610 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61609,(0),"target",true,true,false))?(target_obj_61609["target"]):null);
var next_obj_61611 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_61610,(0),"files",true,true,false))?(next_obj_61610["files"]):null);
return next_obj_61611;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61612);
}})()[(0)]);
var _STAR_runtime_state_STAR__orig_val__61614 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61615 = oops.state.prepare_state.call(null,target_obj_61605,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61615);

try{var call_info_61607 = [target_obj_61605,(function (){var next_obj_61608 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61605,(0),"arrayBuffer",true,true,false))?(target_obj_61605["arrayBuffer"]):null);
return next_obj_61608;
})()];
var fn_61606 = (call_info_61607[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_61606,oops.state.get_last_access_modifier.call(null))){
if((!((fn_61606 == null)))){
return fn_61606.call((call_info_61607[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61614);
}})().then((function (r){
return interactive_syntax.fs.wipe_project_BANG_.call(null,db,(function (){
return interactive_syntax.fs.import_from_zip.call(null,db,r,(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
}));
}));
})).catch((function (e){
cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"error","error",-978969032));
}));
} else {
return null;
}
});
return (function (p__61616){
var map__61617 = p__61616;
var map__61617__$1 = cljs.core.__destructure_map.call(null,map__61617);
var db__$1 = map__61617__$1;
var menu__$1 = cljs.core.get.call(null,map__61617__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu__$1)),new cljs.core.Keyword(null,"import","import",-1399500709)),new cljs.core.Keyword(null,"size","size",1098693007),"x",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),interactive_syntax.strings.IMPORT_PROJECT], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Body,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (x){
x.preventDefault();

return x.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61618 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61620 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61621 = oops.state.prepare_state.call(null,target_obj_61618,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61621);

try{var next_obj_61619 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61618,(0),"Group",true,true,false))?(target_obj_61618["Group"]):null);
return next_obj_61619;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61620);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61622 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61624 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61625 = oops.state.prepare_state.call(null,target_obj_61622,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61625);

try{var next_obj_61623 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61622,(0),"Label",true,true,false))?(target_obj_61622["Label"]):null);
return next_obj_61623;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61624);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visuallyHidden","visuallyHidden",921554248),true], null),interactive_syntax.strings.FILE], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61626 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61628 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61629 = oops.state.prepare_state.call(null,target_obj_61626,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61629);

try{var next_obj_61627 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61626,(0),"Control",true,true,false))?(target_obj_61626["Control"]):null);
return next_obj_61627;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61628);
}})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__61591_SHARP_){
return cljs.core.reset_BANG_.call(null,file,p1__61591_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"d-block d-md-none"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61630 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61632 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61633 = oops.state.prepare_state.call(null,target_obj_61630,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61633);

try{var next_obj_61631 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61630,(0),"Group",true,true,false))?(target_obj_61630["Group"]):null);
return next_obj_61631;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61632);
}})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61634 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61636 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61637 = oops.state.prepare_state.call(null,target_obj_61634,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61637);

try{var next_obj_61635 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61634,(0),"Label",true,true,false))?(target_obj_61634["Label"]):null);
return next_obj_61635;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61636);
}})(),interactive_syntax.strings.IMPORT_PROJECT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"d-grid gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),import$], null),interactive_syntax.strings.MERGE_PROJECT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,show_confirm_QMARK_,true);
}),new cljs.core.Keyword(null,"variant","variant",-424354234),"danger"], null),interactive_syntax.strings.WIPE_PROJECT], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"d-none d-md-block"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61638 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61640 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61641 = oops.state.prepare_state.call(null,target_obj_61638,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61641);

try{var next_obj_61639 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61638,(0),"Group",true,true,false))?(target_obj_61638["Group"]):null);
return next_obj_61639;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61640);
}})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61642 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61644 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61645 = oops.state.prepare_state.call(null,target_obj_61642,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61645);

try{var next_obj_61643 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61642,(0),"Label",true,true,false))?(target_obj_61642["Label"]):null);
return next_obj_61643;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61644);
}})(),interactive_syntax.strings.IMPORT_PROJECT], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"align-items-center flex-nowrap",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),import$], null),interactive_syntax.strings.MERGE_PROJECT], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,show_confirm_QMARK_,true);
}),new cljs.core.Keyword(null,"variant","variant",-424354234),"danger"], null),interactive_syntax.strings.WIPE_PROJECT], null)], null)], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,show_confirm_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Alert,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"danger"], null),interactive_syntax.strings.WARNING_WIPE], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"d-grid gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wipe_PLUS_import], null),interactive_syntax.strings.CONFIRM_WIPE], null)], null)], null):null)], null)], null)], null);
});
});
interactive_syntax.core.confirm_wipe_dialog = (function interactive_syntax$core$confirm_wipe_dialog(p__61646){
var map__61647 = p__61646;
var map__61647__$1 = cljs.core.__destructure_map.call(null,map__61647);
var db = map__61647__$1;
var menu = cljs.core.get.call(null,map__61647__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var wipe = (function (){
cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

return interactive_syntax.fs.wipe_project_BANG_.call(null,db,(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
}));
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"wipe","wipe",2091773807)),new cljs.core.Keyword(null,"size","size",1098693007),"xl",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61648 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61650 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61651 = oops.state.prepare_state.call(null,target_obj_61648,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61651);

try{var next_obj_61649 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61648,(0),"Header",true,true,false))?(target_obj_61648["Header"]):null);
return next_obj_61649;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61650);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.WARNING_WIPE], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61652 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61654 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61655 = oops.state.prepare_state.call(null,target_obj_61652,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61655);

try{var next_obj_61653 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61652,(0),"Body",true,true,false))?(target_obj_61652["Body"]):null);
return next_obj_61653;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61654);
}})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"d-grid gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wipe,new cljs.core.Keyword(null,"variant","variant",-424354234),"danger"], null),interactive_syntax.strings.CONFIRM_WIPE], null)], null)], null)], null);
});
interactive_syntax.core.cancel_update_row = (function interactive_syntax$core$cancel_update_row(cnl,upd){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"align-items-center flex-nowrap",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cnl], null),interactive_syntax.strings.CANCEL], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),upd], null),interactive_syntax.strings.UPDATE], null)], null)], null);
});
interactive_syntax.core.deps_dialog = (function interactive_syntax$core$deps_dialog(p__61659){
var map__61660 = p__61659;
var map__61660__$1 = cljs.core.__destructure_map.call(null,map__61660);
var db = map__61660__$1;
var deps = cljs.core.get.call(null,map__61660__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var menu = cljs.core.get.call(null,map__61660__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var new_deps = reagent.core.atom.call(null,cljs.core.deref.call(null,deps));
cljs.core.add_watch.call(null,deps,new cljs.core.Keyword("interactive-syntax.core","update-new-deps","interactive-syntax.core/update-new-deps",-21154843),(function (k,r,o,n){
if(((cljs.core._EQ_.call(null,o,n)) && (cljs.core._EQ_.call(null,n,cljs.core.deref.call(null,new_deps))))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,new_deps,n);
}
}));

return (function (p__61661){
var map__61662 = p__61661;
var map__61662__$1 = cljs.core.__destructure_map.call(null,map__61662);
var db__$1 = map__61662__$1;
var deps__$1 = cljs.core.get.call(null,map__61662__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var menu__$1 = cljs.core.get.call(null,map__61662__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu__$1)),new cljs.core.Keyword(null,"deps","deps",1883360319)),new cljs.core.Keyword(null,"size","size",1098693007),"xl",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);

return cljs.core.reset_BANG_.call(null,new_deps,cljs.core.deref.call(null,deps__$1));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.DEPENDENCIES], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Body,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (x){
x.preventDefault();

return x.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Table,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"striped","striped",-628686784),true,new cljs.core.Keyword(null,"bordered","bordered",-832486681),true,new cljs.core.Keyword(null,"hover","hover",-341141711),true,new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true,new cljs.core.Keyword(null,"size","size",1098693007),"sm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),interactive_syntax.strings.NAME], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),[interactive_syntax.strings.URL," ",interactive_syntax.strings.OPTIONAL].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),interactive_syntax.strings.LOAD_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__21676__auto__ = (function interactive_syntax$core$deps_dialog_$_iter__61663(s__61664){
return (new cljs.core.LazySeq(null,(function (){
var s__61664__$1 = s__61664;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__61664__$1);
if(temp__5720__auto__){
var s__61664__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__61664__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__61664__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__61666 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__61665 = (0);
while(true){
if((i__61665 < size__21675__auto__)){
var vec__61667 = cljs.core._nth.call(null,c__21674__auto__,i__61665);
var key = cljs.core.nth.call(null,vec__61667,(0),null);
var package$ = cljs.core.nth.call(null,vec__61667,(1),null);
cljs.core.chunk_append.call(null,b__61666,(function (){var on_change = ((function (i__61665,vec__61667,key,package$,c__21674__auto__,size__21675__auto__,b__61666,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu){
return (function (prop){
return ((function (i__61665,vec__61667,key,package$,c__21674__auto__,size__21675__auto__,b__61666,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu){
return (function (p1__61656_SHARP_){
var value = (function (){var target_obj_61670 = p1__61656_SHARP_;
var _STAR_runtime_state_STAR__orig_val__61673 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61674 = oops.state.prepare_state.call(null,target_obj_61670,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61674);

try{var next_obj_61671 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61670,(0),"target",true,true,false))?(target_obj_61670["target"]):null);
var next_obj_61672 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_61671,(0),"value",true,true,false))?(next_obj_61671["value"]):null);
return next_obj_61672;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61673);
}})();
return cljs.core.swap_BANG_.call(null,new_deps,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,prop], null),value);
});
;})(i__61665,vec__61667,key,package$,c__21674__auto__,size__21675__auto__,b__61666,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu))
});})(i__61665,vec__61667,key,package$,c__21674__auto__,size__21675__auto__,b__61666,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61675 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61677 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61678 = oops.state.prepare_state.call(null,target_obj_61675,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61678);

try{var next_obj_61676 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61675,(0),"Control",true,true,false))?(target_obj_61675["Control"]):null);
return next_obj_61676;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61677);
}})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.NAME,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(package$)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61679 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61681 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61682 = oops.state.prepare_state.call(null,target_obj_61679,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61682);

try{var next_obj_61680 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61679,(0),"Control",true,true,false))?(target_obj_61679["Control"]):null);
return next_obj_61680;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61681);
}})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.URL,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(package$)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.Switch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"load?","load?",628806320).cljs$core$IFn$_invoke$arity$1(package$),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__61665,on_change,vec__61667,key,package$,c__21674__auto__,size__21675__auto__,b__61666,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu){
return (function (p1__61657_SHARP_){
return cljs.core.swap_BANG_.call(null,new_deps,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"load?","load?",628806320)], null),p1__61657_SHARP_);
});})(i__61665,on_change,vec__61667,key,package$,c__21674__auto__,size__21675__auto__,b__61666,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61665,on_change,vec__61667,key,package$,c__21674__auto__,size__21675__auto__,b__61666,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu){
return (function (){
return cljs.core.swap_BANG_.call(null,new_deps,cljs.core.dissoc,key);
});})(i__61665,on_change,vec__61667,key,package$,c__21674__auto__,size__21675__auto__,b__61666,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu))
], null),"-"], null)], null)], null);
})());

var G__61699 = (i__61665 + (1));
i__61665 = G__61699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61666),interactive_syntax$core$deps_dialog_$_iter__61663.call(null,cljs.core.chunk_rest.call(null,s__61664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61666),null);
}
} else {
var vec__61683 = cljs.core.first.call(null,s__61664__$2);
var key = cljs.core.nth.call(null,vec__61683,(0),null);
var package$ = cljs.core.nth.call(null,vec__61683,(1),null);
return cljs.core.cons.call(null,(function (){var on_change = ((function (vec__61683,key,package$,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu){
return (function (prop){
return (function (p1__61656_SHARP_){
var value = (function (){var target_obj_61686 = p1__61656_SHARP_;
var _STAR_runtime_state_STAR__orig_val__61689 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61690 = oops.state.prepare_state.call(null,target_obj_61686,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61690);

try{var next_obj_61687 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61686,(0),"target",true,true,false))?(target_obj_61686["target"]):null);
var next_obj_61688 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_61687,(0),"value",true,true,false))?(next_obj_61687["value"]):null);
return next_obj_61688;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61689);
}})();
return cljs.core.swap_BANG_.call(null,new_deps,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,prop], null),value);
});
});})(vec__61683,key,package$,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61691 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61693 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61694 = oops.state.prepare_state.call(null,target_obj_61691,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61694);

try{var next_obj_61692 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61691,(0),"Control",true,true,false))?(target_obj_61691["Control"]):null);
return next_obj_61692;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61693);
}})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.NAME,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(package$)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61695 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61697 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61698 = oops.state.prepare_state.call(null,target_obj_61695,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61698);

try{var next_obj_61696 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61695,(0),"Control",true,true,false))?(target_obj_61695["Control"]):null);
return next_obj_61696;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61697);
}})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.URL,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(package$)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.Switch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"load?","load?",628806320).cljs$core$IFn$_invoke$arity$1(package$),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (on_change,vec__61683,key,package$,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu){
return (function (p1__61657_SHARP_){
return cljs.core.swap_BANG_.call(null,new_deps,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"load?","load?",628806320)], null),p1__61657_SHARP_);
});})(on_change,vec__61683,key,package$,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_change,vec__61683,key,package$,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu){
return (function (){
return cljs.core.swap_BANG_.call(null,new_deps,cljs.core.dissoc,key);
});})(on_change,vec__61683,key,package$,s__61664__$2,temp__5720__auto__,map__61662,map__61662__$1,db__$1,deps__$1,menu__$1,new_deps,map__61660,map__61660__$1,db,deps,menu))
], null),"-"], null)], null)], null);
})(),interactive_syntax$core$deps_dialog_$_iter__61663.call(null,cljs.core.rest.call(null,s__61664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,cljs.core.deref.call(null,new_deps));
})(),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,new_deps,cljs.core.assoc,Date.now(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"version","version",425292698),"",new cljs.core.Keyword(null,"url","url",276297046),"",new cljs.core.Keyword(null,"load?","load?",628806320),true], null));
})], null),"+"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.cancel_update_row,(function (){
cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);

return cljs.core.reset_BANG_.call(null,new_deps,cljs.core.deref.call(null,deps__$1));
}),(function (){
cljs.core.reset_BANG_.call(null,deps__$1,cljs.core.deref.call(null,new_deps));

cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);

cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

return interactive_syntax.utils.cb_thread.call(null,(function (p1__61658_SHARP_){
return interactive_syntax.env.setup_deps.call(null,db__$1,true,p1__61658_SHARP_);
}),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
}));
})], null)], null)], null)], null);
});
});
interactive_syntax.core.pull_dialog = (function interactive_syntax$core$pull_dialog(p__61701){
var map__61702 = p__61701;
var map__61702__$1 = cljs.core.__destructure_map.call(null,map__61702);
var db = map__61702__$1;
var menu = cljs.core.get.call(null,map__61702__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var auth = cljs.core.get.call(null,map__61702__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
var selected = reagent.core.atom.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,auth))));
return (function (p__61703){
var map__61704 = p__61703;
var map__61704__$1 = cljs.core.__destructure_map.call(null,map__61704);
var db__$1 = map__61704__$1;
var menu__$1 = cljs.core.get.call(null,map__61704__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var auth__$1 = cljs.core.get.call(null,map__61704__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu__$1)),new cljs.core.Keyword(null,"pull","pull",-860544805)),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61705 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61707 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61708 = oops.state.prepare_state.call(null,target_obj_61705,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61708);

try{var next_obj_61706 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61705,(0),"Header",true,true,false))?(target_obj_61705["Header"]):null);
return next_obj_61706;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61707);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.GIT_PULL," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small"], null)], null),"(HIGHLY EXPERIMENTAL)"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61709 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61711 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61712 = oops.state.prepare_state.call(null,target_obj_61709,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61712);

try{var next_obj_61710 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61709,(0),"Body",true,true,false))?(target_obj_61709["Body"]):null);
return next_obj_61710;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61711);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Alert,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"danger"], null),interactive_syntax.strings.WARNING_WIPE], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"align-items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,[interactive_syntax.strings.SELECT,":"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.DropdownButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__20754__auto__ = cljs.core.deref.call(null,selected);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.Keyword(null,"variant","variant",-424354234),"secondary"], null)], null),(function (){var iter__21676__auto__ = (function interactive_syntax$core$pull_dialog_$_iter__61713(s__61714){
return (new cljs.core.LazySeq(null,(function (){
var s__61714__$1 = s__61714;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__61714__$1);
if(temp__5720__auto__){
var s__61714__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__61714__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__61714__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__61716 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__61715 = (0);
while(true){
if((i__61715 < size__21675__auto__)){
var vec__61717 = cljs.core._nth.call(null,c__21674__auto__,i__61715);
var name = cljs.core.nth.call(null,vec__61717,(0),null);
var val = cljs.core.nth.call(null,vec__61717,(1),null);
cljs.core.chunk_append.call(null,b__61716,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61720 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61722 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61723 = oops.state.prepare_state.call(null,target_obj_61720,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61723);

try{var next_obj_61721 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61720,(0),"Item",true,true,false))?(target_obj_61720["Item"]):null);
return next_obj_61721;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61722);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61715,vec__61717,name,val,c__21674__auto__,size__21675__auto__,b__61716,s__61714__$2,temp__5720__auto__,map__61704,map__61704__$1,db__$1,menu__$1,auth__$1,selected,map__61702,map__61702__$1,db,menu,auth){
return (function (){
return cljs.core.reset_BANG_.call(null,selected,name);
});})(i__61715,vec__61717,name,val,c__21674__auto__,size__21675__auto__,b__61716,s__61714__$2,temp__5720__auto__,map__61704,map__61704__$1,db__$1,menu__$1,auth__$1,selected,map__61702,map__61702__$1,db,menu,auth))
], null),name], null));

var G__61735 = (i__61715 + (1));
i__61715 = G__61735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61716),interactive_syntax$core$pull_dialog_$_iter__61713.call(null,cljs.core.chunk_rest.call(null,s__61714__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61716),null);
}
} else {
var vec__61724 = cljs.core.first.call(null,s__61714__$2);
var name = cljs.core.nth.call(null,vec__61724,(0),null);
var val = cljs.core.nth.call(null,vec__61724,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61727 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61729 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61730 = oops.state.prepare_state.call(null,target_obj_61727,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61730);

try{var next_obj_61728 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61727,(0),"Item",true,true,false))?(target_obj_61727["Item"]):null);
return next_obj_61728;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61729);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__61724,name,val,s__61714__$2,temp__5720__auto__,map__61704,map__61704__$1,db__$1,menu__$1,auth__$1,selected,map__61702,map__61702__$1,db,menu,auth){
return (function (){
return cljs.core.reset_BANG_.call(null,selected,name);
});})(vec__61724,name,val,s__61714__$2,temp__5720__auto__,map__61704,map__61704__$1,db__$1,menu__$1,auth__$1,selected,map__61702,map__61702__$1,db,menu,auth))
], null),name], null),interactive_syntax$core$pull_dialog_$_iter__61713.call(null,cljs.core.rest.call(null,s__61714__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,cljs.core.deref.call(null,auth__$1));
})())], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61731 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61733 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61734 = oops.state.prepare_state.call(null,target_obj_61731,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61734);

try{var next_obj_61732 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61731,(0),"Footer",true,true,false))?(target_obj_61731["Footer"]):null);
return next_obj_61732;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61733);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interactive_syntax.utils.cb_thread.call(null,new cljs.core.Keyword(null,"do","do",46310725),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));
}),(function (p1__61700_SHARP_){
return interactive_syntax.git.pull.call(null,db__$1,cljs.core.deref.call(null,selected),p1__61700_SHARP_);
}),new cljs.core.Keyword(null,"do","do",46310725),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
}),new cljs.core.Keyword(null,"do","do",46310725),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
}));
})], null),interactive_syntax.strings.PULL], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"secondary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
})], null),interactive_syntax.strings.CANCEL], null)], null)], null);
});
});
interactive_syntax.core.push_dialog = (function interactive_syntax$core$push_dialog(p__61737){
var map__61738 = p__61737;
var map__61738__$1 = cljs.core.__destructure_map.call(null,map__61738);
var db = map__61738__$1;
var menu = cljs.core.get.call(null,map__61738__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var auth = cljs.core.get.call(null,map__61738__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
var selected = reagent.core.atom.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,auth))));
return (function (p__61739){
var map__61740 = p__61739;
var map__61740__$1 = cljs.core.__destructure_map.call(null,map__61740);
var db__$1 = map__61740__$1;
var menu__$1 = cljs.core.get.call(null,map__61740__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var auth__$1 = cljs.core.get.call(null,map__61740__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu__$1)),new cljs.core.Keyword(null,"push","push",799791267)),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61741 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61743 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61744 = oops.state.prepare_state.call(null,target_obj_61741,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61744);

try{var next_obj_61742 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61741,(0),"Header",true,true,false))?(target_obj_61741["Header"]):null);
return next_obj_61742;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61743);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.GIT_PUSH," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small"], null)], null),"(HIGHLY EXPERIMENTAL)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61745 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61747 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61748 = oops.state.prepare_state.call(null,target_obj_61745,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61748);

try{var next_obj_61746 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61745,(0),"Body",true,true,false))?(target_obj_61745["Body"]):null);
return next_obj_61746;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61747);
}})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"align-items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,[interactive_syntax.strings.SELECT,":"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.DropdownButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__20754__auto__ = cljs.core.deref.call(null,selected);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.Keyword(null,"variant","variant",-424354234),"secondary"], null)], null),(function (){var iter__21676__auto__ = (function interactive_syntax$core$push_dialog_$_iter__61749(s__61750){
return (new cljs.core.LazySeq(null,(function (){
var s__61750__$1 = s__61750;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__61750__$1);
if(temp__5720__auto__){
var s__61750__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__61750__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__61750__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__61752 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__61751 = (0);
while(true){
if((i__61751 < size__21675__auto__)){
var vec__61753 = cljs.core._nth.call(null,c__21674__auto__,i__61751);
var name = cljs.core.nth.call(null,vec__61753,(0),null);
var val = cljs.core.nth.call(null,vec__61753,(1),null);
cljs.core.chunk_append.call(null,b__61752,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61756 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61758 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61759 = oops.state.prepare_state.call(null,target_obj_61756,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61759);

try{var next_obj_61757 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61756,(0),"Item",true,true,false))?(target_obj_61756["Item"]):null);
return next_obj_61757;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61758);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61751,vec__61753,name,val,c__21674__auto__,size__21675__auto__,b__61752,s__61750__$2,temp__5720__auto__,map__61740,map__61740__$1,db__$1,menu__$1,auth__$1,selected,map__61738,map__61738__$1,db,menu,auth){
return (function (){
return cljs.core.reset_BANG_.call(null,selected,name);
});})(i__61751,vec__61753,name,val,c__21674__auto__,size__21675__auto__,b__61752,s__61750__$2,temp__5720__auto__,map__61740,map__61740__$1,db__$1,menu__$1,auth__$1,selected,map__61738,map__61738__$1,db,menu,auth))
], null),name], null));

var G__61771 = (i__61751 + (1));
i__61751 = G__61771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61752),interactive_syntax$core$push_dialog_$_iter__61749.call(null,cljs.core.chunk_rest.call(null,s__61750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61752),null);
}
} else {
var vec__61760 = cljs.core.first.call(null,s__61750__$2);
var name = cljs.core.nth.call(null,vec__61760,(0),null);
var val = cljs.core.nth.call(null,vec__61760,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61763 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61765 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61766 = oops.state.prepare_state.call(null,target_obj_61763,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61766);

try{var next_obj_61764 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61763,(0),"Item",true,true,false))?(target_obj_61763["Item"]):null);
return next_obj_61764;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61765);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__61760,name,val,s__61750__$2,temp__5720__auto__,map__61740,map__61740__$1,db__$1,menu__$1,auth__$1,selected,map__61738,map__61738__$1,db,menu,auth){
return (function (){
return cljs.core.reset_BANG_.call(null,selected,name);
});})(vec__61760,name,val,s__61750__$2,temp__5720__auto__,map__61740,map__61740__$1,db__$1,menu__$1,auth__$1,selected,map__61738,map__61738__$1,db,menu,auth))
], null),name], null),interactive_syntax$core$push_dialog_$_iter__61749.call(null,cljs.core.rest.call(null,s__61750__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,cljs.core.deref.call(null,auth__$1));
})())], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61767 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61769 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61770 = oops.state.prepare_state.call(null,target_obj_61767,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61770);

try{var next_obj_61768 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61767,(0),"Footer",true,true,false))?(target_obj_61767["Footer"]):null);
return next_obj_61768;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61769);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return interactive_syntax.utils.cb_thread.call(null,new cljs.core.Keyword(null,"do","do",46310725),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));
}),(function (p1__61736_SHARP_){
return interactive_syntax.git.push.call(null,db__$1,cljs.core.deref.call(null,selected),p1__61736_SHARP_);
}),new cljs.core.Keyword(null,"do","do",46310725),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
}),new cljs.core.Keyword(null,"do","do",46310725),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
}));
})], null),interactive_syntax.strings.PUSH], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"secondary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
})], null),interactive_syntax.strings.CANCEL], null)], null)], null);
});
});
interactive_syntax.core.token_links = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"github","github",567794498),"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",new cljs.core.Keyword(null,"gitlab","gitlab",1595306608),"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html",new cljs.core.Keyword(null,"bitbucket","bitbucket",-2125267290),"https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/"], null);
interactive_syntax.core.auth_dialog = (function interactive_syntax$core$auth_dialog(p__61774){
var map__61775 = p__61774;
var map__61775__$1 = cljs.core.__destructure_map.call(null,map__61775);
var db = map__61775__$1;
var menu = cljs.core.get.call(null,map__61775__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var auth = cljs.core.get.call(null,map__61775__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
var auth__GT_new = (function (p1__61772_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,p1__61772_SHARP_));
});
var new_auth = reagent.core.atom.call(null,auth__GT_new.call(null,cljs.core.deref.call(null,auth)));
cljs.core.add_watch.call(null,auth,new cljs.core.Keyword("interactive-syntax.core","update-new-auth","interactive-syntax.core/update-new-auth",-1377331994),(function (k,r,o,n){
if(((cljs.core._EQ_.call(null,o,n)) && (cljs.core._EQ_.call(null,n,cljs.core.deref.call(null,new_auth))))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,new_auth,auth__GT_new.call(null,n));
}
}));

return (function (p__61776){
var map__61777 = p__61776;
var map__61777__$1 = cljs.core.__destructure_map.call(null,map__61777);
var db__$1 = map__61777__$1;
var menu__$1 = cljs.core.get.call(null,map__61777__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var auth__$1 = cljs.core.get.call(null,map__61777__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu__$1)),new cljs.core.Keyword(null,"auth","auth",1389754926)),new cljs.core.Keyword(null,"size","size",1098693007),"xl",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);

return cljs.core.reset_BANG_.call(null,new_auth,auth__GT_new.call(null,cljs.core.deref.call(null,auth__$1)));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.GIT_AUTH," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small"], null)], null),"(Stored in browser, HIGHLY EXPERIMENTAL)"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (x){
x.preventDefault();

return x.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-dialog","div.auth-dialog",1243396678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".auth-dialog",".auth-dialog",-2070910145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table-responsive",".table-responsive",-1361151075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible"], null)], null)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Table,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"striped","striped",-628686784),true,new cljs.core.Keyword(null,"bordered","bordered",-832486681),true,new cljs.core.Keyword(null,"hover","hover",-341141711),true,new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true,new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"head"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2)], null),interactive_syntax.strings.PROVIDER], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(3)], null),interactive_syntax.strings.TOKEN], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__21676__auto__ = (function interactive_syntax$core$auth_dialog_$_iter__61778(s__61779){
return (new cljs.core.LazySeq(null,(function (){
var s__61779__$1 = s__61779;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__61779__$1);
if(temp__5720__auto__){
var s__61779__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__61779__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__61779__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__61781 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__61780 = (0);
while(true){
if((i__61780 < size__21675__auto__)){
var vec__61782 = cljs.core._nth.call(null,c__21674__auto__,i__61780);
var i = cljs.core.nth.call(null,vec__61782,(0),null);
var map__61785 = cljs.core.nth.call(null,vec__61782,(1),null);
var map__61785__$1 = cljs.core.__destructure_map.call(null,map__61785);
var item = map__61785__$1;
var type = cljs.core.get.call(null,map__61785__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__61785__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var username = cljs.core.get.call(null,map__61785__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var passwd = cljs.core.get.call(null,map__61785__$1,new cljs.core.Keyword(null,"passwd","passwd",-549093859));
cljs.core.chunk_append.call(null,b__61781,(function (){var on_change = ((function (i__61780,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (prop){
return ((function (i__61780,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (p1__61773_SHARP_){
var value = (function (){var target_obj_61786 = p1__61773_SHARP_;
var _STAR_runtime_state_STAR__orig_val__61789 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61790 = oops.state.prepare_state.call(null,target_obj_61786,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61790);

try{var next_obj_61787 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61786,(0),"target",true,true,false))?(target_obj_61786["target"]):null);
var next_obj_61788 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_61787,(0),"value",true,true,false))?(next_obj_61787["value"]):null);
return next_obj_61788;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61789);
}})();
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,prop], null),value);
});
;})(i__61780,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
});})(i__61780,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,i)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.DropdownButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__61791 = cljs.core._EQ_;
var expr__61792 = type;
if(cljs.core.truth_(pred__61791.call(null,new cljs.core.Keyword(null,"github","github",567794498),expr__61792))){
return "GitHub";
} else {
if(cljs.core.truth_(pred__61791.call(null,new cljs.core.Keyword(null,"gitlab","gitlab",1595306608),expr__61792))){
return "GitLab";
} else {
if(cljs.core.truth_(pred__61791.call(null,new cljs.core.Keyword(null,"bitbucket","bitbucket",-2125267290),expr__61792))){
return "BitBucket";
} else {
if(cljs.core.truth_(pred__61791.call(null,new cljs.core.Keyword(null,"passwd","passwd",-549093859),expr__61792))){
return interactive_syntax.strings.OTHER;
} else {
return interactive_syntax.strings.SELECT;
}
}
}
}
})(),new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.Keyword(null,"variant","variant",-424354234),"secondary"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61794 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61796 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61797 = oops.state.prepare_state.call(null,target_obj_61794,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61797);

try{var next_obj_61795 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61794,(0),"Item",true,true,false))?(target_obj_61794["Item"]):null);
return next_obj_61795;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61796);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"github","github",567794498));
});})(i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),"GitHub"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61798 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61800 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61801 = oops.state.prepare_state.call(null,target_obj_61798,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61801);

try{var next_obj_61799 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61798,(0),"Item",true,true,false))?(target_obj_61798["Item"]):null);
return next_obj_61799;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61800);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"gitlab","gitlab",1595306608));
});})(i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),"GitLab"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61802 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61804 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61805 = oops.state.prepare_state.call(null,target_obj_61802,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61805);

try{var next_obj_61803 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61802,(0),"Item",true,true,false))?(target_obj_61802["Item"]):null);
return next_obj_61803;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61804);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"bitbucket","bitbucket",-2125267290));
});})(i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),"Bitbucket"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61806 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61808 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61809 = oops.state.prepare_state.call(null,target_obj_61806,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61809);

try{var next_obj_61807 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61806,(0),"Item",true,true,false))?(target_obj_61806["Item"]):null);
return next_obj_61807;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61808);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"passwd","passwd",-549093859));
});})(i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),interactive_syntax.strings.OTHER], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61810 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61812 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61813 = oops.state.prepare_state.call(null,target_obj_61810,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61813);

try{var next_obj_61811 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61810,(0),"Control",true,true,false))?(target_obj_61810["Control"]):null);
return next_obj_61811;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61812);
}})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.REPO_URL,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"value","value",305978217),name], null)], null)], null),(function (){var pred__61814 = cljs.core.contains_QMARK_;
var expr__61815 = type;
if(cljs.core.truth_(pred__61814.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"github","github",567794498),null], null), null),expr__61815))){
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61817 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61819 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61820 = oops.state.prepare_state.call(null,target_obj_61817,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61820);

try{var next_obj_61818 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61817,(0),"Control",true,true,false))?(target_obj_61817["Control"]):null);
return next_obj_61818;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61819);
}})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.TOKEN,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"passwd","passwd",-549093859)),new cljs.core.Keyword(null,"value","value",305978217),passwd], null)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.get.call(null,interactive_syntax.core.token_links,type),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),interactive_syntax.strings.GET_TOKEN], null)], null),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_(pred__61814.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bitbucket","bitbucket",-2125267290),null,new cljs.core.Keyword(null,"gitlab","gitlab",1595306608),null], null), null),expr__61815))){
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61821 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61823 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61824 = oops.state.prepare_state.call(null,target_obj_61821,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61824);

try{var next_obj_61822 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61821,(0),"Control",true,true,false))?(target_obj_61821["Control"]):null);
return next_obj_61822;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61823);
}})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.USERNAME,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"username","username",1605666410)),new cljs.core.Keyword(null,"value","value",305978217),username], null)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61825 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61827 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61828 = oops.state.prepare_state.call(null,target_obj_61825,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61828);

try{var next_obj_61826 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61825,(0),"Control",true,true,false))?(target_obj_61825["Control"]):null);
return next_obj_61826;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61827);
}})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.PASSWORD,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"passwd","passwd",-549093859)),new cljs.core.Keyword(null,"value","value",305978217),passwd], null)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.get.call(null,interactive_syntax.core.token_links,type),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),interactive_syntax.strings.GET_TOKEN], null)], null),null,(1),null)),(2),null)),(3),null));
} else {
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61829 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61831 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61832 = oops.state.prepare_state.call(null,target_obj_61829,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61832);

try{var next_obj_61830 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61829,(0),"Control",true,true,false))?(target_obj_61829["Control"]):null);
return next_obj_61830;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61831);
}})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.USERNAME,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"username","username",1605666410)),new cljs.core.Keyword(null,"value","value",305978217),username], null)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61833 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61835 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61836 = oops.state.prepare_state.call(null,target_obj_61833,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61836);

try{var next_obj_61834 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61833,(0),"Control",true,true,false))?(target_obj_61833["Control"]):null);
return next_obj_61834;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61835);
}})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.PASSWORD,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"passwd","passwd",-549093859)),new cljs.core.Keyword(null,"value","value",305978217),passwd], null)], null)], null),null,(1),null)),(2),null));
}
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
var na = cljs.core.deref.call(null,new_auth);
return cljs.core.reset_BANG_.call(null,new_auth,cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,na,(0),i),cljs.core.subvec.call(null,na,(i + (1))))));
});})(i__61780,on_change,vec__61782,i,map__61785,map__61785__$1,item,type,name,username,passwd,c__21674__auto__,size__21675__auto__,b__61781,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),"-"], null)], null)], null);
})());

var G__61898 = (i__61780 + (1));
i__61780 = G__61898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61781),interactive_syntax$core$auth_dialog_$_iter__61778.call(null,cljs.core.chunk_rest.call(null,s__61779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61781),null);
}
} else {
var vec__61837 = cljs.core.first.call(null,s__61779__$2);
var i = cljs.core.nth.call(null,vec__61837,(0),null);
var map__61840 = cljs.core.nth.call(null,vec__61837,(1),null);
var map__61840__$1 = cljs.core.__destructure_map.call(null,map__61840);
var item = map__61840__$1;
var type = cljs.core.get.call(null,map__61840__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__61840__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var username = cljs.core.get.call(null,map__61840__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var passwd = cljs.core.get.call(null,map__61840__$1,new cljs.core.Keyword(null,"passwd","passwd",-549093859));
return cljs.core.cons.call(null,(function (){var on_change = ((function (vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (prop){
return (function (p1__61773_SHARP_){
var value = (function (){var target_obj_61841 = p1__61773_SHARP_;
var _STAR_runtime_state_STAR__orig_val__61844 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61845 = oops.state.prepare_state.call(null,target_obj_61841,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61845);

try{var next_obj_61842 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61841,(0),"target",true,true,false))?(target_obj_61841["target"]):null);
var next_obj_61843 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_61842,(0),"value",true,true,false))?(next_obj_61842["value"]):null);
return next_obj_61843;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61844);
}})();
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,prop], null),value);
});
});})(vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,i)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.DropdownButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__61846 = cljs.core._EQ_;
var expr__61847 = type;
if(cljs.core.truth_(pred__61846.call(null,new cljs.core.Keyword(null,"github","github",567794498),expr__61847))){
return "GitHub";
} else {
if(cljs.core.truth_(pred__61846.call(null,new cljs.core.Keyword(null,"gitlab","gitlab",1595306608),expr__61847))){
return "GitLab";
} else {
if(cljs.core.truth_(pred__61846.call(null,new cljs.core.Keyword(null,"bitbucket","bitbucket",-2125267290),expr__61847))){
return "BitBucket";
} else {
if(cljs.core.truth_(pred__61846.call(null,new cljs.core.Keyword(null,"passwd","passwd",-549093859),expr__61847))){
return interactive_syntax.strings.OTHER;
} else {
return interactive_syntax.strings.SELECT;
}
}
}
}
})(),new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.Keyword(null,"variant","variant",-424354234),"secondary"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61849 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61851 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61852 = oops.state.prepare_state.call(null,target_obj_61849,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61852);

try{var next_obj_61850 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61849,(0),"Item",true,true,false))?(target_obj_61849["Item"]):null);
return next_obj_61850;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61851);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"github","github",567794498));
});})(on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),"GitHub"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61853 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61855 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61856 = oops.state.prepare_state.call(null,target_obj_61853,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61856);

try{var next_obj_61854 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61853,(0),"Item",true,true,false))?(target_obj_61853["Item"]):null);
return next_obj_61854;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61855);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"gitlab","gitlab",1595306608));
});})(on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),"GitLab"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61857 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61859 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61860 = oops.state.prepare_state.call(null,target_obj_61857,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61860);

try{var next_obj_61858 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61857,(0),"Item",true,true,false))?(target_obj_61857["Item"]):null);
return next_obj_61858;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61859);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"bitbucket","bitbucket",-2125267290));
});})(on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),"Bitbucket"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61861 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__61863 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61864 = oops.state.prepare_state.call(null,target_obj_61861,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61864);

try{var next_obj_61862 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61861,(0),"Item",true,true,false))?(target_obj_61861["Item"]):null);
return next_obj_61862;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61863);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"passwd","passwd",-549093859));
});})(on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),interactive_syntax.strings.OTHER], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61865 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61867 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61868 = oops.state.prepare_state.call(null,target_obj_61865,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61868);

try{var next_obj_61866 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61865,(0),"Control",true,true,false))?(target_obj_61865["Control"]):null);
return next_obj_61866;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61867);
}})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.REPO_URL,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"value","value",305978217),name], null)], null)], null),(function (){var pred__61869 = cljs.core.contains_QMARK_;
var expr__61870 = type;
if(cljs.core.truth_(pred__61869.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"github","github",567794498),null], null), null),expr__61870))){
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61872 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61874 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61875 = oops.state.prepare_state.call(null,target_obj_61872,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61875);

try{var next_obj_61873 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61872,(0),"Control",true,true,false))?(target_obj_61872["Control"]):null);
return next_obj_61873;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61874);
}})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.TOKEN,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"passwd","passwd",-549093859)),new cljs.core.Keyword(null,"value","value",305978217),passwd], null)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.get.call(null,interactive_syntax.core.token_links,type),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),interactive_syntax.strings.GET_TOKEN], null)], null),null,(1),null)),(2),null));
} else {
if(cljs.core.truth_(pred__61869.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bitbucket","bitbucket",-2125267290),null,new cljs.core.Keyword(null,"gitlab","gitlab",1595306608),null], null), null),expr__61870))){
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61876 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61878 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61879 = oops.state.prepare_state.call(null,target_obj_61876,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61879);

try{var next_obj_61877 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61876,(0),"Control",true,true,false))?(target_obj_61876["Control"]):null);
return next_obj_61877;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61878);
}})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.USERNAME,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"username","username",1605666410)),new cljs.core.Keyword(null,"value","value",305978217),username], null)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61880 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61882 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61883 = oops.state.prepare_state.call(null,target_obj_61880,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61883);

try{var next_obj_61881 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61880,(0),"Control",true,true,false))?(target_obj_61880["Control"]):null);
return next_obj_61881;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61882);
}})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.PASSWORD,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"passwd","passwd",-549093859)),new cljs.core.Keyword(null,"value","value",305978217),passwd], null)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.get.call(null,interactive_syntax.core.token_links,type),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),interactive_syntax.strings.GET_TOKEN], null)], null),null,(1),null)),(2),null)),(3),null));
} else {
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61884 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61886 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61887 = oops.state.prepare_state.call(null,target_obj_61884,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61887);

try{var next_obj_61885 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61884,(0),"Control",true,true,false))?(target_obj_61884["Control"]):null);
return next_obj_61885;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61886);
}})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.USERNAME,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"username","username",1605666410)),new cljs.core.Keyword(null,"value","value",305978217),username], null)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61888 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__61890 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61891 = oops.state.prepare_state.call(null,target_obj_61888,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61891);

try{var next_obj_61889 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61888,(0),"Control",true,true,false))?(target_obj_61888["Control"]):null);
return next_obj_61889;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61890);
}})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),interactive_syntax.strings.PASSWORD,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,new cljs.core.Keyword(null,"passwd","passwd",-549093859)),new cljs.core.Keyword(null,"value","value",305978217),passwd], null)], null)], null),null,(1),null)),(2),null));
}
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth){
return (function (){
var na = cljs.core.deref.call(null,new_auth);
return cljs.core.reset_BANG_.call(null,new_auth,cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,na,(0),i),cljs.core.subvec.call(null,na,(i + (1))))));
});})(on_change,vec__61837,i,map__61840,map__61840__$1,item,type,name,username,passwd,s__61779__$2,temp__5720__auto__,map__61777,map__61777__$1,db__$1,menu__$1,auth__$1,auth__GT_new,new_auth,map__61775,map__61775__$1,db,menu,auth))
], null),"-"], null)], null)], null);
})(),interactive_syntax$core$auth_dialog_$_iter__61778.call(null,cljs.core.rest.call(null,s__61779__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),cljs.core.deref.call(null,new_auth)));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,new_auth,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"passwd","passwd",-549093859),""], null));
})], null),"+"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.cancel_update_row,(function (){
cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);

return cljs.core.reset_BANG_.call(null,new_auth,auth__GT_new.call(null,cljs.core.deref.call(null,auth__$1)));
}),(function (){
cljs.core.reset_BANG_.call(null,auth__$1,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21676__auto__ = (function interactive_syntax$core$auth_dialog_$_iter__61892(s__61893){
return (new cljs.core.LazySeq(null,(function (){
var s__61893__$1 = s__61893;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__61893__$1);
if(temp__5720__auto__){
var s__61893__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__61893__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__61893__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__61895 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__61894 = (0);
while(true){
if((i__61894 < size__21675__auto__)){
var map__61896 = cljs.core._nth.call(null,c__21674__auto__,i__61894);
var map__61896__$1 = cljs.core.__destructure_map.call(null,map__61896);
var entry = map__61896__$1;
var type = cljs.core.get.call(null,map__61896__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__61896__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append.call(null,b__61895,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,entry], null));

var G__61899 = (i__61894 + (1));
i__61894 = G__61899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61895),interactive_syntax$core$auth_dialog_$_iter__61892.call(null,cljs.core.chunk_rest.call(null,s__61893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__61895),null);
}
} else {
var map__61897 = cljs.core.first.call(null,s__61893__$2);
var map__61897__$1 = cljs.core.__destructure_map.call(null,map__61897);
var entry = map__61897__$1;
var type = cljs.core.get.call(null,map__61897__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__61897__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,entry], null),interactive_syntax$core$auth_dialog_$_iter__61892.call(null,cljs.core.rest.call(null,s__61893__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,cljs.core.deref.call(null,new_auth));
})()));

return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
})], null)], null)], null);
});
});
interactive_syntax.core.hold_dialog = (function interactive_syntax$core$hold_dialog(p__61900){
var map__61901 = p__61900;
var map__61901__$1 = cljs.core.__destructure_map.call(null,map__61901);
var db = map__61901__$1;
var menu = cljs.core.get.call(null,map__61901__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"hold","hold",-1621118005)),new cljs.core.Keyword(null,"size","size",1098693007),"xl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61902 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61904 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61905 = oops.state.prepare_state.call(null,target_obj_61902,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61905);

try{var next_obj_61903 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61902,(0),"Body",true,true,false))?(target_obj_61902["Body"]):null);
return next_obj_61903;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61904);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Spinner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animation","animation",-1248293244),"modal",new cljs.core.Keyword(null,"role","role",-736691072),"status"], null),"Processing..."], null)], null)], null);
});
interactive_syntax.core.error_dialog = (function interactive_syntax$core$error_dialog(p__61906){
var map__61907 = p__61906;
var map__61907__$1 = cljs.core.__destructure_map.call(null,map__61907);
var db = map__61907__$1;
var menu = cljs.core.get.call(null,map__61907__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var err = cljs.core.peek.call(null,cljs.core.deref.call(null,menu));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),((cljs.core.coll_QMARK_.call(null,err)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,err),new cljs.core.Keyword(null,"error","error",-978969032)))),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61908 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61910 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61911 = oops.state.prepare_state.call(null,target_obj_61908,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61911);

try{var next_obj_61909 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61908,(0),"Header",true,true,false))?(target_obj_61908["Header"]):null);
return next_obj_61909;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61910);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.ERROR_MESSAGE], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61912 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61914 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61915 = oops.state.prepare_state.call(null,target_obj_61912,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61915);

try{var next_obj_61913 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61912,(0),"Body",true,true,false))?(target_obj_61912["Body"]):null);
return next_obj_61913;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61914);
}})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var and__20748__auto__ = cljs.core.coll_QMARK_.call(null,err);
if(and__20748__auto__){
return cljs.core.second.call(null,err);
} else {
return and__20748__auto__;
}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_61916 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__61918 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61919 = oops.state.prepare_state.call(null,target_obj_61916,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61919);

try{var next_obj_61917 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61916,(0),"Footer",true,true,false))?(target_obj_61916["Footer"]):null);
return next_obj_61917;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61918);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),interactive_syntax.strings.CLOSE], null)], null)], null);
});
interactive_syntax.core.save_buffer = (function interactive_syntax$core$save_buffer(var_args){
var args__22092__auto__ = [];
var len__22082__auto___61952 = arguments.length;
var i__22083__auto___61953 = (0);
while(true){
if((i__22083__auto___61953 < len__22082__auto___61952)){
args__22092__auto__.push((arguments[i__22083__auto___61953]));

var G__61954 = (i__22083__auto___61953 + (1));
i__22083__auto___61953 = G__61954;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.core.save_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.core.save_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (p__61922,p__61923){
var map__61924 = p__61922;
var map__61924__$1 = cljs.core.__destructure_map.call(null,map__61924);
var db = map__61924__$1;
var input = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"input","input",556931961));
var current_folder = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"current-folder","current-folder",1012906650));
var fs = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file_changed = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"file-changed","file-changed",-339390111));
var cursor = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var cm_ref = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"cm-ref","cm-ref",-329099987));
var cache = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var scroll = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779));
var current_file = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var visr_commit_BANG_ = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"visr-commit!","visr-commit!",-859642538));
var vec__61925 = p__61923;
var cb = cljs.core.nth.call(null,vec__61925,(0),null);
var c = cljs.core.deref.call(null,cursor);
var s = cljs.core.deref.call(null,scroll);
cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

if(cljs.core.truth_(cljs.core.deref.call(null,visr_commit_BANG_))){
cljs.core.deref.call(null,visr_commit_BANG_).call(null);
} else {
}

var target_obj_61928 = fs;
var _STAR_runtime_state_STAR__orig_val__61932 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61933 = oops.state.prepare_state.call(null,target_obj_61928,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61933);

try{var call_info_61930 = [target_obj_61928,(function (){var next_obj_61931 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61928,(0),"writeFile",true,true,false))?(target_obj_61928["writeFile"]):null);
return next_obj_61931;
})()];
var fn_61929 = (call_info_61930[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_61929,oops.state.get_last_access_modifier.call(null))){
if((!((fn_61929 == null)))){
return fn_61929.call((call_info_61930[(0)]),path.join(cljs.core.deref.call(null,current_folder),cljs.core.deref.call(null,current_file)),cljs.core.deref.call(null,input),(function (err,res){
interactive_syntax.editor.make_reset_editors_cache.call(null,cache);

cljs.core.reset_BANG_.call(null,file_changed,false);

cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

var temp__5718__auto___61955 = cljs.core.deref.call(null,cm_ref);
if(cljs.core.truth_(temp__5718__auto___61955)){
var cm_61956 = temp__5718__auto___61955;
var target_obj_61934_61957 = (function (){var target_obj_61938 = cm_61956;
var _STAR_runtime_state_STAR__orig_val__61942 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61943 = oops.state.prepare_state.call(null,target_obj_61938,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61943);

try{var call_info_61940 = [target_obj_61938,(function (){var next_obj_61941 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61938,(0),"getDoc",true,true,false))?(target_obj_61938["getDoc"]):null);
return next_obj_61941;
})()];
var fn_61939 = (call_info_61940[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_61939,oops.state.get_last_access_modifier.call(null))){
if((!((fn_61939 == null)))){
return fn_61939.call((call_info_61940[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61942);
}})();
var _STAR_runtime_state_STAR__orig_val__61944_61958 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61945_61959 = oops.state.prepare_state.call(null,target_obj_61934_61957,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61945_61959);

try{var call_info_61936_61960 = [target_obj_61934_61957,(function (){var next_obj_61937 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61934_61957,(0),"setCursor",true,true,false))?(target_obj_61934_61957["setCursor"]):null);
return next_obj_61937;
})()];
var fn_61935_61961 = (call_info_61936_61960[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_61935_61961,oops.state.get_last_access_modifier.call(null))){
if((!((fn_61935_61961 == null)))){
fn_61935_61961.call((call_info_61936_61960[(0)]),c);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61944_61958);
}
var target_obj_61946_61962 = cm_61956;
var _STAR_runtime_state_STAR__orig_val__61950_61963 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61951_61964 = oops.state.prepare_state.call(null,target_obj_61946_61962,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61951_61964);

try{var call_info_61948_61965 = [target_obj_61946_61962,(function (){var next_obj_61949 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61946_61962,(0),"scrollTo",true,true,false))?(target_obj_61946_61962["scrollTo"]):null);
return next_obj_61949;
})()];
var fn_61947_61966 = (call_info_61948_61965[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_61947_61966,oops.state.get_last_access_modifier.call(null))){
if((!((fn_61947_61966 == null)))){
fn_61947_61966.call((call_info_61948_61965[(0)]),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(s));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61950_61963);
}} else {
}

if(cljs.core.truth_(cb)){
return cb.call(null);
} else {
return null;
}
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61932);
}}));

(interactive_syntax.core.save_buffer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.core.save_buffer.cljs$lang$applyTo = (function (seq61920){
var G__61921 = cljs.core.first.call(null,seq61920);
var seq61920__$1 = cljs.core.next.call(null,seq61920);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61921,seq61920__$1);
}));

interactive_syntax.core.load_buffer = (function interactive_syntax$core$load_buffer(var_args){
var args__22092__auto__ = [];
var len__22082__auto___61987 = arguments.length;
var i__22083__auto___61988 = (0);
while(true){
if((i__22083__auto___61988 < len__22082__auto___61987)){
args__22092__auto__.push((arguments[i__22083__auto___61988]));

var G__61989 = (i__22083__auto___61988 + (1));
i__22083__auto___61988 = G__61989;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.core.load_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.core.load_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (p__61969,p__61970){
var map__61971 = p__61969;
var map__61971__$1 = cljs.core.__destructure_map.call(null,map__61971);
var db = map__61971__$1;
var fs = cljs.core.get.call(null,map__61971__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__61971__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var current_folder = cljs.core.get.call(null,map__61971__$1,new cljs.core.Keyword(null,"current-folder","current-folder",1012906650));
var current_file = cljs.core.get.call(null,map__61971__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var input = cljs.core.get.call(null,map__61971__$1,new cljs.core.Keyword(null,"input","input",556931961));
var file_changed = cljs.core.get.call(null,map__61971__$1,new cljs.core.Keyword(null,"file-changed","file-changed",-339390111));
var vec__61972 = p__61970;
var cb = cljs.core.nth.call(null,vec__61972,(0),null);
cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

var target_obj_61975 = fs;
var _STAR_runtime_state_STAR__orig_val__61979 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61980 = oops.state.prepare_state.call(null,target_obj_61975,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61980);

try{var call_info_61977 = [target_obj_61975,(function (){var next_obj_61978 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61975,(0),"readFile",true,true,false))?(target_obj_61975["readFile"]):null);
return next_obj_61978;
})()];
var fn_61976 = (call_info_61977[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_61976,oops.state.get_last_access_modifier.call(null))){
if((!((fn_61976 == null)))){
return fn_61976.call((call_info_61977[(0)]),path.join(cljs.core.deref.call(null,current_folder),cljs.core.deref.call(null,current_file)),(function (err,txt){
cljs.core.reset_BANG_.call(null,input,(function (){var target_obj_61981 = txt;
var _STAR_runtime_state_STAR__orig_val__61985 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__61986 = oops.state.prepare_state.call(null,target_obj_61981,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__61986);

try{var call_info_61983 = [target_obj_61981,(function (){var next_obj_61984 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_61981,(0),"toString",true,true,false))?(target_obj_61981["toString"]):null);
return next_obj_61984;
})()];
var fn_61982 = (call_info_61983[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_61982,oops.state.get_last_access_modifier.call(null))){
if((!((fn_61982 == null)))){
return fn_61982.call((call_info_61983[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61985);
}})());

cljs.core.reset_BANG_.call(null,file_changed,false);

cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

if(cljs.core.truth_(cb)){
return cb.call(null);
} else {
return null;
}
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__61979);
}}));

(interactive_syntax.core.load_buffer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.core.load_buffer.cljs$lang$applyTo = (function (seq61967){
var G__61968 = cljs.core.first.call(null,seq61967);
var seq61967__$1 = cljs.core.next.call(null,seq61967);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61968,seq61967__$1);
}));

interactive_syntax.core.add_resource = (function interactive_syntax$core$add_resource(var_args){
var args__22092__auto__ = [];
var len__22082__auto___62006 = arguments.length;
var i__22083__auto___62007 = (0);
while(true){
if((i__22083__auto___62007 < len__22082__auto___62006)){
args__22092__auto__.push((arguments[i__22083__auto___62007]));

var G__62008 = (i__22083__auto___62007 + (1));
i__22083__auto___62007 = G__62008;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return interactive_syntax.core.add_resource.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(interactive_syntax.core.add_resource.cljs$core$IFn$_invoke$arity$variadic = (function (p__61994,path,res,p__61995){
var map__61996 = p__61994;
var map__61996__$1 = cljs.core.__destructure_map.call(null,map__61996);
var fs = cljs.core.get.call(null,map__61996__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__61996__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var vec__61997 = p__61995;
var cb = cljs.core.nth.call(null,vec__61997,(0),null);
cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

var target_obj_62000 = fs;
var _STAR_runtime_state_STAR__orig_val__62004 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62005 = oops.state.prepare_state.call(null,target_obj_62000,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62005);

try{var call_info_62002 = [target_obj_62000,(function (){var next_obj_62003 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62000,(0),"writeFile",true,true,false))?(target_obj_62000["writeFile"]):null);
return next_obj_62003;
})()];
var fn_62001 = (call_info_62002[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62001,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62001 == null)))){
return fn_62001.call((call_info_62002[(0)]),path,interactive_syntax.db.Buffer.from.call(null,res),(function (err,res__$1){
cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

if(cljs.core.truth_(cb)){
return cb.call(null);
} else {
return null;
}
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62004);
}}));

(interactive_syntax.core.add_resource.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(interactive_syntax.core.add_resource.cljs$lang$applyTo = (function (seq61990){
var G__61991 = cljs.core.first.call(null,seq61990);
var seq61990__$1 = cljs.core.next.call(null,seq61990);
var G__61992 = cljs.core.first.call(null,seq61990__$1);
var seq61990__$2 = cljs.core.next.call(null,seq61990__$1);
var G__61993 = cljs.core.first.call(null,seq61990__$2);
var seq61990__$3 = cljs.core.next.call(null,seq61990__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61991,G__61992,G__61993,seq61990__$3);
}));

interactive_syntax.core.make_control_dialog = (function interactive_syntax$core$make_control_dialog(menu,key,title,confirm,placeholder,action){
var text = reagent.core.atom.call(null,"");
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),(function (){var m = cljs.core.peek.call(null,cljs.core.deref.call(null,menu));
return ((cljs.core._EQ_.call(null,m,key)) || (((cljs.core.coll_QMARK_.call(null,m)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,m),key)))));
})(),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62011 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62013 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62014 = oops.state.prepare_state.call(null,target_obj_62011,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62014);

try{var next_obj_62012 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62011,(0),"Header",true,true,false))?(target_obj_62011["Header"]):null);
return next_obj_62012;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62013);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62015 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62017 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62018 = oops.state.prepare_state.call(null,target_obj_62015,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62018);

try{var next_obj_62016 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62015,(0),"Body",true,true,false))?(target_obj_62015["Body"]):null);
return next_obj_62016;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62017);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (p1__62009_SHARP_){
p1__62009_SHARP_.preventDefault();

p1__62009_SHARP_.stopPropagation();

return confirm.call(null);
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62019 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62021 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62022 = oops.state.prepare_state.call(null,target_obj_62019,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62022);

try{var next_obj_62020 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62019,(0),"Group",true,true,false))?(target_obj_62019["Group"]):null);
return next_obj_62020;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62021);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62023 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62025 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62026 = oops.state.prepare_state.call(null,target_obj_62023,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62026);

try{var next_obj_62024 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62023,(0),"Label",true,true,false))?(target_obj_62023["Label"]):null);
return next_obj_62024;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62025);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visuallyHidden","visuallyHidden",921554248),true], null),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62027 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62029 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62030 = oops.state.prepare_state.call(null,target_obj_62027,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62030);

try{var next_obj_62028 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62027,(0),"Control",true,true,false))?(target_obj_62027["Control"]):null);
return next_obj_62028;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62029);
}})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__62010_SHARP_){
return cljs.core.reset_BANG_.call(null,text,(function (){var target_obj_62031 = p1__62010_SHARP_;
var _STAR_runtime_state_STAR__orig_val__62034 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62035 = oops.state.prepare_state.call(null,target_obj_62031,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62035);

try{var next_obj_62032 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62031,(0),"target",true,true,false))?(target_obj_62031["target"]):null);
var next_obj_62033 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62032,(0),"value",true,true,false))?(next_obj_62032["value"]):null);
return next_obj_62033;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62034);
}})());
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return action.call(null,text);
})], null),confirm], null)], null)], null)], null)], null)], null);
});
});
interactive_syntax.core.new_folder_dialog = (function interactive_syntax$core$new_folder_dialog(p__62036){
var map__62037 = p__62036;
var map__62037__$1 = cljs.core.__destructure_map.call(null,map__62037);
var db = map__62037__$1;
var fs = cljs.core.get.call(null,map__62037__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__62037__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file_browser_folder = cljs.core.get.call(null,map__62037__$1,new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118));
return interactive_syntax.core.make_control_dialog.call(null,menu,new cljs.core.Keyword(null,"new-folder","new-folder",1573761277),interactive_syntax.strings.NEW,interactive_syntax.strings.CREATE,interactive_syntax.strings.FOLDER,(function (text){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,text),"")){
var new_path = path.join(cljs.core.deref.call(null,file_browser_folder),cljs.core.deref.call(null,text).replace("/",""));
cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

var target_obj_62038 = fs;
var _STAR_runtime_state_STAR__orig_val__62042 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62043 = oops.state.prepare_state.call(null,target_obj_62038,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62043);

try{var call_info_62040 = [target_obj_62038,(function (){var next_obj_62041 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62038,(0),"mkdir",true,true,false))?(target_obj_62038["mkdir"]):null);
return next_obj_62041;
})()];
var fn_62039 = (call_info_62040[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62039,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62039 == null)))){
return fn_62039.call((call_info_62040[(0)]),new_path,(function (err){
cljs.core.swap_BANG_.call(null,menu,cljs.core.comp.call(null,cljs.core.pop,cljs.core.pop));

return cljs.core.reset_BANG_.call(null,file_browser_folder,new_path);
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62042);
}} else {
return null;
}
}));
});
interactive_syntax.core.copy_file_dialog = (function interactive_syntax$core$copy_file_dialog(p__62044){
var map__62045 = p__62044;
var map__62045__$1 = cljs.core.__destructure_map.call(null,map__62045);
var db = map__62045__$1;
var fs = cljs.core.get.call(null,map__62045__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__62045__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file_browser_folder = cljs.core.get.call(null,map__62045__$1,new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118));
return interactive_syntax.core.make_control_dialog.call(null,menu,new cljs.core.Keyword(null,"copy-file","copy-file",-993648881),interactive_syntax.strings.COPY,interactive_syntax.strings.COPY,interactive_syntax.strings.NAME,(function (text){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,text),"")){
var new_path = path.join(cljs.core.deref.call(null,file_browser_folder),cljs.core.deref.call(null,text).replace("/",""));
var old_path = path.join(cljs.core.deref.call(null,file_browser_folder),cljs.core.get.call(null,cljs.core.second.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu))),"name"));
cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

return interactive_syntax.fs.copy_path.call(null,fs,old_path,new_path,(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.comp.call(null,cljs.core.pop,cljs.core.pop));
}));
} else {
return null;
}
}));
});
interactive_syntax.core.rename_file_dialog = (function interactive_syntax$core$rename_file_dialog(p__62046){
var map__62047 = p__62046;
var map__62047__$1 = cljs.core.__destructure_map.call(null,map__62047);
var db = map__62047__$1;
var fs = cljs.core.get.call(null,map__62047__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__62047__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file_browser_folder = cljs.core.get.call(null,map__62047__$1,new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118));
return interactive_syntax.core.make_control_dialog.call(null,menu,new cljs.core.Keyword(null,"rename-file","rename-file",-1507579634),interactive_syntax.strings.RENAME,interactive_syntax.strings.RENAME,interactive_syntax.strings.NAME,(function (text){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,text),"")){
var new_path = path.join(cljs.core.deref.call(null,file_browser_folder),cljs.core.deref.call(null,text).replace("/",""));
var old_path = path.join(cljs.core.deref.call(null,file_browser_folder),cljs.core.get.call(null,cljs.core.second.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu))),"name"));
cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));

var target_obj_62048 = fs;
var _STAR_runtime_state_STAR__orig_val__62052 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62053 = oops.state.prepare_state.call(null,target_obj_62048,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62053);

try{var call_info_62050 = [target_obj_62048,(function (){var next_obj_62051 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62048,(0),"rename",true,true,false))?(target_obj_62048["rename"]):null);
return next_obj_62051;
})()];
var fn_62049 = (call_info_62050[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62049,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62049 == null)))){
return fn_62049.call((call_info_62050[(0)]),old_path,new_path,(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.comp.call(null,cljs.core.pop,cljs.core.pop));
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62052);
}} else {
return null;
}
}));
});
interactive_syntax.core.confirm_save_dialog = (function interactive_syntax$core$confirm_save_dialog(p__62057){
var map__62058 = p__62057;
var map__62058__$1 = cljs.core.__destructure_map.call(null,map__62058);
var db = map__62058__$1;
var menu = cljs.core.get.call(null,map__62058__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var current_file = cljs.core.get.call(null,map__62058__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var item = cljs.core.peek.call(null,cljs.core.deref.call(null,menu));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),((cljs.core.coll_QMARK_.call(null,item)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,item),new cljs.core.Keyword(null,"confirm-save","confirm-save",-1591535956)))),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62059 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62061 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62062 = oops.state.prepare_state.call(null,target_obj_62059,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62062);

try{var next_obj_62060 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62059,(0),"Header",true,true,false))?(target_obj_62059["Header"]):null);
return next_obj_62060;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62061);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.UNSAVED_CHANGES], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62063 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62065 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62066 = oops.state.prepare_state.call(null,target_obj_62063,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62066);

try{var next_obj_62064 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62063,(0),"Footer",true,true,false))?(target_obj_62063["Footer"]):null);
return next_obj_62064;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62065);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,current_file))){
return interactive_syntax.utils.cb_thread.call(null,(function (p1__62054_SHARP_){
return interactive_syntax.core.save_buffer.call(null,db,p1__62054_SHARP_);
}),(function (){
return cljs.core.swap_BANG_.call(null,menu,(function (x){
return cljs.core.conj.call(null,cljs.core.pop.call(null,x),cljs.core.second.call(null,item));
}));
}));
} else {
return cljs.core.swap_BANG_.call(null,menu,(function (p1__62055_SHARP_){
return cljs.core.conj.call(null,cljs.core.pop.call(null,p1__62055_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149),cljs.core.second.call(null,item)], null));
}));
}
})], null),interactive_syntax.strings.SAVE], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"secondary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,(function (p1__62056_SHARP_){
return cljs.core.conj.call(null,cljs.core.pop.call(null,p1__62056_SHARP_),cljs.core.second.call(null,item));
}));
})], null),interactive_syntax.strings.CONTINUE_WITHOUT_SAVING], null)], null)], null);
});
interactive_syntax.core.rename_files_acation = interactive_syntax.core.node$module$chonky.defineFileAction(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"rename_files",new cljs.core.Keyword(null,"requiresSelection","requiresSelection",2059863254),true,new cljs.core.Keyword(null,"hotkeys","hotkeys",-1108929898),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ctrl-x"], null),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),interactive_syntax.strings.RENAME_SELECTION,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),true,new cljs.core.Keyword(null,"group","group",582596132),"Actions",new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var target_obj_62067 = interactive_syntax.core.node$module$chonky.ChonkyIconName;
var _STAR_runtime_state_STAR__orig_val__62069 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62070 = oops.state.prepare_state.call(null,target_obj_62067,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62070);

try{var next_obj_62068 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62067,(0),"copy",true,true,false))?(target_obj_62067["copy"]):null);
return next_obj_62068;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62069);
}})(),new cljs.core.Keyword(null,"contextMenu","contextMenu",-566126918),true], null)], null)));
interactive_syntax.core.file_browser = (function interactive_syntax$core$file_browser(var_args){
var args__22092__auto__ = [];
var len__22082__auto___62253 = arguments.length;
var i__22083__auto___62254 = (0);
while(true){
if((i__22083__auto___62254 < len__22082__auto___62253)){
args__22092__auto__.push((arguments[i__22083__auto___62254]));

var G__62255 = (i__22083__auto___62254 + (1));
i__22083__auto___62254 = G__62255;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((4) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((4)),(0),null)):null);
return interactive_syntax.core.file_browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__22093__auto__);
});

(interactive_syntax.core.file_browser.cljs$core$IFn$_invoke$arity$variadic = (function (p__62085,choice_text,style,choice_callback,p__62086){
var map__62087 = p__62085;
var map__62087__$1 = cljs.core.__destructure_map.call(null,map__62087);
var db = map__62087__$1;
var fs = cljs.core.get.call(null,map__62087__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__62087__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var current_file = cljs.core.get.call(null,map__62087__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var file_browser_folder = cljs.core.get.call(null,map__62087__$1,new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118));
var options = cljs.core.get.call(null,map__62087__$1,new cljs.core.Keyword(null,"options","options",99638489));
var vec__62088 = p__62086;
var map__62091 = cljs.core.nth.call(null,vec__62088,(0),null);
var map__62091__$1 = cljs.core.__destructure_map.call(null,map__62091);
var ref = cljs.core.get.call(null,map__62091__$1,new cljs.core.Keyword(null,"file-browser","file-browser",-1518969949));
var list_ref = cljs.core.get.call(null,map__62091__$1,new cljs.core.Keyword(null,"file-browser-list","file-browser-list",1043305980));
var file = reagent.core.atom.call(null,null);
var text = reagent.core.atom.call(null,"");
var selected = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var dir_list = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null));
var populate_dir_list = (function() { 
var G__62256__delegate = function (p__62092){
var vec__62093 = p__62092;
var cb = cljs.core.nth.call(null,vec__62093,(0),null);
var target_obj_62096 = fs;
var _STAR_runtime_state_STAR__orig_val__62100 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62101 = oops.state.prepare_state.call(null,target_obj_62096,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62101);

try{var call_info_62098 = [target_obj_62096,(function (){var next_obj_62099 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62096,(0),"readdir",true,true,false))?(target_obj_62096["readdir"]):null);
return next_obj_62099;
})()];
var fn_62097 = (call_info_62098[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62097,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62097 == null)))){
return fn_62097.call((call_info_62098[(0)]),cljs.core.deref.call(null,file_browser_folder),(function (err,files){
return (function interactive_syntax$core$rec(acc,rst){
if(cljs.core.empty_QMARK_.call(null,rst)){
cljs.core.reset_BANG_.call(null,dir_list,acc);

if(cljs.core.truth_(cb)){
return cb.call(null);
} else {
return null;
}
} else {
return interactive_syntax.fs.file_description.call(null,fs,path.join(cljs.core.deref.call(null,file_browser_folder),cljs.core.first.call(null,rst)),(function (p1__62071_SHARP_){
return interactive_syntax$core$rec.call(null,cljs.core.conj.call(null,acc,p1__62071_SHARP_),cljs.core.rest.call(null,rst));
}));
}
}).call(null,cljs.core.PersistentVector.EMPTY,files);
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62100);
}};
var G__62256 = function (var_args){
var p__62092 = null;
if (arguments.length > 0) {
var G__62257__i = 0, G__62257__a = new Array(arguments.length -  0);
while (G__62257__i < G__62257__a.length) {G__62257__a[G__62257__i] = arguments[G__62257__i + 0]; ++G__62257__i;}
  p__62092 = new cljs.core.IndexedSeq(G__62257__a,0,null);
} 
return G__62256__delegate.call(this,p__62092);};
G__62256.cljs$lang$maxFixedArity = 0;
G__62256.cljs$lang$applyTo = (function (arglist__62258){
var p__62092 = cljs.core.seq(arglist__62258);
return G__62256__delegate(p__62092);
});
G__62256.cljs$core$IFn$_invoke$arity$variadic = G__62256__delegate;
return G__62256;
})()
;
var dir_list__GT_table = (function (lst){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21676__auto__ = (function interactive_syntax$core$iter__62102(s__62103){
return (new cljs.core.LazySeq(null,(function (){
var s__62103__$1 = s__62103;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__62103__$1);
if(temp__5720__auto__){
var s__62103__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62103__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__62103__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__62105 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__62104 = (0);
while(true){
if((i__62104 < size__21675__auto__)){
var i = cljs.core._nth.call(null,c__21674__auto__,i__62104);
if(cljs.core.truth_(i)){
cljs.core.chunk_append.call(null,b__62105,cljs.core.PersistentArrayMap.createAsIfByAssoc([i.id,i]));

var G__62259 = (i__62104 + (1));
i__62104 = G__62259;
continue;
} else {
var G__62260 = (i__62104 + (1));
i__62104 = G__62260;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62105),interactive_syntax$core$iter__62102.call(null,cljs.core.chunk_rest.call(null,s__62103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62105),null);
}
} else {
var i = cljs.core.first.call(null,s__62103__$2);
if(cljs.core.truth_(i)){
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([i.id,i]),interactive_syntax$core$iter__62102.call(null,cljs.core.rest.call(null,s__62103__$2)));
} else {
var G__62261 = cljs.core.rest.call(null,s__62103__$2);
s__62103__$1 = G__62261;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,lst);
})());
});
var confirm_action = (function (){
if(cljs.core.truth_((function (){var pred__62106 = cljs.core._EQ_;
var expr__62107 = style;
if(cljs.core.truth_(pred__62106.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663),expr__62107))){
return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,text),"");
} else {
if(cljs.core.truth_(pred__62106.call(null,new cljs.core.Keyword(null,"upload","upload",-255769218),expr__62107))){
return cljs.core.deref.call(null,file);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__62107)].join('')));
}
}
})())){
return interactive_syntax.utils.cb_thread.call(null,new cljs.core.Keyword(null,"do","do",46310725),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));
}),(function (p1__62072_SHARP_){
return choice_callback.call(null,cljs.core.deref.call(null,text),cljs.core.deref.call(null,file),p1__62072_SHARP_);
}),new cljs.core.Keyword(null,"do","do",46310725),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
}),(function (){
return cljs.core.swap_BANG_.call(null,menu,(function (p1__62073_SHARP_){
var item = cljs.core.peek.call(null,p1__62073_SHARP_);
var rest = cljs.core.pop.call(null,p1__62073_SHARP_);
if(((cljs.core.coll_QMARK_.call(null,item)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,item),(2))))){
return cljs.core.conj.call(null,rest,cljs.core.second.call(null,item));
} else {
return rest;
}
}));
}));
} else {
return null;
}
});
var ref__$1 = (function (){var or__20754__auto__ = ref;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return ({"current": null});
}
})();
if(cljs.core.truth_(list_ref)){
cljs.core.reset_BANG_.call(null,list_ref,dir_list);
} else {
}

cljs.core.add_watch.call(null,file_browser_folder,new cljs.core.Keyword("interactive-syntax.core","folder-change","interactive-syntax.core/folder-change",-1132596980),(function (k,r,o,n){
if(cljs.core.not_EQ_.call(null,o,n)){
return populate_dir_list.call(null);
} else {
return null;
}
}));

populate_dir_list.call(null);

return (function() { 
var G__62262__delegate = function (p__62109,choice_text__$1,style__$1,choice_callback__$1,p__62110){
var map__62111 = p__62109;
var map__62111__$1 = cljs.core.__destructure_map.call(null,map__62111);
var db__$1 = map__62111__$1;
var fs__$1 = cljs.core.get.call(null,map__62111__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu__$1 = cljs.core.get.call(null,map__62111__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var current_file__$1 = cljs.core.get.call(null,map__62111__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var file_browser_folder__$1 = cljs.core.get.call(null,map__62111__$1,new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118));
var options__$1 = cljs.core.get.call(null,map__62111__$1,new cljs.core.Keyword(null,"options","options",99638489));
var vec__62112 = p__62110;
var map__62115 = cljs.core.nth.call(null,vec__62112,(0),null);
var map__62115__$1 = cljs.core.__destructure_map.call(null,map__62115);
var ref__$2 = cljs.core.get.call(null,map__62115__$1,new cljs.core.Keyword(null,"file-browser","file-browser",-1518969949));
var list_ref__$1 = cljs.core.get.call(null,map__62115__$1,new cljs.core.Keyword(null,"file-browser-list","file-browser-list",1043305980));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": "450px"})], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$chonky.FileBrowser,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"disable-drag-and-drop","disable-drag-and-drop",376891698),cljs.core.not.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"enable-drag-and-drop","enable-drag-and-drop",-675808412).cljs$core$IFn$_invoke$arity$1(options__$1))),new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$2,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.deref.call(null,dir_list),new cljs.core.Keyword(null,"folder-chain","folder-chain",-957094676),(function (){var split = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,""),cljs.core.deref.call(null,file_browser_folder__$1).replace(interactive_syntax.db.files_root,"").split(path.sep));
var iter__21676__auto__ = (function interactive_syntax$core$iter__62116(s__62117){
return (new cljs.core.LazySeq(null,(function (){
var s__62117__$1 = s__62117;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__62117__$1);
if(temp__5720__auto__){
var s__62117__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62117__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__62117__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__62119 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__62118 = (0);
while(true){
if((i__62118 < size__21675__auto__)){
var vec__62120 = cljs.core._nth.call(null,c__21674__auto__,i__62118);
var i = cljs.core.nth.call(null,vec__62120,(0),null);
var folder = cljs.core.nth.call(null,vec__62120,(1),null);
cljs.core.chunk_append.call(null,b__62119,({"id": ["folder",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''), "breadCrumb": (cljs.core.count.call(null,split) - i), "isDir": true, "name": folder}));

var G__62263 = (i__62118 + (1));
i__62118 = G__62263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62119),interactive_syntax$core$iter__62116.call(null,cljs.core.chunk_rest.call(null,s__62117__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62119),null);
}
} else {
var vec__62123 = cljs.core.first.call(null,s__62117__$2);
var i = cljs.core.nth.call(null,vec__62123,(0),null);
var folder = cljs.core.nth.call(null,vec__62123,(1),null);
return cljs.core.cons.call(null,({"id": ["folder",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''), "breadCrumb": (cljs.core.count.call(null,split) - i), "isDir": true, "name": folder}),interactive_syntax$core$iter__62116.call(null,cljs.core.rest.call(null,s__62117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),cljs.core.conj.call(null,split," ")));
})(),new cljs.core.Keyword(null,"file-actions","file-actions",-1698338702),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var target_obj_62126 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62128 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62129 = oops.state.prepare_state.call(null,target_obj_62126,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62129);

try{var next_obj_62127 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62126,(0),"CreateFolder",true,true,false))?(target_obj_62126["CreateFolder"]):null);
return next_obj_62127;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62128);
}})(),(function (){var target_obj_62130 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62132 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62133 = oops.state.prepare_state.call(null,target_obj_62130,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62133);

try{var next_obj_62131 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62130,(0),"CopyFiles",true,true,false))?(target_obj_62130["CopyFiles"]):null);
return next_obj_62131;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62132);
}})(),interactive_syntax.core.rename_files_acation,(function (){var target_obj_62134 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62136 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62137 = oops.state.prepare_state.call(null,target_obj_62134,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62137);

try{var next_obj_62135 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62134,(0),"DeleteFiles",true,true,false))?(target_obj_62134["DeleteFiles"]):null);
return next_obj_62135;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62136);
}})()], null),new cljs.core.Keyword(null,"on-file-action","on-file-action",-1818035405),(function (data_js){
var map__62138 = cljs.core.js__GT_clj.call(null,data_js);
var map__62138__$1 = cljs.core.__destructure_map.call(null,map__62138);
var data = map__62138__$1;
var id = cljs.core.get.call(null,map__62138__$1,"id");
var action = cljs.core.get.call(null,map__62138__$1,"action");
var payload = cljs.core.get.call(null,map__62138__$1,"payload");
var state = cljs.core.get.call(null,map__62138__$1,"state");
var begin_transaction = (function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));
});
var end_transaction = (function (){
return populate_dir_list.call(null,(function (){
return cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.pop);
}));
});
var pred__62139_62264 = cljs.core._EQ_;
var expr__62140_62265 = id;
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62142 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62145 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62146 = oops.state.prepare_state.call(null,target_obj_62142,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62146);

try{var next_obj_62143 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62142,(0),"ChangeSelection",true,true,false))?(target_obj_62142["ChangeSelection"]):null);
var next_obj_62144 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62143,(0),"id",true,true,false))?(next_obj_62143["id"]):null);
return next_obj_62144;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62145);
}})(),expr__62140_62265))){
cljs.core.reset_BANG_.call(null,selected,(function (){var dir_tab = dir_list__GT_table.call(null,cljs.core.deref.call(null,dir_list));
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__21676__auto__ = (function interactive_syntax$core$iter__62147(s__62148){
return (new cljs.core.LazySeq(null,(function (){
var s__62148__$1 = s__62148;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__62148__$1);
if(temp__5720__auto__){
var s__62148__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62148__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__62148__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__62150 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__62149 = (0);
while(true){
if((i__62149 < size__21675__auto__)){
var id__$1 = cljs.core._nth.call(null,c__21674__auto__,i__62149);
cljs.core.chunk_append.call(null,b__62150,cljs.core.get.call(null,dir_tab,id__$1));

var G__62266 = (i__62149 + (1));
i__62149 = G__62266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62150),interactive_syntax$core$iter__62147.call(null,cljs.core.chunk_rest.call(null,s__62148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62150),null);
}
} else {
var id__$1 = cljs.core.first.call(null,s__62148__$2);
return cljs.core.cons.call(null,cljs.core.get.call(null,dir_tab,id__$1),interactive_syntax$core$iter__62147.call(null,cljs.core.rest.call(null,s__62148__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,cljs.core.get.call(null,payload,"selection"));
})());
})());
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62151 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62154 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62155 = oops.state.prepare_state.call(null,target_obj_62151,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62155);

try{var next_obj_62152 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62151,(0),"OpenParentFolder",true,true,false))?(target_obj_62151["OpenParentFolder"]):null);
var next_obj_62153 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62152,(0),"id",true,true,false))?(next_obj_62152["id"]):null);
return next_obj_62153;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62154);
}})(),expr__62140_62265))){
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62156 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62159 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62160 = oops.state.prepare_state.call(null,target_obj_62156,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62160);

try{var next_obj_62157 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62156,(0),"StartDragNDrop",true,true,false))?(target_obj_62156["StartDragNDrop"]):null);
var next_obj_62158 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62157,(0),"id",true,true,false))?(next_obj_62157["id"]):null);
return next_obj_62158;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62159);
}})(),expr__62140_62265))){
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62161 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62164 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62165 = oops.state.prepare_state.call(null,target_obj_62161,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62165);

try{var next_obj_62162 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62161,(0),"EndDragNDrop",true,true,false))?(target_obj_62161["EndDragNDrop"]):null);
var next_obj_62163 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62162,(0),"id",true,true,false))?(next_obj_62162["id"]):null);
return next_obj_62163;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62164);
}})(),expr__62140_62265))){
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62166 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62169 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62170 = oops.state.prepare_state.call(null,target_obj_62166,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62170);

try{var next_obj_62167 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62166,(0),"MouseClickFile",true,true,false))?(target_obj_62166["MouseClickFile"]):null);
var next_obj_62168 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62167,(0),"id",true,true,false))?(next_obj_62167["id"]):null);
return next_obj_62168;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62169);
}})(),expr__62140_62265))){
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62171 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62174 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62175 = oops.state.prepare_state.call(null,target_obj_62171,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62175);

try{var next_obj_62172 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62171,(0),"OpenFileContextMenu",true,true,false))?(target_obj_62171["OpenFileContextMenu"]):null);
var next_obj_62173 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62172,(0),"id",true,true,false))?(next_obj_62172["id"]):null);
return next_obj_62173;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62174);
}})(),expr__62140_62265))){
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62176 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62179 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62180 = oops.state.prepare_state.call(null,target_obj_62176,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62180);

try{var next_obj_62177 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62176,(0),"CreateFolder",true,true,false))?(target_obj_62176["CreateFolder"]):null);
var next_obj_62178 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62177,(0),"id",true,true,false))?(next_obj_62177["id"]):null);
return next_obj_62178;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62179);
}})(),expr__62140_62265))){
cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.conj,new cljs.core.Keyword(null,"new-folder","new-folder",1573761277));
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62181 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62184 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62185 = oops.state.prepare_state.call(null,target_obj_62181,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62185);

try{var next_obj_62182 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62181,(0),"OpenFiles",true,true,false))?(target_obj_62181["OpenFiles"]):null);
var next_obj_62183 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62182,(0),"id",true,true,false))?(next_obj_62182["id"]):null);
return next_obj_62183;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62184);
}})(),expr__62140_62265))){
if(cljs.core.truth_(cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["targetFile","breadCrumb"], null)))){
cljs.core.swap_BANG_.call(null,file_browser_folder__$1,(function (p1__62074_SHARP_){
return cljs.core.apply.call(null,path.join,cljs.core.conj.call(null,(function (){var iter__21676__auto__ = (function interactive_syntax$core$iter__62186(s__62187){
return (new cljs.core.LazySeq(null,(function (){
var s__62187__$1 = s__62187;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__62187__$1);
if(temp__5720__auto__){
var s__62187__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62187__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__62187__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__62189 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__62188 = (0);
while(true){
if((i__62188 < size__21675__auto__)){
var i = cljs.core._nth.call(null,c__21674__auto__,i__62188);
cljs.core.chunk_append.call(null,b__62189,"..");

var G__62267 = (i__62188 + (1));
i__62188 = G__62267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62189),interactive_syntax$core$iter__62186.call(null,cljs.core.chunk_rest.call(null,s__62187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62189),null);
}
} else {
var i = cljs.core.first.call(null,s__62187__$2);
return cljs.core.cons.call(null,"..",interactive_syntax$core$iter__62186.call(null,cljs.core.rest.call(null,s__62187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,cljs.core.range.call(null,cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["targetFile","breadCrumb"], null))));
})(),p1__62074_SHARP_));
}));
} else {
if(cljs.core.truth_(cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["targetFile","isDir"], null)))){
cljs.core.swap_BANG_.call(null,file_browser_folder__$1,(function (p1__62075_SHARP_){
return path.join(p1__62075_SHARP_,cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["targetFile","name"], null)));
}));
} else {
cljs.core.reset_BANG_.call(null,text,cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["targetFile","name"], null)));

confirm_action.call(null);

}
}
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62190 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62193 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62194 = oops.state.prepare_state.call(null,target_obj_62190,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62194);

try{var next_obj_62191 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62190,(0),"CopyFiles",true,true,false))?(target_obj_62190["CopyFiles"]):null);
var next_obj_62192 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62191,(0),"id",true,true,false))?(next_obj_62191["id"]):null);
return next_obj_62192;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62193);
}})(),expr__62140_62265))){
var temp__5718__auto___62268 = cljs.core.deref.call(null,selected);
if(cljs.core.truth_(temp__5718__auto___62268)){
var s_62269 = temp__5718__auto___62268;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,s_62269),(1))){
cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy-file","copy-file",-993648881),cljs.core.js__GT_clj.call(null,cljs.core.first.call(null,s_62269))], null));
} else {
}
} else {
}
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,"rename_files",expr__62140_62265))){
var temp__5718__auto___62270 = cljs.core.deref.call(null,selected);
if(cljs.core.truth_(temp__5718__auto___62270)){
var s_62271 = temp__5718__auto___62270;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,s_62271),(1))){
cljs.core.swap_BANG_.call(null,menu__$1,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-file","rename-file",-1507579634),cljs.core.js__GT_clj.call(null,cljs.core.first.call(null,s_62271))], null));
} else {
}
} else {
}
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62195 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62198 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62199 = oops.state.prepare_state.call(null,target_obj_62195,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62199);

try{var next_obj_62196 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62195,(0),"ClearSelection",true,true,false))?(target_obj_62195["ClearSelection"]):null);
var next_obj_62197 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62196,(0),"id",true,true,false))?(next_obj_62196["id"]):null);
return next_obj_62197;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62198);
}})(),expr__62140_62265))){
} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62200 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62203 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62204 = oops.state.prepare_state.call(null,target_obj_62200,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62204);

try{var next_obj_62201 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62200,(0),"MoveFiles",true,true,false))?(target_obj_62200["MoveFiles"]):null);
var next_obj_62202 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62201,(0),"id",true,true,false))?(next_obj_62201["id"]):null);
return next_obj_62202;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62203);
}})(),expr__62140_62265))){
begin_transaction.call(null);

var target_obj_62205_62272 = fs__$1;
var _STAR_runtime_state_STAR__orig_val__62209_62273 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62210_62274 = oops.state.prepare_state.call(null,target_obj_62205_62272,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62210_62274);

try{var call_info_62207_62275 = [target_obj_62205_62272,(function (){var next_obj_62208 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62205_62272,(0),"rename",true,true,false))?(target_obj_62205_62272["rename"]):null);
return next_obj_62208;
})()];
var fn_62206_62276 = (call_info_62207_62275[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62206_62276,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62206_62276 == null)))){
fn_62206_62276.call((call_info_62207_62275[(0)]),path.join(cljs.core.deref.call(null,file_browser_folder__$1),cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draggedFile","name"], null))),(cljs.core.truth_(cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["destination","breadCrumb"], null)))?(function (){var split = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,""),path.relative(interactive_syntax.db.files_root,cljs.core.deref.call(null,file_browser_folder__$1)).split(path.sep));
var total = cljs.core.count.call(null,split);
var crumbs = cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["destination","breadCrumb"], null));
if(cljs.core._EQ_.call(null,total,crumbs)){
return path.join(interactive_syntax.db.files_root,cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draggedFile","name"], null)));
} else {
return path.join(interactive_syntax.db.files_root,cljs.core.apply.call(null,path.join,cljs.core.take.call(null,(total - crumbs),split)),cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draggedFile","name"], null)));
}
})():(cljs.core.truth_(cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["destination","isDir"], null)))?path.join(cljs.core.deref.call(null,file_browser_folder__$1),cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["destination","name"], null)),cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draggedFile","name"], null))):path.join(cljs.core.deref.call(null,file_browser_folder__$1),cljs.core.get_in.call(null,payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["destination","name"], null)))
)),end_transaction);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62209_62273);
}} else {
if(cljs.core.truth_(pred__62139_62264.call(null,(function (){var target_obj_62211 = interactive_syntax.core.node$module$chonky.ChonkyActions;
var _STAR_runtime_state_STAR__orig_val__62214 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62215 = oops.state.prepare_state.call(null,target_obj_62211,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62215);

try{var next_obj_62212 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62211,(0),"DeleteFiles",true,true,false))?(target_obj_62211["DeleteFiles"]):null);
var next_obj_62213 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62212,(0),"id",true,true,false))?(next_obj_62212["id"]):null);
return next_obj_62213;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62214);
}})(),expr__62140_62265))){
begin_transaction.call(null);

(function interactive_syntax$core$rec(files){
if(cljs.core.empty_QMARK_.call(null,files)){
return end_transaction.call(null);
} else {
var f = cljs.core.first.call(null,files);
var name = path.join(cljs.core.deref.call(null,file_browser_folder__$1),cljs.core.get_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name"], null)));
return interactive_syntax.fs.recursive_rm.call(null,fs__$1,name,(function (){
return interactive_syntax$core$rec.call(null,cljs.core.rest.call(null,files));
}));
}
}).call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selectedFilesForAction"], null)));
} else {
console.log(data);
}
}
}
}
}
}
}
}
}
}
}
}
}

return cljs.core.reset_BANG_.call(null,file_browser_folder__$1,cljs.core.deref.call(null,file_browser_folder__$1));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (p1__62076_SHARP_){
p1__62076_SHARP_.preventDefault();

p1__62076_SHARP_.stopPropagation();

return confirm_action.call(null);
})], null),(function (){var pred__62216 = cljs.core._EQ_;
var expr__62217 = style__$1;
if(cljs.core.truth_(pred__62216.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663),expr__62217))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62219 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62221 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62222 = oops.state.prepare_state.call(null,target_obj_62219,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62222);

try{var next_obj_62220 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62219,(0),"Group",true,true,false))?(target_obj_62219["Group"]):null);
return next_obj_62220;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62221);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62223 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62225 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62226 = oops.state.prepare_state.call(null,target_obj_62223,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62226);

try{var next_obj_62224 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62223,(0),"Label",true,true,false))?(target_obj_62223["Label"]):null);
return next_obj_62224;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62225);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),interactive_syntax.strings.FILE], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62227 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62229 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62230 = oops.state.prepare_state.call(null,target_obj_62227,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62230);

try{var next_obj_62228 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62227,(0),"Control",true,true,false))?(target_obj_62227["Control"]):null);
return next_obj_62228;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62229);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__62077_SHARP_){
return cljs.core.reset_BANG_.call(null,text,(function (){var target_obj_62231 = p1__62077_SHARP_;
var _STAR_runtime_state_STAR__orig_val__62234 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62235 = oops.state.prepare_state.call(null,target_obj_62231,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62235);

try{var next_obj_62232 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62231,(0),"target",true,true,false))?(target_obj_62231["target"]):null);
var next_obj_62233 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62232,(0),"value",true,true,false))?(next_obj_62232["value"]):null);
return next_obj_62233;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62234);
}})());
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return confirm_action.call(null);
})], null),choice_text__$1], null)], null)], null);
} else {
if(cljs.core.truth_(pred__62216.call(null,new cljs.core.Keyword(null,"upload","upload",-255769218),expr__62217))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62236 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62238 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62239 = oops.state.prepare_state.call(null,target_obj_62236,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62239);

try{var next_obj_62237 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62236,(0),"Group",true,true,false))?(target_obj_62236["Group"]):null);
return next_obj_62237;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62238);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62240 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62242 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62243 = oops.state.prepare_state.call(null,target_obj_62240,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62243);

try{var next_obj_62241 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62240,(0),"Control",true,true,false))?(target_obj_62240["Control"]):null);
return next_obj_62241;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62242);
}})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__62078_SHARP_){
return cljs.core.reset_BANG_.call(null,file,p1__62078_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62244 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62246 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62247 = oops.state.prepare_state.call(null,target_obj_62244,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62247);

try{var next_obj_62245 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62244,(0),"Control",true,true,false))?(target_obj_62244["Control"]):null);
return next_obj_62245;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62246);
}})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),[interactive_syntax.strings.NAME," ",interactive_syntax.strings.OPTIONAL].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__62079_SHARP_){
return cljs.core.reset_BANG_.call(null,text,(function (){var target_obj_62248 = p1__62079_SHARP_;
var _STAR_runtime_state_STAR__orig_val__62251 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62252 = oops.state.prepare_state.call(null,target_obj_62248,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62252);

try{var next_obj_62249 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62248,(0),"target",true,true,false))?(target_obj_62248["target"]):null);
var next_obj_62250 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62249,(0),"value",true,true,false))?(next_obj_62249["value"]):null);
return next_obj_62250;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62251);
}})());
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return confirm_action.call(null);
})], null),choice_text__$1], null)], null)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__62217)].join('')));
}
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$chonky.FileNavbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$chonky.FileToolbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$chonky.FileList], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$chonky.FileContextMenu], null)], null)], null);
};
var G__62262 = function (p__62109,choice_text__$1,style__$1,choice_callback__$1,var_args){
var p__62110 = null;
if (arguments.length > 4) {
var G__62277__i = 0, G__62277__a = new Array(arguments.length -  4);
while (G__62277__i < G__62277__a.length) {G__62277__a[G__62277__i] = arguments[G__62277__i + 4]; ++G__62277__i;}
  p__62110 = new cljs.core.IndexedSeq(G__62277__a,0,null);
} 
return G__62262__delegate.call(this,p__62109,choice_text__$1,style__$1,choice_callback__$1,p__62110);};
G__62262.cljs$lang$maxFixedArity = 4;
G__62262.cljs$lang$applyTo = (function (arglist__62278){
var p__62109 = cljs.core.first(arglist__62278);
arglist__62278 = cljs.core.next(arglist__62278);
var choice_text__$1 = cljs.core.first(arglist__62278);
arglist__62278 = cljs.core.next(arglist__62278);
var style__$1 = cljs.core.first(arglist__62278);
arglist__62278 = cljs.core.next(arglist__62278);
var choice_callback__$1 = cljs.core.first(arglist__62278);
var p__62110 = cljs.core.rest(arglist__62278);
return G__62262__delegate(p__62109,choice_text__$1,style__$1,choice_callback__$1,p__62110);
});
G__62262.cljs$core$IFn$_invoke$arity$variadic = G__62262__delegate;
return G__62262;
})()
;
}));

(interactive_syntax.core.file_browser.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(interactive_syntax.core.file_browser.cljs$lang$applyTo = (function (seq62080){
var G__62081 = cljs.core.first.call(null,seq62080);
var seq62080__$1 = cljs.core.next.call(null,seq62080);
var G__62082 = cljs.core.first.call(null,seq62080__$1);
var seq62080__$2 = cljs.core.next.call(null,seq62080__$1);
var G__62083 = cljs.core.first.call(null,seq62080__$2);
var seq62080__$3 = cljs.core.next.call(null,seq62080__$2);
var G__62084 = cljs.core.first.call(null,seq62080__$3);
var seq62080__$4 = cljs.core.next.call(null,seq62080__$3);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62081,G__62082,G__62083,G__62084,seq62080__$4);
}));

interactive_syntax.core.add_resource_dialog = (function interactive_syntax$core$add_resource_dialog(var_args){
var args__22092__auto__ = [];
var len__22082__auto___62309 = arguments.length;
var i__22083__auto___62310 = (0);
while(true){
if((i__22083__auto___62310 < len__22082__auto___62309)){
args__22092__auto__.push((arguments[i__22083__auto___62310]));

var G__62311 = (i__22083__auto___62310 + (1));
i__22083__auto___62310 = G__62311;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.core.add_resource_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.core.add_resource_dialog.cljs$core$IFn$_invoke$arity$variadic = (function (p__62283,p__62284){
var map__62285 = p__62283;
var map__62285__$1 = cljs.core.__destructure_map.call(null,map__62285);
var db = map__62285__$1;
var menu = cljs.core.get.call(null,map__62285__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file_browser_folder = cljs.core.get.call(null,map__62285__$1,new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118));
var vec__62286 = p__62284;
var map__62289 = cljs.core.nth.call(null,vec__62286,(0),null);
var map__62289__$1 = cljs.core.__destructure_map.call(null,map__62289);
var fb_ref = cljs.core.get.call(null,map__62289__$1,new cljs.core.Keyword(null,"add-resource-file-browser","add-resource-file-browser",-468926085));
var fb_list_ref = cljs.core.get.call(null,map__62289__$1,new cljs.core.Keyword(null,"add-resource-file-browser-list","add-resource-file-browser-list",-1099600379));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"add-resource","add-resource",2132885707)),new cljs.core.Keyword(null,"size","size",1098693007),"xl",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62290 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62292 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62293 = oops.state.prepare_state.call(null,target_obj_62290,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62293);

try{var next_obj_62291 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62290,(0),"Header",true,true,false))?(target_obj_62290["Header"]):null);
return next_obj_62291;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62292);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.ADD_RESOURCE], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.file_browser,db,interactive_syntax.strings.ADD_lower,new cljs.core.Keyword(null,"upload","upload",-255769218),(function (optname,files,cb){
return interactive_syntax.utils.cb_loop.call(null,(function (){var target_obj_62294 = files;
var _STAR_runtime_state_STAR__orig_val__62297 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62298 = oops.state.prepare_state.call(null,target_obj_62294,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62298);

try{var next_obj_62295 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62294,(0),"target",true,true,false))?(target_obj_62294["target"]):null);
var next_obj_62296 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62295,(0),"files",true,true,false))?(next_obj_62295["files"]):null);
return next_obj_62296;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62297);
}})(),(function (p1__62280_SHARP_,p2__62279_SHARP_){
var name = ((cljs.core._EQ_.call(null,optname,""))?(function (){var target_obj_62299 = p2__62279_SHARP_;
var _STAR_runtime_state_STAR__orig_val__62301 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62302 = oops.state.prepare_state.call(null,target_obj_62299,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62302);

try{var next_obj_62300 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62299,(0),"name",true,true,false))?(target_obj_62299["name"]):null);
return next_obj_62300;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62301);
}})():optname);
return (function (){var target_obj_62303 = p2__62279_SHARP_;
var _STAR_runtime_state_STAR__orig_val__62307 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62308 = oops.state.prepare_state.call(null,target_obj_62303,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62308);

try{var call_info_62305 = [target_obj_62303,(function (){var next_obj_62306 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62303,(0),"arrayBuffer",true,true,false))?(target_obj_62303["arrayBuffer"]):null);
return next_obj_62306;
})()];
var fn_62304 = (call_info_62305[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62304,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62304 == null)))){
return fn_62304.call((call_info_62305[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62307);
}})().then((function (v){
return interactive_syntax.core.add_resource.call(null,db,path.join(cljs.core.deref.call(null,file_browser_folder),name),v,p1__62280_SHARP_);
})).catch(console.error);
}),cb);
})], null)], null);
}));

(interactive_syntax.core.add_resource_dialog.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.core.add_resource_dialog.cljs$lang$applyTo = (function (seq62281){
var G__62282 = cljs.core.first.call(null,seq62281);
var seq62281__$1 = cljs.core.next.call(null,seq62281);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62282,seq62281__$1);
}));

interactive_syntax.core.save_dialog = (function interactive_syntax$core$save_dialog(var_args){
var args__22092__auto__ = [];
var len__22082__auto___62325 = arguments.length;
var i__22083__auto___62326 = (0);
while(true){
if((i__22083__auto___62326 < len__22082__auto___62325)){
args__22092__auto__.push((arguments[i__22083__auto___62326]));

var G__62327 = (i__22083__auto___62326 + (1));
i__22083__auto___62326 = G__62327;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.core.save_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.core.save_dialog.cljs$core$IFn$_invoke$arity$variadic = (function (p__62314,p__62315){
var map__62316 = p__62314;
var map__62316__$1 = cljs.core.__destructure_map.call(null,map__62316);
var db = map__62316__$1;
var menu = cljs.core.get.call(null,map__62316__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file_browser_folder = cljs.core.get.call(null,map__62316__$1,new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118));
var current_folder = cljs.core.get.call(null,map__62316__$1,new cljs.core.Keyword(null,"current-folder","current-folder",1012906650));
var current_file = cljs.core.get.call(null,map__62316__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var vec__62317 = p__62315;
var map__62320 = cljs.core.nth.call(null,vec__62317,(0),null);
var map__62320__$1 = cljs.core.__destructure_map.call(null,map__62320);
var fb_ref = cljs.core.get.call(null,map__62320__$1,new cljs.core.Keyword(null,"save-file-browser","save-file-browser",2045345611));
var fb_list_ref = cljs.core.get.call(null,map__62320__$1,new cljs.core.Keyword(null,"save-file-browser-list","save-file-browser-list",1807372317));
var item = cljs.core.peek.call(null,cljs.core.deref.call(null,menu));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),((cljs.core.coll_QMARK_.call(null,item)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,item),new cljs.core.Keyword(null,"save","save",1850079149)))),new cljs.core.Keyword(null,"size","size",1098693007),"xl",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62321 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62323 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62324 = oops.state.prepare_state.call(null,target_obj_62321,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62324);

try{var next_obj_62322 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62321,(0),"Header",true,true,false))?(target_obj_62321["Header"]):null);
return next_obj_62322;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62323);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.SAVE], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.file_browser,db,interactive_syntax.strings.SAVE,new cljs.core.Keyword(null,"simple","simple",-581868663),(function (file,_,cb){
cljs.core.reset_BANG_.call(null,current_folder,cljs.core.deref.call(null,file_browser_folder));

cljs.core.reset_BANG_.call(null,current_file,file);

return interactive_syntax.core.save_buffer.call(null,db,cb);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-browser","file-browser",-1518969949),fb_ref,new cljs.core.Keyword(null,"file-browser-list","file-browser-list",1043305980),fb_list_ref], null)], null)], null);
}));

(interactive_syntax.core.save_dialog.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.core.save_dialog.cljs$lang$applyTo = (function (seq62312){
var G__62313 = cljs.core.first.call(null,seq62312);
var seq62312__$1 = cljs.core.next.call(null,seq62312);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62313,seq62312__$1);
}));

interactive_syntax.core.load_dialog = (function interactive_syntax$core$load_dialog(var_args){
var args__22092__auto__ = [];
var len__22082__auto___62345 = arguments.length;
var i__22083__auto___62346 = (0);
while(true){
if((i__22083__auto___62346 < len__22082__auto___62345)){
args__22092__auto__.push((arguments[i__22083__auto___62346]));

var G__62347 = (i__22083__auto___62346 + (1));
i__22083__auto___62346 = G__62347;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.core.load_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.core.load_dialog.cljs$core$IFn$_invoke$arity$variadic = (function (p__62330,p__62331){
var map__62332 = p__62330;
var map__62332__$1 = cljs.core.__destructure_map.call(null,map__62332);
var db = map__62332__$1;
var menu = cljs.core.get.call(null,map__62332__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file_browser_folder = cljs.core.get.call(null,map__62332__$1,new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118));
var current_folder = cljs.core.get.call(null,map__62332__$1,new cljs.core.Keyword(null,"current-folder","current-folder",1012906650));
var current_file = cljs.core.get.call(null,map__62332__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var vec__62333 = p__62331;
var map__62336 = cljs.core.nth.call(null,vec__62333,(0),null);
var map__62336__$1 = cljs.core.__destructure_map.call(null,map__62336);
var fb_ref = cljs.core.get.call(null,map__62336__$1,new cljs.core.Keyword(null,"load-file-browser","load-file-browser",200000630));
var fb_list_ref = cljs.core.get.call(null,map__62336__$1,new cljs.core.Keyword(null,"load-file-browser-list","load-file-browser-list",899978004));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"load","load",-1318641184)),new cljs.core.Keyword(null,"size","size",1098693007),"xl",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62337 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62339 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62340 = oops.state.prepare_state.call(null,target_obj_62337,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62340);

try{var next_obj_62338 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62337,(0),"Header",true,true,false))?(target_obj_62337["Header"]):null);
return next_obj_62338;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62339);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.LOAD], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62341 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62343 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62344 = oops.state.prepare_state.call(null,target_obj_62341,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62344);

try{var next_obj_62342 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62341,(0),"Body",true,true,false))?(target_obj_62341["Body"]):null);
return next_obj_62342;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62343);
}})(),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.file_browser,db,interactive_syntax.strings.LOAD,new cljs.core.Keyword(null,"simple","simple",-581868663),(function (file,_,cb){
cljs.core.reset_BANG_.call(null,current_folder,cljs.core.deref.call(null,file_browser_folder));

cljs.core.reset_BANG_.call(null,current_file,file);

return interactive_syntax.core.load_buffer.call(null,db,cb);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-browser","file-browser",-1518969949),fb_ref,new cljs.core.Keyword(null,"file-browser-list","file-browser-list",1043305980),fb_list_ref], null)], null)], null)], null);
}));

(interactive_syntax.core.load_dialog.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.core.load_dialog.cljs$lang$applyTo = (function (seq62328){
var G__62329 = cljs.core.first.call(null,seq62328);
var seq62328__$1 = cljs.core.next.call(null,seq62328);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62329,seq62328__$1);
}));

interactive_syntax.core.new_file_action = (function interactive_syntax$core$new_file_action(p__62348){
var map__62349 = p__62348;
var map__62349__$1 = cljs.core.__destructure_map.call(null,map__62349);
var db = map__62349__$1;
var menu = cljs.core.get.call(null,map__62349__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var current_file = cljs.core.get.call(null,map__62349__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var input = cljs.core.get.call(null,map__62349__$1,new cljs.core.Keyword(null,"input","input",556931961));
var file_changed = cljs.core.get.call(null,map__62349__$1,new cljs.core.Keyword(null,"file-changed","file-changed",-339390111));
if(cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"new","new",-2085437848))){
cljs.core.reset_BANG_.call(null,input,"");

cljs.core.reset_BANG_.call(null,current_file,null);

cljs.core.reset_BANG_.call(null,file_changed,false);

cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
} else {
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
interactive_syntax.core.option_button = (function interactive_syntax$core$option_button(option,type,display){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,option),type))?"primary":"secondary"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,option,type);
})], null),display], null);
});
interactive_syntax.core.options_dialog = (function interactive_syntax$core$options_dialog(p__62356){
var map__62357 = p__62356;
var map__62357__$1 = cljs.core.__destructure_map.call(null,map__62357);
var map__62358 = cljs.core.get.call(null,map__62357__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__62358__$1 = cljs.core.__destructure_map.call(null,map__62358);
var autocomplete = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913));
var tab_behavior = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"tab-behavior","tab-behavior",-301810914));
var show_editors = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"show-editors","show-editors",-2067467327));
var insert_close = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"insert-close","insert-close",-19537789));
var font_size = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var orientation = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var keymap = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"keymap","keymap",-499605268));
var sandbox = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402));
var theme = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var run_functions = cljs.core.get.call(null,map__62358__$1,new cljs.core.Keyword(null,"run-functions","run-functions",2017743505));
var menu = cljs.core.get.call(null,map__62357__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"options","options",99638489)),new cljs.core.Keyword(null,"size","size",1098693007),"lg",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62359 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62361 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62362 = oops.state.prepare_state.call(null,target_obj_62359,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62362);

try{var next_obj_62360 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62359,(0),"Header",true,true,false))?(target_obj_62359["Header"]):null);
return next_obj_62360;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62361);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),interactive_syntax.strings.OPTIONS_MENU], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62363 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62365 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62366 = oops.state.prepare_state.call(null,target_obj_62363,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62366);

try{var next_obj_62364 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62363,(0),"Body",true,true,false))?(target_obj_62363["Body"]):null);
return next_obj_62364;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62365);
}})(),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (p1__62350_SHARP_){
p1__62350_SHARP_.preventDefault();

return p1__62350_SHARP_.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62367 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62369 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62370 = oops.state.prepare_state.call(null,target_obj_62367,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62370);

try{var next_obj_62368 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62367,(0),"Group",true,true,false))?(target_obj_62367["Group"]):null);
return next_obj_62368;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62369);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62371 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62373 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62374 = oops.state.prepare_state.call(null,target_obj_62371,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62374);

try{var next_obj_62372 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62371,(0),"Label",true,true,false))?(target_obj_62371["Label"]):null);
return next_obj_62372;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62373);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[interactive_syntax.strings.VISUAL_EDITORS,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.Switch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,show_editors),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__62351_SHARP_){
return cljs.core.reset_BANG_.call(null,show_editors,p1__62351_SHARP_);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62375 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62377 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62378 = oops.state.prepare_state.call(null,target_obj_62375,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62378);

try{var next_obj_62376 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62375,(0),"Group",true,true,false))?(target_obj_62375["Group"]):null);
return next_obj_62376;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62377);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62379 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62381 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62382 = oops.state.prepare_state.call(null,target_obj_62379,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62382);

try{var next_obj_62380 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62379,(0),"Label",true,true,false))?(target_obj_62379["Label"]):null);
return next_obj_62380;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62381);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[interactive_syntax.strings.SPLIT,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.SPLIT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,orientation,"horizontal",interactive_syntax.strings.HORIZONTAL], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,orientation,"vertical",interactive_syntax.strings.VERTICAL], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62383 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62385 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62386 = oops.state.prepare_state.call(null,target_obj_62383,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62386);

try{var next_obj_62384 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62383,(0),"Group",true,true,false))?(target_obj_62383["Group"]):null);
return next_obj_62384;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62385);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62387 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62389 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62390 = oops.state.prepare_state.call(null,target_obj_62387,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62390);

try{var next_obj_62388 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62387,(0),"Label",true,true,false))?(target_obj_62387["Label"]):null);
return next_obj_62388;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62389);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[interactive_syntax.strings.KEYMAP,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.KEYMAP], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,keymap,false,"Default"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,keymap,"vim","Vim"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,keymap,"emacs","Emacs"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,keymap,"sublime","Sublime"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62391 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62393 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62394 = oops.state.prepare_state.call(null,target_obj_62391,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62394);

try{var next_obj_62392 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62391,(0),"Group",true,true,false))?(target_obj_62391["Group"]):null);
return next_obj_62392;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62393);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62395 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62397 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62398 = oops.state.prepare_state.call(null,target_obj_62395,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62398);

try{var next_obj_62396 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62395,(0),"Label",true,true,false))?(target_obj_62395["Label"]):null);
return next_obj_62396;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62397);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[interactive_syntax.strings.TAB_BEHAVIOR,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.KEYMAP], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,tab_behavior,"tab",interactive_syntax.strings.INSERT_TAB], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,tab_behavior,"indent",interactive_syntax.strings.INDENT_LINE], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,tab_behavior,"auto",interactive_syntax.strings.AUTO_INDENT], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62399 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62401 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62402 = oops.state.prepare_state.call(null,target_obj_62399,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62402);

try{var next_obj_62400 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62399,(0),"Group",true,true,false))?(target_obj_62399["Group"]):null);
return next_obj_62400;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62401);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62403 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62405 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62406 = oops.state.prepare_state.call(null,target_obj_62403,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62406);

try{var next_obj_62404 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62403,(0),"Label",true,true,false))?(target_obj_62403["Label"]):null);
return next_obj_62404;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62405);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[interactive_syntax.strings.FONT_SIZE,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,font_size,cljs.core.dec);
})], null),"-"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62407 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62409 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62410 = oops.state.prepare_state.call(null,target_obj_62407,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62410);

try{var next_obj_62408 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62407,(0),"Control",true,true,false))?(target_obj_62407["Control"]):null);
return next_obj_62408;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62409);
}})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__62352_SHARP_){
var value = parseInt((function (){var target_obj_62411 = p1__62352_SHARP_;
var _STAR_runtime_state_STAR__orig_val__62414 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62415 = oops.state.prepare_state.call(null,target_obj_62411,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62415);

try{var next_obj_62412 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62411,(0),"target",true,true,false))?(target_obj_62411["target"]):null);
var next_obj_62413 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_62412,(0),"value",true,true,false))?(next_obj_62412["value"]):null);
return next_obj_62413;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62414);
}})());
if(cljs.core.truth_(isNaN(value))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,font_size,(function (){var x__21111__auto__ = (1);
var y__21112__auto__ = value;
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})());
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,font_size)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,font_size,cljs.core.inc);
})], null),"+"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62416 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62418 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62419 = oops.state.prepare_state.call(null,target_obj_62416,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62419);

try{var next_obj_62417 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62416,(0),"Group",true,true,false))?(target_obj_62416["Group"]):null);
return next_obj_62417;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62418);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62420 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62422 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62423 = oops.state.prepare_state.call(null,target_obj_62420,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62423);

try{var next_obj_62421 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62420,(0),"Label",true,true,false))?(target_obj_62420["Label"]):null);
return next_obj_62421;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62422);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[interactive_syntax.strings.THEME,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.THEME], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,theme,"neat",interactive_syntax.strings.LIGHT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,theme,"material",interactive_syntax.strings.DARK], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62424 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62426 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62427 = oops.state.prepare_state.call(null,target_obj_62424,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62427);

try{var next_obj_62425 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62424,(0),"Group",true,true,false))?(target_obj_62424["Group"]):null);
return next_obj_62425;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62426);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62428 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62430 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62431 = oops.state.prepare_state.call(null,target_obj_62428,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62431);

try{var next_obj_62429 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62428,(0),"Label",true,true,false))?(target_obj_62428["Label"]):null);
return next_obj_62429;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62430);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[interactive_syntax.strings.AUTOCOMPLETE,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.AUTOCOMPLETE], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,autocomplete,"auto",interactive_syntax.strings.CONTINUOUSLY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.option_button,autocomplete,"manual",interactive_syntax.strings.CTRL_SPACE], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62432 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62434 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62435 = oops.state.prepare_state.call(null,target_obj_62432,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62435);

try{var next_obj_62433 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62432,(0),"Group",true,true,false))?(target_obj_62432["Group"]):null);
return next_obj_62433;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62434);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62436 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62438 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62439 = oops.state.prepare_state.call(null,target_obj_62436,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62439);

try{var next_obj_62437 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62436,(0),"Label",true,true,false))?(target_obj_62436["Label"]):null);
return next_obj_62437;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62438);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[interactive_syntax.strings.INSERT_CLOSE_PARENTHESES,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.Switch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,insert_close),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__62353_SHARP_){
return cljs.core.reset_BANG_.call(null,insert_close,p1__62353_SHARP_);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62440 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62442 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62443 = oops.state.prepare_state.call(null,target_obj_62440,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62443);

try{var next_obj_62441 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62440,(0),"Group",true,true,false))?(target_obj_62440["Group"]):null);
return next_obj_62441;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62442);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62444 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62446 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62447 = oops.state.prepare_state.call(null,target_obj_62444,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62447);

try{var next_obj_62445 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62444,(0),"Label",true,true,false))?(target_obj_62444["Label"]):null);
return next_obj_62445;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62446);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[interactive_syntax.strings.RUN_MAIN,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.Switch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,cljs.core.deref.call(null,run_functions),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main"], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__62354_SHARP_){
return cljs.core.reset_BANG_.call(null,run_functions,(cljs.core.truth_(p1__62354_SHARP_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main"], null):cljs.core.PersistentVector.EMPTY));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62448 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62450 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62451 = oops.state.prepare_state.call(null,target_obj_62448,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62451);

try{var next_obj_62449 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62448,(0),"Group",true,true,false))?(target_obj_62448["Group"]):null);
return next_obj_62449;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62450);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.Row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62452 = interactive_syntax.core.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__62454 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62455 = oops.state.prepare_state.call(null,target_obj_62452,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62455);

try{var next_obj_62453 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62452,(0),"Label",true,true,false))?(target_obj_62452["Label"]):null);
return next_obj_62453;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62454);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Sandbox:"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.Switch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,sandbox),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__62355_SHARP_){
return cljs.core.reset_BANG_.call(null,sandbox,p1__62355_SHARP_);
})], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62456 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__62458 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62459 = oops.state.prepare_state.call(null,target_obj_62456,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62459);

try{var next_obj_62457 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62456,(0),"Footer",true,true,false))?(target_obj_62456["Footer"]):null);
return next_obj_62457;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62458);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),interactive_syntax.strings.CLOSE], null)], null)], null);
});
interactive_syntax.core.save_file = (function interactive_syntax$core$save_file(p__62460){
var map__62461 = p__62460;
var map__62461__$1 = cljs.core.__destructure_map.call(null,map__62461);
var db = map__62461__$1;
var menu = cljs.core.get.call(null,map__62461__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var current_file = cljs.core.get.call(null,map__62461__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
if(cljs.core.truth_(cljs.core.deref.call(null,current_file))){
return interactive_syntax.core.save_buffer.call(null,db);
} else {
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149)], null));
}
});
interactive_syntax.core.button_row = (function interactive_syntax$core$button_row(p__62462){
var map__62463 = p__62462;
var map__62463__$1 = cljs.core.__destructure_map.call(null,map__62463);
var db = map__62463__$1;
var input = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"input","input",556931961));
var current_folder = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"current-folder","current-folder",1012906650));
var fs = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file_changed = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"file-changed","file-changed",-339390111));
var running_QMARK_ = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var app_pane = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"app-pane","app-pane",45757101));
var output = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var insert_visr_BANG_ = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"insert-visr!","insert-visr!",-2083896750));
var current_file = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var runner = cljs.core.get.call(null,map__62463__$1,new cljs.core.Keyword(null,"runner","runner",1945441304));
var new_file = (cljs.core.truth_(cljs.core.deref.call(null,file_changed))?(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"confirm-save","confirm-save",-1591535956),new cljs.core.Keyword(null,"new","new",-2085437848)], null));
}):(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"new","new",-2085437848));
}));
var save_file_STAR_ = interactive_syntax.core.save_file;
var save_file = (function (){
return save_file_STAR_.call(null,db);
});
var save_file_as = (function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149)], null));
});
var load_file = (cljs.core.truth_(cljs.core.deref.call(null,file_changed))?(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"confirm-save","confirm-save",-1591535956),new cljs.core.Keyword(null,"load","load",-1318641184)], null));
}):(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"load","load",-1318641184));
}));
var add_file = (function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"add-resource","add-resource",2132885707));
});
var options = (function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"options","options",99638489));
});
var deps = (function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"deps","deps",1883360319));
});
var pull = (function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"pull","pull",-860544805));
});
var push = (function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"push","push",799791267));
});
var auth = (function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"auth","auth",1389754926));
});
var file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,current_file))?path.join(cljs.core.deref.call(null,current_folder).replace(interactive_syntax.db.files_root,"/"),cljs.core.deref.call(null,current_file)):interactive_syntax.strings.UNTITLED)),(cljs.core.truth_(cljs.core.deref.call(null,file_changed))?"*":"")].join('');
var export_project = (function (){
return interactive_syntax.fs.export_to_zip.call(null,db,(function (res){
return interactive_syntax.core.node$module$file_saver.saveAs(res,"project.zip");
}));
});
var do_insert_visr = (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,insert_visr_BANG_))){
return cljs.core.deref.call(null,insert_visr_BANG_).call(null);
} else {
return null;
}
});
var print_buffer = (function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"print","print",1299562414));
});
var run_PLUS_pause = (function (){
cljs.core.reset_BANG_.call(null,app_pane,false);

cljs.core.reset_BANG_.call(null,output,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));

return interactive_syntax.env.eval_buffer.call(null,db);
});
var stop = (function (){
return cljs.core.reset_BANG_.call(null,app_pane,false);
});
var fullscreen = (function (){
if(cljs.core.boolean_QMARK_.call(null,cljs.core.deref.call(null,app_pane))){
return null;
} else {
return cljs.core.deref.call(null,app_pane).requestFullscreen();
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"d-block d-md-none"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"align-items-center flex-nowrap",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0)], null)], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.DropdownButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.Keyword(null,"title","title",636505583),interactive_syntax.strings.MENU,new cljs.core.Keyword(null,"size","size",1098693007),"sm"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62464 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62466 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62467 = oops.state.prepare_state.call(null,target_obj_62464,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62467);

try{var next_obj_62465 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62464,(0),"Item",true,true,false))?(target_obj_62464["Item"]):null);
return next_obj_62465;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62466);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new_file], null),interactive_syntax.strings.NEW], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62468 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62470 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62471 = oops.state.prepare_state.call(null,target_obj_62468,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62471);

try{var next_obj_62469 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62468,(0),"Item",true,true,false))?(target_obj_62468["Item"]):null);
return next_obj_62469;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62470);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_file], null),interactive_syntax.strings.SAVE], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62472 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62474 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62475 = oops.state.prepare_state.call(null,target_obj_62472,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62475);

try{var next_obj_62473 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62472,(0),"Item",true,true,false))?(target_obj_62472["Item"]):null);
return next_obj_62473;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62474);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_file_as], null),interactive_syntax.strings.SAVE_AS], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62476 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62478 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62479 = oops.state.prepare_state.call(null,target_obj_62476,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62479);

try{var next_obj_62477 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62476,(0),"Item",true,true,false))?(target_obj_62476["Item"]):null);
return next_obj_62477;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62478);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),load_file], null),interactive_syntax.strings.LOAD], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62480 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62482 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62483 = oops.state.prepare_state.call(null,target_obj_62480,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62483);

try{var next_obj_62481 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62480,(0),"Item",true,true,false))?(target_obj_62480["Item"]):null);
return next_obj_62481;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62482);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),add_file], null),interactive_syntax.strings.ADD_RESOURCE], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62484 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62486 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62487 = oops.state.prepare_state.call(null,target_obj_62484,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62487);

try{var next_obj_62485 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62484,(0),"Item",true,true,false))?(target_obj_62484["Item"]):null);
return next_obj_62485;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62486);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),options], null),interactive_syntax.strings.OPTIONS], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62488 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62490 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62491 = oops.state.prepare_state.call(null,target_obj_62488,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62491);

try{var next_obj_62489 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62488,(0),"Item",true,true,false))?(target_obj_62488["Item"]):null);
return next_obj_62489;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62490);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"wipe","wipe",2091773807));
})], null),interactive_syntax.strings.NEW_PROJECT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62492 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62494 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62495 = oops.state.prepare_state.call(null,target_obj_62492,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62495);

try{var next_obj_62493 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62492,(0),"Item",true,true,false))?(target_obj_62492["Item"]):null);
return next_obj_62493;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62494);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),deps], null),interactive_syntax.strings.DEPENDENCIES], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62496 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62498 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62499 = oops.state.prepare_state.call(null,target_obj_62496,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62499);

try{var next_obj_62497 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62496,(0),"Item",true,true,false))?(target_obj_62496["Item"]):null);
return next_obj_62497;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62498);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"import","import",-1399500709));
})], null),interactive_syntax.strings.IMPORT_PROJECT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62500 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62502 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62503 = oops.state.prepare_state.call(null,target_obj_62500,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62503);

try{var next_obj_62501 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62500,(0),"Item",true,true,false))?(target_obj_62500["Item"]):null);
return next_obj_62501;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62502);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),export_project], null),interactive_syntax.strings.EXPORT_PROJECT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62504 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62506 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62507 = oops.state.prepare_state.call(null,target_obj_62504,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62507);

try{var next_obj_62505 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62504,(0),"Item",true,true,false))?(target_obj_62504["Item"]):null);
return next_obj_62505;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62506);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),auth], null),interactive_syntax.strings.GIT_REPOS], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62508 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62510 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62511 = oops.state.prepare_state.call(null,target_obj_62508,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62511);

try{var next_obj_62509 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62508,(0),"Item",true,true,false))?(target_obj_62508["Item"]):null);
return next_obj_62509;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62510);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),pull], null),interactive_syntax.strings.GIT_PULL], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62512 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62514 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62515 = oops.state.prepare_state.call(null,target_obj_62512,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62515);

try{var next_obj_62513 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62512,(0),"Item",true,true,false))?(target_obj_62512["Item"]):null);
return next_obj_62513;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62514);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),push], null),interactive_syntax.strings.GIT_PUSH], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62516 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62518 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62519 = oops.state.prepare_state.call(null,target_obj_62516,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62519);

try{var next_obj_62517 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62516,(0),"Item",true,true,false))?(target_obj_62516["Item"]):null);
return next_obj_62517;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62518);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),print_buffer], null),interactive_syntax.strings.PRINT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62520 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62522 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62523 = oops.state.prepare_state.call(null,target_obj_62520,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62523);

try{var next_obj_62521 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62520,(0),"Item",true,true,false))?(target_obj_62520["Item"]):null);
return next_obj_62521;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62522);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"splash","splash",-1122760796));
})], null),interactive_syntax.strings.ABOUT], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Container,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"d-none d-sm-block",new cljs.core.Keyword(null,"fluid","fluid",-1823657759),true,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),file_name], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(0)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Dropdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.Keyword(null,"size","size",1098693007),"sm"], null),(cljs.core.truth_(cljs.core.deref.call(null,app_pane))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),fullscreen,new cljs.core.Keyword(null,"variant","variant",-424354234),"warning"], null),interactive_syntax.strings.FULLSCREEN], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(cljs.core.deref.call(null,running_QMARK_))?"warning":"success"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),run_PLUS_pause], null),(cljs.core.truth_(cljs.core.deref.call(null,running_QMARK_))?interactive_syntax.strings.PAUSE:interactive_syntax.strings.RUN)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62524 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62526 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62527 = oops.state.prepare_state.call(null,target_obj_62524,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62527);

try{var next_obj_62525 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62524,(0),"Toggle",true,true,false))?(target_obj_62524["Toggle"]):null);
return next_obj_62525;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62526);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"split","split",-599435118),true], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62528 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62530 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62531 = oops.state.prepare_state.call(null,target_obj_62528,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62531);

try{var next_obj_62529 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62528,(0),"Menu",true,true,false))?(target_obj_62528["Menu"]):null);
return next_obj_62529;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62530);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62532 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62534 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62535 = oops.state.prepare_state.call(null,target_obj_62532,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62535);

try{var next_obj_62533 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62532,(0),"Item",true,true,false))?(target_obj_62532["Item"]):null);
return next_obj_62533;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62534);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),stop], null),interactive_syntax.strings.STOP], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62536 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62538 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62539 = oops.state.prepare_state.call(null,target_obj_62536,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62539);

try{var next_obj_62537 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62536,(0),"Item",true,true,false))?(target_obj_62536["Item"]):null);
return next_obj_62537;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62538);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),do_insert_visr], null),interactive_syntax.strings.INSERT_VISR], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"d-none d-md-block"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"align-items-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new_file], null),interactive_syntax.strings.NEW], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.SplitButton,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),interactive_syntax.strings.SAVE,new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_file], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62540 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62542 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62543 = oops.state.prepare_state.call(null,target_obj_62540,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62543);

try{var next_obj_62541 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62540,(0),"Item",true,true,false))?(target_obj_62540["Item"]):null);
return next_obj_62541;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62542);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_file_as], null),interactive_syntax.strings.SAVE_AS], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),load_file], null),interactive_syntax.strings.LOAD], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),add_file], null),interactive_syntax.strings.ADD_lower], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.DropdownButton,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,new cljs.core.Keyword(null,"title","title",636505583),interactive_syntax.strings.PROJECT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62544 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62546 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62547 = oops.state.prepare_state.call(null,target_obj_62544,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62547);

try{var next_obj_62545 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62544,(0),"Item",true,true,false))?(target_obj_62544["Item"]):null);
return next_obj_62545;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62546);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"wipe","wipe",2091773807));
})], null),interactive_syntax.strings.NEW_PROJECT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62548 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62550 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62551 = oops.state.prepare_state.call(null,target_obj_62548,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62551);

try{var next_obj_62549 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62548,(0),"Item",true,true,false))?(target_obj_62548["Item"]):null);
return next_obj_62549;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62550);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),deps], null),interactive_syntax.strings.DEPENDENCIES], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62552 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62554 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62555 = oops.state.prepare_state.call(null,target_obj_62552,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62555);

try{var next_obj_62553 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62552,(0),"Item",true,true,false))?(target_obj_62552["Item"]):null);
return next_obj_62553;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62554);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"import","import",-1399500709));
})], null),interactive_syntax.strings.IMPORT_PROJECT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62556 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62558 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62559 = oops.state.prepare_state.call(null,target_obj_62556,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62559);

try{var next_obj_62557 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62556,(0),"Item",true,true,false))?(target_obj_62556["Item"]):null);
return next_obj_62557;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62558);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),export_project], null),interactive_syntax.strings.EXPORT_PROJECT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62560 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62562 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62563 = oops.state.prepare_state.call(null,target_obj_62560,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62563);

try{var next_obj_62561 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62560,(0),"Item",true,true,false))?(target_obj_62560["Item"]):null);
return next_obj_62561;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62562);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),auth], null),interactive_syntax.strings.GIT_REPOS], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62564 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62566 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62567 = oops.state.prepare_state.call(null,target_obj_62564,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62567);

try{var next_obj_62565 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62564,(0),"Item",true,true,false))?(target_obj_62564["Item"]):null);
return next_obj_62565;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62566);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),pull], null),interactive_syntax.strings.GIT_PULL], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62568 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62570 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62571 = oops.state.prepare_state.call(null,target_obj_62568,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62571);

try{var next_obj_62569 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62568,(0),"Item",true,true,false))?(target_obj_62568["Item"]):null);
return next_obj_62569;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62570);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),push], null),interactive_syntax.strings.GIT_PUSH], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62572 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62574 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62575 = oops.state.prepare_state.call(null,target_obj_62572,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62575);

try{var next_obj_62573 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62572,(0),"Item",true,true,false))?(target_obj_62572["Item"]):null);
return next_obj_62573;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62574);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),print_buffer], null),interactive_syntax.strings.PRINT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_62576 = interactive_syntax.core.node$module$react_bootstrap.Dropdown;
var _STAR_runtime_state_STAR__orig_val__62578 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62579 = oops.state.prepare_state.call(null,target_obj_62576,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62579);

try{var next_obj_62577 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62576,(0),"Item",true,true,false))?(target_obj_62576["Item"]):null);
return next_obj_62577;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62578);
}})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"splash","splash",-1122760796));
})], null),interactive_syntax.strings.ABOUT], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),options], null),interactive_syntax.strings.OPTIONS], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Container,file_name], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),(0)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.ButtonGroup,(cljs.core.truth_(cljs.core.deref.call(null,app_pane))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),fullscreen,new cljs.core.Keyword(null,"variant","variant",-424354234),"warning"], null),interactive_syntax.strings.FULLSCREEN], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),do_insert_visr,new cljs.core.Keyword(null,"variant","variant",-424354234),"info"], null),interactive_syntax.strings.INSERT_VISR], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),run_PLUS_pause,new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(cljs.core.deref.call(null,running_QMARK_))?"warning":"success")], null),(cljs.core.truth_(cljs.core.deref.call(null,running_QMARK_))?interactive_syntax.strings.PAUSE:interactive_syntax.strings.RUN)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),stop,new cljs.core.Keyword(null,"variant","variant",-424354234),"danger"], null),interactive_syntax.strings.STOP], null)], null)], null)], null)], null)], null);
});
interactive_syntax.core.exclude_autocomplete_keys = cljs.core.PersistentHashMap.fromArrays([(121),(186),(188),(110),(20),(27),(39),(46),(119),(222),(144),(192),(92),(221),(48),(116),(113),(40),(91),(117),(33),(13),(109),(191),(36),(187),(118),(122),(93),(111),(189),(220),(34),(17),(107),(35),(19),(115),(9),(145),(112),(45),(123),(16),(120),(38),(18),(114),(37),(8),(190)],["f10","semicolon","comma","decimal point","capslock","escape","right","delete","f8","quote","numlock","graveaccent","right window key","close bracket","close paren/0","f5","f2","down","left window key","f6","pageup","enter","subtract","slash","home","equalsign","f7","f11","select","divide","dash","backslash","pagedown","ctrl","add","end","pause","f4","tab","scrolllock","f1","insert","f12","shift","f9","up","alt","f3","left","backspace","period"]);
interactive_syntax.core.editor_view = (function interactive_syntax$core$editor_view(var_args){
var args__22092__auto__ = [];
var len__22082__auto___62786 = arguments.length;
var i__22083__auto___62787 = (0);
while(true){
if((i__22083__auto___62787 < len__22082__auto___62786)){
args__22092__auto__.push((arguments[i__22083__auto___62787]));

var G__62788 = (i__22083__auto___62787 + (1));
i__22083__auto___62787 = G__62788;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.core.editor_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.core.editor_view.cljs$core$IFn$_invoke$arity$variadic = (function (p__62582,p__62583){
var map__62584 = p__62582;
var map__62584__$1 = cljs.core.__destructure_map.call(null,map__62584);
var db = map__62584__$1;
var input = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"input","input",556931961));
var options = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"options","options",99638489));
var fs = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var backing = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"backing","backing",-293947460));
var menu = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var deps = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var file_changed = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"file-changed","file-changed",-339390111));
var cursor = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var output = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var insert_visr_BANG_ = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"insert-visr!","insert-visr!",-2083896750));
var cache = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var scroll = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779));
var current_file = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var visr_commit_BANG_ = cljs.core.get.call(null,map__62584__$1,new cljs.core.Keyword(null,"visr-commit!","visr-commit!",-859642538));
var vec__62585 = p__62583;
var map__62588 = cljs.core.nth.call(null,vec__62585,(0),null);
var map__62588__$1 = cljs.core.__destructure_map.call(null,map__62588);
var editor_ref = cljs.core.get.call(null,map__62588__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var for_print = cljs.core.get.call(null,map__62588__$1,new cljs.core.Keyword(null,"for-print","for-print",318613756));
var print_ref = cljs.core.get.call(null,map__62588__$1,new cljs.core.Keyword(null,"print-ref","print-ref",802171881));
var map__62589 = cljs.core.get.call(null,map__62588__$1,new cljs.core.Keyword(null,"print-options","print-options",11816558));
var map__62589__$1 = cljs.core.__destructure_map.call(null,map__62589);
var print_options = map__62589__$1;
var hider_bars = cljs.core.get.call(null,map__62589__$1,new cljs.core.Keyword(null,"hider-bars","hider-bars",-904887670));
var editor_reset_ref = cljs.core.get.call(null,map__62588__$1,new cljs.core.Keyword(null,"editor-reset","editor-reset",-1897270605));
var visr_run_ref = cljs.core.get.call(null,map__62588__$1,new cljs.core.Keyword(null,"visr-run","visr-run",101348956));
var visual_syntax = cljs.core.get.call(null,map__62588__$1,new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),true);
var edit = reagent.core.atom.call(null,null);
var visrs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var key = cljs.core.random_uuid.call(null);
var set_text = (function (txt){
var c = cljs.core.deref.call(null,cursor);
var s = cljs.core.deref.call(null,scroll);
var cm = cljs.core.deref.call(null,edit);
var target_obj_62590_62789 = (function (){var target_obj_62594 = cljs.core.deref.call(null,edit);
var _STAR_runtime_state_STAR__orig_val__62598 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62599 = oops.state.prepare_state.call(null,target_obj_62594,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62599);

try{var call_info_62596 = [target_obj_62594,(function (){var next_obj_62597 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62594,(0),"getDoc",true,true,false))?(target_obj_62594["getDoc"]):null);
return next_obj_62597;
})()];
var fn_62595 = (call_info_62596[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62595,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62595 == null)))){
return fn_62595.call((call_info_62596[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62598);
}})();
var _STAR_runtime_state_STAR__orig_val__62600_62790 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62601_62791 = oops.state.prepare_state.call(null,target_obj_62590_62789,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62601_62791);

try{var call_info_62592_62792 = [target_obj_62590_62789,(function (){var next_obj_62593 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62590_62789,(0),"setValue",true,true,false))?(target_obj_62590_62789["setValue"]):null);
return next_obj_62593;
})()];
var fn_62591_62793 = (call_info_62592_62792[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62591_62793,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62591_62793 == null)))){
fn_62591_62793.call((call_info_62592_62792[(0)]),txt);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62600_62790);
}
var target_obj_62602_62794 = (function (){var target_obj_62606 = cm;
var _STAR_runtime_state_STAR__orig_val__62610 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62611 = oops.state.prepare_state.call(null,target_obj_62606,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62611);

try{var call_info_62608 = [target_obj_62606,(function (){var next_obj_62609 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62606,(0),"getDoc",true,true,false))?(target_obj_62606["getDoc"]):null);
return next_obj_62609;
})()];
var fn_62607 = (call_info_62608[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62607,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62607 == null)))){
return fn_62607.call((call_info_62608[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62610);
}})();
var _STAR_runtime_state_STAR__orig_val__62612_62795 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62613_62796 = oops.state.prepare_state.call(null,target_obj_62602_62794,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62613_62796);

try{var call_info_62604_62797 = [target_obj_62602_62794,(function (){var next_obj_62605 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62602_62794,(0),"setCursor",true,true,false))?(target_obj_62602_62794["setCursor"]):null);
return next_obj_62605;
})()];
var fn_62603_62798 = (call_info_62604_62797[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62603_62798,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62603_62798 == null)))){
fn_62603_62798.call((call_info_62604_62797[(0)]),c);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62612_62795);
}
var target_obj_62614 = cm;
var _STAR_runtime_state_STAR__orig_val__62618 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62619 = oops.state.prepare_state.call(null,target_obj_62614,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62619);

try{var call_info_62616 = [target_obj_62614,(function (){var next_obj_62617 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62614,(0),"scrollTo",true,true,false))?(target_obj_62614["scrollTo"]):null);
return next_obj_62617;
})()];
var fn_62615 = (call_info_62616[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62615,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62615 == null)))){
return fn_62615.call((call_info_62616[(0)]),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62618);
}});
var mounted_QMARK_ = cljs.core.atom.call(null,false);
var watch_updater = (function (k,r,o,n){
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.deref.call(null,edit);
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not_EQ_.call(null,o,n);
} else {
return and__20748__auto__;
}
})())){
var fc = cljs.core.deref.call(null,file_changed);
(window.edit = cljs.core.deref.call(null,edit));

var target_obj_62620_62799 = (function (){var target_obj_62624 = cljs.core.deref.call(null,edit);
var _STAR_runtime_state_STAR__orig_val__62628 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62629 = oops.state.prepare_state.call(null,target_obj_62624,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62629);

try{var call_info_62626 = [target_obj_62624,(function (){var next_obj_62627 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62624,(0),"getDoc",true,true,false))?(target_obj_62624["getDoc"]):null);
return next_obj_62627;
})()];
var fn_62625 = (call_info_62626[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62625,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62625 == null)))){
return fn_62625.call((call_info_62626[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62628);
}})();
var _STAR_runtime_state_STAR__orig_val__62630_62800 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62631_62801 = oops.state.prepare_state.call(null,target_obj_62620_62799,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62631_62801);

try{var call_info_62622_62802 = [target_obj_62620_62799,(function (){var next_obj_62623 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62620_62799,(0),"setValue",true,true,false))?(target_obj_62620_62799["setValue"]):null);
return next_obj_62623;
})()];
var fn_62621_62803 = (call_info_62622_62802[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62621_62803,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62621_62803 == null)))){
fn_62621_62803.call((call_info_62622_62802[(0)]),cljs.core.deref.call(null,input));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62630_62800);
}
return cljs.core.reset_BANG_.call(null,file_changed,fc);
} else {
return null;
}
});
var codemirror_options = (function (){
return cljs.core.conj.call(null,interactive_syntax.env.codemirror_options.call(null,db),print_options);
});
cljs.core.add_watch.call(null,current_file,key,watch_updater);

cljs.core.add_watch.call(null,menu,key,watch_updater);

cljs.core.add_watch.call(null,edit,new cljs.core.Keyword("interactive-syntax.core","set-font","interactive-syntax.core/set-font",285213894),(function (k,r,o,n){
if(cljs.core.not_EQ_.call(null,n,null)){
var target_obj_62632_62804 = (function (){var target_obj_62635 = n;
var _STAR_runtime_state_STAR__orig_val__62639 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62640 = oops.state.prepare_state.call(null,target_obj_62635,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62640);

try{var call_info_62637 = [target_obj_62635,(function (){var next_obj_62638 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62635,(0),"getWrapperElement",true,true,false))?(target_obj_62635["getWrapperElement"]):null);
return next_obj_62638;
})()];
var fn_62636 = (call_info_62637[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62636,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62636 == null)))){
return fn_62636.call((call_info_62637[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62639);
}})();
var _STAR_runtime_state_STAR__orig_val__62641_62805 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62642_62806 = oops.state.prepare_state.call(null,target_obj_62632_62804,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62642_62806);

try{var parent_obj_62633_62807 = (function (){var next_obj_62634 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62632_62804,(0),"style",true,true,false))?(target_obj_62632_62804["style"]):null);
return next_obj_62634;
})();
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_62633_62807,(0),"fontSize",true,true,true)){
(parent_obj_62633_62807["fontSize"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(options))),"px"].join(''));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62641_62805);
}
var target_obj_62643 = n;
var _STAR_runtime_state_STAR__orig_val__62647 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62648 = oops.state.prepare_state.call(null,target_obj_62643,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62648);

try{var call_info_62645 = [target_obj_62643,(function (){var next_obj_62646 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62643,(0),"refresh",true,true,false))?(target_obj_62643["refresh"]):null);
return next_obj_62646;
})()];
var fn_62644 = (call_info_62645[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62644,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62644 == null)))){
return fn_62644.call((call_info_62645[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62647);
}} else {
return null;
}
}));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword("interactive-syntax.core","set-font","interactive-syntax.core/set-font",285213894),(function (k,r,o,n){
var temp__5718__auto__ = cljs.core.deref.call(null,edit);
if(cljs.core.truth_(temp__5718__auto__)){
var n__$1 = temp__5718__auto__;
var target_obj_62649_62808 = (function (){var target_obj_62652 = n__$1;
var _STAR_runtime_state_STAR__orig_val__62656 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62657 = oops.state.prepare_state.call(null,target_obj_62652,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62657);

try{var call_info_62654 = [target_obj_62652,(function (){var next_obj_62655 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62652,(0),"getWrapperElement",true,true,false))?(target_obj_62652["getWrapperElement"]):null);
return next_obj_62655;
})()];
var fn_62653 = (call_info_62654[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62653,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62653 == null)))){
return fn_62653.call((call_info_62654[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62656);
}})();
var _STAR_runtime_state_STAR__orig_val__62658_62809 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62659_62810 = oops.state.prepare_state.call(null,target_obj_62649_62808,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62659_62810);

try{var parent_obj_62650_62811 = (function (){var next_obj_62651 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62649_62808,(0),"style",true,true,false))?(target_obj_62649_62808["style"]):null);
return next_obj_62651;
})();
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_62650_62811,(0),"fontSize",true,true,true)){
(parent_obj_62650_62811["fontSize"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(options))),"px"].join(''));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62658_62809);
}
var target_obj_62660 = n__$1;
var _STAR_runtime_state_STAR__orig_val__62664 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62665 = oops.state.prepare_state.call(null,target_obj_62660,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62665);

try{var call_info_62662 = [target_obj_62660,(function (){var next_obj_62663 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62660,(0),"refresh",true,true,false))?(target_obj_62660["refresh"]):null);
return next_obj_62663;
})()];
var fn_62661 = (call_info_62662[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62661,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62661 == null)))){
return fn_62661.call((call_info_62662[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62664);
}} else {
return null;
}
}));

cljs.core.add_watch.call(null,deps,key,(function (k,r,o,n){
if(cljs.core._EQ_.call(null,o,n)){
return null;
} else {
interactive_syntax.env.make_reset_editors_cache.call(null,cache);

var seq__62666_62812 = cljs.core.seq.call(null,cljs.core.deref.call(null,visrs));
var chunk__62667_62813 = null;
var count__62668_62814 = (0);
var i__62669_62815 = (0);
while(true){
if((i__62669_62815 < count__62668_62814)){
var vec__62688_62816 = cljs.core._nth.call(null,chunk__62667_62813,i__62669_62815);
var k_62817__$1 = cljs.core.nth.call(null,vec__62688_62816,(0),null);
var v_62818 = cljs.core.nth.call(null,vec__62688_62816,(1),null);
var target_obj_62691_62819 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(v_62818));
var _STAR_runtime_state_STAR__orig_val__62695_62820 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62696_62821 = oops.state.prepare_state.call(null,target_obj_62691_62819,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62696_62821);

try{var call_info_62693_62822 = [target_obj_62691_62819,(function (){var next_obj_62694 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62691_62819,(0),"clear",true,true,false))?(target_obj_62691_62819["clear"]):null);
return next_obj_62694;
})()];
var fn_62692_62823 = (call_info_62693_62822[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62692_62823,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62692_62823 == null)))){
fn_62692_62823.call((call_info_62693_62822[(0)]));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62695_62820);
}

var G__62824 = seq__62666_62812;
var G__62825 = chunk__62667_62813;
var G__62826 = count__62668_62814;
var G__62827 = (i__62669_62815 + (1));
seq__62666_62812 = G__62824;
chunk__62667_62813 = G__62825;
count__62668_62814 = G__62826;
i__62669_62815 = G__62827;
continue;
} else {
var temp__5720__auto___62828 = cljs.core.seq.call(null,seq__62666_62812);
if(temp__5720__auto___62828){
var seq__62666_62829__$1 = temp__5720__auto___62828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62666_62829__$1)){
var c__21725__auto___62830 = cljs.core.chunk_first.call(null,seq__62666_62829__$1);
var G__62831 = cljs.core.chunk_rest.call(null,seq__62666_62829__$1);
var G__62832 = c__21725__auto___62830;
var G__62833 = cljs.core.count.call(null,c__21725__auto___62830);
var G__62834 = (0);
seq__62666_62812 = G__62831;
chunk__62667_62813 = G__62832;
count__62668_62814 = G__62833;
i__62669_62815 = G__62834;
continue;
} else {
var vec__62697_62835 = cljs.core.first.call(null,seq__62666_62829__$1);
var k_62836__$1 = cljs.core.nth.call(null,vec__62697_62835,(0),null);
var v_62837 = cljs.core.nth.call(null,vec__62697_62835,(1),null);
var target_obj_62700_62838 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(v_62837));
var _STAR_runtime_state_STAR__orig_val__62704_62839 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62705_62840 = oops.state.prepare_state.call(null,target_obj_62700_62838,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62705_62840);

try{var call_info_62702_62841 = [target_obj_62700_62838,(function (){var next_obj_62703 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62700_62838,(0),"clear",true,true,false))?(target_obj_62700_62838["clear"]):null);
return next_obj_62703;
})()];
var fn_62701_62842 = (call_info_62702_62841[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62701_62842,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62701_62842 == null)))){
fn_62701_62842.call((call_info_62702_62841[(0)]));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62704_62839);
}

var G__62843 = cljs.core.next.call(null,seq__62666_62829__$1);
var G__62844 = null;
var G__62845 = (0);
var G__62846 = (0);
seq__62666_62812 = G__62843;
chunk__62667_62813 = G__62844;
count__62668_62814 = G__62845;
i__62669_62815 = G__62846;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,visrs,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.truth_(editor_reset_ref)){
cljs.core.reset_BANG_.call(null,editor_reset_ref,true);
} else {
}

if(cljs.core.truth_(visual_syntax)){
return interactive_syntax.env.reset_editors_BANG_.call(null,cljs.core.deref.call(null,input),set_text,edit,visrs,cache,codemirror_options.call(null),db,(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for-print","for-print",318613756),for_print,new cljs.core.Keyword(null,"hider-bars","hider-bars",-904887670),hider_bars,new cljs.core.Keyword(null,"visr-run","visr-run",101348956),visr_run_ref], null));
} else {
return null;
}
}
}));

cljs.core.add_watch.call(null,cache,new cljs.core.Keyword("interactive-syntax.core","set-running?","interactive-syntax.core/set-running?",-277130219),(function (k,r,o,n){
if(cljs.core.truth_((function (){var and__20748__auto__ = editor_reset_ref;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(n));
} else {
return and__20748__auto__;
}
})())){
return cljs.core.reset_BANG_.call(null,editor_reset_ref,false);
} else {
return null;
}
}));

cljs.core.reset_BANG_.call(null,visr_commit_BANG_,(function (){var seq__62706 = cljs.core.seq.call(null,cljs.core.deref.call(null,visrs));
var chunk__62707 = null;
var count__62708 = (0);
var i__62709 = (0);
while(true){
if((i__62709 < count__62708)){
var vec__62716 = cljs.core._nth.call(null,chunk__62707,i__62709);
var k = cljs.core.nth.call(null,vec__62716,(0),null);
var v = cljs.core.nth.call(null,vec__62716,(1),null);
new cljs.core.Keyword(null,"commit!","commit!",559588742).cljs$core$IFn$_invoke$arity$1(v).call(null);


var G__62847 = seq__62706;
var G__62848 = chunk__62707;
var G__62849 = count__62708;
var G__62850 = (i__62709 + (1));
seq__62706 = G__62847;
chunk__62707 = G__62848;
count__62708 = G__62849;
i__62709 = G__62850;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__62706);
if(temp__5720__auto__){
var seq__62706__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62706__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__62706__$1);
var G__62851 = cljs.core.chunk_rest.call(null,seq__62706__$1);
var G__62852 = c__21725__auto__;
var G__62853 = cljs.core.count.call(null,c__21725__auto__);
var G__62854 = (0);
seq__62706 = G__62851;
chunk__62707 = G__62852;
count__62708 = G__62853;
i__62709 = G__62854;
continue;
} else {
var vec__62719 = cljs.core.first.call(null,seq__62706__$1);
var k = cljs.core.nth.call(null,vec__62719,(0),null);
var v = cljs.core.nth.call(null,vec__62719,(1),null);
new cljs.core.Keyword(null,"commit!","commit!",559588742).cljs$core$IFn$_invoke$arity$1(v).call(null);


var G__62855 = cljs.core.next.call(null,seq__62706__$1);
var G__62856 = null;
var G__62857 = (0);
var G__62858 = (0);
seq__62706 = G__62855;
chunk__62707 = G__62856;
count__62708 = G__62857;
i__62709 = G__62858;
continue;
}
} else {
return null;
}
}
break;
}
})());

cljs.core.reset_BANG_.call(null,insert_visr_BANG_,(function (){
var doc = (function (){var target_obj_62722 = cljs.core.deref.call(null,edit);
var _STAR_runtime_state_STAR__orig_val__62726 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62727 = oops.state.prepare_state.call(null,target_obj_62722,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62727);

try{var call_info_62724 = [target_obj_62722,(function (){var next_obj_62725 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62722,(0),"getDoc",true,true,false))?(target_obj_62722["getDoc"]):null);
return next_obj_62725;
})()];
var fn_62723 = (call_info_62724[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62723,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62723 == null)))){
return fn_62723.call((call_info_62724[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62726);
}})();
var pos = (function (){var target_obj_62728 = doc;
var _STAR_runtime_state_STAR__orig_val__62732 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62733 = oops.state.prepare_state.call(null,target_obj_62728,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62733);

try{var call_info_62730 = [target_obj_62728,(function (){var next_obj_62731 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62728,(0),"getCursor",true,true,false))?(target_obj_62728["getCursor"]):null);
return next_obj_62731;
})()];
var fn_62729 = (call_info_62730[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62729,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62729 == null)))){
return fn_62729.call((call_info_62730[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62732);
}})();
var target_obj_62734 = doc;
var _STAR_runtime_state_STAR__orig_val__62738 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62739 = oops.state.prepare_state.call(null,target_obj_62734,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62739);

try{var call_info_62736 = [target_obj_62734,(function (){var next_obj_62737 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62734,(0),"replaceRange",true,true,false))?(target_obj_62734["replaceRange"]):null);
return next_obj_62737;
})()];
var fn_62735 = (call_info_62736[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62735,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62735 == null)))){
return fn_62735.call((call_info_62736[(0)]),interactive_syntax.stdlib.starter_visr,pos);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62738);
}}));

return (function() { 
var G__62859__delegate = function (p__62740,p__62741){
var map__62742 = p__62740;
var map__62742__$1 = cljs.core.__destructure_map.call(null,map__62742);
var db__$1 = map__62742__$1;
var input__$1 = cljs.core.get.call(null,map__62742__$1,new cljs.core.Keyword(null,"input","input",556931961));
var options__$1 = cljs.core.get.call(null,map__62742__$1,new cljs.core.Keyword(null,"options","options",99638489));
var menu__$1 = cljs.core.get.call(null,map__62742__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var file_changed__$1 = cljs.core.get.call(null,map__62742__$1,new cljs.core.Keyword(null,"file-changed","file-changed",-339390111));
var cursor__$1 = cljs.core.get.call(null,map__62742__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var cm_ref = cljs.core.get.call(null,map__62742__$1,new cljs.core.Keyword(null,"cm-ref","cm-ref",-329099987));
var cache__$1 = cljs.core.get.call(null,map__62742__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var scroll__$1 = cljs.core.get.call(null,map__62742__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779));
var current_file__$1 = cljs.core.get.call(null,map__62742__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
var vec__62743 = p__62741;
var map__62746 = cljs.core.nth.call(null,vec__62743,(0),null);
var map__62746__$1 = cljs.core.__destructure_map.call(null,map__62746);
var editor_ref__$1 = cljs.core.get.call(null,map__62746__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var for_print__$1 = cljs.core.get.call(null,map__62746__$1,new cljs.core.Keyword(null,"for-print","for-print",318613756));
var print_ref__$1 = cljs.core.get.call(null,map__62746__$1,new cljs.core.Keyword(null,"print-ref","print-ref",802171881));
var map__62747 = cljs.core.get.call(null,map__62746__$1,new cljs.core.Keyword(null,"print-options","print-options",11816558));
var map__62747__$1 = cljs.core.__destructure_map.call(null,map__62747);
var print_options__$1 = map__62747__$1;
var print_width = cljs.core.get.call(null,map__62747__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var print_height = cljs.core.get.call(null,map__62747__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var hider_bars__$1 = cljs.core.get.call(null,map__62747__$1,new cljs.core.Keyword(null,"hider-bars","hider-bars",-904887670));
var theme = cljs.core.get.call(null,map__62747__$1,"neat");
var visual_syntax__$1 = cljs.core.get.call(null,map__62746__$1,new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),true);
var editor_reset_ref__$1 = cljs.core.get.call(null,map__62746__$1,new cljs.core.Keyword(null,"editor-reset","editor-reset",-1897270605));
var visr_run_ref__$1 = cljs.core.get.call(null,map__62746__$1,new cljs.core.Keyword(null,"visr-run","visr-run",101348956));
cljs.core.deref.call(null,current_file__$1);

cljs.core.deref.call(null,menu__$1);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),print_ref__$1,new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(for_print__$1)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"max-content",new cljs.core.Keyword(null,"height","height",1025178622),"max-content"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_codemirror2.UnControlled,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"options","options",99638489),(cljs.core.truth_(for_print__$1)?cljs.core.into.call(null,codemirror_options.call(null),print_options__$1):codemirror_options.call(null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (this$,operation,value){
cljs.core.reset_BANG_.call(null,file_changed__$1,true);

cljs.core.reset_BANG_.call(null,input__$1,value);

if(cljs.core.truth_(editor_reset_ref__$1)){
cljs.core.reset_BANG_.call(null,editor_reset_ref__$1,true);
} else {
}

if(cljs.core.truth_(visual_syntax__$1)){
return interactive_syntax.env.reset_editors_BANG_.call(null,cljs.core.deref.call(null,input__$1),set_text,edit,visrs,cache__$1,codemirror_options.call(null),db__$1,(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for-print","for-print",318613756),for_print__$1,new cljs.core.Keyword(null,"hider-bars","hider-bars",-904887670),hider_bars__$1,new cljs.core.Keyword(null,"visr-run","visr-run",101348956),visr_run_ref__$1], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onCursor","onCursor",-2111565719),(function (editor,data){
return cljs.core.reset_BANG_.call(null,cursor__$1,data);
}),new cljs.core.Keyword(null,"onScroll","onScroll",-1660866632),(function (editor,data){
return cljs.core.reset_BANG_.call(null,scroll__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(function (){var target_obj_62748 = data;
var _STAR_runtime_state_STAR__orig_val__62750 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62751 = oops.state.prepare_state.call(null,target_obj_62748,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62751);

try{var next_obj_62749 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62748,(0),"left",true,true,false))?(target_obj_62748["left"]):null);
return next_obj_62749;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62750);
}})(),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var target_obj_62752 = data;
var _STAR_runtime_state_STAR__orig_val__62754 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62755 = oops.state.prepare_state.call(null,target_obj_62752,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62755);

try{var next_obj_62753 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62752,(0),"top",true,true,false))?(target_obj_62752["top"]):null);
return next_obj_62753;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62754);
}})()], null));
}),new cljs.core.Keyword(null,"onKeyUp","onKeyUp",1550785041),(function (this$,e){
if(((cljs.core._EQ_.call(null,"auto",cljs.core.deref.call(null,new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913).cljs$core$IFn$_invoke$arity$1(options__$1)))) && (((cljs.core.not.call(null,this$.state.completionActive)) && ((!(cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,interactive_syntax.core.exclude_autocomplete_keys)),(function (){var target_obj_62756 = e;
var _STAR_runtime_state_STAR__orig_val__62758 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62759 = oops.state.prepare_state.call(null,target_obj_62756,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62759);

try{var next_obj_62757 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62756,(0),"keyCode",true,true,false))?(target_obj_62756["keyCode"]):null);
return next_obj_62757;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62758);
}})())))))))){
var target_obj_62760 = interactive_syntax.core.node$module$codemirror.commands;
var _STAR_runtime_state_STAR__orig_val__62764 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62765 = oops.state.prepare_state.call(null,target_obj_62760,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62765);

try{var call_info_62762 = [target_obj_62760,(function (){var next_obj_62763 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62760,(0),"autocomplete",true,true,false))?(target_obj_62760["autocomplete"]):null);
return next_obj_62763;
})()];
var fn_62761 = (call_info_62762[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62761,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62761 == null)))){
return fn_62761.call((call_info_62762[(0)]),this$,null,({"completeSingle": false}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62764);
}} else {
return null;
}
}),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (this$,e){
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,(function (){var target_obj_62766 = e;
var _STAR_runtime_state_STAR__orig_val__62768 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62769 = oops.state.prepare_state.call(null,target_obj_62766,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62769);

try{var next_obj_62767 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62766,(0),"key",true,true,false))?(target_obj_62766["key"]):null);
return next_obj_62767;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62768);
}})(),"r");
if(and__20748__auto__){
var target_obj_62770 = e;
var _STAR_runtime_state_STAR__orig_val__62772 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62773 = oops.state.prepare_state.call(null,target_obj_62770,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62773);

try{var next_obj_62771 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62770,(0),"ctrlKey",true,true,false))?(target_obj_62770["ctrlKey"]):null);
return next_obj_62771;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62772);
}} else {
return and__20748__auto__;
}
})())){
e.preventDefault();

cljs.core.reset_BANG_.call(null,output,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));

return interactive_syntax.env.eval_buffer.call(null,db__$1);
} else {
return null;
}
}),new cljs.core.Keyword(null,"editorWillUnmount","editorWillUnmount",1583570341),(function (){
cljs.core.remove_watch.call(null,current_file__$1,key);

cljs.core.remove_watch.call(null,menu__$1,key);

return cljs.core.remove_watch.call(null,deps,key);
}),new cljs.core.Keyword(null,"editorDidMount","editorDidMount",1539700689),(function (e){
var fc_62860 = cljs.core.deref.call(null,file_changed__$1);
var target_obj_62774_62861 = (function (){var target_obj_62778 = e;
var _STAR_runtime_state_STAR__orig_val__62782 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62783 = oops.state.prepare_state.call(null,target_obj_62778,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62783);

try{var call_info_62780 = [target_obj_62778,(function (){var next_obj_62781 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62778,(0),"getDoc",true,true,false))?(target_obj_62778["getDoc"]):null);
return next_obj_62781;
})()];
var fn_62779 = (call_info_62780[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62779,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62779 == null)))){
return fn_62779.call((call_info_62780[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62782);
}})();
var _STAR_runtime_state_STAR__orig_val__62784_62862 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62785_62863 = oops.state.prepare_state.call(null,target_obj_62774_62861,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62785_62863);

try{var call_info_62776_62864 = [target_obj_62774_62861,(function (){var next_obj_62777 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62774_62861,(0),"setValue",true,true,false))?(target_obj_62774_62861["setValue"]):null);
return next_obj_62777;
})()];
var fn_62775_62865 = (call_info_62776_62864[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62775_62865,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62775_62865 == null)))){
fn_62775_62865.call((call_info_62776_62864[(0)]),cljs.core.deref.call(null,input__$1));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62784_62862);
}
cljs.core.reset_BANG_.call(null,file_changed__$1,fc_62860);

cljs.core.reset_BANG_.call(null,edit,e);

if(cljs.core.truth_(for_print__$1)){
} else {
cljs.core.reset_BANG_.call(null,cm_ref,e);
}

if(cljs.core.truth_(editor_ref__$1)){
cljs.core.reset_BANG_.call(null,editor_ref__$1,e);
} else {
}

if(cljs.core.truth_(editor_reset_ref__$1)){
cljs.core.reset_BANG_.call(null,editor_reset_ref__$1,true);
} else {
}

if(cljs.core.truth_(visual_syntax__$1)){
return interactive_syntax.env.reset_editors_BANG_.call(null,cljs.core.deref.call(null,input__$1),set_text,edit,visrs,cache__$1,codemirror_options.call(null),db__$1,(function (){
return cljs.core.reset_BANG_.call(null,mounted_QMARK_,true);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for-print","for-print",318613756),for_print__$1,new cljs.core.Keyword(null,"hider-bars","hider-bars",-904887670),hider_bars__$1,new cljs.core.Keyword(null,"visr-run","visr-run",101348956),visr_run_ref__$1], null));
} else {
return null;
}
})], null)], null),(cljs.core.truth_(for_print__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"media","media",-1066138403),"print"], null),garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".CodeMirror-linenumber",".CodeMirror-linenumber",222764025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black !important"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,"@page"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"size","size",1098693007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) + Math.ceil(print_width))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) + Math.ceil(print_height))),"px"].join('')], null)], null))], null):null)], null);
};
var G__62859 = function (p__62740,var_args){
var p__62741 = null;
if (arguments.length > 1) {
var G__62866__i = 0, G__62866__a = new Array(arguments.length -  1);
while (G__62866__i < G__62866__a.length) {G__62866__a[G__62866__i] = arguments[G__62866__i + 1]; ++G__62866__i;}
  p__62741 = new cljs.core.IndexedSeq(G__62866__a,0,null);
} 
return G__62859__delegate.call(this,p__62740,p__62741);};
G__62859.cljs$lang$maxFixedArity = 1;
G__62859.cljs$lang$applyTo = (function (arglist__62867){
var p__62740 = cljs.core.first(arglist__62867);
var p__62741 = cljs.core.rest(arglist__62867);
return G__62859__delegate(p__62740,p__62741);
});
G__62859.cljs$core$IFn$_invoke$arity$variadic = G__62859__delegate;
return G__62859;
})()
;
}));

(interactive_syntax.core.editor_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.core.editor_view.cljs$lang$applyTo = (function (seq62580){
var G__62581 = cljs.core.first.call(null,seq62580);
var seq62580__$1 = cljs.core.next.call(null,seq62580);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62581,seq62580__$1);
}));

interactive_syntax.core.result_view = (function interactive_syntax$core$result_view(var_args){
var args__22092__auto__ = [];
var len__22082__auto___62982 = arguments.length;
var i__22083__auto___62983 = (0);
while(true){
if((i__22083__auto___62983 < len__22082__auto___62982)){
args__22092__auto__.push((arguments[i__22083__auto___62983]));

var G__62984 = (i__22083__auto___62983 + (1));
i__22083__auto___62983 = G__62984;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.core.result_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.core.result_view.cljs$core$IFn$_invoke$arity$variadic = (function (p__62871,p__62872){
var map__62873 = p__62871;
var map__62873__$1 = cljs.core.__destructure_map.call(null,map__62873);
var db = map__62873__$1;
var output = cljs.core.get.call(null,map__62873__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var options = cljs.core.get.call(null,map__62873__$1,new cljs.core.Keyword(null,"options","options",99638489));
var vec__62874 = p__62872;
var map__62877 = cljs.core.nth.call(null,vec__62874,(0),null);
var map__62877__$1 = cljs.core.__destructure_map.call(null,map__62877);
var repl_ref = cljs.core.get.call(null,map__62877__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var visual_syntax = cljs.core.get.call(null,map__62877__$1,new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),true);
var edit = reagent.core.atom.call(null,null);
var cache = interactive_syntax.env.make_reset_editors_cache.call(null);
var instances = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var watch_updater = (function (k,r,o,n){
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.deref.call(null,edit);
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not_EQ_.call(null,o,n);
} else {
return and__20748__auto__;
}
})())){
var target_obj_62878_62985 = (function (){var target_obj_62882 = cljs.core.deref.call(null,edit);
var _STAR_runtime_state_STAR__orig_val__62886 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62887 = oops.state.prepare_state.call(null,target_obj_62882,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62887);

try{var call_info_62884 = [target_obj_62882,(function (){var next_obj_62885 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62882,(0),"getDoc",true,true,false))?(target_obj_62882["getDoc"]):null);
return next_obj_62885;
})()];
var fn_62883 = (call_info_62884[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62883,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62883 == null)))){
return fn_62883.call((call_info_62884[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62886);
}})();
var _STAR_runtime_state_STAR__orig_val__62888_62986 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62889_62987 = oops.state.prepare_state.call(null,target_obj_62878_62985,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62889_62987);

try{var call_info_62880_62988 = [target_obj_62878_62985,(function (){var next_obj_62881 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62878_62985,(0),"setValue",true,true,false))?(target_obj_62878_62985["setValue"]):null);
return next_obj_62881;
})()];
var fn_62879_62989 = (call_info_62880_62988[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62879_62989,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62879_62989 == null)))){
fn_62879_62989.call((call_info_62880_62988[(0)]),[clojure.string.join.call(null,"\n",cljs.core.filter.call(null,cljs.core.string_QMARK_,n)),interactive_syntax.db.end_prompt].join(''));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62888_62986);
}
var seq__62890_62990 = cljs.core.seq.call(null,cljs.core.deref.call(null,instances));
var chunk__62891_62991 = null;
var count__62892_62992 = (0);
var i__62893_62993 = (0);
while(true){
if((i__62893_62993 < count__62892_62992)){
var i_62994 = cljs.core._nth.call(null,chunk__62891_62991,i__62893_62993);
var target_obj_62906_62995 = i_62994;
var _STAR_runtime_state_STAR__orig_val__62910_62996 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62911_62997 = oops.state.prepare_state.call(null,target_obj_62906_62995,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62911_62997);

try{var call_info_62908_62998 = [target_obj_62906_62995,(function (){var next_obj_62909 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62906_62995,(0),"clear",true,true,false))?(target_obj_62906_62995["clear"]):null);
return next_obj_62909;
})()];
var fn_62907_62999 = (call_info_62908_62998[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62907_62999,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62907_62999 == null)))){
fn_62907_62999.call((call_info_62908_62998[(0)]));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62910_62996);
}

var G__63000 = seq__62890_62990;
var G__63001 = chunk__62891_62991;
var G__63002 = count__62892_62992;
var G__63003 = (i__62893_62993 + (1));
seq__62890_62990 = G__63000;
chunk__62891_62991 = G__63001;
count__62892_62992 = G__63002;
i__62893_62993 = G__63003;
continue;
} else {
var temp__5720__auto___63004 = cljs.core.seq.call(null,seq__62890_62990);
if(temp__5720__auto___63004){
var seq__62890_63005__$1 = temp__5720__auto___63004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62890_63005__$1)){
var c__21725__auto___63006 = cljs.core.chunk_first.call(null,seq__62890_63005__$1);
var G__63007 = cljs.core.chunk_rest.call(null,seq__62890_63005__$1);
var G__63008 = c__21725__auto___63006;
var G__63009 = cljs.core.count.call(null,c__21725__auto___63006);
var G__63010 = (0);
seq__62890_62990 = G__63007;
chunk__62891_62991 = G__63008;
count__62892_62992 = G__63009;
i__62893_62993 = G__63010;
continue;
} else {
var i_63011 = cljs.core.first.call(null,seq__62890_63005__$1);
var target_obj_62912_63012 = i_63011;
var _STAR_runtime_state_STAR__orig_val__62916_63013 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62917_63014 = oops.state.prepare_state.call(null,target_obj_62912_63012,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62917_63014);

try{var call_info_62914_63015 = [target_obj_62912_63012,(function (){var next_obj_62915 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62912_63012,(0),"clear",true,true,false))?(target_obj_62912_63012["clear"]):null);
return next_obj_62915;
})()];
var fn_62913_63016 = (call_info_62914_63015[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62913_63016,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62913_63016 == null)))){
fn_62913_63016.call((call_info_62914_63015[(0)]));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62916_63013);
}

var G__63017 = cljs.core.next.call(null,seq__62890_63005__$1);
var G__63018 = null;
var G__63019 = (0);
var G__63020 = (0);
seq__62890_62990 = G__63017;
chunk__62891_62991 = G__63018;
count__62892_62992 = G__63019;
i__62893_62993 = G__63020;
continue;
}
} else {
}
}
break;
}

var line = (0);
var out = n;
while(true){
var vec__62918 = out;
var seq__62919 = cljs.core.seq.call(null,vec__62918);
var first__62920 = cljs.core.first.call(null,seq__62919);
var seq__62919__$1 = cljs.core.next.call(null,seq__62919);
var i = first__62920;
var rest = seq__62919__$1;
if(typeof i === 'string'){
var G__63021 = (line + i.split(/\r\n|\r|\n/).length);
var G__63022 = rest;
line = G__63021;
out = G__63022;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,i)){
var element = document.createElement("div");
interactive_syntax.utils.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.env.styled_frame,i], null),element);

cljs.core.swap_BANG_.call(null,instances,cljs.core.conj,(function (){var target_obj_62921 = (function (){var target_obj_62925 = cljs.core.deref.call(null,edit);
var _STAR_runtime_state_STAR__orig_val__62929 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62930 = oops.state.prepare_state.call(null,target_obj_62925,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62930);

try{var call_info_62927 = [target_obj_62925,(function (){var next_obj_62928 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62925,(0),"getDoc",true,true,false))?(target_obj_62925["getDoc"]):null);
return next_obj_62928;
})()];
var fn_62926 = (call_info_62927[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62926,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62926 == null)))){
return fn_62926.call((call_info_62927[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62929);
}})();
var _STAR_runtime_state_STAR__orig_val__62931 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62932 = oops.state.prepare_state.call(null,target_obj_62921,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62932);

try{var call_info_62923 = [target_obj_62921,(function (){var next_obj_62924 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62921,(0),"addLineWidget",true,true,false))?(target_obj_62921["addLineWidget"]):null);
return next_obj_62924;
})()];
var fn_62922 = (call_info_62923[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62922,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62922 == null)))){
return fn_62922.call((call_info_62923[(0)]),(function (){var x__21111__auto__ = (0);
var y__21112__auto__ = (line - (1));
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})(),element);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62931);
}})());

var G__63023 = (line + (1));
var G__63024 = rest;
line = G__63023;
out = G__63024;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
cljs.core.add_watch.call(null,edit,new cljs.core.Keyword("interactive-syntax.core","set-font","interactive-syntax.core/set-font",285213894),(function (k,r,o,n){
if(cljs.core.not_EQ_.call(null,n,null)){
var target_obj_62933_63025 = (function (){var target_obj_62936 = n;
var _STAR_runtime_state_STAR__orig_val__62940 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62941 = oops.state.prepare_state.call(null,target_obj_62936,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62941);

try{var call_info_62938 = [target_obj_62936,(function (){var next_obj_62939 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62936,(0),"getWrapperElement",true,true,false))?(target_obj_62936["getWrapperElement"]):null);
return next_obj_62939;
})()];
var fn_62937 = (call_info_62938[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62937,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62937 == null)))){
return fn_62937.call((call_info_62938[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62940);
}})();
var _STAR_runtime_state_STAR__orig_val__62942_63026 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62943_63027 = oops.state.prepare_state.call(null,target_obj_62933_63025,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62943_63027);

try{var parent_obj_62934_63028 = (function (){var next_obj_62935 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62933_63025,(0),"style",true,true,false))?(target_obj_62933_63025["style"]):null);
return next_obj_62935;
})();
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_62934_63028,(0),"fontSize",true,true,true)){
(parent_obj_62934_63028["fontSize"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(options))),"px"].join(''));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62942_63026);
}
var target_obj_62944 = n;
var _STAR_runtime_state_STAR__orig_val__62948 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62949 = oops.state.prepare_state.call(null,target_obj_62944,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62949);

try{var call_info_62946 = [target_obj_62944,(function (){var next_obj_62947 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62944,(0),"refresh",true,true,false))?(target_obj_62944["refresh"]):null);
return next_obj_62947;
})()];
var fn_62945 = (call_info_62946[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62945,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62945 == null)))){
return fn_62945.call((call_info_62946[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62948);
}} else {
return null;
}
}));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword("interactive-syntax.core","set-font","interactive-syntax.core/set-font",285213894),(function (k,r,o,n){
var temp__5718__auto__ = cljs.core.deref.call(null,edit);
if(cljs.core.truth_(temp__5718__auto__)){
var n__$1 = temp__5718__auto__;
var target_obj_62950_63029 = (function (){var target_obj_62953 = n__$1;
var _STAR_runtime_state_STAR__orig_val__62957 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62958 = oops.state.prepare_state.call(null,target_obj_62953,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62958);

try{var call_info_62955 = [target_obj_62953,(function (){var next_obj_62956 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62953,(0),"getWrapperElement",true,true,false))?(target_obj_62953["getWrapperElement"]):null);
return next_obj_62956;
})()];
var fn_62954 = (call_info_62955[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62954,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62954 == null)))){
return fn_62954.call((call_info_62955[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62957);
}})();
var _STAR_runtime_state_STAR__orig_val__62959_63030 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62960_63031 = oops.state.prepare_state.call(null,target_obj_62950_63029,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62960_63031);

try{var parent_obj_62951_63032 = (function (){var next_obj_62952 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62950_63029,(0),"style",true,true,false))?(target_obj_62950_63029["style"]):null);
return next_obj_62952;
})();
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_62951_63032,(0),"fontSize",true,true,true)){
(parent_obj_62951_63032["fontSize"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(options))),"px"].join(''));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62959_63030);
}
var target_obj_62961 = n__$1;
var _STAR_runtime_state_STAR__orig_val__62965 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62966 = oops.state.prepare_state.call(null,target_obj_62961,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62966);

try{var call_info_62963 = [target_obj_62961,(function (){var next_obj_62964 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62961,(0),"refresh",true,true,false))?(target_obj_62961["refresh"]):null);
return next_obj_62964;
})()];
var fn_62962 = (call_info_62963[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_62962,oops.state.get_last_access_modifier.call(null))){
if((!((fn_62962 == null)))){
return fn_62962.call((call_info_62963[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62965);
}} else {
return null;
}
}));

cljs.core.add_watch.call(null,output,new cljs.core.Keyword("interactive-syntax.core","result-view","interactive-syntax.core/result-view",-1582732731),watch_updater);

return (function() { 
var G__63033__delegate = function (p__62967,p__62968){
var map__62969 = p__62967;
var map__62969__$1 = cljs.core.__destructure_map.call(null,map__62969);
var db__$1 = map__62969__$1;
var output__$1 = cljs.core.get.call(null,map__62969__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var options__$1 = cljs.core.get.call(null,map__62969__$1,new cljs.core.Keyword(null,"options","options",99638489));
var vec__62970 = p__62968;
var map__62973 = cljs.core.nth.call(null,vec__62970,(0),null);
var map__62973__$1 = cljs.core.__destructure_map.call(null,map__62973);
var repl_ref__$1 = cljs.core.get.call(null,map__62973__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var visual_syntax__$1 = cljs.core.get.call(null,map__62973__$1,new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),true);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_codemirror2.UnControlled,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),clojure.string.join.call(null,"\n",cljs.core.filter.call(null,cljs.core.string_QMARK_,cljs.core.deref.call(null,output__$1))),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.conj.call(null,interactive_syntax.env.codemirror_options.call(null,db__$1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),false,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null)),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (this$,e){
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,(function (){var target_obj_62974 = e;
var _STAR_runtime_state_STAR__orig_val__62976 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62977 = oops.state.prepare_state.call(null,target_obj_62974,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62977);

try{var next_obj_62975 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62974,(0),"key",true,true,false))?(target_obj_62974["key"]):null);
return next_obj_62975;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62976);
}})(),"r");
if(and__20748__auto__){
var target_obj_62978 = e;
var _STAR_runtime_state_STAR__orig_val__62980 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__62981 = oops.state.prepare_state.call(null,target_obj_62978,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__62981);

try{var next_obj_62979 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_62978,(0),"ctrlKey",true,true,false))?(target_obj_62978["ctrlKey"]):null);
return next_obj_62979;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__62980);
}} else {
return and__20748__auto__;
}
})())){
e.preventDefault();

cljs.core.reset_BANG_.call(null,output__$1,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));

return interactive_syntax.env.eval_buffer.call(null,db__$1);
} else {
return null;
}
}),new cljs.core.Keyword(null,"editorDidMount","editorDidMount",1539700689),(function (p1__62868_SHARP_){
if(cljs.core.truth_(repl_ref__$1)){
cljs.core.reset_BANG_.call(null,repl_ref__$1,p1__62868_SHARP_);
} else {
}

return cljs.core.reset_BANG_.call(null,edit,p1__62868_SHARP_);
})], null)], null);
};
var G__63033 = function (p__62967,var_args){
var p__62968 = null;
if (arguments.length > 1) {
var G__63034__i = 0, G__63034__a = new Array(arguments.length -  1);
while (G__63034__i < G__63034__a.length) {G__63034__a[G__63034__i] = arguments[G__63034__i + 1]; ++G__63034__i;}
  p__62968 = new cljs.core.IndexedSeq(G__63034__a,0,null);
} 
return G__63033__delegate.call(this,p__62967,p__62968);};
G__63033.cljs$lang$maxFixedArity = 1;
G__63033.cljs$lang$applyTo = (function (arglist__63035){
var p__62967 = cljs.core.first(arglist__63035);
var p__62968 = cljs.core.rest(arglist__63035);
return G__63033__delegate(p__62967,p__62968);
});
G__63033.cljs$core$IFn$_invoke$arity$variadic = G__63033__delegate;
return G__63033;
})()
;
}));

(interactive_syntax.core.result_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.core.result_view.cljs$lang$applyTo = (function (seq62869){
var G__62870 = cljs.core.first.call(null,seq62869);
var seq62869__$1 = cljs.core.next.call(null,seq62869);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62870,seq62869__$1);
}));

interactive_syntax.core.print_dialog = (function interactive_syntax$core$print_dialog(db){
var ref = ({"current": null});
var width = reagent.core.atom.call(null,null);
var height = reagent.core.atom.call(null,null);
var line_numbers = reagent.core.atom.call(null,true);
var hider_bars = reagent.core.atom.call(null,true);
return (function (p__63038){
var map__63039 = p__63038;
var map__63039__$1 = cljs.core.__destructure_map.call(null,map__63039);
var db__$1 = map__63039__$1;
var menu = cljs.core.get.call(null,map__63039__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"print","print",1299562414)),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Modal.Header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),true], null),interactive_syntax.strings.PRINT], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_63040 = interactive_syntax.core.node$module$react_bootstrap.Modal;
var _STAR_runtime_state_STAR__orig_val__63042 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63043 = oops.state.prepare_state.call(null,target_obj_63040,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63043);

try{var next_obj_63041 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63040,(0),"Body",true,true,false))?(target_obj_63040["Body"]):null);
return next_obj_63041;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63042);
}})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Warning, this feature is VERY experimental."," You will likely need to print twice for the right document to show up."," Works best in Chrome."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.ReactToPrint,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"trigger","trigger",103466139),(function (){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Button,"Print"], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),"",new cljs.core.Keyword(null,"onBeforeGetContent","onBeforeGetContent",832566318),(function (){
var rect = (function (){var target_obj_63044 = (function (){var target_obj_63048 = ref;
var _STAR_runtime_state_STAR__orig_val__63050 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63051 = oops.state.prepare_state.call(null,target_obj_63048,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63051);

try{var next_obj_63049 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63048,(0),"current",true,true,false))?(target_obj_63048["current"]):null);
return next_obj_63049;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63050);
}})();
var _STAR_runtime_state_STAR__orig_val__63052 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63053 = oops.state.prepare_state.call(null,target_obj_63044,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63053);

try{var call_info_63046 = [target_obj_63044,(function (){var next_obj_63047 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63044,(0),"getBoundingClientRect",true,true,false))?(target_obj_63044["getBoundingClientRect"]):null);
return next_obj_63047;
})()];
var fn_63045 = (call_info_63046[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_63045,oops.state.get_last_access_modifier.call(null))){
if((!((fn_63045 == null)))){
return fn_63045.call((call_info_63046[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63052);
}})();
cljs.core.reset_BANG_.call(null,width,(function (){var target_obj_63054 = rect;
var _STAR_runtime_state_STAR__orig_val__63056 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63057 = oops.state.prepare_state.call(null,target_obj_63054,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63057);

try{var next_obj_63055 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63054,(0),"width",true,true,false))?(target_obj_63054["width"]):null);
return next_obj_63055;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63056);
}})());

return cljs.core.reset_BANG_.call(null,height,(function (){var target_obj_63058 = rect;
var _STAR_runtime_state_STAR__orig_val__63060 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63061 = oops.state.prepare_state.call(null,target_obj_63058,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63061);

try{var next_obj_63059 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63058,(0),"height",true,true,false))?(target_obj_63058["height"]):null);
return next_obj_63059;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63060);
}})());
}),new cljs.core.Keyword(null,"content","content",15833224),(function (){
var target_obj_63062 = ref;
var _STAR_runtime_state_STAR__orig_val__63064 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63065 = oops.state.prepare_state.call(null,target_obj_63062,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63065);

try{var next_obj_63063 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63062,(0),"current",true,true,false))?(target_obj_63062["current"]):null);
return next_obj_63063;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63064);
}})], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,"Line Numbers: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.Switch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,line_numbers),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63036_SHARP_){
return cljs.core.reset_BANG_.call(null,line_numbers,p1__63036_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,"Hider Bars: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.Switch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,hider_bars),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63037_SHARP_){
return cljs.core.reset_BANG_.call(null,hider_bars,p1__63037_SHARP_);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.editor_view,db__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for-print","for-print",318613756),true,new cljs.core.Keyword(null,"print-ref","print-ref",802171881),ref,new cljs.core.Keyword(null,"print-options","print-options",11816558),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"gutters","gutters",688671428),new cljs.core.Keyword(null,"foldGutter","foldGutter",-191001083),new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),new cljs.core.Keyword(null,"showCursorWhenSelecting","showCursorWhenSelecting",169880137),new cljs.core.Keyword(null,"hider-bars","hider-bars",-904887670),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),new cljs.core.Keyword(null,"height","height",1025178622)],[["CodeMirror-linenumbers"],false,false,false,cljs.core.deref.call(null,hider_bars),cljs.core.deref.call(null,width),"neo",Infinity,"nocursor",cljs.core.deref.call(null,line_numbers),cljs.core.deref.call(null,height)])], null)], null)], null)], null)], null);
});
});
interactive_syntax.core.home_page = (function interactive_syntax$core$home_page(var_args){
var args__22092__auto__ = [];
var len__22082__auto___63124 = arguments.length;
var i__22083__auto___63125 = (0);
while(true){
if((i__22083__auto___63125 < len__22082__auto___63124)){
args__22092__auto__.push((arguments[i__22083__auto___63125]));

var G__63126 = (i__22083__auto___63125 + (1));
i__22083__auto___63125 = G__63126;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.core.home_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.core.home_page.cljs$core$IFn$_invoke$arity$variadic = (function (p__63070,p__63071){
var map__63072 = p__63070;
var map__63072__$1 = cljs.core.__destructure_map.call(null,map__63072);
var db = map__63072__$1;
var map__63073 = cljs.core.get.call(null,map__63072__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__63073__$1 = cljs.core.__destructure_map.call(null,map__63073);
var orientation = cljs.core.get.call(null,map__63073__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var fs = cljs.core.get.call(null,map__63072__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var buffers = cljs.core.get.call(null,map__63072__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var output = cljs.core.get.call(null,map__63072__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var version = cljs.core.get.call(null,map__63072__$1,new cljs.core.Keyword(null,"version","version",425292698));
var menu = cljs.core.get.call(null,map__63072__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var split = cljs.core.get.call(null,map__63072__$1,new cljs.core.Keyword(null,"split","split",-599435118));
var app_pane = cljs.core.get.call(null,map__63072__$1,new cljs.core.Keyword(null,"app-pane","app-pane",45757101));
var vec__63074 = p__63071;
var map__63077 = cljs.core.nth.call(null,vec__63074,(0),null);
var map__63077__$1 = cljs.core.__destructure_map.call(null,map__63077);
var opts = map__63077__$1;
var editor_ref = cljs.core.get.call(null,map__63077__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var editor_reset_ref = cljs.core.get.call(null,map__63077__$1,new cljs.core.Keyword(null,"editor-reset","editor-reset",-1897270605));
var repl_ref = cljs.core.get.call(null,map__63077__$1,new cljs.core.Keyword(null,"repl","repl",-35398667));
var visr_run_ref = cljs.core.get.call(null,map__63077__$1,new cljs.core.Keyword(null,"visr-run","visr-run",101348956));
var visual_syntax = cljs.core.get.call(null,map__63077__$1,new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),true);
var search = (new URLSearchParams(window.location.search));
interactive_syntax.core.node$module$chonky.setChonkyDefaults(({"iconComponent": interactive_syntax.core.node$module$chonky_icon_fontawesome.ChonkyIconFA}));

(interactive_syntax.core.node$module$codemirror.commands.save = (function (){
return interactive_syntax.core.save_file.call(null,db);
}));

(window.CodeMirror = interactive_syntax.core.node$module$codemirror);

(interactive_syntax.core.node$module$codemirror.hint.clojure = (function (p1__63066_SHARP_){
var pos = (function (){var target_obj_63078 = p1__63066_SHARP_;
var _STAR_runtime_state_STAR__orig_val__63082 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63083 = oops.state.prepare_state.call(null,target_obj_63078,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63083);

try{var call_info_63080 = [target_obj_63078,(function (){var next_obj_63081 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63078,(0),"getCursor",true,true,false))?(target_obj_63078["getCursor"]):null);
return next_obj_63081;
})()];
var fn_63079 = (call_info_63080[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_63079,oops.state.get_last_access_modifier.call(null))){
if((!((fn_63079 == null)))){
return fn_63079.call((call_info_63080[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63082);
}})();
var base = (function (){var target_obj_63084 = interactive_syntax.core.node$module$codemirror.hint;
var _STAR_runtime_state_STAR__orig_val__63088 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63089 = oops.state.prepare_state.call(null,target_obj_63084,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63089);

try{var call_info_63086 = [target_obj_63084,(function (){var next_obj_63087 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63084,(0),"fromList",true,true,false))?(target_obj_63084["fromList"]):null);
return next_obj_63087;
})()];
var fn_63085 = (call_info_63086[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_63085,oops.state.get_last_access_modifier.call(null))){
if((!((fn_63085 == null)))){
return fn_63085.call((call_info_63086[(0)]),p1__63066_SHARP_,({"words": (function (){var target_obj_63090 = interactive_syntax.core.node$module$codemirror.hintWords;
var _STAR_runtime_state_STAR__orig_val__63092 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63093 = oops.state.prepare_state.call(null,target_obj_63090,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63093);

try{var next_obj_63091 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63090,(0),"clojure",true,true,false))?(target_obj_63090["clojure"]):null);
return next_obj_63091;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63092);
}})()}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63088);
}})();
var near = (function (){var target_obj_63094 = interactive_syntax.core.node$module$codemirror.hint;
var _STAR_runtime_state_STAR__orig_val__63098 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63099 = oops.state.prepare_state.call(null,target_obj_63094,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63099);

try{var call_info_63096 = [target_obj_63094,(function (){var next_obj_63097 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63094,(0),"anyword",true,true,false))?(target_obj_63094["anyword"]):null);
return next_obj_63097;
})()];
var fn_63095 = (call_info_63096[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_63095,oops.state.get_last_access_modifier.call(null))){
if((!((fn_63095 == null)))){
return fn_63095.call((call_info_63096[(0)]),p1__63066_SHARP_);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63098);
}})();
var from = (cljs.core.truth_(base)?(function (){var target_obj_63100 = base;
var _STAR_runtime_state_STAR__orig_val__63102 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63103 = oops.state.prepare_state.call(null,target_obj_63100,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63103);

try{var next_obj_63101 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63100,(0),"from",true,true,false))?(target_obj_63100["from"]):null);
return next_obj_63101;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63102);
}})():(cljs.core.truth_(near)?(function (){var target_obj_63104 = near;
var _STAR_runtime_state_STAR__orig_val__63106 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63107 = oops.state.prepare_state.call(null,target_obj_63104,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63107);

try{var next_obj_63105 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63104,(0),"from",true,true,false))?(target_obj_63104["from"]):null);
return next_obj_63105;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63106);
}})():pos
));
var to = (cljs.core.truth_(base)?(function (){var target_obj_63108 = base;
var _STAR_runtime_state_STAR__orig_val__63110 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63111 = oops.state.prepare_state.call(null,target_obj_63108,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63111);

try{var next_obj_63109 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63108,(0),"to",true,true,false))?(target_obj_63108["to"]):null);
return next_obj_63109;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63110);
}})():(cljs.core.truth_(near)?(function (){var target_obj_63112 = near;
var _STAR_runtime_state_STAR__orig_val__63114 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63115 = oops.state.prepare_state.call(null,target_obj_63112,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63115);

try{var next_obj_63113 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63112,(0),"to",true,true,false))?(target_obj_63112["to"]):null);
return next_obj_63113;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63114);
}})():pos
));
var base__$1 = (cljs.core.truth_(base)?(function (){var target_obj_63116 = base;
var _STAR_runtime_state_STAR__orig_val__63118 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63119 = oops.state.prepare_state.call(null,target_obj_63116,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63119);

try{var next_obj_63117 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63116,(0),"list",true,true,false))?(target_obj_63116["list"]):null);
return next_obj_63117;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63118);
}})():[]);
var near__$1 = (cljs.core.truth_(near)?(function (){var target_obj_63120 = near;
var _STAR_runtime_state_STAR__orig_val__63122 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__63123 = oops.state.prepare_state.call(null,target_obj_63120,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__63123);

try{var next_obj_63121 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_63120,(0),"list",true,true,false))?(target_obj_63120["list"]):null);
return next_obj_63121;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__63122);
}})():[]);
return ({"from": from, "to": to, "list": near__$1.concat(base__$1)});
}));

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,version),interactive_syntax.db.version)){
} else {
interactive_syntax.db.reset_db_BANG_.call(null,db);

if(cljs.core.truth_((function (){var or__20754__auto__ = search.get("hide-splash");
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"splash","splash",-1122760796));
}
})())){
} else {
cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"splash","splash",-1122760796));
}

cljs.core.reset_BANG_.call(null,version,interactive_syntax.db.version);
}

return new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"main",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_hotkeys.GlobalHotKeys,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyMap","keyMap",945500512),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-file","save-file",-250442926),"ctrl+s",new cljs.core.Keyword(null,"run-program","run-program",1816766652),"ctrl+r"], null),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-file","save-file",-250442926),(function (v){
v.preventDefault();

return interactive_syntax.core.save_file.call(null,db);
}),new cljs.core.Keyword(null,"run-program","run-program",1816766652),(function (v){
v.preventDefault();

cljs.core.reset_BANG_.call(null,output,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));

return interactive_syntax.env.eval_buffer.call(null,db);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.splash_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.new_file_action,db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.save_dialog,db,opts], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.load_dialog,db,opts], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.add_resource_dialog,db,opts], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.import_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.confirm_wipe_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.options_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.confirm_save_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.new_folder_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.copy_file_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.rename_file_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.deps_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.push_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.pull_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.auth_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.hold_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.error_dialog,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.print_dialog,db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.button_row,db], null)], null),((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,buffers)),(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 auto",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.SplitPane,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"split","split",-599435118),cljs.core.deref.call(null,orientation),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__63067_SHARP_){
return cljs.core.reset_BANG_.call(null,split,(p1__63067_SHARP_[(0)]));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_split_pane$lib$Pane,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initialSize","initialSize",1481327239),cljs.core.deref.call(null,split),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.editor_view,db,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor-reset","editor-reset",-1897270605),editor_reset_ref,new cljs.core.Keyword(null,"editor","editor",-989377770),editor_ref,new cljs.core.Keyword(null,"visr-run","visr-run",101348956),visr_run_ref,new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),visual_syntax], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,app_pane))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.SplitPane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"split","split",-599435118),interactive_syntax.utils.swap_orientation.call(null,cljs.core.deref.call(null,orientation))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_split_pane$lib$Pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialSize","initialSize",1481327239),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.result_view,db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor","editor",-989377770),repl_ref,new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),visual_syntax], null)], null)], null),cljs.core.deref.call(null,app_pane)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.result_view,db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor","editor",-989377770),repl_ref,new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),visual_syntax], null)], null))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 auto",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Tabs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defaultActiveKey","defaultActiveKey",-637761353),"1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.node$module$react_bootstrap.Tab,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eventKey","eventKey",-828373657),"1",new cljs.core.Keyword(null,"title","title",636505583),"Test"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.core.SplitPane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"split","split",-599435118),cljs.core.deref.call(null,orientation)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.editor_view,db,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor-reset","editor-reset",-1897270605),editor_reset_ref,new cljs.core.Keyword(null,"editor","editor",-989377770),editor_ref,new cljs.core.Keyword(null,"visr-run","visr-run",101348956),visr_run_ref,new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),visual_syntax], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.result_view,db,repl_ref], null)], null)], null)], null)], null))], null);
}));

(interactive_syntax.core.home_page.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.core.home_page.cljs$lang$applyTo = (function (seq63068){
var G__63069 = cljs.core.first.call(null,seq63068);
var seq63068__$1 = cljs.core.next.call(null,seq63068);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63069,seq63068__$1);
}));

interactive_syntax.core.mount_root = (function interactive_syntax$core$mount_root(var_args){
var args__22092__auto__ = [];
var len__22082__auto___63161 = arguments.length;
var i__22083__auto___63162 = (0);
while(true){
if((i__22083__auto___63162 < len__22082__auto___63161)){
args__22092__auto__.push((arguments[i__22083__auto___63162]));

var G__63163 = (i__22083__auto___63162 + (1));
i__22083__auto___63162 = G__63163;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return interactive_syntax.core.mount_root.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(interactive_syntax.core.mount_root.cljs$core$IFn$_invoke$arity$variadic = (function (p__63143){
var vec__63144 = p__63143;
var map__63147 = cljs.core.nth.call(null,vec__63144,(0),null);
var map__63147__$1 = cljs.core.__destructure_map.call(null,map__63147);
var debug = cljs.core.get.call(null,map__63147__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var search = (new URLSearchParams(window.location.search));
var get_state_url = search.get("get-state-from");
var id = (function (){var or__20754__auto__ = search.get("send-state-id");
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})();
var send_state_url = search.get("send-state-to");
var import_zip_url = search.get("import-zip");
var embedded_QMARK_ = search.get("embedded");
var send_rate = search.get("send-rate");
var fullscreen_QMARK_ = search.get("fullscreen");
var last_send = reagent.core.atom.call(null,Date.now());
var editor_reset_ref = reagent.core.atom.call(null,null);
var for_print_QMARK_ = search.get("for-print");
var buffer_text = search.get("buffer-text");
var buffer_theme = search.get("buffer-theme");
var buffer_mode = search.get("buffer-mode");
var line_numbers = search.get("line-numbers");
var font_size = search.get("font-size");
var hider_bars = search.get("show-hider-bars");
var visual_syntax = search.get("visual-syntax");
var print_width = search.get("print-width");
var print_height = search.get("print-height");
var sandbox = search.get("sandbox");
var debug__$1 = (function (){var or__20754__auto__ = debug;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return search.get("debug");
}
})();
var msg_counter = reagent.core.atom.call(null,(1));
return interactive_syntax.utils.cb_thread.call(null,(function (p1__63127_SHARP_){
if(cljs.core.truth_(get_state_url)){
return ajax.core.GET.call(null,get_state_url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),p1__63127_SHARP_], null));
} else {
if(cljs.core.truth_(import_zip_url)){
return ajax.core.GET.call(null,import_zip_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arraybuffer","arraybuffer",1394959763)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),p1__63127_SHARP_], null));
} else {
return p1__63127_SHARP_.call(null);

}
}
}),(function (p1__63130_SHARP_,p2__63128_SHARP_){
if(cljs.core.truth_(get_state_url)){
var map__63148 = cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),p2__63128_SHARP_);
var map__63148__$1 = cljs.core.__destructure_map.call(null,map__63148);
var zip = cljs.core.get.call(null,map__63148__$1,new cljs.core.Keyword(null,"zip","zip",678448180));
var db = cljs.core.get.call(null,map__63148__$1,new cljs.core.Keyword(null,"db","db",993250759));
return interactive_syntax.utils.cb_thread.call(null,(function (p1__63129_SHARP_){
return interactive_syntax.db.default_db.call(null,new cljs.core.Keyword(null,"temp","temp",1791541284),p1__63129_SHARP_,db);
}),(function (n,db__$1){
return interactive_syntax.fs.import_from_zip.call(null,db__$1,zip,(function (){
return p1__63130_SHARP_.call(null,db__$1);
}));
}));
} else {
if(cljs.core.truth_(import_zip_url)){
return interactive_syntax.utils.cb_thread.call(null,(function (p1__63131_SHARP_){
return interactive_syntax.db.default_db.call(null,new cljs.core.Keyword(null,"temp","temp",1791541284),p1__63131_SHARP_);
}),(function (n,db){
return interactive_syntax.fs.import_from_zip.call(null,db,p2__63128_SHARP_,(function (){
return p1__63130_SHARP_.call(null,db);
}));
}));
} else {
if(cljs.core.truth_(embedded_QMARK_)){
return interactive_syntax.db.default_db.call(null,new cljs.core.Keyword(null,"temp","temp",1791541284),p1__63130_SHARP_);
} else {
return interactive_syntax.db.default_db.call(null,new cljs.core.Keyword(null,"local","local",-1497766724),p1__63130_SHARP_);

}
}
}
}),(function (p1__63133_SHARP_,p2__63132_SHARP_){
if(cljs.core.truth_(send_state_url)){
return interactive_syntax.fs.state__GT_serializable.call(null,p2__63132_SHARP_,(function (res){
return p1__63133_SHARP_.call(null,p2__63132_SHARP_,res);
}));
} else {
return p1__63133_SHARP_.call(null,p2__63132_SHARP_);
}
}),(function() { 
var G__63164__delegate = function (next,p__63149,p__63150){
var map__63151 = p__63149;
var map__63151__$1 = cljs.core.__destructure_map.call(null,map__63151);
var db = map__63151__$1;
var map__63152 = cljs.core.get.call(null,map__63151__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__63152__$1 = cljs.core.__destructure_map.call(null,map__63152);
var db_font_size = cljs.core.get.call(null,map__63152__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var db_sandbox = cljs.core.get.call(null,map__63152__$1,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402));
var show_editors = cljs.core.get.call(null,map__63152__$1,new cljs.core.Keyword(null,"show-editors","show-editors",-2067467327));
var fs = cljs.core.get.call(null,map__63151__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var menu = cljs.core.get.call(null,map__63151__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var input = cljs.core.get.call(null,map__63151__$1,new cljs.core.Keyword(null,"input","input",556931961));
var backing = cljs.core.get.call(null,map__63151__$1,new cljs.core.Keyword(null,"backing","backing",-293947460));
var file_changed = cljs.core.get.call(null,map__63151__$1,new cljs.core.Keyword(null,"file-changed","file-changed",-339390111));
var vec__63153 = p__63150;
var serialized_state = cljs.core.nth.call(null,vec__63153,(0),null);
if(cljs.core.truth_(debug__$1)){
(window.git = interactive_syntax.core.node$module$isomorphic_git);

(window.db = db);

(window.fs = fs);

(window.isohttp = interactive_syntax.core.node$module$isomorphic_git$http$web);

(window.captureState = (function (p1__63134_SHARP_){
return interactive_syntax.fs.capture_state_BANG_.call(null,db,p1__63134_SHARP_);
}));
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),new cljs.core.Keyword(null,"hold","hold",-1621118005))){
cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.peek.call(null,cljs.core.deref.call(null,menu)),null)){
cljs.core.reset_BANG_.call(null,menu,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309)], null));
} else {
}

if(cljs.core.truth_(send_state_url)){
ajax.core.POST.call(null,send_state_url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"number","number",1570378438),(0),new cljs.core.Keyword(null,"msg","msg",-1386103444),serialized_state], null)], null));

cljs.core.add_watch.call(null,backing,new cljs.core.Keyword("interactive-syntax.core","state-changed","interactive-syntax.core/state-changed",-1975556413),(function (k,r,o,n){
if(cljs.core._EQ_.call(null,o,n)){
return null;
} else {
ajax.core.POST.call(null,send_state_url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.deref.call(null,msg_counter),new cljs.core.Keyword(null,"msg","msg",-1386103444),n], null)], null));

return cljs.core.swap_BANG_.call(null,msg_counter,cljs.core.inc);
}
}));
} else {
}

if(cljs.core.truth_(embedded_QMARK_)){
var resetting_QMARK__63165 = reagent.core.atom.call(null,false);
var send_full_63166 = (function (){
return interactive_syntax.utils.cb_thread.call(null,(function (p1__63135_SHARP_){
return interactive_syntax.fs.state__GT_serializable.call(null,db,p1__63135_SHARP_);
}),(function (p1__63137_SHARP_,p2__63136_SHARP_){
return window.top.postMessage(({"action": "state", "id": embedded_QMARK_, "data": p2__63136_SHARP_}),"*");
}));
});
var send_patch_63167 = (function (){
return window.top.postMessage(({"action": "patch", "id": embedded_QMARK_, "data": cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),cljs.core.deref.call(null,backing))}),"*");
});
if(cljs.core.truth_(buffer_text)){
cljs.core.reset_BANG_.call(null,input,buffer_text);
} else {
}

if(cljs.core._EQ_.call(null,sandbox,"false")){
cljs.core.reset_BANG_.call(null,db_sandbox,false);
} else {
}

if(cljs.core.truth_(font_size)){
cljs.core.reset_BANG_.call(null,db_font_size,font_size);
} else {
}

if(cljs.core._EQ_.call(null,visual_syntax,"false")){
cljs.core.reset_BANG_.call(null,show_editors,false);
} else {
}

if(cljs.core.truth_(debug__$1)){
(window.ready = true);
} else {
}

cljs.core.add_watch.call(null,file_changed,new cljs.core.Keyword("interactive-syntax.core","embedded-state-changed","interactive-syntax.core/embedded-state-changed",1596047883),(function (k,r,o,n){
if(cljs.core.truth_((function (){var or__20754__auto__ = cljs.core.deref.call(null,resetting_QMARK__63165);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core._EQ_.call(null,o,n);
}
})())){
return null;
} else {
send_full_63166.call(null);

return cljs.core.reset_BANG_.call(null,last_send,Date.now());
}
}));

cljs.core.add_watch.call(null,backing,new cljs.core.Keyword("interactive-syntax.core","embedded-state-changed","interactive-syntax.core/embedded-state-changed",1596047883),(function (k,r,o,n){
if(cljs.core.truth_((function (){var or__20754__auto__ = cljs.core.deref.call(null,resetting_QMARK__63165);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core._EQ_.call(null,o,n);
}
})())){
return null;
} else {
if(((Date.now() - cljs.core.deref.call(null,last_send)) > (function (){var or__20754__auto__ = send_rate;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})())){
send_patch_63167.call(null);

return cljs.core.reset_BANG_.call(null,last_send,Date.now());
} else {
return null;
}
}
}));

cljs.core.add_watch.call(null,editor_reset_ref,new cljs.core.Keyword("interactive-syntax.core","reset-print","interactive-syntax.core/reset-print",-1349221833),(function (k,r,o,n){
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.deref.call(null,resetting_QMARK__63165);
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core.not.call(null,n)) && (cljs.core.not_EQ_.call(null,o,n)));
} else {
return and__20748__auto__;
}
})())){
var n_63168__$1 = cljs.core.peek.call(null,cljs.core.deref.call(null,menu));
while(true){
if(cljs.core._EQ_.call(null,n_63168__$1,new cljs.core.Keyword(null,"hold","hold",-1621118005))){
cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

var G__63169 = cljs.core.peek.call(null,cljs.core.deref.call(null,menu));
n_63168__$1 = G__63169;
continue;
} else {
}
break;
}

cljs.core.swap_BANG_.call(null,menu,cljs.core.pop);

if(cljs.core.truth_(debug__$1)){
(window.ready = true);
} else {
}

return cljs.core.reset_BANG_.call(null,resetting_QMARK__63165,false);
} else {
return null;
}
}));

send_full_63166.call(null);

window.addEventListener("message",(function (p1__63138_SHARP_){
var pred__63156 = cljs.core._EQ_;
var expr__63157 = p1__63138_SHARP_.data.action;
if(cljs.core.truth_(pred__63156.call(null,"set-state",expr__63157))){
var map__63159 = cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),p1__63138_SHARP_.data.state);
var map__63159__$1 = cljs.core.__destructure_map.call(null,map__63159);
var new_backing = cljs.core.get.call(null,map__63159__$1,new cljs.core.Keyword(null,"db","db",993250759));
var zip = cljs.core.get.call(null,map__63159__$1,new cljs.core.Keyword(null,"zip","zip",678448180));
var map__63160 = cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),p1__63138_SHARP_.data.extrafs);
var map__63160__$1 = cljs.core.__destructure_map.call(null,map__63160);
var extra_zip = cljs.core.get.call(null,map__63160__$1,new cljs.core.Keyword(null,"extra-zip","extra-zip",-1357096966));
var new_backing__$1 = (function (){var or__20754__auto__ = cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),p1__63138_SHARP_.data.patch);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new_backing;
}
})();
if(cljs.core.truth_(debug__$1)){
(window.ready = false);
} else {
}

cljs.core.reset_BANG_.call(null,resetting_QMARK__63165,true);

return interactive_syntax.utils.cb_thread.call(null,(function (p1__63139_SHARP_){
return interactive_syntax.fs.wipe_project_BANG_.call(null,db,p1__63139_SHARP_);
}),(function (p1__63140_SHARP_){
return interactive_syntax.fs.import_from_zip.call(null,db,zip,p1__63140_SHARP_);
}),(function (p1__63141_SHARP_){
if(cljs.core.truth_(extra_zip)){
return interactive_syntax.fs.import_from_zip.call(null,db,extra_zip,p1__63141_SHARP_);
} else {
return p1__63141_SHARP_.call(null);
}
}),(function (){
cljs.core.reset_BANG_.call(null,backing,new_backing__$1);

var old_63170 = cljs.core.deref.call(null,menu);
cljs.core.reset_BANG_.call(null,menu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"force-update","force-update",725693267)], null));

cljs.core.reset_BANG_.call(null,menu,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309)], null));

return cljs.core.swap_BANG_.call(null,menu,cljs.core.conj,new cljs.core.Keyword(null,"hold","hold",-1621118005));
}));
} else {
if(cljs.core.truth_(pred__63156.call(null,"run-buffer",expr__63157))){
return interactive_syntax.env.eval_buffer.call(null,db);
} else {
return null;
}
}
}));
} else {
}

if(cljs.core.truth_(for_print_QMARK_)){
return interactive_syntax.utils.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.editor_view,db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for-print","for-print",318613756),for_print_QMARK_,new cljs.core.Keyword(null,"print-options","print-options",11816558),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"gutters","gutters",688671428),new cljs.core.Keyword(null,"foldGutter","foldGutter",-191001083),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),new cljs.core.Keyword(null,"showCursorWhenSelecting","showCursorWhenSelecting",169880137),new cljs.core.Keyword(null,"hider-bars","hider-bars",-904887670),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),new cljs.core.Keyword(null,"height","height",1025178622)],[["CodeMirror-linenumbers"],false,(function (){var or__20754__auto__ = font_size;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (12);
}
})(),false,false,hider_bars,(function (){var or__20754__auto__ = buffer_mode;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "clojure";
}
})(),(function (){var or__20754__auto__ = print_width;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1000);
}
})(),(function (){var or__20754__auto__ = buffer_theme;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "neo";
}
})(),Infinity,"nocursor",line_numbers,(function (){var or__20754__auto__ = print_height;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1000);
}
})()])], null)], null),document.getElementById("app"));
} else {
if(cljs.core.truth_(fullscreen_QMARK_)){
return interactive_syntax.utils.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.editor_view,db], null),document.getElementById("app"));
} else {
return interactive_syntax.utils.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.core.home_page,db,(cljs.core.truth_(embedded_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-reset","editor-reset",-1897270605),editor_reset_ref], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visual-syntax","visual-syntax",-696846323),cljs.core.not_EQ_.call(null,visual_syntax,"false")], null))], null),document.getElementById("app"));

}
}
};
var G__63164 = function (next,p__63149,var_args){
var p__63150 = null;
if (arguments.length > 2) {
var G__63171__i = 0, G__63171__a = new Array(arguments.length -  2);
while (G__63171__i < G__63171__a.length) {G__63171__a[G__63171__i] = arguments[G__63171__i + 2]; ++G__63171__i;}
  p__63150 = new cljs.core.IndexedSeq(G__63171__a,0,null);
} 
return G__63164__delegate.call(this,next,p__63149,p__63150);};
G__63164.cljs$lang$maxFixedArity = 2;
G__63164.cljs$lang$applyTo = (function (arglist__63172){
var next = cljs.core.first(arglist__63172);
arglist__63172 = cljs.core.next(arglist__63172);
var p__63149 = cljs.core.first(arglist__63172);
var p__63150 = cljs.core.rest(arglist__63172);
return G__63164__delegate(next,p__63149,p__63150);
});
G__63164.cljs$core$IFn$_invoke$arity$variadic = G__63164__delegate;
return G__63164;
})()
);
}));

(interactive_syntax.core.mount_root.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(interactive_syntax.core.mount_root.cljs$lang$applyTo = (function (seq63142){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63142));
}));

interactive_syntax.core.init_BANG_ = (function interactive_syntax$core$init_BANG_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___63178 = arguments.length;
var i__22083__auto___63179 = (0);
while(true){
if((i__22083__auto___63179 < len__22082__auto___63178)){
args__22092__auto__.push((arguments[i__22083__auto___63179]));

var G__63180 = (i__22083__auto___63179 + (1));
i__22083__auto___63179 = G__63180;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return interactive_syntax.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(interactive_syntax.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__63174){
var vec__63175 = p__63174;
var opts = cljs.core.nth.call(null,vec__63175,(0),null);
return interactive_syntax.core.mount_root.call(null,opts);
}));

(interactive_syntax.core.init_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(interactive_syntax.core.init_BANG_.cljs$lang$applyTo = (function (seq63173){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63173));
}));

