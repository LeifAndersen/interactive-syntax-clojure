// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
goog.require('goog.object');
goog.scope(function(){
cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__41370){
var vec__41371 = p__41370;
var i = cljs.core.nth.call(null,vec__41371,(0),null);
var v = cljs.core.nth.call(null,vec__41371,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__41374 = seg;
var gcol = cljs.core.nth.call(null,vec__41374,(0),null);
var source = cljs.core.nth.call(null,vec__41374,(1),null);
var line = cljs.core.nth.call(null,vec__41374,(2),null);
var col = cljs.core.nth.call(null,vec__41374,(3),null);
var name = cljs.core.nth.call(null,vec__41374,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (cljs.source_map.goog$module$goog$object.get.call(null,source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__41377 = seg;
var gcol = cljs.core.nth.call(null,vec__41377,(0),null);
var source = cljs.core.nth.call(null,vec__41377,(1),null);
var line = cljs.core.nth.call(null,vec__41377,(2),null);
var col = cljs.core.nth.call(null,vec__41377,(3),null);
var name = cljs.core.nth.call(null,vec__41377,(4),null);
var vec__41380 = relseg;
var rgcol = cljs.core.nth.call(null,vec__41380,(0),null);
var rsource = cljs.core.nth.call(null,vec__41380,(1),null);
var rline = cljs.core.nth.call(null,vec__41380,(2),null);
var rcol = cljs.core.nth.call(null,vec__41380,(3),null);
var rname = cljs.core.nth.call(null,vec__41380,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__20754__auto__ = source;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__20754__auto__ = line;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__20754__auto__ = col;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__20754__auto__ = name;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__41383 = segmap;
var map__41383__$1 = cljs.core.__destructure_map.call(null,map__41383);
var gcol = cljs.core.get.call(null,map__41383__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__41383__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__41383__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__41383__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__41383__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__41385 = arguments.length;
switch (G__41385) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__41389 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__41393 = cljs.core.next.call(null,segs__$1);
var G__41394 = nrelseg;
var G__41395 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__41393;
relseg__$1 = G__41394;
result__$1 = G__41395;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__41389,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__41389,(1),null);
var G__41396 = (gline + (1));
var G__41397 = cljs.core.next.call(null,lines__$1);
var G__41398 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__41399 = result__$1;
gline = G__41396;
lines__$1 = G__41397;
relseg = G__41398;
result = G__41399;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__41401 = segmap;
var map__41401__$1 = cljs.core.__destructure_map.call(null,map__41401);
var gcol = cljs.core.get.call(null,map__41401__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__41401__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__41401__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__41401__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__41401__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__41400_SHARP_){
return cljs.core.conj.call(null,p1__41400_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__41403 = arguments.length;
switch (G__41403) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__41407 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__41411 = cljs.core.next.call(null,segs__$1);
var G__41412 = nrelseg;
var G__41413 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__41411;
relseg__$1 = G__41412;
result__$1 = G__41413;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__41407,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__41407,(1),null);
var G__41414 = (gline + (1));
var G__41415 = cljs.core.next.call(null,lines__$1);
var G__41416 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__41417 = result__$1;
gline = G__41414;
lines__$1 = G__41415;
relseg = G__41416;
result = G__41417;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__41418){
var vec__41419 = p__41418;
var _ = cljs.core.nth.call(null,vec__41419,(0),null);
var source = cljs.core.nth.call(null,vec__41419,(1),null);
var line = cljs.core.nth.call(null,vec__41419,(2),null);
var col = cljs.core.nth.call(null,vec__41419,(3),null);
var name = cljs.core.nth.call(null,vec__41419,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__41422){
var vec__41423 = p__41422;
var gcol = cljs.core.nth.call(null,vec__41423,(0),null);
var sidx = cljs.core.nth.call(null,vec__41423,(1),null);
var line = cljs.core.nth.call(null,vec__41423,(2),null);
var col = cljs.core.nth.call(null,vec__41423,(3),null);
var name = cljs.core.nth.call(null,vec__41423,(4),null);
var seg = vec__41423;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__41426){
var vec__41427 = p__41426;
var _ = cljs.core.nth.call(null,vec__41427,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41427,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__41427,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__41427,(3),null);
var lname = cljs.core.nth.call(null,vec__41427,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__20754__auto__ = name;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__41433 = cljs.core.seq.call(null,infos);
var chunk__41434 = null;
var count__41435 = (0);
var i__41436 = (0);
while(true){
if((i__41436 < count__41435)){
var info = cljs.core._nth.call(null,chunk__41434,i__41436);
var segv_41787 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_41788 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_41789 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_41788 > (lc_41789 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__41433,chunk__41434,count__41435,i__41436,segv_41787,gline_41788,lc_41789,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_41788 - (lc_41789 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_41787], null));
});})(seq__41433,chunk__41434,count__41435,i__41436,segv_41787,gline_41788,lc_41789,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__41433,chunk__41434,count__41435,i__41436,segv_41787,gline_41788,lc_41789,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_41788], null),cljs.core.conj,segv_41787);
});})(seq__41433,chunk__41434,count__41435,i__41436,segv_41787,gline_41788,lc_41789,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__41790 = seq__41433;
var G__41791 = chunk__41434;
var G__41792 = count__41435;
var G__41793 = (i__41436 + (1));
seq__41433 = G__41790;
chunk__41434 = G__41791;
count__41435 = G__41792;
i__41436 = G__41793;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41433);
if(temp__5720__auto__){
var seq__41433__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41433__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__41433__$1);
var G__41794 = cljs.core.chunk_rest.call(null,seq__41433__$1);
var G__41795 = c__21725__auto__;
var G__41796 = cljs.core.count.call(null,c__21725__auto__);
var G__41797 = (0);
seq__41433 = G__41794;
chunk__41434 = G__41795;
count__41435 = G__41796;
i__41436 = G__41797;
continue;
} else {
var info = cljs.core.first.call(null,seq__41433__$1);
var segv_41798 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_41799 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_41800 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_41799 > (lc_41800 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__41433,chunk__41434,count__41435,i__41436,segv_41798,gline_41799,lc_41800,info,seq__41433__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_41799 - (lc_41800 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_41798], null));
});})(seq__41433,chunk__41434,count__41435,i__41436,segv_41798,gline_41799,lc_41800,info,seq__41433__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__41433,chunk__41434,count__41435,i__41436,segv_41798,gline_41799,lc_41800,info,seq__41433__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_41799], null),cljs.core.conj,segv_41798);
});})(seq__41433,chunk__41434,count__41435,i__41436,segv_41798,gline_41799,lc_41800,info,seq__41433__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__41801 = cljs.core.next.call(null,seq__41433__$1);
var G__41802 = null;
var G__41803 = (0);
var G__41804 = (0);
seq__41433 = G__41801;
chunk__41434 = G__41802;
count__41435 = G__41803;
i__41436 = G__41804;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__41437_41805 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__41438_41806 = null;
var count__41439_41807 = (0);
var i__41440_41808 = (0);
while(true){
if((i__41440_41808 < count__41439_41807)){
var vec__41613_41809 = cljs.core._nth.call(null,chunk__41438_41806,i__41440_41808);
var source_idx_41810 = cljs.core.nth.call(null,vec__41613_41809,(0),null);
var vec__41616_41811 = cljs.core.nth.call(null,vec__41613_41809,(1),null);
var __41812 = cljs.core.nth.call(null,vec__41616_41811,(0),null);
var lines_41813__$1 = cljs.core.nth.call(null,vec__41616_41811,(1),null);
var seq__41619_41814 = cljs.core.seq.call(null,lines_41813__$1);
var chunk__41620_41815 = null;
var count__41621_41816 = (0);
var i__41622_41817 = (0);
while(true){
if((i__41622_41817 < count__41621_41816)){
var vec__41661_41818 = cljs.core._nth.call(null,chunk__41620_41815,i__41622_41817);
var line_41819 = cljs.core.nth.call(null,vec__41661_41818,(0),null);
var cols_41820 = cljs.core.nth.call(null,vec__41661_41818,(1),null);
var seq__41664_41821 = cljs.core.seq.call(null,cols_41820);
var chunk__41665_41822 = null;
var count__41666_41823 = (0);
var i__41667_41824 = (0);
while(true){
if((i__41667_41824 < count__41666_41823)){
var vec__41674_41825 = cljs.core._nth.call(null,chunk__41665_41822,i__41667_41824);
var col_41826 = cljs.core.nth.call(null,vec__41674_41825,(0),null);
var infos_41827 = cljs.core.nth.call(null,vec__41674_41825,(1),null);
encode_cols.call(null,infos_41827,source_idx_41810,line_41819,col_41826);


var G__41828 = seq__41664_41821;
var G__41829 = chunk__41665_41822;
var G__41830 = count__41666_41823;
var G__41831 = (i__41667_41824 + (1));
seq__41664_41821 = G__41828;
chunk__41665_41822 = G__41829;
count__41666_41823 = G__41830;
i__41667_41824 = G__41831;
continue;
} else {
var temp__5720__auto___41832 = cljs.core.seq.call(null,seq__41664_41821);
if(temp__5720__auto___41832){
var seq__41664_41833__$1 = temp__5720__auto___41832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41664_41833__$1)){
var c__21725__auto___41834 = cljs.core.chunk_first.call(null,seq__41664_41833__$1);
var G__41835 = cljs.core.chunk_rest.call(null,seq__41664_41833__$1);
var G__41836 = c__21725__auto___41834;
var G__41837 = cljs.core.count.call(null,c__21725__auto___41834);
var G__41838 = (0);
seq__41664_41821 = G__41835;
chunk__41665_41822 = G__41836;
count__41666_41823 = G__41837;
i__41667_41824 = G__41838;
continue;
} else {
var vec__41677_41839 = cljs.core.first.call(null,seq__41664_41833__$1);
var col_41840 = cljs.core.nth.call(null,vec__41677_41839,(0),null);
var infos_41841 = cljs.core.nth.call(null,vec__41677_41839,(1),null);
encode_cols.call(null,infos_41841,source_idx_41810,line_41819,col_41840);


var G__41842 = cljs.core.next.call(null,seq__41664_41833__$1);
var G__41843 = null;
var G__41844 = (0);
var G__41845 = (0);
seq__41664_41821 = G__41842;
chunk__41665_41822 = G__41843;
count__41666_41823 = G__41844;
i__41667_41824 = G__41845;
continue;
}
} else {
}
}
break;
}


var G__41846 = seq__41619_41814;
var G__41847 = chunk__41620_41815;
var G__41848 = count__41621_41816;
var G__41849 = (i__41622_41817 + (1));
seq__41619_41814 = G__41846;
chunk__41620_41815 = G__41847;
count__41621_41816 = G__41848;
i__41622_41817 = G__41849;
continue;
} else {
var temp__5720__auto___41850 = cljs.core.seq.call(null,seq__41619_41814);
if(temp__5720__auto___41850){
var seq__41619_41851__$1 = temp__5720__auto___41850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41619_41851__$1)){
var c__21725__auto___41852 = cljs.core.chunk_first.call(null,seq__41619_41851__$1);
var G__41853 = cljs.core.chunk_rest.call(null,seq__41619_41851__$1);
var G__41854 = c__21725__auto___41852;
var G__41855 = cljs.core.count.call(null,c__21725__auto___41852);
var G__41856 = (0);
seq__41619_41814 = G__41853;
chunk__41620_41815 = G__41854;
count__41621_41816 = G__41855;
i__41622_41817 = G__41856;
continue;
} else {
var vec__41680_41857 = cljs.core.first.call(null,seq__41619_41851__$1);
var line_41858 = cljs.core.nth.call(null,vec__41680_41857,(0),null);
var cols_41859 = cljs.core.nth.call(null,vec__41680_41857,(1),null);
var seq__41683_41860 = cljs.core.seq.call(null,cols_41859);
var chunk__41684_41861 = null;
var count__41685_41862 = (0);
var i__41686_41863 = (0);
while(true){
if((i__41686_41863 < count__41685_41862)){
var vec__41693_41864 = cljs.core._nth.call(null,chunk__41684_41861,i__41686_41863);
var col_41865 = cljs.core.nth.call(null,vec__41693_41864,(0),null);
var infos_41866 = cljs.core.nth.call(null,vec__41693_41864,(1),null);
encode_cols.call(null,infos_41866,source_idx_41810,line_41858,col_41865);


var G__41867 = seq__41683_41860;
var G__41868 = chunk__41684_41861;
var G__41869 = count__41685_41862;
var G__41870 = (i__41686_41863 + (1));
seq__41683_41860 = G__41867;
chunk__41684_41861 = G__41868;
count__41685_41862 = G__41869;
i__41686_41863 = G__41870;
continue;
} else {
var temp__5720__auto___41871__$1 = cljs.core.seq.call(null,seq__41683_41860);
if(temp__5720__auto___41871__$1){
var seq__41683_41872__$1 = temp__5720__auto___41871__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41683_41872__$1)){
var c__21725__auto___41873 = cljs.core.chunk_first.call(null,seq__41683_41872__$1);
var G__41874 = cljs.core.chunk_rest.call(null,seq__41683_41872__$1);
var G__41875 = c__21725__auto___41873;
var G__41876 = cljs.core.count.call(null,c__21725__auto___41873);
var G__41877 = (0);
seq__41683_41860 = G__41874;
chunk__41684_41861 = G__41875;
count__41685_41862 = G__41876;
i__41686_41863 = G__41877;
continue;
} else {
var vec__41696_41878 = cljs.core.first.call(null,seq__41683_41872__$1);
var col_41879 = cljs.core.nth.call(null,vec__41696_41878,(0),null);
var infos_41880 = cljs.core.nth.call(null,vec__41696_41878,(1),null);
encode_cols.call(null,infos_41880,source_idx_41810,line_41858,col_41879);


var G__41881 = cljs.core.next.call(null,seq__41683_41872__$1);
var G__41882 = null;
var G__41883 = (0);
var G__41884 = (0);
seq__41683_41860 = G__41881;
chunk__41684_41861 = G__41882;
count__41685_41862 = G__41883;
i__41686_41863 = G__41884;
continue;
}
} else {
}
}
break;
}


var G__41885 = cljs.core.next.call(null,seq__41619_41851__$1);
var G__41886 = null;
var G__41887 = (0);
var G__41888 = (0);
seq__41619_41814 = G__41885;
chunk__41620_41815 = G__41886;
count__41621_41816 = G__41887;
i__41622_41817 = G__41888;
continue;
}
} else {
}
}
break;
}


