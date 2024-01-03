// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return req.call(null,"xmlhttprequest").XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__47875,handler){
var map__47876 = p__47875;
var map__47876__$1 = cljs.core.__destructure_map.call(null,map__47876);
var uri = cljs.core.get.call(null,map__47876__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__47876__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__47876__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__47876__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__47876__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__47876__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__47876__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__47874_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__47874_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5720__auto___47893 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___47893)){
var response_type_47894 = temp__5720__auto___47893;
(this$__$1.responseType = cljs.core.name.call(null,response_type_47894));
} else {
}

var seq__47877_47895 = cljs.core.seq.call(null,headers);
var chunk__47878_47896 = null;
var count__47879_47897 = (0);
var i__47880_47898 = (0);
while(true){
if((i__47880_47898 < count__47879_47897)){
var vec__47887_47899 = cljs.core._nth.call(null,chunk__47878_47896,i__47880_47898);
var k_47900 = cljs.core.nth.call(null,vec__47887_47899,(0),null);
var v_47901 = cljs.core.nth.call(null,vec__47887_47899,(1),null);
this$__$1.setRequestHeader(k_47900,v_47901);


var G__47902 = seq__47877_47895;
var G__47903 = chunk__47878_47896;
var G__47904 = count__47879_47897;
var G__47905 = (i__47880_47898 + (1));
seq__47877_47895 = G__47902;
chunk__47878_47896 = G__47903;
count__47879_47897 = G__47904;
i__47880_47898 = G__47905;
continue;
} else {
var temp__5720__auto___47906 = cljs.core.seq.call(null,seq__47877_47895);
if(temp__5720__auto___47906){
var seq__47877_47907__$1 = temp__5720__auto___47906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47877_47907__$1)){
var c__21725__auto___47908 = cljs.core.chunk_first.call(null,seq__47877_47907__$1);
var G__47909 = cljs.core.chunk_rest.call(null,seq__47877_47907__$1);
var G__47910 = c__21725__auto___47908;
var G__47911 = cljs.core.count.call(null,c__21725__auto___47908);
var G__47912 = (0);
seq__47877_47895 = G__47909;
chunk__47878_47896 = G__47910;
count__47879_47897 = G__47911;
i__47880_47898 = G__47912;
continue;
} else {
var vec__47890_47913 = cljs.core.first.call(null,seq__47877_47907__$1);
var k_47914 = cljs.core.nth.call(null,vec__47890_47913,(0),null);
var v_47915 = cljs.core.nth.call(null,vec__47890_47913,(1),null);
this$__$1.setRequestHeader(k_47914,v_47915);


var G__47916 = cljs.core.next.call(null,seq__47877_47907__$1);
var G__47917 = null;
var G__47918 = (0);
var G__47919 = (0);
seq__47877_47895 = G__47916;
chunk__47878_47896 = G__47917;
count__47879_47897 = G__47918;
i__47880_47898 = G__47919;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__20754__auto__ = body;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));
