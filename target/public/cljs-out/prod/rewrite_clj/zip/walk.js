// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.zip.walk');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.subedit');
rewrite_clj.zip.walk.downmost = (function rewrite_clj$zip$walk$downmost(zloc){
return cljs.core.last.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,rewrite_clj.zip.move.down,zloc)));
});
rewrite_clj.zip.walk.process_loc = (function rewrite_clj$zip$walk$process_loc(zloc,p_QMARK_,f){
if(cljs.core.truth_(p_QMARK_.call(null,zloc))){
var or__20754__auto__ = f.call(null,zloc);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zloc;
}
} else {
return zloc;
}
});
rewrite_clj.zip.walk.prewalk_subtree = (function rewrite_clj$zip$walk$prewalk_subtree(p_QMARK_,f,zloc){
var loc = zloc;
while(true){
if(cljs.core.truth_(rewrite_clj.zip.move.end_QMARK_.call(null,loc))){
return loc;
} else {
var G__46309 = rewrite_clj.zip.move.next.call(null,rewrite_clj.zip.walk.process_loc.call(null,loc,p_QMARK_,f));
loc = G__46309;
continue;
}
break;
}
});
/**
 * Return zipper modified by an isolated depth-first pre-order traversal.
 * 
 * Pre-order traversal visits root before children.
 * For example, traversal order of `(1 (2 3 (4 5) 6 (7 8)) 9)` is:
 * 
 * 1. `(1 (2 3 (4 5) 6 (7 8)) 9)`
 * 2. `1`
 * 3. `(2 3 (4 5) 6 (7 8))`
 * 4. `2`
 * 5. `3`
 * 6. `(4 5)`
 * 7. `4`
 * 8. `5`
 * 9. `6`
 * 10. `(7 8)`
 * 11. `7`
 * 12. `8`
 * 13. `9`
 * 
 * Traversal starts at the current node in `zloc` and continues to the end of the isolated sub-tree.
 * 
 * Function `f` is called on the zipper locations satisfying predicate `p?` and must return either
 * - nil to indicate no changes
 * - or a valid zipper
 * WARNING: when function `f` changes the location in the zipper, normal traversal will be affected.
 * 
 * When `p?` is not specified `f` is called on all locations.
 * 
 * Note that by default a newly created zipper automatically navigates to the first non-whitespace
 * node. If you want to be sure to walk all forms in a zipper, you'll want to navigate one up prior to your walk:
 * 
 * ```Clojure
 * (-> (zip/of-string "my clojure forms")
 *     zip/up
 *     (zip/prewalk ...))
 * ```
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.walk.prewalk = (function rewrite_clj$zip$walk$prewalk(var_args){
var G__46311 = arguments.length;
switch (G__46311) {
case 2:
return rewrite_clj.zip.walk.prewalk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.walk.prewalk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.walk.prewalk.cljs$core$IFn$_invoke$arity$2 = (function (zloc,f){
return rewrite_clj.zip.walk.prewalk.call(null,zloc,cljs.core.constantly.call(null,true),f);
}));

(rewrite_clj.zip.walk.prewalk.cljs$core$IFn$_invoke$arity$3 = (function (zloc,p_QMARK_,f){
return rewrite_clj.zip.subedit.subedit_node.call(null,zloc,cljs.core.partial.call(null,rewrite_clj.zip.walk.prewalk_subtree,p_QMARK_,f));
}));

(rewrite_clj.zip.walk.prewalk.cljs$lang$maxFixedArity = 3);

rewrite_clj.zip.walk.postwalk_subtree = (function rewrite_clj$zip$walk$postwalk_subtree(p_QMARK_,f,zloc){
var loc = rewrite_clj.zip.walk.downmost.call(null,zloc);
while(true){
var loc__$1 = rewrite_clj.zip.walk.process_loc.call(null,loc,p_QMARK_,f);
if(cljs.core.truth_(rewrite_clj.zip.move.right.call(null,loc__$1))){
var G__46313 = rewrite_clj.zip.walk.downmost.call(null,rewrite_clj.zip.move.right.call(null,loc__$1));
loc = G__46313;
continue;
} else {
if(cljs.core.truth_(rewrite_clj.zip.move.up.call(null,loc__$1))){
var G__46314 = rewrite_clj.zip.move.up.call(null,loc__$1);
loc = G__46314;
continue;
} else {
return loc__$1;

}
}
break;
}
});
/**
 * Return zipper modified by an isolated depth-first post-order traversal.
 * 
 * Pre-order traversal visits children before root.
 * For example, traversal order of `(1 (2 3 (4 5) 6 (7 8)) 9)` is:
 * 
 * 1. `1`
 * 2. `2`
 * 3. `3`
 * 4. `4`
 * 5. `5`
 * 6. `(4 5)`
 * 7. `6`
 * 8. `7`
 * 9. `8`
 * 10. `(7 8)`
 * 11. `(2 3 (4 5) 6 (7 8))`
 * 12. `9`
 * 13. `(1 (2 3 (4 5) 6 (7 8)) 9)`
 * 
 * Traversal starts at the current node in `zloc` and continues to the end of the isolated sub-tree.
 * 
 * Function `f` is called on the zipper locations satisfying predicate `p?` and must return either
 * - nil to indicate no changes
 * - or a valid zipper
 * WARNING: when function `f` changes the location in the zipper, normal traversal will be affected.
 * 
 * When `p?` is not specified `f` is called on all locations.
 * 
 * Note that by default a newly created zipper automatically navigates to the first non-whitespace
 * node. If you want to be sure to walk all forms in a zipper, you'll want to navigate one up prior to your walk:
 * 
 * ```Clojure
 * (-> (zip/of-string "my clojure forms")
 *     zip/up
 *     (zip/postwalk ...))
 * ```
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.walk.postwalk = (function rewrite_clj$zip$walk$postwalk(var_args){
var G__46317 = arguments.length;
switch (G__46317) {
case 2:
return rewrite_clj.zip.walk.postwalk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.walk.postwalk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.walk.postwalk.cljs$core$IFn$_invoke$arity$2 = (function (zloc,f){
return rewrite_clj.zip.walk.postwalk.call(null,zloc,cljs.core.constantly.call(null,true),f);
}));

(rewrite_clj.zip.walk.postwalk.cljs$core$IFn$_invoke$arity$3 = (function (zloc,p_QMARK_,f){
return rewrite_clj.zip.subedit.subedit_node.call(null,zloc,(function (p1__46315_SHARP_){
return rewrite_clj.zip.walk.postwalk_subtree.call(null,p_QMARK_,f,p1__46315_SHARP_);
}));
}));

(rewrite_clj.zip.walk.postwalk.cljs$lang$maxFixedArity = 3);

