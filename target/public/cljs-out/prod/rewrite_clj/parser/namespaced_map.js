// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.parser.namespaced_map');
goog.require('cljs.core');
goog.require('rewrite_clj.node.namespaced_map');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.reader');
rewrite_clj.parser.namespaced_map.parse_qualifier = (function rewrite_clj$parser$namespaced_map$parse_qualifier(reader){
var auto_resolved_QMARK_ = cljs.core._EQ_.call(null,":",rewrite_clj.reader.read_while.call(null,reader,(function (c){
return cljs.core._EQ_.call(null,":",c);
})));
var prefix = rewrite_clj.reader.read_until.call(null,reader,(function (c){
var or__20754__auto__ = rewrite_clj.reader.boundary_QMARK_.call(null,c);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return rewrite_clj.reader.whitespace_QMARK_.call(null,c);
}
}));
return rewrite_clj.node.namespaced_map.map_qualifier_node.call(null,auto_resolved_QMARK_,((cljs.core.seq.call(null,prefix))?prefix:null));
});
rewrite_clj.parser.namespaced_map.parse_to_next_elem = (function rewrite_clj$parser$namespaced_map$parse_to_next_elem(reader,read_next){
var nodes = cljs.core.PersistentVector.EMPTY;
while(true){
var n = read_next.call(null,reader);
if(cljs.core.truth_((function (){var and__20748__auto__ = n;
if(cljs.core.truth_(and__20748__auto__)){
return rewrite_clj.node.whitespace.whitespace_QMARK_.call(null,n);
} else {
return and__20748__auto__;
}
})())){
var G__44571 = cljs.core.conj.call(null,nodes,n);
nodes = G__44571;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes,n], null);
}
break;
}
});
/**
 * The caller has parsed up to `#:` and delegates the details to us.
 */
rewrite_clj.parser.namespaced_map.parse_namespaced_map = (function rewrite_clj$parser$namespaced_map$parse_namespaced_map(reader,read_next){
rewrite_clj.reader.ignore.call(null,reader);

var qualifier_node = rewrite_clj.parser.namespaced_map.parse_qualifier.call(null,reader);
if(((cljs.core.not.call(null,qualifier_node.auto_resolved_QMARK_)) && ((qualifier_node.prefix == null)))){
rewrite_clj.reader.throw_reader.call(null,reader,"namespaced map expects a namespace");
} else {
}

var vec__44572 = rewrite_clj.parser.namespaced_map.parse_to_next_elem.call(null,reader,read_next);
var whitespace_nodes = cljs.core.nth.call(null,vec__44572,(0),null);
var map_node = cljs.core.nth.call(null,vec__44572,(1),null);
if(((cljs.core.not.call(null,map_node)) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),rewrite_clj.node.protocols.tag.call(null,map_node))))){
rewrite_clj.reader.throw_reader.call(null,reader,"namespaced map expects a map");
} else {
}

return rewrite_clj.node.namespaced_map.namespaced_map_node.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualifier_node], null),whitespace_nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [map_node], null)));
});
