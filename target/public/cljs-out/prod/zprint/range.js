// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('zprint.range');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.util');
goog.require('zprint.config');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
/**
 * If a line number n is in a particular row, return the row map.
 *   If it is not in the row, return +1 or -1 to indicate which direction
 *   to look.
 */
zprint.range.in_row_QMARK_ = (function zprint$range$in_row_QMARK_(n,row){
if(cljs.core.truth_(row)){
if((((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row) <= n)) && ((n <= new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(row))))){
return row;
} else {
if((n < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row))){
return (-1);
} else {
return (1);
}
}
} else {
return null;
}
});
/**
 * Given two rows, is the first before the second?
 */
zprint.range.row_before_QMARK_ = (function zprint$range$row_before_QMARK_(row_a,row_b){
return (new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(row_a) < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row_b));
});
/**
 * Given two rows, if the linenumber is between the rows, return true, else
 *   nil.
 */
zprint.range.between_rows_QMARK_ = (function zprint$range$between_rows_QMARK_(linenumber,row_a,row_b){
if(((cljs.core.map_QMARK_.call(null,row_a)) && (cljs.core.map_QMARK_.call(null,row_b)))){
if(zprint.range.row_before_QMARK_.call(null,row_a,row_b)){
return (((new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(row_a) < linenumber)) && ((linenumber < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row_b))));
} else {
return (((new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(row_b) < linenumber)) && ((linenumber < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row_a))));
}
} else {
return null;
}
});
/**
 * Given a row-vec, and a current index into the row-vec, if the
 *   linenumber is within that row, return the index to that row.   If
 *   the linenumber is not in that row, then scan either way for
 *   max-tries looking for a match for this linenumber.  Return the
 *   row index if a row is found containing this linenumber. If it is
 *   between two rows, return the row after.  If we fall off the either
 *   end of the row-vec, then return :before-beginning or :beyone-end.  
 *   If we don't find anything after trying for max-tries, :before or
 *   :after, depending on which way we should try next.
 */
zprint.range.scan_for_row = (function zprint$range$scan_for_row(row_vec,row_vec_index,linenumber,max_tries){
var current_index = row_vec_index;
var previous_index = null;
var tries = (0);
while(true){
var row = cljs.core.get.call(null,row_vec,current_index);
var row_or_direction = zprint.range.in_row_QMARK_.call(null,linenumber,row);
if(cljs.core.map_QMARK_.call(null,row_or_direction)){
return current_index;
} else {
if((row_or_direction == null)){
if((current_index > (0))){
return new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285);
} else {
return new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715);
}
} else {
if((tries >= max_tries)){
if((row_or_direction > (0))){
return new cljs.core.Keyword(null,"after","after",594996914);
} else {
return new cljs.core.Keyword(null,"before","before",-1633692388);
}
} else {
var next_index = (current_index + row_or_direction);
var next_row = cljs.core.get.call(null,row_vec,next_index);
var row_or_direction__$1 = zprint.range.in_row_QMARK_.call(null,linenumber,next_row);
if(cljs.core.map_QMARK_.call(null,row_or_direction__$1)){
return next_index;
} else {
if((row_or_direction__$1 == null)){
if((next_index > (0))){
return new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285);
} else {
return new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715);
}
} else {
if(cljs.core.truth_(zprint.range.between_rows_QMARK_.call(null,linenumber,row,next_row))){
if(zprint.range.row_before_QMARK_.call(null,row,next_row)){
return next_index;
} else {
return current_index;
}
} else {
var G__55397 = (current_index + row_or_direction__$1);
var G__55398 = current_index;
var G__55399 = (tries + (1));
current_index = G__55397;
previous_index = G__55398;
tries = G__55399;
continue;
}

}
}
}

}
}
break;
}
});
/**
 * Given a vector of rows, find the row that contains a line number,
 *   linenumber, and return the number of that row in the vector.
 *   row-vec looks like this: 
 *   [{:col 1, :end-col 21, :end-row 7, :row 2}
 * {:col 1, :end-col 6, :end-row 18, :row 9}
 * {:col 1, :end-col 6, :end-row 29, :row 20}]
 *   If none exists, return the next row. Note that line numbers are
 *   1 based, not zero based for this routine and the information in
 *   row-vec, but the index into row-vec that this routine returns is
 *   zero based.  Uses a binary search. If the line number is before
 *   the first information in the row-vec, returns :before-beginning,
 *   and if it is after the last information in the row-vec, returns
 *   :beyond-end. Note that find-row returns an index into row-vec,
 *   and it must be the row-vec that has had nils removed from it (or
 *   this routine would do that for you).
 */
