// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.zip');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.node.coercer');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.context');
goog.require('rewrite_clj.zip.editz');
goog.require('rewrite_clj.zip.findz');
goog.require('rewrite_clj.zip.insert');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.seqz');
goog.require('rewrite_clj.zip.subedit');
goog.require('rewrite_clj.zip.walk');
goog.require('rewrite_clj.zip.whitespace');
/**
 * Returns the current node in `zloc`.
 */
rewrite_clj.zip.node = (function rewrite_clj$zip$node(zloc){
return rewrite_clj.custom_zipper.core.node.call(null,zloc);
});
/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.zip.position = (function rewrite_clj$zip$position(zloc){
return rewrite_clj.custom_zipper.core.position.call(null,zloc);
});
/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 *   `end-col` is exclusive.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.zip.position_span = (function rewrite_clj$zip$position_span(zloc){
return rewrite_clj.custom_zipper.core.position_span.call(null,zloc);
});
/**
 * Zips all the way up `zloc` and returns the root node, reflecting any changes.
 */
rewrite_clj.zip.root = (function rewrite_clj$zip$root(zloc){
return rewrite_clj.custom_zipper.core.root.call(null,zloc);
});
/**
 * Return s-expression (the Clojure forms) of children of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.child_sexprs = (function rewrite_clj$zip$child_sexprs(zloc){
return rewrite_clj.zip.base.child_sexprs.call(null,zloc);
});
/**
 * Create and return zipper from a rewrite-clj `node` (likely parsed by [[rewrite-clj.parser]]).
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.of_node_STAR_ = (function rewrite_clj$zip$of_node_STAR_(var_args){
var G__47072 = arguments.length;
switch (G__47072) {
case 1:
return rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.of_node_STAR_.call(null,node);
}));

(rewrite_clj.zip.of_node_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.base.of_node_STAR_.call(null,node,opts);
}));

(rewrite_clj.zip.of_node_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED. Renamed to [[of-node*]].
 */
rewrite_clj.zip.edn_STAR_ = (function rewrite_clj$zip$edn_STAR_(var_args){
var G__47075 = arguments.length;
switch (G__47075) {
case 1:
return rewrite_clj.zip.edn_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.edn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.edn_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn_STAR_.call(null,node);
}));

(rewrite_clj.zip.edn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.base.edn_STAR_.call(null,node,opts);
}));

(rewrite_clj.zip.edn_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Create and return zipper from a rewrite-clj `node` (likely parsed by [[rewrite-clj.parser]]),
 *   and move to the first non-whitespace/non-comment child. If node is not forms node, is wrapped in forms node
 *   for a consistent root.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.of_node = (function rewrite_clj$zip$of_node(var_args){
var G__47078 = arguments.length;
switch (G__47078) {
case 1:
return rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.of_node.call(null,node);
}));

(rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.base.of_node.call(null,node,opts);
}));

(rewrite_clj.zip.of_node.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED. Renamed to [[of-node]].
 */
rewrite_clj.zip.edn = (function rewrite_clj$zip$edn(var_args){
var G__47081 = arguments.length;
switch (G__47081) {
case 1:
return rewrite_clj.zip.edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.edn.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn.call(null,node);
}));

(rewrite_clj.zip.edn.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.base.edn.call(null,node,opts);
}));

(rewrite_clj.zip.edn.cljs$lang$maxFixedArity = 2);

/**
 * Return tag of current node in `zloc`.
 */
rewrite_clj.zip.tag = (function rewrite_clj$zip$tag(zloc){
return rewrite_clj.zip.base.tag.call(null,zloc);
});
/**
 * Return s-expression (the Clojure form) of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.sexpr = (function rewrite_clj$zip$sexpr(zloc){
return rewrite_clj.zip.base.sexpr.call(null,zloc);
});
/**
 * Return true if current node's element type in `zloc` can be [[sexpr]]-ed.
 * 
 * See [related docs in user guide](/doc/01-user-guide.adoc#not-all-clojure-is-sexpr-able)
 */
rewrite_clj.zip.sexpr_able_QMARK_ = (function rewrite_clj$zip$sexpr_able_QMARK_(zloc){
return rewrite_clj.zip.base.sexpr_able_QMARK_.call(null,zloc);
});
/**
 * Return length of printable [[string]] of current node in `zloc`.
 */
rewrite_clj.zip.length = (function rewrite_clj$zip$length(zloc){
return rewrite_clj.zip.base.length.call(null,zloc);
});
/**
 * DEPRECATED. Return a tag/s-expression pair for inner nodes, or
 * the s-expression itself for leaves.
 */
rewrite_clj.zip.value = (function rewrite_clj$zip$value(zloc){
return rewrite_clj.zip.base.value.call(null,zloc);
});
/**
 * Create and return zipper from all forms in Clojure/ClojureScript/EDN string `s`.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.of_string = (function rewrite_clj$zip$of_string(var_args){
var G__47084 = arguments.length;
switch (G__47084) {
case 1:
return rewrite_clj.zip.of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.of_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_clj.zip.base.of_string.call(null,s);
}));

(rewrite_clj.zip.of_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return rewrite_clj.zip.base.of_string.call(null,s,opts);
}));

(rewrite_clj.zip.of_string.cljs$lang$maxFixedArity = 2);

/**
 * Return string representing the current node in `zloc`.
 */
rewrite_clj.zip.string = (function rewrite_clj$zip$string(zloc){
return rewrite_clj.zip.base.string.call(null,zloc);
});
/**
 * DEPRECATED. Renamed to [[string]].
 */
rewrite_clj.zip.__GT_string = (function rewrite_clj$zip$__GT_string(zloc){
return rewrite_clj.zip.base.__GT_string.call(null,zloc);
});
/**
 * Return string representing the zipped-up `zloc` zipper.
 */
rewrite_clj.zip.root_string = (function rewrite_clj$zip$root_string(zloc){
return rewrite_clj.zip.base.root_string.call(null,zloc);
});
/**
 * DEPRECATED. Renamed to [[root-string]].
 */
