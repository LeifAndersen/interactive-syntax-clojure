// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.evaluator');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.records');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq.call(null,args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first.call(null,args__$2);
var v = sci.impl.types.eval.call(null,x,ctx,bindings);
if(cljs.core.truth_(v)){
var xs = cljs.core.next.call(null,args__$2);
if(xs){
var G__49175 = xs;
args__$2 = G__49175;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq.call(null,args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first.call(null,args__$2);
var v = sci.impl.types.eval.call(null,x,ctx,bindings);
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next.call(null,args__$2);
if(xs){
var G__49176 = xs;
args__$2 = G__49176;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs,idxs){
var vec__49177 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
var idx = (0);
while(true){
var let_name = cljs.core.first.call(null,let_bindings__$1);
if(cljs.core.truth_(let_name)){
var let_bindings__$2 = cljs.core.rest.call(null,let_bindings__$1);
var let_val = cljs.core.first.call(null,let_bindings__$2);
var rest_let_bindings = cljs.core.next.call(null,let_bindings__$2);
var v = sci.impl.types.eval.call(null,let_val,ctx__$1,bindings__$1);
(bindings__$1[cljs.core.nth.call(null,idxs,idx)] = v);

var G__49180 = ctx__$1;
var G__49181 = bindings__$1;
var G__49182 = rest_let_bindings;
var G__49183 = (idx + (1));
ctx__$1 = G__49180;
bindings__$1 = G__49181;
let_bindings__$1 = G__49182;
idx = G__49183;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$1], null);
}
break;
}
})();
var ctx__$1 = cljs.core.nth.call(null,vec__49177,(0),null);
var bindings__$1 = cljs.core.nth.call(null,vec__49177,(1),null);
return sci.impl.types.eval.call(null,exprs,ctx__$1,bindings__$1);
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = sci.impl.types.eval.call(null,init,ctx,bindings);
var m__$1 = sci.impl.types.eval.call(null,m,ctx,bindings);
var cnn = sci.impl.vars.getName.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.call(null,cljs.core.get.call(null,env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.call(null,the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_.call(null,prev))))?sci.impl.vars.__GT_SciVar.call(null,prev,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta.call(null,prev),false):prev);
var v = (((sci.impl.utils.var_unbound === init__$1))?(function (){var G__49184 = prev__$1;
cljs.core.alter_meta_BANG_.call(null,G__49184,cljs.core.merge,m__$1);

return G__49184;
})():(function (){
sci.impl.vars.bindRoot.call(null,prev__$1,init__$1);

cljs.core.alter_meta_BANG_.call(null,prev__$1,cljs.core.merge,m__$1);

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.call(null,the_current_ns,var_name,v);
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
var ret__22143__auto___49185 = sci.impl.evaluator.resolve_symbol = (function sci$impl$evaluator$resolve_symbol(_AMPERSAND_form,_AMPERSAND_env,bindings,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".get",".get",1446963300,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,bindings,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"java.util.Map","java.util.Map",981564201,null)], null)),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)))));
});
(sci.impl.evaluator.resolve_symbol.cljs$lang$macro = true);

sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__49187 = arguments.length;
switch (G__49187) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = sci.impl.types.eval.call(null,case_val,ctx,bindings);
var temp__5718__auto__ = cljs.core.find.call(null,case_map,v);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__49188 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__49188,(0),null);
var found = cljs.core.nth.call(null,vec__49188,(1),null);
return sci.impl.types.eval.call(null,found,ctx,bindings);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = sci.impl.types.eval.call(null,case_val,ctx,bindings);
var temp__5718__auto__ = cljs.core.find.call(null,case_map,v);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__49191 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__49191,(0),null);
var found = cljs.core.nth.call(null,vec__49191,(1),null);
return sci.impl.types.eval.call(null,found,ctx,bindings);
} else {
return sci.impl.types.eval.call(null,case_default,ctx,bindings);
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__49199 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__49200 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__49200);

