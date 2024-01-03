// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('interactive_syntax.fs');
goog.require('cljs.core');
goog.require('interactive_syntax.db');
goog.require('interactive_syntax.utils');
goog.require('cljs.pprint');
goog.require('cljs.reader');
goog.require('cognitect.transit');
goog.require('oops.core');
interactive_syntax.fs.node$module$crypto_browserify = require('crypto-browserify');
interactive_syntax.fs.node$module$jszip = require('jszip');
interactive_syntax.fs.node$module$file_saver = require('file-saver');
goog.require('goog.object');
goog.scope(function(){
interactive_syntax.fs.goog$module$goog$object = goog.module.get('goog.object');
});
interactive_syntax.fs.zip_root = "/project";
interactive_syntax.fs.manifest_path = "manifest.edn";
interactive_syntax.fs.filepath__GT_id = (function interactive_syntax$fs$filepath__GT_id(filepath){
return interactive_syntax.fs.node$module$crypto_browserify.createHash("sha1").update(filepath).digest("base64");
});
interactive_syntax.fs.recursive_rm = (function interactive_syntax$fs$recursive_rm(fs,dir,cb){
var target_obj_31409 = fs;
var _STAR_runtime_state_STAR__orig_val__31413 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31414 = oops.state.prepare_state.call(null,target_obj_31409,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31414);

try{var call_info_31411 = [target_obj_31409,(function (){var next_obj_31412 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31409,(0),"stat",true,true,false))?(target_obj_31409["stat"]):null);
return next_obj_31412;
})()];
var fn_31410 = (call_info_31411[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31410,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31410 == null)))){
return fn_31410.call((call_info_31411[(0)]),dir,(function (err,stats){
if(cljs.core.truth_((function (){var target_obj_31415 = stats;
var _STAR_runtime_state_STAR__orig_val__31419 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31420 = oops.state.prepare_state.call(null,target_obj_31415,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31420);

try{var call_info_31417 = [target_obj_31415,(function (){var next_obj_31418 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31415,(0),"isDirectory",true,true,false))?(target_obj_31415["isDirectory"]):null);
return next_obj_31418;
})()];
var fn_31416 = (call_info_31417[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31416,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31416 == null)))){
return fn_31416.call((call_info_31417[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31419);
}})())){
var target_obj_31421 = fs;
var _STAR_runtime_state_STAR__orig_val__31425 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31426 = oops.state.prepare_state.call(null,target_obj_31421,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31426);

try{var call_info_31423 = [target_obj_31421,(function (){var next_obj_31424 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31421,(0),"readdir",true,true,false))?(target_obj_31421["readdir"]):null);
return next_obj_31424;
})()];
var fn_31422 = (call_info_31423[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31422,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31422 == null)))){
return fn_31422.call((call_info_31423[(0)]),dir,(function (err__$1,files){
return interactive_syntax.utils.cb_loop.call(null,files,(function (p1__31408_SHARP_,p2__31407_SHARP_){
var fullpath = path.join(dir,p2__31407_SHARP_);
return interactive_syntax.fs.recursive_rm.call(null,fs,fullpath,p1__31408_SHARP_);
}),(function (){
var target_obj_31427 = fs;
var _STAR_runtime_state_STAR__orig_val__31431 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31432 = oops.state.prepare_state.call(null,target_obj_31427,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31432);

try{var call_info_31429 = [target_obj_31427,(function (){var next_obj_31430 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31427,(0),"rmdir",true,true,false))?(target_obj_31427["rmdir"]):null);
return next_obj_31430;
})()];
var fn_31428 = (call_info_31429[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31428,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31428 == null)))){
return fn_31428.call((call_info_31429[(0)]),dir,cb);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31431);
}}));
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31425);
}} else {
var target_obj_31433 = fs;
var _STAR_runtime_state_STAR__orig_val__31437 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31438 = oops.state.prepare_state.call(null,target_obj_31433,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31438);

try{var call_info_31435 = [target_obj_31433,(function (){var next_obj_31436 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31433,(0),"unlink",true,true,false))?(target_obj_31433["unlink"]):null);
return next_obj_31436;
})()];
var fn_31434 = (call_info_31435[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31434,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31434 == null)))){
return fn_31434.call((call_info_31435[(0)]),dir,cb);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31437);
}}
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31413);
}});
interactive_syntax.fs.copy_path = (function interactive_syntax$fs$copy_path(fs,src,dst,cb){
var target_obj_31450 = fs;
var _STAR_runtime_state_STAR__orig_val__31454 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31455 = oops.state.prepare_state.call(null,target_obj_31450,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31455);

try{var call_info_31452 = [target_obj_31450,(function (){var next_obj_31453 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31450,(0),"stat",true,true,false))?(target_obj_31450["stat"]):null);
return next_obj_31453;
})()];
var fn_31451 = (call_info_31452[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31451,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31451 == null)))){
return fn_31451.call((call_info_31452[(0)]),src,(function (err,stats){
if(cljs.core.truth_((function (){var target_obj_31456 = stats;
var _STAR_runtime_state_STAR__orig_val__31460 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31461 = oops.state.prepare_state.call(null,target_obj_31456,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31461);

try{var call_info_31458 = [target_obj_31456,(function (){var next_obj_31459 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31456,(0),"isDirectory",true,true,false))?(target_obj_31456["isDirectory"]):null);
return next_obj_31459;
})()];
var fn_31457 = (call_info_31458[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31457,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31457 == null)))){
return fn_31457.call((call_info_31458[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31460);
}})())){
return interactive_syntax.utils.cb_thread.call(null,(function (p1__31439_SHARP_){
var target_obj_31462 = fs;
var _STAR_runtime_state_STAR__orig_val__31466 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31467 = oops.state.prepare_state.call(null,target_obj_31462,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31467);

try{var call_info_31464 = [target_obj_31462,(function (){var next_obj_31465 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31462,(0),"mkdir",true,true,false))?(target_obj_31462["mkdir"]):null);
return next_obj_31465;
})()];
var fn_31463 = (call_info_31464[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31463,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31463 == null)))){
return fn_31463.call((call_info_31464[(0)]),dst,p1__31439_SHARP_);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31466);
}}),(function (p1__31440_SHARP_){
var target_obj_31468 = fs;
var _STAR_runtime_state_STAR__orig_val__31472 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31473 = oops.state.prepare_state.call(null,target_obj_31468,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31473);

try{var call_info_31470 = [target_obj_31468,(function (){var next_obj_31471 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31468,(0),"readdir",true,true,false))?(target_obj_31468["readdir"]):null);
return next_obj_31471;
})()];
var fn_31469 = (call_info_31470[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31469,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31469 == null)))){
return fn_31469.call((call_info_31470[(0)]),src,p1__31440_SHARP_);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31472);
}}),(function (p1__31444_SHARP_,p2__31445_SHARP_,p3__31441_SHARP_){
return interactive_syntax.utils.cb_loop.call(null,p3__31441_SHARP_,(function (p1__31443_SHARP_,p2__31442_SHARP_){
return interactive_syntax.fs.copy_path.call(null,fs,path.join(src,p2__31442_SHARP_),path.join(dst,p2__31442_SHARP_),p1__31443_SHARP_);
}),cb);
}));
} else {
return interactive_syntax.utils.cb_thread.call(null,(function (p1__31446_SHARP_){
var target_obj_31474 = fs;
var _STAR_runtime_state_STAR__orig_val__31478 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31479 = oops.state.prepare_state.call(null,target_obj_31474,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31479);

try{var call_info_31476 = [target_obj_31474,(function (){var next_obj_31477 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31474,(0),"readFile",true,true,false))?(target_obj_31474["readFile"]):null);
return next_obj_31477;
})()];
var fn_31475 = (call_info_31476[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31475,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31475 == null)))){
return fn_31475.call((call_info_31476[(0)]),src,p1__31446_SHARP_);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31478);
}}),(function (p1__31448_SHARP_,p2__31449_SHARP_,p3__31447_SHARP_){
var target_obj_31480 = fs;
var _STAR_runtime_state_STAR__orig_val__31484 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31485 = oops.state.prepare_state.call(null,target_obj_31480,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31485);

try{var call_info_31482 = [target_obj_31480,(function (){var next_obj_31483 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31480,(0),"writeFile",true,true,false))?(target_obj_31480["writeFile"]):null);
return next_obj_31483;
})()];
var fn_31481 = (call_info_31482[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31481,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31481 == null)))){
return fn_31481.call((call_info_31482[(0)]),dst,p3__31447_SHARP_,cb);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31484);
}}));
}
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31454);
}});
interactive_syntax.fs.file_description = (function interactive_syntax$fs$file_description(fs,filepath,cb){
var target_obj_31486 = fs;
var _STAR_runtime_state_STAR__orig_val__31490 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31491 = oops.state.prepare_state.call(null,target_obj_31486,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31491);

try{var call_info_31488 = [target_obj_31486,(function (){var next_obj_31489 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31486,(0),"stat",true,true,false))?(target_obj_31486["stat"]):null);
return next_obj_31489;
})()];
var fn_31487 = (call_info_31488[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31487,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31487 == null)))){
return fn_31487.call((call_info_31488[(0)]),filepath,(function (err,stats){
var G__31492 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),interactive_syntax.fs.filepath__GT_id.call(null,filepath),new cljs.core.Keyword(null,"name","name",1843675177),path.basename(filepath),new cljs.core.Keyword(null,"isDir","isDir",150673411),(function (){var target_obj_31493 = stats;
var _STAR_runtime_state_STAR__orig_val__31497 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31498 = oops.state.prepare_state.call(null,target_obj_31493,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31498);

try{var call_info_31495 = [target_obj_31493,(function (){var next_obj_31496 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31493,(0),"isDirectory",true,true,false))?(target_obj_31493["isDirectory"]):null);
return next_obj_31496;
})()];
var fn_31494 = (call_info_31495[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31494,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31494 == null)))){
return fn_31494.call((call_info_31495[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31497);
}})(),new cljs.core.Keyword(null,"modDate","modDate",1250622961),stats.ctime], null);
var G__31492__$1 = ((cljs.core._EQ_.call(null,filepath.charAt((0)),"."))?cljs.core.assoc.call(null,G__31492,new cljs.core.Keyword(null,"isHidden","isHidden",-620457608),true):G__31492);
var G__31492__$2 = (cljs.core.truth_((function (){var target_obj_31499 = stats;
var _STAR_runtime_state_STAR__orig_val__31503 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31504 = oops.state.prepare_state.call(null,target_obj_31499,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31504);

try{var call_info_31501 = [target_obj_31499,(function (){var next_obj_31502 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31499,(0),"isSymbolicLink",true,true,false))?(target_obj_31499["isSymbolicLink"]):null);
return next_obj_31502;
})()];
var fn_31500 = (call_info_31501[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31500,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31500 == null)))){
return fn_31500.call((call_info_31501[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31503);
}})())?cljs.core.assoc.call(null,G__31492__$1,new cljs.core.Keyword(null,"isSymlink","isSymlink",-1429887549),true):G__31492__$1);
var G__31492__$3 = ((cljs.core.not.call(null,(function (){var target_obj_31505 = stats;
var _STAR_runtime_state_STAR__orig_val__31509 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31510 = oops.state.prepare_state.call(null,target_obj_31505,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31510);

try{var call_info_31507 = [target_obj_31505,(function (){var next_obj_31508 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31505,(0),"isDirectory",true,true,false))?(target_obj_31505["isDirectory"]):null);
return next_obj_31508;
})()];
var fn_31506 = (call_info_31507[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31506,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31506 == null)))){
return fn_31506.call((call_info_31507[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31509);
}})()))?cljs.core.assoc.call(null,G__31492__$2,new cljs.core.Keyword(null,"size","size",1098693007),(function (){var target_obj_31511 = stats;
var _STAR_runtime_state_STAR__orig_val__31513 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31514 = oops.state.prepare_state.call(null,target_obj_31511,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31514);

try{var next_obj_31512 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31511,(0),"size",true,true,false))?(target_obj_31511["size"]):null);
return next_obj_31512;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31513);
}})()):G__31492__$2);
var G__31492__$4 = cljs.core.clj__GT_js.call(null,G__31492__$3)
;
return cb.call(null,G__31492__$4);

}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31490);
}});
interactive_syntax.fs.add_dir_to_zip_BANG_ = (function interactive_syntax$fs$add_dir_to_zip_BANG_(fs,zip,dir,name,cb){
var target_obj_31515 = fs;
var _STAR_runtime_state_STAR__orig_val__31519 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31520 = oops.state.prepare_state.call(null,target_obj_31515,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31520);

try{var call_info_31517 = [target_obj_31515,(function (){var next_obj_31518 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31515,(0),"stat",true,true,false))?(target_obj_31515["stat"]):null);
return next_obj_31518;
})()];
var fn_31516 = (call_info_31517[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31516,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31516 == null)))){
return fn_31516.call((call_info_31517[(0)]),dir,(function (err,stats){
if(cljs.core.truth_((function (){var target_obj_31521 = stats;
var _STAR_runtime_state_STAR__orig_val__31525 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31526 = oops.state.prepare_state.call(null,target_obj_31521,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31526);

try{var call_info_31523 = [target_obj_31521,(function (){var next_obj_31524 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31521,(0),"isDirectory",true,true,false))?(target_obj_31521["isDirectory"]):null);
return next_obj_31524;
})()];
var fn_31522 = (call_info_31523[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31522,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31522 == null)))){
return fn_31522.call((call_info_31523[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31525);
}})())){
var zip__$1 = (cljs.core.truth_(name)?(function (){var target_obj_31527 = zip;
var _STAR_runtime_state_STAR__orig_val__31531 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31532 = oops.state.prepare_state.call(null,target_obj_31527,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31532);

try{var call_info_31529 = [target_obj_31527,(function (){var next_obj_31530 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31527,(0),"folder",true,true,false))?(target_obj_31527["folder"]):null);
return next_obj_31530;
})()];
var fn_31528 = (call_info_31529[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31528,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31528 == null)))){
return fn_31528.call((call_info_31529[(0)]),name);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31531);
}})():zip);
var target_obj_31533 = fs;
var _STAR_runtime_state_STAR__orig_val__31537 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31538 = oops.state.prepare_state.call(null,target_obj_31533,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31538);