rewrite_clj.zip.__GT_root_string = (function rewrite_clj$zip$__GT_root_string(zloc){
return rewrite_clj.zip.base.__GT_root_string.call(null,zloc);
});
/**
 * Print current node in `zloc`.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.print = (function rewrite_clj$zip$print(var_args){
var G__47087 = arguments.length;
switch (G__47087) {
case 2:
return rewrite_clj.zip.print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.print.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
return rewrite_clj.zip.base.print.call(null,zloc,writer);
}));

(rewrite_clj.zip.print.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print.call(null,zloc);
}));

(rewrite_clj.zip.print.cljs$lang$maxFixedArity = 2);

/**
 * Zip up and print `zloc` from root node.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.print_root = (function rewrite_clj$zip$print_root(var_args){
var G__47090 = arguments.length;
switch (G__47090) {
case 2:
return rewrite_clj.zip.print_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.print_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.print_root.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
return rewrite_clj.zip.base.print_root.call(null,zloc,writer);
}));

(rewrite_clj.zip.print_root.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print_root.call(null,zloc);
}));

(rewrite_clj.zip.print_root.cljs$lang$maxFixedArity = 2);

/**
 * Return `zloc` with the current node replaced by `item`.
 *   If `item` is not already a node, an attempt will be made to coerce it to one.
 * 
 *   Use [[replace*]] for non-coercing version of replace.
 */
rewrite_clj.zip.replace = (function rewrite_clj$zip$replace(zloc,item){
return rewrite_clj.zip.editz.replace.call(null,zloc,item);
});
/**
 * Return `zloc` with the current node replaced with the result of:
 * 
 * `(apply f (s-expr current-node) args)`
 * 
 *   The result of `f`, if not already a node, will be coerced to a node if possible.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 * 
 *   Use [[edit*]] for non-coercing version of edit.
 */
rewrite_clj.zip.edit = (function rewrite_clj$zip$edit(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47095 = arguments.length;
var i__22083__auto___47096 = (0);
while(true){
if((i__22083__auto___47096 < len__22082__auto___47095)){
args__22092__auto__.push((arguments[i__22083__auto___47096]));

var G__47097 = (i__22083__auto___47096 + (1));
i__22083__auto___47096 = G__47097;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return rewrite_clj.zip.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(rewrite_clj.zip.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
return cljs.core.apply.call(null,rewrite_clj.zip.editz.edit,zloc,f,args);
}));

(rewrite_clj.zip.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.zip.edit.cljs$lang$applyTo = (function (seq47092){
var G__47093 = cljs.core.first.call(null,seq47092);
var seq47092__$1 = cljs.core.next.call(null,seq47092);
var G__47094 = cljs.core.first.call(null,seq47092__$1);
var seq47092__$2 = cljs.core.next.call(null,seq47092__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47093,G__47094,seq47092__$2);
}));

/**
 * Return zipper with the children of the current node in `zloc` merged into itself.
 * (akin to Clojure's `unquote-splicing` macro: `~@...`).
 * - if the node is not one that can have children, no modification will
 *   be performed.
 * - if the node has no or only whitespace children, it will be removed.
 * - otherwise, splicing will be performed, moving the zipper to the first
 *   non-whitespace spliced child node.
 * 
 *   For example, given `[[1 2 3] 4 5 6]`, if zloc is located at vector `[1 2 3]`, a splice will result in raising the vector's children up `[1 2 3 4 5 6]` and locating the zipper at node `1`.
 */
rewrite_clj.zip.splice = (function rewrite_clj$zip$splice(zloc){
return rewrite_clj.zip.editz.splice.call(null,zloc);
});
/**
 * Return zipper with the current node in `zloc` prefixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, first line is prefixed.
 */
rewrite_clj.zip.prefix = (function rewrite_clj$zip$prefix(zloc,s){
return rewrite_clj.zip.editz.prefix.call(null,zloc,s);
});
/**
 * Return zipper with the current node in `zloc` suffixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, last line is suffixed.
 */
rewrite_clj.zip.suffix = (function rewrite_clj$zip$suffix(zloc,s){
return rewrite_clj.zip.editz.suffix.call(null,zloc,s);
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
rewrite_clj.zip.reapply_context = (function rewrite_clj$zip$reapply_context(zloc){
return rewrite_clj.zip.context.reapply_context.call(null,zloc);
});
/**
 * Return `zloc` located to the first node satisfying predicate `p?` else nil.
 * Search starts at the current node and continues via movement function `f`.
 * 
 * `f` defaults to [[right]]
 */
rewrite_clj.zip.find = (function rewrite_clj$zip$find(var_args){
var G__47099 = arguments.length;
switch (G__47099) {
case 2:
return rewrite_clj.zip.find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.find.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find.call(null,zloc,p_QMARK_);
}));

(rewrite_clj.zip.find.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find.call(null,zloc,f,p_QMARK_);
}));

(rewrite_clj.zip.find.cljs$lang$maxFixedArity = 3);

/**
 * Return `zloc` located to the next node satisfying predicate `p?` else `nil`.
 * Search starts one movement `f` from the current node and continues via `f`.
 * 
 * `f` defaults to [[right]]
 */
rewrite_clj.zip.find_next = (function rewrite_clj$zip$find_next(var_args){
var G__47102 = arguments.length;
switch (G__47102) {
case 2:
return rewrite_clj.zip.find_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.find_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.find_next.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next.call(null,zloc,p_QMARK_);
}));

(rewrite_clj.zip.find_next.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find_next.call(null,zloc,f,p_QMARK_);
}));

(rewrite_clj.zip.find_next.cljs$lang$maxFixedArity = 3);

/**
 * Return `zloc` located to the first node satisfying predicate `p?` else `nil`.
 * Search is depth-first from the current node.
 */
