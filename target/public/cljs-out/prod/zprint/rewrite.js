// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('zprint.rewrite');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zutil');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
zprint.rewrite.prewalk_subtree = (function zprint$rewrite$prewalk_subtree(p_QMARK_,f,zloc){
var loc = zloc;
while(true){
if(cljs.core.truth_(rewrite_clj.zip.end_QMARK_.call(null,loc))){
return loc;
} else {
if(cljs.core.truth_(p_QMARK_.call(null,loc))){
var temp__5718__auto__ = f.call(null,loc);
if(cljs.core.truth_(temp__5718__auto__)){
var n = temp__5718__auto__;
var G__54188 = rewrite_clj.zip.next.call(null,n);
loc = G__54188;
continue;
} else {
var G__54189 = rewrite_clj.zip.next.call(null,loc);
loc = G__54189;
continue;
}
} else {
var G__54190 = rewrite_clj.zip.next.call(null,loc);
loc = G__54190;
continue;
}
}
break;
}
});
zprint.rewrite.prewalk = (function zprint$rewrite$prewalk(zloc,p_QMARK_,f){
return rewrite_clj.zip.replace.call(null,zloc,rewrite_clj.zip.root.call(null,zprint.rewrite.prewalk_subtree.call(null,p_QMARK_,f,(function (){var G__54191 = zloc;
var G__54191__$1 = (((G__54191 == null))?null:rewrite_clj.zip.node.call(null,G__54191));
if((G__54191__$1 == null)){
return null;
} else {
return rewrite_clj.zip.of_node_STAR_.call(null,G__54191__$1);
}
})())));
});
/**
 * Given a zloc, get something out of it that is sortable.
 */
zprint.rewrite.get_sortable = (function zprint$rewrite$get_sortable(zloc){
var nloc = zloc;
while(true){
if(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"token","token",-1211463215))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.string.call(null,nloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var next_element = rewrite_clj.zip.right.call(null,nloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,next_element),new cljs.core.Keyword(null,"token","token",-1211463215))){
return rewrite_clj.zip.string.call(null,next_element);
} else {
return "";
}
})())].join('');
} else {
var G__54192 = rewrite_clj.zip.down.call(null,nloc);
nloc = G__54192;
continue;
}
break;
}
});
/**
 * Sort the everything in the vector to the right of zloc.
 */
zprint.rewrite.sort_val = (function zprint$rewrite$sort_val(zloc){
var dep_val = zloc;
var dep_seq = (function (){var nloc = zloc;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(nloc)){
var G__54193 = rewrite_clj.zip.right.call(null,nloc);
var G__54194 = cljs.core.conj.call(null,out,nloc);
nloc = G__54193;
out = G__54194;
continue;
} else {
return out;
}
break;
}
})();
var dep_count = cljs.core.count.call(null,dep_seq);
var sorted_seq = cljs.core.sort_by.call(null,zprint.rewrite.get_sortable,dep_seq);
var nloc = zloc;
var new_loc = sorted_seq;
var last_loc = null;
while(true){
if(cljs.core.truth_(new_loc)){
var new_z = cljs.core.first.call(null,new_loc);
var new_node = ((cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,new_z),new cljs.core.Keyword(null,"uneval","uneval",1932037707)))?rewrite_clj.parser.parse_string.call(null,rewrite_clj.zip.string.call(null,new_z)):rewrite_clj.zip.node.call(null,new_z));
var replaced_loc = clojure.zip.replace.call(null,nloc,new_node);
var G__54195 = rewrite_clj.zip.right.call(null,replaced_loc);
var G__54196 = cljs.core.next.call(null,new_loc);
var G__54197 = replaced_loc;
nloc = G__54195;
new_loc = G__54196;
last_loc = G__54197;
continue;
} else {
return rewrite_clj.zip.up.call(null,last_loc);
}
break;
}
});
/**
 * Do a down and a sort-val
 */
zprint.rewrite.sort_down = (function zprint$rewrite$sort_down(zloc){
return zprint.rewrite.sort_val.call(null,rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,zloc)));
});
/**
 * Reorder the dependencies in a project.clj file.
 */
zprint.rewrite.sort_dependencies = (function zprint$rewrite$sort_dependencies(caller,options,zloc){
var new_dep = zprint.rewrite.prewalk.call(null,zloc,(function (p1__54198_SHARP_){
return ((cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,p1__54198_SHARP_),new cljs.core.Keyword(null,"token","token",-1211463215))) && (cljs.core._EQ_.call(null,rewrite_clj.zip.sexpr.call(null,p1__54198_SHARP_),new cljs.core.Keyword(null,"dependencies","dependencies",1108064605))));
}),zprint.rewrite.sort_down);
return new_dep;
});
