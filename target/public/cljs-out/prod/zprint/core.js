// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('zprint.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('zprint.zprint');
goog.require('zprint.finish');
goog.require('zprint.comment');
goog.require('zprint.config');
goog.require('zprint.zutil');
goog.require('zprint.sutil');
goog.require('zprint.util');
goog.require('zprint.hiccup');
goog.require('zprint.focus');
goog.require('zprint.range');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
zprint.core._STAR_cache_path_STAR_ = null;
/**
 * There is an internal options-map containing default values which is 
 *   configured from ~/.zprintrc when zprint is first used.  set-options! 
 *   is used to alter the internal options-map by specifying individual
 *   options-map values that will be merged into the internal options-map.
 *   Typically, it is called with only new-options, an options map.  If
 *   you add a doc-str, that will show up when the internal options map
 *   is displayed with (czprint nil :explain).  The argument op-options
 *   is an options map that is only examined if the call to set-options!
 *   is the first use of the zprint library.  If it is, operational options
 *   are examined in the op-options map to see where to find formatting
 *   options.  Operational options are those such as cwd-zprintrc? and
 *   search-config?.
 */
zprint.core.set_options_BANG_ = (function zprint$core$set_options_BANG_(var_args){
var G__55572 = arguments.length;
switch (G__55572) {
case 3:
return zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (new_options,doc_str,op_options){
zprint.config.config_set_options_BANG_.call(null,new_options,doc_str,op_options);

return null;
}));

(zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (new_options,doc_str){
zprint.config.config_set_options_BANG_.call(null,new_options,doc_str);

return null;
}));

(zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_options){
zprint.config.config_set_options_BANG_.call(null,new_options);

return null;
}));

(zprint.core.set_options_BANG_.cljs$lang$maxFixedArity = 3);

zprint.core._STAR_default_cache_loc_STAR_ = ".";
zprint.core._STAR_default_cache_dir_STAR_ = ".zprint";
zprint.core._STAR_default_url_cache_STAR_ = "urlcache";
zprint.core._STAR_default_url_cache_secs_STAR_ = (300);
/**
 * Loads options from url, expecting an edn options map that will be passed
 *   to set-options! Valid options will be cached in 
 *   (str (:cache-loc (:cache options)) 
 *     File/separator 
 *     (:cache-dir (:cache options))
 *     File/separator
 *     (:url (:cache-dir (:cache options))))
 *   for (:cache-secs (:url options)) or 5 minutes if :cache-secs is nil.
 *   If [:cache :location] contains a ".", it is considered a Java property, 
 *   else it is considered an environment variable.  In either case, 
 *   it is looked up.
 *   Invalid options will throw an Exception.
 *   HTTP urls will have the Cache-Control max-age parameter respected,
 *   falling back to the Expires header if set.
 */
zprint.core.load_options_BANG_ = (function zprint$core$load_options_BANG_(options,url){
return null;
});
/**
 * Do external configuration regardless of whether or not it already
 *   been done, replacing any existing configuration.  Returns nil if successful,
 *   a vector of errors if not.
 */
zprint.core.configure_all_BANG_ = (function zprint$core$configure_all_BANG_(var_args){
var G__55575 = arguments.length;
switch (G__55575) {
case 0:
return zprint.core.configure_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.core.configure_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.core.configure_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return zprint.config.protected_configure_all_BANG_.call(null);
}));

(zprint.core.configure_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (op_options){
return zprint.config.protected_configure_all_BANG_.call(null,op_options);
}));

(zprint.core.configure_all_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Is this a rewrite-clj zipper node? A surprisingly hard thing to 
 *   determine, actually.
 */
zprint.core.rewrite_clj_zipper_QMARK_ = (function zprint$core$rewrite_clj_zipper_QMARK_(z){
if((function (){var and__20748__auto__ = cljs.core.coll_QMARK_.call(null,z);
if(and__20748__auto__){
var type_str = cljs.core.pr_str.call(null,cljs.core.type.call(null,cljs.core.first.call(null,z)));
return (((((type_str).length) > (16))) && (cljs.core._EQ_.call(null,"rewrite_clj.node",cljs.core.subs.call(null,type_str,(0),(16)))));
} else {
return and__20748__auto__;
}
})()){
return z;
} else {
return null;
}
});
/**
 * Is this a zipper?
 */
zprint.core.zipper_QMARK_ = (function zprint$core$zipper_QMARK_(z){
if(cljs.core.coll_QMARK_.call(null,z)){
var or__20754__auto__ = zprint.core.rewrite_clj_zipper_QMARK_.call(null,z);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,z));
}
} else {
return null;
}
});
/**
 * If it is a zipper or a string, return a zipper, else return nil.
 *   Always trims whitespace (including nl) off of strings before parsing!
 *   Returns [zloc line-ending-str], with line-ending-str nil if x was a
 *   zipper.
 */
zprint.core.get_zipper = (function zprint$core$get_zipper(options,x){
if(typeof x === 'string'){
var vec__55577 = zprint.zprint.determine_ending_split_lines.call(null,x);
var line_ending = cljs.core.nth.call(null,vec__55577,(0),null);
var lines = cljs.core.nth.call(null,vec__55577,(1),null);
var lines__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"expand?","expand?",-1744295862).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.map.call(null,cljs.core.partial.call(null,zprint.zprint.expand_tabs,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(options))),lines):lines);
var x__$1 = clojure.string.join.call(null,"\n",lines__$1);
var n = rewrite_clj.parser.parse_string.call(null,clojure.string.trim.call(null,x__$1));
if(cljs.core.truth_(n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.of_node_STAR_.call(null,n),line_ending], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(zprint.core.zipper_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,null], null);
} else {
return null;
}
}
});
/**
 * If we are running in zipper mode, do an internal version of zprint
 *   on a structure.
 */
zprint.core.dzprint_zipper = (function zprint$core$dzprint_zipper(options,coll){
var coll_str = cljs.core.pr_str.call(null,coll);
try{return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.core.zprint_str_internal.call(null,zprint.config.get_options.call(null),zprint.config.merge_deep.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325),true], null),options),coll_str))].join('');
}catch (e55580){var e = e55580;
return coll_str;
}});
/**
 * If we are running in zipper mode, do an internal version of zprint
 *   on a structure.
 */
zprint.core.dzprint_sexpr = (function zprint$core$dzprint_sexpr(options,coll){
try{return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.core.zprint_str_internal.call(null,zprint.config.get_options.call(null),options,coll))].join('');
}catch (e55581){var e = e55581;
return cljs.core.pr_str.call(null,coll);
}});
/**
 * Do a basic zprint and output the style vector and the options used for
 *   further processing: [<style-vec> options line-ending]
 */
zprint.core.fzprint_style = (function zprint$core$fzprint_style(coll,options){
var vec__55582 = (cljs.core.truth_(new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842).cljs$core$IFn$_invoke$arity$1(options))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,options,null], null):(cljs.core.truth_(new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325).cljs$core$IFn$_invoke$arity$1(options))?((typeof coll === 'string')?(function (){var vec__55585 = zprint.core.get_zipper.call(null,options,coll);
var form = cljs.core.nth.call(null,vec__55585,(0),null);
var line_end = cljs.core.nth.call(null,vec__55585,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,options,line_end], null);
})():(function(){throw (new Error(["Collection is not a string yet"," :parse-string? specified!"].join('')))})()):(cljs.core.truth_(new cljs.core.Keyword(null,"zloc?","zloc?",-1457193855).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options))))?(function (){var vec__55588 = zprint.zutil.find_root_and_path_nw.call(null,coll);
var root = cljs.core.nth.call(null,vec__55588,(0),null);
var path = cljs.core.nth.call(null,vec__55588,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,cljs.core.assoc_in.call(null,options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"path","path",-188191168)], null),path),null], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,options,null], null)
)));
var input = cljs.core.nth.call(null,vec__55582,(0),null);
var options__$1 = cljs.core.nth.call(null,vec__55582,(1),null);
var line_ending = cljs.core.nth.call(null,vec__55582,(2),null);
var z_type = (cljs.core.truth_(input)?new cljs.core.Keyword(null,"zipper","zipper",1500694438):new cljs.core.Keyword(null,"sexpr","sexpr",-783344087));
var dzprint = ((cljs.core._EQ_.call(null,z_type,new cljs.core.Keyword(null,"zipper","zipper",1500694438)))?zprint.core.dzprint_zipper:zprint.core.dzprint_sexpr);
var input__$1 = (function (){var or__20754__auto__ = input;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return coll;
}
})();
if((input__$1 == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nil",zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"nil","nil",99600501)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),options__$1,line_ending], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"drop?","drop?",-2009514790).cljs$core$IFn$_invoke$arity$1(options__$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),options__$1,line_ending], null);
} else {
var options__$2 = cljs.core.assoc.call(null,options__$1,new cljs.core.Keyword(null,"ztype","ztype",-562179020),z_type,new cljs.core.Keyword(null,"dzprint","dzprint",-403245762),dzprint);
var fzprint_fn = cljs.core.partial.call(null,zprint.zprint.fzprint,options__$2,(cljs.core.truth_((function (){var and__20748__auto__ = new cljs.core.Keyword(null,"file?","file?",1755223728).cljs$core$IFn$_invoke$arity$1(options__$2);
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left-space","left-space",457574289).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(options__$2)),new cljs.core.Keyword(null,"keep","keep",-2133338530));
} else {
return and__20748__auto__;
}
})())?(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options__$2);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})():(0)),input__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,z_type,new cljs.core.Keyword(null,"zipper","zipper",1500694438)))?zprint.zutil.zredef_call.call(null,fzprint_fn):zprint.sutil.sredef_call.call(null,fzprint_fn)),options__$2,line_ending], null);

}
}
});
/**
 * Take some internal-options and the & rest of a zprint/czprint
 *   call and figure out the options and width and all of that, but
 *   stop short of integrating these values into the existing options
 *   that show up with (get-options). Note that internal-options MUST
 *   NOT be a full options-map.  It needs to be just the options that
 *   have been requested for this invocation.  In addition, internal-options
 *   must be simple (i.e., no styles or whatever), since this routine
 *   merged rest-options with internal-options without using one of
 *   the validate routines that does all of the complex merging activity.
 *   Does auto-width if that is requested, and determines if there are
 *   'special-options', which may short circuit the other options
 *   processing.  Returns [special-option rest-options]
 */
