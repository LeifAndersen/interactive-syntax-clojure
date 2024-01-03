// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('garden.types');
goog.require('cljs.core');

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
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k47458,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__47462 = k47458;
var G__47462__$1 = (((G__47462 instanceof cljs.core.Keyword))?G__47462.fqn:null);
switch (G__47462__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47458,else__21451__auto__);

}
}));

(garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__47463){
var vec__47464 = p__47463;
var k__21472__auto__ = cljs.core.nth.call(null,vec__47464,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__47464,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#garden.types.CSSUnit{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47457){
var self__ = this;
var G__47457__$1 = this;
return (new cljs.core.RecordIter((0),G__47457__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47459,other47460){
var self__ = this;
var this47459__$1 = this;
return (((!((other47460 == null)))) && ((((this47459__$1.constructor === other47460.constructor)) && (((cljs.core._EQ_.call(null,this47459__$1.unit,other47460.unit)) && (((cljs.core._EQ_.call(null,this47459__$1.magnitude,other47460.magnitude)) && (cljs.core._EQ_.call(null,this47459__$1.__extmap,other47460.__extmap)))))))));
}));

(garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(garden.types.CSSUnit.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k47458){
var self__ = this;
var this__21455__auto____$1 = this;
var G__47467 = k47458;
var G__47467__$1 = (((G__47467 instanceof cljs.core.Keyword))?G__47467.fqn:null);
switch (G__47467__$1) {
case "unit":
case "magnitude":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k47458);

}
}));

(garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__47457){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__47468 = cljs.core.keyword_identical_QMARK_;
var expr__47469 = k__21457__auto__;
if(cljs.core.truth_(pred__47468.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__47469))){
return (new garden.types.CSSUnit(G__47457,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47468.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__47469))){
return (new garden.types.CSSUnit(self__.unit,G__47457,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__47457),null));
}
}
}));

(garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__47457){
var self__ = this;
var this__21447__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__47457,self__.__extmap,self__.__hash));
}));

(garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
}));

(garden.types.CSSUnit.cljs$lang$type = true);

(garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"garden.types/CSSUnit",null,(1),null));
}));

(garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"garden.types/CSSUnit");
}));

/**
 * Positional factory function for garden.types/CSSUnit.
 */
garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for garden.types/CSSUnit, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__47461){
var extmap__21490__auto__ = (function (){var G__47471 = cljs.core.dissoc.call(null,G__47461,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
if(cljs.core.record_QMARK_.call(null,G__47461)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__47471);
} else {
return G__47471;
}
})();
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__47461),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__47461),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
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
garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k47475,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__47479 = k47475;
var G__47479__$1 = (((G__47479 instanceof cljs.core.Keyword))?G__47479.fqn:null);
switch (G__47479__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47475,else__21451__auto__);

}
}));

(garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__47480){
var vec__47481 = p__47480;
var k__21472__auto__ = cljs.core.nth.call(null,vec__47481,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__47481,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#garden.types.CSSFunction{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47474){
var self__ = this;
var G__47474__$1 = this;
return (new cljs.core.RecordIter((0),G__47474__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47476,other47477){
var self__ = this;
var this47476__$1 = this;
return (((!((other47477 == null)))) && ((((this47476__$1.constructor === other47477.constructor)) && (((cljs.core._EQ_.call(null,this47476__$1.f,other47477.f)) && (((cljs.core._EQ_.call(null,this47476__$1.args,other47477.args)) && (cljs.core._EQ_.call(null,this47476__$1.__extmap,other47477.__extmap)))))))));
}));

(garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(garden.types.CSSFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k47475){
var self__ = this;
var this__21455__auto____$1 = this;
var G__47484 = k47475;
var G__47484__$1 = (((G__47484 instanceof cljs.core.Keyword))?G__47484.fqn:null);
switch (G__47484__$1) {
case "f":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k47475);

}
}));

(garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__47474){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__47485 = cljs.core.keyword_identical_QMARK_;
var expr__47486 = k__21457__auto__;
if(cljs.core.truth_(pred__47485.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__47486))){
return (new garden.types.CSSFunction(G__47474,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47485.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__47486))){
return (new garden.types.CSSFunction(self__.f,G__47474,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__47474),null));
}
}
}));

(garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__47474){
var self__ = this;
var this__21447__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,G__47474,self__.__extmap,self__.__hash));
}));

(garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(garden.types.CSSFunction.cljs$lang$type = true);

(garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"garden.types/CSSFunction",null,(1),null));
}));

(garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"garden.types/CSSFunction");
}));

/**
 * Positional factory function for garden.types/CSSFunction.
 */
garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(f,args){
return (new garden.types.CSSFunction(f,args,null,null,null));
});

/**
 * Factory function for garden.types/CSSFunction, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__47478){
var extmap__21490__auto__ = (function (){var G__47488 = cljs.core.dissoc.call(null,G__47478,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.record_QMARK_.call(null,G__47478)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__47488);
} else {
return G__47488;
}
})();
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__47478),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__47478),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
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
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k47492,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__47496 = k47492;
var G__47496__$1 = (((G__47496 instanceof cljs.core.Keyword))?G__47496.fqn:null);
switch (G__47496__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47492,else__21451__auto__);

}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__47497){
var vec__47498 = p__47497;
var k__21472__auto__ = cljs.core.nth.call(null,vec__47498,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__47498,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#garden.types.CSSAtRule{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47491){
var self__ = this;
var G__47491__$1 = this;
return (new cljs.core.RecordIter((0),G__47491__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47493,other47494){
var self__ = this;
var this47493__$1 = this;
return (((!((other47494 == null)))) && ((((this47493__$1.constructor === other47494.constructor)) && (((cljs.core._EQ_.call(null,this47493__$1.identifier,other47494.identifier)) && (((cljs.core._EQ_.call(null,this47493__$1.value,other47494.value)) && (cljs.core._EQ_.call(null,this47493__$1.__extmap,other47494.__extmap)))))))));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k47492){
var self__ = this;
var this__21455__auto____$1 = this;
var G__47501 = k47492;
var G__47501__$1 = (((G__47501 instanceof cljs.core.Keyword))?G__47501.fqn:null);
switch (G__47501__$1) {
case "identifier":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k47492);

}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__47491){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__47502 = cljs.core.keyword_identical_QMARK_;
var expr__47503 = k__21457__auto__;
if(cljs.core.truth_(pred__47502.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__47503))){
return (new garden.types.CSSAtRule(G__47491,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47502.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__47503))){
return (new garden.types.CSSAtRule(self__.identifier,G__47491,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__47491),null));
}
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__47491){
var self__ = this;
var this__21447__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__47491,self__.__extmap,self__.__hash));
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(garden.types.CSSAtRule.cljs$lang$type = true);

(garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"garden.types/CSSAtRule",null,(1),null));
}));

(garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"garden.types/CSSAtRule");
}));

/**
 * Positional factory function for garden.types/CSSAtRule.
 */
garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for garden.types/CSSAtRule, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__47495){
var extmap__21490__auto__ = (function (){var G__47505 = cljs.core.dissoc.call(null,G__47495,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__47495)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__47505);
} else {
return G__47505;
}
})();
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__47495),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__47495),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

