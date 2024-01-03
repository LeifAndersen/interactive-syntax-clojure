// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.custom_zipper.core');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('rewrite_clj.custom_zipper.switchable');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.custom_zipper.core.custom_zipper = (function rewrite_clj$custom_zipper$core$custom_zipper(root){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),root,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.List.EMPTY], null);
});
rewrite_clj.custom_zipper.core.zipper = (function rewrite_clj$custom_zipper$core$zipper(root){
return clojure.zip.zipper.call(null,rewrite_clj.node.protocols.inner_QMARK_,cljs.core.comp.call(null,cljs.core.seq,rewrite_clj.node.protocols.children),rewrite_clj.node.protocols.replace_children,root);
});
rewrite_clj.custom_zipper.core.custom_zipper_QMARK_ = (function rewrite_clj$custom_zipper$core$custom_zipper_QMARK_(value){
return new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625).cljs$core$IFn$_invoke$arity$1(value);
});
/**
 * Returns the current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.node = (function rewrite_clj$custom_zipper$core$node(G__44744){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44744))){
var zloc = G__44744;
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.node.call(null,G__44744);
}
});
/**
 * Returns true if the current node in `zloc` is a branch.
 */
rewrite_clj.custom_zipper.core.branch_QMARK_ = (function rewrite_clj$custom_zipper$core$branch_QMARK_(G__44745){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44745))){
var zloc = G__44745;
return rewrite_clj.node.protocols.inner_QMARK_.call(null,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.branch_QMARK_.call(null,G__44745);
}
});
/**
 * Returns a seq of the children of current node in `zloc`, which must be a branch.
 */
rewrite_clj.custom_zipper.core.children = (function rewrite_clj$custom_zipper$core$children(G__44746){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44746))){
var map__44747 = G__44746;
var map__44747__$1 = cljs.core.__destructure_map.call(null,map__44747);
var zloc = map__44747__$1;
var node = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc))){
return cljs.core.seq.call(null,rewrite_clj.node.protocols.children.call(null,node));
} else {
throw cljs.core.ex_info.call(null,"called children on a leaf node",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return clojure.zip.children.call(null,G__44746);
}
});
/**
 * Returns a new branch node, given an existing `node` and new
 *   `children`. 
 */
rewrite_clj.custom_zipper.core.make_node = (function rewrite_clj$custom_zipper$core$make_node(G__44748,G__44749,G__44750){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44748))){
var _zloc = G__44748;
var node = G__44749;
var children = G__44750;
return rewrite_clj.node.protocols.replace_children.call(null,node,children);
} else {
return clojure.zip.make_node.call(null,G__44748,G__44749,G__44750);
}
});
/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position = (function rewrite_clj$custom_zipper$core$position(zloc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,zloc))){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
throw cljs.core.ex_info.call(null,["to use position functions, please construct your zipper with ","':track-position?'  set to true."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 *   `end-col` is exclusive.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position_span = (function rewrite_clj$custom_zipper$core$position_span(zloc){
var start_pos = rewrite_clj.custom_zipper.core.position.call(null,zloc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_pos,rewrite_clj.node.protocols._PLUS_extent.call(null,start_pos,rewrite_clj.node.protocols.extent.call(null,rewrite_clj.custom_zipper.core.node.call(null,zloc)))], null);
});
/**
 * Returns a seq of the left siblings of current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.lefts = (function rewrite_clj$custom_zipper$core$lefts(G__44751){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44751))){
var zloc = G__44751;
return cljs.core.map.call(null,cljs.core.first,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.lefts.call(null,G__44751);
}
});
/**
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 */
rewrite_clj.custom_zipper.core.down = (function rewrite_clj$custom_zipper$core$down(G__44752){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44752))){
var zloc = G__44752;
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc))){
var map__44753 = zloc;
var map__44753__$1 = cljs.core.__destructure_map.call(null,map__44753);
var vec__44754 = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var row = cljs.core.nth.call(null,vec__44754,(0),null);
var col = cljs.core.nth.call(null,vec__44754,(1),null);
var node = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"node","node",581201198));
var vec__44757 = rewrite_clj.custom_zipper.core.children.call(null,zloc);
var seq__44758 = cljs.core.seq.call(null,vec__44757);
var first__44759 = cljs.core.first.call(null,seq__44758);
var seq__44758__$1 = cljs.core.next.call(null,seq__44758);
var c = first__44759;
var cnext = seq__44758__$1;
var cs = vec__44757;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),c,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + rewrite_clj.node.protocols.leader_length.call(null,node))], null),new cljs.core.Keyword(null,"parent","parent",-878878779),zloc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cnext], null),cljs.core.meta.call(null,zloc));
} else {
return null;
}
} else {
return null;
}
} else {
return clojure.zip.down.call(null,G__44752);
}
});
/**
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 */
rewrite_clj.custom_zipper.core.up = (function rewrite_clj$custom_zipper$core$up(G__44760){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44760))){
var zloc = G__44760;
var map__44761 = zloc;
var map__44761__$1 = cljs.core.__destructure_map.call(null,map__44761);
var node = cljs.core.get.call(null,map__44761__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.call(null,map__44761__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.call(null,map__44761__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__44761__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var changed_QMARK_ = cljs.core.get.call(null,map__44761__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(parent)){
if(cljs.core.truth_(changed_QMARK_)){
return cljs.core.assoc.call(null,parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,left),cljs.core.cons.call(null,node,right))));
} else {
return parent;
}
} else {
return null;
}
} else {
return clojure.zip.up.call(null,G__44760);
}
});
/**
 * Zips all the way up `zloc` and returns the root node, reflecting any changes.
 */
