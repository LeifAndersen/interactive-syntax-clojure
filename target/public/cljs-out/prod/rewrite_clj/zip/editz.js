// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.zip.editz');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.custom_zipper.utils');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.options');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.whitespace');
/**
 * Return `zloc` with the current node replaced by `item`.
 *   If `item` is not already a node, an attempt will be made to coerce it to one.
 * 
 *   Use [[replace*]] for non-coercing version of replace.
 */
rewrite_clj.zip.editz.replace = (function rewrite_clj$zip$editz$replace(zloc,item){
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,rewrite_clj.node.protocols.coerce.call(null,item));
});
/**
 * Create s-expression from node, apply the function and create
 * node from the result.
 */
rewrite_clj.zip.editz.node_editor = (function rewrite_clj$zip$editz$node_editor(opts){
return (function (node,f){
return rewrite_clj.node.protocols.coerce.call(null,f.call(null,rewrite_clj.node.protocols.sexpr.call(null,node,opts)));
});
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
rewrite_clj.zip.editz.edit = (function rewrite_clj$zip$editz$edit(var_args){
var args__22092__auto__ = [];
var len__22082__auto___46297 = arguments.length;
var i__22083__auto___46298 = (0);
while(true){
if((i__22083__auto___46298 < len__22082__auto___46297)){
args__22092__auto__.push((arguments[i__22083__auto___46298]));

var G__46299 = (i__22083__auto___46298 + (1));
i__22083__auto___46298 = G__46299;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return rewrite_clj.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(rewrite_clj.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
return rewrite_clj.custom_zipper.core.edit.call(null,zloc,rewrite_clj.zip.editz.node_editor.call(null,rewrite_clj.zip.options.get_opts.call(null,zloc)),(function (p1__46293_SHARP_){
return cljs.core.apply.call(null,f,p1__46293_SHARP_,args);
}));
}));

(rewrite_clj.zip.editz.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.zip.editz.edit.cljs$lang$applyTo = (function (seq46294){
var G__46295 = cljs.core.first.call(null,seq46294);
var seq46294__$1 = cljs.core.next.call(null,seq46294);
var G__46296 = cljs.core.first.call(null,seq46294__$1);
var seq46294__$2 = cljs.core.next.call(null,seq46294__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46295,G__46296,seq46294__$2);
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
rewrite_clj.zip.editz.splice = (function rewrite_clj$zip$editz$splice(zloc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc))){
var temp__5718__auto__ = cljs.core.seq.call(null,cljs.core.drop_while.call(null,rewrite_clj.node.whitespace.whitespace_QMARK_,cljs.core.reverse.call(null,cljs.core.drop_while.call(null,rewrite_clj.node.whitespace.whitespace_QMARK_,rewrite_clj.custom_zipper.core.children.call(null,zloc)))));
if(temp__5718__auto__){
var children = temp__5718__auto__;
var loc = rewrite_clj.custom_zipper.utils.remove_and_move_right.call(null,cljs.core.reduce.call(null,rewrite_clj.custom_zipper.core.insert_right,zloc,children));
var or__20754__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,loc);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return loc;
}
} else {
return rewrite_clj.zip.removez.remove.call(null,zloc);
}
} else {
return zloc;
}
});
rewrite_clj.zip.editz.edit_token = (function rewrite_clj$zip$editz$edit_token(zloc,str_fn){
var e = rewrite_clj.zip.base.sexpr.call(null,zloc);
var e_SINGLEQUOTE_ = ((typeof e === 'string')?str_fn.call(null,e):(((e instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,cljs.core.namespace.call(null,e),str_fn.call(null,cljs.core.name.call(null,e))):(((e instanceof cljs.core.Symbol))?cljs.core.symbol.call(null,cljs.core.namespace.call(null,e),str_fn.call(null,cljs.core.name.call(null,e))):null)));
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,rewrite_clj.node.token.token_node.call(null,e_SINGLEQUOTE_));
});
rewrite_clj.zip.editz.edit_multi_line = (function rewrite_clj$zip$editz$edit_multi_line(zloc,line_fn){
var n = cljs.core.update_in.call(null,rewrite_clj.custom_zipper.core.node.call(null,zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),cljs.core.comp.call(null,line_fn,cljs.core.vec));
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,n);
});
/**
 * Return zipper with the current node in `zloc` prefixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, first line is prefixed.
 */
rewrite_clj.zip.editz.prefix = (function rewrite_clj$zip$editz$prefix(zloc,s){
var G__46302 = rewrite_clj.zip.base.tag.call(null,zloc);
var G__46302__$1 = (((G__46302 instanceof cljs.core.Keyword))?G__46302.fqn:null);
switch (G__46302__$1) {
case "token":
return rewrite_clj.zip.editz.edit_token.call(null,zloc,(function (p1__46300_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46300_SHARP_)].join('');
}));

break;
case "multi-line":
return rewrite_clj.zip.editz.edit_multi_line.call(null,zloc,(function (lines){
if(cljs.core.empty_QMARK_.call(null,lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.update_in.call(null,lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),(function (p1__46301_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46301_SHARP_)].join('');
}));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46302__$1)].join('')));

}
});
/**
 * Return zipper with the current node in `zloc` suffixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, last line is suffixed.
 */
rewrite_clj.zip.editz.suffix = (function rewrite_clj$zip$editz$suffix(zloc,s){
var G__46305 = rewrite_clj.zip.base.tag.call(null,zloc);
var G__46305__$1 = (((G__46305 instanceof cljs.core.Keyword))?G__46305.fqn:null);
switch (G__46305__$1) {
case "token":
return rewrite_clj.zip.editz.edit_token.call(null,zloc,(function (p1__46304_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46304_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}));

break;
case "multi-line":
return rewrite_clj.zip.editz.edit_multi_line.call(null,zloc,(function (lines){
if(cljs.core.empty_QMARK_.call(null,lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.concat.call(null,cljs.core.butlast.call(null,lines),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46305__$1)].join('')));

}
});
