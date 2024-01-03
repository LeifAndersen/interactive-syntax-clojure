// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.zip.context');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.zip.seqz');
goog.require('rewrite_clj.zip.walk');
rewrite_clj.zip.context.is_map_key_QMARK_ = (function rewrite_clj$zip$context$is_map_key_QMARK_(zloc){
return cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,rewrite_clj.custom_zipper.core.left,zloc))));
});
/**
 * Returns `zloc` with namespaced map sexpr context to all symbols and keywords reapplied from current location downward.
 * 
 *   Keywords and symbols:
 *   * that are keys in a namespaced map will have namespaced map context applied
 *   * otherwise will have any namespaced map context removed
 * 
 *   You should only need to use this function if:
 *   * you care about `sexpr` on keywords and symbols
 *   * and you are moving keywords and symbols from a namespaced map to some other location.
 */
rewrite_clj.zip.context.reapply_context = (function rewrite_clj$zip$context$reapply_context(zloc){
return rewrite_clj.zip.walk.postwalk.call(null,zloc,(function (p1__46335_SHARP_){
var G__46336 = rewrite_clj.custom_zipper.core.node.call(null,p1__46335_SHARP_);
if((!((G__46336 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__46336.rewrite_clj$node$protocols$MapQualifiable$)))){
return true;
} else {
if((!G__46336.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,rewrite_clj.node.protocols.MapQualifiable,G__46336);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,rewrite_clj.node.protocols.MapQualifiable,G__46336);
}
}),(function (zloc__$1){
var parent = rewrite_clj.custom_zipper.core.up.call(null,rewrite_clj.custom_zipper.core.up.call(null,zloc__$1));
var nsmap = (cljs.core.truth_((function (){var and__20748__auto__ = parent;
if(cljs.core.truth_(and__20748__auto__)){
return rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,parent);
} else {
return and__20748__auto__;
}
})())?parent:null);
if(cljs.core.truth_((function (){var and__20748__auto__ = nsmap;
if(cljs.core.truth_(and__20748__auto__)){
return rewrite_clj.zip.context.is_map_key_QMARK_.call(null,zloc__$1);
} else {
return and__20748__auto__;
}
})())){
return rewrite_clj.custom_zipper.core.replace.call(null,zloc__$1,rewrite_clj.node.protocols.map_context_apply.call(null,rewrite_clj.custom_zipper.core.node.call(null,zloc__$1),cljs.core.first.call(null,rewrite_clj.node.protocols.children.call(null,rewrite_clj.custom_zipper.core.node.call(null,nsmap)))));
} else {
return rewrite_clj.custom_zipper.core.replace.call(null,zloc__$1,rewrite_clj.node.protocols.map_context_clear.call(null,rewrite_clj.custom_zipper.core.node.call(null,zloc__$1)));
}
}));
});