zprint.core.process_rest_options = (function zprint$core$process_rest_options(full_options,internal_options,p__55591){
var vec__55592 = p__55591;
var width_or_options = cljs.core.nth.call(null,vec__55592,(0),null);
var options = cljs.core.nth.call(null,vec__55592,(1),null);
if(cljs.core._EQ_.call(null,width_or_options,new cljs.core.Keyword(null,"default","default",-1987822328))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),zprint.config.get_default_options.call(null)], null);
} else {
var vec__55595 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"explain","explain",484226146),null,new cljs.core.Keyword(null,"support","support",1392531368),null,new cljs.core.Keyword(null,"explain-justified","explain-justified",371413450),null,new cljs.core.Keyword(null,"explain-set","explain-set",-54163468),null,new cljs.core.Keyword(null,"help","help",-439233446),null], null), null).call(null,width_or_options))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,width_or_options], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width_or_options,null], null));
var width_or_options__$1 = cljs.core.nth.call(null,vec__55595,(0),null);
var special_option = cljs.core.nth.call(null,vec__55595,(1),null);
var width = ((typeof width_or_options__$1 === 'number')?width_or_options__$1:null);
var rest_options = (cljs.core.truth_((function (){var and__20748__auto__ = width;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.map_QMARK_.call(null,options);
} else {
return and__20748__auto__;
}
})())?options:((cljs.core.map_QMARK_.call(null,width_or_options__$1))?width_or_options__$1:null));
var width_map = (cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):cljs.core.PersistentArrayMap.EMPTY);
var new_options = zprint.config.merge_deep.call(null,internal_options,rest_options,width_map);
var auto_width = (cljs.core.truth_((function (){var and__20748__auto__ = cljs.core.not.call(null,width);
if(and__20748__auto__){
return new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862).cljs$core$IFn$_invoke$arity$2(new_options,new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862).cljs$core$IFn$_invoke$arity$1(full_options));
} else {
return and__20748__auto__;
}
})())?(function (){var terminal_width_fn = null;
var actual_width = (cljs.core.truth_(terminal_width_fn)?terminal_width_fn.call(null):null);
if(typeof actual_width === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),actual_width], null);
} else {
return null;
}
})():null);
var new_options__$1 = (cljs.core.truth_(auto_width)?zprint.config.merge_deep.call(null,new_options,auto_width):new_options);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_option,new_options__$1], null);

}
});
/**
 * Take some options from a zprint/czprint call and merge them into
 *   the actual options. Note that rest-options MUST NOT be a full
 *   options-map.  It needs to be just the options that have been
 *   requested for this invocation.  Returns actual-options
 */
zprint.core.determine_options = (function zprint$core$determine_options(full_options,rest_options){
var vec__55598 = zprint.config.config_and_validate.call(null,"determine-options",null,full_options,rest_options);
var actual_options = cljs.core.nth.call(null,vec__55598,(0),null);
var _ = cljs.core.nth.call(null,vec__55598,(1),null);
var errors = cljs.core.nth.call(null,vec__55598,(2),null);
var errors__$1 = (cljs.core.truth_(errors)?["Option errors in this call: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join(''):null);
if((!(cljs.core.empty_QMARK_.call(null,errors__$1)))){
throw (new Error(errors__$1));
} else {
return actual_options;
}
});
/**
 * Basic setup for fzprint call, used by all top level fns. Third
 *   argument can be either a number or a map, and if the third is a
 *   number, the fourth (if any) must be a map.  The internal-options
 *   is either an empty map or {:parse-string? true} for the -fn
 *   functions, and cannot be overridden by an options argument. Returns
 *   a vector with the style-vec and the options used: 
 *   [<style-vec> options line-ending]
 */
zprint.core.zprint_STAR_ = (function zprint$core$zprint_STAR_(coll,special_option,actual_options){
if(cljs.core.truth_(special_option)){
var G__55601 = special_option;
var G__55601__$1 = (((G__55601 instanceof cljs.core.Keyword))?G__55601.fqn:null);
switch (G__55601__$1) {
case "explain":
return zprint.core.fzprint_style.call(null,zprint.config.get_explained_options.call(null),zprint.config.add_calculated_options.call(null,zprint.config.merge_deep.call(null,zprint.config.get_default_options.call(null),actual_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key-order","key-order",-356936372),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891)], null),new cljs.core.Keyword(null,"key-color","key-color",-209002572),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"green","green",-945526839)], null)], null)], null)], null))));

break;
case "explain-set":
return zprint.core.fzprint_style.call(null,zprint.config.get_explained_set_options.call(null),zprint.config.add_calculated_options.call(null,zprint.config.merge_deep.call(null,zprint.config.get_default_options.call(null),actual_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key-order","key-order",-356936372),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891)], null),new cljs.core.Keyword(null,"key-color","key-color",-209002572),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"green","green",-945526839)], null)], null)], null)], null))));

break;
case "explain-justified":
return zprint.core.fzprint_style.call(null,zprint.config.get_explained_options.call(null),zprint.config.add_calculated_options.call(null,zprint.config.merge_deep.call(null,zprint.config.get_default_options.call(null),actual_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key-order","key-order",-356936372),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891)], null),new cljs.core.Keyword(null,"key-color","key-color",-209002572),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"green","green",-945526839)], null)], null),new cljs.core.Keyword(null,"justify?","justify?",294994148),true,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-variance","max-variance",-899998186),(20)], null)], null)], null))));

break;
case "support":
return zprint.core.fzprint_style.call(null,zprint.config.get_explained_all_options.call(null),zprint.config.merge_deep.call(null,zprint.config.get_default_options.call(null),actual_options));

break;
case "help":
return cljs.core.println.call(null,zprint.config.help_str);

break;
default:
return cljs.core.println.call(null,["Unknown keyword option: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(special_option)].join(''));

}
} else {
return zprint.core.fzprint_style.call(null,coll,(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(actual_options);
if(cljs.core.truth_(temp__5718__auto__)){
var fn_name = temp__5718__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"docstring?","docstring?",-1820749410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(actual_options)))){
return actual_options;
} else {
return actual_options;
}
} else {
return actual_options;
}
})());
}
});
/**
 * Handle options for :parse-string-all?, by removing
 *   :parse-string-all? and changing the default for 
 *   :parse {:interpose } to be true instead of nil.
 */
zprint.core.parse_string_all_options = (function zprint$core$parse_string_all_options(options){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,(((new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(options)) == null))?cljs.core.assoc_in.call(null,options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"interpose","interpose",576140629)], null),true):options),new cljs.core.Keyword(null,"parse-string-all?","parse-string-all?",-744455473)),new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),true);
});
/**
 * Select the elements from start to end from a vector.
 */
zprint.core.range_vec = (function zprint$core$range_vec(v,p__55603){
var vec__55604 = p__55603;
var start = cljs.core.nth.call(null,vec__55604,(0),null);
var end = cljs.core.nth.call(null,vec__55604,(1),null);
return cljs.core.take.call(null,(end - start),cljs.core.drop.call(null,start,v));
});
/**
 * If this is a :newline, :indent, :whitespace, or :right, trim off the 
 *   4th thing.
 */