zprint.range.find_row = (function zprint$range$find_row(var_args){
var G__55401 = arguments.length;
switch (G__55401) {
case 4:
return zprint.range.find_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.range.find_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.range.find_row.cljs$core$IFn$_invoke$arity$4 = (function (row_vec,linenumber,dbg_QMARK_,scan_size){
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.println.call(null,"find-row: linenumber:",linenumber,"scan-size:",scan_size);
} else {
}

var size = cljs.core.count.call(null,row_vec);
var row_vec_index = ((size / (2)) | (0));
var previous_index = (0);
var tries = (0);
while(true){
if((tries > (10))){
return new cljs.core.Keyword(null,"fail","fail",1706214930);
} else {
var maybe_index = zprint.range.scan_for_row.call(null,row_vec,row_vec_index,linenumber,scan_size);
if(typeof maybe_index === 'number'){
return maybe_index;
} else {
if(((cljs.core._EQ_.call(null,maybe_index,new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715))) || (cljs.core._EQ_.call(null,maybe_index,new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285))))){
return maybe_index;
} else {
var G__55403 = ((cljs.core._EQ_.call(null,maybe_index,new cljs.core.Keyword(null,"before","before",-1633692388)))?cljs.core._:cljs.core._PLUS_).call(null,row_vec_index,((zprint.util.local_abs.call(null,(row_vec_index - previous_index)) / (2)) | (0)));
var G__55404 = row_vec_index;
var G__55405 = (tries + (1));
row_vec_index = G__55403;
previous_index = G__55404;
tries = G__55405;
continue;

}
}
}
break;
}
}));

(zprint.range.find_row.cljs$core$IFn$_invoke$arity$3 = (function (row_vec,n,dbg_QMARK_){
return zprint.range.find_row.call(null,row_vec,n,dbg_QMARK_,(4));
}));

(zprint.range.find_row.cljs$lang$maxFixedArity = 4);

/**
 * Given a sequence of lines and a starting line index in that sequence,
 *   return the index of the first non-blank line including or after that
 *   starting line index.
 */
zprint.range.next_non_blank_line = (function zprint$range$next_non_blank_line(line_vec,index){
var max_idx = (cljs.core.count.call(null,line_vec) - (1));
var idx = index;
while(true){
var line = cljs.core.nth.call(null,line_vec,idx);
if((((!(cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,line))))) || ((idx >= max_idx)))){
return idx;
} else {
var G__55406 = (idx + (1));
idx = G__55406;
continue;
}
break;
}
});
/**
 * Given a sequence of lines and a starting line index in that sequence,
 *   return the index of the first previous non-blank line including or before
 *   that starting line index.  Returns -1 if no non-blank line found.
 */
zprint.range.previous_non_blank_line = (function zprint$range$previous_non_blank_line(line_vec,index){
var idx = index;
while(true){
var line = cljs.core.nth.call(null,line_vec,idx);
if((!(cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,line))))){
return idx;
} else {
if((idx === (0))){
return (-1);
} else {
var G__55407 = (idx - (1));
idx = G__55407;
continue;

}
}
break;
}
});
/**
 * Given a string which contains lines and a vector of those lines,
 *   and a range of lines inside of them, expand the range such that
 *   it covers everything from the first non-blank line beyond the
 *   previous top level expression before the start to the end of the
 *   top level expression containing the end of the range.  Returns
 *   [actual-start actual-end].  Note that start, end, actual-start
 *   and actual-end are all zero based line numbers.
 */