rewrite_clj.zip.find_depth_first = (function rewrite_clj$zip$find_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_depth_first.call(null,zloc,p_QMARK_);
});
/**
 * Return `zloc` located to next node satisfying predicate `p?` else `nil`.
 * Search starts depth-first after the current node.
 */
rewrite_clj.zip.find_next_depth_first = (function rewrite_clj$zip$find_next_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next_depth_first.call(null,zloc,p_QMARK_);
});
/**
 * Return `zloc` located to the first node with tag `t` else `nil`.
 * Search starts at the current node and continues via movement function `f`.
 * 
 * `f` defaults to [[right]]
 */
rewrite_clj.zip.find_tag = (function rewrite_clj$zip$find_tag(var_args){
var G__47105 = arguments.length;
switch (G__47105) {
case 2:
return rewrite_clj.zip.find_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.find_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.find_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_tag.call(null,zloc,t);
}));

(rewrite_clj.zip.find_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find_tag.call(null,zloc,f,t);
}));

(rewrite_clj.zip.find_tag.cljs$lang$maxFixedArity = 3);

/**
 * Return `zloc` located to the next node with tag `t` else `nil`.
 *   Search starts one movement `f` after the current node and continues via `f`.
 * 
 * `f` defaults to [[right]]
 */
rewrite_clj.zip.find_next_tag = (function rewrite_clj$zip$find_next_tag(var_args){
var G__47108 = arguments.length;
switch (G__47108) {
case 2:
return rewrite_clj.zip.find_next_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.find_next_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.find_next_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_next_tag.call(null,zloc,t);
}));

(rewrite_clj.zip.find_next_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find_next_tag.call(null,zloc,f,t);
}));

(rewrite_clj.zip.find_next_tag.cljs$lang$maxFixedArity = 3);

/**
 * Return `zloc` located to the first token node that `sexpr`esses to `v` else `nil`.
 * Search starts from the current node and continues via movement function `f`.
 * 
 * `v` can be a single value or a set. When `v` is a set, matches on any value in set.
 * 
 * `f` defaults to [[right]] in short form call.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.find_value = (function rewrite_clj$zip$find_value(var_args){
var G__47111 = arguments.length;
switch (G__47111) {
case 2:
return rewrite_clj.zip.find_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.find_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.find_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_value.call(null,zloc,v);
}));

(rewrite_clj.zip.find_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
return rewrite_clj.zip.findz.find_value.call(null,zloc,f,v);
}));

(rewrite_clj.zip.find_value.cljs$lang$maxFixedArity = 3);

/**
 * Return `zloc` located to the next token node that `sexpr`esses to `v` else `nil`.
 * Search starts one movement `f` from the current location, and continues via `f`.
 * 
 * `v` can be a single value or a set. When `v` is a set matches on any value in set.
 * 
 * `f` defaults to [[right]] in short form call.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.find_next_value = (function rewrite_clj$zip$find_next_value(var_args){
var G__47114 = arguments.length;
switch (G__47114) {
case 2:
return rewrite_clj.zip.find_next_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.find_next_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.find_next_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_next_value.call(null,zloc,v);
}));

(rewrite_clj.zip.find_next_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
return rewrite_clj.zip.findz.find_next_value.call(null,zloc,f,v);
}));

(rewrite_clj.zip.find_next_value.cljs$lang$maxFixedArity = 3);

/**
 * Return `zloc` located to the the first token node satisfying predicate `p?`.
 *   Search starts at the current node and continues via movement function `f`.
 * 
 * `f` defaults to [[right]]
 */
rewrite_clj.zip.find_token = (function rewrite_clj$zip$find_token(var_args){
var G__47117 = arguments.length;
switch (G__47117) {
case 2:
return rewrite_clj.zip.find_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.find_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.find_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_token.call(null,zloc,p_QMARK_);
}));

(rewrite_clj.zip.find_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find_token.call(null,zloc,f,p_QMARK_);
}));

(rewrite_clj.zip.find_token.cljs$lang$maxFixedArity = 3);

/**
 * Return `zloc` located to the next token node satisfying predicate `p?` else `nil`.
 *   Search starts one movement `f` after the current node and continues via `f`.
 * 
 * `f` defaults to [[right]]
 */
rewrite_clj.zip.find_next_token = (function rewrite_clj$zip$find_next_token(var_args){
var G__47120 = arguments.length;
switch (G__47120) {
case 2:
return rewrite_clj.zip.find_next_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.find_next_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.find_next_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next_token.call(null,zloc,p_QMARK_);
}));

(rewrite_clj.zip.find_next_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find_next_token.call(null,zloc,f,p_QMARK_);
}));

(rewrite_clj.zip.find_next_token.cljs$lang$maxFixedArity = 3);

/**
 * Return `zloc` located to the last node spanning position `pos` that satisfies predicate `p?` else `nil`.
 * Search is depth-first from the current node.
 * 
 *   NOTE: Does not ignore whitespace/comment nodes.
 */
