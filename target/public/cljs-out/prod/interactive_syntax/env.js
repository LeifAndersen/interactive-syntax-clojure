// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('interactive_syntax.env');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('interactive_syntax.utils');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('cljs.pprint');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.js');
goog.require('cljs.analyzer');
goog.require('cljs.env');
goog.require('oops.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('interactive_syntax.db');
goog.require('interactive_syntax.stdlib');
goog.require('interactive_syntax.strings');
goog.require('interactive_syntax.fakegoog');
goog.require('interactive_syntax.editor');
goog.require('garden.core');
goog.require('alandipert.storage_atom');
goog.require('zprint.core');
interactive_syntax.env.node$module$react = require('react');
interactive_syntax.env.node$module$react_dom = require('react-dom');
interactive_syntax.env.node$module$_CIRCA_stopify$higher_order_functions = require('@stopify/higher-order-functions');
interactive_syntax.env.node$module$_CIRCA_stopify$hygiene = require('@stopify/hygiene');
interactive_syntax.env.node$module$_CIRCA_stopify$util = require('@stopify/util');
interactive_syntax.env.node$module$_CIRCA_stopify$continuations = require('@stopify/continuations');
interactive_syntax.env.node$module$_CIRCA_babel$core = require('@babel/core');
interactive_syntax.env.node$module$_CIRCA_babel$parser = require('@babel/parser');
interactive_syntax.env.node$module$_CIRCA_babel$types = require('@babel/types');
interactive_syntax.env.node$module$_CIRCA_babel$template = require('@babel/template');
interactive_syntax.env.node$module$codemirror = require('codemirror');
interactive_syntax.env.node$module$react_codemirror2 = require('react-codemirror2');
interactive_syntax.env.node$module$react_resize_detector = require('react-resize-detector');
interactive_syntax.env.node$module$popper$js = require('popper.js');
interactive_syntax.env.node$module$bootstrap = require('bootstrap');
interactive_syntax.env.node$module$react_bootstrap = require('react-bootstrap');
interactive_syntax.env.node$module$react_switch = require('react-switch');
goog.require('goog.object');
goog.scope(function(){
interactive_syntax.env.goog$module$goog$object = goog.module.get('goog.object');
});
interactive_syntax.env.template = interactive_syntax.env.node$module$_CIRCA_babel$template.default;
interactive_syntax.env.ReactResizeDetector = interactive_syntax.env.node$module$react_resize_detector.default;
interactive_syntax.env.print_res = (function interactive_syntax$env$print_res(p__59622,res){
var map__59623 = p__59622;
var map__59623__$1 = cljs.core.__destructure_map.call(null,map__59623);
var db = map__59623__$1;
var output = cljs.core.get.call(null,map__59623__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var _STAR_print_fn_STAR__orig_val__59624 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__59625 = (function (p1__59621_SHARP_){
return cljs.core.swap_BANG_.call(null,output,cljs.core.conj,p1__59621_SHARP_);
});
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59625);

try{if(cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032))){
var err = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res);
cljs.core.println.call(null,(function (){var target_obj_59626 = err;
var _STAR_runtime_state_STAR__orig_val__59628 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59629 = oops.state.prepare_state.call(null,target_obj_59626,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59629);

try{var next_obj_59627 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59626,(0),"stack",true,true,false))?(target_obj_59626["stack"]):null);
return next_obj_59627;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59628);
}})());

var temp__5718__auto__ = (function (){var target_obj_59630 = err;
var _STAR_runtime_state_STAR__orig_val__59632 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59633 = oops.state.prepare_state.call(null,target_obj_59630,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59633);

try{var next_obj_59631 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59630,(0),"cause",true,true,false))?(target_obj_59630["cause"]):null);
return next_obj_59631;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59632);
}})();
if(cljs.core.truth_(temp__5718__auto__)){
var cause = temp__5718__auto__;
return cljs.core.println.call(null,["Cause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cause)].join(''));
} else {
return null;
}
} else {
if(cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"value","value",305978217))){
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var pred__59634 = cljs.core._EQ_;
var expr__59635 = (function (){var and__20748__auto__ = v;
if(cljs.core.truth_(and__20748__auto__)){
var target_obj_59637 = v;
var _STAR_runtime_state_STAR__orig_val__59639 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59640 = oops.state.prepare_state.call(null,target_obj_59637,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59640);

try{var next_obj_59638 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59637,(0),"type",true,true,false))?(target_obj_59637["type"]):null);
return next_obj_59638;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59639);
}} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(pred__59634.call(null,"exception",expr__59635))){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_59651 = v;
var _STAR_runtime_state_STAR__orig_val__59654 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59655 = oops.state.prepare_state.call(null,target_obj_59651,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59655);

try{var next_obj_59652 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59651,(0),"value",true,true,false))?(target_obj_59651["value"]):null);
var next_obj_59653 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_59652,(0),"name",true,true,false))?(next_obj_59652["name"]):null);
return next_obj_59653;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59654);
}})()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var target_obj_59656 = v;
var _STAR_runtime_state_STAR__orig_val__59659 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59660 = oops.state.prepare_state.call(null,target_obj_59656,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59660);

try{var next_obj_59657 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59656,(0),"value",true,true,false))?(target_obj_59656["value"]):null);
var next_obj_59658 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_59657,(0),"message",true,true,false))?(next_obj_59657["message"]):null);
return next_obj_59658;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59659);
}})())].join(''));

var seq__59661_59682 = cljs.core.seq.call(null,(function (){var target_obj_59669 = v;
var _STAR_runtime_state_STAR__orig_val__59671 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59672 = oops.state.prepare_state.call(null,target_obj_59669,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59672);

try{var next_obj_59670 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59669,(0),"stack",true,true,false))?(target_obj_59669["stack"]):null);
return next_obj_59670;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59671);
}})());
var chunk__59662_59683 = null;
var count__59663_59684 = (0);
var i__59664_59685 = (0);
while(true){
if((i__59664_59685 < count__59663_59684)){
var i_59686 = cljs.core._nth.call(null,chunk__59662_59683,i__59664_59685);
cljs.core.println.call(null,["\t* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_59686)].join(''));


var G__59687 = seq__59661_59682;
var G__59688 = chunk__59662_59683;
var G__59689 = count__59663_59684;
var G__59690 = (i__59664_59685 + (1));
seq__59661_59682 = G__59687;
chunk__59662_59683 = G__59688;
count__59663_59684 = G__59689;
i__59664_59685 = G__59690;
continue;
} else {
var temp__5720__auto___59691 = cljs.core.seq.call(null,seq__59661_59682);
if(temp__5720__auto___59691){
var seq__59661_59692__$1 = temp__5720__auto___59691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59661_59692__$1)){
var c__21725__auto___59693 = cljs.core.chunk_first.call(null,seq__59661_59692__$1);
var G__59694 = cljs.core.chunk_rest.call(null,seq__59661_59692__$1);
var G__59695 = c__21725__auto___59693;
var G__59696 = cljs.core.count.call(null,c__21725__auto___59693);
var G__59697 = (0);
seq__59661_59682 = G__59694;
chunk__59662_59683 = G__59695;
count__59663_59684 = G__59696;
i__59664_59685 = G__59697;
continue;
} else {
var i_59698 = cljs.core.first.call(null,seq__59661_59692__$1);
cljs.core.println.call(null,["\t* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_59698)].join(''));


var G__59699 = cljs.core.next.call(null,seq__59661_59692__$1);
var G__59700 = null;
var G__59701 = (0);
var G__59702 = (0);
seq__59661_59682 = G__59699;
chunk__59662_59683 = G__59700;
count__59663_59684 = G__59701;
i__59664_59685 = G__59702;
continue;
}
} else {
}
}
break;
}

cljs.core.println.call(null,"Runtime Stack:");

return cljs.core.println.call(null,(function (){var target_obj_59673 = v;
var _STAR_runtime_state_STAR__orig_val__59676 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59677 = oops.state.prepare_state.call(null,target_obj_59673,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59677);

try{var next_obj_59674 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59673,(0),"value",true,true,false))?(target_obj_59673["value"]):null);
var next_obj_59675 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_59674,(0),"stack",true,true,false))?(next_obj_59674["stack"]):null);
return next_obj_59675;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59676);
}})());
} else {
var temp__5722__auto__ = (function (){var target_obj_59678 = v;
var _STAR_runtime_state_STAR__orig_val__59680 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59681 = oops.state.prepare_state.call(null,target_obj_59678,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59681);

try{var next_obj_59679 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59678,(0),"value",true,true,false))?(target_obj_59678["value"]):null);
return next_obj_59679;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59680);
}})();
if((temp__5722__auto__ == null)){
return null;
} else {
var v__$1 = temp__5722__auto__;
return cljs.core.println.call(null,v__$1);
}
}
} else {
return null;
}
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59624);
}});
interactive_syntax.env.valid_id_QMARK_ = (function interactive_syntax$env$valid_id_QMARK_(id){
try{return cljs.core._EQ_.call(null,cljs.core.symbol.call(null,id),cljs.tools.reader.read_string.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
}catch (e59703){if((e59703 instanceof Error)){
var e = e59703;
return false;
} else {
throw e59703;

}
}});
interactive_syntax.env.get_pkg = (function interactive_syntax$env$get_pkg(p__59704,cb){
var map__59705 = p__59704;
var map__59705__$1 = cljs.core.__destructure_map.call(null,map__59705);
var url = cljs.core.get.call(null,map__59705__$1,new cljs.core.Keyword(null,"url","url",276297046));
var name = cljs.core.get.call(null,map__59705__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__59705__$1,new cljs.core.Keyword(null,"version","version",425292698));
var sanatize_map = new cljs.core.PersistentArrayMap(null, 2, ["@","","/",""], null);
var pkg_name = (cljs.core.truth_((function (){var and__20748__auto__ = url;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not_EQ_.call(null,url,"");
} else {
return and__20748__auto__;
}
})())?"":clojure.string.escape.call(null,name,sanatize_map)
);
var url__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = url;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not_EQ_.call(null,url,"");
} else {
return and__20748__auto__;
}
})())?url:[interactive_syntax.db.shop_url,pkg_name,".js"].join(''));
return ajax.core.GET.call(null,url__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arraybuffer","arraybuffer",1394959763)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),cb], null));
});
interactive_syntax.env.setup_deps = (function interactive_syntax$env$setup_deps(var_args){
var args__22092__auto__ = [];
var len__22082__auto___59736 = arguments.length;
var i__22083__auto___59737 = (0);
while(true){
if((i__22083__auto___59737 < len__22082__auto___59736)){
args__22092__auto__.push((arguments[i__22083__auto___59737]));

var G__59738 = (i__22083__auto___59737 + (1));
i__22083__auto___59737 = G__59738;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return interactive_syntax.env.setup_deps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(interactive_syntax.env.setup_deps.cljs$core$IFn$_invoke$arity$variadic = (function (p__59713,force_update,p__59714){
var map__59715 = p__59713;
var map__59715__$1 = cljs.core.__destructure_map.call(null,map__59715);
var db = map__59715__$1;
var deps = cljs.core.get.call(null,map__59715__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var fs = cljs.core.get.call(null,map__59715__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var vec__59716 = p__59714;
var cb = cljs.core.nth.call(null,vec__59716,(0),null);
return interactive_syntax.utils.cb_thread.call(null,(function (p1__59707_SHARP_){
return interactive_syntax.utils.cb_loop.call(null,cljs.core.deref.call(null,deps),(function (next,p__59719){
var vec__59720 = p__59719;
var key = cljs.core.nth.call(null,vec__59720,(0),null);
var map__59723 = cljs.core.nth.call(null,vec__59720,(1),null);
var map__59723__$1 = cljs.core.__destructure_map.call(null,map__59723);
var pkg = map__59723__$1;
var name = cljs.core.get.call(null,map__59723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return interactive_syntax.utils.cb_thread.call(null,(function (n){
var target_obj_59724 = fs;
var _STAR_runtime_state_STAR__orig_val__59728 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59729 = oops.state.prepare_state.call(null,target_obj_59724,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59729);

try{var call_info_59726 = [target_obj_59724,(function (){var next_obj_59727 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59724,(0),"readFile",true,true,false))?(target_obj_59724["readFile"]):null);
return next_obj_59727;
})()];
var fn_59725 = (call_info_59726[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59725,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59725 == null)))){
return fn_59725.call((call_info_59726[(0)]),path.join(interactive_syntax.db.deps_root,name),n);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59728);
}}),(function (n,e,src){
if(cljs.core.truth_((function (){var or__20754__auto__ = force_update;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return e;
}
})())){
return interactive_syntax.utils.cb_thread.call(null,(function (p1__59706_SHARP_){
return interactive_syntax.env.get_pkg.call(null,pkg,p1__59706_SHARP_);
}),(function (_,src__$1){
var target_obj_59730 = fs;
var _STAR_runtime_state_STAR__orig_val__59734 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59735 = oops.state.prepare_state.call(null,target_obj_59730,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59735);

try{var call_info_59732 = [target_obj_59730,(function (){var next_obj_59733 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59730,(0),"writeFile",true,true,false))?(target_obj_59730["writeFile"]):null);
return next_obj_59733;
})()];
var fn_59731 = (call_info_59732[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59731,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59731 == null)))){
return fn_59731.call((call_info_59732[(0)]),path.join(interactive_syntax.db.deps_root,name),interactive_syntax.db.Buffer.from.call(null,src__$1),next);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59734);
}}));
} else {
return next.call(null);
}
}));
}),p1__59707_SHARP_);
}),(function (p1__59709_SHARP_,p2__59708_SHARP_){
if(cljs.core.truth_(cb)){
return cb.call(null,p2__59708_SHARP_);
} else {
return null;
}
}));
}));

