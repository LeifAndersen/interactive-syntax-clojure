// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.types');
goog.require('cljs.core');

/**
 * @interface
 */
sci.impl.types.IBox = function(){};

var sci$impl$types$IBox$setVal$dyn_31951 = (function (_this,_v){
var x__21502__auto__ = (((_this == null))?null:_this);
var m__21503__auto__ = (sci.impl.types.setVal[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,_this,_v);
} else {
var m__21501__auto__ = (sci.impl.types.setVal["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,_this,_v);
} else {
throw cljs.core.missing_protocol.call(null,"IBox.setVal",_this);
}
}
});
sci.impl.types.setVal = (function sci$impl$types$setVal(_this,_v){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$setVal$arity$2 == null)))))){
return _this.sci$impl$types$IBox$setVal$arity$2(_this,_v);
} else {
return sci$impl$types$IBox$setVal$dyn_31951.call(null,_this,_v);
}
});

var sci$impl$types$IBox$getVal$dyn_31952 = (function (_this){
var x__21502__auto__ = (((_this == null))?null:_this);
var m__21503__auto__ = (sci.impl.types.getVal[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,_this);
} else {
var m__21501__auto__ = (sci.impl.types.getVal["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,_this);
} else {
throw cljs.core.missing_protocol.call(null,"IBox.getVal",_this);
}
}
});
sci.impl.types.getVal = (function sci$impl$types$getVal(_this){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$getVal$arity$1 == null)))))){
return _this.sci$impl$types$IBox$getVal$arity$1(_this);
} else {
return sci$impl$types$IBox$getVal$dyn_31952.call(null,_this);
}
});


/**
 * @interface
 */
sci.impl.types.IReified = function(){};

var sci$impl$types$IReified$getInterfaces$dyn_31953 = (function (_){
var x__21502__auto__ = (((_ == null))?null:_);
var m__21503__auto__ = (sci.impl.types.getInterfaces[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,_);
} else {
var m__21501__auto__ = (sci.impl.types.getInterfaces["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReified.getInterfaces",_);
}
}
});
sci.impl.types.getInterfaces = (function sci$impl$types$getInterfaces(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getInterfaces$arity$1 == null)))))){
return _.sci$impl$types$IReified$getInterfaces$arity$1(_);
} else {
return sci$impl$types$IReified$getInterfaces$dyn_31953.call(null,_);
}
});

var sci$impl$types$IReified$getMethods$dyn_31954 = (function (_){
var x__21502__auto__ = (((_ == null))?null:_);
var m__21503__auto__ = (sci.impl.types.getMethods[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,_);
} else {
var m__21501__auto__ = (sci.impl.types.getMethods["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReified.getMethods",_);
}
}
});
sci.impl.types.getMethods = (function sci$impl$types$getMethods(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getMethods$arity$1 == null)))))){
return _.sci$impl$types$IReified$getMethods$arity$1(_);
} else {
return sci$impl$types$IReified$getMethods$dyn_31954.call(null,_);
}
});

var sci$impl$types$IReified$getProtocols$dyn_31955 = (function (_){
var x__21502__auto__ = (((_ == null))?null:_);
var m__21503__auto__ = (sci.impl.types.getProtocols[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,_);
} else {
var m__21501__auto__ = (sci.impl.types.getProtocols["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReified.getProtocols",_);
}
}
});
sci.impl.types.getProtocols = (function sci$impl$types$getProtocols(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getProtocols$arity$1 == null)))))){
return _.sci$impl$types$IReified$getProtocols$arity$1(_);
} else {
return sci$impl$types$IReified$getProtocols$dyn_31955.call(null,_);
}
});


/**
* @constructor
 * @implements {sci.impl.types.IReified}
*/
sci.impl.types.Reified = (function (interfaces,meths,protocols){
this.interfaces = interfaces;
this.meths = meths;
this.protocols = protocols;
});
(sci.impl.types.Reified.prototype.sci$impl$types$IReified$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getInterfaces$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.interfaces;
}));

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getMethods$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meths;
}));

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getProtocols$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.protocols;
}));