rewrite_clj.zip.find_last_by_pos = (function rewrite_clj$zip$find_last_by_pos(var_args){
var G__47123 = arguments.length;
switch (G__47123) {
case 2:
return rewrite_clj.zip.find_last_by_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.find_last_by_pos.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.find_last_by_pos.cljs$core$IFn$_invoke$arity$2 = (function (zloc,pos){
return rewrite_clj.zip.findz.find_last_by_pos.call(null,zloc,pos);
}));

(rewrite_clj.zip.find_last_by_pos.cljs$core$IFn$_invoke$arity$3 = (function (zloc,pos,p_QMARK_){
return rewrite_clj.zip.findz.find_last_by_pos.call(null,zloc,pos,p_QMARK_);
}));

(rewrite_clj.zip.find_last_by_pos.cljs$lang$maxFixedArity = 3);

/**
 * Return `zloc` located to the last node spanning position `pos` with tag `t` else `nil`.
 *   Search is depth-first from the current node.
 */
rewrite_clj.zip.find_tag_by_pos = (function rewrite_clj$zip$find_tag_by_pos(zloc,pos,t){
return rewrite_clj.zip.findz.find_tag_by_pos.call(null,zloc,pos,t);
});
/**
 * Return zipper with `item` inserted to the right of the current node in `zloc`, without moving location.
 *   If `item` is not already a node, an attempt will be made to coerce it to one.
 * 
 *   Will insert a space if necessary.
 * 
 *   Use [[rewrite-clj.zip/insert-right*]] to insert without adding any whitespace.
 */
rewrite_clj.zip.insert_right = (function rewrite_clj$zip$insert_right(zloc,item){
return rewrite_clj.zip.insert.insert_right.call(null,zloc,item);
});
/**
 * Return zipper with `item` inserted to the left of the current node in `zloc`, without moving location.
 *   Will insert a space if necessary.
 *   If `item` is not already a node, an attempt will be made to coerce it to one.
 * 
 *   Use [[insert-left*]] to insert without adding any whitespace.
 */
rewrite_clj.zip.insert_left = (function rewrite_clj$zip$insert_left(zloc,item){
return rewrite_clj.zip.insert.insert_left.call(null,zloc,item);
});
/**
 * Return zipper with `item` inserted as the first child of the current node in `zloc`, without moving location.
 *   Will insert a space if necessary.
 *   If `item` is not already a node, an attempt will be made to coerce it to one.
 * 
 *   Use [[insert-child*]] to insert without adding any whitespace.
 */
rewrite_clj.zip.insert_child = (function rewrite_clj$zip$insert_child(zloc,item){
return rewrite_clj.zip.insert.insert_child.call(null,zloc,item);
});
/**
 * Return zipper with `item` inserted as the last child of the current node in `zloc`, without moving.
 *   Will insert a space if necessary.
 *   If `item` is not already a node, an attempt will be made to coerce it to one.
 * 
 *   Use [[append-child*]] to append without adding any whitespace.
 */
rewrite_clj.zip.append_child = (function rewrite_clj$zip$append_child(zloc,item){
return rewrite_clj.zip.insert.append_child.call(null,zloc,item);
});
/**
 * Return zipper with location moved left to next non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.left = (function rewrite_clj$zip$left(zloc){
return rewrite_clj.zip.move.left.call(null,zloc);
});
/**
 * Return zipper with location moved right to next non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.right = (function rewrite_clj$zip$right(zloc){
return rewrite_clj.zip.move.right.call(null,zloc);
});
/**
 * Return zipper with location moved up to next non-whitespace/non-comment parent of current node in `zloc`, or `nil` if at the top.
 */
rewrite_clj.zip.up = (function rewrite_clj$zip$up(zloc){
return rewrite_clj.zip.move.up.call(null,zloc);
});
/**
 * Return zipper with location moved down to the first non-whitespace/non-comment child node of the current node in `zloc`, or nil if no applicable children.
 */
rewrite_clj.zip.down = (function rewrite_clj$zip$down(zloc){
return rewrite_clj.zip.move.down.call(null,zloc);
});
/**
 * Return zipper with location moved to the previous depth-first non-whitespace/non-comment node in `zloc`. If already at root, returns nil.
 */
rewrite_clj.zip.prev = (function rewrite_clj$zip$prev(zloc){
return rewrite_clj.zip.move.prev.call(null,zloc);
});
/**
 * Return zipper with location moved to the next depth-first non-whitespace/non-comment node in `zloc`.
 * End can be detected with [[end?]], if already at end, stays there.
 */
rewrite_clj.zip.next = (function rewrite_clj$zip$next(zloc){
return rewrite_clj.zip.move.next.call(null,zloc);
});
/**
 * Return zipper with location moved to the leftmost non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.leftmost = (function rewrite_clj$zip$leftmost(zloc){
return rewrite_clj.zip.move.leftmost.call(null,zloc);
});
/**
 * Return zipper with location moved to the rightmost non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.rightmost = (function rewrite_clj$zip$rightmost(zloc){
return rewrite_clj.zip.move.rightmost.call(null,zloc);
});
/**
 * Return true if at leftmost non-whitespace/non-comment sibling node in `zloc`.
 */
rewrite_clj.zip.leftmost_QMARK_ = (function rewrite_clj$zip$leftmost_QMARK_(zloc){
return rewrite_clj.zip.move.leftmost_QMARK_.call(null,zloc);
});
/**
 * Return true if at rightmost non-whitespace/non-comment sibling node in `zloc`.
 */
rewrite_clj.zip.rightmost_QMARK_ = (function rewrite_clj$zip$rightmost_QMARK_(zloc){
return rewrite_clj.zip.move.rightmost_QMARK_.call(null,zloc);
});
/**
 * Return true if `zloc` is at end of depth-first traversal.
 */
rewrite_clj.zip.end_QMARK_ = (function rewrite_clj$zip$end_QMARK_(zloc){
return rewrite_clj.zip.move.end_QMARK_.call(null,zloc);
});
/**
 * Return `zloc` with current node removed. Returned zipper location
 * is moved to the first non-whitespace node preceding removed node in a depth-first walk.
 * Removes whitespace appropriately.
 * 
 *   - `[1 |2  3]    => [|1 3]`
 *   - `[1 |2]       => [|1]`
 *   - `[|1 2]       => |[2]`
 *   - `[|1]         => |[]`
 *   - `[  |1  ]     => |[]`
 *   - `[1 [2 3] |4] => [1 [2 |3]]`
 *   - `[|1 [2 3] 4] => |[[2 3] 4]`
 * 
 * If the removed node is a rightmost sibling, both leading and trailing whitespace
 * is removed, otherwise only trailing whitespace is removed.
 * 
 * The result is that a following element (no matter whether it is on the same line
 * or not) will end up at same positon (line/column) as the removed one.
 * If a comment lies betwen the original node and the neighbour this will not hold true.
 * 
 * If the removed node is at end of input and is trailed by 1 or more newlines,
 * a single trailing newline will be preserved.
 * 
 * Use [[remove*]] to remove node without removing any surrounding whitespace.
 */
rewrite_clj.zip.remove = (function rewrite_clj$zip$remove(zloc){
return rewrite_clj.zip.removez.remove.call(null,zloc);
});
/**
 * Same as [[remove]] but preserves newlines.
 * Specifically: will trim all whitespace - or whitespace up to first linebreak if present.
 */
rewrite_clj.zip.remove_preserve_newline = (function rewrite_clj$zip$remove_preserve_newline(zloc){
return rewrite_clj.zip.removez.remove_preserve_newline.call(null,zloc);
});
/**
 * Returns true if current node in `zloc` is a sequence.
 */
rewrite_clj.zip.seq_QMARK_ = (function rewrite_clj$zip$seq_QMARK_(zloc){
return rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc);
});
/**
 * Returns true if current node in `zloc` is a list.
 */
rewrite_clj.zip.list_QMARK_ = (function rewrite_clj$zip$list_QMARK_(zloc){
return rewrite_clj.zip.seqz.list_QMARK_.call(null,zloc);
});
/**
 * Returns true if current node in `zloc` is a vector.
 */
rewrite_clj.zip.vector_QMARK_ = (function rewrite_clj$zip$vector_QMARK_(zloc){
return rewrite_clj.zip.seqz.vector_QMARK_.call(null,zloc);
});
/**
 * Returns true if current node in `zloc` is a set.
 */
rewrite_clj.zip.set_QMARK_ = (function rewrite_clj$zip$set_QMARK_(zloc){
return rewrite_clj.zip.seqz.set_QMARK_.call(null,zloc);
});
/**
 * Returns true if current node in `zloc` is a map.
 */
rewrite_clj.zip.map_QMARK_ = (function rewrite_clj$zip$map_QMARK_(zloc){
return rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc);
});
/**
 * Returns true if the current node in `zloc` is a namespaced map.
 */