(interactive_syntax.env.setup_deps.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(interactive_syntax.env.setup_deps.cljs$lang$applyTo = (function (seq59710){
var G__59711 = cljs.core.first.call(null,seq59710);
var seq59710__$1 = cljs.core.next.call(null,seq59710);
var G__59712 = cljs.core.first.call(null,seq59710__$1);
var seq59710__$2 = cljs.core.next.call(null,seq59710__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59711,G__59712,seq59710__$2);
}));

interactive_syntax.env.blob_url_registry = (new FinalizationRegistry(URL.revokeObjectURL));
interactive_syntax.env.dynamic_lookup = (function interactive_syntax$env$dynamic_lookup(env,mod_path){
var name = path.basename(mod_path);
return cljs.core.get.call(null,env,name);
});
interactive_syntax.env.deps__GT_env = (function interactive_syntax$env$deps__GT_env(p__59745,cb){
var map__59746 = p__59745;
var map__59746__$1 = cljs.core.__destructure_map.call(null,map__59746);
var db = map__59746__$1;
var deps = cljs.core.get.call(null,map__59746__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var fs = cljs.core.get.call(null,map__59746__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var output = cljs.core.get.call(null,map__59746__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var system = System;
var in_use_token = reagent.core.atom.call(null,false);
return (function interactive_syntax$env$deps__GT_env_$_rec(denv,dloaded,djs,durls,deps__$1){
(window.visr_dynamic_load = cljs.core.partial.call(null,interactive_syntax.env.dynamic_lookup,durls));

if(cljs.core.empty_QMARK_.call(null,deps__$1)){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"env","env",-1815813235),denv,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),dloaded,new cljs.core.Keyword(null,"js-deps","js-deps",-699101283),djs,new cljs.core.Keyword(null,"urls","urls",-190753757),durls], null));
} else {
var vec__59747 = deps__$1;
var seq__59748 = cljs.core.seq.call(null,vec__59747);
var first__59749 = cljs.core.first.call(null,seq__59748);
var seq__59748__$1 = cljs.core.next.call(null,seq__59748);
var vec__59750 = first__59749;
var key = cljs.core.nth.call(null,vec__59750,(0),null);
var map__59753 = cljs.core.nth.call(null,vec__59750,(1),null);
var map__59753__$1 = cljs.core.__destructure_map.call(null,map__59753);
var dep = map__59753__$1;
var name = cljs.core.get.call(null,map__59753__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var load_QMARK_ = cljs.core.get.call(null,map__59753__$1,new cljs.core.Keyword(null,"load?","load?",628806320));
var rest_deps = seq__59748__$1;
return interactive_syntax.utils.cb_thread.call(null,(function (p1__59739_SHARP_){
var target_obj_59754 = fs;
var _STAR_runtime_state_STAR__orig_val__59758 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59759 = oops.state.prepare_state.call(null,target_obj_59754,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59759);

try{var call_info_59756 = [target_obj_59754,(function (){var next_obj_59757 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59754,(0),"readFile",true,true,false))?(target_obj_59754["readFile"]):null);
return next_obj_59757;
})()];
var fn_59755 = (call_info_59756[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59755,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59755 == null)))){
return fn_59755.call((call_info_59756[(0)]),path.join(interactive_syntax.db.deps_root,name),p1__59739_SHARP_);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59758);
}}),(function (p1__59741_SHARP_,p2__59740_SHARP_,p3__59742_SHARP_){
if(cljs.core.truth_(p2__59740_SHARP_)){
return console.error(p2__59740_SHARP_);
} else {
return p1__59741_SHARP_.call(null,p3__59742_SHARP_);
}
}),(function (p1__59744_SHARP_,p2__59743_SHARP_){
var mime = (function (){var pred__59760 = cljs.core._EQ_;
var expr__59761 = path.extname(name);
if(cljs.core.truth_(pred__59760.call(null,".wasm",expr__59761))){
return "application/wasm";
} else {
return "application/javascript";
}
})();
var url = interactive_syntax.utils.module__GT_uri.call(null,p2__59743_SHARP_,new cljs.core.Keyword(null,"mime","mime",-1846414642),mime);
interactive_syntax.env.blob_url_registry.register(in_use_token,url);

if(cljs.core.truth_(load_QMARK_)){
return (function (){var target_obj_59763 = system;
var _STAR_runtime_state_STAR__orig_val__59767 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59768 = oops.state.prepare_state.call(null,target_obj_59763,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59768);

try{var call_info_59765 = [target_obj_59763,(function (){var next_obj_59766 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59763,(0),"import",true,true,false))?(target_obj_59763["import"]):null);
return next_obj_59766;
})()];
var fn_59764 = (call_info_59765[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59764,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59764 == null)))){
return fn_59764.call((call_info_59765[(0)]),url);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59767);
}})().then((function (d){
var target_obj_59769_59772 = window;
var _STAR_runtime_state_STAR__orig_val__59770_59773 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59771_59774 = oops.state.prepare_state.call(null,target_obj_59769_59772,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59771_59774);

try{oops.core.set_selector_dynamically.call(null,target_obj_59769_59772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!dependencies","!dependencies",-1262420023),["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name))].join('')], null),d.default);

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59770_59773);
}
return interactive_syntax$env$deps__GT_env_$_rec.call(null,cljs.core.assoc.call(null,denv,cljs.core.munge.call(null,name),d.default),cljs.core.conj.call(null,dloaded,cljs.core.symbol.call(null,name)),cljs.core.assoc.call(null,djs,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.symbol.call(null,name),cljs.core.munge.call(null,name)])], null)),cljs.core.assoc.call(null,durls,name,url),rest_deps);
})).catch((function (err){
cljs.core.reset_BANG_.call(null,output,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Cannot load dependency ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),":"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)], null)));

return cb.call(null,null);
}));
} else {
return interactive_syntax$env$deps__GT_env_$_rec.call(null,denv,dloaded,djs,cljs.core.assoc.call(null,durls,name,url),rest_deps);
}
}));
}
}).call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.munge.call(null,new cljs.core.Keyword(null,"visr-private-registry","visr-private-registry",-1326004735)),in_use_token]),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,deps));
});
interactive_syntax.env.ns__GT_string = (function interactive_syntax$env$ns__GT_string(fs,p__59775,cb){
var map__59776 = p__59775;
var map__59776__$1 = cljs.core.__destructure_map.call(null,map__59776);
var name = cljs.core.get.call(null,map__59776__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__59776__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__59776__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return (function interactive_syntax$env$ns__GT_string_$_rec(extensions){
if(cljs.core.empty_QMARK_.call(null,extensions)){
return cb.call(null,null);
} else {
var file_path = [interactive_syntax.db.files_root,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,extensions))].join('');
var target_obj_59777 = fs;
var _STAR_runtime_state_STAR__orig_val__59781 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59782 = oops.state.prepare_state.call(null,target_obj_59777,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59782);

try{var call_info_59779 = [target_obj_59777,(function (){var next_obj_59780 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59777,(0),"readFile",true,true,false))?(target_obj_59777["readFile"]):null);
return next_obj_59780;
})()];
var fn_59778 = (call_info_59779[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59778,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59778 == null)))){
return fn_59778.call((call_info_59779[(0)]),file_path,(function (err,data){
if(cljs.core.truth_(err)){
var temp__5718__auto__ = cljs.core.get.call(null,interactive_syntax.stdlib.shadow_fs,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,extensions))].join(''));
if(cljs.core.truth_(temp__5718__auto__)){
var file = temp__5718__auto__;
return cb.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,cljs.core.first.call(null,extensions),"js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),file,new cljs.core.Keyword(null,"file","file",-1269645878),file_path], null));
} else {
return interactive_syntax$env$ns__GT_string_$_rec.call(null,cljs.core.rest.call(null,extensions));
}
} else {
var source = data.toString();
return cb.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,cljs.core.first.call(null,extensions),"js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"file","file",-1269645878),file_path], null));
}
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59781);
}}
}).call(null,(cljs.core.truth_(macros)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clj","cljc","cljs"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs","cljc","js"], null)));
});
interactive_syntax.env.stopified_cache = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
interactive_syntax.env.stopify_queue = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));
interactive_syntax.env.stopless_base_identifier = "$R";
interactive_syntax.env.stopless_compile = (function interactive_syntax$env$stopless_compile(src,cb){
return interactive_syntax.env.node$module$_CIRCA_babel$core.transform(src,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visitor","visitor",-1026865865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Program","Program",226931672),(function (path,state){
interactive_syntax.env.node$module$_CIRCA_stopify$hygiene.init(path);

interactive_syntax.env.node$module$_CIRCA_stopify$util.transformFromAst(path,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.env.node$module$_CIRCA_stopify$hygiene.plugin,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reserved","reserved",-775228297),interactive_syntax.env.node$module$_CIRCA_stopify$continuations.reserved,new cljs.core.Keyword(null,"global","global",93595047),interactive_syntax.env.node$module$_CIRCA_babel$types.memberExpression(interactive_syntax.env.node$module$_CIRCA_babel$types.identifier(interactive_syntax.env.stopless_base_identifier),interactive_syntax.env.node$module$_CIRCA_babel$types.identifier("g"))], null)], null)], null)));

return interactive_syntax.env.node$module$_CIRCA_stopify$hygiene.reset();
})], null)], null)], null),new cljs.core.Keyword(null,"babelrc","babelrc",-2053549547),false,new cljs.core.Keyword(null,"ast","ast",-860334068),false,new cljs.core.Keyword(null,"code","code",1586293142),true,new cljs.core.Keyword(null,"minified","minified",-1418557716),true,new cljs.core.Keyword(null,"comments","comments",-293346423),false], null)),(function (p1__59784_SHARP_,p2__59783_SHARP_){
return cb.call(null,(function (){var target_obj_59785 = p2__59783_SHARP_;
var _STAR_runtime_state_STAR__orig_val__59787 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59788 = oops.state.prepare_state.call(null,target_obj_59785,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59788);

try{var next_obj_59786 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59785,(0),"code",true,true,false))?(target_obj_59785["code"]):null);
return next_obj_59786;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59787);
}})());
}));
});
interactive_syntax.env.eval_opts = (function interactive_syntax$env$eval_opts(fs,runner,print_fn,sandbox_QMARK_,ns,onYield,onRun,compiled_QMARK_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),(cljs.core.truth_(sandbox_QMARK_)?(function (p__59793,cb){
var map__59794 = p__59793;
var map__59794__$1 = cljs.core.__destructure_map.call(null,map__59794);
var source = cljs.core.get.call(null,map__59794__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var name = cljs.core.get.call(null,map__59794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cache = cljs.core.get.call(null,map__59794__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var clj_source = cljs.core.get.call(null,map__59794__$1,new cljs.core.Keyword(null,"clj-source","clj-source",-1433298239));
var run = (function (str){
cljs.core.reset_BANG_.call(null,compiled_QMARK_,true);

var target_obj_59795 = runner;
var _STAR_runtime_state_STAR__orig_val__59799 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59800 = oops.state.prepare_state.call(null,target_obj_59795,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59800);

try{var call_info_59797 = [target_obj_59795,(function (){var next_obj_59798 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59795,(0),"evalCompiled",true,true,false))?(target_obj_59795["evalCompiled"]):null);
return next_obj_59798;
})()];
var fn_59796 = (call_info_59797[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59796,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59796 == null)))){
return fn_59796.call((call_info_59797[(0)]),str,(function (res){
return cb.call(null,res);
}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59799);
}});
var poly_QMARK_ = true;
if((((!(clojure.string.ends_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cache)),"$macros")))) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,interactive_syntax.env.stopified_cache),clj_source)))){
return run.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,interactive_syntax.env.stopified_cache),clj_source));
} else {
if((cljs.core.count.call(null,source) < (1000))){
var ast = interactive_syntax.env.node$module$_CIRCA_babel$parser.parse(source);
var polyfilled = ((poly_QMARK_)?interactive_syntax.env.node$module$_CIRCA_stopify$higher_order_functions.polyfillHofFromAst(ast):ast);
var compiled = (function (){var target_obj_59801 = runner;
var _STAR_runtime_state_STAR__orig_val__59805 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59806 = oops.state.prepare_state.call(null,target_obj_59801,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59806);

try{var call_info_59803 = [target_obj_59801,(function (){var next_obj_59804 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59801,(0),"compileFromAst",true,true,false))?(target_obj_59801["compileFromAst"]):null);
return next_obj_59804;
})()];
var fn_59802 = (call_info_59803[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59802,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59802 == null)))){
return fn_59802.call((call_info_59803[(0)]),polyfilled);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59805);
}})();
if(clojure.string.ends_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cache)),"$macros")){
} else {
cljs.core.swap_BANG_.call(null,interactive_syntax.env.stopified_cache,cljs.core.assoc,clj_source,compiled);
}