zprint.range.expand_range_to_top_level = (function zprint$range$expand_range_to_top_level(filestring,lines,start,end,dbg_QMARK_){
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.println.call(null,"expand-range-to-top-level: start:",start,"end:",end);
} else {
}

var line_count = cljs.core.count.call(null,lines);
var start__$1 = ((typeof start === 'number')?start:(0));
var end__$1 = ((typeof end === 'number')?end:line_count);
var end__$2 = (((end__$1 < start__$1))?start__$1:end__$1);
var row_vec = cljs.core.mapv.call(null,cljs.core.meta,cljs.core.remove.call(null,(function (p1__55408_SHARP_){
return cljs.core._EQ_.call(null,rewrite_clj.node.tag.call(null,p1__55408_SHARP_),new cljs.core.Keyword(null,"comment","comment",532206069));
}),cljs.core.remove.call(null,rewrite_clj.node.whitespace_QMARK_,rewrite_clj.node.children.call(null,rewrite_clj.parser.parse_string_all.call(null,filestring)))));
var _ = (cljs.core.truth_(dbg_QMARK_)?cljs.core.prn.call(null,row_vec):null);
var start_row_idx = (cljs.core.truth_(row_vec)?zprint.range.find_row.call(null,row_vec,(start__$1 + (1)),dbg_QMARK_):new cljs.core.Keyword(null,"fail","fail",1706214930));
var ___$1 = (cljs.core.truth_(dbg_QMARK_)?cljs.core.println.call(null,"expand-range-to-top-level start-row-idx:",start_row_idx,((typeof start_row_idx === 'number')?["row:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row_vec,start_row_idx))," previous row:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row_vec,(function (){var x__21111__auto__ = (0);
var y__21112__auto__ = (start_row_idx - (1));
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})()))].join(''):"")):null);
var actual_start = ((cljs.core._EQ_.call(null,start_row_idx,new cljs.core.Keyword(null,"fail","fail",1706214930)))?(-1):((((cljs.core._EQ_.call(null,start_row_idx,new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715))) && ((!((start__$1 < (0)))))))?(0):((cljs.core._EQ_.call(null,start_row_idx,new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715)))?(-1):((cljs.core._EQ_.call(null,start_row_idx,(0)))?(0):((cljs.core._EQ_.call(null,start_row_idx,new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285)))?(-1):new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row_vec,(start_row_idx - (1))))
)))));
var actual_start__$1 = (((((actual_start < (1))) || ((actual_start >= line_count))))?actual_start:zprint.range.next_non_blank_line.call(null,lines,actual_start));
var end_row_idx = (cljs.core.truth_(row_vec)?zprint.range.find_row.call(null,row_vec,(end__$2 + (1)),dbg_QMARK_):new cljs.core.Keyword(null,"fail","fail",1706214930));
var ___$2 = (cljs.core.truth_(dbg_QMARK_)?cljs.core.println.call(null,"expand-range-to-top-level end-row-idx:",end_row_idx,((typeof end_row_idx === 'number')?["row:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row_vec,end_row_idx))].join(''):"")):null);
var actual_end = ((((cljs.core._EQ_.call(null,end_row_idx,new cljs.core.Keyword(null,"fail","fail",1706214930))) || (cljs.core._EQ_.call(null,end_row_idx,new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285)))))?((cljs.core._EQ_.call(null,start_row_idx,new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285)))?(-1):line_count):((cljs.core._EQ_.call(null,end_row_idx,new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715)))?new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282):(function (){var end_row = cljs.core.get.call(null,row_vec,end_row_idx);
if(((end__$2 + (1)) < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end_row))){
if(cljs.core._EQ_.call(null,end_row_idx,start_row_idx)){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
return zprint.range.previous_non_blank_line.call(null,lines,end__$2);
}
} else {
return (new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(end_row) - (1));
}
})()
));
var actual_start__$2 = ((cljs.core._EQ_.call(null,actual_end,new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282)))?(-1):actual_start__$1);
var actual_end__$1 = ((cljs.core._EQ_.call(null,actual_end,new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282)))?(-1):actual_end);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actual_start__$2,actual_end__$1], null);
});
/**
 * Given lines, a sequence of lines, and a start and end of a range,
 *   split the sequence of lines into three parts: [before-lines range
 *   after-lines].  If any of these collections would be empty, return
 *   an empty sequence. End must be equal to or greater than start. If
 *   end is neg?, there will be no range. Note that for begin and range
 *   if they have something after them, we will add a null string to them,
 *   so that a join will have a newline on the end of it.
 */
