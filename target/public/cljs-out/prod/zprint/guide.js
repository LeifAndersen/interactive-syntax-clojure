// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('zprint.guide');
goog.require('cljs.core');
goog.require('zprint.util');
/**
 * Given a structure which starts with defn, create a guide for the
 *   'rules of defn', an alternative approach to formatting a defn.
 */
zprint.guide.rodguide = (function zprint$guide$rodguide(var_args){
var G__48748 = arguments.length;
switch (G__48748) {
case 0:
return zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rodguide";
}));

(zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$1 = (function (rod_options){
return "rodguide";
}));

(zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
return zprint.guide.rodguide.call(null,cljs.core.PersistentArrayMap.EMPTY,options,len,sexpr);
}));

(zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$4 = (function (rod_options,options,len,sexpr){
if(((cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sexpr)),"defn")) || (cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sexpr)),"defn-")))){
var multi_arity_nl_QMARK_ = cljs.core.get.call(null,rod_options,new cljs.core.Keyword(null,"multi-arity-nl?","multi-arity-nl?",-1175171752),true);
var docstring_QMARK_ = typeof cljs.core.nth.call(null,sexpr,(2)) === 'string';
var rest = cljs.core.nthnext.call(null,sexpr,((docstring_QMARK_)?(3):(2)));
var multi_arity_QMARK_ = (!(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,rest))));
var rest__$1 = ((multi_arity_QMARK_)?rest:cljs.core.next.call(null,rest));
var rest_guide = cljs.core.repeat.call(null,(cljs.core.count.call(null,rest__$1) - (1)),new cljs.core.Keyword(null,"element","element",1974019749));
var rest_guide__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_((function (){var and__20748__auto__ = multi_arity_QMARK_;
if(and__20748__auto__){
return multi_arity_nl_QMARK_;
} else {
return and__20748__auto__;
}
})())?cljs.core.interleave.call(null,rest_guide,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"newline","newline",1790071323)),cljs.core.repeat.call(null,new cljs.core.Keyword(null,"newline","newline",1790071323))):cljs.core.interleave.call(null,rest_guide,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"newline","newline",1790071323)))));
var rest_guide__$2 = cljs.core.conj.call(null,rest_guide__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var guide = (function (){var G__48749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749)], null);
var G__48749__$1 = ((docstring_QMARK_)?cljs.core.conj.call(null,G__48749,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)):G__48749);
var G__48749__$2 = (((!(multi_arity_QMARK_)))?cljs.core.conj.call(null,G__48749__$1,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)):G__48749__$1);
var G__48749__$3 = ((((multi_arity_QMARK_) && ((!(docstring_QMARK_)))))?cljs.core.conj.call(null,G__48749__$2,new cljs.core.Keyword(null,"newline","newline",1790071323)):G__48749__$2);
return cljs.core.into.call(null,G__48749__$3,rest_guide__$2);

})();
var option_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
if(multi_arity_QMARK_){
return cljs.core.assoc.call(null,option_map,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.Keyword(null,"vector","vector",1902966158)], null)], null)], null));
} else {
return option_map;
}
} else {
return null;
}
}));

(zprint.guide.rodguide.cljs$lang$maxFixedArity = 4);

/**
 * Return true if a constant or vector.
 */
zprint.guide.constant_or_vector_QMARK_ = (function zprint$guide$constant_or_vector_QMARK_(element){
return ((typeof element === 'number') || (((typeof element === 'string') || (((cljs.core.vector_QMARK_.call(null,element)) || ((((element instanceof cljs.core.Keyword)) || (((cljs.core._EQ_.call(null,element,true)) || (cljs.core._EQ_.call(null,element,false)))))))))));
});
zprint.guide.count_constants = (function zprint$guide$count_constants(p__48751,element){
var vec__48752 = p__48751;
var constant_count = cljs.core.nth.call(null,vec__48752,(0),null);
var possible_constant_QMARK_ = cljs.core.nth.call(null,vec__48752,(1),null);
if(cljs.core.truth_(possible_constant_QMARK_)){
if(zprint.guide.constant_or_vector_QMARK_.call(null,element)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(constant_count + (1)),cljs.core.not.call(null,possible_constant_QMARK_)], null);
} else {
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [constant_count,possible_constant_QMARK_], null));
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [constant_count,cljs.core.not.call(null,possible_constant_QMARK_)], null);
}
});
/**
 * Reimplement :style :moustache with guides.
 */
