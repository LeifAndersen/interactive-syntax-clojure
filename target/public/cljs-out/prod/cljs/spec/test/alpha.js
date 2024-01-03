// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('cljs.spec.test.alpha');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('clojure.string');
goog.require('cljs.stacktrace');
goog.require('cljs.pprint');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('goog.object');
goog.scope(function(){
cljs.spec.test.alpha.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.spec.test.alpha.distinct_by = (function cljs$spec$test$alpha$distinct_by(f,coll){
var step = (function cljs$spec$test$alpha$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__57753,seen__$1){
while(true){
var vec__57754 = p__57753;
var x = cljs.core.nth.call(null,vec__57754,(0),null);
var xs__$1 = vec__57754;
var temp__5720__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var v = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v)){
var G__57757 = cljs.core.rest.call(null,s);
var G__57758 = seen__$1;
p__57753 = G__57757;
seen__$1 = G__57758;
continue;
} else {
return cljs.core.cons.call(null,x,cljs$spec$test$alpha$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.spec.test.alpha.__GT_sym = (function cljs$spec$test$alpha$__GT_sym(x){
return cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.alpha.__GT_sym;},new cljs.core.Symbol("cljs.spec.alpha","->sym","cljs.spec.alpha/->sym",-2031271081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"->sym","->sym",696606926,null),"/home/runner/.gitlibs/libs/org.clojure/clojurescript/d0b035878683c10de31d13c92013c9d4b6fbce29/src/main/cljs/cljs/spec/alpha.cljs",13,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec.alpha.__GT_sym)?cljs.spec.alpha.__GT_sym.cljs$lang$test:null)]))).call(null,x);
});
/**
 * if false, instrumented fns call straight through
 */
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = true;
cljs.spec.test.alpha.get_host_port = (function cljs$spec$test$alpha$get_host_port(){
if(cljs.core.not_EQ_.call(null,"browser",cljs.core._STAR_target_STAR_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),window.location.host,new cljs.core.Keyword(null,"port","port",1534937262),window.location.port], null);
}
});
cljs.spec.test.alpha.get_ua_product = (function cljs$spec$test$alpha$get_ua_product(){
if(cljs.core.not_EQ_.call(null,"browser",cljs.core._STAR_target_STAR_)){
return cljs.core.keyword.call(null,cljs.core._STAR_target_STAR_);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
cljs.spec.test.alpha.get_env = (function cljs$spec$test$alpha$get_env(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ua-product","ua-product",938384227),cljs.spec.test.alpha.get_ua_product.call(null)], null);
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.test.alpha.fn_spec_QMARK_ = (function cljs$spec$test$alpha$fn_spec_QMARK_(m){
var or__20754__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.test.alpha.explain_data_STAR_ = (function cljs$spec$test$alpha$explain_data_STAR_(spec,v){
if(cljs.spec.alpha.valid_QMARK_.call(null,spec,v,null)){
return null;
} else {
return cljs.spec.alpha.explain_data.call(null,spec,v);
}
});
cljs.spec.test.alpha.find_caller = (function cljs$spec$test$alpha$find_caller(st){
var search_spec_fn = (function cljs$spec$test$alpha$find_caller_$_search_spec_fn(frame){
if(cljs.core.truth_(frame)){
var s = new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(frame);
var and__20748__auto__ = typeof s === 'string';
if(and__20748__auto__){
var and__20748__auto____$1 = (!(clojure.string.blank_QMARK_.call(null,s)));
if(and__20748__auto____$1){
return cljs.core.re_find.call(null,/cljs\.spec\.test\.spec_checking_fn/,s);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
} else {
return null;
}
});
return cljs.core.first.call(null,cljs.core.drop_while.call(null,search_spec_fn,cljs.core.drop_while.call(null,(function (p1__57759_SHARP_){
return cljs.core.not.call(null,search_spec_fn.call(null,p1__57759_SHARP_));
}),st)));
});
cljs.spec.test.alpha.spec_checking_fn = (function cljs$spec$test$alpha$spec_checking_fn(v,f,fn_spec){
var fn_spec__$1 = cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.alpha.maybe_spec;},new cljs.core.Symbol("cljs.spec.alpha","maybe-spec","cljs.spec.alpha/maybe-spec",1954004993,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"maybe-spec","maybe-spec",-741366888,null),"/home/runner/.gitlibs/libs/org.clojure/clojurescript/d0b035878683c10de31d13c92013c9d4b6fbce29/src/main/cljs/cljs/spec/alpha.cljs",18,1,105,105,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec-or-k","spec-or-k",1986391440,null)], null)),"spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.",(cljs.core.truth_(cljs.spec.alpha.maybe_spec)?cljs.spec.alpha.maybe_spec.cljs$lang$test:null)]))).call(null,fn_spec);
var args_spec = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_spec__$1);
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.alpha.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),conformed)){
var caller = cljs.spec.test.alpha.find_caller.call(null,cljs.stacktrace.parse_stacktrace.call(null,cljs.spec.test.alpha.get_host_port.call(null),(new Error()).stack,cljs.spec.test.alpha.get_env.call(null),null));
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443),cljs.spec.test.alpha.__GT_sym.call(null,v__$1),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"instrument","instrument",-960698844)),(cljs.core.truth_(caller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390),caller], null):null));
throw cljs.core.ex_info.call(null,["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)," did not conform to spec."].join(''),ed);
} else {
return conformed;
}
});
var pure_variadic_QMARK_ = (function (){var and__20748__auto__ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)));
if(cljs.core.truth_(and__20748__auto__)){
return (new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v))) === (0));
} else {
return and__20748__auto__;
}
})();
var apply_SINGLEQUOTE_ = (function (f__$1,args){
if(cljs.core.truth_((function (){var and__20748__auto__ = (args == null);
if(and__20748__auto__){
return pure_variadic_QMARK_;
} else {
return and__20748__auto__;
}
})())){
return f__$1.cljs$core$IFn$_invoke$arity$variadic();
} else {
return cljs.core.apply.call(null,f__$1,args);
}
});
var conform_BANG__STAR_ = (function (p1__57760_SHARP_){
return conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),args_spec,p1__57760_SHARP_,p1__57760_SHARP_);
});
var ret = (cljs.core.truth_(args_spec)?(function() { 
var G__57807__delegate = function (args){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,args);

var _STAR_instrument_enabled_STAR__orig_val__57761 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57762 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57762);

try{return apply_SINGLEQUOTE_.call(null,f,args);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57761);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return apply_SINGLEQUOTE_.call(null,f,args);
}
};
var G__57807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57808__i = 0, G__57808__a = new Array(arguments.length -  0);
while (G__57808__i < G__57808__a.length) {G__57808__a[G__57808__i] = arguments[G__57808__i + 0]; ++G__57808__i;}
  args = new cljs.core.IndexedSeq(G__57808__a,0,null);
} 
return G__57807__delegate.call(this,args);};
G__57807.cljs$lang$maxFixedArity = 0;
G__57807.cljs$lang$applyTo = (function (arglist__57809){
var args = cljs.core.seq(arglist__57809);
return G__57807__delegate(args);
});
G__57807.cljs$core$IFn$_invoke$arity$variadic = G__57807__delegate;
return G__57807;
})()
:f);
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.not.call(null,pure_variadic_QMARK_);
if(and__20748__auto__){
return args_spec;
} else {
return and__20748__auto__;
}
})())){
var temp__5724__auto___57810 = f.cljs$core$IFn$_invoke$arity$0;
if((temp__5724__auto___57810 == null)){
} else {
var ac__57736__auto___57811 = temp__5724__auto___57810;
(ret.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,cljs.core.PersistentVector.EMPTY);

var _STAR_instrument_enabled_STAR__orig_val__57763 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57764 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57764);

try{return ac__57736__auto___57811.call(null);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57763);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57811.call(null);
}
}));
}

