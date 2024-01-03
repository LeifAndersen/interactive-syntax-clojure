// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('edamame.impl.syntax_quote');
goog.require('cljs.core');
goog.require('clojure.string');
edamame.impl.syntax_quote.unquote_QMARK_ = (function edamame$impl$syntax_quote$unquote_QMARK_(form){
return ((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null))));
});
edamame.impl.syntax_quote.unquote_splicing_QMARK_ = (function edamame$impl$syntax_quote$unquote_splicing_QMARK_(form){
return ((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null))));
});
/**
 * Expand a list by resolving its syntax quotes and unquotes
 */
edamame.impl.syntax_quote.expand_list = (function edamame$impl$syntax_quote$expand_list(ctx,reader,s){
var s__$1 = cljs.core.seq.call(null,s);
var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(s__$1){
var item = cljs.core.first.call(null,s__$1);
var ret = cljs.core.conj_BANG_.call(null,r,((edamame.impl.syntax_quote.unquote_QMARK_.call(null,item))?(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),(new cljs.core.List(null,cljs.core.second.call(null,item),null,(1),null)),(2),null)):((edamame.impl.syntax_quote.unquote_splicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),(new cljs.core.List(null,edamame.impl.syntax_quote.syntax_quote.call(null,ctx,reader,item),null,(1),null)),(2),null))
)));
var G__32496 = cljs.core.next.call(null,s__$1);
var G__32497 = ret;
s__$1 = G__32496;
r = G__32497;
continue;
} else {
return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,r));
}
break;
}
});
edamame.impl.syntax_quote.syntax_quote_coll = (function edamame$impl$syntax_quote$syntax_quote_coll(ctx,reader,type,coll){
var res = (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","sequence","clojure.core/sequence",1998774218,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","seq","clojure.core/seq",-1551838743,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),edamame.impl.syntax_quote.expand_list.call(null,ctx,reader,coll)),null,(1),null)),(2),null)),null,(1),null)),(2),null));
if(cljs.core.truth_(type)){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),(new cljs.core.List(null,type,(new cljs.core.List(null,res,null,(1),null)),(2),null)),(3),null));
} else {
return res;
}
});
/**
 * Decide which map type to use, array-map if less than 16 elements
 */
edamame.impl.syntax_quote.map_func = (function edamame$impl$syntax_quote$map_func(coll){
if((cljs.core.count.call(null,coll) >= (16))){
return new cljs.core.Symbol("clojure.core","hash-map","clojure.core/hash-map",338908405,null);
} else {
return new cljs.core.Symbol("clojure.core","array-map","clojure.core/array-map",-1351833961,null);
}
});
/**
 * Flatten a map into a seq of alternate keys and values
 */
