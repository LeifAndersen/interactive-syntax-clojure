// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
zprint.zutil.whitespace_QMARK_ = (function zprint$zutil$whitespace_QMARK_(zloc){
return ((cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (((cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"comma","comma",1699024745))))));
});
zprint.zutil.skip_whitespace = (function zprint$zutil$skip_whitespace(var_args){
var G__53964 = arguments.length;
switch (G__53964) {
case 1:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return zprint.zutil.skip_whitespace.call(null,rewrite_clj.zip.right,zloc);
}));

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_clj.zip.skip.call(null,f,zprint.zutil.whitespace_QMARK_,zloc);
}));

(zprint.zutil.skip_whitespace.cljs$lang$maxFixedArity = 2);

zprint.zutil.whitespace_not_newline_QMARK_ = (function zprint$zutil$whitespace_not_newline_QMARK_(zloc){
return ((cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"comma","comma",1699024745))));
});
zprint.zutil.zremove = rewrite_clj.zip.remove;
zprint.zutil.zreplace = rewrite_clj.zip.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__53966 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__53966,(0),null);
var zpath = cljs.core.nth.call(null,vec__53966,(1),null);
return cljs.core._EQ_.call(null,zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus.call(null,zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_.call(null,zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return rewrite_clj.zip.tag.call(null,zloc);
});
/**
 * Is this a namespaced map?
 */
zprint.zutil.znamespacedmap_QMARK_ = (function zprint$zutil$znamespacedmap_QMARK_(zloc){
var or__20754__auto__ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
if(or__20754__auto__){
return or__20754__auto__;
} else {
return cljs.core.re_find.call(null,/^#:/,rewrite_clj.zip.string.call(null,zloc));
}
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return rewrite_clj.zip.string.call(null,zloc);
});
/**
 * Find the zloc inside of this zloc.
 */
zprint.zutil.zstart = (function zprint$zutil$zstart(zloc){
return rewrite_clj.zip.down_STAR_.call(null,zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first sexpr-able? zloc inside of this zloc.
 */
zprint.zutil.zfirst_sexpr = (function zprint$zutil$zfirst_sexpr(zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,(function (p1__53969_SHARP_){
return cljs.core.not.call(null,zprint.zutil.zsexpr_QMARK_.call(null,p1__53969_SHARP_));
}),nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5718__auto__ = zprint.zutil.zfirst.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var first_loc = temp__5718__auto__;
var temp__5718__auto____$1 = rewrite_clj.zip.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__5718__auto____$1)){
var nloc = temp__5718__auto____$1;
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__53970 = zprint.zutil.zfirst.call(null,zloc);
var G__53970__$1 = (((G__53970 == null))?null:rewrite_clj.zip.right_STAR_.call(null,G__53970));
var G__53970__$2 = (((G__53970__$1 == null))?null:rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__53970__$1));
var G__53970__$3 = (((G__53970__$2 == null))?null:rewrite_clj.zip.right_STAR_.call(null,G__53970__$2));
if((G__53970__$3 == null)){
return null;
} else {
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__53970__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__53971 = zprint.zutil.zfirst.call(null,zloc);
var G__53971__$1 = (((G__53971 == null))?null:rewrite_clj.zip.right_STAR_.call(null,G__53971));
var G__53971__$2 = (((G__53971__$1 == null))?null:rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__53971__$1));
var G__53971__$3 = (((G__53971__$2 == null))?null:rewrite_clj.zip.right_STAR_.call(null,G__53971__$2));
var G__53971__$4 = (((G__53971__$3 == null))?null:rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__53971__$3));
var G__53971__$5 = (((G__53971__$4 == null))?null:rewrite_clj.zip.right_STAR_.call(null,G__53971__$4));
if((G__53971__$5 == null)){
return null;
} else {
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,G__53971__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc. Returns nil
 *   if nothing left.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = rewrite_clj.zip.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc considering 
 *   newlines to not be whitespace. Returns nil if nothing left. Which is
 *   why this is nextnws and not rightnws, since it is exposed in zfns.
 */
zprint.zutil.znextnws_w_nl = (function zprint$zutil$znextnws_w_nl(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = rewrite_clj.zip.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__53972 = zprint.zutil.zrightnws.call(null,nloc);
var G__53973 = nloc;
nloc = G__53972;
ploc = G__53973;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = rewrite_clj.zip.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__53974 = zprint.zutil.zleftnws.call(null,nloc);
var G__53975 = nloc;
nloc = G__53974;
ploc = G__53975;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5718__auto__ = rewrite_clj.zip.prev_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var ploc = temp__5718__auto__;
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.call(null,rewrite_clj.zip.down_STAR_.call(null,zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.call(null,i,(0))))){
return nloc;
} else {
var G__53976 = zprint.zutil.zrightnws.call(null,nloc);
var G__53977 = (i - (1));
nloc = G__53976;
i = G__53977;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.call(null,rewrite_clj.zip.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,nloc))){
return i;
} else {
var G__53978 = zprint.zutil.zrightnws.call(null,nloc);
var G__53979 = (i + (1));
nloc = G__53978;
i = G__53979;
continue;
}
} else {
return null;
}
break;
}
});
zprint.zutil.znl = (function zprint$zutil$znl(){

return rewrite_clj.zip.of_node_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"\n"));
});
/**
 * Return a sequence of zloc newlines.
 */
