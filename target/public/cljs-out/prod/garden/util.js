// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47512 = arguments.length;
var i__22083__auto___47513 = (0);
while(true){
if((i__22083__auto___47513 < len__22082__auto___47512)){
args__22092__auto__.push((arguments[i__22083__auto___47513]));

var G__47514 = (i__22083__auto___47513 + (1));
i__22083__auto___47513 = G__47514;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.format.cljs$lang$applyTo = (function (seq47510){
var G__47511 = cljs.core.first.call(null,seq47510);
var seq47510__$1 = cljs.core.next.call(null,seq47510);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47511,seq47510__$1);
}));


/**
 * @interface
 */
garden.util.ToString = function(){};

var garden$util$ToString$to_str$dyn_47515 = (function (this$){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (garden.util.to_str[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$);
} else {
var m__21501__auto__ = (garden.util.to_str["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.garden$util$ToString$to_str$arity$1 == null)))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
return garden$util$ToString$to_str$dyn_47515.call(null,this$);
}
});

(cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
}));

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47517 = arguments.length;
var i__22083__auto___47518 = (0);
while(true){
if((i__22083__auto___47518 < len__22082__auto___47517)){
args__22092__auto__.push((arguments[i__22083__auto___47518]));

var G__47519 = (i__22083__auto___47518 + (1));
i__22083__auto___47518 = G__47519;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
}));

(garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.as_str.cljs$lang$applyTo = (function (seq47516){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47516));
}));

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47526 = arguments.length;
var i__22083__auto___47527 = (0);
while(true){
if((i__22083__auto___47527 < len__22082__auto___47526)){
args__22092__auto__.push((arguments[i__22083__auto___47527]));

var G__47528 = (i__22083__auto___47527 + (1));
i__22083__auto___47527 = G__47528;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__47522){
var vec__47523 = p__47522;
var radix = cljs.core.nth.call(null,vec__47523,(0),null);
var radix__$1 = (function (){var or__20754__auto__ = radix;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.string__GT_int.cljs$lang$applyTo = (function (seq47520){
var G__47521 = cljs.core.first.call(null,seq47520);
var seq47520__$1 = cljs.core.next.call(null,seq47520);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47521,seq47520__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47535 = arguments.length;
var i__22083__auto___47536 = (0);
while(true){
if((i__22083__auto___47536 < len__22082__auto___47535)){
args__22092__auto__.push((arguments[i__22083__auto___47536]));

var G__47537 = (i__22083__auto___47536 + (1));
i__22083__auto___47536 = G__47537;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__47531){
var vec__47532 = p__47531;
var radix = cljs.core.nth.call(null,vec__47532,(0),null);
var radix__$1 = (function (){var or__20754__auto__ = radix;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.int__GT_string.cljs$lang$applyTo = (function (seq47529){
var G__47530 = cljs.core.first.call(null,seq47529);
var seq47529__$1 = cljs.core.next.call(null,seq47529);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47530,seq47529__$1);
}));

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__21676__auto__ = (function garden$util$comma_join_$_iter__47538(s__47539){
return (new cljs.core.LazySeq(null,(function (){
var s__47539__$1 = s__47539;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__47539__$1);
if(temp__5720__auto__){
var s__47539__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47539__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__47539__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__47541 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__47540 = (0);
while(true){
if((i__47540 < size__21675__auto__)){
var x = cljs.core._nth.call(null,c__21674__auto__,i__47540);
cljs.core.chunk_append.call(null,b__47541,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__47542 = (i__47540 + (1));
i__47540 = G__47542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47541),garden$util$comma_join_$_iter__47538.call(null,cljs.core.chunk_rest.call(null,s__47539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47541),null);
}
} else {
var x = cljs.core.first.call(null,s__47539__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__47538.call(null,cljs.core.rest.call(null,s__47539__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && ((!(cljs.core.record_QMARK_.call(null,x)))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
return ((garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
garden.util.at_supports_QMARK_ = (function garden$util$at_supports_QMARK_(x){
return ((garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
return ((garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
return ((garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_.call(null,n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__21118__auto__ = a;
var y__21119__auto__ = b;
return ((x__21118__auto__ < y__21119__auto__) ? x__21118__auto__ : y__21119__auto__);
})();
var top = (function (){var x__21111__auto__ = a;
var y__21112__auto__ = b;
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__47543 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__47543,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__47543,(1),null);
var x__21111__auto__ = a__$1;
var y__21112__auto__ = (function (){var x__21118__auto__ = b__$1;
var y__21119__auto__ = n;
return ((x__21118__auto__ < y__21119__auto__) ? x__21118__auto__ : y__21119__auto__);
})();
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47549 = arguments.length;
var i__22083__auto___47550 = (0);
while(true){
if((i__22083__auto___47550 < len__22082__auto___47549)){
args__22092__auto__.push((arguments[i__22083__auto___47550]));

var G__47551 = (i__22083__auto___47550 + (1));
i__22083__auto___47550 = G__47551;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
}));

(garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(garden.util.average.cljs$lang$applyTo = (function (seq47546){
var G__47547 = cljs.core.first.call(null,seq47546);
var seq47546__$1 = cljs.core.next.call(null,seq47546);
var G__47548 = cljs.core.first.call(null,seq47546__$1);
var seq47546__$2 = cljs.core.next.call(null,seq47546__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47547,G__47548,seq47546__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47553 = arguments.length;
var i__22083__auto___47554 = (0);
while(true){
if((i__22083__auto___47554 < len__22082__auto___47553)){
args__22092__auto__.push((arguments[i__22083__auto___47554]));

var G__47555 = (i__22083__auto___47554 + (1));
i__22083__auto___47554 = G__47555;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = (function garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5718__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5718__auto__){
var rst = temp__5718__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__47556 = (i - (1));
var G__47557 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__47556;
v_seqs__$2 = G__47557;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step.call(null,v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.cartesian_product.cljs$lang$applyTo = (function (seq47552){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47552));
}));

