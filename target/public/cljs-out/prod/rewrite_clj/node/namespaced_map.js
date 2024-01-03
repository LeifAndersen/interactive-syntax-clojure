// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.node.namespaced_map');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.namespaced_map.Object}
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
rewrite_clj.node.namespaced_map.MapQualifierNode = (function (auto_resolved_QMARK_,prefix,__meta,__extmap,__hash){
this.auto_resolved_QMARK_ = auto_resolved_QMARK_;
this.prefix = prefix;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k44526,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__44530 = k44526;
var G__44530__$1 = (((G__44530 instanceof cljs.core.Keyword))?G__44530.fqn:null);
switch (G__44530__$1) {
case "auto-resolved?":
return self__.auto_resolved_QMARK_;

break;
case "prefix":
return self__.prefix;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44526,else__21451__auto__);

}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__44531){
var vec__44532 = p__44531;
var k__21472__auto__ = cljs.core.nth.call(null,vec__44532,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__44532,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#rewrite-clj.node.namespaced-map.MapQualifierNode{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),self__.auto_resolved_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null))], null),self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44525){
var self__ = this;
var G__44525__$1 = this;
return (new cljs.core.RecordIter((0),G__44525__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,self__.prefix,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (-426705749 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44527,other44528){
var self__ = this;
var this44527__$1 = this;
return (((!((other44528 == null)))) && ((((this44527__$1.constructor === other44528.constructor)) && (((cljs.core._EQ_.call(null,this44527__$1.auto_resolved_QMARK_,other44528.auto_resolved_QMARK_)) && (((cljs.core._EQ_.call(null,this44527__$1.prefix,other44528.prefix)) && (cljs.core._EQ_.call(null,this44527__$1.__extmap,other44528.__extmap)))))))));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
if(cljs.core.truth_(self__.auto_resolved_QMARK_)){
return (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return rewrite_clj.node.protocols.default_auto_resolve;
}
})().call(null,(cljs.core.truth_(self__.prefix)?cljs.core.symbol.call(null,self__.prefix):new cljs.core.Keyword(null,"current","current",-1088038603)));
} else {
return cljs.core.symbol.call(null,self__.prefix);
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (((1) + (cljs.core.truth_(self__.auto_resolved_QMARK_)?(1):(0))) + cljs.core.count.call(null,self__.prefix));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return [":",(cljs.core.truth_(self__.auto_resolved_QMARK_)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix)].join('');
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,self__.prefix,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k44526){
var self__ = this;
var this__21455__auto____$1 = this;
var G__44535 = k44526;
var G__44535__$1 = (((G__44535 instanceof cljs.core.Keyword))?G__44535.fqn:null);
switch (G__44535__$1) {
case "auto-resolved?":
case "prefix":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k44526);

}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__44525){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__44536 = cljs.core.keyword_identical_QMARK_;
var expr__44537 = k__21457__auto__;
if(cljs.core.truth_(pred__44536.call(null,new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),expr__44537))){
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(G__44525,self__.prefix,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44536.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__44537))){
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,G__44525,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,self__.prefix,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__44525),null));
}
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),self__.auto_resolved_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null))], null),self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__44525){
var self__ = this;
var this__21447__auto____$1 = this;
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,self__.prefix,G__44525,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-resolved?","auto-resolved?",-303944824,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null)], null);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.cljs$lang$type = true);

(rewrite_clj.node.namespaced_map.MapQualifierNode.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.namespaced-map/MapQualifierNode",null,(1),null));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"rewrite-clj.node.namespaced-map/MapQualifierNode");
}));

/**
 * Positional factory function for rewrite-clj.node.namespaced-map/MapQualifierNode.
 */
