// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('zprint.sutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('cljs.reader');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.call(null,sexpr);
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.call(null,zloc);
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_.call(null,sexpr)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,sexpr));
} else {
return cljs.core.seq.call(null,sexpr);
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.call(null,cljs.core.take.call(null,n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.nthnext.call(null,sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_(zthing_QMARK_.call(null,cljs.core.first.call(null,sloc)))){
return i;
} else {
var G__55413 = cljs.core.next.call(null,sloc);
var G__55414 = (i + (1));
sloc = G__55413;
i = G__55414;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.count.call(null,sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_.call(null,sexpr))?cljs.core.mapv.call(null,zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_.call(null,sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first.call(null,sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second.call(null,sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.call(null,sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.call(null,sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_.call(null,sexpr)) || (cljs.core.seq_QMARK_.call(null,sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.last.call(null,sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_.call(null,x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return (x instanceof cljs.core.Atom);
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref.call(null,x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.call(null,cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns.call(null,x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__55416 = arguments.length;
switch (G__55416) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),val], null);
}));

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),cljs.reader.read_string.call(null,cljs.core.nth.call(null,obj_term,(2)))], null);
}));

(zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2);

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (((typeof x === 'string') || (((typeof x === 'number') || (((cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))))))))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(p__55418,pair_seq,ns){
var map__55419 = p__55418;
var map__55419__$1 = cljs.core.__destructure_map.call(null,map__55419);
var map_options = map__55419__$1;
var in_code_QMARK_ = cljs.core.get.call(null,map__55419__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.call(null,map__55419__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.call(null,map__55419__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.call(null,map__55419__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__20748__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__20748__auto__;
}
})())){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__55423 = cljs.core.first.call(null,pair_seq__$1);
var seq__55424 = cljs.core.seq.call(null,vec__55423);
var first__55425 = cljs.core.first.call(null,seq__55424);
var seq__55424__$1 = cljs.core.next.call(null,seq__55424);
var k = first__55425;
var rest_of_pair = seq__55424__$1;
var pair = vec__55423;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace.call(null,k):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.call(null,ns__$1,current_ns)){
var G__55426 = ns__$1;
var G__55427 = cljs.core.next.call(null,pair_seq__$1);
var G__55428 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns__$1 = G__55426;
pair_seq__$1 = G__55427;
out = G__55428;
continue;
} else {
return null;
}
} else {
var G__55429 = current_ns;
var G__55430 = cljs.core.next.call(null,pair_seq__$1);
var G__55431 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns__$1 = G__55429;
pair_seq__$1 = G__55430;
out = G__55431;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__55432 = ns__$1;
var G__55433 = cljs.core.next.call(null,pair_seq__$1);
var G__55434 = cljs.core.conj.call(null,out,pair);
ns__$1 = G__55432;
pair_seq__$1 = G__55433;
out = G__55434;
continue;
} else {
return null;
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pair_seq], null);
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__55435 = zprint.zfns.zstring;
var znumstr_orig_val__55436 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__55437 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__55438 = zprint.zfns.zsexpr;
var zsexpr_QMARK__orig_val__55439 = zprint.zfns.zsexpr_QMARK_;
var zseqnws_orig_val__55440 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__55441 = zprint.zfns.zseqnws_w_nl;
var zseqnws_w_bl_orig_val__55442 = zprint.zfns.zseqnws_w_bl;
var zfocus_style_orig_val__55443 = zprint.zfns.zfocus_style;
var zstart_orig_val__55444 = zprint.zfns.zstart;
var zfirst_orig_val__55445 = zprint.zfns.zfirst;
var zfirst_sexpr_orig_val__55446 = zprint.zfns.zfirst_sexpr;
var zsecond_orig_val__55447 = zprint.zfns.zsecond;
var zthird_orig_val__55448 = zprint.zfns.zthird;
var zfourth_orig_val__55449 = zprint.zfns.zfourth;
var znextnws_orig_val__55450 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__55451 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__55452 = zprint.zfns.znthnext;
var zcount_orig_val__55453 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__55454 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__55455 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__55456 = zprint.zfns.zmap_w_nl;
var zmap_w_bl_orig_val__55457 = zprint.zfns.zmap_w_bl;
var zmap_w_nl_comma_orig_val__55458 = zprint.zfns.zmap_w_nl_comma;
var zmap_no_comment_orig_val__55459 = zprint.zfns.zmap_no_comment;
var zanonfn_QMARK__orig_val__55460 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__55461 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__55462 = zprint.zfns.zfocus;
var zfind_path_orig_val__55463 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__55464 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__55465 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__55466 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__55467 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__55468 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__55469 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__55470 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__55471 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__55472 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__55473 = zprint.zfns.ztag;
var zlast_orig_val__55474 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__55475 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__55476 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__55477 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__55478 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__55479 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__55480 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__55481 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__55482 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__55483 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__55484 = zprint.zfns.zmap_all;
var zmap_all_nl_comment_orig_val__55485 = zprint.zfns.zmap_all_nl_comment;
var zfuture_QMARK__orig_val__55486 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__55487 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__55488 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__55489 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__55490 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__55491 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__55492 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__55493 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__55494 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__55495 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__55496 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__55497 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__55498 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__55499 = zprint.zfns.zlift_ns;
var zfind_orig_val__55500 = zprint.zfns.zfind;
var ztake_append_orig_val__55501 = zprint.zfns.ztake_append;
var zstring_temp_val__55502 = zprint.sutil.sstring;
var znumstr_temp_val__55503 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__55504 = cljs.core.constantly.call(null,false);
var zsexpr_temp_val__55505 = cljs.core.identity;
var zsexpr_QMARK__temp_val__55506 = cljs.core.constantly.call(null,true);
var zseqnws_temp_val__55507 = zprint.sutil.sseqnws;
var zseqnws_w_nl_temp_val__55508 = zprint.sutil.sseqnws;
var zseqnws_w_bl_temp_val__55509 = zprint.sutil.sseqnws;
var zfocus_style_temp_val__55510 = zprint.sutil.sfocus_style;
var zstart_temp_val__55511 = zprint.sutil.sfirst;
var zfirst_temp_val__55512 = zprint.sutil.sfirst;
var zfirst_sexpr_temp_val__55513 = zprint.sutil.sfirst;
var zsecond_temp_val__55514 = zprint.sutil.ssecond;
var zthird_temp_val__55515 = zprint.sutil.sthird;
var zfourth_temp_val__55516 = zprint.sutil.sfourth;
var znextnws_temp_val__55517 = cljs.core.next;
var znextnws_w_nl_temp_val__55518 = cljs.core.next;
var znthnext_temp_val__55519 = zprint.sutil.snthnext;
var zcount_temp_val__55520 = zprint.sutil.scount;
var zcount_zloc_seq_nc_nws_temp_val__55521 = zprint.sutil.scount;
var zmap_temp_val__55522 = zprint.sutil.smap;
var zmap_w_nl_temp_val__55523 = zprint.sutil.smap;
var zmap_w_bl_temp_val__55524 = zprint.sutil.smap;
var zmap_w_nl_comma_temp_val__55525 = zprint.sutil.smap;
var zmap_no_comment_temp_val__55526 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__55527 = cljs.core.constantly.call(null,false);
var zfn_obj_QMARK__temp_val__55528 = cljs.core.fn_QMARK_;
var zfocus_temp_val__55529 = zprint.sutil.sfocus;
var zfind_path_temp_val__55530 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__55531 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__55532 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__55533 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__55534 = cljs.core.map_QMARK_;
var znamespacedmap_QMARK__temp_val__55535 = cljs.core.constantly.call(null,false);
var zset_QMARK__temp_val__55536 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__55537 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__55538 = cljs.core.constantly.call(null,false);
var zuneval_QMARK__temp_val__55539 = cljs.core.constantly.call(null,false);
var ztag_temp_val__55540 = cljs.core.constantly.call(null,null);
var zlast_temp_val__55541 = zprint.sutil.slast;
var zarray_QMARK__temp_val__55542 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__55543 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__55544 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__55545 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__55546 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__55547 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__55548 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__55549 = cljs.core.constantly.call(null,false);
var zwhitespaceorcomment_QMARK__temp_val__55550 = cljs.core.constantly.call(null,false);
var zmap_all_temp_val__55551 = cljs.core.map;
var zmap_all_nl_comment_temp_val__55552 = cljs.core.map;
var zfuture_QMARK__temp_val__55553 = cljs.core.constantly.call(null,false);
var zpromise_QMARK__temp_val__55554 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__55555 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__55556 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__55557 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__55558 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__55559 = cljs.core.constantly.call(null,false);
var zarray_to_shift_seq_temp_val__55560 = null;
var zdotdotdot_temp_val__55561 = cljs.core.constantly.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__55562 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__55563 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__55564 = cljs.core.constantly.call(null,false);
var zreader_cond_w_coll_QMARK__temp_val__55565 = cljs.core.constantly.call(null,false);
var zlift_ns_temp_val__55566 = zprint.sutil.slift_ns;
var zfind_temp_val__55567 = zprint.sutil.sfind;
var ztake_append_temp_val__55568 = zprint.sutil.stake_append;
(zprint.zfns.zstring = zstring_temp_val__55502);

(zprint.zfns.znumstr = znumstr_temp_val__55503);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__55504);