var G__41889 = seq__41437_41805;
var G__41890 = chunk__41438_41806;
var G__41891 = count__41439_41807;
var G__41892 = (i__41440_41808 + (1));
seq__41437_41805 = G__41889;
chunk__41438_41806 = G__41890;
count__41439_41807 = G__41891;
i__41440_41808 = G__41892;
continue;
} else {
var temp__5720__auto___41893 = cljs.core.seq.call(null,seq__41437_41805);
if(temp__5720__auto___41893){
var seq__41437_41894__$1 = temp__5720__auto___41893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41437_41894__$1)){
var c__21725__auto___41895 = cljs.core.chunk_first.call(null,seq__41437_41894__$1);
var G__41896 = cljs.core.chunk_rest.call(null,seq__41437_41894__$1);
var G__41897 = c__21725__auto___41895;
var G__41898 = cljs.core.count.call(null,c__21725__auto___41895);
var G__41899 = (0);
seq__41437_41805 = G__41896;
chunk__41438_41806 = G__41897;
count__41439_41807 = G__41898;
i__41440_41808 = G__41899;
continue;
} else {
var vec__41699_41900 = cljs.core.first.call(null,seq__41437_41894__$1);
var source_idx_41901 = cljs.core.nth.call(null,vec__41699_41900,(0),null);
var vec__41702_41902 = cljs.core.nth.call(null,vec__41699_41900,(1),null);
var __41903 = cljs.core.nth.call(null,vec__41702_41902,(0),null);
var lines_41904__$1 = cljs.core.nth.call(null,vec__41702_41902,(1),null);
var seq__41705_41905 = cljs.core.seq.call(null,lines_41904__$1);
var chunk__41706_41906 = null;
var count__41707_41907 = (0);
var i__41708_41908 = (0);
while(true){
if((i__41708_41908 < count__41707_41907)){
var vec__41747_41909 = cljs.core._nth.call(null,chunk__41706_41906,i__41708_41908);
var line_41910 = cljs.core.nth.call(null,vec__41747_41909,(0),null);
var cols_41911 = cljs.core.nth.call(null,vec__41747_41909,(1),null);
var seq__41750_41912 = cljs.core.seq.call(null,cols_41911);
var chunk__41751_41913 = null;
var count__41752_41914 = (0);
var i__41753_41915 = (0);
while(true){
if((i__41753_41915 < count__41752_41914)){
var vec__41760_41916 = cljs.core._nth.call(null,chunk__41751_41913,i__41753_41915);
var col_41917 = cljs.core.nth.call(null,vec__41760_41916,(0),null);
var infos_41918 = cljs.core.nth.call(null,vec__41760_41916,(1),null);
encode_cols.call(null,infos_41918,source_idx_41901,line_41910,col_41917);


var G__41919 = seq__41750_41912;
var G__41920 = chunk__41751_41913;
var G__41921 = count__41752_41914;
var G__41922 = (i__41753_41915 + (1));
seq__41750_41912 = G__41919;
chunk__41751_41913 = G__41920;
count__41752_41914 = G__41921;
i__41753_41915 = G__41922;
continue;
} else {
var temp__5720__auto___41923__$1 = cljs.core.seq.call(null,seq__41750_41912);
if(temp__5720__auto___41923__$1){
var seq__41750_41924__$1 = temp__5720__auto___41923__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41750_41924__$1)){
var c__21725__auto___41925 = cljs.core.chunk_first.call(null,seq__41750_41924__$1);
var G__41926 = cljs.core.chunk_rest.call(null,seq__41750_41924__$1);
var G__41927 = c__21725__auto___41925;
var G__41928 = cljs.core.count.call(null,c__21725__auto___41925);
var G__41929 = (0);
seq__41750_41912 = G__41926;
chunk__41751_41913 = G__41927;
count__41752_41914 = G__41928;
i__41753_41915 = G__41929;
continue;
} else {
var vec__41763_41930 = cljs.core.first.call(null,seq__41750_41924__$1);
var col_41931 = cljs.core.nth.call(null,vec__41763_41930,(0),null);
var infos_41932 = cljs.core.nth.call(null,vec__41763_41930,(1),null);
encode_cols.call(null,infos_41932,source_idx_41901,line_41910,col_41931);


var G__41933 = cljs.core.next.call(null,seq__41750_41924__$1);
var G__41934 = null;
var G__41935 = (0);
var G__41936 = (0);
seq__41750_41912 = G__41933;
chunk__41751_41913 = G__41934;
count__41752_41914 = G__41935;
i__41753_41915 = G__41936;
continue;
}
} else {
}
}
break;
}


var G__41937 = seq__41705_41905;
var G__41938 = chunk__41706_41906;
var G__41939 = count__41707_41907;
var G__41940 = (i__41708_41908 + (1));
seq__41705_41905 = G__41937;
chunk__41706_41906 = G__41938;
count__41707_41907 = G__41939;
i__41708_41908 = G__41940;
continue;
} else {
var temp__5720__auto___41941__$1 = cljs.core.seq.call(null,seq__41705_41905);
if(temp__5720__auto___41941__$1){
var seq__41705_41942__$1 = temp__5720__auto___41941__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41705_41942__$1)){
var c__21725__auto___41943 = cljs.core.chunk_first.call(null,seq__41705_41942__$1);
var G__41944 = cljs.core.chunk_rest.call(null,seq__41705_41942__$1);
var G__41945 = c__21725__auto___41943;
var G__41946 = cljs.core.count.call(null,c__21725__auto___41943);
var G__41947 = (0);
seq__41705_41905 = G__41944;
chunk__41706_41906 = G__41945;
count__41707_41907 = G__41946;
i__41708_41908 = G__41947;
continue;
} else {
var vec__41766_41948 = cljs.core.first.call(null,seq__41705_41942__$1);
var line_41949 = cljs.core.nth.call(null,vec__41766_41948,(0),null);
var cols_41950 = cljs.core.nth.call(null,vec__41766_41948,(1),null);
var seq__41769_41951 = cljs.core.seq.call(null,cols_41950);
var chunk__41770_41952 = null;
var count__41771_41953 = (0);
var i__41772_41954 = (0);
while(true){
if((i__41772_41954 < count__41771_41953)){
var vec__41779_41955 = cljs.core._nth.call(null,chunk__41770_41952,i__41772_41954);
var col_41956 = cljs.core.nth.call(null,vec__41779_41955,(0),null);
var infos_41957 = cljs.core.nth.call(null,vec__41779_41955,(1),null);
encode_cols.call(null,infos_41957,source_idx_41901,line_41949,col_41956);


var G__41958 = seq__41769_41951;
var G__41959 = chunk__41770_41952;
var G__41960 = count__41771_41953;
var G__41961 = (i__41772_41954 + (1));
seq__41769_41951 = G__41958;
chunk__41770_41952 = G__41959;
count__41771_41953 = G__41960;
i__41772_41954 = G__41961;
continue;
} else {
var temp__5720__auto___41962__$2 = cljs.core.seq.call(null,seq__41769_41951);
if(temp__5720__auto___41962__$2){
var seq__41769_41963__$1 = temp__5720__auto___41962__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41769_41963__$1)){
var c__21725__auto___41964 = cljs.core.chunk_first.call(null,seq__41769_41963__$1);
var G__41965 = cljs.core.chunk_rest.call(null,seq__41769_41963__$1);
var G__41966 = c__21725__auto___41964;
var G__41967 = cljs.core.count.call(null,c__21725__auto___41964);
var G__41968 = (0);
seq__41769_41951 = G__41965;
chunk__41770_41952 = G__41966;
count__41771_41953 = G__41967;
i__41772_41954 = G__41968;
continue;
} else {
var vec__41782_41969 = cljs.core.first.call(null,seq__41769_41963__$1);
var col_41970 = cljs.core.nth.call(null,vec__41782_41969,(0),null);
var infos_41971 = cljs.core.nth.call(null,vec__41782_41969,(1),null);
encode_cols.call(null,infos_41971,source_idx_41901,line_41949,col_41970);


var G__41972 = cljs.core.next.call(null,seq__41769_41963__$1);
var G__41973 = null;
var G__41974 = (0);
var G__41975 = (0);
seq__41769_41951 = G__41972;
chunk__41770_41952 = G__41973;
count__41771_41953 = G__41974;
i__41772_41954 = G__41975;
continue;
}
} else {
}
}
break;
}