rewrite_clj.zip.namespaced_map_QMARK_ = (function rewrite_clj$zip$namespaced_map_QMARK_(zloc){
return rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc);
});
/**
 * Returns `zloc` with function `f` applied to all nodes of the current node.
 *   Current node must be a sequence node. Equivalent to [[rewrite-clj.zip/map-vals]] for maps.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `f` arg is zloc positioned at
 *   - value nodes for maps
 *   - each element of a seq
 *   and is should return:
 *   - an updated zloc with zloc positioned at edited node
 *   - a falsey value to leave value node unchanged
 * 
 *   Folks typically use [[edit]] for `f`.
 */
rewrite_clj.zip.map = (function rewrite_clj$zip$map(f,zloc){
return rewrite_clj.zip.seqz.map.call(null,f,zloc);
});
/**
 * Returns `zloc` with function `f` applied to all key nodes of the current node.
 * Current node must be map node.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `f` arg is zloc positioned at key node and should return:
 *   - an updated zloc with zloc positioned at key node
 *   - a falsey value to leave value node unchanged
 * 
 *   Folks typically use [[rewrite-clj.zip/edit]] for `f`.
 */
rewrite_clj.zip.map_keys = (function rewrite_clj$zip$map_keys(f,zloc){
return rewrite_clj.zip.seqz.map_keys.call(null,f,zloc);
});
/**
 * Returns `zloc` with function `f` applied to each value node of the current node.
 * Current node must be map node.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `f` arg is zloc positioned at value node and should return:
 *   - an updated zloc with zloc positioned at value node
 *   - a falsey value to leave value node unchanged
 * 
 *   Folks typically use [[edit]] for `f`.
 */
rewrite_clj.zip.map_vals = (function rewrite_clj$zip$map_vals(f,zloc){
return rewrite_clj.zip.seqz.map_vals.call(null,f,zloc);
});
/**
 * Returns `zloc` located to map key node's sexpr value matching `k` else `nil`.
 * 
 *   `k` should be:
 *   - a key for maps
 *   - a zero-based index for sequences
 * 
 *   NOTE: `k` will be compared against resolved keywords in maps.
 *   See docs for sexpr behavior on [namespaced elements](/doc/01-user-guide.adoc#namespaced-elements).
 */
rewrite_clj.zip.get = (function rewrite_clj$zip$get(zloc,k){
return rewrite_clj.zip.seqz.get.call(null,zloc,k);
});
/**
 * Returns `zloc` with current node's `k` set to value `v`.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `k` should be:
 *   - a key for maps
 *   - a zero-based index for sequences, an exception is thrown if index is out of bounds
 * 
 *   NOTE: `k` will be compared against resolved keywords in maps.
 *   See docs for sexpr behavior on [namespaced elements](/doc/01-user-guide.adoc#namespaced-elements).
 */
rewrite_clj.zip.assoc = (function rewrite_clj$zip$assoc(zloc,k,v){
return rewrite_clj.zip.seqz.assoc.call(null,zloc,k,v);
});
/**
 * Return zipper applying function `f` to `zloc`. The resulting
 * zipper will be located at the same path (i.e. the same number of
 * downwards and right movements from the root) incoming `zloc`.
 * 
 * See also [[subedit-node]] for an isolated edit.
 */
rewrite_clj.zip.edit_node = (function rewrite_clj$zip$edit_node(zloc,f){
return rewrite_clj.zip.subedit.edit_node.call(null,zloc,f);
});
/**
 * Return zipper replacing current node in `zloc` with result of `f` applied to said node as an isolated sub-tree.
 * The resulting zipper will be located on the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit_node = (function rewrite_clj$zip$subedit_node(zloc,f){
return rewrite_clj.zip.subedit.subedit_node.call(null,zloc,f);
});
/**
 * Create and return a zipper whose root is the current node in `zloc`.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subzip = (function rewrite_clj$zip$subzip(zloc){
return rewrite_clj.zip.subedit.subzip.call(null,zloc);
});
var ret__22143__auto___47129 = (function (){
/**
 * Like `->`, threads `zloc` through forms.
 * The resulting zipper will be located at the same path (i.e. the same
 * number of downwards and right movements from the root) as incoming `zloc`.
 * 
 * See also [[subedit->]] for an isolated edit.
 */