try{var call_info_31535 = [target_obj_31533,(function (){var next_obj_31536 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31533,(0),"readdir",true,true,false))?(target_obj_31533["readdir"]):null);
return next_obj_31536;
})()];
var fn_31534 = (call_info_31535[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31534,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31534 == null)))){
return fn_31534.call((call_info_31535[(0)]),dir,(function (err__$1,files){
return (function interactive_syntax$fs$add_dir_to_zip_BANG__$_rec(files__$1,cb__$1){
if(cljs.core.empty_QMARK_.call(null,files__$1)){
return cb__$1.call(null);
} else {
var name__$1 = cljs.core.first.call(null,files__$1);
var fullpath = path.join(dir,name__$1);
return interactive_syntax.fs.add_dir_to_zip_BANG_.call(null,fs,zip__$1,fullpath,name__$1,(function (){
return interactive_syntax$fs$add_dir_to_zip_BANG__$_rec.call(null,cljs.core.rest.call(null,files__$1),cb__$1);
}));
}
}).call(null,files,cb);
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31537);
}} else {
var target_obj_31539 = fs;
var _STAR_runtime_state_STAR__orig_val__31543 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31544 = oops.state.prepare_state.call(null,target_obj_31539,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31544);

try{var call_info_31541 = [target_obj_31539,(function (){var next_obj_31542 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31539,(0),"readFile",true,true,false))?(target_obj_31539["readFile"]):null);
return next_obj_31542;
})()];
var fn_31540 = (call_info_31541[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31540,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31540 == null)))){
return fn_31540.call((call_info_31541[(0)]),dir,(function (err__$1,txt){
var target_obj_31545_31551 = zip;
var _STAR_runtime_state_STAR__orig_val__31549_31552 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31550_31553 = oops.state.prepare_state.call(null,target_obj_31545_31551,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31550_31553);

try{var call_info_31547_31554 = [target_obj_31545_31551,(function (){var next_obj_31548 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31545_31551,(0),"file",true,true,false))?(target_obj_31545_31551["file"]):null);
return next_obj_31548;
})()];
var fn_31546_31555 = (call_info_31547_31554[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31546_31555,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31546_31555 == null)))){
fn_31546_31555.call((call_info_31547_31554[(0)]),name,txt);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31549_31552);
}
return cb.call(null);
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31543);
}}
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31519);
}});
interactive_syntax.fs.export_to_zip = (function interactive_syntax$fs$export_to_zip(p__31558,cb){
var map__31559 = p__31558;
var map__31559__$1 = cljs.core.__destructure_map.call(null,map__31559);
var db = map__31559__$1;
var fs = cljs.core.get.call(null,map__31559__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var version = cljs.core.get.call(null,map__31559__$1,new cljs.core.Keyword(null,"version","version",425292698));
var deps = cljs.core.get.call(null,map__31559__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var zip = (new interactive_syntax.fs.node$module$jszip());
var project = (function (){var target_obj_31560 = zip;
var _STAR_runtime_state_STAR__orig_val__31564 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31565 = oops.state.prepare_state.call(null,target_obj_31560,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31565);

try{var call_info_31562 = [target_obj_31560,(function (){var next_obj_31563 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31560,(0),"folder",true,true,false))?(target_obj_31560["folder"]):null);
return next_obj_31563;
})()];
var fn_31561 = (call_info_31562[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31561,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31561 == null)))){
return fn_31561.call((call_info_31562[(0)]),"project");
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31564);
}})();
var manifest = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visr-version","visr-version",1959045668),cljs.core.deref.call(null,version),new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.deref.call(null,deps)], null);
var target_obj_31566_31582 = project;
var _STAR_runtime_state_STAR__orig_val__31570_31583 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31571_31584 = oops.state.prepare_state.call(null,target_obj_31566_31582,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31571_31584);