zprint.guide.moustacheguide = (function zprint$guide$moustacheguide(var_args){
var G__48756 = arguments.length;
switch (G__48756) {
case 0:
return zprint.guide.moustacheguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.moustacheguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.moustacheguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "moustacheguide";
}));

(zprint.guide.moustacheguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var rev_sexpr = cljs.core.reverse.call(null,sexpr);
var vec__48757 = cljs.core.reduce.call(null,zprint.guide.count_constants,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),false], null),rev_sexpr);
var constant_count = cljs.core.nth.call(null,vec__48757,(0),null);
var _ = cljs.core.nth.call(null,vec__48757,(1),null);
var pair_count = (constant_count * (2));
var pair_guide = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,pair_count,new cljs.core.Keyword(null,"element","element",1974019749)));
var pair_guide__$1 = cljs.core.conj.call(null,pair_guide,new cljs.core.Keyword(null,"group-end","group-end",-574931147));
var pair_guide__$2 = cljs.core.conj.call(null,pair_guide__$1,new cljs.core.Keyword(null,"element-pair-group","element-pair-group",2021364237));
var non_pair_count = (cljs.core.count.call(null,sexpr) - pair_count);
var non_pair_guide = cljs.core.repeat.call(null,non_pair_count,new cljs.core.Keyword(null,"element","element",1974019749));
var non_pair_guide__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.interpose.call(null,new cljs.core.Keyword(null,"newline","newline",1790071323),non_pair_guide));
var guide = cljs.core.conj.call(null,non_pair_guide__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"group-begin","group-begin",447482475));
var guide__$1 = cljs.core.concat.call(null,guide,pair_guide__$2);
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"moustacheguide: sexpr",sexpr,"pair-count:",pair_count,"output:",guide__$1);
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$1,new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),false], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}));

(zprint.guide.moustacheguide.cljs$lang$maxFixedArity = 3);

/**
 * Given two arguments, an s-expression and a string, if the s-expression
 *   is actually a string, add a double quote on to the beginning and end of
 *   the string.
 */
zprint.guide.add_double_quotes = (function zprint$guide$add_double_quotes(sexpr,s){
if(typeof sexpr === 'string'){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
} else {
return s;
}
});
/**
 * Format are test functions.  Call it with (partial {} areguide), where
 *   the map can be {:justify? true} to justify the various rows. It will
 *   use {:pair {:justify {:max-variance n}}} for the variance, but you can
 *   give it a variance to use with {:max-variance n} in the map which is
 *   its first argument.
 */
zprint.guide.areguide = (function zprint$guide$areguide(var_args){
var G__48762 = arguments.length;
switch (G__48762) {
case 0:
return zprint.guide.areguide.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.guide.areguide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return zprint.guide.areguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.guide.areguide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.areguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "areguide";
}));

(zprint.guide.areguide.cljs$core$IFn$_invoke$arity$1 = (function (are_options){
return "areguide";
}));

(zprint.guide.areguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
return zprint.guide.areguide.call(null,cljs.core.PersistentArrayMap.EMPTY,options,len,sexpr);
}));