return run.call(null,compiled);
} else {
var worker = (new StopifyWorker());
onYield.call(null);

(worker.onmessage = (function (msg){
if(clojure.string.ends_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cache)),"$macros")){
} else {
cljs.core.swap_BANG_.call(null,interactive_syntax.env.stopified_cache,cljs.core.assoc,clj_source,(function (){var target_obj_59807 = msg;
var _STAR_runtime_state_STAR__orig_val__59810 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59811 = oops.state.prepare_state.call(null,target_obj_59807,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59811);

try{var next_obj_59808 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59807,(0),"data",true,true,false))?(target_obj_59807["data"]):null);
var next_obj_59809 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_59808,(0),"prog",true,true,false))?(next_obj_59808["prog"]):null);
return next_obj_59809;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59810);
}})());
}

onRun.call(null);

return run.call(null,(function (){var target_obj_59812 = msg;
var _STAR_runtime_state_STAR__orig_val__59815 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59816 = oops.state.prepare_state.call(null,target_obj_59812,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59816);

try{var next_obj_59813 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59812,(0),"data",true,true,false))?(target_obj_59812["data"]):null);
var next_obj_59814 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_59813,(0),"prog",true,true,false))?(next_obj_59813["prog"]):null);
return next_obj_59814;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59815);
}})());
}));

return worker.postMessage(({"prog": source, "poly": poly_QMARK_}));

}
}
}):(function (p__59817,cb){
var map__59818 = p__59817;
var map__59818__$1 = cljs.core.__destructure_map.call(null,map__59818);
var source = cljs.core.get.call(null,map__59818__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var name = cljs.core.get.call(null,map__59818__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cache = cljs.core.get.call(null,map__59818__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var clj_source = cljs.core.get.call(null,map__59818__$1,new cljs.core.Keyword(null,"clj-source","clj-source",-1433298239));
interactive_syntax.env.goog$module$goog$object.set.call(null,window,interactive_syntax.env.stopless_base_identifier,runner.g);

return interactive_syntax.utils.cb_thread.call(null,(function (p1__59789_SHARP_){
return interactive_syntax.env.stopless_compile.call(null,source,p1__59789_SHARP_);
}),(function (p1__59792_SHARP_,p2__59790_SHARP_){
try{return cljs.js.js_eval.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"source","source",-433931539),["let ",interactive_syntax.env.stopless_base_identifier,"={g: window.",interactive_syntax.env.stopless_base_identifier,"};",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__59790_SHARP_)].join(''),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"cache","cache",-1237023054),cache,new cljs.core.Keyword(null,"clj-source","clj-source",-1433298239),clj_source], null),(function (p1__59791_SHARP_){
return cb.call(null,({"type": "value", "value": p1__59791_SHARP_}));
}));
}catch (e59819){var e = e59819;
return cb.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"exception",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null)], null)));
}}));
})),new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,interactive_syntax.env.ns__GT_string,fs),new cljs.core.Keyword(null,"source-map","source-map",1706252311),false,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null);
});
interactive_syntax.env.eval_str = (function interactive_syntax$env$eval_str(src,p__59827,cb){
var map__59828 = p__59827;
var map__59828__$1 = cljs.core.__destructure_map.call(null,map__59828);
var map__59829 = cljs.core.get.call(null,map__59828__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59829__$1 = cljs.core.__destructure_map.call(null,map__59829);
var env = cljs.core.get.call(null,map__59829__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var fakegoog = cljs.core.get.call(null,map__59829__$1,new cljs.core.Keyword(null,"fakegoog","fakegoog",-409952930));
var loaded = cljs.core.get.call(null,map__59829__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var state = cljs.core.get.call(null,map__59829__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var state_injections = cljs.core.get.call(null,map__59829__$1,new cljs.core.Keyword(null,"state-injections","state-injections",-1061743234));
var ns_cache = cljs.core.get.call(null,map__59829__$1,new cljs.core.Keyword(null,"ns-cache","ns-cache",-896908352));
var js_deps = cljs.core.get.call(null,map__59829__$1,new cljs.core.Keyword(null,"js-deps","js-deps",-699101283));
var bootstrapped_QMARK_ = cljs.core.get.call(null,map__59829__$1,new cljs.core.Keyword(null,"bootstrapped?","bootstrapped?",1050894306));
var fs = cljs.core.get.call(null,map__59828__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var lang = cljs.core.get.call(null,map__59828__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var file_name = cljs.core.get.call(null,map__59828__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),interactive_syntax.strings.UNTITLED);
var print_fn = cljs.core.get.call(null,map__59828__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),(function (){
return cljs.core.List.EMPTY;
}));
var running_QMARK_ = cljs.core.get.call(null,map__59828__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var sandbox = cljs.core.get.call(null,map__59828__$1,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),true);
var ns = cljs.core.get.call(null,map__59828__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var internal_ctrls = reagent.core.atom.call(null,null);
var loaded__$1 = ((cljs.core.coll_QMARK_.call(null,loaded))?reagent.core.atom.call(null,loaded):((cljs.core._EQ_.call(null,null,loaded))?reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY):loaded
));
var running_QMARK___$1 = (function (){var or__20754__auto__ = running_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return reagent.core.atom.call(null,false);
}
})();
var internal_running_QMARK_ = reagent.core.atom.call(null,false);
var compiled_QMARK_ = reagent.core.atom.call(null,false);
var lang__$1 = (function (){var or__20754__auto__ = lang;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
})();
var state__$1 = (function (){var or__20754__auto__ = state;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.js.empty_state.call(null);
}
})();
var ns_cache__$1 = (function (){var or__20754__auto__ = ns_cache;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return reagent.core.atom.call(null,null);
}
})();
var env__$1 = cljs.core.clj__GT_js.call(null,((cljs.core.fn_QMARK_.call(null,env))?env.call(null):(cljs.core.truth_(env)?env:interactive_syntax.stdlib.sandbox_env.call(null)
)));
var _ = (cljs.core.truth_(fakegoog)?(function (){
(env__$1.global = env__$1);

if(cljs.core.truth_(env__$1.goog)){
} else {
(env__$1.goog = ({}));
}

(env__$1.goog.require = cljs.core.partial.call(null,interactive_syntax.fakegoog.req,env__$1));

(env__$1.goog.provide = cljs.core.partial.call(null,interactive_syntax.fakegoog.prov,env__$1));

return (env__$1.goog.global = env__$1);
})()
:null);
var runtime = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded__$1,new cljs.core.Keyword(null,"state","state",-1988618099),state__$1,new cljs.core.Keyword(null,"ns-cache","ns-cache",-896908352),ns_cache__$1,new cljs.core.Keyword(null,"js-deps","js-deps",-699101283),js_deps,new cljs.core.Keyword(null,"bootstrapped?","bootstrapped?",1050894306),true], null);
var job = (function (){
var runner = (function (){var r = stopify.stopifyLocally("",({"newMethod": "direct"}));
(r.g = env__$1);

return r;
})();
var bootstrapping_QMARK_ = reagent.core.atom.call(null,false);
var coop_loaded = reagent.core.atom.call(null,null);
var coop_additional_core = reagent.core.atom.call(null,null);
var coop_state = reagent.core.atom.call(null,null);
var coop_print_fn = reagent.core.atom.call(null,null);
var coop_sandbox_global = reagent.core.atom.call(null,null);
var coop_ns_cache = reagent.core.atom.call(null,null);
var onRun = (function (){
cljs.core.reset_BANG_.call(null,internal_running_QMARK_,true);

cljs.core.reset_BANG_.call(null,coop_loaded,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_));

cljs.core.reset_BANG_.call(null,coop_print_fn,cljs.core._STAR_print_fn_STAR_);

cljs.core.reset_BANG_.call(null,coop_sandbox_global,cljs.core._STAR_sandbox_global_STAR_);

cljs.core.reset_BANG_.call(null,coop_ns_cache,cljs.core.NS_CACHE);

cljs.core.reset_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.deref.call(null,loaded__$1));

(cljs.core.NS_CACHE = cljs.core.deref.call(null,ns_cache__$1));

(cljs.core._STAR_print_fn_STAR_ = print_fn);

(cljs.core._STAR_sandbox_global_STAR_ = runner.g);

if(cljs.core.truth_(cljs.core.deref.call(null,bootstrapping_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,coop_additional_core,cljs.analyzer._STAR_additional_core_STAR_);

cljs.core.reset_BANG_.call(null,coop_state,cljs.env._STAR_compiler_STAR_);

(cljs.analyzer._STAR_additional_core_STAR_ = new cljs.core.Symbol(null,"visr.core","visr.core",-50394773,null));

return (cljs.env._STAR_compiler_STAR_ = state__$1);
}
});
var onYield = (function (){
cljs.core.reset_BANG_.call(null,internal_running_QMARK_,false);

cljs.core.swap_BANG_.call(null,loaded__$1,cljs.core.into,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_));

cljs.core.reset_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.deref.call(null,coop_loaded));

(cljs.core.NS_CACHE = cljs.core.deref.call(null,coop_ns_cache));

(cljs.core._STAR_print_fn_STAR_ = cljs.core.deref.call(null,coop_print_fn));

(cljs.core._STAR_sandbox_global_STAR_ = cljs.core.deref.call(null,coop_sandbox_global));

if(cljs.core.truth_(cljs.core.deref.call(null,bootstrapping_QMARK_))){
return null;
} else {
(cljs.analyzer._STAR_additional_core_STAR_ = cljs.core.deref.call(null,coop_additional_core));

return (cljs.env._STAR_compiler_STAR_ = cljs.core.deref.call(null,coop_state));
}
});
var opts = interactive_syntax.env.eval_opts.call(null,fs,runner,print_fn,sandbox,ns,onYield,onRun,compiled_QMARK_);
var bootstrap_opts = interactive_syntax.env.eval_opts.call(null,fs,runner,print_fn,sandbox,null,onYield,onRun,compiled_QMARK_);
var pause_eval = (function (p1__59820_SHARP_){
return runner.pause((function (ln){
onYield.call(null);

return p1__59820_SHARP_.call(null,ln);
}));
});
var resume_eval = (function (){
onRun.call(null);

return runner.resume();
});
var finish_comp = (function (){
cljs.core.reset_BANG_.call(null,internal_running_QMARK_,false);

cljs.core.reset_BANG_.call(null,running_QMARK___$1,false);

cljs.core.swap_BANG_.call(null,interactive_syntax.env.stopify_queue,cljs.core.pop);

if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,interactive_syntax.env.stopify_queue))){
return null;
} else {
return setTimeout(cljs.core.peek.call(null,cljs.core.deref.call(null,interactive_syntax.env.stopify_queue)),(0));
}
});
var stop_eval = (function (p1__59821_SHARP_){
return pause_eval.call(null,(function (){
finish_comp.call(null);

return p1__59821_SHARP_.call(null);
}));
});
var cb__$1 = (function (res){
onYield.call(null);

finish_comp.call(null);

return cb.call(null,res,runtime);
});
var post_load = (function (){
var pred__59830 = cljs.core._EQ_;
var expr__59831 = lang__$1;
if(cljs.core.truth_(pred__59830.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__59831))){
return cljs.js.eval_str.call(null,state__$1,src,file_name,opts,cb__$1);
} else {
if(cljs.core.truth_(pred__59830.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__59831))){
return new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),src,new cljs.core.Keyword(null,"name","name",1843675177),file_name], null),cb__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__59831)].join('')));
}
}
});
try{cljs.core.swap_BANG_.call(null,state__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),cljs.core.partial.call(null,cljs.core.merge,state_injections));

