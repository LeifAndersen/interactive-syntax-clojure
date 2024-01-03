// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('zprint.comment');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.zip');
/**
 * Produce a blank string of desired size.
 */
zprint.comment.blanks = (function zprint$comment$blanks(n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n," "));
});
/**
 * Do split for newlines, instead of using regular expressions.
 */
zprint.comment.split_lf = (function zprint$comment$split_lf(s){
var input = s;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,input)){
return out;
} else {
var next_lf = clojure.string.index_of.call(null,input,"\n");
var chunk = (cljs.core.truth_(next_lf)?cljs.core.subs.call(null,input,(0),next_lf):input);
var G__47256 = (cljs.core.truth_(next_lf)?cljs.core.subs.call(null,input,(next_lf + (1))):null);
var G__47257 = cljs.core.conj.call(null,out,chunk);
input = G__47256;
out = G__47257;
continue;
}
break;
}
});
/**
 * Given a tag into which you can go down from rewrite-clj, which must be
 *   a collection of some kind, return the size the l-str.  All of the tag
 *   values into which you can go down must be in this list for indent-before
 *   to work correctly.  It uses these values when it steps up out of one of
 *   these things to see how big the thing would have been if it showed up
 *   as characters.
 */
zprint.comment.tag_l_size = (function zprint$comment$tag_l_size(t){
var G__47258 = t;
var G__47258__$1 = (((G__47258 instanceof cljs.core.Keyword))?G__47258.fqn:null);
switch (G__47258__$1) {
case "list":
return (1);

break;
case "vector":
return (1);

break;
case "set":
return (2);

break;
case "map":
return (1);

break;
case "uneval":
return (2);

break;
case "reader-macro":
return (1);

break;
case "meta":
return (1);

break;
case "quote":
return (1);

break;
case "syntax-quote":
return (1);

break;
case "fn":
return (2);

break;
case "unquote":
return (1);

break;
case "deref":
return (1);

break;
case "namespaced-map":
return (1);

break;
default:
return (0);

}
});
/**
 * Take a zloc and move left if possible, or move up if necessary.
 *   Return a vector with [up-size new-zloc]
 */
zprint.comment.left_or_up = (function zprint$comment$left_or_up(zloc){
var ploc = zloc;
var total_up = (0);
while(true){
var next_left = rewrite_clj.zip.left_STAR_.call(null,ploc);
if(cljs.core.truth_(next_left)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,next_left], null);
} else {
var moving_up = rewrite_clj.zip.up_STAR_.call(null,ploc);
var up_tag = (cljs.core.truth_(moving_up)?rewrite_clj.zip.tag.call(null,moving_up):null);
var up_size = zprint.comment.tag_l_size.call(null,up_tag);
if(cljs.core.not.call(null,moving_up)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,null], null);
} else {
var G__47260 = moving_up;
var G__47261 = (total_up + up_size);
ploc = G__47260;
total_up = G__47261;
continue;
}
}
break;
}
});
/**
 * Given a string, return the number of characters to the right
 *   of any newlines in the string.  Will return nil if no newlines
 *   in the string.
 */
zprint.comment.length_after_newline = (function zprint$comment$length_after_newline(s){
var nl_split = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''),/\n/);
var nl_num = (cljs.core.count.call(null,nl_split) - (1));
if((nl_num === (0))){
return null;
} else {
return (cljs.core.count.call(null,cljs.core.last.call(null,nl_split)) - (1));
}
});
/**
 * Given a zloc, find the amount of printing space before it on its
 *   current line.
 */
