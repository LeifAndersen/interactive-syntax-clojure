// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('cljs.analyzer.impl.namespaces');
goog.require('cljs.core');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__40134 = libspec;
var seq__40135 = cljs.core.seq.call(null,vec__40134);
var first__40136 = cljs.core.first.call(null,seq__40135);
var seq__40135__$1 = cljs.core.next.call(null,seq__40135);
var lib = first__40136;
var spec = seq__40135__$1;
var libspec__$1 = vec__40134;
var vec__40137 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__40137,(0),null);
var vec__40140 = cljs.core.nth.call(null,vec__40137,(1),null);
var seq__40141 = cljs.core.seq.call(null,vec__40140);
var first__40142 = cljs.core.first.call(null,seq__40141);
var seq__40141__$1 = cljs.core.next.call(null,seq__40141);
var _ = first__40142;
var first__40142__$1 = cljs.core.first.call(null,seq__40141__$1);
var seq__40141__$2 = cljs.core.next.call(null,seq__40141__$1);
var alias = first__40142__$1;
var post_spec = seq__40141__$2;
var post = vec__40140;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__40143 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__40143,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__40143;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__40144 = cljs.core.seq.call(null,new_as_aliases);
var chunk__40145 = null;
var count__40146 = (0);
var i__40147 = (0);
while(true){
if((i__40147 < count__40146)){
var vec__40154 = cljs.core._nth.call(null,chunk__40145,i__40147);
var alias = cljs.core.nth.call(null,vec__40154,(0),null);
var _ = cljs.core.nth.call(null,vec__40154,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__40160 = seq__40144;
var G__40161 = chunk__40145;
var G__40162 = count__40146;
var G__40163 = (i__40147 + (1));
seq__40144 = G__40160;
chunk__40145 = G__40161;
count__40146 = G__40162;
i__40147 = G__40163;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40144);
if(temp__5720__auto__){
var seq__40144__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40144__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__40144__$1);
var G__40164 = cljs.core.chunk_rest.call(null,seq__40144__$1);
var G__40165 = c__21725__auto__;
var G__40166 = cljs.core.count.call(null,c__21725__auto__);
var G__40167 = (0);
seq__40144 = G__40164;
chunk__40145 = G__40165;
count__40146 = G__40166;
i__40147 = G__40167;
continue;
} else {
var vec__40157 = cljs.core.first.call(null,seq__40144__$1);
var alias = cljs.core.nth.call(null,vec__40157,(0),null);
var _ = cljs.core.nth.call(null,vec__40157,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__40168 = cljs.core.next.call(null,seq__40144__$1);
var G__40169 = null;
var G__40170 = (0);
var G__40171 = (0);
seq__40144 = G__40168;
chunk__40145 = G__40169;
count__40146 = G__40170;
i__40147 = G__40171;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__40173 = arguments.length;
switch (G__40173) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (ret__$1,libspec){
var map__40174 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__40174__$1 = cljs.core.__destructure_map.call(null,map__40174);
var as_alias = cljs.core.get.call(null,map__40174__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__40174__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__40175 = ret__$1;
var G__40175__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__40175,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__40175);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__40175__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__40175__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__40177,p__40178){
var map__40179 = p__40177;
var map__40179__$1 = cljs.core.__destructure_map.call(null,map__40179);
var ret__$1 = map__40179__$1;
var as_aliases = cljs.core.get.call(null,map__40179__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__40180 = p__40178;
var seq__40181 = cljs.core.seq.call(null,vec__40180);
var first__40182 = cljs.core.first.call(null,seq__40181);
var seq__40181__$1 = cljs.core.next.call(null,seq__40181);
var spec_key = first__40182;
var libspecs = seq__40181__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__40183 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__40183__$1 = cljs.core.__destructure_map.call(null,map__40183);
var as_aliases__$1 = cljs.core.get.call(null,map__40183__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__40183__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__40184 = ret__$1;
var G__40184__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__40184,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__40184);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__40184__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__40184__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});