zprint.zutil.multi_nl = (function zprint$zutil$multi_nl(n){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.repeat.call(null,n,zprint.zutil.znl.call(null)));
});
/**
 * Given a zloc which is a comment, replace it with a zloc which is the
 *   same comment with no newline, and a newline that follows it.  This is
 *   done in the zipper so that later navigation in this area remains
 *   continues to work.
 */
zprint.zutil.split_newline_from_comment = (function zprint$zutil$split_newline_from_comment(zloc){
var comment_no_nl = rewrite_clj.parser.parse_string.call(null,clojure.string.replace_first.call(null,rewrite_clj.zip.string.call(null,zloc),"\n",""));
var new_comment = rewrite_clj.zip.replace_STAR_.call(null,zloc,comment_no_nl);
var new_comment__$1 = rewrite_clj.zip.insert_right_STAR_.call(null,new_comment,rewrite_clj.parser.parse_string.call(null,"\n"));
return new_comment__$1;
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including two newlines
 *   for every blank line encountered.  Note that a truly blank line
 *   will show up as one zloc with two newlines in it.  It will have
 *   (= (z/tag nloc) :newline), but it will have both newlines.  To
 *   ease handling of these multi-line newlines, this routine will
 *   split them up into multiple individual newlines.
 */
zprint.zutil.zmap_w_bl = (function zprint$zutil$zmap_w_bl(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var blank_QMARK_ = false;
var previous_was_nl_QMARK_ = false;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var ws_QMARK_ = zprint.zutil.whitespace_QMARK_.call(null,nloc);
var nl_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var nl_len = ((nl_QMARK_)?rewrite_clj.zip.length.call(null,nloc):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?(rewrite_clj.zip.length.call(null,nloc) > (1)):null);
var emit_nl_QMARK_ = (function (){var or__20754__auto__ = ((blank_QMARK_) && (nl_QMARK_));
if(or__20754__auto__){
return or__20754__auto__;
} else {
return multi_nl_QMARK_;
}
})();
var nl_to_emit = (cljs.core.truth_(emit_nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.call(null,zfn,zprint.zutil.multi_nl.call(null,(((function (){var or__20754__auto__ = previous_was_nl_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (!(blank_QMARK_));
}
})())?nl_len:(nl_len + (1))))):(cljs.core.truth_(previous_was_nl_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zfn.call(null,nloc)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zfn.call(null,nloc),zfn.call(null,nloc)], null)
)):null);
var comment_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment.call(null,nloc):nloc);
var result = (cljs.core.truth_((function (){var or__20754__auto__ = (!(ws_QMARK_));
if(or__20754__auto__){
return or__20754__auto__;
} else {
var and__20748__auto__ = nl_QMARK_;
if(and__20748__auto__){
return previous_comment_QMARK_;
} else {
return and__20748__auto__;
}
}
})())?zfn.call(null,nloc__$1):null);
var G__53980 = rewrite_clj.zip.right_STAR_.call(null,nloc__$1);
var G__53981 = ((blank_QMARK_)?((ws_QMARK_) || (nl_QMARK_)):nl_QMARK_);
var G__53982 = (cljs.core.truth_((function (){var or__20754__auto__ = result;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return nl_to_emit;
}
})())?(function (){var or__20754__auto__ = (function (){var and__20748__auto__ = nl_QMARK_;
if(and__20748__auto__){
return previous_comment_QMARK_;
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return emit_nl_QMARK_;
}
})():previous_was_nl_QMARK_);
var G__53983 = comment_QMARK_;
var G__53984 = (cljs.core.truth_(result)?cljs.core.conj.call(null,out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.call(null,cljs.core.conj,out,nl_to_emit):out
));
nloc = G__53980;
blank_QMARK_ = G__53981;
previous_was_nl_QMARK_ = G__53982;
previous_comment_QMARK_ = G__53983;
out = G__53984;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including newlines.
 *   This will also split newlines into separate zlocs if they were
 *   multiple, and split the newline off the end of a comment. The
 *   comment split actually changes the zipper for the rest of the
 *   sequence, where the newline splits do not.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var nl_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var comment_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment.call(null,nloc):nloc);
var result = (((!(zprint.zutil.whitespace_QMARK_.call(null,nloc__$1))))?zfn.call(null,nloc__$1):null);
var nl_len = ((nl_QMARK_)?rewrite_clj.zip.length.call(null,nloc__$1):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?(rewrite_clj.zip.length.call(null,nloc__$1) > (1)):null);
var nl_to_emit = ((nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.call(null,zfn,zprint.zutil.multi_nl.call(null,nl_len)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zfn.call(null,nloc__$1)], null)):null);
var G__53985 = rewrite_clj.zip.right_STAR_.call(null,nloc__$1);
var G__53986 = (cljs.core.truth_(result)?cljs.core.conj.call(null,out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.call(null,cljs.core.conj,out,nl_to_emit):out
));
nloc = G__53985;
out = G__53986;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every non-whitespace zloc inside of zloc, including newlines and commas.
 *   This will also split newlines into separate zlocs if they were
 *   multiple, and split the newline off the end of a comment.
 */