cljs.core.reset_BANG_.call(null,internal_running_QMARK_,true);

if(cljs.core.truth_(bootstrapped_QMARK_)){
} else {
cljs.core.reset_BANG_.call(null,bootstrapping_QMARK_,true);
}

onRun.call(null);

var target_obj_59834_59840 = runner;
var _STAR_runtime_state_STAR__orig_val__59838_59841 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59839_59842 = oops.state.prepare_state.call(null,target_obj_59834_59840,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59839_59842);

try{var call_info_59836_59843 = [target_obj_59834_59840,(function (){var next_obj_59837 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59834_59840,(0),"run",true,true,false))?(target_obj_59834_59840["run"]):null);
return next_obj_59837;
})()];
var fn_59835_59844 = (call_info_59836_59843[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59835_59844,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59835_59844 == null)))){
fn_59835_59844.call((call_info_59836_59843[(0)]),(function (){
if(cljs.core.truth_(bootstrapped_QMARK_)){
return post_load.call(null);
} else {
return cljs.js.eval_str.call(null,state__$1,interactive_syntax.stdlib.injectable,"core.cljs",bootstrap_opts,(function (res){
onYield.call(null);

cljs.core.reset_BANG_.call(null,bootstrapping_QMARK_,false);

cljs.core.swap_BANG_.call(null,state__$1,cljs.core.assoc,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),js_deps);

onRun.call(null);

(runner.g.visr.core$macros = runner.g.visr.core);

cljs.analyzer.intern_macros.call(null,new cljs.core.Symbol(null,"visr.core","visr.core",-50394773,null));

return post_load.call(null);
}));
}
}),onYield,(function (){
return cljs.core.List.EMPTY;
}),onRun);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59838_59841);
}
return cljs.core.reset_BANG_.call(null,internal_ctrls,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pause-eval","pause-eval",1377077296),(function (p1__59822_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,compiled_QMARK_))){
return pause_eval.call(null,p1__59822_SHARP_);
} else {
return cljs.core.add_watch.call(null,compiled_QMARK_,new cljs.core.Keyword("interactive-syntax.env","pause","interactive-syntax.env/pause",413773355),(function (k,r,o,n){
if(cljs.core.truth_(n)){
setTimeout((function (){
return pause_eval.call(null,p1__59822_SHARP_);
}),(0));

return cljs.core.remove_watch.call(null,compiled_QMARK_,new cljs.core.Keyword("interactive-syntax.env","pause","interactive-syntax.env/pause",413773355));
} else {
return null;
}
}));
}
}),new cljs.core.Keyword(null,"resume-eval","resume-eval",1370156932),(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,compiled_QMARK_))){
return resume_eval.call(null);
} else {
return cljs.core.add_watch.call(null,compiled_QMARK_,new cljs.core.Keyword("interactive-syntax.env","resume","interactive-syntax.env/resume",-1770222902),(function (k,r,o,n){
if(cljs.core.truth_(n)){
setTimeout((function (){
return resume_eval.call(null);
}),(0));

return cljs.core.remove_watch.call(null,compiled_QMARK_,new cljs.core.Keyword("interactive-syntax.env","resume","interactive-syntax.env/resume",-1770222902));
} else {
return null;
}
}));
}
}),new cljs.core.Keyword(null,"stop-eval","stop-eval",84967066),(function (p1__59823_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,compiled_QMARK_))){
return stop_eval.call(null,p1__59823_SHARP_);
} else {
return cljs.core.add_watch.call(null,compiled_QMARK_,new cljs.core.Keyword("interactive-syntax.env","stop","interactive-syntax.env/stop",-537499073),(function (k,r,o,n){
if(cljs.core.truth_(n)){
setTimeout((function (){
return stop_eval.call(null,p1__59823_SHARP_);
}),(0));

return cljs.core.remove_watch.call(null,compiled_QMARK_,new cljs.core.Keyword("interactive-syntax.env","stop","interactive-syntax.env/stop",-537499073));
} else {
return null;
}
}));
}
})], null));
}catch (e59833){var e = e59833;
return cb__$1.call(null,e);
}});
cljs.core.swap_BANG_.call(null,interactive_syntax.env.stopify_queue,cljs.core.conj,job);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,interactive_syntax.env.stopify_queue)),(1))){
setTimeout(job,(0));
} else {
}

cljs.core.reset_BANG_.call(null,running_QMARK___$1,true);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pause-eval","pause-eval",1377077296),(function (p1__59824_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,internal_ctrls))){
return new cljs.core.Keyword(null,"pause-eval","pause-eval",1377077296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_ctrls)).call(null,p1__59824_SHARP_);
} else {
return cljs.core.add_watch.call(null,internal_ctrls,new cljs.core.Keyword("interactive-syntax.env","pause","interactive-syntax.env/pause",413773355),(function (k,r,o,n){
if(cljs.core.truth_(n)){
new cljs.core.Keyword(null,"pause-eval","pause-eval",1377077296).cljs$core$IFn$_invoke$arity$1(n).call(null,p1__59824_SHARP_);

return cljs.core.remove_watch.call(null,internal_ctrls,new cljs.core.Keyword("interactive-syntax.env","pause","interactive-syntax.env/pause",413773355));
} else {
return null;
}
}));
}
}),new cljs.core.Keyword(null,"resume-eval","resume-eval",1370156932),(function (p1__59825_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,internal_ctrls))){
return new cljs.core.Keyword(null,"resume-eval","resume-eval",1370156932).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_ctrls)).call(null,p1__59825_SHARP_);
} else {
return cljs.core.add_watch.call(null,internal_ctrls,new cljs.core.Keyword("interactive-syntax.env","resume","interactive-syntax.env/resume",-1770222902),(function (k,r,o,n){
if(cljs.core.truth_(n)){
new cljs.core.Keyword(null,"resume-eval","resume-eval",1370156932).cljs$core$IFn$_invoke$arity$1(n).call(null,p1__59825_SHARP_);

return cljs.core.remove_watch.call(null,internal_ctrls,new cljs.core.Keyword("interactive-syntax.env","resume","interactive-syntax.env/resume",-1770222902));
} else {
return null;
}
}));
}
}),new cljs.core.Keyword(null,"stop-eval","stop-eval",84967066),(function (p1__59826_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,internal_ctrls))){
return new cljs.core.Keyword(null,"stop-eval","stop-eval",84967066).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_ctrls)).call(null,p1__59826_SHARP_);
} else {
return cljs.core.add_watch.call(null,internal_ctrls,new cljs.core.Keyword("interactive-syntax.env","stop","interactive-syntax.env/stop",-537499073),(function (k,r,o,n){
if(cljs.core.truth_(n)){
new cljs.core.Keyword(null,"stop-eval","stop-eval",84967066).cljs$core$IFn$_invoke$arity$1(n).call(null,p1__59826_SHARP_);

return cljs.core.remove_watch.call(null,internal_ctrls,new cljs.core.Keyword("interactive-syntax.env","stop","interactive-syntax.env/stop",-537499073));
} else {
return null;
}
}));
}
}),new cljs.core.Keyword(null,"running?","running?",-257884763),running_QMARK___$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
});
interactive_syntax.env.eval_buffer = (function interactive_syntax$env$eval_buffer(var_args){
var args__22092__auto__ = [];
var len__22082__auto___59863 = arguments.length;
var i__22083__auto___59864 = (0);
while(true){
if((i__22083__auto___59864 < len__22082__auto___59863)){
args__22092__auto__.push((arguments[i__22083__auto___59864]));

var G__59865 = (i__22083__auto___59864 + (1));
i__22083__auto___59864 = G__59865;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.env.eval_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.env.eval_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (p__59856,p__59857){
var map__59858 = p__59856;
var map__59858__$1 = cljs.core.__destructure_map.call(null,map__59858);
var db = map__59858__$1;
var map__59859 = cljs.core.get.call(null,map__59858__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__59859__$1 = cljs.core.__destructure_map.call(null,map__59859);
var run_functions = cljs.core.get.call(null,map__59859__$1,new cljs.core.Keyword(null,"run-functions","run-functions",2017743505));
var sandbox = cljs.core.get.call(null,map__59859__$1,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402));
var input = cljs.core.get.call(null,map__59858__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.call(null,map__59858__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var ns = cljs.core.get.call(null,map__59858__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var file_name = cljs.core.get.call(null,map__59858__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259));
var fs = cljs.core.get.call(null,map__59858__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var running_QMARK_ = cljs.core.get.call(null,map__59858__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var runner = cljs.core.get.call(null,map__59858__$1,new cljs.core.Keyword(null,"runner","runner",1945441304));
var vec__59860 = p__59857;
var cb = cljs.core.nth.call(null,vec__59860,(0),null);
return interactive_syntax.utils.cb_thread.call(null,(function (p1__59845_SHARP_){
return interactive_syntax.env.deps__GT_env.call(null,db,p1__59845_SHARP_);
}),(function (p1__59848_SHARP_,p2__59846_SHARP_){
if(cljs.core.truth_(p2__59846_SHARP_)){
cljs.core.reset_BANG_.call(null,interactive_syntax.env.stopified_cache,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_.call(null,runner,interactive_syntax.env.eval_str.call(null,cljs.core.deref.call(null,input),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),interactive_syntax.stdlib.reagent_runtime.call(null,p2__59846_SHARP_,db),new cljs.core.Keyword(null,"fs","fs",-2122926244),fs,new cljs.core.Keyword(null,"running?","running?",-257884763),running_QMARK_,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),cljs.core.deref.call(null,sandbox),new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),(function (p1__59847_SHARP_){
return cljs.core.swap_BANG_.call(null,output,cljs.core.conj,p1__59847_SHARP_);
})], null),p1__59848_SHARP_));
} else {
return null;
}
}),(function (n,res,rtm){
var new_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(res);
interactive_syntax.env.print_res.call(null,db,res);

cljs.core.reset_BANG_.call(null,ns,new_ns);

return interactive_syntax.utils.cb_loop.call(null,cljs.core.deref.call(null,run_functions),(function (p1__59851_SHARP_,p2__59849_SHARP_){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(rtm)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,p2__59849_SHARP_)], null)))){
return interactive_syntax.env.eval_str.call(null,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__59849_SHARP_),")"].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),rtm,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),cljs.core.deref.call(null,sandbox),new cljs.core.Keyword(null,"fs","fs",-2122926244),fs,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"ns","ns",441598760),new_ns,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),(function (p1__59850_SHARP_){
return cljs.core.swap_BANG_.call(null,output,cljs.core.conj,p1__59850_SHARP_);
})], null),(function (r){
interactive_syntax.env.print_res.call(null,db,r);

return p1__59851_SHARP_.call(null);
}));
} else {
return null;
}
}),(function (){
return n.call(null,res);
}));
}),(function (p1__59853_SHARP_,p2__59852_SHARP_){
if(cljs.core.truth_(cb)){
return cb.call(null,p2__59852_SHARP_);
} else {
return null;
}
}));
}));

(interactive_syntax.env.eval_buffer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.env.eval_buffer.cljs$lang$applyTo = (function (seq59854){
var G__59855 = cljs.core.first.call(null,seq59854);
var seq59854__$1 = cljs.core.next.call(null,seq59854);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59855,seq59854__$1);
}));

