// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.vars');
goog.require('cljs.core');
goog.require('sci.impl.macros');
goog.require('sci.impl.types');
goog.require('sci.impl.unrestrict');
goog.require('sci.lang');

/**
 * @interface
 */
sci.impl.vars.HasName = function(){};

var sci$impl$vars$HasName$getName$dyn_32302 = (function (_){
var x__21502__auto__ = (((_ == null))?null:_);
var m__21503__auto__ = (sci.impl.vars.getName[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,_);
} else {
var m__21501__auto__ = (sci.impl.vars.getName["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"HasName.getName",_);
}
}
});
sci.impl.vars.getName = (function sci$impl$vars$getName(_){
if((((!((_ == null)))) && ((!((_.sci$impl$vars$HasName$getName$arity$1 == null)))))){
return _.sci$impl$vars$HasName$getName$arity$1(_);
} else {
return sci$impl$vars$HasName$getName$dyn_32302.call(null,_);
}
});


/**
* @constructor
 * @implements {sci.impl.vars.HasName}
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.vars.Object}
*/
sci.impl.vars.SciNamespace = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 131072;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciNamespace.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name);
}));

(sci.impl.vars.SciNamespace.prototype.sci$impl$vars$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciNamespace.prototype.sci$impl$vars$HasName$getName$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(sci.impl.vars.SciNamespace.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.impl.vars.SciNamespace.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.SciNamespace.cljs$lang$type = true);

(sci.impl.vars.SciNamespace.cljs$lang$ctorStr = "sci.impl.vars/SciNamespace");

(sci.impl.vars.SciNamespace.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"sci.impl.vars/SciNamespace");
}));

/**
 * Positional factory function for sci.impl.vars/SciNamespace.
 */
sci.impl.vars.__GT_SciNamespace = (function sci$impl$vars$__GT_SciNamespace(name,meta){
return (new sci.impl.vars.SciNamespace(name,meta));
});

sci.impl.vars.namespace_QMARK_ = (function sci$impl$vars$namespace_QMARK_(x){
return (x instanceof sci.impl.vars.SciNamespace);
});

/**
* @constructor
*/
sci.impl.vars.Frame = (function (bindings,prev){
this.bindings = bindings;
this.prev = prev;
});

(sci.impl.vars.Frame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
}));

(sci.impl.vars.Frame.cljs$lang$type = true);

(sci.impl.vars.Frame.cljs$lang$ctorStr = "sci.impl.vars/Frame");

(sci.impl.vars.Frame.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"sci.impl.vars/Frame");
}));

/**
 * Positional factory function for sci.impl.vars/Frame.
 */
sci.impl.vars.__GT_Frame = (function sci$impl$vars$__GT_Frame(bindings,prev){
return (new sci.impl.vars.Frame(bindings,prev));
});

sci.impl.vars.top_frame = (new sci.impl.vars.Frame(cljs.core.PersistentArrayMap.EMPTY,null));
sci.impl.vars.dvals = cljs.core.atom.call(null,sci.impl.vars.top_frame);
sci.impl.vars.get_thread_binding_frame = (function sci$impl$vars$get_thread_binding_frame(){
return cljs.core.deref.call(null,sci.impl.vars.dvals);
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.vars.TBox = (function (thread,val){
this.thread = thread;
this.val = val;
});
(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (self__.val = v);
}));

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(sci.impl.vars.TBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"thread","thread",-1707434245,null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.TBox.cljs$lang$type = true);

(sci.impl.vars.TBox.cljs$lang$ctorStr = "sci.impl.vars/TBox");

(sci.impl.vars.TBox.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"sci.impl.vars/TBox");
}));

/**
 * Positional factory function for sci.impl.vars/TBox.
 */
sci.impl.vars.__GT_TBox = (function sci$impl$vars$__GT_TBox(thread,val){
return (new sci.impl.vars.TBox(thread,val));
});