rewrite_clj.zip.edit__GT_ = (function rewrite_clj$zip$edit__GT_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47130 = arguments.length;
var i__22083__auto___47131 = (0);
while(true){
if((i__22083__auto___47131 < len__22082__auto___47130)){
args__22092__auto__.push((arguments[i__22083__auto___47131]));

var G__47132 = (i__22083__auto___47131 + (1));
i__22083__auto___47131 = G__47132;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.edit__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(rewrite_clj.zip.edit__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","edit->","rewrite-clj.zip.subedit/edit->",-892982458,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),body)));
}));

(rewrite_clj.zip.edit__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.edit__GT_.cljs$lang$applyTo = (function (seq47125){
var G__47126 = cljs.core.first.call(null,seq47125);
var seq47125__$1 = cljs.core.next.call(null,seq47125);
var G__47127 = cljs.core.first.call(null,seq47125__$1);
var seq47125__$2 = cljs.core.next.call(null,seq47125__$1);
var G__47128 = cljs.core.first.call(null,seq47125__$2);
var seq47125__$3 = cljs.core.next.call(null,seq47125__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47126,G__47127,G__47128,seq47125__$3);
}));

return null;
})()
;
(rewrite_clj.zip.edit__GT_.cljs$lang$macro = true);

var ret__22143__auto___47137 = (function (){
/**
 * Like `->>`, threads `zloc` through forms.
 * The resulting zipper will be located at the same path (i.e. the same
 * number of downwards and right movements from the root) as incoming `zloc`.
 * 
 * See also [[subedit->>]] for an isolated edit.
 */
rewrite_clj.zip.edit__GT__GT_ = (function rewrite_clj$zip$edit__GT__GT_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47138 = arguments.length;
var i__22083__auto___47139 = (0);
while(true){
if((i__22083__auto___47139 < len__22082__auto___47138)){
args__22092__auto__.push((arguments[i__22083__auto___47139]));

var G__47140 = (i__22083__auto___47139 + (1));
i__22083__auto___47139 = G__47140;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.edit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(rewrite_clj.zip.edit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","edit->>","rewrite-clj.zip.subedit/edit->>",-1789363744,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),body)));
}));

(rewrite_clj.zip.edit__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.edit__GT__GT_.cljs$lang$applyTo = (function (seq47133){
var G__47134 = cljs.core.first.call(null,seq47133);
var seq47133__$1 = cljs.core.next.call(null,seq47133);
var G__47135 = cljs.core.first.call(null,seq47133__$1);
var seq47133__$2 = cljs.core.next.call(null,seq47133__$1);
var G__47136 = cljs.core.first.call(null,seq47133__$2);
var seq47133__$3 = cljs.core.next.call(null,seq47133__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47134,G__47135,G__47136,seq47133__$3);
}));

return null;
})()
;
(rewrite_clj.zip.edit__GT__GT_.cljs$lang$macro = true);

var ret__22143__auto___47145 = (function (){
/**
 * Like `->`, threads `zloc`, as an isolated sub-tree through forms, then zips
 * up to, and locates at, the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit__GT_ = (function rewrite_clj$zip$subedit__GT_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47146 = arguments.length;
var i__22083__auto___47147 = (0);
while(true){
if((i__22083__auto___47147 < len__22082__auto___47146)){
args__22092__auto__.push((arguments[i__22083__auto___47147]));

var G__47148 = (i__22083__auto___47147 + (1));
i__22083__auto___47147 = G__47148;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(rewrite_clj.zip.subedit__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","subedit->","rewrite-clj.zip.subedit/subedit->",703400761,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),body)));
}));

(rewrite_clj.zip.subedit__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit__GT_.cljs$lang$applyTo = (function (seq47141){
var G__47142 = cljs.core.first.call(null,seq47141);
var seq47141__$1 = cljs.core.next.call(null,seq47141);
var G__47143 = cljs.core.first.call(null,seq47141__$1);
var seq47141__$2 = cljs.core.next.call(null,seq47141__$1);
var G__47144 = cljs.core.first.call(null,seq47141__$2);
var seq47141__$3 = cljs.core.next.call(null,seq47141__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47142,G__47143,G__47144,seq47141__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit__GT_.cljs$lang$macro = true);

var ret__22143__auto___47153 = (function (){
/**
 * Like `->`. Threads `zloc`, as an isolated sub-tree through forms, then zips
 *    up to, and locates at, the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit__GT__GT_ = (function rewrite_clj$zip$subedit__GT__GT_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47154 = arguments.length;
var i__22083__auto___47155 = (0);
while(true){
if((i__22083__auto___47155 < len__22082__auto___47154)){
args__22092__auto__.push((arguments[i__22083__auto___47155]));

var G__47156 = (i__22083__auto___47155 + (1));
i__22083__auto___47155 = G__47156;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(rewrite_clj.zip.subedit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","subedit->>","rewrite-clj.zip.subedit/subedit->>",1446337507,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),body)));
}));

(rewrite_clj.zip.subedit__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit__GT__GT_.cljs$lang$applyTo = (function (seq47149){
var G__47150 = cljs.core.first.call(null,seq47149);
var seq47149__$1 = cljs.core.next.call(null,seq47149);
var G__47151 = cljs.core.first.call(null,seq47149__$1);
var seq47149__$2 = cljs.core.next.call(null,seq47149__$1);
var G__47152 = cljs.core.first.call(null,seq47149__$2);
var seq47149__$3 = cljs.core.next.call(null,seq47149__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47150,G__47151,G__47152,seq47149__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit__GT__GT_.cljs$lang$macro = true);

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
rewrite_clj.zip.prewalk = (function rewrite_clj$zip$prewalk(var_args){
var G__47158 = arguments.length;
switch (G__47158) {
case 2:
return rewrite_clj.zip.prewalk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.prewalk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.prewalk.cljs$core$IFn$_invoke$arity$2 = (function (zloc,f){
return rewrite_clj.zip.walk.prewalk.call(null,zloc,f);
}));

(rewrite_clj.zip.prewalk.cljs$core$IFn$_invoke$arity$3 = (function (zloc,p_QMARK_,f){
return rewrite_clj.zip.walk.prewalk.call(null,zloc,p_QMARK_,f);
}));

(rewrite_clj.zip.prewalk.cljs$lang$maxFixedArity = 3);

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
rewrite_clj.zip.postwalk = (function rewrite_clj$zip$postwalk(var_args){
var G__47161 = arguments.length;
switch (G__47161) {
case 2:
return rewrite_clj.zip.postwalk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.postwalk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.postwalk.cljs$core$IFn$_invoke$arity$2 = (function (zloc,f){
return rewrite_clj.zip.walk.postwalk.call(null,zloc,f);
}));

(rewrite_clj.zip.postwalk.cljs$core$IFn$_invoke$arity$3 = (function (zloc,p_QMARK_,f){
return rewrite_clj.zip.walk.postwalk.call(null,zloc,p_QMARK_,f);
}));

(rewrite_clj.zip.postwalk.cljs$lang$maxFixedArity = 3);

/**
 * Returns true when the current the node in `zloc` is a Clojure whitespace (which includes the comma).
 */
rewrite_clj.zip.whitespace_QMARK_ = (function rewrite_clj$zip$whitespace_QMARK_(zloc){
return rewrite_clj.zip.whitespace.whitespace_QMARK_.call(null,zloc);
});
/**
 * Returns true when the current node in `zloc` is a linebreak.
 */
rewrite_clj.zip.linebreak_QMARK_ = (function rewrite_clj$zip$linebreak_QMARK_(zloc){
return rewrite_clj.zip.whitespace.linebreak_QMARK_.call(null,zloc);
});
/**
 * Returns true when current node in `zloc` is whitespace or a comment.
 */
rewrite_clj.zip.whitespace_or_comment_QMARK_ = (function rewrite_clj$zip$whitespace_or_comment_QMARK_(zloc){
return rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_.call(null,zloc);
});
/**
 * Return zipper with location moved to first location not satisfying predicate `p?` starting from the node in
 * `zloc` and traversing by function `f`.
 */
rewrite_clj.zip.skip = (function rewrite_clj$zip$skip(f,p_QMARK_,zloc){
return rewrite_clj.zip.whitespace.skip.call(null,f,p_QMARK_,zloc);
});
/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc`
 * and traversing by function `f`.
 * 
 * `f` defaults to [[right]]
 */
rewrite_clj.zip.skip_whitespace = (function rewrite_clj$zip$skip_whitespace(var_args){
var G__47164 = arguments.length;
switch (G__47164) {
case 1:
return rewrite_clj.zip.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,zloc);
}));

(rewrite_clj.zip.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,f,zloc);
}));

(rewrite_clj.zip.skip_whitespace.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc` traversing left.
 */
rewrite_clj.zip.skip_whitespace_left = (function rewrite_clj$zip$skip_whitespace_left(zloc){
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,zloc);
});
/**
 * Return zipper with `n` space whitespace node inserted to the left of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.insert_space_left = (function rewrite_clj$zip$insert_space_left(var_args){
var G__47167 = arguments.length;
switch (G__47167) {
case 1:
return rewrite_clj.zip.insert_space_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.insert_space_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.insert_space_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_space_left.call(null,zloc);
}));

(rewrite_clj.zip.insert_space_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_space_left.call(null,zloc,n);
}));

(rewrite_clj.zip.insert_space_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` space whitespace node inserted to the right of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.insert_space_right = (function rewrite_clj$zip$insert_space_right(var_args){
var G__47170 = arguments.length;
switch (G__47170) {
case 1:
return rewrite_clj.zip.insert_space_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.insert_space_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.insert_space_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_space_right.call(null,zloc);
}));

(rewrite_clj.zip.insert_space_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_space_right.call(null,zloc,n);
}));

(rewrite_clj.zip.insert_space_right.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the left of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.insert_newline_left = (function rewrite_clj$zip$insert_newline_left(var_args){
var G__47173 = arguments.length;
switch (G__47173) {
case 1:
return rewrite_clj.zip.insert_newline_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.insert_newline_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.insert_newline_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_newline_left.call(null,zloc);
}));

(rewrite_clj.zip.insert_newline_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_newline_left.call(null,zloc,n);
}));

(rewrite_clj.zip.insert_newline_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the right of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.insert_newline_right = (function rewrite_clj$zip$insert_newline_right(var_args){
var G__47176 = arguments.length;
switch (G__47176) {
case 1:
return rewrite_clj.zip.insert_newline_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.insert_newline_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.insert_newline_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_newline_right.call(null,zloc);
}));

(rewrite_clj.zip.insert_newline_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_newline_right.call(null,zloc,n);
}));

(rewrite_clj.zip.insert_newline_right.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-space-left]].
 */
rewrite_clj.zip.prepend_space = (function rewrite_clj$zip$prepend_space(var_args){
var G__47179 = arguments.length;
switch (G__47179) {
case 2:
return rewrite_clj.zip.prepend_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.prepend_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.prepend_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.prepend_space.call(null,zloc,n);
}));

(rewrite_clj.zip.prepend_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_space.call(null,zloc);
}));