(zprint.zfns.zsexpr = zsexpr_temp_val__55505);

(zprint.zfns.zsexpr_QMARK_ = zsexpr_QMARK__temp_val__55506);

(zprint.zfns.zseqnws = zseqnws_temp_val__55507);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__55508);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_temp_val__55509);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__55510);

(zprint.zfns.zstart = zstart_temp_val__55511);

(zprint.zfns.zfirst = zfirst_temp_val__55512);

(zprint.zfns.zfirst_sexpr = zfirst_sexpr_temp_val__55513);

(zprint.zfns.zsecond = zsecond_temp_val__55514);

(zprint.zfns.zthird = zthird_temp_val__55515);

(zprint.zfns.zfourth = zfourth_temp_val__55516);

(zprint.zfns.znextnws = znextnws_temp_val__55517);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__55518);

(zprint.zfns.znthnext = znthnext_temp_val__55519);

(zprint.zfns.zcount = zcount_temp_val__55520);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__55521);

(zprint.zfns.zmap = zmap_temp_val__55522);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__55523);

(zprint.zfns.zmap_w_bl = zmap_w_bl_temp_val__55524);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__55525);

(zprint.zfns.zmap_no_comment = zmap_no_comment_temp_val__55526);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__55527);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__55528);

(zprint.zfns.zfocus = zfocus_temp_val__55529);

