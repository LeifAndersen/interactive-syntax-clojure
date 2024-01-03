// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('interactive_syntax.git');
goog.require('cljs.core');
goog.require('interactive_syntax.utils');
goog.require('interactive_syntax.fs');
goog.require('interactive_syntax.db');
goog.require('oops.core');
interactive_syntax.git.node$module$isomorphic_git = require('isomorphic-git');
interactive_syntax.git.node$module$isomorphic_git$http$web = require('isomorphic-git/http/web');
interactive_syntax.git.cors_url = "https://cors.isomorphic-git.org";
interactive_syntax.git.onAuth = (function interactive_syntax$git$onAuth(p__59506){
var map__59507 = p__59506;
var map__59507__$1 = cljs.core.__destructure_map.call(null,map__59507);
var type = cljs.core.get.call(null,map__59507__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var username = cljs.core.get.call(null,map__59507__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var passwd = cljs.core.get.call(null,map__59507__$1,new cljs.core.Keyword(null,"passwd","passwd",-549093859));
var pred__59508 = cljs.core._EQ_;
var expr__59509 = type;
if(cljs.core.truth_(pred__59508.call(null,new cljs.core.Keyword(null,"github","github",567794498),expr__59509))){
return ({"username": "token", "password": passwd});
} else {
return ({"username": username, "password": passwd});
}
});
interactive_syntax.git.author = ({"name": "VISr", "email": "ide@visr.pl"});
interactive_syntax.git.remote__GT_url = (function interactive_syntax$git$remote__GT_url(type,remote){
try{(new URL(remote));

return remote;
}catch (e59511){if((e59511 instanceof Error)){
var e = e59511;
return [(function (){var pred__59515 = cljs.core._EQ_;
var expr__59516 = type;
if(cljs.core.truth_(pred__59515.call(null,new cljs.core.Keyword(null,"github","github",567794498),expr__59516))){
return "https://github.com/";
} else {
if(cljs.core.truth_(pred__59515.call(null,new cljs.core.Keyword(null,"bitbucket","bitbucket",-2125267290),expr__59516))){
return "https://bitbucket.org/";
} else {
if(cljs.core.truth_(pred__59515.call(null,new cljs.core.Keyword(null,"gitlab","gitlab",1595306608),expr__59516))){
return "https://gitlab.com/";
} else {
return "";
}
}
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(remote)].join('');
} else {
throw e59511;

}
}});
interactive_syntax.git.try_with_cors = (function interactive_syntax$git$try_with_cors(op,data,cb_pass,cb_fail){
return op.call(null,cljs.core.clj__GT_js.call(null,data)).then(cb_pass).catch((function (p1__59518_SHARP_){
if(cljs.core.truth_(p1__59518_SHARP_.code)){
return cb_fail.call(null,p1__59518_SHARP_);
} else {
return op.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"corsProxy","corsProxy",-1044869123),interactive_syntax.git.cors_url))).then(cb_pass).catch(cb_fail);
}
}));
});
interactive_syntax.git.add_remote = (function interactive_syntax$git$add_remote(p__59519,name,url,cb){
var map__59520 = p__59519;
var map__59520__$1 = cljs.core.__destructure_map.call(null,map__59520);
var db = map__59520__$1;
var fs = cljs.core.get.call(null,map__59520__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var auth = cljs.core.get.call(null,map__59520__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
return (function (){var target_obj_59521 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59525 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59526 = oops.state.prepare_state.call(null,target_obj_59521,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59526);

try{var call_info_59523 = [target_obj_59521,(function (){var next_obj_59524 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59521,(0),"addRemote",true,true,false))?(target_obj_59521["addRemote"]):null);
return next_obj_59524;
})()];
var fn_59522 = (call_info_59523[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59522,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59522 == null)))){
return fn_59522.call((call_info_59523[(0)]),({"fs": fs, "dir": interactive_syntax.db.git_root, "force": true, "remote": name, "url": url}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59525);
}})().then(cb).catch((function (e){
console.error(e);

return cb.call(null);
}));
});
interactive_syntax.git.remove_remote = (function interactive_syntax$git$remove_remote(p__59527,remote,cb){
var map__59528 = p__59527;
var map__59528__$1 = cljs.core.__destructure_map.call(null,map__59528);
var db = map__59528__$1;
var fs = cljs.core.get.call(null,map__59528__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var auth = cljs.core.get.call(null,map__59528__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
return (function (){var target_obj_59529 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59533 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59534 = oops.state.prepare_state.call(null,target_obj_59529,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59534);

try{var call_info_59531 = [target_obj_59529,(function (){var next_obj_59532 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59529,(0),"deleteRemote",true,true,false))?(target_obj_59529["deleteRemote"]):null);
return next_obj_59532;
})()];
var fn_59530 = (call_info_59531[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59530,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59530 == null)))){
return fn_59530.call((call_info_59531[(0)]),({"fs": fs, "dir": interactive_syntax.db.git_root, "remote": remote}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59533);
}})().then(cb).catch((function (e){
console.error(e);

return cb.call(null);
}));
});
interactive_syntax.git.push = (function interactive_syntax$git$push(p__59543,remote,cb){
var map__59544 = p__59543;
var map__59544__$1 = cljs.core.__destructure_map.call(null,map__59544);
var db = map__59544__$1;
var fs = cljs.core.get.call(null,map__59544__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var auth = cljs.core.get.call(null,map__59544__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
var pr_and_ret = (function (e){
console.error(e);

return cb.call(null,e);
});
var map__59545 = cljs.core.get.call(null,cljs.core.deref.call(null,auth),remote);
var map__59545__$1 = cljs.core.__destructure_map.call(null,map__59545);
var auth_data = map__59545__$1;
var type = cljs.core.get.call(null,map__59545__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var passwd = cljs.core.get.call(null,map__59545__$1,new cljs.core.Keyword(null,"passwd","passwd",-549093859));
var remote__$1 = interactive_syntax.git.remote__GT_url.call(null,type,remote);
var cache = ({});
var branch = "main";
var rem_name = "origin";
return interactive_syntax.utils.cb_thread.call(null,(function (p1__59535_SHARP_){
return (function (){var target_obj_59546 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59550 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59551 = oops.state.prepare_state.call(null,target_obj_59546,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59551);

try{var call_info_59548 = [target_obj_59546,(function (){var next_obj_59549 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59546,(0),"init",true,true,false))?(target_obj_59546["init"]):null);
return next_obj_59549;
})()];
var fn_59547 = (call_info_59548[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59547,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59547 == null)))){
return fn_59547.call((call_info_59548[(0)]),({"fs": fs, "dir": interactive_syntax.db.git_root, "cache": cache, "noCheckout": true}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59550);
}})().then(p1__59535_SHARP_).catch(pr_and_ret);
}),(function (p1__59536_SHARP_){
return (function (){var target_obj_59552 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59556 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59557 = oops.state.prepare_state.call(null,target_obj_59552,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59557);

try{var call_info_59554 = [target_obj_59552,(function (){var next_obj_59555 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59552,(0),"addRemote",true,true,false))?(target_obj_59552["addRemote"]):null);
return next_obj_59555;
})()];
var fn_59553 = (call_info_59554[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59553,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59553 == null)))){
return fn_59553.call((call_info_59554[(0)]),({"fs": fs, "dir": interactive_syntax.db.git_root, "cache": cache, "force": true, "remote": rem_name, "url": remote__$1}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59556);
}})().then(p1__59536_SHARP_).catch(pr_and_ret);
}),(function (p1__59538_SHARP_){
return interactive_syntax.git.try_with_cors.call(null,(function (p1__59537_SHARP_){
var target_obj_59558 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59562 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59563 = oops.state.prepare_state.call(null,target_obj_59558,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59563);

try{var call_info_59560 = [target_obj_59558,(function (){var next_obj_59561 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59558,(0),"fetch",true,true,false))?(target_obj_59558["fetch"]):null);
return next_obj_59561;
})()];
var fn_59559 = (call_info_59560[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59559,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59559 == null)))){
return fn_59559.call((call_info_59560[(0)]),p1__59537_SHARP_);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59562);
}}),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fs","fs",-2122926244),fs,new cljs.core.Keyword(null,"dir","dir",1734754661),interactive_syntax.db.git_root,new cljs.core.Keyword(null,"cache","cache",-1237023054),cache,new cljs.core.Keyword(null,"http","http",382524695),interactive_syntax.git.node$module$isomorphic_git$http$web,new cljs.core.Keyword(null,"onAuth","onAuth",977533126),(function (){
return interactive_syntax.git.onAuth.call(null,auth_data);
}),new cljs.core.Keyword(null,"remote","remote",-1593576576),rem_name], null),p1__59538_SHARP_,pr_and_ret);
}),(function (p1__59539_SHARP_){
return (function (){var target_obj_59564 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59568 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59569 = oops.state.prepare_state.call(null,target_obj_59564,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59569);

try{var call_info_59566 = [target_obj_59564,(function (){var next_obj_59567 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59564,(0),"checkout",true,true,false))?(target_obj_59564["checkout"]):null);
return next_obj_59567;
})()];
var fn_59565 = (call_info_59566[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59565,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59565 == null)))){
return fn_59565.call((call_info_59566[(0)]),({"fs": fs, "dir": interactive_syntax.db.git_root, "cache": cache, "remote": rem_name, "ref": branch, "force": true, "noCheckout": true}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59568);
}})().then(p1__59539_SHARP_).catch(pr_and_ret);
}),(function (p1__59540_SHARP_){
return (function (){var target_obj_59570 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59574 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59575 = oops.state.prepare_state.call(null,target_obj_59570,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59575);

try{var call_info_59572 = [target_obj_59570,(function (){var next_obj_59573 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59570,(0),"add",true,true,false))?(target_obj_59570["add"]):null);
return next_obj_59573;
})()];
var fn_59571 = (call_info_59572[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59571,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59571 == null)))){
return fn_59571.call((call_info_59572[(0)]),({"fs": fs, "dir": interactive_syntax.db.git_root, "filepath": ".", "cache": cache}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59574);
}})().then(p1__59540_SHARP_).catch(pr_and_ret);
}),(function (p1__59541_SHARP_){
return (function (){var target_obj_59576 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59580 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59581 = oops.state.prepare_state.call(null,target_obj_59576,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59581);

try{var call_info_59578 = [target_obj_59576,(function (){var next_obj_59579 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59576,(0),"commit",true,true,false))?(target_obj_59576["commit"]):null);
return next_obj_59579;
})()];
var fn_59577 = (call_info_59578[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59577,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59577 == null)))){
return fn_59577.call((call_info_59578[(0)]),({"fs": fs, "dir": interactive_syntax.db.git_root, "cache": cache, "message": "VISr IDE", "author": interactive_syntax.git.author}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59580);
}})().then(p1__59541_SHARP_).catch(pr_and_ret);
}),(function (){
return interactive_syntax.git.try_with_cors.call(null,(function (p1__59542_SHARP_){
var target_obj_59582 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59586 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59587 = oops.state.prepare_state.call(null,target_obj_59582,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59587);

try{var call_info_59584 = [target_obj_59582,(function (){var next_obj_59585 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59582,(0),"push",true,true,false))?(target_obj_59582["push"]):null);
return next_obj_59585;
})()];
var fn_59583 = (call_info_59584[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59583,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59583 == null)))){
return fn_59583.call((call_info_59584[(0)]),p1__59542_SHARP_);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59586);
}}),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fs","fs",-2122926244),fs,new cljs.core.Keyword(null,"http","http",382524695),interactive_syntax.git.node$module$isomorphic_git$http$web,new cljs.core.Keyword(null,"dir","dir",1734754661),interactive_syntax.db.git_root,new cljs.core.Keyword(null,"cache","cache",-1237023054),cache,new cljs.core.Keyword(null,"remote","remote",-1593576576),rem_name,new cljs.core.Keyword(null,"onAuth","onAuth",977533126),(function (){
return interactive_syntax.git.onAuth.call(null,auth_data);
})], null),cb,pr_and_ret);
}));
});
interactive_syntax.git.pull = (function interactive_syntax$git$pull(p__59592,remote,cb){
var map__59593 = p__59592;
var map__59593__$1 = cljs.core.__destructure_map.call(null,map__59593);
var db = map__59593__$1;
var fs = cljs.core.get.call(null,map__59593__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var auth = cljs.core.get.call(null,map__59593__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
var pr_and_ret = (function (e){
console.error(e);

return cb.call(null,e);
});
var map__59594 = cljs.core.get.call(null,cljs.core.deref.call(null,auth),remote);
var map__59594__$1 = cljs.core.__destructure_map.call(null,map__59594);
var auth_data = map__59594__$1;
var type = cljs.core.get.call(null,map__59594__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var passwd = cljs.core.get.call(null,map__59594__$1,new cljs.core.Keyword(null,"passwd","passwd",-549093859));
var remote__$1 = interactive_syntax.git.remote__GT_url.call(null,type,remote);
var cache = ({});
var branch = "main";
var rem_name = "origin";
return interactive_syntax.utils.cb_thread.call(null,(function (p1__59588_SHARP_){
return (function (){var target_obj_59595 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59599 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59600 = oops.state.prepare_state.call(null,target_obj_59595,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59600);

try{var call_info_59597 = [target_obj_59595,(function (){var next_obj_59598 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59595,(0),"init",true,true,false))?(target_obj_59595["init"]):null);
return next_obj_59598;
})()];
var fn_59596 = (call_info_59597[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59596,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59596 == null)))){
return fn_59596.call((call_info_59597[(0)]),({"fs": fs, "dir": interactive_syntax.db.git_root, "cache": cache, "noCheckout": true}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59599);
}})().then(p1__59588_SHARP_).catch(pr_and_ret);
}),(function (p1__59589_SHARP_){
return (function (){var target_obj_59601 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59605 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59606 = oops.state.prepare_state.call(null,target_obj_59601,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59606);

try{var call_info_59603 = [target_obj_59601,(function (){var next_obj_59604 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59601,(0),"addRemote",true,true,false))?(target_obj_59601["addRemote"]):null);
return next_obj_59604;
})()];
var fn_59602 = (call_info_59603[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59602,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59602 == null)))){
return fn_59602.call((call_info_59603[(0)]),({"fs": fs, "dir": interactive_syntax.db.git_root, "cache": cache, "force": true, "remote": rem_name, "url": remote__$1}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59605);
}})().then(p1__59589_SHARP_).catch(pr_and_ret);
}),(function (p1__59591_SHARP_){
return interactive_syntax.git.try_with_cors.call(null,(function (p1__59590_SHARP_){
var target_obj_59607 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59611 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59612 = oops.state.prepare_state.call(null,target_obj_59607,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59612);

try{var call_info_59609 = [target_obj_59607,(function (){var next_obj_59610 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59607,(0),"fetch",true,true,false))?(target_obj_59607["fetch"]):null);
return next_obj_59610;
})()];
var fn_59608 = (call_info_59609[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59608,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59608 == null)))){
return fn_59608.call((call_info_59609[(0)]),p1__59590_SHARP_);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59611);
}}),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"fs","fs",-2122926244),fs,new cljs.core.Keyword(null,"dir","dir",1734754661),interactive_syntax.db.git_root,new cljs.core.Keyword(null,"cache","cache",-1237023054),cache,new cljs.core.Keyword(null,"http","http",382524695),interactive_syntax.git.node$module$isomorphic_git$http$web,new cljs.core.Keyword(null,"onAuth","onAuth",977533126),(function (){
return interactive_syntax.git.onAuth.call(null,auth_data);
}),new cljs.core.Keyword(null,"remote","remote",-1593576576),rem_name,new cljs.core.Keyword(null,"ref","ref",1289896967),branch,new cljs.core.Keyword(null,"author","author",2111686192),interactive_syntax.git.author], null),p1__59591_SHARP_,pr_and_ret);
}),(function (){
return (function (){var target_obj_59613 = interactive_syntax.git.node$module$isomorphic_git;
var _STAR_runtime_state_STAR__orig_val__59617 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59618 = oops.state.prepare_state.call(null,target_obj_59613,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59618);

try{var call_info_59615 = [target_obj_59613,(function (){var next_obj_59616 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59613,(0),"checkout",true,true,false))?(target_obj_59613["checkout"]):null);
return next_obj_59616;
})()];
var fn_59614 = (call_info_59615[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59614,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59614 == null)))){
return fn_59614.call((call_info_59615[(0)]),({"remote": rem_name, "dir": interactive_syntax.db.git_root, "force": true, "ref": [rem_name,"/",branch].join(''), "author": interactive_syntax.git.author, "cache": cache, "http": interactive_syntax.git.node$module$isomorphic_git$http$web, "fs": fs, "corsProxy": interactive_syntax.git.cors_url}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59617);
}})().then(cb).catch(pr_and_ret);
}));
});