(zprint.guide.areguide.cljs$core$IFn$_invoke$arity$4 = (function (are_options,options,len,sexpr){
var justify_QMARK_ = new cljs.core.Keyword(null,"justify?","justify?",294994148).cljs$core$IFn$_invoke$arity$1(are_options);
var max_variance = (cljs.core.truth_(justify_QMARK_)?(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(are_options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options)));
}
})():null);
var caller_options = new cljs.core.Keyword(null,"caller","caller",-1275362879).cljs$core$IFn$_invoke$arity$1(options).call(null,options);
var current_indent = (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874).cljs$core$IFn$_invoke$arity$1(caller_options);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(caller_options);
}
})();
var are_indent = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(are_options);
var table_indent = (current_indent + (function (){var or__20754__auto__ = are_indent;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return current_indent;
}
})());
var arg_vec_len = cljs.core.count.call(null,cljs.core.second.call(null,sexpr));
var test_len = (cljs.core.count.call(null,sexpr) - (3));
var rows = (test_len / arg_vec_len);
var excess_tests = (test_len - (rows * arg_vec_len));
var alignment_vec = (cljs.core.truth_(justify_QMARK_)?(function (){var zfn_map = new cljs.core.Keyword(null,"zfn-map","zfn-map",1068295789).cljs$core$IFn$_invoke$arity$1(options);
var zloc_seq_nc = new cljs.core.Keyword(null,"zmap-no-comment","zmap-no-comment",1484161325).cljs$core$IFn$_invoke$arity$1(zfn_map).call(null,cljs.core.identity,new cljs.core.Keyword(null,"zloc","zloc",-2123059767).cljs$core$IFn$_invoke$arity$1(options));
var args = cljs.core.drop.call(null,(3),zloc_seq_nc);
var arg_strs = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"zstring","zstring",-1532582237).cljs$core$IFn$_invoke$arity$1(zfn_map),args);
var seq_of_seqs = cljs.core.partition.call(null,arg_vec_len,arg_vec_len,cljs.core.PersistentVector.EMPTY,arg_strs);
var max_width_vec = zprint.util.column_alignment.call(null,max_variance,seq_of_seqs,null,new cljs.core.Keyword(null,"no-string-adj?","no-string-adj?",-147285501));
var alignment_vec = zprint.util.cumulative_alignment.call(null,max_width_vec);
return alignment_vec;
})():null);
var mark_guide = cljs.core.vec.call(null,cljs.core.flatten.call(null,cljs.core.mapv.call(null,cljs.core.vector,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"mark-at-indent","mark-at-indent",-126657684)),cljs.core.range.call(null),alignment_vec)));
var new_row_guide = (function (){var G__48763 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"indent","indent",-148200125),table_indent], null);
var G__48763__$1 = (((!(cljs.core.empty_QMARK_.call(null,alignment_vec))))?cljs.core.into.call(null,G__48763,cljs.core.interleave.call(null,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"align","align",1964212802)),cljs.core.range.call(null,cljs.core.count.call(null,alignment_vec)),cljs.core.repeat.call(null,new cljs.core.Keyword(null,"element","element",1974019749)))):G__48763);
var G__48763__$2 = ((cljs.core.empty_QMARK_.call(null,alignment_vec))?cljs.core.into.call(null,G__48763__$1,cljs.core.repeat.call(null,(arg_vec_len - (1)),new cljs.core.Keyword(null,"element","element",1974019749))):G__48763__$1);
return cljs.core.conj.call(null,G__48763__$2,new cljs.core.Keyword(null,"indent-reset","indent-reset",900463610),new cljs.core.Keyword(null,"newline","newline",1790071323));

})();
var multi_row_guide = cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeat.call(null,rows,new_row_guide));
var guide = (function (){var G__48764 = cljs.core.into.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-best","element-best",1084358317),new cljs.core.Keyword(null,"newline","newline",1790071323)], null),mark_guide),multi_row_guide);
if((excess_tests > (0))){
return cljs.core.conj.call(null,G__48764,new cljs.core.Keyword(null,"element-*","element-*",-948937262));
} else {
return G__48764;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}));

(zprint.guide.areguide.cljs$lang$maxFixedArity = 4);

/**
 * Format are test functions, no justification.
 */
