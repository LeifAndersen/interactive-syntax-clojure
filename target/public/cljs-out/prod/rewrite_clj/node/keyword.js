// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.node.keyword');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.node.keyword.choose_qualifier = (function rewrite_clj$node$keyword$choose_qualifier(map_qualifier,kw_qualifier){
if(cljs.core.not.call(null,(function (){var and__20748__auto__ = map_qualifier;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,"_",new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(kw_qualifier));
} else {
return and__20748__auto__;
}
})())){
var or__20754__auto__ = kw_qualifier;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return map_qualifier;
}
} else {
return null;
}
});
rewrite_clj.node.keyword.kw_qualifier = (function rewrite_clj$node$keyword$kw_qualifier(k,auto_resolved_QMARK_){
if(cljs.core.truth_((function (){var or__20754__auto__ = auto_resolved_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.namespace.call(null,k);
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),auto_resolved_QMARK_,new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.namespace.call(null,k)], null);
} else {
return null;
}
});
rewrite_clj.node.keyword.keyword_sexpr = (function rewrite_clj$node$keyword$keyword_sexpr(kw,kw_auto_resolved_QMARK_,map_qualifier,p__43678){
var map__43679 = p__43678;
var map__43679__$1 = cljs.core.__destructure_map.call(null,map__43679);
var auto_resolve = cljs.core.get.call(null,map__43679__$1,new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983));
var q = rewrite_clj.node.keyword.choose_qualifier.call(null,map_qualifier,rewrite_clj.node.keyword.kw_qualifier.call(null,kw,kw_auto_resolved_QMARK_));
return cljs.core.keyword.call(null,(function (){var G__43680 = (cljs.core.truth_(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351).cljs$core$IFn$_invoke$arity$1(q))?(function (){var or__20754__auto__ = auto_resolve;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return rewrite_clj.node.protocols.default_auto_resolve;
}
})().call(null,(function (){var or__20754__auto__ = (function (){var G__43681 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(q);
if((G__43681 == null)){
return null;
} else {
return cljs.core.symbol.call(null,G__43681);
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"current","current",-1088038603);
}
})()):new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(q));
if((G__43680 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43680);
}
})(),cljs.core.name.call(null,kw));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.protocols.MapQualifiable}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rewrite_clj.node.keyword.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.keyword.KeywordNode = (function (k,auto_resolved_QMARK_,map_qualifier,__meta,__extmap,__hash){
this.k = k;
this.auto_resolved_QMARK_ = auto_resolved_QMARK_;
this.map_qualifier = map_qualifier;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.keyword.KeywordNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k43683,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__43687 = k43683;
var G__43687__$1 = (((G__43687 instanceof cljs.core.Keyword))?G__43687.fqn:null);
switch (G__43687__$1) {
case "k":
return self__.k;

break;
case "auto-resolved?":
return self__.auto_resolved_QMARK_;

break;
case "map-qualifier":
return self__.map_qualifier;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43683,else__21451__auto__);

}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__43688){
var vec__43689 = p__43688;
var k__21472__auto__ = cljs.core.nth.call(null,vec__43689,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__43689,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$MapQualifiable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$MapQualifiable$map_context_apply$arity$2 = (function (node,map_qualifier__$1){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.call(null,node__$1,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),map_qualifier__$1);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$MapQualifiable$map_context_clear$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.call(null,node__$1,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#rewrite-clj.node.keyword.KeywordNode{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),self__.auto_resolved_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),self__.map_qualifier],null))], null),self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43682){
var self__ = this;
var G__43682__$1 = this;
return (new cljs.core.RecordIter((0),G__43682__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (-1681863292 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43684,other43685){
var self__ = this;
var this43684__$1 = this;
return (((!((other43685 == null)))) && ((((this43684__$1.constructor === other43685.constructor)) && (((cljs.core._EQ_.call(null,this43684__$1.k,other43685.k)) && (((cljs.core._EQ_.call(null,this43684__$1.auto_resolved_QMARK_,other43685.auto_resolved_QMARK_)) && (((cljs.core._EQ_.call(null,this43684__$1.map_qualifier,other43685.map_qualifier)) && (cljs.core._EQ_.call(null,this43684__$1.__extmap,other43685.__extmap)))))))))));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.keyword.keyword_sexpr.call(null,self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,opts);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
var c = (((cljs.core.name.call(null,self__.k)).length) + (1));
if(cljs.core.truth_(self__.auto_resolved_QMARK_)){
return (c + (1));
} else {
var temp__5718__auto__ = cljs.core.namespace.call(null,self__.k);
if(cljs.core.truth_(temp__5718__auto__)){
var nspace = temp__5718__auto__;
return (((1) + c) + ((nspace).length));
} else {
return c;
}
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return [(cljs.core.truth_(self__.auto_resolved_QMARK_)?":":null),cljs.core.pr_str.call(null,self__.k)].join('');
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),null,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),null,new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k43683){
var self__ = this;
var this__21455__auto____$1 = this;
var G__43692 = k43683;
var G__43692__$1 = (((G__43692 instanceof cljs.core.Keyword))?G__43692.fqn:null);
switch (G__43692__$1) {
case "k":
case "auto-resolved?":
case "map-qualifier":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k43683);

}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__43682){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__43693 = cljs.core.keyword_identical_QMARK_;
var expr__43694 = k__21457__auto__;
if(cljs.core.truth_(pred__43693.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__43694))){
return (new rewrite_clj.node.keyword.KeywordNode(G__43682,self__.auto_resolved_QMARK_,self__.map_qualifier,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43693.call(null,new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),expr__43694))){
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,G__43682,self__.map_qualifier,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43693.call(null,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),expr__43694))){
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,G__43682,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__43682),null));
}
}
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),self__.auto_resolved_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),self__.map_qualifier,null))], null),self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__43682){
var self__ = this;
var this__21447__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,G__43682,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(rewrite_clj.node.keyword.KeywordNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"auto-resolved?","auto-resolved?",-303944824,null),new cljs.core.Symbol(null,"map-qualifier","map-qualifier",392413807,null)], null);
}));

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$type = true);

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.keyword/KeywordNode",null,(1),null));
}));

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"rewrite-clj.node.keyword/KeywordNode");
}));