rewrite_clj.custom_zipper.core.root = (function rewrite_clj$custom_zipper$core$root(G__44762){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44762))){
var zloc = G__44762;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return rewrite_clj.custom_zipper.core.node.call(null,zloc);
} else {
var p = rewrite_clj.custom_zipper.core.up.call(null,zloc);
if(cljs.core.truth_(p)){
var G__44763 = p;
G__44762 = G__44763;
continue;
} else {
return rewrite_clj.custom_zipper.core.node.call(null,zloc);
}
}
} else {
return clojure.zip.root.call(null,G__44762);
}
break;
}
});
/**
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.right = (function rewrite_clj$custom_zipper$core$right(G__44764){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44764))){
var zloc = G__44764;
var map__44765 = zloc;
var map__44765__$1 = cljs.core.__destructure_map.call(null,map__44765);
var vec__44766 = cljs.core.get.call(null,map__44765__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__44767 = cljs.core.seq.call(null,vec__44766);
var first__44768 = cljs.core.first.call(null,seq__44767);
var seq__44767__$1 = cljs.core.next.call(null,seq__44767);
var r = first__44768;
var rnext = seq__44767__$1;
var right = vec__44766;
var node = cljs.core.get.call(null,map__44765__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.call(null,map__44765__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.call(null,map__44765__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.call(null,map__44765__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_((function (){var and__20748__auto__ = parent;
if(cljs.core.truth_(and__20748__auto__)){
return right;
} else {
return and__20748__auto__;
}
})())){
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198),r,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.call(null,left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,position], null)),new cljs.core.Keyword(null,"right","right",-452581833),rnext,new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent.call(null,position,rewrite_clj.node.protocols.extent.call(null,node)));
} else {
return null;
}
} else {
return clojure.zip.right.call(null,G__44764);
}
});
/**
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.rightmost = (function rewrite_clj$custom_zipper$core$rightmost(G__44769){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44769))){
var zloc = G__44769;
var temp__5718__auto__ = rewrite_clj.custom_zipper.core.right.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var next = temp__5718__auto__;
var G__44770 = next;
G__44769 = G__44770;
continue;
} else {
return zloc;
}
} else {
return clojure.zip.rightmost.call(null,G__44769);
}
break;
}
});
/**
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.left = (function rewrite_clj$custom_zipper$core$left(G__44771){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44771))){
var zloc = G__44771;
var map__44772 = zloc;
var map__44772__$1 = cljs.core.__destructure_map.call(null,map__44772);
var node = cljs.core.get.call(null,map__44772__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.call(null,map__44772__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.call(null,map__44772__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__44772__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__20748__auto__ = parent;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.seq.call(null,left);
} else {
return and__20748__auto__;
}
})())){
var vec__44773 = cljs.core.peek.call(null,left);
var lnode = cljs.core.nth.call(null,vec__44773,(0),null);
var lpos = cljs.core.nth.call(null,vec__44773,(1),null);
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop.call(null,left),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons.call(null,node,right));
} else {
return null;
}
} else {
return clojure.zip.left.call(null,G__44771);
}
});
/**
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.leftmost = (function rewrite_clj$custom_zipper$core$leftmost(G__44776){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44776))){
var zloc = G__44776;
var map__44777 = zloc;
var map__44777__$1 = cljs.core.__destructure_map.call(null,map__44777);
var node = cljs.core.get.call(null,map__44777__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.call(null,map__44777__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.call(null,map__44777__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__44777__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__20748__auto__ = parent;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.seq.call(null,left);
} else {
return and__20748__auto__;
}
})())){
var vec__44778 = cljs.core.first.call(null,left);
var lnode = cljs.core.nth.call(null,vec__44778,(0),null);
var lpos = cljs.core.nth.call(null,vec__44778,(1),null);
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,left)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),right));
} else {
return zloc;
}
} else {
return clojure.zip.leftmost.call(null,G__44776);
}
});
/**
 * Returns zipper with node `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 */