zprint.guide.areguide_basic = (function zprint$guide$areguide_basic(var_args){
var G__48767 = arguments.length;
switch (G__48767) {
case 0:
return zprint.guide.areguide_basic.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.areguide_basic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.areguide_basic.cljs$core$IFn$_invoke$arity$0 = (function (){
return "areguide";
}));

(zprint.guide.areguide_basic.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var arg_vec_len = cljs.core.count.call(null,cljs.core.second.call(null,sexpr));
var beginning = cljs.core.take.call(null,(3),sexpr);
var test_len = (cljs.core.count.call(null,sexpr) - (3));
var rows = (test_len / arg_vec_len);
var excess_tests = (test_len - (rows * arg_vec_len));
var single_row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline","newline",1790071323)], null),cljs.core.repeat.call(null,arg_vec_len,new cljs.core.Keyword(null,"element","element",1974019749)));
var row_guide = cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeat.call(null,rows,single_row));
var guide = (function (){var G__48768 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-best","element-best",1084358317)], null),row_guide);
if((excess_tests > (0))){
return cljs.core.conj.call(null,G__48768,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element-*","element-*",-948937262));
} else {
return G__48768;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}));

(zprint.guide.areguide_basic.cljs$lang$maxFixedArity = 3);

/**
 * Justify the first things in a variety of settings.  The first argument
 *   is the things to recognize, and can be :require, :require-macros, or 
 *   :import. :require and :require-macros are handled the same, and :import
 *   is handled differently since it has the values all in the same expression.
 *   Handles sequences with lists or vectors.
 */
zprint.guide.jrequireguide = (function zprint$guide$jrequireguide(var_args){
var G__48772 = arguments.length;
switch (G__48772) {
case 0:
return zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "jrequireguide";
}));

(zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$1 = (function (keyword){
return "jrequireguide";
}));

(zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$4 = (function (keyword,options,len,sexpr){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,sexpr),keyword)){
var vectors_PLUS_lists = cljs.core.filter.call(null,(function (p1__48770_SHARP_){
return ((cljs.core.vector_QMARK_.call(null,p1__48770_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__48770_SHARP_)));
}),sexpr);
if((!(cljs.core.empty_QMARK_.call(null,vectors_PLUS_lists)))){
var max_width_vec = zprint.util.column_alignment.call(null,new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options))),vectors_PLUS_lists,(1));
var _ = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"jrequireguide max-width-vec:",max_width_vec):null);
var max_first = cljs.core.first.call(null,max_width_vec);
var element_guide = new cljs.core.Keyword(null,"element-pair-*","element-pair-*",281146227);
var vector_guide = (cljs.core.truth_(max_first)?((cljs.core._EQ_.call(null,cljs.core.first.call(null,sexpr),new cljs.core.Keyword(null,"import","import",-1399500709)))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498),(0),(max_first + (1)),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"align","align",1964212802),(0),new cljs.core.Keyword(null,"indent-here","indent-here",1856277408),new cljs.core.Keyword(null,"element-*","element-*",-948937262)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498),(0),(max_first + (1)),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"align","align",1964212802),(0),element_guide], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),element_guide], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),(function (___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),vector_guide], null);
}),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),true,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),(function (___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),vector_guide], null);
}),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),true,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"option-fn","option-fn",-959705456)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"hang?","hang?",-579442854)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"option-fn","option-fn",-959705456)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"hang?","hang?",-579442854)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"justify?","justify?",294994148)], null)], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
}));

(zprint.guide.jrequireguide.cljs$lang$maxFixedArity = 4);

/**
 * Assumes that this is rum/defcs or something similar. Implement :arg1-mixin
 *   with guides using :spaces.  For guide testing, do not use this as a model
 *   for how to write a guide.
 */
zprint.guide.rumguide = (function zprint$guide$rumguide(var_args){
var G__48776 = arguments.length;
switch (G__48776) {
case 0:
return zprint.guide.rumguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.rumguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.rumguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rumguide";
}));

(zprint.guide.rumguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var docstring_QMARK_ = typeof cljs.core.nth.call(null,sexpr,(2)) === 'string';
var vec__48777 = cljs.core.split_with.call(null,(function (p1__48774_SHARP_){
return (!(((cljs.core.vector_QMARK_.call(null,p1__48774_SHARP_)) || (((cljs.core.list_QMARK_.call(null,p1__48774_SHARP_)) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__48774_SHARP_))))))));
}),sexpr);
var up_to_arguments = cljs.core.nth.call(null,vec__48777,(0),null);
var args_and_after = cljs.core.nth.call(null,vec__48777,(1),null);
if(cljs.core.empty_QMARK_.call(null,args_and_after)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null);
} else {
var lt = cljs.core.nth.call(null,sexpr,((docstring_QMARK_)?(3):(2)));
var lt_QMARK_ = cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lt),"<");
var mixin_indent = ((lt_QMARK_)?(2):(1));
var beginning_guide = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null);
var beginning_guide__$1 = ((docstring_QMARK_)?cljs.core.concat.call(null,beginning_guide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):beginning_guide);
var middle_element_count = (((cljs.core.count.call(null,up_to_arguments) - (2)) - ((docstring_QMARK_)?(1):(0))) - ((lt_QMARK_)?(1):(0)));
var middle_guide = (((middle_element_count > (0)))?((lt_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):cljs.core.PersistentVector.EMPTY);
var middle_guide__$1 = cljs.core.concat.call(null,middle_guide,cljs.core.repeat.call(null,(middle_element_count - (1)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spaces","spaces",365984563),mixin_indent,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)));
var end_element_count = cljs.core.count.call(null,args_and_after);
var end_guide = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.repeat.call(null,(end_element_count - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749)], null))], null);
var guide = cljs.core.concat.call(null,beginning_guide__$1,middle_guide__$1,end_guide);
var guide__$1 = cljs.core.flatten.call(null,guide);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}
}));