zprint.core.remove_loc = (function zprint$core$remove_loc(tuple){
var vec__55607 = tuple;
var s = cljs.core.nth.call(null,vec__55607,(0),null);
var color = cljs.core.nth.call(null,vec__55607,(1),null);
var element = cljs.core.nth.call(null,vec__55607,(2),null);
if(((cljs.core._EQ_.call(null,element,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (((cljs.core._EQ_.call(null,element,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (((cljs.core._EQ_.call(null,element,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.call(null,element,new cljs.core.Keyword(null,"right","right",-452581833))))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,color,element], null);
} else {
return tuple;
}
});
/**
 * Remove the debugging information on :indent and :newline style-vec
 *   elements when doing :return-cvec? true.
 */
zprint.core.remove_newline_indent_locs = (function zprint$core$remove_newline_indent_locs(cvec){
return cljs.core.mapv.call(null,zprint.core.remove_loc,cvec);
});
/**
 * If any of :respect-nl?, :respect-bl?, or :indent-only? are set, return
 *   true.
 */
zprint.core.any_respect_QMARK_ = (function zprint$core$any_respect_QMARK_(caller,options){
var callers_options = caller.call(null,options);
var or__20754__auto__ = new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(callers_options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998).cljs$core$IFn$_invoke$arity$1(callers_options);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1(callers_options);
}
}
});
/**
 * Look throught the options, and see if any of :respect-nl?, :respect-bl?
 *   or :indent-only are enabled for anything.  Return false if none are enabled,
 *   truthy if any are.
 */
zprint.core.any_respect_at_all_QMARK_ = (function zprint$core$any_respect_at_all_QMARK_(options){
var or__20754__auto__ = zprint.core.any_respect_QMARK_.call(null,new cljs.core.Keyword(null,"list","list",765357683),options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = zprint.core.any_respect_QMARK_.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),options);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = zprint.core.any_respect_QMARK_.call(null,new cljs.core.Keyword(null,"set","set",304602554),options);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
return zprint.core.any_respect_QMARK_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),options);
}
}
}
});
/**
 * Given a str-style-vec, find all of the places where the end of a line
 *   has blanks.  Output the tuples that have that and the ones that 
 *   follow. If no-respect? is truthy, then only do this if no :respect-nl,
 *   :respect-bl, or indent-only are set.
 */
zprint.core.find_eol_blanks = (function zprint$core$find_eol_blanks(options,ssv,coll,no_respect_QMARK_){
if(cljs.core.truth_(((typeof coll === 'string')?(!(clojure.string.blank_QMARK_.call(null,coll))):(cljs.core.truth_(zprint.core.zipper_QMARK_.call(null,coll))?(!(clojure.string.blank_QMARK_.call(null,rewrite_clj.zip.string.call(null,coll)))):null
)))){
if(((cljs.core.not.call(null,no_respect_QMARK_)) || (cljs.core.not.call(null,zprint.core.any_respect_at_all_QMARK_.call(null,options))))){
var style_vec = ssv;
var previous_ends_w_blanks_QMARK_ = null;
var previous_tuple = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cljs.core.first.call(null,style_vec))){
if(cljs.core.truth_(previous_ends_w_blanks_QMARK_)){
return cljs.core.conj.call(null,out,previous_tuple);
} else {
return out;
}
} else {
var vec__55613 = cljs.core.first.call(null,style_vec);
var s = cljs.core.nth.call(null,vec__55613,(0),null);
var _ = cljs.core.nth.call(null,vec__55613,(1),null);
var e = cljs.core.nth.call(null,vec__55613,(2),null);
var tuple = vec__55613;
var add_previous_to_out_QMARK_ = (function (){var and__20748__auto__ = ((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"newline","newline",1790071323))));
if(and__20748__auto__){
return previous_ends_w_blanks_QMARK_;
} else {
return and__20748__auto__;
}
})();
var ends_w_blanks_QMARK_ = clojure.string.ends_with_QMARK_.call(null,s," ");
var G__55616 = cljs.core.next.call(null,style_vec);
var G__55617 = ends_w_blanks_QMARK_;
var G__55618 = tuple;
var G__55619 = (cljs.core.truth_(add_previous_to_out_QMARK_)?cljs.core.conj.call(null,out,previous_tuple):out);
style_vec = G__55616;
previous_ends_w_blanks_QMARK_ = G__55617;
previous_tuple = G__55618;
out = G__55619;
continue;
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Look at a single element in a style-vec string, and if the string at
 *   first is itself a string, then if the length is over 
 *   :output :real-le-length, then replace any escaped line endings
 *   with 'real' line endings.
 */
zprint.core.real_le = (function zprint$core$real_le(real_le_length,p__55620){
var vec__55621 = p__55620;
var s = cljs.core.nth.call(null,vec__55621,(0),null);
var element = vec__55621;
if((((cljs.core.count.call(null,s) >= real_le_length)) && (clojure.string.starts_with_QMARK_.call(null,s,"\"")))){
return cljs.core.assoc.call(null,element,(0),clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,"\\n","\n"),"\\r\\n","\r\n"),"\\r","\r"));
} else {
return element;
}
});
/**
 * If this is a function which can only handle :string output (as opposed
 *   to :hiccup or :html) because it prints it directly, check to ensure that
 *   :string is indeed the output format.  If it is not, throw an exception.
 */
zprint.core.check_output_format_string = (function zprint$core$check_output_format_string(options){
var fn_str = new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402).cljs$core$IFn$_invoke$arity$1(options);
if(((cljs.core._EQ_.call(null,"zprint",fn_str)) || (((cljs.core._EQ_.call(null,"czprint",fn_str)) || (((cljs.core._EQ_.call(null,"zprint-fn",fn_str)) || (cljs.core._EQ_.call(null,"czprint-fn",fn_str)))))))){
var output_format = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),output_format)){
throw (new Error(["Function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_str)," only supports {:output {:format :string}}"," but {:output {:format ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_format),"}"," was specified!  Perhaps using ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_str),"-str would work?"].join('')));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Return true if the start or end of a range is specified, or if
 *   :output :range? is true.
 */
zprint.core.range_specified_QMARK_ = (function zprint$core$range_specified_QMARK_(options){
var range_input = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(options));
var or__20754__auto__ = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(range_input);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(range_input);
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return new cljs.core.Keyword(null,"range?","range?",-506359425).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options));
}
}
});
/**
 * Take a zipper or string and pretty print with fzprint, 
 *   output a str (or possibly a structure with {:output {:format :hiccup}}.  
 *   Key :color? is false by default, and should
 *   be set to true in internal-options to make things colored.
 *   Special processing for :parse-string-all?, with
 *   not only a different code path, but a different default for 
 *   :parse {:interpose nil} to {:interpose true}
 */
zprint.core.zprint_str_internal = (function zprint$core$zprint_str_internal(var_args){
var args__22092__auto__ = [];
var len__22082__auto___55640 = arguments.length;
var i__22083__auto___55641 = (0);
while(true){
if((i__22083__auto___55641 < len__22082__auto___55640)){
args__22092__auto__.push((arguments[i__22083__auto___55641]));

var G__55642 = (i__22083__auto___55641 + (1));
i__22083__auto___55641 = G__55642;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return zprint.core.zprint_str_internal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(zprint.core.zprint_str_internal.cljs$core$IFn$_invoke$arity$variadic = (function (full_options,internal_options,coll,rest){
var vec__55628 = zprint.core.process_rest_options.call(null,full_options,internal_options,rest);
var special_option = cljs.core.nth.call(null,vec__55628,(0),null);
var rest_options = cljs.core.nth.call(null,vec__55628,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(rest_options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(rest_options),"zprint-str-internal VVVVVVVVVVVVVVVV");
} else {
}

if(cljs.core.truth_(zprint.core.range_specified_QMARK_.call(null,rest_options))){
throw (new Error("Only zprint-file-str supports these range operations: {:input {:range {:start ... :end ...} :output {:range? true}}!"));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"parse-string-all?","parse-string-all?",-744455473).cljs$core$IFn$_invoke$arity$1(rest_options))){
if(typeof coll === 'string'){
var vec__55631 = zprint.zprint.determine_ending_split_lines.call(null,coll);
var line_ending = cljs.core.nth.call(null,vec__55631,(0),null);
var lines = cljs.core.nth.call(null,vec__55631,(1),null);
var actual_options = zprint.core.determine_options.call(null,full_options,rest_options);
var _ = zprint.core.check_output_format_string.call(null,actual_options);
var actual_options__$1 = zprint.core.parse_string_all_options.call(null,actual_options);
var html_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(actual_options__$1)));
var actual_options__$2 = ((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(actual_options__$1)))) || (html_QMARK_)))?cljs.core.assoc_in.call(null,actual_options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"format","format",-1306924766)], null),new cljs.core.Keyword(null,"hiccup-multiple","hiccup-multiple",-517662443)):actual_options__$1);
var lines__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"expand?","expand?",-1744295862).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(actual_options__$2)))?cljs.core.map.call(null,cljs.core.partial.call(null,zprint.zprint.expand_tabs,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(actual_options__$2))),lines):lines);
var coll__$1 = clojure.string.join.call(null,"\n",lines__$1);
var vec__55634 = zprint.core.process_multiple_forms.call(null,actual_options__$2,cljs.core.PersistentArrayMap.EMPTY,zprint.core.zprint_str_internal,":parse-string-all? call",rewrite_clj.zip.of_node_STAR_.call(null,rewrite_clj.parser.parse_string_all.call(null,coll__$1)));
var result = cljs.core.nth.call(null,vec__55634,(0),null);
var error_vec = cljs.core.nth.call(null,vec__55634,(1),null);
var final_options = cljs.core.nth.call(null,vec__55634,(2),null);
var str_w_line_endings = ((html_QMARK_)?zprint.hiccup.hiccup__GT_html.call(null,zprint.hiccup.wrap_w_p.call(null,actual_options__$2,cljs.core.reduce.call(null,cljs.core.into,cljs.core.filter.call(null,cljs.core.vector_QMARK_,result)))):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hiccup-multiple","hiccup-multiple",-517662443),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(actual_options__$2))))?zprint.hiccup.wrap_w_p.call(null,actual_options__$2,cljs.core.reduce.call(null,cljs.core.into,cljs.core.filter.call(null,cljs.core.vector_QMARK_,result))):(((((line_ending == null)) || (cljs.core._EQ_.call(null,line_ending,"\n"))))?result:clojure.string.replace.call(null,result,"\n",line_ending)
)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(rest_options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(rest_options),"zprint-str-internal ^^^ pmf ^^^ pmf ^^^ pmf ^^^");
} else {
}