sci.impl.vars.clone_thread_binding_frame = (function sci$impl$vars$clone_thread_binding_frame(){
var f = cljs.core.deref.call(null,sci.impl.vars.dvals);
return (new sci.impl.vars.Frame(f.bindings,null));
});
sci.impl.vars.reset_thread_binding_frame = (function sci$impl$vars$reset_thread_binding_frame(frame){
return cljs.core.reset_BANG_.call(null,sci.impl.vars.dvals,frame);
});
sci.impl.vars.dynamic_var_QMARK_ = (function sci$impl$vars$dynamic_var_QMARK_(v){
var and__20748__auto__ = sci.impl.vars.var_QMARK_.call(null,v);
if(cljs.core.truth_(and__20748__auto__)){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
} else {
return and__20748__auto__;
}
});

/**
 * @interface
 */
sci.impl.vars.IVar = function(){};

var sci$impl$vars$IVar$bindRoot$dyn_32306 = (function (this$,v){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (sci.impl.vars.bindRoot[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$,v);
} else {
var m__21501__auto__ = (sci.impl.vars.bindRoot["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$,v);
} else {
throw cljs.core.missing_protocol.call(null,"IVar.bindRoot",this$);
}
}
});
sci.impl.vars.bindRoot = (function sci$impl$vars$bindRoot(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$bindRoot$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$bindRoot$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$bindRoot$dyn_32306.call(null,this$,v);
}
});

var sci$impl$vars$IVar$getRawRoot$dyn_32307 = (function (this$){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (sci.impl.vars.getRawRoot[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$);
} else {
var m__21501__auto__ = (sci.impl.vars.getRawRoot["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IVar.getRawRoot",this$);
}
}
});
sci.impl.vars.getRawRoot = (function sci$impl$vars$getRawRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$getRawRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$getRawRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$getRawRoot$dyn_32307.call(null,this$);
}
});

var sci$impl$vars$IVar$toSymbol$dyn_32308 = (function (this$){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (sci.impl.vars.toSymbol[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$);
} else {
var m__21501__auto__ = (sci.impl.vars.toSymbol["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IVar.toSymbol",this$);
}
}
});
sci.impl.vars.toSymbol = (function sci$impl$vars$toSymbol(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$toSymbol$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$toSymbol$arity$1(this$);
} else {
return sci$impl$vars$IVar$toSymbol$dyn_32308.call(null,this$);
}
});

var sci$impl$vars$IVar$isMacro$dyn_32309 = (function (this$){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (sci.impl.vars.isMacro[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$);
} else {
var m__21501__auto__ = (sci.impl.vars.isMacro["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IVar.isMacro",this$);
}
}
});
sci.impl.vars.isMacro = (function sci$impl$vars$isMacro(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$isMacro$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$isMacro$arity$1(this$);
} else {
return sci$impl$vars$IVar$isMacro$dyn_32309.call(null,this$);
}
});

var sci$impl$vars$IVar$hasRoot$dyn_32310 = (function (this$){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (sci.impl.vars.hasRoot[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$);
} else {
var m__21501__auto__ = (sci.impl.vars.hasRoot["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IVar.hasRoot",this$);
}
}
});
sci.impl.vars.hasRoot = (function sci$impl$vars$hasRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$hasRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$hasRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$hasRoot$dyn_32310.call(null,this$);
}
});

var sci$impl$vars$IVar$setThreadBound$dyn_32311 = (function (this$,v){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (sci.impl.vars.setThreadBound[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$,v);
} else {
var m__21501__auto__ = (sci.impl.vars.setThreadBound["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$,v);
} else {
throw cljs.core.missing_protocol.call(null,"IVar.setThreadBound",this$);
}
}
});
sci.impl.vars.setThreadBound = (function sci$impl$vars$setThreadBound(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$setThreadBound$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$setThreadBound$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$setThreadBound$dyn_32311.call(null,this$,v);
}
});

var sci$impl$vars$IVar$unbind$dyn_32312 = (function (this$){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (sci.impl.vars.unbind[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$);
} else {
var m__21501__auto__ = (sci.impl.vars.unbind["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IVar.unbind",this$);
}
}
});
sci.impl.vars.unbind = (function sci$impl$vars$unbind(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$unbind$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$unbind$arity$1(this$);
} else {
return sci$impl$vars$IVar$unbind$dyn_32312.call(null,this$);
}
});

