// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.core_protocols');
goog.require('cljs.core');
goog.require('sci.impl.types');
goog.require('sci.impl.vars');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__21851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21854__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21855__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21855__auto__,method_table__21851__auto__,prefer_table__21852__auto__,method_cache__21853__auto__,cached_hierarchy__21854__auto__));
})();
}
cljs.core._add_method.call(null,sci.impl.core_protocols._deref,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods.call(null,ref);
return cljs.core.get.call(null,methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null)).call(null,ref);
}));
sci.impl.core_protocols.ideref_default = cljs.core._add_method.call(null,sci.impl.core_protocols._deref,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref.call(null,ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.call(null,x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.call(null,new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__21851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21854__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21855__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21855__auto__,method_table__21851__auto__,prefer_table__21852__auto__,method_cache__21853__auto__,cached_hierarchy__21854__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__21851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21854__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21855__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21855__auto__,method_table__21851__auto__,prefer_table__21852__auto__,method_cache__21853__auto__,cached_hierarchy__21854__auto__));
})();
}
cljs.core._add_method.call(null,sci.impl.core_protocols._swap_BANG_,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__32467 = null;
var G__32467__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods.call(null,ref);
return cljs.core.get.call(null,methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)).call(null,ref,f);
});
var G__32467__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods.call(null,ref);
return cljs.core.get.call(null,methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)).call(null,ref,f,a1);
});
var G__32467__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods.call(null,ref);
return cljs.core.get.call(null,methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)).call(null,ref,f,a1,a2);
});
var G__32467__5 = (function() { 
var G__32468__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods.call(null,ref);
return cljs.core.apply.call(null,cljs.core.get.call(null,methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,args);
};
var G__32468 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__32469__i = 0, G__32469__a = new Array(arguments.length -  4);
while (G__32469__i < G__32469__a.length) {G__32469__a[G__32469__i] = arguments[G__32469__i + 4]; ++G__32469__i;}
  args = new cljs.core.IndexedSeq(G__32469__a,0,null);
} 
return G__32468__delegate.call(this,ref,f,a1,a2,args);};
G__32468.cljs$lang$maxFixedArity = 4;
G__32468.cljs$lang$applyTo = (function (arglist__32470){
var ref = cljs.core.first(arglist__32470);
arglist__32470 = cljs.core.next(arglist__32470);
var f = cljs.core.first(arglist__32470);
arglist__32470 = cljs.core.next(arglist__32470);
var a1 = cljs.core.first(arglist__32470);
arglist__32470 = cljs.core.next(arglist__32470);
var a2 = cljs.core.first(arglist__32470);
var args = cljs.core.rest(arglist__32470);
return G__32468__delegate(ref,f,a1,a2,args);
});
G__32468.cljs$core$IFn$_invoke$arity$variadic = G__32468__delegate;
return G__32468;
})()
;
G__32467 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__32467__2.call(this,ref,f);
case 3:
return G__32467__3.call(this,ref,f,a1);
case 4:
return G__32467__4.call(this,ref,f,a1,a2);
default:
var G__32471 = null;
if (arguments.length > 4) {
var G__32472__i = 0, G__32472__a = new Array(arguments.length -  4);
while (G__32472__i < G__32472__a.length) {G__32472__a[G__32472__i] = arguments[G__32472__i + 4]; ++G__32472__i;}
G__32471 = new cljs.core.IndexedSeq(G__32472__a,0,null);
}
return G__32467__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__32471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32467.cljs$lang$maxFixedArity = 4;
G__32467.cljs$lang$applyTo = G__32467__5.cljs$lang$applyTo;
G__32467.cljs$core$IFn$_invoke$arity$2 = G__32467__2;
G__32467.cljs$core$IFn$_invoke$arity$3 = G__32467__3;
G__32467.cljs$core$IFn$_invoke$arity$4 = G__32467__4;
G__32467.cljs$core$IFn$_invoke$arity$variadic = G__32467__5.cljs$core$IFn$_invoke$arity$variadic;
return G__32467;
})()
);
cljs.core._add_method.call(null,sci.impl.core_protocols._reset_BANG_,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods.call(null,ref);
return cljs.core.get.call(null,methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null)).call(null,ref,v);
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._add_method.call(null,sci.impl.core_protocols._swap_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__32473__delegate = function (ref,f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,ref,f,args);
};
var G__32473 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__32474__i = 0, G__32474__a = new Array(arguments.length -  2);
while (G__32474__i < G__32474__a.length) {G__32474__a[G__32474__i] = arguments[G__32474__i + 2]; ++G__32474__i;}
  args = new cljs.core.IndexedSeq(G__32474__a,0,null);
} 
return G__32473__delegate.call(this,ref,f,args);};
G__32473.cljs$lang$maxFixedArity = 2;
G__32473.cljs$lang$applyTo = (function (arglist__32475){
var ref = cljs.core.first(arglist__32475);
arglist__32475 = cljs.core.next(arglist__32475);
var f = cljs.core.first(arglist__32475);
var args = cljs.core.rest(arglist__32475);
return G__32473__delegate(ref,f,args);
});
G__32473.cljs$core$IFn$_invoke$arity$variadic = G__32473__delegate;
return G__32473;
})()
),cljs.core._add_method.call(null,sci.impl.core_protocols._reset_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_.call(null,ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32479 = arguments.length;
var i__22083__auto___32480 = (0);
while(true){
if((i__22083__auto___32480 < len__22082__auto___32479)){
args__22092__auto__.push((arguments[i__22083__auto___32480]));

var G__32481 = (i__22083__auto___32480 + (1));
i__22083__auto___32480 = G__32481;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.call(null,sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.call(null,ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq32476){
var G__32477 = cljs.core.first.call(null,seq32476);
var seq32476__$1 = cljs.core.next.call(null,seq32476);
var G__32478 = cljs.core.first.call(null,seq32476__$1);
var seq32476__$2 = cljs.core.next.call(null,seq32476__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32477,G__32478,seq32476__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.call(null,ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.call(null,new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.call(null,new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set.call(null,cljs.core.conj.call(null,sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));
