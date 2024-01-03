// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('clojure.data.xml.node');
goog.require('cljs.core');
goog.require('clojure.data.xml.name');

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.data.xml.node.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.data.xml.node.Element = (function (tag,attrs,content,meta){
this.tag = tag;
this.attrs = attrs;
this.content = content;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2162558734;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(clojure.data.xml.node.Element.prototype.toString = (function (){
var self__ = this;
var _ = this;
var qname = clojure.data.xml.name.as_qname.call(null,self__.tag);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",qname], null),cljs.core.mapcat.call(null,(function (p__56415){
var vec__56416 = p__56415;
var n = cljs.core.nth.call(null,vec__56416,(0),null);
var a = cljs.core.nth.call(null,vec__56416,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",clojure.data.xml.name.as_qname.call(null,n),"=",cljs.core.pr_str.call(null,a)], null);
}),self__.attrs),((cljs.core.seq.call(null,self__.content))?cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [">"], null),self__.content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</",qname,">"], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/>"], null))));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,nf){
var self__ = this;
var this$__$1 = this;
var G__56419 = k;
var G__56419__$1 = (((G__56419 instanceof cljs.core.Keyword))?G__56419.fqn:null);
switch (G__56419__$1) {
case "tag":
return self__.tag;

break;
case "attrs":
return self__.attrs;

break;
case "content":
return self__.content;

break;
default:
return nf;

}
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#xml/element{:tag ");

cljs.core.pr_writer.call(null,self__.tag,writer,opts);

if(cljs.core.empty_QMARK_.call(null,self__.attrs)){
} else {
cljs.core._write.call(null,writer,", :attrs ");

cljs.core.pr_writer.call(null,self__.attrs,writer,opts);
}

if(cljs.core.empty_QMARK_.call(null,self__.content)){
} else {
cljs.core._write.call(null,writer,", :content ");

cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,self__.content);
}

return cljs.core._write.call(null,writer,"}");
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.RecordIter((0),this$__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.nil_iter.call(null)));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new clojure.data.xml.node.Element(self__.tag,self__.attrs,self__.content,self__.meta));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (3);
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_unordered_coll.call(null,this$__$1);
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((this$__$1 === other)) || (cljs.core.equiv_map(this$__$1,other)));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new clojure.data.xml.node.Element(self__.tag,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,(function (){var G__56420 = k;
var G__56420__$1 = (((G__56420 instanceof cljs.core.Keyword))?G__56420.fqn:null);
switch (G__56420__$1) {
case "tag":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,new cljs.core.Keyword(null,"content","content",15833224),self__.content], null);

break;
case "attrs":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"content","content",15833224),self__.content], null);

break;
case "content":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs], null);

break;
default:
return this$__$1;

}
})(),self__.meta);
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
var G__56421 = k;
var G__56421__$1 = (((G__56421 instanceof cljs.core.Keyword))?G__56421.fqn:null);
switch (G__56421__$1) {
case "tag":
return (new clojure.data.xml.node.Element(v,self__.attrs,self__.content,self__.meta));

break;
case "attrs":
return (new clojure.data.xml.node.Element(self__.tag,v,self__.content,self__.meta));

break;
case "content":
return (new clojure.data.xml.node.Element(self__.tag,self__.attrs,v,self__.meta));

break;
default:
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,new cljs.core.Keyword(null,"content","content",15833224),self__.content,k,v]),self__.meta);

}
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),self__.content], null)], null));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,next_meta){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.xml.node.Element(self__.tag,self__.attrs,self__.content,next_meta));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.conj.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,new cljs.core.Keyword(null,"content","content",15833224),self__.content], null),self__.meta),entry);
}));

(clojure.data.xml.node.Element.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(clojure.data.xml.node.Element.cljs$lang$type = true);

(clojure.data.xml.node.Element.cljs$lang$ctorStr = "clojure.data.xml.node/Element");

(clojure.data.xml.node.Element.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"clojure.data.xml.node/Element");
}));

/**
 * Positional factory function for clojure.data.xml.node/Element.
 */