interactive_syntax.env.buffer_position__GT_index = (function interactive_syntax$env$buffer_position__GT_index(str,line,column){
var i = (0);
var line__$1 = line;
while(true){
if((line__$1 <= (1))){
return ((i + column) - (1));
} else {
var G__59866 = (str.indexOf("\n",i) + (1));
var G__59867 = (line__$1 - (1));
i = G__59866;
line__$1 = G__59867;
continue;
}
break;
}
});
interactive_syntax.env.mk_editor = (function interactive_syntax$env$mk_editor(var_args){
var args__22092__auto__ = [];
var len__22082__auto___59883 = arguments.length;
var i__22083__auto___59884 = (0);
while(true){
if((i__22083__auto___59884 < len__22082__auto___59883)){
args__22092__auto__.push((arguments[i__22083__auto___59884]));

var G__59885 = (i__22083__auto___59884 + (1));
i__22083__auto___59884 = G__59885;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((8) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((8)),(0),null)):null);
return interactive_syntax.env.mk_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),argseq__22093__auto__);
});

(interactive_syntax.env.mk_editor.cljs$core$IFn$_invoke$arity$variadic = (function (tag,p__59877,stx,runtime,sandbox,fs,file_src,cb,p__59878){
var map__59879 = p__59877;
var map__59879__$1 = cljs.core.__destructure_map.call(null,map__59879);
var data = map__59879__$1;
var editor = cljs.core.get.call(null,map__59879__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var vec__59880 = p__59878;
var visr_run_ref = cljs.core.nth.call(null,vec__59880,(0),null);
var ns = cljs.core.namespace.call(null,editor);
var mk_fn = (function (res){
if(cljs.core.truth_((function (){var and__20748__auto__ = res;
if(cljs.core.truth_(and__20748__auto__)){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res);
} else {
return and__20748__auto__;
}
})())){
return cb.call(null,res);
} else {
return interactive_syntax.env.eval_str.call(null,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(interactive_syntax.stdlib.visr__GT_render.call(null,editor))," (js/visr->atom ",cljs.core.pr_str.call(null,tag),")(js/visr->atom-info ",cljs.core.pr_str.call(null,tag),")]"].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"ns","ns",441598760),(function (){var or__20754__auto__ = ns;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(res);
}
})(),new cljs.core.Keyword(null,"running?","running?",-257884763),visr_run_ref,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),cljs.core.deref.call(null,sandbox),new cljs.core.Keyword(null,"fs","fs",-2122926244),fs], null),cb);
}
});
if(cljs.core.truth_(ns)){
return interactive_syntax.env.ns__GT_string.call(null,fs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),ns,new cljs.core.Keyword(null,"macros","macros",811339431),false,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.apply.call(null,path.join,ns.split("."))], null),(function (src){
var src__$1 = (cljs.core.truth_(src)?new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(src):"");
return interactive_syntax.env.eval_str.call(null,src__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"running?","running?",-257884763),visr_run_ref,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),cljs.core.deref.call(null,sandbox),new cljs.core.Keyword(null,"fs","fs",-2122926244),fs], null),mk_fn);
}));
} else {
return interactive_syntax.env.eval_str.call(null,cljs.core.deref.call(null,file_src),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"running?","running?",-257884763),visr_run_ref,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),cljs.core.deref.call(null,sandbox),new cljs.core.Keyword(null,"fs","fs",-2122926244),fs], null),mk_fn);

}
}));

(interactive_syntax.env.mk_editor.cljs$lang$maxFixedArity = (8));

/** @this {Function} */
(interactive_syntax.env.mk_editor.cljs$lang$applyTo = (function (seq59868){
var G__59869 = cljs.core.first.call(null,seq59868);
var seq59868__$1 = cljs.core.next.call(null,seq59868);
var G__59870 = cljs.core.first.call(null,seq59868__$1);
var seq59868__$2 = cljs.core.next.call(null,seq59868__$1);
var G__59871 = cljs.core.first.call(null,seq59868__$2);
var seq59868__$3 = cljs.core.next.call(null,seq59868__$2);
var G__59872 = cljs.core.first.call(null,seq59868__$3);
var seq59868__$4 = cljs.core.next.call(null,seq59868__$3);
var G__59873 = cljs.core.first.call(null,seq59868__$4);
var seq59868__$5 = cljs.core.next.call(null,seq59868__$4);
var G__59874 = cljs.core.first.call(null,seq59868__$5);
var seq59868__$6 = cljs.core.next.call(null,seq59868__$5);
var G__59875 = cljs.core.first.call(null,seq59868__$6);
var seq59868__$7 = cljs.core.next.call(null,seq59868__$6);
var G__59876 = cljs.core.first.call(null,seq59868__$7);
var seq59868__$8 = cljs.core.next.call(null,seq59868__$7);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59869,G__59870,G__59871,G__59872,G__59873,G__59874,G__59875,G__59876,seq59868__$8);
}));

interactive_syntax.env.styled_frame = (function interactive_syntax$env$styled_frame(var_args){
var args__22092__auto__ = [];
var len__22082__auto___59889 = arguments.length;
var i__22083__auto___59890 = (0);
while(true){
if((i__22083__auto___59890 < len__22082__auto___59889)){
args__22092__auto__.push((arguments[i__22083__auto___59890]));

var G__59891 = (i__22083__auto___59890 + (1));
i__22083__auto___59890 = G__59891;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.env.styled_frame.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.env.styled_frame.cljs$core$IFn$_invoke$arity$variadic = (function (mopts,mbody){
var opts = ((cljs.core.map_QMARK_.call(null,mopts))?cljs.core.dissoc.call(null,mopts,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),new cljs.core.Keyword(null,"scroll-left","scroll-left",-211761103),new cljs.core.Keyword(null,"resizable?","resizable?",20635134)):cljs.core.PersistentArrayMap.EMPTY);
var body = ((cljs.core.map_QMARK_.call(null,mopts))?mbody:cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mopts], null),mbody));
var on_resize = (function (){var and__20748__auto__ = cljs.core.map_QMARK_.call(null,mopts);
if(and__20748__auto__){
return new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129).cljs$core$IFn$_invoke$arity$1(mopts);
} else {
return and__20748__auto__;
}
})();
var on_scroll = (function (){var and__20748__auto__ = cljs.core.map_QMARK_.call(null,mopts);
if(and__20748__auto__){
return new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677).cljs$core$IFn$_invoke$arity$1(mopts);
} else {
return and__20748__auto__;
}
})();
var scroll_top = (function (){var and__20748__auto__ = cljs.core.map_QMARK_.call(null,mopts);
if(and__20748__auto__){
return new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(mopts);
} else {
return and__20748__auto__;
}
})();
var scroll_left = (function (){var and__20748__auto__ = cljs.core.map_QMARK_.call(null,mopts);
if(and__20748__auto__){
return new cljs.core.Keyword(null,"scroll-left","scroll-left",-211761103).cljs$core$IFn$_invoke$arity$1(mopts);
} else {
return and__20748__auto__;
}
})();
var resizable_QMARK_ = (function (){var and__20748__auto__ = cljs.core.map_QMARK_.call(null,mopts);
if(and__20748__auto__){
return new cljs.core.Keyword(null,"resizable?","resizable?",20635134).cljs$core$IFn$_invoke$arity$1(mopts);
} else {
return and__20748__auto__;
}
})();
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"resize","resize",297367086),(function (){var and__20748__auto__ = resizable_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return "both";
} else {
return and__20748__auto__;
}
})(),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(25),new cljs.core.Keyword(null,"min-height","min-height",398480837),(25)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.ReactResizeDetector,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handleWidth","handleWidth",1901549090),true,new cljs.core.Keyword(null,"handleHeight","handleHeight",-1894457172),true,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),(function() { 
var G__59892__delegate = function (rest__59886_SHARP_){
if(cljs.core.truth_(on_resize)){
return cljs.core.apply.call(null,on_resize,rest__59886_SHARP_);
} else {
return null;
}
};
var G__59892 = function (var_args){
var rest__59886_SHARP_ = null;
if (arguments.length > 0) {
var G__59893__i = 0, G__59893__a = new Array(arguments.length -  0);
while (G__59893__i < G__59893__a.length) {G__59893__a[G__59893__i] = arguments[G__59893__i + 0]; ++G__59893__i;}
  rest__59886_SHARP_ = new cljs.core.IndexedSeq(G__59893__a,0,null);
} 
return G__59892__delegate.call(this,rest__59886_SHARP_);};
G__59892.cljs$lang$maxFixedArity = 0;
G__59892.cljs$lang$applyTo = (function (arglist__59894){
var rest__59886_SHARP_ = cljs.core.seq(arglist__59894);
return G__59892__delegate(rest__59886_SHARP_);
});
G__59892.cljs$core$IFn$_invoke$arity$variadic = G__59892__delegate;
return G__59892;
})()
], null)], null)], null),body);
}));

(interactive_syntax.env.styled_frame.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.env.styled_frame.cljs$lang$applyTo = (function (seq59887){
var G__59888 = cljs.core.first.call(null,seq59887);
var seq59887__$1 = cljs.core.next.call(null,seq59887);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59888,seq59887__$1);
}));

interactive_syntax.env.codemirror_options = (function interactive_syntax$env$codemirror_options(p__59895){
var map__59896 = p__59895;
var map__59896__$1 = cljs.core.__destructure_map.call(null,map__59896);
var db = map__59896__$1;
var options = cljs.core.get.call(null,map__59896__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyMap","keyMap",945500512),new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),new cljs.core.Keyword(null,"gutters","gutters",688671428),new cljs.core.Keyword(null,"foldGutter","foldGutter",-191001083),new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),new cljs.core.Keyword(null,"showCursorWhenSelecting","showCursorWhenSelecting",169880137),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311)],[cljs.core.deref.call(null,new cljs.core.Keyword(null,"keymap","keymap",-499605268).cljs$core$IFn$_invoke$arity$1(options)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"line-wrapping","line-wrapping",919045521).cljs$core$IFn$_invoke$arity$1(options)),["CodeMirror-linenumbers","CodeMirror-foldgutter"],true,true,true,"clojure",new cljs.core.PersistentArrayMap(null, 2, ["Tab",(function (){var pred__59897 = cljs.core._EQ_;
var expr__59898 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"tab-behavior","tab-behavior",-301810914).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(pred__59897.call(null,"indent",expr__59898))){
return "indentMore";
} else {
if(cljs.core.truth_(pred__59897.call(null,"auto",expr__59898))){
return "indentAuto";
} else {
if(cljs.core.truth_(pred__59897.call(null,"tab",expr__59898))){
return "insertTab";
} else {
return "defaultTab";
}
}
}
})(),"Ctrl-Space","autocomplete"], null),cljs.core.deref.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(options)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237).cljs$core$IFn$_invoke$arity$1(options)),true]);
});
interactive_syntax.env.err_boundary = (function interactive_syntax$env$err_boundary(var_args){
var args__22092__auto__ = [];
var len__22082__auto___59904 = arguments.length;
var i__22083__auto___59905 = (0);
while(true){
if((i__22083__auto___59905 < len__22082__auto___59904)){
args__22092__auto__.push((arguments[i__22083__auto___59905]));

var G__59906 = (i__22083__auto___59905 + (1));
i__22083__auto___59905 = G__59906;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return interactive_syntax.env.err_boundary.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(interactive_syntax.env.err_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var err_state = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ErrBoundary",new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (err,info){
return cljs.core.reset_BANG_.call(null,err_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,info], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__59907__delegate = function (children__$1){
if((cljs.core.deref.call(null,err_state) == null)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children__$1);
} else {
var vec__59901 = cljs.core.deref.call(null,err_state);
var err = cljs.core.nth.call(null,vec__59901,(0),null);
var info = cljs.core.nth.call(null,vec__59901,(1),null);
console.log(err);

console.error(info);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.env.styled_frame,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre"], null)], null),cljs.core.pr_str.call(null,info)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre"], null)], null),cljs.core.pr_str.call(null,err)], null)], null)], null);
}
};
var G__59907 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__59908__i = 0, G__59908__a = new Array(arguments.length -  0);
while (G__59908__i < G__59908__a.length) {G__59908__a[G__59908__i] = arguments[G__59908__i + 0]; ++G__59908__i;}
  children__$1 = new cljs.core.IndexedSeq(G__59908__a,0,null);
} 
return G__59907__delegate.call(this,children__$1);};
G__59907.cljs$lang$maxFixedArity = 0;
G__59907.cljs$lang$applyTo = (function (arglist__59909){
var children__$1 = cljs.core.seq(arglist__59909);
return G__59907__delegate(children__$1);
});
G__59907.cljs$core$IFn$_invoke$arity$variadic = G__59907__delegate;
return G__59907;
})()
], null));
}));