try{return sci.impl.types.eval.call(null,body,ctx,bindings);
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__49199);
}}catch (e49195){var e = e49195;
var temp__5718__auto__ = cljs.core.reduce.call(null,(function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__20754__auto__ = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),clazz);
if(or__20754__auto__){
return or__20754__auto__;
} else {
if((clazz instanceof sci.impl.types.NodeR)){
var c__20875__auto__ = sci.impl.types.eval.call(null,clazz,ctx,bindings);
var x__20876__auto__ = e;
return (x__20876__auto__ instanceof c__20875__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){
(bindings[new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805).cljs$core$IFn$_invoke$arity$1(c)] = e);

return sci.impl.types.eval.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c),ctx,bindings);
})()
], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__49196 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__49196,(0),null);
var r = cljs.core.nth.call(null,vec__49196,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e,body);
}
}finally {sci.impl.types.eval.call(null,finally$,ctx,bindings);
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method.call(null,cljs.core.first.call(null,expr),cljs.core.map.call(null,(function (p1__49201_SHARP_){
return sci.impl.types.eval.call(null,p1__49201_SHARP_,ctx,bindings);
}),cljs.core.rest.call(null,expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta.call(null,instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = sci.impl.types.eval.call(null,instance_expr,ctx,bindings);
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.map_QMARK_.call(null,instance_expr_STAR_);
if(and__20748__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,instance_expr_STAR_));
} else {
return and__20748__auto__;
}
})())){
return cljs.core.get.call(null,instance_expr_STAR_,cljs.core.keyword.call(null,method_str));
} else {
var instance_class = (function (){var or__20754__auto__ = tag_class;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.type.call(null,instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__20754__auto__ = allowed;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = cljs.core.get.call(null,class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.call(null,instance_class_name);
return cljs.core.get.call(null,class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return f.call(null,instance_expr_STAR_);
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.call(null,["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field.call(null,instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.call(null,(function (p1__49203_SHARP_){
return sci.impl.types.eval.call(null,p1__49203_SHARP_,ctx,bindings);
}),args);
return sci.impl.interop.invoke_instance_method.call(null,instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__49205 = arguments.length;
switch (G__49205) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.call(null,ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not.call(null,env)) || ((!(cljs.core.contains_QMARK_.call(null,env,sym)))))){
var sym__$1 = sci.impl.types.eval.call(null,sym,ctx,bindings);
var res = cljs.core.second.call(null,cljs.core.deref.call(null,sci.impl.utils.lookup).call(null,ctx,sym__$1,false));
if((res instanceof sci.impl.types.NodeR)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_.call(null,sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__22092__auto__ = [];
var len__22082__auto___49213 = arguments.length;
var i__22083__auto___49214 = (0);
while(true){
if((i__22083__auto___49214 < len__22082__auto___49213)){
args__22092__auto__.push((arguments[i__22083__auto___49214]));

var G__49215 = (i__22083__auto___49214 + (1));
i__22083__auto___49214 = G__49215;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.call(null,(function (p1__49207_SHARP_){
if(((cljs.core.seq_QMARK_.call(null,p1__49207_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,p1__49207_SHARP_))))){
return cljs.core.second.call(null,p1__49207_SHARP_);
} else {
return p1__49207_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.call(null,(function (_,spec){
var vec__49210 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.call(null,s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first.call(null,spec);
var cs = cljs.core.rest.call(null,spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.call(null,vec__49210,(0),null);
var classes = cljs.core.nth.call(null,vec__49210,(1),null);
return cljs.core.reduce.call(null,(function (___$1,class$){
var fq_class_name = cljs.core.symbol.call(null,(cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5718__auto__ = sci.impl.interop.resolve_class.call(null,ctx,fq_class_name);
if(cljs.core.truth_(temp__5718__auto__)){
var clazz = temp__5718__auto__;
var cnn = sci.impl.vars.current_ns_name.call(null);
cljs.core.swap_BANG_.call(null,env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5718__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.call(null,ctx,package$,class$);
if(cljs.core.truth_(temp__5718__auto____$1)){
var rec = temp__5718__auto____$1;
var cnn = sci.impl.vars.current_ns_name.call(null);
cljs.core.swap_BANG_.call(null,env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq49208){
var G__49209 = cljs.core.first.call(null,seq49208);
var seq49208__$1 = cljs.core.next.call(null,seq49208);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49209,seq49208__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq.call(null,exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = sci.impl.types.eval.call(null,cljs.core.first.call(null,exprs__$2),ctx,bindings);
var temp__5718__auto__ = cljs.core.next.call(null,exprs__$2);
if(temp__5718__auto__){
var exprs__$3 = temp__5718__auto__;
var G__49216 = exprs__$3;
exprs__$2 = G__49216;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_.call(null,sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__49411 = cljs.core.count.call(null,args);
switch (G__49411) {
case (0):
return f.call(null);

break;
case (1):
var arg49221 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
return f.call(null,arg49221);

break;
case (2):
var arg49222 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49223 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
return f.call(null,arg49222,arg49223);

break;
case (3):
var arg49224 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49225 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49226 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
return f.call(null,arg49224,arg49225,arg49226);

break;
case (4):
var arg49227 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49228 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49229 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49230 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
return f.call(null,arg49227,arg49228,arg49229,arg49230);

break;
case (5):
var arg49231 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49232 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49233 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49234 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49235 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
return f.call(null,arg49231,arg49232,arg49233,arg49234,arg49235);

break;
case (6):
var arg49236 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49237 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49238 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49239 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49240 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49241 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
return f.call(null,arg49236,arg49237,arg49238,arg49239,arg49240,arg49241);

break;
case (7):
var arg49242 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49243 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49244 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49245 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49246 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49247 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49248 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
return f.call(null,arg49242,arg49243,arg49244,arg49245,arg49246,arg49247,arg49248);

break;
case (8):
var arg49249 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49250 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49251 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49252 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49253 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49254 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49255 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49256 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
return f.call(null,arg49249,arg49250,arg49251,arg49252,arg49253,arg49254,arg49255,arg49256);

break;
case (9):
var arg49257 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49258 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49259 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49260 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49261 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49262 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49263 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49264 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49265 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
return f.call(null,arg49257,arg49258,arg49259,arg49260,arg49261,arg49262,arg49263,arg49264,arg49265);

break;
case (10):
var arg49266 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49267 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49268 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49269 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49270 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49271 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49272 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49273 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49274 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49275 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
return f.call(null,arg49266,arg49267,arg49268,arg49269,arg49270,arg49271,arg49272,arg49273,arg49274,arg49275);

break;
case (11):
var arg49276 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49277 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49278 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49279 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49280 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49281 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49282 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49283 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49284 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49285 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
var arg49286 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$10),ctx,bindings);
var args__$11 = cljs.core.rest.call(null,args__$10);
return f.call(null,arg49276,arg49277,arg49278,arg49279,arg49280,arg49281,arg49282,arg49283,arg49284,arg49285,arg49286);

break;
case (12):
var arg49287 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49288 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49289 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49290 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49291 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49292 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49293 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49294 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49295 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49296 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
var arg49297 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$10),ctx,bindings);
var args__$11 = cljs.core.rest.call(null,args__$10);
var arg49298 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$11),ctx,bindings);
var args__$12 = cljs.core.rest.call(null,args__$11);
return f.call(null,arg49287,arg49288,arg49289,arg49290,arg49291,arg49292,arg49293,arg49294,arg49295,arg49296,arg49297,arg49298);

break;
case (13):
var arg49299 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49300 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49301 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49302 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49303 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49304 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49305 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49306 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49307 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49308 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
var arg49309 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$10),ctx,bindings);
var args__$11 = cljs.core.rest.call(null,args__$10);
var arg49310 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$11),ctx,bindings);
var args__$12 = cljs.core.rest.call(null,args__$11);
var arg49311 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$12),ctx,bindings);
var args__$13 = cljs.core.rest.call(null,args__$12);
return f.call(null,arg49299,arg49300,arg49301,arg49302,arg49303,arg49304,arg49305,arg49306,arg49307,arg49308,arg49309,arg49310,arg49311);

break;
case (14):
var arg49312 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49313 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49314 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49315 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49316 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49317 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49318 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49319 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49320 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49321 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
var arg49322 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$10),ctx,bindings);
var args__$11 = cljs.core.rest.call(null,args__$10);
var arg49323 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$11),ctx,bindings);
var args__$12 = cljs.core.rest.call(null,args__$11);
var arg49324 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$12),ctx,bindings);
var args__$13 = cljs.core.rest.call(null,args__$12);
var arg49325 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$13),ctx,bindings);
var args__$14 = cljs.core.rest.call(null,args__$13);
return f.call(null,arg49312,arg49313,arg49314,arg49315,arg49316,arg49317,arg49318,arg49319,arg49320,arg49321,arg49322,arg49323,arg49324,arg49325);

break;
case (15):
var arg49326 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49327 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49328 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49329 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49330 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49331 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49332 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49333 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49334 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49335 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
var arg49336 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$10),ctx,bindings);
var args__$11 = cljs.core.rest.call(null,args__$10);
var arg49337 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$11),ctx,bindings);
var args__$12 = cljs.core.rest.call(null,args__$11);
var arg49338 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$12),ctx,bindings);
var args__$13 = cljs.core.rest.call(null,args__$12);
var arg49339 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$13),ctx,bindings);
var args__$14 = cljs.core.rest.call(null,args__$13);
var arg49340 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$14),ctx,bindings);
var args__$15 = cljs.core.rest.call(null,args__$14);
return f.call(null,arg49326,arg49327,arg49328,arg49329,arg49330,arg49331,arg49332,arg49333,arg49334,arg49335,arg49336,arg49337,arg49338,arg49339,arg49340);

