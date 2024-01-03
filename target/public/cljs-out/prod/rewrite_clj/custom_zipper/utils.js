// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.custom_zipper.utils');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
rewrite_clj.custom_zipper.utils.update_in_path = (function rewrite_clj$custom_zipper$utils$update_in_path(p__44815,k,f){
var vec__44816 = p__44815;
var node = cljs.core.nth.call(null,vec__44816,(0),null);
var path = cljs.core.nth.call(null,vec__44816,(1),null);
var loc = vec__44816;
var v = cljs.core.get.call(null,path,k);
if(cljs.core.seq.call(null,v)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,k,f.call(null,v),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_right = (function rewrite_clj$custom_zipper$utils$remove_right(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__44819 = loc;
var map__44819__$1 = cljs.core.__destructure_map.call(null,map__44819);
var vec__44820 = cljs.core.get.call(null,map__44819__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__44821 = cljs.core.seq.call(null,vec__44820);
var first__44822 = cljs.core.first.call(null,seq__44821);
var seq__44821__$1 = cljs.core.next.call(null,seq__44821);
var _r = first__44822;
var rs = seq__44821__$1;
return cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"right","right",-452581833),rs,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return rewrite_clj.custom_zipper.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.next);
}
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_left = (function rewrite_clj$custom_zipper$utils$remove_left(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__44823 = loc;
var map__44823__$1 = cljs.core.__destructure_map.call(null,map__44823);
var left = cljs.core.get.call(null,map__44823__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var temp__5718__auto__ = cljs.core.peek.call(null,left);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__44824 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__44824,(0),null);
var lpos = cljs.core.nth.call(null,vec__44824,(1),null);
return cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop.call(null,left),new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return loc;
}
} else {
return rewrite_clj.custom_zipper.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop);
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.custom_zipper.utils.remove_right_while = (function rewrite_clj$custom_zipper$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5718__auto__ = rewrite_clj.custom_zipper.core.right.call(null,zloc__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var rloc = temp__5718__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,rloc))){
var G__44827 = rewrite_clj.custom_zipper.utils.remove_right.call(null,zloc__$1);
zloc__$1 = G__44827;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.custom_zipper.utils.remove_left_while = (function rewrite_clj$custom_zipper$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5718__auto__ = rewrite_clj.custom_zipper.core.left.call(null,zloc__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var lloc = temp__5718__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,lloc))){
var G__44828 = rewrite_clj.custom_zipper.utils.remove_left.call(null,zloc__$1);
zloc__$1 = G__44828;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.custom_zipper.utils.remove_and_move_left = (function rewrite_clj$custom_zipper$utils$remove_and_move_left(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__44829 = loc;
var map__44829__$1 = cljs.core.__destructure_map.call(null,map__44829);
var left = cljs.core.get.call(null,map__44829__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.seq.call(null,left)){
var vec__44830 = cljs.core.peek.call(null,left);
var lnode = cljs.core.nth.call(null,vec__44830,(0),null);
var lpos = cljs.core.nth.call(null,vec__44830,(1),null);
return cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop.call(null,left));
} else {
return null;
}
} else {
var vec__44833 = loc;
var _ = cljs.core.nth.call(null,vec__44833,(0),null);
var map__44836 = cljs.core.nth.call(null,vec__44833,(1),null);
var map__44836__$1 = cljs.core.__destructure_map.call(null,map__44836);
var path = map__44836__$1;
var l = cljs.core.get.call(null,map__44836__$1,new cljs.core.Keyword(null,"l","l",1395893423));
if(cljs.core.seq.call(null,l)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.custom_zipper.utils.remove_and_move_right = (function rewrite_clj$custom_zipper$utils$remove_and_move_right(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__44837 = loc;
var map__44837__$1 = cljs.core.__destructure_map.call(null,map__44837);
var right = cljs.core.get.call(null,map__44837__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.seq.call(null,right)){
return cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),cljs.core.first.call(null,right),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.next.call(null,right));
} else {
return null;
}
} else {
var vec__44838 = loc;
var _ = cljs.core.nth.call(null,vec__44838,(0),null);
var map__44841 = cljs.core.nth.call(null,vec__44838,(1),null);
var map__44841__$1 = cljs.core.__destructure_map.call(null,map__44841);
var path = map__44841__$1;
var r = cljs.core.get.call(null,map__44841__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.seq.call(null,r)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,r),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
}
});
/**
 * Remove the current node and move up.
 *  `[a [b |c d]] -> [a |[b d]]`
 *  `[a [|b c d]] -> [a |[c d]]`
 */
rewrite_clj.custom_zipper.utils.remove_and_move_up = (function rewrite_clj$custom_zipper$utils$remove_and_move_up(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__44842 = loc;
var map__44842__$1 = cljs.core.__destructure_map.call(null,map__44842);
var left = cljs.core.get.call(null,map__44842__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.seq.call(null,left)){
return rewrite_clj.custom_zipper.core.up.call(null,rewrite_clj.custom_zipper.core.remove.call(null,loc));
} else {
return rewrite_clj.custom_zipper.core.remove.call(null,loc);
}
} else {
var vec__44843 = loc;
var _node = cljs.core.nth.call(null,vec__44843,(0),null);
var map__44846 = cljs.core.nth.call(null,vec__44843,(1),null);
var map__44846__$1 = cljs.core.__destructure_map.call(null,map__44846);
var path = map__44846__$1;
var l = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((ppath == null)){
throw cljs.core.ex_info.call(null,"cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((cljs.core.count.call(null,l) > (0))){
return rewrite_clj.custom_zipper.core.up.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc)));
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.custom_zipper.core.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__20748__auto__ = ppath;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__20748__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
}
});