(interactive_syntax.env.err_boundary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(interactive_syntax.env.err_boundary.cljs$lang$applyTo = (function (seq59900){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59900));
}));

interactive_syntax.env.stx__GT_stx_str = (function interactive_syntax$env$stx__GT_stx_str(stx){
return zprint.core.zprint_str.call(null,stx,(40));
});
interactive_syntax.env.visr_hider = (function interactive_syntax$env$visr_hider(p__59912,runtime,tag,info,stx,file_src,refs,mark_box,visr_options,codemirror_options){
var map__59913 = p__59912;
var map__59913__$1 = cljs.core.__destructure_map.call(null,map__59913);
var db = map__59913__$1;
var map__59914 = cljs.core.get.call(null,map__59913__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__59914__$1 = cljs.core.__destructure_map.call(null,map__59914);
var visr_defaults = cljs.core.get.call(null,map__59914__$1,new cljs.core.Keyword(null,"visr-defaults","visr-defaults",1116635776));
var sandbox = cljs.core.get.call(null,map__59914__$1,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402));
var visr_scroll = reagent.core.atom.call(null,null);
var visr = reagent.core.atom.call(null,null);
var focused_QMARK_ = reagent.core.atom.call(null,false);
var scratch = cljs.core.atom.call(null,null);
var startup = reagent.core.atom.call(null,true);
cljs.core.add_watch.call(null,info,new cljs.core.Keyword("interactive-syntax.env","reset-visr","interactive-syntax.env/reset-visr",-590672466),(function (k,r,o,n){
if(cljs.core._EQ_.call(null,o,n)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,visr,null);
}
}));

cljs.core.add_watch.call(null,stx,new cljs.core.Keyword("interactive-syntax.env","reset-visr","interactive-syntax.env/reset-visr",-590672466),(function (k,r,o,n){
if(cljs.core._EQ_.call(null,o,n)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,visr,null);
}
}));

return (function (p__59915,runtime__$1,tag__$1,info__$1,stx__$1,file_src__$1,refs__$1,mark_box__$1,p__59916,codemirror_options__$1){
var map__59917 = p__59915;
var map__59917__$1 = cljs.core.__destructure_map.call(null,map__59917);
var db__$1 = map__59917__$1;
var fs = cljs.core.get.call(null,map__59917__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var map__59918 = p__59916;
var map__59918__$1 = cljs.core.__destructure_map.call(null,map__59918);
var visr_options__$1 = map__59918__$1;
var for_print = cljs.core.get.call(null,map__59918__$1,new cljs.core.Keyword(null,"for-print","for-print",318613756));
var show_bars = cljs.core.get.call(null,map__59918__$1,new cljs.core.Keyword(null,"hider-bars","hider-bars",-904887670));
var show_visr = reagent.core.cursor.call(null,info__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-visr","show-visr",1978675213)], null));
var show_code = reagent.core.cursor.call(null,info__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-text","show-text",464244146)], null));
var show_bars__$1 = (function (){var or__20754__auto__ = show_bars;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,info__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-hider-bars","show-hider-bars",921401505)], null));
}
})();
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,info__$1),new cljs.core.Keyword(null,"show-visr","show-visr",1978675213))){
} else {
cljs.core.reset_BANG_.call(null,show_visr,cljs.core.contains_QMARK_.call(null,visr_defaults,new cljs.core.Keyword(null,"show-visr","show-visr",1978675213)));
}

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,info__$1),new cljs.core.Keyword(null,"show-text","show-text",464244146))){
} else {
cljs.core.reset_BANG_.call(null,show_code,cljs.core.contains_QMARK_.call(null,visr_defaults,new cljs.core.Keyword(null,"show-code","show-code",867098788)));
}

if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.deref.call(null,show_visr);
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,visr),null);
} else {
return and__20748__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,visr,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.node$module$react_bootstrap.Spinner,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"animation","animation",-1248293244),"border",new cljs.core.Keyword(null,"variant","variant",-424354234),"primary",new cljs.core.Keyword(null,"role","role",-736691072),"status"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"visually-hidden"], null),"Loading"], null)], null));

interactive_syntax.env.mk_editor.call(null,tag__$1,cljs.core.deref.call(null,info__$1),cljs.core.deref.call(null,stx__$1),runtime__$1,sandbox,fs,file_src__$1,(function (ret){
return cljs.core.reset_BANG_.call(null,visr,(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ret);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
if(cljs.core._EQ_.call(null,(function (){var target_obj_59919 = v;
var _STAR_runtime_state_STAR__orig_val__59921 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59922 = oops.state.prepare_state.call(null,target_obj_59919,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59922);

try{var next_obj_59920 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59919,(0),"type",true,true,false))?(target_obj_59919["type"]):null);
return next_obj_59920;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59921);
}})(),"exception")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre"], null)], null),(function (){var target_obj_59923 = v;
var _STAR_runtime_state_STAR__orig_val__59926 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59927 = oops.state.prepare_state.call(null,target_obj_59923,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59927);

try{var next_obj_59924 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59923,(0),"value",true,true,false))?(target_obj_59923["value"]):null);
var next_obj_59925 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_59924,(0),"stack",true,true,false))?(next_obj_59924["stack"]):null);
return next_obj_59925;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59926);
}})()], null);
} else {
var target_obj_59928 = v;
var _STAR_runtime_state_STAR__orig_val__59930 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59931 = oops.state.prepare_state.call(null,target_obj_59928,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59931);

try{var next_obj_59929 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59928,(0),"value",true,true,false))?(target_obj_59928["value"]):null);
return next_obj_59929;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59930);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ret.stack], null);
}
})());
}));
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,startup))){
var sc_59992 = cljs.core.deref.call(null,show_code);
cljs.core.reset_BANG_.call(null,startup,false);

cljs.core.reset_BANG_.call(null,show_code,false);

setTimeout((function (){
return cljs.core.reset_BANG_.call(null,show_code,sc_59992);
}),(0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.node$module$react_bootstrap.ButtonGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.VISR], null),(cljs.core.truth_((function (){var or__20754__auto__ = cljs.core.not.call(null,for_print);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return show_bars__$1;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.VISUAL,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,show_visr,cljs.core.not);

var temp__5718__auto__ = cljs.core.deref.call(null,mark_box__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var rmb = temp__5718__auto__;
var target_obj_59932 = rmb;
var _STAR_runtime_state_STAR__orig_val__59936 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59937 = oops.state.prepare_state.call(null,target_obj_59932,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59937);

try{var call_info_59934 = [target_obj_59932,(function (){var next_obj_59935 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59932,(0),"changed",true,true,false))?(target_obj_59932["changed"]):null);
return next_obj_59935;
})()];
var fn_59933 = (call_info_59934[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59933,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59933 == null)))){
return fn_59933.call((call_info_59934[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59936);
}} else {
return null;
}
})], null),"\uD83D\uDC41"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,show_visr))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.env.err_boundary,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.env.styled_frame,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"visr-body",new cljs.core.Keyword(null,"resizable?","resizable?",20635134),(function (){var or__20754__auto__ = cljs.core.not.call(null,for_print);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return show_bars__$1;
}
})(),new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),(function (event){
var se = (function (){var target_obj_59938 = event;
var _STAR_runtime_state_STAR__orig_val__59941 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59942 = oops.state.prepare_state.call(null,target_obj_59938,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59942);

try{var next_obj_59939 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59938,(0),"target",true,true,false))?(target_obj_59938["target"]):null);
var next_obj_59940 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_59939,(0),"scrollingElement",true,true,false))?(next_obj_59939["scrollingElement"]):null);
return next_obj_59940;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59941);
}})();
return cljs.core.reset_BANG_.call(null,visr_scroll,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-left","scroll-left",-211761103),(function (){var target_obj_59943 = se;
var _STAR_runtime_state_STAR__orig_val__59945 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59946 = oops.state.prepare_state.call(null,target_obj_59943,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59946);

try{var next_obj_59944 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59943,(0),"scrollLeft",true,true,false))?(target_obj_59943["scrollLeft"]):null);
return next_obj_59944;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59945);
}})(),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(function (){var target_obj_59947 = se;
var _STAR_runtime_state_STAR__orig_val__59949 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59950 = oops.state.prepare_state.call(null,target_obj_59947,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59950);

try{var next_obj_59948 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59947,(0),"scrollTop",true,true,false))?(target_obj_59947["scrollTop"]):null);
return next_obj_59948;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59949);
}})()], null));
}),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,visr_scroll)),new cljs.core.Keyword(null,"scroll-left","scroll-left",-211761103),new cljs.core.Keyword(null,"scroll-left","scroll-left",-211761103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,visr_scroll))], null),cljs.core.deref.call(null,visr)], null)], null):null),(cljs.core.truth_((function (){var or__20754__auto__ = cljs.core.not.call(null,for_print);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return show_bars__$1;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.node$module$react_bootstrap.Button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.CODE,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em"], null),new cljs.core.Keyword(null,"variant","variant",-424354234),"secondary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,show_code,cljs.core.not);

var temp__5718__auto__ = cljs.core.deref.call(null,mark_box__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var rmb = temp__5718__auto__;
var target_obj_59951 = rmb;
var _STAR_runtime_state_STAR__orig_val__59955 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59956 = oops.state.prepare_state.call(null,target_obj_59951,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59956);

try{var call_info_59953 = [target_obj_59951,(function (){var next_obj_59954 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59951,(0),"changed",true,true,false))?(target_obj_59951["changed"]):null);
return next_obj_59954;
})()];
var fn_59952 = (call_info_59953[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59952,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59952 == null)))){
return fn_59952.call((call_info_59953[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59955);
}} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"(\u03BB)"], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,show_code))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.env.styled_frame,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"visr-code",new cljs.core.Keyword(null,"resizable?","resizable?",20635134),(function (){var or__20754__auto__ = cljs.core.not.call(null,for_print);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return show_bars__$1;
}
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.node$module$react_bootstrap.Form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (p1__59910_SHARP_){
p1__59910_SHARP_.preventDefault();

return p1__59910_SHARP_.stopPropagation();
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
cljs.core.reset_BANG_.call(null,scratch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,info__$1)),new cljs.core.Keyword(null,"value","value",305978217),interactive_syntax.env.stx__GT_stx_str.call(null,cljs.core.deref.call(null,stx__$1))], null));

return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
cljs.core.swap_BANG_.call(null,info__$1,cljs.core.assoc,new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scratch)));

cljs.core.reset_BANG_.call(null,stx__$1,(function (){var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scratch));
try{return cljs.tools.reader.read_string.call(null,v);
}catch (e59957){if((e59957 instanceof Error)){
var e = e59957;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
} else {
throw e59957;

}
}})());

return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_59958 = interactive_syntax.env.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__59960 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59961 = oops.state.prepare_state.call(null,target_obj_59958,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59961);

try{var next_obj_59959 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59958,(0),"Group",true,true,false))?(target_obj_59958["Group"]):null);
return next_obj_59959;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59960);
}})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.env.node$module$react_bootstrap.Row,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_59962 = interactive_syntax.env.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__59964 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59965 = oops.state.prepare_state.call(null,target_obj_59962,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59965);

try{var next_obj_59963 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59962,(0),"Label",true,true,false))?(target_obj_59962["Label"]):null);
return next_obj_59963;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59964);
}})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null)], null),[interactive_syntax.strings.VISR,":"].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),"11",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_59966 = interactive_syntax.env.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__59968 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59969 = oops.state.prepare_state.call(null,target_obj_59966,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59969);

try{var next_obj_59967 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59966,(0),"Control",true,true,false))?(target_obj_59966["Control"]):null);
return next_obj_59967;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59968);
}})(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"min-height","min-height",398480837),"0"], null),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),interactive_syntax.strings.VISR,new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,info__$1))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__59911_SHARP_){
var value = (function (){var target_obj_59970 = p1__59911_SHARP_;
var _STAR_runtime_state_STAR__orig_val__59973 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59974 = oops.state.prepare_state.call(null,target_obj_59970,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59974);

try{var next_obj_59971 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59970,(0),"target",true,true,false))?(target_obj_59970["target"]):null);
var next_obj_59972 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_59971,(0),"value",true,true,false))?(next_obj_59971["value"]):null);
return next_obj_59972;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59973);
}})();
if(cljs.core.truth_(interactive_syntax.env.valid_id_QMARK_.call(null,value))){
if(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))){
return cljs.core.swap_BANG_.call(null,scratch,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,value));
} else {
return cljs.core.swap_BANG_.call(null,info__$1,cljs.core.assoc,new cljs.core.Keyword(null,"editor","editor",-989377770),cljs.core.symbol.call(null,value));
}
} else {
return null;
}
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var target_obj_59975 = interactive_syntax.env.node$module$react_bootstrap.Form;
var _STAR_runtime_state_STAR__orig_val__59977 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59978 = oops.state.prepare_state.call(null,target_obj_59975,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59978);