zprint.comment.length_before = (function zprint$comment$length_before(zloc){
var vec__47262 = zprint.comment.left_or_up.call(null,zloc);
var up_size = cljs.core.nth.call(null,vec__47262,(0),null);
var next_zloc = cljs.core.nth.call(null,vec__47262,(1),null);
var ploc = next_zloc;
var indent_before = up_size;
while(true){
if(cljs.core.not.call(null,ploc)){
return indent_before;
} else {
var zstr = (cljs.core.truth_(ploc)?zprint.zfns.zstring.call(null,ploc):"");
var length_right_of_newline = zprint.comment.length_after_newline.call(null,zstr);
var vec__47268 = zprint.comment.left_or_up.call(null,ploc);
var up_size__$1 = cljs.core.nth.call(null,vec__47268,(0),null);
var next_zloc__$1 = cljs.core.nth.call(null,vec__47268,(1),null);
if(cljs.core.truth_(length_right_of_newline)){
return (length_right_of_newline + indent_before);
} else {
var G__47271 = next_zloc__$1;
var G__47272 = ((indent_before + cljs.core.count.call(null,zstr)) + up_size__$1);
ploc = G__47271;
indent_before = G__47272;
continue;
}
}
break;
}
});
/**
 * If this is an inline comment, returns a vector with the amount
 *   of space that was between this and the previous element and the
 *   starting column of this inline comment.  That means that if we
 *   go left, we get something other than whitespace before a newline.
 *   If we get only whitespace before a newline, then this is considered
 *   an inline comment if the comment at the end of the previous line
 *   was an inline comment and we were aligned with that comment.
 *   Assumes zloc is a comment.
 */
zprint.comment.inlinecomment_QMARK_ = (function zprint$comment$inlinecomment_QMARK_(zloc){
var nloc = rewrite_clj.zip.left_STAR_.call(null,zloc);
var spaces = (0);
var passed_nl_QMARK_ = false;
while(true){
var vec__47276 = (function (){var tnloc = zprint.zfns.ztag.call(null,nloc);
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
var nstr = zprint.zfns.zstring.call(null,nloc);
var trim_nstr = clojure.string.trimr.call(null,nstr);
if((((trim_nstr).length) > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),(spaces + (cljs.core.count.call(null,nstr) - ((trim_nstr).length)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),spaces], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tnloc,spaces], null);
}
})();
var tnloc = cljs.core.nth.call(null,vec__47276,(0),null);
var spaces__$1 = cljs.core.nth.call(null,vec__47276,(1),null);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
var G__47279 = rewrite_clj.zip.left_STAR_.call(null,nloc);
var G__47280 = spaces__$1;
var G__47281 = true;
nloc = G__47279;
spaces = G__47280;
passed_nl_QMARK_ = G__47281;
continue;
} else {
if(((cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))){
if(cljs.core.truth_(zprint.comment.inlinecomment_QMARK_.call(null,nloc))){
var nloc_length_before = zprint.comment.length_before.call(null,nloc);
var zloc_length_before = zprint.comment.length_before.call(null,zloc);
if(cljs.core._EQ_.call(null,nloc_length_before,zloc_length_before)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zloc_length_before], null);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.not_EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
if(cljs.core.truth_(passed_nl_QMARK_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zprint.comment.length_before.call(null,zloc)], null);
}
} else {
var G__47282 = rewrite_clj.zip.left_STAR_.call(null,nloc);
var G__47283 = (rewrite_clj.zip.length.call(null,nloc) + spaces__$1);
var G__47284 = passed_nl_QMARK_;
nloc = G__47282;
spaces = G__47283;
passed_nl_QMARK_ = G__47284;
continue;

}
}
}
}
break;
}
});
/**
 * Take a string and an index, and look for the last space prior to the
 *   index. If we wanted to tie ourselves to 1.8, we could use 
 *   clojure.string/last-index-of, but we don't.  However, we use similar
 *   conventions, i.e., if no space is found, return nil, and if the index
 *   is a space return that value, and accept any from-index, including one
 *   larger than the length of the string.
 */