var G__41976 = cljs.core.next.call(null,seq__41705_41942__$1);
var G__41977 = null;
var G__41978 = (0);
var G__41979 = (0);
seq__41705_41905 = G__41976;
chunk__41706_41906 = G__41977;
count__41707_41907 = G__41978;
i__41708_41908 = G__41979;
continue;
}
} else {
}
}
break;
}


var G__41980 = cljs.core.next.call(null,seq__41437_41894__$1);
var G__41981 = null;
var G__41982 = (0);
var G__41983 = (0);
seq__41437_41805 = G__41980;
chunk__41438_41806 = G__41981;
count__41439_41807 = G__41982;
i__41440_41808 = G__41983;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__41785 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__41430_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41430_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__41431_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__41431_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__41432_SHARP_){
return clojure.string.join.call(null,",",p1__41432_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__41786 = G__41785;
cljs.source_map.goog$module$goog$object.set.call(null,G__41786,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__41786;
} else {
return G__41785;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__41984 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__41984,(0),null);
var col_map = cljs.core.nth.call(null,vec__41984,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__41987 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__41987,(0),null);
var infos = cljs.core.nth.call(null,vec__41987,(1),null);
var G__41992 = cljs.core.next.call(null,col_map_seq);
var G__41993 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__41987,col,infos,vec__41984,line,col_map){
return (function (v,p__41990){
var map__41991 = p__41990;
var map__41991__$1 = cljs.core.__destructure_map.call(null,map__41991);
var gline = cljs.core.get.call(null,map__41991__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__41991__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__41987,col,infos,vec__41984,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__41992;
new_cols = G__41993;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__41994 = cljs.core.next.call(null,line_map_seq);
var G__41995 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__41994;
new_lines = G__41995;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__41996_42204 = cljs.core.seq.call(null,reverse_map);
var chunk__41997_42205 = null;
var count__41998_42206 = (0);
var i__41999_42207 = (0);
while(true){
if((i__41999_42207 < count__41998_42206)){
var vec__42102_42208 = cljs.core._nth.call(null,chunk__41997_42205,i__41999_42207);
var line_42209 = cljs.core.nth.call(null,vec__42102_42208,(0),null);
var columns_42210 = cljs.core.nth.call(null,vec__42102_42208,(1),null);
var seq__42105_42211 = cljs.core.seq.call(null,columns_42210);
var chunk__42106_42212 = null;
var count__42107_42213 = (0);
var i__42108_42214 = (0);
while(true){
if((i__42108_42214 < count__42107_42213)){
var vec__42131_42215 = cljs.core._nth.call(null,chunk__42106_42212,i__42108_42214);
var column_42216 = cljs.core.nth.call(null,vec__42131_42215,(0),null);
var column_info_42217 = cljs.core.nth.call(null,vec__42131_42215,(1),null);
var seq__42134_42218 = cljs.core.seq.call(null,column_info_42217);
var chunk__42135_42219 = null;
var count__42136_42220 = (0);
var i__42137_42221 = (0);
while(true){
if((i__42137_42221 < count__42136_42220)){
var map__42140_42222 = cljs.core._nth.call(null,chunk__42135_42219,i__42137_42221);
var map__42140_42223__$1 = cljs.core.__destructure_map.call(null,map__42140_42222);
var gline_42224 = cljs.core.get.call(null,map__42140_42223__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42225 = cljs.core.get.call(null,map__42140_42223__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42226 = cljs.core.get.call(null,map__42140_42223__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42224], null),cljs.core.fnil.call(null,((function (seq__42134_42218,chunk__42135_42219,count__42136_42220,i__42137_42221,seq__42105_42211,chunk__42106_42212,count__42107_42213,i__42108_42214,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42140_42222,map__42140_42223__$1,gline_42224,gcol_42225,name_42226,vec__42131_42215,column_42216,column_info_42217,vec__42102_42208,line_42209,columns_42210,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42225], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42209,new cljs.core.Keyword(null,"col","col",-1959363084),column_42216,new cljs.core.Keyword(null,"name","name",1843675177),name_42226], null));
});})(seq__42134_42218,chunk__42135_42219,count__42136_42220,i__42137_42221,seq__42105_42211,chunk__42106_42212,count__42107_42213,i__42108_42214,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42140_42222,map__42140_42223__$1,gline_42224,gcol_42225,name_42226,vec__42131_42215,column_42216,column_info_42217,vec__42102_42208,line_42209,columns_42210,inverted))
,cljs.core.sorted_map.call(null)));


var G__42227 = seq__42134_42218;
var G__42228 = chunk__42135_42219;
var G__42229 = count__42136_42220;
var G__42230 = (i__42137_42221 + (1));
seq__42134_42218 = G__42227;
chunk__42135_42219 = G__42228;
count__42136_42220 = G__42229;
i__42137_42221 = G__42230;
continue;
} else {
var temp__5720__auto___42231 = cljs.core.seq.call(null,seq__42134_42218);
if(temp__5720__auto___42231){
var seq__42134_42232__$1 = temp__5720__auto___42231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42134_42232__$1)){
var c__21725__auto___42233 = cljs.core.chunk_first.call(null,seq__42134_42232__$1);
var G__42234 = cljs.core.chunk_rest.call(null,seq__42134_42232__$1);
var G__42235 = c__21725__auto___42233;
var G__42236 = cljs.core.count.call(null,c__21725__auto___42233);
var G__42237 = (0);
seq__42134_42218 = G__42234;
chunk__42135_42219 = G__42235;
count__42136_42220 = G__42236;
i__42137_42221 = G__42237;
continue;
} else {
var map__42141_42238 = cljs.core.first.call(null,seq__42134_42232__$1);
var map__42141_42239__$1 = cljs.core.__destructure_map.call(null,map__42141_42238);
var gline_42240 = cljs.core.get.call(null,map__42141_42239__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42241 = cljs.core.get.call(null,map__42141_42239__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42242 = cljs.core.get.call(null,map__42141_42239__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42240], null),cljs.core.fnil.call(null,((function (seq__42134_42218,chunk__42135_42219,count__42136_42220,i__42137_42221,seq__42105_42211,chunk__42106_42212,count__42107_42213,i__42108_42214,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42141_42238,map__42141_42239__$1,gline_42240,gcol_42241,name_42242,seq__42134_42232__$1,temp__5720__auto___42231,vec__42131_42215,column_42216,column_info_42217,vec__42102_42208,line_42209,columns_42210,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42241], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42209,new cljs.core.Keyword(null,"col","col",-1959363084),column_42216,new cljs.core.Keyword(null,"name","name",1843675177),name_42242], null));
});})(seq__42134_42218,chunk__42135_42219,count__42136_42220,i__42137_42221,seq__42105_42211,chunk__42106_42212,count__42107_42213,i__42108_42214,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42141_42238,map__42141_42239__$1,gline_42240,gcol_42241,name_42242,seq__42134_42232__$1,temp__5720__auto___42231,vec__42131_42215,column_42216,column_info_42217,vec__42102_42208,line_42209,columns_42210,inverted))
,cljs.core.sorted_map.call(null)));