(zprint.guide.rumguide.cljs$lang$maxFixedArity = 3);

/**
 * Assumes that this is rum/defcs or something similar. Implement :arg1-mixin
 *   with guides using :align.  For guide testing, do not use this as a model
 *   for how to write a guide.
 */
zprint.guide.rumguide_1 = (function zprint$guide$rumguide_1(var_args){
var G__48783 = arguments.length;
switch (G__48783) {
case 0:
return zprint.guide.rumguide_1.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.rumguide_1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.rumguide_1.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rumguide";
}));

(zprint.guide.rumguide_1.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var docstring_QMARK_ = typeof cljs.core.nth.call(null,sexpr,(2)) === 'string';
var vec__48784 = cljs.core.split_with.call(null,(function (p1__48781_SHARP_){
return (!(((cljs.core.vector_QMARK_.call(null,p1__48781_SHARP_)) || (((cljs.core.list_QMARK_.call(null,p1__48781_SHARP_)) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__48781_SHARP_))))))));
}),sexpr);
var up_to_arguments = cljs.core.nth.call(null,vec__48784,(0),null);
var args_and_after = cljs.core.nth.call(null,vec__48784,(1),null);
if(cljs.core.empty_QMARK_.call(null,args_and_after)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null);
} else {
var lt = cljs.core.nth.call(null,sexpr,((docstring_QMARK_)?(3):(2)));
var lt_QMARK_ = cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lt),"<");
var beginning_guide = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null);
var beginning_guide__$1 = ((docstring_QMARK_)?cljs.core.concat.call(null,beginning_guide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):beginning_guide);
var middle_element_count = (((cljs.core.count.call(null,up_to_arguments) - (2)) - ((docstring_QMARK_)?(1):(0))) - ((lt_QMARK_)?(1):(0)));
var middle_guide = (((middle_element_count > (0)))?((lt_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"mark","mark",-373816345),(1),new cljs.core.Keyword(null,"align","align",1964212802),(1),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),(1),new cljs.core.Keyword(null,"align","align",1964212802),(1),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):cljs.core.PersistentVector.EMPTY);
var middle_guide__$1 = cljs.core.concat.call(null,middle_guide,cljs.core.repeat.call(null,(middle_element_count - (1)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(1),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)));
var end_element_count = cljs.core.count.call(null,args_and_after);
var end_guide = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.repeat.call(null,(end_element_count - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749)], null))], null);
var guide = cljs.core.concat.call(null,beginning_guide__$1,middle_guide__$1,end_guide);
var guide__$1 = cljs.core.flatten.call(null,guide);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}
}));

(zprint.guide.rumguide_1.cljs$lang$maxFixedArity = 3);

/**
 * Assumes that this is rum/defcs or something similar. Implement :arg1-mixin
 *   with guides using :indent.  This is probably the simplest and therefore the
 *   best of them all.  For guide testing, do not use this as a model for how
 *   to write a guide.
 */
zprint.guide.rumguide_2 = (function zprint$guide$rumguide_2(var_args){
var G__48790 = arguments.length;
switch (G__48790) {
case 0:
return zprint.guide.rumguide_2.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.rumguide_2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.rumguide_2.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rumguide";
}));