zprint.comment.last_space = (function zprint$comment$last_space(s,from_index){
var from_index__$1 = (function (){var x__21118__auto__ = (cljs.core.count.call(null,s) - (1));
var y__21119__auto__ = from_index;
return ((x__21118__auto__ < y__21119__auto__) ? x__21118__auto__ : y__21119__auto__);
})();
var rev_seq = cljs.core.reverse.call(null,cljs.core.take.call(null,(from_index__$1 + (1)),s));
var seq_after_space = cljs.core.take_while.call(null,(function (p1__47285_SHARP_){
return cljs.core.not_EQ_.call(null,p1__47285_SHARP_," ");
}),rev_seq);
var space_index = (from_index__$1 - cljs.core.count.call(null,seq_after_space));
if((space_index < (0))){
return null;
} else {
return space_index;
}
});
/**
 * Take a string and an index, and look for the next space *after* the
 *   index. If no space is found, return nil. Accept any from-index, 
 *   including one larger than the length of the string.
 */
zprint.comment.next_space = (function zprint$comment$next_space(s,from_index){
var from_index__$1 = (from_index + (1));
if((from_index__$1 < cljs.core.count.call(null,s))){
var seq_after_space = cljs.core.take_while.call(null,(function (p1__47286_SHARP_){
return cljs.core.not_EQ_.call(null,p1__47286_SHARP_," ");
}),cljs.core.drop.call(null,from_index__$1,cljs.core.seq.call(null,s)));
var space_index = (from_index__$1 + cljs.core.count.call(null,seq_after_space));
if((space_index >= cljs.core.count.call(null,s))){
return null;
} else {
return space_index;
}
} else {
return null;
}
});
/**
 * If this is a comment, and it is too long, word wrap it to the right width.
 *   Note that top level comments may well end with a newline, so remove it
 *   and reapply it at the end if that is the case.
 */
zprint.comment.wrap_comment = (function zprint$comment$wrap_comment(width,p__47287,start){
var vec__47288 = p__47287;
var s = cljs.core.nth.call(null,vec__47288,(0),null);
var color = cljs.core.nth.call(null,vec__47288,(1),null);
var stype = cljs.core.nth.call(null,vec__47288,(2),null);
var element = vec__47288;
if((!(((cljs.core._EQ_.call(null,stype,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,stype,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))))){
return element;
} else {
var comment_width = (width - start);
var semi_str = cljs.core.re_find.call(null,/;*/,s);
var rest_str = cljs.core.subs.call(null,s,cljs.core.count.call(null,semi_str));
var space_str = cljs.core.re_find.call(null,/ */,rest_str);
var rest_str__$1 = cljs.core.subs.call(null,rest_str,cljs.core.count.call(null,space_str));
var newline_QMARK_ = cljs.core.re_find.call(null,/\n$/,s);
var comment_width__$1 = ((comment_width - cljs.core.count.call(null,semi_str)) - cljs.core.count.call(null,space_str));
var comment_str = rest_str__$1;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,comment_str)){
if((cljs.core.count.call(null,out) === (0))){
if(cljs.core.truth_(newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(38)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null)], null);
}
} else {
return cljs.core.persistent_BANG_.call(null,(cljs.core.truth_(newline_QMARK_)?cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(39)], null)):out));
}
} else {
var last_space_index = (((((comment_str).length) <= comment_width__$1))?(((comment_str).length) - (1)):(((comment_width__$1 <= (0)))?(function (){var or__20754__auto__ = zprint.comment.next_space.call(null,comment_str,(0));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (((comment_str).length) - (1));
}
})():(function (){var or__20754__auto__ = zprint.comment.last_space.call(null,comment_str,comment_width__$1);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = zprint.comment.next_space.call(null,comment_str,comment_width__$1);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return (((comment_str).length) - (1));
}
}
})()));
var next_comment = clojure.string.trimr.call(null,cljs.core.subs.call(null,comment_str,(0),(last_space_index + (1))));
var G__47291 = cljs.core.subs.call(null,comment_str,(last_space_index + (1)));
var G__47292 = (((cljs.core.count.call(null,out) === (0)))?cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,stype], null)):cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,start))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(40)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128)], null)));
comment_str = G__47291;
out = G__47292;
continue;
}
break;
}
}
});
/**
 * Takes the start of this vector and the vector itself.
 */
