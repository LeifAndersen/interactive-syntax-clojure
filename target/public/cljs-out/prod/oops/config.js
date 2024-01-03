// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('oops.config');
goog.require('cljs.core');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config.call(null);
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_.call(null,new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

(oops.config._STAR_runtime_config_STAR_ = new_config);

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___26928 = arguments.length;
var i__22083__auto___26929 = (0);
while(true){
if((i__22083__auto___26929 < len__22082__auto___26928)){
args__22092__auto__.push((arguments[i__22083__auto___26929]));

var G__26930 = (i__22083__auto___26929 + (1));
i__22083__auto___26929 = G__26930;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_.call(null,f_or_map)){
return oops.config.update_current_runtime_config_BANG_.call(null,cljs.core.merge,f_or_map);
} else {
return oops.config.set_current_runtime_config_BANG_.call(null,cljs.core.apply.call(null,f_or_map,oops.config.get_current_runtime_config.call(null),args));
}
}));

(oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq26926){
var G__26927 = cljs.core.first.call(null,seq26926);
var seq26926__$1 = cljs.core.next.call(null,seq26926);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26927,seq26926__$1);
}));

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__22092__auto__ = [];
var len__22082__auto___26937 = arguments.length;
var i__22083__auto___26938 = (0);
while(true){
if((i__22083__auto___26938 < len__22082__auto___26937)){
args__22092__auto__.push((arguments[i__22083__auto___26938]));

var G__26939 = (i__22083__auto___26938 + (1));
i__22083__auto___26938 = G__26939;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__26933){
var vec__26934 = p__26933;
var config = cljs.core.nth.call(null,vec__26934,(0),null);
return key.call(null,(function (){var or__20754__auto__ = config;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})());
}));

(oops.config.get_config_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.get_config_key.cljs$lang$applyTo = (function (seq26931){
var G__26932 = cljs.core.first.call(null,seq26931);
var seq26931__$1 = cljs.core.next.call(null,seq26931);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26932,seq26931__$1);
}));

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___26946 = arguments.length;
var i__22083__auto___26947 = (0);
while(true){
if((i__22083__auto___26947 < len__22082__auto___26946)){
args__22092__auto__.push((arguments[i__22083__auto___26947]));

var G__26948 = (i__22083__auto___26947 + (1));
i__22083__auto___26947 = G__26948;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__26942){
var vec__26943 = p__26942;
var config = cljs.core.nth.call(null,vec__26943,(0),null);
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.call(null,(function (){var or__20754__auto__ = config;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
}));

(oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq26940){
var G__26941 = cljs.core.first.call(null,seq26940);
var seq26940__$1 = cljs.core.next.call(null,seq26940);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26941,seq26940__$1);
}));

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__22092__auto__ = [];
var len__22082__auto___26954 = arguments.length;
var i__22083__auto___26955 = (0);
while(true){
if((i__22083__auto___26955 < len__22082__auto___26954)){
args__22092__auto__.push((arguments[i__22083__auto___26955]));

var G__26956 = (i__22083__auto___26955 + (1));
i__22083__auto___26955 = G__26956;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__26950){
var vec__26951 = p__26950;
var config = cljs.core.nth.call(null,vec__26951,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),config);
}));

(oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq26949){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26949));
}));

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__22092__auto__ = [];
var len__22082__auto___26962 = arguments.length;
var i__22083__auto___26963 = (0);
while(true){
if((i__22083__auto___26963 < len__22082__auto___26962)){
args__22092__auto__.push((arguments[i__22083__auto___26963]));

var G__26964 = (i__22083__auto___26963 + (1));
i__22083__auto___26963 = G__26964;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__26958){
var vec__26959 = p__26958;
var config = cljs.core.nth.call(null,vec__26959,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),config);
}));

(oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq26957){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26957));
}));

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__22092__auto__ = [];
var len__22082__auto___26970 = arguments.length;
var i__22083__auto___26971 = (0);
while(true){
if((i__22083__auto___26971 < len__22082__auto___26970)){
args__22092__auto__.push((arguments[i__22083__auto___26971]));

var G__26972 = (i__22083__auto___26971 + (1));
i__22083__auto___26971 = G__26972;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__26966){
var vec__26967 = p__26966;
var config = cljs.core.nth.call(null,vec__26967,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),config);
}));

(oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq26965){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26965));
}));

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__22092__auto__ = [];
var len__22082__auto___26978 = arguments.length;
var i__22083__auto___26979 = (0);
while(true){
if((i__22083__auto___26979 < len__22082__auto___26978)){
args__22092__auto__.push((arguments[i__22083__auto___26979]));

var G__26980 = (i__22083__auto___26979 + (1));
i__22083__auto___26979 = G__26980;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__26974){
var vec__26975 = p__26974;
var config = cljs.core.nth.call(null,vec__26975,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),config);
}));

(oops.config.get_child_factory.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_child_factory.cljs$lang$applyTo = (function (seq26973){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26973));
}));

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___26986 = arguments.length;
var i__22083__auto___26987 = (0);
while(true){
if((i__22083__auto___26987 < len__22082__auto___26986)){
args__22092__auto__.push((arguments[i__22083__auto___26987]));

var G__26988 = (i__22083__auto___26987 + (1));
i__22083__auto___26987 = G__26988;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26982){
var vec__26983 = p__26982;
var config = cljs.core.nth.call(null,vec__26983,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),config) === true;
}));

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq26981){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26981));
}));

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___26994 = arguments.length;
var i__22083__auto___26995 = (0);
while(true){
if((i__22083__auto___26995 < len__22082__auto___26994)){
args__22092__auto__.push((arguments[i__22083__auto___26995]));

var G__26996 = (i__22083__auto___26995 + (1));
i__22083__auto___26995 = G__26996;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26990){
var vec__26991 = p__26990;
var config = cljs.core.nth.call(null,vec__26991,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),config) === true;
}));

(oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq26989){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26989));
}));