sci.impl.vars.push_thread_bindings = (function sci$impl$vars$push_thread_bindings(bindings){
var frame = sci.impl.vars.get_thread_binding_frame.call(null);
var bmap = frame.bindings;
var bmap__$1 = cljs.core.reduce.call(null,(function (acc,p__32313){
var vec__32314 = p__32313;
var var_STAR_ = cljs.core.nth.call(null,vec__32314,(0),null);
var val_STAR_ = cljs.core.nth.call(null,vec__32314,(1),null);
if(cljs.core.truth_(sci.impl.vars.dynamic_var_QMARK_.call(null,var_STAR_))){
} else {
throw (new Error(["Can't dynamically bind non-dynamic var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_STAR_)].join('')));
}

sci.impl.vars.setThreadBound.call(null,var_STAR_,true);

return cljs.core.assoc.call(null,acc,var_STAR_,(new sci.impl.vars.TBox(null,val_STAR_)));
}),bmap,bindings);
return sci.impl.vars.reset_thread_binding_frame.call(null,(new sci.impl.vars.Frame(bmap__$1,frame)));
});
sci.impl.vars.pop_thread_bindings = (function sci$impl$vars$pop_thread_bindings(){
var temp__5718__auto__ = sci.impl.vars.get_thread_binding_frame.call(null).prev;
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
if((sci.impl.vars.top_frame === f)){
return cljs.core.reset_BANG_.call(null,sci.impl.vars.dvals,sci.impl.vars.top_frame);
} else {
return sci.impl.vars.reset_thread_binding_frame.call(null,f);
}
} else {
throw (new Error("No frame to pop."));
}
});
sci.impl.vars.get_thread_bindings = (function sci$impl$vars$get_thread_bindings(){
var f = sci.impl.vars.get_thread_binding_frame.call(null);
var ret = cljs.core.PersistentArrayMap.EMPTY;
var kvs = cljs.core.seq.call(null,f.bindings);
while(true){
if(kvs){
var vec__32320 = cljs.core.first.call(null,kvs);
var var_STAR_ = cljs.core.nth.call(null,vec__32320,(0),null);
var tbox = cljs.core.nth.call(null,vec__32320,(1),null);
var tbox_val = sci.impl.types.getVal.call(null,tbox);
var G__32323 = cljs.core.assoc.call(null,ret,var_STAR_,tbox_val);
var G__32324 = cljs.core.next.call(null,kvs);
ret = G__32323;
kvs = G__32324;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.vars.get_thread_binding = (function sci$impl$vars$get_thread_binding(sci_var){
var temp__5720__auto__ = cljs.core.deref.call(null,sci.impl.vars.dvals);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return f.bindings.get(sci_var);
} else {
return null;
}
});
sci.impl.vars.binding_conveyor_fn = (function sci$impl$vars$binding_conveyor_fn(f){
var frame = sci.impl.vars.clone_thread_binding_frame.call(null);
return (function() {
var G__32325 = null;
var G__32325__0 = (function (){
sci.impl.vars.reset_thread_binding_frame.call(null,frame);

return f.call(null);
});
var G__32325__1 = (function (x){
sci.impl.vars.reset_thread_binding_frame.call(null,frame);

return f.call(null,x);
});
var G__32325__2 = (function (x,y){
sci.impl.vars.reset_thread_binding_frame.call(null,frame);

return f.call(null,x,y);
});
var G__32325__3 = (function (x,y,z){
sci.impl.vars.reset_thread_binding_frame.call(null,frame);

return f.call(null,x,y,z);
});
var G__32325__4 = (function() { 
var G__32326__delegate = function (x,y,z,args){
sci.impl.vars.reset_thread_binding_frame.call(null,frame);

return cljs.core.apply.call(null,f,x,y,z,args);
};
var G__32326 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__32327__i = 0, G__32327__a = new Array(arguments.length -  3);
while (G__32327__i < G__32327__a.length) {G__32327__a[G__32327__i] = arguments[G__32327__i + 3]; ++G__32327__i;}
  args = new cljs.core.IndexedSeq(G__32327__a,0,null);
} 
return G__32326__delegate.call(this,x,y,z,args);};
G__32326.cljs$lang$maxFixedArity = 3;
G__32326.cljs$lang$applyTo = (function (arglist__32328){
var x = cljs.core.first(arglist__32328);
arglist__32328 = cljs.core.next(arglist__32328);
var y = cljs.core.first(arglist__32328);
arglist__32328 = cljs.core.next(arglist__32328);
var z = cljs.core.first(arglist__32328);
var args = cljs.core.rest(arglist__32328);
return G__32326__delegate(x,y,z,args);
});
G__32326.cljs$core$IFn$_invoke$arity$variadic = G__32326__delegate;
return G__32326;
})()
;
G__32325 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__32325__0.call(this);
case 1:
return G__32325__1.call(this,x);
case 2:
return G__32325__2.call(this,x,y);
case 3:
return G__32325__3.call(this,x,y,z);
default:
var G__32329 = null;
if (arguments.length > 3) {
var G__32330__i = 0, G__32330__a = new Array(arguments.length -  3);
while (G__32330__i < G__32330__a.length) {G__32330__a[G__32330__i] = arguments[G__32330__i + 3]; ++G__32330__i;}
G__32329 = new cljs.core.IndexedSeq(G__32330__a,0,null);
}
return G__32325__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__32329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32325.cljs$lang$maxFixedArity = 3;
G__32325.cljs$lang$applyTo = G__32325__4.cljs$lang$applyTo;
G__32325.cljs$core$IFn$_invoke$arity$0 = G__32325__0;
G__32325.cljs$core$IFn$_invoke$arity$1 = G__32325__1;
G__32325.cljs$core$IFn$_invoke$arity$2 = G__32325__2;
G__32325.cljs$core$IFn$_invoke$arity$3 = G__32325__3;
G__32325.cljs$core$IFn$_invoke$arity$variadic = G__32325__4.cljs$core$IFn$_invoke$arity$variadic;
return G__32325;
})()
});
sci.impl.vars.throw_unbound_call_exception = (function sci$impl$vars$throw_unbound_call_exception(the_var){
throw (new Error(["Attempting to call unbound fn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_var)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {sci.impl.vars.Object}
*/
sci.impl.vars.SciUnbound = (function (the_var){
this.the_var = the_var;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciUnbound.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["Unbound: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.the_var)].join('');
}));

(sci.impl.vars.SciUnbound.prototype.call = (function() {
var G__32333 = null;
var G__32333__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
var G__32333__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
});
G__32333 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__32333__1.call(this,self__);
case 2:
return G__32333__2.call(this,self__,a);
case 3:
return G__32333__3.call(this,self__,a,b);
case 4:
return G__32333__4.call(this,self__,a,b,c);
case 5:
return G__32333__5.call(this,self__,a,b,c,d);
case 6:
return G__32333__6.call(this,self__,a,b,c,d,e);
case 7:
return G__32333__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__32333__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__32333__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__32333__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__32333__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__32333__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__32333__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__32333__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__32333__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__32333__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__32333__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__32333__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__32333__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__32333__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__32333__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__32333__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32333.cljs$core$IFn$_invoke$arity$1 = G__32333__1;
G__32333.cljs$core$IFn$_invoke$arity$2 = G__32333__2;
G__32333.cljs$core$IFn$_invoke$arity$3 = G__32333__3;
G__32333.cljs$core$IFn$_invoke$arity$4 = G__32333__4;
G__32333.cljs$core$IFn$_invoke$arity$5 = G__32333__5;
G__32333.cljs$core$IFn$_invoke$arity$6 = G__32333__6;
G__32333.cljs$core$IFn$_invoke$arity$7 = G__32333__7;
G__32333.cljs$core$IFn$_invoke$arity$8 = G__32333__8;
G__32333.cljs$core$IFn$_invoke$arity$9 = G__32333__9;
G__32333.cljs$core$IFn$_invoke$arity$10 = G__32333__10;
G__32333.cljs$core$IFn$_invoke$arity$11 = G__32333__11;
G__32333.cljs$core$IFn$_invoke$arity$12 = G__32333__12;
G__32333.cljs$core$IFn$_invoke$arity$13 = G__32333__13;
G__32333.cljs$core$IFn$_invoke$arity$14 = G__32333__14;
G__32333.cljs$core$IFn$_invoke$arity$15 = G__32333__15;
G__32333.cljs$core$IFn$_invoke$arity$16 = G__32333__16;
G__32333.cljs$core$IFn$_invoke$arity$17 = G__32333__17;
G__32333.cljs$core$IFn$_invoke$arity$18 = G__32333__18;
G__32333.cljs$core$IFn$_invoke$arity$19 = G__32333__19;
G__32333.cljs$core$IFn$_invoke$arity$20 = G__32333__20;
G__32333.cljs$core$IFn$_invoke$arity$21 = G__32333__21;
G__32333.cljs$core$IFn$_invoke$arity$22 = G__32333__22;
return G__32333;
})()
);

(sci.impl.vars.SciUnbound.prototype.apply = (function (self__,args32331){
var self__ = this;
var self____$1 = this;
var args__21357__auto__ = cljs.core.aclone.call(null,args32331);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__21357__auto__.length > (20)))?(function (){var G__32332 = args__21357__auto__.slice((0),(20));
G__32332.push(args__21357__auto__.slice((20)));

return G__32332;
})():args__21357__auto__)));
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception.call(null,self__.the_var);
}));

(sci.impl.vars.SciUnbound.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"the-var","the-var",-1226020156,null)], null);
}));