zprint.zutil.zmap_w_nl_comma = (function zprint$zutil$zmap_w_nl_comma(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var nl_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var comma_QMARK_ = ((cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"comma","comma",1699024745))) || (((cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (clojure.string.includes_QMARK_.call(null,rewrite_clj.zip.string.call(null,nloc),",")))));
var comment_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment.call(null,nloc):nloc);
var result = (((((!(zprint.zutil.whitespace_QMARK_.call(null,nloc__$1)))) || (comma_QMARK_)))?zfn.call(null,nloc__$1):null);
var nl_len = ((nl_QMARK_)?rewrite_clj.zip.length.call(null,nloc__$1):null);
var multi_nl_QMARK_ = ((nl_QMARK_)?(rewrite_clj.zip.length.call(null,nloc__$1) > (1)):null);
var nl_to_emit = ((nl_QMARK_)?(cljs.core.truth_(multi_nl_QMARK_)?cljs.core.mapv.call(null,zfn,zprint.zutil.multi_nl.call(null,nl_len)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zfn.call(null,nloc__$1)], null)):null);
var G__53987 = rewrite_clj.zip.right_STAR_.call(null,nloc__$1);
var G__53988 = (cljs.core.truth_(result)?cljs.core.conj.call(null,out,result):(cljs.core.truth_(nl_to_emit)?cljs.core.apply.call(null,cljs.core.conj,out,nl_to_emit):out
));
nloc = G__53987;
out = G__53988;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc. The newline that shows
 *   up in every comment is also split out into a separate zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var comment_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nl_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment.call(null,nloc):nloc);
var result = (cljs.core.truth_((function (){var or__20754__auto__ = (!(zprint.zutil.whitespace_QMARK_.call(null,nloc__$1)));
if(or__20754__auto__){
return or__20754__auto__;
} else {
var and__20748__auto__ = nl_QMARK_;
if(and__20748__auto__){
return previous_comment_QMARK_;
} else {
return and__20748__auto__;
}
}
})())?zfn.call(null,nloc__$1):null);
var G__53989 = rewrite_clj.zip.right_STAR_.call(null,nloc__$1);
var G__53990 = comment_QMARK_;
var G__53991 = (cljs.core.truth_(result)?cljs.core.conj.call(null,out,result):out);
nloc = G__53989;
previous_comment_QMARK_ = G__53990;
out = G__53991;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc. Comments are considered
 *   whitespace for this routine, and left out.
 */
zprint.zutil.zmap_no_comment = (function zprint$zutil$zmap_no_comment(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var comment_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nl_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var result = (((!(((zprint.zutil.whitespace_QMARK_.call(null,nloc)) || (((comment_QMARK_) || (nl_QMARK_)))))))?zfn.call(null,nloc):null);
var G__53992 = rewrite_clj.zip.right_STAR_.call(null,nloc);
var G__53993 = comment_QMARK_;
var G__53994 = (cljs.core.truth_(result)?cljs.core.conj.call(null,out,result):out);
nloc = G__53992;
previous_comment_QMARK_ = G__53993;
out = G__53994;
continue;
}
break;
}
});
/**
 * Return the count of non-whitespace elements in zloc.  Comments are
 *   counted as one thing, commas are ignored as whitespace.
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
if((zloc == null)){
return (0);
} else {
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var i = (0);
while(true){
if(cljs.core.not.call(null,nloc)){
return i;
} else {
var G__53995 = rewrite_clj.zip.right_STAR_.call(null,nloc);
var G__53996 = (((!(zprint.zutil.whitespace_QMARK_.call(null,nloc))))?(i + (1)):i);
nloc = G__53995;
i = G__53996;
continue;
}
break;
}
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__53997 = rewrite_clj.zip.right_STAR_.call(null,nloc);
var G__53998 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__53997;
out = G__53998;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc. The newline that shows
 *   up in every comment is also split out into a separate zloc.
 */