try{var call_info_31568_31585 = [target_obj_31566_31582,(function (){var next_obj_31569 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31566_31582,(0),"file",true,true,false))?(target_obj_31566_31582["file"]):null);
return next_obj_31569;
})()];
var fn_31567_31586 = (call_info_31568_31585[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31567_31586,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31567_31586 == null)))){
fn_31567_31586.call((call_info_31568_31585[(0)]),interactive_syntax.fs.manifest_path,(function (){var sb__21923__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31572_31587 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31573_31588 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31574_31589 = true;
var _STAR_print_fn_STAR__temp_val__31575_31590 = (function (x__21924__auto__){
return sb__21923__auto__.append(x__21924__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31574_31589);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31575_31590);

try{cljs.pprint.pprint.call(null,manifest);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31573_31588);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31572_31587);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__21923__auto__);
})());
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31570_31583);
}
return interactive_syntax.utils.cb_thread.call(null,(function (p1__31556_SHARP_){
return interactive_syntax.fs.add_dir_to_zip_BANG_.call(null,fs,project,interactive_syntax.db.files_root,"files",p1__31556_SHARP_);
}),(function (p1__31557_SHARP_){
return interactive_syntax.fs.add_dir_to_zip_BANG_.call(null,fs,project,interactive_syntax.db.deps_root,"deps",p1__31557_SHARP_);
}),(function (){
return (function (){var target_obj_31576 = zip;
var _STAR_runtime_state_STAR__orig_val__31580 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31581 = oops.state.prepare_state.call(null,target_obj_31576,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31581);

try{var call_info_31578 = [target_obj_31576,(function (){var next_obj_31579 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31576,(0),"generateAsync",true,true,false))?(target_obj_31576["generateAsync"]):null);
return next_obj_31579;
})()];
var fn_31577 = (call_info_31578[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31577,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31577 == null)))){
return fn_31577.call((call_info_31578[(0)]),({"type": "blob"}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31580);
}})().then(cb).catch(console.log);
}));
});
interactive_syntax.fs.merge_file = (function interactive_syntax$fs$merge_file(p__31592,file,db_box,cb){
var map__31593 = p__31592;
var map__31593__$1 = cljs.core.__destructure_map.call(null,map__31593);
var db = map__31593__$1;
var fs = cljs.core.get.call(null,map__31593__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var name = path.relative(interactive_syntax.fs.zip_root,path.join("/",(function (){var target_obj_31594 = file;
var _STAR_runtime_state_STAR__orig_val__31596 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31597 = oops.state.prepare_state.call(null,target_obj_31594,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31597);

try{var next_obj_31595 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31594,(0),"name",true,true,false))?(target_obj_31594["name"]):null);
return next_obj_31595;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31596);
}})()));
if(cljs.core._EQ_.call(null,name,interactive_syntax.fs.manifest_path)){
return (function (){var target_obj_31598 = file;
var _STAR_runtime_state_STAR__orig_val__31602 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31603 = oops.state.prepare_state.call(null,target_obj_31598,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31603);

try{var call_info_31600 = [target_obj_31598,(function (){var next_obj_31601 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31598,(0),"async",true,true,false))?(target_obj_31598["async"]):null);
return next_obj_31601;
})()];
var fn_31599 = (call_info_31600[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31599,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31599 == null)))){
return fn_31599.call((call_info_31600[(0)]),"string");
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31602);
}})().then((function (p1__31591_SHARP_){
var new_db = cljs.reader.read_string.call(null,p1__31591_SHARP_);
cljs.core.reset_BANG_.call(null,db_box,new_db);

return cb.call(null);
})).catch(console.log);
} else {
if(cljs.core.truth_((function (){var target_obj_31604 = file;
var _STAR_runtime_state_STAR__orig_val__31606 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31607 = oops.state.prepare_state.call(null,target_obj_31604,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31607);

try{var next_obj_31605 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31604,(0),"dir",true,true,false))?(target_obj_31604["dir"]):null);
return next_obj_31605;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31606);
}})())){
var target_obj_31608 = fs;
var _STAR_runtime_state_STAR__orig_val__31612 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31613 = oops.state.prepare_state.call(null,target_obj_31608,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31613);

try{var call_info_31610 = [target_obj_31608,(function (){var next_obj_31611 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31608,(0),"mkdir",true,true,false))?(target_obj_31608["mkdir"]):null);
return next_obj_31611;
})()];
var fn_31609 = (call_info_31610[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31609,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31609 == null)))){
return fn_31609.call((call_info_31610[(0)]),path.join("/",name),(function (err){
if(cljs.core.truth_((function (){var and__20748__auto__ = err;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not_EQ_.call(null,(function (){var target_obj_31614 = err;
var _STAR_runtime_state_STAR__orig_val__31616 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31617 = oops.state.prepare_state.call(null,target_obj_31614,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31617);

try{var next_obj_31615 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31614,(0),"code",true,true,false))?(target_obj_31614["code"]):null);
return next_obj_31615;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31616);
}})(),"EEXIST");
} else {
return and__20748__auto__;
}
})())){
console.error(err);
} else {
}

