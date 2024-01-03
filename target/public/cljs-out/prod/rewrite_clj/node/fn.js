// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.node.fn');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('rewrite_clj.interop');
goog.require('rewrite_clj.node.protocols');
/**
 * Construct function form.
 */
rewrite_clj.node.fn.construct_fn = (function rewrite_clj$node$fn$construct_fn(fixed_arg_syms,vararg_sym,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.concat.call(null,fixed_arg_syms,(cljs.core.truth_(vararg_sym)?(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),(new cljs.core.List(null,vararg_sym,null,(1),null)),(2),null)):null))),(new cljs.core.List(null,body,null,(1),null)),(2),null)),(3),null));
});
/**
 * Get index based on the substring following the arg's `%`.
 * Zero means vararg.
 */
rewrite_clj.node.fn.arg_index = (function rewrite_clj$node$fn$arg_index(n){
if(cljs.core._EQ_.call(null,n,"&")){
return (0);
} else {
if(cljs.core._EQ_.call(null,n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,n))){
return rewrite_clj.interop.str__GT_int.call(null,n);
} else {
throw cljs.core.ex_info.call(null,"arg literal must be %, %& or %integer.",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
rewrite_clj.node.fn.arg_symbol__GT_gensym = (function rewrite_clj$node$fn$arg_symbol__GT_gensym(gensym_seq,vararg_QMARK_,max_fixed_arg_ndx,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name.call(null,sym);
if(clojure.string.starts_with_QMARK_.call(null,nm,"%")){
var param_ndx = rewrite_clj.node.fn.arg_index.call(null,cljs.core.subs.call(null,nm,(1)));
if(((cljs.core._EQ_.call(null,param_ndx,(0))) && (cljs.core.not.call(null,cljs.core.deref.call(null,vararg_QMARK_))))){
cljs.core.reset_BANG_.call(null,vararg_QMARK_,true);
} else {
}

cljs.core.swap_BANG_.call(null,max_fixed_arg_ndx,cljs.core.max,param_ndx);

return cljs.core.nth.call(null,gensym_seq,param_ndx);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
rewrite_clj.node.fn.fn_walk = (function rewrite_clj$node$fn$fn_walk(form){
var sym_seq = (function (){var iter__21676__auto__ = (function rewrite_clj$node$fn$fn_walk_$_iter__44388(s__44389){
return (new cljs.core.LazySeq(null,(function (){
var s__44389__$1 = s__44389;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__44389__$1);
if(temp__5720__auto__){
var s__44389__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44389__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__44389__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__44391 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__44390 = (0);
while(true){
if((i__44390 < size__21675__auto__)){
var i = cljs.core._nth.call(null,c__21674__auto__,i__44390);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
cljs.core.chunk_append.call(null,b__44391,cljs.core.symbol.call(null,[s,"#"].join('')));

var G__44392 = (i__44390 + (1));
i__44390 = G__44392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44391),rewrite_clj$node$fn$fn_walk_$_iter__44388.call(null,cljs.core.chunk_rest.call(null,s__44389__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44391),null);
}
} else {
var i = cljs.core.first.call(null,s__44389__$2);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
return cljs.core.cons.call(null,cljs.core.symbol.call(null,[s,"#"].join('')),rewrite_clj$node$fn$fn_walk_$_iter__44388.call(null,cljs.core.rest.call(null,s__44389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,cljs.core.range.call(null));
})();
var max_fixed_arg_ndx = cljs.core.atom.call(null,(0));
var vararg_QMARK_ = cljs.core.atom.call(null,false);
var body = clojure.walk.prewalk.call(null,(function (p1__44387_SHARP_){
var or__20754__auto__ = rewrite_clj.node.fn.arg_symbol__GT_gensym.call(null,sym_seq,vararg_QMARK_,max_fixed_arg_ndx,p1__44387_SHARP_);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return p1__44387_SHARP_;
}
}),form);
return rewrite_clj.node.fn.construct_fn.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,max_fixed_arg_ndx),cljs.core.rest.call(null,sym_seq)),(cljs.core.truth_(cljs.core.deref.call(null,vararg_QMARK_))?cljs.core.first.call(null,sym_seq):null),body);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.fn.Object}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.fn.FnNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.fn.FnNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k44394,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__44398 = k44394;
var G__44398__$1 = (((G__44398 instanceof cljs.core.Keyword))?G__44398.fqn:null);
switch (G__44398__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44394,else__21451__auto__);

}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__44399){
var vec__44400 = p__44399;
var k__21472__auto__ = cljs.core.nth.call(null,vec__44400,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__44400,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#rewrite-clj.node.fn.FnNode{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44393){
var self__ = this;
var G__44393__$1 = this;
return (new cljs.core.RecordIter((0),G__44393__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (-1740346885 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44395,other44396){
var self__ = this;
var this44395__$1 = this;
return (((!((other44396 == null)))) && ((((this44395__$1.constructor === other44396.constructor)) && (((cljs.core._EQ_.call(null,this44395__$1.children,other44396.children)) && (cljs.core._EQ_.call(null,this44395__$1.__extmap,other44396.__extmap)))))));
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.fn.fn_walk.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children,opts));
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((3) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ["#(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children)),")"].join('');
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (node,children_SINGLEQUOTE_){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.call(null,node__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (2);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k44394){
var self__ = this;
var this__21455__auto____$1 = this;
var G__44403 = k44394;
var G__44403__$1 = (((G__44403 instanceof cljs.core.Keyword))?G__44403.fqn:null);
switch (G__44403__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k44394);

}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__44393){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__44404 = cljs.core.keyword_identical_QMARK_;
var expr__44405 = k__21457__auto__;
if(cljs.core.truth_(pred__44404.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__44405))){
return (new rewrite_clj.node.fn.FnNode(G__44393,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__44393),null));
}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__44393){
var self__ = this;
var this__21447__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,G__44393,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(rewrite_clj.node.fn.FnNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.fn.FnNode.cljs$lang$type = true);

(rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.fn/FnNode",null,(1),null));
}));

(rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"rewrite-clj.node.fn/FnNode");
}));

/**
 * Positional factory function for rewrite-clj.node.fn/FnNode.
 */
rewrite_clj.node.fn.__GT_FnNode = (function rewrite_clj$node$fn$__GT_FnNode(children){
return (new rewrite_clj.node.fn.FnNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.fn/FnNode, taking a map of keywords to field values.
 */
rewrite_clj.node.fn.map__GT_FnNode = (function rewrite_clj$node$fn$map__GT_FnNode(G__44397){
var extmap__21490__auto__ = (function (){var G__44407 = cljs.core.dissoc.call(null,G__44397,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_.call(null,G__44397)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__44407);
} else {
return G__44407;
}
})();
return (new rewrite_clj.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__44397),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_.call(null,rewrite_clj.node.fn.FnNode);
/**
 * Create node representing an anonymous function with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/fn-node [(n/token-node '+)
 *                 (n/spaces 1)
 *                 (n/token-node 1)
 *                 (n/spaces 1)
 *                 (n/token-node '%1)])
 *     n/string)
 * ;; => "#(+ 1 %1)"
 * ```
 */
rewrite_clj.node.fn.fn_node = (function rewrite_clj$node$fn$fn_node(children){
return rewrite_clj.node.fn.__GT_FnNode.call(null,children);
});