(sci.impl.vars.SciUnbound.cljs$lang$type = true);

(sci.impl.vars.SciUnbound.cljs$lang$ctorStr = "sci.impl.vars/SciUnbound");

(sci.impl.vars.SciUnbound.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"sci.impl.vars/SciUnbound");
}));

/**
 * Positional factory function for sci.impl.vars/SciUnbound.
 */
sci.impl.vars.__GT_SciUnbound = (function sci$impl$vars$__GT_SciUnbound(the_var){
return (new sci.impl.vars.SciUnbound(the_var));
});

sci.impl.vars.built_in_var_QMARK_ = (function sci$impl$vars$built_in_var_QMARK_(var_meta){
return new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(var_meta);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {sci.impl.vars.HasName}
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.vars.IVar}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {sci.impl.types.IBox}
 * @implements {sci.impl.vars.Object}
*/
sci.impl.vars.SciVar = (function (root,sym,meta,thread_bound){
this.root = root;
this.sym = sym;
this.meta = meta;
this.thread_bound = thread_bound;
this.cljs$lang$protocol_mask$partition0$ = 2147647489;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciVar.prototype.sci$impl$vars$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$vars$HasName$getName$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.sym;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$bindRoot$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var vm__32235__auto__ = self__.meta;
if(cljs.core.truth_((function (){var or__20754__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(vm__32235__auto__));
}
})())){
return (this$__$1.root = v);
} else {
var the_var__32236__auto__ = this$__$1;
var ns__32237__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm__32235__auto__);
var ns_name__32238__auto__ = sci.impl.vars.getName.call(null,ns__32237__auto__);
var name__32239__auto__ = sci.impl.vars.getName.call(null,the_var__32236__auto__);
throw cljs.core.ex_info.call(null,["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__32238__auto__),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__32239__auto__)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),this$__$1], null));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$getRawRoot$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.root;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$toSymbol$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.sym;
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$isMacro$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__20754__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(self__.meta);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var temp__5724__auto__ = cljs.core.meta.call(null,self__.root);
if((temp__5724__auto__ == null)){
return null;
} else {
var m = temp__5724__auto__;
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m);
}
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$setThreadBound$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (this$__$1.thread_bound = v);
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$unbind$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vm__32235__auto__ = self__.meta;
if(cljs.core.truth_((function (){var or__20754__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(vm__32235__auto__));
}
})())){
return (this$__$1.root = (new sci.impl.vars.SciUnbound(this$__$1)));
} else {
var the_var__32236__auto__ = this$__$1;
var ns__32237__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm__32235__auto__);
var ns_name__32238__auto__ = sci.impl.vars.getName.call(null,ns__32237__auto__);
var name__32239__auto__ = sci.impl.vars.getName.call(null,the_var__32236__auto__);
throw cljs.core.ex_info.call(null,["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__32238__auto__),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__32239__auto__)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),this$__$1], null));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$vars$IVar$hasRoot$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (!((self__.root instanceof sci.impl.vars.SciUnbound)));
}));

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = sci.impl.vars.get_thread_binding.call(null,this$__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var b = temp__5718__auto__;
return sci.impl.types.setVal.call(null,b,v);
} else {
throw (new Error(["Can't change/establish root binding of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," with set"].join('')));
}
}));