return cb.call(null);
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31612);
}} else {
return (function (){var target_obj_31618 = file;
var _STAR_runtime_state_STAR__orig_val__31622 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31623 = oops.state.prepare_state.call(null,target_obj_31618,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31623);

try{var call_info_31620 = [target_obj_31618,(function (){var next_obj_31621 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31618,(0),"async",true,true,false))?(target_obj_31618["async"]):null);
return next_obj_31621;
})()];
var fn_31619 = (call_info_31620[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31619,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31619 == null)))){
return fn_31619.call((call_info_31620[(0)]),"nodebuffer");
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31622);
}})().then((function (buff){
var target_obj_31624 = fs;
var _STAR_runtime_state_STAR__orig_val__31628 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31629 = oops.state.prepare_state.call(null,target_obj_31624,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31629);

try{var call_info_31626 = [target_obj_31624,(function (){var next_obj_31627 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31624,(0),"writeFile",true,true,false))?(target_obj_31624["writeFile"]):null);
return next_obj_31627;
})()];
var fn_31625 = (call_info_31626[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31625,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31625 == null)))){
return fn_31625.call((call_info_31626[(0)]),path.join("/",name),buff,(function (err){
if(cljs.core.truth_(err)){
console.error(err);
} else {
}

return cb.call(null);
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31628);
}})).catch(console.log);

}
}
});
interactive_syntax.fs.import_from_zip = (function interactive_syntax$fs$import_from_zip(p__31635,zip,cb){
var map__31636 = p__31635;
var map__31636__$1 = cljs.core.__destructure_map.call(null,map__31636);
var db = map__31636__$1;
var deps = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var db_box = cljs.core.atom.call(null,null);
return interactive_syntax.utils.cb_thread.call(null,(function (p1__31630_SHARP_){
return interactive_syntax.fs.node$module$jszip.loadAsync(zip).then(p1__31630_SHARP_).catch(console.log);
}),(function (p1__31634_SHARP_,p2__31631_SHARP_){
var files = (function (){var target_obj_31637 = p2__31631_SHARP_;
var _STAR_runtime_state_STAR__orig_val__31639 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31640 = oops.state.prepare_state.call(null,target_obj_31637,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31640);

try{var next_obj_31638 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31637,(0),"files",true,true,false))?(target_obj_31637["files"]):null);
return next_obj_31638;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31639);
}})();
return interactive_syntax.utils.cb_loop.call(null,cljs.core.js_keys.call(null,files),(function (p1__31633_SHARP_,p2__31632_SHARP_){
return interactive_syntax.fs.merge_file.call(null,db,interactive_syntax.fs.goog$module$goog$object.get.call(null,files,p2__31632_SHARP_),db_box,p1__31633_SHARP_);
}),p1__31634_SHARP_);
}),(function (){
cljs.core.swap_BANG_.call(null,deps,cljs.core.into,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db_box)));