var G__42243 = cljs.core.next.call(null,seq__42134_42232__$1);
var G__42244 = null;
var G__42245 = (0);
var G__42246 = (0);
seq__42134_42218 = G__42243;
chunk__42135_42219 = G__42244;
count__42136_42220 = G__42245;
i__42137_42221 = G__42246;
continue;
}
} else {
}
}
break;
}


var G__42247 = seq__42105_42211;
var G__42248 = chunk__42106_42212;
var G__42249 = count__42107_42213;
var G__42250 = (i__42108_42214 + (1));
seq__42105_42211 = G__42247;
chunk__42106_42212 = G__42248;
count__42107_42213 = G__42249;
i__42108_42214 = G__42250;
continue;
} else {
var temp__5720__auto___42251 = cljs.core.seq.call(null,seq__42105_42211);
if(temp__5720__auto___42251){
var seq__42105_42252__$1 = temp__5720__auto___42251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42105_42252__$1)){
var c__21725__auto___42253 = cljs.core.chunk_first.call(null,seq__42105_42252__$1);
var G__42254 = cljs.core.chunk_rest.call(null,seq__42105_42252__$1);
var G__42255 = c__21725__auto___42253;
var G__42256 = cljs.core.count.call(null,c__21725__auto___42253);
var G__42257 = (0);
seq__42105_42211 = G__42254;
chunk__42106_42212 = G__42255;
count__42107_42213 = G__42256;
i__42108_42214 = G__42257;
continue;
} else {
var vec__42142_42258 = cljs.core.first.call(null,seq__42105_42252__$1);
var column_42259 = cljs.core.nth.call(null,vec__42142_42258,(0),null);
var column_info_42260 = cljs.core.nth.call(null,vec__42142_42258,(1),null);
var seq__42145_42261 = cljs.core.seq.call(null,column_info_42260);
var chunk__42146_42262 = null;
var count__42147_42263 = (0);
var i__42148_42264 = (0);
while(true){
if((i__42148_42264 < count__42147_42263)){
var map__42151_42265 = cljs.core._nth.call(null,chunk__42146_42262,i__42148_42264);
var map__42151_42266__$1 = cljs.core.__destructure_map.call(null,map__42151_42265);
var gline_42267 = cljs.core.get.call(null,map__42151_42266__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42268 = cljs.core.get.call(null,map__42151_42266__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42269 = cljs.core.get.call(null,map__42151_42266__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42267], null),cljs.core.fnil.call(null,((function (seq__42145_42261,chunk__42146_42262,count__42147_42263,i__42148_42264,seq__42105_42211,chunk__42106_42212,count__42107_42213,i__42108_42214,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42151_42265,map__42151_42266__$1,gline_42267,gcol_42268,name_42269,vec__42142_42258,column_42259,column_info_42260,seq__42105_42252__$1,temp__5720__auto___42251,vec__42102_42208,line_42209,columns_42210,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42268], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42209,new cljs.core.Keyword(null,"col","col",-1959363084),column_42259,new cljs.core.Keyword(null,"name","name",1843675177),name_42269], null));
});})(seq__42145_42261,chunk__42146_42262,count__42147_42263,i__42148_42264,seq__42105_42211,chunk__42106_42212,count__42107_42213,i__42108_42214,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42151_42265,map__42151_42266__$1,gline_42267,gcol_42268,name_42269,vec__42142_42258,column_42259,column_info_42260,seq__42105_42252__$1,temp__5720__auto___42251,vec__42102_42208,line_42209,columns_42210,inverted))
,cljs.core.sorted_map.call(null)));