try{var next_obj_59976 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59975,(0),"Group",true,true,false))?(target_obj_59975["Group"]):null);
return next_obj_59976;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59977);
}})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),interactive_syntax.env.node$module$react_bootstrap.Row,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.node$module$react_bootstrap.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),"12",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),interactive_syntax.env.node$module$react_codemirror2.UnControlled,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),(function (){var or__20754__auto__ = codemirror_options__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return codemirror_options__$1.call(null,db__$1);
}
})(),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (this$,operation,value){
if(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))){
return cljs.core.swap_BANG_.call(null,scratch,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),value);
} else {
return cljs.core.reset_BANG_.call(null,stx__$1,(function (){try{return cljs.tools.reader.read_string.call(null,value);
}catch (e59979){if((e59979 instanceof Error)){
var e = e59979;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
throw e59979;

}
}})());
}
}),new cljs.core.Keyword(null,"editorDidMount","editorDidMount",1539700689),(function (e){
var target_obj_59980 = (function (){var target_obj_59984 = e;
var _STAR_runtime_state_STAR__orig_val__59988 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59989 = oops.state.prepare_state.call(null,target_obj_59984,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59989);

try{var call_info_59986 = [target_obj_59984,(function (){var next_obj_59987 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59984,(0),"getDoc",true,true,false))?(target_obj_59984["getDoc"]):null);
return next_obj_59987;
})()];
var fn_59985 = (call_info_59986[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59985,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59985 == null)))){
return fn_59985.call((call_info_59986[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59988);
}})();
var _STAR_runtime_state_STAR__orig_val__59990 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__59991 = oops.state.prepare_state.call(null,target_obj_59980,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__59991);

try{var call_info_59982 = [target_obj_59980,(function (){var next_obj_59983 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_59980,(0),"setValue",true,true,false))?(target_obj_59980["setValue"]):null);
return next_obj_59983;
})()];
var fn_59981 = (call_info_59982[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_59981,oops.state.get_last_access_modifier.call(null))){
if((!((fn_59981 == null)))){
return fn_59981.call((call_info_59982[(0)]),interactive_syntax.env.stx__GT_stx_str.call(null,cljs.core.deref.call(null,stx__$1)));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__59990);
}})], null)], null)], null)], null)], null)], null):null)], null)], null);
});
});
interactive_syntax.env.make_reset_editors_cache = interactive_syntax.editor.make_reset_editors_cache;
interactive_syntax.env.reset_editors_BANG_ = (function interactive_syntax$env$reset_editors_BANG_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___60095 = arguments.length;
var i__22083__auto___60096 = (0);
while(true){
if((i__22083__auto___60096 < len__22082__auto___60095)){
args__22092__auto__.push((arguments[i__22083__auto___60096]));

var G__60097 = (i__22083__auto___60096 + (1));
i__22083__auto___60096 = G__60097;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((8) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((8)),(0),null)):null);
return interactive_syntax.env.reset_editors_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),argseq__22093__auto__);
});

(interactive_syntax.env.reset_editors_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (source,set_text,editor,instances,cache,codemirror_options,p__60005,cb,p__60006){
var map__60007 = p__60005;
var map__60007__$1 = cljs.core.__destructure_map.call(null,map__60007);
var db = map__60007__$1;
var map__60008 = cljs.core.get.call(null,map__60007__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__60008__$1 = cljs.core.__destructure_map.call(null,map__60008);
var show_editors = cljs.core.get.call(null,map__60008__$1,new cljs.core.Keyword(null,"show-editors","show-editors",-2067467327));
var sandbox = cljs.core.get.call(null,map__60008__$1,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402));
var fs = cljs.core.get.call(null,map__60007__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var deps = cljs.core.get.call(null,map__60007__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var vec__60009 = p__60006;
var map__60012 = cljs.core.nth.call(null,vec__60009,(0),null);
var map__60012__$1 = cljs.core.__destructure_map.call(null,map__60012);
var editor_options = map__60012__$1;
var visr_run_ref = cljs.core.get.call(null,map__60012__$1,new cljs.core.Keyword(null,"visr-run","visr-run",101348956));
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.deref.call(null,show_editors);
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.deref.call(null,editor);
} else {
return and__20748__auto__;
}
})())){
var queue = reagent.core.cursor.call(null,cache,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null));
var cache__$1 = reagent.core.cursor.call(null,cache,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cache","cache",-1237023054)], null));
var old_instances = reagent.core.atom.call(null,cljs.core.deref.call(null,instances));
var prog = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source);
var eof = reagent.core.atom.call(null,null);
var fresh_cache = reagent.core.atom.call(null,false);
var cache_snapshot = cljs.core.deref.call(null,cache__$1);
var cb__$1 = (function (){
cljs.core.swap_BANG_.call(null,queue,cljs.core.pop);

if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,queue))){
} else {
setTimeout(cljs.core.peek.call(null,cljs.core.deref.call(null,queue)),(0));
}

return cb.call(null);
});
return interactive_syntax.utils.cb_thread.call(null,(function (n){
cljs.core.swap_BANG_.call(null,queue,cljs.core.conj,n);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,queue)),(1))){
return n.call(null);
} else {
return null;
}
}),(function (n){
var seq__60013_60098 = cljs.core.seq.call(null,cljs.core.deref.call(null,instances));
var chunk__60014_60099 = null;
var count__60015_60100 = (0);
var i__60016_60101 = (0);
while(true){
if((i__60016_60101 < count__60015_60100)){
var vec__60035_60102 = cljs.core._nth.call(null,chunk__60014_60099,i__60016_60101);
var k_60103 = cljs.core.nth.call(null,vec__60035_60102,(0),null);
var v_60104 = cljs.core.nth.call(null,vec__60035_60102,(1),null);
var target_obj_60038_60105 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(v_60104));
var _STAR_runtime_state_STAR__orig_val__60042_60106 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__60043_60107 = oops.state.prepare_state.call(null,target_obj_60038_60105,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__60043_60107);

try{var call_info_60040_60108 = [target_obj_60038_60105,(function (){var next_obj_60041 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_60038_60105,(0),"clear",true,true,false))?(target_obj_60038_60105["clear"]):null);
return next_obj_60041;
})()];
var fn_60039_60109 = (call_info_60040_60108[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_60039_60109,oops.state.get_last_access_modifier.call(null))){
if((!((fn_60039_60109 == null)))){
fn_60039_60109.call((call_info_60040_60108[(0)]));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__60042_60106);
}

var G__60110 = seq__60013_60098;
var G__60111 = chunk__60014_60099;
var G__60112 = count__60015_60100;
var G__60113 = (i__60016_60101 + (1));
seq__60013_60098 = G__60110;
chunk__60014_60099 = G__60111;
count__60015_60100 = G__60112;
i__60016_60101 = G__60113;
continue;
} else {
var temp__5720__auto___60114 = cljs.core.seq.call(null,seq__60013_60098);
if(temp__5720__auto___60114){
var seq__60013_60115__$1 = temp__5720__auto___60114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60013_60115__$1)){
var c__21725__auto___60116 = cljs.core.chunk_first.call(null,seq__60013_60115__$1);
var G__60117 = cljs.core.chunk_rest.call(null,seq__60013_60115__$1);
var G__60118 = c__21725__auto___60116;
var G__60119 = cljs.core.count.call(null,c__21725__auto___60116);
var G__60120 = (0);
seq__60013_60098 = G__60117;
chunk__60014_60099 = G__60118;
count__60015_60100 = G__60119;
i__60016_60101 = G__60120;
continue;
} else {
var vec__60044_60121 = cljs.core.first.call(null,seq__60013_60115__$1);
var k_60122 = cljs.core.nth.call(null,vec__60044_60121,(0),null);
var v_60123 = cljs.core.nth.call(null,vec__60044_60121,(1),null);
var target_obj_60047_60124 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(v_60123));
var _STAR_runtime_state_STAR__orig_val__60051_60125 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__60052_60126 = oops.state.prepare_state.call(null,target_obj_60047_60124,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__60052_60126);

try{var call_info_60049_60127 = [target_obj_60047_60124,(function (){var next_obj_60050 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_60047_60124,(0),"clear",true,true,false))?(target_obj_60047_60124["clear"]):null);
return next_obj_60050;
})()];
var fn_60048_60128 = (call_info_60049_60127[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_60048_60128,oops.state.get_last_access_modifier.call(null))){
if((!((fn_60048_60128 == null)))){
fn_60048_60128.call((call_info_60049_60127[(0)]));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__60051_60125);
}

