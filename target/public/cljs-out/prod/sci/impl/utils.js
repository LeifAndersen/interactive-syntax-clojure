// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.impl.macros');
goog.require('sci.impl.types');
goog.require('sci.impl.vars');
cljs.core.derive.call(null,new cljs.core.Keyword("sci.error","realized-beyond-max","sci.error/realized-beyond-max",-1094268187),new cljs.core.Keyword("sci","error","sci/error",-979082803));
cljs.core.derive.call(null,new cljs.core.Keyword("sci.error","parse","sci.error/parse",-264338844),new cljs.core.Keyword("sci","error","sci/error",-979082803));
sci.impl.utils.constant_QMARK_ = (function sci$impl$utils$constant_QMARK_(x){
return (((x == null)) || (((typeof x === 'number') || (((typeof x === 'string') || ((((x instanceof cljs.core.Keyword)) || (((cljs.core.boolean_QMARK_.call(null,x)) || ((x instanceof RegExp)))))))))));
});
var ret__22143__auto___32435 = sci.impl.utils.kw_identical_QMARK_ = (function sci$impl$utils$kw_identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,k,v){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,v,null,(1),null)))));
});
(sci.impl.utils.kw_identical_QMARK_.cljs$lang$macro = true);

sci.impl.utils.throw_error_with_location = (function sci$impl$utils$throw_error_with_location(var_args){
var G__32437 = arguments.length;
switch (G__32437) {
case 2:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2 = (function (msg,iobj){
return sci.impl.utils.throw_error_with_location.call(null,msg,iobj,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3 = (function (msg,iobj,data){
var map__32438 = cljs.core.meta.call(null,iobj);
var map__32438__$1 = cljs.core.__destructure_map.call(null,map__32438);
var line = cljs.core.get.call(null,map__32438__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32438__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file = cljs.core.get.call(null,map__32438__$1,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file));
throw cljs.core.ex_info.call(null,msg,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"file","file",-1269645878),file], null),data));
}));

(sci.impl.utils.throw_error_with_location.cljs$lang$maxFixedArity = 3);

sci.impl.utils._STAR_in_try_STAR_ = false;
sci.impl.utils.macro_QMARK_ = (function sci$impl$utils$macro_QMARK_(f){
var temp__5724__auto__ = cljs.core.meta.call(null,f);
if((temp__5724__auto__ == null)){
return null;
} else {
var m = temp__5724__auto__;
var or__20754__auto__ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
}
}
});
sci.impl.utils.needs_ctx = cljs.core.symbol.call(null,"needs-ctx");
/**
 * used for allowing interop in with-out-str
 */
sci.impl.utils.allowed_append = cljs.core.symbol.call(null,"append");
sci.impl.utils.rethrow_with_location_of_node = (function sci$impl$utils$rethrow_with_location_of_node(var_args){
var G__32441 = arguments.length;
switch (G__32441) {
case 3:
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3 = (function (ctx,e,raw_node){
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),e,raw_node);
}));

(sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4 = (function (ctx,_bindings,e,raw_node){
if(cljs.core.truth_(sci.impl.utils._STAR_in_try_STAR_)){
throw e;
} else {
var stack = sci.impl.types.stack.call(null,raw_node);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ctx);
var d = cljs.core.ex_data.call(null,e);
var st = (function (){var or__20754__auto__ = (function (){var temp__5720__auto__ = new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(temp__5720__auto__)){
var st = temp__5720__auto__;
return st;
} else {
return null;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.volatile_BANG_.call(null,cljs.core.List.EMPTY);
}
})();
if(cljs.core.truth_(stack)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"special","special",-1125941630).cljs$core$IFn$_invoke$arity$1(stack))){
} else {
cljs.core._vreset_BANG_.call(null,st,cljs.core.conj.call(null,cljs.core._deref.call(null,st),stack));
}
} else {
}

var d__$1 = cljs.core.ex_data.call(null,e);
var wrapping_sci_error_QMARK_ = cljs.core.isa_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d__$1),new cljs.core.Keyword("sci","error","sci/error",-979082803));
if(wrapping_sci_error_QMARK_){
throw e;
} else {
var ex_msg = e.message;
var map__32442 = (function (){var or__20754__auto__ = stack;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var G__32443 = env;
var G__32443__$1 = (((G__32443 == null))?null:cljs.core.deref.call(null,G__32443));
var G__32443__$2 = (((G__32443__$1 == null))?null:new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557).cljs$core$IFn$_invoke$arity$1(G__32443__$1));
var G__32443__$3 = (((G__32443__$2 == null))?null:cljs.core.get.call(null,G__32443__$2,id));
var G__32443__$4 = (((G__32443__$3 == null))?null:cljs.core.deref.call(null,G__32443__$3));
var G__32443__$5 = (((G__32443__$4 == null))?null:cljs.core.last.call(null,G__32443__$4));
if((G__32443__$5 == null)){
return null;
} else {
return cljs.core.meta.call(null,G__32443__$5);
}
}
})();
var map__32442__$1 = cljs.core.__destructure_map.call(null,map__32442);
var line = cljs.core.get.call(null,map__32442__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32442__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file = cljs.core.get.call(null,map__32442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20748__auto__ = line;
if(cljs.core.truth_(and__20748__auto__)){
return column;
} else {
return and__20748__auto__;
}
})())){
var ex_msg__$1 = ex_msg;
var new_exception = (function (){var new_d = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"message","message",-406056002),ex_msg__$1,new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557),st,new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
return cljs.core.ex_info.call(null,ex_msg__$1,new_d,e);
})();
throw new_exception;
} else {
throw e;
}
}
}
}));

