// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.load');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set.call(null,only):null);
var referred__$1 = cljs.core.reduce.call(null,(function (ns,p__49415){
var vec__49416 = p__49415;
var k = cljs.core.nth.call(null,vec__49416,(0),null);
var v = cljs.core.nth.call(null,vec__49416,(1),null);
if(cljs.core.truth_((function (){var and__20748__auto__ = (k instanceof cljs.core.Symbol);
if(and__20748__auto__){
var and__20748__auto____$1 = include_sym_QMARK_.call(null,k);
if(cljs.core.truth_(and__20748__auto____$1)){
return ((cljs.core.not.call(null,only__$1)) || (cljs.core.contains_QMARK_.call(null,only__$1,k)));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
return cljs.core.assoc.call(null,ns,rename_sym.call(null,k),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.call(null,the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__49419){
var map__49420 = p__49419;
var map__49420__$1 = cljs.core.__destructure_map.call(null,map__49420);
var _parsed_libspec = map__49420__$1;
var as = cljs.core.get.call(null,map__49420__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.call(null,map__49420__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.call(null,map__49420__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.call(null,map__49420__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.call(null,map__49420__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.call(null,map__49420__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in.call(null,the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__20754__auto__ = rename.call(null,sym);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set.call(null,exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_.call(null,excludes,sym)));
});
})():cljs.core.constantly.call(null,true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__20754__auto__ = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all.call(null,the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_.call(null,refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.call(null,(function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_.call(null,sym))){
return cljs.core.assoc.call(null,ns,rename_sym.call(null,sym),(function (){var temp__5718__auto__ = cljs.core.find.call(null,the_loaded_ns,sym);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__49421 = temp__5718__auto__;
var _k = cljs.core.nth.call(null,vec__49421,(0),null);
var v = cljs.core.nth.call(null,vec__49421,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.call(null,the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all.call(null,the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5720__auto___49425 = (function (){var G__49424 = the_loaded_ns;
var G__49424__$1 = (((G__49424 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__49424));
var G__49424__$2 = (((G__49424__$1 == null))?null:cljs.core.meta.call(null,G__49424__$1));
if((G__49424__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__49424__$2);
}
})();
if(cljs.core.truth_(temp__5720__auto___49425)){
var on_loaded_49426 = temp__5720__auto___49425;
on_loaded_49426.call(null,cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.call(null,env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.call(null,loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref.call(null,env_STAR_);
var cnn = sci.impl.vars.current_ns_name.call(null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var as_alias = temp__5718__auto__;
return cljs.core.reset_BANG_.call(null,env_STAR_,sci.impl.load.handle_require_libspec_env.call(null,ctx,env,cnn,null,lib,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__49427 = opts;
var map__49427__$1 = cljs.core.__destructure_map.call(null,map__49427);
var reload = cljs.core.get.call(null,map__49427__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.call(null,map__49427__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.call(null,env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__20754__auto__ = reload;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = reload_all;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5718__auto___49430__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.call(null,namespaces,lib));
if(cljs.core.truth_(temp__5718__auto___49430__$1)){
var the_loaded_ns_49431 = temp__5718__auto___49430__$1;
var loading_49432 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__20748__auto__ = loading_49432;
if(cljs.core.truth_(and__20748__auto__)){
return (((!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_.call(null,loading_49432.indexOf(lib))));
} else {
return and__20748__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.call(null,(function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.call(null,loading_49432,lib);
var loading__$2 = cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.call(null,"->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_.call(null,env_STAR_,sci.impl.load.handle_require_libspec_env.call(null,ctx,env,cnn,the_loaded_ns_49431,lib,opts));
}
} else {
var temp__5718__auto___49433__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5718__auto___49433__$2)){
var load_fn_49434 = temp__5718__auto___49433__$2;
var temp__5718__auto___49435__$3 = load_fn_49434.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__20754__auto__ = reload;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return reload_all;
}
})()], null));
if(cljs.core.truth_(temp__5718__auto___49435__$3)){
var map__49428_49436 = temp__5718__auto___49435__$3;
var map__49428_49437__$1 = cljs.core.__destructure_map.call(null,map__49428_49436);
var file_49438 = cljs.core.get.call(null,map__49428_49437__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_49439 = cljs.core.get.call(null,map__49428_49437__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_49440__$1 = cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.call(null,loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref.call(null,sci.impl.vars.current_ns),sci.impl.vars.current_file,file_49438]));

try{cljs.core.deref.call(null,sci.impl.utils.eval_string_STAR_).call(null,ctx_49440__$1,source_49439);
}finally {sci.impl.vars.pop_thread_bindings.call(null);
}}catch (e49429){if((e49429 instanceof Error)){
var e_49441 = e49429;
cljs.core.swap_BANG_.call(null,env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,lib);

throw e_49441;
} else {
throw e49429;

}
}
cljs.core.swap_BANG_.call(null,env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.call(null,env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.call(null,namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env.call(null,ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__20754__auto___49442 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5720__auto__ = cljs.core.get.call(null,namespaces,lib);
if(cljs.core.truth_(temp__5720__auto__)){
var the_loaded_ns = temp__5720__auto__;
return cljs.core.reset_BANG_.call(null,env_STAR_,sci.impl.load.handle_require_libspec_env.call(null,ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__20754__auto___49442)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib.call(null,env_STAR_,lib);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__22092__auto__ = [];
var len__22082__auto___49447 = arguments.length;
var i__22083__auto___49448 = (0);
while(true){
if((i__22083__auto___49448 < len__22082__auto___49447)){
args__22092__auto__.push((arguments[i__22083__auto___49448]));

var G__49449 = (i__22083__auto___49448 + (1));
i__22083__auto___49448 = G__49449;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__20748__auto__ = prefix;
if(cljs.core.truth_(and__20748__auto__)){
return (cljs.core.name.call(null,lib).indexOf(".") > (0));
} else {
return and__20748__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.call(null,["Found lib name '",cljs.core.name.call(null,lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.call(null,cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec.call(null,ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq49443){
var G__49444 = cljs.core.first.call(null,seq49443);
var seq49443__$1 = cljs.core.next.call(null,seq49443);
var G__49445 = cljs.core.first.call(null,seq49443__$1);
var seq49443__$2 = cljs.core.next.call(null,seq49443__$1);
var G__49446 = cljs.core.first.call(null,seq49443__$2);
var seq49443__$3 = cljs.core.next.call(null,seq49443__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49444,G__49445,G__49446,seq49443__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons.call(null,x,coll);
} else {
return cljs.core.concat.call(null,x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_.call(null,x)) && ((((cljs.core.second.call(null,x) == null)) || ((cljs.core.second.call(null,x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons.call(null,kw,args);
var flags = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.call(null,flags,cljs.core.repeat.call(null,true));
var args_STAR___$1 = cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.keyword_QMARK_),args_STAR_);
var supported_49482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_49483 = cljs.core.seq.call(null,cljs.core.remove.call(null,supported_49482,flags));
if(unsupported_49483){
sci.impl.utils.throw_error_with_location.call(null,cljs.core.apply.call(null,cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.call(null,",",unsupported_49483)),args);
} else {
}

if(cljs.core.seq.call(null,args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.call(null,"Nothing specified to load",args);
}

var seq__49450 = cljs.core.seq.call(null,args_STAR___$1);
var chunk__49451 = null;
var count__49452 = (0);
var i__49453 = (0);
while(true){
if((i__49453 < count__49452)){
var arg = cljs.core._nth.call(null,chunk__49451,i__49453);
if(sci.impl.load.libspec_QMARK_.call(null,arg)){
cljs.core.apply.call(null,sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss.call(null,arg,opts));
} else {
var vec__49468_49484 = arg;
var seq__49469_49485 = cljs.core.seq.call(null,vec__49468_49484);
var first__49470_49486 = cljs.core.first.call(null,seq__49469_49485);
var seq__49469_49487__$1 = cljs.core.next.call(null,seq__49469_49485);
var prefix_49488 = first__49470_49486;
var args_STAR__49489__$2 = seq__49469_49487__$1;
if((prefix_49488 == null)){
sci.impl.utils.throw_error_with_location.call(null,"prefix cannot be nil",args);
} else {
}

var seq__49471_49490 = cljs.core.seq.call(null,args_STAR__49489__$2);
var chunk__49472_49491 = null;
var count__49473_49492 = (0);
var i__49474_49493 = (0);
while(true){
if((i__49474_49493 < count__49473_49492)){
var arg_49494__$1 = cljs.core._nth.call(null,chunk__49472_49491,i__49474_49493);
cljs.core.apply.call(null,sci.impl.load.load_lib,ctx,prefix_49488,sci.impl.load.prependss.call(null,arg_49494__$1,opts));


var G__49495 = seq__49471_49490;
var G__49496 = chunk__49472_49491;
var G__49497 = count__49473_49492;
var G__49498 = (i__49474_49493 + (1));
seq__49471_49490 = G__49495;
chunk__49472_49491 = G__49496;
count__49473_49492 = G__49497;
i__49474_49493 = G__49498;
continue;
} else {
var temp__5720__auto___49499 = cljs.core.seq.call(null,seq__49471_49490);
if(temp__5720__auto___49499){
var seq__49471_49500__$1 = temp__5720__auto___49499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49471_49500__$1)){
var c__21725__auto___49501 = cljs.core.chunk_first.call(null,seq__49471_49500__$1);
var G__49502 = cljs.core.chunk_rest.call(null,seq__49471_49500__$1);
var G__49503 = c__21725__auto___49501;
var G__49504 = cljs.core.count.call(null,c__21725__auto___49501);
var G__49505 = (0);
seq__49471_49490 = G__49502;
chunk__49472_49491 = G__49503;
count__49473_49492 = G__49504;
i__49474_49493 = G__49505;
continue;
} else {
var arg_49506__$1 = cljs.core.first.call(null,seq__49471_49500__$1);
cljs.core.apply.call(null,sci.impl.load.load_lib,ctx,prefix_49488,sci.impl.load.prependss.call(null,arg_49506__$1,opts));


var G__49507 = cljs.core.next.call(null,seq__49471_49500__$1);
var G__49508 = null;
var G__49509 = (0);
var G__49510 = (0);
seq__49471_49490 = G__49507;
chunk__49472_49491 = G__49508;
count__49473_49492 = G__49509;
i__49474_49493 = G__49510;
continue;
}
} else {
}
}
break;
}
}


var G__49511 = seq__49450;
var G__49512 = chunk__49451;
var G__49513 = count__49452;
var G__49514 = (i__49453 + (1));
seq__49450 = G__49511;
chunk__49451 = G__49512;
count__49452 = G__49513;
i__49453 = G__49514;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__49450);
if(temp__5720__auto__){
var seq__49450__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49450__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__49450__$1);
var G__49515 = cljs.core.chunk_rest.call(null,seq__49450__$1);
var G__49516 = c__21725__auto__;
var G__49517 = cljs.core.count.call(null,c__21725__auto__);
var G__49518 = (0);
seq__49450 = G__49515;
chunk__49451 = G__49516;
count__49452 = G__49517;
i__49453 = G__49518;
continue;
} else {
var arg = cljs.core.first.call(null,seq__49450__$1);
if(sci.impl.load.libspec_QMARK_.call(null,arg)){
cljs.core.apply.call(null,sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss.call(null,arg,opts));
} else {
var vec__49475_49519 = arg;
var seq__49476_49520 = cljs.core.seq.call(null,vec__49475_49519);
var first__49477_49521 = cljs.core.first.call(null,seq__49476_49520);
var seq__49476_49522__$1 = cljs.core.next.call(null,seq__49476_49520);
var prefix_49523 = first__49477_49521;
var args_STAR__49524__$2 = seq__49476_49522__$1;
if((prefix_49523 == null)){
sci.impl.utils.throw_error_with_location.call(null,"prefix cannot be nil",args);
} else {
}

var seq__49478_49525 = cljs.core.seq.call(null,args_STAR__49524__$2);
var chunk__49479_49526 = null;
var count__49480_49527 = (0);
var i__49481_49528 = (0);
while(true){
if((i__49481_49528 < count__49480_49527)){
var arg_49529__$1 = cljs.core._nth.call(null,chunk__49479_49526,i__49481_49528);
cljs.core.apply.call(null,sci.impl.load.load_lib,ctx,prefix_49523,sci.impl.load.prependss.call(null,arg_49529__$1,opts));


var G__49530 = seq__49478_49525;
var G__49531 = chunk__49479_49526;
var G__49532 = count__49480_49527;
var G__49533 = (i__49481_49528 + (1));
seq__49478_49525 = G__49530;
chunk__49479_49526 = G__49531;
count__49480_49527 = G__49532;
i__49481_49528 = G__49533;
continue;
} else {
var temp__5720__auto___49534__$1 = cljs.core.seq.call(null,seq__49478_49525);
if(temp__5720__auto___49534__$1){
var seq__49478_49535__$1 = temp__5720__auto___49534__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49478_49535__$1)){
var c__21725__auto___49536 = cljs.core.chunk_first.call(null,seq__49478_49535__$1);
var G__49537 = cljs.core.chunk_rest.call(null,seq__49478_49535__$1);
var G__49538 = c__21725__auto___49536;
var G__49539 = cljs.core.count.call(null,c__21725__auto___49536);
var G__49540 = (0);
seq__49478_49525 = G__49537;
chunk__49479_49526 = G__49538;
count__49480_49527 = G__49539;
i__49481_49528 = G__49540;
continue;
} else {
var arg_49541__$1 = cljs.core.first.call(null,seq__49478_49535__$1);
cljs.core.apply.call(null,sci.impl.load.load_lib,ctx,prefix_49523,sci.impl.load.prependss.call(null,arg_49541__$1,opts));


var G__49542 = cljs.core.next.call(null,seq__49478_49535__$1);
var G__49543 = null;
var G__49544 = (0);
var G__49545 = (0);
seq__49478_49525 = G__49542;
chunk__49479_49526 = G__49543;
count__49480_49527 = G__49544;
i__49481_49528 = G__49545;
continue;
}
} else {
}
}
break;
}
}


var G__49546 = cljs.core.next.call(null,seq__49450__$1);
var G__49547 = null;
var G__49548 = (0);
var G__49549 = (0);
seq__49450 = G__49546;
chunk__49451 = G__49547;
count__49452 = G__49548;
i__49453 = G__49549;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__22092__auto__ = [];
var len__22082__auto___49552 = arguments.length;
var i__22083__auto___49553 = (0);
while(true){
if((i__22083__auto___49553 < len__22082__auto___49552)){
args__22092__auto__.push((arguments[i__22083__auto___49553]));

var G__49554 = (i__22083__auto___49553 + (1));
i__22083__auto___49553 = G__49554;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs.call(null,ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq49550){
var G__49551 = cljs.core.first.call(null,seq49550);
var seq49550__$1 = cljs.core.next.call(null,seq49550);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49551,seq49550__$1);
}));

cljs.core.vreset_BANG_.call(null,sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__22092__auto__ = [];
var len__22082__auto___49557 = arguments.length;
var i__22083__auto___49558 = (0);
while(true){
if((i__22083__auto___49558 < len__22082__auto___49557)){
args__22092__auto__.push((arguments[i__22083__auto___49558]));

var G__49559 = (i__22083__auto___49558 + (1));
i__22083__auto___49558 = G__49559;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs.call(null,ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq49555){
var G__49556 = cljs.core.first.call(null,seq49555);
var seq49555__$1 = cljs.core.next.call(null,seq49555);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49556,seq49555__$1);
}));

cljs.core.vreset_BANG_.call(null,sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__49560 = exprs__$1;
var k = cljs.core.nth.call(null,vec__49560,(0),null);
var v = cljs.core.nth.call(null,vec__49560,(1),null);
var G__49563_49568 = k;
var G__49563_49569__$1 = (((G__49563_49568 instanceof cljs.core.Keyword))?G__49563_49568.fqn:null);
switch (G__49563_49569__$1) {
case "exclude":
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__49563_49568,G__49563_49569__$1,vec__49560,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name.call(null);
return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__49563_49568,G__49563_49569__$1,vec__49560,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__49563_49568,G__49563_49569__$1,vec__49560,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name.call(null);
var other_ns = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys.call(null,other_ns,v);
return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__49563_49568,G__49563_49569__$1,vec__49560,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__49563_49568,G__49563_49569__$1,vec__49560,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name.call(null);
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.call(null,namespaces,cnn);
var other_ns = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.call(null,((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__49563_49568,G__49563_49569__$1,vec__49560,k,v,ns_sym){
return (function (acc,p__49564){
var vec__49565 = p__49564;
var original_name = cljs.core.nth.call(null,vec__49565,(0),null);
var new_name = cljs.core.nth.call(null,vec__49565,(1),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.call(null,other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__49563_49568,G__49563_49569__$1,vec__49560,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__49563_49568,G__49563_49569__$1,vec__49560,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49563_49569__$1)].join('')));

}

var G__49571 = cljs.core.nnext.call(null,exprs__$1);
exprs__$1 = G__49571;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name.call(null);
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__20754__auto__ = cljs.core.get.call(null,namespaces,ns_sym);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.call(null,cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.call(null,cljs.core.symbol_QMARK_,cljs.core.keys.call(null,ns));
var rename = (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set.call(null,new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__20748__auto__ = to_do;
if(cljs.core.truth_(and__20748__auto__)){
return (!(cljs.core.sequential_QMARK_.call(null,to_do)));
} else {
return and__20748__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.call(null,namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.call(null,(function (referred__$1,sym){
if(cljs.core.not.call(null,exclude.call(null,sym))){
var v = cljs.core.get.call(null,ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.call(null,referred__$1,(function (){var or__20754__auto__ = rename.call(null,sym);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.call(null,the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.call(null,namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__22092__auto__ = [];
var len__22082__auto___49575 = arguments.length;
var i__22083__auto___49576 = (0);
while(true){
if((i__22083__auto___49576 < len__22082__auto___49575)){
args__22092__auto__.push((arguments[i__22083__auto___49576]));

var G__49577 = (i__22083__auto___49576 + (1));
i__22083__auto___49576 = G__49577;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure.call(null,ctx,filters);
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq49572){
var G__49573 = cljs.core.first.call(null,seq49572);
var seq49572__$1 = cljs.core.next.call(null,seq49572);
var G__49574 = cljs.core.first.call(null,seq49572__$1);
var seq49572__$2 = cljs.core.next.call(null,seq49572__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49573,G__49574,seq49572__$2);
}));

cljs.core.vreset_BANG_.call(null,sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);