zprint.comment.loc_vec = (function zprint$comment$loc_vec(start,p__47293){
var vec__47294 = p__47293;
var s = cljs.core.nth.call(null,vec__47294,(0),null);
var split = zprint.comment.split_lf.call(null,s);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,split),(1))){
return (start + cljs.core.count.call(null,s));
} else {
return cljs.core.count.call(null,cljs.core.last.call(null,split));
}
});
/**
 * Take a style-vec and produce a style-loc-vec with the starting column
 *   of each element in the style-vec. Accepts a beginning indent.
 */
zprint.comment.style_loc_vec = (function zprint$comment$style_loc_vec(indent,style_vec){
return cljs.core.butlast.call(null,cljs.core.reductions.call(null,zprint.comment.loc_vec,indent,style_vec));
});
/**
 * Take a transient output vector and a vector and lift any style-vec elements
 *   out of the input vector.
 */
zprint.comment.lift_vec = (function zprint$comment$lift_vec(out_vec,element){
if(typeof cljs.core.first.call(null,element) === 'string'){
return cljs.core.conj.call(null,out_vec,element);
} else {
var element_vec = element;
var out = out_vec;
while(true){
if(cljs.core.not.call(null,element_vec)){
return out;
} else {
var G__47297 = cljs.core.next.call(null,element_vec);
var G__47298 = cljs.core.conj.call(null,out,cljs.core.first.call(null,element_vec));
element_vec = G__47297;
out = G__47298;
continue;
}
break;
}
}
});
/**
 * Take a style-vec [[s color type] [s color type] [[s color type]
 *   [s color type]] [s color type] ...] and lift out the inner vectors.
 */
zprint.comment.lift_style_vec = (function zprint$comment$lift_style_vec(style_vec){
return cljs.core.reduce.call(null,zprint.comment.lift_vec,cljs.core.PersistentVector.EMPTY,style_vec);
});
/**
 * Take the final output style-vec, and wrap any comments which run over
 *   the width. Looking for 
 */
zprint.comment.fzprint_wrap_comments = (function zprint$comment$fzprint_wrap_comments(p__47299,style_vec){
var map__47300 = p__47299;
var map__47300__$1 = cljs.core.__destructure_map.call(null,map__47300);
var options = map__47300__$1;
var width = cljs.core.get.call(null,map__47300__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: indent:",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options));
} else {
}

var start_col = zprint.comment.style_loc_vec.call(null,(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})(),style_vec);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: style-vec:",cljs.core.pr_str.call(null,style_vec)):null);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: start-col:",start_col):null);
var wrap_style_vec = cljs.core.mapv.call(null,cljs.core.partial.call(null,zprint.comment.wrap_comment,width),style_vec,start_col);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: wrap:",cljs.core.pr_str.call(null,style_vec)):null);
var out_style_vec = zprint.comment.lift_style_vec.call(null,wrap_style_vec);
return out_style_vec;
});
/**
 * Find a the first element of this type working from the end of a 
 *   style-vec.  Return the index of the element.
 */
zprint.comment.find_element_from_end = (function zprint$comment$find_element_from_end(element_pred_QMARK_,style_vec){
var index = (cljs.core.count.call(null,style_vec) - (1));
while(true){
if((index < (0))){
return null;
} else {
var vec__47301 = cljs.core.nth.call(null,style_vec,index);
var _ = cljs.core.nth.call(null,vec__47301,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__47301,(1),null);
var e = cljs.core.nth.call(null,vec__47301,(2),null);
if(cljs.core.truth_(element_pred_QMARK_.call(null,e))){
return index;
} else {
var G__47304 = (index - (1));
index = G__47304;
continue;
}
}
break;
}
});
/**
 * Given a style-vec, how big is it in actual characters.  This doesn't
 *   handle newlines.
 */
