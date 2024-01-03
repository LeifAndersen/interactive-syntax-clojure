// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.zip.seqz');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.editz');
goog.require('rewrite_clj.zip.findz');
goog.require('rewrite_clj.zip.insert');
goog.require('rewrite_clj.zip.move');
/**
 * Returns true if current node in `zloc` is a sequence.
 */
rewrite_clj.zip.seqz.seq_QMARK_ = (function rewrite_clj$zip$seqz$seq_QMARK_(zloc){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"forms","forms",2045992350),null], null), null),rewrite_clj.zip.base.tag.call(null,zloc));
});
/**
 * Returns true if current node in `zloc` is a list.
 */
rewrite_clj.zip.seqz.list_QMARK_ = (function rewrite_clj$zip$seqz$list_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"list","list",765357683));
});
/**
 * Returns true if current node in `zloc` is a vector.
 */
rewrite_clj.zip.seqz.vector_QMARK_ = (function rewrite_clj$zip$seqz$vector_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"vector","vector",1902966158));
});
/**
 * Returns true if current node in `zloc` is a set.
 */
rewrite_clj.zip.seqz.set_QMARK_ = (function rewrite_clj$zip$seqz$set_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"set","set",304602554));
});
/**
 * Returns true if current node in `zloc` is a map.
 */
rewrite_clj.zip.seqz.map_QMARK_ = (function rewrite_clj$zip$seqz$map_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"map","map",1371690461));
});
/**
 * Returns true if the current node in `zloc` is a namespaced map.
 */
rewrite_clj.zip.seqz.namespaced_map_QMARK_ = (function rewrite_clj$zip$seqz$namespaced_map_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
});
rewrite_clj.zip.seqz.map_seq = (function rewrite_clj$zip$seqz$map_seq(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

var temp__5718__auto__ = rewrite_clj.zip.move.down.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var zloc_n0 = temp__5718__auto__;
var G__46321 = f.call(null,zloc_n0);
var G__46321__$1 = (((G__46321 == null))?null:cljs.core.iterate.call(null,(function (loc){
var temp__5720__auto__ = rewrite_clj.zip.move.right.call(null,loc);
if(cljs.core.truth_(temp__5720__auto__)){
var zloc_n = temp__5720__auto__;
return f.call(null,zloc_n);
} else {
return null;
}
}),G__46321));
var G__46321__$2 = (((G__46321__$1 == null))?null:cljs.core.take_while.call(null,cljs.core.identity,G__46321__$1));
var G__46321__$3 = (((G__46321__$2 == null))?null:cljs.core.last.call(null,G__46321__$2));
if((G__46321__$3 == null)){
return null;
} else {
return rewrite_clj.zip.move.up.call(null,G__46321__$3);
}
} else {
return zloc;
}
});
rewrite_clj.zip.seqz.map_vals_STAR_ = (function rewrite_clj$zip$seqz$map_vals_STAR_(f,map_loc){
var loc = rewrite_clj.zip.move.down.call(null,map_loc);
var parent = map_loc;
while(true){
if(cljs.core.not.call(null,(function (){var and__20748__auto__ = loc;
if(cljs.core.truth_(and__20748__auto__)){
return rewrite_clj.custom_zipper.core.node.call(null,loc);
} else {
return and__20748__auto__;
}
})())){
return parent;
} else {
var temp__5718__auto__ = rewrite_clj.zip.move.right.call(null,loc);
if(cljs.core.truth_(temp__5718__auto__)){
var zloc_map_value = temp__5718__auto__;
var temp__5718__auto____$1 = f.call(null,zloc_map_value);
if(cljs.core.truth_(temp__5718__auto____$1)){
var new_zloc_map_value = temp__5718__auto____$1;
var G__46322 = rewrite_clj.zip.move.right.call(null,new_zloc_map_value);
var G__46323 = rewrite_clj.zip.move.up.call(null,new_zloc_map_value);
loc = G__46322;
parent = G__46323;
continue;
} else {
var G__46324 = rewrite_clj.zip.move.right.call(null,zloc_map_value);
var G__46325 = parent;
loc = G__46324;
parent = G__46325;
continue;
}
} else {
return parent;
}
}
break;
}
});
rewrite_clj.zip.seqz.map_loc = (function rewrite_clj$zip$seqz$map_loc(zloc){
if(rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)){
return rewrite_clj.zip.move.rightmost.call(null,rewrite_clj.zip.move.down.call(null,zloc));
} else {
return zloc;
}
});
rewrite_clj.zip.seqz.container_loc = (function rewrite_clj$zip$seqz$container_loc(zloc,map_loc){
if(rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)){
return rewrite_clj.zip.move.up.call(null,map_loc);
} else {
return map_loc;
}
});
/**
 * Returns `zloc` with function `f` applied to each value node of the current node.
 * Current node must be map node.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `f` arg is zloc positioned at value node and should return:
 *   - an updated zloc with zloc positioned at value node
 *   - a falsey value to leave value node unchanged
 * 
 *   Folks typically use [[edit]] for `f`.
 */
