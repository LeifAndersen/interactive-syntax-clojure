// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.interop');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Interop version of string format
 *   Note that there a big differences between Java's format and Google Closure's format - we don't address them.
 *   %d and %s are known to work in both.
 */
rewrite_clj.interop.simple_format = (function rewrite_clj$interop$simple_format(var_args){
var args__22092__auto__ = [];
var len__22082__auto___31673 = arguments.length;
var i__22083__auto___31674 = (0);
while(true){
if((i__22083__auto___31674 < len__22082__auto___31673)){
args__22092__auto__.push((arguments[i__22083__auto___31674]));

var G__31675 = (i__22083__auto___31674 + (1));
i__22083__auto___31674 = G__31675;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return rewrite_clj.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(rewrite_clj.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return cljs.core.apply.call(null,goog.string.format,template,args);
}));

(rewrite_clj.interop.simple_format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.interop.simple_format.cljs$lang$applyTo = (function (seq31671){
var G__31672 = cljs.core.first.call(null,seq31671);
var seq31671__$1 = cljs.core.next.call(null,seq31671);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31672,seq31671__$1);
}));

rewrite_clj.interop.str__GT_int = (function rewrite_clj$interop$str__GT_int(s){
return parseInt(s);
});
rewrite_clj.interop.int__GT_str = (function rewrite_clj$interop$int__GT_str(n,base){
return n.toString(base);
});
rewrite_clj.interop.min_int = (function rewrite_clj$interop$min_int(){
return Number.MIN_SAFE_INTEGER;
});
rewrite_clj.interop.max_int = (function rewrite_clj$interop$max_int(){
return Number.MAX_SAFE_INTEGER;
});
rewrite_clj.interop.clojure_whitespace_QMARK_ = (function rewrite_clj$interop$clojure_whitespace_QMARK_(c){
var and__20748__auto__ = c;
if(cljs.core.truth_(and__20748__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__20748__auto__;
}
});
rewrite_clj.interop.meta_available_QMARK_ = (function rewrite_clj$interop$meta_available_QMARK_(data){
if((!((data == null)))){
if((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