clojure.data.xml.node.__GT_Element = (function clojure$data$xml$node$__GT_Element(tag,attrs,content,meta){
return (new clojure.data.xml.node.Element(tag,attrs,content,meta));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.data.xml.node.CData = (function (content,__meta,__extmap,__hash){
this.content = content;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(clojure.data.xml.node.CData.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k56426,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__56430 = k56426;
var G__56430__$1 = (((G__56430 instanceof cljs.core.Keyword))?G__56430.fqn:null);
switch (G__56430__$1) {
case "content":
return self__.content;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56426,else__21451__auto__);

}
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__56431){
var vec__56432 = p__56431;
var k__21472__auto__ = cljs.core.nth.call(null,vec__56432,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__56432,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#clojure.data.xml.node.CData{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56425){
var self__ = this;
var G__56425__$1 = this;
return (new cljs.core.RecordIter((0),G__56425__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new clojure.data.xml.node.CData(self__.content,self__.__meta,self__.__extmap,self__.__hash));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (-1970047562 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56427,other56428){
var self__ = this;
var this56427__$1 = this;
return (((!((other56428 == null)))) && ((((this56427__$1.constructor === other56428.constructor)) && (((cljs.core._EQ_.call(null,this56427__$1.content,other56428.content)) && (cljs.core._EQ_.call(null,this56427__$1.__extmap,other56428.__extmap)))))));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new clojure.data.xml.node.CData(self__.content,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k56426){
var self__ = this;
var this__21455__auto____$1 = this;
var G__56435 = k56426;
var G__56435__$1 = (((G__56435 instanceof cljs.core.Keyword))?G__56435.fqn:null);
switch (G__56435__$1) {
case "content":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k56426);

}
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__56425){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__56436 = cljs.core.keyword_identical_QMARK_;
var expr__56437 = k__21457__auto__;
if(cljs.core.truth_(pred__56436.call(null,new cljs.core.Keyword(null,"content","content",15833224),expr__56437))){
return (new clojure.data.xml.node.CData(G__56425,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.data.xml.node.CData(self__.content,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__56425),null));
}
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__56425){
var self__ = this;
var this__21447__auto____$1 = this;
return (new clojure.data.xml.node.CData(self__.content,G__56425,self__.__extmap,self__.__hash));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(clojure.data.xml.node.CData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null)], null);
}));

(clojure.data.xml.node.CData.cljs$lang$type = true);

(clojure.data.xml.node.CData.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"clojure.data.xml.node/CData",null,(1),null));
}));

(clojure.data.xml.node.CData.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"clojure.data.xml.node/CData");
}));

/**
 * Positional factory function for clojure.data.xml.node/CData.
 */
clojure.data.xml.node.__GT_CData = (function clojure$data$xml$node$__GT_CData(content){
return (new clojure.data.xml.node.CData(content,null,null,null));
});

/**
 * Factory function for clojure.data.xml.node/CData, taking a map of keywords to field values.
 */
clojure.data.xml.node.map__GT_CData = (function clojure$data$xml$node$map__GT_CData(G__56429){
var extmap__21490__auto__ = (function (){var G__56439 = cljs.core.dissoc.call(null,G__56429,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.record_QMARK_.call(null,G__56429)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56439);
} else {
return G__56439;
}
})();
return (new clojure.data.xml.node.CData(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__56429),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.data.xml.node.Comment = (function (content,__meta,__extmap,__hash){
this.content = content;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(clojure.data.xml.node.Comment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k56443,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__56447 = k56443;
var G__56447__$1 = (((G__56447 instanceof cljs.core.Keyword))?G__56447.fqn:null);
switch (G__56447__$1) {
case "content":
return self__.content;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56443,else__21451__auto__);

}
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__56448){
var vec__56449 = p__56448;
var k__21472__auto__ = cljs.core.nth.call(null,vec__56449,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__56449,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#clojure.data.xml.node.Comment{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56442){
var self__ = this;
var G__56442__$1 = this;
return (new cljs.core.RecordIter((0),G__56442__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new clojure.data.xml.node.Comment(self__.content,self__.__meta,self__.__extmap,self__.__hash));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (709226074 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56444,other56445){
var self__ = this;
var this56444__$1 = this;
return (((!((other56445 == null)))) && ((((this56444__$1.constructor === other56445.constructor)) && (((cljs.core._EQ_.call(null,this56444__$1.content,other56445.content)) && (cljs.core._EQ_.call(null,this56444__$1.__extmap,other56445.__extmap)))))));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new clojure.data.xml.node.Comment(self__.content,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k56443){
var self__ = this;
var this__21455__auto____$1 = this;
var G__56452 = k56443;
var G__56452__$1 = (((G__56452 instanceof cljs.core.Keyword))?G__56452.fqn:null);
switch (G__56452__$1) {
case "content":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k56443);

}
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__56442){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__56453 = cljs.core.keyword_identical_QMARK_;
var expr__56454 = k__21457__auto__;
if(cljs.core.truth_(pred__56453.call(null,new cljs.core.Keyword(null,"content","content",15833224),expr__56454))){
return (new clojure.data.xml.node.Comment(G__56442,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.data.xml.node.Comment(self__.content,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__56442),null));
}
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__56442){
var self__ = this;
var this__21447__auto____$1 = this;
return (new clojure.data.xml.node.Comment(self__.content,G__56442,self__.__extmap,self__.__hash));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(clojure.data.xml.node.Comment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null)], null);
}));

(clojure.data.xml.node.Comment.cljs$lang$type = true);

(clojure.data.xml.node.Comment.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"clojure.data.xml.node/Comment",null,(1),null));
}));

