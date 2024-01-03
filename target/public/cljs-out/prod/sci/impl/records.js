// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.records');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.records !== 'undefined') && (typeof sci.impl.records.to_string !== 'undefined')){
} else {
sci.impl.records.to_string = (function (){var method_table__21851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21854__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21855__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sci.impl.records","to-string"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21855__auto__,method_table__21851__auto__,prefer_table__21852__auto__,method_cache__21853__auto__,cached_hierarchy__21854__auto__));
})();
}
cljs.core._add_method.call(null,sci.impl.records.to_string,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$){
var t = sci.impl.types.type_impl.call(null,this$);
return [cljs.core.namespace.call(null,t),".",cljs.core.name.call(null,t),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,this$).toString((16)))].join('');
}));
sci.impl.records.clojure_str = (function sci$impl$records$clojure_str(v){
var t = sci.impl.types.type_impl.call(null,v);
return ["#",cljs.core.namespace.call(null,t),".",cljs.core.name.call(null,t),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,v))].join('');
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
 * @implements {sci.impl.records.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.records.SciRecord = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.records.SciRecord.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return sci.impl.records.to_string.call(null,this$);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k32765,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__32769 = k32765;
switch (G__32769) {
default:
return cljs.core.get.call(null,self__.__extmap,k32765,else__21451__auto__);

}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__32770){
var vec__32771 = p__32770;
var k__21472__auto__ = cljs.core.nth.call(null,vec__32771,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__32771,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#sci.impl.records.SciRecord{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32764){
var self__ = this;
var G__32764__$1 = this;
return (new cljs.core.RecordIter((0),G__32764__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new sci.impl.records.SciRecord(self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (1162423961 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32766,other32767){
var self__ = this;
var this32766__$1 = this;
return (((!((other32767 == null)))) && ((((this32766__$1.constructor === other32767.constructor)) && (cljs.core._EQ_.call(null,this32766__$1.__extmap,other32767.__extmap)))));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new sci.impl.records.SciRecord(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k32765){
var self__ = this;
var this__21455__auto____$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k32765);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__32764){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__32774 = cljs.core.keyword_identical_QMARK_;
var expr__32775 = k__21457__auto__;
return (new sci.impl.records.SciRecord(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__32764),null));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__32764){
var self__ = this;
var this__21447__auto____$1 = this;
return (new sci.impl.records.SciRecord(G__32764,self__.__extmap,self__.__hash));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(sci.impl.records.SciRecord.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(sci.impl.records.SciRecord.cljs$lang$type = true);

(sci.impl.records.SciRecord.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"sci.impl.records/SciRecord",null,(1),null));
}));

(sci.impl.records.SciRecord.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"sci.impl.records/SciRecord");
}));

/**
 * Positional factory function for sci.impl.records/SciRecord.
 */
sci.impl.records.__GT_SciRecord = (function sci$impl$records$__GT_SciRecord(){
return (new sci.impl.records.SciRecord(null,null,null));
});

/**
 * Factory function for sci.impl.records/SciRecord, taking a map of keywords to field values.
 */