(zprint.guide.rumguide_2.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var docstring_QMARK_ = typeof cljs.core.nth.call(null,sexpr,(2)) === 'string';
var vec__48791 = cljs.core.split_with.call(null,(function (p1__48788_SHARP_){
return (!(((cljs.core.vector_QMARK_.call(null,p1__48788_SHARP_)) || (((cljs.core.list_QMARK_.call(null,p1__48788_SHARP_)) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__48788_SHARP_))))))));
}),sexpr);
var up_to_arguments = cljs.core.nth.call(null,vec__48791,(0),null);
var args_and_after = cljs.core.nth.call(null,vec__48791,(1),null);
if(cljs.core.empty_QMARK_.call(null,args_and_after)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null);
} else {
var lt = cljs.core.nth.call(null,sexpr,((docstring_QMARK_)?(3):(2)));
var lt_QMARK_ = cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lt),"<");
var beginning_guide = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null);
var beginning_guide__$1 = ((docstring_QMARK_)?cljs.core.concat.call(null,beginning_guide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):beginning_guide);
var middle_element_count = (((cljs.core.count.call(null,up_to_arguments) - (2)) - ((docstring_QMARK_)?(1):(0))) - ((lt_QMARK_)?(1):(0)));
var middle_guide = (((middle_element_count > (0)))?((lt_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"indent","indent",-148200125),(4),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),(4),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):cljs.core.PersistentVector.EMPTY);
var middle_guide__$1 = cljs.core.concat.call(null,middle_guide,cljs.core.repeat.call(null,(middle_element_count - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)));
var end_element_count = cljs.core.count.call(null,args_and_after);
var end_guide = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent-reset","indent-reset",900463610),new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.repeat.call(null,(end_element_count - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749)], null))], null);
var guide = cljs.core.concat.call(null,beginning_guide__$1,middle_guide__$1,end_guide);
var guide__$1 = cljs.core.flatten.call(null,guide);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}
}));

(zprint.guide.rumguide_2.cljs$lang$maxFixedArity = 3);

/**
 * Justify O'Doyles Rules
 */
zprint.guide.odrguide = (function zprint$guide$odrguide(var_args){
var G__48796 = arguments.length;
switch (G__48796) {
case 0:
return zprint.guide.odrguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.odrguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.odrguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "odrguide";
}));

(zprint.guide.odrguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,sexpr),new cljs.core.Keyword(null,"what","what",987290269))){
var vec__48797 = cljs.core.split_with.call(null,cljs.core.vector_QMARK_,cljs.core.next.call(null,sexpr));
var vectors = cljs.core.nth.call(null,vec__48797,(0),null);
var beyond = cljs.core.nth.call(null,vec__48797,(1),null);
var max_width_vec = zprint.util.column_alignment.call(null,new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options))),vectors);
var alignment_vec = zprint.util.cumulative_alignment.call(null,max_width_vec);
var mark_guide = cljs.core.vec.call(null,cljs.core.flatten.call(null,cljs.core.mapv.call(null,cljs.core.vector,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498)),cljs.core.range.call(null),alignment_vec)));
var alignment_guide = cljs.core.mapv.call(null,cljs.core.vector,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"align","align",1964212802)),cljs.core.range.call(null,cljs.core.count.call(null,alignment_vec)));
var vector_guide = cljs.core.into.call(null,mark_guide,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.interleave.call(null,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"element","element",1974019749)),alignment_guide),new cljs.core.Keyword(null,"element-*","element-*",-948937262)], null)));
var keyword_1 = cljs.core.first.call(null,beyond);
var vec__48800 = cljs.core.split_with.call(null,cljs.core.list_QMARK_,cljs.core.next.call(null,beyond));
var keyword_1_lists = cljs.core.nth.call(null,vec__48800,(0),null);
var beyond__$1 = cljs.core.nth.call(null,vec__48800,(1),null);
var keyword_2 = cljs.core.first.call(null,beyond__$1);
var vec__48803 = cljs.core.split_with.call(null,cljs.core.list_QMARK_,cljs.core.next.call(null,beyond__$1));
var keyword_2_lists = cljs.core.nth.call(null,vec__48803,(0),null);
var beyond__$2 = cljs.core.nth.call(null,vec__48803,(1),null);
var _ = (cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"odrguide alignment-vec:",alignment_vec,"mark-guide:",mark_guide,"alignment-guide:",alignment_guide,"vector-guide:",vector_guide,"keyword-1:",keyword_1,"keyword-1-lists:",keyword_1_lists,"keyword-2:",keyword_2,"keyword-2-lists:",keyword_2_lists):null);
var guide = (function (){var G__48806 = cljs.core.conj.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),vector_guide,new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),true,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null)], null),new cljs.core.Keyword(null,"group-begin","group-begin",447482475)], null),cljs.core.repeat.call(null,cljs.core.count.call(null,vectors),new cljs.core.Keyword(null,"element","element",1974019749))),new cljs.core.Keyword(null,"group-end","group-end",-574931147),new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328),new cljs.core.Keyword(null,"options-reset","options-reset",610833739),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),true,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null)], null),new cljs.core.Keyword(null,"indent","indent",-148200125),(1));
var G__48806__$1 = (cljs.core.truth_(keyword_1)?cljs.core.conj.call(null,G__48806,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749)):G__48806);
var G__48806__$2 = (((!(cljs.core.empty_QMARK_.call(null,keyword_1_lists))))?cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.conj.call(null,G__48806__$1,new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"group-begin","group-begin",447482475)),cljs.core.repeat.call(null,cljs.core.count.call(null,keyword_1_lists),new cljs.core.Keyword(null,"element","element",1974019749))),new cljs.core.Keyword(null,"group-end","group-end",-574931147),new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328),new cljs.core.Keyword(null,"indent","indent",-148200125),(1)):G__48806__$1);
var G__48806__$3 = (cljs.core.truth_(keyword_2)?cljs.core.conj.call(null,G__48806__$2,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749)):G__48806__$2);
if((!(cljs.core.empty_QMARK_.call(null,keyword_2_lists)))){
return cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.conj.call(null,G__48806__$3,new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"group-begin","group-begin",447482475)),cljs.core.repeat.call(null,cljs.core.count.call(null,keyword_2_lists),new cljs.core.Keyword(null,"element","element",1974019749))),new cljs.core.Keyword(null,"group-end","group-end",-574931147),new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328));
} else {
return G__48806__$3;
}
})();
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"odrguide:",guide);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide], null);
} else {
return null;
}
}));

