// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('clojure.data.xml.name');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.data.xml.js.name');
goog.require('clojure.data.xml.protocols');
goog.require('goog.string.StringBuffer');
clojure.data.xml.name.parse_qname = clojure.data.xml.js.name.parse_qname;

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return clojure.data.xml.name.parse_qname;},new cljs.core.Symbol("clojure.data.xml.name","parse-qname","clojure.data.xml.name/parse-qname",-631519353,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"target/public/cljs-out/prod/clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"parse-qname","parse-qname",-503996965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.parse_qname)?clojure.data.xml.name.parse_qname.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),cljs.core.constantly.call(null,cljs.core.assoc.call(null,cljs.core.meta.call(null,new cljs.core.Var(function(){return clojure.data.xml.js.name.parse_qname;},new cljs.core.Symbol("clojure.data.xml.js.name","parse-qname","clojure.data.xml.js.name/parse-qname",786468634,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.xml.js.name","clojure.data.xml.js.name",-527694126,null),new cljs.core.Symbol(null,"parse-qname","parse-qname",-503996965,null),"target/public/cljs-out/prod/clojure/data/xml/js/name.cljs",17,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.data.xml.js.name.parse_qname)?clojure.data.xml.js.name.parse_qname.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"wrapped-by","wrapped-by",1051044074),new cljs.core.Var(function(){return clojure.data.xml.name.parse_qname;},new cljs.core.Symbol("clojure.data.xml.name","parse-qname","clojure.data.xml.name/parse-qname",-631519353,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"target/public/cljs-out/prod/clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"parse-qname","parse-qname",-503996965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.parse_qname)?clojure.data.xml.name.parse_qname.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)))));

clojure.data.xml.name.encode_uri = clojure.data.xml.js.name.encode_uri;

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return clojure.data.xml.name.encode_uri;},new cljs.core.Symbol("clojure.data.xml.name","encode-uri","clojure.data.xml.name/encode-uri",-307671031,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"target/public/cljs-out/prod/clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.encode_uri)?clojure.data.xml.name.encode_uri.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),cljs.core.constantly.call(null,cljs.core.assoc.call(null,cljs.core.meta.call(null,new cljs.core.Var(function(){return clojure.data.xml.js.name.encode_uri;},new cljs.core.Symbol("clojure.data.xml.js.name","encode-uri","clojure.data.xml.js.name/encode-uri",1914989452,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.xml.js.name","clojure.data.xml.js.name",-527694126,null),new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"target/public/cljs-out/prod/clojure/data/xml/js/name.cljs",17,1,19,19,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",865819680,null)], null)),null,(cljs.core.truth_(clojure.data.xml.js.name.encode_uri)?clojure.data.xml.js.name.encode_uri.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"wrapped-by","wrapped-by",1051044074),new cljs.core.Var(function(){return clojure.data.xml.name.encode_uri;},new cljs.core.Symbol("clojure.data.xml.name","encode-uri","clojure.data.xml.name/encode-uri",-307671031,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"target/public/cljs-out/prod/clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.encode_uri)?clojure.data.xml.name.encode_uri.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)))));

clojure.data.xml.name.decode_uri = clojure.data.xml.js.name.decode_uri;

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return clojure.data.xml.name.decode_uri;},new cljs.core.Symbol("clojure.data.xml.name","decode-uri","clojure.data.xml.name/decode-uri",-1422284784,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"target/public/cljs-out/prod/clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.decode_uri)?clojure.data.xml.name.decode_uri.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),cljs.core.constantly.call(null,cljs.core.assoc.call(null,cljs.core.meta.call(null,new cljs.core.Var(function(){return clojure.data.xml.js.name.decode_uri;},new cljs.core.Symbol("clojure.data.xml.js.name","decode-uri","clojure.data.xml.js.name/decode-uri",1069441439,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.xml.js.name","clojure.data.xml.js.name",-527694126,null),new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),"target/public/cljs-out/prod/clojure/data/xml/js/name.cljs",17,1,16,16,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null)),null,(cljs.core.truth_(clojure.data.xml.js.name.decode_uri)?clojure.data.xml.js.name.decode_uri.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"wrapped-by","wrapped-by",1051044074),new cljs.core.Var(function(){return clojure.data.xml.name.decode_uri;},new cljs.core.Symbol("clojure.data.xml.name","decode-uri","clojure.data.xml.name/decode-uri",-1422284784,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"target/public/cljs-out/prod/clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.decode_uri)?clojure.data.xml.name.decode_uri.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)))));
clojure.data.xml.name.uri_symbol = (function clojure$data$xml$name$uri_symbol(uri){
return cljs.core.symbol.call(null,clojure.data.xml.name.encode_uri.call(null,["xmlns.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')));
});
clojure.data.xml.name.symbol_uri = (function clojure$data$xml$name$symbol_uri(ss){
var du = clojure.data.xml.name.decode_uri.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss));
if(cljs.core.truth_(du.startsWith("xmlns."))){
return cljs.core.subs.call(null,du,(6));
} else {
throw cljs.core.ex_info.call(null,"Uri symbol not valid",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),ss], null));
}
});
/**
 * Get the namespace uri for this qname
 */