return str_w_line_endings;
} else {
throw (new Error(":parse-string-all? requires a string!"));
}
} else {
var actual_options = zprint.core.determine_options.call(null,full_options,rest_options);
var vec__55637 = zprint.core.zprint_STAR_.call(null,coll,special_option,actual_options);
var cvec = cljs.core.nth.call(null,vec__55637,(0),null);
var options = cljs.core.nth.call(null,vec__55637,(1),null);
var line_ending = cljs.core.nth.call(null,vec__55637,(2),null);
var _ = zprint.core.check_output_format_string.call(null,actual_options);
var hiccup_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options)));
var hiccup_multiple_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hiccup-multiple","hiccup-multiple",-517662443),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options)));
var html_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options)));
var cvec_wo_empty = cvec;
var focus_vec = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options)));
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return zprint.focus.range_ssv.call(null,cvec_wo_empty,path);
} else {
return null;
}
})();
var accept_vec = zprint.finish.handle_lines.call(null,options,cvec_wo_empty,focus_vec);
var eol_blanks = (cljs.core.truth_(new cljs.core.Keyword(null,"test-for-eol-blanks?","test-for-eol-blanks?",676976305).cljs$core$IFn$_invoke$arity$1(options))?zprint.core.find_eol_blanks.call(null,options,cvec_wo_empty,coll,null):null);
var eol_str = (((!(cljs.core.empty_QMARK_.call(null,eol_blanks))))?["=======  eol-blanks: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(eol_blanks)].join(''):null);
var format_off_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(options));
var inline_style_vec = (cljs.core.truth_(new cljs.core.Keyword(null,"inline?","inline?",-1674483791).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options)))?zprint.comment.fzprint_inline_comments.call(null,options,cvec_wo_empty):cvec_wo_empty);
var inline_style_vec__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = new cljs.core.Keyword(null,"inline?","inline?",-1674483791).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__20748__auto__)){
return (!(format_off_QMARK_));
} else {
return and__20748__auto__;
}
})())?zprint.comment.fzprint_align_inline_comments.call(null,options,inline_style_vec):inline_style_vec);
var str_style_vec = zprint.finish.cvec_to_style_vec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style-map","style-map",1488693527),zprint.finish.no_style_map,new cljs.core.Keyword(null,"elide","elide",-1239101386),new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options)),new cljs.core.Keyword(null,"none-to-nil?","none-to-nil?",-1511694427),((((hiccup_QMARK_) || (((hiccup_multiple_QMARK_) || (html_QMARK_)))))?false:true)], null),inline_style_vec__$1,focus_vec,accept_vec);
var wrapped_style_vec = (cljs.core.truth_((function (){var and__20748__auto__ = new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__20748__auto__)){
return (!(format_off_QMARK_));
} else {
return and__20748__auto__;
}
})())?zprint.comment.fzprint_wrap_comments.call(null,options,str_style_vec):str_style_vec);
var wrapped_style_vec__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"real-le?","real-le?",-1470682231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.mapv.call(null,cljs.core.partial.call(null,zprint.core.real_le,new cljs.core.Keyword(null,"real-le-length","real-le-length",1821160970).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options))),wrapped_style_vec):wrapped_style_vec);
var comp_style = zprint.finish.compress_style.call(null,wrapped_style_vec__$1);
var color_style = (cljs.core.truth_((function (){var or__20754__auto__ = accept_vec;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var or__20754__auto____$1 = focus_vec;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
var or__20754__auto____$2 = new cljs.core.Keyword(null,"color?","color?",-1891974356).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__20754__auto____$2)){
return or__20754__auto____$2;
} else {
return ((hiccup_QMARK_) || (((hiccup_multiple_QMARK_) || (html_QMARK_))));
}
}
}
})())?zprint.finish.color_comp_vec.call(null,options,comp_style):cljs.core.apply.call(null,cljs.core.str,cljs.core.mapv.call(null,cljs.core.first,comp_style)));
var result = ((hiccup_QMARK_)?zprint.hiccup.wrap_w_p.call(null,options,color_style):((hiccup_multiple_QMARK_)?color_style:((html_QMARK_)?zprint.hiccup.hiccup__GT_html.call(null,zprint.hiccup.wrap_w_p.call(null,options,color_style)):(((((line_ending == null)) || (cljs.core._EQ_.call(null,line_ending,"\n"))))?color_style:clojure.string.replace.call(null,color_style,"\n",line_ending))
)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(rest_options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(rest_options),"zprint-str-internal ^^^^^^^^^^^^^^^^^^");
} else {
}

if(cljs.core.truth_(eol_str)){
return eol_str;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"return-cvec?","return-cvec?",1372433982).cljs$core$IFn$_invoke$arity$1(options))){
return zprint.core.remove_newline_indent_locs.call(null,cvec);
} else {
return result;
}
}
}
}));

(zprint.core.zprint_str_internal.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(zprint.core.zprint_str_internal.cljs$lang$applyTo = (function (seq55624){
var G__55625 = cljs.core.first.call(null,seq55624);
var seq55624__$1 = cljs.core.next.call(null,seq55624);
var G__55626 = cljs.core.first.call(null,seq55624__$1);
var seq55624__$2 = cljs.core.next.call(null,seq55624__$1);
var G__55627 = cljs.core.first.call(null,seq55624__$2);
var seq55624__$3 = cljs.core.next.call(null,seq55624__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55625,G__55626,G__55627,seq55624__$3);
}));

/**
 * Call source-fn, and if it isn't there throw an exception.
 */
zprint.core.get_fn_source = (function zprint$core$get_fn_source(fn_name){
throw (new Error(["No definition found for a function named: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')));
});
/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and output a str. Additional optional arguments: 
 * 
 *    (zprint-str coll <numeric-width>)
 *    (zprint-str coll <numeric-width> <options-map>)
 *    (zprint-str coll <options-map>)
 * 
 *   If coll is a string containing Clojure source:
 * 
 *      (zprint-str coll {:parse-string? true})
 * 
 *    (zprint nil :help)    ; for more information
 *    (zprint nil :explain) ; to see the current options-map
 */
zprint.core.zprint_str = (function zprint$core$zprint_str(var_args){
var args__22092__auto__ = [];
var len__22082__auto___55645 = arguments.length;
var i__22083__auto___55646 = (0);
while(true){
if((i__22083__auto___55646 < len__22082__auto___55645)){
args__22092__auto__.push((arguments[i__22083__auto___55646]));

var G__55647 = (i__22083__auto___55646 + (1));
i__22083__auto___55646 = G__55647;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.apply.call(null,zprint.core.zprint_str_internal,zprint.config.get_configured_options.call(null),cljs.core.PersistentArrayMap.EMPTY,coll,rest);
}));

(zprint.core.zprint_str.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.core.zprint_str.cljs$lang$applyTo = (function (seq55643){
var G__55644 = cljs.core.first.call(null,seq55643);
var seq55643__$1 = cljs.core.next.call(null,seq55643);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55644,seq55643__$1);
}));

/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and output a str containing ANSI escapes to 
 *   syntax color the output. Additional optional arguments: 
 * 
 *    (czprint-str coll <numeric-width>)
 *    (czprint-str coll <numeric-width> <options-map>)
 *    (czprint-str coll <options-map>)
 * 
 *   If coll is a string containing Clojure source:
 * 
 *      (czprint-str coll {:parse-string? true})
 * 
 *    (czprint nil :help)    ; for more information
 *    (czprint nil :explain) ; to see the current options-map
 */
zprint.core.czprint_str = (function zprint$core$czprint_str(var_args){
var args__22092__auto__ = [];
var len__22082__auto___55650 = arguments.length;
var i__22083__auto___55651 = (0);
while(true){
if((i__22083__auto___55651 < len__22082__auto___55650)){
args__22092__auto__.push((arguments[i__22083__auto___55651]));

var G__55652 = (i__22083__auto___55651 + (1));
i__22083__auto___55651 = G__55652;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return zprint.core.czprint_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(zprint.core.czprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.apply.call(null,zprint.core.zprint_str_internal,zprint.config.get_configured_options.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null),coll,rest);
}));

(zprint.core.czprint_str.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.core.czprint_str.cljs$lang$applyTo = (function (seq55648){
var G__55649 = cljs.core.first.call(null,seq55648);
var seq55648__$1 = cljs.core.next.call(null,seq55648);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55649,seq55648__$1);
}));

/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and output to stdout. Additional optional 
 *   arguments: 
 * 
 *    (zprint coll <numeric-width>)
 *    (zprint coll <numeric-width> <options-map>)
 *    (zprint coll <options-map>)
 * 
 *   If coll is a string containing Clojure source::
 * 
 *      (zprint coll {:parse-string? true})
 * 
 *    (zprint nil :help)    ; for more information
 *    (zprint nil :explain) ; to see the current options-map
 */
zprint.core.zprint = (function zprint$core$zprint(var_args){
var args__22092__auto__ = [];
var len__22082__auto___55655 = arguments.length;
var i__22083__auto___55656 = (0);
while(true){
if((i__22083__auto___55656 < len__22082__auto___55655)){
args__22092__auto__.push((arguments[i__22083__auto___55656]));

var G__55657 = (i__22083__auto___55656 + (1));
i__22083__auto___55656 = G__55657;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return zprint.core.zprint.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(zprint.core.zprint.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.println.call(null,cljs.core.apply.call(null,zprint.core.zprint_str_internal,zprint.config.get_configured_options.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402),"zprint"], null),coll,rest));
}));

(zprint.core.zprint.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.core.zprint.cljs$lang$applyTo = (function (seq55653){
var G__55654 = cljs.core.first.call(null,seq55653);
var seq55653__$1 = cljs.core.next.call(null,seq55653);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55654,seq55653__$1);
}));

/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and produce output to stdout containing ANSI 
 *   escapes to syntax color the output. Optional arguments: 
 * 
 *    (czprint coll <numeric-width>)
 *    (czprint coll <numeric-width> <options-map>)
 *    (czprint coll <options-map>)
 * 
 *   If coll is a string containing Clojure source:
 * 
 *      (czprint coll {:parse-string? true})
 * 
 *    (czprint nil :help)    ; for more information
 *    (czprint nil :explain) ; to see the current options-map
 */
zprint.core.czprint = (function zprint$core$czprint(var_args){
var args__22092__auto__ = [];
var len__22082__auto___55660 = arguments.length;
var i__22083__auto___55661 = (0);
while(true){
if((i__22083__auto___55661 < len__22082__auto___55660)){
args__22092__auto__.push((arguments[i__22083__auto___55661]));

var G__55662 = (i__22083__auto___55661 + (1));
i__22083__auto___55661 = G__55662;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return zprint.core.czprint.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(zprint.core.czprint.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.println.call(null,cljs.core.apply.call(null,zprint.core.zprint_str_internal,zprint.config.get_configured_options.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402),"czprint"], null),coll,rest));
}));

(zprint.core.czprint.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.core.czprint.cljs$lang$applyTo = (function (seq55658){
var G__55659 = cljs.core.first.call(null,seq55658);
var seq55658__$1 = cljs.core.next.call(null,seq55658);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55659,seq55658__$1);
}));