edamame.impl.syntax_quote.flatten_map = (function edamame$impl$syntax_quote$flatten_map(form){
var s = cljs.core.seq.call(null,form);
var key_vals = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(s){
var e = cljs.core.first.call(null,s);
var G__32498 = cljs.core.next.call(null,s);
var G__32499 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,key_vals,cljs.core.key.call(null,e)),cljs.core.val.call(null,e));
s = G__32498;
key_vals = G__32499;
continue;
} else {
return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,key_vals));
}
break;
}
});
edamame.impl.syntax_quote.syntax_quote_STAR_ = (function edamame$impl$syntax_quote$syntax_quote_STAR_(p__32500,reader,form){
var map__32501 = p__32500;
var map__32501__$1 = cljs.core.__destructure_map.call(null,map__32501);
var ctx = map__32501__$1;
var gensyms = cljs.core.get.call(null,map__32501__$1,new cljs.core.Keyword(null,"gensyms","gensyms",248713782));
if(cljs.core.special_symbol_QMARK_.call(null,form)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null));
} else {
if((form instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,(function (){var sym_name = cljs.core.name.call(null,form);
if(cljs.core.special_symbol_QMARK_.call(null,form)){
return form;
} else {
if(clojure.string.ends_with_QMARK_.call(null,sym_name,"#")){
var temp__5718__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,gensyms),form);
if(cljs.core.truth_(temp__5718__auto__)){
var generated = temp__5718__auto__;
return generated;
} else {
var n = cljs.core.subs.call(null,sym_name,(0),(((sym_name).length) - (1)));
var generated = cljs.core.gensym.call(null,[n,"__"].join(''));
var generated__$1 = cljs.core.symbol.call(null,[cljs.core.name.call(null,generated),"__auto__"].join(''));
cljs.core.swap_BANG_.call(null,gensyms,cljs.core.assoc,form,generated__$1);

return generated__$1;
}
} else {
var f = new cljs.core.Keyword(null,"resolve-symbol","resolve-symbol",-319166964).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx));
return (function (){var or__20754__auto__ = f;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.identity;
}
})().call(null,form);

}
}
})(),null,(1),null)),(2),null));
} else {
if(edamame.impl.syntax_quote.unquote_QMARK_.call(null,form)){
return cljs.core.second.call(null,form);
} else {
if(edamame.impl.syntax_quote.unquote_splicing_QMARK_.call(null,form)){
throw (new Error("unquote-splice not in list"));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
if((form instanceof cljs.core.IRecord)){
return form;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return edamame.impl.syntax_quote.syntax_quote_coll.call(null,ctx,reader,edamame.impl.syntax_quote.map_func.call(null,form),edamame.impl.syntax_quote.flatten_map.call(null,form));
} else {
if(cljs.core.vector_QMARK_.call(null,form)){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","vec","clojure.core/vec",146271141,null),(new cljs.core.List(null,edamame.impl.syntax_quote.syntax_quote_coll.call(null,ctx,reader,null,form),null,(1),null)),(2),null));
} else {
if(cljs.core.set_QMARK_.call(null,form)){
return edamame.impl.syntax_quote.syntax_quote_coll.call(null,ctx,reader,new cljs.core.Symbol("clojure.core","hash-set","clojure.core/hash-set",1229125967,null),form);
} else {
if(((cljs.core.seq_QMARK_.call(null,form)) || (cljs.core.list_QMARK_.call(null,form)))){
var seq = cljs.core.seq.call(null,form);
if(seq){
return edamame.impl.syntax_quote.syntax_quote_coll.call(null,ctx,reader,null,seq);
} else {
return cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null));
}
} else {
throw (new Error("Unknown Collection type"));

}
}
}
}
}
} else {
if((((form instanceof cljs.core.Keyword)) || (((typeof form === 'number') || (((cljs.core.char_QMARK_.call(null,form)) || (((typeof form === 'string') || ((((form == null)) || (((cljs.core.boolean_QMARK_.call(null,form)) || (cljs.core.regexp_QMARK_.call(null,form)))))))))))))){
return form;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null));

}
}
}
}
}
}
});
edamame.impl.syntax_quote.add_meta = (function edamame$impl$syntax_quote$add_meta(ctx,reader,form,ret){
if((function (){var and__20748__auto__ = (((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IWithMeta$))))?true:false):false);
if(and__20748__auto__){
return cljs.core.seq.call(null,cljs.core.dissoc.call(null,cljs.core.meta.call(null,form),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx)));
} else {
return and__20748__auto__;
}
})()){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),(new cljs.core.List(null,ret,(new cljs.core.List(null,edamame.impl.syntax_quote.syntax_quote_STAR_.call(null,ctx,reader,cljs.core.meta.call(null,form)),null,(1),null)),(2),null)),(3),null));
} else {
return ret;
}
});
edamame.impl.syntax_quote.syntax_quote = (function edamame$impl$syntax_quote$syntax_quote(ctx,reader,form){
var ret = edamame.impl.syntax_quote.syntax_quote_STAR_.call(null,ctx,reader,form);
return edamame.impl.syntax_quote.add_meta.call(null,ctx,reader,form,ret);
});