clojure.data.xml.name.qname_uri = (function clojure$data$xml$name$qname_uri(v){
return clojure.data.xml.protocols.qname_uri.call(null,v);
});
/**
 * Get the name for this qname
 */
clojure.data.xml.name.qname_local = (function clojure$data$xml$name$qname_local(v){
return clojure.data.xml.protocols.qname_local.call(null,v);
});
clojure.data.xml.name.qname = (function clojure$data$xml$name$qname(var_args){
var G__47428 = arguments.length;
switch (G__47428) {
case 1:
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$1 = (function (local){
return clojure.data.xml.name.qname.call(null,"",local);
}));

(clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$2 = (function (uri,local){
return cljs.core.keyword.call(null,((clojure.string.blank_QMARK_.call(null,uri))?null:clojure.data.xml.name.encode_uri.call(null,["xmlns.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join(''))),local);
}));

(clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$3 = (function (uri,local,_prefix){
return clojure.data.xml.name.qname.call(null,uri,local);
}));

(clojure.data.xml.name.qname.cljs$lang$maxFixedArity = 3);

clojure.data.xml.name.namespaced_QMARK_ = (function clojure$data$xml$name$namespaced_QMARK_(qn){
return (!(clojure.string.blank_QMARK_.call(null,clojure.data.xml.name.qname_uri.call(null,qn))));
});
clojure.data.xml.name.clj_ns_name = (function clojure$data$xml$name$clj_ns_name(ns){
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,ns);
} else {
if((ns instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,ns);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);

}
}
});
clojure.data.xml.name.xmlns_uri = "http://www.w3.org/2000/xmlns/";
clojure.data.xml.name.xml_uri = "http://www.w3.org/XML/1998/namespace";
(cljs.core.Keyword.prototype.clojure$data$xml$protocols$AsQName$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.clojure$data$xml$protocols$AsQName$qname_local$arity$1 = (function (kw){
var kw__$1 = this;
return cljs.core.name.call(null,kw__$1);
}));

(cljs.core.Keyword.prototype.clojure$data$xml$protocols$AsQName$qname_uri$arity$1 = (function (kw){
var kw__$1 = this;
var temp__5718__auto__ = cljs.core.namespace.call(null,kw__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var ns = temp__5718__auto__;
if(cljs.core.truth_(ns.startsWith("xmlns."))){
return clojure.data.xml.name.decode_uri.call(null,cljs.core.subs.call(null,ns,(6)));
} else {
var G__47430 = ns;
switch (G__47430) {
case "xmlns":
return clojure.data.xml.name.xmlns_uri;

break;
case "xml":
return clojure.data.xml.name.xml_uri;

break;
default:
throw cljs.core.ex_info.call(null,"Keyword ns is not an xmlns. Needs to be in the form :xmlns.<encoded-uri>/<local>",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kw","kw",1158308175),kw__$1], null));

}
}
} else {
return "";
}
}));
clojure.data.xml.name.as_qname = (function clojure$data$xml$name$as_qname(n){
return clojure.data.xml.name.qname.call(null,clojure.data.xml.name.qname_uri.call(null,n),clojure.data.xml.name.qname_local.call(null,n));
});
/**
 * Dummy file name for :require'ing xmlns uri
 */
clojure.data.xml.name.uri_file = (function clojure$data$xml$name$uri_file(uri){
return [clojure.string.replace.call(null,cljs.core.name.call(null,clojure.data.xml.name.uri_symbol.call(null,uri)),".","/"),".cljc"].join('');
});
/**
 * Shell command to create a dummy file for xmlns. Execute from a source root.
 */
clojure.data.xml.name.print_uri_file_command_BANG_ = (function clojure$data$xml$name$print_uri_file_command_BANG_(uri){
return cljs.core.println.call(null,"echo \"(ns",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.name.uri_symbol.call(null,uri)),")\" >"].join(''),clojure.data.xml.name.uri_file.call(null,uri));
});
/**
 * Is this qname an xmlns declaration?
 */
clojure.data.xml.name.xmlns_attr_QMARK_ = (function clojure$data$xml$name$xmlns_attr_QMARK_(qn){
var uri = clojure.data.xml.name.qname_uri.call(null,qn);
return ((cljs.core._EQ_.call(null,clojure.data.xml.name.xmlns_uri,uri)) || (((clojure.string.blank_QMARK_.call(null,uri)) && (cljs.core._EQ_.call(null,"xmlns",clojure.data.xml.name.qname_local.call(null,qn))))));
});
clojure.data.xml.name.xmlns_attr_prefix = (function clojure$data$xml$name$xmlns_attr_prefix(qn){
var uri = clojure.data.xml.name.qname_uri.call(null,qn);
if(clojure.string.blank_QMARK_.call(null,uri)){
if(cljs.core._EQ_.call(null,"xmlns",clojure.data.xml.name.qname_local.call(null,qn))){
} else {
throw cljs.core.ex_info.call(null,"Not an xmlns-attr name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qname","qname",-1983612179),qn], null));
}

return "";
} else {
if(cljs.core._EQ_.call(null,clojure.data.xml.name.xmlns_uri,uri)){
} else {
throw cljs.core.ex_info.call(null,"Not an xmlns-attr name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qname","qname",-1983612179),qn], null));
}