/**
 * If a string is all spaces and has at least one space, 
 *   returns the count of the spaces, otherwise nil.
 */
zprint.core.spaces_QMARK_ = (function zprint$core$spaces_QMARK_(s){
var len = cljs.core.count.call(null,s);
if((len === (0))){
return null;
} else {
if(cljs.core.empty_QMARK_.call(null,clojure.string.replace.call(null,s," ",""))){
return len;
} else {
return null;
}
}
});
/**
 * Given a vector containing a hiccup-vec or a string, prepend a
 *   string into that hiccup-vec or onto the string.
 */
zprint.core.prepend_hvec_str = (function zprint$core$prepend_hvec_str(options,s,hvec_or_str){
if(cljs.core.empty_QMARK_.call(null,s)){
return hvec_or_str;
} else {
var vec__55663 = zprint.finish.create_hvec_or_str.call(null,options,s);
var hiccup_QMARK_ = cljs.core.nth.call(null,vec__55663,(0),null);
var prepend_hvec_or_str = cljs.core.nth.call(null,vec__55663,(1),null);
if(cljs.core.truth_(hiccup_QMARK_)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prepend_hvec_or_str], null),hvec_or_str);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hvec_or_str)].join('');
}
}
});
/**
 * Given a vector containing a hiccup-vec or a string, append a
 *   string into that hiccup-vec or onto the string.
 */
zprint.core.append_hvec_str = (function zprint$core$append_hvec_str(options,s,hvec_or_str){
if(cljs.core.empty_QMARK_.call(null,s)){
return hvec_or_str;
} else {
var vec__55666 = zprint.finish.create_hvec_or_str.call(null,options,s);
var hiccup_QMARK_ = cljs.core.nth.call(null,vec__55666,(0),null);
var append_hvec_or_str = cljs.core.nth.call(null,vec__55666,(1),null);
if(cljs.core.truth_(hiccup_QMARK_)){
return cljs.core.into.call(null,hvec_or_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [append_hvec_or_str], null));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hvec_or_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
}
});
/**
 * Given a vector containing a hiccuup-vec or a string, check whether it
 *   ends with a nl and if it doesn't, add one.
 */
zprint.core.ensure_hvec_str_ends_with_nl = (function zprint$core$ensure_hvec_str_ends_with_nl(options,hvec_or_str){
if(cljs.core.empty_QMARK_.call(null,hvec_or_str)){
return hvec_or_str;
} else {
if(cljs.core.vector_QMARK_.call(null,hvec_or_str)){
var vec__55669 = cljs.core.first.call(null,cljs.core.peek.call(null,hvec_or_str));
var _ = cljs.core.nth.call(null,vec__55669,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__55669,(1),null);
var s = cljs.core.nth.call(null,vec__55669,(2),null);
if(cljs.core._EQ_.call(null,s,"<br>")){
return hvec_or_str;
} else {
return cljs.core.into.call(null,hvec_or_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.finish.color_comp_vec.call(null,options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)], null))], null));
}
} else {
if(clojure.string.ends_with_QMARK_.call(null,hvec_or_str,"\n")){
return hvec_or_str;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hvec_or_str),"\n"].join('');
}
}
}
});
/**
 * Take one form from a file and process it.  The primary goal is
 *   of course to produce a string to put into the output file.  In
 *   addition, see if that string starts with ;!zprint and if it does,
 *   pass along that information back to the caller.  The input is a
 *   [[next-options <previous-string> indent zprint-num previous-newline? 
 *   error-vec] form] , where next-options accumulates the information to be
 *   applied to the next non-comment/non-whitespace element in the
 *   file.  The output is [next-options output-str indent zprint-num
 *   previous-newline? error-vec], since reductions is used to call this function.
 *   See process-multiple-forms for what is actually done with the
 *   various :format values.
 */