rewrite_clj.node.namespaced_map.__GT_MapQualifierNode = (function rewrite_clj$node$namespaced_map$__GT_MapQualifierNode(auto_resolved_QMARK_,prefix){
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(auto_resolved_QMARK_,prefix,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.namespaced-map/MapQualifierNode, taking a map of keywords to field values.
 */
rewrite_clj.node.namespaced_map.map__GT_MapQualifierNode = (function rewrite_clj$node$namespaced_map$map__GT_MapQualifierNode(G__44529){
var extmap__21490__auto__ = (function (){var G__44539 = cljs.core.dissoc.call(null,G__44529,new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),new cljs.core.Keyword(null,"prefix","prefix",-265908465));
if(cljs.core.record_QMARK_.call(null,G__44529)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__44539);
} else {
return G__44539;
}
})();
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351).cljs$core$IFn$_invoke$arity$1(G__44529),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__44529),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

/**
 * A map node's children are a list of nodes that can contain non-sexpr-able elements (ex. whitespace).
 * 
 *   Returns `children` with `f` applied sexpressable children.
 * 
 *   `f` is called with
 *   - `n` - node
 *   - `is-map-key?` true if the node is in keyword position
 *   and should return `n` or a new version of `n`.
 */
rewrite_clj.node.namespaced_map.edit_map_children = (function rewrite_clj$node$namespaced_map$edit_map_children(children,f){
var r = children;
var last_key = null;
var new_children = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,r);
if(cljs.core.truth_(temp__5718__auto__)){
var n = temp__5718__auto__;
if(cljs.core.truth_(rewrite_clj.node.protocols.printable_only_QMARK_.call(null,n))){
var G__44542 = cljs.core.rest.call(null,r);
var G__44543 = last_key;
var G__44544 = cljs.core.conj.call(null,new_children,n);
r = G__44542;
last_key = G__44543;
new_children = G__44544;
continue;
} else {
if(cljs.core.truth_(last_key)){
var G__44545 = cljs.core.rest.call(null,r);
var G__44546 = null;
var G__44547 = cljs.core.conj.call(null,new_children,f.call(null,n,false));
r = G__44545;
last_key = G__44546;
new_children = G__44547;
continue;
} else {
var G__44548 = cljs.core.rest.call(null,r);
var G__44549 = n;
var G__44550 = cljs.core.conj.call(null,new_children,f.call(null,n,true));
r = G__44548;
last_key = G__44549;
new_children = G__44550;
continue;
}
}
} else {
return new_children;
}
break;
}
});
/**
 * Apply the context of the qualified map to the keyword keys in the map.
 * 
 *   Strips context from keyword-nodes not in keyword position and adds context to keyword nodes in keyword position.
 */
rewrite_clj.node.namespaced_map.apply_context_to_map = (function rewrite_clj$node$namespaced_map$apply_context_to_map(m_node,q_node){
return rewrite_clj.node.protocols.replace_children.call(null,m_node,rewrite_clj.node.namespaced_map.edit_map_children.call(null,rewrite_clj.node.protocols.children.call(null,m_node),(function (n,is_map_key_QMARK_){
if((((!((n == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === n.rewrite_clj$node$protocols$MapQualifiable$))))?true:(((!n.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rewrite_clj.node.protocols.MapQualifiable,n):false)):cljs.core.native_satisfies_QMARK_.call(null,rewrite_clj.node.protocols.MapQualifiable,n))){
if(cljs.core.truth_(is_map_key_QMARK_)){
return rewrite_clj.node.protocols.map_context_apply.call(null,n,q_node);
} else {
return rewrite_clj.node.protocols.map_context_clear.call(null,n);
}
} else {
return n;
}
})));
});
rewrite_clj.node.namespaced_map.apply_context = (function rewrite_clj$node$namespaced_map$apply_context(children){
var q_node = cljs.core.first.call(null,children);
var m_node = cljs.core.last.call(null,children);
return cljs.core.concat.call(null,cljs.core.drop_last.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.node.namespaced_map.apply_context_to_map.call(null,m_node,q_node)], null));
});
/**
 * Namespaced map qualifier context is automatically applied to keyword children of contained map automatically on:
 *   - [[node/namespaced-map-node]] creation (i.e. at parse time)
 *   - [[node/replace-children]]
 * 
 *   If you make changes outside these techniques, call this function to reapply the qualifier context.
 * 
 *   This is only necessary if you need `sexpr` on map keywords to reflect the namespaced map qualifier.
 * 
 *   Returns `n` if not a namespaced map node.
 */
rewrite_clj.node.namespaced_map.reapply_namespaced_map_context = (function rewrite_clj$node$namespaced_map$reapply_namespaced_map_context(n){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),rewrite_clj.node.protocols.tag.call(null,n))){
return rewrite_clj.node.protocols.replace_children.call(null,n,rewrite_clj.node.namespaced_map.apply_context.call(null,rewrite_clj.node.protocols.children.call(null,n)));
} else {
return n;
}
});
/**
 * Assumes that appropriate qualifier context has been applied to contained map.
 */