var temp__5724__auto___57812 = f.cljs$core$IFn$_invoke$arity$1;
if((temp__5724__auto___57812 == null)){
} else {
var ac__57736__auto___57813 = temp__5724__auto___57812;
(ret.cljs$core$IFn$_invoke$arity$1 = (function (arg0){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0], null));

var _STAR_instrument_enabled_STAR__orig_val__57765 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57766 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57766);

try{return ac__57736__auto___57813.call(null,arg0);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57765);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57813.call(null,arg0);
}
}));
}

var temp__5724__auto___57814 = f.cljs$core$IFn$_invoke$arity$2;
if((temp__5724__auto___57814 == null)){
} else {
var ac__57736__auto___57815 = temp__5724__auto___57814;
(ret.cljs$core$IFn$_invoke$arity$2 = (function (arg0,arg1){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1], null));

var _STAR_instrument_enabled_STAR__orig_val__57767 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57768 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57768);

try{return ac__57736__auto___57815.call(null,arg0,arg1);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57767);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57815.call(null,arg0,arg1);
}
}));
}

var temp__5724__auto___57816 = f.cljs$core$IFn$_invoke$arity$3;
if((temp__5724__auto___57816 == null)){
} else {
var ac__57736__auto___57817 = temp__5724__auto___57816;
(ret.cljs$core$IFn$_invoke$arity$3 = (function (arg0,arg1,arg2){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2], null));

var _STAR_instrument_enabled_STAR__orig_val__57769 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57770 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57770);