(sci.impl.vars.SciVar.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.root;
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.thread_bound)){
var temp__5718__auto__ = sci.impl.vars.get_thread_binding.call(null,this$__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var tbox = temp__5718__auto__;
return sci.impl.types.getVal.call(null,tbox);
} else {
return self__.root;
}
} else {
return self__.root;
}
}));

(sci.impl.vars.SciVar.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.sym)].join('');
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#'");

return cljs.core.pr_writer.call(null,self__.sym,writer,opts);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.impl.vars.SciVar.prototype.call = (function() {
var G__32341 = null;
var G__32341__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null);
});
var G__32341__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a);
});
var G__32341__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b);
});
var G__32341__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c);
});
var G__32341__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d);
});
var G__32341__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e);
});
var G__32341__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f);
});
var G__32341__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g);
});
var G__32341__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h);
});
var G__32341__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i);
});
var G__32341__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j);
});
var G__32341__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k);
});
var G__32341__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__32341__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
var G__32341__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__32341__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
var G__32341__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__32341__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
var G__32341__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__32341__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__32341__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__32341__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.call(null,cljs.core.deref.call(null,this$),a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__32341 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__32341__1.call(this,self__);
case 2:
return G__32341__2.call(this,self__,a);
case 3:
return G__32341__3.call(this,self__,a,b);
case 4:
return G__32341__4.call(this,self__,a,b,c);
case 5:
return G__32341__5.call(this,self__,a,b,c,d);
case 6:
return G__32341__6.call(this,self__,a,b,c,d,e);
case 7:
return G__32341__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__32341__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__32341__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__32341__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__32341__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__32341__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__32341__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__32341__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__32341__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__32341__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__32341__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__32341__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__32341__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__32341__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__32341__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__32341__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32341.cljs$core$IFn$_invoke$arity$1 = G__32341__1;
G__32341.cljs$core$IFn$_invoke$arity$2 = G__32341__2;
G__32341.cljs$core$IFn$_invoke$arity$3 = G__32341__3;
G__32341.cljs$core$IFn$_invoke$arity$4 = G__32341__4;
G__32341.cljs$core$IFn$_invoke$arity$5 = G__32341__5;
G__32341.cljs$core$IFn$_invoke$arity$6 = G__32341__6;
G__32341.cljs$core$IFn$_invoke$arity$7 = G__32341__7;
G__32341.cljs$core$IFn$_invoke$arity$8 = G__32341__8;
G__32341.cljs$core$IFn$_invoke$arity$9 = G__32341__9;
G__32341.cljs$core$IFn$_invoke$arity$10 = G__32341__10;
G__32341.cljs$core$IFn$_invoke$arity$11 = G__32341__11;
G__32341.cljs$core$IFn$_invoke$arity$12 = G__32341__12;
G__32341.cljs$core$IFn$_invoke$arity$13 = G__32341__13;
G__32341.cljs$core$IFn$_invoke$arity$14 = G__32341__14;
G__32341.cljs$core$IFn$_invoke$arity$15 = G__32341__15;
G__32341.cljs$core$IFn$_invoke$arity$16 = G__32341__16;
G__32341.cljs$core$IFn$_invoke$arity$17 = G__32341__17;
G__32341.cljs$core$IFn$_invoke$arity$18 = G__32341__18;
G__32341.cljs$core$IFn$_invoke$arity$19 = G__32341__19;
G__32341.cljs$core$IFn$_invoke$arity$20 = G__32341__20;
G__32341.cljs$core$IFn$_invoke$arity$21 = G__32341__21;
G__32341.cljs$core$IFn$_invoke$arity$22 = G__32341__22;
return G__32341;
})()
);