(sci.impl.types.Reified.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interfaces","interfaces",1469182407,null),new cljs.core.Symbol(null,"meths","meths",1226876764,null),new cljs.core.Symbol(null,"protocols","protocols",1634915631,null)], null);
}));

(sci.impl.types.Reified.cljs$lang$type = true);

(sci.impl.types.Reified.cljs$lang$ctorStr = "sci.impl.types/Reified");

(sci.impl.types.Reified.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"sci.impl.types/Reified");
}));

/**
 * Positional factory function for sci.impl.types/Reified.
 */
sci.impl.types.__GT_Reified = (function sci$impl$types$__GT_Reified(interfaces,meths,protocols){
return (new sci.impl.types.Reified(interfaces,meths,protocols));
});

sci.impl.types.type_impl = (function sci$impl$types$type_impl(var_args){
var args__22092__auto__ = [];
var len__22082__auto___31959 = arguments.length;
var i__22083__auto___31960 = (0);
while(true){
if((i__22083__auto___31960 < len__22082__auto___31959)){
args__22092__auto__.push((arguments[i__22083__auto___31960]));

var G__31961 = (i__22083__auto___31960 + (1));
i__22083__auto___31960 = G__31961;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return sci.impl.types.type_impl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(sci.impl.types.type_impl.cljs$core$IFn$_invoke$arity$variadic = (function (x,_xs){
var or__20754__auto__ = (((x instanceof sci.impl.types.Reified))?new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396):null);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = (function (){var G__31958 = x;
var G__31958__$1 = (((G__31958 == null))?null:cljs.core.meta.call(null,G__31958));
if((G__31958__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__31958__$1);
}
})();
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return cljs.core.type.call(null,x);
}
}
}));

(sci.impl.types.type_impl.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.types.type_impl.cljs$lang$applyTo = (function (seq31956){
var G__31957 = cljs.core.first.call(null,seq31956);
var seq31956__$1 = cljs.core.next.call(null,seq31956);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31957,seq31956__$1);
}));


/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.types.EvalForm = (function (form){
this.form = form;
});
(sci.impl.types.EvalForm.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalForm.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.form;
}));

(sci.impl.types.EvalForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null);
}));

(sci.impl.types.EvalForm.cljs$lang$type = true);

(sci.impl.types.EvalForm.cljs$lang$ctorStr = "sci.impl.types/EvalForm");

(sci.impl.types.EvalForm.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"sci.impl.types/EvalForm");
}));

/**
 * Positional factory function for sci.impl.types/EvalForm.
 */
sci.impl.types.__GT_EvalForm = (function sci$impl$types$__GT_EvalForm(form){
return (new sci.impl.types.EvalForm(form));
});


/**
 * @interface
 */
sci.impl.types.Stack = function(){};

var sci$impl$types$Stack$stack$dyn_31962 = (function (this$){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (sci.impl.types.stack[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$);
} else {
var m__21501__auto__ = (sci.impl.types.stack["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Stack.stack",this$);
}
}
});
sci.impl.types.stack = (function sci$impl$types$stack(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$types$Stack$stack$arity$1 == null)))))){
return this$.sci$impl$types$Stack$stack$arity$1(this$);
} else {
return sci$impl$types$Stack$stack$dyn_31962.call(null,this$);
}
});

(sci.impl.types.Stack["_"] = true);

