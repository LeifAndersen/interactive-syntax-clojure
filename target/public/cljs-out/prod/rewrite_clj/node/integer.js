// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.node.integer');
goog.require('cljs.core');
goog.require('rewrite_clj.interop');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.integer.Object}
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
rewrite_clj.node.integer.IntNode = (function (value,base,__meta,__extmap,__hash){
this.value = value;
this.base = base;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.integer.IntNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k46340,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__46344 = k46340;
var G__46344__$1 = (((G__46344 instanceof cljs.core.Keyword))?G__46344.fqn:null);
switch (G__46344__$1) {
case "value":
return self__.value;

break;
case "base":
return self__.base;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46340,else__21451__auto__);

}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__46345){
var vec__46346 = p__46345;
var k__21472__auto__ = cljs.core.nth.call(null,vec__46346,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__46346,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#rewrite-clj.node.integer.IntNode{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base","base",185279322),self__.base],null))], null),self__.__extmap));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46339){
var self__ = this;
var G__46339__$1 = this;
return (new cljs.core.RecordIter((0),G__46339__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"base","base",185279322)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (-2088146928 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46341,other46342){
var self__ = this;
var this46341__$1 = this;
return (((!((other46342 == null)))) && ((((this46341__$1.constructor === other46342.constructor)) && (((cljs.core._EQ_.call(null,this46341__$1.value,other46342.value)) && (((cljs.core._EQ_.call(null,this46341__$1.base,other46342.base)) && (cljs.core._EQ_.call(null,this46341__$1.__extmap,other46342.__extmap)))))))));
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"int","int",-1741416922);
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return self__.value;
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.count.call(null,node__$1.rewrite_clj$node$protocols$Node$string$arity$1(null));
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
var sign = (((self__.value < (0)))?"-":null);
var abs_value = (function (){var G__46349 = self__.value;
if((self__.value < (0))){
return (- G__46349);
} else {
return G__46349;
}
})();
var s = rewrite_clj.interop.int__GT_str.call(null,abs_value,self__.base);
var prefix = (function (){var G__46350 = cljs.core.long$.call(null,self__.base);
switch (G__46350) {
case (8):
return "0";

break;
case (10):
return "";

break;
case (16):
return "0x";

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.base),"r"].join('');

}
})();
return [sign,cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"base","base",185279322),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k46340){
var self__ = this;
var this__21455__auto____$1 = this;
var G__46351 = k46340;
var G__46351__$1 = (((G__46351 instanceof cljs.core.Keyword))?G__46351.fqn:null);
switch (G__46351__$1) {
case "value":
case "base":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k46340);

}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__46339){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__46352 = cljs.core.keyword_identical_QMARK_;
var expr__46353 = k__21457__auto__;
if(cljs.core.truth_(pred__46352.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__46353))){
return (new rewrite_clj.node.integer.IntNode(G__46339,self__.base,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46352.call(null,new cljs.core.Keyword(null,"base","base",185279322),expr__46353))){
return (new rewrite_clj.node.integer.IntNode(self__.value,G__46339,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__46339),null));
}
}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base","base",185279322),self__.base,null))], null),self__.__extmap));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__46339){
var self__ = this;
var this__21447__auto____$1 = this;
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,G__46339,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(rewrite_clj.node.integer.IntNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"base","base",1825810849,null)], null);
}));

(rewrite_clj.node.integer.IntNode.cljs$lang$type = true);

(rewrite_clj.node.integer.IntNode.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.integer/IntNode",null,(1),null));
}));

(rewrite_clj.node.integer.IntNode.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"rewrite-clj.node.integer/IntNode");
}));

/**
 * Positional factory function for rewrite-clj.node.integer/IntNode.
 */
rewrite_clj.node.integer.__GT_IntNode = (function rewrite_clj$node$integer$__GT_IntNode(value,base){
return (new rewrite_clj.node.integer.IntNode(value,base,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.integer/IntNode, taking a map of keywords to field values.
 */
rewrite_clj.node.integer.map__GT_IntNode = (function rewrite_clj$node$integer$map__GT_IntNode(G__46343){
var extmap__21490__auto__ = (function (){var G__46355 = cljs.core.dissoc.call(null,G__46343,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"base","base",185279322));
if(cljs.core.record_QMARK_.call(null,G__46343)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__46355);
} else {
return G__46355;
}
})();
return (new rewrite_clj.node.integer.IntNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__46343),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(G__46343),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_.call(null,rewrite_clj.node.integer.IntNode);
/**
 * Create node representing an integer `value` in `base`.
 * 
 *   `base` defaults to 10.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/integer-node 42)
 *     n/string)
 * ;; => "42"
 * 
 * (-> (n/integer-node 31 2)
 *     n/string)
 * ;; => "2r11111"
 * ```
 * 
 * Note: the parser does not currently parse to integer-nodes, but they fully supported for output.
 */
rewrite_clj.node.integer.integer_node = (function rewrite_clj$node$integer$integer_node(var_args){
var G__46360 = arguments.length;
switch (G__46360) {
case 1:
return rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_clj.node.integer.integer_node.call(null,value,(10));
}));

(rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2 = (function (value,base){
if(cljs.core.integer_QMARK_.call(null,value)){
} else {
throw (new Error("Assert failed: (integer? value)"));
}

if(cljs.core.integer_QMARK_.call(null,base)){
} else {
throw (new Error("Assert failed: (integer? base)"));
}

if(((((1) < base)) && ((base < (37))))){
} else {
throw (new Error("Assert failed: (< 1 base 37)"));
}

return rewrite_clj.node.integer.__GT_IntNode.call(null,value,base);
}));

(rewrite_clj.node.integer.integer_node.cljs$lang$maxFixedArity = 2);

