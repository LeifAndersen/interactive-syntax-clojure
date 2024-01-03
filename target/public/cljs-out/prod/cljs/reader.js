// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.scope(function(){
cljs.reader.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s))){
return s;
} else {
if((width < cljs.core.count.call(null,s))){
return cljs.core.subs.call(null,s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__31322 = b.append("0");
b = G__31322;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_.call(null,num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_.call(null,year,(4))) && (((cljs.reader.indivisible_QMARK_.call(null,year,(100))) || (cljs.reader.divisible_QMARK_.call(null,year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return (function (month,leap_year_QMARK_){
return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__31323 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__31323,(0),null);
var years = cljs.core.nth.call(null,vec__31323,(1),null);
var months = cljs.core.nth.call(null,vec__31323,(2),null);
var days = cljs.core.nth.call(null,vec__31323,(3),null);
var hours = cljs.core.nth.call(null,vec__31323,(4),null);
var minutes = cljs.core.nth.call(null,vec__31323,(5),null);
var seconds = cljs.core.nth.call(null,vec__31323,(6),null);
var fraction = cljs.core.nth.call(null,vec__31323,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__31323,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__31323,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__31323,(10),null);
var v = vec__31323;
if(cljs.core.not.call(null,v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__20754__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__20754__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__20754__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__20754__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__20754__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__20754__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__20754__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__20754__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5718__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__31326 = temp__5718__auto__;
var years = cljs.core.nth.call(null,vec__31326,(0),null);
var months = cljs.core.nth.call(null,vec__31326,(1),null);
var days = cljs.core.nth.call(null,vec__31326,(2),null);
var hours = cljs.core.nth.call(null,vec__31326,(3),null);
var minutes = cljs.core.nth.call(null,vec__31326,(4),null);
var seconds = cljs.core.nth.call(null,vec__31326,(5),null);
var ms = cljs.core.nth.call(null,vec__31326,(6),null);
var offset = cljs.core.nth.call(null,vec__31326,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp.call(null,s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems)){
return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_.call(null,form)){
var arr = [];
var seq__31329_31351 = cljs.core.seq.call(null,form);
var chunk__31330_31352 = null;
var count__31331_31353 = (0);
var i__31332_31354 = (0);
while(true){
if((i__31332_31354 < count__31331_31353)){
var x_31355 = cljs.core._nth.call(null,chunk__31330_31352,i__31332_31354);
arr.push(x_31355);


var G__31356 = seq__31329_31351;
var G__31357 = chunk__31330_31352;
var G__31358 = count__31331_31353;
var G__31359 = (i__31332_31354 + (1));
seq__31329_31351 = G__31356;
chunk__31330_31352 = G__31357;
count__31331_31353 = G__31358;
i__31332_31354 = G__31359;
continue;
} else {
var temp__5720__auto___31360 = cljs.core.seq.call(null,seq__31329_31351);
if(temp__5720__auto___31360){
var seq__31329_31361__$1 = temp__5720__auto___31360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31329_31361__$1)){
var c__21725__auto___31362 = cljs.core.chunk_first.call(null,seq__31329_31361__$1);
var G__31363 = cljs.core.chunk_rest.call(null,seq__31329_31361__$1);
var G__31364 = c__21725__auto___31362;
var G__31365 = cljs.core.count.call(null,c__21725__auto___31362);
var G__31366 = (0);
seq__31329_31351 = G__31363;
chunk__31330_31352 = G__31364;
count__31331_31353 = G__31365;
i__31332_31354 = G__31366;
continue;
} else {
var x_31367 = cljs.core.first.call(null,seq__31329_31361__$1);
arr.push(x_31367);


var G__31368 = cljs.core.next.call(null,seq__31329_31361__$1);
var G__31369 = null;
var G__31370 = (0);
var G__31371 = (0);
seq__31329_31351 = G__31368;
chunk__31330_31352 = G__31369;
count__31331_31353 = G__31370;
i__31332_31354 = G__31371;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
var obj = ({});
var seq__31335_31372 = cljs.core.seq.call(null,form);
var chunk__31336_31373 = null;
var count__31337_31374 = (0);
var i__31338_31375 = (0);
while(true){
if((i__31338_31375 < count__31337_31374)){
var vec__31345_31376 = cljs.core._nth.call(null,chunk__31336_31373,i__31338_31375);
var k_31377 = cljs.core.nth.call(null,vec__31345_31376,(0),null);
var v_31378 = cljs.core.nth.call(null,vec__31345_31376,(1),null);
cljs.reader.goog$module$goog$object.set.call(null,obj,cljs.core.name.call(null,k_31377),v_31378);


var G__31379 = seq__31335_31372;
var G__31380 = chunk__31336_31373;
var G__31381 = count__31337_31374;
var G__31382 = (i__31338_31375 + (1));
seq__31335_31372 = G__31379;
chunk__31336_31373 = G__31380;
count__31337_31374 = G__31381;
i__31338_31375 = G__31382;
continue;
} else {
var temp__5720__auto___31383 = cljs.core.seq.call(null,seq__31335_31372);
if(temp__5720__auto___31383){
var seq__31335_31384__$1 = temp__5720__auto___31383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31335_31384__$1)){
var c__21725__auto___31385 = cljs.core.chunk_first.call(null,seq__31335_31384__$1);
var G__31386 = cljs.core.chunk_rest.call(null,seq__31335_31384__$1);
var G__31387 = c__21725__auto___31385;
var G__31388 = cljs.core.count.call(null,c__21725__auto___31385);
var G__31389 = (0);
seq__31335_31372 = G__31386;
chunk__31336_31373 = G__31387;
count__31337_31374 = G__31388;
i__31338_31375 = G__31389;
continue;
} else {
var vec__31348_31390 = cljs.core.first.call(null,seq__31335_31384__$1);
var k_31391 = cljs.core.nth.call(null,vec__31348_31390,(0),null);
var v_31392 = cljs.core.nth.call(null,vec__31348_31390,(1),null);
cljs.reader.goog$module$goog$object.set.call(null,obj,cljs.core.name.call(null,k_31391),v_31392);


var G__31393 = cljs.core.next.call(null,seq__31335_31384__$1);
var G__31394 = null;
var G__31395 = (0);
var G__31396 = (0);
seq__31335_31372 = G__31393;
chunk__31336_31373 = G__31394;
count__31337_31374 = G__31395;
i__31338_31375 = G__31396;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid.call(null,uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("xml","ns","xml/ns",2080676230,null),(function (x__31308__auto__){
return clojure.data.xml.name.uri_symbol(x__31308__auto__);
}),new cljs.core.Symbol("xml","element","xml/element",-680371045,null),(function (x__31308__auto__){
return clojure.data.xml.node.tagged_element(x__31308__auto__);
}),new cljs.core.Symbol(null,"foo","foo",-1385541733,null),(function (x__31308__auto__){
return demo.browser.read_foo(x__31308__auto__);
})], null)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__31398 = arguments.length;
switch (G__31398) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__31399,reader){
var map__31400 = p__31399;
var map__31400__$1 = cljs.core.__destructure_map.call(null,map__31400);
var opts = map__31400__$1;
var eof = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})));
}));

(cljs.reader.read.cljs$lang$maxFixedArity = 4);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__31403 = arguments.length;
switch (G__31403) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})),s);
}));

(cljs.reader.read_string.cljs$lang$maxFixedArity = 2);

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return f;
}));

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return null;
}));

return old_parser;
});