zprint.comment.line_size = (function zprint$comment$line_size(style_vec){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.partial.call(null,zprint.comment.loc_vec,(0)),style_vec));
});
/**
 * Given a style-vec, whose last element in a comment, find the amount
 *   of space before that comment on the line.
 */
zprint.comment.space_before_comment = (function zprint$comment$space_before_comment(style_vec){
var indent_index = zprint.comment.find_element_from_end.call(null,(function (p1__47305_SHARP_){
return ((cljs.core._EQ_.call(null,p1__47305_SHARP_,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,p1__47305_SHARP_,new cljs.core.Keyword(null,"newline","newline",1790071323))));
}),style_vec);
var this_line_vec = (cljs.core.truth_(indent_index)?cljs.core.nthnext.call(null,style_vec,indent_index):style_vec);
return zprint.comment.line_size.call(null,cljs.core.butlast.call(null,this_line_vec));
});
/**
 * Try to bring inline comments back onto the line on which they belong.
 */
zprint.comment.fzprint_inline_comments = (function zprint$comment$fzprint_inline_comments(p__47306,style_vec){
var map__47307 = p__47306;
var map__47307__$1 = cljs.core.__destructure_map.call(null,map__47307);
var options = map__47307__$1;
var width = cljs.core.get.call(null,map__47307__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-inline-comments:",style_vec));
} else {
}

var cvec = style_vec;
var last_out = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",null,null], null);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cvec)){
return out;
} else {
var vec__47317 = cljs.core.first.call(null,cvec);
var s = cljs.core.nth.call(null,vec__47317,(0),null);
var c = cljs.core.nth.call(null,vec__47317,(1),null);
var e = cljs.core.nth.call(null,vec__47317,(2),null);
var element = vec__47317;
var vec__47320 = cljs.core.second.call(null,cvec);
var _ = cljs.core.nth.call(null,vec__47320,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__47320,(1),null);
var ne = cljs.core.nth.call(null,vec__47320,(2),null);
var nn = cljs.core.nth.call(null,vec__47320,(3),null);
var next_element = vec__47320;
var vec__47323 = last_out;
var ___$2 = cljs.core.nth.call(null,vec__47323,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__47323,(1),null);
var le = cljs.core.nth.call(null,vec__47323,(2),null);
var new_element = ((((((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"newline","newline",1790071323))))) && (cljs.core._EQ_.call(null,ne,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))?(((!(((cljs.core._EQ_.call(null,le,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,le,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks.call(null,nn),c,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(25)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,zprint.comment.space_before_comment.call(null,out)))].join(''),c,new cljs.core.Keyword(null,"indent","indent",-148200125),(41)], null)):element
);
var G__47326 = cljs.core.next.call(null,cvec);
var G__47327 = new_element;
var G__47328 = cljs.core.conj.call(null,out,new_element);
cvec = G__47326;
last_out = G__47327;
out = G__47328;
continue;
}
break;
}
});
zprint.comment.max_aligned_inline_comment_distance = (5);
/**
 * Given a style-vec, find previously aligned inline comments and
 *   output the as a sequence of vectors of comments. The previously
 *   aligned comments do not have to be consecutive, but they can't
 *   be separated by more than max-aligned-inline-comment-distance.
 *   Each comment itself is a vector: [indent-index inline-comment-index],
 *   yielding a [[[indent-index inline-comment-index] [indent-index
 *   inline-comment-index] ...] ...].  The indexes are into the
 *   style-vec.
 */