(zprint.zfns.zfind_path = zfind_path_temp_val__55530);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__55531);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__55532);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__55533);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__55534);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__55535);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__55536);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__55537);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__55538);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__55539);

(zprint.zfns.ztag = ztag_temp_val__55540);

(zprint.zfns.zlast = zlast_temp_val__55541);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__55542);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__55543);

(zprint.zfns.zderef = zderef_temp_val__55544);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__55545);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__55546);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__55547);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__55548);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__55549);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__55550);

(zprint.zfns.zmap_all = zmap_all_temp_val__55551);

(zprint.zfns.zmap_all_nl_comment = zmap_all_nl_comment_temp_val__55552);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__55553);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__55554);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__55555);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__55556);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__55557);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__55558);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__55559);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__55560);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__55561);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__55562);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__55563);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__55564);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__55565);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__55566);

(zprint.zfns.zfind = zfind_temp_val__55567);

(zprint.zfns.ztake_append = ztake_append_temp_val__55568);

try{return body_fn.call(null);
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__55501);

(zprint.zfns.zfind = zfind_orig_val__55500);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__55499);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__55498);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__55497);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__55496);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__55495);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__55494);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__55493);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__55492);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__55491);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__55490);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__55489);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__55488);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__55487);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__55486);

(zprint.zfns.zmap_all_nl_comment = zmap_all_nl_comment_orig_val__55485);

(zprint.zfns.zmap_all = zmap_all_orig_val__55484);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__55483);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__55482);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__55481);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__55480);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__55479);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__55478);

(zprint.zfns.zderef = zderef_orig_val__55477);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__55476);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__55475);

(zprint.zfns.zlast = zlast_orig_val__55474);

(zprint.zfns.ztag = ztag_orig_val__55473);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__55472);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__55471);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__55470);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__55469);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__55468);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__55467);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__55466);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__55465);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__55464);

(zprint.zfns.zfind_path = zfind_path_orig_val__55463);

(zprint.zfns.zfocus = zfocus_orig_val__55462);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__55461);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__55460);

(zprint.zfns.zmap_no_comment = zmap_no_comment_orig_val__55459);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__55458);

(zprint.zfns.zmap_w_bl = zmap_w_bl_orig_val__55457);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__55456);

(zprint.zfns.zmap = zmap_orig_val__55455);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__55454);

(zprint.zfns.zcount = zcount_orig_val__55453);

(zprint.zfns.znthnext = znthnext_orig_val__55452);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__55451);

(zprint.zfns.znextnws = znextnws_orig_val__55450);

(zprint.zfns.zfourth = zfourth_orig_val__55449);

(zprint.zfns.zthird = zthird_orig_val__55448);

(zprint.zfns.zsecond = zsecond_orig_val__55447);

(zprint.zfns.zfirst_sexpr = zfirst_sexpr_orig_val__55446);

(zprint.zfns.zfirst = zfirst_orig_val__55445);

(zprint.zfns.zstart = zstart_orig_val__55444);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__55443);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_orig_val__55442);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__55441);

(zprint.zfns.zseqnws = zseqnws_orig_val__55440);

(zprint.zfns.zsexpr_QMARK_ = zsexpr_QMARK__orig_val__55439);

(zprint.zfns.zsexpr = zsexpr_orig_val__55438);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__55437);

(zprint.zfns.znumstr = znumstr_orig_val__55436);

(zprint.zfns.zstring = zstring_orig_val__55435);
}});
