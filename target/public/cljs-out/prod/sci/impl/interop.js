// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.interop');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.impl.vars');
goog.require('goog.object');
goog.scope(function(){
sci.impl.interop.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.interop.invoke_instance_field = (function sci$impl$interop$invoke_instance_field(obj,_target_class,field_name){
return (obj[field_name]);
});
sci.impl.interop.invoke_instance_method = (function sci$impl$interop$invoke_instance_method(obj,_target_class,method_name,args){
var temp__5718__auto__ = (obj[method_name]);
if(cljs.core.truth_(temp__5718__auto__)){
var method = temp__5718__auto__;
return Reflect.apply(method,obj,cljs.core.into_array.call(null,args));
} else {
throw (new Error(["Could not find instance method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)].join('')));
}
});
sci.impl.interop.get_static_field = (function sci$impl$interop$get_static_field(p__32695){
var vec__32696 = p__32695;
var class$ = cljs.core.nth.call(null,vec__32696,(0),null);
var field_name_sym = cljs.core.nth.call(null,vec__32696,(1),null);
if(clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name_sym),".")){
return cljs.core.apply.call(null,sci.impl.interop.goog$module$goog$object.getValueByKeys,class$,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name_sym),/\./));
} else {
return sci.impl.interop.goog$module$goog$object.get.call(null,class$,field_name_sym);
}
});
sci.impl.interop.invoke_js_constructor = (function sci$impl$interop$invoke_js_constructor(constructor$,args){
return Reflect.construct(constructor$,cljs.core.into_array.call(null,args));
});
sci.impl.interop.invoke_constructor = (function sci$impl$interop$invoke_constructor(constructor$,args){
return sci.impl.interop.invoke_js_constructor.call(null,constructor$,args);
});
sci.impl.interop.invoke_static_method = (function sci$impl$interop$invoke_static_method(p__32699,args){
var vec__32700 = p__32699;
var class$ = cljs.core.nth.call(null,vec__32700,(0),null);
var method_name = cljs.core.nth.call(null,vec__32700,(1),null);
var temp__5718__auto__ = sci.impl.interop.goog$module$goog$object.get.call(null,class$,method_name);
if(cljs.core.truth_(temp__5718__auto__)){
var method = temp__5718__auto__;
return Reflect.apply(method,class$,cljs.core.into_array.call(null,args));
} else {
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var field = sci.impl.interop.get_static_field.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,method_name__$1], null));
if(cljs.core.not.call(null,field)){
throw (new Error(["Could not find static method ",method_name__$1].join('')));
} else {
if(clojure.string.ends_with_QMARK_.call(null,method_name__$1,".")){
return sci.impl.interop.invoke_js_constructor.call(null,field,args);
} else {
return cljs.core.apply.call(null,field,args);

}
}
}
});
sci.impl.interop.fully_qualify_class = (function sci$impl$interop$fully_qualify_class(p__32703,sym){
var map__32704 = p__32703;
var map__32704__$1 = cljs.core.__destructure_map.call(null,map__32704);
var env = cljs.core.get.call(null,map__32704__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var class__GT_opts = cljs.core.get.call(null,map__32704__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var or__20754__auto__ = (function (){var temp__5718__auto__ = cljs.core.namespace.call(null,sym);
if(cljs.core.truth_(temp__5718__auto__)){
var ns_STAR_ = temp__5718__auto__;
if(("js" === ns_STAR_)){
if(cljs.core.contains_QMARK_.call(null,class__GT_opts,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)))){
return sym;
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.contains_QMARK_.call(null,class__GT_opts,sym)){
return sym;
} else {
return null;
}
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var env__$1 = cljs.core.deref.call(null,env);
var or__20754__auto____$1 = cljs.core.get.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(env__$1),sym);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var cnn = sci.impl.vars.current_ns_name.call(null);
return cljs.core.get_in.call(null,env__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
}
}
});
sci.impl.interop.resolve_class_opts = (function sci$impl$interop$resolve_class_opts(p__32705,sym){
var map__32706 = p__32705;
var map__32706__$1 = cljs.core.__destructure_map.call(null,map__32706);
var env = cljs.core.get.call(null,map__32706__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var class__GT_opts = cljs.core.get.call(null,map__32706__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var class_opts = (function (){var or__20754__auto__ = (function (){var temp__5718__auto__ = cljs.core.namespace.call(null,sym);
if(cljs.core.truth_(temp__5718__auto__)){
var ns_STAR_ = temp__5718__auto__;
if(("js" === ns_STAR_)){
return cljs.core.get.call(null,class__GT_opts,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
} else {
return null;
}
} else {
return cljs.core.get.call(null,class__GT_opts,sym);
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var env__$1 = cljs.core.deref.call(null,env);
var cnn = sci.impl.vars.current_ns_name.call(null);
var imports = cljs.core.get_in.call(null,env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null));
var temp__5718__auto__ = cljs.core.find.call(null,imports,sym);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__32707 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__32707,(0),null);
var v = cljs.core.nth.call(null,vec__32707,(1),null);
return cljs.core.get.call(null,class__GT_opts,v);
} else {
var temp__5720__auto__ = cljs.core.get_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return cljs.core.get.call(null,class__GT_opts,v);
} else {
return null;
}
}
}
})();
return class_opts;
});
sci.impl.interop.resolve_class = (function sci$impl$interop$resolve_class(ctx,sym){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(sci.impl.interop.resolve_class_opts.call(null,ctx,sym));
});