(sci.impl.utils.rethrow_with_location_of_node.cljs$lang$maxFixedArity = 4);

sci.impl.utils.iobj_QMARK_ = (function sci$impl$utils$iobj_QMARK_(obj){
var and__20748__auto__ = (((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:false):false);
if(and__20748__auto__){
return cljs.core.meta.call(null,obj);
} else {
return and__20748__auto__;
}
});
/**
 * Only adds metadata to obj if d is not nil and if obj already has meta
 */
sci.impl.utils.vary_meta_STAR_ = (function sci$impl$utils$vary_meta_STAR_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32449 = arguments.length;
var i__22083__auto___32450 = (0);
while(true){
if((i__22083__auto___32450 < len__22082__auto___32449)){
args__22092__auto__.push((arguments[i__22083__auto___32450]));

var G__32451 = (i__22083__auto___32450 + (1));
i__22083__auto___32450 = G__32451;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,f,args){
if(cljs.core.truth_(sci.impl.utils.iobj_QMARK_.call(null,obj))){
return cljs.core.apply.call(null,cljs.core.vary_meta,obj,f,args);
} else {
return obj;
}
}));

(sci.impl.utils.vary_meta_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.utils.vary_meta_STAR_.cljs$lang$applyTo = (function (seq32446){
var G__32447 = cljs.core.first.call(null,seq32446);
var seq32446__$1 = cljs.core.next.call(null,seq32446);
var G__32448 = cljs.core.first.call(null,seq32446__$1);
var seq32446__$2 = cljs.core.next.call(null,seq32446__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32447,G__32448,seq32446__$2);
}));

sci.impl.utils.strip_core_ns = (function sci$impl$utils$strip_core_ns(sym){
var G__32452 = cljs.core.namespace.call(null,sym);
switch (G__32452) {
case "clojure.core":
case "cljs.core":
return cljs.core.symbol.call(null,cljs.core.name.call(null,sym));

break;
default:
return sym;

}
});
sci.impl.utils.allowed_loop = cljs.core.symbol.call(null,"loop");
sci.impl.utils.allowed_recur = cljs.core.symbol.call(null,"recur");
sci.impl.utils.var_unbound = (new Object());
sci.impl.utils.walk_STAR_ = (function sci$impl$utils$walk_STAR_(inner,form){
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form)))){
return form;
} else {
if(cljs.core.list_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.list,cljs.core.map.call(null,inner,form)),cljs.core.meta.call(null,form));
} else {
if(cljs.core.map_entry_QMARK_.call(null,form)){
return (new cljs.core.MapEntry(inner.call(null,cljs.core.key.call(null,form)),inner.call(null,cljs.core.val.call(null,form)),null));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)),cljs.core.meta.call(null,form));
} else {
if(cljs.core.record_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (r,x){
return cljs.core.conj.call(null,r,inner.call(null,x));
}),form,form);
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form));
} else {
return form;

}
}
}
}
}
}
});
/**
 * Prewalk with metadata preservation. Does not prewalk :sci.impl/op nodes.
 */