zprint.zutil.zmap_all_nl_comment = (function zprint$zutil$zmap_all_nl_comment(zfn,zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var comment_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"comment","comment",532206069));
var nl_QMARK_ = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
var nloc__$1 = ((comment_QMARK_)?zprint.zutil.split_newline_from_comment.call(null,nloc):nloc);
var result = zfn.call(null,nloc__$1);
var G__53999 = rewrite_clj.zip.right_STAR_.call(null,nloc__$1);
var G__54000 = comment_QMARK_;
var G__54001 = (cljs.core.truth_(result)?cljs.core.conj.call(null,out,result):out);
nloc = G__53999;
previous_comment_QMARK_ = G__54000;
out = G__54001;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap.call(null,cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   newlines.
 */
zprint.zutil.zseqnws_w_nl = (function zprint$zutil$zseqnws_w_nl(zloc){
return zprint.zutil.zmap_w_nl.call(null,cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   only newlines that start and end blank lines.
 */
zprint.zutil.zseqnws_w_bl = (function zprint$zutil$zseqnws_w_bl(zloc){
return zprint.zutil.zmap_w_bl.call(null,cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(rewrite_clj.zip.rightmost_QMARK_.call(null,nloc)){
return nloc;
} else {
var G__54002 = zprint.zutil.zremove.call(null,rewrite_clj.zip.right_STAR_.call(null,nloc));
nloc = G__54002;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var index = (0);
while(true){
if((index >= n)){
return rewrite_clj.zip.up_STAR_.call(null,zprint.zutil.zremove_right.call(null,zprint.zutil.zreplace.call(null,nloc,end_struct)));
} else {
var xloc = rewrite_clj.zip.right_STAR_.call(null,nloc);
var G__54003 = xloc;
var G__54004 = ((zprint.zutil.whitespace_QMARK_.call(null,xloc))?index:(index + (1)));
nloc = G__54003;
index = G__54004;
continue;
}
break;
}
});
/**
 * How many non-whitespace non-comment children are in zloc-seq? Note
 *   that this is fundamentally different from zcount, in that it doesn't
 *   take a zloc, but rather a zloc-seq (i.e., a seq of elements, each of
 *   which is a zloc).
 */
zprint.zutil.zcount_zloc_seq_nc_nws = (function zprint$zutil$zcount_zloc_seq_nc_nws(zloc_seq){
return cljs.core.reduce.call(null,(function (p1__54006_SHARP_,p2__54005_SHARP_){
if(cljs.core.truth_(rewrite_clj.zip.whitespace_or_comment_QMARK_.call(null,p2__54005_SHARP_))){
return p1__54006_SHARP_;
} else {
return (p1__54006_SHARP_ + (1));
}
}),(0),zloc_seq);
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,rewrite_clj.zip.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__54007 = rewrite_clj.zip.up_STAR_.call(null,nloc);
var G__54008 = (0);
var G__54009 = cljs.core.cons.call(null,left,out);
nloc = G__54007;
left = G__54008;
out = G__54009;
continue;
}
} else {
var G__54010 = rewrite_clj.zip.left_STAR_.call(null,nloc);
var G__54011 = (left + (1));
var G__54012 = out;
nloc = G__54010;
left = G__54011;
out = G__54012;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,rewrite_clj.zip.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__54013 = rewrite_clj.zip.up_STAR_.call(null,nloc);
var G__54014 = (0);
var G__54015 = cljs.core.cons.call(null,left,out);
nloc = G__54013;
left = G__54014;
out = G__54015;
continue;
}
} else {
var G__54016 = rewrite_clj.zip.left_STAR_.call(null,nloc);
var G__54017 = ((zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__54018 = out;
nloc = G__54016;
left = G__54017;
out = G__54018;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,nloc))){
return nloc;
} else {
var G__54019 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__54019;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__54020 = rewrite_clj.zip.right_STAR_.call(null,nloc);
var G__54021 = (remaining_right - (1));
nloc = G__54020;
remaining_right = G__54021;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.call(null,zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = rewrite_clj.zip.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost.call(null,nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__20748__auto__ = zloc;
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),rewrite_clj.zip.tag.call(null,zloc))) && (cljs.core.not.call(null,rewrite_clj.node.printable_only_QMARK_.call(null,rewrite_clj.zip.node.call(null,zloc)))));
} else {
return and__20748__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__20748__auto__ = zloc;
if(cljs.core.truth_(and__20748__auto__)){
return clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,zloc),":");
} else {
return and__20748__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__20748__auto__ = zloc;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
if(and__20748__auto____$1){
var and__20748__auto____$2 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__20748__auto____$2)){
return (rewrite_clj.zip.sexpr.call(null,zloc) instanceof cljs.core.Symbol);
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
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__20748__auto__ = zloc;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
if(and__20748__auto____$1){
var and__20748__auto____$2 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__20748__auto____$2)){
return (rewrite_clj.zip.sexpr.call(null,zloc) == null);
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
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return rewrite_clj.zip.of_node_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag.call(null,zloc);
if(((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))))){
return zprint.zutil.zconstant_QMARK_.call(null,zprint.zutil.zfirst.call(null,zloc));
} else {
var and__20748__auto__ = (!(zprint.zutil.z_coll_QMARK_.call(null,zloc)));
if(and__20748__auto__){
var or__20754__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
if(cljs.core.truth_((function (){var and__20748__auto____$1 = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
if(and__20748__auto____$1){
return zprint.zutil.zsexpr_QMARK_.call(null,zloc);
} else {
return and__20748__auto____$1;
}
})())){
var sexpr = rewrite_clj.zip.sexpr.call(null,zloc);
return ((typeof sexpr === 'string') || (((typeof sexpr === 'number') || (((cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))))))));
} else {
return null;
}
}
} else {
return and__20748__auto__;
}
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down.call(null,zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__20748__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,nloc),":doc");
} else {
return and__20748__auto__;
}
})())){
if(typeof rewrite_clj.zip.sexpr.call(null,rewrite_clj.zip.right.call(null,nloc)) === 'string'){
return rewrite_clj.zip.right.call(null,nloc);
} else {
return null;
}
} else {
var G__54022 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__54022;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string.call(null,rewrite_clj.zip.down.call(null,zloc));
if(((cljs.core._EQ_.call(null,fn_name,"defn")) || (cljs.core._EQ_.call(null,fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(typeof rewrite_clj.zip.sexpr.call(null,docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,fn_name,"def")){
var maploc = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(rewrite_clj.zip.map_QMARK_.call(null,maploc)){
return zprint.zutil.find_doc_in_map.call(null,maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5718__auto__ = zprint.zutil.find_docstring.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var doc_zloc = temp__5718__auto__;
var new_doc_zloc = rewrite_clj.zip.replace_STAR_.call(null,doc_zloc,rewrite_clj.zip.node.call(null,rewrite_clj.zip.of_node_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.sexpr.call(null,doc_zloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return rewrite_clj.zip.of_node_STAR_.call(null,rewrite_clj.zip.root.call(null,new_doc_zloc));
} else {
return zloc;
}
});
/**
 * Given a zloc, turn it into a keyword if it starts with a :, but remove
 *   the : first.
 */
zprint.zutil.zloc_to_keyword = (function zprint$zutil$zloc_to_keyword(zloc){
var s = rewrite_clj.zip.string.call(null,zloc);
if(clojure.string.starts_with_QMARK_.call(null,s,":")){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(1)));
} else {
return cljs.core.symbol.call(null,s);
}
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
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(p__54023,pair_seq,ns){
var map__54024 = p__54023;
var map__54024__$1 = cljs.core.__destructure_map.call(null,map__54024);
var map_options = map__54024__$1;
var in_code_QMARK_ = cljs.core.get.call(null,map__54024__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.call(null,map__54024__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.call(null,map__54024__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.call(null,map__54024__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
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
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);
} else {
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
var vec__54028 = cljs.core.first.call(null,pair_seq__$1);
var seq__54029 = cljs.core.seq.call(null,vec__54028);
var first__54030 = cljs.core.first.call(null,seq__54029);
var seq__54029__$1 = cljs.core.next.call(null,seq__54029);
var k = first__54030;
var rest_of_pair = seq__54029__$1;
var pair = vec__54028;
var current_ns = (cljs.core.truth_((function (){var and__20748__auto__ = rest_of_pair;
if(and__20748__auto__){
var and__20748__auto____$1 = (!(clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,k),"::")));
if(and__20748__auto____$1){
var or__20754__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?cljs.core.namespace.call(null,zprint.zutil.zloc_to_keyword.call(null,k)):null);
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
var G__54037 = ns__$1;
var G__54038 = cljs.core.next.call(null,pair_seq__$1);
var G__54039 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,rewrite_clj.zip.of_node_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns__$1 = G__54037;
pair_seq__$1 = G__54038;
out = G__54039;
continue;
} else {
return null;
}
} else {
var G__54040 = current_ns;
var G__54041 = cljs.core.next.call(null,pair_seq__$1);
var G__54042 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,rewrite_clj.zip.of_node_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns__$1 = G__54040;
pair_seq__$1 = G__54041;
out = G__54042;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__54043 = ns__$1;
var G__54044 = cljs.core.next.call(null,pair_seq__$1);
var G__54045 = cljs.core.conj.call(null,out,pair);
ns__$1 = G__54043;
pair_seq__$1 = G__54044;
out = G__54045;
continue;
} else {
return null;
}
}
}
break;
}
}
} else {
if(cljs.core.truth_((function (){var and__20748__auto__ = ns;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = unlift_ns_QMARK_;
if(cljs.core.truth_(and__20748__auto____$1)){
return cljs.core.not.call(null,lift_ns_QMARK_);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__54034 = cljs.core.first.call(null,pair_seq__$1);
var seq__54035 = cljs.core.seq.call(null,vec__54034);
var first__54036 = cljs.core.first.call(null,seq__54035);
var seq__54035__$1 = cljs.core.next.call(null,seq__54035);
var k = first__54036;
var rest_of_pair = seq__54035__$1;
var pair = vec__54034;
var current_ns = (cljs.core.truth_((function (){var and__20748__auto__ = rest_of_pair;
if(and__20748__auto__){
var and__20748__auto____$1 = (!(clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,k),"::")));
if(and__20748__auto____$1){
var or__20754__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?cljs.core.namespace.call(null,zprint.zutil.zloc_to_keyword.call(null,k)):null);
if(cljs.core.not.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,out], null);
} else {
if(cljs.core.truth_(current_ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core.not.call(null,zprint.zutil.zkeyword_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__54046 = cljs.core.next.call(null,pair_seq__$1);
var G__54047 = cljs.core.conj.call(null,out,pair);
pair_seq__$1 = G__54046;
out = G__54047;
continue;
} else {
var G__54048 = cljs.core.next.call(null,pair_seq__$1);
var G__54049 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,rewrite_clj.zip.of_node_STAR_.call(null,rewrite_clj.node.token_node.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.name.call(null,rewrite_clj.zip.sexpr.call(null,k))].join('')))),rest_of_pair));
pair_seq__$1 = G__54048;
out = G__54049;
continue;

}
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);

}
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__54050 = zprint.zfns.zstring;
var znumstr_orig_val__54051 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__54052 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__54053 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__54054 = zprint.zfns.zsexpr;
var zsexpr_QMARK__orig_val__54055 = zprint.zfns.zsexpr_QMARK_;
var zseqnws_orig_val__54056 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__54057 = zprint.zfns.zseqnws_w_nl;
var zseqnws_w_bl_orig_val__54058 = zprint.zfns.zseqnws_w_bl;
var zfocus_style_orig_val__54059 = zprint.zfns.zfocus_style;
var zstart_orig_val__54060 = zprint.zfns.zstart;
var zfirst_orig_val__54061 = zprint.zfns.zfirst;
var zfirst_sexpr_orig_val__54062 = zprint.zfns.zfirst_sexpr;
var zsecond_orig_val__54063 = zprint.zfns.zsecond;
var zthird_orig_val__54064 = zprint.zfns.zthird;
var zfourth_orig_val__54065 = zprint.zfns.zfourth;
var znextnws_orig_val__54066 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__54067 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__54068 = zprint.zfns.znthnext;
var zcount_orig_val__54069 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__54070 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__54071 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__54072 = zprint.zfns.zmap_w_nl;
var zmap_w_bl_orig_val__54073 = zprint.zfns.zmap_w_bl;
var zmap_w_nl_comma_orig_val__54074 = zprint.zfns.zmap_w_nl_comma;
var zmap_no_comment_orig_val__54075 = zprint.zfns.zmap_no_comment;
var zanonfn_QMARK__orig_val__54076 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__54077 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__54078 = zprint.zfns.zfocus;
var zfind_path_orig_val__54079 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__54080 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__54081 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__54082 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__54083 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__54084 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__54085 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__54086 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__54087 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__54088 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__54089 = zprint.zfns.ztag;
var zlast_orig_val__54090 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__54091 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__54092 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__54093 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__54094 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__54095 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__54096 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__54097 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__54098 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__54099 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__54100 = zprint.zfns.zmap_all;
var zmap_all_nl_comment_orig_val__54101 = zprint.zfns.zmap_all_nl_comment;
var zpromise_QMARK__orig_val__54102 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__54103 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__54104 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__54105 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__54106 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__54107 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__54108 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__54109 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__54110 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__54111 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__54112 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__54113 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__54114 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__54115 = zprint.zfns.zlift_ns;
var zfind_orig_val__54116 = zprint.zfns.zfind;
var ztake_append_orig_val__54117 = zprint.zfns.ztake_append;
var zstring_temp_val__54118 = rewrite_clj.zip.string;
var znumstr_temp_val__54119 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__54120 = cljs.core.constantly.call(null,false);
var zcomment_QMARK__temp_val__54121 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__54122 = rewrite_clj.zip.sexpr;
var zsexpr_QMARK__temp_val__54123 = zprint.zutil.zsexpr_QMARK_;
var zseqnws_temp_val__54124 = zprint.zutil.zseqnws;
var zseqnws_w_nl_temp_val__54125 = zprint.zutil.zseqnws_w_nl;
var zseqnws_w_bl_temp_val__54126 = zprint.zutil.zseqnws_w_bl;
var zfocus_style_temp_val__54127 = zprint.zutil.zfocus_style;
var zstart_temp_val__54128 = zprint.zutil.zstart;
var zfirst_temp_val__54129 = zprint.zutil.zfirst;
var zfirst_sexpr_temp_val__54130 = zprint.zutil.zfirst_sexpr;
var zsecond_temp_val__54131 = zprint.zutil.zsecond;
var zthird_temp_val__54132 = zprint.zutil.zthird;
var zfourth_temp_val__54133 = zprint.zutil.zfourth;
var znextnws_temp_val__54134 = zprint.zutil.zrightnws;
var znextnws_w_nl_temp_val__54135 = zprint.zutil.znextnws_w_nl;
var znthnext_temp_val__54136 = zprint.zutil.znthnext;
var zcount_temp_val__54137 = zprint.zutil.zcount;
var zcount_zloc_seq_nc_nws_temp_val__54138 = zprint.zutil.zcount_zloc_seq_nc_nws;
var zmap_temp_val__54139 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__54140 = zprint.zutil.zmap_w_nl;
var zmap_w_bl_temp_val__54141 = zprint.zutil.zmap_w_bl;
var zmap_w_nl_comma_temp_val__54142 = zprint.zutil.zmap_w_nl_comma;
var zmap_no_comment_temp_val__54143 = zprint.zutil.zmap_no_comment;
var zanonfn_QMARK__temp_val__54144 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__54145 = cljs.core.constantly.call(null,false);
var zfocus_temp_val__54146 = zprint.zutil.zfocus;
var zfind_path_temp_val__54147 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__54148 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__54149 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__54150 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__54151 = rewrite_clj.zip.map_QMARK_;
var znamespacedmap_QMARK__temp_val__54152 = zprint.zutil.znamespacedmap_QMARK_;
var zset_QMARK__temp_val__54153 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__54154 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__54155 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__54156 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__54157 = zprint.zutil.ztag;
var zlast_temp_val__54158 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__54159 = cljs.core.constantly.call(null,false);
var zatom_QMARK__temp_val__54160 = cljs.core.constantly.call(null,false);
var zderef_temp_val__54161 = cljs.core.constantly.call(null,false);
var zrecord_QMARK__temp_val__54162 = cljs.core.constantly.call(null,false);
var zns_QMARK__temp_val__54163 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__54164 = cljs.core.constantly.call(null,null);
var zexpandarray_temp_val__54165 = cljs.core.constantly.call(null,null);
var znewline_QMARK__temp_val__54166 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__54167 = rewrite_clj.zip.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__54168 = zprint.zutil.zmap_all;
var zmap_all_nl_comment_temp_val__54169 = zprint.zutil.zmap_all_nl_comment;
var zpromise_QMARK__temp_val__54170 = cljs.core.constantly.call(null,false);
var zfuture_QMARK__temp_val__54171 = cljs.core.constantly.call(null,false);
var zdelay_QMARK__temp_val__54172 = cljs.core.constantly.call(null,false);
var zkeyword_QMARK__temp_val__54173 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__54174 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__54175 = cljs.core.constantly.call(null,false);
var zreader_macro_QMARK__temp_val__54176 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__54177 = cljs.core.constantly.call(null,null);
var zdotdotdot_temp_val__54178 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__54179 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__54180 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__54181 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__54182 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__54183 = zprint.zutil.zlift_ns;
var zfind_temp_val__54184 = zprint.zutil.zfind;
var ztake_append_temp_val__54185 = zprint.zutil.ztake_append;
(zprint.zfns.zstring = zstring_temp_val__54118);

(zprint.zfns.znumstr = znumstr_temp_val__54119);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__54120);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__54121);

(zprint.zfns.zsexpr = zsexpr_temp_val__54122);

(zprint.zfns.zsexpr_QMARK_ = zsexpr_QMARK__temp_val__54123);

(zprint.zfns.zseqnws = zseqnws_temp_val__54124);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__54125);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_temp_val__54126);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__54127);

(zprint.zfns.zstart = zstart_temp_val__54128);

(zprint.zfns.zfirst = zfirst_temp_val__54129);

(zprint.zfns.zfirst_sexpr = zfirst_sexpr_temp_val__54130);

(zprint.zfns.zsecond = zsecond_temp_val__54131);

(zprint.zfns.zthird = zthird_temp_val__54132);

(zprint.zfns.zfourth = zfourth_temp_val__54133);

(zprint.zfns.znextnws = znextnws_temp_val__54134);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__54135);

(zprint.zfns.znthnext = znthnext_temp_val__54136);

(zprint.zfns.zcount = zcount_temp_val__54137);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__54138);

(zprint.zfns.zmap = zmap_temp_val__54139);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__54140);

(zprint.zfns.zmap_w_bl = zmap_w_bl_temp_val__54141);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__54142);

(zprint.zfns.zmap_no_comment = zmap_no_comment_temp_val__54143);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__54144);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__54145);