var G__60129 = cljs.core.next.call(null,seq__60013_60115__$1);
var G__60130 = null;
var G__60131 = (0);
var G__60132 = (0);
seq__60013_60098 = G__60129;
chunk__60014_60099 = G__60130;
count__60015_60100 = G__60131;
i__60016_60101 = G__60132;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,instances,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.truth_(cache_snapshot)){
return n.call(null,cljs.core.deref.call(null,cache__$1));
} else {
return interactive_syntax.utils.cb_thread.call(null,(function (p1__59993_SHARP_){
return interactive_syntax.env.deps__GT_env.call(null,db,p1__59993_SHARP_);
}),(function (p1__59995_SHARP_,p2__59994_SHARP_){
if(cljs.core.truth_(p2__59994_SHARP_)){
return interactive_syntax.env.eval_str.call(null,"",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),interactive_syntax.stdlib.reagent_runtime.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p2__59994_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.munge.call(null,"visr->atom")], null),(function (x){
var or__20754__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,instances),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"stx","stx",-321752522)], null));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return reagent.core.atom.call(null,null);
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.munge.call(null,"visr->atom-info")], null),(function (x){
var or__20754__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,instances),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"info","info",-317069002)], null));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return reagent.core.atom.call(null,null);
}
})),db),new cljs.core.Keyword(null,"running?","running?",-257884763),visr_run_ref,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),cljs.core.deref.call(null,sandbox),new cljs.core.Keyword(null,"fs","fs",-2122926244),fs], null),p1__59995_SHARP_);
} else {
return cb__$1.call(null);
}
}),(function (_,___$1,runtime){
cljs.core.reset_BANG_.call(null,cache__$1,runtime);

cljs.core.reset_BANG_.call(null,fresh_cache,true);

return n.call(null,runtime);
}));
}
}),(function (_,runtime){
try{while(true){
var form_60133 = (function (){try{return cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof], null),prog);
}catch (e60054){if((e60054 instanceof Error)){
var e = e60054;
return cljs.core.ex_info.call(null,e.message,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),(function (){var target_obj_60055 = e;
var _STAR_runtime_state_STAR__orig_val__60057 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__60058 = oops.state.prepare_state.call(null,target_obj_60055,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__60058);

try{var next_obj_60056 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_60055,(0),"lineNumber",true,true,false))?(target_obj_60055["lineNumber"]):null);
return next_obj_60056;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__60057);
}})(),new cljs.core.Keyword(null,"char","char",-641587586),(function (){var target_obj_60059 = e;
var _STAR_runtime_state_STAR__orig_val__60061 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__60062 = oops.state.prepare_state.call(null,target_obj_60059,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__60062);

try{var next_obj_60060 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_60059,(0),"columnNumber",true,true,false))?(target_obj_60059["columnNumber"]):null);
return next_obj_60060;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__60061);
}})(),new cljs.core.Keyword(null,"name","name",1843675177),(function (){var target_obj_60063 = e;
var _STAR_runtime_state_STAR__orig_val__60065 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__60066 = oops.state.prepare_state.call(null,target_obj_60063,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__60066);

try{var next_obj_60064 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_60063,(0),"name",true,true,false))?(target_obj_60063["name"]):null);
return next_obj_60064;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__60065);
}})(),new cljs.core.Keyword(null,"file","file",-1269645878),(function (){var target_obj_60067 = e;
var _STAR_runtime_state_STAR__orig_val__60069 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__60070 = oops.state.prepare_state.call(null,target_obj_60067,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__60070);

try{var next_obj_60068 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_60067,(0),"fileName",true,true,false))?(target_obj_60067["fileName"]):null);
return next_obj_60068;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__60069);
}})()], null),new cljs.core.Keyword(null,"read-error","read-error",1254709471));
} else {
throw e60054;

}
}})();
if((form_60133 === eof)){
} else {
if(cljs.core.coll_QMARK_.call(null,form_60133)){
((function (form_60133,queue,cache__$1,old_instances,prog,eof,fresh_cache,cache_snapshot,cb__$1,map__60007,map__60007__$1,db,map__60008,map__60008__$1,show_editors,sandbox,fs,deps,vec__60009,map__60012,map__60012__$1,editor_options,visr_run_ref){
return (function interactive_syntax$env$rec(form__$1){
var stxinfo = cljs.core.meta.call(null,form__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(stxinfo))){
var vec__60071_60134 = cljs.core.some.call(null,(function (p__60075){
var vec__60076 = p__60075;
var k_60135 = cljs.core.nth.call(null,vec__60076,(0),null);
var v = cljs.core.nth.call(null,vec__60076,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"stx","stx",-321752522).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.second.call(null,form__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_60135,v], null);
} else {
return null;
}
}),cljs.core.deref.call(null,old_instances));
var k_60135 = cljs.core.nth.call(null,vec__60071_60134,(0),null);
var map__60074_60136 = cljs.core.nth.call(null,vec__60071_60134,(1),null);
var map__60074_60137__$1 = cljs.core.__destructure_map.call(null,map__60074_60136);
var visr_60138 = cljs.core.get.call(null,map__60074_60137__$1,new cljs.core.Keyword(null,"visr","visr",-894661367));
var stx_60139 = cljs.core.get.call(null,map__60074_60137__$1,new cljs.core.Keyword(null,"stx","stx",-321752522));
var info_60140 = cljs.core.get.call(null,map__60074_60137__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var file_src_60141 = cljs.core.get.call(null,map__60074_60137__$1,new cljs.core.Keyword(null,"file-src","file-src",356326422));
var mark_60142 = cljs.core.get.call(null,map__60074_60137__$1,new cljs.core.Keyword(null,"mark","mark",-373816345));
var refs_60143 = cljs.core.get.call(null,map__60074_60137__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var visr_60144__$1 = (function (){var or__20754__auto__ = visr_60138;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return document.createElement("span");
}
})();
var info_60145__$1 = (function (){var or__20754__auto__ = info_60140;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return reagent.core.atom.call(null,stxinfo);
}
})();
var stx_60146__$1 = (function (){var or__20754__auto__ = stx_60139;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return reagent.core.atom.call(null,cljs.core.second.call(null,form__$1));
}
})();
var mark_60147__$1 = (function (){var or__20754__auto__ = mark_60142;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.atom.call(null,null);
}
})();
var file_src_60148__$1 = (function (){var or__20754__auto__ = file_src_60141;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return reagent.core.atom.call(null,source);
}
})();
var tag_60149 = (function (){var or__20754__auto__ = k_60135;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})();
var refs_60150__$1 = (function (){var or__20754__auto__ = refs_60143;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return reagent.core.atom.call(null,null);
}
})();
var start_60151 = interactive_syntax.env.buffer_position__GT_index.call(null,source,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(stxinfo),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(stxinfo));
var end_60152 = interactive_syntax.env.buffer_position__GT_index.call(null,source,new cljs.core.Keyword(null,"end-line","end-line",1837326455).cljs$core$IFn$_invoke$arity$1(stxinfo),new cljs.core.Keyword(null,"end-column","end-column",1425389514).cljs$core$IFn$_invoke$arity$1(stxinfo));
var commit_BANG__60153 = (function (){
var s = interactive_syntax.stdlib.write_visr.call(null,new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,info_60145__$1)),interactive_syntax.env.stx__GT_stx_str.call(null,cljs.core.deref.call(null,stx_60146__$1)),cljs.core.deref.call(null,info_60145__$1));
var ret = [cljs.core.subs.call(null,source,(0),start_60151),s,cljs.core.subs.call(null,source,end_60152)].join('');
return set_text.call(null,ret);
});
if(cljs.core.truth_(k_60135)){
cljs.core.swap_BANG_.call(null,old_instances,cljs.core.dissoc,k_60135);

cljs.core.remove_watch.call(null,info_60145__$1,new cljs.core.Keyword("interactive-syntax.env","commit","interactive-syntax.env/commit",611329160));

cljs.core.remove_watch.call(null,stx_60146__$1,new cljs.core.Keyword("interactive-syntax.env","commit","interactive-syntax.env/commit",611329160));

if(cljs.core.truth_(cljs.core.deref.call(null,fresh_cache))){
cljs.core.swap_BANG_.call(null,info_60145__$1,cljs.core.assoc,new cljs.core.Keyword(null,"visr-internal-refresh","visr-internal-refresh",265797940),true);
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,info_60145__$1),new cljs.core.Keyword(null,"editor","editor",-989377770))))){
} else {
cljs.core.reset_BANG_.call(null,file_src_60148__$1,source);

cljs.core.swap_BANG_.call(null,info_60145__$1,cljs.core.assoc,new cljs.core.Keyword(null,"visr-internal-refresh","visr-internal-refresh",265797940),true);
}

cljs.core.reset_BANG_.call(null,info_60145__$1,stxinfo);

cljs.core.reset_BANG_.call(null,stx_60146__$1,cljs.core.second.call(null,form__$1));
} else {
interactive_syntax.utils.render.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.env.visr_hider,db,runtime,tag_60149,info_60145__$1,stx_60146__$1,file_src_60148__$1,refs_60150__$1,mark_60147__$1,editor_options,codemirror_options], null),visr_60144__$1);
}

var r_mark_60154 = (function (){var target_obj_60079 = (function (){var target_obj_60083 = cljs.core.deref.call(null,editor);
var _STAR_runtime_state_STAR__orig_val__60087 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__60088 = oops.state.prepare_state.call(null,target_obj_60083,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__60088);

try{var call_info_60085 = [target_obj_60083,(function (){var next_obj_60086 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_60083,(0),"getDoc",true,true,false))?(target_obj_60083["getDoc"]):null);
return next_obj_60086;
})()];
var fn_60084 = (call_info_60085[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_60084,oops.state.get_last_access_modifier.call(null))){
if((!((fn_60084 == null)))){
return fn_60084.call((call_info_60085[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__60087);
}})();
var _STAR_runtime_state_STAR__orig_val__60089 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__60090 = oops.state.prepare_state.call(null,target_obj_60079,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__60090);

try{var call_info_60081 = [target_obj_60079,(function (){var next_obj_60082 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_60079,(0),"markText",true,true,false))?(target_obj_60079["markText"]):null);
return next_obj_60082;
})()];
var fn_60080 = (call_info_60081[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_60080,oops.state.get_last_access_modifier.call(null))){
if((!((fn_60080 == null)))){
return fn_60080.call((call_info_60081[(0)]),({"line": (new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,info_60145__$1)) - (1)), "ch": (new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,info_60145__$1)) - (1))}),({"line": (new cljs.core.Keyword(null,"end-line","end-line",1837326455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,info_60145__$1)) - (1)), "ch": (new cljs.core.Keyword(null,"end-column","end-column",1425389514).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,info_60145__$1)) - (1))}),({"collapsed": true, "replacedWith": visr_60144__$1}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__60089);
}})();
cljs.core.reset_BANG_.call(null,mark_60147__$1,r_mark_60154);

cljs.core.swap_BANG_.call(null,instances,cljs.core.assoc,tag_60149,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"mark","mark",-373816345),mark_60147__$1,new cljs.core.Keyword(null,"commit!","commit!",559588742),commit_BANG__60153,new cljs.core.Keyword(null,"visr","visr",-894661367),visr_60144__$1,new cljs.core.Keyword(null,"info","info",-317069002),info_60145__$1,new cljs.core.Keyword(null,"file-src","file-src",356326422),file_src_60148__$1,new cljs.core.Keyword(null,"stx","stx",-321752522),stx_60146__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs_60150__$1], null));

cljs.core.add_watch.call(null,info_60145__$1,new cljs.core.Keyword("interactive-syntax.env","commit","interactive-syntax.env/commit",611329160),(function (k__$1,r,o,n){
if(cljs.core._EQ_.call(null,o,n)){
return null;
} else {
return commit_BANG__60153.call(null);
}
}));

cljs.core.add_watch.call(null,stx_60146__$1,new cljs.core.Keyword("interactive-syntax.env","commit","interactive-syntax.env/commit",611329160),(function (k__$1,r,o,n){
if(cljs.core._EQ_.call(null,o,n)){
return null;
} else {
return commit_BANG__60153.call(null);
}
}));
} else {
}

var seq__60091 = cljs.core.seq.call(null,form__$1);
var chunk__60092 = null;
var count__60093 = (0);
var i__60094 = (0);
while(true){
if((i__60094 < count__60093)){
var e = cljs.core._nth.call(null,chunk__60092,i__60094);
if(cljs.core.coll_QMARK_.call(null,e)){
interactive_syntax$env$rec.call(null,e);
} else {
}


var G__60155 = seq__60091;
var G__60156 = chunk__60092;
var G__60157 = count__60093;
var G__60158 = (i__60094 + (1));
seq__60091 = G__60155;
chunk__60092 = G__60156;
count__60093 = G__60157;
i__60094 = G__60158;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__60091);
if(temp__5720__auto__){
var seq__60091__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60091__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__60091__$1);
var G__60159 = cljs.core.chunk_rest.call(null,seq__60091__$1);
var G__60160 = c__21725__auto__;
var G__60161 = cljs.core.count.call(null,c__21725__auto__);
var G__60162 = (0);
seq__60091 = G__60159;
chunk__60092 = G__60160;
count__60093 = G__60161;
i__60094 = G__60162;
continue;
} else {
var e = cljs.core.first.call(null,seq__60091__$1);
if(cljs.core.coll_QMARK_.call(null,e)){
interactive_syntax$env$rec.call(null,e);
} else {
}


var G__60163 = cljs.core.next.call(null,seq__60091__$1);
var G__60164 = null;
var G__60165 = (0);
var G__60166 = (0);
seq__60091 = G__60163;
chunk__60092 = G__60164;
count__60093 = G__60165;
i__60094 = G__60166;
continue;
}
} else {
return null;
}
}
break;
}
});})(form_60133,queue,cache__$1,old_instances,prog,eof,fresh_cache,cache_snapshot,cb__$1,map__60007,map__60007__$1,db,map__60008,map__60008__$1,show_editors,sandbox,fs,deps,vec__60009,map__60012,map__60012__$1,editor_options,visr_run_ref))
.call(null,form_60133);
} else {
}

continue;
}
break;
}

return cb__$1.call(null);
}catch (e60053){if((e60053 instanceof cljs.core.ExceptionInfo)){
var e = e60053;
return console.log(e);
} else {
if((e60053 instanceof Error)){
var e = e60053;
throw e;
} else {
throw e60053;

}
}
}}));
} else {
return null;
}
}));

(interactive_syntax.env.reset_editors_BANG_.cljs$lang$maxFixedArity = (8));

/** @this {Function} */
(interactive_syntax.env.reset_editors_BANG_.cljs$lang$applyTo = (function (seq59996){
var G__59997 = cljs.core.first.call(null,seq59996);
var seq59996__$1 = cljs.core.next.call(null,seq59996);
var G__59998 = cljs.core.first.call(null,seq59996__$1);
var seq59996__$2 = cljs.core.next.call(null,seq59996__$1);
var G__59999 = cljs.core.first.call(null,seq59996__$2);
var seq59996__$3 = cljs.core.next.call(null,seq59996__$2);
var G__60000 = cljs.core.first.call(null,seq59996__$3);
var seq59996__$4 = cljs.core.next.call(null,seq59996__$3);
var G__60001 = cljs.core.first.call(null,seq59996__$4);
var seq59996__$5 = cljs.core.next.call(null,seq59996__$4);
var G__60002 = cljs.core.first.call(null,seq59996__$5);
var seq59996__$6 = cljs.core.next.call(null,seq59996__$5);
var G__60003 = cljs.core.first.call(null,seq59996__$6);
var seq59996__$7 = cljs.core.next.call(null,seq59996__$6);
var G__60004 = cljs.core.first.call(null,seq59996__$7);
var seq59996__$8 = cljs.core.next.call(null,seq59996__$7);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59997,G__59998,G__59999,G__60000,G__60001,G__60002,G__60003,G__60004,seq59996__$8);
}));