rewrite_clj.zip.seqz.map_vals = (function rewrite_clj$zip$seqz$map_vals(f,zloc){
if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (namespaced-map? zloc))"));
}

return rewrite_clj.zip.seqz.container_loc.call(null,zloc,rewrite_clj.zip.seqz.map_vals_STAR_.call(null,f,rewrite_clj.zip.seqz.map_loc.call(null,zloc)));
});
rewrite_clj.zip.seqz.map_keys_STAR_ = (function rewrite_clj$zip$seqz$map_keys_STAR_(f,map_loc){
var loc = rewrite_clj.zip.move.down.call(null,map_loc);
var parent = map_loc;
while(true){
if(cljs.core.not.call(null,(function (){var and__20748__auto__ = loc;
if(cljs.core.truth_(and__20748__auto__)){
return rewrite_clj.custom_zipper.core.node.call(null,loc);
} else {
return and__20748__auto__;
}
})())){
return parent;
} else {
var temp__5718__auto__ = f.call(null,loc);
if(cljs.core.truth_(temp__5718__auto__)){
var zloc_map_key = temp__5718__auto__;
var G__46326 = rewrite_clj.zip.move.right.call(null,rewrite_clj.zip.move.right.call(null,zloc_map_key));
var G__46327 = rewrite_clj.zip.move.up.call(null,zloc_map_key);
loc = G__46326;
parent = G__46327;
continue;
} else {
var G__46328 = rewrite_clj.zip.move.right.call(null,rewrite_clj.zip.move.right.call(null,loc));
var G__46329 = parent;
loc = G__46328;
parent = G__46329;
continue;
}
}
break;
}
});
/**
 * Returns `zloc` with function `f` applied to all key nodes of the current node.
 * Current node must be map node.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `f` arg is zloc positioned at key node and should return:
 *   - an updated zloc with zloc positioned at key node
 *   - a falsey value to leave value node unchanged
 * 
 *   Folks typically use [[rewrite-clj.zip/edit]] for `f`.
 */
rewrite_clj.zip.seqz.map_keys = (function rewrite_clj$zip$seqz$map_keys(f,zloc){
if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (namespaced-map? zloc))"));
}

return rewrite_clj.zip.seqz.container_loc.call(null,zloc,rewrite_clj.zip.seqz.map_keys_STAR_.call(null,f,rewrite_clj.zip.seqz.map_loc.call(null,zloc)));
});
/**
 * Returns `zloc` with function `f` applied to all nodes of the current node.
 *   Current node must be a sequence node. Equivalent to [[rewrite-clj.zip/map-vals]] for maps.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `f` arg is zloc positioned at
 *   - value nodes for maps
 *   - each element of a seq
 *   and is should return:
 *   - an updated zloc with zloc positioned at edited node
 *   - a falsey value to leave value node unchanged
 * 
 *   Folks typically use [[edit]] for `f`.
 */