(rewrite_clj.zip.prepend_space.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-space-right]].
 */
rewrite_clj.zip.append_space = (function rewrite_clj$zip$append_space(var_args){
var G__47182 = arguments.length;
switch (G__47182) {
case 2:
return rewrite_clj.zip.append_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.append_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.append_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.append_space.call(null,zloc,n);
}));

(rewrite_clj.zip.append_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_space.call(null,zloc);
}));

(rewrite_clj.zip.append_space.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-newline-left]].
 */
rewrite_clj.zip.prepend_newline = (function rewrite_clj$zip$prepend_newline(var_args){
var G__47185 = arguments.length;
switch (G__47185) {
case 2:
return rewrite_clj.zip.prepend_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.prepend_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.prepend_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.prepend_newline.call(null,zloc,n);
}));

(rewrite_clj.zip.prepend_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_newline.call(null,zloc);
}));

(rewrite_clj.zip.prepend_newline.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-newline-right]].
 */
rewrite_clj.zip.append_newline = (function rewrite_clj$zip$append_newline(var_args){
var G__47188 = arguments.length;
switch (G__47188) {
case 2:
return rewrite_clj.zip.append_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.append_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.append_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.append_newline.call(null,zloc,n);
}));

(rewrite_clj.zip.append_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_newline.call(null,zloc);
}));