try{return ac__57736__auto___57817.call(null,arg0,arg1,arg2);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57769);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57817.call(null,arg0,arg1,arg2);
}
}));
}

var temp__5724__auto___57818 = f.cljs$core$IFn$_invoke$arity$4;
if((temp__5724__auto___57818 == null)){
} else {
var ac__57736__auto___57819 = temp__5724__auto___57818;
(ret.cljs$core$IFn$_invoke$arity$4 = (function (arg0,arg1,arg2,arg3){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3], null));

var _STAR_instrument_enabled_STAR__orig_val__57771 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57772 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57772);

try{return ac__57736__auto___57819.call(null,arg0,arg1,arg2,arg3);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57771);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57819.call(null,arg0,arg1,arg2,arg3);
}
}));
}

var temp__5724__auto___57820 = f.cljs$core$IFn$_invoke$arity$5;
if((temp__5724__auto___57820 == null)){
} else {
var ac__57736__auto___57821 = temp__5724__auto___57820;
(ret.cljs$core$IFn$_invoke$arity$5 = (function (arg0,arg1,arg2,arg3,arg4){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4], null));

var _STAR_instrument_enabled_STAR__orig_val__57773 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57774 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57774);

try{return ac__57736__auto___57821.call(null,arg0,arg1,arg2,arg3,arg4);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57773);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57821.call(null,arg0,arg1,arg2,arg3,arg4);
}
}));
}

var temp__5724__auto___57822 = f.cljs$core$IFn$_invoke$arity$6;
if((temp__5724__auto___57822 == null)){
} else {
var ac__57736__auto___57823 = temp__5724__auto___57822;
(ret.cljs$core$IFn$_invoke$arity$6 = (function (arg0,arg1,arg2,arg3,arg4,arg5){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5], null));

var _STAR_instrument_enabled_STAR__orig_val__57775 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57776 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57776);

try{return ac__57736__auto___57823.call(null,arg0,arg1,arg2,arg3,arg4,arg5);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57775);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57823.call(null,arg0,arg1,arg2,arg3,arg4,arg5);
}
}));
}

var temp__5724__auto___57824 = f.cljs$core$IFn$_invoke$arity$7;
if((temp__5724__auto___57824 == null)){
} else {
var ac__57736__auto___57825 = temp__5724__auto___57824;
(ret.cljs$core$IFn$_invoke$arity$7 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6], null));

var _STAR_instrument_enabled_STAR__orig_val__57777 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57778 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57778);

try{return ac__57736__auto___57825.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57777);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57825.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6);
}
}));
}

var temp__5724__auto___57826 = f.cljs$core$IFn$_invoke$arity$8;
if((temp__5724__auto___57826 == null)){
} else {
var ac__57736__auto___57827 = temp__5724__auto___57826;
(ret.cljs$core$IFn$_invoke$arity$8 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7], null));

var _STAR_instrument_enabled_STAR__orig_val__57779 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57780 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57780);

try{return ac__57736__auto___57827.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57779);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57827.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7);
}
}));
}

var temp__5724__auto___57828 = f.cljs$core$IFn$_invoke$arity$9;
if((temp__5724__auto___57828 == null)){
} else {
var ac__57736__auto___57829 = temp__5724__auto___57828;
(ret.cljs$core$IFn$_invoke$arity$9 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8], null));

var _STAR_instrument_enabled_STAR__orig_val__57781 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57782 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57782);

try{return ac__57736__auto___57829.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57781);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57829.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8);
}
}));
}

var temp__5724__auto___57830 = f.cljs$core$IFn$_invoke$arity$10;
if((temp__5724__auto___57830 == null)){
} else {
var ac__57736__auto___57831 = temp__5724__auto___57830;
(ret.cljs$core$IFn$_invoke$arity$10 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9], null));

