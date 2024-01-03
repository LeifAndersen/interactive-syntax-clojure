// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('interactive_syntax.utils');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
interactive_syntax.utils.node$module$react_dom$client = require('react-dom/client');
interactive_syntax.utils.module__GT_uri = (function interactive_syntax$utils$module__GT_uri(var_args){
var args__22092__auto__ = [];
var len__22082__auto___29597 = arguments.length;
var i__22083__auto___29598 = (0);
while(true){
if((i__22083__auto___29598 < len__22082__auto___29597)){
args__22092__auto__.push((arguments[i__22083__auto___29598]));

var G__29599 = (i__22083__auto___29598 + (1));
i__22083__auto___29598 = G__29599;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return interactive_syntax.utils.module__GT_uri.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(interactive_syntax.utils.module__GT_uri.cljs$core$IFn$_invoke$arity$variadic = (function (module,p__29595){
var map__29596 = p__29595;
var map__29596__$1 = cljs.core.__destructure_map.call(null,map__29596);
var mime = cljs.core.get.call(null,map__29596__$1,new cljs.core.Keyword(null,"mime","mime",-1846414642));
return URL.createObjectURL((new Blob([module],({"type": mime}))));
}));

(interactive_syntax.utils.module__GT_uri.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(interactive_syntax.utils.module__GT_uri.cljs$lang$applyTo = (function (seq29593){
var G__29594 = cljs.core.first.call(null,seq29593);
var seq29593__$1 = cljs.core.next.call(null,seq29593);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29594,seq29593__$1);
}));

interactive_syntax.utils.cb_thread = (function interactive_syntax$utils$cb_thread(var_args){
var args__22092__auto__ = [];
var len__22082__auto___29602 = arguments.length;
var i__22083__auto___29603 = (0);
while(true){
if((i__22083__auto___29603 < len__22082__auto___29602)){
args__22092__auto__.push((arguments[i__22083__auto___29603]));

var G__29604 = (i__22083__auto___29603 + (1));
i__22083__auto___29603 = G__29604;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return interactive_syntax.utils.cb_thread.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(interactive_syntax.utils.cb_thread.cljs$core$IFn$_invoke$arity$variadic = (function (funcs){
return (function interactive_syntax$utils$rec(funcs__$1,ret){
if(cljs.core.empty_QMARK_.call(null,funcs__$1)){
return ret;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,funcs__$1),new cljs.core.Keyword(null,"do","do",46310725))){
var ret__$1 = cljs.core.apply.call(null,cljs.core.second.call(null,funcs__$1),ret);
return interactive_syntax$utils$rec.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,funcs__$1)),(new cljs.core.List(null,ret__$1,null,(1),null)));
} else {
return cljs.core.apply.call(null,cljs.core.first.call(null,funcs__$1),(function() { 
var G__29605__delegate = function (rest__29600_SHARP_){
return interactive_syntax$utils$rec.call(null,cljs.core.rest.call(null,funcs__$1),rest__29600_SHARP_);
};
var G__29605 = function (var_args){
var rest__29600_SHARP_ = null;
if (arguments.length > 0) {
var G__29606__i = 0, G__29606__a = new Array(arguments.length -  0);
while (G__29606__i < G__29606__a.length) {G__29606__a[G__29606__i] = arguments[G__29606__i + 0]; ++G__29606__i;}
  rest__29600_SHARP_ = new cljs.core.IndexedSeq(G__29606__a,0,null);
} 
return G__29605__delegate.call(this,rest__29600_SHARP_);};
G__29605.cljs$lang$maxFixedArity = 0;
G__29605.cljs$lang$applyTo = (function (arglist__29607){
var rest__29600_SHARP_ = cljs.core.seq(arglist__29607);
return G__29605__delegate(rest__29600_SHARP_);
});
G__29605.cljs$core$IFn$_invoke$arity$variadic = G__29605__delegate;
return G__29605;
})()
,ret);

}
}
}).call(null,funcs,null);
}));

(interactive_syntax.utils.cb_thread.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(interactive_syntax.utils.cb_thread.cljs$lang$applyTo = (function (seq29601){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29601));
}));

interactive_syntax.utils.cb_loop = (function interactive_syntax$utils$cb_loop(var_args){
var args__22092__auto__ = [];
var len__22082__auto___29613 = arguments.length;
var i__22083__auto___29614 = (0);
while(true){
if((i__22083__auto___29614 < len__22082__auto___29613)){
args__22092__auto__.push((arguments[i__22083__auto___29614]));

var G__29615 = (i__22083__auto___29614 + (1));
i__22083__auto___29614 = G__29615;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return interactive_syntax.utils.cb_loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(interactive_syntax.utils.cb_loop.cljs$core$IFn$_invoke$arity$variadic = (function (lst,body,cb,ret){
return (function interactive_syntax$utils$rec(lst__$1,ret__$1){
if(cljs.core.empty_QMARK_.call(null,lst__$1)){
return cljs.core.apply.call(null,cb,ret__$1);
} else {
return cljs.core.apply.call(null,body,(function() { 
var G__29616__delegate = function (rest__29608_SHARP_){
return interactive_syntax$utils$rec.call(null,cljs.core.rest.call(null,lst__$1),rest__29608_SHARP_);
};
var G__29616 = function (var_args){
var rest__29608_SHARP_ = null;
if (arguments.length > 0) {
var G__29617__i = 0, G__29617__a = new Array(arguments.length -  0);
while (G__29617__i < G__29617__a.length) {G__29617__a[G__29617__i] = arguments[G__29617__i + 0]; ++G__29617__i;}
  rest__29608_SHARP_ = new cljs.core.IndexedSeq(G__29617__a,0,null);
} 
return G__29616__delegate.call(this,rest__29608_SHARP_);};
G__29616.cljs$lang$maxFixedArity = 0;
G__29616.cljs$lang$applyTo = (function (arglist__29618){
var rest__29608_SHARP_ = cljs.core.seq(arglist__29618);
return G__29616__delegate(rest__29608_SHARP_);
});
G__29616.cljs$core$IFn$_invoke$arity$variadic = G__29616__delegate;
return G__29616;
})()
,cljs.core.first.call(null,lst__$1),ret__$1);
}
}).call(null,lst,ret);
}));

(interactive_syntax.utils.cb_loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(interactive_syntax.utils.cb_loop.cljs$lang$applyTo = (function (seq29609){
var G__29610 = cljs.core.first.call(null,seq29609);
var seq29609__$1 = cljs.core.next.call(null,seq29609);
var G__29611 = cljs.core.first.call(null,seq29609__$1);
var seq29609__$2 = cljs.core.next.call(null,seq29609__$1);
var G__29612 = cljs.core.first.call(null,seq29609__$2);
var seq29609__$3 = cljs.core.next.call(null,seq29609__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29610,G__29611,G__29612,seq29609__$3);
}));

interactive_syntax.utils.render = (function interactive_syntax$utils$render(element,node){
return reagent.dom.render.call(null,element,node);

});
interactive_syntax.utils.swap_orientation = (function interactive_syntax$utils$swap_orientation(orientation){
if(cljs.core._EQ_.call(null,orientation,"horizontal")){
return "vertical";
} else {
return "horizontal";
}
});