var G__42270 = seq__42145_42261;
var G__42271 = chunk__42146_42262;
var G__42272 = count__42147_42263;
var G__42273 = (i__42148_42264 + (1));
seq__42145_42261 = G__42270;
chunk__42146_42262 = G__42271;
count__42147_42263 = G__42272;
i__42148_42264 = G__42273;
continue;
} else {
var temp__5720__auto___42274__$1 = cljs.core.seq.call(null,seq__42145_42261);
if(temp__5720__auto___42274__$1){
var seq__42145_42275__$1 = temp__5720__auto___42274__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42145_42275__$1)){
var c__21725__auto___42276 = cljs.core.chunk_first.call(null,seq__42145_42275__$1);
var G__42277 = cljs.core.chunk_rest.call(null,seq__42145_42275__$1);
var G__42278 = c__21725__auto___42276;
var G__42279 = cljs.core.count.call(null,c__21725__auto___42276);
var G__42280 = (0);
seq__42145_42261 = G__42277;
chunk__42146_42262 = G__42278;
count__42147_42263 = G__42279;
i__42148_42264 = G__42280;
continue;
} else {
var map__42152_42281 = cljs.core.first.call(null,seq__42145_42275__$1);
var map__42152_42282__$1 = cljs.core.__destructure_map.call(null,map__42152_42281);
var gline_42283 = cljs.core.get.call(null,map__42152_42282__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42284 = cljs.core.get.call(null,map__42152_42282__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42285 = cljs.core.get.call(null,map__42152_42282__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42283], null),cljs.core.fnil.call(null,((function (seq__42145_42261,chunk__42146_42262,count__42147_42263,i__42148_42264,seq__42105_42211,chunk__42106_42212,count__42107_42213,i__42108_42214,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42152_42281,map__42152_42282__$1,gline_42283,gcol_42284,name_42285,seq__42145_42275__$1,temp__5720__auto___42274__$1,vec__42142_42258,column_42259,column_info_42260,seq__42105_42252__$1,temp__5720__auto___42251,vec__42102_42208,line_42209,columns_42210,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42284], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42209,new cljs.core.Keyword(null,"col","col",-1959363084),column_42259,new cljs.core.Keyword(null,"name","name",1843675177),name_42285], null));
});})(seq__42145_42261,chunk__42146_42262,count__42147_42263,i__42148_42264,seq__42105_42211,chunk__42106_42212,count__42107_42213,i__42108_42214,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42152_42281,map__42152_42282__$1,gline_42283,gcol_42284,name_42285,seq__42145_42275__$1,temp__5720__auto___42274__$1,vec__42142_42258,column_42259,column_info_42260,seq__42105_42252__$1,temp__5720__auto___42251,vec__42102_42208,line_42209,columns_42210,inverted))
,cljs.core.sorted_map.call(null)));