rewrite_clj.custom_zipper.core.insert_left = (function rewrite_clj$custom_zipper$core$insert_left(G__44781,G__44782){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44781))){
var zloc = G__44781;
var item = G__44782;
var map__44783 = zloc;
var map__44783__$1 = cljs.core.__destructure_map.call(null,map__44783);
var parent = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.not.call(null,parent)){
throw cljs.core.ex_info.call(null,"cannot insert left at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.call(null,left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,position], null)),new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent.call(null,position,rewrite_clj.node.protocols.extent.call(null,item)));
}
} else {
return clojure.zip.insert_left.call(null,G__44781,G__44782);
}
});
/**
 * Returns zipper with node `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_right = (function rewrite_clj$custom_zipper$core$insert_right(G__44784,G__44785){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44784))){
var zloc = G__44784;
var item = G__44785;
var map__44786 = zloc;
var map__44786__$1 = cljs.core.__destructure_map.call(null,map__44786);
var parent = cljs.core.get.call(null,map__44786__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var right = cljs.core.get.call(null,map__44786__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not.call(null,parent)){
throw cljs.core.ex_info.call(null,"cannot insert right at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons.call(null,item,right));
}
} else {
return clojure.zip.insert_right.call(null,G__44784,G__44785);
}
});
/**
 * Returns zipper with node `item` replacing current node in `zloc`, without moving location.
 */
rewrite_clj.custom_zipper.core.replace = (function rewrite_clj$custom_zipper$core$replace(G__44787,G__44788){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44787))){
var zloc = G__44787;
var item = G__44788;
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),item);
} else {
return clojure.zip.replace.call(null,G__44787,G__44788);
}
});
/**
 * Returns zipper with value of `(apply f current-node args)` replacing current node in `zloc`.
 * 
 * The result of `f` should be a rewrite-clj node.
 */
rewrite_clj.custom_zipper.core.edit = (function rewrite_clj$custom_zipper$core$edit(var_args){
var args__22092__auto__ = [];
var len__22082__auto___44792 = arguments.length;
var i__22083__auto___44793 = (0);
while(true){
if((i__22083__auto___44793 < len__22082__auto___44792)){
args__22092__auto__.push((arguments[i__22083__auto___44793]));

var G__44794 = (i__22083__auto___44793 + (1));
i__22083__auto___44793 = G__44794;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,zloc))){
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,cljs.core.apply.call(null,f,rewrite_clj.custom_zipper.core.node.call(null,zloc),args));
} else {
return cljs.core.apply.call(null,clojure.zip.edit,zloc,f,args);
}
}));

(rewrite_clj.custom_zipper.core.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.custom_zipper.core.edit.cljs$lang$applyTo = (function (seq44789){
var G__44790 = cljs.core.first.call(null,seq44789);
var seq44789__$1 = cljs.core.next.call(null,seq44789);
var G__44791 = cljs.core.first.call(null,seq44789__$1);
var seq44789__$2 = cljs.core.next.call(null,seq44789__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44790,G__44791,seq44789__$2);
}));