zprint.comment.find_aligned_inline_comments = (function zprint$comment$find_aligned_inline_comments(style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var current_column = (0);
var distance = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cvec)){
var out__$1 = (((cljs.core.count.call(null,current_seq) > (1)))?cljs.core.conj.call(null,out,current_seq):out);
return out__$1;
} else {
var vec__47332 = cljs.core.first.call(null,cvec);
var s = cljs.core.nth.call(null,vec__47332,(0),null);
var c = cljs.core.nth.call(null,vec__47332,(1),null);
var e = cljs.core.nth.call(null,vec__47332,(2),null);
var spaces = cljs.core.nth.call(null,vec__47332,(3),null);
var start_column = cljs.core.nth.call(null,vec__47332,(4),null);
var element = vec__47332;
if(cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))){
if(cljs.core._EQ_.call(null,start_column,current_column)){
var G__47335 = cljs.core.next.call(null,cvec);
var G__47336 = (index + (1));
var G__47337 = null;
var G__47338 = (cljs.core.truth_(last_indent)?cljs.core.conj.call(null,current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function(){throw (new Error(["find-aligned-inline-comments a:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')))})());
var G__47339 = current_column;
var G__47340 = (0);
var G__47341 = out;
cvec = G__47335;
index = G__47336;
last_indent = G__47337;
current_seq = G__47338;
current_column = G__47339;
distance = G__47340;
out = G__47341;
continue;
} else {
var G__47342 = cljs.core.next.call(null,cvec);
var G__47343 = (index + (1));
var G__47344 = null;
var G__47345 = (cljs.core.truth_(last_indent)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)], null):(function(){throw (new Error(["find-aligned-inline-comments b:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')))})());
var G__47346 = start_column;
var G__47347 = (0);
var G__47348 = (((cljs.core.count.call(null,current_seq) > (1)))?cljs.core.conj.call(null,out,current_seq):out);
cvec = G__47342;
index = G__47343;
last_indent = G__47344;
current_seq = G__47345;
current_column = G__47346;
distance = G__47347;
out = G__47348;
continue;
}
} else {
if(((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"newline","newline",1790071323))))){
if((distance >= zprint.comment.max_aligned_inline_comment_distance)){
var G__47349 = cljs.core.next.call(null,cvec);
var G__47350 = (index + (1));
var G__47351 = index;
var G__47352 = cljs.core.PersistentVector.EMPTY;
var G__47353 = (0);
var G__47354 = (0);
var G__47355 = (((cljs.core.count.call(null,current_seq) > (1)))?cljs.core.conj.call(null,out,current_seq):out);
cvec = G__47349;
index = G__47350;
last_indent = G__47351;
current_seq = G__47352;
current_column = G__47353;
distance = G__47354;
out = G__47355;
continue;
} else {
var G__47356 = cljs.core.next.call(null,cvec);
var G__47357 = (index + (1));
var G__47358 = index;
var G__47359 = current_seq;
var G__47360 = current_column;
var G__47361 = (distance + (1));
var G__47362 = out;
cvec = G__47356;
index = G__47357;
last_indent = G__47358;
current_seq = G__47359;
current_column = G__47360;
distance = G__47361;
out = G__47362;
continue;
}
} else {
var G__47363 = cljs.core.next.call(null,cvec);
var G__47364 = (index + (1));
var G__47365 = last_indent;
var G__47366 = current_seq;
var G__47367 = current_column;
var G__47368 = distance;
var G__47369 = out;
cvec = G__47363;
index = G__47364;
last_indent = G__47365;
current_seq = G__47366;
current_column = G__47367;
distance = G__47368;
out = G__47369;
continue;

}
}
}
break;
}
});
/**
 * Given a style-vec, find consecutive inline comments and output
 *   the as a sequence of vectors of comments.  Each comment itself
 *   is a vector: [indent-index inline-comment-index], yielding a
 *   [[[indent-index inline-comment-index] [indent-index inline-comment-index]
 *   ...] ...]
 */
zprint.comment.find_consecutive_inline_comments = (function zprint$comment$find_consecutive_inline_comments(style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cvec)){
return out;
} else {
var vec__47373 = cljs.core.first.call(null,cvec);
var s = cljs.core.nth.call(null,vec__47373,(0),null);
var c = cljs.core.nth.call(null,vec__47373,(1),null);
var e = cljs.core.nth.call(null,vec__47373,(2),null);
var element = vec__47373;
if(cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))){
var G__47376 = cljs.core.next.call(null,cvec);
var G__47377 = (index + (1));
var G__47378 = null;
var G__47379 = (cljs.core.truth_(last_indent)?cljs.core.conj.call(null,current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function(){throw (new Error(["find-consecutive-inline-comments:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')))})());
var G__47380 = out;
cvec = G__47376;
index = G__47377;
last_indent = G__47378;
current_seq = G__47379;
out = G__47380;
continue;
} else {
if(((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"newline","newline",1790071323))))){
var G__47381 = cljs.core.next.call(null,cvec);
var G__47382 = (index + (1));
var G__47383 = index;
var G__47384 = (cljs.core.truth_(last_indent)?cljs.core.PersistentVector.EMPTY:current_seq);
var G__47385 = (cljs.core.truth_(last_indent)?(((cljs.core.count.call(null,current_seq) > (1)))?cljs.core.conj.call(null,out,current_seq):out):out);
cvec = G__47381;
index = G__47382;
last_indent = G__47383;
current_seq = G__47384;
out = G__47385;
continue;
} else {
var G__47386 = cljs.core.next.call(null,cvec);
var G__47387 = (index + (1));
var G__47388 = last_indent;
var G__47389 = current_seq;
var G__47390 = out;
cvec = G__47386;
index = G__47387;
last_indent = G__47388;
current_seq = G__47389;
out = G__47390;
continue;

}
}
}
break;
}
});
/**
 * Takes a single vector of [indent-index comment-index] and will show the
 *   column on the line in which the comment starts.
 */
zprint.comment.comment_column = (function zprint$comment$comment_column(p__47391,style_vec){
var vec__47392 = p__47391;
var indent_index = cljs.core.nth.call(null,vec__47392,(0),null);
var comment_index = cljs.core.nth.call(null,vec__47392,(1),null);
if(cljs.core.vector_QMARK_.call(null,style_vec)){
} else {
throw (new Error(["comment-column: style-vec not a vector!! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_vec)].join('')));
}

var index = indent_index;
var column = (0);
while(true){
if(cljs.core._EQ_.call(null,index,comment_index)){
return column;
} else {
var G__47395 = (index + (1));
var G__47396 = zprint.comment.loc_vec.call(null,column,cljs.core.nth.call(null,style_vec,index));
index = G__47395;
column = G__47396;
continue;
}
break;
}
});
/**
 * Take a single inline comment vector:
 *   [indent-index inline-comment-index] 
 *   and replace it with [inline-comment-index start-column spaces-before].
 */
zprint.comment.comment_vec_column = (function zprint$comment$comment_vec_column(style_vec,p__47397){
var vec__47398 = p__47397;
var indent_index = cljs.core.nth.call(null,vec__47398,(0),null);
var inline_comment_index = cljs.core.nth.call(null,vec__47398,(1),null);
var comment_vec = vec__47398;
var start_column = zprint.comment.comment_column.call(null,comment_vec,style_vec);
var spaces_before = zprint.comment.loc_vec.call(null,(0),cljs.core.nth.call(null,style_vec,(inline_comment_index - (1))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_comment_index,start_column,spaces_before], null);
});
/**
 * Take a single vector of inline comments
 *   [[indent-index inline-comment-index] [indent-index inline-comment-index]
 * ...] and replace it with [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...]
 */
zprint.comment.comment_vec_seq_column = (function zprint$comment$comment_vec_seq_column(style_vec,comment_vec_seq){
return cljs.core.map.call(null,cljs.core.partial.call(null,zprint.comment.comment_vec_column,style_vec),comment_vec_seq);
});
/**
 * Take a seq of all of the comments as produced by 
 *   find-consecutive-inline-comments, and turn it into:
 *   [[[inline-comment-index start-column spaces-before] [inline-comment-index
 *   start-column spaces-before]
 *   ...] ...]
 */
zprint.comment.comment_vec_all_column = (function zprint$comment$comment_vec_all_column(style_vec,comment_vec_all){
return cljs.core.map.call(null,cljs.core.partial.call(null,zprint.comment.comment_vec_seq_column,style_vec),comment_vec_all);
});
/**
 * Given a set of inline comments:
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], determine
 * the minimum column at which they could be aligned.
 */
zprint.comment.minimum_column = (function zprint$comment$minimum_column(comment_vec){
var minimum_vec = cljs.core.map.call(null,(function (p1__47401_SHARP_){
return ((cljs.core.second.call(null,p1__47401_SHARP_) - cljs.core.nth.call(null,p1__47401_SHARP_,(2))) + (1));
}),comment_vec);
var minimum_col = cljs.core.apply.call(null,cljs.core.max,minimum_vec);
return minimum_col;
});
/**
 * Given a new start-column, and a vector 
 *   [[inline-comment-index start-column spaces-before]
 *   and a style-vec, return a new style-vec with the inline-comment starting
 *   at a new column.
 */
zprint.comment.change_start_column = (function zprint$comment$change_start_column(new_start_column,style_vec,p__47402){
var vec__47403 = p__47402;
var inline_comment_index = cljs.core.nth.call(null,vec__47403,(0),null);
var start_column = cljs.core.nth.call(null,vec__47403,(1),null);
var spaces_before = cljs.core.nth.call(null,vec__47403,(2),null);
var comment_vec = vec__47403;
var delta_spaces = (new_start_column - start_column);
var new_spaces = (spaces_before + delta_spaces);
var previous_element_index = (inline_comment_index - (1));
var vec__47406 = cljs.core.nth.call(null,style_vec,previous_element_index);
var s = cljs.core.nth.call(null,vec__47406,(0),null);
var c = cljs.core.nth.call(null,vec__47406,(1),null);
var e = cljs.core.nth.call(null,vec__47406,(2),null);
var previous_element = vec__47406;
var new_previous_element = ((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,new_spaces))].join(''),c,e], null):((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,new_spaces)),c,e,(26)], null):(function(){throw (new Error(["change-start-column: comment preceded by neither"," an :indent nor :whitespace!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')))})()
));
return cljs.core.assoc.call(null,style_vec,previous_element_index,new_previous_element);
});
/**
 * Given one set of inline comments: 
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], align them 
 * as best as possible, and return the modified style-vec.
 */
zprint.comment.align_comment_vec = (function zprint$comment$align_comment_vec(style_vec,comment_vec){
var minimum_col = zprint.comment.minimum_column.call(null,comment_vec);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.comment.change_start_column,minimum_col),style_vec,comment_vec);
});
/**
 * Given the current style-vec, align all consecutive inline comments.
 */
zprint.comment.fzprint_align_inline_comments = (function zprint$comment$fzprint_align_inline_comments(options,style_vec){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-align-inline-comments: style-vec:",style_vec));
} else {
}

var style = new cljs.core.Keyword(null,"inline-align-style","inline-align-style",1548722575).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"none","none",1333468478))){
return style_vec;
} else {
var comment_vec = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"aligned","aligned",-1015148916)))?zprint.comment.find_aligned_inline_comments.call(null,style_vec):((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"consecutive","consecutive",-1628234596)))?zprint.comment.find_consecutive_inline_comments.call(null,style_vec):null));
var comment_vec_column = zprint.comment.comment_vec_all_column.call(null,style_vec,comment_vec);
return cljs.core.reduce.call(null,zprint.comment.align_comment_vec,style_vec,comment_vec_column);
}
});