(zprint.guide.odrguide.cljs$lang$maxFixedArity = 3);

zprint.guide.guide_arg_count = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"options-reset","options-reset",610833739),new cljs.core.Keyword(null,"group-begin","group-begin",447482475),new cljs.core.Keyword(null,"element-binding-vec","element-binding-vec",936510284),new cljs.core.Keyword(null,"mark-at-indent","mark-at-indent",-126657684),new cljs.core.Keyword(null,"element-pair-group","element-pair-group",2021364237),new cljs.core.Keyword(null,"element-best","element-best",1084358317),new cljs.core.Keyword(null,"element-guide","element-guide",384986063),new cljs.core.Keyword(null,"element-newline-best-*","element-newline-best-*",-1915830000),new cljs.core.Keyword(null,"element-*","element-*",-948937262),new cljs.core.Keyword(null,"spaces","spaces",365984563),new cljs.core.Keyword(null,"element-pair-*","element-pair-*",281146227),new cljs.core.Keyword(null,"group-end","group-end",-574931147),new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078),new cljs.core.Keyword(null,"indent-reset","indent-reset",900463610),new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043),new cljs.core.Keyword(null,"newline","newline",1790071323)],[(0),(1),(1),(0),(0),(1),(0),(0),(0),(2),(0),(0),(1),(0),(0),(1),(0),(0),(2),(1),(0),(0),(0),(0)]);
zprint.guide.guide_insert = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-begin","group-begin",447482475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),(3)], null)], null),new cljs.core.Keyword(null,"group-end","group-end",-574931147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null)], null)], null);
/**
 * Figure out the arg-count for a guide.
 */
zprint.guide.handle_args = (function zprint$guide$handle_args(p__48808,command){
var vec__48809 = p__48808;
var guide = cljs.core.nth.call(null,vec__48809,(0),null);
var running_arg_count = cljs.core.nth.call(null,vec__48809,(1),null);
if((running_arg_count === (0))){
var command_arg_count = (function (){var or__20754__auto__ = zprint.guide.guide_arg_count.call(null,command);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (0);
}
})();
var before = new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(zprint.guide.guide_insert.call(null,command));
var after = new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(zprint.guide.guide_insert.call(null,command));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48812 = guide;
var G__48812__$1 = (cljs.core.truth_(before)?cljs.core.into.call(null,G__48812,before):G__48812);
var G__48812__$2 = ((cljs.core.empty_QMARK_.call(null,guide))?cljs.core.conj.call(null,G__48812__$1,new cljs.core.Keyword(null,"element","element",1974019749)):G__48812__$1);
var G__48812__$3 = (((!(cljs.core.empty_QMARK_.call(null,guide))))?cljs.core.conj.call(null,G__48812__$2,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749)):G__48812__$2);
if(cljs.core.truth_(after)){
return cljs.core.into.call(null,G__48812__$3,after);
} else {
return G__48812__$3;
}
})(),command_arg_count], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,guide,new cljs.core.Keyword(null,"element","element",1974019749)),(running_arg_count - (1))], null);
}
});
/**
 * Print out a guide
 */
