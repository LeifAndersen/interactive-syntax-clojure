// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('zprint.zprint');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.finish');
goog.require('zprint.zfns');
goog.require('zprint.comment');
goog.require('zprint.ansi');
goog.require('zprint.config');
goog.require('zprint.zutil');
goog.require('zprint.util');
goog.require('zprint.optionfn');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
/**
 * Produce a dot string of desired size.
 */
zprint.zprint.dots = (function zprint$zprint$dots(n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"."));
});
/**
 * Make a version of conj! that takes multiple arguments.
 */
zprint.zprint.conj_it_BANG_ = (function zprint$zprint$conj_it_BANG_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___54442 = arguments.length;
var i__22083__auto___54443 = (0);
while(true){
if((i__22083__auto___54443 < len__22082__auto___54442)){
args__22092__auto__.push((arguments[i__22083__auto___54443]));

var G__54444 = (i__22083__auto___54443 + (1));
i__22083__auto___54443 = G__54444;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (to,rest){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,rest);
}));

(zprint.zprint.conj_it_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.zprint.conj_it_BANG_.cljs$lang$applyTo = (function (seq54440){
var G__54441 = cljs.core.first.call(null,seq54440);
var seq54440__$1 = cljs.core.next.call(null,seq54440);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54441,seq54440__$1);
}));

/**
 * Do split for newlines, instead of using regular expressions.
 *   Maximum split is 2.
 */
zprint.zprint.split_lf_2 = (function zprint$zprint$split_lf_2(s){
var temp__5718__auto__ = clojure.string.index_of.call(null,s,"\n");
if(cljs.core.truth_(temp__5718__auto__)){
var next_lf = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),next_lf),cljs.core.subs.call(null,s,(next_lf + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}
});
/**
 * Possibly validate an options map and merge it correctly with the existing
 *   options map.  Validation only happens when the caller says to validate
 *   and the new-map doesn't have :no-validate? true (unless the existing
 *   options map has :force-validate? true).
 *   This is necessary instead of just doing a merge-deep, since
 *   that doesn't get styles and removal done correctly.  Returns
 *   [merged-options-map new-options] or throws an error.
 */
zprint.zprint.internal_config_and_validate = (function zprint$zprint$internal_config_and_validate(var_args){
var G__54446 = arguments.length;
switch (G__54446) {
case 4:
return zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$4 = (function (options,new_map,error_str,validate_QMARK_){
var validate_QMARK___$1 = (cljs.core.truth_(validate_QMARK_)?(cljs.core.truth_(new cljs.core.Keyword(null,"no-validate?","no-validate?",226707798).cljs$core$IFn$_invoke$arity$1(new_map))?(cljs.core.truth_(new cljs.core.Keyword(null,"force-validate?","force-validate?",1416433615).cljs$core$IFn$_invoke$arity$1(options))?new cljs.core.Keyword(null,"validate","validate",-201300827):null):new cljs.core.Keyword(null,"validate","validate",-201300827)):null);
var vec__54447 = zprint.config.config_and_validate.call(null,null,null,options,new_map,validate_QMARK___$1);
var updated_map = cljs.core.nth.call(null,vec__54447,(0),null);
var _ = cljs.core.nth.call(null,vec__54447,(1),null);
var errors = cljs.core.nth.call(null,vec__54447,(2),null);
var errors__$1 = (cljs.core.truth_(errors)?["Options resulting from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_str)," had these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join(''):null);
if((!(cljs.core.empty_QMARK_.call(null,errors__$1)))){
throw (new Error(errors__$1));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,new_map], null);
}
}));

(zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$3 = (function (options,new_map,error_str){
return zprint.zprint.internal_config_and_validate.call(null,options,new_map,error_str,new cljs.core.Keyword(null,"validate","validate",-201300827));
}));

(zprint.zprint.internal_config_and_validate.cljs$lang$maxFixedArity = 4);

/**
 * Given an option-fn, call it with no arguments to see if it returns its
 *   name.  To be used only in exceptions or other times when performance is
 *   not important, because historically many option-fn's didn't know to do this.
 */
zprint.zprint.option_fn_name = (function zprint$zprint$option_fn_name(option_fn){
try{var option_fn_name = option_fn.call(null);
if(typeof option_fn_name === 'string'){
return [" named '",option_fn_name,"'"].join('');
} else {
return null;
}
}catch (e54451){var e = e54451;
return null;
}});
/**
 * Call zsexpr?, but only if zloc is a :token
 */
zprint.zprint.zsexpr_token_QMARK_ = (function zprint$zprint$zsexpr_token_QMARK_(zloc){
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"token","token",-1211463215))){
return zprint.zfns.zsexpr_QMARK_.call(null,zloc);
} else {
return null;
}
});
/**
 * For the major collections, returns a empty one. Essentially an
 *   implementation of empty for zlocs.
 */
zprint.zprint.empty_coll = (function zprint$zprint$empty_coll(zloc){
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"list","list",765357683))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"vector","vector",1902966158))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"set","set",304602554))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"map","map",1371690461))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
}
}
});
/**
 * Given a zloc, do the best we can to get an sexpr out of it.
 */
zprint.zprint.get_sexpr = (function zprint$zprint$get_sexpr(options,zloc){
try{return zprint.zfns.zsexpr.call(null,zloc);
}catch (e54454){var e = e54454;
var s = zprint.zfns.zstring.call(null,zloc);
var new_s = cljs.core.reduce.call(null,(function (p1__54452_SHARP_,p2__54453_SHARP_){
return clojure.string.replace.call(null,p1__54452_SHARP_,p2__54453_SHARP_,"");
}),s,new cljs.core.Keyword(null,"ignore-if-parse-fails","ignore-if-parse-fails",-31062657).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(options)));
var sexpr = (function (){try{var n = rewrite_clj.parser.parse_string.call(null,clojure.string.trim.call(null,new_s));
var new_zloc = rewrite_clj.zip.of_node_STAR_.call(null,n);
var sexpr = zprint.zfns.zsexpr.call(null,new_zloc);
return sexpr;
}catch (e54455){var e__$1 = e54455;
throw (new Error(["Unable to parse the string '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"' because of '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1),"'.  Consider adding any unallowed elements to"," {:parse {:ignore-if-parse-fails #{ <string> }}}"].join('')));
}})();
return sexpr;
}});
/**
 * Try to get an sexpr of something, and return nil if we can't.
 */
zprint.zprint.get_sexpr_or_nil = (function zprint$zprint$get_sexpr_or_nil(options,zloc){
try{return zprint.zprint.get_sexpr.call(null,options,zloc);
}catch (e54456){var e = e54456;
return null;
}});
/**
 * Call an option-fn and return a (possibly) validated map of 
 *   the merged options. Returns [merged-options-map new-options]
 */
zprint.zprint.call_option_fn = (function zprint$zprint$call_option_fn(caller,options,option_fn,zloc){
var sexpr_seq = zprint.zprint.get_sexpr.call(null,options,zloc);
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"zloc","zloc",-2123059767),zloc,new cljs.core.Keyword(null,"caller","caller",-1275362879),caller);
return zprint.zprint.internal_config_and_validate.call(null,options__$1,(function (){try{if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"call-option-fn sexpr-seq:",sexpr_seq));
} else {
}

var result = option_fn.call(null,options__$1,cljs.core.count.call(null,sexpr_seq),sexpr_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"call-option-fn result:",result));
} else {
}

return result;
}catch (e54457){var e = e54457;
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide-exception","guide-exception",1029205118).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$1));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"Failure in option-fn:",(function(){throw e})());
} else {
}

throw (new Error([" When ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(caller)," called an option-fn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.option_fn_name.call(null,option_fn))," it failed because: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')));
}})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(caller)," :option-fn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.option_fn_name.call(null,option_fn))," called with an sexpr of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sexpr_seq))].join(''),new cljs.core.Keyword(null,"validate","validate",-201300827));
});
/**
 * Call an option-fn-first with just the first thing in the zloc, and
 *   then return a validated map of just the new options.
 *   Returns [merge-options-map new-options]
 */
zprint.zprint.call_option_fn_first = (function zprint$zprint$call_option_fn_first(caller,options,option_fn_first,zloc){
var first_sexpr = zprint.zprint.get_sexpr.call(null,options,zprint.zfns.zfirst_sexpr.call(null,zloc));
return zprint.zprint.internal_config_and_validate.call(null,options,(function (){try{return option_fn_first.call(null,options,first_sexpr);
}catch (e54458){var e = e54458;
throw (new Error(["When ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(caller)," called an option-fn-first",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.option_fn_name.call(null,option_fn_first))," with '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sexpr),"' failed because: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')));
}})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(caller)," :option-fn-first",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.option_fn_name.call(null,option_fn_first))," called with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sexpr)].join(''),new cljs.core.Keyword(null,"validate","validate",-201300827));
});
/**
 * Given the options map and a caller, look for :guide-debug in the options
 *   map.  It looks like [:caller :depth [:element ...]]  If the caller and 
 *   depth match, return the guide, else nil.
 */
zprint.zprint.guide_debug = (function zprint$zprint$guide_debug(caller,options){
var debug_vector = new cljs.core.Keyword(null,"guide-debug","guide-debug",1517505112).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(debug_vector)){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"guide-debug: caller:",caller,"depth:",new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),"guide:",debug_vector);
} else {
}

if(((cljs.core._EQ_.call(null,caller,cljs.core.first.call(null,debug_vector))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),cljs.core.second.call(null,debug_vector))))){
return cljs.core.nth.call(null,debug_vector,(2));
} else {
return null;
}
} else {
return null;
}
});
zprint.zprint.condense = (function zprint$zprint$condense(depth,p__54459,p__54460){
var vec__54461 = p__54459;
var out = cljs.core.nth.call(null,vec__54461,(0),null);
var accumulated_string = cljs.core.nth.call(null,vec__54461,(1),null);
var current_depth = cljs.core.nth.call(null,vec__54461,(2),null);
var vec__54464 = p__54460;
var s = cljs.core.nth.call(null,vec__54464,(0),null);
var _ = cljs.core.nth.call(null,vec__54464,(1),null);
var what = cljs.core.nth.call(null,vec__54464,(2),null);
var element = vec__54464;
var new_depth = ((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"left","left",-399115937)))?(current_depth + (1)):((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"right","right",-452581833)))?(current_depth - (1)):current_depth
));
var accumulating_QMARK_ = (current_depth > depth);
var start_accumulating_QMARK_ = (new_depth > depth);
var new_accumulated_string = ((((accumulating_QMARK_) || (start_accumulating_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(accumulated_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''):accumulated_string);
var next_accumulated_string = ((start_accumulating_QMARK_)?new_accumulated_string:"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((accumulating_QMARK_) && ((!(start_accumulating_QMARK_)))))?cljs.core.conj.call(null,out,new_accumulated_string):((((accumulating_QMARK_) && (start_accumulating_QMARK_)))?out:(((((!(accumulating_QMARK_))) && ((!(start_accumulating_QMARK_)))))?cljs.core.conj.call(null,out,element):(((((!(accumulating_QMARK_))) && (start_accumulating_QMARK_)))?out:cljs.core.println.call(null,"shouldn't be an else")
)))),next_accumulated_string,new_depth], null);
});
/**
 * Take a style vec, and condense everything above the given depth.
 */
zprint.zprint.condense_depth = (function zprint$zprint$condense_depth(depth,coll){
return cljs.core.first.call(null,cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.zprint.condense,depth),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"",(1)], null),coll));
});
zprint.zprint.zpmap = (function zprint$zprint$zpmap(var_args){
var G__54468 = arguments.length;
switch (G__54468) {
case 3:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3 = (function (options,f,coll){
return cljs.core.map.call(null,f,coll);
}));

(zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4 = (function (options,f,coll1,coll2){
return cljs.core.map.call(null,f,coll1,coll2);
}));

(zprint.zprint.zpmap.cljs$lang$maxFixedArity = 4);

/**
 * Takes an option map and the return from zfuture.  If the
 *   options map has (:parallel? options) as true, then deref
 *   the value, otherwise just pass it through.
 */
zprint.zprint.zat = (function zprint$zprint$zat(options,value){
return value;
});
zprint.zprint.fzprint_dbg = cljs.core.atom.call(null,null);
/**
 * Accept a style-vec that we are about to hand to style-lines, and
 *   output it if called for, to aid in debugging.
 */
zprint.zprint.log_lines = (function zprint$zprint$log_lines(p__54470,dbg_output,ind,style_vec){
var map__54471 = p__54470;
var map__54471__$1 = cljs.core.__destructure_map.call(null,map__54471);
var options = map__54471__$1;
var dbg_print_QMARK_ = cljs.core.get.call(null,map__54471__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_indent = cljs.core.get.call(null,map__54471__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.call(null,map__54471__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
if(cljs.core.truth_(dbg_print_QMARK_)){
if(cljs.core.truth_(style_vec)){
cljs.core.println.call(null,dbg_indent,dbg_output,"--------------","in-hang?",in_hang_QMARK_);

return cljs.core.prn.call(null,style_vec);
} else {
return cljs.core.println.call(null,dbg_indent,dbg_output,"--------------- no style-vec");
}
} else {
return null;
}
});
/**
 * Show this thing as a function?
 */
zprint.zprint.showfn_QMARK_ = (function zprint$zprint$showfn_QMARK_(p__54472,f){
var map__54473 = p__54472;
var map__54473__$1 = cljs.core.__destructure_map.call(null,map__54473);
var options = map__54473__$1;
var fn_map = cljs.core.get.call(null,map__54473__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var color_QMARK_ = cljs.core.get.call(null,map__54473__$1,new cljs.core.Keyword(null,"color?","color?",-1891974356));
if(cljs.core.truth_((function (){var and__20748__auto__ = color_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return (!(typeof f === 'string'));
} else {
return and__20748__auto__;
}
})())){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var fn_map__$1 = new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options);
var or__20754__auto__ = fn_map__$1.call(null,f_str);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = cljs.core.re_find.call(null,/clojure/,f_str);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__20754__auto____$2 = cljs.core.re_find.call(null,/clojure/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f))));
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
return fn_map__$1.call(null,cljs.core.name.call(null,f));
}
}catch (e54474){var e = e54474;
return null;
}} else {
return null;
}
}
}
} else {
return null;
}
});
/**
 * Show this thing as a user defined function?  Assumes that we
 *   have already handled any clojure defined functions!
 */
zprint.zprint.show_user_fn_QMARK_ = (function zprint$zprint$show_user_fn_QMARK_(p__54475,f){
var map__54476 = p__54475;
var map__54476__$1 = cljs.core.__destructure_map.call(null,map__54476);
var options = map__54476__$1;
var user_fn_map = cljs.core.get.call(null,map__54476__$1,new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227));
var color_QMARK_ = cljs.core.get.call(null,map__54476__$1,new cljs.core.Keyword(null,"color?","color?",-1891974356));
if(cljs.core.truth_((function (){var and__20748__auto__ = color_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return (!(typeof f === 'string'));
} else {
return and__20748__auto__;
}
})())){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var or__20754__auto__ = cljs.core.get.call(null,user_fn_map,f_str);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__20754__auto____$1 = (!(cljs.core.empty_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f))))));
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
return cljs.core.get.call(null,user_fn_map,cljs.core.name.call(null,f));
}
}catch (e54477){var e = e54477;
return null;
}} else {
return null;
}
}
} else {
return null;
}
});
zprint.zprint.right_separator_map = new cljs.core.PersistentArrayMap(null, 3, [")",(1),"]",(1),"}",(1)], null);
/**
 * Given the fn-style, is the first output good enough to be worth
 *   doing. p is pretty, which is typically hanging, and b is basic, which
 *   is typically flow. p-count is the number of elements in the hang.
 */
zprint.zprint.good_enough_QMARK_ = (function zprint$zprint$good_enough_QMARK_(caller,p__54478,fn_style,p_count,indent_diff,p__54479,p__54480){
var map__54481 = p__54478;
var map__54481__$1 = cljs.core.__destructure_map.call(null,map__54481);
var options = map__54481__$1;
var map__54482 = cljs.core.get.call(null,map__54481__$1,new cljs.core.Keyword(null,"tuning","tuning",-48660925));
var map__54482__$1 = cljs.core.__destructure_map.call(null,map__54482);
var hang_flow = cljs.core.get.call(null,map__54482__$1,new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548));
var hang_type_flow = cljs.core.get.call(null,map__54482__$1,new cljs.core.Keyword(null,"hang-type-flow","hang-type-flow",-1585576590));
var hang_flow_limit = cljs.core.get.call(null,map__54482__$1,new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586));
var general_hang_adjust = cljs.core.get.call(null,map__54482__$1,new cljs.core.Keyword(null,"general-hang-adjust","general-hang-adjust",-1631406987));
var hang_if_equal_flow_QMARK_ = cljs.core.get.call(null,map__54482__$1,new cljs.core.Keyword(null,"hang-if-equal-flow?","hang-if-equal-flow?",-1113113992));
var map__54483 = cljs.core.get.call(null,map__54481__$1,caller);
var map__54483__$1 = cljs.core.__destructure_map.call(null,map__54483);
var hang_expand = cljs.core.get.call(null,map__54483__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.call(null,map__54483__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var hang_size = cljs.core.get.call(null,map__54483__$1,new cljs.core.Keyword(null,"hang-size","hang-size",-347944063));
var hang_adjust = cljs.core.get.call(null,map__54483__$1,new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382));
var width = cljs.core.get.call(null,map__54481__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__54481__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.call(null,map__54481__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__54484 = p__54479;
var p_lines = cljs.core.nth.call(null,vec__54484,(0),null);
var p_maxwidth = cljs.core.nth.call(null,vec__54484,(1),null);
var p_length_seq = cljs.core.nth.call(null,vec__54484,(2),null);
var p_what = cljs.core.nth.call(null,vec__54484,(3),null);
var vec__54487 = p__54480;
var b_lines = cljs.core.nth.call(null,vec__54487,(0),null);
var b_maxwidth = cljs.core.nth.call(null,vec__54487,(1),null);
var _ = cljs.core.nth.call(null,vec__54487,(2),null);
var b_what = cljs.core.nth.call(null,vec__54487,(3),null);
var p_last_maxwidth = cljs.core.last.call(null,p_length_seq);
var hang_diff__$1 = (function (){var or__20754__auto__ = hang_diff;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var hang_expand__$1 = (function (){var or__20754__auto__ = hang_expand;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return 1000.0;
}
})();
var hang_adjust__$1 = (function (){var or__20754__auto__ = hang_adjust;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return general_hang_adjust;
}
})();
var options__$1 = (cljs.core.truth_((function (){var or__20754__auto__ = p_what;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return b_what;
}
})())?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),true):options);
var result = ((cljs.core.not.call(null,b_lines))?true:(function (){var and__20748__auto__ = p_lines;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = (p_last_maxwidth <= (width - zprint.zprint.fix_rightcnt.call(null,rightcnt)));
if(and__20748__auto____$1){
var and__20748__auto____$2 = (p_maxwidth <= width);
if(and__20748__auto____$2){
var or__20754__auto__ = (p_lines === (0));
if(or__20754__auto__){
return or__20754__auto__;
} else {
var and__20748__auto____$3 = (b_lines > (0));
if(and__20748__auto____$3){
var and__20748__auto____$4 = (p_count > (0));
if(and__20748__auto____$4){
if(cljs.core.truth_((function (){var and__20748__auto____$5 = cljs.core._EQ_.call(null,p_lines,b_lines);
if(and__20748__auto____$5){
return hang_if_equal_flow_QMARK_;
} else {
return and__20748__auto____$5;
}
})())){
return true;
} else {
var and__20748__auto____$5 = (((indent_diff <= hang_diff__$1))?true:(((p_lines - (1)) / p_count) <= hang_expand__$1));
if(and__20748__auto____$5){
var and__20748__auto____$6 = (cljs.core.truth_(hang_size)?(p_lines < hang_size):true);
if(and__20748__auto____$6){
var factor = ((cljs.core._EQ_.call(null,fn_style,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?hang_type_flow:hang_flow);
if((p_lines > hang_flow_limit)){
return ((p_lines - (1)) <= b_lines);
} else {
return (((p_lines + hang_adjust__$1) / b_lines) < factor);
}
} else {
return and__20748__auto____$6;
}
} else {
return and__20748__auto____$5;
}
}
} else {
return and__20748__auto____$4;
}
} else {
return and__20748__auto____$3;
}
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),(cljs.core.truth_(result)?"++++++":"XXXXXX"),"p-what",p_what,"good-enough? caller:",caller,"fn-style:",fn_style,"width:",width,"rightcnt:",rightcnt,"hang-expand:",hang_expand__$1,"hang-flow-limit:",hang_flow_limit,"hang-adjust:",hang_adjust__$1,"(/ (+ p-lines hang-adjust) b-lines)",(cljs.core.truth_((function (){var and__20748__auto__ = p_lines;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = b_lines;
if(cljs.core.truth_(and__20748__auto____$1)){
return hang_adjust__$1;
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?((p_lines + hang_adjust__$1) / b_lines):null),"factor:",((cljs.core._EQ_.call(null,fn_style,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?hang_type_flow:hang_flow),"p-count:",p_count,"p-lines:",p_lines,"p-maxwidth:",p_maxwidth,"indent-diff:",indent_diff,"hang-diff:",hang_diff__$1,"p-last-maxwidth:",p_last_maxwidth,"b-lines:",b_lines,"b-maxwidth:",b_maxwidth);
} else {
}

return result;
});
/**
 * Add :in-hang? true to the options map.
 */
zprint.zprint.in_hang = (function zprint$zprint$in_hang(options){
if(cljs.core.truth_(new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639).cljs$core$IFn$_invoke$arity$1(options))){
return options;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639),(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return true;
}
})());
} else {
return options;
}
}
});
/**
 * Scan a collection, and return true if it contains any nils or empty
 *   collections.
 */
zprint.zprint.contains_nil_QMARK_ = (function zprint$zprint$contains_nil_QMARK_(coll){
return cljs.core.some.call(null,(function (p1__54490_SHARP_){
if(cljs.core.coll_QMARK_.call(null,p1__54490_SHARP_)){
return cljs.core.empty_QMARK_.call(null,p1__54490_SHARP_);
} else {
return (p1__54490_SHARP_ == null);
}
}),coll);
});
/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil.
 */
zprint.zprint.concat_no_nil_pre_noseq = (function zprint$zprint$concat_no_nil_pre_noseq(var_args){
var args__22092__auto__ = [];
var len__22082__auto___54492 = arguments.length;
var i__22083__auto___54493 = (0);
while(true){
if((i__22083__auto___54493 < len__22082__auto___54492)){
args__22092__auto__.push((arguments[i__22083__auto___54493]));

var G__54494 = (i__22083__auto___54493 + (1));
i__22083__auto___54493 = G__54494;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_pre_noseq.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(zprint.zprint.concat_no_nil_pre_noseq.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.coll_QMARK_.call(null,o)){
if(cljs.core.empty_QMARK_.call(null,o)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,o);
}
} else {
if((o == null)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.conj_BANG_.call(null,v,o);
}
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_.call(null,result);
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil_pre_noseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil_pre_noseq.cljs$lang$applyTo = (function (seq54491){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54491));
}));

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil. If any of them are :noseq, just skip them.
 *   When complete, check the last element-- if it is a :right, and if it
 *   the previous element is a :newline or :indent, then ensure that the
 *   number of spaces in that previous element matches the number to the
 *   right of the :right.
 */
zprint.zprint.concat_no_nil = (function zprint$zprint$concat_no_nil(var_args){
var args__22092__auto__ = [];
var len__22082__auto___54502 = arguments.length;
var i__22083__auto___54503 = (0);
while(true){
if((i__22083__auto___54503 < len__22082__auto___54502)){
args__22092__auto__.push((arguments[i__22083__auto___54503]));

var G__54504 = (i__22083__auto___54503 + (1));
i__22083__auto___54503 = G__54504;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.coll_QMARK_.call(null,o)){
if(cljs.core.empty_QMARK_.call(null,o)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,o);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"noseq","noseq",405935768),o)){
return v;
} else {
if((o == null)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.conj_BANG_.call(null,v,o);
}
}
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
var result__$1 = cljs.core.persistent_BANG_.call(null,result);
if((cljs.core.count.call(null,result__$1) < (2))){
return result__$1;
} else {
var vec__54496 = cljs.core.peek.call(null,result__$1);
var _ = cljs.core.nth.call(null,vec__54496,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__54496,(1),null);
var what = cljs.core.nth.call(null,vec__54496,(2),null);
var right_ind = cljs.core.nth.call(null,vec__54496,(3),null);
var last_element = vec__54496;
if(cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"right","right",-452581833))){
var previous_index = (cljs.core.count.call(null,result__$1) - (2));
var vec__54499 = cljs.core.nth.call(null,result__$1,previous_index);
var s = cljs.core.nth.call(null,vec__54499,(0),null);
var color = cljs.core.nth.call(null,vec__54499,(1),null);
var previous_what = cljs.core.nth.call(null,vec__54499,(2),null);
if(((cljs.core._EQ_.call(null,previous_what,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,previous_what,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
if(cljs.core._EQ_.call(null,zprint.zprint.count_right_blanks.call(null,s),right_ind)){
return result__$1;
} else {
var new_previous = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.trimr_blanks.call(null,s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,right_ind))].join(''),color,previous_what], null);
return cljs.core.assoc.call(null,result__$1,previous_index,new_previous);
}
} else {
return result__$1;
}
} else {
return result__$1;
}
}
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil.cljs$lang$applyTo = (function (seq54495){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54495));
}));

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil. If any of them are :noseq, just skip them.
 */
zprint.zprint.concat_no_nil_pre_right = (function zprint$zprint$concat_no_nil_pre_right(var_args){
var args__22092__auto__ = [];
var len__22082__auto___54506 = arguments.length;
var i__22083__auto___54507 = (0);
while(true){
if((i__22083__auto___54507 < len__22082__auto___54506)){
args__22092__auto__.push((arguments[i__22083__auto___54507]));

var G__54508 = (i__22083__auto___54507 + (1));
i__22083__auto___54507 = G__54508;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_pre_right.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(zprint.zprint.concat_no_nil_pre_right.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.coll_QMARK_.call(null,o)){
if(cljs.core.empty_QMARK_.call(null,o)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,o);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"noseq","noseq",405935768),o)){
return v;
} else {
if((o == null)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.conj_BANG_.call(null,v,o);
}
}
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_.call(null,result);
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil_pre_right.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil_pre_right.cljs$lang$applyTo = (function (seq54505){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54505));
}));

/**
 * Remove a single thing from a sequence.
 */
zprint.zprint.remove_one = (function zprint$zprint$remove_one(s,index){
return cljs.core.concat.call(null,cljs.core.take.call(null,index,s),cljs.core.drop.call(null,(index + (1)),s));
});
/**
 * Ensure that whatever we have is a vector.
 */
zprint.zprint.force_vector = (function zprint$zprint$force_vector(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return coll;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,coll);
}
});
/**
 * Takes a string, and returns the fn-style if it is a keyword and
 *   without the : it can be found in the fn-map.
 */
zprint.zprint.keyword_fn_QMARK_ = (function zprint$zprint$keyword_fn_QMARK_(options,s){
var vec__54509 = clojure.string.split.call(null,s,/^:/);
var left = cljs.core.nth.call(null,vec__54509,(0),null);
var right = cljs.core.nth.call(null,vec__54509,(1),null);
if(cljs.core.truth_(right)){
return new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options).call(null,right);
} else {
return null;
}
});
/**
 * Given the options map, return the max length.  This might be
 *   a constant number, but it might be based on the depth as well.
 *   Returns nil of there is no max-length set.
 */
zprint.zprint.get_max_length = (function zprint$zprint$get_max_length(p__54512){
var map__54513 = p__54512;
var map__54513__$1 = cljs.core.__destructure_map.call(null,map__54513);
var options = map__54513__$1;
var max_length = cljs.core.get.call(null,map__54513__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var depth = cljs.core.get.call(null,map__54513__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
if(cljs.core.truth_(max_length)){
if(cljs.core.vector_QMARK_.call(null,max_length)){
return cljs.core.nth.call(null,max_length,(function (){var x__21118__auto__ = (depth - (1));
var y__21119__auto__ = (cljs.core.count.call(null,max_length) - (1));
return ((x__21118__auto__ < y__21119__auto__) ? x__21118__auto__ : y__21119__auto__);
})());
} else {
return max_length;
}
} else {
return null;
}
});
/**
 * Given an options map, return another options map with no
 *   :max-length key.  This is to that you can call a routine that
 *   normally deals with :max-length and get it to do the normal
 *   thing.
 */
zprint.zprint.no_max_length = (function zprint$zprint$no_max_length(options){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"max-length","max-length",-254826109),(10000));
});
/**
 * Take the vector carrying the intermediate results, and
 *   do the right thing with a new string. Vector is
 *   [ 0 out - vector accumulating line lengths 
 *  1 cur-len - length of current line
 *  just-eol? - did we just do an eol?
 *  ]
 *   s - string to add to current line
 *   tag - element type of string (comment's don't count in length)
 *   eol? - should we terminate line after adding count of s
 */
zprint.zprint.accumulate_ll = (function zprint$zprint$accumulate_ll(count_comment_QMARK_,p__54514,s,tag,eol_QMARK_){
var vec__54515 = p__54514;
var out = cljs.core.nth.call(null,vec__54515,(0),null);
var cur_len = cljs.core.nth.call(null,vec__54515,(1),null);
var just_eol_QMARK_ = cljs.core.nth.call(null,vec__54515,(2),null);
var just_comment_QMARK_ = cljs.core.nth.call(null,vec__54515,(3),null);
var in$ = vec__54515;
var comment_QMARK_ = ((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var count_s = ((((comment_QMARK_) && (cljs.core.not.call(null,count_comment_QMARK_))))?(0):cljs.core.count.call(null,s));
if(cljs.core.truth_((function (){var or__20754__auto__ = (function (){var and__20748__auto__ = eol_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,(function (){var and__20748__auto____$1 = just_eol_QMARK_;
if(cljs.core.truth_(and__20748__auto____$1)){
return (count_s === (0));
} else {
return and__20748__auto____$1;
}
})());
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return comment_QMARK_;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,out,(cur_len + count_s)),(0),true,comment_QMARK_], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,(cur_len + count_s),null,comment_QMARK_], null);

}
});
zprint.zprint.generate_ll = (function zprint$zprint$generate_ll(count_comment_QMARK_,p__54518,p__54519){
var vec__54520 = p__54518;
var out = cljs.core.nth.call(null,vec__54520,(0),null);
var cur_len = cljs.core.nth.call(null,vec__54520,(1),null);
var just_eol_QMARK_ = cljs.core.nth.call(null,vec__54520,(2),null);
var just_comment_QMARK_ = cljs.core.nth.call(null,vec__54520,(3),null);
var in$ = vec__54520;
var vec__54523 = p__54519;
var s = cljs.core.nth.call(null,vec__54523,(0),null);
var _ = cljs.core.nth.call(null,vec__54523,(1),null);
var tag = cljs.core.nth.call(null,vec__54523,(2),null);
var element = vec__54523;
var vec__54526 = ((((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"newline","newline",1790071323)))))))?zprint.zprint.split_lf_2.call(null,s):(new cljs.core.List(null,s,null,(1),null)));
var l = cljs.core.nth.call(null,vec__54526,(0),null);
var r = cljs.core.nth.call(null,vec__54526,(1),null);
var in$__$1 = zprint.zprint.accumulate_ll.call(null,count_comment_QMARK_,in$,l,tag,(!((r == null))));
var in$__$2 = ((cljs.core.empty_QMARK_.call(null,r))?in$__$1:zprint.zprint.accumulate_ll.call(null,count_comment_QMARK_,in$__$1,r,tag,null));
return in$__$2;
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments elsewhere.
 *   Note that only vectors with :whitespace, :indent, or :newline are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character. A single comment is counted as two lines. Lots of edge
 *   conditions that are really quite important.
 */
zprint.zprint.line_lengths_iter = (function zprint$zprint$line_lengths_iter(options,ind,style_vec){
var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var ind__$1 = ((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.first.call(null,ind):ind);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"line-lengths-iter: style-vec:",style_vec));
} else {
}

var next_vec = style_vec;
var current_string = null;
var line_length = ind__$1;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_.call(null,next_vec)) && (cljs.core.empty_QMARK_.call(null,current_string)))){
if((((line_length === (0))) && (cljs.core.not.call(null,previous_comment_QMARK_)))){
return out;
} else {
if(cljs.core.truth_(previous_comment_QMARK_)){
return cljs.core.conj.call(null,out,line_length,(0));
} else {
return cljs.core.conj.call(null,out,line_length);

}
}
} else {
var advance_QMARK_ = cljs.core.empty_QMARK_.call(null,current_string);
var vec__54535 = ((advance_QMARK_)?cljs.core.first.call(null,next_vec):null);
var next_string = cljs.core.nth.call(null,vec__54535,(0),null);
var _ = cljs.core.nth.call(null,vec__54535,(1),null);
var tag = cljs.core.nth.call(null,vec__54535,(2),null);
var comment_QMARK_ = ((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var s = ((advance_QMARK_)?next_string:current_string);
var vec__54538 = (cljs.core.truth_(s)?((((comment_QMARK_) && (cljs.core.not.call(null,count_comment_QMARK_))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null):(cljs.core.truth_((function (){var or__20754__auto__ = ((advance_QMARK_) && (((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"indent","indent",-148200125))))))));
if(or__20754__auto__){
return or__20754__auto__;
} else {
return current_string;
}
})())?zprint.zprint.split_lf_2.call(null,s):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)
)):null);
var l = cljs.core.nth.call(null,vec__54538,(0),null);
var r = cljs.core.nth.call(null,vec__54538,(1),null);
var force_newline_QMARK_ = (function (){var and__20748__auto__ = previous_comment_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,l)));
} else {
return and__20748__auto__;
}
})();
var r__$1 = (cljs.core.truth_(force_newline_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''):r);
var l__$1 = (cljs.core.truth_(force_newline_QMARK_)?null:l);
var new_line_length = (line_length + cljs.core.count.call(null,l__$1));
var G__54541 = ((advance_QMARK_)?cljs.core.next.call(null,next_vec):next_vec);
var G__54542 = r__$1;
var G__54543 = (cljs.core.truth_(r__$1)?(0):new_line_length);
var G__54544 = comment_QMARK_;
var G__54545 = (cljs.core.truth_(r__$1)?cljs.core.conj.call(null,out,new_line_length):out);
next_vec = G__54541;
current_string = G__54542;
line_length = G__54543;
previous_comment_QMARK_ = G__54544;
out = G__54545;
continue;
}
break;
}
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments at the
 *   end. Note that only vectors with :whitespace or :indent are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character.
 */
zprint.zprint.line_lengths = (function zprint$zprint$line_lengths(options,ind,style_vec){
var length_vec = cljs.core.first.call(null,(function (){var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var vec__54546 = cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.zprint.generate_ll,count_comment_QMARK_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.first.call(null,ind):ind),null,null], null),style_vec);
var _ = cljs.core.nth.call(null,vec__54546,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__54546,(1),null);
var just_eol_QMARK_ = cljs.core.nth.call(null,vec__54546,(2),null);
var just_comment_QMARK_ = cljs.core.nth.call(null,vec__54546,(3),null);
var result = vec__54546;
if(cljs.core.truth_((function (){var and__20748__auto__ = just_eol_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,just_comment_QMARK_);
} else {
return and__20748__auto__;
}
})())){
return result;
} else {
return zprint.zprint.accumulate_ll.call(null,count_comment_QMARK_,cljs.core.assoc.call(null,result,(2),null),"",null,true);
}
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"line-lengths: style-vec:",style_vec,"ind:",ind,"length-vec:",length_vec));
} else {
}

return length_vec;
});
/**
 * This looks at a style vec and doesn't do all that style-lines does.
 *   It just looks for a new-line in the strings, and returns true if it
 *   doesn't find one.
 */
zprint.zprint.single_line_QMARK_ = (function zprint$zprint$single_line_QMARK_(style_vec){
return cljs.core.not.call(null,cljs.core.reduce.call(null,(function (p1__54549_SHARP_,p2__54550_SHARP_){
var or__20754__auto__ = p1__54549_SHARP_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return p2__54550_SHARP_;
}
}),false,cljs.core.map.call(null,(function (p1__54551_SHARP_){
return clojure.string.includes_QMARK_.call(null,cljs.core.first.call(null,p1__54551_SHARP_),"\n");
}),style_vec)));
});
/**
 * Given a style-vec, come up with a string that gives some hint of 
 *   where this style-vec came from.
 */
zprint.zprint.find_what = (function zprint$zprint$find_what(style_vec){
var s_vec = style_vec;
while(true){
if(cljs.core.truth_(s_vec)){
var vec__54552 = cljs.core.first.call(null,s_vec);
var what = cljs.core.nth.call(null,vec__54552,(0),null);
var _ = cljs.core.nth.call(null,vec__54552,(1),null);
var this$ = cljs.core.nth.call(null,vec__54552,(2),null);
if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"element","element",1974019749))){
return what;
} else {
var G__54555 = cljs.core.next.call(null,s_vec);
s_vec = G__54555;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Look at a style vec ready to be given to concat-no-nil, and see if
 *   the first thing in there is a newline of some sort.
 */
zprint.zprint.first_nl_QMARK_ = (function zprint$zprint$first_nl_QMARK_(style_vec){
var vec__54556 = cljs.core.first.call(null,style_vec);
var s = cljs.core.nth.call(null,vec__54556,(0),null);
var color = cljs.core.nth.call(null,vec__54556,(1),null);
var what = cljs.core.nth.call(null,vec__54556,(2),null);
return ((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"indent","indent",-148200125))));
});
/**
 * Given an indent ind and a style-vec coll, place a newline (actually an
 *   indent) at the front of coll.  If the first thing in coll is a newline,
 *   then don't add any spaces after the newline that we prepend.
 */
zprint.zprint.prepend_nl = (function zprint$zprint$prepend_nl(options,ind,coll){
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,((zprint.zprint.first_nl_QMARK_.call(null,coll))?(0):ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null)], null),coll);
});
/**
 * Take a style output, and tell us how many lines it takes to print it
 *   and the maximum width that it reaches. Returns 
 *   [<line-count> <max-width> [line-lengths]].
 *   Doesn't require any max-width inside the style-vec. Also returns the
 *   line lengths in case that is helpful (since we have them anyway).
 *   If (:dbg-ge options) has value, then uses find-what to see if what it
 *   finds matches the value, and if it does, place the value in the
 *   resulting vector.
 */
zprint.zprint.style_lines = (function zprint$zprint$style_lines(options,ind,style_vec){
if(cljs.core.truth_((function (){var and__20748__auto__ = style_vec;
if(cljs.core.truth_(and__20748__auto__)){
return (((!(cljs.core.empty_QMARK_.call(null,style_vec)))) && (cljs.core.not.call(null,zprint.zprint.contains_nil_QMARK_.call(null,style_vec))));
} else {
return and__20748__auto__;
}
})())){
var lengths = zprint.zprint.line_lengths_iter.call(null,options,ind,style_vec);
var count_lengths = cljs.core.count.call(null,lengths);
var result = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [count_lengths,(((count_lengths === (0)))?(0):cljs.core.apply.call(null,cljs.core.max,lengths)),lengths], null);
var dbg_ge = new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017).cljs$core$IFn$_invoke$arity$1(options);
var what = (cljs.core.truth_((function (){var and__20748__auto__ = dbg_ge;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,zprint.zprint.find_what.call(null,style_vec),dbg_ge);
} else {
return and__20748__auto__;
}
})())?dbg_ge:null);
if(cljs.core.truth_(what)){
return cljs.core.conj.call(null,result,what);
} else {
return result;
}
} else {
return null;
}
});
/**
 * Given output from style-lines and options, see if it fits the width.  
 *   Return the number of lines it takes if it fits, nil otherwise.
 */
zprint.zprint.fzfit = (function zprint$zprint$fzfit(p__54559,p__54560){
var map__54561 = p__54559;
var map__54561__$1 = cljs.core.__destructure_map.call(null,map__54561);
var options = map__54561__$1;
var width = cljs.core.get.call(null,map__54561__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__54561__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.call(null,map__54561__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__54562 = p__54560;
var line_count = cljs.core.nth.call(null,vec__54562,(0),null);
var max_width = cljs.core.nth.call(null,vec__54562,(1),null);
var style_lines_return = vec__54562;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzfit: fixed-rightcnt:",zprint.zprint.fix_rightcnt.call(null,rightcnt),"line-count:",line_count,"max-width:",max_width,"width:",width);
} else {
}

if(cljs.core.truth_(style_lines_return)){
if((max_width <= (width - zprint.zprint.fix_rightcnt.call(null,rightcnt)))){
return line_count;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given the return from style-lines  and options, 
 *   return true if it fits on a single line.
 */
zprint.zprint.fzfit_one_line = (function zprint$zprint$fzfit_one_line(options,style_lines_return){
var lines = zprint.zprint.fzfit.call(null,options,style_lines_return);
return ((typeof lines === 'number') && (cljs.core._EQ_.call(null,lines,(1))));
});
/**
 * Increase the rightmost count, if any, and return one if not.
 */
zprint.zprint.rightmost = (function zprint$zprint$rightmost(options){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),(new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$2(options,(0)) + (1)));
});
/**
 * Remove the rightmost count.
 */
zprint.zprint.not_rightmost = (function zprint$zprint$not_rightmost(options){
return cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
});
/**
 * Handle the complexity of commas and rightmost-pair with options.
 *   If it isn't a rightmost, it loses rightmost status.
 *   If it is a rightmost, and in the rightmost pair, it gain one rightmost
 *   since it has the right end thing (and we don't care about the comma).
 *   If it is the rightmost of the non-rightmost-pair, then the comma
 *   matters, and we handle that appropriately.  Whew!
 */
zprint.zprint.c_r_pair = (function zprint$zprint$c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,rightmost_QMARK_,options){
if(cljs.core.not.call(null,rightmost_QMARK_)){
return zprint.zprint.not_rightmost.call(null,options);
} else {
if(cljs.core.truth_(rightmost_pair_QMARK_)){
return options;
} else {
if(cljs.core.truth_(commas_QMARK_)){
return zprint.zprint.rightmost.call(null,zprint.zprint.not_rightmost.call(null,options));
} else {
return zprint.zprint.not_rightmost.call(null,options);
}
}
}
});
/**
 * Handle issue with rightcnt.
 */
zprint.zprint.fix_rightcnt = (function zprint$zprint$fix_rightcnt(rightcnt){
if(typeof rightcnt === 'number'){
return rightcnt;
} else {
return (0);
}
});
zprint.zprint.str__GT_key = cljs.core.PersistentHashMap.fromArrays(["]","'",")","`","~@","~","#{","(","#(","{","}","[","#_","@"],[new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"deref","deref",-145586795)]);
/**
 * Look up the thing in the zprint-color-map.  Accepts keywords or
 *   strings.
 */
zprint.zprint.zcolor_map = (function zprint$zprint$zcolor_map(p__54565,key_or_str){
var map__54566 = p__54565;
var map__54566__$1 = cljs.core.__destructure_map.call(null,map__54566);
var options = map__54566__$1;
var color_map = cljs.core.get.call(null,map__54566__$1,new cljs.core.Keyword(null,"color-map","color-map",-207789684));
var color_QMARK_ = cljs.core.get.call(null,map__54566__$1,new cljs.core.Keyword(null,"color?","color?",-1891974356));
if(cljs.core.truth_(color_QMARK_)){
return color_map.call(null,(((key_or_str instanceof cljs.core.Keyword))?key_or_str:zprint.zprint.str__GT_key.call(null,key_or_str)));
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
});
/**
 * Take a style-vec, and if hangflow? is true, return a
 *   vector [hang-or-flow style-vec], else return style-vec.
 *   But a nil style-vec returns nil.
 */
zprint.zprint.hangflow = (function zprint$zprint$hangflow(hangflow_QMARK_,hang_or_flow,style_vec){
if(cljs.core.truth_(style_vec)){
if(cljs.core.truth_(hangflow_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,style_vec], null);
} else {
return style_vec;
}
} else {
return null;
}
});
/**
 * Try to hang something and if it doesn't hang at all, then flow it,
 *   but strongly prefer hang.  Has hang and flow indents, and fzfn is the
 *   fzprint-? function to use with zloc.  Callers need to know whether this
 *   was hang or flow, so it returns [{:hang | :flow} style-vec] all the time.
 */
zprint.zprint.fzprint_hang_unless_fail = (function zprint$zprint$fzprint_hang_unless_fail(options,hindent,findent,fzfn,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hindent:",hindent,"findent:",findent,"zloc:",zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)));
} else {
}

var hanging = ((cljs.core.not_EQ_.call(null,hindent,findent))?fzfn.call(null,zprint.zprint.in_hang.call(null,options),hindent,zloc):null);
var value__47230__auto__ = (cljs.core.truth_((function (){var and__20748__auto__ = hanging;
if(cljs.core.truth_(and__20748__auto__)){
return zprint.zprint.fzfit.call(null,options,zprint.zprint.style_lines.call(null,options,hindent,hanging));
} else {
return and__20748__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),hanging], null):(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hang failed, doing flow");
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.prepend_nl.call(null,options,findent,fzfn.call(null,options,findent,zloc))], null);
})()
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: exit:",cljs.core.pr_str.call(null,value__47230__auto__));
} else {
}

return value__47230__auto__;
});
/**
 * Given a style-vec with exactly one thing in it, replace the color
 *   with whatever local color we have determined is correct.
 */
zprint.zprint.replace_color = (function zprint$zprint$replace_color(local_color,style_vec){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,style_vec),(1))){
var vec__54567 = style_vec;
var vec__54570 = cljs.core.nth.call(null,vec__54567,(0),null);
var string = cljs.core.nth.call(null,vec__54570,(0),null);
var color = cljs.core.nth.call(null,vec__54570,(1),null);
var element = cljs.core.nth.call(null,vec__54570,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,local_color,element], null)], null);
} else {
return style_vec;
}
});
/**
 * This routine tries to figure out if existing hang should be used without
 *   even bothering to do a flow and compare them with good-enough?.
 */
zprint.zprint.use_hang_QMARK_ = (function zprint$zprint$use_hang_QMARK_(caller,p__54573,ind,hang_count,hanging_line_count){
var map__54574 = p__54573;
var map__54574__$1 = cljs.core.__destructure_map.call(null,map__54574);
var options = map__54574__$1;
var map__54575 = cljs.core.get.call(null,map__54574__$1,caller);
var map__54575__$1 = cljs.core.__destructure_map.call(null,map__54575);
var hang_accept = cljs.core.get.call(null,map__54575__$1,new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607));
var ha_depth_factor = cljs.core.get.call(null,map__54575__$1,new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962));
var ha_width_factor = cljs.core.get.call(null,map__54575__$1,new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581));
var depth = cljs.core.get.call(null,map__54574__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var width = cljs.core.get.call(null,map__54574__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_((function (){var and__20748__auto__ = hanging_line_count;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = hang_accept;
if(cljs.core.truth_(and__20748__auto____$1)){
return (hang_count > (0));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
var hang_accept__$1 = ((hang_accept + (depth * ha_depth_factor)) + ((ind / width) * ha_width_factor));
var result = (((hanging_line_count - (1)) / hang_count) <= hang_accept__$1);
return result;
} else {
return null;
}
});
/**
 * Print a single pair of things (though it might not be exactly a
 *   pair, given comments and :extend and the like), like bindings in
 *   a let, clauses in a cond, keys and values in a map.  Controlled
 *   by various maps, the key of which is caller.  Returns 
 *   [:hang <style-vec>] or [:flow <style-vec>] so that the upstream folks
 *   know whether this was a hang or flow and can do the right thing
 *   based on that.
 */
zprint.zprint.fzprint_two_up = (function zprint$zprint$fzprint_two_up(caller,p__54576,ind,commas_QMARK_,justify_width,justify_options,rightmost_pair_QMARK_,force_flow_QMARK_,p__54577){
var map__54578 = p__54576;
var map__54578__$1 = cljs.core.__destructure_map.call(null,map__54578);
var options = map__54578__$1;
var map__54579 = cljs.core.get.call(null,map__54578__$1,caller);
var map__54579__$1 = cljs.core.__destructure_map.call(null,map__54579);
var hang_QMARK_ = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var flow_QMARK_ = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"flow?","flow?",96929057));
var indent_arg = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874));
var key_value_options = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"key-value-options","key-value-options",694765603));
var key_depth_color = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"key-depth-color","key-depth-color",1448522819));
var indent = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var justify = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var key_value_color = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889));
var dbg_cnt_QMARK_ = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"dbg-cnt?","dbg-cnt?",-1638028976));
var dbg_local_QMARK_ = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"dbg-local?","dbg-local?",-895545325));
var key_color = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"key-color","key-color",-209002572));
var one_line_QMARK_ = cljs.core.get.call(null,map__54578__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var dbg_QMARK_ = cljs.core.get.call(null,map__54578__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var dbg_indent = cljs.core.get.call(null,map__54578__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.call(null,map__54578__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var do_in_hang_QMARK_ = cljs.core.get.call(null,map__54578__$1,new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947));
var map_depth = cljs.core.get.call(null,map__54578__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var vec__54580 = p__54577;
var lloc = cljs.core.nth.call(null,vec__54580,(0),null);
var rloc = cljs.core.nth.call(null,vec__54580,(1),null);
var xloc = cljs.core.nth.call(null,vec__54580,(2),null);
var pair = vec__54580;
if(cljs.core.truth_(dbg_cnt_QMARK_)){
cljs.core.println.call(null,"two-up: caller:",caller,"hang?",hang_QMARK_,"dbg?",dbg_QMARK_);
} else {
}

if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up:",zprint.zfns.zstring.call(null,lloc),"justify-width:",justify_width);
} else {
}

if(cljs.core.truth_((function (){var or__20754__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return dbg_local_QMARK_;
}
})())){
cljs.core.println.call(null,(function (){var or__20754__auto__ = dbg_indent;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "";
}
})(),"==========================",["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__20754__auto__ = dbg_indent;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "";
}
})())].join(''),cljs.core.pr_str.call(null,"fzprint-two-up:",zprint.zfns.zstring.call(null,lloc),"tag:",zprint.zfns.ztag.call(null,lloc),"caller:",caller,"count:",cljs.core.count.call(null,pair),"ind:",ind,"indent:",indent,"indent-arg:",indent_arg,"justify-width:",justify_width,"one-line?:",one_line_QMARK_,"hang?:",hang_QMARK_,"in-hang?",in_hang_QMARK_,"do-in-hang?",do_in_hang_QMARK_,"flow?",flow_QMARK_,"force-flow?",force_flow_QMARK_,"commas?",commas_QMARK_,"rightmost-pair?",rightmost_pair_QMARK_));
} else {
}

var flow_QMARK___$1 = (function (){var or__20754__auto__ = flow_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return force_flow_QMARK_;
}
})();
var local_hang_QMARK_ = (function (){var or__20754__auto__ = one_line_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return hang_QMARK_;
}
})();
var indent__$1 = (function (){var or__20754__auto__ = indent;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return indent_arg;
}
})();
var non_justify_options = options;
var options__$1 = justify_options;
var local_options = ((cljs.core.not.call(null,local_hang_QMARK_))?cljs.core.assoc.call(null,options__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options__$1);
var loptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,null,options__$1);
var roptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),options__$1);
var non_justify_roptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),non_justify_options);
var local_roptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),local_options);
var value_color_map = (function (){var and__20748__auto__ = key_value_color;
if(cljs.core.truth_(and__20748__auto__)){
return key_value_color.call(null,zprint.zprint.get_sexpr.call(null,options__$1,lloc));
} else {
return and__20748__auto__;
}
})();
var local_roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.call(null,local_roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)):local_roptions);
var roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.call(null,roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)):roptions);
var value_options_map = (function (){var and__20748__auto__ = key_value_options;
if(cljs.core.truth_(and__20748__auto__)){
return key_value_options.call(null,zprint.zprint.get_sexpr.call(null,options__$1,lloc));
} else {
return and__20748__auto__;
}
})();
var local_roptions__$2 = (cljs.core.truth_(value_options_map)?zprint.config.merge_deep.call(null,local_roptions__$1,value_options_map):local_roptions__$1);
var roptions__$2 = (cljs.core.truth_(value_options_map)?zprint.config.merge_deep.call(null,roptions__$1,value_options_map):roptions__$1);
var modifier_set = new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(options__$1.call(null,caller));
var modifier_QMARK_ = (function (){var or__20754__auto__ = (function (){var and__20748__auto__ = modifier_set;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = modifier_set.call(null,zprint.zfns.zstring.call(null,lloc));
if(cljs.core.truth_(and__20748__auto____$1)){
return (cljs.core.count.call(null,pair) > (2));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zprint.middle_element_QMARK_.call(null,options__$1,rloc);
}
})();
var local_color = cljs.core.get.call(null,key_depth_color,(map_depth - (1)));
var local_color__$1 = (cljs.core.truth_(key_color)?key_color.call(null,zprint.zprint.get_sexpr.call(null,options__$1,lloc)):local_color);
var arg_1 = zprint.zprint.fzprint_STAR_.call(null,loptions,ind,lloc);
var no_justify = new cljs.core.Keyword(null,"no-justify","no-justify",1864362078).cljs$core$IFn$_invoke$arity$1(justify);
var arg_1_newline_QMARK_ = (function (){var and__20748__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1));
if(and__20748__auto__){
return zprint.zfns.znewline_QMARK_.call(null,lloc);
} else {
return and__20748__auto__;
}
})();
var arg_1__$1 = (cljs.core.truth_(local_color__$1)?zprint.zprint.replace_color.call(null,local_color__$1,arg_1):arg_1);
var vec__54583 = zprint.zprint.style_lines.call(null,options__$1,ind,arg_1__$1);
var arg_1_line_count = cljs.core.nth.call(null,vec__54583,(0),null);
var arg_1_max_width = cljs.core.nth.call(null,vec__54583,(1),null);
var arg_1_lines = vec__54583;
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up before modifier: arg-1-line-count:",arg_1_line_count,"arg-1-max-width:",arg_1_max_width):null);
var modifier_QMARK___$1 = (cljs.core.truth_((function (){var or__20754__auto__ = (function (){var and__20748__auto__ = arg_1_line_count;
if(cljs.core.truth_(and__20748__auto__)){
return (arg_1_line_count > (1));
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return arg_1_newline_QMARK_;
}
})())?null:modifier_QMARK_);
var combined_arg_1 = (cljs.core.truth_(modifier_QMARK___$1)?zprint.zprint.concat_no_nil.call(null,arg_1__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(1)], null)], null),zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.in_hang.call(null,loptions),(ind + arg_1_max_width),rloc)):arg_1__$1);
var arg_1__$2 = (cljs.core.truth_(combined_arg_1)?combined_arg_1:arg_1__$1);
var modifier_QMARK___$2 = (cljs.core.truth_(combined_arg_1)?modifier_QMARK___$1:null);
var vec__54586 = (cljs.core.truth_(combined_arg_1)?zprint.zprint.style_lines.call(null,options__$1,ind,arg_1__$2):arg_1_lines);
var arg_1_line_count__$1 = cljs.core.nth.call(null,vec__54586,(0),null);
var arg_1_max_width__$1 = cljs.core.nth.call(null,vec__54586,(1),null);
var arg_1_lines__$1 = vec__54586;
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up after modifier: arg-1-line-count:",arg_1_line_count__$1,"arg-1-max-width:",arg_1_max_width__$1):null);
var lloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?rloc:lloc);
var rloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?xloc:rloc);
var arg_1_fit_oneline_QMARK_ = ((cljs.core.not.call(null,flow_QMARK___$1)) && (zprint.zprint.fzfit_one_line.call(null,loptions,arg_1_lines__$1)));
var arg_1_fit_QMARK_ = (function (){var or__20754__auto__ = arg_1_fit_oneline_QMARK_;
if(or__20754__auto__){
return or__20754__auto__;
} else {
if(cljs.core.not.call(null,one_line_QMARK_)){
return zprint.zprint.fzfit.call(null,loptions,arg_1_lines__$1);
} else {
return null;
}
}
})();
var arg_1_width = ((function (){var or__20754__auto__ = arg_1_max_width__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})() - ind);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-two-up: arg-1:",arg_1__$2));
} else {
}

if(cljs.core.truth_((function (){var and__20748__auto__ = arg_1__$2;
if(cljs.core.truth_(and__20748__auto__)){
var or__20754__auto__ = arg_1_fit_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.not.call(null,in_hang_QMARK_);
}
} else {
return and__20748__auto__;
}
})())){
if(cljs.core.truth_(arg_1_newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(force_flow_QMARK_)?new cljs.core.Keyword(null,"flow","flow",590489032):new cljs.core.Keyword(null,"hang","hang",-1007256173)),arg_1__$2], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(force_flow_QMARK_)?new cljs.core.Keyword(null,"flow","flow",590489032):new cljs.core.Keyword(null,"hang","hang",-1007256173)),zprint.zprint.fzprint_STAR_.call(null,roptions__$2,ind,lloc__$1)], null);
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(2));
if(or__20754__auto__){
return or__20754__auto__;
} else {
var and__20748__auto__ = modifier_QMARK___$2;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(3));
} else {
return and__20748__auto__;
}
}
})())){
var justify_width__$1 = (cljs.core.truth_(justify_width)?(cljs.core.truth_((function (){var or__20754__auto__ = (arg_1_width > justify_width);
if(or__20754__auto__){
return or__20754__auto__;
} else {
if(cljs.core.truth_(no_justify)){
return no_justify.call(null,cljs.core.ffirst.call(null,arg_1__$2));
} else {
return null;
}
}
})())?null:justify_width):null);
var hanging_width = (cljs.core.truth_(justify_width__$1)?justify_width__$1:arg_1_width);
var justify_width_n = (function (){var or__20754__auto__ = justify_width__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var arg_1_width_n = (function (){var or__20754__auto__ = arg_1_width;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var hanging_spaces = (cljs.core.truth_(justify_width__$1)?((justify_width_n - arg_1_width_n) + (1)):(1));
var hanging_indent = (((1) + hanging_width) + ind);
var flow_indent = (indent__$1 + ind);
if(cljs.core.truth_((function (){var and__20748__auto__ = zprint.zfns.zstring.call(null,lloc__$1);
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = zprint.zprint.keyword_fn_QMARK_.call(null,options__$1,zprint.zfns.zstring.call(null,lloc__$1));
if(cljs.core.truth_(and__20748__auto____$1)){
return (!(cljs.core._EQ_.call(null,caller,new cljs.core.Keyword(null,"map","map",1371690461))));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
if(cljs.core.truth_(zprint.zfns.zvector_QMARK_.call(null,rloc__$1))){
var vec__54589 = zprint.zprint.fzprint_hang_unless_fail.call(null,loptions,hanging_indent,flow_indent,zprint.zprint.fzprint_binding_vec,rloc__$1);
var hang_or_flow = cljs.core.nth.call(null,vec__54589,(0),null);
var style_vec = cljs.core.nth.call(null,vec__54589,(1),null);
var arg_1__$3 = ((cljs.core._EQ_.call(null,hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(2)], null)], null)):arg_1__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,zprint.zprint.concat_no_nil.call(null,arg_1__$3,style_vec)], null);
} else {
var vec__54592 = zprint.zprint.fzprint_hang_unless_fail.call(null,loptions,hanging_indent,flow_indent,zprint.zprint.fzprint_STAR_,rloc__$1);
var hang_or_flow = cljs.core.nth.call(null,vec__54592,(0),null);
var style_vec = cljs.core.nth.call(null,vec__54592,(1),null);
var arg_1__$3 = ((cljs.core._EQ_.call(null,hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(2)], null)], null)):arg_1__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,zprint.zprint.concat_no_nil.call(null,arg_1__$3,style_vec)], null);
}
} else {
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up: before hang.  hanging tried?",((arg_1_fit_oneline_QMARK_) || (((cljs.core.not.call(null,flow_QMARK___$1)) && ((flow_indent >= hanging_indent)))))):null);
var hanging = ((((arg_1_fit_oneline_QMARK_) || (((cljs.core.not.call(null,flow_QMARK___$1)) && ((flow_indent >= hanging_indent))))))?zprint.zprint.fzprint_STAR_.call(null,(((flow_indent < hanging_indent))?zprint.zprint.in_hang.call(null,local_roptions__$2):local_roptions__$2),hanging_indent,rloc__$1):null);
var hang_count = zprint.zfns.zcount.call(null,rloc__$1);
var ___$3 = zprint.zprint.log_lines.call(null,options__$1,"fzprint-two-up: hanging:",hanging_indent,hanging);
var hanging_lines = zprint.zprint.style_lines.call(null,options__$1,hanging_indent,hanging);
var fit_QMARK_ = zprint.zprint.fzfit_one_line.call(null,local_roptions__$2,hanging_lines);
var hanging_lines__$1 = ((fit_QMARK_)?hanging_lines:(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.not.call(null,one_line_QMARK_);
if(and__20748__auto__){
return hang_QMARK_;
} else {
return and__20748__auto__;
}
})())?hanging_lines:null));
var hanging_line_count = cljs.core.first.call(null,hanging_lines__$1);
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up: fit?",fit_QMARK_,"hanging-lines:",hanging_lines__$1):null);
var ___$5 = zprint.zprint.log_lines.call(null,options__$1,"fzprint-two-up: hanging-2:",hanging_indent,hanging);
var flow_it_QMARK_ = ((cljs.core.not.call(null,hanging_lines__$1)) || (((((((cljs.core.not.call(null,hanging_lines__$1)) && (cljs.core.not.call(null,one_line_QMARK_)))) || (cljs.core.not.call(null,(function (){var or__20754__auto____$2 = fit_QMARK_;
if(or__20754__auto____$2){
return or__20754__auto____$2;
} else {
return one_line_QMARK_;
}
})())))) && ((((flow_indent < hanging_indent)) || (cljs.core.not.call(null,hanging_lines__$1)))))));
var flow_it_QMARK___$1 = (cljs.core.truth_(zprint.zprint.use_hang_QMARK_.call(null,caller,options__$1,ind,hang_count,hanging_line_count))?false:flow_it_QMARK_);
var ___$6 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up: before flow. flow-it?",flow_it_QMARK___$1):null);
var flow = ((flow_it_QMARK___$1)?zprint.zprint.fzprint_STAR_.call(null,roptions__$2,flow_indent,rloc__$1):null);
var ___$7 = zprint.zprint.log_lines.call(null,options__$1,"fzprint-two-up: flow:",(indent__$1 + ind),flow);
var flow_lines = zprint.zprint.style_lines.call(null,options__$1,(indent__$1 + ind),flow);
if(cljs.core.truth_(dbg_local_QMARK_)){
cljs.core.prn.call(null,"fzprint-two-up: local-hang:",local_hang_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: one-line?:",one_line_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: hanging-indent:",hanging_indent);

cljs.core.prn.call(null,"fzprint-two-up: hanging-lines:",hanging_lines__$1);

cljs.core.prn.call(null,"fzprint-two-up: flow?:",flow_QMARK___$1);

cljs.core.prn.call(null,"fzprint-two-up: force-flow?:",force_flow_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: flow-it?:",flow_it_QMARK___$1);

cljs.core.prn.call(null,"fzprint-two-up: fit?:",fit_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: flow-indent:",flow_indent);

cljs.core.prn.call(null,"fzprint-two-up: hanging:",zprint.zfns.zstring.call(null,lloc__$1),hanging);

cljs.core.prn.call(null,"fzprint-two-up: (+ indent ind):",(indent__$1 + ind));

cljs.core.prn.call(null,"fzprint-two-up: flow:",zprint.zfns.zstring.call(null,lloc__$1),flow);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up: before good-enough");
} else {
}

if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$1));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up:",zprint.zfns.zstring.call(null,lloc__$1),"justify-width:",justify_width__$1,"fit?",fit_QMARK_);
} else {
}

if(fit_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(3)], null)], null),hanging)], null);
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = hanging_lines__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return flow_lines;
}
})())){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_.call(null,caller,(cljs.core.truth_(justify_width__$1)?roptions__$2:non_justify_roptions),new cljs.core.Keyword(null,"none-two-up","none-two-up",-457831686),hang_count,(hanging_indent - flow_indent),hanging_lines__$1,flow_lines))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(4)], null)], null),hanging)], null);
} else {
if(cljs.core.truth_(justify_width__$1)){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$1));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up:",zprint.zfns.zstring.call(null,lloc__$1),"justify-width:",justify_width__$1,"cancelled justification, returning nil!");
} else {
}

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.call(null,arg_1__$2,zprint.zprint.prepend_nl.call(null,options__$1,(indent__$1 + ind),flow))], null);
}
}
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.call(null,arg_1__$2,zprint.zprint.fzprint_flow_seq.call(null,caller,options__$1,(indent__$1 + ind),(cljs.core.truth_(modifier_QMARK___$2)?cljs.core.nnext.call(null,pair):cljs.core.next.call(null,pair)),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"newline-first","newline-first",-638470720)))], null);

}
}
}
} else {
return null;
}
});
/**
 * Figure the width for a justification of a set of pairs in coll.  
 *   Also, decide if it makes any sense to justify the pairs at all.
 */
zprint.zprint.fzprint_justify_width = (function zprint$zprint$fzprint_justify_width(caller,p__54601,ind,coll){
var map__54602 = p__54601;
var map__54602__$1 = cljs.core.__destructure_map.call(null,map__54602);
var options = map__54602__$1;
var map__54603 = cljs.core.get.call(null,map__54602__$1,caller);
var map__54603__$1 = cljs.core.__destructure_map.call(null,map__54603);
var justify_QMARK_ = cljs.core.get.call(null,map__54603__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var justify = cljs.core.get.call(null,map__54603__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var ignore_for_variance = new cljs.core.Keyword(null,"ignore-for-variance","ignore-for-variance",1887521489).cljs$core$IFn$_invoke$arity$1(justify);
var no_justify = new cljs.core.Keyword(null,"no-justify","no-justify",1864362078).cljs$core$IFn$_invoke$arity$1(justify);
var justify_underscore_QMARK_ = (function (){var underscore_QMARK_ = cljs.core.get.call(null,justify,new cljs.core.Keyword(null,"underscore?","underscore?",-782102006),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.call(null,underscore_QMARK_,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return true;
} else {
return underscore_QMARK_;
}
})();
var firsts = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__54595_SHARP_){
if((cljs.core.count.call(null,p1__54595_SHARP_) > (1))){
return zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.not_rightmost.call(null,options),ind,cljs.core.first.call(null,p1__54595_SHARP_));
} else {
return null;
}
}),coll));
var firsts__$1 = (cljs.core.truth_(no_justify)?cljs.core.remove.call(null,(function (p1__54596_SHARP_){
return no_justify.call(null,cljs.core.ffirst.call(null,p1__54596_SHARP_));
}),firsts):firsts);
var firsts__$2 = (cljs.core.truth_(ignore_for_variance)?cljs.core.remove.call(null,(function (p1__54597_SHARP_){
return ignore_for_variance.call(null,cljs.core.ffirst.call(null,p1__54597_SHARP_));
}),firsts__$1):firsts__$1);
var style_seq = cljs.core.mapv.call(null,cljs.core.partial.call(null,zprint.zprint.style_lines,options,ind),firsts__$2);
var each_one_line_QMARK_ = cljs.core.reduce.call(null,(function (p1__54598_SHARP_,p2__54599_SHARP_){
if(cljs.core.truth_(p1__54598_SHARP_)){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p2__54599_SHARP_),(1));
} else {
return null;
}
}),true,style_seq);
var max_gap_configured = new cljs.core.Keyword(null,"max-gap","max-gap",1570234983).cljs$core$IFn$_invoke$arity$1(justify);
var max_gap_allowed = (function (){var or__20754__auto__ = max_gap_configured;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1000);
}
})();
var max_gap = (cljs.core.truth_(max_gap_configured)?(function (){var widths = cljs.core.mapv.call(null,cljs.core.second,style_seq);
if((!(cljs.core.empty_QMARK_.call(null,widths)))){
var max_width = cljs.core.apply.call(null,cljs.core.max,widths);
var min_width = cljs.core.apply.call(null,cljs.core.min,widths);
return ((max_width - min_width) + (1));
} else {
return (0);
}
})():(0));
var max_gap_ok_QMARK_ = (max_gap <= max_gap_allowed);
var max_variance = new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(justify);
var alignment = (cljs.core.truth_((function (){var and__20748__auto__ = each_one_line_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return max_gap_ok_QMARK_;
} else {
return and__20748__auto__;
}
})())?zprint.util.column_width_variance.call(null,max_variance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__54600_SHARP_){
return (cljs.core.second.call(null,p1__54600_SHARP_) - ind);
}),style_seq))], null),(0)):null);
var _ = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-justify-width max-variance:",max_variance,"ind:",ind,"ignore-for-variance:",ignore_for_variance,"no-justify",no_justify,"alignment:",alignment):null);
var justify_width = (cljs.core.truth_(each_one_line_QMARK_)?cljs.core.first.call(null,alignment):null);
return justify_width;
});
/**
 * Take a size and a collection of vectors with two or more elements
 *   per vector.  The elements are zlocs, the vectors are not.  Return
 *   the remaining character count or nil if it for sure doesn't fit.
 *   In order to be sure it doesn't fit, this version doesn't assume
 *   *any* separators, so it really underestimates the size.
 */
zprint.zprint.fit_within_QMARK_ = (function zprint$zprint$fit_within_QMARK_(var_args){
var G__54605 = arguments.length;
switch (G__54605) {
case 3:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (size,coll,depth){
return cljs.core.reduce.call(null,(function (size__$1,element){
var or__20754__auto__ = ((cljs.core._EQ_.call(null,depth,(0)))?zprint.zprint.fit_within_QMARK_.call(null,size__$1,element,(depth + (1))):(function (){var remaining = (size__$1 - cljs.core.count.call(null,zprint.zfns.zstring.call(null,element)));
if((remaining > (0))){
return remaining;
} else {
return null;
}
})());
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.reduced.call(null,null);
}
}),size,coll);
}));

(zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (size,coll){
return zprint.zprint.fit_within_QMARK_.call(null,size,coll,(0));
}));

(zprint.zprint.fit_within_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Convert a hangflow style-vec to a regular style-vec.
 */
zprint.zprint.remove_hangflow = (function zprint$zprint$remove_hangflow(hf_style_vec){
if(cljs.core.truth_(hf_style_vec)){
return cljs.core.map.call(null,cljs.core.second,hf_style_vec);
} else {
return null;
}
});
/**
 * When given the output from fzprint-map-two-up, calculate return the
 *   output from style-lines for each thing.
 */
zprint.zprint.pair_lengths = (function zprint$zprint$pair_lengths(options,ind,result){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,zprint.zprint.style_lines,options,ind),cljs.core.second),result);
});
/**
 * Accept a sequence of pairs, and map fzprint-two-up across those pairs.
 *   If you have :one-line? set, this will return nil if it is way over,
 *   but it can't accurately tell exactly what will fit on one line, since
 *   it doesn't know the separators and such.  So, :one-line? true is a
 *   performance optimization, so it doesn't do a whole huge map just to
 *   find out that it could not possibly have fit on one line.  So, this
 *   returns a sequence of style-vecs, where the indentation for the
 *   stuff inside of the pairs is already there, but the separators of
 *   the style-vecs (including indentation and commas) is done by the
 *   caller of fzprint-map-two-up. Always returns a sequence of vector pairs:
 *   [[:hang <style-vec-for-one-pair>] [:flow <style-vec-for-one-pair>] ...].
 *   If you want a style vec instead, call remove-hangflow on the return 
 *   from fzprint-map-two-up.  This will use one-line?, but not check to see
 *   that it actually fits.  If you care about that, then you should check the
 *   return yourself.  It will, however, make an estimate of whether or not
 *   it will fit and if it clearly doesn't, it will return a nil.
 */
zprint.zprint.fzprint_map_two_up = (function zprint$zprint$fzprint_map_two_up(caller,p__54607,ind,commas_QMARK_,coll){
var map__54608 = p__54607;
var map__54608__$1 = cljs.core.__destructure_map.call(null,map__54608);
var options = map__54608__$1;
var map__54609 = cljs.core.get.call(null,map__54608__$1,caller);
var map__54609__$1 = cljs.core.__destructure_map.call(null,map__54609);
var justify_QMARK_ = cljs.core.get.call(null,map__54609__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var force_nl_QMARK_ = cljs.core.get.call(null,map__54609__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var width = cljs.core.get.call(null,map__54608__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__54608__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var one_line_QMARK_ = cljs.core.get.call(null,map__54608__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var parallel_QMARK_ = cljs.core.get.call(null,map__54608__$1,new cljs.core.Keyword(null,"parallel?","parallel?",-25273892));
var caller_map = caller.call(null,options);
var len = cljs.core.count.call(null,coll);
var justify_width = (cljs.core.truth_((function (){var and__20748__auto__ = justify_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,one_line_QMARK_);
} else {
return and__20748__auto__;
}
})())?zprint.zprint.fzprint_justify_width.call(null,caller,options,ind,coll):null);
var caller_options = (cljs.core.truth_(justify_width)?options.call(null,caller):null);
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: one-line?",new cljs.core.Keyword(null,"one-line?","one-line?",2055953111).cljs$core$IFn$_invoke$arity$1(options),"justify?:",justify_QMARK_);
} else {
}

if(cljs.core.not.call(null,(function (){var and__20748__auto__ = one_line_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = force_nl_QMARK_;
if(cljs.core.truth_(and__20748__auto____$1)){
return (len > (1));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
var justify_width__$1 = justify_width;
var justify_options = (cljs.core.truth_(justify_width__$1)?zprint.config.merge_deep.call(null,zprint.config.merge_deep.call(null,options,cljs.core.PersistentArrayMap.createAsIfByAssoc([caller,caller_options.call(null,new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243))])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuning","tuning",-48660925),caller_options.call(null,new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675))], null)):options);
var force_flow_QMARK_ = null;
var flow_all_if_any_QMARK_ = new cljs.core.Keyword(null,"flow-all-if-any?","flow-all-if-any?",-1348609746).cljs$core$IFn$_invoke$arity$1(caller.call(null,justify_options));
while(true){
var beginning_coll = cljs.core.butlast.call(null,coll);
var beginning_remaining = (cljs.core.truth_(one_line_QMARK_)?zprint.zprint.fit_within_QMARK_.call(null,(width - ind),beginning_coll):true);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: remaining:",(width - ind),"flow-all-if-any?",flow_all_if_any_QMARK_,"beginning-remaining:",beginning_remaining):null);
var beginning = (cljs.core.truth_(beginning_remaining)?zprint.zprint.zpmap.call(null,options,cljs.core.partial.call(null,zprint.zprint.fzprint_two_up,caller,options,ind,commas_QMARK_,justify_width__$1,justify_options,null,force_flow_QMARK_),beginning_coll):null);
var beginning__$1 = (cljs.core.truth_(zprint.zprint.contains_nil_QMARK_.call(null,beginning))?null:beginning);
var end_coll = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,coll)], null);
var end_remaining = (cljs.core.truth_(one_line_QMARK_)?(function (){var and__20748__auto__ = beginning__$1;
if(cljs.core.truth_(and__20748__auto__)){
return zprint.zprint.fit_within_QMARK_.call(null,(beginning_remaining - (function (){var or__20754__auto__ = rightcnt;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})()),end_coll);
} else {
return and__20748__auto__;
}
})():true);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: beginning-remaining:",beginning_remaining,"rightcnt:",rightcnt,"end-remaining:",end_remaining):null);
var end = (cljs.core.truth_(end_remaining)?(function (){var temp__5720__auto__ = zprint.zprint.fzprint_two_up.call(null,caller,options,ind,commas_QMARK_,justify_width__$1,justify_options,new cljs.core.Keyword(null,"rightmost-pair","rightmost-pair",-39229380),force_flow_QMARK_,cljs.core.first.call(null,end_coll));
if(cljs.core.truth_(temp__5720__auto__)){
var end_result = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_result], null);
} else {
return null;
}
})():null);
var result = ((cljs.core._EQ_.call(null,len,(1)))?end:zprint.zprint.concat_no_nil.call(null,beginning__$1,end)
);
var vec__54613 = (cljs.core.truth_(flow_all_if_any_QMARK_)?(function (){var hang_flow_set = cljs.core.set.call(null,cljs.core.mapv.call(null,cljs.core.first,result));
if((cljs.core.count.call(null,hang_flow_set) <= (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,result,hang_flow_set], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null,hang_flow_set], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,result,null], null));
var flow_all_if_any_fail_QMARK_ = cljs.core.nth.call(null,vec__54613,(0),null);
var result__$1 = cljs.core.nth.call(null,vec__54613,(1),null);
var hang_flow_set = cljs.core.nth.call(null,vec__54613,(2),null);
var ___$2 = (cljs.core.truth_(force_flow_QMARK_)?(function (){var hang_flow_set__$1 = cljs.core.set.call(null,cljs.core.mapv.call(null,cljs.core.first,result__$1));
if((cljs.core.count.call(null,hang_flow_set__$1) > (1))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map-two-up: ****************#############"," force-flow? didn't yield a single value in"," hang-flow-set:",hang_flow_set__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map-two-up: len:",len,"(nil? end):",(end == null),"end:",end,"(nil? beginning):",(beginning__$1 == null),"beginning:",beginning__$1,"(count end):",cljs.core.count.call(null,end),"(count beginnging):",cljs.core.count.call(null,beginning__$1),"justify-width:",justify_width__$1,"flow-all-if-any?",flow_all_if_any_QMARK_,"flow-all-if-any-fail?",flow_all_if_any_fail_QMARK_,"hang-flow-set:",hang_flow_set));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: result:",new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options).call(null,cljs.core.PersistentArrayMap.EMPTY,result__$1));
} else {
}

if(cljs.core.truth_((function (){var and__20748__auto__ = (function (){var or__20754__auto__ = result__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.not.call(null,justify_width__$1);
}
})();
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,flow_all_if_any_fail_QMARK_);
} else {
return and__20748__auto__;
}
})())){
return result__$1;
} else {
var G__54616 = null;
var G__54617 = options;
var G__54618 = flow_all_if_any_fail_QMARK_;
var G__54619 = (cljs.core.truth_(flow_all_if_any_fail_QMARK_)?null:flow_all_if_any_QMARK_);
justify_width__$1 = G__54616;
justify_options = G__54617;
force_flow_QMARK_ = G__54618;
flow_all_if_any_QMARK_ = G__54619;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Do a key comparison that works well for numbers as well as
 *   strings.
 */
zprint.zprint.compare_keys = (function zprint$zprint$compare_keys(x,y){
if(((typeof x === 'number') && (typeof y === 'number'))){
return cljs.core.compare.call(null,x,y);
} else {
return cljs.core.compare.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));

}
});
/**
 * Do a key comparison that places ordered keys first.
 */
zprint.zprint.compare_ordered_keys = (function zprint$zprint$compare_ordered_keys(key_value,zdotdotdot,x,y){
if(cljs.core.truth_((function (){var and__20748__auto__ = key_value.call(null,x);
if(cljs.core.truth_(and__20748__auto__)){
return key_value.call(null,y);
} else {
return and__20748__auto__;
}
})())){
return cljs.core.compare.call(null,key_value.call(null,x),key_value.call(null,y));
} else {
if(cljs.core.truth_(key_value.call(null,x))){
return (-1);
} else {
if(cljs.core.truth_(key_value.call(null,y))){
return (1);
} else {
if(cljs.core._EQ_.call(null,zdotdotdot,x)){
return (1);
} else {
if(cljs.core._EQ_.call(null,zdotdotdot,y)){
return (-1);
} else {
return zprint.zprint.compare_keys.call(null,x,y);

}
}
}
}
}
});
/**
 * A variety of sorting and ordering options for the output of
 *   partition-all-2-nc.  It can sort, which is the default, but if
 *   the caller has a key-order vector, it will extract any keys in
 *   that vector and place them first (in order) before sorting the
 *   other keys.  If sorting is not called for, does nothing.
 */
zprint.zprint.order_out = (function zprint$zprint$order_out(caller,p__54622,access,out){
var map__54623 = p__54622;
var map__54623__$1 = cljs.core.__destructure_map.call(null,map__54623);
var options = map__54623__$1;
var map__54624 = cljs.core.get.call(null,map__54623__$1,caller);
var map__54624__$1 = cljs.core.__destructure_map.call(null,map__54624);
var sort_QMARK_ = cljs.core.get.call(null,map__54624__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.call(null,map__54624__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var key_order = cljs.core.get.call(null,map__54624__$1,new cljs.core.Keyword(null,"key-order","key-order",-356936372));
var key_value = cljs.core.get.call(null,map__54624__$1,new cljs.core.Keyword(null,"key-value","key-value",-34906839));
var in_code_QMARK_ = cljs.core.get.call(null,map__54623__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"order-out caller:",caller,"key-order:",key_order,"sort?",sort_QMARK_,"sort-in-code?",sort_in_code_QMARK_,"in-code?",in_code_QMARK_,"key-value:",key_value));
} else {
}

if(cljs.core.truth_((function (){var and__20748__auto__ = sort_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return sort_in_code_QMARK_;
} else {
return true;
}
} else {
return and__20748__auto__;
}
})())){
return cljs.core.sort.call(null,(function (p1__54620_SHARP_,p2__54621_SHARP_){
return cljs.core.partial.call(null,zprint.zprint.compare_ordered_keys,(function (){var or__20754__auto__ = key_value;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),zprint.zfns.zdotdotdot.call(null)).call(null,zprint.zprint.get_sexpr.call(null,options,access.call(null,p1__54620_SHARP_)),zprint.zprint.get_sexpr.call(null,options,access.call(null,p2__54621_SHARP_)));
}),out);
} else {
return out;
}
});
/**
 * This checks to see if an element should be considered part of a
 *   pair if it comes between other elements, and a single element on
 *   its own if it would otherwise be the first part of a pair.  Mostly
 *   this will trigger on comments, but a #_(...) element will also
 *   trigger this, as will a newline if one appears.
 */
zprint.zprint.pair_element_QMARK_ = (function zprint$zprint$pair_element_QMARK_(zloc){
var or__20754__auto__ = zprint.zfns.zcomment_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = zprint.zfns.zuneval_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return zprint.zfns.znewline_QMARK_.call(null,zloc);
}
}
});
/**
 * Check a zloc to see if this should trigger no-sort? for this set
 * of pairs.
 */
zprint.zprint.nosort_QMARK_ = (function zprint$zprint$nosort_QMARK_(no_sort_set,zloc){
if(cljs.core.truth_(no_sort_set)){
var and__20748__auto__ = cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
if(and__20748__auto__){
var s = zprint.zfns.zstring.call(null,zloc);
var or__20754__auto__ = no_sort_set.call(null,s);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var regex_seq = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.string_QMARK_),no_sort_set);
if((!(cljs.core.empty_QMARK_.call(null,regex_seq)))){
return cljs.core.some.call(null,(function (p1__54625_SHARP_){
return cljs.core.re_find.call(null,p1__54625_SHARP_,s);
}),regex_seq);
} else {
return null;
}
}
} else {
return and__20748__auto__;
}
} else {
return null;
}
});
/**
 * This checks to see if an element should be considered the middle element
 *   of a pair.  At some point, we can expand this, but for now there is only
 *   one middle element.
 */
zprint.zprint.middle_element_QMARK_ = (function zprint$zprint$middle_element_QMARK_(p__54626,zloc){
var map__54627 = p__54626;
var map__54627__$1 = cljs.core.__destructure_map.call(null,map__54627);
var options = map__54627__$1;
var in_code_QMARK_ = cljs.core.get.call(null,map__54627__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core._EQ_.call(null,in_code_QMARK_,"condp")){
return cljs.core._EQ_.call(null,zprint.zfns.zstring.call(null,zloc),":>>");
} else {
return null;
}
});
/**
 * If given a non-collection, simply does a dissoc of the key, but
 *   if given a sequence of keys, will remove the final one.
 */
zprint.zprint.remove_key_seq = (function zprint$zprint$remove_key_seq(m,ks){
if(cljs.core.coll_QMARK_.call(null,ks)){
var this_key = cljs.core.first.call(null,ks);
var next_key = cljs.core.next.call(null,ks);
if(next_key){
var removed_map = zprint.zprint.remove_key_seq.call(null,cljs.core.get.call(null,m,this_key),cljs.core.next.call(null,ks));
if(cljs.core.empty_QMARK_.call(null,removed_map)){
return cljs.core.dissoc.call(null,m,this_key);
} else {
return cljs.core.assoc.call(null,m,this_key,removed_map);
}
} else {
return cljs.core.dissoc.call(null,m,this_key);
}
} else {
return cljs.core.dissoc.call(null,m,ks);
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map, and terminate the reduce if it changes
 *   the map.
 */
zprint.zprint.ignore_key_seq_silent = (function zprint$zprint$ignore_key_seq_silent(m,ks){
if(cljs.core.coll_QMARK_.call(null,ks)){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return zprint.zprint.remove_key_seq.call(null,m,ks);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.dissoc.call(null,m,ks);
}
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map leaving behind a key :zprint-ignored, 
 *   and terminate the reduce if it changes the map.
 */
zprint.zprint.ignore_key_seq = (function zprint$zprint$ignore_key_seq(m,ks){
if(cljs.core.coll_QMARK_.call(null,ks)){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc_in.call(null,m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc.call(null,m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
}
});
/**
 * Take a map and remove any of the key sequences specified from it.
 *   Note that this only works for sexpressions, not for actual zippers.
 */
zprint.zprint.map_ignore = (function zprint$zprint$map_ignore(caller,p__54628,zloc){
var map__54629 = p__54628;
var map__54629__$1 = cljs.core.__destructure_map.call(null,map__54629);
var options = map__54629__$1;
var map__54630 = cljs.core.get.call(null,map__54629__$1,caller);
var map__54630__$1 = cljs.core.__destructure_map.call(null,map__54630);
var key_ignore = cljs.core.get.call(null,map__54630__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.call(null,map__54630__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var ignored_silent = (cljs.core.truth_(key_ignore_silent)?cljs.core.reduce.call(null,zprint.zprint.ignore_key_seq_silent,zloc,key_ignore_silent):zloc);
var ignored = (cljs.core.truth_(key_ignore)?cljs.core.reduce.call(null,zprint.zprint.ignore_key_seq,ignored_silent,key_ignore):ignored_silent);
return ignored;
});
/**
 * Input is (zseqnws zloc) or (zseqnws-w-nl) where one assumes that
 *   these are pairs.  Thus, a seq of zlocs.  Output is a sequence of
 *   seqs, where the seqs are usually pairs, but might be single things.
 *   Doesn't pair up comments or #_(...) unevaled sexpressions.  The
 *   ones before the first part of a pair come as a single element in
 *   what would usually be a pair, and the ones between the first and
 *   second parts of a pair come inside the pair.  There may be an
 *   arbitrary number of elements between the first and second elements
 *   of the pair (one per line).  If there are any comments or unevaled
 *   sexpressions, don't sort the keys, as we might lose track of where
 *   the comments or unevaled s-expressions go.
 */
zprint.zprint.partition_all_2_nc = (function zprint$zprint$partition_all_2_nc(caller,options,coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return null;
} else {
var max_length = zprint.zprint.get_max_length.call(null,options);
var no_sort_set = new cljs.core.Keyword(null,"key-no-sort","key-no-sort",-2047279260).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
var remaining = coll;
var no_sort_QMARK_ = null;
var index = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"partition-all-2-nc: index:",index,"no-sort?:",no_sort_QMARK_,"first remaining:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,remaining)),"second remaining:",zprint.zfns.zstring.call(null,cljs.core.second.call(null,remaining))));
} else {
}

if(cljs.core.not.call(null,remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [no_sort_QMARK_,cljs.core.persistent_BANG_.call(null,out)], null);
} else {
var vec__54638 = (cljs.core.truth_(zprint.zprint.pair_element_QMARK_.call(null,cljs.core.first.call(null,remaining)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),true], null):(cljs.core.truth_((function (){var or__20754__auto__ = zprint.zprint.pair_element_QMARK_.call(null,cljs.core.second.call(null,remaining));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zprint.middle_element_QMARK_.call(null,options,cljs.core.second.call(null,remaining));
}
})())?(function (){var vec__54641 = cljs.core.split_with.call(null,((function (remaining,no_sort_QMARK_,index,out,max_length,no_sort_set){
return (function (p1__54631_SHARP_){
var or__20754__auto__ = zprint.zprint.pair_element_QMARK_.call(null,p1__54631_SHARP_);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zprint.middle_element_QMARK_.call(null,options,p1__54631_SHARP_);
}
});})(remaining,no_sort_QMARK_,index,out,max_length,no_sort_set))
,cljs.core.next.call(null,remaining));
var comment_seq = cljs.core.nth.call(null,vec__54641,(0),null);
var rest_seq = cljs.core.nth.call(null,vec__54641,(1),null);
if(cljs.core.truth_(cljs.core.first.call(null,rest_seq))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,rest_seq),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),comment_seq,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rest_seq)], null))),true], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),true], null);
}
})():((cljs.core._EQ_.call(null,cljs.core.count.call(null,remaining),(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),null], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,cljs.core.next.call(null,remaining)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining),cljs.core.second.call(null,remaining)], null),null], null)
)));
var new_remaining = cljs.core.nth.call(null,vec__54638,(0),null);
var pair_vec = cljs.core.nth.call(null,vec__54638,(1),null);
var new_no_sort_QMARK_ = cljs.core.nth.call(null,vec__54638,(2),null);
var new_no_sort_QMARK___$1 = (function (){var or__20754__auto__ = new_no_sort_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zprint.nosort_QMARK_.call(null,no_sort_set,cljs.core.first.call(null,remaining));
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"partition-all-2-nc: pair-vec: first:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,pair_vec)),"first tag:",zprint.zfns.ztag.call(null,cljs.core.first.call(null,pair_vec)),"count:",cljs.core.count.call(null,pair_vec),"last:",zprint.zfns.zstring.call(null,cljs.core.last.call(null,pair_vec))));
} else {
}

var G__54644 = ((((index + (1)) < max_length))?new_remaining:(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,(index + (1)),max_length);
if(and__20748__auto__){
return new_remaining;
} else {
return and__20748__auto__;
}
})())?(new cljs.core.List(null,zprint.zfns.zdotdotdot.call(null),null,(1),null)):null
));
var G__54645 = (function (){var or__20754__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new_no_sort_QMARK___$1;
}
})();
var G__54646 = (index + (1));
var G__54647 = cljs.core.conj_BANG_.call(null,out,pair_vec);
remaining = G__54644;
no_sort_QMARK_ = G__54645;
index = G__54646;
out = G__54647;
continue;
}
break;
}
}
});
/**
 * Take a seq, and if it is contains a single symbol, simply return
 *   it in another seq.  If it contains something else, remove any non
 *   collections off of the end and return them in their own double seqs,
 *   as well as return the remainder (the beginning) as a double seq.
 */
zprint.zprint.cleave_end = (function zprint$zprint$cleave_end(coll){
if(cljs.core.truth_((function (){var or__20754__auto__ = zprint.zfns.zsymbol_QMARK_.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,cljs.core.first.call(null,coll));
}
})())){
return (new cljs.core.List(null,coll,null,(1),null));
} else {
var rev_seq = cljs.core.reverse.call(null,coll);
var vec__54649 = cljs.core.split_with.call(null,(function (p1__54648_SHARP_){
return cljs.core.not.call(null,(function (){var or__20754__auto__ = zprint.zfns.zcoll_QMARK_.call(null,p1__54648_SHARP_);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zfns.zreader_cond_w_coll_QMARK_.call(null,p1__54648_SHARP_);
}
})());
}),rev_seq);
var split_non_coll = cljs.core.nth.call(null,vec__54649,(0),null);
var _ = cljs.core.nth.call(null,vec__54649,(1),null);
var split_non_coll__$1 = cljs.core.map.call(null,cljs.core.list,cljs.core.reverse.call(null,split_non_coll));
var remainder = cljs.core.take.call(null,(cljs.core.count.call(null,coll) - cljs.core.count.call(null,split_non_coll__$1)),coll);
if(cljs.core.empty_QMARK_.call(null,remainder)){
return split_non_coll__$1;
} else {
return cljs.core.concat.call(null,(new cljs.core.List(null,remainder,null,(1),null)),split_non_coll__$1);
}
}
});
/**
 * Similar to partition-all-2-nc, but instead of trying to pair things
 *   up (modulo comments and unevaled expressions), this begins things
 *   with a symbol, and then accumulates collections until the next symbol.
 *   Returns a seq of seqs, where the first thing in each internal seq is
 *   a protocol and the remaining thing(s) in that seq are the expressions that
 *   follow.  If there is a single thing, it is returned in its own internal
 *   seq. ((P (foo [this a) (bar-me [this] b) (barx [this y] (+ c y))) ...)
 *   Made harder by the fact that the symbol might be inside of a #?() reader
 *   conditional.  It handles comments before symbols on the symbol indent, 
 *   and the comments before the collections on the collection indent.  
 *   Since it doesn't know how many collections there are, this is not trivial.  
 *   Must be called with a sequence of z-things (these days called a zseq)
 */
zprint.zprint.partition_all_sym = (function zprint$zprint$partition_all_sym(options,modifier_set,coll){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"partition-all-sym:",modifier_set));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"partition-all-sym: coll:",cljs.core.map.call(null,zprint.zfns.zstring,coll));
} else {
}

var part_sym = cljs.core.partition_by.call(null,(function (p1__54652_SHARP_){
var or__20754__auto__ = zprint.zfns.zsymbol_QMARK_.call(null,p1__54652_SHARP_);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = zprint.zfns.znil_QMARK_.call(null,p1__54652_SHARP_);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,p1__54652_SHARP_);
}
}
}),coll);
var split_non_coll = cljs.core.mapcat.call(null,zprint.zprint.cleave_end,part_sym);
var remaining = split_non_coll;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining)){
var result = cljs.core.persistent_BANG_.call(null,out);
return result;
} else {
var vec__54656 = (cljs.core.truth_((function (){var and__20748__auto__ = (function (){var or__20754__auto__ = zprint.zfns.zsymbol_QMARK_.call(null,cljs.core.ffirst.call(null,remaining));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = zprint.zfns.znil_QMARK_.call(null,cljs.core.ffirst.call(null,remaining));
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,cljs.core.ffirst.call(null,remaining));
}
}
})();
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = (!(cljs.core.empty_QMARK_.call(null,cljs.core.second.call(null,remaining))));
if(and__20748__auto____$1){
var or__20754__auto__ = (!(((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,cljs.core.first.call(null,cljs.core.second.call(null,remaining))),new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,cljs.core.first.call(null,cljs.core.second.call(null,remaining))),new cljs.core.Keyword(null,"newline","newline",1790071323))))));
if(or__20754__auto__){
return or__20754__auto__;
} else {
return zprint.zfns.zcoll_QMARK_.call(null,cljs.core.last.call(null,cljs.core.second.call(null,remaining)));
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,remaining)),(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext.call(null,remaining,(2)),cljs.core.conj_BANG_.call(null,out,cljs.core.concat.call(null,cljs.core.first.call(null,remaining),cljs.core.second.call(null,remaining)))], null):(cljs.core.truth_((function (){var and__20748__auto__ = modifier_set;
if(cljs.core.truth_(and__20748__auto__)){
return modifier_set.call(null,zprint.zfns.zstring.call(null,cljs.core.ffirst.call(null,remaining)));
} else {
return and__20748__auto__;
}
})())?((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,remaining)),(2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext.call(null,remaining,(2)),cljs.core.conj_BANG_.call(null,out,cljs.core.concat.call(null,cljs.core.first.call(null,remaining),cljs.core.second.call(null,remaining)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.next.call(null,cljs.core.next.call(null,cljs.core.first.call(null,remaining))))?cljs.core.cons.call(null,cljs.core.next.call(null,cljs.core.next.call(null,cljs.core.first.call(null,remaining))),cljs.core.next.call(null,remaining)):cljs.core.next.call(null,remaining)),cljs.core.conj_BANG_.call(null,out,(new cljs.core.List(null,cljs.core.ffirst.call(null,remaining),(new cljs.core.List(null,cljs.core.second.call(null,cljs.core.first.call(null,remaining)),null,(1),null)),(2),null)))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons.call(null,cljs.core.next.call(null,cljs.core.first.call(null,remaining)),cljs.core.next.call(null,remaining)),cljs.core.conj_BANG_.call(null,out,(new cljs.core.List(null,cljs.core.ffirst.call(null,remaining),null,(1),null)))], null))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,remaining))], null)
);
var next_remaining = cljs.core.nth.call(null,vec__54656,(0),null);
var new_out = cljs.core.nth.call(null,vec__54656,(1),null);
var G__54659 = next_remaining;
var G__54660 = new_out;
remaining = G__54659;
out = G__54660;
continue;
}
break;
}
});
/**
 * Create an r-str-vec with the indent appropriate for the r-str if
 *   it is preceded by a newline.
 */
zprint.zprint.rstr_vec = (function zprint$zprint$rstr_vec(var_args){
var G__54662 = arguments.length;
switch (G__54662) {
case 5:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5 = (function (options,ind,zloc,r_str,r_type){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_str,zprint.zprint.zcolor_map.call(null,options,(function (){var or__20754__auto__ = r_type;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return r_str;
}
})()),(function (){var or__20754__auto__ = r_type;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"right","right",-452581833);
}
})(),ind], null)], null);
}));

(zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,r_str){
return zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str,null);
}));

(zprint.zprint.rstr_vec.cljs$lang$maxFixedArity = 5);

zprint.zprint.fzprint_binding_vec = (function zprint$zprint$fzprint_binding_vec(p__54664,ind,zloc){
var map__54665 = p__54664;
var map__54665__$1 = cljs.core.__destructure_map.call(null,map__54665);
var options = map__54665__$1;
var map__54666 = cljs.core.get.call(null,map__54665__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var map__54666__$1 = cljs.core.__destructure_map.call(null,map__54666);
var nl_separator_QMARK_ = cljs.core.get.call(null,map__54666__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-binding-vec: ind:",ind,"zloc:",zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)));
} else {
}

var options__$1 = zprint.zprint.rightmost.call(null,options);
var l_str = "[";
var r_str = "]";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options__$1,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$1,ind,zloc,r_str);
var value__47230__auto__ = ((cljs.core._EQ_.call(null,zprint.zfns.zcount.call(null,zloc),(0)))?zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec):zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(options__$1),(ind + (1)),zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),options__$1,(ind + (1)),false,cljs.core.second.call(null,zprint.zprint.partition_all_2_nc.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),options__$1,zprint.zprint.fzprint_get_zloc_seq.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),options__$1,zloc))))),r_str_vec));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-binding-vec exit:",cljs.core.pr_str.call(null,value__47230__auto__));
} else {
}

return value__47230__auto__;
});
/**
 * Try to hang something and try to flow it, and then see which is
 *   better.  Has hang and flow indents. fzfn is the function to use 
 *   to do zloc.  Note what fzfn does with the input. Presumably the
 *   caller knows what the fzfn does, so it has to count the items
 *   itself and pass it in here as zloc-count if it isn't just (zcount zloc).
 */
zprint.zprint.fzprint_hang = (function zprint$zprint$fzprint_hang(p__54667,caller,hindent,findent,fzfn,zloc_count,zloc){
var map__54668 = p__54667;
var map__54668__$1 = cljs.core.__destructure_map.call(null,map__54668);
var options = map__54668__$1;
var one_line_QMARK_ = cljs.core.get.call(null,map__54668__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var force_eol_blanks_QMARK_ = cljs.core.get.call(null,map__54668__$1,new cljs.core.Keyword(null,"force-eol-blanks?","force-eol-blanks?",1917974011));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang: caller:",caller);
} else {
}

var hanging = (cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.not_EQ_.call(null,hindent,findent);
if(and__20748__auto__){
var and__20748__auto____$1 = options.call(null,caller).call(null,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
if(cljs.core.truth_(and__20748__auto____$1)){
return cljs.core.not.call(null,zprint.zfns.znewline_QMARK_.call(null,cljs.core.first.call(null,zloc)));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(5)], null)], null),fzfn.call(null,zprint.zprint.in_hang.call(null,options),hindent,zloc)):null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang: caller:",caller,"hang?",options.call(null,caller).call(null,new cljs.core.Keyword(null,"hang?","hang?",-579442854))):null);
var hanging__$1 = ((cljs.core.not_EQ_.call(null,cljs.core.nth.call(null,cljs.core.second.call(null,hanging),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))?hanging:null);
var hang_count = (function (){var or__20754__auto__ = zloc_count;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zfns.zcount.call(null,zloc);
}
})();
var hr_lines = zprint.zprint.style_lines.call(null,options,(hindent - (1)),hanging__$1);
if(cljs.core.truth_((function (){var or__20754__auto__ = zprint.zprint.fzfit_one_line.call(null,options,hr_lines);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = (function (){var result = fzfn.call(null,options,findent,zloc);
return zprint.zprint.concat_no_nil.call(null,(cljs.core.truth_((cljs.core.truth_(force_eol_blanks_QMARK_)?null:zprint.zprint.first_nl_QMARK_.call(null,result)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(42)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(4)], null)], null)),result);
})();
var ___$1 = zprint.zprint.log_lines.call(null,options,"fzprint-hang: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines.call(null,options,findent,flow);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-hang: ending: hang-count:",hang_count,"hanging:",hanging__$1,"flow:",flow)):null);
var hr_good_QMARK_ = (cljs.core.truth_(hanging__$1)?zprint.zprint.good_enough_QMARK_.call(null,caller,options,new cljs.core.Keyword(null,"none-hang","none-hang",-1101780299),hang_count,(hindent - findent),hr_lines,fd_lines):null);
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Always prints pairs on a different line from other pairs. Takes a zloc-seq.
 *   Defaults to caller as :pair, but will accept :binding as an alternative.
 */
zprint.zprint.fzprint_pairs = (function zprint$zprint$fzprint_pairs(var_args){
var G__54670 = arguments.length;
switch (G__54670) {
case 4:
return zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$4 = (function (p__54671,ind,zloc_seq,caller){
var map__54672 = p__54671;
var map__54672__$1 = cljs.core.__destructure_map.call(null,map__54672);
var options = map__54672__$1;
var map__54673 = cljs.core.get.call(null,map__54672__$1,new cljs.core.Keyword(null,"pair","pair",-447516312));
var map__54673__$1 = cljs.core.__destructure_map.call(null,map__54673);
var nl_separator_QMARK_ = cljs.core.get.call(null,map__54673__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var respect_nl_QMARK_ = cljs.core.get.call(null,map__54673__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-pairs:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)),"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options)));
} else {
}

var value__47230__auto__ = zprint.zprint.interpose_nl_hf.call(null,caller.call(null,options),ind,zprint.zprint.fzprint_map_two_up.call(null,caller,options,ind,false,(function (){var vec__54674 = zprint.zprint.partition_all_2_nc.call(null,caller,options,zloc_seq);
var _ = cljs.core.nth.call(null,vec__54674,(0),null);
var part = cljs.core.nth.call(null,vec__54674,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-pairs: partition:",cljs.core.map.call(null,cljs.core.comp.call(null,zprint.zfns.zstring,cljs.core.first),part),"respect-nl?",respect_nl_QMARK_));
} else {
}

return part;
})()));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs: exit:",cljs.core.pr_str.call(null,value__47230__auto__));
} else {
}

return value__47230__auto__;
}));

(zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc_seq){
return zprint.zprint.fzprint_pairs.call(null,options,ind,zloc_seq,new cljs.core.Keyword(null,"pair","pair",-447516312));
}));

(zprint.zprint.fzprint_pairs.cljs$lang$maxFixedArity = 4);

/**
 * Return true if the first non-newline element in the seq is a coll?
 */
zprint.zprint.check_for_coll_QMARK_ = (function zprint$zprint$check_for_coll_QMARK_(zloc_seq){
var coll = zloc_seq;
while(true){
if(cljs.core.not.call(null,coll)){
return null;
} else {
var zloc = cljs.core.first.call(null,coll);
if(cljs.core.truth_(zprint.zfns.znewline_QMARK_.call(null,zloc))){
var G__54678 = cljs.core.next.call(null,coll);
coll = G__54678;
continue;
} else {
if(cljs.core.truth_(zprint.zfns.zcoll_QMARK_.call(null,zloc))){
return true;
} else {
if(cljs.core.truth_(zprint.zfns.zsymbol_QMARK_.call(null,zloc))){
return null;
} else {
if(cljs.core.truth_(zprint.zfns.znil_QMARK_.call(null,zloc))){
return null;
} else {
var G__54679 = cljs.core.next.call(null,coll);
coll = G__54679;
continue;

}
}
}
}
}
break;
}
});
/**
 * Check a series of sequences to see if the first non-newine thing in any 
 *   of them
 *   is a zcoll?.  If it is, return true, else nil.
 */
zprint.zprint.check_for_first_coll_QMARK_ = (function zprint$zprint$check_for_first_coll_QMARK_(seq_series){
return cljs.core.some.call(null,zprint.zprint.check_for_coll_QMARK_,seq_series);
});
/**
 * Print things with a symbol and collections following.  Kind of like with
 *   pairs, but not quite. Takes a zloc-seq.
 */
zprint.zprint.fzprint_extend = (function zprint$zprint$fzprint_extend(p__54681,ind,zloc_seq){
var map__54682 = p__54681;
var map__54682__$1 = cljs.core.__destructure_map.call(null,map__54682);
var options = map__54682__$1;
var map__54683 = cljs.core.get.call(null,map__54682__$1,new cljs.core.Keyword(null,"extend","extend",1836484006));
var map__54683__$1 = cljs.core.__destructure_map.call(null,map__54683);
var nl_separator_QMARK_ = cljs.core.get.call(null,map__54683__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)));
} else {
}

var part = zprint.zprint.partition_all_sym.call(null,options,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options)),zloc_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: partition:",cljs.core.map.call(null,(function (p1__54680_SHARP_){
return cljs.core.map.call(null,zprint.zfns.zstring,p1__54680_SHARP_);
}),part));
} else {
}

if(cljs.core.truth_(zprint.zprint.check_for_first_coll_QMARK_.call(null,part))){
var value__47230__auto__ = (function (){var result = zprint.zprint.fzprint_hang_remaining.call(null,new cljs.core.Keyword(null,"extend","extend",1836484006),cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)),ind,ind,zloc_seq,null);
if(((((cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,result),(2)),new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,result),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))) && (clojure.string.starts_with_QMARK_.call(null,cljs.core.ffirst.call(null,result),"\n")))){
return cljs.core.next.call(null,result);
} else {
return result;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: fzprint-hang-remaining exit:",cljs.core.pr_str.call(null,value__47230__auto__));
} else {
}

return value__47230__auto__;
} else {
var value__47230__auto__ = zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options),ind,zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"extend","extend",1836484006),cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)),ind,false,part));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: exit:",cljs.core.pr_str.call(null,value__47230__auto__));
} else {
}

return value__47230__auto__;
}
});
/**
 * Given a transient vector v, concatenate all of the other
 *   elements in all of the remaining collections onto v.
 */
zprint.zprint.concatv_BANG_ = (function zprint$zprint$concatv_BANG_(var_args){
var args__22092__auto__ = [];
var len__22082__auto___54686 = arguments.length;
var i__22083__auto___54687 = (0);
while(true){
if((i__22083__auto___54687 < len__22082__auto___54686)){
args__22092__auto__.push((arguments[i__22083__auto___54687]));

var G__54688 = (i__22083__auto___54687 + (1));
i__22083__auto___54687 = G__54688;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (v,rest){
var cols = rest;
var out = v;
while(true){
if(cljs.core.truth_(cols)){
var G__54689 = cljs.core.next.call(null,cols);
var G__54690 = (function (){var col = cljs.core.first.call(null,cols);
var out__$1 = out;
while(true){
if(cljs.core.truth_(col)){
var G__54691 = cljs.core.next.call(null,col);
var G__54692 = cljs.core.conj_BANG_.call(null,out__$1,cljs.core.first.call(null,col));
col = G__54691;
out__$1 = G__54692;
continue;
} else {
return out__$1;
}
break;
}
})();
cols = G__54689;
out = G__54690;
continue;
} else {
return out;
}
break;
}
}));

(zprint.zprint.concatv_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.zprint.concatv_BANG_.cljs$lang$applyTo = (function (seq54684){
var G__54685 = cljs.core.first.call(null,seq54684);
var seq54684__$1 = cljs.core.next.call(null,seq54684);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54685,seq54684__$1);
}));

/**
 * Do a fzprint-seq like thing, but do it incrementally and
 *   if it gets too big, return nil.
 */
zprint.zprint.fzprint_one_line = (function zprint$zprint$fzprint_one_line(options,ind,zloc_seq){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-one-line:");
} else {
}

var seq_right = zloc_seq;
var len = cljs.core.count.call(null,seq_right);
var last_index = (len - (1));
var gt_1_QMARK_ = (cljs.core.count.call(null,seq_right) > (1));
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true);
var zloc_seq__$1 = seq_right;
var new_ind = cljs.core.long$.call(null,ind);
var index = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,zloc_seq__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: exiting count:",cljs.core.count.call(null,out));
} else {
}

return cljs.core.persistent_BANG_.call(null,out);
} else {
var next_zloc = cljs.core.first.call(null,zloc_seq__$1);
var vec__54699 = ((cljs.core._EQ_.call(null,index,last_index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((!((index === (0)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(6)], null)], null):null),options__$1], null):((cljs.core._EQ_.call(null,index,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,zprint.zprint.not_rightmost.call(null,options__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(7)], null)], null),zprint.zprint.not_rightmost.call(null,options__$1)], null)
));
var sep = cljs.core.nth.call(null,vec__54699,(0),null);
var next_options = cljs.core.nth.call(null,vec__54699,(1),null);
var next_out = zprint.zprint.fzprint_STAR_.call(null,next_options,new_ind,next_zloc);
var _ = zprint.zprint.log_lines.call(null,options__$1,"fzprint-one-line:",new_ind,next_out);
var vec__54702 = zprint.zprint.style_lines.call(null,options__$1,new_ind,next_out);
var line_count = cljs.core.nth.call(null,vec__54702,(0),null);
var max_width = cljs.core.nth.call(null,vec__54702,(1),null);
var next_lines = vec__54702;
if((!(zprint.zprint.fzfit_one_line.call(null,next_options,next_lines)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: failed, too wide or too many lines!");
} else {
}

return null;
} else {
var G__54705 = cljs.core.next.call(null,zloc_seq__$1);
var G__54706 = (cljs.core.long$.call(null,max_width) + (1));
var G__54707 = (index + (1));
var G__54708 = zprint.zprint.concatv_BANG_.call(null,out,sep,next_out);
zloc_seq__$1 = G__54705;
new_ind = G__54706;
index = G__54707;
out = G__54708;
continue;
}
}
break;
}
});
/**
 * Take a seq of a zloc, created by (zmap identity zloc).  Return
 *   a seq of the fzprint* of each element.  No spacing between any
 *   of these elements. Note that this is not a style-vec, but a seq
 *   of style-vecs of each of the elements.  These would need to be
 *   concatenated together to become a style-vec.  ind is either a
 *   constant or a seq of indents, one for each element in zloc-seq.
 *   Note that right gets evaluated immediately, while left yields a
 *   lazy sequence which get evaluated later.
 */
zprint.zprint.fzprint_seq = (function zprint$zprint$fzprint_seq(options,ind,zloc_seq){
var max_length = zprint.zprint.get_max_length.call(null,options);
var len = cljs.core.count.call(null,zloc_seq);
var zloc_seq__$1 = (((len > max_length))?cljs.core.concat.call(null,cljs.core.take.call(null,max_length,zloc_seq),(new cljs.core.List(null,zprint.zfns.zdotdotdot.call(null),null,(1),null))):zloc_seq);
var len__$1 = cljs.core.count.call(null,zloc_seq__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-seq: (count zloc-seq):",len__$1,"max-length:",max_length,"ind:",ind);
} else {
}

if(cljs.core.empty_QMARK_.call(null,zloc_seq__$1)){
return null;
} else {
if((max_length === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#?#",zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null)], null);
} else {
var left = zprint.zprint.zpmap.call(null,options,(function (p1__54709_SHARP_,p2__54710_SHARP_){
return zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.not_rightmost.call(null,options),p1__54709_SHARP_,p2__54710_SHARP_);
}),((cljs.core.coll_QMARK_.call(null,ind))?ind:cljs.core.repeat.call(null,ind)),cljs.core.butlast.call(null,zloc_seq__$1));
var right = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.fzprint_STAR_.call(null,options,((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.last.call(null,ind):ind),cljs.core.last.call(null,zloc_seq__$1))], null);
if(cljs.core._EQ_.call(null,len__$1,(1))){
return right;
} else {
return zprint.zprint.concat_no_nil.call(null,left,right);

}

}
}
});
/**
 * Takes zloc-seq, a seq of a zloc, created by (zmap identity zloc),
 *   and returns a style-vec of the result.  Either it fits on one
 *   line, or it is rendered on multiple lines.  You can force multiple
 *   lines with force-nl?. If the seq is empty, returns :noseq, which
 *   is what you give concat-no-nil if you want this to just disappear.
 *   If you want it to do less than everything in the original zloc,
 *   modify the result of (zmap identity zloc) to just contain what
 *   you want to print. ind is either a single indent, or a seq of
 *   indents, one for each element in zloc-seq.  Don't concatenate an
 *   indent/newline on to the beginning of the output from this routine.
 *   Let this routine do it for you, as it needs to know one is there
 *   in order to properly deal with any newlines in the actual stream.
 *   Else you will get two where you only should have one.
 */
zprint.zprint.fzprint_flow_seq = (function zprint$zprint$fzprint_flow_seq(var_args){
var G__54712 = arguments.length;
switch (G__54712) {
case 6:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 4:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$6 = (function (caller,p__54713,ind,zloc_seq,force_nl_QMARK_,nl_first_QMARK_){
var map__54714 = p__54713;
var map__54714__$1 = cljs.core.__destructure_map.call(null,map__54714);
var options = map__54714__$1;
var map__54715 = cljs.core.get.call(null,map__54714__$1,caller);
var map__54715__$1 = cljs.core.__destructure_map.call(null,map__54715);
var nl_count = cljs.core.get.call(null,map__54715__$1,new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-flow-seq: count zloc-seq:",cljs.core.count.call(null,zloc_seq),"nl-first?",nl_first_QMARK_,"zloc-seq:",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}

var coll_print = zprint.zprint.fzprint_seq.call(null,options,ind,zloc_seq);
var one_line = cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(8)], null)], null),coll_print));
var _ = zprint.zprint.log_lines.call(null,options,"fzprint-flow-seq:",ind,one_line);
var one_line_lines = zprint.zprint.style_lines.call(null,options,ind,one_line);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-flow-seq: coll-print:",coll_print));
} else {
}

var value__47230__auto__ = ((((cljs.core.not.call(null,force_nl_QMARK_)) && (zprint.zprint.fzfit_one_line.call(null,options,one_line_lines))))?one_line:(((!(cljs.core.empty_QMARK_.call(null,coll_print))))?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,zprint.zprint.precede_w_nl.call(null,options,ind,coll_print,cljs.core.not.call(null,nl_first_QMARK_),nl_count)):new cljs.core.Keyword(null,"noseq","noseq",405935768)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-flow-seq: exit:",cljs.core.pr_str.call(null,value__47230__auto__));
} else {
}

return value__47230__auto__;
}));

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4 = (function (caller,options,ind,zloc_seq){
return zprint.zprint.fzprint_flow_seq.call(null,caller,options,ind,zloc_seq,null,null);
}));

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5 = (function (caller,options,ind,zloc_seq,force_nl_QMARK_){
return zprint.zprint.fzprint_flow_seq.call(null,caller,options,ind,zloc_seq,force_nl_QMARK_,null);
}));

(zprint.zprint.fzprint_flow_seq.cljs$lang$maxFixedArity = 6);

/**
 * Try out the given zloc, and if it fits on the current line, just
 *   do that. It might fit on the same line, as this may not be the rest
 *   of the list that we are printing. If not, check it out with good-enough?
 *   and do the best you can.  Three choices, really: fits on same line, 
 *   does ok as hanging, or better with flow. hindent is hang-indent, and 
 *   findent is flow-indent, and each contains the initial separator.  
 *   Might be nice if the fn-style actually got sent to this fn.
 */
zprint.zprint.fzprint_hang_one = (function zprint$zprint$fzprint_hang_one(caller,p__54717,hindent,findent,zloc){
var map__54718 = p__54717;
var map__54718__$1 = cljs.core.__destructure_map.call(null,map__54718);
var options = map__54718__$1;
var map__54719 = cljs.core.get.call(null,map__54718__$1,caller);
var map__54719__$1 = cljs.core.__destructure_map.call(null,map__54719);
var hang_avoid = cljs.core.get.call(null,map__54719__$1,new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568));
var one_line_QMARK_ = cljs.core.get.call(null,map__54718__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var width = cljs.core.get.call(null,map__54718__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-hang-one:",zprint.zfns.zstring.call(null,zloc)," hindent:",hindent,"findent:",findent));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,zprint.zprint.dots.call(null,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"h1 caller:",caller,zprint.zfns.zstring.call(null,(cljs.core.truth_(zprint.zfns.zcoll_QMARK_.call(null,zloc))?zprint.zfns.zfirst.call(null,zloc):zloc)));
} else {
}

var local_options = ((((cljs.core.not.call(null,one_line_QMARK_)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1(caller.call(null,options))))))?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options);
var hindent__$1 = (function (){var or__20754__auto__ = hindent;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return findent;
}
})();
var hang_count = zprint.zfns.zcount.call(null,zloc);
var hanging = ((((cljs.core.not_EQ_.call(null,hindent__$1,findent)) && (((cljs.core.not.call(null,hang_avoid)) || ((hang_count < ((width - hindent__$1) * hang_avoid)))))))?zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.in_hang.call(null,local_options),hindent__$1,zloc):null);
var hanging__$1 = zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(9)], null)], null),hanging);
var _ = zprint.zprint.log_lines.call(null,options,"fzprint-hang-one: hanging:",(hindent__$1 - (1)),hanging__$1);
var hr_lines = zprint.zprint.style_lines.call(null,options,(hindent__$1 - (1)),hanging__$1);

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: hr-lines:",hr_lines,"hang-count:",hang_count);
} else {
}

if(cljs.core.truth_((function (){var or__20754__auto__ = zprint.zprint.fzfit_one_line.call(null,options,hr_lines);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = zprint.zprint.prepend_nl.call(null,options,findent,zprint.zprint.fzprint_STAR_.call(null,options,findent,zloc));
var ___$1 = zprint.zprint.log_lines.call(null,options,"fzprint-hang-one: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines.call(null,options,findent,flow);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: fd-lines:",fd_lines):null);
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: ending: hang-count:",hang_count,"hanging:",cljs.core.pr_str.call(null,hanging__$1),"flow:",cljs.core.pr_str.call(null,flow)):null);
var hr_good_QMARK_ = (function (){var and__20748__auto__ = new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = hr_lines;
if(cljs.core.truth_(and__20748__auto____$1)){
return zprint.zprint.good_enough_QMARK_.call(null,caller,options,new cljs.core.Keyword(null,"none-hang-one","none-hang-one",-1392848107),hang_count,(hindent__$1 - findent),hr_lines,fd_lines);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Given a seq of zlocs, work backwards from the end, and see how
 *   many elements are pairs of constants (using zconstant? or the
 *   supplied constant-pair-fn).  So that (... :a (stuff) :b (bother))
 *   returns 4, since both :a and :b are zconstant? true. This is made
 *   more difficult by having to skip comments along the way as part
 *   of the pair check, but keep track of the ones we skip so the count
 *   is right in the end.  We don't expect any spaces in this but
 *   newlines must be handled, because this seq should have been
 *   produced by zmap or its equivalent.  Returns two things:
 *   [paired-item-count actual-paired-items], where paired-item-count
 *   is the number of things from the end of the seq you have to trim
 *   off to get the constant pairs included, and the actual-paired-items
 *   is the count of the items to be checked against the constant-pair-min
 *   (which is exclusive of comments and newlines).
 */
zprint.zprint.count_constant_pairs = (function zprint$zprint$count_constant_pairs(options,constant_pair_fn,zloc_seq){
var zloc_seq_rev = cljs.core.reverse.call(null,zloc_seq);
var element_count = (0);
var paired_element_count = (0);
var constant_required_QMARK_ = null;
var pair_size = (0);
var actual_pair_size = (0);
while(true){
var element = cljs.core.first.call(null,zloc_seq_rev);
if(cljs.core.empty_QMARK_.call(null,zloc_seq_rev)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(element_count - pair_size),(paired_element_count - actual_pair_size)], null);
} else {
var comment_or_newline_QMARK_ = zprint.zprint.zcomment_or_newline_QMARK_.call(null,element);
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.not.call(null,comment_or_newline_QMARK_);
if(and__20748__auto__){
var and__20748__auto____$1 = constant_required_QMARK_;
if(cljs.core.truth_(and__20748__auto____$1)){
if(cljs.core.truth_(constant_pair_fn)){
return cljs.core.not.call(null,(cljs.core.truth_(zprint.zfns.zsexpr_QMARK_.call(null,element))?constant_pair_fn.call(null,zprint.zprint.get_sexpr.call(null,options,element)):null));
} else {
return cljs.core.not.call(null,zprint.zfns.zconstant_QMARK_.call(null,element));
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(element_count - pair_size),(paired_element_count - actual_pair_size)], null);
} else {
var G__54720 = cljs.core.next.call(null,zloc_seq_rev);
var G__54721 = (element_count + (1));
var G__54722 = (cljs.core.truth_(comment_or_newline_QMARK_)?paired_element_count:(paired_element_count + (1)));
var G__54723 = (cljs.core.truth_(comment_or_newline_QMARK_)?constant_required_QMARK_:cljs.core.not.call(null,constant_required_QMARK_));
var G__54724 = (cljs.core.truth_((function (){var and__20748__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,comment_or_newline_QMARK_);
} else {
return and__20748__auto__;
}
})())?(0):(pair_size + (1)));
var G__54725 = (cljs.core.truth_((function (){var and__20748__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,comment_or_newline_QMARK_);
} else {
return and__20748__auto__;
}
})())?(0):(cljs.core.truth_(comment_or_newline_QMARK_)?actual_pair_size:(actual_pair_size + (1))));
zloc_seq_rev = G__54720;
element_count = G__54721;
paired_element_count = G__54722;
constant_required_QMARK_ = G__54723;
pair_size = G__54724;
actual_pair_size = G__54725;
continue;
}
}
break;
}
});
/**
 * Argument is a zloc-seq.  Output is a [pair-seq non-paired-item-count],
 *   if any.  If there are no pair-seqs, pair-seq must be nil, not an
 *   empty seq.  This will largely ignore newlines and comments.
 */
zprint.zprint.constant_pair = (function zprint$zprint$constant_pair(caller,p__54726,zloc_seq){
var map__54727 = p__54726;
var map__54727__$1 = cljs.core.__destructure_map.call(null,map__54727);
var options = map__54727__$1;
var map__54728 = cljs.core.get.call(null,map__54727__$1,caller);
var map__54728__$1 = cljs.core.__destructure_map.call(null,map__54728);
var constant_pair_QMARK_ = cljs.core.get.call(null,map__54728__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_fn = cljs.core.get.call(null,map__54728__$1,new cljs.core.Keyword(null,"constant-pair-fn","constant-pair-fn",-1611174375));
var constant_pair_min = cljs.core.get.call(null,map__54728__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
if(cljs.core.truth_(constant_pair_QMARK_)){
var vec__54729 = zprint.zprint.count_constant_pairs.call(null,options,constant_pair_fn,zloc_seq);
var paired_item_count = cljs.core.nth.call(null,vec__54729,(0),null);
var actual_paired_items = cljs.core.nth.call(null,vec__54729,(1),null);
var non_paired_item_count = (cljs.core.count.call(null,zloc_seq) - paired_item_count);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"constant-pair: non-paired-items:",non_paired_item_count,"paired-item-count:",paired_item_count,"actual-paired-items:",actual_paired_items):null);
var pair_seq = (((actual_paired_items >= constant_pair_min))?cljs.core.drop.call(null,non_paired_item_count,zloc_seq):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair_seq,non_paired_item_count], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.count.call(null,zloc_seq)], null);
}
});
/**
 * If this zloc is a comment or a newline, return true.
 */
zprint.zprint.zcomment_or_newline_QMARK_ = (function zprint$zprint$zcomment_or_newline_QMARK_(zloc){
var or__20754__auto__ = zprint.zfns.zcomment_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zfns.znewline_QMARK_.call(null,zloc);
}
});
/**
 * Given a style-vec, ensure it starts with a newline.  If it doesn't,
 *   then put one in.  We could take the whole newline, but the indent is
 *   really the only unique thing.
 */
zprint.zprint.ensure_start_w_nl = (function zprint$zprint$ensure_start_w_nl(ind,style_vec){
var element_type = cljs.core.nth.call(null,cljs.core.first.call(null,style_vec),(2));
if(((cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
return style_vec;
} else {
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(6)], null)], null),style_vec);
}
});
/**
 * Given a style-vec, ensure it ends with a newline.  If it doesn't,
 *   then put one in.
 */
zprint.zprint.ensure_end_w_nl = (function zprint$zprint$ensure_end_w_nl(ind,style_vec){
var element_type = cljs.core.nth.call(null,cljs.core.last.call(null,style_vec),(2));
if(((cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
return style_vec;
} else {
return zprint.zprint.concat_no_nil.call(null,style_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(7)], null)], null));
}
});
/**
 * zloc-seq is a seq of zlocs of a collection.  We already know
 *   that the given zloc won't fit on the current line. [Besides, we
 *   ensure that if there are two things remaining anyway. ???] So
 *   now, try hanging and see if that is better than flow.  Unless
 *   :hang? is nil, in which case we will just flow.  hindent is
 *   hang-indent, and findent is flow-indent. This should never be
 *   called with :one-line because this is only called from fzprint-list*
 *   after the one-line processing is done. If the hindent equals the
 *   flow indent, then just do flow.  Do only zloc-count non-whitespace
 *   elements of zloc-seq if it exists.
 */
zprint.zprint.fzprint_hang_remaining = (function zprint$zprint$fzprint_hang_remaining(var_args){
var G__54733 = arguments.length;
switch (G__54733) {
case 7:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__54734,hindent,findent,zloc_seq,fn_style,zloc_count){
var map__54735 = p__54734;
var map__54735__$1 = cljs.core.__destructure_map.call(null,map__54735);
var options = map__54735__$1;
var map__54736 = cljs.core.get.call(null,map__54735__$1,caller);
var map__54736__$1 = cljs.core.__destructure_map.call(null,map__54736);
var hang_QMARK_ = cljs.core.get.call(null,map__54736__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var constant_pair_QMARK_ = cljs.core.get.call(null,map__54736__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_min = cljs.core.get.call(null,map__54736__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
var hang_avoid = cljs.core.get.call(null,map__54736__$1,new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568));
var hang_expand = cljs.core.get.call(null,map__54736__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.call(null,map__54736__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var nl_separator_QMARK_ = cljs.core.get.call(null,map__54736__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var respect_nl_QMARK_ = cljs.core.get.call(null,map__54736__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var dbg_QMARK_ = cljs.core.get.call(null,map__54735__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var width = cljs.core.get.call(null,map__54735__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,zprint.zprint.dots.call(null,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"hr:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-hang-remaining first:",zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)),"hindent:",hindent,"findent:",findent,"caller:",caller,"nl-separator?:",nl_separator_QMARK_,"(count zloc-seq):",cljs.core.count.call(null,zloc_seq)));
} else {
}

var seq_right = zloc_seq;
var seq_right__$1 = (cljs.core.truth_(zloc_count)?cljs.core.take.call(null,zloc_count,seq_right):seq_right);
if(cljs.core.empty_QMARK_.call(null,seq_right__$1)){
return new cljs.core.Keyword(null,"noseq","noseq",405935768);
} else {
var vec__54737 = zprint.zprint.constant_pair.call(null,caller,options,seq_right__$1);
var pair_seq = cljs.core.nth.call(null,vec__54737,(0),null);
var non_paired_item_count = cljs.core.nth.call(null,vec__54737,(1),null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining count pair-seq:",cljs.core.count.call(null,pair_seq)):null);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: first hang?",hang_QMARK_,"hang-avoid",hang_avoid,"findent:",findent,"hindent:",hindent,"(count seq-right):",cljs.core.count.call(null,seq_right__$1),"thing:",(cljs.core.truth_(hang_avoid)?((width - hindent) * hang_avoid):null)):null);
var hang_QMARK___$1 = (function (){var and__20748__auto__ = hang_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core.not_EQ_.call(null,hindent,findent)) && (((cljs.core.not.call(null,hang_avoid)) || ((cljs.core.count.call(null,seq_right__$1) < ((width - hindent) * hang_avoid))))));
} else {
return and__20748__auto__;
}
})();
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: second hang?",hang_QMARK___$1):null);
var hanging = (function (){var hang_result = (cljs.core.truth_(hang_QMARK___$1)?((cljs.core.not.call(null,pair_seq))?zprint.zprint.fzprint_flow_seq.call(null,caller,zprint.zprint.in_hang.call(null,options),hindent,seq_right__$1,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.call(null,(function (){var value__47230__auto__ = zprint.zprint.ensure_end_w_nl.call(null,hindent,zprint.zprint.fzprint_flow_seq.call(null,caller,zprint.zprint.not_rightmost.call(null,zprint.zprint.in_hang.call(null,options)),hindent,cljs.core.take.call(null,non_paired_item_count,seq_right__$1),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: mapv:",cljs.core.pr_str.call(null,value__47230__auto__));
} else {
}

return value__47230__auto__;
})(),(function (){var value__47230__auto__ = zprint.zprint.fzprint_pairs.call(null,zprint.zprint.in_hang.call(null,options),hindent,pair_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: fzprint-hang:",cljs.core.pr_str.call(null,value__47230__auto__));
} else {
}

return value__47230__auto__;
})()):zprint.zprint.fzprint_pairs.call(null,zprint.zprint.in_hang.call(null,options),hindent,pair_seq))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_result,zprint.zprint.style_lines.call(null,options,hindent,hang_result)], null);
})();
var vec__54740 = zprint.zprint.zat.call(null,options,hanging);
var hanging__$1 = cljs.core.nth.call(null,vec__54740,(0),null);
var vec__54743 = cljs.core.nth.call(null,vec__54740,(1),null);
var hanging_line_count = cljs.core.nth.call(null,vec__54743,(0),null);
var hanging_lines = vec__54743;
var hang_count = cljs.core.count.call(null,seq_right__$1);
var flow_QMARK_ = cljs.core.not.call(null,zprint.zprint.use_hang_QMARK_.call(null,caller,options,hindent,hang_count,hanging_line_count));
var flow = ((flow_QMARK_)?(function (){var flow_result = ((cljs.core.not.call(null,pair_seq))?zprint.zprint.fzprint_flow_seq.call(null,caller,options,findent,seq_right__$1,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"nl-first","nl-first",-462968863)):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.call(null,zprint.zprint.ensure_end_w_nl.call(null,findent,zprint.zprint.fzprint_flow_seq.call(null,caller,zprint.zprint.not_rightmost.call(null,options),findent,cljs.core.take.call(null,non_paired_item_count,seq_right__$1),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"nl-first","nl-first",-462968863))),zprint.zprint.fzprint_pairs.call(null,options,findent,pair_seq)):zprint.zprint.fzprint_pairs.call(null,options,findent,pair_seq)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_result,zprint.zprint.style_lines.call(null,options,findent,flow_result)], null);
})():null);
var vec__54746 = (cljs.core.truth_(flow)?zprint.zprint.zat.call(null,options,flow):null);
var flow__$1 = cljs.core.nth.call(null,vec__54746,(0),null);
var flow_lines = cljs.core.nth.call(null,vec__54746,(1),null);
var ___$3 = zprint.zprint.log_lines.call(null,options,"fzprint-hang-remaining: hanging:",hindent,hanging__$1);
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: hanging-lines:",hanging_lines,"hang-count:",hang_count):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: flow-lines:",flow_lines);
} else {
}

if(cljs.core.truth_(dbg_QMARK_)){
if((hang_count === (0))){
cljs.core.println.call(null,"hang-count = 0:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}
} else {
}

zprint.zprint.log_lines.call(null,options,"fzprint-hang-remaining: flow",findent,flow__$1);

if(cljs.core.truth_((function (){var and__20748__auto__ = hanging_lines;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,flow_lines);
} else {
return and__20748__auto__;
}
})())){
if(zprint.zprint.first_nl_QMARK_.call(null,hanging__$1)){
return hanging__$1;
} else {
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(10)], null)], null),hanging__$1);
}
} else {
if(cljs.core.truth_(flow_lines)){
if(cljs.core.truth_((function (){var and__20748__auto__ = hanging_lines;
if(cljs.core.truth_(and__20748__auto__)){
return zprint.zprint.good_enough_QMARK_.call(null,caller,options,fn_style,hang_count,(hindent - findent),hanging_lines,((((cljs.core.not.call(null,pair_seq)) && ((cljs.core.first.call(null,flow_lines) > (1)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,flow_lines) - (1)),cljs.core.second.call(null,flow_lines),cljs.core.nth.call(null,flow_lines,(2))], null):flow_lines));
} else {
return and__20748__auto__;
}
})())){
if(zprint.zprint.first_nl_QMARK_.call(null,hanging__$1)){
return hanging__$1;
} else {
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(10)], null)], null),hanging__$1);
}
} else {
return zprint.zprint.ensure_start_w_nl.call(null,findent,flow__$1);
}
} else {
return null;
}
}
}
}));

(zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,hindent,findent,zloc,fn_style){
return zprint.zprint.fzprint_hang_remaining.call(null,caller,options,hindent,findent,zloc,fn_style,null);
}));

(zprint.zprint.fzprint_hang_remaining.cljs$lang$maxFixedArity = 7);

/**
 * Get the zloc seq, with or without newlines, as indicated by the options.
 */
zprint.zprint.fzprint_get_zloc_seq = (function zprint$zprint$fzprint_get_zloc_seq(caller,options,zloc){
var caller_options = caller.call(null,options);
var zloc_seq = (cljs.core.truth_(new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(caller_options))?zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc):(cljs.core.truth_(new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998).cljs$core$IFn$_invoke$arity$1(caller_options))?zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc):zprint.zfns.zmap.call(null,cljs.core.identity,zloc)
));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-get-zloc-seq:",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}

return zloc_seq;
});
/**
 * Given a zloc, if it is a zmeta?, then add all of the things at
 *   the beginning (which are :meta) to the ouput and then the last
 *   thing (which should be :token) to the output.
 */
zprint.zprint.extract_meta = (function zprint$zprint$extract_meta(caller,options,out_vec,element){
if(cljs.core.truth_(zprint.zfns.zmeta_QMARK_.call(null,element))){
var remaining = zprint.zprint.drop_thru_first_non_whitespace.call(null,zprint.zprint.fzprint_get_zloc_seq.call(null,caller,options,element));
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,cljs.core.first.call(null,remaining)),new cljs.core.Keyword(null,"meta","meta",1499536964))){
return zprint.zprint.extract_meta.call(null,caller,options,cljs.core.conj.call(null,out_vec,element),cljs.core.first.call(null,remaining));
} else {
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.conj.call(null,out_vec,element),remaining);
}
} else {
return cljs.core.conj.call(null,out_vec,element);
}
});
/**
 * Given the results from fzprint-get-zloc-seq, if any of the elements are
 *   zmeta?, then if :meta :split? true, make the second and succeeding
 *   elements of the meta an independent element in the outer seq.  
 *   Returns a zloc-seq.
 */
zprint.zprint.fzprint_split_meta_in_seq = (function zprint$zprint$fzprint_split_meta_in_seq(caller,options,zloc_seq){
var result = (cljs.core.truth_(new cljs.core.Keyword(null,"split?","split?",-1633274741).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.zprint.extract_meta,caller,options),cljs.core.PersistentVector.EMPTY,zloc_seq):zloc_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-split-meta-in-seq: split?",new cljs.core.Keyword(null,"split?","split?",-1633274741).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)),"result:",cljs.core.map.call(null,zprint.zfns.zstring,result),"tags:",cljs.core.map.call(null,zprint.zfns.ztag,result)));
} else {
}

return result;
});
/**
 * Given an zloc, is it a newline or a comment?
 */
zprint.zprint.newline_or_comment_QMARK_ = (function zprint$zprint$newline_or_comment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
var zloc_tag = zprint.zfns.ztag.call(null,zloc);
return ((cljs.core._EQ_.call(null,zloc_tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,zloc_tag,new cljs.core.Keyword(null,"comment","comment",532206069))));
} else {
return null;
}
});
/**
 * Given a seq of style-vecs, look at the last one, and if it is a
 *   :newline, then remove it.  But the last one might be a single
 *   one, in which case we will remove the whole thing, and it might be
 *   the last one in a sequence, in which case we will remove just that
 *   one.  If there is nothing left, return [[["" :none :none]]].
 */
zprint.zprint.remove_last_newline = (function zprint$zprint$remove_last_newline(ssv){
var last_style_vec = cljs.core.last.call(null,ssv);
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.last.call(null,last_style_vec),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))){
return ssv;
} else {
var last_len = cljs.core.count.call(null,last_style_vec);
var total_len = cljs.core.count.call(null,ssv);
var remove_one = cljs.core.concat.call(null,cljs.core.butlast.call(null,ssv),((cljs.core._EQ_.call(null,last_len,(1)))?cljs.core.PersistentVector.EMPTY:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.butlast.call(null,last_style_vec)],null))));
if(cljs.core.empty_QMARK_.call(null,remove_one)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null);
} else {
return remove_one;
}
}
});
/**
 * Given a single style-vec, look at the last element, and if it is a
 *   :newline, remove it.  If there is nothing left, return :noseq
 */
zprint.zprint.remove_one_newline = (function zprint$zprint$remove_one_newline(style_vec){
var last_style_vec = cljs.core.last.call(null,style_vec);
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,last_style_vec,(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))){
return style_vec;
} else {
var remaining = cljs.core.butlast.call(null,style_vec);
if(cljs.core.empty_QMARK_.call(null,remaining)){
return new cljs.core.Keyword(null,"noseq","noseq",405935768);
} else {
return remaining;
}
}
});
/**
 * Given [[[";stuff" :none :comment]]] or 
 *   [[[";bother" :none :comment-inline 1]]] add ["
 * " :none :newline]
 *   to the inside of it.
 */
zprint.zprint.add_newline_to_comment = (function zprint$zprint$add_newline_to_comment(indent,fzprint_STAR__return){
var the_type = cljs.core.nth.call(null,cljs.core.first.call(null,fzprint_STAR__return),(2));
if(((cljs.core._EQ_.call(null,the_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,the_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))){
return cljs.core.concat.call(null,fzprint_STAR__return,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,indent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323),(1)], null)], null));
} else {
return fzprint_STAR__return;
}
});
/**
 * Given a zloc-seq, gather newlines and comments up to the next
 *   zloc into a seq.  Returns [seq next-zloc next-count].
 */
zprint.zprint.gather_up_to_next_zloc = (function zprint$zprint$gather_up_to_next_zloc(zloc_seq){
var nloc_seq = zloc_seq;
var out = cljs.core.PersistentVector.EMPTY;
var next_count = (0);
while(true){
if(cljs.core.not.call(null,zprint.zprint.newline_or_comment_QMARK_.call(null,cljs.core.first.call(null,nloc_seq)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,cljs.core.first.call(null,nloc_seq),next_count], null);
} else {
var G__54750 = cljs.core.next.call(null,nloc_seq);
var G__54751 = cljs.core.conj.call(null,out,cljs.core.first.call(null,nloc_seq));
var G__54752 = (next_count + (1));
nloc_seq = G__54750;
out = G__54751;
next_count = G__54752;
continue;
}
break;
}
});
/**
 * Using the information returned from fzprint-up-to-first-zloc or
 *   fzprint-up-to-next-zloc, find the next zloc and return 
 *   [pre-next-style-vec next-zloc next-count zloc-seq]
 */
zprint.zprint.fzprint_up_to_next_zloc = (function zprint$zprint$fzprint_up_to_next_zloc(caller,options,ind,p__54753){
var vec__54754 = p__54753;
var _ = cljs.core.nth.call(null,vec__54754,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__54754,(1),null);
var current_count = cljs.core.nth.call(null,vec__54754,(2),null);
var zloc_seq = cljs.core.nth.call(null,vec__54754,(3),null);
var next_data = vec__54754;
var starting_count = (current_count + (1));
var nloc_seq = cljs.core.nthnext.call(null,zloc_seq,starting_count);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-up-to-next-zloc: starting-count:",starting_count,"zloc-seq:",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}

if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noseq","noseq",405935768),cljs.core.first.call(null,nloc_seq),starting_count,zloc_seq], null);
} else {
var vec__54757 = zprint.zprint.gather_up_to_next_zloc.call(null,nloc_seq);
var pre_next_zloc_seq = cljs.core.nth.call(null,vec__54757,(0),null);
var next_zloc = cljs.core.nth.call(null,vec__54757,(1),null);
var next_count = cljs.core.nth.call(null,vec__54757,(2),null);
var next_count__$1 = (starting_count + next_count);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-up-to-next-zloc: next-count:",next_count__$1,"pre-next-zloc-seq:",cljs.core.map.call(null,zprint.zfns.zstring,pre_next_zloc_seq)));
} else {
}

if(cljs.core.empty_QMARK_.call(null,pre_next_zloc_seq)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noseq","noseq",405935768),next_zloc,next_count__$1,zloc_seq], null);
} else {
var coll_print = zprint.zprint.fzprint_flow_seq.call(null,caller,options,ind,pre_next_zloc_seq);
var coll_print__$1 = cljs.core.mapv.call(null,cljs.core.vector,coll_print);
var coll_print__$2 = ((cljs.core.not_EQ_.call(null,starting_count,(0)))?zprint.zprint.remove_last_newline.call(null,coll_print__$1):coll_print__$1);
var coll_out = cljs.core.apply.call(null,zprint.zprint.concat_no_nil,coll_print__$2);
var coll_out__$1 = (((function (){var and__20748__auto__ = cljs.core.not_EQ_.call(null,starting_count,(0));
if(and__20748__auto__){
var first_type = cljs.core.nth.call(null,cljs.core.first.call(null,coll_out),(2));
return ((cljs.core._EQ_.call(null,first_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,first_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
} else {
return and__20748__auto__;
}
})())?zprint.zprint.ensure_start_w_nl.call(null,ind,coll_out):coll_out);
var coll_out__$2 = ((cljs.core.not_EQ_.call(null,starting_count,(0)))?coll_out__$1:zprint.zprint.ensure_end_w_nl.call(null,ind,coll_out__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_out__$2,next_zloc,next_count__$1,zloc_seq], null);
}
}
});
/**
 * Returns [pre-first-style-vec first-zloc first-count zloc-seq], where
 *   pre-first-style-vec will be :noseq if there isn't anything, and first-count
 *   is what you give to nthnext to get to the first-zloc in zloc-seq.
 */
zprint.zprint.fzprint_up_to_first_zloc = (function zprint$zprint$fzprint_up_to_first_zloc(caller,options,ind,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-up-to-first-zloc"));
} else {
}

if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noseq","noseq",405935768),cljs.core.first.call(null,zloc),(0),zloc], null);
} else {
var zloc_seq = zprint.zprint.fzprint_get_zloc_seq.call(null,caller,options,zloc);
var zloc_seq__$1 = zprint.zprint.fzprint_split_meta_in_seq.call(null,caller,options,zloc_seq);
return zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options,ind,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(-1),zloc_seq__$1], null));
}
});
/**
 * Using return from fzprint-up-to-first-zloc or fzprint-up-to-next-zloc,
 *   [pre-next-style-vec next-zloc next-count zloc-seq], return a zloc-seq
 *   pointer to just beyond the specific zloc which was found by the
 *   fzprint-up-to-first or fzprint-up-to-next call.  You don't give this
 *   a number, you give it the data structure from the thing that you found.
 */
zprint.zprint.get_zloc_seq_right = (function zprint$zprint$get_zloc_seq_right(p__54760){
var vec__54761 = p__54760;
var _ = cljs.core.nth.call(null,vec__54761,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__54761,(1),null);
var next_count = cljs.core.nth.call(null,vec__54761,(2),null);
var zloc_seq = cljs.core.nth.call(null,vec__54761,(3),null);
var input_data = vec__54761;
if((next_count >= cljs.core.count.call(null,zloc_seq))){
throw (new Error(["get-zloc-seq-right input data inconsistent:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_data)].join('')));
} else {
var zloc_seq__$1 = cljs.core.nthnext.call(null,zloc_seq,(next_count + (1)));
return zloc_seq__$1;
}
});
/**
 * Is this a newline or equivalent?  Comments and newlines are both
 *   newlines for the purposed of this routine.
 */
zprint.zprint.at_newline_QMARK_ = (function zprint$zprint$at_newline_QMARK_(zloc){
var this_tag = zprint.zfns.ztag.call(null,zloc);
return ((cljs.core._EQ_.call(null,this_tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,this_tag,new cljs.core.Keyword(null,"newline","newline",1790071323))));
});
/**
 * Given a zloc that is down inside of a collection, presumably
 *   a list, return a vector containing the number of printing elements
 *   we had to traverse to get to it as well as the newline.
 */
zprint.zprint.next_newline = (function zprint$zprint$next_newline(zloc){
var nloc = zloc;
var index = (0);
while(true){
var next_right = rewrite_clj.zip.right_STAR_.call(null,nloc);
if(cljs.core.truth_(next_right)){
if(zprint.zprint.at_newline_QMARK_.call(null,nloc)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,nloc], null);
} else {
var G__54764 = rewrite_clj.zip.right_STAR_.call(null,nloc);
var G__54765 = (((!(zprint.zutil.whitespace_QMARK_.call(null,nloc))))?(index + (1)):index);
nloc = G__54764;
index = G__54765;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,nloc], null);
}
break;
}
});
/**
 * Return the next actual element, ignoring comments and whitespace
 *   and everything else but real elements.
 */
zprint.zprint.next_actual = (function zprint$zprint$next_actual(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return nloc;
} else {
var next_nloc = zprint.zutil.zrightnws.call(null,nloc);
var next_tag = rewrite_clj.zip.tag.call(null,next_nloc);
if((!(((cljs.core._EQ_.call(null,next_tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,next_tag,new cljs.core.Keyword(null,"comment","comment",532206069))))))){
return next_nloc;
} else {
var G__54766 = next_nloc;
nloc = G__54766;
continue;
}
}
break;
}
});
/**
 * Return the first actual element, ignoring comments and whitespace
 *   and everything else but real elements.
 */
zprint.zprint.first_actual = (function zprint$zprint$first_actual(zloc){
if(zprint.zprint.at_newline_QMARK_.call(null,zloc)){
return zprint.zprint.next_actual.call(null,zloc);
} else {
return zloc;
}
});
/**
 * Should we hang this zloc, or flow it.  We assume that we are at
 *   the start of the collection (though this could be generalized to
 *   deal with other starting locations easily enough).  Return true
 *   if we should hang it based just on the information in the zloc
 *   itself.  The criteria are: If there is a newline after the second
 *   thing in the zloc, and the amount of space prior to the third thing
 *   is the same as the amount of space prior to the second thing, then
 *   the incoming zloc was hung and we should do the same. Of course, it
 *   would also only be hung if the second thing was on the same line as
 *   the first thing.
 */
zprint.zprint.hang_zloc_QMARK_ = (function zprint$zprint$hang_zloc_QMARK_(zloc){
var zloc__$1 = zprint.zprint.first_actual.call(null,zloc);
var vec__54767 = zprint.zprint.next_newline.call(null,zloc__$1);
var count_prior_to_newline = cljs.core.nth.call(null,vec__54767,(0),null);
var newline = cljs.core.nth.call(null,vec__54767,(1),null);
if((count_prior_to_newline < (2))){
return false;
} else {
var second_element = zprint.zutil.zrightnws.call(null,((zprint.zutil.whitespace_QMARK_.call(null,zloc__$1))?zprint.zutil.zrightnws.call(null,zloc__$1):zloc__$1));
var second_indent = zprint.comment.length_before.call(null,second_element);
var third_element = zprint.zprint.next_actual.call(null,second_element);
var third_indent = zprint.comment.length_before.call(null,third_element);
var and__20748__auto__ = second_element;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = third_element;
if(cljs.core.truth_(and__20748__auto____$1)){
return cljs.core._EQ_.call(null,second_indent,third_indent);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
}
});
/**
 * Take a style-vec that was once output from indent-zmap, and fix
 *   up all of the :indent elements in it by adding (- actual-ind ind)
 *   to them.  If we find a multiple thing in here, call indent-shift
 *   recursively with the ind and cur-ind that is approprite.  All of
 *   the actual indents are correct already -- all we are doing is
 *   setting up their base.  There is no attempt to determine if we
 *   are exceeding any configured width.
 */
zprint.zprint.indent_shift = (function zprint$zprint$indent_shift(caller,options,ind,actual_ind,svec){
var shift_ind = actual_ind;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-shift: ind:",ind,"actual-ind:",actual_ind,"shift-ind:",shift_ind,"svec:",svec));
} else {
}

var cur_seq = svec;
var cur_ind = actual_ind;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cur_seq)){
return out;
} else {
var this_seq = cljs.core.first.call(null,cur_seq);
var new_seq = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,this_seq)))?zprint.zprint.indent_shift.call(null,caller,options,ind,cur_ind,this_seq):(function (){var vec__54779 = this_seq;
var s = cljs.core.nth.call(null,vec__54779,(0),null);
var color = cljs.core.nth.call(null,vec__54779,(1),null);
var type = cljs.core.nth.call(null,vec__54779,(2),null);
var next_seq = cljs.core.first.call(null,cljs.core.next.call(null,cur_seq));
var this_shift = (cljs.core.truth_((function (){var and__20748__auto__ = next_seq;
if(cljs.core.truth_(and__20748__auto__)){
return (((!(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,next_seq))))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,next_seq,(2)),new cljs.core.Keyword(null,"indent","indent",-148200125))));
} else {
return and__20748__auto__;
}
})())?(0):shift_ind);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"indent","indent",-148200125))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,this_shift))].join(''),color,type,(42)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right","right",-452581833))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,color,type,shift_ind], null);
} else {
return this_seq;

}
}
})());
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-shift: cur-ind:",cur_ind,"this-seq:",this_seq,"new-seq:",new_seq)):null);
var vec__54776 = zprint.zprint.style_lines.call(null,options,cur_ind,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seq], null));
var linecnt = cljs.core.nth.call(null,vec__54776,(0),null);
var max_width = cljs.core.nth.call(null,vec__54776,(1),null);
var lines = cljs.core.nth.call(null,vec__54776,(2),null);
var last_width = cljs.core.last.call(null,lines);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-shift: last-width:",last_width,"new-seq:",new_seq));
} else {
}

var G__54782 = cljs.core.next.call(null,cur_seq);
var G__54783 = last_width;
var G__54784 = cljs.core.conj.call(null,out,new_seq);
cur_seq = G__54782;
cur_ind = G__54783;
out = G__54784;
continue;
}
break;
}
});
/**
 * Implement :indent-only?.  This routine is the central one through
 *   which all :indent-only? processing flows, and replaces all of the
 *   detailed logic in fzprint-list*, fzprint-vec*, and fzprint-map*.
 *   This is called directly by fzprint-vec*, which handles both vectors
 *   and sets, and through fzprint-indent by fzprint-list* and
 *   fzprint-map*.  Thus, all of the data structures get their
 *   :indent-only? processing handled by ident-zmap.  coll-print is
 *   the output from fzprint-seq, which is a style-vec in the making
 *   without spacing, but with extra [] around the elements.  Everything
 *   is based off of ind, and we know nothing to the left of that.
 *   ind must be the left end of everything, not the right of l-str!
 *   The actual-ind is to the right of l-str.  When we get a newline,
 *   replace any spaces after it with our own, and that would be to
 *   bring it to ind + indent.  
 */
zprint.zprint.indent_zmap = (function zprint$zprint$indent_zmap(var_args){
var G__54786 = arguments.length;
switch (G__54786) {
case 7:
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__54787,ind,actual_ind,coll_print,indent,first_indent_only_QMARK_){
var map__54788 = p__54787;
var map__54788__$1 = cljs.core.__destructure_map.call(null,map__54788);
var options = map__54788__$1;
var map__54789 = cljs.core.get.call(null,map__54788__$1,caller);
var map__54789__$1 = cljs.core.__destructure_map.call(null,map__54789);
var wrap_after_multi_QMARK_ = cljs.core.get.call(null,map__54789__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var width = cljs.core.get.call(null,map__54788__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__54788__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var coll_print__$1 = zprint.zprint.merge_fzprint_seq.call(null,coll_print);
var last_index = (cljs.core.count.call(null,coll_print__$1) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt.call(null,rightcnt);
var actual_indent = (ind + indent);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-zmap: ind:",ind,"actual-ind:",actual_ind,"first-indent-only?",first_indent_only_QMARK_,"indent:",indent,"actual-indent:",actual_indent,"coll-print:",coll_print__$1));
} else {
}

var cur_seq = coll_print__$1;
var cur_ind = actual_ind;
var index = (0);
var beginning_QMARK_ = true;
var l_str_indent_QMARK_ = true;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cur_seq)){
return out;
} else {
var this_seq = cljs.core.first.call(null,cur_seq);
if(cljs.core.truth_(this_seq)){
var multi_QMARK_ = (cljs.core.count.call(null,this_seq) > (1));
var _ = zprint.zprint.log_lines.call(null,options,"indent-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"indent-zmap loop: cur-ind:",cur_ind,"multi?",multi_QMARK_,"(count this-seq):",cljs.core.count.call(null,this_seq),"this-seq:",this_seq,"out:",out)):null);
var this_seq__$1 = ((multi_QMARK_)?zprint.zprint.indent_shift.call(null,caller,options,actual_ind,cur_ind,this_seq):this_seq);
var vec__54793 = zprint.zprint.style_lines.call(null,options,cur_ind,this_seq__$1);
var linecnt = cljs.core.nth.call(null,vec__54793,(0),null);
var max_width = cljs.core.nth.call(null,vec__54793,(1),null);
var lines = cljs.core.nth.call(null,vec__54793,(2),null);
var last_width = cljs.core.last.call(null,lines);
var thetype = cljs.core.nth.call(null,cljs.core.last.call(null,this_seq__$1),(2));
var len = (last_width - cur_ind);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"linecnt:",linecnt,"last-width:",last_width,"len:",len,"type:",thetype):null);
var len__$1 = (function (){var x__21111__auto__ = (0);
var y__21112__auto__ = len;
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"newline","newline",1790071323));
var comma_QMARK_ = cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"comma","comma",1699024745));
var isempty_QMARK_ = cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,this_seq__$1)));
var comment_QMARK_ = ((cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var l_str_indent_QMARK___$1 = ((l_str_indent_QMARK_) && (((comment_QMARK_) || (newline_QMARK_))));
var actual_indent__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = (index > (0));
if(and__20748__auto__){
return first_indent_only_QMARK_;
} else {
return and__20748__auto__;
}
})())?ind:(ind + indent));
var width__$1 = ((cljs.core._EQ_.call(null,index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = ((cur_ind + len__$1) <= width__$1);
var new_ind = ((newline_QMARK_)?actual_indent__$1:((cur_ind + (1)) + len__$1)
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"------ this-seq:",this_seq__$1,"lines:",lines,"linecnt:",linecnt,"multi?",multi_QMARK_,"thetype:",thetype,"newline?:",newline_QMARK_,"comment?:",comment_QMARK_,"comma?:",comma_QMARK_,"l-str-indent?:",l_str_indent_QMARK___$1,"first-indent-only?",first_indent_only_QMARK_,"actual-indent:",actual_indent__$1,"index:",index,"beginning?:",beginning_QMARK_,"max-width:",max_width,"last-width:",last_width,"len:",len__$1,"cur-ind:",cur_ind,"isempty?:",isempty_QMARK_,"new-ind:",new_ind,"width:",width__$1,"fit?",fit_QMARK_));
} else {
}

var G__54797 = cljs.core.next.call(null,cur_seq);
var G__54798 = new_ind;
var G__54799 = (index + (1));
var G__54800 = ((((isempty_QMARK_) && (beginning_QMARK_))) || (((newline_QMARK_) || (cljs.core._EQ_.call(null,thetype,new cljs.core.Keyword(null,"indent","indent",-148200125))))));
var G__54801 = l_str_indent_QMARK___$1;
var G__54802 = ((isempty_QMARK_)?out:cljs.core.concat.call(null,out,((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var next_seq = cljs.core.first.call(null,cljs.core.next.call(null,cur_seq));
var newline_next_QMARK_ = (cljs.core.truth_(next_seq)?cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,next_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323)):null);
if(cljs.core.truth_(newline_next_QMARK_)){
return "";
} else {
return zprint.comment.blanks.call(null,((l_str_indent_QMARK___$1)?actual_ind:actual_indent__$1));
}
})())].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(12)], null)], null):(((index === (0)))?this_seq__$1:((((beginning_QMARK_) || (comma_QMARK_)))?this_seq__$1:zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(12)], null)], null),this_seq__$1))
))));
cur_seq = G__54797;
cur_ind = G__54798;
index = G__54799;
beginning_QMARK_ = G__54800;
l_str_indent_QMARK_ = G__54801;
out = G__54802;
continue;
} else {
return null;
}
}
break;
}
}));

(zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,ind,actual_ind,coll_print,indent){
return zprint.zprint.indent_zmap.call(null,caller,options,ind,actual_ind,coll_print,indent,null);
}));

(zprint.zprint.indent_zmap.cljs$lang$maxFixedArity = 7);

/**
 * Given a vector of vectors, decide if we should merge these individually
 *   into the top level vector.
 */
zprint.zprint.newline_seq_QMARK_ = (function zprint$zprint$newline_seq_QMARK_(newline_vec){
var starts_with_nl_vec = cljs.core.mapv.call(null,(function (p1__54803_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,cljs.core.first.call(null,p1__54803_SHARP_),"\n");
}),newline_vec);
var true_seq = cljs.core.distinct.call(null,starts_with_nl_vec);
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,true_seq),(1))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,true_seq),true)));
});
/**
 * Given the output from fzprint-seq, which is a seq of the
 *   output of fzprint*, apply a function to each of them that has
 *   more than one element (since less has no meaning) and when the
 *   function returns true, merge the vector in as individual elements.
 */
zprint.zprint.merge_fzprint_seq = (function zprint$zprint$merge_fzprint_seq(fzprint_seq_vec){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (p1__54805_SHARP_,p2__54804_SHARP_){
if(zprint.zprint.newline_seq_QMARK_.call(null,p2__54804_SHARP_)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,p1__54805_SHARP_,cljs.core.mapv.call(null,cljs.core.vector,p2__54804_SHARP_)));
} else {
return cljs.core.conj.call(null,p1__54805_SHARP_,p2__54804_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,fzprint_seq_vec));
});
/**
 * This function assumes that :indent-only? was set for the caller
 *   in the options (since anything else doesn't make sense).  It takes
 *   a zloc and the ind, which is where we are on the line this point,
 *   and will process the zloc to include any newlines.  Of course we
 *   have to have all of the white space in the zloc too, since we
 *   need to ask some questions about what we are starting with at
 *   some point.  We don't add newlines and we let the newlines that
 *   are in there do their thing.  We might add newlines if we move
 *   beyond the right margin, but for now, we don't (and it isn't
 *   entirely clear how or if that would work).  This routine has to
 *   make decisions about the indent, that is whether to hang or flow
 *   the expression. It does that based on what was done in the input
 *   if the configuration allows.
 */
zprint.zprint.fzprint_indent = (function zprint$zprint$fzprint_indent(var_args){
var G__54807 = arguments.length;
switch (G__54807) {
case 9:
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 8:
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9 = (function (caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent,first_indent_only_QMARK_){
var flow_indent = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
var l_str_len = cljs.core.count.call(null,l_str);
var flow_indent__$1 = (flow_indent + (l_str_len - (1)));
var flow_indent__$2 = ((cljs.core._EQ_.call(null,caller,new cljs.core.Keyword(null,"map","map",1371690461)))?cljs.core.count.call(null,l_str):flow_indent__$1);
var flow_indent__$3 = (((((flow_indent__$2 > l_str_len)) && (cljs.core._EQ_.call(null,caller,new cljs.core.Keyword(null,"list","list",765357683)))))?(cljs.core.truth_(arg_1_indent)?flow_indent__$2:l_str_len):flow_indent__$2);
var actual_ind = (ind + l_str_len);
var zloc_seq = (cljs.core.truth_(new cljs.core.Keyword(null,"comma?","comma?",1532168963).cljs$core$IFn$_invoke$arity$1(caller.call(null,options)))?zprint.zfns.zmap_w_nl_comma.call(null,cljs.core.identity,zloc):zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc));
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-indent: caller:",caller,"l-str-len:",l_str_len,"ind:",ind,"fn-style:",fn_style,"arg-1-indent:",arg_1_indent,"flow-indent:",flow_indent__$3,"actual-ind:",actual_ind,"comma?",new cljs.core.Keyword(null,"comma?","comma?",1532168963).cljs$core$IFn$_invoke$arity$1(caller.call(null,options)),"zloc",zprint.zfns.zstring.call(null,zloc),"zloc-seq",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq))):null);
var coll_print = zprint.zprint.fzprint_seq.call(null,options,ind,zloc_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-indent: coll-print:",coll_print)):null);
var indent_only_style = new cljs.core.Keyword(null,"indent-only-style","indent-only-style",708921086).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
var already_hung_QMARK_ = (cljs.core.truth_((function (){var and__20748__auto__ = indent_only_style;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,indent_only_style,new cljs.core.Keyword(null,"input-hang","input-hang",-542766364));
} else {
return and__20748__auto__;
}
})())?zprint.zprint.hang_zloc_QMARK_.call(null,rewrite_clj.zip.down_STAR_.call(null,zloc)):null);
var raw_indent = (cljs.core.truth_((function (){var and__20748__auto__ = arg_1_indent;
if(cljs.core.truth_(and__20748__auto__)){
return already_hung_QMARK_;
} else {
return and__20748__auto__;
}
})())?(arg_1_indent - ind):flow_indent__$3);
var indent = raw_indent;
var coll_print_contains_nil_QMARK_ = zprint.zprint.contains_nil_QMARK_.call(null,coll_print);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-indent:",zprint.zfns.zstring.call(null,zloc),"ind:",ind,"fn-style:",fn_style,"indent-only-style:",indent_only_style,"already-hung?:",already_hung_QMARK_,"arg-1-indent:",arg_1_indent,"l-str-len:",cljs.core.count.call(null,l_str),"actual-ind:",actual_ind,"raw-indent:",raw_indent,"coll-print-contains-nil?:",coll_print_contains_nil_QMARK_,"indent:",indent)):null);
var coll_print__$1 = (cljs.core.truth_(coll_print_contains_nil_QMARK_)?null:coll_print);
var output = zprint.zprint.indent_zmap.call(null,caller,options,ind,actual_ind,coll_print__$1,indent,first_indent_only_QMARK_);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-indent: output:",output));
} else {
}

return output;
}));

(zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8 = (function (caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent){
return zprint.zprint.fzprint_indent.call(null,caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent,null);
}));

(zprint.zprint.fzprint_indent.cljs$lang$maxFixedArity = 9);

/**
 * Find the location, counting from zero, and counting every element 
 *   in the seq, of the first zthing?.  Return its index if it is found, 
 *   nil if not.
 */
zprint.zprint.zfind_seq = (function zprint$zprint$zfind_seq(zthing_QMARK_,zloc_seq){
var nloc = zloc_seq;
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,cljs.core.first.call(null,nloc)))){
return i;
} else {
var G__54809 = cljs.core.next.call(null,nloc);
var G__54810 = (i + (1));
nloc = G__54809;
i = G__54810;
continue;
}
} else {
return null;
}
break;
}
});
zprint.zprint.body_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),null,new cljs.core.Keyword(null,"arg2-force-nl-body","arg2-force-nl-body",-2131843122),null,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),null,new cljs.core.Keyword(null,"arg2-extend-body","arg2-extend-body",1108891857),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845),null,new cljs.core.Keyword(null,"guided-body","guided-body",-2023833739),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null,new cljs.core.Keyword(null,"none-body","none-body",-171554854),null], null), null);
zprint.zprint.body_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg2-force-nl-body","arg2-force-nl-body",-2131843122),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"arg2-extend-body","arg2-extend-body",1108891857),new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845),new cljs.core.Keyword(null,"guided-body","guided-body",-2023833739),new cljs.core.Keyword(null,"none-body","none-body",-171554854)],[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"arg2-force-nl","arg2-force-nl",-818337503),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),new cljs.core.Keyword(null,"guided","guided",-297376298),new cljs.core.Keyword(null,"none","none",1333468478)]);
zprint.zprint.noarg1_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null], null), null);
zprint.zprint.noarg1_map = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)], null);
/**
 * Set noarg1 in the options if it is the right fn-type.
 */
zprint.zprint.noarg1 = (function zprint$zprint$noarg1(options,fn_type){
if(cljs.core.truth_(zprint.zprint.noarg1_set.call(null,fn_type))){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430),true);
} else {
return options;
}
});
zprint.zprint.fn_style__GT_caller = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg2-extend-body","arg2-extend-body",1108891857),new cljs.core.Keyword(null,"binding","binding",539932593)],[new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"binding","binding",539932593)]);
/**
 * Given an options map, get the respect-nl?, respect-bl? and indent-only?
 *   options from the caller's options, and if the caller doesn't define these,
 *   use the values from the backup section of the options map. Return
 *   [respect-nl? respect-bl? indent-only?]
 */
zprint.zprint.get_respect_indent = (function zprint$zprint$get_respect_indent(options,caller,backup){
var caller_options = caller.call(null,options);
var respect_nl_QMARK_ = cljs.core.get.call(null,caller_options,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"undef","undef",-529926228));
var respect_bl_QMARK_ = cljs.core.get.call(null,caller_options,new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),new cljs.core.Keyword(null,"undef","undef",-529926228));
var indent_only_QMARK_ = cljs.core.get.call(null,caller_options,new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"undef","undef",-529926228));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,respect_nl_QMARK_,new cljs.core.Keyword(null,"undef","undef",-529926228)))?respect_nl_QMARK_:new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(backup.call(null,options))),((cljs.core.not_EQ_.call(null,respect_bl_QMARK_,new cljs.core.Keyword(null,"undef","undef",-529926228)))?respect_bl_QMARK_:new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998).cljs$core$IFn$_invoke$arity$1(backup.call(null,options))),((cljs.core.not_EQ_.call(null,indent_only_QMARK_,new cljs.core.Keyword(null,"undef","undef",-529926228)))?indent_only_QMARK_:new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1(backup.call(null,options)))], null);
});
/**
 * Should we allow this function to print on a single line?
 */
zprint.zprint.allow_one_line_QMARK_ = (function zprint$zprint$allow_one_line_QMARK_(p__54811,len,fn_style){
var map__54812 = p__54811;
var map__54812__$1 = cljs.core.__destructure_map.call(null,map__54812);
var options = map__54812__$1;
var fn_force_nl = cljs.core.get.call(null,map__54812__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var fn_gt2_force_nl = cljs.core.get.call(null,map__54812__$1,new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537));
var fn_gt3_force_nl = cljs.core.get.call(null,map__54812__$1,new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985));
return cljs.core.not.call(null,(function (){var or__20754__auto__ = fn_force_nl.call(null,fn_style);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = (function (){var and__20748__auto__ = (len > (3));
if(and__20748__auto__){
return fn_gt2_force_nl.call(null,fn_style);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = (function (){var and__20748__auto__ = (len > (4));
if(and__20748__auto__){
return fn_gt3_force_nl.call(null,fn_style);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var temp__5718__auto__ = zprint.zprint.fn_style__GT_caller.call(null,fn_style);
if(cljs.core.truth_(temp__5718__auto__)){
var future_caller = temp__5718__auto__;
var caller_map = future_caller.call(null,options);
var or__20754__auto____$3 = new cljs.core.Keyword(null,"flow?","flow?",96929057).cljs$core$IFn$_invoke$arity$1(caller_map);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
return new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462).cljs$core$IFn$_invoke$arity$1(caller_map);
}
} else {
return null;
}
}
}
}
})());
});
/**
 * If the (caller options) has a value for :return-altered-zipper, then
 *   examine the value.  It should be [<depth> <symbol> <fn>]. 
 *   If the <depth> is nil, any depth will do. If the
 *   <symbol> is nil, any symbol will do.  If the <depth> and <symbol>
 *   match, then the <fn> is called as (fn caller options zloc), and must
 *   return a new zloc.
 */
zprint.zprint.modify_zloc = (function zprint$zprint$modify_zloc(caller,options,zloc){
var vec__54813 = new cljs.core.Keyword(null,"return-altered-zipper","return-altered-zipper",837872379).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
var depth = cljs.core.nth.call(null,vec__54813,(0),null);
var trigger_symbol = cljs.core.nth.call(null,vec__54813,(1),null);
var modify_fn = cljs.core.nth.call(null,vec__54813,(2),null);
var return_altered_zipper_value = vec__54813;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc caller:",caller,"ztype",new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),"return-altered-zipper-value:",return_altered_zipper_value);
} else {
}

if(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))) || ((return_altered_zipper_value == null)))){
return zloc;
} else {
var call_fn_QMARK_ = (function (){var and__20748__auto__ = (((depth == null)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),depth)));
if(and__20748__auto__){
var and__20748__auto____$1 = (function (){var or__20754__auto__ = cljs.core.not.call(null,trigger_symbol);
if(or__20754__auto__){
return or__20754__auto__;
} else {
var and__20748__auto____$1 = zprint.zfns.zsymbol_QMARK_.call(null,zprint.zfns.zfirst.call(null,zloc));
if(cljs.core.truth_(and__20748__auto____$1)){
return cljs.core._EQ_.call(null,trigger_symbol,zprint.zfns.zsexpr.call(null,zprint.zfns.zfirst.call(null,zloc)));
} else {
return and__20748__auto____$1;
}
}
})();
if(cljs.core.truth_(and__20748__auto____$1)){
return modify_fn;
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc: zloc",zprint.zfns.zstring.call(null,zloc),"call-fn?",call_fn_QMARK_);
} else {
}

if(cljs.core.truth_(call_fn_QMARK_)){
var return$ = modify_fn.call(null,caller,options,zloc);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc return:",zprint.zfns.zstring.call(null,return$));
} else {
}

return return$;
} else {
return zloc;
}
}
});
/**
 * Look up the fn-str in the :fn-map.  If the result is another string,
 *   look that up.  Prevent infinite loops.
 */
zprint.zprint.lookup_fn_str = (function zprint$zprint$lookup_fn_str(var_args){
var G__54817 = arguments.length;
switch (G__54817) {
case 3:
return zprint.zprint.lookup_fn_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.zprint.lookup_fn_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.lookup_fn_str.cljs$core$IFn$_invoke$arity$3 = (function (fn_map,fn_str,fn_str_set){
if(cljs.core.truth_(fn_str_set.call(null,fn_str))){
throw (new Error(["Circular :fn-map lookup! fn-str: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_str),"' has already been used in this lookup."," fn-strs in this lookup: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_str_set)].join('')));
} else {
var result = fn_map.call(null,fn_str);
if(cljs.core.truth_(result)){
if(typeof result === 'string'){
return zprint.zprint.lookup_fn_str.call(null,fn_map,result,cljs.core.conj.call(null,fn_str_set,fn_str));
} else {
return result;
}
} else {
return null;
}
}
}));

(zprint.zprint.lookup_fn_str.cljs$core$IFn$_invoke$arity$2 = (function (fn_map,fn_str){
return zprint.zprint.lookup_fn_str.call(null,fn_map,fn_str,cljs.core.PersistentHashSet.EMPTY);
}));

(zprint.zprint.lookup_fn_str.cljs$lang$maxFixedArity = 3);

/**
 * Given a fn-style, which might be a keyword or might be avector with 
 *   one or two options maps, get the correct one based on the :ztype 
 *   in the options. Returns [fn-style options-map]
 */
zprint.zprint.get_correct_options_map = (function zprint$zprint$get_correct_options_map(options,fn_style){
if(cljs.core.vector_QMARK_.call(null,fn_style)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,fn_style),(2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,fn_style),cljs.core.second.call(null,fn_style)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,fn_style),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"zipper","zipper",1500694438),new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.second.call(null,fn_style):cljs.core.nth.call(null,fn_style,(2)))], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_style,null], null);
}
});
/**
 * Given a keyword fn-type, look it up in the fn-type-map and handle
 *   any aliasing and options maps that come up. This includes adding 
 *   options maps to the options. Returns [options fn-style]
 */
zprint.zprint.lookup_fn_type_map = (function zprint$zprint$lookup_fn_type_map(var_args){
var G__54820 = arguments.length;
switch (G__54820) {
case 3:
return zprint.zprint.lookup_fn_type_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.zprint.lookup_fn_type_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.lookup_fn_type_map.cljs$core$IFn$_invoke$arity$3 = (function (options,fn_type,fn_type_set){
if(cljs.core.truth_(fn_type_set.call(null,fn_type))){
throw (new Error(["Circular :fn-type-map lookup! fn-type: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_type),"' has already been used in this lookup."," fn-types in this lookup: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_type_set)].join('')));
} else {
var fn_style = new cljs.core.Keyword(null,"fn-type-map","fn-type-map",608394799).cljs$core$IFn$_invoke$arity$1(options).call(null,fn_type);
if(cljs.core.truth_(fn_style)){
return zprint.zprint.handle_fn_style.call(null,options,fn_style,cljs.core.conj.call(null,fn_type_set,fn_type));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options,fn_type], null);
}
}
}));

(zprint.zprint.lookup_fn_type_map.cljs$core$IFn$_invoke$arity$2 = (function (options,fn_type){
return zprint.zprint.lookup_fn_type_map.call(null,fn_type,cljs.core.PersistentHashSet.EMPTY);
}));

(zprint.zprint.lookup_fn_type_map.cljs$lang$maxFixedArity = 3);

/**
 * Takes current options map and a fn-style, which might be a single
 *   fn-type, and might be a vector with one or two options maps, and handles
 *   the lookups. Returns [new-options fn-type]
 */
zprint.zprint.handle_fn_style = (function zprint$zprint$handle_fn_style(var_args){
var G__54823 = arguments.length;
switch (G__54823) {
case 3:
return zprint.zprint.handle_fn_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.zprint.handle_fn_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.handle_fn_style.cljs$core$IFn$_invoke$arity$3 = (function (options,fn_style,fn_type_set){
if(cljs.core.truth_(fn_style)){
var vec__54824 = zprint.zprint.get_correct_options_map.call(null,options,fn_style);
var new_fn_type = cljs.core.nth.call(null,vec__54824,(0),null);
var options_map = cljs.core.nth.call(null,vec__54824,(1),null);
var vec__54827 = (cljs.core.truth_(new_fn_type)?zprint.zprint.lookup_fn_type_map.call(null,options,new_fn_type,fn_type_set):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options,new_fn_type], null));
var new_options = cljs.core.nth.call(null,vec__54827,(0),null);
var latest_fn_type = cljs.core.nth.call(null,vec__54827,(1),null);
if(cljs.core.truth_(options_map)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,zprint.config.config_and_validate.call(null,"fn-style:",null,new_options,options_map,null)),latest_fn_type], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_options,latest_fn_type], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options,fn_style], null);
}
}));

(zprint.zprint.handle_fn_style.cljs$core$IFn$_invoke$arity$2 = (function (options,fn_style){
return zprint.zprint.handle_fn_style.call(null,options,fn_style,cljs.core.PersistentHashSet.EMPTY);
}));

(zprint.zprint.handle_fn_style.cljs$lang$maxFixedArity = 3);

/**
 * Print a list, which might be a list or an anon fn.  
 *   Lots of work to make a list look good, as that is typically code. 
 *   Presently all of the callers of this are :list or :vector-fn.
 */
zprint.zprint.fzprint_list_STAR_ = (function zprint$zprint$fzprint_list_STAR_(caller,l_str,r_str,p__54832,ind,zloc){
var map__54833 = p__54832;
var map__54833__$1 = cljs.core.__destructure_map.call(null,map__54833);
var options = map__54833__$1;
var fn_map = cljs.core.get.call(null,map__54833__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var user_fn_map = cljs.core.get.call(null,map__54833__$1,new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227));
var one_line_QMARK_ = cljs.core.get.call(null,map__54833__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var fn_style = cljs.core.get.call(null,map__54833__$1,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917));
var no_arg1_QMARK_ = cljs.core.get.call(null,map__54833__$1,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430));
var fn_force_nl = cljs.core.get.call(null,map__54833__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var quote_QMARK_ = cljs.core.get.call(null,map__54833__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317));
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-list*: ind:",ind,"fn-style:",fn_style,"option-fn:",new cljs.core.Keyword(null,"option-fn","option-fn",-959705456).cljs$core$IFn$_invoke$arity$1(options.call(null,caller)),"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options));
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"off","off",606440789))){
return zprint.zprint.fzprint_noformat.call(null,l_str,r_str,options,zloc);
} else {
var max_length = zprint.zprint.get_max_length.call(null,options);
var zloc__$1 = zprint.zprint.modify_zloc.call(null,caller,options,zloc);
var len = zprint.zfns.zcount.call(null,zloc__$1);
var zloc__$2 = (((len > max_length))?zprint.zfns.ztake_append.call(null,max_length,zloc__$1,new cljs.core.Symbol(null,"...","...",-1926939749,null)):zloc__$1);
var len__$1 = zprint.zfns.zcount.call(null,zloc__$2);
var l_str_len = cljs.core.count.call(null,l_str);
var indent = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options.call(null,caller));
var vec__54834 = zprint.zprint.fzprint_up_to_first_zloc.call(null,caller,options,(ind + l_str_len),zloc__$2);
var pre_arg_1_style_vec = cljs.core.nth.call(null,vec__54834,(0),null);
var arg_1_zloc = cljs.core.nth.call(null,vec__54834,(1),null);
var arg_1_count = cljs.core.nth.call(null,vec__54834,(2),null);
var zloc_seq = cljs.core.nth.call(null,vec__54834,(3),null);
var first_data = vec__54834;
var arg_1_coll_QMARK_ = cljs.core.not.call(null,(function (){var or__20754__auto__ = zprint.zfns.zkeyword_QMARK_.call(null,arg_1_zloc);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zfns.zsymbol_QMARK_.call(null,arg_1_zloc);
}
})());
var arg_1_indent_alt_QMARK_ = (function (){var and__20748__auto__ = arg_1_coll_QMARK_;
if(and__20748__auto__){
return fn_style;
} else {
return and__20748__auto__;
}
})();
var fn_str = (((!(arg_1_coll_QMARK_)))?zprint.zfns.zstring.call(null,arg_1_zloc):null);
var fn_type = (cljs.core.truth_(fn_str)?null:(cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,arg_1_zloc))?new cljs.core.Keyword(null,"list","list",765357683):(cljs.core.truth_(zprint.zfns.zmap_QMARK_.call(null,arg_1_zloc))?new cljs.core.Keyword(null,"map","map",1371690461):(cljs.core.truth_(zprint.zfns.zvector_QMARK_.call(null,arg_1_zloc))?new cljs.core.Keyword(null,"vector","vector",1902966158):(cljs.core.truth_(zprint.zfns.zset_QMARK_.call(null,arg_1_zloc))?new cljs.core.Keyword(null,"set","set",304602554):null
)))));
var vec__54837 = (cljs.core.truth_((function (){var and__20748__auto__ = quote_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core.not_EQ_.call(null,cljs.core.get.call(null,fn_map,new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"none","none",1333468478))) || (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,user_fn_map,new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"none","none",1333468478))));
} else {
return and__20748__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,new cljs.core.Keyword(null,"quote","quote",-262615245)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_style,fn_str,fn_type], null));
var fn_style__$1 = cljs.core.nth.call(null,vec__54837,(0),null);
var fn_str__$1 = cljs.core.nth.call(null,vec__54837,(1),null);
var fn_type__$1 = cljs.core.nth.call(null,vec__54837,(2),null);
var fn_style__$2 = (function (){var or__20754__auto__ = fn_style__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = zprint.zprint.lookup_fn_str.call(null,fn_map,fn_str__$1);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = zprint.zprint.lookup_fn_str.call(null,user_fn_map,fn_str__$1);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = fn_map.call(null,fn_type__$1);
if(cljs.core.truth_(or__20754__auto____$3)){
return or__20754__auto____$3;
} else {
return user_fn_map.call(null,fn_type__$1);
}
}
}
}
})();
var fn_style__$3 = (cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.not.call(null,fn_style__$2);
if(and__20748__auto__){
return fn_str__$1;
} else {
return and__20748__auto__;
}
})())?fn_map.call(null,cljs.core.last.call(null,clojure.string.split.call(null,fn_str__$1,/\//))):fn_style__$2);
var fn_style__$4 = (cljs.core.truth_((function (){var and__20748__auto__ = fn_str__$1;
if(cljs.core.truth_(and__20748__auto__)){
return (fn_style__$3 == null);
} else {
return and__20748__auto__;
}
})())?new cljs.core.Keyword(null,"default-not-none","default-not-none",245382312).cljs$core$IFn$_invoke$arity$1(fn_map):fn_style__$3);
var fn_style__$5 = ((cljs.core._EQ_.call(null,fn_style__$4,new cljs.core.Keyword(null,"none","none",1333468478)))?null:fn_style__$4);
var fn_style__$6 = (cljs.core.truth_((function (){var and__20748__auto__ = fn_str__$1;
if(cljs.core.truth_(and__20748__auto__)){
return (fn_style__$5 == null);
} else {
return and__20748__auto__;
}
})())?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(fn_map):fn_style__$5);
var vector_fn_style_QMARK_ = cljs.core.vector_QMARK_.call(null,fn_style__$6);
var vec__54840 = zprint.zprint.handle_fn_style.call(null,options,fn_style__$6);
var options__$1 = cljs.core.nth.call(null,vec__54840,(0),null);
var fn_style__$7 = cljs.core.nth.call(null,vec__54840,(1),null);
var option_fn = new cljs.core.Keyword(null,"option-fn","option-fn",-959705456).cljs$core$IFn$_invoke$arity$1(options__$1.call(null,caller));
var vec__54843 = (cljs.core.truth_(option_fn)?zprint.zprint.call_option_fn.call(null,caller,options__$1,option_fn,zloc__$2):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$1,null], null));
var options__$2 = cljs.core.nth.call(null,vec__54843,(0),null);
var new_options = cljs.core.nth.call(null,vec__54843,(1),null);
var _ = (cljs.core.truth_(option_fn)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.call(null,"fzprint-list* option-fn new options",new_options)):null):null);
var fn_style__$8 = (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"fn-style","fn-style",1330516917).cljs$core$IFn$_invoke$arity$1(new_options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return fn_style__$7;
}
})();
var guide = (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(options__$2);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zprint.guide_debug.call(null,caller,options__$2);
}
})();
var options__$3 = cljs.core.dissoc.call(null,options__$2,new cljs.core.Keyword(null,"guide","guide",-935563924),new cljs.core.Keyword(null,"fn-style","fn-style",1330516917));
var ___$1 = (cljs.core.truth_(guide)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),cljs.core.pr_str.call(null,"fzprint-list* guide:",guide)):null):null);
var vec__54846 = (cljs.core.truth_((function (){var or__20754__auto__ = vector_fn_style_QMARK_;
if(or__20754__auto__){
return or__20754__auto__;
} else {
return new_options;
}
})())?zprint.zprint.fzprint_up_to_first_zloc.call(null,caller,options__$3,(ind + l_str_len),zloc__$2):first_data);
var pre_arg_1_style_vec__$1 = cljs.core.nth.call(null,vec__54846,(0),null);
var arg_1_zloc__$1 = cljs.core.nth.call(null,vec__54846,(1),null);
var arg_1_count__$1 = cljs.core.nth.call(null,vec__54846,(2),null);
var zloc_seq__$1 = cljs.core.nth.call(null,vec__54846,(3),null);
var first_data__$1 = vec__54846;
var fn_style__$9 = ((cljs.core.vector_QMARK_.call(null,fn_style__$8))?cljs.core.first.call(null,fn_style__$8):fn_style__$8);
var vec__54849 = zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options__$3,(ind + indent),first_data__$1);
var pre_arg_2_style_vec = cljs.core.nth.call(null,vec__54849,(0),null);
var arg_2_zloc = cljs.core.nth.call(null,vec__54849,(1),null);
var arg_2_count = cljs.core.nth.call(null,vec__54849,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__54849,(3),null);
var second_data = vec__54849;
var len__$2 = zprint.zfns.zcount_zloc_seq_nc_nws.call(null,zloc_seq__$1);
var vec__54852 = (cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,fn_style__$9,new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615));
if(and__20748__auto__){
var and__20748__auto____$1 = new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1(options__$3.call(null,caller));
if(cljs.core.truth_(and__20748__auto____$1)){
return cljs.core._EQ_.call(null,len__$2,(2));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.update_in.call(null,options__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [caller], null),cljs.core.dissoc,new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419)),new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),(new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$3) - (1))),arg_2_zloc,new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1(options__$3.call(null,caller)),cljs.core.count.call(null,new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1(options__$3.call(null,caller))),"",(1),zprint.zprint.remove_one.call(null,zloc_seq__$1,arg_1_count__$1)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$3,arg_1_zloc__$1,l_str,l_str_len,r_str,len__$2,zloc_seq__$1], null));
var options__$4 = cljs.core.nth.call(null,vec__54852,(0),null);
var arg_1_zloc__$2 = cljs.core.nth.call(null,vec__54852,(1),null);
var l_str__$1 = cljs.core.nth.call(null,vec__54852,(2),null);
var l_str_len__$1 = cljs.core.nth.call(null,vec__54852,(3),null);
var r_str__$1 = cljs.core.nth.call(null,vec__54852,(4),null);
var len__$3 = cljs.core.nth.call(null,vec__54852,(5),null);
var zloc_seq__$2 = cljs.core.nth.call(null,vec__54852,(6),null);
var indent__$1 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options__$4.call(null,caller));
var indent_arg = new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874).cljs$core$IFn$_invoke$arity$1(options__$4.call(null,caller));
var indent_only_QMARK_ = new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1(options__$4.call(null,caller));
var indent__$2 = (cljs.core.truth_(zprint.zprint.body_set.call(null,fn_style__$9))?indent__$1:(function (){var or__20754__auto__ = indent_arg;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return indent__$1;
}
})());
var indent__$3 = (indent__$2 + (l_str_len__$1 - (1)));
var fn_style__$10 = (cljs.core.truth_(guide)?new cljs.core.Keyword(null,"guided","guided",-297376298):fn_style__$9);
var one_line_ok_QMARK_ = zprint.zprint.allow_one_line_QMARK_.call(null,options__$4,len__$3,fn_style__$10);
var one_line_ok_QMARK___$1 = (cljs.core.truth_(indent_only_QMARK_)?null:one_line_ok_QMARK_);
var one_line_ok_QMARK___$2 = ((cljs.core._EQ_.call(null,fn_style__$10,new cljs.core.Keyword(null,"guided","guided",-297376298)))?null:one_line_ok_QMARK___$1);
var one_line_ok_QMARK___$3 = ((cljs.core.not_EQ_.call(null,pre_arg_1_style_vec__$1,new cljs.core.Keyword(null,"noseq","noseq",405935768)))?null:one_line_ok_QMARK___$2);
var one_line_ok_QMARK___$4 = ((cljs.core._EQ_.call(null,fn_style__$10,new cljs.core.Keyword(null,"binding","binding",539932593)))?(function (){var and__20748__auto__ = one_line_ok_QMARK___$3;
if(cljs.core.truth_(and__20748__auto__)){
return zprint.zprint.allow_one_line_QMARK_.call(null,options__$4,zprint.zfns.zcount.call(null,arg_2_zloc),new cljs.core.Keyword(null,"binding-vector","binding-vector",466058868));
} else {
return and__20748__auto__;
}
})():one_line_ok_QMARK___$3);
var one_line_ok_QMARK___$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462).cljs$core$IFn$_invoke$arity$1(options__$4.call(null,caller)))?null:one_line_ok_QMARK___$4);
var fn_style__$11 = (function (){var or__20754__auto__ = zprint.zprint.body_map.call(null,fn_style__$10);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return fn_style__$10;
}
})();
var fn_style__$12 = (cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,fn_style__$11,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(and__20748__auto__){
return zprint.zfns.zlist_QMARK_.call(null,arg_2_zloc);
} else {
return and__20748__auto__;
}
})())?new cljs.core.Keyword(null,"flow","flow",590489032):fn_style__$11);
var fn_style__$13 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615),null,new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"hang","hang",-1007256173),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"guided","guided",-297376298),null], null), null).call(null,fn_style__$12))?fn_style__$12:(((len__$3 < (3)))?null:fn_style__$12));
var fn_style__$14 = (cljs.core.truth_(no_arg1_QMARK_)?(function (){var or__20754__auto__ = zprint.zprint.noarg1_map.call(null,fn_style__$13);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return fn_style__$13;
}
})():fn_style__$13);
var options__$5 = (cljs.core.truth_(no_arg1_QMARK_)?cljs.core.dissoc.call(null,options__$4,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430)):options__$4);
var indent_adj = (l_str_len__$1 - (1));
var default_indent = (cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,arg_1_zloc__$2))?indent__$3:l_str_len__$1);
var arg_1_indent = (((!(arg_1_coll_QMARK_)))?((ind + (l_str_len__$1 + (1))) + cljs.core.count.call(null,fn_str__$1)):null);
var arg_1_indent__$1 = (function (){var or__20754__auto__ = arg_1_indent;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
if(cljs.core.truth_(arg_1_indent_alt_QMARK_)){
return (indent__$3 + ind);
} else {
return null;
}
}
})();
var arg_1_indent__$2 = ((cljs.core._EQ_.call(null,pre_arg_2_style_vec,new cljs.core.Keyword(null,"noseq","noseq",405935768)))?arg_1_indent__$1:(cljs.core.truth_(arg_1_indent__$1)?(indent__$3 + ind):null));
var options__$6 = (((!(arg_1_coll_QMARK_)))?cljs.core.assoc.call(null,options__$5,new cljs.core.Keyword(null,"in-code?","in-code?",194866464),fn_str__$1):options__$5);
var options__$7 = cljs.core.assoc.call(null,options__$6,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342),(cljs.core.long$.call(null,(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$6);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})()) + (1)));
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options__$7))?cljs.core.println.call(null,zprint.zprint.dots.call(null,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$7)),"fzs",fn_str__$1):null);
var new_ind = (indent__$3 + ind);
var one_line_ind = (l_str_len__$1 + ind);
var options__$8 = (cljs.core.truth_(fn_style__$14)?cljs.core.dissoc.call(null,options__$7,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917)):options__$7);
var loptions = zprint.zprint.not_rightmost.call(null,options__$8);
var roptions = options__$8;
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map.call(null,options__$8,l_str__$1),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$8,(ind + (function (){var x__21111__auto__ = (0);
var y__21112__auto__ = (l_str_len__$1 - (1));
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})()),zloc__$2,r_str__$1);
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.call(null,"fzprint-list*:",zprint.zfns.zstring.call(null,zloc__$2),"fn-str",fn_str__$1,"fn-style:",fn_style__$14,"len:",len__$3,"ind:",ind,"indent:",indent__$3,"default-indent:",default_indent,"one-line-ok?",one_line_ok_QMARK___$5,"arg-1-coll?",arg_1_coll_QMARK_,"arg-1-indent:",arg_1_indent__$2,"arg-1-zloc:",zprint.zfns.zstring.call(null,arg_1_zloc__$2),"pre-arg-1-style-vec:",pre_arg_1_style_vec__$1,"l-str:",["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str__$1),"'"].join(''),"l-str-len:",l_str_len__$1,"r-str-vec:",r_str_vec,"indent-adj:",indent_adj,"one-line?",one_line_QMARK_,"indent-only?",indent_only_QMARK_,"in-code?",new cljs.core.Keyword(null,"in-code?","in-code?",194866464).cljs$core$IFn$_invoke$arity$1(options__$8),"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$8),"replacement-string:",new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1(caller.call(null,options__$8)),"force-nl?",new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462).cljs$core$IFn$_invoke$arity$1(caller.call(null,options__$8)),":ztype:",new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options__$8))):null);
var one_line = (((((len__$3 === (0))) && (cljs.core._EQ_.call(null,pre_arg_1_style_vec__$1,new cljs.core.Keyword(null,"noseq","noseq",405935768)))))?new cljs.core.Keyword(null,"empty","empty",767870958):(cljs.core.truth_(one_line_ok_QMARK___$5)?zprint.zprint.fzprint_one_line.call(null,options__$8,one_line_ind,zloc_seq__$2):null));
if(cljs.core._EQ_.call(null,one_line,new cljs.core.Keyword(null,"empty","empty",767870958))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
if(cljs.core.truth_(indent_only_QMARK_)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_indent.call(null,caller,l_str__$1,r_str__$1,options__$8,ind,zloc__$2,fn_style__$14,arg_1_indent__$2),r_str_vec);
} else {
if(cljs.core.truth_(one_line)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,one_line,r_str_vec);
} else {
if(cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"guided","guided",-297376298))){
var zloc_count = cljs.core.count.call(null,zloc_seq__$2);
var local_indent = (cljs.core.truth_(arg_1_indent__$2)?indent__$3:(default_indent + indent_adj));
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_guide.call(null,caller,options__$8,ind,one_line_ind,local_indent,guide,zloc_seq__$2),r_str_vec);
} else {
if(cljs.core.truth_(one_line_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),"fzprint-list*:",fn_str__$1," one-line did not work!!!");
} else {
return null;
}
} else {
if(cljs.core.truth_((cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),"fzprint-list*: fn-style:",fn_style__$14):null))){
return null;
} else {
if(((cljs.core._EQ_.call(null,len__$3,(0))) && (cljs.core._EQ_.call(null,pre_arg_1_style_vec__$1,new cljs.core.Keyword(null,"noseq","noseq",405935768))))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
if(cljs.core._EQ_.call(null,len__$3,(1))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_flow_seq.call(null,caller,roptions,one_line_ind,zloc_seq__$2),r_str_vec);
} else {
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"binding","binding",539932593));
if(and__20748__auto__){
var and__20748__auto____$1 = (len__$3 > (1));
if(and__20748__auto____$1){
return zprint.zfns.zvector_QMARK_.call(null,arg_2_zloc);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
var vec__54855 = zprint.zprint.fzprint_hang_unless_fail.call(null,loptions,(function (){var or__20754__auto__ = arg_1_indent__$2;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (indent__$3 + ind);
}
})(),(indent__$3 + ind),zprint.zprint.fzprint_binding_vec,arg_2_zloc);
var hang_or_flow = cljs.core.nth.call(null,vec__54855,(0),null);
var binding_style_vec = cljs.core.nth.call(null,vec__54855,(1),null);
var binding_style_vec__$1 = ((cljs.core._EQ_.call(null,hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(14)], null)], null),binding_style_vec):binding_style_vec);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),pre_arg_2_style_vec,binding_style_vec__$1,zprint.zprint.concat_no_nil.call(null,zprint.zprint.fzprint_hang_remaining.call(null,caller,options__$8,(indent__$3 + ind),(indent__$3 + ind),zprint.zprint.get_zloc_seq_right.call(null,second_data),new cljs.core.Keyword(null,"binding","binding",539932593)),r_str_vec));
} else {
if(cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586))){
var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right.call(null,first_data__$1);
var zloc_count = cljs.core.count.call(null,zloc_seq__$2);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),zprint.zprint.fzprint_hang.call(null,options__$8,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),arg_1_indent__$2,(indent__$3 + ind),zprint.zprint.fzprint_pairs,zloc_count,zloc_seq_right_first),r_str_vec);
} else {
if(cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"extend","extend",1836484006))){
var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right.call(null,first_data__$1);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),zprint.zprint.prepend_nl.call(null,options__$8,(indent__$3 + ind),zprint.zprint.fzprint_extend.call(null,options__$8,(indent__$3 + ind),zloc_seq_right_first)),r_str_vec);
} else {
if(((((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"fn","fn",-1175266204))) && (cljs.core.not.call(null,zprint.zfns.zlist_QMARK_.call(null,arg_2_zloc))))) || (((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2","arg2",1729550917))) || (((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-force-nl","arg2-force-nl",-818337503))) || (((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072))) || (((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126))) || (cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186))))))))))))){
var vec__54858 = zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options__$8,(ind + indent__$3),second_data);
var pre_arg_3_style_vec = cljs.core.nth.call(null,vec__54858,(0),null);
var arg_3_zloc = cljs.core.nth.call(null,vec__54858,(1),null);
var arg_3_count = cljs.core.nth.call(null,vec__54858,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__54858,(3),null);
var third_data = vec__54858;
var zloc_seq_right_third = zprint.zprint.get_zloc_seq_right.call(null,third_data);
var second_element = zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core.not.call(null,arg_3_zloc))?options__$8:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc);
var vec__54861 = zprint.zprint.style_lines.call(null,loptions,arg_1_indent__$2,second_element);
var line_count = cljs.core.nth.call(null,vec__54861,(0),null);
var max_width = cljs.core.nth.call(null,vec__54861,(1),null);
var first_three = (cljs.core.truth_(second_element)?(function (){var first_two_wo_pre_arg_1 = zprint.zprint.concat_no_nil.call(null,zprint.zprint.fzprint_STAR_.call(null,loptions,(indent__$3 + ind),arg_1_zloc__$2),pre_arg_2_style_vec,second_element,pre_arg_3_style_vec);
var local_options = ((cljs.core.not.call(null,zloc_seq_right_third))?options__$8:loptions);
var first_two_one_line_QMARK_ = zprint.zprint.fzfit_one_line.call(null,local_options,zprint.zprint.style_lines.call(null,local_options,(ind + indent__$3),first_two_wo_pre_arg_1));
var first_two = zprint.zprint.concat_no_nil.call(null,pre_arg_1_style_vec__$1,first_two_wo_pre_arg_1);
if(first_two_one_line_QMARK_){
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.call(null,"fzprint-list*: :arg2-* first two didn't fit:",first_two));
} else {
}
}

return zprint.zprint.concat_no_nil.call(null,first_two,(cljs.core.truth_((function (){var or__20754__auto__ = cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2","arg2",1729550917));
if(or__20754__auto__){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-force-nl","arg2-force-nl",-818337503));
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126));
if(or__20754__auto____$2){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072));
if(or__20754__auto____$3){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186));
if(or__20754__auto____$4){
return or__20754__auto____$4;
} else {
var and__20748__auto__ = zprint.zfns.zvector_QMARK_.call(null,arg_3_zloc);
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,line_count,(1));
} else {
return and__20748__auto__;
}
}
}
}
}
}
})())?zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core.not.call(null,zloc_seq_right_third))?options__$8:loptions),((((cljs.core._EQ_.call(null,pre_arg_3_style_vec,new cljs.core.Keyword(null,"noseq","noseq",405935768))) && (first_two_one_line_QMARK_)))?max_width:(indent__$3 + ind)),(indent__$3 + ind),arg_3_zloc):zprint.zprint.prepend_nl.call(null,options__$8,(indent__$3 + ind),zprint.zprint.fzprint_STAR_.call(null,((cljs.core.not.call(null,zloc_seq_right_third))?options__$8:loptions),(indent__$3 + ind),arg_3_zloc))));
})():null);
if(cljs.core.truth_(first_three)){
if(cljs.core.not.call(null,zloc_seq_right_third)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,first_three,r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,first_three,((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126)))?zprint.zprint.prepend_nl.call(null,options__$8,(indent__$3 + ind),zprint.zprint.fzprint_pairs.call(null,options__$8,(indent__$3 + ind),zloc_seq_right_third)):((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186)))?zprint.zprint.prepend_nl.call(null,options__$8,(indent__$3 + ind),zprint.zprint.fzprint_extend.call(null,options__$8,(indent__$3 + ind),zloc_seq_right_third)):zprint.zprint.fzprint_hang_remaining.call(null,caller,((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072)))?cljs.core.assoc.call(null,options__$8,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)):options__$8),(indent__$3 + ind),(indent__$3 + ind),zloc_seq_right_third,fn_style__$14)
)),r_str_vec);
}
} else {
return null;
}
} else {
if(((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120))) && ((len__$3 > (3))))){
var vec__54864 = zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options__$8,(ind + indent__$3),second_data);
var pre_arg_3_style_vec = cljs.core.nth.call(null,vec__54864,(0),null);
var arg_3_zloc = cljs.core.nth.call(null,vec__54864,(1),null);
var arg_3_count = cljs.core.nth.call(null,vec__54864,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__54864,(3),null);
var third_data = vec__54864;
var vec__54867 = zprint.zprint.fzprint_up_to_next_zloc.call(null,caller,options__$8,(ind + indent__$3),third_data);
var pre_arg_4_style_vec = cljs.core.nth.call(null,vec__54867,(0),null);
var arg_4_zloc = cljs.core.nth.call(null,vec__54867,(1),null);
var arg_4_count = cljs.core.nth.call(null,vec__54867,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__54867,(3),null);
var fourth_data = vec__54867;
var arg_vec_index = (function (){var or__20754__auto__ = zprint.zprint.zfind_seq.call(null,(function (p1__54831_SHARP_){
var or__20754__auto__ = zprint.zfns.zvector_QMARK_.call(null,p1__54831_SHARP_);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
if(cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,p1__54831_SHARP_))){
return zprint.zfns.zvector_QMARK_.call(null,zprint.zfns.zfirst.call(null,p1__54831_SHARP_));
} else {
return null;
}
}
}),zloc_seq__$2);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var doc_string_QMARK_ = typeof zprint.zprint.get_sexpr_or_nil.call(null,options__$8,arg_3_zloc) === 'string';
var mixin_start = ((doc_string_QMARK_)?arg_4_count:arg_3_count);
var mixin_length = ((arg_vec_index - mixin_start) - (1));
var mixins_QMARK_ = (mixin_length > (0));
var doc_string = ((doc_string_QMARK_)?zprint.zprint.fzprint_hang_one.call(null,caller,loptions,(indent__$3 + ind),(indent__$3 + ind),arg_3_zloc):null);
var mixins = ((mixins_QMARK_)?(function (){var mixin_sentinal = zprint.zprint.fzprint_hang_one.call(null,caller,loptions,(indent__$3 + ind),(indent__$3 + ind),((doc_string_QMARK_)?arg_4_zloc:arg_3_zloc));
var vec__54870 = zprint.zprint.style_lines.call(null,loptions,(indent__$3 + ind),mixin_sentinal);
var line_count = cljs.core.nth.call(null,vec__54870,(0),null);
var max_width = cljs.core.nth.call(null,vec__54870,(1),null);
return zprint.zprint.concat_no_nil.call(null,((doc_string_QMARK_)?pre_arg_4_style_vec:pre_arg_3_style_vec),mixin_sentinal,zprint.zprint.fzprint_hang_remaining.call(null,caller,loptions,(max_width + (1)),(((indent__$3 + indent__$3) + ind) - (1)),zprint.zprint.get_zloc_seq_right.call(null,(cljs.core.truth_(doc_string)?fourth_data:third_data)),fn_style__$14,mixin_length));
})():null);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$3,(2)))?options__$8:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),((((doc_string_QMARK_) && (mixins_QMARK_)))?zprint.zprint.concat_no_nil.call(null,pre_arg_3_style_vec,doc_string,zprint.zprint.remove_one_newline.call(null,mixins)):((doc_string_QMARK_)?zprint.zprint.concat_no_nil.call(null,pre_arg_3_style_vec,doc_string):((mixins_QMARK_)?zprint.zprint.remove_one_newline.call(null,mixins):new cljs.core.Keyword(null,"noseq","noseq",405935768)
))),zprint.zprint.fzprint_hang_remaining.call(null,caller,zprint.zprint.noarg1.call(null,options__$8,fn_style__$14),(indent__$3 + ind),(indent__$3 + ind),cljs.core.nthnext.call(null,zloc_seq__$2,((mixins_QMARK_)?arg_vec_index:((doc_string_QMARK_)?arg_4_count:arg_3_count))),fn_style__$14),r_str_vec);
} else {
if(((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953))) || (((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg1","arg1",951899358))) || (((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718))) || (cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329))))))))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$3,(2)))?options__$8:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)))?zprint.zprint.prepend_nl.call(null,options__$8,(indent__$3 + ind),zprint.zprint.fzprint_pairs.call(null,options__$8,(indent__$3 + ind),zprint.zprint.get_zloc_seq_right.call(null,second_data))):zprint.zprint.fzprint_hang_remaining.call(null,caller,zprint.zprint.noarg1.call(null,options__$8,fn_style__$14),(indent__$3 + ind),(indent__$3 + ind),zprint.zprint.get_zloc_seq_right.call(null,second_data),fn_style__$14)),r_str_vec);
} else {
if(cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050))){
var zloc_seq_right_second = zprint.zprint.get_zloc_seq_right.call(null,second_data);
if(cljs.core.truth_(zprint.zfns.zvector_QMARK_.call(null,arg_2_zloc))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(indent__$3 + ind),arg_1_zloc__$2),pre_arg_2_style_vec,zprint.zprint.prepend_nl.call(null,options__$8,(indent__$3 + ind),zprint.zprint.fzprint_STAR_.call(null,loptions,(indent__$3 + ind),arg_2_zloc)),zprint.zprint.prepend_nl.call(null,options__$8,(indent__$3 + ind),zprint.zprint.fzprint_extend.call(null,options__$8,(indent__$3 + ind),zloc_seq_right_second)),r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),arg_1_zloc__$2),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$3,(2)))?options__$8:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),zprint.zprint.prepend_nl.call(null,options__$8,(indent__$3 + ind),zprint.zprint.fzprint_extend.call(null,options__$8,(indent__$3 + ind),zloc_seq_right_second)),r_str_vec);

}
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"wrap","wrap",851669987));
if(or__20754__auto__){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054).cljs$core$IFn$_invoke$arity$1(caller.call(null,options__$8));
}
})())){
var new_ind__$1 = (indent__$3 + ind);
var coll_print = zprint.zprint.fzprint_seq.call(null,options__$8,new_ind__$1,zloc_seq__$2);
var ___$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.call(null,"fzprint-list*: :wrap coll-print:",coll_print)):null);
var wrap_coll_QMARK_ = new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571).cljs$core$IFn$_invoke$arity$1(caller.call(null,options__$8));
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.not.call(null,wrap_coll_QMARK_);
if(and__20748__auto__){
return zprint.zprint.any_zcoll_QMARK_.call(null,options__$8,new_ind__$1,zloc__$2);
} else {
return and__20748__auto__;
}
})())){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,cljs.core.apply.call(null,zprint.zprint.concat_no_nil,zprint.zprint.precede_w_nl.call(null,options__$8,new_ind__$1,coll_print,new cljs.core.Keyword(null,"no-nl-first","no-nl-first",-1507054608),new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043).cljs$core$IFn$_invoke$arity$1(caller.call(null,options__$8)))),r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.call(null,"fzprint-list*: wrap coll-print:",coll_print));
} else {
}

return zprint.zprint.wrap_zmap.call(null,caller,options__$8,(ind + l_str_len__$1),new_ind__$1,coll_print);
})()
,r_str_vec);
}
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,pre_arg_1_style_vec__$1,(((!((len__$3 === (0)))))?zprint.zprint.fzprint_STAR_.call(null,loptions,(l_str_len__$1 + ind),arg_1_zloc__$2):new cljs.core.Keyword(null,"noseq","noseq",405935768)),(((!((len__$3 === (0)))))?(function (){var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right.call(null,first_data__$1);
if(zloc_seq_right_first){
if(cljs.core.truth_(arg_1_indent__$2)){
var result = zprint.zprint.fzprint_hang_remaining.call(null,caller,zprint.zprint.noarg1.call(null,options__$8,fn_style__$14),((cljs.core._EQ_.call(null,fn_style__$14,new cljs.core.Keyword(null,"flow","flow",590489032)))?(indent__$3 + ind):arg_1_indent__$2),(indent__$3 + ind),zloc_seq_right_first,fn_style__$14);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.call(null,"fzprint-list*: r-str-vec:",r_str_vec,"result:",result));
} else {
}

return result;
} else {
var local_indent = ((default_indent + ind) + indent_adj);
return zprint.zprint.concat_no_nil.call(null,zprint.zprint.fzprint_flow_seq.call(null,caller,zprint.zprint.noarg1.call(null,options__$8,fn_style__$14),local_indent,zloc_seq_right_first,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"newline-first","newline-first",-638470720)));
}
} else {
return new cljs.core.Keyword(null,"noseq","noseq",405935768);
}
})():new cljs.core.Keyword(null,"noseq","noseq",405935768)),r_str_vec);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Pretty print and focus style a :list element.
 */
zprint.zprint.fzprint_list = (function zprint$zprint$fzprint_list(options,ind,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-list"));
} else {
}

return zprint.zprint.fzprint_list_STAR_.call(null,new cljs.core.Keyword(null,"list","list",765357683),"(",")",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Pretty print and focus style a fn element.
 */
zprint.zprint.fzprint_anon_fn = (function zprint$zprint$fzprint_anon_fn(options,ind,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-anon-fn"));
} else {
}

return zprint.zprint.fzprint_list_STAR_.call(null,new cljs.core.Keyword(null,"list","list",765357683),"#(",")",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Return true if there are any collections in the collection.
 */
zprint.zprint.any_zcoll_QMARK_ = (function zprint$zprint$any_zcoll_QMARK_(options,ind,zloc){
var coll_QMARK__seq = zprint.zfns.zmap.call(null,zprint.zfns.zcoll_QMARK_,zloc);
return cljs.core.reduce.call(null,(function (p1__54873_SHARP_,p2__54874_SHARP_){
var or__20754__auto__ = p1__54873_SHARP_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return p2__54874_SHARP_;
}
}),null,coll_QMARK__seq);
});
/**
 * Given the output from fzprint-seq, which is a style-vec in
 *   the making without spacing, but with extra [] around the elements,
 *   wrap the elements to the right margin. cur-ind is where we are now,
 *   and ind is where we should be after a newline.
 */
zprint.zprint.wrap_zmap = (function zprint$zprint$wrap_zmap(caller,p__54875,cur_ind,ind,coll_print){
var map__54876 = p__54875;
var map__54876__$1 = cljs.core.__destructure_map.call(null,map__54876);
var options = map__54876__$1;
var map__54877 = cljs.core.get.call(null,map__54876__$1,caller);
var map__54877__$1 = cljs.core.__destructure_map.call(null,map__54877);
var wrap_after_multi_QMARK_ = cljs.core.get.call(null,map__54877__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var respect_nl_QMARK_ = cljs.core.get.call(null,map__54877__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var width = cljs.core.get.call(null,map__54876__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__54876__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var last_index = (cljs.core.count.call(null,coll_print) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt.call(null,rightcnt);
var cur_seq = coll_print;
var cur_ind__$1 = cur_ind;
var index = (0);
var previous_newline_QMARK_ = false;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cur_seq)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"wrap-zmap: out:",out));
} else {
}

return out;
} else {
var next_seq = cljs.core.first.call(null,cur_seq);
if(cljs.core.truth_(next_seq)){
var multi_QMARK_ = (cljs.core.count.call(null,cljs.core.first.call(null,cur_seq)) > (1));
var this_seq = cljs.core.first.call(null,cur_seq);
var _ = zprint.zprint.log_lines.call(null,options,"wrap-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"wrap-zmap: ind:",ind,"this-seq:",this_seq)):null);
var vec__54881 = zprint.zprint.style_lines.call(null,options,ind,this_seq);
var linecnt = cljs.core.nth.call(null,vec__54881,(0),null);
var max_width = cljs.core.nth.call(null,vec__54881,(1),null);
var lines = cljs.core.nth.call(null,vec__54881,(2),null);
var last_width = cljs.core.last.call(null,lines);
var len = (last_width - ind);
var len__$1 = (function (){var x__21111__auto__ = (0);
var y__21112__auto__ = len;
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var comment_QMARK_ = (cljs.core.truth_(respect_nl_QMARK_)?null:cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq),(2)),new cljs.core.Keyword(null,"comment","comment",532206069)));
var comment_inline_QMARK_ = (cljs.core.truth_(respect_nl_QMARK_)?null:cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)));
var width__$1 = ((cljs.core._EQ_.call(null,index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = (function (){var and__20748__auto__ = (!(newline_QMARK_));
if(and__20748__auto__){
var and__20748__auto____$1 = (((index === (0))) || (cljs.core.not.call(null,comment_QMARK_)));
if(and__20748__auto____$1){
var or__20754__auto__ = (index === (0));
if(or__20754__auto__){
return or__20754__auto__;
} else {
var and__20748__auto____$2 = ((multi_QMARK_)?cljs.core._EQ_.call(null,linecnt,(1)):true);
if(and__20748__auto____$2){
return ((cur_ind__$1 + len__$1) <= width__$1);
} else {
return and__20748__auto____$2;
}
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
var new_ind = (cljs.core.truth_((function (){var or__20754__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return comment_inline_QMARK_;
}
})())?(width__$1 + (1)):((((multi_QMARK_) && ((((linecnt > (1))) && (cljs.core.not.call(null,wrap_after_multi_QMARK_))))))?width__$1:((fit_QMARK_)?((cur_ind__$1 + len__$1) + (1)):((newline_QMARK_)?ind:((ind + len__$1) + (1))
))));
var G__54884 = cljs.core.next.call(null,cur_seq);
var G__54885 = new_ind;
var G__54886 = (index + (1));
var G__54887 = newline_QMARK_;
var G__54888 = cljs.core.concat.call(null,out,((fit_QMARK_)?(((!((index === (0)))))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(15)], null)], null),this_seq):this_seq):((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,(function (){var this_seq_next = cljs.core.first.call(null,cljs.core.next.call(null,cur_seq));
var newline_next_QMARK_ = (cljs.core.truth_(this_seq_next)?cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq_next),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323)):null);
if(cljs.core.truth_(newline_next_QMARK_)){
return (0);
} else {
return (new_ind - (1));
}
})()))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(21)], null)], null):((previous_newline_QMARK_)?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(16)], null)], null),this_seq):zprint.zprint.prepend_nl.call(null,options,ind,this_seq)))));
cur_seq = G__54884;
cur_ind__$1 = G__54885;
index = G__54886;
previous_newline_QMARK_ = G__54887;
out = G__54888;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Given a seq from fzprint-seq, count the newlines and contiguous comments
 *   at the beginning of the list.  A comment preceded by a newline or comment
 *   doesn't count.
 */
zprint.zprint.count_comments_and_newlines = (function zprint$zprint$count_comments_and_newlines(coll_print){
var cur_seq = coll_print;
var previous_comment_QMARK_ = false;
var previous_newline_QMARK_ = false;
var comment_and_newline_count = (0);
while(true){
if(cljs.core.not.call(null,cur_seq)){
return comment_and_newline_count;
} else {
var element_type = cljs.core.nth.call(null,cljs.core.ffirst.call(null,cur_seq),(2));
var comment_QMARK_ = ((cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var newline_QMARK_ = cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"newline","newline",1790071323));
if((!(((newline_QMARK_) || (comment_QMARK_))))){
return comment_and_newline_count;
} else {
var G__54889 = cljs.core.next.call(null,cur_seq);
var G__54890 = comment_QMARK_;
var G__54891 = newline_QMARK_;
var G__54892 = ((comment_QMARK_)?((previous_newline_QMARK_)?(comment_and_newline_count - (1)):comment_and_newline_count):(comment_and_newline_count + (1)));
cur_seq = G__54889;
previous_comment_QMARK_ = G__54890;
previous_newline_QMARK_ = G__54891;
comment_and_newline_count = G__54892;
continue;
}
}
break;
}
});
/**
 * Given a zloc-seq, count the newlines and contiguous comments
 *   at the beginning of the list.  A comment preceded by a newline or comment
 *   doesn't count.
 */
zprint.zprint.zcount_comments_and_newlines = (function zprint$zprint$zcount_comments_and_newlines(zloc_seq){
var cur_seq = zloc_seq;
var previous_comment_QMARK_ = false;
var previous_newline_QMARK_ = false;
var comment_and_newline_count = (0);
while(true){
if(cljs.core.not.call(null,cur_seq)){
return comment_and_newline_count;
} else {
var tag = zprint.zfns.ztag.call(null,cljs.core.first.call(null,cur_seq));
var comment_QMARK_ = cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment","comment",532206069));
var newline_QMARK_ = cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"newline","newline",1790071323));
if((!(((newline_QMARK_) || (comment_QMARK_))))){
return comment_and_newline_count;
} else {
var G__54893 = cljs.core.next.call(null,cur_seq);
var G__54894 = comment_QMARK_;
var G__54895 = newline_QMARK_;
var G__54896 = ((comment_QMARK_)?((previous_newline_QMARK_)?(comment_and_newline_count - (1)):comment_and_newline_count):(comment_and_newline_count + (1)));
cur_seq = G__54893;
previous_comment_QMARK_ = G__54894;
previous_newline_QMARK_ = G__54895;
comment_and_newline_count = G__54896;
continue;
}
}
break;
}
});
/**
 * Return information to be added to the output vector along
 *   with other information [param-map previous-data out].  Will do an
 *   fzprint* on zloc unless next-seq has data in it to use.
 */
zprint.zprint.guided_output = (function zprint$zprint$guided_output(caller,p__54897,zloc,rightmost_zloc_QMARK_,next_guide,cur_index,guide_seq,element_index,index,p__54898,mark_map,p__54899,out){
var map__54900 = p__54897;
var map__54900__$1 = cljs.core.__destructure_map.call(null,map__54900);
var options = map__54900__$1;
var map__54901 = cljs.core.get.call(null,map__54900__$1,caller);
var map__54901__$1 = cljs.core.__destructure_map.call(null,map__54901);
var wrap_after_multi_QMARK_ = cljs.core.get.call(null,map__54901__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var wrap_multi_QMARK_ = cljs.core.get.call(null,map__54901__$1,new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774));
var respect_nl_QMARK_ = cljs.core.get.call(null,map__54901__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var width = cljs.core.get.call(null,map__54900__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__54900__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var one_line_QMARK_ = cljs.core.get.call(null,map__54900__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var map__54902 = p__54898;
var map__54902__$1 = cljs.core.__destructure_map.call(null,map__54902);
var param_map = map__54902__$1;
var ind = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"ind","ind",-20917030));
var cur_ind = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870));
var indent = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var excess_guided_newline_count = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"excess-guided-newline-count","excess-guided-newline-count",117957353));
var rightcnt__$1 = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var group_seq = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027));
var all_fit_QMARK_ = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"all-fit?","all-fit?",1706526126));
var last_cur_index = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"last-cur-index","last-cur-index",-1587510673));
var spaces = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"spaces","spaces",365984563));
var one_line_ind = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"one-line-ind","one-line-ind",-1359589453));
var align_key = cljs.core.get.call(null,map__54902__$1,new cljs.core.Keyword(null,"align-key","align-key",2084823123));
var vec__54903 = p__54899;
var previous_newline_QMARK_ = cljs.core.nth.call(null,vec__54903,(0),null);
var previous_guided_newline_QMARK_ = cljs.core.nth.call(null,vec__54903,(1),null);
var unguided_newline_out_QMARK_ = cljs.core.nth.call(null,vec__54903,(2),null);
var previous_comment_QMARK_ = cljs.core.nth.call(null,vec__54903,(3),null);
var previous_data = vec__54903;
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"guided-output: zloc:",cljs.core.pr_str.call(null,zprint.zfns.zstring.call(null,zloc)));
} else {
}

if(cljs.core.truth_((function (){var and__20748__auto__ = group_seq;
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core.empty_QMARK_.call(null,group_seq)) && (cljs.core.not.call(null,zloc)));
} else {
return and__20748__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,param_map,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027)),previous_data,out], null);
} else {
var group_seq__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.empty_QMARK_.call(null,group_seq);
if(and__20748__auto__){
return zloc;
} else {
return and__20748__auto__;
}
})())?null:group_seq);
var uneval_QMARK_ = cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
var guided_newline_QMARK_ = cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"newline","newline",1790071323));
var do_pairs_QMARK_ = ((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"pair-end","pair-end",1334963659))) || (((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-pair-group","element-pair-group",2021364237))) || (cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-pair-*","element-pair-*",281146227))))));
var options__$1 = ((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-guide","element-guide",384986063)))?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"guide","guide",-935563924),cljs.core.second.call(null,guide_seq)):options);
var incoming_seq = null;
var incoming_seq__$1 = ((guided_newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)], null):incoming_seq);
var options__$2 = (cljs.core.truth_(rightmost_zloc_QMARK_)?options__$1:zprint.zprint.not_rightmost.call(null,options__$1));
var align_ind = (cljs.core.truth_(align_key)?cljs.core.get.call(null,mark_map,align_key):null);
var align_ind__$1 = (cljs.core.truth_(align_ind)?(cljs.core.truth_(spaces)?(align_ind + spaces):align_ind):null);
var incoming_lines = zprint.zprint.style_lines.call(null,options__$2,(indent + ind),incoming_seq__$1);
var align_spaces = (cljs.core.truth_(align_ind__$1)?(function (){var x__21111__auto__ = (0);
var y__21112__auto__ = (align_ind__$1 - cur_ind);
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})():null);
var group_newline_QMARK_ = (cljs.core.truth_(group_seq__$1)?cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,cljs.core.first.call(null,group_seq__$1)),new cljs.core.Keyword(null,"newline","newline",1790071323)):null);
var regular_space = (cljs.core.truth_((function (){var or__20754__auto__ = previous_newline_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = (element_index === (0));
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
return group_newline_QMARK_;
}
}
})())?(0):(1));
var additional_spaces = (function (){var or__20754__auto__ = align_spaces;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = spaces;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return (0);
}
}
})();
var beyond_cur_ind = (function (){var x__21111__auto__ = additional_spaces;
var y__21112__auto__ = regular_space;
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})();
var this_spaces = (cljs.core.truth_(previous_newline_QMARK_)?(beyond_cur_ind + cur_ind):beyond_cur_ind);
var this_ind = (beyond_cur_ind + cur_ind);
var early_next_ind = (function (){var or__20754__auto__ = align_ind__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return ((((element_index === (0)))?one_line_ind:(indent + ind)) + (function (){var or__20754__auto____$1 = spaces;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return (0);
}
})());
}
})();
var this_early_next_ind = early_next_ind;
var vec__54906 = ((((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328))) || (cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-newline-best-*","element-newline-best-*",-1915830000)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,group_seq__$1], null):((((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-best","element-best",1084358317))) || (((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-best-first","element-best-first",-332741267))) || (cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zloc], null)], null):null));
var do_hang_remaining_QMARK_ = cljs.core.nth.call(null,vec__54906,(0),null);
var hang_remaining_seq = cljs.core.nth.call(null,vec__54906,(1),null);
var try_this_QMARK_ = (function (){var and__20748__auto__ = (function (){var or__20754__auto__ = zloc;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = do_pairs_QMARK_;
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
return group_seq__$1;
}
}
})();
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = cljs.core.not.call(null,previous_newline_QMARK_);
if(and__20748__auto____$1){
var and__20748__auto____$2 = ((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-best-first","element-best-first",-332741267)))?all_fit_QMARK_:true);
if(cljs.core.truth_(and__20748__auto____$2)){
var and__20748__auto____$3 = (!(guided_newline_QMARK_));
if(and__20748__auto____$3){
var or__20754__auto__ = do_hang_remaining_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (((cur_ind < width)) && ((this_ind < width)));
}
} else {
return and__20748__auto____$3;
}
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
var this_result = (cljs.core.truth_(try_this_QMARK_)?((do_pairs_QMARK_)?zprint.zprint.fzprint_pairs.call(null,zprint.zprint.in_hang.call(null,options__$2),this_ind,group_seq__$1):(cljs.core.truth_(do_hang_remaining_QMARK_)?zprint.zprint.fzprint_hang_remaining.call(null,caller,options__$2,this_ind,early_next_ind,hang_remaining_seq,null):((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-vec","element-binding-vec",936510284)))?zprint.zprint.fzprint_binding_vec.call(null,zprint.zprint.in_hang.call(null,options__$2),this_ind,zloc):((((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))) || (cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893)))))?zprint.zprint.fzprint_pairs.call(null,zprint.zprint.in_hang.call(null,options__$2),this_ind,group_seq__$1,new cljs.core.Keyword(null,"binding","binding",539932593)):zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.in_hang.call(null,options__$2),this_ind,zloc)
)))):null);
var this_result__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = do_hang_remaining_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_result),(2)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,this_result)," ")));
} else {
return and__20748__auto__;
}
})())?cljs.core.next.call(null,this_result):this_result);
var this_lines = zprint.zprint.style_lines.call(null,options__$2,this_ind,this_result__$1);
var wrap_multi_QMARK___$1 = ((((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))) || (cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893)))))?true:wrap_multi_QMARK_);
var this_multi_QMARK_ = (cljs.core.truth_(this_result__$1)?(cljs.core.count.call(null,this_result__$1) > (1)):null);
var this_linecnt = (cljs.core.truth_(this_lines)?cljs.core.first.call(null,this_lines):null);
var this_fit_QMARK_ = (function (){var and__20748__auto__ = (function (){var or__20754__auto__ = zloc;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = do_pairs_QMARK_;
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
return group_seq__$1;
}
}
})();
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = (!(cljs.core.empty_QMARK_.call(null,this_result__$1)));
if(and__20748__auto____$1){
if(cljs.core.truth_(this_multi_QMARK_)){
var or__20754__auto__ = wrap_multi_QMARK___$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (this_linecnt <= (1));
}
} else {
return true;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
var output_seq = (function (){var or__20754__auto__ = this_result__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return incoming_seq__$1;
}
})();
var output_newline_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,output_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var fail_fit_QMARK_ = (function (){var or__20754__auto__ = guided_newline_QMARK_;
if(or__20754__auto__){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = output_newline_QMARK_;
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,output_seq),(2)),new cljs.core.Keyword(null,"indent","indent",-148200125));
if(or__20754__auto____$2){
return or__20754__auto____$2;
} else {
var or__20754__auto____$3 = cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,output_seq),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405));
if(or__20754__auto____$3){
return or__20754__auto____$3;
} else {
var or__20754__auto____$4 = (((!((element_index === (0))))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,output_seq),(2)),new cljs.core.Keyword(null,"comment","comment",532206069))));
if(or__20754__auto____$4){
return or__20754__auto____$4;
} else {
var and__20748__auto__ = try_this_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,this_fit_QMARK_);
} else {
return and__20748__auto__;
}
}
}
}
}
}
})();
var spaces__$1 = (cljs.core.truth_(spaces)?(cljs.core.truth_((function (){var and__20748__auto__ = try_this_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,this_fit_QMARK_);
} else {
return and__20748__auto__;
}
})())?null:spaces):null);
var align_ind__$2 = (cljs.core.truth_(align_ind__$1)?(cljs.core.truth_((function (){var and__20748__auto__ = try_this_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,this_fit_QMARK_);
} else {
return and__20748__auto__;
}
})())?null:align_ind__$1):null);
var next_ind = (function (){var or__20754__auto__ = align_ind__$2;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return ((((element_index === (0)))?one_line_ind:(indent + ind)) + (function (){var or__20754__auto____$1 = spaces__$1;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return (0);
}
})());
}
})();
var early_next_ind__$1 = next_ind;
var test_fit_QMARK_ = (function (){var and__20748__auto__ = cljs.core.not.call(null,try_this_QMARK_);
if(and__20748__auto__){
var and__20748__auto____$1 = (function (){var or__20754__auto__ = align_ind__$2;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return spaces__$1;
}
})();
if(cljs.core.truth_(and__20748__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639).cljs$core$IFn$_invoke$arity$1(options__$2));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
var try_next_QMARK_ = (function (){var and__20748__auto__ = (function (){var or__20754__auto__ = zloc;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = do_pairs_QMARK_;
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
return group_seq__$1;
}
}
})();
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core.not.call(null,this_fit_QMARK_)) && ((!(output_newline_QMARK_))));
} else {
return and__20748__auto__;
}
})();
var next_result = (cljs.core.truth_((function (){var and__20748__auto__ = test_fit_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return try_next_QMARK_;
} else {
return and__20748__auto__;
}
})())?((do_pairs_QMARK_)?zprint.zprint.fzprint_pairs.call(null,zprint.zprint.in_hang.call(null,options__$2),next_ind,group_seq__$1):zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.in_hang.call(null,options__$2),next_ind,zloc)):null);
var first_next_result = next_result;
var next_ind__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = try_next_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = test_fit_QMARK_;
if(cljs.core.truth_(and__20748__auto____$1)){
return cljs.core.empty_QMARK_.call(null,next_result);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?(((element_index === (0)))?one_line_ind:(indent + ind)):next_ind);
var next_result__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = try_next_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.empty_QMARK_.call(null,next_result);
} else {
return and__20748__auto__;
}
})())?((do_pairs_QMARK_)?zprint.zprint.fzprint_pairs.call(null,options__$2,next_ind__$1,group_seq__$1):(cljs.core.truth_(do_hang_remaining_QMARK_)?zprint.zprint.fzprint_hang_remaining.call(null,caller,options__$2,next_ind__$1,next_ind__$1,hang_remaining_seq,null):((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-vec","element-binding-vec",936510284)))?zprint.zprint.fzprint_binding_vec.call(null,options__$2,next_ind__$1,zloc):((((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))) || (cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893)))))?zprint.zprint.fzprint_pairs.call(null,options__$2,next_ind__$1,group_seq__$1,new cljs.core.Keyword(null,"binding","binding",539932593)):zprint.zprint.fzprint_STAR_.call(null,options__$2,next_ind__$1,zloc)
)))):next_result);
var next_result__$2 = (cljs.core.truth_((function (){var and__20748__auto__ = (function (){var or__20754__auto__ = do_hang_remaining_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return ((cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893))) || (cljs.core._EQ_.call(null,next_guide,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))));
}
})();
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,next_result__$1),(2)),new cljs.core.Keyword(null,"indent","indent",-148200125))) && (clojure.string.starts_with_QMARK_.call(null,cljs.core.ffirst.call(null,next_result__$1),"\n")));
} else {
return and__20748__auto__;
}
})())?cljs.core.next.call(null,next_result__$1):next_result__$1);
var next_lines = zprint.zprint.style_lines.call(null,options__$2,next_ind__$1,next_result__$2);
var output_seq__$1 = (function (){var or__20754__auto__ = next_result__$2;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return output_seq;
}
})();
var fail_fit_QMARK___$1 = (function (){var or__20754__auto__ = fail_fit_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return next_result__$2;
}
})();
var comment_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,output_seq__$1),(2)),new cljs.core.Keyword(null,"comment","comment",532206069));
var comment_inline_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,output_seq__$1),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405));
var newline_QMARK_ = ((((cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,output_seq__$1),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,output_seq__$1),(1))))) || (guided_newline_QMARK_));
var indent_QMARK_ = ((cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,output_seq__$1),(2)),new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,output_seq__$1),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))));
var multi_QMARK_ = (cljs.core.truth_(output_seq__$1)?(cljs.core.count.call(null,output_seq__$1) > (1)):null);
var vec__54909 = (cljs.core.truth_(output_seq__$1)?(function (){var or__20754__auto__ = next_lines;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = this_lines;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return incoming_lines;
}
}
})():null);
var linecnt = cljs.core.nth.call(null,vec__54909,(0),null);
var max_width = cljs.core.nth.call(null,vec__54909,(1),null);
var lines = cljs.core.nth.call(null,vec__54909,(2),null);
var last_width = cljs.core.last.call(null,lines);
var fit_QMARK_ = cljs.core.not.call(null,fail_fit_QMARK___$1);
var new_ind = ((((comment_QMARK_) || (comment_inline_QMARK_)))?(width + (1)):(cljs.core.truth_((function (){var and__20748__auto__ = uneval_QMARK_;
if(and__20748__auto__){
return previous_newline_QMARK_;
} else {
return and__20748__auto__;
}
})())?(width + (1)):(cljs.core.truth_((function (){var and__20748__auto__ = multi_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return (((linecnt > (1))) && (cljs.core.not.call(null,wrap_after_multi_QMARK_)));
} else {
return and__20748__auto__;
}
})())?(width + (1)):(cljs.core.truth_((function (){var and__20748__auto__ = multi_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return (linecnt > (1));
} else {
return and__20748__auto__;
}
})())?last_width:((fit_QMARK_)?last_width:((newline_QMARK_)?(((element_index === (0)))?one_line_ind:(indent + ind)):last_width
))))));
var param_map__$1 = cljs.core.dissoc.call(null,param_map,new cljs.core.Keyword(null,"excess-guided-newline-count","excess-guided-newline-count",117957353));
var param_map__$2 = cljs.core.assoc.call(null,param_map__$1,new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),new_ind,new cljs.core.Keyword(null,"all-fit?","all-fit?",1706526126),(function (){var and__20748__auto__ = fit_QMARK_;
if(and__20748__auto__){
return all_fit_QMARK_;
} else {
return and__20748__auto__;
}
})());
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output: ------ incoming out:",zprint.ansi.color_str.call(null,new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$2).call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var out_len = cljs.core.count.call(null,out);
var out_drop = ((0.8 * out_len) | (0));
var out_drop__$1 = ((((out_len - out_drop) < (10)))?(out_len - (10)):out_drop);
return zprint.zprint.condense_depth.call(null,(1),out);
})())),new cljs.core.Keyword(null,"blue","blue",-622100620)));
} else {
}

if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.call(null,"guided-output; ------ next-guide:",next_guide));
} else {
}

if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output: ------ output-seq:",zprint.ansi.color_str.call(null,new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$2).call(null,cljs.core.PersistentArrayMap.EMPTY,zprint.zprint.condense_depth.call(null,(1),output_seq__$1)),new cljs.core.Keyword(null,"green","green",-945526839)));
} else {
}

if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.call(null,"guided-output: ------ mark-map:",mark_map));
} else {
}

if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output:","\ncaller:",caller,"\nindex:",index,"\nzloc?",(!(cljs.core.empty_QMARK_.call(null,zloc))),"\ngroup-seq-len:",cljs.core.count.call(null,group_seq__$1),"\ngroup-newline?",group_newline_QMARK_,"\ncur-index:",cur_index,"\nelement-index:",element_index,"\nrightmost-zloc?",rightmost_zloc_QMARK_,"\none-line?",one_line_QMARK_,"\ndo-pairs?",do_pairs_QMARK_,"\nindent?",indent_QMARK_,"\nnewline?",newline_QMARK_,"\nguided-newline?",guided_newline_QMARK_,"\noutput-newline?",output_newline_QMARK_,"\nexcess-guided-newline-count:",excess_guided_newline_count,"\nprevious-newline?",previous_newline_QMARK_,"\nunguided-newline-out?",unguided_newline_out_QMARK_,"\nprevious-comment?",previous_comment_QMARK_,"\nalign-key:",align_key,"\nalign-ind:",align_ind__$2,"\nalign-spaces:",align_spaces,"\nspaces:",spaces__$1,"\nTHIS:","","\n this-lines:",this_lines,"\n this-ind:",this_ind,"\n this-early-next-ind:",this_early_next_ind,"\n this-spaces:",this_spaces,"\n this-multi?",this_multi_QMARK_,"\n this-linecnt:",this_linecnt,"\n try-this?",try_this_QMARK_,"\n this-fit?",this_fit_QMARK_,"\n fail-fit?",fail_fit_QMARK___$1,"\n do-hang-remaining?",do_hang_remaining_QMARK_,"\n regular-space:",regular_space,"\n additional-spaces:",additional_spaces,"\n beyond-cur-ind:",beyond_cur_ind,"\nNEXT:","","\n next-lines:",next_lines,"\n test-fit?",test_fit_QMARK_,"\n try-next?",try_next_QMARK_,"\n early-next-ind:",early_next_ind__$1,"\n next-ind:",next_ind__$1,"\n (+ indent ind):",(indent + ind),"\nmulti?",multi_QMARK_,"\nwrap-multi?",wrap_multi_QMARK___$1,"\nlines:",lines,"\nlinecnt:",linecnt,"\nmax-width:",max_width,"\nlast-width:",last_width,"\nind:",ind,"\nindent:",indent,"\ncur-ind:",cur_ind,"\nnew-ind:",new_ind,"\nwidth:",width,"\nfit?",fit_QMARK_,"\nall-fit?",all_fit_QMARK_,"\nfail-fit?",fail_fit_QMARK___$1);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_map__$2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [newline_QMARK_,guided_newline_QMARK_,(((!(guided_newline_QMARK_))) && (((cljs.core.not.call(null,(function (){var and__20748__auto____$1 = previous_comment_QMARK_;
if(cljs.core.truth_(and__20748__auto____$1)){
return newline_QMARK_;
} else {
return and__20748__auto____$1;
}
})())) && ((((!(fit_QMARK_))) && (newline_QMARK_)))))),((comment_QMARK_) || (comment_inline_QMARK_))], null),(function (){var guided_output_out = ((fit_QMARK_)?(((!((index === (0)))))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks.call(null,this_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(25)], null)], null),output_seq__$1):output_seq__$1):((newline_QMARK_)?zprint.zprint.concat_no_nil.call(null,(cljs.core.truth_((function (){var and__20748__auto__ = excess_guided_newline_count;
if(cljs.core.truth_(and__20748__auto__)){
return ((excess_guided_newline_count - (1)) > (0));
} else {
return and__20748__auto__;
}
})())?cljs.core.repeat.call(null,(excess_guided_newline_count - (1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"indent","indent",-148200125),(22)], null)):new cljs.core.Keyword(null,"noseq","noseq",405935768)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(21)], null)], null)):(cljs.core.truth_((function (){var and__20748__auto__ = previous_newline_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,(function (){var and__20748__auto____$1 = comment_QMARK_;
if(and__20748__auto____$1){
return previous_guided_newline_QMARK_;
} else {
return and__20748__auto____$1;
}
})());
} else {
return and__20748__auto__;
}
})())?(function (){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output: previous-newline? etc.");
} else {
}

return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks.call(null,next_ind__$1),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(16)], null)], null),output_seq__$1);
})()
:((((indent_QMARK_) || ((element_index === (0)))))?output_seq__$1:(function (){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output: prepend-nl:");
} else {
}

return zprint.zprint.prepend_nl.call(null,options__$2,next_ind__$1,output_seq__$1);
})()
))));
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),zprint.ansi.color_str.call(null,["guided-output returned additional out:",(((guided_output_out == null))?[" - ALTOGETHER FAILED TO FIT!",(cljs.core.truth_(one_line_QMARK_)?"\n *** ONE-LINE ***":null)].join(''):null)].join(''),new cljs.core.Keyword(null,"bright-blue","bright-blue",-1256551583)),new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$2).call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null),guided_output_out));
} else {
}

if(cljs.core.truth_(guided_output_out)){
return cljs.core.concat.call(null,out,guided_output_out);
} else {
return null;
}
})()], null);
}
});
/**
 * Is this element in the output from fzprint-seq a comment or a newline?
 */
zprint.zprint.comment_or_newline_QMARK_ = (function zprint$zprint$comment_or_newline_QMARK_(element){
var element_type = cljs.core.nth.call(null,cljs.core.first.call(null,element),(2));
return ((cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (((cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))) || (cljs.core._EQ_.call(null,element_type,new cljs.core.Keyword(null,"newline","newline",1790071323))))));
});
/**
 * Given the param map, return the location for here.
 */
zprint.zprint.guide_here = (function zprint$zprint$guide_here(param_map,mark_map){
var x__21111__auto__ = (function (){var or__20754__auto__ = (cljs.core.truth_(new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map))?(function (){var x__21111__auto__ = (0);
var y__21112__auto__ = ((cljs.core.get.call(null,mark_map,new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map)) + (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})()) - new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map));
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})():null);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var y__21112__auto__ = ((new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map) + (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1);
}
})()) - new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map));
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
});
/**
 * Given a zloc-seq wrap the elements to the right margin 
 *   and be guided by the guide seq.
 */
zprint.zprint.fzprint_guide = (function zprint$zprint$fzprint_guide(caller,p__54912,ind,cur_ind,local_indent,guide,zloc_seq){
var map__54913 = p__54912;
var map__54913__$1 = cljs.core.__destructure_map.call(null,map__54913);
var options = map__54913__$1;
var map__54914 = cljs.core.get.call(null,map__54913__$1,caller);
var map__54914__$1 = cljs.core.__destructure_map.call(null,map__54914);
var wrap_after_multi_QMARK_ = cljs.core.get.call(null,map__54914__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var respect_nl_QMARK_ = cljs.core.get.call(null,map__54914__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var indent = cljs.core.get.call(null,map__54914__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var width = cljs.core.get.call(null,map__54913__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__54913__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var one_line_QMARK_ = cljs.core.get.call(null,map__54913__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),zprint.ansi.color_str.call(null,["fzprint-guide: entry: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)))].join(''),new cljs.core.Keyword(null,"purple","purple",-876021126)),"caller:",caller,"ind:",ind,"cur-ind:",cur_ind,"local-indent:",local_indent,"guide:",zprint.ansi.color_str.call(null,new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options).call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"guideguide","guideguide",753675352)], null),guide),new cljs.core.Keyword(null,"blue","blue",-622100620)));
} else {
}

if(cljs.core.truth_((function (){var and__20748__auto__ = one_line_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),guide);
} else {
return and__20748__auto__;
}
})())){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-guide: returned nil - one-line? is true and guide","has :newline!");
} else {
}

return null;
} else {
var rightcnt__$1 = zprint.zprint.fix_rightcnt.call(null,rightcnt);
var last_cur_index = (cljs.core.count.call(null,zloc_seq) - (1));
if(cljs.core.truth_(guide)){
} else {
throw (new Error(["No guide but fn-style is :guide for this sequence: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,zprint.zfns.zstring,zloc_seq))].join('')));
}

var cur_zloc = zloc_seq;
var cur_index = (0);
var guide_seq = guide;
var element_index = (0);
var index = (0);
var param_map = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),cur_ind,new cljs.core.Keyword(null,"ind","ind",-20917030),ind,new cljs.core.Keyword(null,"one-line-ind","one-line-ind",-1359589453),cur_ind,new cljs.core.Keyword(null,"indent","indent",-148200125),local_indent,new cljs.core.Keyword(null,"last-cur-index","last-cur-index",-1587510673),last_cur_index,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),rightcnt__$1,new cljs.core.Keyword(null,"initial-options","initial-options",-1763564367),options,new cljs.core.Keyword(null,"all-fit?","all-fit?",1706526126),true], null);
var mark_map = cljs.core.PersistentArrayMap.EMPTY;
var G__54918 = null;
var vec__54919 = G__54918;
var previous_newline_QMARK_ = cljs.core.nth.call(null,vec__54919,(0),null);
var previous_guided_newline_QMARK_ = cljs.core.nth.call(null,vec__54919,(1),null);
var unguided_newline_out_QMARK_ = cljs.core.nth.call(null,vec__54919,(2),null);
var previous_comment_QMARK_ = cljs.core.nth.call(null,vec__54919,(3),null);
var previous_data = vec__54919;
var options__$1 = options;
var out = cljs.core.PersistentVector.EMPTY;
var cur_zloc__$1 = cur_zloc;
var cur_index__$1 = cur_index;
var guide_seq__$1 = guide_seq;
var element_index__$1 = element_index;
var index__$1 = index;
var param_map__$1 = param_map;
var mark_map__$1 = mark_map;
var G__54918__$1 = G__54918;
var options__$2 = options__$1;
var out__$1 = out;
while(true){
var cur_zloc__$2 = cur_zloc__$1;
var cur_index__$2 = cur_index__$1;
var guide_seq__$2 = guide_seq__$1;
var element_index__$2 = element_index__$1;
var index__$2 = index__$1;
var param_map__$2 = param_map__$1;
var mark_map__$2 = mark_map__$1;
var vec__54946 = G__54918__$1;
var previous_newline_QMARK___$1 = cljs.core.nth.call(null,vec__54946,(0),null);
var previous_guided_newline_QMARK___$1 = cljs.core.nth.call(null,vec__54946,(1),null);
var unguided_newline_out_QMARK___$1 = cljs.core.nth.call(null,vec__54946,(2),null);
var previous_comment_QMARK___$1 = cljs.core.nth.call(null,vec__54946,(3),null);
var previous_data__$1 = vec__54946;
var options__$3 = options__$2;
var out__$2 = out__$1;
if(((cljs.core.not.call(null,(function (){var or__20754__auto__ = guide_seq__$2;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = cur_zloc__$2;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2);
}
}
})())) || ((out__$2 == null)))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: out:",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$3).call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,zprint.zprint.condense_depth.call(null,(1),out__$2))));
} else {
}

return out__$2;
} else {
if((index__$2 > (3000))){
throw (new Error(["When processing a guide"," the iteration limit of 3000 was"," reached!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,guide_seq__$2))].join('')));
} else {
var first_guide_seq = cljs.core.first.call(null,guide_seq__$2);
var _ = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"\n\nfzprint-guide: =====> (first guide-seq):",first_guide_seq,"\nfzprint-guide: initial param-map:",new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$3).call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,param_map__$2,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),new cljs.core.Keyword(null,"initial-options","initial-options",-1763564367)),new cljs.core.Keyword(null,"group-seq-len","group-seq-len",-940766592),cljs.core.count.call(null,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2))))):null);
var ___$1 = ((cljs.core.empty_QMARK_.call(null,guide_seq__$2))?(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint-guide: guide ran out! guide:",zprint.ansi.color_str.call(null,new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$3).call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null)], null),guide),new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),"\nexpression:",new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$3).call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)))):null):null);
var guide_seq__$3 = (function (){var or__20754__auto__ = guide_seq__$2;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element-*","element-*",-948937262)], null);
}
})();
var comment_QMARK_ = cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,cljs.core.first.call(null,cur_zloc__$2)),new cljs.core.Keyword(null,"comment","comment",532206069));
var comment_inline_QMARK_ = comment_QMARK_;
var next_newline_QMARK_ = cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,cljs.core.first.call(null,cur_zloc__$2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var uneval_QMARK_ = cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,cljs.core.first.call(null,cur_zloc__$2)),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
if(cljs.core.truth_((function (){var and__20748__auto__ = new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2);
if(cljs.core.truth_(and__20748__auto__)){
return new cljs.core.Keyword(null,"grouping?","grouping?",1375753146).cljs$core$IFn$_invoke$arity$1(param_map__$2);
} else {
return and__20748__auto__;
}
})())){
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"group-end","group-end",-574931147))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === end accumulating a group",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)));
} else {
}

var G__54970 = cur_zloc__$2;
var G__54971 = cur_index__$2;
var G__54972 = cljs.core.next.call(null,guide_seq__$3);
var G__54973 = element_index__$2;
var G__54974 = (index__$2 + (1));
var G__54975 = cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"grouping?","grouping?",1375753146),null);
var G__54976 = mark_map__$2;
var G__54977 = previous_data__$1;
var G__54978 = options__$3;
var G__54979 = out__$2;
cur_zloc__$1 = G__54970;
cur_index__$1 = G__54971;
guide_seq__$1 = G__54972;
element_index__$1 = G__54973;
index__$1 = G__54974;
param_map__$1 = G__54975;
mark_map__$1 = G__54976;
G__54918__$1 = G__54977;
options__$2 = G__54978;
out__$1 = G__54979;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element","element",1974019749))){
var vec__54949 = cljs.core.split_with.call(null,zprint.zprint.pair_element_QMARK_,cur_zloc__$2);
var comments_or_newlines_cur_zloc = cljs.core.nth.call(null,vec__54949,(0),null);
var remaining_cur_zloc = cljs.core.nth.call(null,vec__54949,(1),null);
var group_seq = new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2);
var group_seq__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,group_seq,comments_or_newlines_cur_zloc));
var next_zloc = cljs.core.first.call(null,remaining_cur_zloc);
var group_seq__$2 = (cljs.core.truth_(next_zloc)?cljs.core.conj.call(null,group_seq__$1,cljs.core.first.call(null,remaining_cur_zloc)):group_seq__$1);
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === save a group element",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)));
} else {
}

var G__54980 = cljs.core.next.call(null,remaining_cur_zloc);
var G__54981 = ((cur_index__$2 + cljs.core.count.call(null,comments_or_newlines_cur_zloc)) + (1));
var G__54982 = cljs.core.next.call(null,guide_seq__$3);
var G__54983 = element_index__$2;
var G__54984 = (index__$2 + (1));
var G__54985 = cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),group_seq__$2);
var G__54986 = mark_map__$2;
var G__54987 = previous_data__$1;
var G__54988 = options__$3;
var G__54989 = out__$2;
cur_zloc__$1 = G__54980;
cur_index__$1 = G__54981;
guide_seq__$1 = G__54982;
element_index__$1 = G__54983;
index__$1 = G__54984;
param_map__$1 = G__54985;
mark_map__$1 = G__54986;
G__54918__$1 = G__54987;
options__$2 = G__54988;
out__$1 = G__54989;
continue;
} else {
throw (new Error(["When processing a guide and accumulating a"," group only :element is allowed,"," but encountered: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq),"' instead!"].join('')));

}
}
} else {
if(cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"newline","newline",1790071323));
if(and__20748__auto__){
return unguided_newline_out_QMARK___$1;
} else {
return and__20748__auto__;
}
})())){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === skip guided newline",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),"since we had unguided-newline-out on last output");
} else {
}

var G__54990 = cur_zloc__$2;
var G__54991 = cur_index__$2;
var G__54992 = cljs.core.next.call(null,guide_seq__$3);
var G__54993 = element_index__$2;
var G__54994 = (index__$2 + (1));
var G__54995 = cljs.core.dissoc.call(null,param_map__$2,new cljs.core.Keyword(null,"spaces","spaces",365984563),new cljs.core.Keyword(null,"align-key","align-key",2084823123));
var G__54996 = mark_map__$2;
var G__54997 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [previous_newline_QMARK___$1,previous_guided_newline_QMARK___$1,null,previous_comment_QMARK___$1], null);
var G__54998 = options__$3;
var G__54999 = out__$2;
cur_zloc__$1 = G__54990;
cur_index__$1 = G__54991;
guide_seq__$1 = G__54992;
element_index__$1 = G__54993;
index__$1 = G__54994;
param_map__$1 = G__54995;
mark_map__$1 = G__54996;
G__54918__$1 = G__54997;
options__$2 = G__54998;
out__$1 = G__54999;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"mark","mark",-373816345))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === :mark key:",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)),"value:",(new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map__$2) + (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map__$2);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1);
}
})()));
} else {
}

var G__55000 = cur_zloc__$2;
var G__55001 = cur_index__$2;
var G__55002 = cljs.core.nnext.call(null,guide_seq__$3);
var G__55003 = element_index__$2;
var G__55004 = (index__$2 + (1));
var G__55005 = param_map__$2;
var G__55006 = cljs.core.assoc.call(null,mark_map__$2,cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)),(new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map__$2) + (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map__$2);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1);
}
})()));
var G__55007 = previous_data__$1;
var G__55008 = options__$3;
var G__55009 = out__$2;
cur_zloc__$1 = G__55000;
cur_index__$1 = G__55001;
guide_seq__$1 = G__55002;
element_index__$1 = G__55003;
index__$1 = G__55004;
param_map__$1 = G__55005;
mark_map__$1 = G__55006;
G__54918__$1 = G__55007;
options__$2 = G__55008;
out__$1 = G__55009;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === :mark-at key:",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)),"value:",(new cljs.core.Keyword(null,"one-line-ind","one-line-ind",-1359589453).cljs$core$IFn$_invoke$arity$1(param_map__$2) + cljs.core.first.call(null,cljs.core.nnext.call(null,guide_seq__$3))));
} else {
}

var G__55010 = cur_zloc__$2;
var G__55011 = cur_index__$2;
var G__55012 = cljs.core.nthnext.call(null,guide_seq__$3,(3));
var G__55013 = element_index__$2;
var G__55014 = (index__$2 + (1));
var G__55015 = param_map__$2;
var G__55016 = cljs.core.assoc.call(null,mark_map__$2,cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)),(new cljs.core.Keyword(null,"one-line-ind","one-line-ind",-1359589453).cljs$core$IFn$_invoke$arity$1(param_map__$2) + cljs.core.first.call(null,cljs.core.nnext.call(null,guide_seq__$3))));
var G__55017 = previous_data__$1;
var G__55018 = options__$3;
var G__55019 = out__$2;
cur_zloc__$1 = G__55010;
cur_index__$1 = G__55011;
guide_seq__$1 = G__55012;
element_index__$1 = G__55013;
index__$1 = G__55014;
param_map__$1 = G__55015;
mark_map__$1 = G__55016;
G__54918__$1 = G__55017;
options__$2 = G__55018;
out__$1 = G__55019;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"mark-at-indent","mark-at-indent",-126657684))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === :mark-at-indent key:",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)),"value:",((new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2) + new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2)) + cljs.core.first.call(null,cljs.core.nnext.call(null,guide_seq__$3))));
} else {
}

var G__55020 = cur_zloc__$2;
var G__55021 = cur_index__$2;
var G__55022 = cljs.core.nthnext.call(null,guide_seq__$3,(3));
var G__55023 = element_index__$2;
var G__55024 = (index__$2 + (1));
var G__55025 = param_map__$2;
var G__55026 = cljs.core.assoc.call(null,mark_map__$2,cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)),((new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2) + new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2)) + cljs.core.first.call(null,cljs.core.nnext.call(null,guide_seq__$3))));
var G__55027 = previous_data__$1;
var G__55028 = options__$3;
var G__55029 = out__$2;
cur_zloc__$1 = G__55020;
cur_index__$1 = G__55021;
guide_seq__$1 = G__55022;
element_index__$1 = G__55023;
index__$1 = G__55024;
param_map__$1 = G__55025;
mark_map__$1 = G__55026;
G__54918__$1 = G__55027;
options__$2 = G__55028;
out__$1 = G__55029;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"spaces","spaces",365984563))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === spaces",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)));
} else {
}

var G__55030 = cur_zloc__$2;
var G__55031 = cur_index__$2;
var G__55032 = cljs.core.nnext.call(null,guide_seq__$3);
var G__55033 = element_index__$2;
var G__55034 = (index__$2 + (1));
var G__55035 = cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"spaces","spaces",365984563),(cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)) + (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map__$2);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})()));
var G__55036 = mark_map__$2;
var G__55037 = previous_data__$1;
var G__55038 = options__$3;
var G__55039 = out__$2;
cur_zloc__$1 = G__55030;
cur_index__$1 = G__55031;
guide_seq__$1 = G__55032;
element_index__$1 = G__55033;
index__$1 = G__55034;
param_map__$1 = G__55035;
mark_map__$1 = G__55036;
G__54918__$1 = G__55037;
options__$2 = G__55038;
out__$1 = G__55039;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"indent","indent",-148200125))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint-guide: === :indent",cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)));
} else {
}

var G__55040 = cur_zloc__$2;
var G__55041 = cur_index__$2;
var G__55042 = cljs.core.nnext.call(null,guide_seq__$3);
var G__55043 = element_index__$2;
var G__55044 = (index__$2 + (1));
var G__55045 = cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"indent","indent",-148200125),cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)));
var G__55046 = mark_map__$2;
var G__55047 = previous_data__$1;
var G__55048 = options__$3;
var G__55049 = out__$2;
cur_zloc__$1 = G__55040;
cur_index__$1 = G__55041;
guide_seq__$1 = G__55042;
element_index__$1 = G__55043;
index__$1 = G__55044;
param_map__$1 = G__55045;
mark_map__$1 = G__55046;
G__54918__$1 = G__55047;
options__$2 = G__55048;
out__$1 = G__55049;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"indent-here","indent-here",1856277408))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint-guide: === :indent-here","align-key:",new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map__$2),"align-ind:",(cljs.core.truth_(new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map__$2))?cljs.core.get.call(null,mark_map__$2,new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map__$2)):null),"cur-ind:",new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map__$2),"spaces:",new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map__$2));
} else {
}

var G__55050 = cur_zloc__$2;
var G__55051 = cur_index__$2;
var G__55052 = cljs.core.next.call(null,guide_seq__$3);
var G__55053 = element_index__$2;
var G__55054 = (index__$2 + (1));
var G__55055 = cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"indent","indent",-148200125),zprint.zprint.guide_here.call(null,param_map__$2,mark_map__$2));
var G__55056 = mark_map__$2;
var G__55057 = previous_data__$1;
var G__55058 = options__$3;
var G__55059 = out__$2;
cur_zloc__$1 = G__55050;
cur_index__$1 = G__55051;
guide_seq__$1 = G__55052;
element_index__$1 = G__55053;
index__$1 = G__55054;
param_map__$1 = G__55055;
mark_map__$1 = G__55056;
G__54918__$1 = G__55057;
options__$2 = G__55058;
out__$1 = G__55059;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"indent-align","indent-align",1362687591))){
var align_key = cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3));
var ___$2 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === :indent-align",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),"key:",align_key,"value:",cljs.core.get.call(null,mark_map__$2,align_key),"cur-ind:",new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map__$2)):null);
var G__55060 = cur_zloc__$2;
var G__55061 = cur_index__$2;
var G__55062 = cljs.core.nnext.call(null,guide_seq__$3);
var G__55063 = element_index__$2;
var G__55064 = (index__$2 + (1));
var G__55065 = cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"indent","indent",-148200125),(function (){var or__20754__auto__ = (cljs.core.truth_(cljs.core.get.call(null,mark_map__$2,align_key))?(function (){var x__21111__auto__ = (0);
var y__21112__auto__ = (cljs.core.get.call(null,mark_map__$2,align_key) - new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2));
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})():null);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2);
}
})());
var G__55066 = mark_map__$2;
var G__55067 = previous_data__$1;
var G__55068 = options__$3;
var G__55069 = out__$2;
cur_zloc__$1 = G__55060;
cur_index__$1 = G__55061;
guide_seq__$1 = G__55062;
element_index__$1 = G__55063;
index__$1 = G__55064;
param_map__$1 = G__55065;
mark_map__$1 = G__55066;
G__54918__$1 = G__55067;
options__$2 = G__55068;
out__$1 = G__55069;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"indent-reset","indent-reset",900463610))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === :indent-reset",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)));
} else {
}

var G__55070 = cur_zloc__$2;
var G__55071 = cur_index__$2;
var G__55072 = cljs.core.next.call(null,guide_seq__$3);
var G__55073 = element_index__$2;
var G__55074 = (index__$2 + (1));
var G__55075 = cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"indent","indent",-148200125),local_indent);
var G__55076 = mark_map__$2;
var G__55077 = previous_data__$1;
var G__55078 = options__$3;
var G__55079 = out__$2;
cur_zloc__$1 = G__55070;
cur_index__$1 = G__55071;
guide_seq__$1 = G__55072;
element_index__$1 = G__55073;
index__$1 = G__55074;
param_map__$1 = G__55075;
mark_map__$1 = G__55076;
G__54918__$1 = G__55077;
options__$2 = G__55078;
out__$1 = G__55079;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"options","options",99638489))){
var vec__54952 = zprint.zprint.internal_config_and_validate.call(null,options__$3,cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3)),"fzprint-guide: options:",null);
var merged_option_map = cljs.core.nth.call(null,vec__54952,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__54952,(1),null);
var ___$3 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === :options",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3))):null);
var G__55080 = cur_zloc__$2;
var G__55081 = cur_index__$2;
var G__55082 = cljs.core.nnext.call(null,guide_seq__$3);
var G__55083 = element_index__$2;
var G__55084 = (index__$2 + (1));
var G__55085 = param_map__$2;
var G__55086 = mark_map__$2;
var G__55087 = previous_data__$1;
var G__55088 = merged_option_map;
var G__55089 = out__$2;
cur_zloc__$1 = G__55080;
cur_index__$1 = G__55081;
guide_seq__$1 = G__55082;
element_index__$1 = G__55083;
index__$1 = G__55084;
param_map__$1 = G__55085;
mark_map__$1 = G__55086;
G__54918__$1 = G__55087;
options__$2 = G__55088;
out__$1 = G__55089;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"options-reset","options-reset",610833739))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === :options-reset",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)));
} else {
}

var G__55090 = cur_zloc__$2;
var G__55091 = cur_index__$2;
var G__55092 = cljs.core.next.call(null,guide_seq__$3);
var G__55093 = element_index__$2;
var G__55094 = (index__$2 + (1));
var G__55095 = param_map__$2;
var G__55096 = mark_map__$2;
var G__55097 = previous_data__$1;
var G__55098 = new cljs.core.Keyword(null,"initial-options","initial-options",-1763564367).cljs$core$IFn$_invoke$arity$1(param_map__$2);
var G__55099 = out__$2;
cur_zloc__$1 = G__55090;
cur_index__$1 = G__55091;
guide_seq__$1 = G__55092;
element_index__$1 = G__55093;
index__$1 = G__55094;
param_map__$1 = G__55095;
mark_map__$1 = G__55096;
G__54918__$1 = G__55097;
options__$2 = G__55098;
out__$1 = G__55099;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"align","align",1964212802))){
var align_key = cljs.core.first.call(null,cljs.core.next.call(null,guide_seq__$3));
var ___$2 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === :align",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),"key:",align_key,"value:",cljs.core.get.call(null,mark_map__$2,align_key)):null);
var G__55100 = cur_zloc__$2;
var G__55101 = cur_index__$2;
var G__55102 = cljs.core.nnext.call(null,guide_seq__$3);
var G__55103 = element_index__$2;
var G__55104 = (index__$2 + (1));
var G__55105 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,param_map__$2,new cljs.core.Keyword(null,"spaces","spaces",365984563)),new cljs.core.Keyword(null,"align-key","align-key",2084823123),align_key);
var G__55106 = mark_map__$2;
var G__55107 = previous_data__$1;
var G__55108 = options__$3;
var G__55109 = out__$2;
cur_zloc__$1 = G__55100;
cur_index__$1 = G__55101;
guide_seq__$1 = G__55102;
element_index__$1 = G__55103;
index__$1 = G__55104;
param_map__$1 = G__55105;
mark_map__$1 = G__55106;
G__54918__$1 = G__55107;
options__$2 = G__55108;
out__$1 = G__55109;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2))){
if(((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"newline-force","newline-force",2057265840))))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === counting guided newlines:",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),(new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2) + (1)));
} else {
}

var G__55110 = cur_zloc__$2;
var G__55111 = cur_index__$2;
var G__55112 = cljs.core.next.call(null,guide_seq__$3);
var G__55113 = element_index__$2;
var G__55114 = (index__$2 + (1));
var G__55115 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237),(cljs.core.truth_((function (){var or__20754__auto__ = cur_zloc__$2;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"newline-force","newline-force",2057265840));
}
})())?(new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2) + (1)):new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2)),new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2) + new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2))),new cljs.core.Keyword(null,"spaces","spaces",365984563),new cljs.core.Keyword(null,"align-key","align-key",2084823123));
var G__55116 = mark_map__$2;
var G__55117 = previous_data__$1;
var G__55118 = options__$3;
var G__55119 = out__$2;
cur_zloc__$1 = G__55110;
cur_index__$1 = G__55111;
guide_seq__$1 = G__55112;
element_index__$1 = G__55113;
index__$1 = G__55114;
param_map__$1 = G__55115;
mark_map__$1 = G__55116;
G__54918__$1 = G__55117;
options__$2 = G__55118;
out__$1 = G__55119;
continue;
} else {
var ___$2 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === finished counting newlines",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),":guided-newline-count:",new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2)):null);
var comment_and_newline_count = zprint.zprint.zcount_comments_and_newlines.call(null,cur_zloc__$2);
var guided_newline_count = new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2);
var excess_guided_newline_count = (function (){var x__21111__auto__ = (0);
var y__21112__auto__ = (guided_newline_count - comment_and_newline_count);
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})();
var param_map__$3 = cljs.core.dissoc.call(null,param_map__$2,new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237));
var param_map__$4 = cljs.core.assoc.call(null,param_map__$3,new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$3) + new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$3)));
var param_map__$5 = (((excess_guided_newline_count > (0)))?cljs.core.assoc.call(null,param_map__$4,new cljs.core.Keyword(null,"excess-guided-newline-count","excess-guided-newline-count",117957353),excess_guided_newline_count):param_map__$4);
var vec__54955 = (((excess_guided_newline_count > (0)))?(function (){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide === excess-guided-newline-count:",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),excess_guided_newline_count);
} else {
}

return zprint.zprint.guided_output.call(null,caller,options__$3,null,null,new cljs.core.Keyword(null,"newline","newline",1790071323),cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$5,mark_map__$2,previous_data__$1,out__$2);
})()
:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_map__$5,previous_data__$1,out__$2], null));
var new_param_map = cljs.core.nth.call(null,vec__54955,(0),null);
var new_previous_data = cljs.core.nth.call(null,vec__54955,(1),null);
var new_out = cljs.core.nth.call(null,vec__54955,(2),null);
var G__55120 = cur_zloc__$2;
var G__55121 = cur_index__$2;
var G__55122 = guide_seq__$3;
var G__55123 = element_index__$2;
var G__55124 = (index__$2 + (1));
var G__55125 = new_param_map;
var G__55126 = mark_map__$2;
var G__55127 = new_previous_data;
var G__55128 = options__$3;
var G__55129 = new_out;
cur_zloc__$1 = G__55120;
cur_index__$1 = G__55121;
guide_seq__$1 = G__55122;
element_index__$1 = G__55123;
index__$1 = G__55124;
param_map__$1 = G__55125;
mark_map__$1 = G__55126;
G__54918__$1 = G__55127;
options__$2 = G__55128;
out__$1 = G__55129;
continue;
}
} else {
if(((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"newline-force","newline-force",2057265840))))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === start counting guided newlines",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)));
} else {
}

var G__55130 = cur_zloc__$2;
var G__55131 = cur_index__$2;
var G__55132 = cljs.core.next.call(null,guide_seq__$3);
var G__55133 = element_index__$2;
var G__55134 = (index__$2 + (1));
var G__55135 = (((((!(cljs.core.empty_QMARK_.call(null,cur_zloc__$2)))) || (cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"newline-force","newline-force",2057265840)))))?cljs.core.dissoc.call(null,cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237),(1),new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),(new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2) + new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2))),new cljs.core.Keyword(null,"spaces","spaces",365984563),new cljs.core.Keyword(null,"align-key","align-key",2084823123)):param_map__$2);
var G__55136 = mark_map__$2;
var G__55137 = previous_data__$1;
var G__55138 = options__$3;
var G__55139 = out__$2;
cur_zloc__$1 = G__55130;
cur_index__$1 = G__55131;
guide_seq__$1 = G__55132;
element_index__$1 = G__55133;
index__$1 = G__55134;
param_map__$1 = G__55135;
mark_map__$1 = G__55136;
G__54918__$1 = G__55137;
options__$2 = G__55138;
out__$1 = G__55139;
continue;
} else {
if(cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"group-begin","group-begin",447482475))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === start accumulating a group",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)));
} else {
}

var G__55140 = cur_zloc__$2;
var G__55141 = cur_index__$2;
var G__55142 = cljs.core.next.call(null,guide_seq__$3);
var G__55143 = element_index__$2;
var G__55144 = (index__$2 + (1));
var G__55145 = cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"grouping?","grouping?",1375753146),true);
var G__55146 = mark_map__$2;
var G__55147 = previous_data__$1;
var G__55148 = options__$3;
var G__55149 = out__$2;
cur_zloc__$1 = G__55140;
cur_index__$1 = G__55141;
guide_seq__$1 = G__55142;
element_index__$1 = G__55143;
index__$1 = G__55144;
param_map__$1 = G__55145;
mark_map__$1 = G__55146;
G__54918__$1 = G__55147;
options__$2 = G__55148;
out__$1 = G__55149;
continue;
} else {
if(((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-newline-best-*","element-newline-best-*",-1915830000))) || (((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893))) || (cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-pair-*","element-pair-*",281146227))))))){
var ___$2 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,["fzprint-guide: === ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq)].join(''),new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$3)):null);
var ___$3 = ((cljs.core.empty_QMARK_.call(null,cljs.core.next.call(null,guide_seq__$3)))?null:(function(){throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq),"not the last command in the guide!"].join('')))})());
var param_map__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2))?param_map__$2:cljs.core.assoc.call(null,param_map__$2,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),cljs.core.PersistentVector.EMPTY));
var param_map__$4 = cljs.core.assoc.call(null,param_map__$3,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),cljs.core.concat.call(null,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$3),cur_zloc__$2));
var ___$4 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint-guide: === ",first_guide_seq," group-seq:",cljs.core.pr_str.call(null,cljs.core.map.call(null,zprint.zfns.zstring,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$4)))):null);
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$4))){
var G__55150 = cur_zloc__$2;
var G__55151 = cur_index__$2;
var G__55152 = cljs.core.next.call(null,guide_seq__$3);
var G__55153 = element_index__$2;
var G__55154 = (index__$2 + (1));
var G__55155 = cljs.core.dissoc.call(null,param_map__$4,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),new cljs.core.Keyword(null,"grouping?","grouping?",1375753146));
var G__55156 = mark_map__$2;
var G__55157 = previous_data__$1;
var G__55158 = options__$3;
var G__55159 = out__$2;
cur_zloc__$1 = G__55150;
cur_index__$1 = G__55151;
guide_seq__$1 = G__55152;
element_index__$1 = G__55153;
index__$1 = G__55154;
param_map__$1 = G__55155;
mark_map__$1 = G__55156;
G__54918__$1 = G__55157;
options__$2 = G__55158;
out__$1 = G__55159;
continue;
} else {
var vec__54958 = zprint.zprint.guided_output.call(null,caller,options__$3,null,true,first_guide_seq,cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$4,mark_map__$2,previous_data__$1,out__$2);
var new_param_map = cljs.core.nth.call(null,vec__54958,(0),null);
var new_previous_data = cljs.core.nth.call(null,vec__54958,(1),null);
var new_out = cljs.core.nth.call(null,vec__54958,(2),null);
var G__55160 = null;
var G__55161 = (cur_index__$2 + cljs.core.count.call(null,cur_zloc__$2));
var G__55162 = cljs.core.next.call(null,guide_seq__$3);
var G__55163 = element_index__$2;
var G__55164 = (index__$2 + (1));
var G__55165 = cljs.core.dissoc.call(null,new_param_map,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),new cljs.core.Keyword(null,"grouping","grouping",-1219230389));
var G__55166 = mark_map__$2;
var G__55167 = new_previous_data;
var G__55168 = options__$3;
var G__55169 = new_out;
cur_zloc__$1 = G__55160;
cur_index__$1 = G__55161;
guide_seq__$1 = G__55162;
element_index__$1 = G__55163;
index__$1 = G__55164;
param_map__$1 = G__55165;
mark_map__$1 = G__55166;
G__54918__$1 = G__55167;
options__$2 = G__55168;
out__$1 = G__55169;
continue;
}
} else {
if((((cur_zloc__$2 == null)) && (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2))))){
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === ran out of cur-zloc",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)));
} else {
}

var G__55170 = cljs.core.next.call(null,cur_zloc__$2);
var G__55171 = (cur_index__$2 + (1));
var G__55172 = cljs.core.next.call(null,guide_seq__$3);
var G__55173 = element_index__$2;
var G__55174 = (index__$2 + (1));
var G__55175 = param_map__$2;
var G__55176 = mark_map__$2;
var G__55177 = previous_data__$1;
var G__55178 = options__$3;
var G__55179 = out__$2;
cur_zloc__$1 = G__55170;
cur_index__$1 = G__55171;
guide_seq__$1 = G__55172;
element_index__$1 = G__55173;
index__$1 = G__55174;
param_map__$1 = G__55175;
mark_map__$1 = G__55176;
G__54918__$1 = G__55177;
options__$2 = G__55178;
out__$1 = G__55179;
continue;
} else {
if(((comment_QMARK_) || (((comment_inline_QMARK_) || (((uneval_QMARK_) || (next_newline_QMARK_))))))){
var ___$2 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,"fzprint-guide: === process comments, newlines, uneval",new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)),"comment?",comment_QMARK_,"comment-inline?",comment_inline_QMARK_,"uneval?",uneval_QMARK_,"next-newline?",next_newline_QMARK_):null);
var vec__54961 = zprint.zprint.guided_output.call(null,caller,options__$3,cljs.core.first.call(null,cur_zloc__$2),cljs.core.empty_QMARK_.call(null,cljs.core.next.call(null,cur_zloc__$2)),null,cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$2,mark_map__$2,previous_data__$1,out__$2);
var new_param_map = cljs.core.nth.call(null,vec__54961,(0),null);
var new_previous_data = cljs.core.nth.call(null,vec__54961,(1),null);
var new_out = cljs.core.nth.call(null,vec__54961,(2),null);
var G__55180 = cljs.core.next.call(null,cur_zloc__$2);
var G__55181 = (cur_index__$2 + (1));
var G__55182 = guide_seq__$3;
var G__55183 = element_index__$2;
var G__55184 = (index__$2 + (1));
var G__55185 = new_param_map;
var G__55186 = mark_map__$2;
var G__55187 = new_previous_data;
var G__55188 = options__$3;
var G__55189 = new_out;
cur_zloc__$1 = G__55180;
cur_index__$1 = G__55181;
guide_seq__$1 = G__55182;
element_index__$1 = G__55183;
index__$1 = G__55184;
param_map__$1 = G__55185;
mark_map__$1 = G__55186;
G__54918__$1 = G__55187;
options__$2 = G__55188;
out__$1 = G__55189;
continue;
} else {
if(((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element","element",1974019749))) || (((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-guide","element-guide",384986063))) || (((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-best","element-best",1084358317))) || (((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-best-first","element-best-first",-332741267))) || (((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078))) || (((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-*","element-*",-948937262))) || (cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-binding-vec","element-binding-vec",936510284))))))))))))))){
var ___$2 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,["fzprint-guide: === ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq)].join(''),new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480))):null);
var ___$3 = ((((((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-*","element-*",-948937262))) || (cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078))))) && ((!(cljs.core.empty_QMARK_.call(null,cljs.core.next.call(null,guide_seq__$3)))))))?(function(){throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq)," is not the last command in guide!"].join('')))})():null);
var vec__54964 = zprint.zprint.guided_output.call(null,caller,options__$3,cljs.core.first.call(null,cur_zloc__$2),cljs.core.empty_QMARK_.call(null,cljs.core.next.call(null,cur_zloc__$2)),first_guide_seq,cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$2,mark_map__$2,previous_data__$1,out__$2);
var new_param_map = cljs.core.nth.call(null,vec__54964,(0),null);
var new_previous_data = cljs.core.nth.call(null,vec__54964,(1),null);
var new_out = cljs.core.nth.call(null,vec__54964,(2),null);
var G__55190 = cljs.core.next.call(null,cur_zloc__$2);
var G__55191 = (cur_index__$2 + (1));
var G__55192 = ((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-guide","element-guide",384986063)))?cljs.core.nnext.call(null,guide_seq__$3):((((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-*","element-*",-948937262))) || (cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078)))))?guide_seq__$3:cljs.core.next.call(null,guide_seq__$3)
));
var G__55193 = (element_index__$2 + (1));
var G__55194 = (index__$2 + (1));
var G__55195 = cljs.core.dissoc.call(null,new_param_map,new cljs.core.Keyword(null,"spaces","spaces",365984563),new cljs.core.Keyword(null,"align-key","align-key",2084823123));
var G__55196 = mark_map__$2;
var G__55197 = new_previous_data;
var G__55198 = options__$3;
var G__55199 = new_out;
cur_zloc__$1 = G__55190;
cur_index__$1 = G__55191;
guide_seq__$1 = G__55192;
element_index__$1 = G__55193;
index__$1 = G__55194;
param_map__$1 = G__55195;
mark_map__$1 = G__55196;
G__54918__$1 = G__55197;
options__$2 = G__55198;
out__$1 = G__55199;
continue;
} else {
if(((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328))) || (((cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-pair-group","element-pair-group",2021364237))) || (cljs.core._EQ_.call(null,first_guide_seq,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))))))){
var ___$2 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.call(null,["fzprint-guide: === ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq)].join(''),new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480))):null);
var vec__54967 = zprint.zprint.guided_output.call(null,caller,options__$3,null,cljs.core.empty_QMARK_.call(null,cur_zloc__$2),first_guide_seq,cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$2,mark_map__$2,previous_data__$1,out__$2);
var new_param_map = cljs.core.nth.call(null,vec__54967,(0),null);
var new_previous_data = cljs.core.nth.call(null,vec__54967,(1),null);
var new_out = cljs.core.nth.call(null,vec__54967,(2),null);
var G__55200 = cur_zloc__$2;
var G__55201 = cur_index__$2;
var G__55202 = cljs.core.next.call(null,guide_seq__$3);
var G__55203 = element_index__$2;
var G__55204 = (index__$2 + (1));
var G__55205 = cljs.core.dissoc.call(null,new_param_map,new cljs.core.Keyword(null,"spaces","spaces",365984563),new cljs.core.Keyword(null,"align-key","align-key",2084823123),new cljs.core.Keyword(null,"group-seq","group-seq",-690875027));
var G__55206 = mark_map__$2;
var G__55207 = new_previous_data;
var G__55208 = options__$3;
var G__55209 = new_out;
cur_zloc__$1 = G__55200;
cur_index__$1 = G__55201;
guide_seq__$1 = G__55202;
element_index__$1 = G__55203;
index__$1 = G__55204;
param_map__$1 = G__55205;
mark_map__$1 = G__55206;
G__54918__$1 = G__55207;
options__$2 = G__55208;
out__$1 = G__55209;
continue;
} else {
throw (new Error(["Unknown values: guide-seq: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq),"' ","\ncur-zloc:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zstring.call(null,cljs.core.first.call(null,cur_zloc__$2)))].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
break;
}
}
});
/**
 * Remove any [_ _ :newline] from the seq.
 */
zprint.zprint.remove_nl = (function zprint$zprint$remove_nl(coll){
return cljs.core.remove.call(null,(function (p1__55210_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,p1__55210_SHARP_),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
}),coll);
});
/**
 * If there are any comments at the top level of the zloc-seq, return true,
 *   else nil.
 */
zprint.zprint.comment_in_zloc_seq_QMARK_ = (function zprint$zprint$comment_in_zloc_seq_QMARK_(zloc_seq){
return cljs.core.reduce.call(null,(function (p1__55212_SHARP_,p2__55211_SHARP_){
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,p2__55211_SHARP_),new cljs.core.Keyword(null,"comment","comment",532206069))){
return cljs.core.reduced.call(null,true);
} else {
return null;
}
}),false,zloc_seq);
});
/**
 * Print basic stuff like a vector or a set or an array.  Several options 
 *   for how to print them.
 */
zprint.zprint.fzprint_vec_STAR_ = (function zprint$zprint$fzprint_vec_STAR_(caller,l_str,r_str,p__55213,ind,zloc){
var map__55214 = p__55213;
var map__55214__$1 = cljs.core.__destructure_map.call(null,map__55214);
var options = map__55214__$1;
var map__55215 = cljs.core.get.call(null,map__55214__$1,caller);
var map__55215__$1 = cljs.core.__destructure_map.call(null,map__55215);
var sort_QMARK_ = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var wrap_coll_QMARK_ = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var indent = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var force_nl_QMARK_ = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var option_fn = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"option-fn","option-fn",-959705456));
var wrap_QMARK_ = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK_ = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var option_fn_first = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201));
var fn_format = cljs.core.get.call(null,map__55215__$1,new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784));
var rightcnt = cljs.core.get.call(null,map__55214__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var in_code_QMARK_ = cljs.core.get.call(null,map__55214__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-vec* ind:",ind,"indent:",indent,"caller:",caller,"ztag:",zprint.zfns.ztag.call(null,zloc));
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"off","off",606440789))){
return zprint.zprint.fzprint_noformat.call(null,l_str,r_str,options,zloc);
} else {
if(cljs.core.truth_((function (){var and__20748__auto__ = binding_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),(1));
} else {
return and__20748__auto__;
}
})())){
return zprint.zprint.fzprint_binding_vec.call(null,options,ind,zloc);
} else {
var vec__55216 = zprint.zprint.get_respect_indent.call(null,options,caller,new cljs.core.Keyword(null,"vector","vector",1902966158));
var respect_nl_QMARK_ = cljs.core.nth.call(null,vec__55216,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.call(null,vec__55216,(1),null);
var indent_only_QMARK_ = cljs.core.nth.call(null,vec__55216,(2),null);
var l_str_len = cljs.core.count.call(null,l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,(ind + (function (){var x__21111__auto__ = (0);
var y__21112__auto__ = (l_str_len - (1));
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})()),zloc,r_str);
var len = zprint.zfns.zcount.call(null,zloc);
var options__$1 = ((((cljs.core._EQ_.call(null,caller,new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quote","quote",-262615245),zprint.zfns.ztag.call(null,zloc)))))?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),true):options);
var vec__55219 = (cljs.core.truth_(option_fn_first)?zprint.zprint.call_option_fn_first.call(null,caller,options__$1,option_fn_first,zloc):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$1,null], null));
var options__$2 = cljs.core.nth.call(null,vec__55219,(0),null);
var new_options = cljs.core.nth.call(null,vec__55219,(1),null);
var _ = (cljs.core.truth_(option_fn_first)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.call(null,"fzprint-vec* option-fn-first new options",new_options)):null):null);
var vec__55222 = (cljs.core.truth_(option_fn)?zprint.zprint.call_option_fn.call(null,caller,options__$2,option_fn,zloc):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$2,null], null));
var options__$3 = cljs.core.nth.call(null,vec__55222,(0),null);
var new_options__$1 = cljs.core.nth.call(null,vec__55222,(1),null);
var ___$1 = (cljs.core.truth_(option_fn)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),cljs.core.pr_str.call(null,"fzprint-vec* option-fn new options",new_options__$1)):null):null);
var map__55225 = options__$3;
var map__55225__$1 = cljs.core.__destructure_map.call(null,map__55225);
var options__$4 = map__55225__$1;
var map__55226 = cljs.core.get.call(null,map__55225__$1,caller);
var map__55226__$1 = cljs.core.__destructure_map.call(null,map__55226);
var indent_only_QMARK___$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842));
var sort_QMARK___$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK___$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var wrap_coll_QMARK___$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var indent__$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var respect_nl_QMARK___$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var respect_bl_QMARK___$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998));
var wrap_QMARK___$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK___$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var fn_format__$1 = cljs.core.get.call(null,map__55226__$1,new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784));
var guide = ((cljs.core.not.call(null,indent_only_QMARK___$1))?(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(options__$4);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zprint.guide_debug.call(null,caller,options__$4);
}
})():null);
var options__$5 = cljs.core.dissoc.call(null,options__$4,new cljs.core.Keyword(null,"guide","guide",-935563924));
var ___$2 = (cljs.core.truth_(guide)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.call(null,"fzprint-vec* guide:",guide)):null):null);
var zloc_seq = (cljs.core.truth_((function (){var or__20754__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return indent_only_QMARK___$1;
}
})())?zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc):(cljs.core.truth_(respect_bl_QMARK___$1)?zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc):zprint.zfns.zmap.call(null,cljs.core.identity,zloc)
));
if(cljs.core.truth_(guide)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_guide.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),options__$5,ind,(l_str_len + ind),indent__$1,guide,zloc_seq),r_str_vec);
} else {
if(cljs.core.truth_(fn_format__$1)){
return zprint.zprint.fzprint_list_STAR_.call(null,new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),l_str,r_str,cljs.core.assoc.call(null,options__$5,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),fn_format__$1),ind,zloc);
} else {
var indent__$2 = (function (){var or__20754__auto__ = indent__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.count.call(null,l_str);
}
})();
var new_ind = (cljs.core.truth_(indent_only_QMARK___$1)?ind:(indent__$2 + ind));
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.call(null,"fzprint-vec*:",zprint.zfns.zstring.call(null,zloc),"new-ind:",new_ind)):null);
var zloc_seq__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = sort_QMARK___$1;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = (cljs.core.truth_(in_code_QMARK_)?sort_in_code_QMARK___$1:true);
if(cljs.core.truth_(and__20748__auto____$1)){
return ((cljs.core.not.call(null,zprint.zprint.comment_in_zloc_seq_QMARK_.call(null,zloc_seq))) && (((cljs.core.not.call(null,respect_nl_QMARK___$1)) && (((cljs.core.not.call(null,respect_bl_QMARK___$1)) && (cljs.core.not.call(null,indent_only_QMARK___$1)))))));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?zprint.zprint.order_out.call(null,caller,options__$5,cljs.core.identity,zloc_seq):zloc_seq);
var coll_print = (((len === (0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(17)], null)], null)], null):zprint.zprint.fzprint_seq.call(null,options__$5,new_ind,zloc_seq__$1));
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.call(null,"fzprint-vec*: coll-print:",coll_print)):null);
var coll_print__$1 = ((cljs.core.not.call(null,zprint.zprint.contains_nil_QMARK_.call(null,coll_print)))?coll_print:null);
var one_line = (cljs.core.truth_(coll_print__$1)?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(18)], null)], null),(cljs.core.truth_((function (){var or__20754__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return indent_only_QMARK___$1;
}
}
})())?coll_print__$1:zprint.zprint.remove_nl.call(null,coll_print__$1)))):null);
var ___$5 = zprint.zprint.log_lines.call(null,options__$5,"fzprint-vec*:",new_ind,one_line);
var ___$6 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.call(null,"fzprint-vec*: new-ind:",new_ind,"force-nl?",force_nl_QMARK_,"one-line:",one_line)):null);
var one_line_lines = zprint.zprint.style_lines.call(null,options__$5,new_ind,one_line);
if((len === (0))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
if(cljs.core.truth_(one_line_lines)){
if(((cljs.core.not.call(null,force_nl_QMARK_)) && (zprint.zprint.fzfit_one_line.call(null,options__$5,one_line_lines)))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,one_line,r_str_vec);
} else {
if(cljs.core.truth_(indent_only_QMARK___$1)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.indent_zmap.call(null,caller,options__$5,ind,(ind + l_str_len),coll_print__$1,indent__$2),r_str_vec);
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = (function (){var and__20748__auto__ = cljs.core.not.call(null,wrap_coll_QMARK___$1);
if(and__20748__auto__){
return zprint.zprint.any_zcoll_QMARK_.call(null,options__$5,new_ind,zloc);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = cljs.core.not.call(null,wrap_QMARK___$1);
if(or__20754__auto____$1){
return or__20754__auto____$1;
} else {
return force_nl_QMARK_;
}
}
})())){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,cljs.core.apply.call(null,zprint.zprint.concat_no_nil,zprint.zprint.precede_w_nl.call(null,options__$5,new_ind,coll_print__$1,new cljs.core.Keyword(null,"no-nl-first","no-nl-first",-1507054608),new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043).cljs$core$IFn$_invoke$arity$1(caller.call(null,options__$5)))),r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.call(null,"fzprint-vec*: wrap coll-print:",coll_print__$1));
} else {
}

return zprint.zprint.wrap_zmap.call(null,caller,options__$5,new_ind,new_ind,coll_print__$1);
})()
,r_str_vec);
}
}
}
} else {
return null;
}
}

}
}
}
}
});
zprint.zprint.fzprint_vec = (function zprint$zprint$fzprint_vec(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),"[","]",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
zprint.zprint.fzprint_array = (function zprint$zprint$fzprint_array(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"array","array",-2080713842),"[","]",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Pretty print and focus style a :set element.
 */
zprint.zprint.fzprint_set = (function zprint$zprint$fzprint_set(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"set","set",304602554),"#{","}",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Do the same as interpose, but different seps depending on pred?.
 *   If sep-nil is nil, then when pred? is false we don't interpose
 *   anything!
 */
zprint.zprint.interpose_either = (function zprint$zprint$interpose_either(sep_true,sep_nil,pred_QMARK_,coll){
var coll__$1 = coll;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var interpose_QMARK_ = null;
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
var G__55227 = cljs.core.next.call(null,coll__$1);
var G__55228 = (cljs.core.truth_(interpose_QMARK_)?zprint.zprint.conj_it_BANG_.call(null,out,sep_true,cljs.core.first.call(null,coll__$1)):(((((cljs.core.count.call(null,out) === (0))) || ((sep_nil == null))))?cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,coll__$1)):zprint.zprint.conj_it_BANG_.call(null,out,sep_nil,cljs.core.first.call(null,coll__$1))));
var G__55229 = pred_QMARK_.call(null,cljs.core.first.call(null,coll__$1));
coll__$1 = G__55227;
out = G__55228;
interpose_QMARK_ = G__55229;
continue;
}
break;
}
});
/**
 * Move through a sequence of style vecs and ensure that at least
 *   one newline (actually an indent) appears before each element.  If
 *   a newline in the style-vecs is where we wanted one, well and good.
 *   Comments are now not recognized as different, increasing our
 *   appreciation of diversity.  If not-first? is truthy, then don't
 *   put a newline before the first element.  nl-count is the count
 *   of newlines after the first.  If it is nil, assume 1.  It may be
 *   a vector of newlines, and the next element of the vector is used after
 *   any non-comment non-newline is processed.  The last element of the
 *   vector is used once it runs out.
 */
zprint.zprint.precede_w_nl = (function zprint$zprint$precede_w_nl(options,ind,coll,not_first_QMARK_,nl_count){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"precede-w-nl: (count coll)",cljs.core.count.call(null,coll),"not-first?",not_first_QMARK_,"nl-count:",nl_count));
} else {
}

var nl_count__$1 = (function (){var or__20754__auto__ = nl_count;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1);
}
})();
var nl_count__$2 = ((cljs.core.vector_QMARK_.call(null,nl_count__$1))?nl_count__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl_count__$1], null));
var nl_count__$3 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),nl_count__$2);
var coll__$1 = coll;
var ind_seq = ((cljs.core.coll_QMARK_.call(null,ind))?ind:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ind],null)));
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var added_nl_QMARK_ = not_first_QMARK_;
var num_nl = (cljs.core.truth_(not_first_QMARK_)?cljs.core.first.call(null,nl_count__$3):(cljs.core.first.call(null,nl_count__$3) - (1)));
var nl_count_vec = nl_count__$3;
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
var result = cljs.core.persistent_BANG_.call(null,out);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"precede-w-nl: exit:",result)):null);
var previous_element_index = (cljs.core.count.call(null,result) - (2));
var previous_type = (((!((previous_element_index < (0)))))?cljs.core.nth.call(null,cljs.core.first.call(null,cljs.core.nth.call(null,result,previous_element_index)),(2)):null);
return result;
} else {
var vec__55242 = cljs.core.first.call(null,coll__$1);
var vec__55245 = cljs.core.nth.call(null,vec__55242,(0),null);
var s = cljs.core.nth.call(null,vec__55245,(0),null);
var color = cljs.core.nth.call(null,vec__55245,(1),null);
var what = cljs.core.nth.call(null,vec__55245,(2),null);
var element = vec__55242;
var indent = cljs.core.first.call(null,ind_seq);
var newline_QMARK_ = cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"newline","newline",1790071323));
var comment_QMARK_ = cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"comment","comment",532206069));
var comment_inline_QMARK_ = cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405));
var last_what = cljs.core.nth.call(null,cljs.core.last.call(null,element),(2));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"precede-w-nl: element:",element,"added-nl?",added_nl_QMARK_,"num-nl:",num_nl,"comment?",comment_QMARK_));
} else {
}

var G__55254 = cljs.core.next.call(null,coll__$1);
var G__55255 = (function (){var temp__5718__auto__ = cljs.core.next.call(null,ind_seq);
if(temp__5718__auto__){
var next_ind = temp__5718__auto__;
return next_ind;
} else {
return ind_seq;
}
})();
var G__55256 = ((newline_QMARK_)?(function (){var next_coll = cljs.core.next.call(null,coll__$1);
if(cljs.core.empty_QMARK_.call(null,next_coll)){
return cljs.core.conj_BANG_.call(null,out,element);
} else {
var vec__55248 = cljs.core.first.call(null,next_coll);
var vec__55251 = cljs.core.nth.call(null,vec__55248,(0),null);
var _ = cljs.core.nth.call(null,vec__55251,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__55251,(1),null);
var next_what = cljs.core.nth.call(null,vec__55251,(2),null);
var next_nl_count_vec = nl_count_vec;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"precede-w-nl next-what:",next_what,"(inc num-nl):",(num_nl + (1)),"(first next-nl-count-vec):",cljs.core.first.call(null,next_nl_count_vec)));
} else {
}

if(((cljs.core._EQ_.call(null,next_what,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (((num_nl + (1)) < cljs.core.first.call(null,next_nl_count_vec))))){
return cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",color,new cljs.core.Keyword(null,"newline","newline",1790071323),(3)], null)], null));
} else {
return cljs.core.conj_BANG_.call(null,out,element);
}
}
})():(((num_nl >= cljs.core.first.call(null,nl_count_vec)))?cljs.core.conj_BANG_.call(null,out,element):zprint.zprint.conj_it_BANG_.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.first.call(null,nl_count_vec) - num_nl),"\n"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,indent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(28)], null)], null),element)));
var G__55257 = newline_QMARK_;
var G__55258 = ((newline_QMARK_)?(num_nl + (1)):((comment_QMARK_)?(cljs.core.first.call(null,nl_count_vec) - (1)):(0)));
var G__55259 = ((((newline_QMARK_) || (((comment_QMARK_) || (comment_inline_QMARK_)))))?nl_count_vec:((cljs.core.next.call(null,nl_count_vec))?cljs.core.next.call(null,nl_count_vec):nl_count_vec));
coll__$1 = G__55254;
ind_seq = G__55255;
out = G__55256;
added_nl_QMARK_ = G__55257;
num_nl = G__55258;
nl_count_vec = G__55259;
continue;
}
break;
}
});
/**
 * Analyze a style-vec which contains only newlines, and return the count 
 *   of newlines in the style vec.  We assume that each :newline style-vec 
 *   contains one newline (i.e., it was generated by fzprint-newlines).
 */
zprint.zprint.count_newline_types = (function zprint$zprint$count_newline_types(newline_style_vec){
var count_of_types = cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,(function (p1__55260_SHARP_){
return cljs.core.nth.call(null,p1__55260_SHARP_,(2));
}),newline_style_vec)));
if(((cljs.core.not_EQ_.call(null,count_of_types,(1))) || (cljs.core.not_EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,newline_style_vec),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))){
throw (new Error(["Internal Error!  Please submit an issue with an example"," of how to reproduce this error!"," count-newline-types: more than one type or wrong type! count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count_of_types)," style-vec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(newline_style_vec)].join('')));
} else {
}

return cljs.core.count.call(null,newline_style_vec);
});
/**
 * Count the number of blanks at the right end of a string.
 */
zprint.zprint.count_right_blanks = (function zprint$zprint$count_right_blanks(s){
var i = cljs.core.count.call(null,s);
while(true){
if((i < (0))){
return cljs.core.count.call(null,s);
} else {
if(clojure.string.ends_with_QMARK_.call(null,cljs.core.subs.call(null,s,(0),i)," ")){
var G__55261 = (i - (1));
i = G__55261;
continue;
} else {
return (cljs.core.count.call(null,s) - i);
}
}
break;
}
});
/**
 * Trim only blanks off the right end of a string.
 */
zprint.zprint.trimr_blanks = (function zprint$zprint$trimr_blanks(s){
var i = cljs.core.count.call(null,s);
while(true){
if((i < (0))){
return "";
} else {
if(clojure.string.ends_with_QMARK_.call(null,cljs.core.subs.call(null,s,(0),i)," ")){
var G__55262 = (i - (1));
i = G__55262;
continue;
} else {
return cljs.core.subs.call(null,s,(0),i);
}
}
break;
}
});
/**
 * Given a count n, and style vec that ends with a newline and an associated
 *   indent of some number of spaces, return a sequence of n of those style vecs
 *   but remove spaces from all but the last of them.
 */
zprint.zprint.repeat_style_vec_nl = (function zprint$zprint$repeat_style_vec_nl(n,style_vec){
var no_space_n = (function (){var x__21111__auto__ = (n - (1));
var y__21112__auto__ = (0);
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})();
if((no_space_n === (0))){
return style_vec;
} else {
var vec__55263 = cljs.core.last.call(null,style_vec);
var s = cljs.core.nth.call(null,vec__55263,(0),null);
var color = cljs.core.nth.call(null,vec__55263,(1),null);
var what = cljs.core.nth.call(null,vec__55263,(2),null);
var no_space_element = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks.call(null,s),color,what], null);
var no_space_style_vec = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.butlast.call(null,style_vec),no_space_element));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,no_space_n,no_space_style_vec),style_vec));
}
});
/**
 * Given an element, trim the blanks out of the string.
 */
zprint.zprint.trimr_blanks_element = (function zprint$zprint$trimr_blanks_element(p__55266){
var vec__55267 = p__55266;
var s = cljs.core.nth.call(null,vec__55267,(0),null);
var color = cljs.core.nth.call(null,vec__55267,(1),null);
var what = cljs.core.nth.call(null,vec__55267,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks.call(null,s),color,what], null);
});
/**
 * Given a style-vec, trim the blanks out of each element.
 */
zprint.zprint.trimr_blanks_style_vec = (function zprint$zprint$trimr_blanks_style_vec(style_vec){
return cljs.core.mapv.call(null,zprint.zprint.trimr_blanks_element,style_vec);
});
/**
 * Given a count n, and single element from a style-vec which
 *   contains a newline and an indent of some number of spaces, return
 *   a sequence of n of those style vecs but remove spaces from all
 *   but the last of them.  This is so that we don't have trailing spaces
 *   on lines.
 */
zprint.zprint.repeat_element_nl = (function zprint$zprint$repeat_element_nl(n,element){
var no_space_n = (function (){var x__21111__auto__ = (n - (1));
var y__21112__auto__ = (0);
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})();
if((no_space_n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null);
} else {
var vec__55270 = element;
var s = cljs.core.nth.call(null,vec__55270,(0),null);
var color = cljs.core.nth.call(null,vec__55270,(1),null);
var what = cljs.core.nth.call(null,vec__55270,(2),null);
var no_space_element = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks.call(null,s),color,what], null);
var result = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.repeat.call(null,no_space_n,no_space_element),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null)));
return result;
}
});
/**
 * Given a coll of [hangflow style-vec] pairs, return the 
 *   [hangflow style-vec] pair where the style-vec is not a 
 *   :comment, :comment-inline, :newline or :indent.
 */
zprint.zprint.next_non_comment_nl = (function zprint$zprint$next_non_comment_nl(coll){
var coll__$1 = coll;
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
return null;
} else {
var vec__55273 = cljs.core.first.call(null,coll__$1);
var _ = cljs.core.nth.call(null,vec__55273,(0),null);
var style_vec = cljs.core.nth.call(null,vec__55273,(1),null);
var vec__55276 = cljs.core.first.call(null,style_vec);
var ___$1 = cljs.core.nth.call(null,vec__55276,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__55276,(1),null);
var what = cljs.core.nth.call(null,vec__55276,(2),null);
if(((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"comment","comment",532206069))) || (((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))) || (((cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"newline","newline",1790071323))))))))){
var G__55279 = cljs.core.next.call(null,coll__$1);
coll__$1 = G__55279;
continue;
} else {
return cljs.core.first.call(null,coll__$1);
}
}
break;
}
});
/**
 * Do very specialized interpose, but different seps depending on pred-fn
 *   return and nl-separator? and nl-separator-all?. This assumes that 
 *   sep-* does one line, and sep-*-nl does two lines. coll is
 *   a series of [[:flow [['
 *   ' :none :newline 2]]] 
 *             [:flow [['ZprintType' :black :element] ...]]] fragments from
 *   fzprint-map-two-up.
 */
zprint.zprint.interpose_either_nl_hf = (function zprint$zprint$interpose_either_nl_hf(sep_comma,sep_comma_nl,sep,sep_nl,p__55280,comma_QMARK_,coll){
var map__55281 = p__55280;
var map__55281__$1 = cljs.core.__destructure_map.call(null,map__55281);
var suboptions = map__55281__$1;
var nl_separator_QMARK_ = cljs.core.get.call(null,map__55281__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var nl_separator_all_QMARK_ = cljs.core.get.call(null,map__55281__$1,new cljs.core.Keyword(null,"nl-separator-all?","nl-separator-all?",-1332523641));
var coll__$1 = coll;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var previous_needs_comma_QMARK_ = null;
var add_nl_QMARK_ = null;
var first_QMARK_ = true;
var newline_count = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
return cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.persistent_BANG_.call(null,(((newline_count === (0)))?out:zprint.zprint.conj_it_BANG_.call(null,out,zprint.zprint.repeat_element_nl.call(null,newline_count,cljs.core.first.call(null,sep))))));
} else {
var vec__55291 = cljs.core.first.call(null,coll__$1);
var hangflow = cljs.core.nth.call(null,vec__55291,(0),null);
var style_vec = cljs.core.nth.call(null,vec__55291,(1),null);
var vec__55294 = cljs.core.first.call(null,style_vec);
var _ = cljs.core.nth.call(null,vec__55294,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__55294,(1),null);
var what = cljs.core.nth.call(null,vec__55294,(2),null);
if(cljs.core._EQ_.call(null,what,new cljs.core.Keyword(null,"newline","newline",1790071323))){
var G__55300 = cljs.core.next.call(null,coll__$1);
var G__55301 = out;
var G__55302 = previous_needs_comma_QMARK_;
var G__55303 = add_nl_QMARK_;
var G__55304 = first_QMARK_;
var G__55305 = (newline_count + zprint.zprint.count_newline_types.call(null,style_vec));
coll__$1 = G__55300;
out = G__55301;
previous_needs_comma_QMARK_ = G__55302;
add_nl_QMARK_ = G__55303;
first_QMARK_ = G__55304;
newline_count = G__55305;
continue;
} else {
var vec__55297 = (cljs.core.truth_(previous_needs_comma_QMARK_)?(cljs.core.truth_(add_nl_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_comma_nl,(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_comma,(1)], null)):(cljs.core.truth_(add_nl_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_nl,(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep,(1)], null)));
var interpose_style_vec = cljs.core.nth.call(null,vec__55297,(0),null);
var interpose_count = cljs.core.nth.call(null,vec__55297,(1),null);
var interpose_count__$1 = (cljs.core.truth_(first_QMARK_)?(1):interpose_count);
var addtl_nl_needed = (function (){var x__21111__auto__ = (newline_count - interpose_count__$1);
var y__21112__auto__ = (0);
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})();
var G__55306 = cljs.core.next.call(null,coll__$1);
var G__55307 = (cljs.core.truth_(first_QMARK_)?(((addtl_nl_needed === (0)))?cljs.core.conj_BANG_.call(null,out,style_vec):zprint.zprint.conj_it_BANG_.call(null,out,zprint.zprint.repeat_element_nl.call(null,addtl_nl_needed,cljs.core.first.call(null,sep)),style_vec)):(((addtl_nl_needed === (0)))?zprint.zprint.conj_it_BANG_.call(null,out,interpose_style_vec,style_vec):zprint.zprint.conj_it_BANG_.call(null,out,zprint.zprint.trimr_blanks_style_vec.call(null,interpose_style_vec),zprint.zprint.repeat_element_nl.call(null,addtl_nl_needed,cljs.core.first.call(null,sep)),style_vec)));
var G__55308 = (function (){var and__20748__auto__ = comma_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = cljs.core.not_EQ_.call(null,what,new cljs.core.Keyword(null,"comment","comment",532206069));
if(and__20748__auto____$1){
var and__20748__auto____$2 = cljs.core.not_EQ_.call(null,what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405));
if(and__20748__auto____$2){
return zprint.zprint.next_non_comment_nl.call(null,cljs.core.next.call(null,coll__$1));
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})();
var G__55309 = (function (){var or__20754__auto__ = (function (){var and__20748__auto__ = nl_separator_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,hangflow,new cljs.core.Keyword(null,"flow","flow",590489032));
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return nl_separator_all_QMARK_;
}
})();
var G__55310 = null;
var G__55311 = (0);
coll__$1 = G__55306;
out = G__55307;
previous_needs_comma_QMARK_ = G__55308;
add_nl_QMARK_ = G__55309;
first_QMARK_ = G__55310;
newline_count = G__55311;
continue;

}
}
break;
}
});
/**
 * Put a single or double line between pairs returned from
 *   fzprint-map-two-up.  The second argument is the map resulting
 *   from (:map options) or (:pair options) or whatever.  It should
 *   have :nl-separator? and :nl-separator-all? in it.
 */
zprint.zprint.interpose_nl_hf = (function zprint$zprint$interpose_nl_hf(suboptions,ind,coll){
return zprint.zprint.interpose_either_nl_hf.call(null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(29)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(30)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(31)], null)], null),suboptions,null,coll);
});
zprint.zprint.fzprint_map_STAR_ = (function zprint$zprint$fzprint_map_STAR_(caller,l_str,r_str,p__55312,ind,zloc,ns){
var map__55313 = p__55312;
var map__55313__$1 = cljs.core.__destructure_map.call(null,map__55313);
var options = map__55313__$1;
var map__55314 = cljs.core.get.call(null,map__55313__$1,caller);
var map__55314__$1 = cljs.core.__destructure_map.call(null,map__55314);
var map_options = map__55314__$1;
var comma_QMARK_ = cljs.core.get.call(null,map__55314__$1,new cljs.core.Keyword(null,"comma?","comma?",1532168963));
var key_ignore = cljs.core.get.call(null,map__55314__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.call(null,map__55314__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var nl_separator_QMARK_ = cljs.core.get.call(null,map__55314__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var force_nl_QMARK_ = cljs.core.get.call(null,map__55314__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var lift_ns_QMARK_ = cljs.core.get.call(null,map__55314__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.call(null,map__55314__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var indent = cljs.core.get.call(null,map__55314__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var one_line_QMARK_ = cljs.core.get.call(null,map__55313__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var ztype = cljs.core.get.call(null,map__55313__$1,new cljs.core.Keyword(null,"ztype","ztype",-562179020));
var map_depth = cljs.core.get.call(null,map__55313__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var in_code_QMARK_ = cljs.core.get.call(null,map__55313__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"off","off",606440789))){
return zprint.zprint.fzprint_noformat.call(null,l_str,r_str,options,zloc);
} else {
var vec__55315 = zprint.zprint.get_respect_indent.call(null,options,caller,new cljs.core.Keyword(null,"map","map",1371690461));
var respect_nl_QMARK_ = cljs.core.nth.call(null,vec__55315,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.call(null,vec__55315,(1),null);
var indent_only_QMARK_ = cljs.core.nth.call(null,vec__55315,(2),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map* caller:",caller));
} else {
}

if(cljs.core.truth_(indent_only_QMARK_)){
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(map_depth + (1)));
var l_str__$1 = (cljs.core.truth_(ns)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str)].join(''):l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map.call(null,options__$1,l_str__$1),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$1,ind,zloc,r_str);
if((zprint.zfns.zcount.call(null,zloc) === (0))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_indent.call(null,caller,l_str__$1,r_str,options__$1,ind,zloc,null,null),r_str_vec);
}
} else {
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(map_depth + (1)));
var zloc__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = cljs.core._EQ_.call(null,ztype,new cljs.core.Keyword(null,"sexpr","sexpr",-783344087));
if(and__20748__auto__){
var or__20754__auto__ = key_ignore;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return key_ignore_silent;
}
} else {
return and__20748__auto__;
}
})())?zprint.zprint.map_ignore.call(null,caller,options__$1,zloc):zloc);
var vec__55318 = zprint.zprint.partition_all_2_nc.call(null,caller,zprint.zprint.no_max_length.call(null,options__$1),(cljs.core.truth_(respect_nl_QMARK_)?zprint.zfns.zseqnws_w_nl.call(null,zloc__$1):(cljs.core.truth_(respect_bl_QMARK_)?zprint.zfns.zseqnws_w_bl.call(null,zloc__$1):zprint.zfns.zseqnws.call(null,zloc__$1)
)));
var no_sort_QMARK_ = cljs.core.nth.call(null,vec__55318,(0),null);
var pair_seq = cljs.core.nth.call(null,vec__55318,(1),null);
var no_sort_QMARK___$1 = (function (){var or__20754__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = respect_nl_QMARK_;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return respect_bl_QMARK_;
}
}
})();
var vec__55321 = zprint.zfns.zlift_ns.call(null,cljs.core.assoc.call(null,map_options,new cljs.core.Keyword(null,"in-code?","in-code?",194866464),in_code_QMARK_),pair_seq,ns);
var ns__$1 = cljs.core.nth.call(null,vec__55321,(0),null);
var lift_pair_seq = cljs.core.nth.call(null,vec__55321,(1),null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-map* zlift-ns ns:",ns__$1,"no-sort?",no_sort_QMARK___$1)):null);
var l_str__$1 = (cljs.core.truth_(ns__$1)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str)].join(''):l_str);
var pair_seq__$1 = (function (){var or__20754__auto__ = lift_pair_seq;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return pair_seq;
}
})();
var pair_seq__$2 = (cljs.core.truth_(no_sort_QMARK___$1)?pair_seq__$1:zprint.zprint.order_out.call(null,caller,options__$1,cljs.core.first,pair_seq__$1));
var max_length = zprint.zprint.get_max_length.call(null,options__$1);
var pair_count = cljs.core.count.call(null,pair_seq__$2);
var pair_seq__$3 = (((pair_count > max_length))?cljs.core.concat.call(null,cljs.core.take.call(null,max_length,pair_seq__$2),(new cljs.core.List(null,(new cljs.core.List(null,zprint.zfns.zdotdotdot.call(null),null,(1),null)),null,(1),null))):pair_seq__$2);
var indent__$1 = cljs.core.count.call(null,l_str__$1);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map.call(null,options__$1,l_str__$1),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$1,ind,zloc__$1,r_str);
if(cljs.core.empty_QMARK_.call(null,pair_seq__$3)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-map*:",zprint.zfns.zstring.call(null,zloc__$1),"ind:",ind,"comma?",comma_QMARK_,"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$1))):null);
var pair_print_one_line = zprint.zprint.fzprint_map_two_up.call(null,caller,(cljs.core.truth_(one_line_QMARK_)?options__$1:cljs.core.assoc.call(null,options__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true)),(indent__$1 + ind),comma_QMARK_,pair_seq__$3);
var pair_print_one_line__$1 = zprint.zprint.remove_hangflow.call(null,pair_print_one_line);
var pair_print_one_line__$2 = ((zprint.zprint.fzfit_one_line.call(null,options__$1,zprint.zprint.style_lines.call(null,options__$1,(indent__$1 + ind),pair_print_one_line__$1)))?pair_print_one_line__$1:null);
var one_line = (cljs.core.truth_(pair_print_one_line__$2)?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,zprint.zprint.interpose_either.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(19)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(23)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(20)], null)], null),cljs.core.constantly.call(null,comma_QMARK_),pair_print_one_line__$2)):null);
var one_line_lines = zprint.zprint.style_lines.call(null,options__$1,(indent__$1 + ind),one_line);
var one_line__$1 = ((zprint.zprint.fzfit_one_line.call(null,options__$1,one_line_lines))?one_line:null);
if(cljs.core.truth_(one_line__$1)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,one_line__$1,r_str_vec);
} else {
if(cljs.core.not.call(null,one_line_QMARK_)){
var pair_print = zprint.zprint.fzprint_map_two_up.call(null,caller,options__$1,(indent__$1 + ind),comma_QMARK_,pair_seq__$3);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.interpose_either_nl_hf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(21)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(32)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(22)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(33)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(34)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(35)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(36)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(37)], null)], null),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options__$1),comma_QMARK_,pair_print),r_str_vec);
} else {
return null;
}
}
}
}
}
});
/**
 * Format a real map.
 */
zprint.zprint.fzprint_map = (function zprint$zprint$fzprint_map(options,ind,zloc){
var vec__55324 = (cljs.core.truth_(zprint.zfns.znamespacedmap_QMARK_.call(null,zloc))?(function (){var zloc_seq = zprint.zfns.zmap.call(null,cljs.core.identity,zloc);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map: zloc-seq",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)),cljs.core.second.call(null,zloc_seq)], null);
})():null);
var ns = cljs.core.nth.call(null,vec__55324,(0),null);
var lifted_map = cljs.core.nth.call(null,vec__55324,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map: ns:",ns,"indent:",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options)),"map-options:",cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"key-value-options","key-value-options",694765603))));
} else {
}

if(cljs.core.truth_(ns)){
return zprint.zprint.fzprint_map_STAR_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),"{","}",zprint.zprint.rightmost.call(null,options),ind,lifted_map,ns);
} else {
return zprint.zprint.fzprint_map_STAR_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),"{","}",zprint.zprint.rightmost.call(null,options),ind,zloc,null);
}
});
/**
 * Return true if the string starts with #object[
 */
zprint.zprint.object_str_QMARK_ = (function zprint$zprint$object_str_QMARK_(s){
return cljs.core.re_find.call(null,/^#object\[/,s);
});
/**
 * Print something that looks like #object[...] in a way
 *   that will acknowledge the structure inside of the [...]
 */
zprint.zprint.fzprint_object = (function zprint$zprint$fzprint_object(var_args){
var G__55328 = arguments.length;
switch (G__55328) {
case 4:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,zloc_value){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,zprint.zfns.zobj_to_vec.call(null,zloc,zloc_value));
}));

(zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,zprint.zfns.zobj_to_vec.call(null,zloc));
}));

(zprint.zprint.fzprint_object.cljs$lang$maxFixedArity = 4);

/**
 * Find the hash-code identity for an object.
 */
zprint.zprint.hash_identity_str = (function zprint$zprint$hash_identity_str(obj){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,obj));
});
zprint.zprint.fzprint_atom = (function zprint$zprint$fzprint_atom(p__55330,ind,zloc){
var map__55331 = p__55330;
var map__55331__$1 = cljs.core.__destructure_map.call(null,map__55331);
var options = map__55331__$1;
var map__55332 = cljs.core.get.call(null,map__55331__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var map__55332__$1 = cljs.core.__destructure_map.call(null,map__55332);
var object_QMARK_ = cljs.core.get.call(null,map__55332__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__20748__auto__ = object_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return zprint.zprint.object_str_QMARK_.call(null,zprint.zfns.zstring.call(null,zloc));
} else {
return and__20748__auto__;
}
})())){
return zprint.zprint.fzprint_object.call(null,options,ind,zloc,zprint.zfns.zderef.call(null,zloc));
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var arg_1 = ["Atom@",zprint.zprint.hash_identity_str.call(null,zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-atom: arg-1:",arg_1,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,options),arg_1_indent,(indent + ind),zprint.zfns.zderef.call(null,zloc)),r_str_vec);
}
});
/**
 * Print out a future or a promise or a delay.  These can only be 
 *   sexpressions, since they don't exist in a textual representation 
 *   of code (or data for that matter).  That means that we can use 
 *   regular sexpression operations on zloc.
 */
zprint.zprint.fzprint_future_promise_delay_agent = (function zprint$zprint$fzprint_future_promise_delay_agent(options,ind,zloc){
var zloc_type = (cljs.core.truth_(zprint.zfns.zfuture_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"future","future",1877842724):(cljs.core.truth_(zprint.zfns.zpromise_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"promise","promise",1767129287):(cljs.core.truth_(zprint.zfns.zdelay_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"delay","delay",-574225219):(cljs.core.truth_(zprint.zfns.zagent_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"agent","agent",-766455027):(function(){throw (new Error("Not a future, promise, or delay:",zprint.zfns.zstring.call(null,zloc)))})()
))));
if(cljs.core.truth_((function (){var and__20748__auto__ = new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1(options.call(null,zloc_type));
if(cljs.core.truth_(and__20748__auto__)){
return zprint.zprint.object_str_QMARK_.call(null,zprint.zfns.zstring.call(null,zloc));
} else {
return and__20748__auto__;
}
})())){
if(((cljs.core._EQ_.call(null,zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027))) || (cljs.core.realized_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_object.call(null,options,ind,zloc,zprint.zfns.zderef.call(null,zloc));
} else {
return zprint.zprint.fzprint_object.call(null,options,ind,zloc);
}
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var type_str = (function (){var G__55333 = zloc_type;
var G__55333__$1 = (((G__55333 instanceof cljs.core.Keyword))?G__55333.fqn:null);
switch (G__55333__$1) {
case "future":
return "Future@";

break;
case "promise":
return "Promise@";

break;
case "delay":
return "Delay@";

break;
case "agent":
return "Agent@";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55333__$1)].join('')));

}
})();
var arg_1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_str),zprint.zprint.hash_identity_str.call(null,zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
var zloc_realized_QMARK_ = ((cljs.core._EQ_.call(null,zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027)))?true:cljs.core.realized_QMARK_.call(null,zloc));
var value = ((zloc_realized_QMARK_)?zprint.zfns.zderef.call(null,zloc):(function (){var G__55334 = zloc_type;
var G__55334__$1 = (((G__55334 instanceof cljs.core.Keyword))?G__55334.fqn:null);
switch (G__55334__$1) {
case "future":
return "pending";

break;
case "promise":
return "not-delivered";

break;
case "delay":
return "pending";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55334__$1)].join('')));

}
})());
var options__$1 = ((zloc_realized_QMARK_)?options:cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-fpda: arg-1:",arg_1,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,options__$1),arg_1_indent,(indent + ind),value),r_str_vec);
}
});
/**
 * Print a function object, what you get when you put a function in
 *   a collection, for instance.  This doesn't do macros, you will notice.
 *   It also can't be invoked when zloc is a zipper.
 */
zprint.zprint.fzprint_fn_obj = (function zprint$zprint$fzprint_fn_obj(p__55337,ind,zloc){
var map__55338 = p__55337;
var map__55338__$1 = cljs.core.__destructure_map.call(null,map__55338);
var options = map__55338__$1;
var map__55339 = cljs.core.get.call(null,map__55338__$1,new cljs.core.Keyword(null,"fn-obj","fn-obj",465065936));
var map__55339__$1 = cljs.core.__destructure_map.call(null,map__55339);
var object_QMARK_ = cljs.core.get.call(null,map__55339__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__20748__auto__ = object_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return zprint.zprint.object_str_QMARK_.call(null,zprint.zfns.zstring.call(null,zloc));
} else {
return and__20748__auto__;
}
})())){
return zprint.zprint.fzprint_object.call(null,options,ind,zloc);
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var arg_1_left = "Fn@";
var arg_1_right = zprint.zprint.hash_identity_str.call(null,zloc);
var arg_1_indent = ((((ind + indent) + (1)) + ((arg_1_left).length)) + ((arg_1_right).length));
var class_str = cljs.core.pr_str.call(null,cljs.core.type.call(null,zloc));
var name_js = cljs.core.str.cljs$core$IFn$_invoke$arity$1(zloc.name);
var color = (cljs.core.truth_((function (){var or__20754__auto__ = cljs.core.re_find.call(null,/^clojure/,name_js);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.re_find.call(null,/^cljs/,name_js);
}
})())?zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"fn","fn",-1175266204)):new cljs.core.Keyword(null,"none","none",1333468478));
var name_split = clojure.string.split.call(null,name_js,/\$/);
var arg_2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,".",cljs.core.butlast.call(null,name_split)))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,name_split))].join('');
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-fn-obj: arg-1:",arg_1_left,arg_1_right,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_left,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_right,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true,new cljs.core.Keyword(null,"string-color","string-color",-1853875244),color)),arg_1_indent,(indent + ind),arg_2),r_str_vec);
}
});
zprint.zprint.fzprint_ns = (function zprint$zprint$fzprint_ns(options,ind,zloc){
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var arg_1 = "Namespace";
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-ns: arg-1:",arg_1,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,options),arg_1_indent,(indent + ind),cljs.core.ns_name.call(null,zloc)),r_str_vec);
});
/**
 * Given an options map, decrement the :depth value and return the result.
 */
zprint.zprint.dec_depth = (function zprint$zprint$dec_depth(options){
if(cljs.core.truth_(options)){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"depth","depth",1768663640),((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1);
}
})() - (1)));
} else {
return null;
}
});
zprint.zprint.fzprint_record = (function zprint$zprint$fzprint_record(p__55340,ind,zloc){
var map__55341 = p__55340;
var map__55341__$1 = cljs.core.__destructure_map.call(null,map__55341);
var options = map__55341__$1;
var map__55342 = cljs.core.get.call(null,map__55341__$1,new cljs.core.Keyword(null,"record","record",-779106859));
var map__55342__$1 = cljs.core.__destructure_map.call(null,map__55342);
var record_type_QMARK_ = cljs.core.get.call(null,map__55342__$1,new cljs.core.Keyword(null,"record-type?","record-type?",-1195765660));
var to_string_QMARK_ = cljs.core.get.call(null,map__55342__$1,new cljs.core.Keyword(null,"to-string?","to-string?",1452120886));
if(cljs.core.truth_(to_string_QMARK_)){
return zprint.zprint.fzprint_STAR_.call(null,options,ind,zloc.toString());
} else {
if(cljs.core.not.call(null,record_type_QMARK_)){
return zprint.zprint.fzprint_STAR_.call(null,options,ind,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,zloc));
} else {
var l_str = "#";
var r_str = "";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var arg_1 = clojure.string.replace.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,zloc)),"/",".");
var arg_1__$1 = (function (){var tokens = clojure.string.split.call(null,arg_1,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.interpose.call(null,".",tokens)));
})();
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count.call(null,arg_1__$1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-record: arg-1:",arg_1__$1,"zstring zloc:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1__$1,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"record","record",-779106859),zprint.zprint.dec_depth.call(null,options),arg_1_indent,(indent + ind),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,zloc)),r_str_vec);
}
}
});
/**
 * Drop elements of the sequence up to and including the first element
 *   that is not zwhitespace?
 */
zprint.zprint.drop_thru_first_non_whitespace = (function zprint$zprint$drop_thru_first_non_whitespace(coll){
var no_whitespace = cljs.core.drop_while.call(null,zprint.zfns.zwhitespace_QMARK_,coll);
return cljs.core.drop.call(null,(1),no_whitespace);
});
/**
 * Take all elements of the sequence up to and including the first element
 *   that is not zwhitespace?
 */
zprint.zprint.take_thru_first_non_whitespace = (function zprint$zprint$take_thru_first_non_whitespace(coll){
var coll__$1 = coll;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(coll__$1)){
var element = cljs.core.first.call(null,coll__$1);
if(cljs.core.not.call(null,zprint.zfns.zwhitespace_QMARK_.call(null,element))){
return cljs.core.conj.call(null,out,element);
} else {
var G__55343 = cljs.core.next.call(null,coll__$1);
var G__55344 = cljs.core.conj.call(null,out,element);
coll__$1 = G__55343;
out = G__55344;
continue;
}
} else {
return out;
}
break;
}
});
/**
 * Print the two items in a meta node.  Different because it doesn't print
 *   a single collection, so it doesn't do any indent or rightmost.  It also
 *   uses a different approach to calling fzprint-flow-seq with the
 *   results zmap, so that it prints all of the seq, not just the rightmost.
 */
zprint.zprint.fzprint_meta = (function zprint$zprint$fzprint_meta(options,ind,zloc){
var l_str = "^";
var r_str = "";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var zloc_seq = zprint.zprint.fzprint_get_zloc_seq.call(null,new cljs.core.Keyword(null,"list","list",765357683),options,zloc);
var zloc_seq__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"split?","split?",-1633274741).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)))?zprint.zprint.take_thru_first_non_whitespace.call(null,zloc_seq):zloc_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-meta: zloc:",zprint.zfns.zstring.call(null,zloc),"zloc-seq",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq__$1)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,(cljs.core.truth_(new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(options)))?zprint.zprint.fzprint_indent.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),l_str,"",options,ind,zloc,null,null,new cljs.core.Keyword(null,"first-indent-only?","first-indent-only?",319167353)):zprint.zprint.fzprint_flow_seq.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),options,cljs.core.apply.call(null,cljs.core.vector,(((l_str).length) + ind),cljs.core.repeat.call(null,(cljs.core.count.call(null,zloc_seq__$1) - (1)),ind)),zloc_seq__$1)),r_str_vec);
});
/**
 * Print a reader-macro, often a reader-conditional. Adapted for differences
 *   in parsing #?@ between rewrite-clj and rewrite-cljs.  Also adapted for
 *   the rewrite-clj not parsing namespaced maps in the version presently
 *   used.
 */
zprint.zprint.fzprint_reader_macro = (function zprint$zprint$fzprint_reader_macro(options,ind,zloc){
var zstr = zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc));
var alt_at_QMARK_ = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,zstr),(2))) && (cljs.core._EQ_.call(null,cljs.core.subs.call(null,zstr,(1),(2)),"@")));
var reader_cond_QMARK_ = cljs.core._EQ_.call(null,cljs.core.subs.call(null,zstr,(0),(1)),"?");
var namespaced_QMARK_ = cljs.core._EQ_.call(null,cljs.core.subs.call(null,zstr,(0),(1)),":");
var at_QMARK_ = ((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zprint.zfns.zsecond.call(null,zloc)),new cljs.core.Keyword(null,"deref","deref",-145586795))) || (alt_at_QMARK_));
var vec__55345 = zprint.zprint.get_respect_indent.call(null,options,new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"map","map",1371690461));
var respect_nl_QMARK_ = cljs.core.nth.call(null,vec__55345,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.call(null,vec__55345,(1),null);
var indent_only_QMARK_ = cljs.core.nth.call(null,vec__55345,(2),null);
var l_str = ((((reader_cond_QMARK_) && (at_QMARK_)))?"#?@":(cljs.core.truth_((function (){var and__20748__auto__ = reader_cond_QMARK_;
if(and__20748__auto__){
return zprint.zfns.zcoll_QMARK_.call(null,zprint.zfns.zsecond.call(null,zloc));
} else {
return and__20748__auto__;
}
})())?"#?":((reader_cond_QMARK_)?(function(){throw (new Error(["Unknown reader macro: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zstring.call(null,zloc)),"' zfirst zloc: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)))].join('')))})():((namespaced_QMARK_)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zstr)].join(''):"#"
))));
var r_str = "";
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-bug?","dbg-bug?",-315779526).cljs$core$IFn$_invoke$arity$1(options))?null:null);
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var floc = ((((at_QMARK_) && ((!(alt_at_QMARK_)))))?zprint.zfns.zfirst.call(null,zprint.zfns.zsecond.call(null,zloc)):zprint.zfns.zsecond.call(null,zloc));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-reader-macro: zloc:",zprint.zfns.zstring.call(null,zloc),"floc:",zprint.zfns.zstring.call(null,floc),"l-str:",l_str));
} else {
}

if(cljs.core.truth_(indent_only_QMARK_)){
var l_str_io = ((reader_cond_QMARK_)?[l_str,"("].join(''):l_str);
var r_str_io = ((reader_cond_QMARK_)?")":"");
var l_str_vec_io = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str_io,zprint.zprint.zcolor_map.call(null,options,l_str_io),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec_io = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str_io);
return zprint.zprint.concat_no_nil.call(null,l_str_vec_io,((reader_cond_QMARK_)?zprint.zprint.fzprint_indent.call(null,new cljs.core.Keyword(null,"map","map",1371690461),l_str_io,r_str_io,zprint.zprint.rightmost.call(null,options),ind,floc,null,null):zprint.zprint.fzprint_indent.call(null,new cljs.core.Keyword(null,"map","map",1371690461),l_str_io,r_str_io,zprint.zprint.rightmost.call(null,options),ind,((namespaced_QMARK_)?zprint.zfns.znextnws_w_nl.call(null,zloc):zloc),null,null)),r_str_vec_io);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),((reader_cond_QMARK_)?zprint.zprint.fzprint_map_STAR_.call(null,new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),"(",")",zprint.zprint.rightmost.call(null,options),(indent + ind),floc,null):zprint.zprint.fzprint_flow_seq.call(null,new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),options,(indent + ind),(function (){var zloc_seq = (cljs.core.truth_(respect_nl_QMARK_)?zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc):(cljs.core.truth_(respect_bl_QMARK_)?zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc):zprint.zfns.zmap.call(null,cljs.core.identity,zloc)
));
if(namespaced_QMARK_){
return cljs.core.next.call(null,zloc_seq);
} else {
return zloc_seq;
}
})())),r_str_vec);
}
});
/**
 * Given an element which contains newlines, split it up into individual
 *   newline elements.
 */
zprint.zprint.fzprint_newline = (function zprint$zprint$fzprint_newline(options,ind,zloc){
var zstr = zprint.zfns.zstring.call(null,zloc);
var vec__55348 = zprint.finish.newline_vec.call(null,zstr);
var newline_count = cljs.core.nth.call(null,vec__55348,(0),null);
var _ = cljs.core.nth.call(null,vec__55348,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-newline: zloc:",zprint.zfns.zstring.call(null,zloc),"newline-count:",newline_count,"ind:",ind));
} else {
}

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,newline_count,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323),(2)], null)));
});
zprint.zprint.prefix_tags = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"quote","quote",-262615245),"'",new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),"`",new cljs.core.Keyword(null,"unquote","unquote",1649741032),"~",new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),"~@",new cljs.core.Keyword(null,"deref","deref",-145586795),"@",new cljs.core.Keyword(null,"var","var",-769682797),"#'",new cljs.core.Keyword(null,"uneval","uneval",1932037707),"#_"], null);
/**
 * Change options as necessary based on prefix tag.
 */
zprint.zprint.prefix_options = (function zprint$zprint$prefix_options(options,prefix_tag){
if(cljs.core._EQ_.call(null,prefix_tag,new cljs.core.Keyword(null,"uneval","uneval",1932037707))){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uneval","uneval",1932037707).cljs$core$IFn$_invoke$arity$1(options)));
} else {
if(cljs.core._EQ_.call(null,prefix_tag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"paren","paren",-294107600)], null),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(options))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562)], null),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return options;

}
}
});
/**
 * Sometime we need to give a caller to a routine, and there isn't
 *   a specific caller in the configuration.  So, we will use the configuration
 *   from some other caller and make up a new one just for this situation.
 *   The key-seq is the series of keys to both look up and create.  The
 *   caller is the new caller, and the existing-caller is the one from which
 *   we we will extract the information. This returns a new options map with
 *   the new-caller in it.
 */
zprint.zprint.make_caller = (function zprint$zprint$make_caller(options,new_caller,existing_caller,key_seq){
return cljs.core.update_in.call(null,options,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_caller], null),key_seq),(function (p1__55351_SHARP_){

return cljs.core.get_in.call(null,options,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_caller], null),key_seq));
}));
});
/**
 * If the value of :next-inner is a map, then config-and-validate it. If
 *   the value of :next-inner is a vector of maps, then config-and-validate
 *   each of the maps in turn.
 */
zprint.zprint.integrate_next_inner = (function zprint$zprint$integrate_next_inner(options){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"integrate-next-inner:"));
} else {
}

var next_inner = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unset","unset",-513298114));
if(cljs.core.map_QMARK_.call(null,next_inner)){
return cljs.core.first.call(null,zprint.config.config_and_validate.call(null,"next-inner:",null,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"next-inner","next-inner",608504966)),next_inner,null));
} else {
if(cljs.core.vector_QMARK_.call(null,next_inner)){
return cljs.core.reduce.call(null,(function (p1__55352_SHARP_,p2__55353_SHARP_){
return cljs.core.first.call(null,zprint.config.config_and_validate.call(null,"next-inner-vector",null,p1__55352_SHARP_,p2__55353_SHARP_,null));
}),cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"next-inner","next-inner",608504966)),next_inner);
} else {
if(cljs.core._EQ_.call(null,next_inner,new cljs.core.Keyword(null,"unset","unset",-513298114))){
return options;
} else {
return options;

}
}
}
});
/**
 * Take a style vec and remove any :whitespace element prior to a :newline
 *   or an :indent element.
 */
zprint.zprint.remove_spaces_pre_nl = (function zprint$zprint$remove_spaces_pre_nl(svec){
var nvec = svec;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,nvec)){
return out;
} else {
var vec__55360 = cljs.core.first.call(null,nvec);
var _ = cljs.core.nth.call(null,vec__55360,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__55360,(1),null);
var this_what = cljs.core.nth.call(null,vec__55360,(2),null);
var this_vec = vec__55360;
var vec__55363 = cljs.core.second.call(null,nvec);
var ___$2 = cljs.core.nth.call(null,vec__55363,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__55363,(1),null);
var next_what = cljs.core.nth.call(null,vec__55363,(2),null);
var next_vec = vec__55363;
var G__55366 = cljs.core.next.call(null,nvec);
var G__55367 = ((((cljs.core._EQ_.call(null,this_what,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (((cljs.core._EQ_.call(null,next_what,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,next_what,new cljs.core.Keyword(null,"indent","indent",-148200125)))))))?out:cljs.core.conj.call(null,out,this_vec));
nvec = G__55366;
out = G__55367;
continue;
}
break;
}
});
/**
 * Take a collection, and map fzprint* across it to get it colorized, but
 *   take every single whitespace and everything.  It should come out just like
 *   it went in, but with colors (or whatever).
 */
zprint.zprint.fzprint_noformat = (function zprint$zprint$fzprint_noformat(l_str,r_str,options,zloc){
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,(0),zloc,r_str);
var fzprint_STAR__seq = zprint.zfns.zmap_all_nl_comment.call(null,cljs.core.partial.call(null,zprint.zprint.fzprint_STAR_,options,(0)),zloc);
var _ = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"noformat","noformat",1359993659).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-noformat fzprint*-seq:",fzprint_STAR__seq)):null);
var concat_vec = zprint.zprint.concat_no_nil.call(null,l_str_vec,cljs.core.apply.call(null,cljs.core.concat,fzprint_STAR__seq),r_str_vec);
var ___$1 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"noformat","noformat",1359993659).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-noformat concat-vec:",concat_vec)):null);
var remove_spaces_vec = zprint.zprint.remove_spaces_pre_nl.call(null,concat_vec);
var ___$2 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"noformat","noformat",1359993659).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-noformat remove-spaces-vec:",remove_spaces_vec)):null);
return remove_spaces_vec;
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint_STAR_ = (function zprint$zprint$fzprint_STAR_(p__55368,indent,zloc){
var map__55369 = p__55368;
var map__55369__$1 = cljs.core.__destructure_map.call(null,map__55369);
var options = map__55369__$1;
var max_depth = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793));
var shift_seq = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"shift-seq","shift-seq",267527195));
var max_hang_count = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"max-hang-count","max-hang-count",637294812));
var in_code_QMARK_ = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var max_hang_depth = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"max-hang-depth","max-hang-depth",-915232220));
var next_inner = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966));
var dbg_s = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408));
var in_hang_QMARK_ = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var rightcnt = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var width = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var hex_QMARK_ = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"hex?","hex?",890937870));
var dbg_print_QMARK_ = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_QMARK_ = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var string_color = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"string-color","string-color",-1853875244));
var trim_comments_QMARK_ = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667));
var max_hang_span = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"max-hang-span","max-hang-span",256100693));
var one_line_QMARK_ = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var depth = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var string_str_QMARK_ = cljs.core.get.call(null,map__55369__$1,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352));
var avail = (width - indent);
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1)));
var _ = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$1));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint* **** next-inner:",new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(options__$1))):null);
var options__$2 = (cljs.core.truth_(next_inner)?zprint.zprint.integrate_next_inner.call(null,options__$1):options__$1);
var options__$3 = (cljs.core.truth_((function (){var or__20754__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = dbg_print_QMARK_;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return dbg_s;
}
}
})())?cljs.core.assoc.call(null,options__$2,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,options__$2,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),"")),(cljs.core.truth_(one_line_QMARK_)?"o":(cljs.core.truth_(in_hang_QMARK_)?"h":"."
))].join('')):options__$2);
var ___$1 = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),cljs.core.pr_str.call(null,"fzprint* **** rightcnt:",rightcnt,"depth:",depth,"indent:",indent,"in-hang?:",in_hang_QMARK_,":next-inner:",new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(options__$3),cljs.core.pr_str.call(null,zprint.zfns.zstring.call(null,zloc)))):null);
var dbg_data = cljs.core.deref.call(null,zprint.zprint.fzprint_dbg);
var dbg_focus_QMARK_ = (function (){var and__20748__auto__ = dbg_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,dbg_data,cljs.core.second.call(null,zprint.zfns.zfind_path.call(null,zloc)));
} else {
return and__20748__auto__;
}
})();
var options__$4 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.assoc.call(null,options__$3,new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"on","on",173873944)):options__$3);
var ___$2 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.println.call(null,"fzprint dbg-data:",dbg_data):null);
if(cljs.core.truth_((function (){var and__20748__auto__ = zprint.zfns.zcoll_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__20748__auto__)){
return (((depth >= max_depth)) || ((zprint.zprint.get_max_length.call(null,options__$4) === (0))));
} else {
return and__20748__auto__;
}
})())){
if(cljs.core._EQ_.call(null,zloc,zprint.zfns.zdotdotdot.call(null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["...",zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-depth-string","max-depth-string",-474325435).cljs$core$IFn$_invoke$arity$1(options__$4),zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
}
} else {
if(cljs.core.truth_((function (){var and__20748__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return ((cljs.core.not.call(null,one_line_QMARK_)) && (((cljs.core.not.call(null,in_code_QMARK_)) && (((((depth - in_hang_QMARK_) > max_hang_span)) || (((cljs.core.not.call(null,one_line_QMARK_)) && ((((zprint.zfns.zcount.call(null,zloc) > max_hang_count)) && ((depth > max_hang_depth)))))))))));
} else {
return and__20748__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(zprint.zfns.zrecord_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_record.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_list.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zvector_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_vec.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = zprint.zfns.zmap_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return zprint.zfns.znamespacedmap_QMARK_.call(null,zloc);
}
})())){
return zprint.zprint.fzprint_map.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zset_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_set.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zanonfn_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_anon_fn.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zfn_obj_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_fn_obj.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zarray_QMARK_.call(null,zloc))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"array","array",-2080713842).cljs$core$IFn$_invoke$arity$1(options__$4)))){
return zprint.zprint.fzprint_object.call(null,options__$4,indent,zloc);
} else {
return zprint.zprint.fzprint_array.call(null,options__$4,indent,zprint.zfns.zexpandarray.call(null,zloc));
}
} else {
if(cljs.core.truth_(zprint.zfns.zatom_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_atom.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zmeta_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_meta.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zprint.prefix_tags.call(null,zprint.zfns.ztag.call(null,zloc)))){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),zprint.zprint.prefix_tags.call(null,zprint.zfns.ztag.call(null,zloc)),"",zprint.zprint.make_caller.call(null,zprint.zprint.make_caller.call(null,zprint.zprint.make_caller.call(null,zprint.zprint.prefix_options.call(null,options__$4,zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842)], null)),new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635)], null)),new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998)], null)),indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zns_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_ns.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = zprint.zfns.zpromise_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = zprint.zfns.zfuture_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = zprint.zfns.zdelay_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
return zprint.zfns.zagent_QMARK_.call(null,zloc);
}
}
}
})())){
return zprint.zprint.fzprint_future_promise_delay_agent.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zreader_macro_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_reader_macro.call(null,options__$4,indent,zloc);
} else {
if(((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323))) && ((depth > (0))))){
return zprint.zprint.fzprint_newline.call(null,options__$4,indent,zloc);
} else {
var zstr = zprint.zfns.zstring.call(null,zloc);
var overflow_in_hang_QMARK_ = (function (){var and__20748__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return (((cljs.core.count.call(null,zstr) + indent) + (function (){var or__20754__auto__ = rightcnt;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})()) > width);
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_((function (){var and__20748__auto__ = zprint.zfns.zcomment_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [";",null], null), null),zstr));
} else {
return and__20748__auto__;
}
})())){
return zprint.zprint.fzprint_newline.call(null,options__$4,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zcomment_QMARK_.call(null,zloc))){
var zcomment = (((((depth === (0))) && (cljs.core.not.call(null,trim_comments_QMARK_))))?zstr:clojure.string.trimr.call(null,zstr));
var inline_comment_vec = (cljs.core.truth_(new cljs.core.Keyword(null,"inline?","inline?",-1674483791).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$4)))?zprint.comment.inlinecomment_QMARK_.call(null,zloc):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint* trim-comments?:",trim_comments_QMARK_,"inline-comment-vec:",inline_comment_vec);
} else {
}

if(cljs.core.truth_((function (){var and__20748__auto__ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$4));
if(cljs.core.truth_(and__20748__auto__)){
return overflow_in_hang_QMARK_;
} else {
return and__20748__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint*: overflow comment ========");
} else {
}

return null;
} else {
if(cljs.core.truth_(inline_comment_vec)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405),cljs.core.first.call(null,inline_comment_vec),cljs.core.second.call(null,inline_comment_vec)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment","comment",532206069)], null)], null);
}
}
} else {
if(cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"comma","comma",1699024745))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"comma","comma",1699024745)], null)], null);
} else {
if(((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (clojure.string.includes_QMARK_.call(null,zstr,",")))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"comma","comma",1699024745)], null)], null);
} else {
if(cljs.core.truth_(zprint.zfns.zwhitespaceorcomment_QMARK_.call(null,zloc))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(24)], null)], null);
} else {
if(cljs.core.truth_(overflow_in_hang_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint*: overflow <<<<<<<<<<");
} else {
}

return null;
} else {
if(cljs.core.truth_(zprint.zfns.zkeyword_QMARK_.call(null,zloc))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
var zloc_sexpr = zprint.zprint.get_sexpr.call(null,options__$4,zloc);
if(typeof zloc_sexpr === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(string_str_QMARK_)?zloc_sexpr:zprint.zfns.zstring.call(null,zloc)),(cljs.core.truth_(string_color)?string_color:zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"string","string",-1989541586))),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.showfn_QMARK_.call(null,options__$4,zloc_sexpr))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.show_user_fn_QMARK_.call(null,options__$4,zloc_sexpr))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"user-fn","user-fn",223976490)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(typeof zloc_sexpr === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(hex_QMARK_)?zprint.zfns.znumstr.call(null,zloc,hex_QMARK_,shift_seq):zstr),zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if((zloc_sexpr instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if((zloc_sexpr == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"nil","nil",99600501)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(zloc_sexpr === true){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"true","true",-1114210334)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(zloc_sexpr === false){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"false","false",1277713805)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.char_QMARK_.call(null,zloc_sexpr)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"char","char",-641587586)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_((function (){var or__20754__auto__ = (function (){var c__20875__auto__ = cljs.core.type.call(null,/regex/);
var x__20876__auto__ = zloc_sexpr;
return (x__20876__auto__ instanceof c__20875__auto__);
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.re_find.call(null,/^#\".*\"$/,zstr);
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"regex","regex",939488856)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$4,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);

}
}
}
}
}
}
}
}
}
}

}
}
}
}
}
}
}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint = (function zprint$zprint$fzprint(options,indent,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint: indent:",indent,"(:indent options)",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options));
} else {
}

var zloc__$1 = ((cljs.core.not.call(null,(function (){var and__20748__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438));
if(and__20748__auto__){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__20748__auto__;
}
})()))?zloc:zprint.zutil.add_spec_to_docstring.call(null,zloc,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options))));
var style_vec = zprint.zprint.fzprint_STAR_.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"depth","depth",1768663640),(0),new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(0),new cljs.core.Keyword(null,"zfn-map","zfn-map",1068295789),zprint.zfns.zfn_map.call(null)),indent,zloc__$1);
return style_vec;
});
/**
 * Count lines in a string.
 */
zprint.zprint.line_count = (function zprint$zprint$line_count(s){
return (cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n/,s)) + (1));
});
/**
 * Return a vector the lengths of lines.
 */
zprint.zprint.line_widths = (function zprint$zprint$line_widths(s){
return cljs.core.map.call(null,cljs.core.count,clojure.string.split.call(null,s,/\n/));
});
/**
 * Split a string into lines, and figure the max width.
 */
zprint.zprint.max_width = (function zprint$zprint$max_width(s){
return cljs.core.reduce.call(null,cljs.core.max,zprint.zprint.line_widths.call(null,s));
});
/**
 * Takes a string, and expands tabs inside of the string based
 *   on a tab-size argument.
 */
zprint.zprint.expand_tabs = (function zprint$zprint$expand_tabs(var_args){
var G__55371 = arguments.length;
switch (G__55371) {
case 2:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2 = (function (tab_size,s){
if(clojure.string.includes_QMARK_.call(null,s,"\t")){
return cljs.core.apply.call(null,cljs.core.str,(function (){var char_seq = cljs.core.seq.call(null,s);
var cur_len = cljs.core.long$.call(null,(0));
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,char_seq)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
var this_char = cljs.core.first.call(null,char_seq);
var tab_expansion = ((cljs.core._EQ_.call(null,this_char,"\t"))?(tab_size - cljs.core.mod.call(null,cur_len,tab_size)):null);
var G__55373 = cljs.core.rest.call(null,char_seq);
var G__55374 = ((cljs.core._EQ_.call(null,this_char,"\n"))?(0):(cur_len + cljs.core.long$.call(null,(function (){var or__20754__auto__ = tab_expansion;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1);
}
})())));
var G__55375 = (cljs.core.truth_(tab_expansion)?cljs.core.apply.call(null,zprint.zprint.conj_it_BANG_,out,cljs.core.repeat.call(null,tab_expansion," ")):cljs.core.conj_BANG_.call(null,out,this_char));
char_seq = G__55373;
cur_len = G__55374;
out = G__55375;
continue;
}
break;
}
})());
} else {
return s;
}
}));

(zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1 = (function (s){
return zprint.zprint.expand_tabs.call(null,(8),s);
}));

(zprint.zprint.expand_tabs.cljs$lang$maxFixedArity = 2);

/**
 * Given a string, find the line ending that is predominent in the beginning
 *   of the string, and split the string into separate lines.  Returns 
 *   [line-ending-string vector-of-lines]
 */
zprint.zprint.determine_ending_split_lines = (function zprint$zprint$determine_ending_split_lines(s){
if(clojure.string.includes_QMARK_.call(null,s,"\r")){
var lines = clojure.string.split.call(null,s,/\r\n|\r|\n/,(-1));
var first_lines = clojure.string.split.call(null,cljs.core.subs.call(null,s,(0),(function (){var x__21118__auto__ = cljs.core.count.call(null,s);
var y__21119__auto__ = (2000);
return ((x__21118__auto__ < y__21119__auto__) ? x__21118__auto__ : y__21119__auto__);
})()),/\r/);
var nl_count = cljs.core.reduce.call(null,(function (p1__55377_SHARP_,p2__55376_SHARP_){
if(clojure.string.starts_with_QMARK_.call(null,p2__55376_SHARP_,"\n")){
return (p1__55377_SHARP_ + (1));
} else {
return p1__55377_SHARP_;
}
}),(0),first_lines);
var line_ending = (((nl_count >= (cljs.core.count.call(null,first_lines) / (2))))?"\r\n":"\r");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_ending,lines], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",clojure.string.split.call(null,s,/\n/,(-1))], null);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
zprint.zprint.r = (function (left,right,__meta,__extmap,__hash){
this.left = left;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21448__auto__,k__21449__auto__){
var self__ = this;
var this__21448__auto____$1 = this;
return this__21448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21449__auto__,null);
}));

(zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21450__auto__,k55379,else__21451__auto__){
var self__ = this;
var this__21450__auto____$1 = this;
var G__55383 = k55379;
var G__55383__$1 = (((G__55383 instanceof cljs.core.Keyword))?G__55383.fqn:null);
switch (G__55383__$1) {
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k55379,else__21451__auto__);

}
}));

(zprint.zprint.r.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__21468__auto__,f__21469__auto__,init__21470__auto__){
var self__ = this;
var this__21468__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__21471__auto__,p__55384){
var vec__55385 = p__55384;
var k__21472__auto__ = cljs.core.nth.call(null,vec__55385,(0),null);
var v__21473__auto__ = cljs.core.nth.call(null,vec__55385,(1),null);
return f__21469__auto__.call(null,ret__21471__auto__,k__21472__auto__,v__21473__auto__);
}),init__21470__auto__,this__21468__auto____$1);
}));

(zprint.zprint.r.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21463__auto__,writer__21464__auto__,opts__21465__auto__){
var self__ = this;
var this__21463__auto____$1 = this;
var pr_pair__21466__auto__ = (function (keyval__21467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,cljs.core.pr_writer,""," ","",opts__21465__auto__,keyval__21467__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__21464__auto__,pr_pair__21466__auto__,"#zprint.zprint.r{",", ","}",opts__21465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null))], null),self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55378){
var self__ = this;
var G__55378__$1 = this;
return (new cljs.core.RecordIter((0),G__55378__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(zprint.zprint.r.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21446__auto__){
var self__ = this;
var this__21446__auto____$1 = this;
return self__.__meta;
}));

(zprint.zprint.r.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21443__auto__){
var self__ = this;
var this__21443__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,self__.__extmap,self__.__hash));
}));

(zprint.zprint.r.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21452__auto__){
var self__ = this;
var this__21452__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21444__auto__){
var self__ = this;
var this__21444__auto____$1 = this;
var h__21215__auto__ = self__.__hash;
if((!((h__21215__auto__ == null)))){
return h__21215__auto__;
} else {
var h__21215__auto____$1 = (function (coll__21445__auto__){
return (-1384233907 ^ cljs.core.hash_unordered_coll.call(null,coll__21445__auto__));
}).call(null,this__21444__auto____$1);
(self__.__hash = h__21215__auto____$1);

return h__21215__auto____$1;
}
}));

(zprint.zprint.r.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55380,other55381){
var self__ = this;
var this55380__$1 = this;
return (((!((other55381 == null)))) && ((((this55380__$1.constructor === other55381.constructor)) && (((cljs.core._EQ_.call(null,this55380__$1.left,other55381.left)) && (((cljs.core._EQ_.call(null,this55380__$1.right,other55381.right)) && (cljs.core._EQ_.call(null,this55380__$1.__extmap,other55381.__extmap)))))))));
}));

(zprint.zprint.r.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21458__auto__,k__21459__auto__){
var self__ = this;
var this__21458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__21459__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21458__auto____$1),self__.__meta),k__21459__auto__);
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21459__auto__)),null));
}
}));

(zprint.zprint.r.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__21455__auto__,k55379){
var self__ = this;
var this__21455__auto____$1 = this;
var G__55388 = k55379;
var G__55388__$1 = (((G__55388 instanceof cljs.core.Keyword))?G__55388.fqn:null);
switch (G__55388__$1) {
case "left":
case "right":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k55379);

}
}));

(zprint.zprint.r.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21456__auto__,k__21457__auto__,G__55378){
var self__ = this;
var this__21456__auto____$1 = this;
var pred__55389 = cljs.core.keyword_identical_QMARK_;
var expr__55390 = k__21457__auto__;
if(cljs.core.truth_(pred__55389.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__55390))){
return (new zprint.zprint.r(G__55378,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55389.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__55390))){
return (new zprint.zprint.r(self__.left,G__55378,self__.__meta,self__.__extmap,null));
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21457__auto__,G__55378),null));
}
}
}));

(zprint.zprint.r.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21461__auto__){
var self__ = this;
var this__21461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"left","left",-399115937),self__.left,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"right","right",-452581833),self__.right,null))], null),self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21447__auto__,G__55378){
var self__ = this;
var this__21447__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,G__55378,self__.__extmap,self__.__hash));
}));

(zprint.zprint.r.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21453__auto__,entry__21454__auto__){
var self__ = this;
var this__21453__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21454__auto__)){
return this__21453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21454__auto__,(0)),cljs.core._nth.call(null,entry__21454__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21453__auto____$1,entry__21454__auto__);
}
}));

(zprint.zprint.r.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
}));

(zprint.zprint.r.cljs$lang$type = true);

(zprint.zprint.r.cljs$lang$ctorPrSeq = (function (this__21494__auto__){
return (new cljs.core.List(null,"zprint.zprint/r",null,(1),null));
}));

(zprint.zprint.r.cljs$lang$ctorPrWriter = (function (this__21494__auto__,writer__21495__auto__){
return cljs.core._write.call(null,writer__21495__auto__,"zprint.zprint/r");
}));

/**
 * Positional factory function for zprint.zprint/r.
 */
zprint.zprint.__GT_r = (function zprint$zprint$__GT_r(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});

/**
 * Factory function for zprint.zprint/r, taking a map of keywords to field values.
 */
zprint.zprint.map__GT_r = (function zprint$zprint$map__GT_r(G__55382){
var extmap__21490__auto__ = (function (){var G__55392 = cljs.core.dissoc.call(null,G__55382,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.record_QMARK_.call(null,G__55382)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__55392);
} else {
return G__55392;
}
})();
return (new zprint.zprint.r(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__55382),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__55382),null,cljs.core.not_empty.call(null,extmap__21490__auto__),null));
});

zprint.zprint.make_record = (function zprint$zprint$make_record(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});