var G__42286 = cljs.core.next.call(null,seq__42145_42275__$1);
var G__42287 = null;
var G__42288 = (0);
var G__42289 = (0);
seq__42145_42261 = G__42286;
chunk__42146_42262 = G__42287;
count__42147_42263 = G__42288;
i__42148_42264 = G__42289;
continue;
}
} else {
}
}
break;
}


var G__42290 = cljs.core.next.call(null,seq__42105_42252__$1);
var G__42291 = null;
var G__42292 = (0);
var G__42293 = (0);
seq__42105_42211 = G__42290;
chunk__42106_42212 = G__42291;
count__42107_42213 = G__42292;
i__42108_42214 = G__42293;
continue;
}
} else {
}
}
break;
}


var G__42294 = seq__41996_42204;
var G__42295 = chunk__41997_42205;
var G__42296 = count__41998_42206;
var G__42297 = (i__41999_42207 + (1));
seq__41996_42204 = G__42294;
chunk__41997_42205 = G__42295;
count__41998_42206 = G__42296;
i__41999_42207 = G__42297;
continue;
} else {
var temp__5720__auto___42298 = cljs.core.seq.call(null,seq__41996_42204);
if(temp__5720__auto___42298){
var seq__41996_42299__$1 = temp__5720__auto___42298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41996_42299__$1)){
var c__21725__auto___42300 = cljs.core.chunk_first.call(null,seq__41996_42299__$1);
var G__42301 = cljs.core.chunk_rest.call(null,seq__41996_42299__$1);
var G__42302 = c__21725__auto___42300;
var G__42303 = cljs.core.count.call(null,c__21725__auto___42300);
var G__42304 = (0);
seq__41996_42204 = G__42301;
chunk__41997_42205 = G__42302;
count__41998_42206 = G__42303;
i__41999_42207 = G__42304;
continue;
} else {
var vec__42153_42305 = cljs.core.first.call(null,seq__41996_42299__$1);
var line_42306 = cljs.core.nth.call(null,vec__42153_42305,(0),null);
var columns_42307 = cljs.core.nth.call(null,vec__42153_42305,(1),null);
var seq__42156_42308 = cljs.core.seq.call(null,columns_42307);
var chunk__42157_42309 = null;
var count__42158_42310 = (0);
var i__42159_42311 = (0);
while(true){
if((i__42159_42311 < count__42158_42310)){
var vec__42182_42312 = cljs.core._nth.call(null,chunk__42157_42309,i__42159_42311);
var column_42313 = cljs.core.nth.call(null,vec__42182_42312,(0),null);
var column_info_42314 = cljs.core.nth.call(null,vec__42182_42312,(1),null);
var seq__42185_42315 = cljs.core.seq.call(null,column_info_42314);
var chunk__42186_42316 = null;
var count__42187_42317 = (0);
var i__42188_42318 = (0);
while(true){
if((i__42188_42318 < count__42187_42317)){
var map__42191_42319 = cljs.core._nth.call(null,chunk__42186_42316,i__42188_42318);
var map__42191_42320__$1 = cljs.core.__destructure_map.call(null,map__42191_42319);
var gline_42321 = cljs.core.get.call(null,map__42191_42320__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42322 = cljs.core.get.call(null,map__42191_42320__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42323 = cljs.core.get.call(null,map__42191_42320__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42321], null),cljs.core.fnil.call(null,((function (seq__42185_42315,chunk__42186_42316,count__42187_42317,i__42188_42318,seq__42156_42308,chunk__42157_42309,count__42158_42310,i__42159_42311,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42191_42319,map__42191_42320__$1,gline_42321,gcol_42322,name_42323,vec__42182_42312,column_42313,column_info_42314,vec__42153_42305,line_42306,columns_42307,seq__41996_42299__$1,temp__5720__auto___42298,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42322], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42306,new cljs.core.Keyword(null,"col","col",-1959363084),column_42313,new cljs.core.Keyword(null,"name","name",1843675177),name_42323], null));
});})(seq__42185_42315,chunk__42186_42316,count__42187_42317,i__42188_42318,seq__42156_42308,chunk__42157_42309,count__42158_42310,i__42159_42311,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42191_42319,map__42191_42320__$1,gline_42321,gcol_42322,name_42323,vec__42182_42312,column_42313,column_info_42314,vec__42153_42305,line_42306,columns_42307,seq__41996_42299__$1,temp__5720__auto___42298,inverted))
,cljs.core.sorted_map.call(null)));


