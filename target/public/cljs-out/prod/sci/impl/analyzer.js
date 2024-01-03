// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.analyzer');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.impl.destructure');
goog.require('sci.impl.evaluator');
goog.require('sci.impl.faster');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.load');
goog.require('sci.impl.macros');
goog.require('sci.impl.records');
goog.require('sci.impl.resolve');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
goog.require('cljs.tagged_literals');
goog.require('goog.object');
goog.scope(function(){
sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.recur_target = (function sci$impl$analyzer$recur_target(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.with_recur_target = (function sci$impl$analyzer$with_recur_target(ctx,v){
return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),v);
});
sci.impl.analyzer.without_recur_target = (function sci$impl$analyzer$without_recur_target(ctx){
return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),false);
});
sci.impl.analyzer.recur_target_QMARK_ = (function sci$impl$analyzer$recur_target_QMARK_(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"let*","let*",1920721458,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.call(null,msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});




sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var original_expr = expr;
if(cljs.core.seq_QMARK_.call(null,expr)){
var op = cljs.core.first.call(null,expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.call(null,sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze.call(null,ctx__$1,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),op)){
return expr;
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.call(null,ctx__$1,op,true);
}catch (e53047){var _ = e53047;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)){
return expr;
} else {
var macro_var_QMARK_ = (function (){var and__20748__auto__ = sci.impl.vars.var_QMARK_.call(null,f);
if(and__20748__auto__){
return sci.impl.vars.isMacro.call(null,f);
} else {
return and__20748__auto__;
}
})();
var needs_ctx_QMARK_ = cljs.core.keyword_identical_QMARK_.call(null,sci.impl.utils.needs_ctx,(function (){var G__53048 = f;
var G__53048__$1 = (((G__53048 == null))?null:cljs.core.meta.call(null,G__53048));
if((G__53048__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__53048__$1);
}
})());
var f__$1 = (cljs.core.truth_(macro_var_QMARK_)?cljs.core.deref.call(null,f):f);
if(cljs.core.truth_((function (){var or__20754__auto__ = macro_var_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return sci.impl.utils.macro_QMARK_.call(null,f__$1);
}
})())){
if(needs_ctx_QMARK_){
return cljs.core.apply.call(null,f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),ctx__$1,cljs.core.rest.call(null,expr));
} else {
return cljs.core.apply.call(null,f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),cljs.core.rest.call(null,expr));
}
} else {
return expr;
}
}

}
}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1.call(null,ctx,form);
if((ex === form)){
return form;
} else {
return sci.impl.analyzer.macroexpand.call(null,ctx,ex);
}
});
cljs.core.vreset_BANG_.call(null,sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_.call(null,sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.analyze_children_tail = (function sci$impl$analyzer$analyze_children_tail(ctx,children){
var rt = sci.impl.analyzer.recur_target.call(null,ctx);
var non_tail_ctx = sci.impl.analyzer.without_recur_target.call(null,ctx);
var analyzed_children_non_tail = cljs.core.mapv.call(null,(function (p1__53049_SHARP_){
return sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__53049_SHARP_);
}),cljs.core.butlast.call(null,children));
var ret_child = sci.impl.analyzer.analyze.call(null,sci.impl.analyzer.with_recur_target.call(null,ctx,rt),cljs.core.last.call(null,children));
return cljs.core.conj.call(null,analyzed_children_non_tail,ret_child);
});
var ret__22143__auto___53054 = sci.impl.analyzer.gen_return_do = (function sci$impl$analyzer$gen_return_do(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.call(null,(function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,j,null,(1),null)))))], null);
}),cljs.core.range.call(null,i)))], null);
}),cljs.core.range.call(null,(2),(4)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"return-do","return-do",133353255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",-406049125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.analyzer","analyze-children-tail","sci.impl.analyzer/analyze-children-tail",628580735,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children","children",699969545,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children","children",699969545,null),null,(1),null))))),null,(1),null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))], null),cljs.core.mapcat.call(null,(function (p__53050){
var vec__53051 = p__53050;
var i = cljs.core.nth.call(null,vec__53051,(0),null);
var binds = cljs.core.nth.call(null,vec__53051,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","->Node","sci.impl.types/->Node",-1318888839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (j){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","eval","sci.impl.types/eval",700838406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),null,(1),null)))));
}),cljs.core.range.call(null,i))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))))], null);
}),let_bindings),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","->Node","sci.impl.types/->Node",-1318888839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.evaluator","eval-do","sci.impl.evaluator/eval-do",-1643119421,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null)))))))))),null,(1),null))))),null,(1),null)))));
});
(sci.impl.analyzer.gen_return_do.cljs$lang$macro = true);

sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail.call(null,ctx,children);
}),null));
var G__53055 = cljs.core.count.call(null,children);
switch (G__53055) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));

break;
case (2):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);

return sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
}),null);

break;
case (3):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);

sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);

return sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref.call(null,analyzed_children);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_do.call(null,ctx__$1,bindings,analyzed_children__$1);
}),null);

}
});
var ret__22143__auto___53061 = sci.impl.analyzer.gen_return_or = (function sci$impl$analyzer$gen_return_or(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.call(null,(function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,j,null,(1),null)))))], null);
}),cljs.core.range.call(null,i)))], null);
}),cljs.core.range.call(null,(2),(20)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"return-or","return-or",1738651729,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",-406049125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.analyzer","analyze-children-tail","sci.impl.analyzer/analyze-children-tail",628580735,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children","children",699969545,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children","children",699969545,null),null,(1),null))))),null,(1),null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.analyzer","analyze","sci.impl.analyzer/analyze",1465033510,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children","children",699969545,null),null,(1),null))))),null,(1),null)))))], null),cljs.core.mapcat.call(null,(function (p__53057){
var vec__53058 = p__53057;
var i = cljs.core.nth.call(null,vec__53058,(0),null);
var binds = cljs.core.nth.call(null,vec__53058,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","->Node","sci.impl.types/->Node",-1318888839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),cljs.core.map.call(null,(function (j){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","eval","sci.impl.types/eval",700838406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),null,(1),null)))));
}),cljs.core.range.call(null,i))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))))], null);
}),let_bindings),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","->Node","sci.impl.types/->Node",-1318888839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.evaluator","eval-or","sci.impl.evaluator/eval-or",1529967651,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null)))))))))),null,(1),null))))),null,(1),null)))));
});
(sci.impl.analyzer.gen_return_or.cljs$lang$macro = true);

sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail.call(null,ctx,children);
}),null));
var G__53062 = cljs.core.count.call(null,children);
switch (G__53062) {
case (0):
return null;

break;
case (1):
return sci.impl.analyzer.analyze.call(null,ctx,cljs.core.first.call(null,children));

break;
case (2):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
}
}),null);

break;
case (3):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
}
}
}),null);

break;
case (4):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
return sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
}
}
}
}),null);

break;
case (5):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
return sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
}
}
}
}
}),null);

break;
case (6):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
return sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
}
}
}
}
}
}),null);

break;
case (7):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
return sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
}
}
}
}
}
}
}),null);

break;
case (8):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
return sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
}
}
}
}
}
}
}
}),null);

break;
case (9):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
return sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}),null);

break;
case (10):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
return sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}),null);

break;
case (11):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
var or__20754__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$9)){
return or__20754__auto____$9;
} else {
return sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (12):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
var or__20754__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$9)){
return or__20754__auto____$9;
} else {
var or__20754__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$10)){
return or__20754__auto____$10;
} else {
return sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (13):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
var or__20754__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$9)){
return or__20754__auto____$9;
} else {
var or__20754__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$10)){
return or__20754__auto____$10;
} else {
var or__20754__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$11)){
return or__20754__auto____$11;
} else {
return sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (14):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
var or__20754__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$9)){
return or__20754__auto____$9;
} else {
var or__20754__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$10)){
return or__20754__auto____$10;
} else {
var or__20754__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$11)){
return or__20754__auto____$11;
} else {
var or__20754__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$12)){
return or__20754__auto____$12;
} else {
return sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (15):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
var or__20754__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$9)){
return or__20754__auto____$9;
} else {
var or__20754__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$10)){
return or__20754__auto____$10;
} else {
var or__20754__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$11)){
return or__20754__auto____$11;
} else {
var or__20754__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$12)){
return or__20754__auto____$12;
} else {
var or__20754__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$13)){
return or__20754__auto____$13;
} else {
return sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (16):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
var arg15 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(15));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
var or__20754__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$9)){
return or__20754__auto____$9;
} else {
var or__20754__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$10)){
return or__20754__auto____$10;
} else {
var or__20754__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$11)){
return or__20754__auto____$11;
} else {
var or__20754__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$12)){
return or__20754__auto____$12;
} else {
var or__20754__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$13)){
return or__20754__auto____$13;
} else {
var or__20754__auto____$14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$14)){
return or__20754__auto____$14;
} else {
return sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (17):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
var arg15 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(15));
var arg16 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(16));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
var or__20754__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$9)){
return or__20754__auto____$9;
} else {
var or__20754__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$10)){
return or__20754__auto____$10;
} else {
var or__20754__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$11)){
return or__20754__auto____$11;
} else {
var or__20754__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$12)){
return or__20754__auto____$12;
} else {
var or__20754__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$13)){
return or__20754__auto____$13;
} else {
var or__20754__auto____$14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$14)){
return or__20754__auto____$14;
} else {
var or__20754__auto____$15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$15)){
return or__20754__auto____$15;
} else {
return sci.impl.types.eval.call(null,arg16,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (18):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
var arg15 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(15));
var arg16 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(16));
var arg17 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(17));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
var or__20754__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$9)){
return or__20754__auto____$9;
} else {
var or__20754__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$10)){
return or__20754__auto____$10;
} else {
var or__20754__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$11)){
return or__20754__auto____$11;
} else {
var or__20754__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$12)){
return or__20754__auto____$12;
} else {
var or__20754__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$13)){
return or__20754__auto____$13;
} else {
var or__20754__auto____$14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$14)){
return or__20754__auto____$14;
} else {
var or__20754__auto____$15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$15)){
return or__20754__auto____$15;
} else {
var or__20754__auto____$16 = sci.impl.types.eval.call(null,arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$16)){
return or__20754__auto____$16;
} else {
return sci.impl.types.eval.call(null,arg17,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (19):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
var arg15 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(15));
var arg16 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(16));
var arg17 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(17));
var arg18 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(18));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var or__20754__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$4)){
return or__20754__auto____$4;
} else {
var or__20754__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$5)){
return or__20754__auto____$5;
} else {
var or__20754__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$6)){
return or__20754__auto____$6;
} else {
var or__20754__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$7)){
return or__20754__auto____$7;
} else {
var or__20754__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$8)){
return or__20754__auto____$8;
} else {
var or__20754__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$9)){
return or__20754__auto____$9;
} else {
var or__20754__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$10)){
return or__20754__auto____$10;
} else {
var or__20754__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$11)){
return or__20754__auto____$11;
} else {
var or__20754__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$12)){
return or__20754__auto____$12;
} else {
var or__20754__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$13)){
return or__20754__auto____$13;
} else {
var or__20754__auto____$14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$14)){
return or__20754__auto____$14;
} else {
var or__20754__auto____$15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$15)){
return or__20754__auto____$15;
} else {
var or__20754__auto____$16 = sci.impl.types.eval.call(null,arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$16)){
return or__20754__auto____$16;
} else {
var or__20754__auto____$17 = sci.impl.types.eval.call(null,arg17,ctx__$1,bindings);
if(cljs.core.truth_(or__20754__auto____$17)){
return or__20754__auto____$17;
} else {
return sci.impl.types.eval.call(null,arg18,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref.call(null,analyzed_children);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_or.call(null,analyzed_children__$1,ctx__$1,bindings);
}),null);

}
});
var ret__22143__auto___53068 = sci.impl.analyzer.gen_return_and = (function sci$impl$analyzer$gen_return_and(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.call(null,(function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,j,null,(1),null)))))], null);
}),cljs.core.range.call(null,i)))], null);
}),cljs.core.range.call(null,(2),(20)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"return-and","return-and",-991888679,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",-406049125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.analyzer","analyze-children-tail","sci.impl.analyzer/analyze-children-tail",628580735,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children","children",699969545,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children","children",699969545,null),null,(1),null))))),null,(1),null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.analyzer","analyze","sci.impl.analyzer/analyze",1465033510,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children","children",699969545,null),null,(1),null))))),null,(1),null)))))], null),cljs.core.mapcat.call(null,(function (p__53064){
var vec__53065 = p__53064;
var i = cljs.core.nth.call(null,vec__53065,(0),null);
var binds = cljs.core.nth.call(null,vec__53065,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","->Node","sci.impl.types/->Node",-1318888839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),cljs.core.map.call(null,(function (j){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","eval","sci.impl.types/eval",700838406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),null,(1),null)))));
}),cljs.core.range.call(null,i))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))))], null);
}),let_bindings),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.types","->Node","sci.impl.types/->Node",-1318888839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("sci.impl.evaluator","eval-and","sci.impl.evaluator/eval-and",298758339,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"analyzed-children","analyzed-children",1732620617,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null))))),null,(1),null)))))))))),null,(1),null))))),null,(1),null)))));
});
(sci.impl.analyzer.gen_return_and.cljs$lang$macro = true);

sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail.call(null,ctx,children);
}),null));
var G__53069 = cljs.core.count.call(null,children);
switch (G__53069) {
case (0):
return null;

break;
case (1):
return sci.impl.analyzer.analyze.call(null,ctx,cljs.core.first.call(null,children));

break;
case (2):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
return sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
} else {
return and__20748__auto__;
}
}),null);

break;
case (3):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
return sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (4):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
return sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (5):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
return sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (6):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
return sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (7):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
return sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (8):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
return sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (9):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
return sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (10):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
return sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (11):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
var and__20748__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$9)){
return sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
} else {
return and__20748__auto____$9;
}
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (12):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
var and__20748__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$9)){
var and__20748__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$10)){
return sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
} else {
return and__20748__auto____$10;
}
} else {
return and__20748__auto____$9;
}
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (13):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
var and__20748__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$9)){
var and__20748__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$10)){
var and__20748__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$11)){
return sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
} else {
return and__20748__auto____$11;
}
} else {
return and__20748__auto____$10;
}
} else {
return and__20748__auto____$9;
}
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (14):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
var and__20748__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$9)){
var and__20748__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$10)){
var and__20748__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$11)){
var and__20748__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$12)){
return sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
} else {
return and__20748__auto____$12;
}
} else {
return and__20748__auto____$11;
}
} else {
return and__20748__auto____$10;
}
} else {
return and__20748__auto____$9;
}
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (15):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
var and__20748__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$9)){
var and__20748__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$10)){
var and__20748__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$11)){
var and__20748__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$12)){
var and__20748__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$13)){
return sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
} else {
return and__20748__auto____$13;
}
} else {
return and__20748__auto____$12;
}
} else {
return and__20748__auto____$11;
}
} else {
return and__20748__auto____$10;
}
} else {
return and__20748__auto____$9;
}
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (16):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
var arg15 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(15));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
var and__20748__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$9)){
var and__20748__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$10)){
var and__20748__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$11)){
var and__20748__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$12)){
var and__20748__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$13)){
var and__20748__auto____$14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$14)){
return sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
} else {
return and__20748__auto____$14;
}
} else {
return and__20748__auto____$13;
}
} else {
return and__20748__auto____$12;
}
} else {
return and__20748__auto____$11;
}
} else {
return and__20748__auto____$10;
}
} else {
return and__20748__auto____$9;
}
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (17):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
var arg15 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(15));
var arg16 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(16));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
var and__20748__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$9)){
var and__20748__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$10)){
var and__20748__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$11)){
var and__20748__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$12)){
var and__20748__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$13)){
var and__20748__auto____$14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$14)){
var and__20748__auto____$15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$15)){
return sci.impl.types.eval.call(null,arg16,ctx__$1,bindings);
} else {
return and__20748__auto____$15;
}
} else {
return and__20748__auto____$14;
}
} else {
return and__20748__auto____$13;
}
} else {
return and__20748__auto____$12;
}
} else {
return and__20748__auto____$11;
}
} else {
return and__20748__auto____$10;
}
} else {
return and__20748__auto____$9;
}
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (18):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
var arg15 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(15));
var arg16 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(16));
var arg17 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(17));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
var and__20748__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$9)){
var and__20748__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$10)){
var and__20748__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$11)){
var and__20748__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$12)){
var and__20748__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$13)){
var and__20748__auto____$14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$14)){
var and__20748__auto____$15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$15)){
var and__20748__auto____$16 = sci.impl.types.eval.call(null,arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$16)){
return sci.impl.types.eval.call(null,arg17,ctx__$1,bindings);
} else {
return and__20748__auto____$16;
}
} else {
return and__20748__auto____$15;
}
} else {
return and__20748__auto____$14;
}
} else {
return and__20748__auto____$13;
}
} else {
return and__20748__auto____$12;
}
} else {
return and__20748__auto____$11;
}
} else {
return and__20748__auto____$10;
}
} else {
return and__20748__auto____$9;
}
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
case (19):
var arg0 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(0));
var arg1 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(1));
var arg2 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(2));
var arg3 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(3));
var arg4 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(4));
var arg5 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(5));
var arg6 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(6));
var arg7 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(7));
var arg8 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(8));
var arg9 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(9));
var arg10 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(10));
var arg11 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(11));
var arg12 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(12));
var arg13 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(13));
var arg14 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(14));
var arg15 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(15));
var arg16 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(16));
var arg17 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(17));
var arg18 = cljs.core.nth.call(null,cljs.core.deref.call(null,analyzed_children),(18));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var and__20748__auto__ = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$3)){
var and__20748__auto____$4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$4)){
var and__20748__auto____$5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$5)){
var and__20748__auto____$6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$6)){
var and__20748__auto____$7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$7)){
var and__20748__auto____$8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$8)){
var and__20748__auto____$9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$9)){
var and__20748__auto____$10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$10)){
var and__20748__auto____$11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$11)){
var and__20748__auto____$12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$12)){
var and__20748__auto____$13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$13)){
var and__20748__auto____$14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$14)){
var and__20748__auto____$15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$15)){
var and__20748__auto____$16 = sci.impl.types.eval.call(null,arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$16)){
var and__20748__auto____$17 = sci.impl.types.eval.call(null,arg17,ctx__$1,bindings);
if(cljs.core.truth_(and__20748__auto____$17)){
return sci.impl.types.eval.call(null,arg18,ctx__$1,bindings);
} else {
return and__20748__auto____$17;
}
} else {
return and__20748__auto____$16;
}
} else {
return and__20748__auto____$15;
}
} else {
return and__20748__auto____$14;
}
} else {
return and__20748__auto____$13;
}
} else {
return and__20748__auto____$12;
}
} else {
return and__20748__auto____$11;
}
} else {
return and__20748__auto____$10;
}
} else {
return and__20748__auto____$9;
}
} else {
return and__20748__auto____$8;
}
} else {
return and__20748__auto____$7;
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref.call(null,analyzed_children);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_and.call(null,ctx__$1,bindings,analyzed_children__$1);
}),null);

}
});
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(ctx,expr,analyzed_children){
if(cljs.core.truth_(sci.impl.analyzer.recur_target_QMARK_.call(null,ctx))){
} else {
sci.impl.analyzer.throw_error_with_location.call(null,"Can only recur from tail position",expr);
}

var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctx);
var G__53071 = cljs.core.count.call(null,analyzed_children);
switch (G__53071) {
case (0):
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (1):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
(bindings[(0)] = eval_0);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (2):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (3):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (4):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (5):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (6):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (7):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (8):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (9):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (10):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (11):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var param10 = cljs.core.nth.call(null,params,(10));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (12):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var param10 = cljs.core.nth.call(null,params,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var param11 = cljs.core.nth.call(null,params,(11));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (13):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var param10 = cljs.core.nth.call(null,params,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var param11 = cljs.core.nth.call(null,params,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var param12 = cljs.core.nth.call(null,params,(12));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (14):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var param10 = cljs.core.nth.call(null,params,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var param11 = cljs.core.nth.call(null,params,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var param12 = cljs.core.nth.call(null,params,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var param13 = cljs.core.nth.call(null,params,(13));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (15):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var param10 = cljs.core.nth.call(null,params,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var param11 = cljs.core.nth.call(null,params,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var param12 = cljs.core.nth.call(null,params,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var param13 = cljs.core.nth.call(null,params,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var param14 = cljs.core.nth.call(null,params,(14));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (16):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var param10 = cljs.core.nth.call(null,params,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var param11 = cljs.core.nth.call(null,params,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var param12 = cljs.core.nth.call(null,params,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var param13 = cljs.core.nth.call(null,params,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var param14 = cljs.core.nth.call(null,params,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var param15 = cljs.core.nth.call(null,params,(15));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (17):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var param10 = cljs.core.nth.call(null,params,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var param11 = cljs.core.nth.call(null,params,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var param12 = cljs.core.nth.call(null,params,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var param13 = cljs.core.nth.call(null,params,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var param14 = cljs.core.nth.call(null,params,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var param15 = cljs.core.nth.call(null,params,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
var param16 = cljs.core.nth.call(null,params,(16));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval.call(null,arg16,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (18):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var param10 = cljs.core.nth.call(null,params,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var param11 = cljs.core.nth.call(null,params,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var param12 = cljs.core.nth.call(null,params,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var param13 = cljs.core.nth.call(null,params,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var param14 = cljs.core.nth.call(null,params,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var param15 = cljs.core.nth.call(null,params,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
var param16 = cljs.core.nth.call(null,params,(16));
var arg17 = cljs.core.nth.call(null,analyzed_children,(17));
var param17 = cljs.core.nth.call(null,params,(17));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval.call(null,arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval.call(null,arg17,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (19):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var param0 = cljs.core.nth.call(null,params,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var param1 = cljs.core.nth.call(null,params,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var param2 = cljs.core.nth.call(null,params,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var param3 = cljs.core.nth.call(null,params,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var param4 = cljs.core.nth.call(null,params,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var param5 = cljs.core.nth.call(null,params,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var param6 = cljs.core.nth.call(null,params,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var param7 = cljs.core.nth.call(null,params,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var param8 = cljs.core.nth.call(null,params,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var param9 = cljs.core.nth.call(null,params,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var param10 = cljs.core.nth.call(null,params,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var param11 = cljs.core.nth.call(null,params,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var param12 = cljs.core.nth.call(null,params,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var param13 = cljs.core.nth.call(null,params,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var param14 = cljs.core.nth.call(null,params,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var param15 = cljs.core.nth.call(null,params,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
var param16 = cljs.core.nth.call(null,params,(16));
var arg17 = cljs.core.nth.call(null,analyzed_children,(17));
var param17 = cljs.core.nth.call(null,params,(17));
var arg18 = cljs.core.nth.call(null,analyzed_children,(18));
var param18 = cljs.core.nth.call(null,params,(18));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval.call(null,arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval.call(null,arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval.call(null,arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval.call(null,arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval.call(null,arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval.call(null,arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval.call(null,arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval.call(null,arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval.call(null,arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval.call(null,arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval.call(null,arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval.call(null,arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval.call(null,arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval.call(null,arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval.call(null,arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval.call(null,arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval.call(null,arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval.call(null,arg17,ctx__$1,bindings);
var eval_18 = sci.impl.types.eval.call(null,arg18,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

(bindings[(18)] = eval_18);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53071)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.call(null,(function (p1__53073_SHARP_){
return sci.impl.analyzer.analyze.call(null,ctx,p1__53073_SHARP_);
}),children);
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
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.self_ref_idx = self_ref_idx;
this.iden__GT_invoke_idx = iden__GT_invoke_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k53075,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__53079 = k53075;
var G__53079__$1 = (((G__53079 instanceof cljs.core.Keyword))?G__53079.fqn:null);
switch (G__53079__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "self-ref-idx":
return self__.self_ref_idx;

break;
case "iden->invoke-idx":
return self__.iden__GT_invoke_idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k53075,else__21451__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__53080){
var vec__53081 = p__53080;
var k__21472__auto__ = cljs.core.nth.call(null,vec__53081,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__53081,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53074){
var self__ = this;
var G__53074__$1 = this;
return (new cljs.core.RecordIter((0),G__53074__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53076,other53077){
var self__ = this;
var this53076__$1 = this;
return (((!((other53077 == null)))) && ((((this53076__$1.constructor === other53077.constructor)) && (((cljs.core._EQ_.call(null,this53076__$1.params,other53077.params)) && (((cljs.core._EQ_.call(null,this53076__$1.body,other53077.body)) && (((cljs.core._EQ_.call(null,this53076__$1.fixed_arity,other53077.fixed_arity)) && (((cljs.core._EQ_.call(null,this53076__$1.var_arg_name,other53077.var_arg_name)) && (((cljs.core._EQ_.call(null,this53076__$1.self_ref_idx,other53077.self_ref_idx)) && (((cljs.core._EQ_.call(null,this53076__$1.iden__GT_invoke_idx,other53077.iden__GT_invoke_idx)) && (cljs.core._EQ_.call(null,this53076__$1.__extmap,other53077.__extmap)))))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k53075){
var self__ = this;
var this__21455__auto____$1 = this;
var G__53084 = k53075;
var G__53084__$1 = (((G__53084 instanceof cljs.core.Keyword))?G__53084.fqn:null);
switch (G__53084__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k53075);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__53074){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__53085 = cljs.core.keyword_identical_QMARK_;
var expr__53086 = k__21457__auto__;
if(cljs.core.truth_(pred__53085.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__53086))){
return (new sci.impl.analyzer.FnBody(G__53074,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__53085.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__53086))){
return (new sci.impl.analyzer.FnBody(self__.params,G__53074,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__53085.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__53086))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__53074,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__53085.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__53086))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__53074,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__53085.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__53086))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__53074,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__53085.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__53086))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__53074,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__53074),null));
}
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__53074){
var self__ = this;
var this__21447__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__53074,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"self-ref-idx","self-ref-idx",255993715,null),new cljs.core.Symbol(null,"iden->invoke-idx","iden->invoke-idx",-157095499,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__53078){
var extmap__21490__auto__ = (function (){var G__53088 = cljs.core.dissoc.call(null,G__53078,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026));
if(cljs.core.record_QMARK_.call(null,G__53078)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__53088);
} else {
return G__53088;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__53078),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__53078),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__53078),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__53078),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__53078),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__53078),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__53092,p__53093,macro_QMARK_,fn_name,fn_id){
var map__53094 = p__53092;
var map__53094__$1 = cljs.core.__destructure_map.call(null,map__53094);
var ctx = map__53094__$1;
var fn_expr = cljs.core.get.call(null,map__53094__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__53095 = p__53093;
var seq__53096 = cljs.core.seq.call(null,vec__53095);
var first__53097 = cljs.core.first.call(null,seq__53096);
var seq__53096__$1 = cljs.core.next.call(null,seq__53096);
var binding_vector = first__53097;
var body_exprs = seq__53096__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location.call(null,"Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_.call(null,binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location.call(null,"Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var next_body = cljs.core.next.call(null,body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first.call(null,body_exprs);
if(cljs.core.map_QMARK_.call(null,e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__20754__auto__ = conds;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.meta.call(null,binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count.call(null,body_exprs__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first.call(null,body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,(function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,(function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__53098 = sci.impl.utils.maybe_destructured.call(null,binding_vector__$1,body_exprs__$3);
var map__53098__$1 = cljs.core.__destructure_map.call(null,map__53098);
var params = cljs.core.get.call(null,map__53098__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__53098__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var vec__53099 = cljs.core.split_with.call(null,(function (p1__53091_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__53091_SHARP_);
}),params);
var fixed_args = cljs.core.nth.call(null,vec__53099,(0),null);
var vec__53102 = cljs.core.nth.call(null,vec__53099,(1),null);
var _ = cljs.core.nth.call(null,vec__53102,(0),null);
var var_arg_name = cljs.core.nth.call(null,vec__53102,(1),null);
var fixed_args__$1 = cljs.core.vec.call(null,fixed_args);
var fixed_arity = cljs.core.count.call(null,fixed_args__$1);
var param_names = (function (){var G__53105 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.call(null,G__53105,var_arg_name);
} else {
return G__53105;
}
})();
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"params","params",710516235),param_names);
var param_count = cljs.core.count.call(null,param_names);
var param_idens = cljs.core.repeatedly.call(null,param_count,cljs.core.gensym);
var param_bindings = cljs.core.zipmap.call(null,param_names,param_idens);
var iden__GT_invoke_idx = cljs.core.zipmap.call(null,param_idens,cljs.core.range.call(null));
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ctx__$2 = cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.call(null,bindings,param_bindings));
var ctx__$3 = cljs.core.assoc.call(null,ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx);
var ctx__$4 = cljs.core.update.call(null,ctx__$3,new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.conj,fixed_arity);
var ___$1 = cljs.core._vreset_BANG_.call(null,new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4),cljs.core.assoc_in.call(null,cljs.core._deref.call(null,new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.call(null,new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)),cljs.core.zipmap.call(null,param_idens,cljs.core.range.call(null))));
var self_ref_idx = (cljs.core.truth_(fn_name)?sci.impl.analyzer.update_parents.call(null,ctx__$4,new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4),fn_id):null);
var body__$1 = sci.impl.analyzer.return_do.call(null,sci.impl.analyzer.with_recur_target.call(null,ctx__$4,true),fn_expr,body);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.call(null,new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__53106 = sci.impl.analyzer.__GT_FnBody.call(null,params,body__$1,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.call(null,G__53106,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.call(null,iden__GT_invoke_idx__$1,cljs.core.last.call(null,param_idens)));
} else {
return G__53106;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count.call(null,m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.call(null,sci.impl.analyzer.analyze.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true),m),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__53107,macro_QMARK_){
var vec__53108 = p__53107;
var seq__53109 = cljs.core.seq.call(null,vec__53108);
var first__53110 = cljs.core.first.call(null,seq__53109);
var seq__53109__$1 = cljs.core.next.call(null,seq__53109);
var _fn = first__53110;
var first__53110__$1 = cljs.core.first.call(null,seq__53109__$1);
var seq__53109__$2 = cljs.core.next.call(null,seq__53109__$1);
var name_QMARK_ = first__53110__$1;
var body = seq__53109__$2;
var fn_expr = vec__53108;
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons.call(null,name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var fn_id = cljs.core.gensym.call(null);
var parents = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY).call(null,new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$1),fn_id);
var ctx__$2 = cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891),parents);
var ctx__$3 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),fn_id):ctx__$2);
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$3);
var bound_idens = cljs.core.set.call(null,cljs.core.vals.call(null,bindings));
var ctx__$4 = cljs.core.assoc.call(null,ctx__$3,new cljs.core.Keyword(null,"outer-idens","outer-idens",1197381241),bound_idens);
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var analyzed_bodies = cljs.core.reduce.call(null,(function (p__53111,body__$2){
var map__53112 = p__53111;
var map__53112__$1 = cljs.core.__destructure_map.call(null,map__53112);
var acc = map__53112__$1;
var max_fixed = cljs.core.get.call(null,map__53112__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.call(null,map__53112__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var orig_body = body__$2;
var arglist = cljs.core.first.call(null,body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body.call(null,ctx__$4,body__$2,macro_QMARK_,fn_name,fn_id);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(body__$3);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(body__$3);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__20748__auto__ = var_arg_name;
if(cljs.core.truth_(and__20748__auto__)){
return min_varargs;
} else {
return and__20748__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location.call(null,"Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.not.call(null,var_arg_name);
if(and__20748__auto__){
var and__20748__auto____$1 = min_varargs;
if(cljs.core.truth_(and__20748__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location.call(null,"Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__21111__auto__ = fixed_arity;
var y__21112__auto__ = max_fixed;
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})()),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,cljs.core.assoc.call(null,body__$3,new cljs.core.Keyword(null,"orig","orig",-1678309870),orig_body)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var cb_idens_by_arity = cljs.core.get_in.call(null,cljs.core.deref.call(null,closure_bindings),parents);
var cb_idens = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.vals.call(null,cb_idens_by_arity)));
var self_ref_QMARK_ = (cljs.core.truth_(fn_name)?cljs.core.contains_QMARK_.call(null,cb_idens,fn_id):null);
var closed_over_idens = cljs.core.filter.call(null,bound_idens,cljs.core.keys.call(null,cb_idens));
var iden__GT_invoke_idx = cljs.core.get_in.call(null,cljs.core.deref.call(null,closure_bindings),cljs.core.conj.call(null,cljs.core.pop.call(null,parents),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var closed_over_iden__GT_binding_idx = (cljs.core.truth_(iden__GT_invoke_idx)?cljs.core.zipmap.call(null,closed_over_idens,cljs.core.mapv.call(null,iden__GT_invoke_idx,closed_over_idens)):null);
var closed_over_cnt = cljs.core.count.call(null,closed_over_idens);
var iden__GT_enclosed_idx = cljs.core.zipmap.call(null,closed_over_idens,cljs.core.range.call(null,closed_over_cnt));
var iden__GT_enclosed_idx__$1 = (cljs.core.truth_(fn_name)?cljs.core.assoc.call(null,iden__GT_enclosed_idx,fn_id,closed_over_cnt):iden__GT_enclosed_idx);
var enclosed_array_fn = (((function (){var or__20754__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.seq.call(null,closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__53113 = closed_over_cnt;
if(cljs.core.truth_(fn_name)){
return (G__53113 + (1));
} else {
return G__53113;
}
})();
var binding__GT_enclosed = cljs.core.into_array.call(null,cljs.core.keep.call(null,(function (iden){
var temp__5720__auto__ = cljs.core.get.call(null,iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5720__auto__)){
var binding_idx = temp__5720__auto__;
var enclosed_idx = cljs.core.get.call(null,iden__GT_enclosed_idx__$1,iden);
var G__53114 = cljs.core.object_array.call(null,(2));
(G__53114[(0)] = binding_idx);

(G__53114[(1)] = enclosed_idx);

return G__53114;
} else {
return null;
}
}),closed_over_idens));
return (function (bindings__$1){
var a__21834__auto__ = binding__GT_enclosed;
var l__21835__auto__ = a__21834__auto__.length;
var idx = (0);
var ret = cljs.core.object_array.call(null,enclosed_array_cnt);
while(true){
if((idx < l__21835__auto__)){
var G__53116 = (idx + (1));
var G__53117 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__53116;
ret = G__53117;
continue;
} else {
return ret;
}
break;
}
});
})():cljs.core.constantly.call(null,null));
var bodies__$1 = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var bodies__$2 = cljs.core.mapv.call(null,(function (body__$2){
var iden__GT_invocation_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(body__$2);
var invocation_self_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(body__$2);
var enclosed__GT_invocation = cljs.core.into_array.call(null,cljs.core.keep.call(null,(function (iden){
var temp__5720__auto__ = iden__GT_invocation_idx.call(null,iden);
if(cljs.core.truth_(temp__5720__auto__)){
var invocation_idx = temp__5720__auto__;
var G__53115 = cljs.core.object_array.call(null,(2));
(G__53115[(0)] = iden__GT_enclosed_idx__$1.call(null,iden));

(G__53115[(1)] = invocation_idx);

return G__53115;
} else {
return null;
}
}),closed_over_idens));
var invoc_size = cljs.core.count.call(null,iden__GT_invocation_idx);
var copy_enclosed__GT_invocation = (((enclosed__GT_invocation.length > (0)))?(function (enclosed_array,invoc_array){
var a__21834__auto__ = enclosed__GT_invocation;
var l__21835__auto__ = a__21834__auto__.length;
var idx = (0);
var ret = invoc_array;
while(true){
if((idx < l__21835__auto__)){
var G__53118 = (idx + (1));
var G__53119 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__53118;
ret = G__53119;
continue;
} else {
return ret;
}
break;
}
}):null);
return cljs.core.assoc.call(null,body__$2,new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058),invoc_size,new cljs.core.Keyword(null,"invocation-self-idx","invocation-self-idx",-1258983407),invocation_self_idx,new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729),copy_enclosed__GT_invocation);
}),bodies__$1);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.dissoc.call(null,cljs.core.meta.call(null,fn_expr),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095));
var ana_fn_meta = ((cljs.core.seq.call(null,fn_meta))?sci.impl.analyzer.analyze.call(null,ctx__$4,fn_meta):null);
var struct = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),bodies__$2,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273),self_ref_QMARK_,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),ana_fn_meta,new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394),enclosed_array_fn], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569).cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661).cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(struct);
var single_arity = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fn_bodies)))?cljs.core.first.call(null,fn_bodies):null);
var bindings_fn = new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394).cljs$core$IFn$_invoke$arity$1(struct);
var self_ref_QMARK_ = new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273).cljs$core$IFn$_invoke$arity$1(struct);
if(cljs.core.truth_(fn_meta)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
var fn_meta__$1 = sci.impl.types.eval.call(null,fn_meta,ctx,bindings);
var f = sci.impl.fns.eval_fn.call(null,ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
return cljs.core.vary_meta.call(null,f,cljs.core.merge,fn_meta__$1);
}),null);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return sci.impl.fns.eval_fn.call(null,ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
}),null);
}
});
sci.impl.analyzer.analyze_fn = (function sci$impl$analyzer$analyze_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.analyze_fn_STAR_.call(null,ctx,fn_expr,macro_QMARK_);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(struct);
return sci.impl.analyzer.fn_ctx_fn.call(null,ctx,struct,fn_meta);
});
/**
 * :syms = closed over values
 */
sci.impl.analyzer.update_parents = (function sci$impl$analyzer$update_parents(ctx,closure_bindings,ob){
var parents = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx);
var new_cb = cljs.core._vreset_BANG_.call(null,closure_bindings,(function (cb){
return cljs.core.update_in.call(null,cb,cljs.core.conj.call(null,parents,new cljs.core.Keyword(null,"syms","syms",-1575891762)),(function (iden__GT_invoke_idx){
if(cljs.core.contains_QMARK_.call(null,iden__GT_invoke_idx,ob)){
return iden__GT_invoke_idx;
} else {
return cljs.core.assoc.call(null,iden__GT_invoke_idx,ob,cljs.core.count.call(null,iden__GT_invoke_idx));
}
}));
}).call(null,cljs.core._deref.call(null,closure_bindings)));
var closure_idx = cljs.core.get_in.call(null,new_cb,cljs.core.conj.call(null,parents,new cljs.core.Keyword(null,"syms","syms",-1575891762),ob));
return closure_idx;
});
sci.impl.analyzer.analyze_let_STAR_ = (function sci$impl$analyzer$analyze_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var rt = sci.impl.analyzer.recur_target.call(null,ctx);
var ctx__$1 = sci.impl.analyzer.without_recur_target.call(null,ctx);
var vec__53120 = cljs.core.reduce.call(null,(function (p__53123,p__53124){
var vec__53125 = p__53123;
var ctx__$2 = cljs.core.nth.call(null,vec__53125,(0),null);
var new_let_bindings = cljs.core.nth.call(null,vec__53125,(1),null);
var idens = cljs.core.nth.call(null,vec__53125,(2),null);
var vec__53128 = p__53124;
var binding_name = cljs.core.nth.call(null,vec__53128,(0),null);
var binding_value = cljs.core.nth.call(null,vec__53128,(1),null);
var m = cljs.core.meta.call(null,binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.call(null,binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = sci.impl.analyzer.analyze.call(null,ctx__$2,binding_value);
var new_iden = cljs.core.gensym.call(null);
var cb = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idx = sci.impl.analyzer.update_parents.call(null,ctx__$2,cb,new_iden);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var iden__GT_invoke_idx__$1 = cljs.core.assoc.call(null,iden__GT_invoke_idx,new_iden,idx);
var ctx__$3 = cljs.core.assoc.call(null,ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,ctx__$3,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name__$1,new_iden),cljs.core.conj.call(null,new_let_bindings,binding_name__$1,v),cljs.core.conj.call(null,idens,new_iden)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.call(null,(2),destructured_let_bindings));
var ctx__$2 = cljs.core.nth.call(null,vec__53120,(0),null);
var new_let_bindings = cljs.core.nth.call(null,vec__53120,(1),null);
var idens = cljs.core.nth.call(null,vec__53120,(2),null);
var body = sci.impl.analyzer.return_do.call(null,sci.impl.analyzer.with_recur_target.call(null,ctx__$2,rt),expr,exprs);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idxs = cljs.core.mapv.call(null,iden__GT_invoke_idx,idens);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$3,bindings){
return sci.impl.evaluator.eval_let.call(null,ctx__$3,bindings,new_let_bindings,body,idxs);
}),null);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__53131){
var vec__53132 = p__53131;
var seq__53133 = cljs.core.seq.call(null,vec__53132);
var first__53134 = cljs.core.first.call(null,seq__53133);
var seq__53133__$1 = cljs.core.next.call(null,seq__53133);
var _let = first__53134;
var first__53134__$1 = cljs.core.first.call(null,seq__53133__$1);
var seq__53133__$2 = cljs.core.next.call(null,seq__53133__$1);
var let_bindings = first__53134__$1;
var exprs = seq__53133__$2;
var expr = vec__53132;
var let_bindings__$1 = sci.impl.destructure.destructure.call(null,let_bindings);
return sci.impl.analyzer.analyze_let_STAR_.call(null,ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.init_var_BANG_ = (function sci$impl$analyzer$init_var_BANG_(ctx,name,expr){
var cnn_53136 = sci.impl.vars.current_ns_name.call(null);
var env_53137 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_53138 = cljs.core.get_in.call(null,cljs.core.deref.call(null,env_53137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_53136], null));
var refers_53139 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_53138);
var the_current_ns_53140__$1 = (function (){var temp__5718__auto__ = (function (){var and__20748__auto__ = refers_53139;
if(cljs.core.truth_(and__20748__auto__)){
return refers_53139.get(name);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var x = temp__5718__auto__;
return sci.impl.analyzer.throw_error_with_location.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_53136)].join(''),expr);
} else {
if(cljs.core.not.call(null,cljs.core.get.call(null,the_current_ns_53138,name))){
return cljs.core.assoc.call(null,the_current_ns_53138,name,(function (){var G__53135 = sci.impl.vars.__GT_SciVar.call(null,null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_53136),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file)),false);
sci.impl.vars.unbind.call(null,G__53135);

return G__53135;
})());
} else {
return the_current_ns_53138;
}
}
})();
cljs.core.swap_BANG_.call(null,env_53137,(function (env__$1){
return cljs.core.update.call(null,env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_53136,the_current_ns_53140__$1);
}));

return null;
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target.call(null,ctx);
var vec__53141 = expr;
var _def = cljs.core.nth.call(null,vec__53141,(0),null);
var var_name = cljs.core.nth.call(null,vec__53141,(1),null);
var _QMARK_docstring = cljs.core.nth.call(null,vec__53141,(2),null);
var _QMARK_init = cljs.core.nth.call(null,vec__53141,(3),null);
sci.impl.analyzer.init_var_BANG_.call(null,ctx__$1,var_name,expr);

if(cljs.core.simple_symbol_QMARK_.call(null,var_name)){
} else {
sci.impl.analyzer.throw_error_with_location.call(null,"Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count.call(null,expr);
var docstring = ((((cljs.core._EQ_.call(null,(4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.call(null,(2),arg_count))?sci.impl.utils.var_unbound:sci.impl.analyzer.analyze.call(null,ctx__$1,init));
var m = cljs.core.meta.call(null,var_name);
var m_needs_eval_QMARK_ = m;
var m__$1 = cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns));
var m__$2 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$1);
var m__$3 = (cljs.core.truth_(m_needs_eval_QMARK_)?sci.impl.analyzer.analyze.call(null,ctx__$1,m__$2):sci.impl.types.__GT_constant.call(null,m__$2));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_def.call(null,ctx__$2,bindings,var_name,init__$1,m__$3);
}),null);
});
sci.impl.analyzer.analyze_defn = (function sci$impl$analyzer$analyze_defn(ctx,p__53144){
var vec__53145 = p__53144;
var seq__53146 = cljs.core.seq.call(null,vec__53145);
var first__53147 = cljs.core.first.call(null,seq__53146);
var seq__53146__$1 = cljs.core.next.call(null,seq__53146);
var op = first__53147;
var first__53147__$1 = cljs.core.first.call(null,seq__53146__$1);
var seq__53146__$2 = cljs.core.next.call(null,seq__53146__$1);
var fn_name = first__53147__$1;
var body = seq__53146__$2;
var expr = vec__53145;
if(cljs.core.simple_symbol_QMARK_.call(null,fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location.call(null,"Var name should be simple symbol.",expr);
}

sci.impl.analyzer.init_var_BANG_.call(null,ctx,fn_name,expr);

var macro_QMARK_ = cljs.core._EQ_.call(null,"defmacro",cljs.core.name.call(null,op));
var vec__53148 = cljs.core.split_with.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.call(null,vec__53148,(0),null);
var body__$1 = cljs.core.nth.call(null,vec__53148,(1),null);
var _ = ((cljs.core.empty_QMARK_.call(null,body__$1))?sci.impl.analyzer.throw_error_with_location.call(null,"Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5720__auto__ = cljs.core.first.call(null,pre_body);
if(cljs.core.truth_(temp__5720__auto__)){
var ds = temp__5720__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5720__auto__ = cljs.core.last.call(null,pre_body);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
if(cljs.core.map_QMARK_.call(null,m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__53151 = ((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,body__$1)))?(function (){var lb = cljs.core.last.call(null,body__$1);
if(cljs.core.map_QMARK_.call(null,lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast.call(null,body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.call(null,vec__53151,(0),null);
var body__$2 = cljs.core.nth.call(null,vec__53151,(1),null);
var meta_map__$1 = cljs.core.merge.call(null,cljs.core.meta.call(null,fn_name),cljs.core.meta.call(null,expr),meta_map);
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.call(null,meta_map__$1,meta_map2):meta_map__$1);
var fn_body = cljs.core.with_meta.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2),cljs.core.meta.call(null,expr));
var f = sci.impl.analyzer.analyze_fn_STAR_.call(null,ctx,fn_body,macro_QMARK_);
var arglists = (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.seq.call(null,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f)),null,(1),null)),(2),null));
var meta_map__$3 = cljs.core.assoc.call(null,meta_map__$2,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists);
var meta_map__$4 = (function (){var G__53154 = meta_map__$3;
var G__53154__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,G__53154,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__53154);
if(macro_QMARK_){
return cljs.core.assoc.call(null,G__53154__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__53154__$1;
}
})();
var f__$1 = cljs.core.assoc.call(null,f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","defn","sci.impl/defn",1087257818),true);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn.call(null,ctx,f__$1,fn_meta);
var f__$2 = ctxfn;
var meta_map__$5 = sci.impl.analyzer.analyze.call(null,ctx,meta_map__$4);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_def.call(null,ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),null);
});
sci.impl.analyzer.analyze_loop = (function sci$impl$analyzer$analyze_loop(ctx,expr){
var bv = cljs.core.second.call(null,expr);
var arg_names = cljs.core.take_nth.call(null,(2),bv);
var init_vals = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,bv));
var vec__53155 = ((cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.call(null,cljs.core.count.call(null,arg_names),cljs.core.gensym);
var bv1 = cljs.core.map.call(null,cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.call(null,cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.call(null,bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.call(null,vec__53155,(0),null);
var syms = cljs.core.nth.call(null,vec__53155,(1),null);
var body = cljs.core.nnext.call(null,expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,arg_names),null,(1),null)),body))),syms),null,(1),null)),(2),null)),(3),null));
return sci.impl.analyzer.analyze.call(null,ctx,expansion);
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest.call(null,expr);
var ctx__$1 = sci.impl.analyzer.with_recur_target.call(null,ctx,true);
var ana = sci.impl.analyzer.return_do.call(null,ctx__$1,expr,body);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.types.eval.call(null,ana,ctx__$2,bindings);
}),null,null));
}),null);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest.call(null,expr);
var children = sci.impl.analyzer.analyze_children.call(null,ctx,exprs);
var stack = cljs.core.assoc.call(null,cljs.core.meta.call(null,expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true);
var G__53158 = cljs.core.count.call(null,children);
switch (G__53158) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location.call(null,"Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.call(null,children,(0));
var then = cljs.core.nth.call(null,children,(1));
if(cljs.core.not.call(null,condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_.call(null,condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval.call(null,condition,ctx__$1,bindings))){
return sci.impl.types.eval.call(null,then,ctx__$1,bindings);
} else {
return null;
}
}),stack);

}
}

break;
case (3):
var condition = cljs.core.nth.call(null,children,(0));
var then = cljs.core.nth.call(null,children,(1));
var else$ = cljs.core.nth.call(null,children,(2));
if(cljs.core.not.call(null,condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_.call(null,condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval.call(null,condition,ctx__$1,bindings))){
return sci.impl.types.eval.call(null,then,ctx__$1,bindings);
} else {
return sci.impl.types.eval.call(null,else$,ctx__$1,bindings);
}
}),stack);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location.call(null,"Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var ctx_wo_rt = sci.impl.analyzer.without_recur_target.call(null,ctx);
var case_val = sci.impl.analyzer.analyze.call(null,ctx_wo_rt,cljs.core.second.call(null,expr));
var clauses = cljs.core.nnext.call(null,expr);
var match_clauses = cljs.core.take_nth.call(null,(2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,clauses)));
var vec__53160 = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.impl.analyzer.analyze.call(null,ctx,cljs.core.last.call(null,clauses))], null):null);
var default_QMARK_ = cljs.core.nth.call(null,vec__53160,(0),null);
var case_default = cljs.core.nth.call(null,vec__53160,(1),null);
var cases = cljs.core.interleave.call(null,match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_.call(null,m,k)))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location.call(null,["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq.call(null,cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__53166 = cases__$1;
var seq__53167 = cljs.core.seq.call(null,vec__53166);
var first__53168 = cljs.core.first.call(null,seq__53167);
var seq__53167__$1 = cljs.core.next.call(null,seq__53167);
var k = first__53168;
var first__53168__$1 = cljs.core.first.call(null,seq__53167__$1);
var seq__53167__$2 = cljs.core.next.call(null,seq__53167__$1);
var v = first__53168__$1;
var cases__$2 = seq__53167__$2;
if(cljs.core.seq_QMARK_.call(null,k)){
var G__53169 = cases__$2;
var G__53170 = cljs.core.reduce.call(null,((function (cases__$1,ret_map,vec__53166,seq__53167,first__53168,seq__53167__$1,k,first__53168__$1,seq__53167__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__53160,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new.call(null,acc,k__$1,v);
});})(cases__$1,ret_map,vec__53166,seq__53167,first__53168,seq__53167__$1,k,first__53168__$1,seq__53167__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__53160,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__53169;
ret_map = G__53170;
continue;
} else {
var G__53171 = cases__$2;
var G__53172 = assoc_new.call(null,ret_map,k,v);
cases__$1 = G__53171;
ret_map = G__53172;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.call(null,ctx__$1,bindings,case_map,case_val,case_default);
}),null):sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.call(null,ctx__$1,bindings,case_map,case_val);
}),null));
return f;
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target.call(null,ctx);
var body = cljs.core.next.call(null,expr);
var vec__53173 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first.call(null,exprs);
var exprs__$1 = cljs.core.next.call(null,exprs);
if(((cljs.core.seq_QMARK_.call(null,expr__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first.call(null,expr__$1))))){
var G__53180 = exprs__$1;
var G__53181 = body_exprs;
var G__53182 = cljs.core.conj.call(null,catch_exprs,expr__$1);
var G__53183 = finally_expr;
exprs = G__53180;
body_exprs = G__53181;
catch_exprs = G__53182;
finally_expr = G__53183;
continue;
} else {
if(((cljs.core.not.call(null,exprs__$1)) && (((cljs.core.seq_QMARK_.call(null,expr__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first.call(null,expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__53184 = exprs__$1;
var G__53185 = cljs.core.conj.call(null,body_exprs,expr__$1);
var G__53186 = catch_exprs;
var G__53187 = finally_expr;
exprs = G__53184;
body_exprs = G__53185;
catch_exprs = G__53186;
finally_expr = G__53187;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.call(null,vec__53173,(0),null);
var catches = cljs.core.nth.call(null,vec__53173,(1),null);
var finally$ = cljs.core.nth.call(null,vec__53173,(2),null);
var body__$1 = sci.impl.analyzer.analyze.call(null,ctx__$1,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs));
var catches__$1 = cljs.core.mapv.call(null,(function (c){
var vec__53176 = c;
var seq__53177 = cljs.core.seq.call(null,vec__53176);
var first__53178 = cljs.core.first.call(null,seq__53177);
var seq__53177__$1 = cljs.core.next.call(null,seq__53177);
var _ = first__53178;
var first__53178__$1 = cljs.core.first.call(null,seq__53177__$1);
var seq__53177__$2 = cljs.core.next.call(null,seq__53177__$1);
var ex = first__53178__$1;
var first__53178__$2 = cljs.core.first.call(null,seq__53177__$2);
var seq__53177__$3 = cljs.core.next.call(null,seq__53177__$2);
var binding = first__53178__$2;
var body__$2 = seq__53177__$3;
var temp__5718__auto__ = (function (){var G__53179 = ex;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__53179)){
return Error;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__53179)){
return Object;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__53179)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return sci.impl.analyzer.analyze.call(null,ctx__$1,ex);

}
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var clazz = temp__5718__auto__;
var ex_iden = cljs.core.gensym.call(null);
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ex_idx = sci.impl.analyzer.update_parents.call(null,ctx__$1,closure_bindings,ex_iden);
var ctx__$2 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),ex_iden),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),ex_iden], null),ex_idx);
var analyzed_body = sci.impl.analyzer.analyze.call(null,ctx__$2,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805),ex_idx,new cljs.core.Keyword(null,"body","body",-2049205669),analyzed_body], null);
} else {
return sci.impl.analyzer.throw_error_with_location.call(null,["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?sci.impl.analyzer.analyze.call(null,ctx__$1,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest.call(null,finally$))):null);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_try.call(null,ctx__$2,bindings,body__$1,catches__$1,finally$__$1);
}),null);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__53188){
var vec__53189 = p__53188;
var _throw = cljs.core.nth.call(null,vec__53189,(0),null);
var ex = cljs.core.nth.call(null,vec__53189,(1),null);
var expr = vec__53189;
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,expr))){
} else {
sci.impl.analyzer.throw_error_with_location.call(null,"Too many arguments to throw",expr);
}

var ctx__$1 = sci.impl.analyzer.without_recur_target.call(null,ctx);
var ana = sci.impl.analyzer.analyze.call(null,ctx__$1,ex);
var stack = cljs.core.assoc.call(null,cljs.core.meta.call(null,expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx__$2,bindings,sci.impl.types.eval.call(null,ana,ctx__$2,bindings),this$);
}),stack);
});
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__53192){
var vec__53193 = p__53192;
var seq__53194 = cljs.core.seq.call(null,vec__53193);
var first__53195 = cljs.core.first.call(null,seq__53194);
var seq__53194__$1 = cljs.core.next.call(null,seq__53194);
var _dot = first__53195;
var first__53195__$1 = cljs.core.first.call(null,seq__53194__$1);
var seq__53194__$2 = cljs.core.next.call(null,seq__53194__$1);
var instance_expr = first__53195__$1;
var first__53195__$2 = cljs.core.first.call(null,seq__53194__$2);
var seq__53194__$3 = cljs.core.next.call(null,seq__53194__$2);
var method_expr = first__53195__$2;
var args = seq__53194__$3;
var expr = vec__53193;
var ctx__$1 = sci.impl.analyzer.without_recur_target.call(null,ctx);
var vec__53196 = ((cljs.core.seq_QMARK_.call(null,method_expr))?method_expr:cljs.core.cons.call(null,method_expr,args));
var seq__53197 = cljs.core.seq.call(null,vec__53196);
var first__53198 = cljs.core.first.call(null,seq__53197);
var seq__53197__$1 = cljs.core.next.call(null,seq__53197);
var method_expr__$1 = first__53198;
var args__$1 = seq__53197__$1;
var instance_expr__$1 = sci.impl.analyzer.analyze.call(null,ctx__$1,instance_expr);
var method_name = cljs.core.name.call(null,method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children.call(null,ctx__$1,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_.call(null,method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.call(null,method_name,(1)):method_name);
var stack = cljs.core.assoc.call(null,cljs.core.meta.call(null,expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file));
var allowed_QMARK_ = (method_expr__$1 === sci.impl.utils.allowed_append);
return cljs.core.with_meta.call(null,sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_instance_method_invocation.call(null,ctx__$2,bindings,instance_expr__$1,meth_name,field_access,args__$2,allowed_QMARK_);
}),stack),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$1,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count.call(null,expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot.call(null,ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__53199){
var vec__53200 = p__53199;
var seq__53201 = cljs.core.seq.call(null,vec__53200);
var first__53202 = cljs.core.first.call(null,seq__53201);
var seq__53201__$1 = cljs.core.next.call(null,seq__53201);
var method_name = first__53202;
var first__53202__$1 = cljs.core.first.call(null,seq__53201__$1);
var seq__53201__$2 = cljs.core.next.call(null,seq__53201__$1);
var obj = first__53202__$1;
var args = seq__53201__$2;
var expr = vec__53200;
if((cljs.core.count.call(null,expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot.call(null,ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons.call(null,cljs.core.symbol.call(null,cljs.core.subs.call(null,cljs.core.name.call(null,method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__53208){
var vec__53209 = p__53208;
var seq__53210 = cljs.core.seq.call(null,vec__53209);
var first__53211 = cljs.core.first.call(null,seq__53210);
var seq__53210__$1 = cljs.core.next.call(null,seq__53210);
var _new = first__53211;
var first__53211__$1 = cljs.core.first.call(null,seq__53210__$1);
var seq__53210__$2 = cljs.core.next.call(null,seq__53210__$1);
var class_sym = first__53211__$1;
var args = seq__53210__$2;
var expr = vec__53209;
var ctx__$1 = sci.impl.analyzer.without_recur_target.call(null,ctx);
if((class_sym instanceof cljs.core.Symbol)){
var temp__5718__auto__ = (function (){var or__20754__auto__ = (function (){var temp__5720__auto__ = (function (){var temp__5720__auto__ = sci.impl.interop.resolve_class_opts.call(null,ctx__$1,class_sym);
if(cljs.core.truth_(temp__5720__auto__)){
var opts = temp__5720__auto__;
var or__20754__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var clazz = temp__5720__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return sci.impl.resolve.resolve_symbol.call(null,ctx__$1,class_sym,false);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var class$ = temp__5718__auto__;
var args__$1 = sci.impl.analyzer.analyze_children.call(null,ctx__$1,args);
var var_QMARK_ = sci.impl.vars.var_QMARK_.call(null,class$);
var maybe_var = ((var_QMARK_)?class$:null);
var maybe_record = ((var_QMARK_)?cljs.core.deref.call(null,maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,maybe_record)):null);
if(cljs.core.truth_(maybe_record_constructor)){
return sci.impl.analyzer.return_call.call(null,ctx__$1,expr,maybe_record_constructor,args__$1,cljs.core.assoc.call(null,cljs.core.meta.call(null,expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file)),null);
} else {
if(var_QMARK_){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor.call(null,cljs.core.deref.call(null,maybe_var),cljs.core.mapv.call(null,(function (p1__53204_SHARP_){
return sci.impl.types.eval.call(null,p1__53204_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
if((class$ instanceof sci.impl.types.NodeR)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor.call(null,sci.impl.types.eval.call(null,class$,ctx__$2,bindings),cljs.core.mapv.call(null,(function (p1__53205_SHARP_){
return sci.impl.types.eval.call(null,p1__53205_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor.call(null,class$,cljs.core.mapv.call(null,(function (p1__53206_SHARP_){
return sci.impl.types.eval.call(null,p1__53206_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);

}
}
}
} else {
var temp__5718__auto____$1 = sci.impl.records.resolve_record_class.call(null,ctx__$1,class_sym);
if(cljs.core.truth_(temp__5718__auto____$1)){
var record = temp__5718__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children.call(null,ctx__$1,args);
return sci.impl.analyzer.return_call.call(null,ctx__$1,expr,new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,record)),args__$1,cljs.core.assoc.call(null,cljs.core.meta.call(null,expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file)),null);
} else {
return sci.impl.analyzer.throw_error_with_location.call(null,["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
} else {
var class$ = sci.impl.analyzer.analyze.call(null,ctx__$1,class_sym);
var args__$1 = sci.impl.analyzer.analyze_children.call(null,ctx__$1,args);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor.call(null,sci.impl.types.eval.call(null,class$,ctx__$2,bindings),cljs.core.mapv.call(null,(function (p1__53207_SHARP_){
return sci.impl.types.eval.call(null,p1__53207_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__53212){
var vec__53213 = p__53212;
var seq__53214 = cljs.core.seq.call(null,vec__53213);
var first__53215 = cljs.core.first.call(null,seq__53214);
var seq__53214__$1 = cljs.core.next.call(null,seq__53214);
var constructor_sym = first__53215;
var args = seq__53214__$1;
var constructor_name = cljs.core.name.call(null,constructor_sym);
var class_sym = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,cljs.core.subs.call(null,constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta.call(null,constructor_sym));
return sci.impl.analyzer.analyze_new.call(null,ctx,cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta.call(null,constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
var stack = cljs.core.assoc.call(null,cljs.core.meta.call(null,expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return cljs.core.apply.call(null,f,ctx,analyzed_args);
}catch (e53216){if((e53216 instanceof Error)){
var e = e53216;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e,this$);
} else {
throw e53216;

}
}}),stack);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__53217){
var vec__53218 = p__53217;
var seq__53219 = cljs.core.seq.call(null,vec__53218);
var first__53220 = cljs.core.first.call(null,seq__53219);
var seq__53219__$1 = cljs.core.next.call(null,seq__53219);
var _ns = first__53220;
var first__53220__$1 = cljs.core.first.call(null,seq__53219__$1);
var seq__53219__$2 = cljs.core.next.call(null,seq__53219__$1);
var ns_name = first__53220__$1;
var exprs = seq__53219__$2;
var expr = vec__53218;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.call(null,ns_name)].join('')));
}

var vec__53221 = (function (){var fexpr = cljs.core.first.call(null,exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next.call(null,exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.call(null,vec__53221,(0),null);
var exprs__$1 = cljs.core.nth.call(null,vec__53221,(1),null);
var vec__53224 = (function (){var m = cljs.core.first.call(null,exprs__$1);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next.call(null,exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.call(null,vec__53224,(0),null);
var exprs__$2 = cljs.core.nth.call(null,vec__53224,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_.call(null,ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__53232 = cljs.core.first.call(null,exprs__$3);
var seq__53233 = cljs.core.seq.call(null,vec__53232);
var first__53234 = cljs.core.first.call(null,seq__53233);
var seq__53233__$1 = cljs.core.next.call(null,seq__53233);
var k = first__53234;
var args = seq__53233__$1;
var expr__$1 = vec__53232;
var G__53235 = k;
var G__53235__$1 = (((G__53235 instanceof cljs.core.Keyword))?G__53235.fqn:null);
switch (G__53235__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__53238 = cljs.core.next.call(null,exprs__$3);
var G__53239 = cljs.core.conj.call(null,ret,sci.impl.analyzer.return_ns_op.call(null,ctx,(function (){var G__53236 = k;
var G__53236__$1 = (((G__53236 instanceof cljs.core.Keyword))?G__53236.fqn:null);
switch (G__53236__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__53236,G__53236__$1,G__53235,G__53235__$1,vec__53232,seq__53233,first__53234,seq__53233__$1,k,args,expr__$1,vec__53221,docstring,exprs__$1,vec__53224,attr_map,exprs__$2,attr_map__$1,vec__53218,seq__53219,first__53220,seq__53219__$1,_ns,first__53220__$1,seq__53219__$2,ns_name,exprs,expr){
return (function() { 
var G__53241__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.call(null,sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__53241 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__53242__i = 0, G__53242__a = new Array(arguments.length -  1);
while (G__53242__i < G__53242__a.length) {G__53242__a[G__53242__i] = arguments[G__53242__i + 1]; ++G__53242__i;}
  args__$1 = new cljs.core.IndexedSeq(G__53242__a,0,null);
} 
return G__53241__delegate.call(this,ctx__$1,args__$1);};
G__53241.cljs$lang$maxFixedArity = 1;
G__53241.cljs$lang$applyTo = (function (arglist__53243){
var ctx__$1 = cljs.core.first(arglist__53243);
var args__$1 = cljs.core.rest(arglist__53243);
return G__53241__delegate(ctx__$1,args__$1);
});
G__53241.cljs$core$IFn$_invoke$arity$variadic = G__53241__delegate;
return G__53241;
})()
;
;})(exprs__$3,ret,G__53236,G__53236__$1,G__53235,G__53235__$1,vec__53232,seq__53233,first__53234,seq__53233__$1,k,args,expr__$1,vec__53221,docstring,exprs__$1,vec__53224,attr_map,exprs__$2,attr_map__$1,vec__53218,seq__53219,first__53220,seq__53219__$1,_ns,first__53220__$1,seq__53219__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53236__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__53238;
ret = G__53239;
continue;

break;
case "gen-class":
var G__53244 = cljs.core.next.call(null,exprs__$3);
var G__53245 = ret;
exprs__$3 = G__53244;
ret = G__53245;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53235__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do.call(null,ctx,expr,cljs.core.conj.call(null,ret,sci.impl.types.__GT_NodeR.call(null,((function (exprs__$3,ret,vec__53221,docstring,exprs__$1,vec__53224,attr_map,exprs__$2,attr_map__$1,vec__53218,seq__53219,first__53220,seq__53219__$1,_ns,first__53220__$1,seq__53219__$2,ns_name,exprs,expr){
return (function (this$,ctx__$1,bindings){
sci.impl.load.add_loaded_lib.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__53221,docstring,exprs__$1,vec__53224,attr_map,exprs__$2,attr_map__$1,vec__53218,seq__53219,first__53220,seq__53219__$1,_ns,first__53220__$1,seq__53219__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__53246){
var vec__53247 = p__53246;
var _ = cljs.core.nth.call(null,vec__53247,(0),null);
var var_name = cljs.core.nth.call(null,vec__53247,(1),null);
return sci.impl.resolve.resolve_symbol.call(null,ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__53250){
var vec__53251 = p__53250;
var _ = cljs.core.nth.call(null,vec__53251,(0),null);
var obj = cljs.core.nth.call(null,vec__53251,(1),null);
var v = cljs.core.nth.call(null,vec__53251,(2),null);
var expr = vec__53251;
if((obj instanceof cljs.core.Symbol)){
var obj__$1 = sci.impl.resolve.resolve_symbol.call(null,ctx,obj);
var ___$1 = ((sci.impl.vars.var_QMARK_.call(null,obj__$1))?null:sci.impl.analyzer.throw_error_with_location.call(null,"Invalid assignment target",expr));
var v__$1 = sci.impl.analyzer.analyze.call(null,ctx,v);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var v__$2 = sci.impl.types.eval.call(null,v__$1,ctx__$1,bindings);
return sci.impl.types.setVal.call(null,obj__$1,v__$2);
}),null);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
var obj__$1 = sci.impl.analyzer.analyze.call(null,ctx,obj);
var v__$1 = sci.impl.analyzer.analyze.call(null,ctx,v);
var info = cljs.core.meta.call(null,obj__$1);
var k = cljs.core.subs.call(null,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(info),(1));
var obj__$2 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(info);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var obj__$3 = sci.impl.types.eval.call(null,obj__$2,ctx__$1,bindings);
var v__$2 = sci.impl.types.eval.call(null,v__$1,ctx__$1,bindings);
return sci.impl.analyzer.goog$module$goog$object.set.call(null,obj__$3,k,v__$2);
}),null);
} else {
return sci.impl.analyzer.throw_error_with_location.call(null,"Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,idx,f,analyzed_children,stack){
var G__53255 = cljs.core.count.call(null,analyzed_children);
switch (G__53255) {
case (0):
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null);
}catch (e53256){if((e53256 instanceof Error)){
var e__52765__auto__ = e53256;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53256;

}
}}),stack);

break;
case (1):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings));
}catch (e53257){if((e53257 instanceof Error)){
var e__52765__auto__ = e53257;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53257;

}
}}),stack);

break;
case (2):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings));
}catch (e53258){if((e53258 instanceof Error)){
var e__52765__auto__ = e53258;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53258;

}
}}),stack);

break;
case (3):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings));
}catch (e53259){if((e53259 instanceof Error)){
var e__52765__auto__ = e53259;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53259;

}
}}),stack);

break;
case (4):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings));
}catch (e53260){if((e53260 instanceof Error)){
var e__52765__auto__ = e53260;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53260;

}
}}),stack);

break;
case (5):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings));
}catch (e53261){if((e53261 instanceof Error)){
var e__52765__auto__ = e53261;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53261;

}
}}),stack);

break;
case (6):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings));
}catch (e53262){if((e53262 instanceof Error)){
var e__52765__auto__ = e53262;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53262;

}
}}),stack);

break;
case (7):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings));
}catch (e53263){if((e53263 instanceof Error)){
var e__52765__auto__ = e53263;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53263;

}
}}),stack);

break;
case (8):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings));
}catch (e53264){if((e53264 instanceof Error)){
var e__52765__auto__ = e53264;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53264;

}
}}),stack);

break;
case (9):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings));
}catch (e53265){if((e53265 instanceof Error)){
var e__52765__auto__ = e53265;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53265;

}
}}),stack);

break;
case (10):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings));
}catch (e53266){if((e53266 instanceof Error)){
var e__52765__auto__ = e53266;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53266;

}
}}),stack);

break;
case (11):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings));
}catch (e53267){if((e53267 instanceof Error)){
var e__52765__auto__ = e53267;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53267;

}
}}),stack);

