// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.node.comment');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.comment.Object}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.comment.CommentNode = (function (prefix,s,__meta,__extmap,__hash){
this.prefix = prefix;
this.s = s;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.comment.CommentNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k44475,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__44479 = k44475;
var G__44479__$1 = (((G__44479 instanceof cljs.core.Keyword))?G__44479.fqn:null);
switch (G__44479__$1) {
case "prefix":
return self__.prefix;

break;
case "s":
return self__.s;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44475,else__21451__auto__);

}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__44480){
var vec__44481 = p__44480;
var k__21472__auto__ = cljs.core.nth.call(null,vec__44481,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__44481,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#rewrite-clj.node.comment.CommentNode{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44474){
var self__ = this;
var G__44474__$1 = this;
return (new cljs.core.RecordIter((0),G__44474__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,self__.s,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (495469178 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44476,other44477){
var self__ = this;
var this44476__$1 = this;
return (((!((other44477 == null)))) && ((((this44476__$1.constructor === other44477.constructor)) && (((cljs.core._EQ_.call(null,this44476__$1.prefix,other44477.prefix)) && (((cljs.core._EQ_.call(null,this44476__$1.s,other44477.s)) && (cljs.core._EQ_.call(null,this44476__$1.__extmap,other44477.__extmap)))))))));
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"comment","comment",532206069);
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"comment","comment",532206069);
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
throw cljs.core.ex_info.call(null,"unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (cljs.core.count.call(null,self__.prefix) + cljs.core.count.call(null,self__.s));
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s)].join('');
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,self__.s,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k44475){
var self__ = this;
var this__21455__auto____$1 = this;
var G__44484 = k44475;
var G__44484__$1 = (((G__44484 instanceof cljs.core.Keyword))?G__44484.fqn:null);
switch (G__44484__$1) {
case "prefix":
case "s":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k44475);

}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__44474){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__44485 = cljs.core.keyword_identical_QMARK_;
var expr__44486 = k__21457__auto__;
if(cljs.core.truth_(pred__44485.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__44486))){
return (new rewrite_clj.node.comment.CommentNode(G__44474,self__.s,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44485.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__44486))){
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,G__44474,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,self__.s,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__44474),null));
}
}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null))], null),self__.__extmap));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__44474){
var self__ = this;
var this__21447__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.prefix,self__.s,G__44474,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(rewrite_clj.node.comment.CommentNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
}));

(rewrite_clj.node.comment.CommentNode.cljs$lang$type = true);

(rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.comment/CommentNode",null,(1),null));
}));

(rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"rewrite-clj.node.comment/CommentNode");
}));

/**
 * Positional factory function for rewrite-clj.node.comment/CommentNode.
 */
rewrite_clj.node.comment.__GT_CommentNode = (function rewrite_clj$node$comment$__GT_CommentNode(prefix,s){
return (new rewrite_clj.node.comment.CommentNode(prefix,s,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.comment/CommentNode, taking a map of keywords to field values.
 */
rewrite_clj.node.comment.map__GT_CommentNode = (function rewrite_clj$node$comment$map__GT_CommentNode(G__44478){
var extmap__21490__auto__ = (function (){var G__44488 = cljs.core.dissoc.call(null,G__44478,new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"s","s",1705939918));
if(cljs.core.record_QMARK_.call(null,G__44478)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__44488);
} else {
return G__44488;
}
})();
return (new rewrite_clj.node.comment.CommentNode(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__44478),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__44478),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_.call(null,rewrite_clj.node.comment.CommentNode);
/**
 * Create node representing a comment with text `s`.
 * 
 * You may optionally specify a `prefix` of `";"` or `"#!"`, defaults is `";"`.
 * 
 * Argument `s`:
 * - must not include the `prefix`
 * - usually includes the trailing newline character, otherwise subsequent nodes will be on the comment line
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/comment-node "; my comment\n")
 *     n/string)
 * ;; => ";; my comment\n"
 * 
 * (-> (n/comment-node "#!" "/usr/bin/env bb\n")
 *     n/string)
 * ;; => "#!/usr/bin/env bb\n"
 * ```
 */
rewrite_clj.node.comment.comment_node = (function rewrite_clj$node$comment$comment_node(var_args){
var G__44492 = arguments.length;
switch (G__44492) {
case 1:
return rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_clj.node.comment.comment_node.call(null,";",s);
}));

(rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$2 = (function (prefix,s){
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.re_matches.call(null,/[^\r\n]*[\r\n]?/,s);
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core._EQ_.call(null,prefix,";")) || (cljs.core._EQ_.call(null,prefix,"#!")));
} else {
return and__20748__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (re-matches #\"[^\\r\\n]*[\\r\\n]?\" s) (or (= prefix \";\") (= prefix \"#!\")))"));
}

return rewrite_clj.node.comment.__GT_CommentNode.call(null,prefix,s);
}));

(rewrite_clj.node.comment.comment_node.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if `node` is a comment.
 */
rewrite_clj.node.comment.comment_QMARK_ = (function rewrite_clj$node$comment$comment_QMARK_(node){
return cljs.core._EQ_.call(null,rewrite_clj.node.protocols.tag.call(null,node),new cljs.core.Keyword(null,"comment","comment",532206069));
});
