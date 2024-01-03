// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.callstack');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.impl.vars');
sci.impl.callstack.sci_ns_name = (function sci$impl$callstack$sci_ns_name(ns){
return sci.impl.vars.getName.call(null,ns);
});
sci.impl.callstack.select = (function sci$impl$callstack$select(m){
var new_m = cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),new cljs.core.Keyword(null,"macro","macro",-867863404)], null));
return new_m;
});
sci.impl.callstack.expr__GT_data = (function sci$impl$callstack$expr__GT_data(expr){
var m = (function (){var or__20754__auto__ = cljs.core.meta.call(null,expr);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return expr;
}
})();
var f = ((cljs.core.seqable_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):null);
var fm = (function (){var or__20754__auto__ = new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var G__53373 = f;
if((G__53373 == null)){
return null;
} else {
return cljs.core.meta.call(null,G__53373);
}
}
})();
var fm__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(fm)))?cljs.core.assoc.call(null,fm,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m)):fm);
return cljs.core.filter.call(null,cljs.core.not_empty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.callstack.select.call(null,m),sci.impl.callstack.select.call(null,fm__$1)], null));
});
sci.impl.callstack.clean_ns = (function sci$impl$callstack$clean_ns(m){
var temp__5718__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5718__auto__)){
var ns = temp__5718__auto__;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.callstack.sci_ns_name.call(null,ns));
} else {
return m;
}
});
sci.impl.callstack.stacktrace = (function sci$impl$callstack$stacktrace(callstack){
var callstack__$1 = cljs.core.deref.call(null,callstack);
var callstack__$2 = cljs.core.dedupe.call(null,callstack__$1);
var data = cljs.core.mapcat.call(null,sci.impl.callstack.expr__GT_data,callstack__$2);
var data__$1 = cljs.core.reduce.call(null,(function (p__53374,entry){
var vec__53375 = p__53374;
var acc = cljs.core.nth.call(null,vec__53375,(0),null);
var last_file = cljs.core.nth.call(null,vec__53375,(1),null);
var last_ns = cljs.core.nth.call(null,vec__53375,(2),null);
var last_name = cljs.core.nth.call(null,vec__53375,(3),null);
var new_last_name = (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return last_name;
}
})();
var new_last_file = (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(entry);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return last_file;
}
})();
var new_entry = (((last_ns === new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(entry)))?cljs.core.assoc.call(null,entry,new cljs.core.Keyword(null,"name","name",1843675177),new_last_name,new cljs.core.Keyword(null,"file","file",-1269645878),new_last_file):entry);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,acc,new_entry),new_last_file,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(entry),new_last_name], null);
}),(function (){var fd = cljs.core.first.call(null,data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(fd),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(fd),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fd)], null);
})(),data);
return cljs.core.mapv.call(null,sci.impl.callstack.clean_ns,cljs.core.first.call(null,data__$1));
});
sci.impl.callstack.right_pad = (function sci$impl$callstack$right_pad(s,n){
var n__$1 = (n - cljs.core.count.call(null,s));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),clojure.string.join.call(null,cljs.core.repeat.call(null,n__$1," "))].join('');
});
sci.impl.callstack.format_stacktrace = (function sci$impl$callstack$format_stacktrace(st){
var st__$1 = cljs.core.force.call(null,st);
var data = cljs.core.keep.call(null,(function (p__53378){
var map__53379 = p__53378;
var map__53379__$1 = cljs.core.__destructure_map.call(null,map__53379);
var nom = cljs.core.get.call(null,map__53379__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var file = cljs.core.get.call(null,map__53379__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var ns = cljs.core.get.call(null,map__53379__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var line = cljs.core.get.call(null,map__53379__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__53379__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var built_in = cljs.core.get.call(null,map__53379__$1,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599));
var local = cljs.core.get.call(null,map__53379__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
if(cljs.core.truth_((function (){var or__20754__auto__ = line;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return built_in;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(nom)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nom)].join(''):ns)),(cljs.core.truth_(local)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local)].join(''):null)].join(''),new cljs.core.Keyword(null,"loc","loc",-584284901),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__20754__auto__ = file;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
if(cljs.core.truth_(built_in)){
return "<built-in>";
} else {
return "<expr>";
}
}
})()),(cljs.core.truth_(line)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null)].join('')], null);
} else {
return null;
}
}),st__$1);
var max_name = cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"name","name",1843675177)),data));
return cljs.core.map.call(null,(function (p__53380){
var map__53381 = p__53380;
var map__53381__$1 = cljs.core.__destructure_map.call(null,map__53381);
var name = cljs.core.get.call(null,map__53381__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var loc = cljs.core.get.call(null,map__53381__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
return [sci.impl.callstack.right_pad.call(null,name,max_name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc)].join('');
}),data);
});