var G__42324 = seq__42185_42315;
var G__42325 = chunk__42186_42316;
var G__42326 = count__42187_42317;
var G__42327 = (i__42188_42318 + (1));
seq__42185_42315 = G__42324;
chunk__42186_42316 = G__42325;
count__42187_42317 = G__42326;
i__42188_42318 = G__42327;
continue;
} else {
var temp__5720__auto___42328__$1 = cljs.core.seq.call(null,seq__42185_42315);
if(temp__5720__auto___42328__$1){
var seq__42185_42329__$1 = temp__5720__auto___42328__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42185_42329__$1)){
var c__21725__auto___42330 = cljs.core.chunk_first.call(null,seq__42185_42329__$1);
var G__42331 = cljs.core.chunk_rest.call(null,seq__42185_42329__$1);
var G__42332 = c__21725__auto___42330;
var G__42333 = cljs.core.count.call(null,c__21725__auto___42330);
var G__42334 = (0);
seq__42185_42315 = G__42331;
chunk__42186_42316 = G__42332;
count__42187_42317 = G__42333;
i__42188_42318 = G__42334;
continue;
} else {
var map__42192_42335 = cljs.core.first.call(null,seq__42185_42329__$1);
var map__42192_42336__$1 = cljs.core.__destructure_map.call(null,map__42192_42335);
var gline_42337 = cljs.core.get.call(null,map__42192_42336__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42338 = cljs.core.get.call(null,map__42192_42336__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42339 = cljs.core.get.call(null,map__42192_42336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42337], null),cljs.core.fnil.call(null,((function (seq__42185_42315,chunk__42186_42316,count__42187_42317,i__42188_42318,seq__42156_42308,chunk__42157_42309,count__42158_42310,i__42159_42311,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42192_42335,map__42192_42336__$1,gline_42337,gcol_42338,name_42339,seq__42185_42329__$1,temp__5720__auto___42328__$1,vec__42182_42312,column_42313,column_info_42314,vec__42153_42305,line_42306,columns_42307,seq__41996_42299__$1,temp__5720__auto___42298,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42338], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42306,new cljs.core.Keyword(null,"col","col",-1959363084),column_42313,new cljs.core.Keyword(null,"name","name",1843675177),name_42339], null));
});})(seq__42185_42315,chunk__42186_42316,count__42187_42317,i__42188_42318,seq__42156_42308,chunk__42157_42309,count__42158_42310,i__42159_42311,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42192_42335,map__42192_42336__$1,gline_42337,gcol_42338,name_42339,seq__42185_42329__$1,temp__5720__auto___42328__$1,vec__42182_42312,column_42313,column_info_42314,vec__42153_42305,line_42306,columns_42307,seq__41996_42299__$1,temp__5720__auto___42298,inverted))
,cljs.core.sorted_map.call(null)));


var G__42340 = cljs.core.next.call(null,seq__42185_42329__$1);
var G__42341 = null;
var G__42342 = (0);
var G__42343 = (0);
seq__42185_42315 = G__42340;
chunk__42186_42316 = G__42341;
count__42187_42317 = G__42342;
i__42188_42318 = G__42343;
continue;
}
} else {
}
}
break;
}