/**
 * Positional factory function for rewrite-clj.node.keyword/KeywordNode.
 */
rewrite_clj.node.keyword.__GT_KeywordNode = (function rewrite_clj$node$keyword$__GT_KeywordNode(k,auto_resolved_QMARK_,map_qualifier){
return (new rewrite_clj.node.keyword.KeywordNode(k,auto_resolved_QMARK_,map_qualifier,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.keyword/KeywordNode, taking a map of keywords to field values.
 */
rewrite_clj.node.keyword.map__GT_KeywordNode = (function rewrite_clj$node$keyword$map__GT_KeywordNode(G__43686){
var extmap__21490__auto__ = (function (){var G__43696 = cljs.core.dissoc.call(null,G__43686,new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720));
if(cljs.core.record_QMARK_.call(null,G__43686)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__43696);
} else {
return G__43696;
}
})();
return (new rewrite_clj.node.keyword.KeywordNode(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__43686),new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351).cljs$core$IFn$_invoke$arity$1(G__43686),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720).cljs$core$IFn$_invoke$arity$1(G__43686),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_.call(null,rewrite_clj.node.keyword.KeywordNode);
/**
 * Returns true if `n` is a node representing a keyword.
 */
rewrite_clj.node.keyword.keyword_node_QMARK_ = (function rewrite_clj$node$keyword$keyword_node_QMARK_(n){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),rewrite_clj.node.protocols.node_type.call(null,n));
});
/**
 * Create a node representing a keyword `k`.
 * 
 * Optionally include `auto-resolved?`, which defaults to `false`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * ;; unqualified keyword
 * (-> (n/keyword-node :kw)
 *     n/string)
 * ;; => ":kw"
 * 
 * ;; qualified keyword
 * (-> (n/keyword-node :my-prefix/kw)
 *     n/string)
 * ;; => ":my-prefix/kw"
 * 
 * ;; keyword auto-resolved to current ns
 * (-> (n/keyword-node :kw true)
 *     n/string)
 * ;; => "::kw"
 * 
 * ;; keyword auto-resolved to a namespace with given alias
 * (-> (n/keyword-node :ns-alias/kw true)
 *     n/string)
 * ;; => "::ns-alias/kw"
 * ```
 */
rewrite_clj.node.keyword.keyword_node = (function rewrite_clj$node$keyword$keyword_node(var_args){
var G__43700 = arguments.length;
switch (G__43700) {
case 2:
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$2 = (function (k,auto_resolved_QMARK_){
if((k instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? k)"));
}

return rewrite_clj.node.keyword.__GT_KeywordNode.call(null,k,auto_resolved_QMARK_,null);
}));

(rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$1 = (function (k){
return rewrite_clj.node.keyword.keyword_node.call(null,k,false);
}));

(rewrite_clj.node.keyword.keyword_node.cljs$lang$maxFixedArity = 2);