var _STAR_instrument_enabled_STAR__orig_val__57783 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57784 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57784);

try{return ac__57736__auto___57831.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57783);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57831.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9);
}
}));
}

var temp__5724__auto___57832 = f.cljs$core$IFn$_invoke$arity$11;
if((temp__5724__auto___57832 == null)){
} else {
var ac__57736__auto___57833 = temp__5724__auto___57832;
(ret.cljs$core$IFn$_invoke$arity$11 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10], null));

var _STAR_instrument_enabled_STAR__orig_val__57785 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57786 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57786);

try{return ac__57736__auto___57833.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57785);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57833.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10);
}
}));
}

var temp__5724__auto___57834 = f.cljs$core$IFn$_invoke$arity$12;
if((temp__5724__auto___57834 == null)){
} else {
var ac__57736__auto___57835 = temp__5724__auto___57834;
(ret.cljs$core$IFn$_invoke$arity$12 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11], null));

var _STAR_instrument_enabled_STAR__orig_val__57787 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57788 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57788);

try{return ac__57736__auto___57835.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57787);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57835.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11);
}
}));
}

var temp__5724__auto___57836 = f.cljs$core$IFn$_invoke$arity$13;
if((temp__5724__auto___57836 == null)){
} else {
var ac__57736__auto___57837 = temp__5724__auto___57836;
(ret.cljs$core$IFn$_invoke$arity$13 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12], null));

var _STAR_instrument_enabled_STAR__orig_val__57789 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57790 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57790);

try{return ac__57736__auto___57837.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57789);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57837.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12);
}
}));
}

var temp__5724__auto___57838 = f.cljs$core$IFn$_invoke$arity$14;
if((temp__5724__auto___57838 == null)){
} else {
var ac__57736__auto___57839 = temp__5724__auto___57838;
(ret.cljs$core$IFn$_invoke$arity$14 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13], null));

var _STAR_instrument_enabled_STAR__orig_val__57791 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57792 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57792);

try{return ac__57736__auto___57839.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57791);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57839.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13);
}
}));
}

var temp__5724__auto___57840 = f.cljs$core$IFn$_invoke$arity$15;
if((temp__5724__auto___57840 == null)){
} else {
var ac__57736__auto___57841 = temp__5724__auto___57840;
(ret.cljs$core$IFn$_invoke$arity$15 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14], null));

var _STAR_instrument_enabled_STAR__orig_val__57793 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57794 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57794);

try{return ac__57736__auto___57841.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57793);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57841.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14);
}
}));
}

var temp__5724__auto___57842 = f.cljs$core$IFn$_invoke$arity$16;
if((temp__5724__auto___57842 == null)){
} else {
var ac__57736__auto___57843 = temp__5724__auto___57842;
(ret.cljs$core$IFn$_invoke$arity$16 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15], null));

var _STAR_instrument_enabled_STAR__orig_val__57795 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57796 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57796);

try{return ac__57736__auto___57843.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57795);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57843.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15);
}
}));
}

var temp__5724__auto___57844 = f.cljs$core$IFn$_invoke$arity$17;
if((temp__5724__auto___57844 == null)){
} else {
var ac__57736__auto___57845 = temp__5724__auto___57844;
(ret.cljs$core$IFn$_invoke$arity$17 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16], null));

var _STAR_instrument_enabled_STAR__orig_val__57797 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57798 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57798);

try{return ac__57736__auto___57845.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57797);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57845.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16);
}
}));
}

var temp__5724__auto___57846 = f.cljs$core$IFn$_invoke$arity$18;
if((temp__5724__auto___57846 == null)){
} else {
var ac__57736__auto___57847 = temp__5724__auto___57846;
(ret.cljs$core$IFn$_invoke$arity$18 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17], null));

var _STAR_instrument_enabled_STAR__orig_val__57799 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57800 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57800);

try{return ac__57736__auto___57847.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57799);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57847.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17);
}
}));
}

var temp__5724__auto___57848 = f.cljs$core$IFn$_invoke$arity$19;
if((temp__5724__auto___57848 == null)){
} else {
var ac__57736__auto___57849 = temp__5724__auto___57848;
(ret.cljs$core$IFn$_invoke$arity$19 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18], null));

var _STAR_instrument_enabled_STAR__orig_val__57801 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57802 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57802);