break;
case (12):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings));
}catch (e53268){if((e53268 instanceof Error)){
var e__52765__auto__ = e53268;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53268;

}
}}),stack);

break;
case (13):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings));
}catch (e53269){if((e53269 instanceof Error)){
var e__52765__auto__ = e53269;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53269;

}
}}),stack);

break;
case (14):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings));
}catch (e53270){if((e53270 instanceof Error)){
var e__52765__auto__ = e53270;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53270;

}
}}),stack);

break;
case (15):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings));
}catch (e53271){if((e53271 instanceof Error)){
var e__52765__auto__ = e53271;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53271;

}
}}),stack);

break;
case (16):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings));
}catch (e53272){if((e53272 instanceof Error)){
var e__52765__auto__ = e53272;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53272;

}
}}),stack);

break;
case (17):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings));
}catch (e53273){if((e53273 instanceof Error)){
var e__52765__auto__ = e53273;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53273;

}
}}),stack);

break;
case (18):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
var arg17 = cljs.core.nth.call(null,analyzed_children,(17));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings),sci.impl.types.eval.call(null,arg17,ctx,bindings));
}catch (e53274){if((e53274 instanceof Error)){
var e__52765__auto__ = e53274;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53274;

}
}}),stack);

break;
case (19):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
var arg17 = cljs.core.nth.call(null,analyzed_children,(17));
var arg18 = cljs.core.nth.call(null,analyzed_children,(18));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return (bindings[idx]).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings),sci.impl.types.eval.call(null,arg17,ctx,bindings),sci.impl.types.eval.call(null,arg18,ctx,bindings));
}catch (e53275){if((e53275 instanceof Error)){
var e__52765__auto__ = e53275;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52765__auto__,this$);
} else {
throw e53275;

}
}}),stack);

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call.call(null,ctx,bindings,(bindings[idx]),analyzed_children);
});

}
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
var stack = cljs.core.assoc.call(null,cljs.core.meta.call(null,expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns));
var G__53277 = cljs.core.count.call(null,analyzed_children);
switch (G__53277) {
case (0):
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx);
}),stack);