return clojure.data.xml.name.qname_local.call(null,qn);
}
});
clojure.data.xml.name.legal_xmlns_binding_BANG_ = (function clojure$data$xml$name$legal_xmlns_binding_BANG_(prefix,uri){
if(cljs.core.not_EQ_.call(null,cljs.core._EQ_.call(null,"xml",prefix),cljs.core._EQ_.call(null,clojure.data.xml.name.xml_uri,uri))){
throw cljs.core.ex_info.call(null,["The xmlns binding for prefix `xml` is fixed to `",clojure.data.xml.name.xml_uri,"`"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attempted-mapping","attempted-mapping",1862354839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"uri","uri",-774711847),uri], null)], null));
} else {
}

if(cljs.core.not_EQ_.call(null,cljs.core._EQ_.call(null,"xmlns",prefix),cljs.core._EQ_.call(null,clojure.data.xml.name.xmlns_uri,uri))){
throw cljs.core.ex_info.call(null,["The xmlns binding for prefix `xmlns` is fixed to `",clojure.data.xml.name.xmlns_uri,"`"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attempted-mapping","attempted-mapping",1862354839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"uri","uri",-774711847),uri], null)], null));
} else {
return null;
}
});
/**
 * Call cont with two args: attributes and xmlns attributes
 */
clojure.data.xml.name.separate_xmlns = (function clojure$data$xml$name$separate_xmlns(attrs,cont){
var attrs_STAR_ = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var xmlns_STAR_ = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__47435 = cljs.core.keys.call(null,attrs);
var vec__47436 = G__47435;
var qn = cljs.core.nth.call(null,vec__47436,(0),null);
var attrs_SINGLEQUOTE_ = vec__47436;
var attrs_STAR___$1 = attrs_STAR_;
var xmlns_STAR___$1 = xmlns_STAR_;
var G__47435__$1 = G__47435;
while(true){
var attrs_STAR___$2 = attrs_STAR___$1;
var xmlns_STAR___$2 = xmlns_STAR___$1;
var vec__47442 = G__47435__$1;
var qn__$1 = cljs.core.nth.call(null,vec__47442,(0),null);
var attrs_SINGLEQUOTE___$1 = vec__47442;
if(cljs.core.seq.call(null,attrs_SINGLEQUOTE___$1)){
var val = cljs.core.get.call(null,attrs,qn__$1);
if(clojure.data.xml.name.xmlns_attr_QMARK_.call(null,qn__$1)){
var prefix = clojure.data.xml.name.xmlns_attr_prefix.call(null,qn__$1);
clojure.data.xml.name.legal_xmlns_binding_BANG_.call(null,prefix,val);

var G__47445 = attrs_STAR___$2;
var G__47446 = cljs.core.assoc_BANG_.call(null,xmlns_STAR___$2,prefix,val);
var G__47447 = cljs.core.next.call(null,attrs_SINGLEQUOTE___$1);
attrs_STAR___$1 = G__47445;
xmlns_STAR___$1 = G__47446;
G__47435__$1 = G__47447;
continue;
} else {
var G__47448 = cljs.core.assoc_BANG_.call(null,attrs_STAR___$2,qn__$1,val);
var G__47449 = xmlns_STAR___$2;
var G__47450 = cljs.core.next.call(null,attrs_SINGLEQUOTE___$1);
attrs_STAR___$1 = G__47448;
xmlns_STAR___$1 = G__47449;
G__47435__$1 = G__47450;
continue;
}
} else {
return cont.call(null,cljs.core.persistent_BANG_.call(null,attrs_STAR___$2),cljs.core.persistent_BANG_.call(null,xmlns_STAR___$2));
}
break;
}
});
clojure.data.xml.name.prefix_alphabet = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,String.fromCharCode,cljs.core.range.call(null,"a".charCodeAt((0)),("z".charCodeAt((0)) + (1)))));
/**
 * Generates an xml prefix.
 * Zero-arity can only be called, when *gen-prefix-counter* is bound and will increment it.
 */
clojure.data.xml.name.gen_prefix = (function clojure$data$xml$name$gen_prefix(var_args){
var G__47452 = arguments.length;
switch (G__47452) {
case 0:
return clojure.data.xml.name.gen_prefix.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.data.xml.name.gen_prefix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.xml.name.gen_prefix.cljs$core$IFn$_invoke$arity$0 = (function (){
var c = clojure.data.xml.name._STAR_gen_prefix_counter_STAR_;
if((void 0 === c)){
throw cljs.core.ex_info.call(null,"Not bound: *gen-prefix-counter*",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Var(function(){return clojure.data.xml.name._STAR_gen_prefix_counter_STAR_;},new cljs.core.Symbol("clojure.data.xml.name","*gen-prefix-counter*","clojure.data.xml.name/*gen-prefix-counter*",499226926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Symbol(null,"*gen-prefix-counter*","*gen-prefix-counter*",1689494762,null),"target/public/cljs-out/prod/clojure/data/xml/name.cljc",23,1,true,188,190,cljs.core.List.EMPTY,"Thread local counter for a single document",(cljs.core.truth_(clojure.data.xml.name._STAR_gen_prefix_counter_STAR_)?clojure.data.xml.name._STAR_gen_prefix_counter_STAR_.cljs$lang$test:null)]))], null));
} else {
}

(clojure.data.xml.name._STAR_gen_prefix_counter_STAR_ = (c + (1)));

return clojure.data.xml.name.gen_prefix.call(null,c);
}));

(clojure.data.xml.name.gen_prefix.cljs$core$IFn$_invoke$arity$1 = (function (n){
var cnt = clojure.data.xml.name.prefix_alphabet.length;
var sb = (new goog.string.StringBuffer());
var n_STAR_ = n;
while(true){
var ch = cljs.core.mod.call(null,n_STAR_,cnt);
var n_STAR__STAR_ = cljs.core.quot.call(null,n_STAR_,cnt);
sb.append((clojure.data.xml.name.prefix_alphabet[ch]));

if((n_STAR__STAR_ > (0))){
var G__47454 = n_STAR__STAR_;
n_STAR_ = G__47454;
continue;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}
break;
}
}));

(clojure.data.xml.name.gen_prefix.cljs$lang$maxFixedArity = 1);

