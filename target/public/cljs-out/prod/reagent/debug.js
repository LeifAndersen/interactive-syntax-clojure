// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27082__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27083__i = 0, G__27083__a = new Array(arguments.length -  0);
while (G__27083__i < G__27083__a.length) {G__27083__a[G__27083__i] = arguments[G__27083__i + 0]; ++G__27083__i;}
  args = new cljs.core.IndexedSeq(G__27083__a,0,null);
} 
return G__27082__delegate.call(this,args);};
G__27082.cljs$lang$maxFixedArity = 0;
G__27082.cljs$lang$applyTo = (function (arglist__27084){
var args = cljs.core.seq(arglist__27084);
return G__27082__delegate(args);
});
G__27082.cljs$core$IFn$_invoke$arity$variadic = G__27082__delegate;
return G__27082;
})()
);

(o.error = (function() { 
var G__27085__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27086__i = 0, G__27086__a = new Array(arguments.length -  0);
while (G__27086__i < G__27086__a.length) {G__27086__a[G__27086__i] = arguments[G__27086__i + 0]; ++G__27086__i;}
  args = new cljs.core.IndexedSeq(G__27086__a,0,null);
} 
return G__27085__delegate.call(this,args);};
G__27085.cljs$lang$maxFixedArity = 0;
G__27085.cljs$lang$applyTo = (function (arglist__27087){
var args = cljs.core.seq(arglist__27087);
return G__27085__delegate(args);
});
G__27085.cljs$core$IFn$_invoke$arity$variadic = G__27085__delegate;
return G__27085;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