break;
case (1):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings));
}),stack);

break;
case (2):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings));
}),stack);

break;
case (3):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings));
}),stack);

break;
case (4):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings));
}),stack);

break;
case (5):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings));
}),stack);

break;
case (6):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings));
}),stack);

break;
case (7):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings));
}),stack);

break;
case (8):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings));
}),stack);

break;
case (9):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings));
}),stack);

break;
case (10):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings));
}),stack);

break;
case (11):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings));
}),stack);

break;
case (12):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings));
}),stack);

break;
case (13):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings));
}),stack);

break;
case (14):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings));
}),stack);

break;
case (15):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings));
}),stack);

break;
case (16):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings));
}),stack);

break;
case (17):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings));
}),stack);

break;
case (18):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
var arg17 = cljs.core.nth.call(null,analyzed_children,(17));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings),sci.impl.types.eval.call(null,arg17,ctx,bindings));
}),stack);

break;
case (19):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
var arg17 = cljs.core.nth.call(null,analyzed_children,(17));
var arg18 = cljs.core.nth.call(null,analyzed_children,(18));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return f.call(null,ctx,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings),sci.impl.types.eval.call(null,arg17,ctx,bindings),sci.impl.types.eval.call(null,arg18,ctx,bindings));
}),stack);