break;
case (16):
var arg49341 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49342 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49343 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49344 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49345 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49346 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49347 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49348 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49349 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49350 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
var arg49351 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$10),ctx,bindings);
var args__$11 = cljs.core.rest.call(null,args__$10);
var arg49352 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$11),ctx,bindings);
var args__$12 = cljs.core.rest.call(null,args__$11);
var arg49353 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$12),ctx,bindings);
var args__$13 = cljs.core.rest.call(null,args__$12);
var arg49354 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$13),ctx,bindings);
var args__$14 = cljs.core.rest.call(null,args__$13);
var arg49355 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$14),ctx,bindings);
var args__$15 = cljs.core.rest.call(null,args__$14);
var arg49356 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$15),ctx,bindings);
var args__$16 = cljs.core.rest.call(null,args__$15);
return f.call(null,arg49341,arg49342,arg49343,arg49344,arg49345,arg49346,arg49347,arg49348,arg49349,arg49350,arg49351,arg49352,arg49353,arg49354,arg49355,arg49356);

break;
case (17):
var arg49357 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49358 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49359 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49360 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49361 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49362 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49363 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49364 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49365 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49366 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
var arg49367 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$10),ctx,bindings);
var args__$11 = cljs.core.rest.call(null,args__$10);
var arg49368 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$11),ctx,bindings);
var args__$12 = cljs.core.rest.call(null,args__$11);
var arg49369 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$12),ctx,bindings);
var args__$13 = cljs.core.rest.call(null,args__$12);
var arg49370 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$13),ctx,bindings);
var args__$14 = cljs.core.rest.call(null,args__$13);
var arg49371 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$14),ctx,bindings);
var args__$15 = cljs.core.rest.call(null,args__$14);
var arg49372 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$15),ctx,bindings);
var args__$16 = cljs.core.rest.call(null,args__$15);
var arg49373 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$16),ctx,bindings);
var args__$17 = cljs.core.rest.call(null,args__$16);
return f.call(null,arg49357,arg49358,arg49359,arg49360,arg49361,arg49362,arg49363,arg49364,arg49365,arg49366,arg49367,arg49368,arg49369,arg49370,arg49371,arg49372,arg49373);