zprint.core.process_form = (function zprint$core$process_form(rest_options,zprint_fn,zprint_specifier,p__55672,form){
var vec__55673 = p__55672;
var full_options = cljs.core.nth.call(null,vec__55673,(0),null);
var next_options = cljs.core.nth.call(null,vec__55673,(1),null);
var _ = cljs.core.nth.call(null,vec__55673,(2),null);
var indent = cljs.core.nth.call(null,vec__55673,(3),null);
var zprint_num = cljs.core.nth.call(null,vec__55673,(4),null);
var previous_newline_QMARK_ = cljs.core.nth.call(null,vec__55673,(5),null);
var error_vec = cljs.core.nth.call(null,vec__55673,(6),null);
var comment_QMARK_ = zprint.zutil.zcomment_QMARK_.call(null,form);
var newline_QMARK_ = zprint.zutil.znewline_QMARK_.call(null,form);
var whitespace_form_QMARK_ = zprint.zutil.whitespace_QMARK_.call(null,form);
var vec__55676 = (cljs.core.truth_((function (){var and__20748__auto__ = comment_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = (indent === (0));
if(and__20748__auto____$1){
return new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024).cljs$core$IFn$_invoke$arity$1(rest_options);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?zprint.config.get_options_from_comment.call(null,(zprint_num + (1)),rewrite_clj.zip.string.call(null,form)):null);
var new_options = cljs.core.nth.call(null,vec__55676,(0),null);
var error_str = cljs.core.nth.call(null,vec__55676,(1),null);
var vec__55679 = (cljs.core.truth_(error_str)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,error_vec,error_str),true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [error_vec,false], null));
var error_vec__$1 = cljs.core.nth.call(null,vec__55679,(0),null);
var inc_zprint_num_QMARK_ = cljs.core.nth.call(null,vec__55679,(1),null);
var continue_after__BANG_zprint_error_QMARK_ = new cljs.core.Keyword(null,"continue-after-!zprint-error?","continue-after-!zprint-error?",1653518106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(full_options)));
var next_options__$1 = (((indent === (0)))?next_options:cljs.core.assoc.call(null,next_options,new cljs.core.Keyword(null,"indent","indent",-148200125),indent));
var internal_options = ((cljs.core.empty_QMARK_.call(null,next_options__$1))?rest_options:zprint.config.merge_deep.call(null,rest_options,next_options__$1));
var vec__55682 = (cljs.core.truth_(next_options__$1)?(function (){var vec__55691 = zprint.config.config_and_validate.call(null,[";!zprint number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint_num)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint_specifier)].join(''),null,full_options,internal_options);
var updated_map = cljs.core.nth.call(null,vec__55691,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__55691,(1),null);
var error_str__$1 = cljs.core.nth.call(null,vec__55691,(2),null);
if(cljs.core.truth_(error_str__$1)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_options,cljs.core.conj.call(null,error_vec__$1,error_str__$1),rest_options,cljs.core.PersistentArrayMap.EMPTY], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,error_vec__$1,internal_options,next_options__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_options,error_vec__$1], null));
var decision_options = cljs.core.nth.call(null,vec__55682,(0),null);
var error_vec__$2 = cljs.core.nth.call(null,vec__55682,(1),null);
var internal_options__$1 = cljs.core.nth.call(null,vec__55682,(2),null);
var next_options__$2 = cljs.core.nth.call(null,vec__55682,(3),null);
var ___$1 = (((((!(cljs.core.empty_QMARK_.call(null,error_vec__$2)))) && (cljs.core.not.call(null,continue_after__BANG_zprint_error_QMARK_))))?(function(){throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"; ",error_vec__$2)))))})():null);
var interpose_QMARK_ = new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(decision_options));
var previous_newline_QMARK___$1 = (function (){var or__20754__auto__ = interpose_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return previous_newline_QMARK_;
}
})();
var space_count = ((whitespace_form_QMARK_)?(cljs.core.truth_(interpose_QMARK_)?(0):zprint.core.spaces_QMARK_.call(null,rewrite_clj.zip.string.call(null,form))):null);
var drop_QMARK_ = (!(cljs.core.not.call(null,(function (){var and__20748__auto__ = space_count;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(next_options__$2))));
if(and__20748__auto____$1){
var or__20754__auto__ = interpose_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left-space","left-space",457574289).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(decision_options)),new cljs.core.Keyword(null,"drop","drop",364481611));
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())));
var local_options = (cljs.core.truth_(new_options)?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null),new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842),true,new cljs.core.Keyword(null,"file?","file?",1755223728),true,new cljs.core.Keyword(null,"drop?","drop?",-2009514790),drop_QMARK_], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842),true,new cljs.core.Keyword(null,"file?","file?",1755223728),true,new cljs.core.Keyword(null,"drop?","drop?",-2009514790),drop_QMARK_], null));
var internal_options__$2 = zprint.config.merge_deep.call(null,internal_options__$1,local_options);
var skip_since_spaces_QMARK_ = (function (){var and__20748__auto__ = space_count;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not_EQ_.call(null,space_count,(0));
} else {
return and__20748__auto__;
}
})();
var output_str = (cljs.core.truth_(skip_since_spaces_QMARK_)?"":((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(decision_options))) || ((((!((function (){var or__20754__auto____$1 = comment_QMARK_;
if(cljs.core.truth_(or__20754__auto____$1)){
return or__20754__auto____$1;
} else {
return whitespace_form_QMARK_;
}
})()))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(internal_options__$2)))))))?zprint_fn.call(null,full_options,cljs.core.assoc.call(null,internal_options__$2,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"off","off",606440789)),form):zprint_fn.call(null,full_options,internal_options__$2,form)));
var new_output_str = (cljs.core.truth_(skip_since_spaces_QMARK_)?output_str:(cljs.core.truth_(newline_QMARK_)?output_str:(cljs.core.truth_(comment_QMARK_)?zprint.core.prepend_hvec_str.call(null,decision_options,zprint.comment.blanks.call(null,indent),output_str):((((cljs.core.not.call(null,previous_newline_QMARK___$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left-space","left-space",457574289).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(decision_options)),new cljs.core.Keyword(null,"keep","keep",-2133338530)))))?zprint.core.prepend_hvec_str.call(null,decision_options,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,indent))].join(''),output_str):((cljs.core.not.call(null,previous_newline_QMARK___$1))?zprint.core.prepend_hvec_str.call(null,decision_options,"\n",output_str):((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left-space","left-space",457574289).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(decision_options)),new cljs.core.Keyword(null,"keep","keep",-2133338530))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(decision_options),new cljs.core.Keyword(null,"skip","skip",602715391))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(decision_options),new cljs.core.Keyword(null,"off","off",606440789)))))))?zprint.core.prepend_hvec_str.call(null,decision_options,zprint.comment.blanks.call(null,indent),output_str):output_str
))))));
var output_str__$1 = new_output_str;
var local_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new_options))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new_options))));
var vec__55685 = (cljs.core.truth_((function (){var and__20748__auto__ = local_QMARK_;
if(and__20748__auto__){
return new cljs.core.Keyword(null,"!zprint-elide-skip-next?","!zprint-elide-skip-next?",-325866990).cljs$core$IFn$_invoke$arity$1(full_options);
} else {
return and__20748__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_options,local_QMARK_,inc_zprint_num_QMARK_], null));
var new_options__$1 = cljs.core.nth.call(null,vec__55685,(0),null);
var local_QMARK___$1 = cljs.core.nth.call(null,vec__55685,(1),null);
var inc_zprint_num_QMARK___$1 = cljs.core.nth.call(null,vec__55685,(2),null);
var vec__55688 = (cljs.core.truth_((function (){var and__20748__auto__ = new_options__$1;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,local_QMARK___$1);
} else {
return and__20748__auto__;
}
})())?(function (){var vec__55694 = zprint.config.config_and_validate.call(null,[";!zprint number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint_num + (1)))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint_specifier)].join(''),null,full_options,new_options__$1);
var updated_map = cljs.core.nth.call(null,vec__55694,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__55694,(1),null);
var error_str__$1 = cljs.core.nth.call(null,vec__55694,(2),null);
if(cljs.core.truth_(error_str__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,error_vec__$2,error_str__$1),full_options], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [error_vec__$2,updated_map], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [error_vec__$2,full_options], null));
var error_vec__$3 = cljs.core.nth.call(null,vec__55688,(0),null);
var full_options__$1 = cljs.core.nth.call(null,vec__55688,(1),null);
if((((!(cljs.core.empty_QMARK_.call(null,error_vec__$3)))) && (cljs.core.not.call(null,continue_after__BANG_zprint_error_QMARK_)))){
throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"; ",error_vec__$3)))));
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_options__$1,(cljs.core.truth_(local_QMARK___$1)?zprint.config.merge_deep.call(null,next_options__$2,new_options__$1):(((function (){var or__20754__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return whitespace_form_QMARK_;
}
})())?next_options__$2:cljs.core.PersistentArrayMap.EMPTY
)),output_str__$1,(function (){var or__20754__auto__ = space_count;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})(),(cljs.core.truth_((function (){var and__20748__auto__ = (function (){var or__20754__auto__ = new_options__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return inc_zprint_num_QMARK___$1;
}
})();
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,new_options__$1,new cljs.core.Keyword(null,"!zprint-elide-skip-next?","!zprint-elide-skip-next?",-325866990),new cljs.core.Keyword(null,"not-found","not-found",-629079980)),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
} else {
return and__20748__auto__;
}
})())?(zprint_num + (1)):zprint_num),(cljs.core.truth_(skip_since_spaces_QMARK_)?previous_newline_QMARK___$1:(function (){var or__20754__auto__ = newline_QMARK_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return comment_QMARK_;
}
})()),error_vec__$3], null);
});
/**
 * A comment aware interpose. It takes either a seq of strings or
 *   a vector of hiccup output.  It leaves out empty strings, and
 *   interposes interpose-str between everything, except after a
 *   comment.  After a comment, it will interpose a single newline if
 *   there were no blank lines between the comment and a following
 *   comment. If there was any number of blank lines after a comment,
 *   it will interpose interpose-comment-str before the next (non-comment)
 *   element. Output is a vector of strings.
 */
zprint.core.interpose_w_comment = (function zprint$core$interpose_w_comment(options,seq_of_strings,interpose_str){
if(cljs.core.empty_QMARK_.call(null,seq_of_strings)){
return cljs.core.PersistentVector.EMPTY;
} else {
var vec__55697 = zprint.finish.create_hvec_or_str.call(null,options,interpose_str);
var hiccup_QMARK_ = cljs.core.nth.call(null,vec__55697,(0),null);
var interpose_thing = cljs.core.nth.call(null,vec__55697,(1),null);
var vec__55700 = zprint.finish.create_hvec_or_str.call(null,options,"\n",hiccup_QMARK_);
var hiccup_QMARK___$1 = cljs.core.nth.call(null,vec__55700,(0),null);
var newline_thing = cljs.core.nth.call(null,vec__55700,(1),null);
var sos = seq_of_strings;
var previous_comment_QMARK_ = null;
var start_interpolating_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,sos)){
if(cljs.core.truth_(hiccup_QMARK___$1)){
return out;
} else {
return cljs.core.apply.call(null,cljs.core.str,out);
}
} else {
var element = cljs.core.first.call(null,sos);
var s = (cljs.core.truth_(hiccup_QMARK___$1)?((typeof element === 'string')?element:((cljs.core.vector_QMARK_.call(null,element))?cljs.core.nth.call(null,cljs.core.first.call(null,element),(2)):"xxx"
)):element);
var empty_string_QMARK_ = cljs.core.empty_QMARK_.call(null,s);
var comment_QMARK_ = clojure.string.starts_with_QMARK_.call(null,s,";");
var G__55703 = cljs.core.next.call(null,sos);
var G__55704 = comment_QMARK_;
var G__55705 = (function (){var or__20754__auto__ = (!(empty_string_QMARK_));
if(or__20754__auto__){
return or__20754__auto__;
} else {
return start_interpolating_QMARK_;
}
})();
var G__55706 = ((empty_string_QMARK_)?out:((cljs.core.not.call(null,start_interpolating_QMARK_))?cljs.core.conj.call(null,out,element):(cljs.core.truth_(previous_comment_QMARK_)?cljs.core.conj.call(null,cljs.core.conj.call(null,out,newline_thing),element):cljs.core.conj.call(null,cljs.core.conj.call(null,out,interpose_thing),element)
)));
sos = G__55703;
previous_comment_QMARK_ = G__55704;
start_interpolating_QMARK_ = G__55705;
out = G__55706;
continue;
}
break;
}
}
});
/**
 * Given a string which contains multiple lines, check the first line to
 *   see if it begins with a shebang, that is: #!.  If it does, remove that
 *   line and return it as the shebang, else shebang is nil.  Returns:
 *   [shebang filestring]
 */
