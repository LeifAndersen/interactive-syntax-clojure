// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.impl');
goog.require('cljs.env');
goog.require('cljs.source_map');
goog.require('cljs.tools.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__42413 = s;
var map__42413__$1 = cljs.core.__destructure_map.call(null,map__42413);
var name = cljs.core.get.call(null,map__42413__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__42413__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__42415 = info;
var map__42416 = G__42415;
var map__42416__$1 = cljs.core.__destructure_map.call(null,map__42416);
var shadow = cljs.core.get.call(null,map__42416__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__42415__$1 = G__42415;
while(true){
var d__$2 = d__$1;
var map__42418 = G__42415__$1;
var map__42418__$1 = cljs.core.__destructure_map.call(null,map__42418);
var shadow__$1 = cljs.core.get.call(null,map__42418__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__42419 = (d__$2 + (1));
var G__42420 = shadow__$1;
d__$1 = G__42419;
G__42415__$1 = G__42420;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__42421){
var map__42422 = p__42421;
var map__42422__$1 = cljs.core.__destructure_map.call(null,map__42422);
var name_var = map__42422__$1;
var name = cljs.core.get.call(null,map__42422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__42422__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__42423 = info;
var map__42423__$1 = cljs.core.__destructure_map.call(null,map__42423);
var ns = cljs.core.get.call(null,map__42423__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__42423__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__42425 = arguments.length;
switch (G__42425) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11807,11807,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__42427 = cp;
switch (G__42427) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__42429_42433 = cljs.core.seq.call(null,s);
var chunk__42430_42434 = null;
var count__42431_42435 = (0);
var i__42432_42436 = (0);
while(true){
if((i__42432_42436 < count__42431_42435)){
var c_42437 = cljs.core._nth.call(null,chunk__42430_42434,i__42432_42436);
sb.append(cljs.compiler.escape_char.call(null,c_42437));


var G__42438 = seq__42429_42433;
var G__42439 = chunk__42430_42434;
var G__42440 = count__42431_42435;
var G__42441 = (i__42432_42436 + (1));
seq__42429_42433 = G__42438;
chunk__42430_42434 = G__42439;
count__42431_42435 = G__42440;
i__42432_42436 = G__42441;
continue;
} else {
var temp__5720__auto___42442 = cljs.core.seq.call(null,seq__42429_42433);
if(temp__5720__auto___42442){
var seq__42429_42443__$1 = temp__5720__auto___42442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42429_42443__$1)){
var c__21725__auto___42444 = cljs.core.chunk_first.call(null,seq__42429_42443__$1);
var G__42445 = cljs.core.chunk_rest.call(null,seq__42429_42443__$1);
var G__42446 = c__21725__auto___42444;
var G__42447 = cljs.core.count.call(null,c__21725__auto___42444);
var G__42448 = (0);
seq__42429_42433 = G__42445;
chunk__42430_42434 = G__42446;
count__42431_42435 = G__42447;
i__42432_42436 = G__42448;
continue;
} else {
var c_42449 = cljs.core.first.call(null,seq__42429_42443__$1);
sb.append(cljs.compiler.escape_char.call(null,c_42449));


var G__42450 = cljs.core.next.call(null,seq__42429_42443__$1);
var G__42451 = null;
var G__42452 = (0);
var G__42453 = (0);
seq__42429_42433 = G__42450;
chunk__42430_42434 = G__42451;
count__42431_42435 = G__42452;
i__42432_42436 = G__42453;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__21851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21854__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21855__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21855__auto__,method_table__21851__auto__,prefer_table__21852__auto__,method_cache__21853__auto__,cached_hierarchy__21854__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__42454_42457 = ast;
var map__42454_42458__$1 = cljs.core.__destructure_map.call(null,map__42454_42457);
var env_42459 = cljs.core.get.call(null,map__42454_42458__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_42459))){
var map__42455_42460 = env_42459;
var map__42455_42461__$1 = cljs.core.__destructure_map.call(null,map__42455_42460);
var line_42462 = cljs.core.get.call(null,map__42455_42461__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42463 = cljs.core.get.call(null,map__42455_42461__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__42456 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__42456,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__42456;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_42462 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_42463)?(column_42463 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__42472 = arguments.length;
switch (G__42472) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__22111__auto__ = [];
var len__22082__auto___42479 = arguments.length;
var i__22083__auto___42480 = (0);
while(true){
if((i__22083__auto___42480 < len__22082__auto___42479)){
args_arr__22111__auto__.push((arguments[i__22083__auto___42480]));

var G__42481 = (i__22083__auto___42480 + (1));
i__22083__auto___42480 = G__42481;
continue;
} else {
}
break;
}

var argseq__22112__auto__ = ((((5) < args_arr__22111__auto__.length))?(new cljs.core.IndexedSeq(args_arr__22111__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__22112__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
a.call(null);
} else {
var s_42482 = (function (){var G__42473 = a;
if((!(typeof a === 'string'))){
return G__42473.toString();
} else {
return G__42473;
}
})();
var temp__5724__auto___42483 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___42483 == null)){
} else {
var sm_data_42484 = temp__5724__auto___42483;
cljs.core.swap_BANG_.call(null,sm_data_42484,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__42464_SHARP_){
return (p1__42464_SHARP_ + s_42482.length);
}));
}

cljs.core.print.call(null,s_42482);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__42474 = cljs.core.seq.call(null,xs);
var chunk__42475 = null;
var count__42476 = (0);
var i__42477 = (0);
while(true){
if((i__42477 < count__42476)){
var x = cljs.core._nth.call(null,chunk__42475,i__42477);
cljs.compiler.emits.call(null,x);


var G__42485 = seq__42474;
var G__42486 = chunk__42475;
var G__42487 = count__42476;
var G__42488 = (i__42477 + (1));
seq__42474 = G__42485;
chunk__42475 = G__42486;
count__42476 = G__42487;
i__42477 = G__42488;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42474);
if(temp__5720__auto__){
var seq__42474__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42474__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__42474__$1);
var G__42489 = cljs.core.chunk_rest.call(null,seq__42474__$1);
var G__42490 = c__21725__auto__;
var G__42491 = cljs.core.count.call(null,c__21725__auto__);
var G__42492 = (0);
seq__42474 = G__42489;
chunk__42475 = G__42490;
count__42476 = G__42491;
i__42477 = G__42492;
continue;
} else {
var x = cljs.core.first.call(null,seq__42474__$1);
cljs.compiler.emits.call(null,x);


var G__42493 = cljs.core.next.call(null,seq__42474__$1);
var G__42494 = null;
var G__42495 = (0);
var G__42496 = (0);
seq__42474 = G__42493;
chunk__42475 = G__42494;
count__42476 = G__42495;
i__42477 = G__42496;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq42466){
var G__42467 = cljs.core.first.call(null,seq42466);
var seq42466__$1 = cljs.core.next.call(null,seq42466);
var G__42468 = cljs.core.first.call(null,seq42466__$1);
var seq42466__$2 = cljs.core.next.call(null,seq42466__$1);
var G__42469 = cljs.core.first.call(null,seq42466__$2);
var seq42466__$3 = cljs.core.next.call(null,seq42466__$2);
var G__42470 = cljs.core.first.call(null,seq42466__$3);
var seq42466__$4 = cljs.core.next.call(null,seq42466__$3);
var G__42471 = cljs.core.first.call(null,seq42466__$4);
var seq42466__$5 = cljs.core.next.call(null,seq42466__$4);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42467,G__42468,G__42469,G__42470,G__42471,seq42466__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__42497){
var map__42498 = p__42497;
var map__42498__$1 = cljs.core.__destructure_map.call(null,map__42498);
var m = map__42498__$1;
var gen_line = cljs.core.get.call(null,map__42498__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__42506 = arguments.length;
switch (G__42506) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__22111__auto__ = [];
var len__22082__auto___42512 = arguments.length;
var i__22083__auto___42513 = (0);
while(true){
if((i__22083__auto___42513 < len__22082__auto___42512)){
args_arr__22111__auto__.push((arguments[i__22083__auto___42513]));

var G__42514 = (i__22083__auto___42513 + (1));
i__22083__auto___42513 = G__42514;
continue;
} else {
}
break;
}

var argseq__22112__auto__ = ((((5) < args_arr__22111__auto__.length))?(new cljs.core.IndexedSeq(args_arr__22111__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__22112__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__42507_42515 = cljs.core.seq.call(null,xs);
var chunk__42508_42516 = null;
var count__42509_42517 = (0);
var i__42510_42518 = (0);
while(true){
if((i__42510_42518 < count__42509_42517)){
var x_42519 = cljs.core._nth.call(null,chunk__42508_42516,i__42510_42518);
cljs.compiler.emits.call(null,x_42519);


var G__42520 = seq__42507_42515;
var G__42521 = chunk__42508_42516;
var G__42522 = count__42509_42517;
var G__42523 = (i__42510_42518 + (1));
seq__42507_42515 = G__42520;
chunk__42508_42516 = G__42521;
count__42509_42517 = G__42522;
i__42510_42518 = G__42523;
continue;
} else {
var temp__5720__auto___42524 = cljs.core.seq.call(null,seq__42507_42515);
if(temp__5720__auto___42524){
var seq__42507_42525__$1 = temp__5720__auto___42524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42507_42525__$1)){
var c__21725__auto___42526 = cljs.core.chunk_first.call(null,seq__42507_42525__$1);
var G__42527 = cljs.core.chunk_rest.call(null,seq__42507_42525__$1);
var G__42528 = c__21725__auto___42526;
var G__42529 = cljs.core.count.call(null,c__21725__auto___42526);
var G__42530 = (0);
seq__42507_42515 = G__42527;
chunk__42508_42516 = G__42528;
count__42509_42517 = G__42529;
i__42510_42518 = G__42530;
continue;
} else {
var x_42531 = cljs.core.first.call(null,seq__42507_42525__$1);
cljs.compiler.emits.call(null,x_42531);


var G__42532 = cljs.core.next.call(null,seq__42507_42525__$1);
var G__42533 = null;
var G__42534 = (0);
var G__42535 = (0);
seq__42507_42515 = G__42532;
chunk__42508_42516 = G__42533;
count__42509_42517 = G__42534;
i__42510_42518 = G__42535;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq42500){
var G__42501 = cljs.core.first.call(null,seq42500);
var seq42500__$1 = cljs.core.next.call(null,seq42500);
var G__42502 = cljs.core.first.call(null,seq42500__$1);
var seq42500__$2 = cljs.core.next.call(null,seq42500__$1);
var G__42503 = cljs.core.first.call(null,seq42500__$2);
var seq42500__$3 = cljs.core.next.call(null,seq42500__$2);
var G__42504 = cljs.core.first.call(null,seq42500__$3);
var seq42500__$4 = cljs.core.next.call(null,seq42500__$3);
var G__42505 = cljs.core.first.call(null,seq42500__$4);
var seq42500__$5 = cljs.core.next.call(null,seq42500__$4);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42501,G__42502,G__42503,G__42504,G__42505,seq42500__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__21923__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42536_42540 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42537_42541 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42538_42542 = true;
var _STAR_print_fn_STAR__temp_val__42539_42543 = (function (x__21924__auto__){
return sb__21923__auto__.append(x__21924__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42538_42542);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42539_42543);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42537_42541);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42536_42540);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__21923__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__21851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21854__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21855__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21855__auto__,method_table__21851__auto__,prefer_table__21852__auto__,method_cache__21853__auto__,cached_hierarchy__21854__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__42544 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__42544,(0),null);
var name = cljs.core.nth.call(null,vec__42544,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
if((((x === (0))) && ((((1) / x) < (0))))){
return cljs.compiler.emits.call(null,"(-0)");
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__42547 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__42547,(0),null);
var flags = cljs.core.nth.call(null,vec__42547,(1),null);
var pattern = cljs.core.nth.call(null,vec__42547,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5718__auto__ = (function (){var and__20748__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__20748__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__20748__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__20748__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.call(null,"new Date(",inst_ms,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emit_inst.call(null,date.getTime());
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__42550_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__42550_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__42552){
var map__42553 = p__42552;
var map__42553__$1 = cljs.core.__destructure_map.call(null,map__42553);
var ast = map__42553__$1;
var info = cljs.core.get.call(null,map__42553__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__42553__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__42553__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__42554 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__42554__$1 = cljs.core.__destructure_map.call(null,map__42554);
var cenv = map__42554__$1;
var options = cljs.core.get.call(null,map__42554__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__20754__auto__ = js_module_name;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__42555 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__20748__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__20748__auto__;
}
})())){
return clojure.set.difference.call(null,G__42555,cljs.analyzer.es5_allowed);
} else {
return G__42555;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__20754__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__42556 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__42556,reserved);
} else {
return G__42556;
}
})();
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__42557_42558 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__42557_42559__$1 = (((G__42557_42558 instanceof cljs.core.Keyword))?G__42557_42558.fqn:null);
switch (G__42557_42559__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__20748__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__42561){
var map__42562 = p__42561;
var map__42562__$1 = cljs.core.__destructure_map.call(null,map__42562);
var arg = map__42562__$1;
var env = cljs.core.get.call(null,map__42562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__42562__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__42562__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__42562__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__42563 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__42563__$1 = cljs.core.__destructure_map.call(null,map__42563);
var name = cljs.core.get.call(null,map__42563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__42564){
var map__42565 = p__42564;
var map__42565__$1 = cljs.core.__destructure_map.call(null,map__42565);
var expr = cljs.core.get.call(null,map__42565__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__42565__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__42565__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__42566_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__42566_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__42567){
var map__42568 = p__42567;
var map__42568__$1 = cljs.core.__destructure_map.call(null,map__42568);
var env = cljs.core.get.call(null,map__42568__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__42568__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__42568__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__42569){
var map__42570 = p__42569;
var map__42570__$1 = cljs.core.__destructure_map.call(null,map__42570);
var items = cljs.core.get.call(null,map__42570__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__42570__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__42571_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__42571_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__42572){
var map__42573 = p__42572;
var map__42573__$1 = cljs.core.__destructure_map.call(null,map__42573);
var items = cljs.core.get.call(null,map__42573__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__42573__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___42596 = cljs.core.seq.call(null,items);
if(temp__5720__auto___42596){
var items_42597__$1 = temp__5720__auto___42596;
var vec__42574_42598 = items_42597__$1;
var seq__42575_42599 = cljs.core.seq.call(null,vec__42574_42598);
var first__42576_42600 = cljs.core.first.call(null,seq__42575_42599);
var seq__42575_42601__$1 = cljs.core.next.call(null,seq__42575_42599);
var vec__42577_42602 = first__42576_42600;
var k_42603 = cljs.core.nth.call(null,vec__42577_42602,(0),null);
var v_42604 = cljs.core.nth.call(null,vec__42577_42602,(1),null);
var r_42605 = seq__42575_42601__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_42603),"\": ",emit_js_object_val.call(null,v_42604));

var seq__42580_42606 = cljs.core.seq.call(null,r_42605);
var chunk__42581_42607 = null;
var count__42582_42608 = (0);
var i__42583_42609 = (0);
while(true){
if((i__42583_42609 < count__42582_42608)){
var vec__42590_42610 = cljs.core._nth.call(null,chunk__42581_42607,i__42583_42609);
var k_42611__$1 = cljs.core.nth.call(null,vec__42590_42610,(0),null);
var v_42612__$1 = cljs.core.nth.call(null,vec__42590_42610,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_42611__$1),"\": ",emit_js_object_val.call(null,v_42612__$1));


var G__42613 = seq__42580_42606;
var G__42614 = chunk__42581_42607;
var G__42615 = count__42582_42608;
var G__42616 = (i__42583_42609 + (1));
seq__42580_42606 = G__42613;
chunk__42581_42607 = G__42614;
count__42582_42608 = G__42615;
i__42583_42609 = G__42616;
continue;
} else {
var temp__5720__auto___42617__$1 = cljs.core.seq.call(null,seq__42580_42606);
if(temp__5720__auto___42617__$1){
var seq__42580_42618__$1 = temp__5720__auto___42617__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42580_42618__$1)){
var c__21725__auto___42619 = cljs.core.chunk_first.call(null,seq__42580_42618__$1);
var G__42620 = cljs.core.chunk_rest.call(null,seq__42580_42618__$1);
var G__42621 = c__21725__auto___42619;
var G__42622 = cljs.core.count.call(null,c__21725__auto___42619);
var G__42623 = (0);
seq__42580_42606 = G__42620;
chunk__42581_42607 = G__42621;
count__42582_42608 = G__42622;
i__42583_42609 = G__42623;
continue;
} else {
var vec__42593_42624 = cljs.core.first.call(null,seq__42580_42618__$1);
var k_42625__$1 = cljs.core.nth.call(null,vec__42593_42624,(0),null);
var v_42626__$1 = cljs.core.nth.call(null,vec__42593_42624,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_42625__$1),"\": ",emit_js_object_val.call(null,v_42626__$1));


var G__42627 = cljs.core.next.call(null,seq__42580_42618__$1);
var G__42628 = null;
var G__42629 = (0);
var G__42630 = (0);
seq__42580_42606 = G__42627;
chunk__42581_42607 = G__42628;
count__42582_42608 = G__42629;
i__42583_42609 = G__42630;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__42631){
var map__42632 = p__42631;
var map__42632__$1 = cljs.core.__destructure_map.call(null,map__42632);
var keys = cljs.core.get.call(null,map__42632__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__42632__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__42632__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__42633){
var map__42634 = p__42633;
var map__42634__$1 = cljs.core.__destructure_map.call(null,map__42634);
var items = cljs.core.get.call(null,map__42634__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__42634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__42635){
var map__42636 = p__42635;
var map__42636__$1 = cljs.core.__destructure_map.call(null,map__42636);
var expr = cljs.core.get.call(null,map__42636__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__42637){
var map__42638 = p__42637;
var map__42638__$1 = cljs.core.__destructure_map.call(null,map__42638);
var form = cljs.core.get.call(null,map__42638__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__42638__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__42639 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__42639__$1 = cljs.core.__destructure_map.call(null,map__42639);
var op = cljs.core.get.call(null,map__42639__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__42639__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__42639__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__20754__auto__ = (function (){var and__20748__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__20748__auto__){
var and__20748__auto____$1 = form;
if(cljs.core.truth_(and__20748__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var and__20748__auto__ = (!((const_expr == null)));
if(and__20748__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__20748__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__42640 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__42640__$1 = cljs.core.__destructure_map.call(null,map__42640);
var op = cljs.core.get.call(null,map__42640__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__42640__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__42640__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__20754__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__20754__auto__){
return or__20754__auto__;
} else {
var and__20748__auto__ = (!((const_expr == null)));
if(and__20748__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__20748__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__20754__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__42641){
var map__42642 = p__42641;
var map__42642__$1 = cljs.core.__destructure_map.call(null,map__42642);
var test = cljs.core.get.call(null,map__42642__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__42642__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__42642__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__42642__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__42642__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__20754__auto__ = unchecked;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__42643){
var map__42644 = p__42643;
var map__42644__$1 = cljs.core.__destructure_map.call(null,map__42644);
var v = cljs.core.get.call(null,map__42644__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__42644__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__42644__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__42644__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__42645_42673 = cljs.core.seq.call(null,nodes);
var chunk__42646_42674 = null;
var count__42647_42675 = (0);
var i__42648_42676 = (0);
while(true){
if((i__42648_42676 < count__42647_42675)){
var map__42661_42677 = cljs.core._nth.call(null,chunk__42646_42674,i__42648_42676);
var map__42661_42678__$1 = cljs.core.__destructure_map.call(null,map__42661_42677);
var ts_42679 = cljs.core.get.call(null,map__42661_42678__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__42662_42680 = cljs.core.get.call(null,map__42661_42678__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__42662_42681__$1 = cljs.core.__destructure_map.call(null,map__42662_42680);
var then_42682 = cljs.core.get.call(null,map__42662_42681__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__42663_42683 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_42679));
var chunk__42664_42684 = null;
var count__42665_42685 = (0);
var i__42666_42686 = (0);
while(true){
if((i__42666_42686 < count__42665_42685)){
var test_42687 = cljs.core._nth.call(null,chunk__42664_42684,i__42666_42686);
cljs.compiler.emitln.call(null,"case ",test_42687,":");


var G__42688 = seq__42663_42683;
var G__42689 = chunk__42664_42684;
var G__42690 = count__42665_42685;
var G__42691 = (i__42666_42686 + (1));
seq__42663_42683 = G__42688;
chunk__42664_42684 = G__42689;
count__42665_42685 = G__42690;
i__42666_42686 = G__42691;
continue;
} else {
var temp__5720__auto___42692 = cljs.core.seq.call(null,seq__42663_42683);
if(temp__5720__auto___42692){
var seq__42663_42693__$1 = temp__5720__auto___42692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42663_42693__$1)){
var c__21725__auto___42694 = cljs.core.chunk_first.call(null,seq__42663_42693__$1);
var G__42695 = cljs.core.chunk_rest.call(null,seq__42663_42693__$1);
var G__42696 = c__21725__auto___42694;
var G__42697 = cljs.core.count.call(null,c__21725__auto___42694);
var G__42698 = (0);
seq__42663_42683 = G__42695;
chunk__42664_42684 = G__42696;
count__42665_42685 = G__42697;
i__42666_42686 = G__42698;
continue;
} else {
var test_42699 = cljs.core.first.call(null,seq__42663_42693__$1);
cljs.compiler.emitln.call(null,"case ",test_42699,":");


var G__42700 = cljs.core.next.call(null,seq__42663_42693__$1);
var G__42701 = null;
var G__42702 = (0);
var G__42703 = (0);
seq__42663_42683 = G__42700;
chunk__42664_42684 = G__42701;
count__42665_42685 = G__42702;
i__42666_42686 = G__42703;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_42682);
} else {
cljs.compiler.emitln.call(null,then_42682);
}

cljs.compiler.emitln.call(null,"break;");


var G__42704 = seq__42645_42673;
var G__42705 = chunk__42646_42674;
var G__42706 = count__42647_42675;
var G__42707 = (i__42648_42676 + (1));
seq__42645_42673 = G__42704;
chunk__42646_42674 = G__42705;
count__42647_42675 = G__42706;
i__42648_42676 = G__42707;
continue;
} else {
var temp__5720__auto___42708 = cljs.core.seq.call(null,seq__42645_42673);
if(temp__5720__auto___42708){
var seq__42645_42709__$1 = temp__5720__auto___42708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42645_42709__$1)){
var c__21725__auto___42710 = cljs.core.chunk_first.call(null,seq__42645_42709__$1);
var G__42711 = cljs.core.chunk_rest.call(null,seq__42645_42709__$1);
var G__42712 = c__21725__auto___42710;
var G__42713 = cljs.core.count.call(null,c__21725__auto___42710);
var G__42714 = (0);
seq__42645_42673 = G__42711;
chunk__42646_42674 = G__42712;
count__42647_42675 = G__42713;
i__42648_42676 = G__42714;
continue;
} else {
var map__42667_42715 = cljs.core.first.call(null,seq__42645_42709__$1);
var map__42667_42716__$1 = cljs.core.__destructure_map.call(null,map__42667_42715);
var ts_42717 = cljs.core.get.call(null,map__42667_42716__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__42668_42718 = cljs.core.get.call(null,map__42667_42716__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__42668_42719__$1 = cljs.core.__destructure_map.call(null,map__42668_42718);
var then_42720 = cljs.core.get.call(null,map__42668_42719__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__42669_42721 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_42717));
var chunk__42670_42722 = null;
var count__42671_42723 = (0);
var i__42672_42724 = (0);
while(true){
if((i__42672_42724 < count__42671_42723)){
var test_42725 = cljs.core._nth.call(null,chunk__42670_42722,i__42672_42724);
cljs.compiler.emitln.call(null,"case ",test_42725,":");


var G__42726 = seq__42669_42721;
var G__42727 = chunk__42670_42722;
var G__42728 = count__42671_42723;
var G__42729 = (i__42672_42724 + (1));
seq__42669_42721 = G__42726;
chunk__42670_42722 = G__42727;
count__42671_42723 = G__42728;
i__42672_42724 = G__42729;
continue;
} else {
var temp__5720__auto___42730__$1 = cljs.core.seq.call(null,seq__42669_42721);
if(temp__5720__auto___42730__$1){
var seq__42669_42731__$1 = temp__5720__auto___42730__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42669_42731__$1)){
var c__21725__auto___42732 = cljs.core.chunk_first.call(null,seq__42669_42731__$1);
var G__42733 = cljs.core.chunk_rest.call(null,seq__42669_42731__$1);
var G__42734 = c__21725__auto___42732;
var G__42735 = cljs.core.count.call(null,c__21725__auto___42732);
var G__42736 = (0);
seq__42669_42721 = G__42733;
chunk__42670_42722 = G__42734;
count__42671_42723 = G__42735;
i__42672_42724 = G__42736;
continue;
} else {
var test_42737 = cljs.core.first.call(null,seq__42669_42731__$1);
cljs.compiler.emitln.call(null,"case ",test_42737,":");


var G__42738 = cljs.core.next.call(null,seq__42669_42731__$1);
var G__42739 = null;
var G__42740 = (0);
var G__42741 = (0);
seq__42669_42721 = G__42738;
chunk__42670_42722 = G__42739;
count__42671_42723 = G__42740;
i__42672_42724 = G__42741;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_42720);
} else {
cljs.compiler.emitln.call(null,then_42720);
}

cljs.compiler.emitln.call(null,"break;");


var G__42742 = cljs.core.next.call(null,seq__42645_42709__$1);
var G__42743 = null;
var G__42744 = (0);
var G__42745 = (0);
seq__42645_42673 = G__42742;
chunk__42646_42674 = G__42743;
count__42647_42675 = G__42744;
i__42648_42676 = G__42745;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__42746){
var map__42747 = p__42746;
var map__42747__$1 = cljs.core.__destructure_map.call(null,map__42747);
var throw$ = cljs.core.get.call(null,map__42747__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__42747__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__42749 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__42749,(0),null);
var rstr = cljs.core.nth.call(null,vec__42749,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__42748_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__42748_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__42752 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__42752,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__42752;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__42753_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__42753_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__42754 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__42755 = cljs.core.seq.call(null,vec__42754);
var first__42756 = cljs.core.first.call(null,seq__42755);
var seq__42755__$1 = cljs.core.next.call(null,seq__42755);
var p = first__42756;
var first__42756__$1 = cljs.core.first.call(null,seq__42755__$1);
var seq__42755__$2 = cljs.core.next.call(null,seq__42755__$1);
var ts = first__42756__$1;
var first__42756__$2 = cljs.core.first.call(null,seq__42755__$2);
var seq__42755__$3 = cljs.core.next.call(null,seq__42755__$2);
var n = first__42756__$2;
var xs = seq__42755__$3;
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__20748__auto__){
var and__20748__auto____$1 = ts;
if(cljs.core.truth_(and__20748__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__42757 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__42758 = cljs.core.seq.call(null,vec__42757);
var first__42759 = cljs.core.first.call(null,seq__42758);
var seq__42758__$1 = cljs.core.next.call(null,seq__42758);
var p = first__42759;
var first__42759__$1 = cljs.core.first.call(null,seq__42758__$1);
var seq__42758__$2 = cljs.core.next.call(null,seq__42758__$1);
var ts = first__42759__$1;
var xs = seq__42758__$2;
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__20748__auto__){
var and__20748__auto____$1 = ts;
if(cljs.core.truth_(and__20748__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__42762 = arguments.length;
switch (G__42762) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__42770 = cljs.core.map.call(null,(function (p1__42760_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__42760_SHARP_);
} else {
return p1__42760_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__42771 = cljs.core.seq.call(null,vec__42770);
var first__42772 = cljs.core.first.call(null,seq__42771);
var seq__42771__$1 = cljs.core.next.call(null,seq__42771);
var x = first__42772;
var ys = seq__42771__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__42773 = cljs.core.seq.call(null,ys);
var chunk__42774 = null;
var count__42775 = (0);
var i__42776 = (0);
while(true){
if((i__42776 < count__42775)){
var next_line = cljs.core._nth.call(null,chunk__42774,i__42776);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__42782 = seq__42773;
var G__42783 = chunk__42774;
var G__42784 = count__42775;
var G__42785 = (i__42776 + (1));
seq__42773 = G__42782;
chunk__42774 = G__42783;
count__42775 = G__42784;
i__42776 = G__42785;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42773);
if(temp__5720__auto__){
var seq__42773__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42773__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__42773__$1);
var G__42786 = cljs.core.chunk_rest.call(null,seq__42773__$1);
var G__42787 = c__21725__auto__;
var G__42788 = cljs.core.count.call(null,c__21725__auto__);
var G__42789 = (0);
seq__42773 = G__42786;
chunk__42774 = G__42787;
count__42775 = G__42788;
i__42776 = G__42789;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__42773__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__42790 = cljs.core.next.call(null,seq__42773__$1);
var G__42791 = null;
var G__42792 = (0);
var G__42793 = (0);
seq__42773 = G__42790;
chunk__42774 = G__42791;
count__42775 = G__42792;
i__42776 = G__42793;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__42777_42794 = cljs.core.seq.call(null,docs__$2);
var chunk__42778_42795 = null;
var count__42779_42796 = (0);
var i__42780_42797 = (0);
while(true){
if((i__42780_42797 < count__42779_42796)){
var e_42798 = cljs.core._nth.call(null,chunk__42778_42795,i__42780_42797);
if(cljs.core.truth_(e_42798)){
print_comment_lines.call(null,e_42798);
} else {
}


var G__42799 = seq__42777_42794;
var G__42800 = chunk__42778_42795;
var G__42801 = count__42779_42796;
var G__42802 = (i__42780_42797 + (1));
seq__42777_42794 = G__42799;
chunk__42778_42795 = G__42800;
count__42779_42796 = G__42801;
i__42780_42797 = G__42802;
continue;
} else {
var temp__5720__auto___42803 = cljs.core.seq.call(null,seq__42777_42794);
if(temp__5720__auto___42803){
var seq__42777_42804__$1 = temp__5720__auto___42803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42777_42804__$1)){
var c__21725__auto___42805 = cljs.core.chunk_first.call(null,seq__42777_42804__$1);
var G__42806 = cljs.core.chunk_rest.call(null,seq__42777_42804__$1);
var G__42807 = c__21725__auto___42805;
var G__42808 = cljs.core.count.call(null,c__21725__auto___42805);
var G__42809 = (0);
seq__42777_42794 = G__42806;
chunk__42778_42795 = G__42807;
count__42779_42796 = G__42808;
i__42780_42797 = G__42809;
continue;
} else {
var e_42810 = cljs.core.first.call(null,seq__42777_42804__$1);
if(cljs.core.truth_(e_42810)){
print_comment_lines.call(null,e_42810);
} else {
}


var G__42811 = cljs.core.next.call(null,seq__42777_42804__$1);
var G__42812 = null;
var G__42813 = (0);
var G__42814 = (0);
seq__42777_42794 = G__42811;
chunk__42778_42795 = G__42812;
count__42779_42796 = G__42813;
i__42780_42797 = G__42814;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__20748__auto__ = cljs.core.some.call(null,(function (p1__42816_SHARP_){
return goog.string.startsWith(p1__42816_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = opts;
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__20748__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__42817){
var map__42818 = p__42817;
var map__42818__$1 = cljs.core.__destructure_map.call(null,map__42818);
var doc = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__42818__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__20754__auto__ = init;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__20748__auto__)){
return test;
} else {
return and__20748__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__42819){
var map__42820 = p__42819;
var map__42820__$1 = cljs.core.__destructure_map.call(null,map__42820);
var name = cljs.core.get.call(null,map__42820__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__42820__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__42820__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__42821_42845 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__42822_42846 = null;
var count__42823_42847 = (0);
var i__42824_42848 = (0);
while(true){
if((i__42824_42848 < count__42823_42847)){
var vec__42831_42849 = cljs.core._nth.call(null,chunk__42822_42846,i__42824_42848);
var i_42850 = cljs.core.nth.call(null,vec__42831_42849,(0),null);
var param_42851 = cljs.core.nth.call(null,vec__42831_42849,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_42851);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__42852 = seq__42821_42845;
var G__42853 = chunk__42822_42846;
var G__42854 = count__42823_42847;
var G__42855 = (i__42824_42848 + (1));
seq__42821_42845 = G__42852;
chunk__42822_42846 = G__42853;
count__42823_42847 = G__42854;
i__42824_42848 = G__42855;
continue;
} else {
var temp__5720__auto___42856 = cljs.core.seq.call(null,seq__42821_42845);
if(temp__5720__auto___42856){
var seq__42821_42857__$1 = temp__5720__auto___42856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42821_42857__$1)){
var c__21725__auto___42858 = cljs.core.chunk_first.call(null,seq__42821_42857__$1);
var G__42859 = cljs.core.chunk_rest.call(null,seq__42821_42857__$1);
var G__42860 = c__21725__auto___42858;
var G__42861 = cljs.core.count.call(null,c__21725__auto___42858);
var G__42862 = (0);
seq__42821_42845 = G__42859;
chunk__42822_42846 = G__42860;
count__42823_42847 = G__42861;
i__42824_42848 = G__42862;
continue;
} else {
var vec__42834_42863 = cljs.core.first.call(null,seq__42821_42857__$1);
var i_42864 = cljs.core.nth.call(null,vec__42834_42863,(0),null);
var param_42865 = cljs.core.nth.call(null,vec__42834_42863,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_42865);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__42866 = cljs.core.next.call(null,seq__42821_42857__$1);
var G__42867 = null;
var G__42868 = (0);
var G__42869 = (0);
seq__42821_42845 = G__42866;
chunk__42822_42846 = G__42867;
count__42823_42847 = G__42868;
i__42824_42848 = G__42869;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__42837_42870 = cljs.core.seq.call(null,params);
var chunk__42838_42871 = null;
var count__42839_42872 = (0);
var i__42840_42873 = (0);
while(true){
if((i__42840_42873 < count__42839_42872)){
var param_42874 = cljs.core._nth.call(null,chunk__42838_42871,i__42840_42873);
cljs.compiler.emit.call(null,param_42874);

if(cljs.core._EQ_.call(null,param_42874,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42875 = seq__42837_42870;
var G__42876 = chunk__42838_42871;
var G__42877 = count__42839_42872;
var G__42878 = (i__42840_42873 + (1));
seq__42837_42870 = G__42875;
chunk__42838_42871 = G__42876;
count__42839_42872 = G__42877;
i__42840_42873 = G__42878;
continue;
} else {
var temp__5720__auto___42879 = cljs.core.seq.call(null,seq__42837_42870);
if(temp__5720__auto___42879){
var seq__42837_42880__$1 = temp__5720__auto___42879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42837_42880__$1)){
var c__21725__auto___42881 = cljs.core.chunk_first.call(null,seq__42837_42880__$1);
var G__42882 = cljs.core.chunk_rest.call(null,seq__42837_42880__$1);
var G__42883 = c__21725__auto___42881;
var G__42884 = cljs.core.count.call(null,c__21725__auto___42881);
var G__42885 = (0);
seq__42837_42870 = G__42882;
chunk__42838_42871 = G__42883;
count__42839_42872 = G__42884;
i__42840_42873 = G__42885;
continue;
} else {
var param_42886 = cljs.core.first.call(null,seq__42837_42880__$1);
cljs.compiler.emit.call(null,param_42886);

if(cljs.core._EQ_.call(null,param_42886,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42887 = cljs.core.next.call(null,seq__42837_42880__$1);
var G__42888 = null;
var G__42889 = (0);
var G__42890 = (0);
seq__42837_42870 = G__42887;
chunk__42838_42871 = G__42888;
count__42839_42872 = G__42889;
i__42840_42873 = G__42890;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__42841_42891 = cljs.core.seq.call(null,params);
var chunk__42842_42892 = null;
var count__42843_42893 = (0);
var i__42844_42894 = (0);
while(true){
if((i__42844_42894 < count__42843_42893)){
var param_42895 = cljs.core._nth.call(null,chunk__42842_42892,i__42844_42894);
cljs.compiler.emit.call(null,param_42895);

if(cljs.core._EQ_.call(null,param_42895,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42896 = seq__42841_42891;
var G__42897 = chunk__42842_42892;
var G__42898 = count__42843_42893;
var G__42899 = (i__42844_42894 + (1));
seq__42841_42891 = G__42896;
chunk__42842_42892 = G__42897;
count__42843_42893 = G__42898;
i__42844_42894 = G__42899;
continue;
} else {
var temp__5720__auto___42900 = cljs.core.seq.call(null,seq__42841_42891);
if(temp__5720__auto___42900){
var seq__42841_42901__$1 = temp__5720__auto___42900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42841_42901__$1)){
var c__21725__auto___42902 = cljs.core.chunk_first.call(null,seq__42841_42901__$1);
var G__42903 = cljs.core.chunk_rest.call(null,seq__42841_42901__$1);
var G__42904 = c__21725__auto___42902;
var G__42905 = cljs.core.count.call(null,c__21725__auto___42902);
var G__42906 = (0);
seq__42841_42891 = G__42903;
chunk__42842_42892 = G__42904;
count__42843_42893 = G__42905;
i__42844_42894 = G__42906;
continue;
} else {
var param_42907 = cljs.core.first.call(null,seq__42841_42901__$1);
cljs.compiler.emit.call(null,param_42907);

if(cljs.core._EQ_.call(null,param_42907,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42908 = cljs.core.next.call(null,seq__42841_42901__$1);
var G__42909 = null;
var G__42910 = (0);
var G__42911 = (0);
seq__42841_42891 = G__42908;
chunk__42842_42892 = G__42909;
count__42843_42893 = G__42910;
i__42844_42894 = G__42911;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__42912 = cljs.core.seq.call(null,params);
var chunk__42913 = null;
var count__42914 = (0);
var i__42915 = (0);
while(true){
if((i__42915 < count__42914)){
var param = cljs.core._nth.call(null,chunk__42913,i__42915);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42916 = seq__42912;
var G__42917 = chunk__42913;
var G__42918 = count__42914;
var G__42919 = (i__42915 + (1));
seq__42912 = G__42916;
chunk__42913 = G__42917;
count__42914 = G__42918;
i__42915 = G__42919;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42912);
if(temp__5720__auto__){
var seq__42912__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42912__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__42912__$1);
var G__42920 = cljs.core.chunk_rest.call(null,seq__42912__$1);
var G__42921 = c__21725__auto__;
var G__42922 = cljs.core.count.call(null,c__21725__auto__);
var G__42923 = (0);
seq__42912 = G__42920;
chunk__42913 = G__42921;
count__42914 = G__42922;
i__42915 = G__42923;
continue;
} else {
var param = cljs.core.first.call(null,seq__42912__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42924 = cljs.core.next.call(null,seq__42912__$1);
var G__42925 = null;
var G__42926 = (0);
var G__42927 = (0);
seq__42912 = G__42924;
chunk__42913 = G__42925;
count__42914 = G__42926;
i__42915 = G__42927;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__42928){
var map__42929 = p__42928;
var map__42929__$1 = cljs.core.__destructure_map.call(null,map__42929);
var expr = cljs.core.get.call(null,map__42929__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__42929__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__42929__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__42929__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__42929__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__42929__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__42930){
var map__42931 = p__42930;
var map__42931__$1 = cljs.core.__destructure_map.call(null,map__42931);
var f = map__42931__$1;
var expr = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_42940__$1 = (function (){var or__20754__auto__ = name;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_42941 = cljs.compiler.munge.call(null,name_42940__$1);
var delegate_name_42942 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_42941),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_42942," = function (");

var seq__42932_42943 = cljs.core.seq.call(null,params);
var chunk__42933_42944 = null;
var count__42934_42945 = (0);
var i__42935_42946 = (0);
while(true){
if((i__42935_42946 < count__42934_42945)){
var param_42947 = cljs.core._nth.call(null,chunk__42933_42944,i__42935_42946);
cljs.compiler.emit.call(null,param_42947);

if(cljs.core._EQ_.call(null,param_42947,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42948 = seq__42932_42943;
var G__42949 = chunk__42933_42944;
var G__42950 = count__42934_42945;
var G__42951 = (i__42935_42946 + (1));
seq__42932_42943 = G__42948;
chunk__42933_42944 = G__42949;
count__42934_42945 = G__42950;
i__42935_42946 = G__42951;
continue;
} else {
var temp__5720__auto___42952 = cljs.core.seq.call(null,seq__42932_42943);
if(temp__5720__auto___42952){
var seq__42932_42953__$1 = temp__5720__auto___42952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42932_42953__$1)){
var c__21725__auto___42954 = cljs.core.chunk_first.call(null,seq__42932_42953__$1);
var G__42955 = cljs.core.chunk_rest.call(null,seq__42932_42953__$1);
var G__42956 = c__21725__auto___42954;
var G__42957 = cljs.core.count.call(null,c__21725__auto___42954);
var G__42958 = (0);
seq__42932_42943 = G__42955;
chunk__42933_42944 = G__42956;
count__42934_42945 = G__42957;
i__42935_42946 = G__42958;
continue;
} else {
var param_42959 = cljs.core.first.call(null,seq__42932_42953__$1);
cljs.compiler.emit.call(null,param_42959);

if(cljs.core._EQ_.call(null,param_42959,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42960 = cljs.core.next.call(null,seq__42932_42953__$1);
var G__42961 = null;
var G__42962 = (0);
var G__42963 = (0);
seq__42932_42943 = G__42960;
chunk__42933_42944 = G__42961;
count__42934_42945 = G__42962;
i__42935_42946 = G__42963;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_42941," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_42964 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_42964,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_42942,".call(this,");

var seq__42936_42965 = cljs.core.seq.call(null,params);
var chunk__42937_42966 = null;
var count__42938_42967 = (0);
var i__42939_42968 = (0);
while(true){
if((i__42939_42968 < count__42938_42967)){
var param_42969 = cljs.core._nth.call(null,chunk__42937_42966,i__42939_42968);
cljs.compiler.emit.call(null,param_42969);

if(cljs.core._EQ_.call(null,param_42969,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42970 = seq__42936_42965;
var G__42971 = chunk__42937_42966;
var G__42972 = count__42938_42967;
var G__42973 = (i__42939_42968 + (1));
seq__42936_42965 = G__42970;
chunk__42937_42966 = G__42971;
count__42938_42967 = G__42972;
i__42939_42968 = G__42973;
continue;
} else {
var temp__5720__auto___42974 = cljs.core.seq.call(null,seq__42936_42965);
if(temp__5720__auto___42974){
var seq__42936_42975__$1 = temp__5720__auto___42974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42936_42975__$1)){
var c__21725__auto___42976 = cljs.core.chunk_first.call(null,seq__42936_42975__$1);
var G__42977 = cljs.core.chunk_rest.call(null,seq__42936_42975__$1);
var G__42978 = c__21725__auto___42976;
var G__42979 = cljs.core.count.call(null,c__21725__auto___42976);
var G__42980 = (0);
seq__42936_42965 = G__42977;
chunk__42937_42966 = G__42978;
count__42938_42967 = G__42979;
i__42939_42968 = G__42980;
continue;
} else {
var param_42981 = cljs.core.first.call(null,seq__42936_42975__$1);
cljs.compiler.emit.call(null,param_42981);

if(cljs.core._EQ_.call(null,param_42981,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__42982 = cljs.core.next.call(null,seq__42936_42975__$1);
var G__42983 = null;
var G__42984 = (0);
var G__42985 = (0);
seq__42936_42965 = G__42982;
chunk__42937_42966 = G__42983;
count__42938_42967 = G__42984;
i__42939_42968 = G__42985;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_42941,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_42941,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_42940__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_42941,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_42942,";");

cljs.compiler.emitln.call(null,"return ",mname_42941,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__42989){
var map__42990 = p__42989;
var map__42990__$1 = cljs.core.__destructure_map.call(null,map__42990);
var variadic = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__42990__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__42986_SHARP_){
var and__20748__auto__ = p1__42986_SHARP_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__42986_SHARP_));
} else {
return and__20748__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__20754__auto__ = in_loop;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_43042__$1 = (function (){var or__20754__auto__ = name;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_43043 = cljs.compiler.munge.call(null,name_43042__$1);
var maxparams_43044 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_43045 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_43043),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_43046 = cljs.core.sort_by.call(null,(function (p1__42987_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__42987_SHARP_)));
}),cljs.core.seq.call(null,mmap_43045));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_43043," = null;");

var seq__42991_43047 = cljs.core.seq.call(null,ms_43046);
var chunk__42992_43048 = null;
var count__42993_43049 = (0);
var i__42994_43050 = (0);
while(true){
if((i__42994_43050 < count__42993_43049)){
var vec__43001_43051 = cljs.core._nth.call(null,chunk__42992_43048,i__42994_43050);
var n_43052 = cljs.core.nth.call(null,vec__43001_43051,(0),null);
var meth_43053 = cljs.core.nth.call(null,vec__43001_43051,(1),null);
cljs.compiler.emits.call(null,"var ",n_43052," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_43053))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_43053);
} else {
cljs.compiler.emit_fn_method.call(null,meth_43053);
}

cljs.compiler.emitln.call(null,";");


var G__43054 = seq__42991_43047;
var G__43055 = chunk__42992_43048;
var G__43056 = count__42993_43049;
var G__43057 = (i__42994_43050 + (1));
seq__42991_43047 = G__43054;
chunk__42992_43048 = G__43055;
count__42993_43049 = G__43056;
i__42994_43050 = G__43057;
continue;
} else {
var temp__5720__auto___43058 = cljs.core.seq.call(null,seq__42991_43047);
if(temp__5720__auto___43058){
var seq__42991_43059__$1 = temp__5720__auto___43058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42991_43059__$1)){
var c__21725__auto___43060 = cljs.core.chunk_first.call(null,seq__42991_43059__$1);
var G__43061 = cljs.core.chunk_rest.call(null,seq__42991_43059__$1);
var G__43062 = c__21725__auto___43060;
var G__43063 = cljs.core.count.call(null,c__21725__auto___43060);
var G__43064 = (0);
seq__42991_43047 = G__43061;
chunk__42992_43048 = G__43062;
count__42993_43049 = G__43063;
i__42994_43050 = G__43064;
continue;
} else {
var vec__43004_43065 = cljs.core.first.call(null,seq__42991_43059__$1);
var n_43066 = cljs.core.nth.call(null,vec__43004_43065,(0),null);
var meth_43067 = cljs.core.nth.call(null,vec__43004_43065,(1),null);
cljs.compiler.emits.call(null,"var ",n_43066," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_43067))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_43067);
} else {
cljs.compiler.emit_fn_method.call(null,meth_43067);
}

cljs.compiler.emitln.call(null,";");


var G__43068 = cljs.core.next.call(null,seq__42991_43059__$1);
var G__43069 = null;
var G__43070 = (0);
var G__43071 = (0);
seq__42991_43047 = G__43068;
chunk__42992_43048 = G__43069;
count__42993_43049 = G__43070;
i__42994_43050 = G__43071;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_43043," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_43044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_43044)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_43044));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__43007_43072 = cljs.core.seq.call(null,ms_43046);
var chunk__43008_43073 = null;
var count__43009_43074 = (0);
var i__43010_43075 = (0);
while(true){
if((i__43010_43075 < count__43009_43074)){
var vec__43017_43076 = cljs.core._nth.call(null,chunk__43008_43073,i__43010_43075);
var n_43077 = cljs.core.nth.call(null,vec__43017_43076,(0),null);
var meth_43078 = cljs.core.nth.call(null,vec__43017_43076,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_43078))){
cljs.compiler.emitln.call(null,"default:");

var restarg_43079 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_43079," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_43080 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_43079," = new cljs.core.IndexedSeq(",a_43080,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_43077,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_43044)),(((cljs.core.count.call(null,maxparams_43044) > (1)))?", ":null),restarg_43079,");");
} else {
var pcnt_43081 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_43078));
cljs.compiler.emitln.call(null,"case ",pcnt_43081,":");

cljs.compiler.emitln.call(null,"return ",n_43077,".call(this",(((pcnt_43081 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_43081,maxparams_43044)),null,(1),null)),(2),null))),");");
}


var G__43082 = seq__43007_43072;
var G__43083 = chunk__43008_43073;
var G__43084 = count__43009_43074;
var G__43085 = (i__43010_43075 + (1));
seq__43007_43072 = G__43082;
chunk__43008_43073 = G__43083;
count__43009_43074 = G__43084;
i__43010_43075 = G__43085;
continue;
} else {
var temp__5720__auto___43086 = cljs.core.seq.call(null,seq__43007_43072);
if(temp__5720__auto___43086){
var seq__43007_43087__$1 = temp__5720__auto___43086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43007_43087__$1)){
var c__21725__auto___43088 = cljs.core.chunk_first.call(null,seq__43007_43087__$1);
var G__43089 = cljs.core.chunk_rest.call(null,seq__43007_43087__$1);
var G__43090 = c__21725__auto___43088;
var G__43091 = cljs.core.count.call(null,c__21725__auto___43088);
var G__43092 = (0);
seq__43007_43072 = G__43089;
chunk__43008_43073 = G__43090;
count__43009_43074 = G__43091;
i__43010_43075 = G__43092;
continue;
} else {
var vec__43020_43093 = cljs.core.first.call(null,seq__43007_43087__$1);
var n_43094 = cljs.core.nth.call(null,vec__43020_43093,(0),null);
var meth_43095 = cljs.core.nth.call(null,vec__43020_43093,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_43095))){
cljs.compiler.emitln.call(null,"default:");

var restarg_43096 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_43096," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_43097 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_43096," = new cljs.core.IndexedSeq(",a_43097,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_43094,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_43044)),(((cljs.core.count.call(null,maxparams_43044) > (1)))?", ":null),restarg_43096,");");
} else {
var pcnt_43098 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_43095));
cljs.compiler.emitln.call(null,"case ",pcnt_43098,":");

cljs.compiler.emitln.call(null,"return ",n_43094,".call(this",(((pcnt_43098 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_43098,maxparams_43044)),null,(1),null)),(2),null))),");");
}


var G__43099 = cljs.core.next.call(null,seq__43007_43087__$1);
var G__43100 = null;
var G__43101 = (0);
var G__43102 = (0);
seq__43007_43072 = G__43099;
chunk__43008_43073 = G__43100;
count__43009_43074 = G__43101;
i__43010_43075 = G__43102;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_43103 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_43046)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_43103,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_43043,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_43043,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__42988_SHARP_){
var vec__43023 = p1__42988_SHARP_;
var n = cljs.core.nth.call(null,vec__43023,(0),null);
var m = cljs.core.nth.call(null,vec__43023,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_43046),".cljs$lang$applyTo;");
} else {
}

var seq__43026_43104 = cljs.core.seq.call(null,ms_43046);
var chunk__43027_43105 = null;
var count__43028_43106 = (0);
var i__43029_43107 = (0);
while(true){
if((i__43029_43107 < count__43028_43106)){
var vec__43036_43108 = cljs.core._nth.call(null,chunk__43027_43105,i__43029_43107);
var n_43109 = cljs.core.nth.call(null,vec__43036_43108,(0),null);
var meth_43110 = cljs.core.nth.call(null,vec__43036_43108,(1),null);
var c_43111 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_43110));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_43110))){
cljs.compiler.emitln.call(null,mname_43043,".cljs$core$IFn$_invoke$arity$variadic = ",n_43109,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_43043,".cljs$core$IFn$_invoke$arity$",c_43111," = ",n_43109,";");
}


var G__43112 = seq__43026_43104;
var G__43113 = chunk__43027_43105;
var G__43114 = count__43028_43106;
var G__43115 = (i__43029_43107 + (1));
seq__43026_43104 = G__43112;
chunk__43027_43105 = G__43113;
count__43028_43106 = G__43114;
i__43029_43107 = G__43115;
continue;
} else {
var temp__5720__auto___43116 = cljs.core.seq.call(null,seq__43026_43104);
if(temp__5720__auto___43116){
var seq__43026_43117__$1 = temp__5720__auto___43116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43026_43117__$1)){
var c__21725__auto___43118 = cljs.core.chunk_first.call(null,seq__43026_43117__$1);
var G__43119 = cljs.core.chunk_rest.call(null,seq__43026_43117__$1);
var G__43120 = c__21725__auto___43118;
var G__43121 = cljs.core.count.call(null,c__21725__auto___43118);
var G__43122 = (0);
seq__43026_43104 = G__43119;
chunk__43027_43105 = G__43120;
count__43028_43106 = G__43121;
i__43029_43107 = G__43122;
continue;
} else {
var vec__43039_43123 = cljs.core.first.call(null,seq__43026_43117__$1);
var n_43124 = cljs.core.nth.call(null,vec__43039_43123,(0),null);
var meth_43125 = cljs.core.nth.call(null,vec__43039_43123,(1),null);
var c_43126 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_43125));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_43125))){
cljs.compiler.emitln.call(null,mname_43043,".cljs$core$IFn$_invoke$arity$variadic = ",n_43124,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_43043,".cljs$core$IFn$_invoke$arity$",c_43126," = ",n_43124,";");
}


var G__43127 = cljs.core.next.call(null,seq__43026_43117__$1);
var G__43128 = null;
var G__43129 = (0);
var G__43130 = (0);
seq__43026_43104 = G__43127;
chunk__43027_43105 = G__43128;
count__43028_43106 = G__43129;
i__43029_43107 = G__43130;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_43043,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__43131){
var map__43132 = p__43131;
var map__43132__$1 = cljs.core.__destructure_map.call(null,map__43132);
var statements = cljs.core.get.call(null,map__43132__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__43132__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__43132__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__43133_43137 = cljs.core.seq.call(null,statements);
var chunk__43134_43138 = null;
var count__43135_43139 = (0);
var i__43136_43140 = (0);
while(true){
if((i__43136_43140 < count__43135_43139)){
var s_43141 = cljs.core._nth.call(null,chunk__43134_43138,i__43136_43140);
cljs.compiler.emitln.call(null,s_43141);


var G__43142 = seq__43133_43137;
var G__43143 = chunk__43134_43138;
var G__43144 = count__43135_43139;
var G__43145 = (i__43136_43140 + (1));
seq__43133_43137 = G__43142;
chunk__43134_43138 = G__43143;
count__43135_43139 = G__43144;
i__43136_43140 = G__43145;
continue;
} else {
var temp__5720__auto___43146 = cljs.core.seq.call(null,seq__43133_43137);
if(temp__5720__auto___43146){
var seq__43133_43147__$1 = temp__5720__auto___43146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43133_43147__$1)){
var c__21725__auto___43148 = cljs.core.chunk_first.call(null,seq__43133_43147__$1);
var G__43149 = cljs.core.chunk_rest.call(null,seq__43133_43147__$1);
var G__43150 = c__21725__auto___43148;
var G__43151 = cljs.core.count.call(null,c__21725__auto___43148);
var G__43152 = (0);
seq__43133_43137 = G__43149;
chunk__43134_43138 = G__43150;
count__43135_43139 = G__43151;
i__43136_43140 = G__43152;
continue;
} else {
var s_43153 = cljs.core.first.call(null,seq__43133_43147__$1);
cljs.compiler.emitln.call(null,s_43153);


var G__43154 = cljs.core.next.call(null,seq__43133_43147__$1);
var G__43155 = null;
var G__43156 = (0);
var G__43157 = (0);
seq__43133_43137 = G__43154;
chunk__43134_43138 = G__43155;
count__43135_43139 = G__43156;
i__43136_43140 = G__43157;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__43158){
var map__43159 = p__43158;
var map__43159__$1 = cljs.core.__destructure_map.call(null,map__43159);
var try$ = cljs.core.get.call(null,map__43159__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__43159__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__43159__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__43159__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__43159__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__20754__auto__ = name;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__43160,is_loop){
var map__43161 = p__43160;
var map__43161__$1 = cljs.core.__destructure_map.call(null,map__43161);
var expr = cljs.core.get.call(null,map__43161__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__43161__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__43161__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__43162_43172 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__43163_43173 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__43163_43173);

try{var seq__43164_43174 = cljs.core.seq.call(null,bindings);
var chunk__43165_43175 = null;
var count__43166_43176 = (0);
var i__43167_43177 = (0);
while(true){
if((i__43167_43177 < count__43166_43176)){
var map__43170_43178 = cljs.core._nth.call(null,chunk__43165_43175,i__43167_43177);
var map__43170_43179__$1 = cljs.core.__destructure_map.call(null,map__43170_43178);
var binding_43180 = map__43170_43179__$1;
var init_43181 = cljs.core.get.call(null,map__43170_43179__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_43180);

cljs.compiler.emitln.call(null," = ",init_43181,";");


var G__43182 = seq__43164_43174;
var G__43183 = chunk__43165_43175;
var G__43184 = count__43166_43176;
var G__43185 = (i__43167_43177 + (1));
seq__43164_43174 = G__43182;
chunk__43165_43175 = G__43183;
count__43166_43176 = G__43184;
i__43167_43177 = G__43185;
continue;
} else {
var temp__5720__auto___43186 = cljs.core.seq.call(null,seq__43164_43174);
if(temp__5720__auto___43186){
var seq__43164_43187__$1 = temp__5720__auto___43186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43164_43187__$1)){
var c__21725__auto___43188 = cljs.core.chunk_first.call(null,seq__43164_43187__$1);
var G__43189 = cljs.core.chunk_rest.call(null,seq__43164_43187__$1);
var G__43190 = c__21725__auto___43188;
var G__43191 = cljs.core.count.call(null,c__21725__auto___43188);
var G__43192 = (0);
seq__43164_43174 = G__43189;
chunk__43165_43175 = G__43190;
count__43166_43176 = G__43191;
i__43167_43177 = G__43192;
continue;
} else {
var map__43171_43193 = cljs.core.first.call(null,seq__43164_43187__$1);
var map__43171_43194__$1 = cljs.core.__destructure_map.call(null,map__43171_43193);
var binding_43195 = map__43171_43194__$1;
var init_43196 = cljs.core.get.call(null,map__43171_43194__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_43195);

cljs.compiler.emitln.call(null," = ",init_43196,";");


var G__43197 = cljs.core.next.call(null,seq__43164_43187__$1);
var G__43198 = null;
var G__43199 = (0);
var G__43200 = (0);
seq__43164_43174 = G__43197;
chunk__43165_43175 = G__43198;
count__43166_43176 = G__43199;
i__43167_43177 = G__43200;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__43162_43172);
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__43201){
var map__43202 = p__43201;
var map__43202__$1 = cljs.core.__destructure_map.call(null,map__43202);
var frame = cljs.core.get.call(null,map__43202__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__43202__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__43202__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__21841__auto___43203 = cljs.core.count.call(null,exprs);
var i_43204 = (0);
while(true){
if((i_43204 < n__21841__auto___43203)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_43204)," = ",exprs.call(null,i_43204),";");

var G__43205 = (i_43204 + (1));
i_43204 = G__43205;
continue;
} else {
}
break;
}

var n__21841__auto___43206 = cljs.core.count.call(null,exprs);
var i_43207 = (0);
while(true){
if((i_43207 < n__21841__auto___43206)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_43207))," = ",temps.call(null,i_43207),";");

var G__43208 = (i_43207 + (1));
i_43207 = G__43208;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__43209){
var map__43210 = p__43209;
var map__43210__$1 = cljs.core.__destructure_map.call(null,map__43210);
var expr = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__43211_43219 = cljs.core.seq.call(null,bindings);
var chunk__43212_43220 = null;
var count__43213_43221 = (0);
var i__43214_43222 = (0);
while(true){
if((i__43214_43222 < count__43213_43221)){
var map__43217_43223 = cljs.core._nth.call(null,chunk__43212_43220,i__43214_43222);
var map__43217_43224__$1 = cljs.core.__destructure_map.call(null,map__43217_43223);
var binding_43225 = map__43217_43224__$1;
var init_43226 = cljs.core.get.call(null,map__43217_43224__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_43225)," = ",init_43226,";");


var G__43227 = seq__43211_43219;
var G__43228 = chunk__43212_43220;
var G__43229 = count__43213_43221;
var G__43230 = (i__43214_43222 + (1));
seq__43211_43219 = G__43227;
chunk__43212_43220 = G__43228;
count__43213_43221 = G__43229;
i__43214_43222 = G__43230;
continue;
} else {
var temp__5720__auto___43231 = cljs.core.seq.call(null,seq__43211_43219);
if(temp__5720__auto___43231){
var seq__43211_43232__$1 = temp__5720__auto___43231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43211_43232__$1)){
var c__21725__auto___43233 = cljs.core.chunk_first.call(null,seq__43211_43232__$1);
var G__43234 = cljs.core.chunk_rest.call(null,seq__43211_43232__$1);
var G__43235 = c__21725__auto___43233;
var G__43236 = cljs.core.count.call(null,c__21725__auto___43233);
var G__43237 = (0);
seq__43211_43219 = G__43234;
chunk__43212_43220 = G__43235;
count__43213_43221 = G__43236;
i__43214_43222 = G__43237;
continue;
} else {
var map__43218_43238 = cljs.core.first.call(null,seq__43211_43232__$1);
var map__43218_43239__$1 = cljs.core.__destructure_map.call(null,map__43218_43238);
var binding_43240 = map__43218_43239__$1;
var init_43241 = cljs.core.get.call(null,map__43218_43239__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_43240)," = ",init_43241,";");


var G__43242 = cljs.core.next.call(null,seq__43211_43232__$1);
var G__43243 = null;
var G__43244 = (0);
var G__43245 = (0);
seq__43211_43219 = G__43242;
chunk__43212_43220 = G__43243;
count__43213_43221 = G__43244;
i__43214_43222 = G__43245;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__43248){
var map__43249 = p__43248;
var map__43249__$1 = cljs.core.__destructure_map.call(null,map__43249);
var expr = map__43249__$1;
var f = cljs.core.get.call(null,map__43249__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__43249__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__43249__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__20748__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__20748__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__20748__auto__ = protocol;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = tag;
if(cljs.core.truth_(and__20748__auto____$1)){
var or__20754__auto__ = (function (){var and__20748__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = protocol;
if(cljs.core.truth_(and__20748__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var and__20748__auto____$2 = (function (){var or__20754__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__20748__auto____$2)){
var or__20754__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
var and__20748__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__20748__auto____$3){
var and__20748__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__20748__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
}
} else {
return and__20748__auto____$2;
}
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__20754__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__20754__auto__){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__20754__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__20754__auto__){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__20754__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__20754__auto__){
return or__20754__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__43250 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__20748__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return (arity > mfa);
} else {
return and__20748__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__43246_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__43246_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__43247_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__43247_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__43250,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__43250,(1),null);
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_43253 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_43253,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_43254 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_43254,args)),(((mfa_43254 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_43254,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__20748__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__20748__auto__;
}
})())){
var fprop_43255 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_43255," ? ",f__$1,fprop_43255,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_43255," ? ",f__$1,fprop_43255,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__43256){
var map__43257 = p__43256;
var map__43257__$1 = cljs.core.__destructure_map.call(null,map__43257);
var ctor = cljs.core.get.call(null,map__43257__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__43257__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__43257__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__43258){
var map__43259 = p__43258;
var map__43259__$1 = cljs.core.__destructure_map.call(null,map__43259);
var target = cljs.core.get.call(null,map__43259__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__43259__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__43259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.call(null,sublib,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__43260_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43260_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__43261 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__43261,(0),null);
var sublib = cljs.core.nth.call(null,vec__43261,(1),null);
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__20754__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.compiler.sublib_select.call(null,sublib),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__43264 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__43264__$1 = cljs.core.__destructure_map.call(null,map__43264);
var options = cljs.core.get.call(null,map__43264__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__43264__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__43265 = options;
var map__43265__$1 = cljs.core.__destructure_map.call(null,map__43265);
var target = cljs.core.get.call(null,map__43265__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__43265__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__43265__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__43266 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__43272 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__43272__$1 = cljs.core.__destructure_map.call(null,map__43272);
var node_libs = cljs.core.get.call(null,map__43272__$1,true);
var libs_to_load = cljs.core.get.call(null,map__43272__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__43266,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__43266,(1),null);
var vec__43269 = (function (){var map__43273 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__43273__$1 = cljs.core.__destructure_map.call(null,map__43273);
var goog_modules = cljs.core.get.call(null,map__43273__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__43273__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__43269,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__43269,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__43274_43318 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__43275_43319 = null;
var count__43276_43320 = (0);
var i__43277_43321 = (0);
while(true){
if((i__43277_43321 < count__43276_43320)){
var lib_43322 = cljs.core._nth.call(null,chunk__43275_43319,i__43277_43321);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_43322)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_43322),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_43322),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_43322),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_43322),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_43322,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_43322),"');");
}

}
}
}


var G__43323 = seq__43274_43318;
var G__43324 = chunk__43275_43319;
var G__43325 = count__43276_43320;
var G__43326 = (i__43277_43321 + (1));
seq__43274_43318 = G__43323;
chunk__43275_43319 = G__43324;
count__43276_43320 = G__43325;
i__43277_43321 = G__43326;
continue;
} else {
var temp__5720__auto___43327 = cljs.core.seq.call(null,seq__43274_43318);
if(temp__5720__auto___43327){
var seq__43274_43328__$1 = temp__5720__auto___43327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43274_43328__$1)){
var c__21725__auto___43329 = cljs.core.chunk_first.call(null,seq__43274_43328__$1);
var G__43330 = cljs.core.chunk_rest.call(null,seq__43274_43328__$1);
var G__43331 = c__21725__auto___43329;
var G__43332 = cljs.core.count.call(null,c__21725__auto___43329);
var G__43333 = (0);
seq__43274_43318 = G__43330;
chunk__43275_43319 = G__43331;
count__43276_43320 = G__43332;
i__43277_43321 = G__43333;
continue;
} else {
var lib_43334 = cljs.core.first.call(null,seq__43274_43328__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_43334)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_43334),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_43334),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_43334),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_43334),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_43334,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_43334),"');");
}

}
}
}


var G__43335 = cljs.core.next.call(null,seq__43274_43328__$1);
var G__43336 = null;
var G__43337 = (0);
var G__43338 = (0);
seq__43274_43318 = G__43335;
chunk__43275_43319 = G__43336;
count__43276_43320 = G__43337;
i__43277_43321 = G__43338;
continue;
}
} else {
}
}
break;
}

var seq__43278_43339 = cljs.core.seq.call(null,node_libs);
var chunk__43279_43340 = null;
var count__43280_43341 = (0);
var i__43281_43342 = (0);
while(true){
if((i__43281_43342 < count__43280_43341)){
var lib_43343 = cljs.core._nth.call(null,chunk__43279_43340,i__43281_43342);
var vec__43288_43344 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_43343);
var lib_SINGLEQUOTE__43345 = cljs.core.nth.call(null,vec__43288_43344,(0),null);
var sublib_43346 = cljs.core.nth.call(null,vec__43288_43344,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_43343)," = require('",lib_SINGLEQUOTE__43345,"')",cljs.compiler.sublib_select.call(null,sublib_43346),";");


var G__43347 = seq__43278_43339;
var G__43348 = chunk__43279_43340;
var G__43349 = count__43280_43341;
var G__43350 = (i__43281_43342 + (1));
seq__43278_43339 = G__43347;
chunk__43279_43340 = G__43348;
count__43280_43341 = G__43349;
i__43281_43342 = G__43350;
continue;
} else {
var temp__5720__auto___43351 = cljs.core.seq.call(null,seq__43278_43339);
if(temp__5720__auto___43351){
var seq__43278_43352__$1 = temp__5720__auto___43351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43278_43352__$1)){
var c__21725__auto___43353 = cljs.core.chunk_first.call(null,seq__43278_43352__$1);
var G__43354 = cljs.core.chunk_rest.call(null,seq__43278_43352__$1);
var G__43355 = c__21725__auto___43353;
var G__43356 = cljs.core.count.call(null,c__21725__auto___43353);
var G__43357 = (0);
seq__43278_43339 = G__43354;
chunk__43279_43340 = G__43355;
count__43280_43341 = G__43356;
i__43281_43342 = G__43357;
continue;
} else {
var lib_43358 = cljs.core.first.call(null,seq__43278_43352__$1);
var vec__43291_43359 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_43358);
var lib_SINGLEQUOTE__43360 = cljs.core.nth.call(null,vec__43291_43359,(0),null);
var sublib_43361 = cljs.core.nth.call(null,vec__43291_43359,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_43358)," = require('",lib_SINGLEQUOTE__43360,"')",cljs.compiler.sublib_select.call(null,sublib_43361),";");


var G__43362 = cljs.core.next.call(null,seq__43278_43352__$1);
var G__43363 = null;
var G__43364 = (0);
var G__43365 = (0);
seq__43278_43339 = G__43362;
chunk__43279_43340 = G__43363;
count__43280_43341 = G__43364;
i__43281_43342 = G__43365;
continue;
}
} else {
}
}
break;
}

var seq__43294_43366 = cljs.core.seq.call(null,goog_modules);
var chunk__43295_43367 = null;
var count__43296_43368 = (0);
var i__43297_43369 = (0);
while(true){
if((i__43297_43369 < count__43296_43368)){
var lib_43370 = cljs.core._nth.call(null,chunk__43295_43367,i__43297_43369);
var vec__43304_43371 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_43370);
var lib_SINGLEQUOTE__43372 = cljs.core.nth.call(null,vec__43304_43371,(0),null);
var sublib_43373 = cljs.core.nth.call(null,vec__43304_43371,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__43372,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_43370)," = goog.module.get('",lib_SINGLEQUOTE__43372,"')",cljs.compiler.sublib_select.call(null,sublib_43373),";");

cljs.compiler.emitln.call(null,"});");


var G__43374 = seq__43294_43366;
var G__43375 = chunk__43295_43367;
var G__43376 = count__43296_43368;
var G__43377 = (i__43297_43369 + (1));
seq__43294_43366 = G__43374;
chunk__43295_43367 = G__43375;
count__43296_43368 = G__43376;
i__43297_43369 = G__43377;
continue;
} else {
var temp__5720__auto___43378 = cljs.core.seq.call(null,seq__43294_43366);
if(temp__5720__auto___43378){
var seq__43294_43379__$1 = temp__5720__auto___43378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43294_43379__$1)){
var c__21725__auto___43380 = cljs.core.chunk_first.call(null,seq__43294_43379__$1);
var G__43381 = cljs.core.chunk_rest.call(null,seq__43294_43379__$1);
var G__43382 = c__21725__auto___43380;
var G__43383 = cljs.core.count.call(null,c__21725__auto___43380);
var G__43384 = (0);
seq__43294_43366 = G__43381;
chunk__43295_43367 = G__43382;
count__43296_43368 = G__43383;
i__43297_43369 = G__43384;
continue;
} else {
var lib_43385 = cljs.core.first.call(null,seq__43294_43379__$1);
var vec__43307_43386 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_43385);
var lib_SINGLEQUOTE__43387 = cljs.core.nth.call(null,vec__43307_43386,(0),null);
var sublib_43388 = cljs.core.nth.call(null,vec__43307_43386,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__43387,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_43385)," = goog.module.get('",lib_SINGLEQUOTE__43387,"')",cljs.compiler.sublib_select.call(null,sublib_43388),";");

cljs.compiler.emitln.call(null,"});");


var G__43389 = cljs.core.next.call(null,seq__43294_43379__$1);
var G__43390 = null;
var G__43391 = (0);
var G__43392 = (0);
seq__43294_43366 = G__43389;
chunk__43295_43367 = G__43390;
count__43296_43368 = G__43391;
i__43297_43369 = G__43392;
continue;
}
} else {
}
}
break;
}

var seq__43310_43393 = cljs.core.seq.call(null,global_exports_libs);
var chunk__43311_43394 = null;
var count__43312_43395 = (0);
var i__43313_43396 = (0);
while(true){
if((i__43313_43396 < count__43312_43395)){
var lib_43397 = cljs.core._nth.call(null,chunk__43311_43394,i__43313_43396);
var map__43316_43398 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_43397))));
var map__43316_43399__$1 = cljs.core.__destructure_map.call(null,map__43316_43398);
var global_exports_43400 = cljs.core.get.call(null,map__43316_43399__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_43400,lib_43397);


var G__43401 = seq__43310_43393;
var G__43402 = chunk__43311_43394;
var G__43403 = count__43312_43395;
var G__43404 = (i__43313_43396 + (1));
seq__43310_43393 = G__43401;
chunk__43311_43394 = G__43402;
count__43312_43395 = G__43403;
i__43313_43396 = G__43404;
continue;
} else {
var temp__5720__auto___43405 = cljs.core.seq.call(null,seq__43310_43393);
if(temp__5720__auto___43405){
var seq__43310_43406__$1 = temp__5720__auto___43405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43310_43406__$1)){
var c__21725__auto___43407 = cljs.core.chunk_first.call(null,seq__43310_43406__$1);
var G__43408 = cljs.core.chunk_rest.call(null,seq__43310_43406__$1);
var G__43409 = c__21725__auto___43407;
var G__43410 = cljs.core.count.call(null,c__21725__auto___43407);
var G__43411 = (0);
seq__43310_43393 = G__43408;
chunk__43311_43394 = G__43409;
count__43312_43395 = G__43410;
i__43313_43396 = G__43411;
continue;
} else {
var lib_43412 = cljs.core.first.call(null,seq__43310_43406__$1);
var map__43317_43413 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_43412))));
var map__43317_43414__$1 = cljs.core.__destructure_map.call(null,map__43317_43413);
var global_exports_43415 = cljs.core.get.call(null,map__43317_43414__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_43415,lib_43412);


var G__43416 = cljs.core.next.call(null,seq__43310_43406__$1);
var G__43417 = null;
var G__43418 = (0);
var G__43419 = (0);
seq__43310_43393 = G__43416;
chunk__43311_43394 = G__43417;
count__43312_43395 = G__43418;
i__43313_43396 = G__43419;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__43420){
var map__43421 = p__43420;
var map__43421__$1 = cljs.core.__destructure_map.call(null,map__43421);
var name = cljs.core.get.call(null,map__43421__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__43421__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__43421__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__43421__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__43421__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__43421__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__43421__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__43422){
var map__43423 = p__43422;
var map__43423__$1 = cljs.core.__destructure_map.call(null,map__43423);
var name = cljs.core.get.call(null,map__43423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__43423__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__43423__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__43423__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__43423__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__43423__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__43423__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__43424){
var map__43425 = p__43424;
var map__43425__$1 = cljs.core.__destructure_map.call(null,map__43425);
var t = cljs.core.get.call(null,map__43425__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__43425__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__43425__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__43425__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__43425__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__43426_43450 = cljs.core.seq.call(null,protocols);
var chunk__43427_43451 = null;
var count__43428_43452 = (0);
var i__43429_43453 = (0);
while(true){
if((i__43429_43453 < count__43428_43452)){
var protocol_43454 = cljs.core._nth.call(null,chunk__43427_43451,i__43429_43453);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_43454)),"}");


var G__43455 = seq__43426_43450;
var G__43456 = chunk__43427_43451;
var G__43457 = count__43428_43452;
var G__43458 = (i__43429_43453 + (1));
seq__43426_43450 = G__43455;
chunk__43427_43451 = G__43456;
count__43428_43452 = G__43457;
i__43429_43453 = G__43458;
continue;
} else {
var temp__5720__auto___43459 = cljs.core.seq.call(null,seq__43426_43450);
if(temp__5720__auto___43459){
var seq__43426_43460__$1 = temp__5720__auto___43459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43426_43460__$1)){
var c__21725__auto___43461 = cljs.core.chunk_first.call(null,seq__43426_43460__$1);
var G__43462 = cljs.core.chunk_rest.call(null,seq__43426_43460__$1);
var G__43463 = c__21725__auto___43461;
var G__43464 = cljs.core.count.call(null,c__21725__auto___43461);
var G__43465 = (0);
seq__43426_43450 = G__43462;
chunk__43427_43451 = G__43463;
count__43428_43452 = G__43464;
i__43429_43453 = G__43465;
continue;
} else {
var protocol_43466 = cljs.core.first.call(null,seq__43426_43460__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_43466)),"}");


var G__43467 = cljs.core.next.call(null,seq__43426_43460__$1);
var G__43468 = null;
var G__43469 = (0);
var G__43470 = (0);
seq__43426_43450 = G__43467;
chunk__43427_43451 = G__43468;
count__43428_43452 = G__43469;
i__43429_43453 = G__43470;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__43430_43471 = cljs.core.seq.call(null,fields__$1);
var chunk__43431_43472 = null;
var count__43432_43473 = (0);
var i__43433_43474 = (0);
while(true){
if((i__43433_43474 < count__43432_43473)){
var fld_43475 = cljs.core._nth.call(null,chunk__43431_43472,i__43433_43474);
cljs.compiler.emitln.call(null,"this.",fld_43475," = ",fld_43475,";");


var G__43476 = seq__43430_43471;
var G__43477 = chunk__43431_43472;
var G__43478 = count__43432_43473;
var G__43479 = (i__43433_43474 + (1));
seq__43430_43471 = G__43476;
chunk__43431_43472 = G__43477;
count__43432_43473 = G__43478;
i__43433_43474 = G__43479;
continue;
} else {
var temp__5720__auto___43480 = cljs.core.seq.call(null,seq__43430_43471);
if(temp__5720__auto___43480){
var seq__43430_43481__$1 = temp__5720__auto___43480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43430_43481__$1)){
var c__21725__auto___43482 = cljs.core.chunk_first.call(null,seq__43430_43481__$1);
var G__43483 = cljs.core.chunk_rest.call(null,seq__43430_43481__$1);
var G__43484 = c__21725__auto___43482;
var G__43485 = cljs.core.count.call(null,c__21725__auto___43482);
var G__43486 = (0);
seq__43430_43471 = G__43483;
chunk__43431_43472 = G__43484;
count__43432_43473 = G__43485;
i__43433_43474 = G__43486;
continue;
} else {
var fld_43487 = cljs.core.first.call(null,seq__43430_43481__$1);
cljs.compiler.emitln.call(null,"this.",fld_43487," = ",fld_43487,";");


var G__43488 = cljs.core.next.call(null,seq__43430_43481__$1);
var G__43489 = null;
var G__43490 = (0);
var G__43491 = (0);
seq__43430_43471 = G__43488;
chunk__43431_43472 = G__43489;
count__43432_43473 = G__43490;
i__43433_43474 = G__43491;
continue;
}
} else {
}
}
break;
}

var seq__43434_43492 = cljs.core.seq.call(null,pmasks);
var chunk__43435_43493 = null;
var count__43436_43494 = (0);
var i__43437_43495 = (0);
while(true){
if((i__43437_43495 < count__43436_43494)){
var vec__43444_43496 = cljs.core._nth.call(null,chunk__43435_43493,i__43437_43495);
var pno_43497 = cljs.core.nth.call(null,vec__43444_43496,(0),null);
var pmask_43498 = cljs.core.nth.call(null,vec__43444_43496,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_43497,"$ = ",pmask_43498,";");


var G__43499 = seq__43434_43492;
var G__43500 = chunk__43435_43493;
var G__43501 = count__43436_43494;
var G__43502 = (i__43437_43495 + (1));
seq__43434_43492 = G__43499;
chunk__43435_43493 = G__43500;
count__43436_43494 = G__43501;
i__43437_43495 = G__43502;
continue;
} else {
var temp__5720__auto___43503 = cljs.core.seq.call(null,seq__43434_43492);
if(temp__5720__auto___43503){
var seq__43434_43504__$1 = temp__5720__auto___43503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43434_43504__$1)){
var c__21725__auto___43505 = cljs.core.chunk_first.call(null,seq__43434_43504__$1);
var G__43506 = cljs.core.chunk_rest.call(null,seq__43434_43504__$1);
var G__43507 = c__21725__auto___43505;
var G__43508 = cljs.core.count.call(null,c__21725__auto___43505);
var G__43509 = (0);
seq__43434_43492 = G__43506;
chunk__43435_43493 = G__43507;
count__43436_43494 = G__43508;
i__43437_43495 = G__43509;
continue;
} else {
var vec__43447_43510 = cljs.core.first.call(null,seq__43434_43504__$1);
var pno_43511 = cljs.core.nth.call(null,vec__43447_43510,(0),null);
var pmask_43512 = cljs.core.nth.call(null,vec__43447_43510,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_43511,"$ = ",pmask_43512,";");


var G__43513 = cljs.core.next.call(null,seq__43434_43504__$1);
var G__43514 = null;
var G__43515 = (0);
var G__43516 = (0);
seq__43434_43492 = G__43513;
chunk__43435_43493 = G__43514;
count__43436_43494 = G__43515;
i__43437_43495 = G__43516;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__43517){
var map__43518 = p__43517;
var map__43518__$1 = cljs.core.__destructure_map.call(null,map__43518);
var t = cljs.core.get.call(null,map__43518__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__43518__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__43518__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__43518__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__43518__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__43519_43543 = cljs.core.seq.call(null,protocols);
var chunk__43520_43544 = null;
var count__43521_43545 = (0);
var i__43522_43546 = (0);
while(true){
if((i__43522_43546 < count__43521_43545)){
var protocol_43547 = cljs.core._nth.call(null,chunk__43520_43544,i__43522_43546);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_43547)),"}");


var G__43548 = seq__43519_43543;
var G__43549 = chunk__43520_43544;
var G__43550 = count__43521_43545;
var G__43551 = (i__43522_43546 + (1));
seq__43519_43543 = G__43548;
chunk__43520_43544 = G__43549;
count__43521_43545 = G__43550;
i__43522_43546 = G__43551;
continue;
} else {
var temp__5720__auto___43552 = cljs.core.seq.call(null,seq__43519_43543);
if(temp__5720__auto___43552){
var seq__43519_43553__$1 = temp__5720__auto___43552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43519_43553__$1)){
var c__21725__auto___43554 = cljs.core.chunk_first.call(null,seq__43519_43553__$1);
var G__43555 = cljs.core.chunk_rest.call(null,seq__43519_43553__$1);
var G__43556 = c__21725__auto___43554;
var G__43557 = cljs.core.count.call(null,c__21725__auto___43554);
var G__43558 = (0);
seq__43519_43543 = G__43555;
chunk__43520_43544 = G__43556;
count__43521_43545 = G__43557;
i__43522_43546 = G__43558;
continue;
} else {
var protocol_43559 = cljs.core.first.call(null,seq__43519_43553__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_43559)),"}");


var G__43560 = cljs.core.next.call(null,seq__43519_43553__$1);
var G__43561 = null;
var G__43562 = (0);
var G__43563 = (0);
seq__43519_43543 = G__43560;
chunk__43520_43544 = G__43561;
count__43521_43545 = G__43562;
i__43522_43546 = G__43563;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__43523_43564 = cljs.core.seq.call(null,fields__$1);
var chunk__43524_43565 = null;
var count__43525_43566 = (0);
var i__43526_43567 = (0);
while(true){
if((i__43526_43567 < count__43525_43566)){
var fld_43568 = cljs.core._nth.call(null,chunk__43524_43565,i__43526_43567);
cljs.compiler.emitln.call(null,"this.",fld_43568," = ",fld_43568,";");


var G__43569 = seq__43523_43564;
var G__43570 = chunk__43524_43565;
var G__43571 = count__43525_43566;
var G__43572 = (i__43526_43567 + (1));
seq__43523_43564 = G__43569;
chunk__43524_43565 = G__43570;
count__43525_43566 = G__43571;
i__43526_43567 = G__43572;
continue;
} else {
var temp__5720__auto___43573 = cljs.core.seq.call(null,seq__43523_43564);
if(temp__5720__auto___43573){
var seq__43523_43574__$1 = temp__5720__auto___43573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43523_43574__$1)){
var c__21725__auto___43575 = cljs.core.chunk_first.call(null,seq__43523_43574__$1);
var G__43576 = cljs.core.chunk_rest.call(null,seq__43523_43574__$1);
var G__43577 = c__21725__auto___43575;
var G__43578 = cljs.core.count.call(null,c__21725__auto___43575);
var G__43579 = (0);
seq__43523_43564 = G__43576;
chunk__43524_43565 = G__43577;
count__43525_43566 = G__43578;
i__43526_43567 = G__43579;
continue;
} else {
var fld_43580 = cljs.core.first.call(null,seq__43523_43574__$1);
cljs.compiler.emitln.call(null,"this.",fld_43580," = ",fld_43580,";");


var G__43581 = cljs.core.next.call(null,seq__43523_43574__$1);
var G__43582 = null;
var G__43583 = (0);
var G__43584 = (0);
seq__43523_43564 = G__43581;
chunk__43524_43565 = G__43582;
count__43525_43566 = G__43583;
i__43526_43567 = G__43584;
continue;
}
} else {
}
}
break;
}

var seq__43527_43585 = cljs.core.seq.call(null,pmasks);
var chunk__43528_43586 = null;
var count__43529_43587 = (0);
var i__43530_43588 = (0);
while(true){
if((i__43530_43588 < count__43529_43587)){
var vec__43537_43589 = cljs.core._nth.call(null,chunk__43528_43586,i__43530_43588);
var pno_43590 = cljs.core.nth.call(null,vec__43537_43589,(0),null);
var pmask_43591 = cljs.core.nth.call(null,vec__43537_43589,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_43590,"$ = ",pmask_43591,";");


var G__43592 = seq__43527_43585;
var G__43593 = chunk__43528_43586;
var G__43594 = count__43529_43587;
var G__43595 = (i__43530_43588 + (1));
seq__43527_43585 = G__43592;
chunk__43528_43586 = G__43593;
count__43529_43587 = G__43594;
i__43530_43588 = G__43595;
continue;
} else {
var temp__5720__auto___43596 = cljs.core.seq.call(null,seq__43527_43585);
if(temp__5720__auto___43596){
var seq__43527_43597__$1 = temp__5720__auto___43596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43527_43597__$1)){
var c__21725__auto___43598 = cljs.core.chunk_first.call(null,seq__43527_43597__$1);
var G__43599 = cljs.core.chunk_rest.call(null,seq__43527_43597__$1);
var G__43600 = c__21725__auto___43598;
var G__43601 = cljs.core.count.call(null,c__21725__auto___43598);
var G__43602 = (0);
seq__43527_43585 = G__43599;
chunk__43528_43586 = G__43600;
count__43529_43587 = G__43601;
i__43530_43588 = G__43602;
continue;
} else {
var vec__43540_43603 = cljs.core.first.call(null,seq__43527_43597__$1);
var pno_43604 = cljs.core.nth.call(null,vec__43540_43603,(0),null);
var pmask_43605 = cljs.core.nth.call(null,vec__43540_43603,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_43604,"$ = ",pmask_43605,";");


var G__43606 = cljs.core.next.call(null,seq__43527_43597__$1);
var G__43607 = null;
var G__43608 = (0);
var G__43609 = (0);
seq__43527_43585 = G__43606;
chunk__43528_43586 = G__43607;
count__43529_43587 = G__43608;
i__43530_43588 = G__43609;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__43610){
var map__43611 = p__43610;
var map__43611__$1 = cljs.core.__destructure_map.call(null,map__43611);
var target = cljs.core.get.call(null,map__43611__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__43611__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__43611__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__43611__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__43611__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__43612){
var map__43613 = p__43612;
var map__43613__$1 = cljs.core.__destructure_map.call(null,map__43613);
var op = cljs.core.get.call(null,map__43613__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__43613__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__43613__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__43613__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__43613__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__20748__auto__ = code;
if(cljs.core.truth_(and__20748__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__20748__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__42405__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__42405__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__43618 = cljs.core.seq.call(null,table);
var chunk__43619 = null;
var count__43620 = (0);
var i__43621 = (0);
while(true){
if((i__43621 < count__43620)){
var vec__43628 = cljs.core._nth.call(null,chunk__43619,i__43621);
var sym = cljs.core.nth.call(null,vec__43628,(0),null);
var value = cljs.core.nth.call(null,vec__43628,(1),null);
var ns_43634 = cljs.core.namespace.call(null,sym);
var name_43635 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__43636 = seq__43618;
var G__43637 = chunk__43619;
var G__43638 = count__43620;
var G__43639 = (i__43621 + (1));
seq__43618 = G__43636;
chunk__43619 = G__43637;
count__43620 = G__43638;
i__43621 = G__43639;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__43618);
if(temp__5720__auto__){
var seq__43618__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43618__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__43618__$1);
var G__43640 = cljs.core.chunk_rest.call(null,seq__43618__$1);
var G__43641 = c__21725__auto__;
var G__43642 = cljs.core.count.call(null,c__21725__auto__);
var G__43643 = (0);
seq__43618 = G__43640;
chunk__43619 = G__43641;
count__43620 = G__43642;
i__43621 = G__43643;
continue;
} else {
var vec__43631 = cljs.core.first.call(null,seq__43618__$1);
var sym = cljs.core.nth.call(null,vec__43631,(0),null);
var value = cljs.core.nth.call(null,vec__43631,(1),null);
var ns_43644 = cljs.core.namespace.call(null,sym);
var name_43645 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__43646 = cljs.core.next.call(null,seq__43618__$1);
var G__43647 = null;
var G__43648 = (0);
var G__43649 = (0);
seq__43618 = G__43646;
chunk__43619 = G__43647;
count__43620 = G__43648;
i__43621 = G__43649;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__43651 = arguments.length;
switch (G__43651) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_43656 = cljs.core.first.call(null,ks);
var vec__43652_43657 = cljs.core.conj.call(null,prefix,k_43656);
var top_43658 = cljs.core.nth.call(null,vec__43652_43657,(0),null);
var prefix_SINGLEQUOTE__43659 = vec__43652_43657;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_43656)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__43659) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_43658)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_43658)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__43659)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_43658);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__43659)),";");
}
} else {
}

var m_43660 = cljs.core.get.call(null,externs,k_43656);
if(cljs.core.empty_QMARK_.call(null,m_43660)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__43659,m_43660,top_level,known_externs);
}

var G__43661 = cljs.core.next.call(null,ks);
ks = G__43661;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