var G__42344 = seq__42156_42308;
var G__42345 = chunk__42157_42309;
var G__42346 = count__42158_42310;
var G__42347 = (i__42159_42311 + (1));
seq__42156_42308 = G__42344;
chunk__42157_42309 = G__42345;
count__42158_42310 = G__42346;
i__42159_42311 = G__42347;
continue;
} else {
var temp__5720__auto___42348__$1 = cljs.core.seq.call(null,seq__42156_42308);
if(temp__5720__auto___42348__$1){
var seq__42156_42349__$1 = temp__5720__auto___42348__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42156_42349__$1)){
var c__21725__auto___42350 = cljs.core.chunk_first.call(null,seq__42156_42349__$1);
var G__42351 = cljs.core.chunk_rest.call(null,seq__42156_42349__$1);
var G__42352 = c__21725__auto___42350;
var G__42353 = cljs.core.count.call(null,c__21725__auto___42350);
var G__42354 = (0);
seq__42156_42308 = G__42351;
chunk__42157_42309 = G__42352;
count__42158_42310 = G__42353;
i__42159_42311 = G__42354;
continue;
} else {
var vec__42193_42355 = cljs.core.first.call(null,seq__42156_42349__$1);
var column_42356 = cljs.core.nth.call(null,vec__42193_42355,(0),null);
var column_info_42357 = cljs.core.nth.call(null,vec__42193_42355,(1),null);
var seq__42196_42358 = cljs.core.seq.call(null,column_info_42357);
var chunk__42197_42359 = null;
var count__42198_42360 = (0);
var i__42199_42361 = (0);
while(true){
if((i__42199_42361 < count__42198_42360)){
var map__42202_42362 = cljs.core._nth.call(null,chunk__42197_42359,i__42199_42361);
var map__42202_42363__$1 = cljs.core.__destructure_map.call(null,map__42202_42362);
var gline_42364 = cljs.core.get.call(null,map__42202_42363__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42365 = cljs.core.get.call(null,map__42202_42363__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42366 = cljs.core.get.call(null,map__42202_42363__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42364], null),cljs.core.fnil.call(null,((function (seq__42196_42358,chunk__42197_42359,count__42198_42360,i__42199_42361,seq__42156_42308,chunk__42157_42309,count__42158_42310,i__42159_42311,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42202_42362,map__42202_42363__$1,gline_42364,gcol_42365,name_42366,vec__42193_42355,column_42356,column_info_42357,seq__42156_42349__$1,temp__5720__auto___42348__$1,vec__42153_42305,line_42306,columns_42307,seq__41996_42299__$1,temp__5720__auto___42298,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42365], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42306,new cljs.core.Keyword(null,"col","col",-1959363084),column_42356,new cljs.core.Keyword(null,"name","name",1843675177),name_42366], null));
});})(seq__42196_42358,chunk__42197_42359,count__42198_42360,i__42199_42361,seq__42156_42308,chunk__42157_42309,count__42158_42310,i__42159_42311,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42202_42362,map__42202_42363__$1,gline_42364,gcol_42365,name_42366,vec__42193_42355,column_42356,column_info_42357,seq__42156_42349__$1,temp__5720__auto___42348__$1,vec__42153_42305,line_42306,columns_42307,seq__41996_42299__$1,temp__5720__auto___42298,inverted))
,cljs.core.sorted_map.call(null)));


var G__42367 = seq__42196_42358;
var G__42368 = chunk__42197_42359;
var G__42369 = count__42198_42360;
var G__42370 = (i__42199_42361 + (1));
seq__42196_42358 = G__42367;
chunk__42197_42359 = G__42368;
count__42198_42360 = G__42369;
i__42199_42361 = G__42370;
continue;
} else {
var temp__5720__auto___42371__$2 = cljs.core.seq.call(null,seq__42196_42358);
if(temp__5720__auto___42371__$2){
var seq__42196_42372__$1 = temp__5720__auto___42371__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42196_42372__$1)){
var c__21725__auto___42373 = cljs.core.chunk_first.call(null,seq__42196_42372__$1);
var G__42374 = cljs.core.chunk_rest.call(null,seq__42196_42372__$1);
var G__42375 = c__21725__auto___42373;
var G__42376 = cljs.core.count.call(null,c__21725__auto___42373);
var G__42377 = (0);
seq__42196_42358 = G__42374;
chunk__42197_42359 = G__42375;
count__42198_42360 = G__42376;
i__42199_42361 = G__42377;
continue;
} else {
var map__42203_42378 = cljs.core.first.call(null,seq__42196_42372__$1);
var map__42203_42379__$1 = cljs.core.__destructure_map.call(null,map__42203_42378);
var gline_42380 = cljs.core.get.call(null,map__42203_42379__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_42381 = cljs.core.get.call(null,map__42203_42379__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_42382 = cljs.core.get.call(null,map__42203_42379__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_42380], null),cljs.core.fnil.call(null,((function (seq__42196_42358,chunk__42197_42359,count__42198_42360,i__42199_42361,seq__42156_42308,chunk__42157_42309,count__42158_42310,i__42159_42311,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42203_42378,map__42203_42379__$1,gline_42380,gcol_42381,name_42382,seq__42196_42372__$1,temp__5720__auto___42371__$2,vec__42193_42355,column_42356,column_info_42357,seq__42156_42349__$1,temp__5720__auto___42348__$1,vec__42153_42305,line_42306,columns_42307,seq__41996_42299__$1,temp__5720__auto___42298,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_42381], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_42306,new cljs.core.Keyword(null,"col","col",-1959363084),column_42356,new cljs.core.Keyword(null,"name","name",1843675177),name_42382], null));
});})(seq__42196_42358,chunk__42197_42359,count__42198_42360,i__42199_42361,seq__42156_42308,chunk__42157_42309,count__42158_42310,i__42159_42311,seq__41996_42204,chunk__41997_42205,count__41998_42206,i__41999_42207,map__42203_42378,map__42203_42379__$1,gline_42380,gcol_42381,name_42382,seq__42196_42372__$1,temp__5720__auto___42371__$2,vec__42193_42355,column_42356,column_info_42357,seq__42156_42349__$1,temp__5720__auto___42348__$1,vec__42153_42305,line_42306,columns_42307,seq__41996_42299__$1,temp__5720__auto___42298,inverted))
,cljs.core.sorted_map.call(null)));


var G__42383 = cljs.core.next.call(null,seq__42196_42372__$1);
var G__42384 = null;
var G__42385 = (0);
var G__42386 = (0);
seq__42196_42358 = G__42383;
chunk__42197_42359 = G__42384;
count__42198_42360 = G__42385;
i__42199_42361 = G__42386;
continue;
}
} else {
}
}
break;
}


var G__42387 = cljs.core.next.call(null,seq__42156_42349__$1);
var G__42388 = null;
var G__42389 = (0);
var G__42390 = (0);
seq__42156_42308 = G__42387;
chunk__42157_42309 = G__42388;
count__42158_42310 = G__42389;
i__42159_42311 = G__42390;
continue;
}
} else {
}
}
break;
}


var G__42391 = cljs.core.next.call(null,seq__41996_42299__$1);
var G__42392 = null;
var G__42393 = (0);
var G__42394 = (0);
seq__41996_42204 = G__42391;
chunk__41997_42205 = G__42392;
count__41998_42206 = G__42393;
i__41999_42207 = G__42394;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});