rewrite_clj.node.namespaced_map.namespaced_map_sexpr = (function rewrite_clj$node$namespaced_map$namespaced_map_sexpr(children,opts){
return rewrite_clj.node.protocols.sexpr.call(null,cljs.core.last.call(null,children),opts);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.namespaced_map.Object}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
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
rewrite_clj.node.namespaced_map.NamespacedMapNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k44553,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__44557 = k44553;
var G__44557__$1 = (((G__44557 instanceof cljs.core.Keyword))?G__44557.fqn:null);
switch (G__44557__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44553,else__21451__auto__);

}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__44558){
var vec__44559 = p__44558;
var k__21472__auto__ = cljs.core.nth.call(null,vec__44559,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__44559,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#rewrite-clj.node.namespaced-map.NamespacedMapNode{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44552){
var self__ = this;
var G__44552__$1 = this;
return (new cljs.core.RecordIter((0),G__44552__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (679326169 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44554,other44555){
var self__ = this;
var this44554__$1 = this;
return (((!((other44555 == null)))) && ((((this44554__$1.constructor === other44555.constructor)) && (((cljs.core._EQ_.call(null,this44554__$1.children,other44555.children)) && (cljs.core._EQ_.call(null,this44554__$1.__extmap,other44555.__extmap)))))));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.namespaced_map.namespaced_map_sexpr.call(null,self__.children,opts);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((1) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (node,children_SINGLEQUOTE_){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.call(null,node__$1,new cljs.core.Keyword(null,"children","children",-940561982),rewrite_clj.node.namespaced_map.apply_context.call(null,children_SINGLEQUOTE_));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((2) - (1));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k44553){
var self__ = this;
var this__21455__auto____$1 = this;
var G__44562 = k44553;
var G__44562__$1 = (((G__44562 instanceof cljs.core.Keyword))?G__44562.fqn:null);
switch (G__44562__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k44553);

}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__44552){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__44563 = cljs.core.keyword_identical_QMARK_;
var expr__44564 = k__21457__auto__;
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__44564))){
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(G__44552,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__44552),null));
}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__44552){
var self__ = this;
var this__21447__auto____$1 = this;
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(self__.children,G__44552,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.cljs$lang$type = true);

(rewrite_clj.node.namespaced_map.NamespacedMapNode.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.namespaced-map/NamespacedMapNode",null,(1),null));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"rewrite-clj.node.namespaced-map/NamespacedMapNode");
}));

/**
 * Positional factory function for rewrite-clj.node.namespaced-map/NamespacedMapNode.
 */
rewrite_clj.node.namespaced_map.__GT_NamespacedMapNode = (function rewrite_clj$node$namespaced_map$__GT_NamespacedMapNode(children){
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.namespaced-map/NamespacedMapNode, taking a map of keywords to field values.
 */
rewrite_clj.node.namespaced_map.map__GT_NamespacedMapNode = (function rewrite_clj$node$namespaced_map$map__GT_NamespacedMapNode(G__44556){
var extmap__21490__auto__ = (function (){var G__44566 = cljs.core.dissoc.call(null,G__44556,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_.call(null,G__44556)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__44566);
} else {
return G__44566;
}
})();
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__44556),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_.call(null,rewrite_clj.node.namespaced_map.MapQualifierNode);
rewrite_clj.node.protocols.make_printable_BANG_.call(null,rewrite_clj.node.namespaced_map.NamespacedMapNode);
/**
 * Create a map qualifier node.
 * The map qualifier node is a child node of [[namespaced-map-node]].
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * ;; qualified
 * (-> (n/map-qualifier-node false "my-prefix")
 *     n/string)
 * ;; => ":my-prefix"
 * 
 * ;; auto-resolved to current ns
 * (-> (n/map-qualifier-node true nil)
 *     n/string)
 * ;; => "::"
 * 
 * ;; auto-resolve to namespace with alias
 * (-> (n/map-qualifier-node true "my-ns-alias")
 *     n/string)
 * ;; => "::my-ns-alias"
 * ```
 */
rewrite_clj.node.namespaced_map.map_qualifier_node = (function rewrite_clj$node$namespaced_map$map_qualifier_node(auto_resolved_QMARK_,prefix){
return rewrite_clj.node.namespaced_map.__GT_MapQualifierNode.call(null,auto_resolved_QMARK_,prefix);
});
/**
 * Create a namespaced map node with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/namespaced-map-node [(n/map-qualifier-node true "my-ns-alias")
 *                             (n/spaces 1)
 *                             (n/map-node [(n/keyword-node :a)
 *                                          (n/spaces 1)
 *                                          (n/token-node 1)])])
 *     n/string)
 * ;; => "#::my-ns-alias {:a 1}"
 * ```
 * 
 * Map qualifier context is automatically applied to map keys for sexpr support.
 * 
 * See also [[map-qualifier-node]] and [[map-node]].
 */
rewrite_clj.node.namespaced_map.namespaced_map_node = (function rewrite_clj$node$namespaced_map$namespaced_map_node(children){
return rewrite_clj.node.namespaced_map.__GT_NamespacedMapNode.call(null,rewrite_clj.node.namespaced_map.apply_context.call(null,children));
});