try{return ac__57736__auto___57849.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57801);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57849.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18);
}
}));
}

var temp__5724__auto___57850 = f.cljs$core$IFn$_invoke$arity$20;
if((temp__5724__auto___57850 == null)){
} else {
var ac__57736__auto___57851 = temp__5724__auto___57850;
(ret.cljs$core$IFn$_invoke$arity$20 = (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19], null));

var _STAR_instrument_enabled_STAR__orig_val__57803 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57804 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57804);

try{return ac__57736__auto___57851.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57803);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return ac__57736__auto___57851.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19);
}
}));
}

var temp__5724__auto___57852 = f.cljs$core$IFn$_invoke$arity$variadic;
if((temp__5724__auto___57852 == null)){
} else {
var variadic_57853 = temp__5724__auto___57852;
(ret.cljs$core$IFn$_invoke$arity$variadic = (function() { 
var G__57854__delegate = function (args){
if(cljs.core.truth_(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_)){
var orig__57631__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null);

try{conform_BANG__STAR_.call(null,cljs.core.apply.call(null,cljs.core.list_STAR_,args));

var _STAR_instrument_enabled_STAR__orig_val__57805 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__57806 = true;
(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__57806);

try{return apply_SINGLEQUOTE_.call(null,variadic_57853,args);
}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__57805);
}}finally {(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__57631__auto__);
}} else {
return apply_SINGLEQUOTE_.call(null,variadic_57853,args);
}
};
var G__57854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57855__i = 0, G__57855__a = new Array(arguments.length -  0);
while (G__57855__i < G__57855__a.length) {G__57855__a[G__57855__i] = arguments[G__57855__i + 0]; ++G__57855__i;}
  args = new cljs.core.IndexedSeq(G__57855__a,0,null);
} 
return G__57854__delegate.call(this,args);};
G__57854.cljs$lang$maxFixedArity = 0;
G__57854.cljs$lang$applyTo = (function (arglist__57856){
var args = cljs.core.seq(arglist__57856);
return G__57854__delegate(args);
});
G__57854.cljs$core$IFn$_invoke$arity$variadic = G__57854__delegate;
return G__57854;
})()
);
}
} else {
}

return ret;
});
cljs.spec.test.alpha.no_fspec = (function cljs$spec$test$alpha$no_fspec(v,spec){
return cljs.core.ex_info.call(null,["Fn at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," is not spec'ed."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fspec","no-fspec",-1763393966)], null));
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.test !== 'undefined') && (typeof cljs.spec.test.alpha !== 'undefined') && (typeof cljs.spec.test.alpha.instrumented_vars !== 'undefined')){
} else {
cljs.spec.test.alpha.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Helper for instrument.
 */
cljs.spec.test.alpha.instrument_choose_fn = (function cljs$spec$test$alpha$instrument_choose_fn(f,spec,sym,p__57857){
var map__57858 = p__57857;
var map__57858__$1 = cljs.core.__destructure_map.call(null,map__57858);
var over = cljs.core.get.call(null,map__57858__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var stub = cljs.core.get.call(null,map__57858__$1,new cljs.core.Keyword(null,"stub","stub",1339145807));
var replace = cljs.core.get.call(null,map__57858__$1,new cljs.core.Keyword(null,"replace","replace",-786587770));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([sym]),stub))){
return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,spec,over));
} else {
return cljs.core.get.call(null,replace,sym,f);
}
});
/**
 * Helper for instrument
 */