/**
 * Returns zipper with node `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_child = (function rewrite_clj$custom_zipper$core$insert_child(G__44795,G__44796){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44795))){
var zloc = G__44795;
var item = G__44796;
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,rewrite_clj.custom_zipper.core.make_node.call(null,zloc,rewrite_clj.custom_zipper.core.node.call(null,zloc),cljs.core.cons.call(null,item,rewrite_clj.custom_zipper.core.children.call(null,zloc))));
} else {
return clojure.zip.insert_child.call(null,G__44795,G__44796);
}
});
/**
 * Returns zipper with node `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 */
rewrite_clj.custom_zipper.core.append_child = (function rewrite_clj$custom_zipper$core$append_child(G__44797,G__44798){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44797))){
var zloc = G__44797;
var item = G__44798;
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,rewrite_clj.custom_zipper.core.make_node.call(null,zloc,rewrite_clj.custom_zipper.core.node.call(null,zloc),cljs.core.concat.call(null,rewrite_clj.custom_zipper.core.children.call(null,zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
} else {
return clojure.zip.append_child.call(null,G__44797,G__44798);
}
});
/**
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 */
rewrite_clj.custom_zipper.core.next = (function rewrite_clj$custom_zipper$core$next(G__44799){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44799))){
var zloc = G__44799;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return zloc;
} else {
var or__20754__auto__ = (function (){var and__20748__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__20748__auto__)){
return rewrite_clj.custom_zipper.core.down.call(null,zloc);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = rewrite_clj.custom_zipper.core.right.call(null,zloc);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var p = zloc;
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.up.call(null,p))){
var or__20754__auto____$2 = rewrite_clj.custom_zipper.core.right.call(null,rewrite_clj.custom_zipper.core.up.call(null,p));
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var G__44800 = rewrite_clj.custom_zipper.core.up.call(null,p);
p = G__44800;
continue;
}
} else {
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"end?","end?",-1423391609),true);
}
break;
}
}
}
}
} else {
return clojure.zip.next.call(null,G__44799);
}
});
/**
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 */
rewrite_clj.custom_zipper.core.prev = (function rewrite_clj$custom_zipper$core$prev(G__44801){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44801))){
var zloc = G__44801;
var temp__5718__auto__ = rewrite_clj.custom_zipper.core.left.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var lloc = temp__5718__auto__;
var zloc__$1 = lloc;
while(true){
var temp__5718__auto____$1 = (function (){var and__20748__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc__$1);
if(cljs.core.truth_(and__20748__auto__)){
return rewrite_clj.custom_zipper.core.down.call(null,zloc__$1);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var child = temp__5718__auto____$1;
var G__44802 = rewrite_clj.custom_zipper.core.rightmost.call(null,child);
zloc__$1 = G__44802;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return rewrite_clj.custom_zipper.core.up.call(null,zloc);
}
} else {
return clojure.zip.prev.call(null,G__44801);
}
});
/**
 * Returns true if at end of depth-first walk in `zloc`.
 */
rewrite_clj.custom_zipper.core.end_QMARK_ = (function rewrite_clj$custom_zipper$core$end_QMARK_(G__44803){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44803))){
var zloc = G__44803;
return new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.end_QMARK_.call(null,G__44803);
}
});
/**
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 */
rewrite_clj.custom_zipper.core.remove = (function rewrite_clj$custom_zipper$core$remove(G__44804){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__44804))){
var zloc = G__44804;
var map__44805 = zloc;
var map__44805__$1 = cljs.core.__destructure_map.call(null,map__44805);
var parent = cljs.core.get.call(null,map__44805__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.call(null,map__44805__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__44805__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not.call(null,parent)){
throw cljs.core.ex_info.call(null,"cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq.call(null,left)){
var zloc__$1 = (function (){var vec__44809 = cljs.core.peek.call(null,left);
var lnode = cljs.core.nth.call(null,vec__44809,(0),null);
var lpos = cljs.core.nth.call(null,vec__44809,(1),null);
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop.call(null,left));
})();
while(true){
var temp__5718__auto__ = (function (){var and__20748__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc__$1);
if(cljs.core.truth_(and__20748__auto__)){
return rewrite_clj.custom_zipper.core.down.call(null,zloc__$1);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
var G__44812 = rewrite_clj.custom_zipper.core.rightmost.call(null,child);
zloc__$1 = G__44812;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return cljs.core.assoc.call(null,parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),right));
}
}
} else {
return clojure.zip.remove.call(null,G__44804);
}
});