break;
case (18):
var arg49374 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49375 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49376 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49377 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49378 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49379 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49380 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49381 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49382 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49383 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
var arg49384 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$10),ctx,bindings);
var args__$11 = cljs.core.rest.call(null,args__$10);
var arg49385 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$11),ctx,bindings);
var args__$12 = cljs.core.rest.call(null,args__$11);
var arg49386 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$12),ctx,bindings);
var args__$13 = cljs.core.rest.call(null,args__$12);
var arg49387 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$13),ctx,bindings);
var args__$14 = cljs.core.rest.call(null,args__$13);
var arg49388 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$14),ctx,bindings);
var args__$15 = cljs.core.rest.call(null,args__$14);
var arg49389 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$15),ctx,bindings);
var args__$16 = cljs.core.rest.call(null,args__$15);
var arg49390 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$16),ctx,bindings);
var args__$17 = cljs.core.rest.call(null,args__$16);
var arg49391 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$17),ctx,bindings);
var args__$18 = cljs.core.rest.call(null,args__$17);
return f.call(null,arg49374,arg49375,arg49376,arg49377,arg49378,arg49379,arg49380,arg49381,arg49382,arg49383,arg49384,arg49385,arg49386,arg49387,arg49388,arg49389,arg49390,arg49391);

break;
case (19):
var arg49392 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args),ctx,bindings);
var args__$1 = cljs.core.rest.call(null,args);
var arg49393 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$1),ctx,bindings);
var args__$2 = cljs.core.rest.call(null,args__$1);
var arg49394 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$2),ctx,bindings);
var args__$3 = cljs.core.rest.call(null,args__$2);
var arg49395 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$3),ctx,bindings);
var args__$4 = cljs.core.rest.call(null,args__$3);
var arg49396 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$4),ctx,bindings);
var args__$5 = cljs.core.rest.call(null,args__$4);
var arg49397 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$5),ctx,bindings);
var args__$6 = cljs.core.rest.call(null,args__$5);
var arg49398 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$6),ctx,bindings);
var args__$7 = cljs.core.rest.call(null,args__$6);
var arg49399 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$7),ctx,bindings);
var args__$8 = cljs.core.rest.call(null,args__$7);
var arg49400 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$8),ctx,bindings);
var args__$9 = cljs.core.rest.call(null,args__$8);
var arg49401 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$9),ctx,bindings);
var args__$10 = cljs.core.rest.call(null,args__$9);
var arg49402 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$10),ctx,bindings);
var args__$11 = cljs.core.rest.call(null,args__$10);
var arg49403 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$11),ctx,bindings);
var args__$12 = cljs.core.rest.call(null,args__$11);
var arg49404 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$12),ctx,bindings);
var args__$13 = cljs.core.rest.call(null,args__$12);
var arg49405 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$13),ctx,bindings);
var args__$14 = cljs.core.rest.call(null,args__$13);
var arg49406 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$14),ctx,bindings);
var args__$15 = cljs.core.rest.call(null,args__$14);
var arg49407 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$15),ctx,bindings);
var args__$16 = cljs.core.rest.call(null,args__$15);
var arg49408 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$16),ctx,bindings);
var args__$17 = cljs.core.rest.call(null,args__$16);
var arg49409 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$17),ctx,bindings);
var args__$18 = cljs.core.rest.call(null,args__$17);
var arg49410 = sci.impl.types.eval.call(null,cljs.core.first.call(null,args__$18),ctx,bindings);
var args__$19 = cljs.core.rest.call(null,args__$18);
return f.call(null,arg49392,arg49393,arg49394,arg49395,arg49396,arg49397,arg49398,arg49399,arg49400,arg49401,arg49402,arg49403,arg49404,arg49405,arg49406,arg49407,arg49408,arg49409,arg49410);

break;
default:
var args__$1 = cljs.core.mapv.call(null,(function (p1__48931_SHARP_){
return sci.impl.types.eval.call(null,p1__48931_SHARP_,ctx,bindings);
}),args);
return cljs.core.apply.call(null,f,args__$1);

}
});