cljs.spec.test.alpha.instrument_choose_spec = (function cljs$spec$test$alpha$instrument_choose_spec(spec,sym,p__57859){
var map__57860 = p__57859;
var map__57860__$1 = cljs.core.__destructure_map.call(null,map__57860);
var overrides = cljs.core.get.call(null,map__57860__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
return cljs.core.get.call(null,overrides,sym,spec);
});
cljs.spec.test.alpha.instrument_1_STAR_ = (function cljs$spec$test$alpha$instrument_1_STAR_(s,v,opts){
var spec = cljs.spec.alpha.get_spec.call(null,v);
var map__57861 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.test.alpha.instrumented_vars),v);
var map__57861__$1 = cljs.core.__destructure_map.call(null,map__57861);
var raw = cljs.core.get.call(null,map__57861__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__57861__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
var to_wrap = ((cljs.core._EQ_.call(null,wrapped,current))?raw:current);
var ospec = (function (){var or__20754__auto__ = cljs.spec.test.alpha.instrument_choose_spec.call(null,spec,s,opts);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
throw cljs.spec.test.alpha.no_fspec.call(null,v,spec);
}
})();
var ofn = cljs.spec.test.alpha.instrument_choose_fn.call(null,to_wrap,ospec,s,opts);
var checked = cljs.spec.test.alpha.spec_checking_fn.call(null,v,ofn,ospec);
cljs.core.swap_BANG_.call(null,cljs.spec.test.alpha.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),to_wrap,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
});
cljs.spec.test.alpha.unstrument_1_STAR_ = (function cljs$spec$test$alpha$unstrument_1_STAR_(s,v){
if(cljs.core.truth_(v)){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.test.alpha.instrumented_vars),v);
if(cljs.core.truth_(temp__5720__auto__)){
var map__57862 = temp__5720__auto__;
var map__57862__$1 = cljs.core.__destructure_map.call(null,map__57862);
var raw = cljs.core.get.call(null,map__57862__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__57862__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
cljs.core.swap_BANG_.call(null,cljs.spec.test.alpha.instrumented_vars,cljs.core.dissoc,v);

var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return raw;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.test.alpha.fn_spec_name_QMARK_ = (function cljs$spec$test$alpha$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
});
cljs.spec.test.alpha.collectionize = (function cljs$spec$test$alpha$collectionize(x){
if((x instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,x,null,(1),null));
} else {
return x;
}
});
/**
 * Given an opts map as per instrument, returns the set of syms
 * that can be instrumented.
 */
cljs.spec.test.alpha.instrumentable_syms = (function cljs$spec$test$alpha$instrumentable_syms(var_args){
var G__57864 = arguments.length;
switch (G__57864) {
case 0:
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test.alpha.instrumentable_syms.call(null,null);
}));

(cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(cljs.core.every_QMARK_.call(null,cljs.core.ident_QMARK_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(opts)))){
} else {
throw (new Error(["Assert failed: ","instrument :gen expects ident keys","\n","(every? ident? (keys (:gen opts)))"].join('')));
}

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,cljs.spec.test.alpha.fn_spec_name_QMARK_,cljs.core.keys.call(null,cljs.spec.alpha.registry.call(null))),cljs.core.keys.call(null,new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"stub","stub",1339145807).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.keys.call(null,new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(opts))], null));
}));

(cljs.spec.test.alpha.instrumentable_syms.cljs$lang$maxFixedArity = 1);

cljs.spec.test.alpha.explain_check = (function cljs$spec$test$alpha$explain_check(args,spec,v,role){
return cljs.core.ex_info.call(null,"Specification-based check failed",((cljs.spec.alpha.valid_QMARK_.call(null,spec,v,null))?null:cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,v),new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593),args,new cljs.core.Keyword("cljs.spec.test.alpha","val","cljs.spec.test.alpha/val",1634694485),v,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547))));
});
/**
 * Returns true if call passes specs, otherwise *returns* an exception
 * with explain-data + ::s/failure.
 */
cljs.spec.test.alpha.check_call = (function cljs$spec$test$alpha$check_call(f,specs,args){
var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args):null);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119))){
return cljs.spec.test.alpha.explain_check.call(null,args,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,new cljs.core.Keyword(null,"args","args",1315556576));
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret):null);
if(cljs.core._EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119))){
return cljs.spec.test.alpha.explain_check.call(null,args,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret,new cljs.core.Keyword(null,"ret","ret",-468222814));
} else {
if(cljs.core.truth_((function (){var and__20748__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__20748__auto____$1)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null))){
return true;
} else {
return cljs.spec.test.alpha.explain_check.call(null,args,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null),new cljs.core.Keyword(null,"fn","fn",-1175266204));
}
} else {
return true;
}
}
}
});
cljs.spec.test.alpha.quick_check = (function cljs$spec$test$alpha$quick_check(f,specs,p__57867){
var map__57868 = p__57867;
var map__57868__$1 = cljs.core.__destructure_map.call(null,map__57868);
var gen = cljs.core.get.call(null,map__57868__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var opts = cljs.core.get.call(null,map__57868__$1,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908));
var map__57869 = opts;
var map__57869__$1 = cljs.core.__destructure_map.call(null,map__57869);
var num_tests = cljs.core.get.call(null,map__57869__$1,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(1000));
var g = (function (){try{return cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),gen);
}catch (e57870){if((e57870 instanceof Error)){
var t = e57870;
return t;
} else {
throw e57870;

}
}})();
if((g instanceof Error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),g], null);
} else {
var prop = cljs.spec.gen.alpha.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),(function (p1__57866_SHARP_){
return cljs.spec.test.alpha.check_call.call(null,f,specs,p1__57866_SHARP_);
}));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.quick_check,num_tests,prop,cljs.core.mapcat.call(null,cljs.core.identity,opts));
}
});
/**
 * Builds spec result map.
 */