(zprint.zfns.zfocus = zfocus_temp_val__54146);

(zprint.zfns.zfind_path = zfind_path_temp_val__54147);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__54148);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__54149);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__54150);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__54151);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__54152);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__54153);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__54154);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__54155);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__54156);

(zprint.zfns.ztag = ztag_temp_val__54157);

(zprint.zfns.zlast = zlast_temp_val__54158);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__54159);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__54160);

(zprint.zfns.zderef = zderef_temp_val__54161);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__54162);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__54163);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__54164);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__54165);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__54166);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__54167);

(zprint.zfns.zmap_all = zmap_all_temp_val__54168);

(zprint.zfns.zmap_all_nl_comment = zmap_all_nl_comment_temp_val__54169);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__54170);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__54171);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__54172);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__54173);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__54174);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__54175);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__54176);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__54177);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__54178);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__54179);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__54180);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__54181);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__54182);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__54183);

(zprint.zfns.zfind = zfind_temp_val__54184);

(zprint.zfns.ztake_append = ztake_append_temp_val__54185);

try{return body_fn.call(null);
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__54117);

(zprint.zfns.zfind = zfind_orig_val__54116);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__54115);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__54114);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__54113);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__54112);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__54111);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__54110);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__54109);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__54108);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__54107);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__54106);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__54105);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__54104);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__54103);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__54102);