rewrite_clj.zip.seqz.map = (function rewrite_clj$zip$seqz$map(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)))){
return rewrite_clj.zip.seqz.map_vals.call(null,f,zloc);
} else {
return rewrite_clj.zip.seqz.map_seq.call(null,f,zloc);
}
});
/**
 * Returns `zloc` located to map key node's sexpr value matching `k` else `nil`.
 * 
 *   `k` should be:
 *   - a key for maps
 *   - a zero-based index for sequences
 * 
 *   NOTE: `k` will be compared against resolved keywords in maps.
 *   See docs for sexpr behavior on [namespaced elements](/doc/01-user-guide.adoc#namespaced-elements).
 */
rewrite_clj.zip.seqz.get = (function rewrite_clj$zip$seqz$get(zloc,k){
if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (((rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)) || (((rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)) && (cljs.core.integer_QMARK_.call(null,k)))))))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (namespaced-map? zloc) (and (seq? zloc) (integer? k)))"));
}

if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)){
var G__46330 = zloc;
var G__46330__$1 = (((G__46330 == null))?null:rewrite_clj.zip.move.down.call(null,G__46330));
var G__46330__$2 = (((G__46330__$1 == null))?null:rewrite_clj.zip.findz.find_value.call(null,G__46330__$1,k));
if((G__46330__$2 == null)){
return null;
} else {
return rewrite_clj.zip.move.right.call(null,G__46330__$2);
}
} else {
if(rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)){
var G__46331 = zloc;
var G__46331__$1 = (((G__46331 == null))?null:rewrite_clj.zip.move.down.call(null,G__46331));
var G__46331__$2 = (((G__46331__$1 == null))?null:rewrite_clj.zip.move.rightmost.call(null,G__46331__$1));
var G__46331__$3 = (((G__46331__$2 == null))?null:rewrite_clj.zip.move.down.call(null,G__46331__$2));
var G__46331__$4 = (((G__46331__$3 == null))?null:rewrite_clj.zip.findz.find_value.call(null,G__46331__$3,k));
if((G__46331__$4 == null)){
return null;
} else {
return rewrite_clj.zip.move.right.call(null,G__46331__$4);
}
} else {
return cljs.core.nth.call(null,(function (){var G__46332 = rewrite_clj.zip.move.down.call(null,zloc);
var G__46332__$1 = (((G__46332 == null))?null:cljs.core.iterate.call(null,rewrite_clj.zip.move.right,G__46332));
if((G__46332__$1 == null)){
return null;
} else {
return cljs.core.take_while.call(null,cljs.core.identity,G__46332__$1);
}
})(),k);

}
}
});
/**
 * Returns `zloc` with current node's `k` set to value `v`.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `k` should be:
 *   - a key for maps
 *   - a zero-based index for sequences, an exception is thrown if index is out of bounds
 * 
 *   NOTE: `k` will be compared against resolved keywords in maps.
 *   See docs for sexpr behavior on [namespaced elements](/doc/01-user-guide.adoc#namespaced-elements).
 */
rewrite_clj.zip.seqz.assoc = (function rewrite_clj$zip$seqz$assoc(zloc,k,v){
return rewrite_clj.zip.seqz.container_loc.call(null,zloc,(function (){var temp__5718__auto__ = rewrite_clj.zip.seqz.get.call(null,zloc,k);
if(cljs.core.truth_(temp__5718__auto__)){
var value_loc = temp__5718__auto__;
return rewrite_clj.zip.move.up.call(null,rewrite_clj.zip.editz.replace.call(null,value_loc,v));
} else {
if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)))){
return rewrite_clj.zip.insert.append_child.call(null,rewrite_clj.zip.insert.append_child.call(null,rewrite_clj.zip.seqz.map_loc.call(null,zloc),k),v);
} else {
throw cljs.core.ex_info.call(null,["index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
})());
});