(rewrite_clj.zip.append_newline.cljs$lang$maxFixedArity = 2);

/**
 * Raw version of [[right]].
 * 
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.right_STAR_ = (function rewrite_clj$zip$right_STAR_(zloc){
return rewrite_clj.custom_zipper.core.right.call(null,zloc);
});
/**
 * Raw version of [[left]].
 * 
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.left_STAR_ = (function rewrite_clj$zip$left_STAR_(zloc){
return rewrite_clj.custom_zipper.core.left.call(null,zloc);
});
/**
 * Raw version of [[up]].
 * 
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.up_STAR_ = (function rewrite_clj$zip$up_STAR_(zloc){
return rewrite_clj.custom_zipper.core.up.call(null,zloc);
});
/**
 * Raw version of [[down]].
 * 
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.down_STAR_ = (function rewrite_clj$zip$down_STAR_(zloc){
return rewrite_clj.custom_zipper.core.down.call(null,zloc);
});
/**
 * Raw version of [[next]].
 * 
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.next_STAR_ = (function rewrite_clj$zip$next_STAR_(zloc){
return rewrite_clj.custom_zipper.core.next.call(null,zloc);
});
/**
 * Raw version of [[prev]].
 * 
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.prev_STAR_ = (function rewrite_clj$zip$prev_STAR_(zloc){
return rewrite_clj.custom_zipper.core.prev.call(null,zloc);
});
/**
 * Raw version of [[rightmost]].
 * 
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.rightmost_STAR_ = (function rewrite_clj$zip$rightmost_STAR_(zloc){
return rewrite_clj.custom_zipper.core.rightmost.call(null,zloc);
});
/**
 * Raw version of [[leftmost]].
 * 
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.leftmost_STAR_ = (function rewrite_clj$zip$leftmost_STAR_(zloc){
return rewrite_clj.custom_zipper.core.leftmost.call(null,zloc);
});
/**
 * Raw version of [[remove]].
 * 
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.remove_STAR_ = (function rewrite_clj$zip$remove_STAR_(zloc){
return rewrite_clj.custom_zipper.core.remove.call(null,zloc);
});
/**
 * Raw version of [[replace]].
 * 
 * Returns zipper with node `item` replacing current node in `zloc`, without moving location.
 * 
 * NOTE: This function does no coercion, does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.replace_STAR_ = (function rewrite_clj$zip$replace_STAR_(zloc,item){
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,item);
});
/**
 * Raw version of [[edit]].
 * 
 * Returns zipper with value of `(apply f current-node args)` replacing current node in `zloc`.
 * 
 * The result of `f` should be a rewrite-clj node.
 * 
 * NOTE: This function does no coercion, does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.edit_STAR_ = (function rewrite_clj$zip$edit_STAR_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___47193 = arguments.length;
var i__22083__auto___47194 = (0);
while(true){
if((i__22083__auto___47194 < len__22082__auto___47193)){
args__22092__auto__.push((arguments[i__22083__auto___47194]));

var G__47195 = (i__22083__auto___47194 + (1));
i__22083__auto___47194 = G__47195;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return rewrite_clj.zip.edit_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(rewrite_clj.zip.edit_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
return cljs.core.apply.call(null,rewrite_clj.custom_zipper.core.edit,zloc,f,args);
}));

(rewrite_clj.zip.edit_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.zip.edit_STAR_.cljs$lang$applyTo = (function (seq47190){
var G__47191 = cljs.core.first.call(null,seq47190);
var seq47190__$1 = cljs.core.next.call(null,seq47190);
var G__47192 = cljs.core.first.call(null,seq47190__$1);
var seq47190__$2 = cljs.core.next.call(null,seq47190__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47191,G__47192,seq47190__$2);
}));

/**
 * Raw version of [[insert-left]].
 * 
 * Returns zipper with node `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 * 
 * NOTE: This function does no coercion, does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.insert_left_STAR_ = (function rewrite_clj$zip$insert_left_STAR_(zloc,item){
return rewrite_clj.custom_zipper.core.insert_left.call(null,zloc,item);
});
/**
 * Raw version of [[insert-right]].
 * 
 * Returns zipper with node `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 * 
 * NOTE: This function does no coercion, does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.insert_right_STAR_ = (function rewrite_clj$zip$insert_right_STAR_(zloc,item){
return rewrite_clj.custom_zipper.core.insert_right.call(null,zloc,item);
});
/**
 * Raw version of [[insert-child]].
 * 
 * Returns zipper with node `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 * 
 * NOTE: This function does no coercion, does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.insert_child_STAR_ = (function rewrite_clj$zip$insert_child_STAR_(zloc,item){
return rewrite_clj.custom_zipper.core.insert_child.call(null,zloc,item);
});
/**
 * Raw version of [[append-child]].
 * 
 * Returns zipper with node `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 * 
 * NOTE: This function does no coercion, does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_clj.zip.append_child_STAR_ = (function rewrite_clj$zip$append_child_STAR_(zloc,item){
return rewrite_clj.custom_zipper.core.append_child.call(null,zloc,item);
});