break;
default:
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call.call(null,ctx,bindings,f,cljs.core.cons.call(null,ctx,analyzed_children));
}),stack);

}
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
var G__53280 = cljs.core.count.call(null,analyzed_children);
switch (G__53280) {
case (0):
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null);
}catch (e53281){if((e53281 instanceof Error)){
var e__52888__auto__ = e53281;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53281;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null);
}catch (e53282){if((e53282 instanceof Error)){
var e__52888__auto__ = e53282;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53282;

}
}}),stack);
}

break;
case (1):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings));
}catch (e53283){if((e53283 instanceof Error)){
var e__52888__auto__ = e53283;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53283;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings));
}catch (e53284){if((e53284 instanceof Error)){
var e__52888__auto__ = e53284;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53284;

}
}}),stack);
}

break;
case (2):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings));
}catch (e53285){if((e53285 instanceof Error)){
var e__52888__auto__ = e53285;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53285;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings));
}catch (e53286){if((e53286 instanceof Error)){
var e__52888__auto__ = e53286;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53286;

}
}}),stack);
}

break;
case (3):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings));
}catch (e53287){if((e53287 instanceof Error)){
var e__52888__auto__ = e53287;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53287;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings));
}catch (e53288){if((e53288 instanceof Error)){
var e__52888__auto__ = e53288;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53288;

}
}}),stack);
}

