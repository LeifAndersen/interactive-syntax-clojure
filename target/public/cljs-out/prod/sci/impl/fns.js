// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.fns');
goog.require('cljs.core');
goog.require('sci.impl.evaluator');
goog.require('sci.impl.faster');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
var ret__22143__auto___50685 = (function (){
sci.impl.fns.gen_fn = (function sci$impl$fns$gen_fn(var_args){
var G__50682 = arguments.length;
switch (G__50682) {
case 3:
return sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.fns","gen-fn","sci.impl.fns/gen-fn",-264808315,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))));
}));

(sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,n,disable_arity_checks){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.fns","gen-fn","sci.impl.fns/gen-fn",-264808315,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,disable_arity_checks,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))));
}));

(sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,n,_disable_arity_checks,varargs){
if((n === (0))){
var varargs_param = (cljs.core.truth_(varargs)?cljs.core.gensym.call(null):null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arity-0","arity-0",-1176619242,null),null,(1),null)),(new cljs.core.List(null,(function (){var G__50683 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(varargs)){
return cljs.core.conj.call(null,G__50683,new cljs.core.Symbol(null,"&","&",-2144855648,null),varargs_param);
} else {
return G__50683;
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-array","invoc-array",-640824576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","object-array","cljs.core/object-array",613323432,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-size","invoc-size",-601137711,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"enclosed->invocation","enclosed->invocation",-238423371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"enclosed->invocation","enclosed->invocation",-238423371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"enclosed-array","enclosed-array",426492174,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-array","invoc-array",-640824576,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(cljs.core.truth_(varargs)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-array","invoc-array",-640824576,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vararg-idx","vararg-idx",1049540299,null),null,(1),null)),(new cljs.core.List(null,varargs_param,null,(1),null)))))], null):null),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__50679__auto__","ret__50679__auto__",-1298336393,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","eval","sci.impl.types/eval",700838406,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"body","body",-408674142,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-array","invoc-array",-640824576,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.utils","kw-identical?","sci.impl.utils/kw-identical?",-1865569573,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__50679__auto__","ret__50679__auto__",-1298336393,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__50679__auto__","ret__50679__auto__",-1298336393,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
var locals = cljs.core.repeatedly.call(null,n,cljs.core.gensym);
var fn_params = cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,cljs.core.gensym));
var varargs_param = (cljs.core.truth_(varargs)?cljs.core.gensym.call(null):null);
var rnge = cljs.core.range.call(null,n);
var nths = cljs.core.map.call(null,(function (n__$1){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.faster","nth-2","sci.impl.faster/nth-2",-1663694900,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"params","params",-1943919534,null),null,(1),null)),(new cljs.core.List(null,n__$1,null,(1),null)))));
}),rnge);
var let_vec = cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (local,ith){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [local,ith], null);
}),locals,nths));
var asets = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (fn_param,idx){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"invoc-array","invoc-array",-640824576,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,fn_param,null,(1),null)))));
}),fn_params,cljs.core.range.call(null)))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,let_vec,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["arity-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),null,(1),null)),(new cljs.core.List(null,(function (){var G__50684 = fn_params;
if(cljs.core.truth_(varargs)){
return cljs.core.conj.call(null,G__50684,new cljs.core.Symbol(null,"&","&",-2144855648,null),varargs_param);
} else {
return G__50684;
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-array","invoc-array",-640824576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","object-array","cljs.core/object-array",613323432,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-size","invoc-size",-601137711,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"enclosed->invocation","enclosed->invocation",-238423371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"enclosed->invocation","enclosed->invocation",-238423371,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"enclosed-array","enclosed-array",426492174,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-array","invoc-array",-640824576,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,asets,null,(1),null)),(cljs.core.truth_(varargs)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-array","invoc-array",-640824576,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vararg-idx","vararg-idx",1049540299,null),null,(1),null)),(new cljs.core.List(null,varargs_param,null,(1),null)))))], null):null),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__50680__auto__","ret__50680__auto__",-1500438141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","eval","sci.impl.types/eval",700838406,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"body","body",-408674142,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invoc-array","invoc-array",-640824576,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.utils","kw-identical?","sci.impl.utils/kw-identical?",-1865569573,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__50680__auto__","ret__50680__auto__",-1500438141,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__50680__auto__","ret__50680__auto__",-1500438141,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}
}));

(sci.impl.fns.gen_fn.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(sci.impl.fns.gen_fn.cljs$lang$macro = true);

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name.call(null);
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__50687 = (fixed_arity | (0));
switch (G__50687) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__50688){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[vararg_idx] = G__50688);

