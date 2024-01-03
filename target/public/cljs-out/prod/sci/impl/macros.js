// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.macros');
goog.require('cljs.core');
var ret__22143__auto___31986 = (function (){
/**
 * Private. deftime macro from https://github.com/cgrand/macrovich
 */
sci.impl.macros.deftime = (function sci$impl$macros$deftime(var_args){
var args__22092__auto__ = [];
var len__22082__auto___31987 = arguments.length;
var i__22083__auto___31988 = (0);
while(true){
if((i__22083__auto___31988 < len__22082__auto___31987)){
args__22092__auto__.push((arguments[i__22083__auto___31988]));

var G__31989 = (i__22083__auto___31988 + (1));
i__22083__auto___31988 = G__31989;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return sci.impl.macros.deftime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(sci.impl.macros.deftime.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.truth_((function (){var temp__5720__auto__ = (function (){var and__20748__auto__ = cljs.core._STAR_ns_STAR_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
return cljs.core.re_matches.call(null,/.*\$macros/,cljs.core.name.call(null,n));
} else {
return null;
}
})())){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return null;
}
}));

(sci.impl.macros.deftime.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.macros.deftime.cljs$lang$applyTo = (function (seq31983){
var G__31984 = cljs.core.first.call(null,seq31983);
var seq31983__$1 = cljs.core.next.call(null,seq31983);
var G__31985 = cljs.core.first.call(null,seq31983__$1);
var seq31983__$2 = cljs.core.next.call(null,seq31983__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31984,G__31985,seq31983__$2);
}));

return null;
})()
;
(sci.impl.macros.deftime.cljs$lang$macro = true);

