// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('edamame.impl.read_fn');
goog.require('cljs.core');
/**
 * Preserves metadata, unlike clojure.walk/walk.
 */
edamame.impl.read_fn.walk_STAR_ = (function edamame$impl$read_fn$walk_STAR_(inner,outer,form){
if(cljs.core.list_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,outer.call(null,cljs.core.apply.call(null,cljs.core.list,cljs.core.map.call(null,inner,form))),cljs.core.meta.call(null,form));
} else {
if(cljs.core.map_entry_QMARK_.call(null,form)){
return outer.call(null,(new cljs.core.MapEntry(inner.call(null,cljs.core.key.call(null,form)),inner.call(null,cljs.core.val.call(null,form)),null)));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form))),cljs.core.meta.call(null,form));
} else {
if(cljs.core.record_QMARK_.call(null,form)){
return outer.call(null,cljs.core.reduce.call(null,(function (r,x){
return cljs.core.conj.call(null,r,inner.call(null,x));
}),form,form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form)));
} else {
return outer.call(null,form);

}
}
}
}
}
});
/**
 * Preserves metadata, unlike clojure.walk/postwalk.
 */
edamame.impl.read_fn.postwalk_STAR_ = (function edamame$impl$read_fn$postwalk_STAR_(f,form){
return edamame.impl.read_fn.walk_STAR_.call(null,cljs.core.partial.call(null,edamame.impl.read_fn.postwalk_STAR_,f),f,form);
});
edamame.impl.read_fn.read_fn = (function edamame$impl$read_fn$read_fn(expr){
var state = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(0),new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710),false], null));
var expr__$1 = edamame.impl.read_fn.postwalk_STAR_.call(null,(function (elt){
if((elt instanceof cljs.core.Symbol)){
var temp__5718__auto__ = cljs.core.re_matches.call(null,/^%(.*)/,cljs.core.name.call(null,elt));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__32490 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__32490,(0),null);
var m = cljs.core.nth.call(null,vec__32490,(1),null);
if(cljs.core.empty_QMARK_.call(null,m)){
cljs.core._vreset_BANG_.call(null,state,cljs.core.update.call(null,cljs.core._deref.call(null,state),new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),cljs.core.max,(1)));

return new cljs.core.Symbol(null,"%1","%1",1309450150,null);
} else {
if(cljs.core._EQ_.call(null,"&",m)){
cljs.core._vreset_BANG_.call(null,state,cljs.core.assoc.call(null,cljs.core._deref.call(null,state),new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710),true));

return elt;
} else {
var n_32493 = parseInt(m);
cljs.core._vreset_BANG_.call(null,state,cljs.core.update.call(null,cljs.core._deref.call(null,state),new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),cljs.core.max,n_32493));

return elt;

}
}
} else {
return elt;
}
} else {
return elt;
}
}),expr);
var map__32489 = cljs.core.deref.call(null,state);
var map__32489__$1 = cljs.core.__destructure_map.call(null,map__32489);
var max_fixed = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var var_args_QMARK_ = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710));
var fixed_names = cljs.core.map.call(null,(function (p1__32488_SHARP_){
return cljs.core.symbol.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32488_SHARP_)].join(''));
}),cljs.core.range.call(null,(1),(max_fixed + (1))));
var var_args_sym = new cljs.core.Symbol(null,"%&","%&",-728707069,null);
var arg_list = cljs.core.vec.call(null,cljs.core.concat.call(null,fixed_names,(cljs.core.truth_(var_args_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),var_args_sym], null):null)));
var form = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,arg_list,(new cljs.core.List(null,expr__$1,null,(1),null)),(2),null)),(3),null));
return form;
});