zprint.guide.guideguide = (function zprint$guide$guideguide(var_args){
var G__48814 = arguments.length;
switch (G__48814) {
case 0:
return zprint.guide.guideguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.guideguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.guideguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "guideguide";
}));

(zprint.guide.guideguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
if(cljs.core.truth_(zprint.guide.guide_arg_count.call(null,cljs.core.first.call(null,sexpr)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),cljs.core.first.call(null,cljs.core.reduce.call(null,zprint.guide.handle_args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(0)], null),sexpr))], null);
} else {
return null;
}
}));

(zprint.guide.guideguide.cljs$lang$maxFixedArity = 3);

/**
 * Handle defprotocol with options.
 */
zprint.guide.defprotocolguide = (function zprint$guide$defprotocolguide(var_args){
var G__48817 = arguments.length;
switch (G__48817) {
case 0:
return zprint.guide.defprotocolguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.defprotocolguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.defprotocolguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "defprotocolguide";
}));

(zprint.guide.defprotocolguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,sexpr),new cljs.core.Symbol(null,"defprotocol","defprotocol",1388695348,null))){
var third = cljs.core.nth.call(null,sexpr,(2),null);
var fourth = cljs.core.nth.call(null,sexpr,(3),null);
var fifth = cljs.core.nth.call(null,sexpr,(4),null);
var vec__48818 = ((((typeof third === 'string') && ((fourth instanceof cljs.core.Keyword))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [third,fourth,fifth], null):((typeof third === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [third,null,null], null):(((third instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,third,fourth], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)
)));
var docstring = cljs.core.nth.call(null,vec__48818,(0),null);
var option = cljs.core.nth.call(null,vec__48818,(1),null);
var option_value = cljs.core.nth.call(null,vec__48818,(2),null);
var guide = (function (){var G__48821 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-best","element-best",1084358317),new cljs.core.Keyword(null,"newline","newline",1790071323)], null);
var G__48821__$1 = (cljs.core.truth_(docstring)?cljs.core.conj.call(null,G__48821,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)):G__48821);
var G__48821__$2 = (cljs.core.truth_(option)?cljs.core.conj.call(null,G__48821__$1,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)):G__48821__$1);
return cljs.core.conj.call(null,G__48821__$2,new cljs.core.Keyword(null,"element-newline-best-*","element-newline-best-*",-1915830000));

})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
} else {
return null;
}
}));

(zprint.guide.defprotocolguide.cljs$lang$maxFixedArity = 3);

/**
 * Handle defprotocol signatures with arities and doc string on their 
 *   own lines.
 */
zprint.guide.signatureguide1 = (function zprint$guide$signatureguide1(var_args){
var G__48824 = arguments.length;
switch (G__48824) {
case 0:
return zprint.guide.signatureguide1.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.signatureguide1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.signatureguide1.cljs$core$IFn$_invoke$arity$0 = (function (){
return "signatureguide1";
}));

(zprint.guide.signatureguide1.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var vectors = cljs.core.filter.call(null,cljs.core.vector_QMARK_,sexpr);
var guide = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"group-begin","group-begin",447482475)], null);
var guide__$1 = cljs.core.apply.call(null,cljs.core.conj,guide,cljs.core.repeat.call(null,cljs.core.count.call(null,vectors),new cljs.core.Keyword(null,"element","element",1974019749)));
var guide__$2 = cljs.core.conj.call(null,guide__$1,new cljs.core.Keyword(null,"group-end","group-end",-574931147),new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328),new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element-*","element-*",-948937262));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$2], null);
}));

(zprint.guide.signatureguide1.cljs$lang$maxFixedArity = 3);