zprint.core.remove_shebang = (function zprint$core$remove_shebang(filestring){
if(clojure.string.starts_with_QMARK_.call(null,filestring,"#!")){
return clojure.string.split.call(null,filestring,/\n/,(2));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,filestring], null);
}
});
/**
 * Take a sequence of forms (which are zippers of the elements of
 *   a file or a string), and not only format them for output but also
 *   handle comments containing ;!zprint that affect the options-map
 *   throughout the processing. Returns [out-str error-vec final-options]
 */
zprint.core.process_multiple_forms = (function zprint$core$process_multiple_forms(full_options,rest_options,zprint_fn,zprint_specifier,forms){
var interpose_option = (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(rest_options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(full_options));
}
})();
var hiccup_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hiccup-multiple","hiccup-multiple",-517662443),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(full_options)));
var interpose_str = (((((interpose_option == null)) || (interpose_option === false)))?null:((typeof interpose_option === 'string')?interpose_option:((interpose_option === true)?"\n":(function(){throw (new Error(["Unsupported {:parse {:interpose value}}: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(interpose_option)].join('')))})()
)));
var seq_of_zprint_fn = cljs.core.reductions.call(null,cljs.core.partial.call(null,zprint.core.process_form,rest_options,zprint_fn,zprint_specifier),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_options,cljs.core.PersistentArrayMap.EMPTY,"",(0),(0),true,cljs.core.PersistentVector.EMPTY], null),zprint.zutil.zmap_all.call(null,cljs.core.identity,forms));
var seq_of_strings = cljs.core.mapv.call(null,(function (p1__55707_SHARP_){
return cljs.core.nth.call(null,p1__55707_SHARP_,(2));
}),seq_of_zprint_fn);
var last_seq = cljs.core.last.call(null,seq_of_zprint_fn);
var error_vec = cljs.core.nth.call(null,last_seq,(6));
var final_options = cljs.core.first.call(null,last_seq);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(interpose_str)?zprint.core.interpose_w_comment.call(null,final_options,seq_of_strings,interpose_str):((hiccup_QMARK_)?seq_of_strings:cljs.core.apply.call(null,cljs.core.str,seq_of_strings))),error_vec,final_options], null);
});
/**
 * Take a string, which typically holds the contents of an entire
 *   file, but doesn't have to, and format the entire string, outputing
 *   a formatted string.  It respects white space at the top level,
 *   while ignoring it within all top level forms (unless :indent-only,
 *   :respect-bl, or :respect-nl are used).  It allows comments at the
 *   top level, as well as in function definitions, and also supports
 *   ;!zprint directives at the top level. See File Comment API for
 *   information on ;!zprint directives. zprint-specifier is the thing
 *   that will be used in messages if errors are detected in ;!zprint
 *   directives, so it should identify the file (or other element) to
 *   allow the user to find the problem. new-options is an options-map
 *   containing options to be used when doing the formatting (and will
 *   be overriddden by any options in ;!zprint directives).  doc-str
 *   is an optional string to be used when setting the new-options
 *   into the configuration.
 */