sci.impl.utils.prewalk = (function sci$impl$utils$prewalk(f,form){
return sci.impl.utils.walk_STAR_.call(null,cljs.core.partial.call(null,sci.impl.utils.prewalk,f),f.call(null,form));
});
/**
 * Fetches namespaces from env if it exists. Else, if `create?`,
 *   produces one regardless of the existince of the namespace in env and
 *   adds it to env before returning it.
 */
sci.impl.utils.namespace_object = (function sci$impl$utils$namespace_object(env,ns_sym,create_QMARK_,attr_map){
var env_STAR_ = cljs.core.deref.call(null,env);
var ns_map = cljs.core.get_in.call(null,env_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var or__20754__auto__ = new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(ns_map);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
if(cljs.core.truth_((function (){var or__20754__auto____$1 = ns_map;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return create_QMARK_;
}
})())){
var ns_obj = sci.impl.vars.__GT_SciNamespace.call(null,ns_sym,attr_map);
cljs.core.swap_BANG_.call(null,env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym,new cljs.core.Keyword(null,"obj","obj",981763962)], null),ns_obj);

return ns_obj;
} else {
return null;
}
}
});
sci.impl.utils.set_namespace_BANG_ = (function sci$impl$utils$set_namespace_BANG_(ctx,ns_sym,attr_map){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var attr_map__$1 = cljs.core.merge.call(null,cljs.core.meta.call(null,ns_sym),attr_map);
var ns_obj = sci.impl.utils.namespace_object.call(null,env,ns_sym,true,attr_map__$1);
return sci.impl.types.setVal.call(null,sci.impl.vars.current_ns,ns_obj);
});
sci.impl.utils.eval_form_state = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.eval_require_state = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.eval_use_state = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.eval_resolve_state = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.eval_refer_state = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.macroexpand_STAR_ = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.macroexpand_1_STAR_ = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.eval_do_STAR_ = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.eval_fn = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.eval_string_STAR_ = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.lookup = cljs.core.volatile_BANG_.call(null,null);
sci.impl.utils.eval = (function sci$impl$utils$eval(sci_ctx,form){
return cljs.core.deref.call(null,sci.impl.utils.eval_form_state).call(null,sci_ctx,form);
});
/**
 * Like partition-by but splits collection only when `pred` returns
 *   a truthy value. E.g. `(split-when odd? [1 2 3 4 5]) => ((1 2) (3 4) (5))`
 */
sci.impl.utils.split_when = (function sci$impl$utils$split_when(pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5720__auto__ = cljs.core.seq.call(null,coll);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var fst = cljs.core.first.call(null,s);
var f = cljs.core.complement.call(null,pred);
var run = cljs.core.cons.call(null,fst,cljs.core.take_while.call(null,(function (p1__32454_SHARP_){
return f.call(null,p1__32454_SHARP_);
}),cljs.core.next.call(null,s)));
return cljs.core.cons.call(null,run,sci.impl.utils.split_when.call(null,pred,(new cljs.core.LazySeq(null,(function (){
return cljs.core.drop.call(null,cljs.core.count.call(null,run),s);
}),null,null))));
} else {
return null;
}
}),null,null));
});
sci.impl.utils.ana_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 24, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"import","import",241030818,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"ns","ns",2082130287,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),"null",new cljs.core.Symbol(null,"loop","loop",1244978678,null),"null",new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),"null",new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"resolve","resolve",56086045,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null",new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),"null"], null), null);
sci.impl.utils.maybe_destructured = (function sci$impl$utils$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__32455 = cljs.core.next.call(null,params__$1);
var G__32456 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__32457 = lets;
params__$1 = G__32455;
new_params = G__32456;
lets = G__32457;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__32458 = cljs.core.next.call(null,params__$1);
var G__32459 = cljs.core.conj.call(null,new_params,gparam);
var G__32460 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__32458;
new_params = G__32459;
lets = G__32460;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new_params,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),body)))], null)], null);
}
break;
}
}
});
sci.impl.utils.log = (function sci$impl$utils$log(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32462 = arguments.length;
var i__22083__auto___32463 = (0);
while(true){
if((i__22083__auto___32463 < len__22082__auto___32462)){
args__22092__auto__.push((arguments[i__22083__auto___32463]));

var G__32464 = (i__22083__auto___32463 + (1));
i__22083__auto___32463 = G__32464;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return sci.impl.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(sci.impl.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return console.log(clojure.string.join.call(null," ",xs));
}));

(sci.impl.utils.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.utils.log.cljs$lang$applyTo = (function (seq32461){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32461));
}));

