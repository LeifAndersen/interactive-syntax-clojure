// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.node.coercer');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.fn');
goog.require('rewrite_clj.node.forms');
goog.require('rewrite_clj.node.integer');
goog.require('rewrite_clj.node.keyword');
goog.require('rewrite_clj.node.meta');
goog.require('rewrite_clj.node.namespaced_map');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.quote');
goog.require('rewrite_clj.node.reader_macro');
goog.require('rewrite_clj.node.regex');
goog.require('rewrite_clj.node.seq');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.uneval');
goog.require('rewrite_clj.node.whitespace');
(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));
/**
 * Slightly different than string/split-lines in that:
 * - escape inline double quotes (to emulate the clojure reader)
 * - includes all lines even if empty
 * - behaves the same on clj and cljs
 */
rewrite_clj.node.coercer.split_to_lines = (function rewrite_clj$node$coercer$split_to_lines(s){
var s__$1 = clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 1, ["\"","\\\""], null));
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.re_find.call(null,/(\r\n|\r|\n)/,s__$1));
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var eol_ndx = clojure.string.index_of.call(null,s__$1,m);
var G__46364 = cljs.core.subs.call(null,s__$1,(eol_ndx + cljs.core.count.call(null,m)));
var G__46365 = cljs.core.conj.call(null,lines,cljs.core.subs.call(null,s__$1,(0),eol_ndx));
s__$1 = G__46364;
lines = G__46365;
continue;
} else {
return cljs.core.conj.call(null,lines,s__$1);
}
break;
}
});
rewrite_clj.node.coercer.node_with_meta = (function rewrite_clj$node$coercer$node_with_meta(n,value){
if((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IWithMeta$))))?true:(((!value.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,value))){
var mta = rewrite_clj.node.protocols.meta_elided.call(null,value);
if(cljs.core.empty_QMARK_.call(null,mta)){
return n;
} else {
return rewrite_clj.node.meta.meta_node.call(null,rewrite_clj.node.protocols.coerce.call(null,mta),n);
}
} else {
return n;
}
});
var comma_46371 = rewrite_clj.node.whitespace.whitespace_nodes.call(null,", ");
var space_46372 = rewrite_clj.node.whitespace.whitespace_node.call(null," ");
rewrite_clj.node.coercer.map__GT_children = (function rewrite_clj$node$coercer$map__GT_children(m){
return cljs.core.vec.call(null,cljs.core.drop_last.call(null,cljs.core.count.call(null,comma_46371),cljs.core.mapcat.call(null,(function (p__46367){
var vec__46368 = p__46367;
var k = cljs.core.nth.call(null,vec__46368,(0),null);
var v = cljs.core.nth.call(null,vec__46368,(1),null);
return cljs.core.list_STAR_.call(null,rewrite_clj.node.protocols.coerce.call(null,k),space_46372,rewrite_clj.node.protocols.coerce.call(null,v),comma_46371);
}),m)));
});
rewrite_clj.node.coercer.record_node = (function rewrite_clj$node$coercer$record_node(m){
return rewrite_clj.node.reader_macro.reader_macro_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.node.token.token_node.call(null,(function (){var s = cljs.core.pr_str.call(null,m);
return cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(1),clojure.string.index_of.call(null,s,"{")));
})()),rewrite_clj.node.seq.map_node.call(null,rewrite_clj.node.coercer.map__GT_children.call(null,m))], null));
});
rewrite_clj.node.coercer.create_map_node = (function rewrite_clj$node$coercer$create_map_node(children){
return rewrite_clj.node.coercer.node_with_meta.call(null,rewrite_clj.node.seq.map_node.call(null,rewrite_clj.node.coercer.map__GT_children.call(null,children)),children);
});
(cljs.core.Keyword.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return rewrite_clj.node.keyword.keyword_node.call(null,v__$1);
}));
(rewrite_clj.node.protocols.NodeCoerceable["string"] = true);

(rewrite_clj.node.protocols.coerce["string"] = (function (v){
return rewrite_clj.node.stringz.string_node.call(null,rewrite_clj.node.coercer.split_to_lines.call(null,v));
}));
(rewrite_clj.node.protocols.NodeCoerceable["_"] = true);

(rewrite_clj.node.protocols.coerce["_"] = (function (v){
return rewrite_clj.node.coercer.node_with_meta.call(null,((cljs.core.record_QMARK_.call(null,v))?rewrite_clj.node.coercer.record_node.call(null,v):rewrite_clj.node.token.token_node.call(null,v)),v);
}));
(rewrite_clj.node.protocols.NodeCoerceable["null"] = true);

(rewrite_clj.node.protocols.coerce["null"] = (function (_v){
return rewrite_clj.node.token.token_node.call(null,null);
}));
(RegExp.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return rewrite_clj.node.regex.regex_node.call(null,rewrite_clj.node.regex.pattern_string_for_regex.call(null,v__$1));
}));
rewrite_clj.node.coercer.seq_node = (function rewrite_clj$node$coercer$seq_node(f,sq){
return rewrite_clj.node.coercer.node_with_meta.call(null,f.call(null,cljs.core.vec.call(null,rewrite_clj.node.whitespace.space_separated.call(null,cljs.core.map.call(null,rewrite_clj.node.protocols.coerce,sq)))),sq);
});
(cljs.core.PersistentVector.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.vector_node,sq__$1);
}));

(cljs.core.List.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.list_node,sq__$1);
}));

(cljs.core.Cons.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.list_node,sq__$1);
}));

(cljs.core.PersistentHashSet.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.set_node,sq__$1);
}));
(cljs.core.EmptyList.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.list_node,sq__$1);
}));
(cljs.core.PersistentHashMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (m){
var m__$1 = this;
return rewrite_clj.node.coercer.create_map_node.call(null,m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (m){
var m__$1 = this;
return rewrite_clj.node.coercer.create_map_node.call(null,m__$1);
}));
(cljs.core.Var.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return rewrite_clj.node.reader_macro.var_node.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[rewrite_clj.node.token.token_node.call(null,cljs.core.symbol.call(null,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1),(2))))],null)));
}));
