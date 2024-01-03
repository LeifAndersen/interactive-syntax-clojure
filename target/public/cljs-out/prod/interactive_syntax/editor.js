// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('interactive_syntax.editor');
goog.require('cljs.core');
goog.require('reagent.core');
interactive_syntax.editor.make_reset_editors_cache = (function interactive_syntax$editor$make_reset_editors_cache(var_args){
var args__22092__auto__ = [];
var len__22082__auto___29535 = arguments.length;
var i__22083__auto___29536 = (0);
while(true){
if((i__22083__auto___29536 < len__22082__auto___29535)){
args__22092__auto__.push((arguments[i__22083__auto___29536]));

var G__29537 = (i__22083__auto___29536 + (1));
i__22083__auto___29536 = G__29537;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return interactive_syntax.editor.make_reset_editors_cache.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(interactive_syntax.editor.make_reset_editors_cache.cljs$core$IFn$_invoke$arity$variadic = (function (p__29531){
var vec__29532 = p__29531;
var cache = cljs.core.nth.call(null,vec__29532,(0),null);
var c = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),null,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)], null);
if(cljs.core.truth_(cache)){
return cljs.core.reset_BANG_.call(null,cache,c);
} else {
return reagent.core.atom.call(null,c);
}
}));

(interactive_syntax.editor.make_reset_editors_cache.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(interactive_syntax.editor.make_reset_editors_cache.cljs$lang$applyTo = (function (seq29530){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29530));
}));