return cb.call(null);
}));
});
interactive_syntax.fs.wipe_project_BANG_ = (function interactive_syntax$fs$wipe_project_BANG_(p__31647,cb){
var map__31648 = p__31647;
var map__31648__$1 = cljs.core.__destructure_map.call(null,map__31648);
var db = map__31648__$1;
var input = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"input","input",556931961));
var current_folder = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"current-folder","current-folder",1012906650));
var fs = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var file_browser_folder = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118));
var menu = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var deps = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var file_changed = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"file-changed","file-changed",-339390111));
var running_QMARK_ = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var output = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var current_file = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"current-file","current-file",56284307));
cljs.core.reset_BANG_.call(null,input,"");

cljs.core.reset_BANG_.call(null,output,"");

cljs.core.reset_BANG_.call(null,deps,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_.call(null,file_changed,false);

cljs.core.reset_BANG_.call(null,running_QMARK_,false);

cljs.core.reset_BANG_.call(null,current_folder,interactive_syntax.db.files_root);

cljs.core.reset_BANG_.call(null,current_file,null);

cljs.core.reset_BANG_.call(null,file_browser_folder,interactive_syntax.db.files_root);

cljs.core.reset_BANG_.call(null,menu,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309)], null));

return interactive_syntax.utils.cb_thread.call(null,(function (p1__31643_SHARP_){
var target_obj_31649 = fs;
var _STAR_runtime_state_STAR__orig_val__31653 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31654 = oops.state.prepare_state.call(null,target_obj_31649,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31654);

try{var call_info_31651 = [target_obj_31649,(function (){var next_obj_31652 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31649,(0),"readdir",true,true,false))?(target_obj_31649["readdir"]):null);
return next_obj_31652;
})()];
var fn_31650 = (call_info_31651[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31650,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31650 == null)))){
return fn_31650.call((call_info_31651[(0)]),interactive_syntax.db.files_root,(function (err,files){
return interactive_syntax.utils.cb_loop.call(null,files,(function (p1__31642_SHARP_,p2__31641_SHARP_){
return interactive_syntax.fs.recursive_rm.call(null,fs,path.join(interactive_syntax.db.files_root,p2__31641_SHARP_),p1__31642_SHARP_);
}),p1__31643_SHARP_);
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31653);
}}),(function (p1__31646_SHARP_){
var target_obj_31655 = fs;
var _STAR_runtime_state_STAR__orig_val__31659 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31660 = oops.state.prepare_state.call(null,target_obj_31655,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31660);

try{var call_info_31657 = [target_obj_31655,(function (){var next_obj_31658 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_31655,(0),"readdir",true,true,false))?(target_obj_31655["readdir"]):null);
return next_obj_31658;
})()];
var fn_31656 = (call_info_31657[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_31656,oops.state.get_last_access_modifier.call(null))){
if((!((fn_31656 == null)))){
return fn_31656.call((call_info_31657[(0)]),interactive_syntax.db.deps_root,(function (err,files){
return interactive_syntax.utils.cb_loop.call(null,files,(function (p1__31645_SHARP_,p2__31644_SHARP_){
return interactive_syntax.fs.recursive_rm.call(null,fs,path.join(interactive_syntax.db.deps_root,p2__31644_SHARP_),p1__31645_SHARP_);
}),p1__31646_SHARP_);
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31659);
}}),(function (){
return interactive_syntax.db.git_init.call(null,db,cb);
}));
});
interactive_syntax.fs.state__GT_serializable = (function interactive_syntax$fs$state__GT_serializable(db,cb){
return interactive_syntax.utils.cb_thread.call(null,(function (p1__31661_SHARP_){
return interactive_syntax.fs.export_to_zip.call(null,db,p1__31661_SHARP_);
}),(function (p1__31663_SHARP_,p2__31662_SHARP_){
return p2__31662_SHARP_.arrayBuffer().then(p1__31663_SHARP_);
}),(function (p1__31665_SHARP_,p2__31664_SHARP_){
return cb.call(null,cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zip","zip",678448180),(new Uint8Array(p2__31664_SHARP_)),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.deref.call(null,new cljs.core.Keyword(null,"backing","backing",-293947460).cljs$core$IFn$_invoke$arity$1(db))], null)));
}));
});
interactive_syntax.fs.capture_state_BANG_ = (function interactive_syntax$fs$capture_state_BANG_(db,name){
return interactive_syntax.utils.cb_thread.call(null,(function (p1__31666_SHARP_){
return interactive_syntax.fs.state__GT_serializable.call(null,db,p1__31666_SHARP_);
}),(function (p1__31668_SHARP_,p2__31667_SHARP_){
return interactive_syntax.fs.node$module$file_saver.saveAs((new Blob([p2__31667_SHARP_])),(function (){var or__20754__auto__ = name;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "state.visr";
}
})());
}));
});
