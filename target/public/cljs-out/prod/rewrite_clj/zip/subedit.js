// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.zip.subedit');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.options');
/**
 * Generate a seq representing a path to the current node
 * starting at the root. Each element represents one `z/down`
 * and the value of each element will be the number of `z/right`s
 * to run.
 */
rewrite_clj.zip.subedit.path = (function rewrite_clj$zip$subedit$path(zloc){
return cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,rewrite_clj.custom_zipper.core.lefts),cljs.core.take_while.call(null,rewrite_clj.custom_zipper.core.up,cljs.core.iterate.call(null,rewrite_clj.custom_zipper.core.up,zloc))));
});
/**
 * Move one down and `n` steps to the right.
 */
rewrite_clj.zip.subedit.move_step = (function rewrite_clj$zip$subedit$move_step(loc,n){
return cljs.core.nth.call(null,cljs.core.iterate.call(null,rewrite_clj.custom_zipper.core.right,rewrite_clj.custom_zipper.core.down.call(null,loc)),n);
});
/**
 * Move to the node represented by the given path.
 */
rewrite_clj.zip.subedit.move_to = (function rewrite_clj$zip$subedit$move_to(zloc,path){
var root = rewrite_clj.zip.base.of_node_STAR_.call(null,rewrite_clj.custom_zipper.core.root.call(null,zloc),rewrite_clj.zip.options.get_opts.call(null,zloc));
return cljs.core.reduce.call(null,rewrite_clj.zip.subedit.move_step,root,path);
});
/**
 * Return zipper applying function `f` to `zloc`. The resulting
 * zipper will be located at the same path (i.e. the same number of
 * downwards and right movements from the root) incoming `zloc`.
 * 
 * See also [[subedit-node]] for an isolated edit.
 */