while(true){
var ret__49658__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49658__auto__)){
continue;
} else {
return ret__49658__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__50688 = null;
if (arguments.length > 0) {
var G__51551__i = 0, G__51551__a = new Array(arguments.length -  0);
while (G__51551__i < G__51551__a.length) {G__51551__a[G__51551__i] = arguments[G__51551__i + 0]; ++G__51551__i;}
  G__50688 = new cljs.core.IndexedSeq(G__51551__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__50688);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__51552){
var G__50688 = cljs.core.seq(arglist__51552);
return sci$impl$fns$fun_$_arity_0__delegate(G__50688);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__50691 = cljs.core._nth.call(null,params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__50689,G__50690){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50689);

(invoc_array[vararg_idx] = G__50690);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__50689,var_args){
var G__50690 = null;
if (arguments.length > 1) {
var G__51553__i = 0, G__51553__a = new Array(arguments.length -  1);
while (G__51553__i < G__51553__a.length) {G__51553__a[G__51553__i] = arguments[G__51553__i + 1]; ++G__51553__i;}
  G__50690 = new cljs.core.IndexedSeq(G__51553__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__50689,G__50690);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__51554){
var G__50689 = cljs.core.first(arglist__51554);
var G__50690 = cljs.core.rest(arglist__51554);
return sci$impl$fns$fun_$_arity_1__delegate(G__50689,G__50690);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__50695 = cljs.core._nth.call(null,params,(0));
var G__50696 = cljs.core._nth.call(null,params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__50692,G__50693,G__50694){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50692);

(invoc_array[(1)] = G__50693);

(invoc_array[vararg_idx] = G__50694);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__50692,G__50693,var_args){
var G__50694 = null;
if (arguments.length > 2) {
var G__51555__i = 0, G__51555__a = new Array(arguments.length -  2);
while (G__51555__i < G__51555__a.length) {G__51555__a[G__51555__i] = arguments[G__51555__i + 2]; ++G__51555__i;}
  G__50694 = new cljs.core.IndexedSeq(G__51555__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__50692,G__50693,G__50694);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__51556){
var G__50692 = cljs.core.first(arglist__51556);
arglist__51556 = cljs.core.next(arglist__51556);
var G__50693 = cljs.core.first(arglist__51556);
var G__50694 = cljs.core.rest(arglist__51556);
return sci$impl$fns$fun_$_arity_2__delegate(G__50692,G__50693,G__50694);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__50701 = cljs.core._nth.call(null,params,(0));
var G__50702 = cljs.core._nth.call(null,params,(1));
var G__50703 = cljs.core._nth.call(null,params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__50697,G__50698,G__50699,G__50700){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50697);

(invoc_array[(1)] = G__50698);

(invoc_array[(2)] = G__50699);

(invoc_array[vararg_idx] = G__50700);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__50697,G__50698,G__50699,var_args){
var G__50700 = null;
if (arguments.length > 3) {
var G__51557__i = 0, G__51557__a = new Array(arguments.length -  3);
while (G__51557__i < G__51557__a.length) {G__51557__a[G__51557__i] = arguments[G__51557__i + 3]; ++G__51557__i;}
  G__50700 = new cljs.core.IndexedSeq(G__51557__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__50697,G__50698,G__50699,G__50700);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__51558){
var G__50697 = cljs.core.first(arglist__51558);
arglist__51558 = cljs.core.next(arglist__51558);
var G__50698 = cljs.core.first(arglist__51558);
arglist__51558 = cljs.core.next(arglist__51558);
var G__50699 = cljs.core.first(arglist__51558);
var G__50700 = cljs.core.rest(arglist__51558);
return sci$impl$fns$fun_$_arity_3__delegate(G__50697,G__50698,G__50699,G__50700);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__50709 = cljs.core._nth.call(null,params,(0));
var G__50710 = cljs.core._nth.call(null,params,(1));
var G__50711 = cljs.core._nth.call(null,params,(2));
var G__50712 = cljs.core._nth.call(null,params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__50704,G__50705,G__50706,G__50707,G__50708){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50704);

(invoc_array[(1)] = G__50705);

(invoc_array[(2)] = G__50706);

(invoc_array[(3)] = G__50707);

(invoc_array[vararg_idx] = G__50708);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__50704,G__50705,G__50706,G__50707,var_args){
var G__50708 = null;
if (arguments.length > 4) {
var G__51559__i = 0, G__51559__a = new Array(arguments.length -  4);
while (G__51559__i < G__51559__a.length) {G__51559__a[G__51559__i] = arguments[G__51559__i + 4]; ++G__51559__i;}
  G__50708 = new cljs.core.IndexedSeq(G__51559__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__50704,G__50705,G__50706,G__50707,G__50708);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__51560){
var G__50704 = cljs.core.first(arglist__51560);
arglist__51560 = cljs.core.next(arglist__51560);
var G__50705 = cljs.core.first(arglist__51560);
arglist__51560 = cljs.core.next(arglist__51560);
var G__50706 = cljs.core.first(arglist__51560);
arglist__51560 = cljs.core.next(arglist__51560);
var G__50707 = cljs.core.first(arglist__51560);
var G__50708 = cljs.core.rest(arglist__51560);
return sci$impl$fns$fun_$_arity_4__delegate(G__50704,G__50705,G__50706,G__50707,G__50708);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__50719 = cljs.core._nth.call(null,params,(0));
var G__50720 = cljs.core._nth.call(null,params,(1));
var G__50721 = cljs.core._nth.call(null,params,(2));
var G__50722 = cljs.core._nth.call(null,params,(3));
var G__50723 = cljs.core._nth.call(null,params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__50713,G__50714,G__50715,G__50716,G__50717,G__50718){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50713);

(invoc_array[(1)] = G__50714);

(invoc_array[(2)] = G__50715);

(invoc_array[(3)] = G__50716);

(invoc_array[(4)] = G__50717);

(invoc_array[vararg_idx] = G__50718);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__50713,G__50714,G__50715,G__50716,G__50717,var_args){
var G__50718 = null;
if (arguments.length > 5) {
var G__51561__i = 0, G__51561__a = new Array(arguments.length -  5);
while (G__51561__i < G__51561__a.length) {G__51561__a[G__51561__i] = arguments[G__51561__i + 5]; ++G__51561__i;}
  G__50718 = new cljs.core.IndexedSeq(G__51561__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__50713,G__50714,G__50715,G__50716,G__50717,G__50718);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__51562){
var G__50713 = cljs.core.first(arglist__51562);
arglist__51562 = cljs.core.next(arglist__51562);
var G__50714 = cljs.core.first(arglist__51562);
arglist__51562 = cljs.core.next(arglist__51562);
var G__50715 = cljs.core.first(arglist__51562);
arglist__51562 = cljs.core.next(arglist__51562);
var G__50716 = cljs.core.first(arglist__51562);
arglist__51562 = cljs.core.next(arglist__51562);
var G__50717 = cljs.core.first(arglist__51562);
var G__50718 = cljs.core.rest(arglist__51562);
return sci$impl$fns$fun_$_arity_5__delegate(G__50713,G__50714,G__50715,G__50716,G__50717,G__50718);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__50731 = cljs.core._nth.call(null,params,(0));
var G__50732 = cljs.core._nth.call(null,params,(1));
var G__50733 = cljs.core._nth.call(null,params,(2));
var G__50734 = cljs.core._nth.call(null,params,(3));
var G__50735 = cljs.core._nth.call(null,params,(4));
var G__50736 = cljs.core._nth.call(null,params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__50724,G__50725,G__50726,G__50727,G__50728,G__50729,G__50730){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50724);

(invoc_array[(1)] = G__50725);

(invoc_array[(2)] = G__50726);

(invoc_array[(3)] = G__50727);

(invoc_array[(4)] = G__50728);

(invoc_array[(5)] = G__50729);

(invoc_array[vararg_idx] = G__50730);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__50724,G__50725,G__50726,G__50727,G__50728,G__50729,var_args){
var G__50730 = null;
if (arguments.length > 6) {
var G__51563__i = 0, G__51563__a = new Array(arguments.length -  6);
while (G__51563__i < G__51563__a.length) {G__51563__a[G__51563__i] = arguments[G__51563__i + 6]; ++G__51563__i;}
  G__50730 = new cljs.core.IndexedSeq(G__51563__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__50724,G__50725,G__50726,G__50727,G__50728,G__50729,G__50730);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__51564){
var G__50724 = cljs.core.first(arglist__51564);
arglist__51564 = cljs.core.next(arglist__51564);
var G__50725 = cljs.core.first(arglist__51564);
arglist__51564 = cljs.core.next(arglist__51564);
var G__50726 = cljs.core.first(arglist__51564);
arglist__51564 = cljs.core.next(arglist__51564);
var G__50727 = cljs.core.first(arglist__51564);
arglist__51564 = cljs.core.next(arglist__51564);
var G__50728 = cljs.core.first(arglist__51564);
arglist__51564 = cljs.core.next(arglist__51564);
var G__50729 = cljs.core.first(arglist__51564);
var G__50730 = cljs.core.rest(arglist__51564);
return sci$impl$fns$fun_$_arity_6__delegate(G__50724,G__50725,G__50726,G__50727,G__50728,G__50729,G__50730);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__50745 = cljs.core._nth.call(null,params,(0));
var G__50746 = cljs.core._nth.call(null,params,(1));
var G__50747 = cljs.core._nth.call(null,params,(2));
var G__50748 = cljs.core._nth.call(null,params,(3));
var G__50749 = cljs.core._nth.call(null,params,(4));
var G__50750 = cljs.core._nth.call(null,params,(5));
var G__50751 = cljs.core._nth.call(null,params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__50737,G__50738,G__50739,G__50740,G__50741,G__50742,G__50743,G__50744){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50737);

(invoc_array[(1)] = G__50738);

(invoc_array[(2)] = G__50739);

(invoc_array[(3)] = G__50740);

(invoc_array[(4)] = G__50741);

(invoc_array[(5)] = G__50742);

(invoc_array[(6)] = G__50743);

(invoc_array[vararg_idx] = G__50744);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__50737,G__50738,G__50739,G__50740,G__50741,G__50742,G__50743,var_args){
var G__50744 = null;
if (arguments.length > 7) {
var G__51565__i = 0, G__51565__a = new Array(arguments.length -  7);
while (G__51565__i < G__51565__a.length) {G__51565__a[G__51565__i] = arguments[G__51565__i + 7]; ++G__51565__i;}
  G__50744 = new cljs.core.IndexedSeq(G__51565__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__50737,G__50738,G__50739,G__50740,G__50741,G__50742,G__50743,G__50744);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__51566){
var G__50737 = cljs.core.first(arglist__51566);
arglist__51566 = cljs.core.next(arglist__51566);
var G__50738 = cljs.core.first(arglist__51566);
arglist__51566 = cljs.core.next(arglist__51566);
var G__50739 = cljs.core.first(arglist__51566);
arglist__51566 = cljs.core.next(arglist__51566);
var G__50740 = cljs.core.first(arglist__51566);
arglist__51566 = cljs.core.next(arglist__51566);
var G__50741 = cljs.core.first(arglist__51566);
arglist__51566 = cljs.core.next(arglist__51566);
var G__50742 = cljs.core.first(arglist__51566);
arglist__51566 = cljs.core.next(arglist__51566);
var G__50743 = cljs.core.first(arglist__51566);
var G__50744 = cljs.core.rest(arglist__51566);
return sci$impl$fns$fun_$_arity_7__delegate(G__50737,G__50738,G__50739,G__50740,G__50741,G__50742,G__50743,G__50744);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__50761 = cljs.core._nth.call(null,params,(0));
var G__50762 = cljs.core._nth.call(null,params,(1));
var G__50763 = cljs.core._nth.call(null,params,(2));
var G__50764 = cljs.core._nth.call(null,params,(3));
var G__50765 = cljs.core._nth.call(null,params,(4));
var G__50766 = cljs.core._nth.call(null,params,(5));
var G__50767 = cljs.core._nth.call(null,params,(6));
var G__50768 = cljs.core._nth.call(null,params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__50752,G__50753,G__50754,G__50755,G__50756,G__50757,G__50758,G__50759,G__50760){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50752);

(invoc_array[(1)] = G__50753);

(invoc_array[(2)] = G__50754);

(invoc_array[(3)] = G__50755);

(invoc_array[(4)] = G__50756);

(invoc_array[(5)] = G__50757);

(invoc_array[(6)] = G__50758);

(invoc_array[(7)] = G__50759);

(invoc_array[vararg_idx] = G__50760);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__50752,G__50753,G__50754,G__50755,G__50756,G__50757,G__50758,G__50759,var_args){
var G__50760 = null;
if (arguments.length > 8) {
var G__51567__i = 0, G__51567__a = new Array(arguments.length -  8);
while (G__51567__i < G__51567__a.length) {G__51567__a[G__51567__i] = arguments[G__51567__i + 8]; ++G__51567__i;}
  G__50760 = new cljs.core.IndexedSeq(G__51567__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__50752,G__50753,G__50754,G__50755,G__50756,G__50757,G__50758,G__50759,G__50760);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__51568){
var G__50752 = cljs.core.first(arglist__51568);
arglist__51568 = cljs.core.next(arglist__51568);
var G__50753 = cljs.core.first(arglist__51568);
arglist__51568 = cljs.core.next(arglist__51568);
var G__50754 = cljs.core.first(arglist__51568);
arglist__51568 = cljs.core.next(arglist__51568);
var G__50755 = cljs.core.first(arglist__51568);
arglist__51568 = cljs.core.next(arglist__51568);
var G__50756 = cljs.core.first(arglist__51568);
arglist__51568 = cljs.core.next(arglist__51568);
var G__50757 = cljs.core.first(arglist__51568);
arglist__51568 = cljs.core.next(arglist__51568);
var G__50758 = cljs.core.first(arglist__51568);
arglist__51568 = cljs.core.next(arglist__51568);
var G__50759 = cljs.core.first(arglist__51568);
var G__50760 = cljs.core.rest(arglist__51568);
return sci$impl$fns$fun_$_arity_8__delegate(G__50752,G__50753,G__50754,G__50755,G__50756,G__50757,G__50758,G__50759,G__50760);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__50779 = cljs.core._nth.call(null,params,(0));
var G__50780 = cljs.core._nth.call(null,params,(1));
var G__50781 = cljs.core._nth.call(null,params,(2));
var G__50782 = cljs.core._nth.call(null,params,(3));
var G__50783 = cljs.core._nth.call(null,params,(4));
var G__50784 = cljs.core._nth.call(null,params,(5));
var G__50785 = cljs.core._nth.call(null,params,(6));
var G__50786 = cljs.core._nth.call(null,params,(7));
var G__50787 = cljs.core._nth.call(null,params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__50769,G__50770,G__50771,G__50772,G__50773,G__50774,G__50775,G__50776,G__50777,G__50778){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50769);

(invoc_array[(1)] = G__50770);

(invoc_array[(2)] = G__50771);

(invoc_array[(3)] = G__50772);

(invoc_array[(4)] = G__50773);

(invoc_array[(5)] = G__50774);

(invoc_array[(6)] = G__50775);

(invoc_array[(7)] = G__50776);

(invoc_array[(8)] = G__50777);

(invoc_array[vararg_idx] = G__50778);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__50769,G__50770,G__50771,G__50772,G__50773,G__50774,G__50775,G__50776,G__50777,var_args){
var G__50778 = null;
if (arguments.length > 9) {
var G__51569__i = 0, G__51569__a = new Array(arguments.length -  9);
while (G__51569__i < G__51569__a.length) {G__51569__a[G__51569__i] = arguments[G__51569__i + 9]; ++G__51569__i;}
  G__50778 = new cljs.core.IndexedSeq(G__51569__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__50769,G__50770,G__50771,G__50772,G__50773,G__50774,G__50775,G__50776,G__50777,G__50778);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__51570){
var G__50769 = cljs.core.first(arglist__51570);
arglist__51570 = cljs.core.next(arglist__51570);
var G__50770 = cljs.core.first(arglist__51570);
arglist__51570 = cljs.core.next(arglist__51570);
var G__50771 = cljs.core.first(arglist__51570);
arglist__51570 = cljs.core.next(arglist__51570);
var G__50772 = cljs.core.first(arglist__51570);
arglist__51570 = cljs.core.next(arglist__51570);
var G__50773 = cljs.core.first(arglist__51570);
arglist__51570 = cljs.core.next(arglist__51570);
var G__50774 = cljs.core.first(arglist__51570);
arglist__51570 = cljs.core.next(arglist__51570);
var G__50775 = cljs.core.first(arglist__51570);
arglist__51570 = cljs.core.next(arglist__51570);
var G__50776 = cljs.core.first(arglist__51570);
arglist__51570 = cljs.core.next(arglist__51570);
var G__50777 = cljs.core.first(arglist__51570);
var G__50778 = cljs.core.rest(arglist__51570);
return sci$impl$fns$fun_$_arity_9__delegate(G__50769,G__50770,G__50771,G__50772,G__50773,G__50774,G__50775,G__50776,G__50777,G__50778);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__50799 = cljs.core._nth.call(null,params,(0));
var G__50800 = cljs.core._nth.call(null,params,(1));
var G__50801 = cljs.core._nth.call(null,params,(2));
var G__50802 = cljs.core._nth.call(null,params,(3));
var G__50803 = cljs.core._nth.call(null,params,(4));
var G__50804 = cljs.core._nth.call(null,params,(5));
var G__50805 = cljs.core._nth.call(null,params,(6));
var G__50806 = cljs.core._nth.call(null,params,(7));
var G__50807 = cljs.core._nth.call(null,params,(8));
var G__50808 = cljs.core._nth.call(null,params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__50788,G__50789,G__50790,G__50791,G__50792,G__50793,G__50794,G__50795,G__50796,G__50797,G__50798){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50788);

(invoc_array[(1)] = G__50789);

(invoc_array[(2)] = G__50790);

(invoc_array[(3)] = G__50791);

(invoc_array[(4)] = G__50792);

(invoc_array[(5)] = G__50793);

(invoc_array[(6)] = G__50794);

(invoc_array[(7)] = G__50795);

(invoc_array[(8)] = G__50796);

(invoc_array[(9)] = G__50797);

(invoc_array[vararg_idx] = G__50798);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__50788,G__50789,G__50790,G__50791,G__50792,G__50793,G__50794,G__50795,G__50796,G__50797,var_args){
var G__50798 = null;
if (arguments.length > 10) {
var G__51571__i = 0, G__51571__a = new Array(arguments.length -  10);
while (G__51571__i < G__51571__a.length) {G__51571__a[G__51571__i] = arguments[G__51571__i + 10]; ++G__51571__i;}
  G__50798 = new cljs.core.IndexedSeq(G__51571__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__50788,G__50789,G__50790,G__50791,G__50792,G__50793,G__50794,G__50795,G__50796,G__50797,G__50798);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__51572){
var G__50788 = cljs.core.first(arglist__51572);
arglist__51572 = cljs.core.next(arglist__51572);
var G__50789 = cljs.core.first(arglist__51572);
arglist__51572 = cljs.core.next(arglist__51572);
var G__50790 = cljs.core.first(arglist__51572);
arglist__51572 = cljs.core.next(arglist__51572);
var G__50791 = cljs.core.first(arglist__51572);
arglist__51572 = cljs.core.next(arglist__51572);
var G__50792 = cljs.core.first(arglist__51572);
arglist__51572 = cljs.core.next(arglist__51572);
var G__50793 = cljs.core.first(arglist__51572);
arglist__51572 = cljs.core.next(arglist__51572);
var G__50794 = cljs.core.first(arglist__51572);
arglist__51572 = cljs.core.next(arglist__51572);
var G__50795 = cljs.core.first(arglist__51572);
arglist__51572 = cljs.core.next(arglist__51572);
var G__50796 = cljs.core.first(arglist__51572);
arglist__51572 = cljs.core.next(arglist__51572);
var G__50797 = cljs.core.first(arglist__51572);
var G__50798 = cljs.core.rest(arglist__51572);
return sci$impl$fns$fun_$_arity_10__delegate(G__50788,G__50789,G__50790,G__50791,G__50792,G__50793,G__50794,G__50795,G__50796,G__50797,G__50798);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__50821 = cljs.core._nth.call(null,params,(0));
var G__50822 = cljs.core._nth.call(null,params,(1));
var G__50823 = cljs.core._nth.call(null,params,(2));
var G__50824 = cljs.core._nth.call(null,params,(3));
var G__50825 = cljs.core._nth.call(null,params,(4));
var G__50826 = cljs.core._nth.call(null,params,(5));
var G__50827 = cljs.core._nth.call(null,params,(6));
var G__50828 = cljs.core._nth.call(null,params,(7));
var G__50829 = cljs.core._nth.call(null,params,(8));
var G__50830 = cljs.core._nth.call(null,params,(9));
var G__50831 = cljs.core._nth.call(null,params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__50809,G__50810,G__50811,G__50812,G__50813,G__50814,G__50815,G__50816,G__50817,G__50818,G__50819,G__50820){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50809);

(invoc_array[(1)] = G__50810);

(invoc_array[(2)] = G__50811);

(invoc_array[(3)] = G__50812);

(invoc_array[(4)] = G__50813);

(invoc_array[(5)] = G__50814);

(invoc_array[(6)] = G__50815);

(invoc_array[(7)] = G__50816);

(invoc_array[(8)] = G__50817);

(invoc_array[(9)] = G__50818);

(invoc_array[(10)] = G__50819);

(invoc_array[vararg_idx] = G__50820);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__50809,G__50810,G__50811,G__50812,G__50813,G__50814,G__50815,G__50816,G__50817,G__50818,G__50819,var_args){
var G__50820 = null;
if (arguments.length > 11) {
var G__51573__i = 0, G__51573__a = new Array(arguments.length -  11);
while (G__51573__i < G__51573__a.length) {G__51573__a[G__51573__i] = arguments[G__51573__i + 11]; ++G__51573__i;}
  G__50820 = new cljs.core.IndexedSeq(G__51573__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__50809,G__50810,G__50811,G__50812,G__50813,G__50814,G__50815,G__50816,G__50817,G__50818,G__50819,G__50820);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__51574){
var G__50809 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50810 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50811 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50812 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50813 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50814 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50815 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50816 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50817 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50818 = cljs.core.first(arglist__51574);
arglist__51574 = cljs.core.next(arglist__51574);
var G__50819 = cljs.core.first(arglist__51574);
var G__50820 = cljs.core.rest(arglist__51574);
return sci$impl$fns$fun_$_arity_11__delegate(G__50809,G__50810,G__50811,G__50812,G__50813,G__50814,G__50815,G__50816,G__50817,G__50818,G__50819,G__50820);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__50845 = cljs.core._nth.call(null,params,(0));
var G__50846 = cljs.core._nth.call(null,params,(1));
var G__50847 = cljs.core._nth.call(null,params,(2));
var G__50848 = cljs.core._nth.call(null,params,(3));
var G__50849 = cljs.core._nth.call(null,params,(4));
var G__50850 = cljs.core._nth.call(null,params,(5));
var G__50851 = cljs.core._nth.call(null,params,(6));
var G__50852 = cljs.core._nth.call(null,params,(7));
var G__50853 = cljs.core._nth.call(null,params,(8));
var G__50854 = cljs.core._nth.call(null,params,(9));
var G__50855 = cljs.core._nth.call(null,params,(10));
var G__50856 = cljs.core._nth.call(null,params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__50832,G__50833,G__50834,G__50835,G__50836,G__50837,G__50838,G__50839,G__50840,G__50841,G__50842,G__50843,G__50844){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50832);

(invoc_array[(1)] = G__50833);

(invoc_array[(2)] = G__50834);

(invoc_array[(3)] = G__50835);

(invoc_array[(4)] = G__50836);

(invoc_array[(5)] = G__50837);

(invoc_array[(6)] = G__50838);

(invoc_array[(7)] = G__50839);

(invoc_array[(8)] = G__50840);

(invoc_array[(9)] = G__50841);

(invoc_array[(10)] = G__50842);

(invoc_array[(11)] = G__50843);

(invoc_array[vararg_idx] = G__50844);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__50832,G__50833,G__50834,G__50835,G__50836,G__50837,G__50838,G__50839,G__50840,G__50841,G__50842,G__50843,var_args){
var G__50844 = null;
if (arguments.length > 12) {
var G__51575__i = 0, G__51575__a = new Array(arguments.length -  12);
while (G__51575__i < G__51575__a.length) {G__51575__a[G__51575__i] = arguments[G__51575__i + 12]; ++G__51575__i;}
  G__50844 = new cljs.core.IndexedSeq(G__51575__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__50832,G__50833,G__50834,G__50835,G__50836,G__50837,G__50838,G__50839,G__50840,G__50841,G__50842,G__50843,G__50844);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__51576){
var G__50832 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50833 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50834 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50835 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50836 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50837 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50838 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50839 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50840 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50841 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50842 = cljs.core.first(arglist__51576);
arglist__51576 = cljs.core.next(arglist__51576);
var G__50843 = cljs.core.first(arglist__51576);
var G__50844 = cljs.core.rest(arglist__51576);
return sci$impl$fns$fun_$_arity_12__delegate(G__50832,G__50833,G__50834,G__50835,G__50836,G__50837,G__50838,G__50839,G__50840,G__50841,G__50842,G__50843,G__50844);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__50871 = cljs.core._nth.call(null,params,(0));
var G__50872 = cljs.core._nth.call(null,params,(1));
var G__50873 = cljs.core._nth.call(null,params,(2));
var G__50874 = cljs.core._nth.call(null,params,(3));
var G__50875 = cljs.core._nth.call(null,params,(4));
var G__50876 = cljs.core._nth.call(null,params,(5));
var G__50877 = cljs.core._nth.call(null,params,(6));
var G__50878 = cljs.core._nth.call(null,params,(7));
var G__50879 = cljs.core._nth.call(null,params,(8));
var G__50880 = cljs.core._nth.call(null,params,(9));
var G__50881 = cljs.core._nth.call(null,params,(10));
var G__50882 = cljs.core._nth.call(null,params,(11));
var G__50883 = cljs.core._nth.call(null,params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__50857,G__50858,G__50859,G__50860,G__50861,G__50862,G__50863,G__50864,G__50865,G__50866,G__50867,G__50868,G__50869,G__50870){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50857);

(invoc_array[(1)] = G__50858);

(invoc_array[(2)] = G__50859);

(invoc_array[(3)] = G__50860);

(invoc_array[(4)] = G__50861);

(invoc_array[(5)] = G__50862);

(invoc_array[(6)] = G__50863);

(invoc_array[(7)] = G__50864);

(invoc_array[(8)] = G__50865);

(invoc_array[(9)] = G__50866);

(invoc_array[(10)] = G__50867);

(invoc_array[(11)] = G__50868);

(invoc_array[(12)] = G__50869);

(invoc_array[vararg_idx] = G__50870);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__50857,G__50858,G__50859,G__50860,G__50861,G__50862,G__50863,G__50864,G__50865,G__50866,G__50867,G__50868,G__50869,var_args){
var G__50870 = null;
if (arguments.length > 13) {
var G__51577__i = 0, G__51577__a = new Array(arguments.length -  13);
while (G__51577__i < G__51577__a.length) {G__51577__a[G__51577__i] = arguments[G__51577__i + 13]; ++G__51577__i;}
  G__50870 = new cljs.core.IndexedSeq(G__51577__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__50857,G__50858,G__50859,G__50860,G__50861,G__50862,G__50863,G__50864,G__50865,G__50866,G__50867,G__50868,G__50869,G__50870);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__51578){
var G__50857 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50858 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50859 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50860 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50861 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50862 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50863 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50864 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50865 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50866 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50867 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50868 = cljs.core.first(arglist__51578);
arglist__51578 = cljs.core.next(arglist__51578);
var G__50869 = cljs.core.first(arglist__51578);
var G__50870 = cljs.core.rest(arglist__51578);
return sci$impl$fns$fun_$_arity_13__delegate(G__50857,G__50858,G__50859,G__50860,G__50861,G__50862,G__50863,G__50864,G__50865,G__50866,G__50867,G__50868,G__50869,G__50870);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__50899 = cljs.core._nth.call(null,params,(0));
var G__50900 = cljs.core._nth.call(null,params,(1));
var G__50901 = cljs.core._nth.call(null,params,(2));
var G__50902 = cljs.core._nth.call(null,params,(3));
var G__50903 = cljs.core._nth.call(null,params,(4));
var G__50904 = cljs.core._nth.call(null,params,(5));
var G__50905 = cljs.core._nth.call(null,params,(6));
var G__50906 = cljs.core._nth.call(null,params,(7));
var G__50907 = cljs.core._nth.call(null,params,(8));
var G__50908 = cljs.core._nth.call(null,params,(9));
var G__50909 = cljs.core._nth.call(null,params,(10));
var G__50910 = cljs.core._nth.call(null,params,(11));
var G__50911 = cljs.core._nth.call(null,params,(12));
var G__50912 = cljs.core._nth.call(null,params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__50884,G__50885,G__50886,G__50887,G__50888,G__50889,G__50890,G__50891,G__50892,G__50893,G__50894,G__50895,G__50896,G__50897,G__50898){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50884);

(invoc_array[(1)] = G__50885);

(invoc_array[(2)] = G__50886);

(invoc_array[(3)] = G__50887);

(invoc_array[(4)] = G__50888);

(invoc_array[(5)] = G__50889);

(invoc_array[(6)] = G__50890);

(invoc_array[(7)] = G__50891);

(invoc_array[(8)] = G__50892);

(invoc_array[(9)] = G__50893);

(invoc_array[(10)] = G__50894);

(invoc_array[(11)] = G__50895);

(invoc_array[(12)] = G__50896);

(invoc_array[(13)] = G__50897);

(invoc_array[vararg_idx] = G__50898);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__50884,G__50885,G__50886,G__50887,G__50888,G__50889,G__50890,G__50891,G__50892,G__50893,G__50894,G__50895,G__50896,G__50897,var_args){
var G__50898 = null;
if (arguments.length > 14) {
var G__51579__i = 0, G__51579__a = new Array(arguments.length -  14);
while (G__51579__i < G__51579__a.length) {G__51579__a[G__51579__i] = arguments[G__51579__i + 14]; ++G__51579__i;}
  G__50898 = new cljs.core.IndexedSeq(G__51579__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__50884,G__50885,G__50886,G__50887,G__50888,G__50889,G__50890,G__50891,G__50892,G__50893,G__50894,G__50895,G__50896,G__50897,G__50898);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__51580){
var G__50884 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50885 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50886 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50887 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50888 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50889 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50890 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50891 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50892 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50893 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50894 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50895 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50896 = cljs.core.first(arglist__51580);
arglist__51580 = cljs.core.next(arglist__51580);
var G__50897 = cljs.core.first(arglist__51580);
var G__50898 = cljs.core.rest(arglist__51580);
return sci$impl$fns$fun_$_arity_14__delegate(G__50884,G__50885,G__50886,G__50887,G__50888,G__50889,G__50890,G__50891,G__50892,G__50893,G__50894,G__50895,G__50896,G__50897,G__50898);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__50929 = cljs.core._nth.call(null,params,(0));
var G__50930 = cljs.core._nth.call(null,params,(1));
var G__50931 = cljs.core._nth.call(null,params,(2));
var G__50932 = cljs.core._nth.call(null,params,(3));
var G__50933 = cljs.core._nth.call(null,params,(4));
var G__50934 = cljs.core._nth.call(null,params,(5));
var G__50935 = cljs.core._nth.call(null,params,(6));
var G__50936 = cljs.core._nth.call(null,params,(7));
var G__50937 = cljs.core._nth.call(null,params,(8));
var G__50938 = cljs.core._nth.call(null,params,(9));
var G__50939 = cljs.core._nth.call(null,params,(10));
var G__50940 = cljs.core._nth.call(null,params,(11));
var G__50941 = cljs.core._nth.call(null,params,(12));
var G__50942 = cljs.core._nth.call(null,params,(13));
var G__50943 = cljs.core._nth.call(null,params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__50913,G__50914,G__50915,G__50916,G__50917,G__50918,G__50919,G__50920,G__50921,G__50922,G__50923,G__50924,G__50925,G__50926,G__50927,G__50928){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50913);

(invoc_array[(1)] = G__50914);

(invoc_array[(2)] = G__50915);

(invoc_array[(3)] = G__50916);

(invoc_array[(4)] = G__50917);

(invoc_array[(5)] = G__50918);

(invoc_array[(6)] = G__50919);

(invoc_array[(7)] = G__50920);

(invoc_array[(8)] = G__50921);

(invoc_array[(9)] = G__50922);

(invoc_array[(10)] = G__50923);

(invoc_array[(11)] = G__50924);

(invoc_array[(12)] = G__50925);

(invoc_array[(13)] = G__50926);

(invoc_array[(14)] = G__50927);

(invoc_array[vararg_idx] = G__50928);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__50913,G__50914,G__50915,G__50916,G__50917,G__50918,G__50919,G__50920,G__50921,G__50922,G__50923,G__50924,G__50925,G__50926,G__50927,var_args){
var G__50928 = null;
if (arguments.length > 15) {
var G__51581__i = 0, G__51581__a = new Array(arguments.length -  15);
while (G__51581__i < G__51581__a.length) {G__51581__a[G__51581__i] = arguments[G__51581__i + 15]; ++G__51581__i;}
  G__50928 = new cljs.core.IndexedSeq(G__51581__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__50913,G__50914,G__50915,G__50916,G__50917,G__50918,G__50919,G__50920,G__50921,G__50922,G__50923,G__50924,G__50925,G__50926,G__50927,G__50928);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__51582){
var G__50913 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50914 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50915 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50916 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50917 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50918 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50919 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50920 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50921 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50922 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50923 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50924 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50925 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50926 = cljs.core.first(arglist__51582);
arglist__51582 = cljs.core.next(arglist__51582);
var G__50927 = cljs.core.first(arglist__51582);
var G__50928 = cljs.core.rest(arglist__51582);
return sci$impl$fns$fun_$_arity_15__delegate(G__50913,G__50914,G__50915,G__50916,G__50917,G__50918,G__50919,G__50920,G__50921,G__50922,G__50923,G__50924,G__50925,G__50926,G__50927,G__50928);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__50961 = cljs.core._nth.call(null,params,(0));
var G__50962 = cljs.core._nth.call(null,params,(1));
var G__50963 = cljs.core._nth.call(null,params,(2));
var G__50964 = cljs.core._nth.call(null,params,(3));
var G__50965 = cljs.core._nth.call(null,params,(4));
var G__50966 = cljs.core._nth.call(null,params,(5));
var G__50967 = cljs.core._nth.call(null,params,(6));
var G__50968 = cljs.core._nth.call(null,params,(7));
var G__50969 = cljs.core._nth.call(null,params,(8));
var G__50970 = cljs.core._nth.call(null,params,(9));
var G__50971 = cljs.core._nth.call(null,params,(10));
var G__50972 = cljs.core._nth.call(null,params,(11));
var G__50973 = cljs.core._nth.call(null,params,(12));
var G__50974 = cljs.core._nth.call(null,params,(13));
var G__50975 = cljs.core._nth.call(null,params,(14));
var G__50976 = cljs.core._nth.call(null,params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__50944,G__50945,G__50946,G__50947,G__50948,G__50949,G__50950,G__50951,G__50952,G__50953,G__50954,G__50955,G__50956,G__50957,G__50958,G__50959,G__50960){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50944);

(invoc_array[(1)] = G__50945);

(invoc_array[(2)] = G__50946);

(invoc_array[(3)] = G__50947);

(invoc_array[(4)] = G__50948);

(invoc_array[(5)] = G__50949);

(invoc_array[(6)] = G__50950);

(invoc_array[(7)] = G__50951);

(invoc_array[(8)] = G__50952);

(invoc_array[(9)] = G__50953);

(invoc_array[(10)] = G__50954);

(invoc_array[(11)] = G__50955);

(invoc_array[(12)] = G__50956);

(invoc_array[(13)] = G__50957);

(invoc_array[(14)] = G__50958);

(invoc_array[(15)] = G__50959);

(invoc_array[vararg_idx] = G__50960);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__50944,G__50945,G__50946,G__50947,G__50948,G__50949,G__50950,G__50951,G__50952,G__50953,G__50954,G__50955,G__50956,G__50957,G__50958,G__50959,var_args){
var G__50960 = null;
if (arguments.length > 16) {
var G__51583__i = 0, G__51583__a = new Array(arguments.length -  16);
while (G__51583__i < G__51583__a.length) {G__51583__a[G__51583__i] = arguments[G__51583__i + 16]; ++G__51583__i;}
  G__50960 = new cljs.core.IndexedSeq(G__51583__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__50944,G__50945,G__50946,G__50947,G__50948,G__50949,G__50950,G__50951,G__50952,G__50953,G__50954,G__50955,G__50956,G__50957,G__50958,G__50959,G__50960);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__51584){
var G__50944 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50945 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50946 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50947 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50948 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50949 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50950 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50951 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50952 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50953 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50954 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50955 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50956 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50957 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50958 = cljs.core.first(arglist__51584);
arglist__51584 = cljs.core.next(arglist__51584);
var G__50959 = cljs.core.first(arglist__51584);
var G__50960 = cljs.core.rest(arglist__51584);
return sci$impl$fns$fun_$_arity_16__delegate(G__50944,G__50945,G__50946,G__50947,G__50948,G__50949,G__50950,G__50951,G__50952,G__50953,G__50954,G__50955,G__50956,G__50957,G__50958,G__50959,G__50960);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__50995 = cljs.core._nth.call(null,params,(0));
var G__50996 = cljs.core._nth.call(null,params,(1));
var G__50997 = cljs.core._nth.call(null,params,(2));
var G__50998 = cljs.core._nth.call(null,params,(3));
var G__50999 = cljs.core._nth.call(null,params,(4));
var G__51000 = cljs.core._nth.call(null,params,(5));
var G__51001 = cljs.core._nth.call(null,params,(6));
var G__51002 = cljs.core._nth.call(null,params,(7));
var G__51003 = cljs.core._nth.call(null,params,(8));
var G__51004 = cljs.core._nth.call(null,params,(9));
var G__51005 = cljs.core._nth.call(null,params,(10));
var G__51006 = cljs.core._nth.call(null,params,(11));
var G__51007 = cljs.core._nth.call(null,params,(12));
var G__51008 = cljs.core._nth.call(null,params,(13));
var G__51009 = cljs.core._nth.call(null,params,(14));
var G__51010 = cljs.core._nth.call(null,params,(15));
var G__51011 = cljs.core._nth.call(null,params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__50977,G__50978,G__50979,G__50980,G__50981,G__50982,G__50983,G__50984,G__50985,G__50986,G__50987,G__50988,G__50989,G__50990,G__50991,G__50992,G__50993,G__50994){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__50977);

(invoc_array[(1)] = G__50978);

(invoc_array[(2)] = G__50979);

(invoc_array[(3)] = G__50980);

(invoc_array[(4)] = G__50981);

(invoc_array[(5)] = G__50982);

(invoc_array[(6)] = G__50983);

(invoc_array[(7)] = G__50984);

(invoc_array[(8)] = G__50985);

(invoc_array[(9)] = G__50986);

(invoc_array[(10)] = G__50987);

(invoc_array[(11)] = G__50988);

(invoc_array[(12)] = G__50989);

(invoc_array[(13)] = G__50990);

(invoc_array[(14)] = G__50991);

(invoc_array[(15)] = G__50992);

(invoc_array[(16)] = G__50993);

(invoc_array[vararg_idx] = G__50994);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__50977,G__50978,G__50979,G__50980,G__50981,G__50982,G__50983,G__50984,G__50985,G__50986,G__50987,G__50988,G__50989,G__50990,G__50991,G__50992,G__50993,var_args){
var G__50994 = null;
if (arguments.length > 17) {
var G__51585__i = 0, G__51585__a = new Array(arguments.length -  17);
while (G__51585__i < G__51585__a.length) {G__51585__a[G__51585__i] = arguments[G__51585__i + 17]; ++G__51585__i;}
  G__50994 = new cljs.core.IndexedSeq(G__51585__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__50977,G__50978,G__50979,G__50980,G__50981,G__50982,G__50983,G__50984,G__50985,G__50986,G__50987,G__50988,G__50989,G__50990,G__50991,G__50992,G__50993,G__50994);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__51586){
var G__50977 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50978 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50979 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50980 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50981 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50982 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50983 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50984 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50985 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50986 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50987 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50988 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50989 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50990 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50991 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50992 = cljs.core.first(arglist__51586);
arglist__51586 = cljs.core.next(arglist__51586);
var G__50993 = cljs.core.first(arglist__51586);
var G__50994 = cljs.core.rest(arglist__51586);
return sci$impl$fns$fun_$_arity_17__delegate(G__50977,G__50978,G__50979,G__50980,G__50981,G__50982,G__50983,G__50984,G__50985,G__50986,G__50987,G__50988,G__50989,G__50990,G__50991,G__50992,G__50993,G__50994);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__51031 = cljs.core._nth.call(null,params,(0));
var G__51032 = cljs.core._nth.call(null,params,(1));
var G__51033 = cljs.core._nth.call(null,params,(2));
var G__51034 = cljs.core._nth.call(null,params,(3));
var G__51035 = cljs.core._nth.call(null,params,(4));
var G__51036 = cljs.core._nth.call(null,params,(5));
var G__51037 = cljs.core._nth.call(null,params,(6));
var G__51038 = cljs.core._nth.call(null,params,(7));
var G__51039 = cljs.core._nth.call(null,params,(8));
var G__51040 = cljs.core._nth.call(null,params,(9));
var G__51041 = cljs.core._nth.call(null,params,(10));
var G__51042 = cljs.core._nth.call(null,params,(11));
var G__51043 = cljs.core._nth.call(null,params,(12));
var G__51044 = cljs.core._nth.call(null,params,(13));
var G__51045 = cljs.core._nth.call(null,params,(14));
var G__51046 = cljs.core._nth.call(null,params,(15));
var G__51047 = cljs.core._nth.call(null,params,(16));
var G__51048 = cljs.core._nth.call(null,params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__51012,G__51013,G__51014,G__51015,G__51016,G__51017,G__51018,G__51019,G__51020,G__51021,G__51022,G__51023,G__51024,G__51025,G__51026,G__51027,G__51028,G__51029,G__51030){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51012);

(invoc_array[(1)] = G__51013);

(invoc_array[(2)] = G__51014);

(invoc_array[(3)] = G__51015);

(invoc_array[(4)] = G__51016);

(invoc_array[(5)] = G__51017);

(invoc_array[(6)] = G__51018);

(invoc_array[(7)] = G__51019);

(invoc_array[(8)] = G__51020);

(invoc_array[(9)] = G__51021);

(invoc_array[(10)] = G__51022);

(invoc_array[(11)] = G__51023);

(invoc_array[(12)] = G__51024);

(invoc_array[(13)] = G__51025);

(invoc_array[(14)] = G__51026);

(invoc_array[(15)] = G__51027);

(invoc_array[(16)] = G__51028);

(invoc_array[(17)] = G__51029);

(invoc_array[vararg_idx] = G__51030);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__51012,G__51013,G__51014,G__51015,G__51016,G__51017,G__51018,G__51019,G__51020,G__51021,G__51022,G__51023,G__51024,G__51025,G__51026,G__51027,G__51028,G__51029,var_args){
var G__51030 = null;
if (arguments.length > 18) {
var G__51587__i = 0, G__51587__a = new Array(arguments.length -  18);
while (G__51587__i < G__51587__a.length) {G__51587__a[G__51587__i] = arguments[G__51587__i + 18]; ++G__51587__i;}
  G__51030 = new cljs.core.IndexedSeq(G__51587__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__51012,G__51013,G__51014,G__51015,G__51016,G__51017,G__51018,G__51019,G__51020,G__51021,G__51022,G__51023,G__51024,G__51025,G__51026,G__51027,G__51028,G__51029,G__51030);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__51588){
var G__51012 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51013 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51014 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51015 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51016 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51017 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51018 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51019 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51020 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51021 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51022 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51023 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51024 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51025 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51026 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51027 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51028 = cljs.core.first(arglist__51588);
arglist__51588 = cljs.core.next(arglist__51588);
var G__51029 = cljs.core.first(arglist__51588);
var G__51030 = cljs.core.rest(arglist__51588);
return sci$impl$fns$fun_$_arity_18__delegate(G__51012,G__51013,G__51014,G__51015,G__51016,G__51017,G__51018,G__51019,G__51020,G__51021,G__51022,G__51023,G__51024,G__51025,G__51026,G__51027,G__51028,G__51029,G__51030);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__51069 = cljs.core._nth.call(null,params,(0));
var G__51070 = cljs.core._nth.call(null,params,(1));
var G__51071 = cljs.core._nth.call(null,params,(2));
var G__51072 = cljs.core._nth.call(null,params,(3));
var G__51073 = cljs.core._nth.call(null,params,(4));
var G__51074 = cljs.core._nth.call(null,params,(5));
var G__51075 = cljs.core._nth.call(null,params,(6));
var G__51076 = cljs.core._nth.call(null,params,(7));
var G__51077 = cljs.core._nth.call(null,params,(8));
var G__51078 = cljs.core._nth.call(null,params,(9));
var G__51079 = cljs.core._nth.call(null,params,(10));
var G__51080 = cljs.core._nth.call(null,params,(11));
var G__51081 = cljs.core._nth.call(null,params,(12));
var G__51082 = cljs.core._nth.call(null,params,(13));
var G__51083 = cljs.core._nth.call(null,params,(14));
var G__51084 = cljs.core._nth.call(null,params,(15));
var G__51085 = cljs.core._nth.call(null,params,(16));
var G__51086 = cljs.core._nth.call(null,params,(17));
var G__51087 = cljs.core._nth.call(null,params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__51049,G__51050,G__51051,G__51052,G__51053,G__51054,G__51055,G__51056,G__51057,G__51058,G__51059,G__51060,G__51061,G__51062,G__51063,G__51064,G__51065,G__51066,G__51067,G__51068){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51049);

(invoc_array[(1)] = G__51050);

(invoc_array[(2)] = G__51051);

(invoc_array[(3)] = G__51052);

(invoc_array[(4)] = G__51053);

(invoc_array[(5)] = G__51054);

(invoc_array[(6)] = G__51055);

(invoc_array[(7)] = G__51056);

(invoc_array[(8)] = G__51057);

(invoc_array[(9)] = G__51058);

(invoc_array[(10)] = G__51059);

(invoc_array[(11)] = G__51060);

(invoc_array[(12)] = G__51061);

(invoc_array[(13)] = G__51062);

(invoc_array[(14)] = G__51063);

(invoc_array[(15)] = G__51064);

(invoc_array[(16)] = G__51065);

(invoc_array[(17)] = G__51066);

(invoc_array[(18)] = G__51067);

(invoc_array[vararg_idx] = G__51068);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__51049,G__51050,G__51051,G__51052,G__51053,G__51054,G__51055,G__51056,G__51057,G__51058,G__51059,G__51060,G__51061,G__51062,G__51063,G__51064,G__51065,G__51066,G__51067,var_args){
var G__51068 = null;
if (arguments.length > 19) {
var G__51589__i = 0, G__51589__a = new Array(arguments.length -  19);
while (G__51589__i < G__51589__a.length) {G__51589__a[G__51589__i] = arguments[G__51589__i + 19]; ++G__51589__i;}
  G__51068 = new cljs.core.IndexedSeq(G__51589__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__51049,G__51050,G__51051,G__51052,G__51053,G__51054,G__51055,G__51056,G__51057,G__51058,G__51059,G__51060,G__51061,G__51062,G__51063,G__51064,G__51065,G__51066,G__51067,G__51068);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__51590){
var G__51049 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51050 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51051 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51052 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51053 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51054 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51055 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51056 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51057 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51058 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51059 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51060 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51061 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51062 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51063 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51064 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51065 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51066 = cljs.core.first(arglist__51590);
arglist__51590 = cljs.core.next(arglist__51590);
var G__51067 = cljs.core.first(arglist__51590);
var G__51068 = cljs.core.rest(arglist__51590);
return sci$impl$fns$fun_$_arity_19__delegate(G__51049,G__51050,G__51051,G__51052,G__51053,G__51054,G__51055,G__51056,G__51057,G__51058,G__51059,G__51060,G__51061,G__51062,G__51063,G__51064,G__51065,G__51066,G__51067,G__51068);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__51109 = cljs.core._nth.call(null,params,(0));
var G__51110 = cljs.core._nth.call(null,params,(1));
var G__51111 = cljs.core._nth.call(null,params,(2));
var G__51112 = cljs.core._nth.call(null,params,(3));
var G__51113 = cljs.core._nth.call(null,params,(4));
var G__51114 = cljs.core._nth.call(null,params,(5));
var G__51115 = cljs.core._nth.call(null,params,(6));
var G__51116 = cljs.core._nth.call(null,params,(7));
var G__51117 = cljs.core._nth.call(null,params,(8));
var G__51118 = cljs.core._nth.call(null,params,(9));
var G__51119 = cljs.core._nth.call(null,params,(10));
var G__51120 = cljs.core._nth.call(null,params,(11));
var G__51121 = cljs.core._nth.call(null,params,(12));
var G__51122 = cljs.core._nth.call(null,params,(13));
var G__51123 = cljs.core._nth.call(null,params,(14));
var G__51124 = cljs.core._nth.call(null,params,(15));
var G__51125 = cljs.core._nth.call(null,params,(16));
var G__51126 = cljs.core._nth.call(null,params,(17));
var G__51127 = cljs.core._nth.call(null,params,(18));
var G__51128 = cljs.core._nth.call(null,params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__51088,G__51089,G__51090,G__51091,G__51092,G__51093,G__51094,G__51095,G__51096,G__51097,G__51098,G__51099,G__51100,G__51101,G__51102,G__51103,G__51104,G__51105,G__51106,G__51107,G__51108){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51088);

(invoc_array[(1)] = G__51089);

(invoc_array[(2)] = G__51090);

(invoc_array[(3)] = G__51091);

(invoc_array[(4)] = G__51092);

(invoc_array[(5)] = G__51093);

(invoc_array[(6)] = G__51094);

(invoc_array[(7)] = G__51095);

(invoc_array[(8)] = G__51096);

(invoc_array[(9)] = G__51097);

(invoc_array[(10)] = G__51098);

(invoc_array[(11)] = G__51099);

(invoc_array[(12)] = G__51100);

(invoc_array[(13)] = G__51101);

(invoc_array[(14)] = G__51102);

(invoc_array[(15)] = G__51103);

(invoc_array[(16)] = G__51104);

(invoc_array[(17)] = G__51105);

(invoc_array[(18)] = G__51106);

(invoc_array[(19)] = G__51107);

(invoc_array[vararg_idx] = G__51108);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__51088,G__51089,G__51090,G__51091,G__51092,G__51093,G__51094,G__51095,G__51096,G__51097,G__51098,G__51099,G__51100,G__51101,G__51102,G__51103,G__51104,G__51105,G__51106,G__51107,var_args){
var G__51108 = null;
if (arguments.length > 20) {
var G__51591__i = 0, G__51591__a = new Array(arguments.length -  20);
while (G__51591__i < G__51591__a.length) {G__51591__a[G__51591__i] = arguments[G__51591__i + 20]; ++G__51591__i;}
  G__51108 = new cljs.core.IndexedSeq(G__51591__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__51088,G__51089,G__51090,G__51091,G__51092,G__51093,G__51094,G__51095,G__51096,G__51097,G__51098,G__51099,G__51100,G__51101,G__51102,G__51103,G__51104,G__51105,G__51106,G__51107,G__51108);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__51592){
var G__51088 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51089 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51090 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51091 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51092 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51093 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51094 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51095 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51096 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51097 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51098 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51099 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51100 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51101 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51102 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51103 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51104 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51105 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51106 = cljs.core.first(arglist__51592);
arglist__51592 = cljs.core.next(arglist__51592);
var G__51107 = cljs.core.first(arglist__51592);
var G__51108 = cljs.core.rest(arglist__51592);
return sci$impl$fns$fun_$_arity_20__delegate(G__51088,G__51089,G__51090,G__51091,G__51092,G__51093,G__51094,G__51095,G__51096,G__51097,G__51098,G__51099,G__51100,G__51101,G__51102,G__51103,G__51104,G__51105,G__51106,G__51107,G__51108);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50687)].join('')));

}
})():(function (){var G__51129 = (fixed_arity | (0));
switch (G__51129) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

while(true){
var ret__49658__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49658__auto__)){
continue;
} else {
return ret__49658__auto__;
}
break;
}
});

break;
case (1):
var G__51131 = cljs.core._nth.call(null,params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__51130){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51130);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (2):
var G__51134 = cljs.core._nth.call(null,params,(0));
var G__51135 = cljs.core._nth.call(null,params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__51132,G__51133){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51132);

(invoc_array[(1)] = G__51133);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (3):
var G__51139 = cljs.core._nth.call(null,params,(0));
var G__51140 = cljs.core._nth.call(null,params,(1));
var G__51141 = cljs.core._nth.call(null,params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__51136,G__51137,G__51138){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51136);

(invoc_array[(1)] = G__51137);

(invoc_array[(2)] = G__51138);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (4):
var G__51146 = cljs.core._nth.call(null,params,(0));
var G__51147 = cljs.core._nth.call(null,params,(1));
var G__51148 = cljs.core._nth.call(null,params,(2));
var G__51149 = cljs.core._nth.call(null,params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__51142,G__51143,G__51144,G__51145){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51142);

(invoc_array[(1)] = G__51143);

(invoc_array[(2)] = G__51144);

(invoc_array[(3)] = G__51145);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (5):
var G__51155 = cljs.core._nth.call(null,params,(0));
var G__51156 = cljs.core._nth.call(null,params,(1));
var G__51157 = cljs.core._nth.call(null,params,(2));
var G__51158 = cljs.core._nth.call(null,params,(3));
var G__51159 = cljs.core._nth.call(null,params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__51150,G__51151,G__51152,G__51153,G__51154){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51150);

(invoc_array[(1)] = G__51151);

(invoc_array[(2)] = G__51152);

(invoc_array[(3)] = G__51153);

(invoc_array[(4)] = G__51154);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (6):
var G__51166 = cljs.core._nth.call(null,params,(0));
var G__51167 = cljs.core._nth.call(null,params,(1));
var G__51168 = cljs.core._nth.call(null,params,(2));
var G__51169 = cljs.core._nth.call(null,params,(3));
var G__51170 = cljs.core._nth.call(null,params,(4));
var G__51171 = cljs.core._nth.call(null,params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__51160,G__51161,G__51162,G__51163,G__51164,G__51165){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51160);

(invoc_array[(1)] = G__51161);

(invoc_array[(2)] = G__51162);

(invoc_array[(3)] = G__51163);

(invoc_array[(4)] = G__51164);

(invoc_array[(5)] = G__51165);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (7):
var G__51179 = cljs.core._nth.call(null,params,(0));
var G__51180 = cljs.core._nth.call(null,params,(1));
var G__51181 = cljs.core._nth.call(null,params,(2));
var G__51182 = cljs.core._nth.call(null,params,(3));
var G__51183 = cljs.core._nth.call(null,params,(4));
var G__51184 = cljs.core._nth.call(null,params,(5));
var G__51185 = cljs.core._nth.call(null,params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__51172,G__51173,G__51174,G__51175,G__51176,G__51177,G__51178){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51172);

(invoc_array[(1)] = G__51173);

(invoc_array[(2)] = G__51174);

(invoc_array[(3)] = G__51175);

(invoc_array[(4)] = G__51176);

(invoc_array[(5)] = G__51177);

(invoc_array[(6)] = G__51178);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (8):
var G__51194 = cljs.core._nth.call(null,params,(0));
var G__51195 = cljs.core._nth.call(null,params,(1));
var G__51196 = cljs.core._nth.call(null,params,(2));
var G__51197 = cljs.core._nth.call(null,params,(3));
var G__51198 = cljs.core._nth.call(null,params,(4));
var G__51199 = cljs.core._nth.call(null,params,(5));
var G__51200 = cljs.core._nth.call(null,params,(6));
var G__51201 = cljs.core._nth.call(null,params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__51186,G__51187,G__51188,G__51189,G__51190,G__51191,G__51192,G__51193){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51186);

(invoc_array[(1)] = G__51187);

(invoc_array[(2)] = G__51188);

(invoc_array[(3)] = G__51189);

(invoc_array[(4)] = G__51190);

(invoc_array[(5)] = G__51191);

(invoc_array[(6)] = G__51192);

(invoc_array[(7)] = G__51193);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (9):
var G__51211 = cljs.core._nth.call(null,params,(0));
var G__51212 = cljs.core._nth.call(null,params,(1));
var G__51213 = cljs.core._nth.call(null,params,(2));
var G__51214 = cljs.core._nth.call(null,params,(3));
var G__51215 = cljs.core._nth.call(null,params,(4));
var G__51216 = cljs.core._nth.call(null,params,(5));
var G__51217 = cljs.core._nth.call(null,params,(6));
var G__51218 = cljs.core._nth.call(null,params,(7));
var G__51219 = cljs.core._nth.call(null,params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__51202,G__51203,G__51204,G__51205,G__51206,G__51207,G__51208,G__51209,G__51210){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51202);

(invoc_array[(1)] = G__51203);

(invoc_array[(2)] = G__51204);

(invoc_array[(3)] = G__51205);

(invoc_array[(4)] = G__51206);

(invoc_array[(5)] = G__51207);

(invoc_array[(6)] = G__51208);

(invoc_array[(7)] = G__51209);

(invoc_array[(8)] = G__51210);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (10):
var G__51230 = cljs.core._nth.call(null,params,(0));
var G__51231 = cljs.core._nth.call(null,params,(1));
var G__51232 = cljs.core._nth.call(null,params,(2));
var G__51233 = cljs.core._nth.call(null,params,(3));
var G__51234 = cljs.core._nth.call(null,params,(4));
var G__51235 = cljs.core._nth.call(null,params,(5));
var G__51236 = cljs.core._nth.call(null,params,(6));
var G__51237 = cljs.core._nth.call(null,params,(7));
var G__51238 = cljs.core._nth.call(null,params,(8));
var G__51239 = cljs.core._nth.call(null,params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__51220,G__51221,G__51222,G__51223,G__51224,G__51225,G__51226,G__51227,G__51228,G__51229){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51220);

(invoc_array[(1)] = G__51221);

(invoc_array[(2)] = G__51222);

(invoc_array[(3)] = G__51223);

(invoc_array[(4)] = G__51224);

(invoc_array[(5)] = G__51225);

(invoc_array[(6)] = G__51226);

(invoc_array[(7)] = G__51227);

(invoc_array[(8)] = G__51228);

(invoc_array[(9)] = G__51229);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (11):
var G__51251 = cljs.core._nth.call(null,params,(0));
var G__51252 = cljs.core._nth.call(null,params,(1));
var G__51253 = cljs.core._nth.call(null,params,(2));
var G__51254 = cljs.core._nth.call(null,params,(3));
var G__51255 = cljs.core._nth.call(null,params,(4));
var G__51256 = cljs.core._nth.call(null,params,(5));
var G__51257 = cljs.core._nth.call(null,params,(6));
var G__51258 = cljs.core._nth.call(null,params,(7));
var G__51259 = cljs.core._nth.call(null,params,(8));
var G__51260 = cljs.core._nth.call(null,params,(9));
var G__51261 = cljs.core._nth.call(null,params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__51240,G__51241,G__51242,G__51243,G__51244,G__51245,G__51246,G__51247,G__51248,G__51249,G__51250){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51240);

(invoc_array[(1)] = G__51241);

(invoc_array[(2)] = G__51242);

(invoc_array[(3)] = G__51243);

(invoc_array[(4)] = G__51244);

(invoc_array[(5)] = G__51245);

(invoc_array[(6)] = G__51246);

(invoc_array[(7)] = G__51247);

(invoc_array[(8)] = G__51248);

(invoc_array[(9)] = G__51249);

(invoc_array[(10)] = G__51250);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (12):
var G__51274 = cljs.core._nth.call(null,params,(0));
var G__51275 = cljs.core._nth.call(null,params,(1));
var G__51276 = cljs.core._nth.call(null,params,(2));
var G__51277 = cljs.core._nth.call(null,params,(3));
var G__51278 = cljs.core._nth.call(null,params,(4));
var G__51279 = cljs.core._nth.call(null,params,(5));
var G__51280 = cljs.core._nth.call(null,params,(6));
var G__51281 = cljs.core._nth.call(null,params,(7));
var G__51282 = cljs.core._nth.call(null,params,(8));
var G__51283 = cljs.core._nth.call(null,params,(9));
var G__51284 = cljs.core._nth.call(null,params,(10));
var G__51285 = cljs.core._nth.call(null,params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__51262,G__51263,G__51264,G__51265,G__51266,G__51267,G__51268,G__51269,G__51270,G__51271,G__51272,G__51273){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51262);

(invoc_array[(1)] = G__51263);

(invoc_array[(2)] = G__51264);

(invoc_array[(3)] = G__51265);

(invoc_array[(4)] = G__51266);

(invoc_array[(5)] = G__51267);

(invoc_array[(6)] = G__51268);

(invoc_array[(7)] = G__51269);

(invoc_array[(8)] = G__51270);

(invoc_array[(9)] = G__51271);

(invoc_array[(10)] = G__51272);

(invoc_array[(11)] = G__51273);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (13):
var G__51299 = cljs.core._nth.call(null,params,(0));
var G__51300 = cljs.core._nth.call(null,params,(1));
var G__51301 = cljs.core._nth.call(null,params,(2));
var G__51302 = cljs.core._nth.call(null,params,(3));
var G__51303 = cljs.core._nth.call(null,params,(4));
var G__51304 = cljs.core._nth.call(null,params,(5));
var G__51305 = cljs.core._nth.call(null,params,(6));
var G__51306 = cljs.core._nth.call(null,params,(7));
var G__51307 = cljs.core._nth.call(null,params,(8));
var G__51308 = cljs.core._nth.call(null,params,(9));
var G__51309 = cljs.core._nth.call(null,params,(10));
var G__51310 = cljs.core._nth.call(null,params,(11));
var G__51311 = cljs.core._nth.call(null,params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__51286,G__51287,G__51288,G__51289,G__51290,G__51291,G__51292,G__51293,G__51294,G__51295,G__51296,G__51297,G__51298){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51286);

(invoc_array[(1)] = G__51287);

(invoc_array[(2)] = G__51288);

(invoc_array[(3)] = G__51289);

(invoc_array[(4)] = G__51290);

(invoc_array[(5)] = G__51291);

(invoc_array[(6)] = G__51292);

(invoc_array[(7)] = G__51293);

(invoc_array[(8)] = G__51294);

(invoc_array[(9)] = G__51295);

(invoc_array[(10)] = G__51296);

(invoc_array[(11)] = G__51297);

(invoc_array[(12)] = G__51298);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (14):
var G__51326 = cljs.core._nth.call(null,params,(0));
var G__51327 = cljs.core._nth.call(null,params,(1));
var G__51328 = cljs.core._nth.call(null,params,(2));
var G__51329 = cljs.core._nth.call(null,params,(3));
var G__51330 = cljs.core._nth.call(null,params,(4));
var G__51331 = cljs.core._nth.call(null,params,(5));
var G__51332 = cljs.core._nth.call(null,params,(6));
var G__51333 = cljs.core._nth.call(null,params,(7));
var G__51334 = cljs.core._nth.call(null,params,(8));
var G__51335 = cljs.core._nth.call(null,params,(9));
var G__51336 = cljs.core._nth.call(null,params,(10));
var G__51337 = cljs.core._nth.call(null,params,(11));
var G__51338 = cljs.core._nth.call(null,params,(12));
var G__51339 = cljs.core._nth.call(null,params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__51312,G__51313,G__51314,G__51315,G__51316,G__51317,G__51318,G__51319,G__51320,G__51321,G__51322,G__51323,G__51324,G__51325){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51312);

(invoc_array[(1)] = G__51313);

(invoc_array[(2)] = G__51314);

(invoc_array[(3)] = G__51315);

(invoc_array[(4)] = G__51316);

(invoc_array[(5)] = G__51317);

(invoc_array[(6)] = G__51318);

(invoc_array[(7)] = G__51319);

(invoc_array[(8)] = G__51320);

(invoc_array[(9)] = G__51321);

(invoc_array[(10)] = G__51322);

(invoc_array[(11)] = G__51323);

(invoc_array[(12)] = G__51324);

(invoc_array[(13)] = G__51325);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (15):
var G__51355 = cljs.core._nth.call(null,params,(0));
var G__51356 = cljs.core._nth.call(null,params,(1));
var G__51357 = cljs.core._nth.call(null,params,(2));
var G__51358 = cljs.core._nth.call(null,params,(3));
var G__51359 = cljs.core._nth.call(null,params,(4));
var G__51360 = cljs.core._nth.call(null,params,(5));
var G__51361 = cljs.core._nth.call(null,params,(6));
var G__51362 = cljs.core._nth.call(null,params,(7));
var G__51363 = cljs.core._nth.call(null,params,(8));
var G__51364 = cljs.core._nth.call(null,params,(9));
var G__51365 = cljs.core._nth.call(null,params,(10));
var G__51366 = cljs.core._nth.call(null,params,(11));
var G__51367 = cljs.core._nth.call(null,params,(12));
var G__51368 = cljs.core._nth.call(null,params,(13));
var G__51369 = cljs.core._nth.call(null,params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__51340,G__51341,G__51342,G__51343,G__51344,G__51345,G__51346,G__51347,G__51348,G__51349,G__51350,G__51351,G__51352,G__51353,G__51354){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51340);

(invoc_array[(1)] = G__51341);

(invoc_array[(2)] = G__51342);

(invoc_array[(3)] = G__51343);

(invoc_array[(4)] = G__51344);

(invoc_array[(5)] = G__51345);

(invoc_array[(6)] = G__51346);

(invoc_array[(7)] = G__51347);

(invoc_array[(8)] = G__51348);

(invoc_array[(9)] = G__51349);

(invoc_array[(10)] = G__51350);

(invoc_array[(11)] = G__51351);

(invoc_array[(12)] = G__51352);

(invoc_array[(13)] = G__51353);

(invoc_array[(14)] = G__51354);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (16):
var G__51386 = cljs.core._nth.call(null,params,(0));
var G__51387 = cljs.core._nth.call(null,params,(1));
var G__51388 = cljs.core._nth.call(null,params,(2));
var G__51389 = cljs.core._nth.call(null,params,(3));
var G__51390 = cljs.core._nth.call(null,params,(4));
var G__51391 = cljs.core._nth.call(null,params,(5));
var G__51392 = cljs.core._nth.call(null,params,(6));
var G__51393 = cljs.core._nth.call(null,params,(7));
var G__51394 = cljs.core._nth.call(null,params,(8));
var G__51395 = cljs.core._nth.call(null,params,(9));
var G__51396 = cljs.core._nth.call(null,params,(10));
var G__51397 = cljs.core._nth.call(null,params,(11));
var G__51398 = cljs.core._nth.call(null,params,(12));
var G__51399 = cljs.core._nth.call(null,params,(13));
var G__51400 = cljs.core._nth.call(null,params,(14));
var G__51401 = cljs.core._nth.call(null,params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__51370,G__51371,G__51372,G__51373,G__51374,G__51375,G__51376,G__51377,G__51378,G__51379,G__51380,G__51381,G__51382,G__51383,G__51384,G__51385){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51370);

(invoc_array[(1)] = G__51371);

(invoc_array[(2)] = G__51372);

(invoc_array[(3)] = G__51373);

(invoc_array[(4)] = G__51374);

(invoc_array[(5)] = G__51375);

(invoc_array[(6)] = G__51376);

(invoc_array[(7)] = G__51377);

(invoc_array[(8)] = G__51378);

(invoc_array[(9)] = G__51379);

(invoc_array[(10)] = G__51380);

(invoc_array[(11)] = G__51381);

(invoc_array[(12)] = G__51382);

(invoc_array[(13)] = G__51383);

(invoc_array[(14)] = G__51384);

(invoc_array[(15)] = G__51385);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (17):
var G__51419 = cljs.core._nth.call(null,params,(0));
var G__51420 = cljs.core._nth.call(null,params,(1));
var G__51421 = cljs.core._nth.call(null,params,(2));
var G__51422 = cljs.core._nth.call(null,params,(3));
var G__51423 = cljs.core._nth.call(null,params,(4));
var G__51424 = cljs.core._nth.call(null,params,(5));
var G__51425 = cljs.core._nth.call(null,params,(6));
var G__51426 = cljs.core._nth.call(null,params,(7));
var G__51427 = cljs.core._nth.call(null,params,(8));
var G__51428 = cljs.core._nth.call(null,params,(9));
var G__51429 = cljs.core._nth.call(null,params,(10));
var G__51430 = cljs.core._nth.call(null,params,(11));
var G__51431 = cljs.core._nth.call(null,params,(12));
var G__51432 = cljs.core._nth.call(null,params,(13));
var G__51433 = cljs.core._nth.call(null,params,(14));
var G__51434 = cljs.core._nth.call(null,params,(15));
var G__51435 = cljs.core._nth.call(null,params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__51402,G__51403,G__51404,G__51405,G__51406,G__51407,G__51408,G__51409,G__51410,G__51411,G__51412,G__51413,G__51414,G__51415,G__51416,G__51417,G__51418){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51402);

(invoc_array[(1)] = G__51403);

(invoc_array[(2)] = G__51404);

(invoc_array[(3)] = G__51405);

(invoc_array[(4)] = G__51406);

(invoc_array[(5)] = G__51407);

(invoc_array[(6)] = G__51408);

(invoc_array[(7)] = G__51409);

(invoc_array[(8)] = G__51410);

(invoc_array[(9)] = G__51411);

(invoc_array[(10)] = G__51412);

(invoc_array[(11)] = G__51413);

(invoc_array[(12)] = G__51414);

(invoc_array[(13)] = G__51415);

(invoc_array[(14)] = G__51416);

(invoc_array[(15)] = G__51417);

(invoc_array[(16)] = G__51418);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (18):
var G__51454 = cljs.core._nth.call(null,params,(0));
var G__51455 = cljs.core._nth.call(null,params,(1));
var G__51456 = cljs.core._nth.call(null,params,(2));
var G__51457 = cljs.core._nth.call(null,params,(3));
var G__51458 = cljs.core._nth.call(null,params,(4));
var G__51459 = cljs.core._nth.call(null,params,(5));
var G__51460 = cljs.core._nth.call(null,params,(6));
var G__51461 = cljs.core._nth.call(null,params,(7));
var G__51462 = cljs.core._nth.call(null,params,(8));
var G__51463 = cljs.core._nth.call(null,params,(9));
var G__51464 = cljs.core._nth.call(null,params,(10));
var G__51465 = cljs.core._nth.call(null,params,(11));
var G__51466 = cljs.core._nth.call(null,params,(12));
var G__51467 = cljs.core._nth.call(null,params,(13));
var G__51468 = cljs.core._nth.call(null,params,(14));
var G__51469 = cljs.core._nth.call(null,params,(15));
var G__51470 = cljs.core._nth.call(null,params,(16));
var G__51471 = cljs.core._nth.call(null,params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__51436,G__51437,G__51438,G__51439,G__51440,G__51441,G__51442,G__51443,G__51444,G__51445,G__51446,G__51447,G__51448,G__51449,G__51450,G__51451,G__51452,G__51453){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51436);

(invoc_array[(1)] = G__51437);

(invoc_array[(2)] = G__51438);

(invoc_array[(3)] = G__51439);

(invoc_array[(4)] = G__51440);

(invoc_array[(5)] = G__51441);

(invoc_array[(6)] = G__51442);

(invoc_array[(7)] = G__51443);

(invoc_array[(8)] = G__51444);

(invoc_array[(9)] = G__51445);

(invoc_array[(10)] = G__51446);

(invoc_array[(11)] = G__51447);

(invoc_array[(12)] = G__51448);

(invoc_array[(13)] = G__51449);

(invoc_array[(14)] = G__51450);

(invoc_array[(15)] = G__51451);

(invoc_array[(16)] = G__51452);

(invoc_array[(17)] = G__51453);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (19):
var G__51491 = cljs.core._nth.call(null,params,(0));
var G__51492 = cljs.core._nth.call(null,params,(1));
var G__51493 = cljs.core._nth.call(null,params,(2));
var G__51494 = cljs.core._nth.call(null,params,(3));
var G__51495 = cljs.core._nth.call(null,params,(4));
var G__51496 = cljs.core._nth.call(null,params,(5));
var G__51497 = cljs.core._nth.call(null,params,(6));
var G__51498 = cljs.core._nth.call(null,params,(7));
var G__51499 = cljs.core._nth.call(null,params,(8));
var G__51500 = cljs.core._nth.call(null,params,(9));
var G__51501 = cljs.core._nth.call(null,params,(10));
var G__51502 = cljs.core._nth.call(null,params,(11));
var G__51503 = cljs.core._nth.call(null,params,(12));
var G__51504 = cljs.core._nth.call(null,params,(13));
var G__51505 = cljs.core._nth.call(null,params,(14));
var G__51506 = cljs.core._nth.call(null,params,(15));
var G__51507 = cljs.core._nth.call(null,params,(16));
var G__51508 = cljs.core._nth.call(null,params,(17));
var G__51509 = cljs.core._nth.call(null,params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__51472,G__51473,G__51474,G__51475,G__51476,G__51477,G__51478,G__51479,G__51480,G__51481,G__51482,G__51483,G__51484,G__51485,G__51486,G__51487,G__51488,G__51489,G__51490){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51472);

(invoc_array[(1)] = G__51473);

(invoc_array[(2)] = G__51474);

(invoc_array[(3)] = G__51475);

(invoc_array[(4)] = G__51476);

(invoc_array[(5)] = G__51477);

(invoc_array[(6)] = G__51478);

(invoc_array[(7)] = G__51479);

(invoc_array[(8)] = G__51480);

(invoc_array[(9)] = G__51481);

(invoc_array[(10)] = G__51482);

(invoc_array[(11)] = G__51483);

(invoc_array[(12)] = G__51484);

(invoc_array[(13)] = G__51485);

(invoc_array[(14)] = G__51486);

(invoc_array[(15)] = G__51487);

(invoc_array[(16)] = G__51488);

(invoc_array[(17)] = G__51489);

(invoc_array[(18)] = G__51490);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
case (20):
var G__51530 = cljs.core._nth.call(null,params,(0));
var G__51531 = cljs.core._nth.call(null,params,(1));
var G__51532 = cljs.core._nth.call(null,params,(2));
var G__51533 = cljs.core._nth.call(null,params,(3));
var G__51534 = cljs.core._nth.call(null,params,(4));
var G__51535 = cljs.core._nth.call(null,params,(5));
var G__51536 = cljs.core._nth.call(null,params,(6));
var G__51537 = cljs.core._nth.call(null,params,(7));
var G__51538 = cljs.core._nth.call(null,params,(8));
var G__51539 = cljs.core._nth.call(null,params,(9));
var G__51540 = cljs.core._nth.call(null,params,(10));
var G__51541 = cljs.core._nth.call(null,params,(11));
var G__51542 = cljs.core._nth.call(null,params,(12));
var G__51543 = cljs.core._nth.call(null,params,(13));
var G__51544 = cljs.core._nth.call(null,params,(14));
var G__51545 = cljs.core._nth.call(null,params,(15));
var G__51546 = cljs.core._nth.call(null,params,(16));
var G__51547 = cljs.core._nth.call(null,params,(17));
var G__51548 = cljs.core._nth.call(null,params,(18));
var G__51549 = cljs.core._nth.call(null,params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__51510,G__51511,G__51512,G__51513,G__51514,G__51515,G__51516,G__51517,G__51518,G__51519,G__51520,G__51521,G__51522,G__51523,G__51524,G__51525,G__51526,G__51527,G__51528,G__51529){
var invoc_array = cljs.core.object_array.call(null,invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
enclosed__GT_invocation.call(null,enclosed_array,invoc_array);
} else {
}

(invoc_array[(0)] = G__51510);

(invoc_array[(1)] = G__51511);

(invoc_array[(2)] = G__51512);

(invoc_array[(3)] = G__51513);

(invoc_array[(4)] = G__51514);

(invoc_array[(5)] = G__51515);

(invoc_array[(6)] = G__51516);

(invoc_array[(7)] = G__51517);

(invoc_array[(8)] = G__51518);

(invoc_array[(9)] = G__51519);

(invoc_array[(10)] = G__51520);

(invoc_array[(11)] = G__51521);

(invoc_array[(12)] = G__51522);

(invoc_array[(13)] = G__51523);

(invoc_array[(14)] = G__51524);

(invoc_array[(15)] = G__51525);

(invoc_array[(16)] = G__51526);

(invoc_array[(17)] = G__51527);

(invoc_array[(18)] = G__51528);

(invoc_array[(19)] = G__51529);

while(true){
var ret__49659__auto__ = sci.impl.types.eval.call(null,body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__49659__auto__)){
continue;
} else {
return ret__49659__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51129)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__20754__auto__ = cljs.core.get.call(null,arities,arity);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.call(null,(function (arity_map,fn_body){
var f = sci.impl.fns.fun.call(null,ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.call(null,arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.call(null,arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = bindings_fn.call(null,bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun.call(null,ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map.call(null,ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__51595__delegate = function (args){
var arg_count = cljs.core.count.call(null,args);
var temp__5718__auto__ = sci.impl.fns.lookup_by_arity.call(null,arities,arg_count);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return cljs.core.apply.call(null,f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__51595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51596__i = 0, G__51596__a = new Array(arguments.length -  0);
while (G__51596__i < G__51596__a.length) {G__51596__a[G__51596__i] = arguments[G__51596__i + 0]; ++G__51596__i;}
  args = new cljs.core.IndexedSeq(G__51596__a,0,null);
} 
return G__51595__delegate.call(this,args);};
G__51595.cljs$lang$maxFixedArity = 0;
G__51595.cljs$lang$applyTo = (function (arglist__51597){
var args = cljs.core.seq(arglist__51597);
return G__51595__delegate(args);
});
G__51595.cljs$core$IFn$_invoke$arity$variadic = G__51595__delegate;
return G__51595;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.call(null,f,(function (p1__51594_SHARP_){
return cljs.core.assoc.call(null,p1__51594_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f);
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count.call(null,enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_.call(null,sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);
