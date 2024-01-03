// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.opts');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('sci.impl.namespaces');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
goog.require('sci.lang');
sci.impl.opts.init_env_BANG_ = (function sci$impl$opts$init_env_BANG_(env,bindings,aliases,namespaces,imports,load_fn){
return cljs.core.swap_BANG_.call(null,env,(function (env__$1){
var env_nss = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1);
var namespaces__$1 = cljs.core.merge_with.call(null,cljs.core.merge,(function (){var or__20754__auto__ = env_nss;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return sci.impl.namespaces.namespaces;
}
})(),(cljs.core.truth_(env_nss)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.assoc.call(null,bindings,new cljs.core.Keyword(null,"obj","obj",981763962),sci.impl.vars.user_ns)], null)),namespaces);
var aliases__$1 = cljs.core.merge.call(null,sci.impl.namespaces.aliases,aliases,cljs.core.get_in.call(null,env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"aliases","aliases",1346874714)], null)));
var namespaces__$2 = cljs.core.update.call(null,cljs.core.update.call(null,namespaces__$1,new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.assoc,new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases__$1),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),cljs.core.assoc,new cljs.core.Symbol(null,"global-hierarchy","global-hierarchy",-2014004345,null),sci.impl.vars.__GT_SciVar.call(null,cljs.core.make_hierarchy.call(null),new cljs.core.Symbol(null,"global-hierarchy","global-hierarchy",-2014004345,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null),false));
var imports__$1 = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(env__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var env_imports = temp__5718__auto__;
return cljs.core.merge.call(null,env_imports,imports);
} else {
return imports;
}
})();
if(cljs.core.not.call(null,env__$1)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$2,new cljs.core.Keyword(null,"imports","imports",-1249933394),imports__$1,new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334),load_fn], null);
} else {
return cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$2,new cljs.core.Keyword(null,"imports","imports",-1249933394),imports__$1,new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334),load_fn);
}
}));
});
sci.impl.opts.process_permissions = (function sci$impl$opts$process_permissions(var_args){
var args__22092__auto__ = [];
var len__22082__auto___40111 = arguments.length;
var i__22083__auto___40112 = (0);
while(true){
if((i__22083__auto___40112 < len__22082__auto___40111)){
args__22092__auto__.push((arguments[i__22083__auto___40112]));

var G__40113 = (i__22083__auto___40112 + (1));
i__22083__auto___40112 = G__40113;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(sci.impl.opts.process_permissions.cljs$core$IFn$_invoke$arity$variadic = (function (prev_perms,permissions){
return cljs.core.not_empty.call(null,cljs.core.into.call(null,prev_perms,cljs.core.comp.call(null,cljs.core.cat,cljs.core.map.call(null,sci.impl.utils.strip_core_ns)),permissions));
}));

(sci.impl.opts.process_permissions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.opts.process_permissions.cljs$lang$applyTo = (function (seq40109){
var G__40110 = cljs.core.first.call(null,seq40109);
var seq40109__$1 = cljs.core.next.call(null,seq40109);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40110,seq40109__$1);
}));

sci.impl.opts.default_classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"Error","Error",-1692662047,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),Error,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function() {
var G__40116 = null;
var G__40116__1 = (function (msg){
return (new Error(msg));
});
var G__40116__2 = (function (msg,filename){
return (new Error(msg,filename));
});
var G__40116__3 = (function (msg,filename,line){
return (new Error(msg,filename,line));
});
G__40116 = function(msg,filename,line){
switch(arguments.length){
case 1:
return G__40116__1.call(this,msg);
case 2:
return G__40116__2.call(this,msg,filename);
case 3:
return G__40116__3.call(this,msg,filename,line);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40116.cljs$core$IFn$_invoke$arity$1 = G__40116__1;
G__40116.cljs$core$IFn$_invoke$arity$2 = G__40116__2;
G__40116.cljs$core$IFn$_invoke$arity$3 = G__40116__3;
return G__40116;
})()
], null),new cljs.core.Symbol(null,"cljs.core.Delay","cljs.core.Delay",-1917476777,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.Delay,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (p1__40114_SHARP_){
return (new cljs.core.Delay(p1__40114_SHARP_,null));
})], null),new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),goog.string.StringBuffer,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (p1__40115_SHARP_){
return (new goog.string.StringBuffer(p1__40115_SHARP_));
})], null)], null);
sci.impl.opts.default_imports = cljs.core.PersistentArrayMap.EMPTY;
sci.impl.opts.normalize_classes = (function sci$impl$opts$normalize_classes(classes){
var class__GT_opts = cljs.core.transient$.call(null,cljs.core.select_keys.call(null,classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"allow","allow",-1857325745)], null)));
var kvs = classes;
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,kvs);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__40117 = temp__5718__auto__;
var sym = cljs.core.nth.call(null,vec__40117,(0),null);
var class_opts = cljs.core.nth.call(null,vec__40117,(1),null);
var G__40120 = cljs.core.assoc_BANG_.call(null,class__GT_opts,sym,((cljs.core.map_QMARK_.call(null,class_opts))?class_opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class_opts], null)));
var G__40121 = cljs.core.rest.call(null,kvs);
class__GT_opts = G__40120;
kvs = G__40121;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"public-class","public-class",1127293019),new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),cljs.core.persistent_BANG_.call(null,class__GT_opts)], null);
}
break;
}
});
sci.impl.opts.default_reify_fn = (function sci$impl$opts$default_reify_fn(_,___$1,___$2){
return null;
});
sci.impl.opts.__GT_ctx = (function sci$impl$opts$__GT_ctx(bindings,env,features,readers,check_permissions_QMARK_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"features","features",-1146962336),features,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers,new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317),check_permissions_QMARK_], null);
});
/**
 * Initializes options
 */