break;
case (4):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings));
}catch (e53289){if((e53289 instanceof Error)){
var e__52888__auto__ = e53289;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53289;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings));
}catch (e53290){if((e53290 instanceof Error)){
var e__52888__auto__ = e53290;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53290;

}
}}),stack);
}

break;
case (5):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings));
}catch (e53291){if((e53291 instanceof Error)){
var e__52888__auto__ = e53291;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53291;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings));
}catch (e53292){if((e53292 instanceof Error)){
var e__52888__auto__ = e53292;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53292;

}
}}),stack);
}

break;
case (6):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings));
}catch (e53293){if((e53293 instanceof Error)){
var e__52888__auto__ = e53293;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53293;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings));
}catch (e53294){if((e53294 instanceof Error)){
var e__52888__auto__ = e53294;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53294;

}
}}),stack);
}

break;
case (7):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings));
}catch (e53295){if((e53295 instanceof Error)){
var e__52888__auto__ = e53295;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53295;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings));
}catch (e53296){if((e53296 instanceof Error)){
var e__52888__auto__ = e53296;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53296;

}
}}),stack);
}

break;
case (8):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings));
}catch (e53297){if((e53297 instanceof Error)){
var e__52888__auto__ = e53297;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53297;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings));
}catch (e53298){if((e53298 instanceof Error)){
var e__52888__auto__ = e53298;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53298;

}
}}),stack);
}

