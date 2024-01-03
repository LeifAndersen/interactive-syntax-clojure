// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.reify');
goog.require('cljs.core');
goog.require('sci.impl.types');
sci.impl.reify.reify = (function sci$impl$reify$reify(var_args){
var args__22092__auto__ = [];
var len__22082__auto___33324 = arguments.length;
var i__22083__auto___33325 = (0);
while(true){
if((i__22083__auto___33325 < len__22082__auto___33324)){
args__22092__auto__.push((arguments[i__22083__auto___33325]));

var G__33326 = (i__22083__auto___33325 + (1));
i__22083__auto___33325 = G__33326;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,_ctx,args){
var map__33319 = cljs.core.group_by.call(null,cljs.core.symbol_QMARK_,args);
var map__33319__$1 = cljs.core.__destructure_map.call(null,map__33319);
var classes = cljs.core.get.call(null,map__33319__$1,true);
var methods$ = cljs.core.get.call(null,map__33319__$1,false);
var methods$__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33320){
var vec__33321 = p__33320;
var meth = cljs.core.nth.call(null,vec__33321,(0),null);
var bodies = cljs.core.nth.call(null,vec__33321,(1),null);
var meth__$1 = ((cljs.core.simple_symbol_QMARK_.call(null,meth))?meth:cljs.core.symbol.call(null,cljs.core.name.call(null,meth)));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,meth__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.map.call(null,cljs.core.rest,bodies)))),null,(1),null))))));
}),cljs.core.group_by.call(null,cljs.core.first,methods$)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reify*","cljs.core/reify*",1256833160,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,classes),null,(1),null)),(new cljs.core.List(null,methods$__$1,null,(1),null)))));
}));

(sci.impl.reify.reify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.reify.reify.cljs$lang$applyTo = (function (seq33315){
var G__33316 = cljs.core.first.call(null,seq33315);
var seq33315__$1 = cljs.core.next.call(null,seq33315);
var G__33317 = cljs.core.first.call(null,seq33315__$1);
var seq33315__$2 = cljs.core.next.call(null,seq33315__$1);
var G__33318 = cljs.core.first.call(null,seq33315__$2);
var seq33315__$3 = cljs.core.next.call(null,seq33315__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33316,G__33317,G__33318,seq33315__$3);
}));

sci.impl.reify.reify_STAR_ = (function sci$impl$reify$reify_STAR_(_ctx,_form,classes,methods$){
return sci.impl.types.__GT_Reified.call(null,classes,methods$,cljs.core.set.call(null,classes));
});