(sci.impl.vars.SciVar.prototype.apply = (function (self__,args32339){
var self__ = this;
var self____$1 = this;
var args__21357__auto__ = cljs.core.aclone.call(null,args32339);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__21357__auto__.length > (20)))?(function (){var G__32340 = args__21357__auto__.slice((0),(20));
G__32340.push(args__21357__auto__.slice((20)));

return G__32340;
})():args__21357__auto__)));
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
return cljs.core.deref.call(null,this$).call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}));

(sci.impl.vars.SciVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.call(null,cljs.core.deref.call(null,this$),a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}));

(sci.impl.vars.SciVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"sym","sym",195671222,null),cljs.core.with_meta(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"thread-bound","thread-bound",1232527493,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.SciVar.cljs$lang$type = true);

(sci.impl.vars.SciVar.cljs$lang$ctorStr = "sci.impl.vars/SciVar");

(sci.impl.vars.SciVar.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"sci.impl.vars/SciVar");
}));

/**
 * Positional factory function for sci.impl.vars/SciVar.
 */
sci.impl.vars.__GT_SciVar = (function sci$impl$vars$__GT_SciVar(root,sym,meta,thread_bound){
return (new sci.impl.vars.SciVar(root,sym,meta,thread_bound));
});

sci.impl.vars.var_get = (function sci$impl$vars$var_get(v){
return cljs.core.deref.call(null,v);
});
sci.impl.vars.var_set = (function sci$impl$vars$var_set(v,val){
return sci.impl.types.setVal.call(null,v,val);
});
sci.impl.vars.var_QMARK_ = (function sci$impl$vars$var_QMARK_(x){
return (x instanceof sci.impl.vars.SciVar);
});
sci.impl.vars.dynamic_var = (function sci$impl$vars$dynamic_var(var_args){
var G__32343 = arguments.length;
switch (G__32343) {
case 1:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.vars.dynamic_var.call(null,name,null,cljs.core.meta.call(null,name));
}));

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.call(null,name,init_val,cljs.core.meta.call(null,name));
}));

(sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true);
return (new sci.impl.vars.SciVar(init_val,name,meta__$1,false));
}));

(sci.impl.vars.dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.vars.user_ns = sci.impl.vars.__GT_SciNamespace.call(null,new cljs.core.Symbol(null,"user","user",-1122004413,null),null);
sci.impl.vars.clojure_core_ns = sci.impl.vars.__GT_SciNamespace.call(null,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),null);
sci.impl.vars.current_file = sci.impl.vars.dynamic_var.call(null,new cljs.core.Symbol(null,"*file*","*file*",624866474,null),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
sci.impl.vars.current_ns = sci.impl.vars.dynamic_var.call(null,new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),sci.impl.vars.user_ns,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
sci.impl.vars.current_ns_name = (function sci$impl$vars$current_ns_name(){
return sci.impl.vars.getName.call(null,cljs.core.deref.call(null,sci.impl.vars.current_ns));
});
sci.impl.vars.alter_var_root = (function sci$impl$vars$alter_var_root(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32348 = arguments.length;
var i__22083__auto___32349 = (0);
while(true){
if((i__22083__auto___32349 < len__22082__auto___32348)){
args__22092__auto__.push((arguments[i__22083__auto___32349]));

var G__32350 = (i__22083__auto___32349 + (1));
i__22083__auto___32349 = G__32350;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic = (function (v,f,args){
return sci.impl.vars.bindRoot.call(null,v,cljs.core.apply.call(null,f,sci.impl.vars.getRawRoot.call(null,v),args));
}));

(sci.impl.vars.alter_var_root.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.vars.alter_var_root.cljs$lang$applyTo = (function (seq32345){
var G__32346 = cljs.core.first.call(null,seq32345);
var seq32345__$1 = cljs.core.next.call(null,seq32345);
var G__32347 = cljs.core.first.call(null,seq32345__$1);
var seq32345__$2 = cljs.core.next.call(null,seq32345__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32346,G__32347,seq32345__$2);
}));

/**
 * Returns a new sci var.
 */
sci.impl.vars.new_var = (function sci$impl$vars$new_var(var_args){
var G__32352 = arguments.length;
switch (G__32352) {
case 1:
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
var G__32353 = sci.impl.vars.new_var.call(null,name,null,null);
sci.impl.vars.unbind.call(null,G__32353);

return G__32353;
}));

(sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.new_var.call(null,name,init_val,cljs.core.meta.call(null,name));
}));

(sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
return sci.impl.vars.__GT_SciVar.call(null,init_val,name,meta,false);
}));

(sci.impl.vars.new_var.cljs$lang$maxFixedArity = 3);

