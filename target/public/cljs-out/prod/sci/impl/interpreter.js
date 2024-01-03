// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(cljs.core.seq_QMARK_.call(null,form)){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first.call(null,form))){
var exprs = cljs.core.rest.call(null,form);
var ret = null;
while(true){
if(cljs.core.seq.call(null,exprs)){
var G__53365 = cljs.core.rest.call(null,exprs);
var G__53366 = sci.impl.interpreter.eval_form.call(null,ctx,cljs.core.first.call(null,exprs));
exprs = G__53365;
ret = G__53366;
continue;
} else {
return ret;
}
break;
}
} else {
var upper_sym = cljs.core.gensym.call(null);
var cb = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([upper_sym,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentArrayMap.EMPTY], null)], null)]));
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0)], null),new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb);
var analyzed = sci.impl.analyzer.analyze.call(null,ctx__$1,form,true);
var binding_array_size = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0),new cljs.core.Keyword(null,"syms","syms",-1575891762)], null)));
var bindings = cljs.core.object_array.call(null,binding_array_size);
if((analyzed instanceof sci.impl.types.EvalForm)){
return sci.impl.interpreter.eval_form.call(null,ctx__$1,sci.impl.types.getVal.call(null,analyzed));
} else {
try{return sci.impl.types.eval.call(null,analyzed,ctx__$1,bindings);
}catch (e53363){if((e53363 instanceof Error)){
var e = e53363;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx__$1,bindings,e,analyzed);
} else {
throw e53363;

}
}}
}
} else {
var upper_sym = cljs.core.gensym.call(null);
var cb = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([upper_sym,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentArrayMap.EMPTY], null)], null)]));
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0)], null),new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb);
var analyzed = sci.impl.analyzer.analyze.call(null,ctx__$1,form);
var binding_array_size = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0),new cljs.core.Keyword(null,"syms","syms",-1575891762)], null)));
var bindings = cljs.core.object_array.call(null,binding_array_size);
try{return sci.impl.types.eval.call(null,analyzed,ctx__$1,bindings);
}catch (e53364){if((e53364 instanceof Error)){
var e = e53364;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx__$1,bindings,e,analyzed);
} else {
throw e53364;

}
}}
});
cljs.core.vreset_BANG_.call(null,sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref.call(null,sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),expr)){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form.call(null,ctx,expr);
var G__53367 = ret__$1;
ret = G__53367;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings.call(null);
}});
cljs.core.vreset_BANG_.call(null,sci.impl.utils.eval_string_STAR_,sci.impl.interpreter.eval_string_STAR_);
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__53369 = arguments.length;
switch (G__53369) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.call(null,s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init.call(null,opts);
var ret = sci.impl.interpreter.eval_string_STAR_.call(null,init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);

