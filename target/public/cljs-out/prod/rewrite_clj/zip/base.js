// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.zip.base');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.node.forms');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip.options');
goog.require('rewrite_clj.zip.whitespace');
/**
 * Create and return zipper from a rewrite-clj `node` (likely parsed by [[rewrite-clj.parser]]).
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.of_node_STAR_ = (function rewrite_clj$zip$base$of_node_STAR_(var_args){
var G__44908 = arguments.length;
switch (G__44908) {
case 1:
return rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.of_node_STAR_.call(null,node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.options.set_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"track-position?","track-position?",1860535489).cljs$core$IFn$_invoke$arity$1(opts))?rewrite_clj.custom_zipper.core.custom_zipper.call(null,node):rewrite_clj.custom_zipper.core.zipper.call(null,node)),opts);
}));

(rewrite_clj.zip.base.of_node_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Create and return zipper from a rewrite-clj `node` (likely parsed by [[rewrite-clj.parser]]),
 *   and move to the first non-whitespace/non-comment child. If node is not forms node, is wrapped in forms node
 *   for a consistent root.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.of_node = (function rewrite_clj$zip$base$of_node(var_args){
var G__44911 = arguments.length;
switch (G__44911) {
case 1:
return rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.of_node.call(null,node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
var node__$1 = node;
var opts__$1 = opts;
while(true){
if(cljs.core._EQ_.call(null,rewrite_clj.node.protocols.tag.call(null,node__$1),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.of_node_STAR_.call(null,node__$1,opts__$1);
var or__20754__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,rewrite_clj.custom_zipper.core.down.call(null,top));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return top;
}
} else {
var G__44913 = rewrite_clj.node.forms.forms_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node__$1], null));
var G__44914 = opts__$1;
node__$1 = G__44913;
opts__$1 = G__44914;
continue;
}
break;
}
}));

(rewrite_clj.zip.base.of_node.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED. Renamed to [[of-node*]].
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(var_args){
var G__44916 = arguments.length;
switch (G__44916) {
case 1:
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn_STAR_.call(null,node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.base.of_node_STAR_.call(null,node,opts);
}));

(rewrite_clj.zip.base.edn_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED. Renamed to [[of-node]].
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(var_args){
var G__44919 = arguments.length;
switch (G__44919) {
case 1:
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn.call(null,node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.base.of_node.call(null,node,opts);
}));

(rewrite_clj.zip.base.edn.cljs$lang$maxFixedArity = 2);

/**
 * Return tag of current node in `zloc`.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__44921 = zloc;
var G__44921__$1 = (((G__44921 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__44921));
if((G__44921__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.tag.call(null,G__44921__$1);
}
});
/**
 * Return true if current node's element type in `zloc` can be [[sexpr]]-ed.
 * 
 * See [related docs in user guide](/doc/01-user-guide.adoc#not-all-clojure-is-sexpr-able)
 */
rewrite_clj.zip.base.sexpr_able_QMARK_ = (function rewrite_clj$zip$base$sexpr_able_QMARK_(zloc){
var G__44922 = zloc;
var G__44922__$1 = (((G__44922 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__44922));
if((G__44922__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.sexpr_able_QMARK_.call(null,G__44922__$1);
}
});
/**
 * Return s-expression (the Clojure form) of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__44923 = zloc;
var G__44923__$1 = (((G__44923 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__44923));
if((G__44923__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.sexpr.call(null,G__44923__$1,rewrite_clj.zip.options.get_opts.call(null,zloc));
}
});
/**
 * Return s-expression (the Clojure forms) of children of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__44924 = zloc;
var G__44924__$1 = (((G__44924 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__44924));
if((G__44924__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.child_sexprs.call(null,G__44924__$1,rewrite_clj.zip.options.get_opts.call(null,zloc));
}
});
/**
 * Return length of printable [[string]] of current node in `zloc`.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__20754__auto__ = (function (){var G__44925 = zloc;
var G__44925__$1 = (((G__44925 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__44925));
if((G__44925__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.length.call(null,G__44925__$1);
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
});
/**
 * DEPRECATED. Return a tag/s-expression pair for inner nodes, or
 * the s-expression itself for leaves.
 */
rewrite_clj.zip.base.value = (function rewrite_clj$zip$base$value(zloc){
var G__44926 = zloc;
var G__44926__$1 = (((G__44926 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__44926));
if((G__44926__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.value.call(null,G__44926__$1);
}
});
/**
 * Create and return zipper from all forms in Clojure/ClojureScript/EDN string `s`.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(var_args){
var G__44928 = arguments.length;
switch (G__44928) {
case 1:
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_clj.zip.base.of_string.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var G__44929 = s;
var G__44929__$1 = (((G__44929 == null))?null:rewrite_clj.parser.parse_string_all.call(null,G__44929));
if((G__44929__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn.call(null,G__44929__$1,opts);
}
}));

(rewrite_clj.zip.base.of_string.cljs$lang$maxFixedArity = 2);

/**
 * Return string representing the current node in `zloc`.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__44931 = zloc;
var G__44931__$1 = (((G__44931 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__44931));
if((G__44931__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.string.call(null,G__44931__$1);
}
});
/**
 * DEPRECATED. Renamed to [[string]].
 */
rewrite_clj.zip.base.__GT_string = (function rewrite_clj$zip$base$__GT_string(zloc){
return rewrite_clj.zip.base.string.call(null,zloc);
});
/**
 * Return string representing the zipped-up `zloc` zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__44932 = zloc;
var G__44932__$1 = (((G__44932 == null))?null:rewrite_clj.custom_zipper.core.root.call(null,G__44932));
if((G__44932__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.string.call(null,G__44932__$1);
}
});
/**
 * DEPRECATED. Renamed to [[root-string]].
 */
rewrite_clj.zip.base.__GT_root_string = (function rewrite_clj$zip$base$__GT_root_string(zloc){
return rewrite_clj.zip.base.root_string.call(null,zloc);
});
rewrite_clj.zip.base.print_BANG_ = (function rewrite_clj$zip$base$print_BANG_(s,_writer){
return cljs.core.string_print.call(null,s);
});
/**
 * Print current node in `zloc`.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.base.print = (function rewrite_clj$zip$base$print(var_args){
var G__44934 = arguments.length;
switch (G__44934) {
case 2:
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
var G__44935 = zloc;
var G__44935__$1 = (((G__44935 == null))?null:rewrite_clj.zip.base.string.call(null,G__44935));
if((G__44935__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.print_BANG_.call(null,G__44935__$1,writer);
}
}));

(rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print.call(null,zloc,null);
}));

(rewrite_clj.zip.base.print.cljs$lang$maxFixedArity = 2);

/**
 * Zip up and print `zloc` from root node.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.base.print_root = (function rewrite_clj$zip$base$print_root(var_args){
var G__44938 = arguments.length;
switch (G__44938) {
case 2:
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
var G__44939 = zloc;
var G__44939__$1 = (((G__44939 == null))?null:rewrite_clj.zip.base.root_string.call(null,G__44939));
if((G__44939__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.print_BANG_.call(null,G__44939__$1,writer);
}
}));

(rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print_root.call(null,zloc,null);
}));

(rewrite_clj.zip.base.print_root.cljs$lang$maxFixedArity = 2);