sci.impl.records.map__GT_SciRecord = (function sci$impl$records$map__GT_SciRecord(G__32768){
var extmap__21490__auto__ = (function (){var G__32777 = cljs.core.dissoc.call(null,G__32768);
if(cljs.core.record_QMARK_.call(null,G__32768)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32777);
} else {
return G__32777;
}
})();
return (new sci.impl.records.SciRecord(null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

(sci.impl.records.SciRecord.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.records.SciRecord.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (new_obj,writer,_){
var new_obj__$1 = this;
return cljs.core.write_all.call(null,writer,sci.impl.records.clojure_str.call(null,new_obj__$1));
}));
sci.impl.records.__GT_record_impl = (function sci$impl$records$__GT_record_impl(m){
return sci.impl.records.map__GT_SciRecord.call(null,m);
});
sci.impl.records.defrecord = (function sci$impl$records$defrecord(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32797 = arguments.length;
var i__22083__auto___32798 = (0);
while(true){
if((i__22083__auto___32798 < len__22082__auto___32797)){
args__22092__auto__.push((arguments[i__22083__auto___32798]));

var G__32799 = (i__22083__auto___32798 + (1));
i__22083__auto___32798 = G__32799;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((5) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((5)),(0),null)):null);
return sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__22093__auto__);
});

(sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,ctx,record_name,fields,raw_protocol_impls){
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),cljs.core.rest.call(null,form));
} else {
var factory_fn_str = ["->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name)].join('');
var factory_fn_sym = cljs.core.symbol.call(null,factory_fn_str);
var map_factory_sym = cljs.core.symbol.call(null,["map",factory_fn_str].join(''));
var keys = cljs.core.mapv.call(null,cljs.core.keyword,fields);
var rec_type = cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name));
var protocol_impls = sci.impl.utils.split_when.call(null,cljs.core.symbol_QMARK_,raw_protocol_impls);
var field_set = cljs.core.set.call(null,fields);
var protocol_impls__$1 = cljs.core.mapcat.call(null,(function (p__32789,expr){
var vec__32790 = p__32789;
var seq__32791 = cljs.core.seq.call(null,vec__32790);
var first__32792 = cljs.core.first.call(null,seq__32791);
var seq__32791__$1 = cljs.core.next.call(null,seq__32791);
var protocol_name = first__32792;
var impls = seq__32791__$1;
var impls__$1 = cljs.core.group_by.call(null,cljs.core.first,impls);
var protocol = cljs.core.deref.call(null,sci.impl.utils.eval_resolve_state).call(null,ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),protocol_name);
var protocol__$1 = (function (){var or__20754__auto__ = protocol;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),protocol_name)){
return new cljs.core.Keyword("sci.impl.records","object","sci.impl.records/object",-590699738);
} else {
return null;
}
}
})();
var ___$1 = (cljs.core.truth_(protocol__$1)?null:sci.impl.utils.throw_error_with_location.call(null,["Protocol not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name)].join(''),expr));
var protocol__$2 = ((sci.impl.vars.var_QMARK_.call(null,protocol__$1))?cljs.core.deref.call(null,protocol__$1):protocol__$1);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol__$2);
var pns = (cljs.core.truth_(protocol_ns)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName.call(null,protocol_ns)):((cljs.core._EQ_.call(null,new cljs.core.Keyword("sci.impl.records","object","sci.impl.records/object",-590699738),protocol__$2))?"sci.impl.records":null));
var fq_meth_name = (function (p1__32779_SHARP_){
if(cljs.core.simple_symbol_QMARK_.call(null,p1__32779_SHARP_)){
return cljs.core.symbol.call(null,pns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32779_SHARP_));
} else {
return p1__32779_SHARP_;
}
});
return cljs.core.map.call(null,(function (p__32793){
var vec__32794 = p__32793;
var method_name = cljs.core.nth.call(null,vec__32794,(0),null);
var bodies = cljs.core.nth.call(null,vec__32794,(1),null);
var bodies__$1 = cljs.core.map.call(null,cljs.core.rest,bodies);
var bodies__$2 = cljs.core.mapv.call(null,(function (impl){
var args = cljs.core.first.call(null,impl);
var body = cljs.core.rest.call(null,impl);
var destr = sci.impl.utils.maybe_destructured.call(null,args,body);
var args__$1 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(destr);
var orig_this_sym = cljs.core.first.call(null,args__$1);
var rest_args = cljs.core.rest.call(null,args__$1);
var shadows_this_QMARK_ = cljs.core.some.call(null,(function (p1__32780_SHARP_){
return cljs.core._EQ_.call(null,orig_this_sym,p1__32780_SHARP_);
}),rest_args);
var this_sym = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.gensym.call(null,"this_"):orig_this_sym);
var args__$2 = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.vec.call(null,cljs.core.cons.call(null,this_sym,rest_args)):args__$1);
var bindings = cljs.core.mapcat.call(null,(function (field){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,(new cljs.core.List(null,cljs.core.keyword.call(null,field),(new cljs.core.List(null,this_sym,null,(1),null)),(2),null))], null);
}),cljs.core.reduce.call(null,cljs.core.disj,field_set,args__$2));
var bindings__$1 = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.concat.call(null,bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_this_sym,this_sym], null)):bindings);
var bindings__$2 = cljs.core.vec.call(null,bindings__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,args__$2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings__$2,null,(1),null)),body))),null,(1),null)))));
}),bodies__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name.call(null,method_name),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null)),bodies__$2)));
}),impls__$1);
}),protocol_impls,raw_protocol_impls);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,map_factory_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__32781__auto__","m__32781__auto__",1401743844,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vary-meta","cljs.core/vary-meta",-938366546,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->record-impl","cljs.core/->record-impl",1673017880,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__32781__auto__","m__32781__auto__",1401743844,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__32782__auto__","args__32782__auto__",-1416606818,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vary-meta","cljs.core/vary-meta",-938366546,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->record-impl","cljs.core/->record-impl",1673017880,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__32782__auto__","args__32782__auto__",-1416606818,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.record","map-constructor","sci.impl.record/map-constructor",1072184780),null,(1),null)),(new cljs.core.List(null,map_factory_sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209),null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),protocol_impls__$1)));
}
}));