zprint.range.split_out_range = (function zprint$range$split_out_range(lines,start,end){
var start__$1 = (function (){var x__21111__auto__ = start;
var y__21112__auto__ = (0);
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})();
var before = start__$1;
var range = (((end < (0)))?(0):((end - start__$1) + (1)));
var after = ((cljs.core.count.call(null,lines) - (1)) - end);
var before_lines = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,before,lines));
var range_lines = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,range,cljs.core.drop.call(null,before,lines)));
var after_lines = cljs.core.take.call(null,after,cljs.core.drop.call(null,(before + range),lines));
var before_lines__$1 = (((!(cljs.core.empty_QMARK_.call(null,range_lines))))?cljs.core.conj.call(null,before_lines,""):before_lines);
var range_lines__$1 = (((!(cljs.core.empty_QMARK_.call(null,after_lines))))?cljs.core.conj.call(null,range_lines,""):range_lines);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [before_lines__$1,range_lines__$1,after_lines], null);
});
/**
 * Given before-lines, range, and after-lines where before-lines
 *   and after-lines are sequences of lines, and range is a string
 *   which has been formatted, reassemble these three chunks into a
 *   single string.  Because split-out-range worked hard to figure
 *   out how to terminate before-lines and range with a newline,
 *   this is really pretty simple.
 */
zprint.range.reassemble_range = (function zprint$range$reassemble_range(before_lines,range,after_lines){
var before_str = clojure.string.join.call(null,"\n",before_lines);
var after_str = clojure.string.join.call(null,"\n",after_lines);
return [before_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(range),after_str].join('');
});
/**
 * Predicate to detect !zprint comments.
 */
zprint.range.comment_api_QMARK_ = (function zprint$range$comment_api_QMARK_(s){
if(clojure.string.starts_with_QMARK_.call(null,s,";")){
var s_onesemi = clojure.string.replace.call(null,s,/^;+/,";");
return clojure.string.starts_with_QMARK_.call(null,s,";!zprint ");
} else {
return null;
}
});
/**
 * Given the lines from split-out-range, scan through the before-lines
 *   and all of the ;!zprint comment API lines and return all of them
 *   unchanged. Don't look at the option maps, so there can't be errors.
 *   Returns [lines].
 */
zprint.range.get_comment_api = (function zprint$range$get_comment_api(before_lines){
return cljs.core.filterv.call(null,zprint.range.comment_api_QMARK_,before_lines);
});
/**
 * When the previous comment-api lines are being processed by process-form
 *   it has to know to ignore {:format :next} {:format :skip}.  It has to know
 *   that these are previous comment-api lines, and the way it will know is
 *   that we will prepend a ;!zprint {:!zprint-elide-skip-next? true}
 *   and we will append a ;!zprint {:!zprint-elide-skip-next? false} to these
 *   lines -- but only if there are any.
 */
zprint.range.wrap_comment_api = (function zprint$range$wrap_comment_api(before_lines){
var comment_api_lines = zprint.range.get_comment_api.call(null,before_lines);
if((!(cljs.core.empty_QMARK_.call(null,comment_api_lines)))){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [";!zprint {:!zprint-elide-skip-next? true}"], null),comment_api_lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [";!zprint {:!zprint-elide-skip-next? false}"], null)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Given a count of lines to drop and a string from which to drop them,
 *   return a new string with this many lines less. Assumes that we are
 *   working with canonical line endings in s, that is all line endings
 *   are 
 *  in s.
 */
zprint.range.drop_lines = (function zprint$range$drop_lines(drop_count,s){
var lines = clojure.string.split.call(null,s,/\n/,(-1));
var remaining_lines = cljs.core.drop.call(null,drop_count,lines);
var out_str = clojure.string.join.call(null,"\n",remaining_lines);
return out_str;
});