zprint.core.zprint_file_str = (function zprint$core$zprint_file_str(var_args){
var G__55709 = arguments.length;
switch (G__55709) {
case 4:
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$4 = (function (file_str,zprint_specifier,new_options,doc_str){
var full_options = zprint.config.get_configured_options.call(null);
var full_options__$1 = (function (){var vec__55710 = zprint.config.config_and_validate.call(null,doc_str,null,full_options,new_options);
var updated_map = cljs.core.nth.call(null,vec__55710,(0),null);
var _ = cljs.core.nth.call(null,vec__55710,(1),null);
var error_str = cljs.core.nth.call(null,vec__55710,(2),null);
if(cljs.core.truth_(error_str)){
throw (new Error(error_str));
} else {
return updated_map;
}
})();
var html_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(full_options__$1)));
var hiccup_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(full_options__$1)));
var full_options__$2 = ((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(full_options__$1)))) || (html_QMARK_)))?cljs.core.assoc_in.call(null,full_options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"format","format",-1306924766)], null),new cljs.core.Keyword(null,"hiccup-multiple","hiccup-multiple",-517662443)):full_options__$1);
var vec__55713 = zprint.core.remove_shebang.call(null,file_str);
var shebang = cljs.core.nth.call(null,vec__55713,(0),null);
var file_str__$1 = cljs.core.nth.call(null,vec__55713,(1),null);
var vec__55716 = zprint.zprint.determine_ending_split_lines.call(null,file_str__$1);
var line_ending = cljs.core.nth.call(null,vec__55716,(0),null);
var lines = cljs.core.nth.call(null,vec__55716,(1),null);
var lines__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"expand?","expand?",-1744295862).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(full_options__$2)))?cljs.core.map.call(null,cljs.core.partial.call(null,zprint.zprint.expand_tabs,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(full_options__$2))),lines):lines);
var filestring = clojure.string.join.call(null,"\n",lines__$1);
var range_start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(full_options__$2)));
var range_start__$1 = (cljs.core.truth_(range_start)?(cljs.core.truth_(shebang)?(range_start - (1)):range_start):null);
var range_end = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(full_options__$2)));
var range_end__$1 = (cljs.core.truth_(range_end)?(cljs.core.truth_(shebang)?(range_end - (1)):range_end):null);
var range_QMARK_ = (function (){var or__20754__auto__ = range_start__$1;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return range_end__$1;
}
})();
var range_output_QMARK_ = (function (){var and__20748__auto__ = range_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return new cljs.core.Keyword(null,"range?","range?",-506359425).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(full_options__$2));
} else {
return and__20748__auto__;
}
})();
var _ = (cljs.core.truth_((function (){var and__20748__auto__ = ((hiccup_QMARK_) || (html_QMARK_));
if(and__20748__auto__){
var and__20748__auto____$1 = range_QMARK_;
if(cljs.core.truth_(and__20748__auto____$1)){
return cljs.core.not.call(null,range_output_QMARK_);
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())?(function(){throw (new Error(["You have specified {:output {:format ",((hiccup_QMARK_)?":hiccup":":html"),"} as well as an {:input {:range ...}},"," and this is only supported when also using"," {:output {:range? true}}, which was not"," specified!"].join('')))})():null);
var ___$1 = (cljs.core.truth_(range_QMARK_)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(new_options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(new_options),"zprint-file-str: range-start:",range_start__$1,"range-end:",range_end__$1):null):null);
var lines__$2 = (cljs.core.truth_((function (){var and__20748__auto__ = range_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return (!(cljs.core.vector_QMARK_.call(null,lines__$1)));
} else {
return and__20748__auto__;
}
})())?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,lines__$1):lines__$1);
var vec__55719 = (cljs.core.truth_(range_QMARK_)?zprint.range.expand_range_to_top_level.call(null,filestring,lines__$2,range_start__$1,range_end__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(full_options__$2)):null);
var actual_start = cljs.core.nth.call(null,vec__55719,(0),null);
var actual_end = cljs.core.nth.call(null,vec__55719,(1),null);
var ___$2 = (cljs.core.truth_(range_QMARK_)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(new_options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(new_options),"zprint-file-str: actual-start:",actual_start,"actual-end:",actual_end):null):null);
var vec__55722 = (cljs.core.truth_((function (){var and__20748__auto__ = actual_start;
if(cljs.core.truth_(and__20748__auto__)){
return actual_end;
} else {
return and__20748__auto__;
}
})())?zprint.range.split_out_range.call(null,lines__$2,actual_start,actual_end):null);
var before_lines = cljs.core.nth.call(null,vec__55722,(0),null);
var range_lines = cljs.core.nth.call(null,vec__55722,(1),null);
var after_lines = cljs.core.nth.call(null,vec__55722,(2),null);
var range_includes_end_QMARK_ = (cljs.core.count.call(null,after_lines) === (0));
var use_previous__BANG_zprint_QMARK_ = new cljs.core.Keyword(null,"use-previous-!zprint?","use-previous-!zprint?",1580246174).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(full_options__$2)));
var comment_api_lines = (cljs.core.truth_(use_previous__BANG_zprint_QMARK_)?zprint.range.wrap_comment_api.call(null,before_lines):null);
var range_lines__$1 = (cljs.core.truth_((function (){var and__20748__auto__ = range_lines;
if(cljs.core.truth_(and__20748__auto__)){
return comment_api_lines;
} else {
return and__20748__auto__;
}
})())?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,comment_api_lines,range_lines)):range_lines);
var filestring__$1 = (cljs.core.truth_(range_lines__$1)?clojure.string.join.call(null,"\n",range_lines__$1):filestring);
var range_ends_with_nl_QMARK_ = (cljs.core.truth_((function (){var and__20748__auto__ = range_lines__$1;
if(cljs.core.truth_(and__20748__auto__)){
return (!(range_includes_end_QMARK_));
} else {
return and__20748__auto__;
}
})())?clojure.string.ends_with_QMARK_.call(null,filestring__$1,"\n"):null);
var ends_with_nl_QMARK_ = clojure.string.ends_with_QMARK_.call(null,file_str__$1,"\n");
var ___$3 = (cljs.core.truth_((function (){var and__20748__auto__ = actual_start;
if(cljs.core.truth_(and__20748__auto__)){
return actual_end;
} else {
return and__20748__auto__;
}
})())?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(new_options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(new_options),cljs.core.pr_str.call(null,"zprint-file-str: lines count:",cljs.core.count.call(null,lines__$2),"before count:",cljs.core.count.call(null,before_lines),"range count:",cljs.core.count.call(null,range_lines__$1),"after count:",cljs.core.count.call(null,after_lines),"range-ends-with-nl?",range_ends_with_nl_QMARK_,"ends-with-nl?",ends_with_nl_QMARK_,"range-lines:",range_lines__$1,"filestring:",filestring__$1)):null):null);
var forms = rewrite_clj.zip.of_node_STAR_.call(null,rewrite_clj.parser.parse_string_all.call(null,filestring__$1));
var pmf_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024),true], null);
var pmf_options__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(full_options__$2)))?cljs.core.assoc.call(null,pmf_options,new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),true):pmf_options);
var pmf_options__$2 = (cljs.core.truth_(shebang)?zprint.config.merge_deep.call(null,pmf_options__$1,new cljs.core.Keyword(null,"more-options","more-options",1399478268).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(full_options__$2))):pmf_options__$1);
var vec__55725 = zprint.core.process_multiple_forms.call(null,full_options__$2,pmf_options__$2,zprint.core.zprint_str_internal,zprint_specifier,forms);
var out_str = cljs.core.nth.call(null,vec__55725,(0),null);
var error_vec = cljs.core.nth.call(null,vec__55725,(1),null);
var final_options = cljs.core.nth.call(null,vec__55725,(2),null);
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(new_options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(new_options),cljs.core.pr_str.call(null,"zprint-file-str: out-str:",out_str)):null);
var error_vec__$1 = (((!(cljs.core.empty_QMARK_.call(null,error_vec))))?error_vec:null);
var out_str__$1 = (cljs.core.truth_(comment_api_lines)?zprint.range.drop_lines.call(null,cljs.core.count.call(null,comment_api_lines),out_str):out_str);
var continue_after__BANG_zprint_error_QMARK_ = new cljs.core.Keyword(null,"continue-after-!zprint-error?","continue-after-!zprint-error?",1653518106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(final_options)));
var ___$5 = (cljs.core.truth_((function (){var and__20748__auto__ = error_vec__$1;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,range_output_QMARK_);
} else {
return and__20748__auto__;
}
})())?(function(){throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"; ",error_vec__$1)))))})():null);
var vec__55728 = (cljs.core.truth_(range_output_QMARK_)?(function (){var actual_start__$1 = ((cljs.core._EQ_.call(null,actual_end,(-1)))?actual_start:(function (){var x__21111__auto__ = actual_start;
var y__21112__auto__ = (0);
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__20748__auto__ = ((cljs.core._EQ_.call(null,actual_start__$1,(0))) || (cljs.core._EQ_.call(null,actual_start__$1,(-1))));
if(and__20748__auto__){
return shebang;
} else {
return and__20748__auto__;
}
})())?actual_start__$1:(cljs.core.truth_(shebang)?(actual_start__$1 + (1)):actual_start__$1
)),(function (){var line_count = cljs.core.count.call(null,lines__$2);
var line_count__$1 = ((cljs.core._EQ_.call(null,cljs.core.last.call(null,lines__$2),""))?(line_count - (1)):line_count);
var max_end = (line_count__$1 - (1));
var line_count__$2 = (cljs.core.truth_(shebang)?(line_count__$1 + (1)):line_count__$1);
var actual_end__$1 = (((actual_end > max_end))?max_end:actual_end);
if(cljs.core.truth_((function (){var and__20748__auto__ = shebang;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not_EQ_.call(null,actual_end__$1,(-1));
} else {
return and__20748__auto__;
}
})())){
return (actual_end__$1 + (1));
} else {
return actual_end__$1;
}
})()], null);
})():null);
var corrected_start = cljs.core.nth.call(null,vec__55728,(0),null);
var corrected_end = cljs.core.nth.call(null,vec__55728,(1),null);
var ___$6 = (cljs.core.truth_(range_output_QMARK_)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(new_options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(new_options),cljs.core.pr_str.call(null,"actual-start:",actual_start,"actual-end:",actual_end,"shebang",shebang,"(count lines):",cljs.core.count.call(null,lines__$2),"corrected-start:",corrected_start,"corrected-end:",corrected_end,"error-vec:",error_vec__$1)):null):null);
var out_str__$2 = (cljs.core.truth_((function (){var and__20748__auto__ = range_lines__$1;
if(cljs.core.truth_(and__20748__auto__)){
return range_ends_with_nl_QMARK_;
} else {
return and__20748__auto__;
}
})())?zprint.core.ensure_hvec_str_ends_with_nl.call(null,full_options__$2,out_str__$1):out_str__$1);
var out_str__$3 = (cljs.core.truth_((function (){var and__20748__auto__ = range_lines__$1;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not.call(null,range_output_QMARK_);
} else {
return and__20748__auto__;
}
})())?zprint.range.reassemble_range.call(null,before_lines,out_str__$2,after_lines):out_str__$2);
var out_str__$4 = (cljs.core.truth_(range_output_QMARK_)?(cljs.core.truth_((function (){var and__20748__auto__ = shebang;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core._EQ_.call(null,(function (){var x__21111__auto__ = actual_start;
var y__21112__auto__ = (0);
return ((x__21111__auto__ > y__21112__auto__) ? x__21111__auto__ : y__21112__auto__);
})(),(0));
} else {
return and__20748__auto__;
}
})())?zprint.core.prepend_hvec_str.call(null,full_options__$2,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shebang),"\n"].join(''),out_str__$3):out_str__$3):(cljs.core.truth_(shebang)?zprint.core.prepend_hvec_str.call(null,full_options__$2,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shebang),"\n"].join(''),out_str__$3):out_str__$3));
var out_str__$5 = (((function (){var and__20748__auto__ = (cljs.core.truth_(range_output_QMARK_)?range_includes_end_QMARK_:true);
if(and__20748__auto__){
return ((ends_with_nl_QMARK_) && ((((!(clojure.string.ends_with_QMARK_.call(null,out_str__$4,"\n")))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"hiccup-multiple","hiccup-multiple",-517662443),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(full_options__$2)))))));
} else {
return and__20748__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out_str__$4),"\n"].join(''):out_str__$4);
var out_str__$6 = ((html_QMARK_)?zprint.hiccup.hiccup__GT_html.call(null,zprint.hiccup.wrap_w_p.call(null,full_options__$2,cljs.core.reduce.call(null,cljs.core.into,cljs.core.filter.call(null,cljs.core.vector_QMARK_,out_str__$5)))):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hiccup-multiple","hiccup-multiple",-517662443),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(full_options__$2))))?zprint.hiccup.wrap_w_p.call(null,full_options__$2,cljs.core.reduce.call(null,cljs.core.into,cljs.core.filter.call(null,cljs.core.vector_QMARK_,out_str__$5))):((cljs.core._EQ_.call(null,line_ending,"\n"))?out_str__$5:clojure.string.replace.call(null,out_str__$5,"\n",line_ending)
)));
if(cljs.core.truth_(range_output_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__20748__auto__ = continue_after__BANG_zprint_error_QMARK_;
if(cljs.core.truth_(and__20748__auto__)){
return error_vec__$1;
} else {
return and__20748__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"actual-start","actual-start",681171324),corrected_start,new cljs.core.Keyword(null,"actual-end","actual-end",-2099914931),corrected_end,new cljs.core.Keyword(null,"errors","errors",-908790718),error_vec__$1], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actual-start","actual-start",681171324),corrected_start,new cljs.core.Keyword(null,"actual-end","actual-end",-2099914931),corrected_end], null)], null)),((((cljs.core._EQ_.call(null,corrected_start,(-1))) && (cljs.core._EQ_.call(null,corrected_end,(-1)))))?null:out_str__$6)], null);
} else {
return out_str__$6;
}
}));

(zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$3 = (function (file_str,zprint_specifier,new_options){
return zprint.core.zprint_file_str.call(null,file_str,zprint_specifier,new_options,"zprint-file-str input");
}));

(zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$2 = (function (file_str,zprint_specifier){
return zprint.core.zprint_file_str.call(null,file_str,zprint_specifier,null,null);
}));

(zprint.core.zprint_file_str.cljs$lang$maxFixedArity = 4);

/**
 * Take a spec and a key, and format the output as a string. Width is
 *   because the width isn't really (:width options).
 */
zprint.core.format_spec = (function zprint$core$format_spec(options,describe_fn,fn_spec,indent,key){
var temp__5720__auto__ = cljs.core.get.call(null,fn_spec,key);
if(cljs.core.truth_(temp__5720__auto__)){
var key_spec = temp__5720__auto__;
var key_str = [cljs.core.name.call(null,key),": "].join('');
var total_indent = (((key_str).length) + indent);
var width = ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(options) - total_indent) - (1));
var key_spec_data = describe_fn.call(null,key_spec);
var spec_str = zprint.core.zprint_str.call(null,key_spec_data,width);
var spec_no_nl = clojure.string.split.call(null,spec_str,/\n/);
var spec_shift_right = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,total_indent))].join(''),spec_no_nl));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks.call(null,indent)),key_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_shift_right)].join('');
} else {
return null;
}
});