(sci.impl.records.defrecord.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(sci.impl.records.defrecord.cljs$lang$applyTo = (function (seq32783){
var G__32784 = cljs.core.first.call(null,seq32783);
var seq32783__$1 = cljs.core.next.call(null,seq32783);
var G__32785 = cljs.core.first.call(null,seq32783__$1);
var seq32783__$2 = cljs.core.next.call(null,seq32783__$1);
var G__32786 = cljs.core.first.call(null,seq32783__$2);
var seq32783__$3 = cljs.core.next.call(null,seq32783__$2);
var G__32787 = cljs.core.first.call(null,seq32783__$3);
var seq32783__$4 = cljs.core.next.call(null,seq32783__$3);
var G__32788 = cljs.core.first.call(null,seq32783__$4);
var seq32783__$5 = cljs.core.next.call(null,seq32783__$4);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32784,G__32785,G__32786,G__32787,G__32788,seq32783__$5);
}));

sci.impl.records.sci_record_QMARK_ = (function sci$impl$records$sci_record_QMARK_(x){
var or__20754__auto__ = ((cljs.core.map_QMARK_.call(null,x))?(function (){var G__32800 = x;
var G__32800__$1 = (((G__32800 == null))?null:cljs.core.meta.call(null,G__32800));
if((G__32800__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__32800__$1);
}
})():null);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.record_QMARK_.call(null,x);
}
});
/**
 * A record class is represented by a symbol with metadata (currently). This is only an implementation detail.
 * A protocol is represented by a map with :ns, :methods and optionally :class. This is also an implementation detail.
 */
sci.impl.records.resolve_record_or_protocol_class = (function sci$impl$records$resolve_record_or_protocol_class(var_args){
var G__32802 = arguments.length;
switch (G__32802) {
case 2:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
var last_dot = clojure.string.last_index_of.call(null,sym_str,".");
var class_name = (cljs.core.truth_(last_dot)?cljs.core.subs.call(null,sym_str,(last_dot + (1)),((sym_str).length)):sym_str);
var namespace = (cljs.core.truth_(last_dot)?cljs.core.symbol.call(null,cljs.core.subs.call(null,sym_str,(0),last_dot)):sci.impl.vars.current_ns_name.call(null));
return sci.impl.records.resolve_record_or_protocol_class.call(null,ctx,namespace,cljs.core.symbol.call(null,class_name));
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3 = (function (ctx,package$,class$){
var namespace = cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),"_","-"));
var temp__5720__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespace,class$], null));
if(cljs.core.truth_(temp__5720__auto__)){
var sci_var = temp__5720__auto__;
if(sci.impl.vars.var_QMARK_.call(null,sci_var)){
return cljs.core.deref.call(null,sci_var);
} else {
return sci_var;
}
} else {
return null;
}
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$lang$maxFixedArity = 3);

sci.impl.records.resolve_record_class = (function sci$impl$records$resolve_record_class(ctx,class_sym){
var temp__5720__auto__ = sci.impl.records.resolve_record_or_protocol_class.call(null,ctx,class_sym);
if(cljs.core.truth_(temp__5720__auto__)){
var x = temp__5720__auto__;
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
} else {
return null;
}
});