cljs.spec.test.alpha.make_check_result = (function cljs$spec$test$alpha$make_check_result(check_sym,spec,test_check_ret,tc_ret_key){
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"spec","spec",347520401),spec,tc_ret_key,test_check_ret]),(cljs.core.truth_(check_sym)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),check_sym], null):null),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__5720__auto__)){
var result = temp__5720__auto__;
if(result === true){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",720415879),result], null);
}
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__5720__auto__)){
var shrunk = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(shrunk)], null);
} else {
return null;
}
})());
});
cljs.spec.test.alpha.validate_check_opts = (function cljs$spec$test$alpha$validate_check_opts(opts){
if(cljs.core.every_QMARK_.call(null,cljs.core.ident_QMARK_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(opts)))){
return null;
} else {
throw (new Error(["Assert failed: ","check :gen expects ident keys","\n","(every? ident? (keys (:gen opts)))"].join('')));
}
});
cljs.spec.test.alpha.failure_type = (function cljs$spec$test$alpha$failure_type(x){
return new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,x));
});
cljs.spec.test.alpha.unwrap_failure = (function cljs$spec$test$alpha$unwrap_failure(x){
if(cljs.core.truth_(cljs.spec.test.alpha.failure_type.call(null,x))){
return cljs.core.ex_data.call(null,x);
} else {
return x;
}
});
/**
 * Returns the type of the check result. This can be any of the
 * ::s/failure keywords documented in 'check', or:
 * 
 *   :check-passed   all checked fn returns conformed
 *   :check-threw    checked fn threw an exception
 */
cljs.spec.test.alpha.result_type = (function cljs$spec$test$alpha$result_type(ret){
var failure = new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(ret);
if((failure == null)){
return new cljs.core.Keyword(null,"check-passed","check-passed",1505510820);
} else {
if(cljs.core.truth_(cljs.spec.test.alpha.failure_type.call(null,failure))){
return cljs.spec.test.alpha.failure_type.call(null,failure);
} else {
return new cljs.core.Keyword(null,"check-threw","check-threw",-1050428963);

}
}
});
/**
 * Given a check result, returns an abbreviated version
 * suitable for summary use.
 */
cljs.spec.test.alpha.abbrev_result = (function cljs$spec$test$alpha$abbrev_result(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.dissoc.call(null,x,new cljs.core.Keyword("clojure.spec.test.check","ret","clojure.spec.test.check/ret",-1173350899)),new cljs.core.Keyword(null,"spec","spec",347520401),cljs.spec.alpha.describe),new cljs.core.Keyword(null,"failure","failure",720415879),cljs.spec.test.alpha.unwrap_failure);
} else {
return cljs.core.dissoc.call(null,x,new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908));
}
});
/**
 * Given a collection of check-results, e.g. from 'check', pretty
 * prints the summary-result (default abbrev-result) of each.
 * 
 * Returns a map with :total, the total number of results, plus a
 * key with a count for each different :type of result.
 */
cljs.spec.test.alpha.summarize_results = (function cljs$spec$test$alpha$summarize_results(var_args){
var G__57872 = arguments.length;
switch (G__57872) {
case 1:
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$1 = (function (check_results){
return cljs.spec.test.alpha.summarize_results.call(null,check_results,cljs.spec.test.alpha.abbrev_result);
}));

(cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2 = (function (check_results,summary_result){
return cljs.core.reduce.call(null,(function (summary,result){
cljs.pprint.pprint.call(null,summary_result.call(null,result));

return cljs.core.update.call(null,cljs.core.update.call(null,summary,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.inc),cljs.spec.test.alpha.result_type.call(null,result),cljs.core.fnil.call(null,cljs.core.inc,(0)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),(0)], null),check_results);
}));

(cljs.spec.test.alpha.summarize_results.cljs$lang$maxFixedArity = 2);