(clojure.data.xml.node.Comment.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"clojure.data.xml.node/Comment");
}));

/**
 * Positional factory function for clojure.data.xml.node/Comment.
 */
clojure.data.xml.node.__GT_Comment = (function clojure$data$xml$node$__GT_Comment(content){
return (new clojure.data.xml.node.Comment(content,null,null,null));
});

/**
 * Factory function for clojure.data.xml.node/Comment, taking a map of keywords to field values.
 */
clojure.data.xml.node.map__GT_Comment = (function clojure$data$xml$node$map__GT_Comment(G__56446){
var extmap__21490__auto__ = (function (){var G__56456 = cljs.core.dissoc.call(null,G__56446,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.record_QMARK_.call(null,G__56446)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56456);
} else {
return G__56456;
}
})();
return (new clojure.data.xml.node.Comment(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__56446),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

/**
 * Create an xml element from a content collection and optional metadata
 */
clojure.data.xml.node.element_STAR_ = (function clojure$data$xml$node$element_STAR_(var_args){
var G__56460 = arguments.length;
switch (G__56460) {
case 4:
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (tag,attrs,content,meta){
return (new clojure.data.xml.node.Element(tag,(function (){var or__20754__auto__ = attrs;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.remove.call(null,cljs.core.nil_QMARK_,content),meta));
}));

(clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (tag,attrs,content){
return (new clojure.data.xml.node.Element(tag,(function (){var or__20754__auto__ = attrs;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.remove.call(null,cljs.core.nil_QMARK_,content),null));
}));

(clojure.data.xml.node.element_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Create an xml Element from content varargs
 */
clojure.data.xml.node.element = (function clojure$data$xml$node$element(var_args){
var G__56466 = arguments.length;
switch (G__56466) {
case 1:
return clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__22111__auto__ = [];
var len__22082__auto___56468 = arguments.length;
var i__22083__auto___56469 = (0);
while(true){
if((i__22083__auto___56469 < len__22082__auto___56468)){
args_arr__22111__auto__.push((arguments[i__22083__auto___56469]));

var G__56470 = (i__22083__auto___56469 + (1));
i__22083__auto___56469 = G__56470;
continue;
} else {
}
break;
}

var argseq__22112__auto__ = ((((2) < args_arr__22111__auto__.length))?(new cljs.core.IndexedSeq(args_arr__22111__auto__.slice((2)),(0),null)):null);
return clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22112__auto__);

}
});

(clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return clojure.data.xml.node.element_STAR_.call(null,tag,null,null);
}));

(clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$2 = (function (tag,attrs){
return clojure.data.xml.node.element_STAR_.call(null,tag,attrs,null);
}));

(clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,content){
return clojure.data.xml.node.element_STAR_.call(null,tag,attrs,content);
}));

/** @this {Function} */
(clojure.data.xml.node.element.cljs$lang$applyTo = (function (seq56463){
var G__56464 = cljs.core.first.call(null,seq56463);
var seq56463__$1 = cljs.core.next.call(null,seq56463);
var G__56465 = cljs.core.first.call(null,seq56463__$1);
var seq56463__$2 = cljs.core.next.call(null,seq56463__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56464,G__56465,seq56463__$2);
}));

(clojure.data.xml.node.element.cljs$lang$maxFixedArity = (2));

/**
 * Create a CData node
 */
clojure.data.xml.node.cdata = (function clojure$data$xml$node$cdata(content){
return (new clojure.data.xml.node.CData(content,null,null,null));
});
/**
 * Create a Comment node
 */
clojure.data.xml.node.xml_comment = (function clojure$data$xml$node$xml_comment(content){
return (new clojure.data.xml.node.Comment(content,null,null,null));
});
clojure.data.xml.node.map__GT_Element = (function clojure$data$xml$node$map__GT_Element(p__56471){
var map__56472 = p__56471;
var map__56472__$1 = cljs.core.__destructure_map.call(null,map__56472);
var el = map__56472__$1;
var tag = cljs.core.get.call(null,map__56472__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.call(null,map__56472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.call(null,map__56472__$1,new cljs.core.Keyword(null,"content","content",15833224));
return clojure.data.xml.node.element_STAR_.call(null,tag,attrs,content,cljs.core.meta.call(null,el));
});
clojure.data.xml.node.tagged_element = (function clojure$data$xml$node$tagged_element(el){
if(cljs.core.map_QMARK_.call(null,el)){
return clojure.data.xml.node.map__GT_Element.call(null,el);
} else {
throw cljs.core.ex_info.call(null,"Unsupported element representation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),el], null));

}
});
clojure.data.xml.node.element_QMARK_ = (function clojure$data$xml$node$element_QMARK_(el){
return ((cljs.core.map_QMARK_.call(null,el)) && ((!((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el) == null)))));
});