break;
case (9):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings));
}catch (e53299){if((e53299 instanceof Error)){
var e__52888__auto__ = e53299;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53299;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings));
}catch (e53300){if((e53300 instanceof Error)){
var e__52888__auto__ = e53300;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53300;

}
}}),stack);
}

break;
case (10):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings));
}catch (e53301){if((e53301 instanceof Error)){
var e__52888__auto__ = e53301;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53301;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings));
}catch (e53302){if((e53302 instanceof Error)){
var e__52888__auto__ = e53302;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53302;

}
}}),stack);
}

break;
case (11):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings));
}catch (e53303){if((e53303 instanceof Error)){
var e__52888__auto__ = e53303;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53303;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings));
}catch (e53304){if((e53304 instanceof Error)){
var e__52888__auto__ = e53304;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53304;

}
}}),stack);
}

break;
case (12):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings));
}catch (e53305){if((e53305 instanceof Error)){
var e__52888__auto__ = e53305;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53305;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings));
}catch (e53306){if((e53306 instanceof Error)){
var e__52888__auto__ = e53306;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53306;

}
}}),stack);
}

break;
case (13):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings));
}catch (e53307){if((e53307 instanceof Error)){
var e__52888__auto__ = e53307;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53307;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings));
}catch (e53308){if((e53308 instanceof Error)){
var e__52888__auto__ = e53308;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53308;

}
}}),stack);
}

break;
case (14):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings));
}catch (e53309){if((e53309 instanceof Error)){
var e__52888__auto__ = e53309;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53309;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings));
}catch (e53310){if((e53310 instanceof Error)){
var e__52888__auto__ = e53310;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53310;

}
}}),stack);
}

break;
case (15):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings));
}catch (e53311){if((e53311 instanceof Error)){
var e__52888__auto__ = e53311;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53311;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings));
}catch (e53312){if((e53312 instanceof Error)){
var e__52888__auto__ = e53312;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53312;

}
}}),stack);
}

break;
case (16):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings));
}catch (e53313){if((e53313 instanceof Error)){
var e__52888__auto__ = e53313;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53313;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings));
}catch (e53314){if((e53314 instanceof Error)){
var e__52888__auto__ = e53314;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53314;

}
}}),stack);
}

break;
case (17):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings));
}catch (e53315){if((e53315 instanceof Error)){
var e__52888__auto__ = e53315;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53315;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings));
}catch (e53316){if((e53316 instanceof Error)){
var e__52888__auto__ = e53316;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53316;

}
}}),stack);
}

break;
case (18):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
var arg17 = cljs.core.nth.call(null,analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings),sci.impl.types.eval.call(null,arg17,ctx,bindings));
}catch (e53317){if((e53317 instanceof Error)){
var e__52888__auto__ = e53317;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53317;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings),sci.impl.types.eval.call(null,arg17,ctx,bindings));
}catch (e53318){if((e53318 instanceof Error)){
var e__52888__auto__ = e53318;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53318;

}
}}),stack);
}

break;
case (19):
var arg0 = cljs.core.nth.call(null,analyzed_children,(0));
var arg1 = cljs.core.nth.call(null,analyzed_children,(1));
var arg2 = cljs.core.nth.call(null,analyzed_children,(2));
var arg3 = cljs.core.nth.call(null,analyzed_children,(3));
var arg4 = cljs.core.nth.call(null,analyzed_children,(4));
var arg5 = cljs.core.nth.call(null,analyzed_children,(5));
var arg6 = cljs.core.nth.call(null,analyzed_children,(6));
var arg7 = cljs.core.nth.call(null,analyzed_children,(7));
var arg8 = cljs.core.nth.call(null,analyzed_children,(8));
var arg9 = cljs.core.nth.call(null,analyzed_children,(9));
var arg10 = cljs.core.nth.call(null,analyzed_children,(10));
var arg11 = cljs.core.nth.call(null,analyzed_children,(11));
var arg12 = cljs.core.nth.call(null,analyzed_children,(12));
var arg13 = cljs.core.nth.call(null,analyzed_children,(13));
var arg14 = cljs.core.nth.call(null,analyzed_children,(14));
var arg15 = cljs.core.nth.call(null,analyzed_children,(15));
var arg16 = cljs.core.nth.call(null,analyzed_children,(16));
var arg17 = cljs.core.nth.call(null,analyzed_children,(17));
var arg18 = cljs.core.nth.call(null,analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return wrap.call(null,bindings,f).call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings),sci.impl.types.eval.call(null,arg17,ctx,bindings),sci.impl.types.eval.call(null,arg18,ctx,bindings));
}catch (e53319){if((e53319 instanceof Error)){
var e__52888__auto__ = e53319;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53319;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return f.call(null,sci.impl.types.eval.call(null,arg0,ctx,bindings),sci.impl.types.eval.call(null,arg1,ctx,bindings),sci.impl.types.eval.call(null,arg2,ctx,bindings),sci.impl.types.eval.call(null,arg3,ctx,bindings),sci.impl.types.eval.call(null,arg4,ctx,bindings),sci.impl.types.eval.call(null,arg5,ctx,bindings),sci.impl.types.eval.call(null,arg6,ctx,bindings),sci.impl.types.eval.call(null,arg7,ctx,bindings),sci.impl.types.eval.call(null,arg8,ctx,bindings),sci.impl.types.eval.call(null,arg9,ctx,bindings),sci.impl.types.eval.call(null,arg10,ctx,bindings),sci.impl.types.eval.call(null,arg11,ctx,bindings),sci.impl.types.eval.call(null,arg12,ctx,bindings),sci.impl.types.eval.call(null,arg13,ctx,bindings),sci.impl.types.eval.call(null,arg14,ctx,bindings),sci.impl.types.eval.call(null,arg15,ctx,bindings),sci.impl.types.eval.call(null,arg16,ctx,bindings),sci.impl.types.eval.call(null,arg17,ctx,bindings),sci.impl.types.eval.call(null,arg18,ctx,bindings));
}catch (e53320){if((e53320 instanceof Error)){
var e__52888__auto__ = e53320;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e__52888__auto__,this$);
} else {
throw e53320;

}
}}),stack);
}