sci.impl.opts.init = (function sci$impl$opts$init(p__40122){
var map__40123 = p__40122;
var map__40123__$1 = cljs.core.__destructure_map.call(null,map__40123);
var features = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var namespaces = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var bindings = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var readers = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"readers","readers",-2118263030));
var reify_fn = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"reify-fn","reify-fn",-1360983316));
var env = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var imports = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var allow = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var load_fn = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334));
var aliases = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var deny = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
var proxy_fn = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"proxy-fn","proxy-fn",1116677438));
var classes = cljs.core.get.call(null,map__40123__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var env__$1 = (function (){var or__20754__auto__ = env;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})();
var imports__$1 = cljs.core.merge.call(null,sci.impl.opts.default_imports,imports);
var bindings__$1 = bindings;
var _ = sci.impl.opts.init_env_BANG_.call(null,env__$1,bindings__$1,aliases,namespaces,imports__$1,load_fn);
var raw_classes = cljs.core.merge.call(null,sci.impl.opts.default_classes,classes);
var classes__$1 = sci.impl.opts.normalize_classes.call(null,raw_classes);
var ctx = cljs.core.assoc.call(null,sci.impl.opts.__GT_ctx.call(null,cljs.core.PersistentArrayMap.EMPTY,env__$1,features,readers,(function (){var or__20754__auto__ = allow;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return deny;
}
})()),new cljs.core.Keyword(null,"allow","allow",-1857325745),(cljs.core.truth_(allow)?sci.impl.opts.process_permissions.call(null,cljs.core.PersistentHashSet.EMPTY,allow):null),new cljs.core.Keyword(null,"deny","deny",1589338523),(cljs.core.truth_(deny)?sci.impl.opts.process_permissions.call(null,cljs.core.PersistentHashSet.EMPTY,deny):null),new cljs.core.Keyword(null,"reify-fn","reify-fn",-1360983316),(function (){var or__20754__auto__ = reify_fn;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return sci.impl.opts.default_reify_fn;
}
})(),new cljs.core.Keyword(null,"proxy-fn","proxy-fn",1116677438),proxy_fn,new cljs.core.Keyword(null,"public-class","public-class",1127293019),new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(classes__$1),new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511),raw_classes,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(classes__$1));
return ctx;
});
sci.impl.opts.merge_opts = (function sci$impl$opts$merge_opts(ctx,opts){
var map__40124 = opts;
var map__40124__$1 = cljs.core.__destructure_map.call(null,map__40124);
var features = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var namespaces = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var bindings = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var readers = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"readers","readers",-2118263030));
var reify_fn = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"reify-fn","reify-fn",-1360983316));
var imports = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var allow = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var load_fn = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334));
var aliases = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var deny = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
var classes = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var _ = sci.impl.opts.init_env_BANG_.call(null,env,bindings,aliases,namespaces,imports,load_fn);
var raw_classes = cljs.core.merge.call(null,new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511).cljs$core$IFn$_invoke$arity$1(ctx),classes);
var classes__$1 = sci.impl.opts.normalize_classes.call(null,raw_classes);
var ctx__$1 = cljs.core.assoc.call(null,sci.impl.opts.__GT_ctx.call(null,cljs.core.PersistentArrayMap.EMPTY,env,features,readers,(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = allow;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return deny;
}
}
})()),new cljs.core.Keyword(null,"allow","allow",-1857325745),(cljs.core.truth_(allow)?sci.impl.opts.process_permissions.call(null,new cljs.core.Keyword(null,"allow","allow",-1857325745).cljs$core$IFn$_invoke$arity$1(ctx),allow):null),new cljs.core.Keyword(null,"deny","deny",1589338523),(cljs.core.truth_(deny)?sci.impl.opts.process_permissions.call(null,new cljs.core.Keyword(null,"deny","deny",1589338523).cljs$core$IFn$_invoke$arity$1(ctx),deny):null),new cljs.core.Keyword(null,"reify-fn","reify-fn",-1360983316),reify_fn,new cljs.core.Keyword(null,"public-class","public-class",1127293019),new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(classes__$1),new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511),raw_classes,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(classes__$1),new cljs.core.Keyword(null,"main-thread-id","main-thread-id",1264618959),new cljs.core.Keyword(null,"main-thread-id","main-thread-id",1264618959).cljs$core$IFn$_invoke$arity$1(ctx));
return ctx__$1;
});