(sci.impl.types.stack["_"] = (function (_this){
return null;
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {sci.impl.types.Stack}
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
sci.impl.types.NodeR = (function (f,stack,__meta,__extmap,__hash){
this.f = f;
this.stack = stack;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.types.NodeR.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(sci.impl.types.NodeR.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k31964,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__31968 = k31964;
var G__31968__$1 = (((G__31968 instanceof cljs.core.Keyword))?G__31968.fqn:null);
switch (G__31968__$1) {
case "f":
return self__.f;

break;
case "stack":
return self__.stack;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31964,else__21451__auto__);

}
}));

(sci.impl.types.NodeR.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__31969){
var vec__31970 = p__31969;
var k__21472__auto__ = cljs.core.nth.call(null,vec__31970,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__31970,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(sci.impl.types.NodeR.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#sci.impl.types.NodeR{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null))], null),self__.__extmap));
}));

(sci.impl.types.NodeR.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31963){
var self__ = this;
var G__31963__$1 = this;
return (new cljs.core.RecordIter((0),G__31963__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(sci.impl.types.NodeR.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.types.NodeR.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new sci.impl.types.NodeR(self__.f,self__.stack,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.types.NodeR.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(sci.impl.types.NodeR.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (256596302 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(sci.impl.types.NodeR.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31965,other31966){
var self__ = this;
var this31965__$1 = this;
return (((!((other31966 == null)))) && ((((this31965__$1.constructor === other31966.constructor)) && (((cljs.core._EQ_.call(null,this31965__$1.f,other31966.f)) && (((cljs.core._EQ_.call(null,this31965__$1.stack,other31966.stack)) && (cljs.core._EQ_.call(null,this31965__$1.__extmap,other31966.__extmap)))))))));
}));

(sci.impl.types.NodeR.prototype.sci$impl$types$Stack$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.NodeR.prototype.sci$impl$types$Stack$stack$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.stack;
}));

(sci.impl.types.NodeR.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new sci.impl.types.NodeR(self__.f,self__.stack,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(sci.impl.types.NodeR.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k31964){
var self__ = this;
var this__21455__auto____$1 = this;
var G__31973 = k31964;
var G__31973__$1 = (((G__31973 instanceof cljs.core.Keyword))?G__31973.fqn:null);
switch (G__31973__$1) {
case "f":
case "stack":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31964);

}
}));

(sci.impl.types.NodeR.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__31963){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__31974 = cljs.core.keyword_identical_QMARK_;
var expr__31975 = k__21457__auto__;
if(cljs.core.truth_(pred__31974.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__31975))){
return (new sci.impl.types.NodeR(G__31963,self__.stack,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31974.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),expr__31975))){
return (new sci.impl.types.NodeR(self__.f,G__31963,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.types.NodeR(self__.f,self__.stack,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__31963),null));
}
}
}));

(sci.impl.types.NodeR.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack,null))], null),self__.__extmap));
}));

(sci.impl.types.NodeR.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__31963){
var self__ = this;
var this__21447__auto____$1 = this;
return (new sci.impl.types.NodeR(self__.f,self__.stack,G__31963,self__.__extmap,self__.__hash));
}));

(sci.impl.types.NodeR.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(sci.impl.types.NodeR.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"stack","stack",847125597,null)], null);
}));

(sci.impl.types.NodeR.cljs$lang$type = true);

(sci.impl.types.NodeR.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"sci.impl.types/NodeR",null,(1),null));
}));

(sci.impl.types.NodeR.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"sci.impl.types/NodeR");
}));

/**
 * Positional factory function for sci.impl.types/NodeR.
 */
sci.impl.types.__GT_NodeR = (function sci$impl$types$__GT_NodeR(f,stack){
return (new sci.impl.types.NodeR(f,stack,null,null,null));
});

/**
 * Factory function for sci.impl.types/NodeR, taking a map of keywords to field values.
 */
sci.impl.types.map__GT_NodeR = (function sci$impl$types$map__GT_NodeR(G__31967){
var extmap__21490__auto__ = (function (){var G__31977 = cljs.core.dissoc.call(null,G__31967,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.record_QMARK_.call(null,G__31967)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31977);
} else {
return G__31977;
}
})();
return (new sci.impl.types.NodeR(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__31967),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__31967),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

sci.impl.types.eval = (function sci$impl$types$eval(expr,ctx,bindings){
if((expr instanceof sci.impl.types.NodeR)){
return expr.f.call(null,expr,ctx,bindings);
} else {
return expr;
}
});
sci.impl.types.__GT_constant = (function sci$impl$types$__GT_constant(x){
return x;
});