rewrite_clj.zip.subedit.edit_node = (function rewrite_clj$zip$subedit$edit_node(zloc,f){
var zloc_SINGLEQUOTE_ = f.call(null,zloc);
if((!((zloc_SINGLEQUOTE_ == null)))){
} else {
throw (new Error(["Assert failed: ","function applied in 'edit-node' returned nil.","\n","(not (nil? zloc'))"].join('')));
}

return rewrite_clj.zip.subedit.move_to.call(null,zloc_SINGLEQUOTE_,rewrite_clj.zip.subedit.path.call(null,zloc));
});
var ret__22143__auto___46196 = (function (){
/**
 * Like `->`, threads `zloc` through forms.
 * The resulting zipper will be located at the same path (i.e. the same
 * number of downwards and right movements from the root) as incoming `zloc`.
 * 
 * See also [[subedit->]] for an isolated edit.
 */
rewrite_clj.zip.subedit.edit__GT_ = (function rewrite_clj$zip$subedit$edit__GT_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___46197 = arguments.length;
var i__22083__auto___46198 = (0);
while(true){
if((i__22083__auto___46198 < len__22082__auto___46197)){
args__22092__auto__.push((arguments[i__22083__auto___46198]));

var G__46199 = (i__22083__auto___46198 + (1));
i__22083__auto___46198 = G__46199;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.edit__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(rewrite_clj.zip.subedit.edit__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","edit-node","rewrite-clj.zip.subedit/edit-node",1286670122,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__46190__46191__auto__","p1__46190__46191__auto__",2053981203,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__46190__46191__auto__","p1__46190__46191__auto__",2053981203,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(rewrite_clj.zip.subedit.edit__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.edit__GT_.cljs$lang$applyTo = (function (seq46192){
var G__46193 = cljs.core.first.call(null,seq46192);
var seq46192__$1 = cljs.core.next.call(null,seq46192);
var G__46194 = cljs.core.first.call(null,seq46192__$1);
var seq46192__$2 = cljs.core.next.call(null,seq46192__$1);
var G__46195 = cljs.core.first.call(null,seq46192__$2);
var seq46192__$3 = cljs.core.next.call(null,seq46192__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46193,G__46194,G__46195,seq46192__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.edit__GT_.cljs$lang$macro = true);

var ret__22143__auto___46206 = (function (){
/**
 * Like `->>`, threads `zloc` through forms.
 * The resulting zipper will be located at the same path (i.e. the same
 * number of downwards and right movements from the root) as incoming `zloc`.
 * 
 * See also [[subedit->>]] for an isolated edit.
 */
rewrite_clj.zip.subedit.edit__GT__GT_ = (function rewrite_clj$zip$subedit$edit__GT__GT_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___46207 = arguments.length;
var i__22083__auto___46208 = (0);
while(true){
if((i__22083__auto___46208 < len__22082__auto___46207)){
args__22092__auto__.push((arguments[i__22083__auto___46208]));

var G__46209 = (i__22083__auto___46208 + (1));
i__22083__auto___46208 = G__46209;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.edit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","edit-node","rewrite-clj.zip.subedit/edit-node",1286670122,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__46200__46201__auto__","p1__46200__46201__auto__",-1027382024,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__46200__46201__auto__","p1__46200__46201__auto__",-1027382024,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$lang$applyTo = (function (seq46202){
var G__46203 = cljs.core.first.call(null,seq46202);
var seq46202__$1 = cljs.core.next.call(null,seq46202);
var G__46204 = cljs.core.first.call(null,seq46202__$1);
var seq46202__$2 = cljs.core.next.call(null,seq46202__$1);
var G__46205 = cljs.core.first.call(null,seq46202__$2);
var seq46202__$3 = cljs.core.next.call(null,seq46202__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46203,G__46204,G__46205,seq46202__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$lang$macro = true);

/**
 * Create and return a zipper whose root is the current node in `zloc`.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subzip = (function rewrite_clj$zip$subedit$subzip(zloc){
var zloc_SINGLEQUOTE_ = (function (){var G__46210 = zloc;
var G__46210__$1 = (((G__46210 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__46210));
if((G__46210__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.of_node_STAR_.call(null,G__46210__$1,rewrite_clj.zip.options.get_opts.call(null,zloc));
}
})();
if(cljs.core.truth_(zloc_SINGLEQUOTE_)){
} else {
throw (new Error(["Assert failed: ","could not create subzipper.","\n","zloc'"].join('')));
}

return zloc_SINGLEQUOTE_;
});
/**
 * Return zipper replacing current node in `zloc` with result of `f` applied to said node as an isolated sub-tree.
 * The resulting zipper will be located on the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subedit_node = (function rewrite_clj$zip$subedit$subedit_node(zloc,f){
var zloc_SINGLEQUOTE_ = f.call(null,rewrite_clj.zip.subedit.subzip.call(null,zloc));
if((!((zloc_SINGLEQUOTE_ == null)))){
} else {
throw (new Error(["Assert failed: ","function applied in 'subedit-node' returned nil.","\n","(not (nil? zloc'))"].join('')));
}

return rewrite_clj.custom_zipper.core.replace.call(null,zloc,rewrite_clj.custom_zipper.core.root.call(null,zloc_SINGLEQUOTE_));
});
var ret__22143__auto___46217 = (function (){
/**
 * Like `->`, threads `zloc`, as an isolated sub-tree through forms, then zips
 * up to, and locates at, the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subedit__GT_ = (function rewrite_clj$zip$subedit$subedit__GT_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___46218 = arguments.length;
var i__22083__auto___46219 = (0);
while(true){
if((i__22083__auto___46219 < len__22082__auto___46218)){
args__22092__auto__.push((arguments[i__22083__auto___46219]));

var G__46220 = (i__22083__auto___46219 + (1));
i__22083__auto___46219 = G__46220;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.subedit__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(rewrite_clj.zip.subedit.subedit__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","subedit-node","rewrite-clj.zip.subedit/subedit-node",165448714,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__46211__46212__auto__","p1__46211__46212__auto__",-530167509,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__46211__46212__auto__","p1__46211__46212__auto__",-530167509,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(rewrite_clj.zip.subedit.subedit__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.subedit__GT_.cljs$lang$applyTo = (function (seq46213){
var G__46214 = cljs.core.first.call(null,seq46213);
var seq46213__$1 = cljs.core.next.call(null,seq46213);
var G__46215 = cljs.core.first.call(null,seq46213__$1);
var seq46213__$2 = cljs.core.next.call(null,seq46213__$1);
var G__46216 = cljs.core.first.call(null,seq46213__$2);
var seq46213__$3 = cljs.core.next.call(null,seq46213__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46214,G__46215,G__46216,seq46213__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.subedit__GT_.cljs$lang$macro = true);

var ret__22143__auto___46227 = (function (){
/**
 * Like `->`. Threads `zloc`, as an isolated sub-tree through forms, then zips
 *    up to, and locates at, the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subedit__GT__GT_ = (function rewrite_clj$zip$subedit$subedit__GT__GT_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___46228 = arguments.length;
var i__22083__auto___46229 = (0);
while(true){
if((i__22083__auto___46229 < len__22082__auto___46228)){
args__22092__auto__.push((arguments[i__22083__auto___46229]));

var G__46230 = (i__22083__auto___46229 + (1));
i__22083__auto___46229 = G__46230;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","subedit-node","rewrite-clj.zip.subedit/subedit-node",165448714,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__46221__46222__auto__","p1__46221__46222__auto__",2000702956,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__46221__46222__auto__","p1__46221__46222__auto__",2000702956,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$lang$applyTo = (function (seq46223){
var G__46224 = cljs.core.first.call(null,seq46223);
var seq46223__$1 = cljs.core.next.call(null,seq46223);
var G__46225 = cljs.core.first.call(null,seq46223__$1);
var seq46223__$2 = cljs.core.next.call(null,seq46223__$1);
var G__46226 = cljs.core.first.call(null,seq46223__$2);
var seq46223__$3 = cljs.core.next.call(null,seq46223__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46224,G__46225,G__46226,seq46223__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$lang$macro = true);