(zprint.zfns.zmap_all_nl_comment = zmap_all_nl_comment_orig_val__54101);

(zprint.zfns.zmap_all = zmap_all_orig_val__54100);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__54099);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__54098);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__54097);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__54096);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__54095);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__54094);

(zprint.zfns.zderef = zderef_orig_val__54093);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__54092);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__54091);

(zprint.zfns.zlast = zlast_orig_val__54090);

(zprint.zfns.ztag = ztag_orig_val__54089);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__54088);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__54087);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__54086);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__54085);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__54084);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__54083);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__54082);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__54081);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__54080);

(zprint.zfns.zfind_path = zfind_path_orig_val__54079);

(zprint.zfns.zfocus = zfocus_orig_val__54078);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__54077);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__54076);

(zprint.zfns.zmap_no_comment = zmap_no_comment_orig_val__54075);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__54074);

(zprint.zfns.zmap_w_bl = zmap_w_bl_orig_val__54073);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__54072);

(zprint.zfns.zmap = zmap_orig_val__54071);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__54070);

(zprint.zfns.zcount = zcount_orig_val__54069);

(zprint.zfns.znthnext = znthnext_orig_val__54068);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__54067);

(zprint.zfns.znextnws = znextnws_orig_val__54066);

(zprint.zfns.zfourth = zfourth_orig_val__54065);

(zprint.zfns.zthird = zthird_orig_val__54064);

(zprint.zfns.zsecond = zsecond_orig_val__54063);

(zprint.zfns.zfirst_sexpr = zfirst_sexpr_orig_val__54062);

(zprint.zfns.zfirst = zfirst_orig_val__54061);

(zprint.zfns.zstart = zstart_orig_val__54060);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__54059);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_orig_val__54058);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__54057);

(zprint.zfns.zseqnws = zseqnws_orig_val__54056);

(zprint.zfns.zsexpr_QMARK_ = zsexpr_QMARK__orig_val__54055);

(zprint.zfns.zsexpr = zsexpr_orig_val__54054);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__54053);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__54052);

(zprint.zfns.znumstr = znumstr_orig_val__54051);

(zprint.zfns.zstring = zstring_orig_val__54050);
}});