break;
default:
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call.call(null,ctx,bindings,wrap.call(null,bindings,f),analyzed_children);
}),stack);
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call.call(null,ctx,bindings,f,analyzed_children);
}),stack);
}

}
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,expr))){
} else {
sci.impl.analyzer.throw_error_with_location.call(null,"Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second.call(null,expr);
return sci.impl.types.__GT_constant.call(null,snd);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = sci.impl.analyzer.analyze.call(null,ctx,cljs.core.second.call(null,expr));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var ns_sym = sci.impl.types.eval.call(null,ns_expr,ctx__$1,bindings);
sci.impl.utils.set_namespace_BANG_.call(null,ctx__$1,ns_sym,null);

return null;
}),null);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest.call(null,expr);
var stack = cljs.core.assoc.call(null,cljs.core.meta.call(null,expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx,bindings){
try{return cljs.core.apply.call(null,sci.impl.evaluator.eval_import,ctx,args);
}catch (e53322){if((e53322 instanceof Error)){
var e = e53322;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,bindings,e,this$);
} else {
throw e53322;

}
}}),stack);
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first.call(null,expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.call(null,sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__20748__auto__ = special_sym;
if(cljs.core.truth_(and__20748__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__20748__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_.call(null,ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__20754__auto__ = special_sym;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return sci.impl.resolve.resolve_symbol.call(null,ctx,f,true);
}
})();
var f_meta = cljs.core.meta.call(null,f__$1);
var eval_QMARK_ = (function (){var and__20748__auto__ = f_meta;
if(cljs.core.truth_(and__20748__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_((function (){var and__20748__auto__ = f_meta;
if(cljs.core.truth_(and__20748__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__20748__auto__;
}
})())){
var vec__53323 = f__$1;
var class$ = cljs.core.nth.call(null,vec__53323,(0),null);
var method_name = cljs.core.nth.call(null,vec__53323,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.call(null,method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__20748__auto__ = idx;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not_EQ_.call(null,(len - (1)),idx);
} else {
return and__20748__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys.call(null,class$,cljs.core.into_array.call(null,cljs.core.subs.call(null,method_name__$1,(0),idx).split("."))),cljs.core.subs.call(null,method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation.call(null,ctx__$1,bindings,cljs.core.cons.call(null,f__$2,children));
}),null);
} else {
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.not.call(null,eval_QMARK_);
if(and__20748__auto__){
var and__20748__auto____$1 = (f__$1 instanceof cljs.core.Symbol);
if(and__20748__auto____$1){
var or__20754__auto__ = special_sym;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
var G__53326 = f__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,".",".",1975675962,null),G__53326)){
return sci.impl.analyzer.expand_dot_STAR__STAR_.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),G__53326)){
return sci.impl.analyzer.return_and.call(null,ctx,expr,cljs.core.rest.call(null,expr));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"import","import",241030818,null),G__53326)){
return sci.impl.analyzer.analyze_import.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"case","case",-1510733573,null),G__53326)){
return sci.impl.analyzer.analyze_case.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__53326)){
return sci.impl.analyzer.analyze_fn.call(null,ctx,expr,false);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"if","if",1181717262,null),G__53326)){
return sci.impl.analyzer.return_if.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__53326)){
var ret = sci.impl.analyzer.analyze_defn.call(null,ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__53326)){
var ret = sci.impl.analyzer.analyze_defn.call(null,ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),G__53326)){
return sci.impl.analyzer.return_do.call(null,ctx,expr,cljs.core.rest.call(null,expr));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__53326)){
return sci.impl.analyzer.analyze_loop.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__53326)){
return sci.impl.analyzer.expand_constructor.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"def","def",597100991,null),G__53326)){
return sci.impl.analyzer.analyze_def.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__53326)){
return sci.impl.analyzer.analyze_quote.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),G__53326)){
return sci.impl.analyzer.analyze_let_STAR_.call(null,ctx,expr,cljs.core.second.call(null,expr),cljs.core.nnext.call(null,expr));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__53326)){
return sci.impl.analyzer.expand_dot_STAR_.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__53326)){
return sci.impl.analyzer.analyze_ns_form.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"let","let",358118826,null),G__53326)){
return sci.impl.analyzer.analyze_let.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),G__53326)){
return sci.impl.analyzer.analyze_fn.call(null,ctx,expr,false);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__53326)){
return sci.impl.analyzer.analyze_in_ns.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),G__53326)){
return sci.impl.analyzer.analyze_set_BANG_.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__53326)){
return sci.impl.analyzer.return_recur.call(null,ctx,expr,sci.impl.analyzer.analyze_children.call(null,sci.impl.analyzer.without_recur_target.call(null,ctx),cljs.core.rest.call(null,expr)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),G__53326)){
return sci.impl.analyzer.analyze_new.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"var","var",870848730,null),G__53326)){
return sci.impl.analyzer.analyze_var.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__53326)){
return sci.impl.analyzer.analyze_lazy_seq.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),G__53326)){
return sci.impl.analyzer.analyze_throw.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),G__53326)){
return sci.impl.analyzer.analyze_try.call(null,ctx,expr);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),G__53326)){
return sci.impl.analyzer.return_or.call(null,ctx,expr,cljs.core.rest.call(null,expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53326)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_.call(null,f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f__$1)));
var f__$2 = ((sci.impl.vars.var_QMARK_.call(null,f__$1))?cljs.core.deref.call(null,f__$1):f__$1);
var v = ((needs_ctx_QMARK_)?cljs.core.apply.call(null,f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest.call(null,expr)):cljs.core.apply.call(null,f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest.call(null,expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__20748__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core.seq_QMARK_.call(null,v)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first.call(null,v))));
} else {
return and__20748__auto__;
}
})())?sci.impl.types.__GT_EvalForm.call(null,v):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta.call(null,v,cljs.core.merge.call(null,m,cljs.core.meta.call(null,v))):v):v);
return sci.impl.analyzer.analyze.call(null,ctx,v__$1,top_level_QMARK_);
})()
));
return expanded;
} else {
var temp__5718__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5718__auto__)){
var f__$2 = temp__5718__auto__;
return sci.impl.analyzer.return_call.call(null,ctx,expr,f__$2,sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr)),cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta),null);
} else {
var temp__5718__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f__$1));
if(cljs.core.truth_(temp__5718__auto____$1)){
var op = temp__5718__auto____$1;
var G__53329 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__53329)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call.call(null,ctx,expr,f__$1,sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr)));
} else {
var children = sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr));
return sci.impl.analyzer.return_call.call(null,ctx,expr,f__$1,children,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta),null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__53329)){
return sci.impl.analyzer.return_binding_call.call(null,ctx,expr,new cljs.core.Keyword("sci.impl","idx","sci.impl/idx",700902278).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f__$1)),f__$1,sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr)),cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta));
} else {
var children = sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr));
return sci.impl.analyzer.return_call.call(null,ctx,expr,f__$1,children,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta),null);

}
}
} else {
var self_ref_QMARK_ = new cljs.core.Keyword(null,"self-ref?","self-ref?",412808630).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__20748__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return self_ref_QMARK_.call(null,f__$1);
} else {
return and__20748__auto__;
}
})())){
var children = sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr));
return sci.impl.analyzer.return_call.call(null,ctx,expr,f__$1,children,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta),(function (bindings,___$1){
return cljs.core.deref.call(null,bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr));
return sci.impl.analyzer.return_call.call(null,ctx,expr,f__$1,children,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta),((sci.impl.vars.var_QMARK_.call(null,f__$1))?(function (___$1,v){
return cljs.core.deref.call(null,v);
}):null));
}
}
}
}
}catch (e53327){if((e53327 instanceof Error)){
var e = e53327;
return sci.impl.utils.rethrow_with_location_of_node.call(null,ctx,e,(function (){var stack = cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return null;
}),stack);
})());
} else {
throw e53327;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr));
var ccount = cljs.core.count.call(null,children);
var G__53330 = ccount;
switch (G__53330) {
case (1):
var arg = cljs.core.nth.call(null,children,(0));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.types.eval.call(null,arg,ctx__$1,bindings));
}),null);

break;
case (2):
var arg0 = cljs.core.nth.call(null,children,(0));
var arg1 = cljs.core.nth.call(null,children,(1));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.types.eval.call(null,arg0,ctx__$1,bindings),sci.impl.types.eval.call(null,arg1,ctx__$1,bindings));
}),null);

break;
default:
return sci.impl.analyzer.throw_error_with_location.call(null,["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = sci.impl.analyzer.analyze.call(null,ctx,f);
var children = sci.impl.analyzer.analyze_children.call(null,ctx,cljs.core.rest.call(null,expr));
var stack = cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,sci.impl.vars.current_file));
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var f__$2 = sci.impl.types.eval.call(null,f__$1,ctx__$1,bindings);
if(cljs.core.ifn_QMARK_.call(null,f__$2)){
return sci.impl.evaluator.fn_call.call(null,ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.call(null,f__$2)," as a function."].join('')));
}
}),stack);

}
}
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings.call(null);
} else {
}
}});
sci.impl.analyzer.map_fn = (function sci$impl$analyzer$map_fn(children_count){
if((children_count <= (16))){
return cljs.core.array_map;
} else {
return cljs.core.hash_map;
}
});
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map,analyzed_children){
var mf = sci.impl.analyzer.map_fn.call(null,cljs.core.count.call(null,analyzed_children));
sci.impl.analyzer.return_call.call(null,ctx,the_map,mf,analyzed_children,null,null);

return sci.impl.analyzer.return_call.call(null,ctx,the_map,mf,analyzed_children,null,null);
});
sci.impl.analyzer.constant_node_QMARK_ = (function sci$impl$analyzer$constant_node_QMARK_(x){
return (!((x instanceof sci.impl.types.NodeR)));
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target.call(null,ctx);
var children = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,expr);
var analyzed_children = sci.impl.analyzer.analyze_children.call(null,ctx__$1,children);
var const_QMARK_ = cljs.core.every_QMARK_.call(null,sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var same_QMARK_ = ((const_QMARK_)?cljs.core._EQ_.call(null,children,analyzed_children):null);
var const_val = ((const_QMARK_)?(cljs.core.truth_(same_QMARK_)?expr:(function (){var mf = sci.impl.analyzer.map_fn.call(null,cljs.core.count.call(null,analyzed_children));
return cljs.core.apply.call(null,mf,analyzed_children);
})()):null);
var analyzed_map = ((const_QMARK_)?sci.impl.types.__GT_constant.call(null,const_val):sci.impl.analyzer.return_map.call(null,ctx__$1,expr,analyzed_children));
var analyzed_meta = (cljs.core.truth_(m)?sci.impl.analyzer.analyze.call(null,ctx__$1,m):null);
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval.call(null,analyzed_map,ctx__$2,bindings);
var md = sci.impl.types.eval.call(null,analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta.call(null,coll,md);
}),null):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,f1,f2,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target.call(null,ctx);
var analyzed_meta = (cljs.core.truth_(m)?sci.impl.analyzer.analyze.call(null,ctx__$1,m):null);
var analyzed_children = sci.impl.analyzer.analyze_children.call(null,ctx__$1,expr);
var const_QMARK_ = cljs.core.every_QMARK_.call(null,sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var set_expr_QMARK_ = cljs.core.set_QMARK_.call(null,expr);
var same_QMARK_ = ((const_QMARK_) && (cljs.core._EQ_.call(null,((set_expr_QMARK_)?(function (){var or__20754__auto__ = cljs.core.seq.call(null,expr);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})():expr),analyzed_children)));
var const_val = ((const_QMARK_)?((same_QMARK_)?((cljs.core.empty_QMARK_.call(null,expr))?((set_expr_QMARK_)?cljs.core.PersistentHashSet.EMPTY:cljs.core.PersistentVector.EMPTY):expr):f1.call(null,analyzed_children)):null);
var analyzed_coll = ((const_QMARK_)?sci.impl.types.__GT_constant.call(null,const_val):sci.impl.analyzer.return_call.call(null,ctx__$1,expr,f2,analyzed_children,null,null));
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval.call(null,analyzed_coll,ctx__$2,bindings);
var md = sci.impl.types.eval.call(null,analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta.call(null,coll,md);
}),null):analyzed_coll);
return ret;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_.call(null,v)){
var ks = cljs.core.keys.call(null,v);
var ks__$1 = cljs.core.map.call(null,cljs.core.name,ks);
var vs = cljs.core.vals.call(null,v);
var vs__$1 = sci.impl.analyzer.analyze_children.call(null,ctx,vs);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return cljs.core.apply.call(null,cljs.core.js_obj,cljs.core.interleave.call(null,ks__$1,cljs.core.map.call(null,(function (p1__53332_SHARP_){
return sci.impl.types.eval.call(null,p1__53332_SHARP_,ctx__$1,bindings);
}),vs__$1)));
}),null);
} else {
var vs = sci.impl.analyzer.analyze_children.call(null,ctx,v);
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
var arr = [];
var seq__53333_53337 = cljs.core.seq.call(null,vs);
var chunk__53334_53338 = null;
var count__53335_53339 = (0);
var i__53336_53340 = (0);
while(true){
if((i__53336_53340 < count__53335_53339)){
var x_53341 = cljs.core._nth.call(null,chunk__53334_53338,i__53336_53340);
arr.push(sci.impl.types.eval.call(null,x_53341,ctx__$1,bindings));


var G__53342 = seq__53333_53337;
var G__53343 = chunk__53334_53338;
var G__53344 = count__53335_53339;
var G__53345 = (i__53336_53340 + (1));
seq__53333_53337 = G__53342;
chunk__53334_53338 = G__53343;
count__53335_53339 = G__53344;
i__53336_53340 = G__53345;
continue;
} else {
var temp__5720__auto___53346 = cljs.core.seq.call(null,seq__53333_53337);
if(temp__5720__auto___53346){
var seq__53333_53347__$1 = temp__5720__auto___53346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53333_53347__$1)){
var c__21725__auto___53348 = cljs.core.chunk_first.call(null,seq__53333_53347__$1);
var G__53349 = cljs.core.chunk_rest.call(null,seq__53333_53347__$1);
var G__53350 = c__21725__auto___53348;
var G__53351 = cljs.core.count.call(null,c__21725__auto___53348);
var G__53352 = (0);
seq__53333_53337 = G__53349;
chunk__53334_53338 = G__53350;
count__53335_53339 = G__53351;
i__53336_53340 = G__53352;
continue;
} else {
var x_53353 = cljs.core.first.call(null,seq__53333_53347__$1);
arr.push(sci.impl.types.eval.call(null,x_53353,ctx__$1,bindings));


var G__53354 = cljs.core.next.call(null,seq__53333_53347__$1);
var G__53355 = null;
var G__53356 = (0);
var G__53357 = (0);
seq__53333_53337 = G__53354;
chunk__53334_53338 = G__53355;
count__53335_53339 = G__53356;
i__53336_53340 = G__53357;
continue;
}
} else {
}
}
break;
}

return arr;
}),null);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__53359 = arguments.length;
switch (G__53359) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.call(null,ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta.call(null,expr);
if(sci.impl.utils.constant_QMARK_.call(null,expr)){
return sci.impl.types.__GT_constant.call(null,expr);
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.call(null,ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta.call(null,v);
if(sci.impl.utils.constant_QMARK_.call(null,v)){
return sci.impl.types.__GT_constant.call(null,v);
} else {
if((sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.partial.call(null,v,ctx);
} else {
if(sci.impl.vars.var_QMARK_.call(null,v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref.call(null,v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro.call(null,v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_NodeR.call(null,(function (this$,ctx__$1,bindings){
return cljs.core._deref.call(null,v);
}),null);
}
}
} else {
return v;

}
}
}
} else {
if(cljs.core.record_QMARK_.call(null,expr)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return sci.impl.analyzer.analyze_map.call(null,ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj.call(null,ctx,expr);
} else {
if(cljs.core.vector_QMARK_.call(null,expr)){
return sci.impl.analyzer.analyze_vec_or_set.call(null,ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_.call(null,expr)){
return sci.impl.analyzer.analyze_vec_or_set.call(null,ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
if(cljs.core.seq.call(null,expr)){
return sci.impl.analyzer.analyze_call.call(null,ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);

