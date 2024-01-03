// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.io');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('sci.impl.records');
goog.require('sci.impl.unrestrict');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__32807 = arguments.length;
switch (G__32807) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.call(null,name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.call(null,name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__32809 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32810 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32810);

try{var G__32811 = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind.call(null,G__32811);

return G__32811;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32809);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__32812 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32813 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32813);

try{var G__32814 = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind.call(null,G__32814);

return G__32814;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32812);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__32815 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32816 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32816);

try{var G__32817 = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind.call(null,G__32817);

return G__32817;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32815);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__32818 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32819 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32819);

try{var G__32820 = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind.call(null,G__32820);

return G__32820;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32818);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__32821 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32822 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32822);

try{var G__32823 = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind.call(null,G__32823);

return G__32823;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32821);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.call(null,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__32824 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__32825 = cljs.core.deref.call(null,sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32825);

try{return cljs.core.string_print.call(null,x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32824);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32841 = arguments.length;
var i__22083__auto___32842 = (0);
while(true){
if((i__22083__auto___32842 < len__22082__auto___32841)){
args__22092__auto__.push((arguments[i__22083__auto___32842]));

var G__32843 = (i__22083__auto___32842 + (1));
i__22083__auto___32842 = G__32843;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32827 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32828 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32829 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32830 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32831 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32832 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32833 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__32834 = cljs.core.deref.call(null,sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32835 = cljs.core.deref.call(null,sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32836 = cljs.core.deref.call(null,sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32837 = cljs.core.deref.call(null,sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32838 = cljs.core.deref.call(null,sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32839 = cljs.core.deref.call(null,sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32840 = cljs.core.deref.call(null,sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32834);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32835);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32836);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32837);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32838);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32839);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32840);

try{return cljs.core.apply.call(null,cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32833);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32832);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32831);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32830);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32829);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32828);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32827);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq32826){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32826));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__32844 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__32845 = cljs.core.deref.call(null,sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32845);

try{return cljs.core.newline.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32844);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32859 = arguments.length;
var i__22083__auto___32860 = (0);
while(true){
if((i__22083__auto___32860 < len__22082__auto___32859)){
args__22092__auto__.push((arguments[i__22083__auto___32860]));

var G__32861 = (i__22083__auto___32860 + (1));
i__22083__auto___32860 = G__32861;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32847 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32848 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32849 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32850 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32851 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32852 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__32853 = cljs.core.deref.call(null,sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32854 = cljs.core.deref.call(null,sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32855 = cljs.core.deref.call(null,sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32856 = cljs.core.deref.call(null,sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32857 = cljs.core.deref.call(null,sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32858 = cljs.core.deref.call(null,sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32853);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32854);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32855);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32856);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32857);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32858);

try{return cljs.core.apply.call(null,cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32852);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32851);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32850);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32849);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32848);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32847);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq32846){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32846));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32877 = arguments.length;
var i__22083__auto___32878 = (0);
while(true){
if((i__22083__auto___32878 < len__22082__auto___32877)){
args__22092__auto__.push((arguments[i__22083__auto___32878]));

var G__32879 = (i__22083__auto___32878 + (1));
i__22083__auto___32878 = G__32879;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32863 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32864 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32865 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32866 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32867 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32868 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32869 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__32870 = cljs.core.deref.call(null,sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32871 = cljs.core.deref.call(null,sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32872 = cljs.core.deref.call(null,sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32873 = cljs.core.deref.call(null,sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32874 = cljs.core.deref.call(null,sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32875 = cljs.core.deref.call(null,sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32876 = cljs.core.deref.call(null,sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32870);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32871);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32872);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32873);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32874);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32875);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32876);

try{return cljs.core.apply.call(null,cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32869);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32868);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32867);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32866);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32865);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32864);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32863);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq32862){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32862));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32893 = arguments.length;
var i__22083__auto___32894 = (0);
while(true){
if((i__22083__auto___32894 < len__22082__auto___32893)){
args__22092__auto__.push((arguments[i__22083__auto___32894]));

var G__32895 = (i__22083__auto___32894 + (1));
i__22083__auto___32894 = G__32895;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32881 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32882 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32883 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32884 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32885 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32886 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__32887 = cljs.core.deref.call(null,sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32888 = cljs.core.deref.call(null,sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32889 = cljs.core.deref.call(null,sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32890 = cljs.core.deref.call(null,sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32891 = cljs.core.deref.call(null,sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32892 = cljs.core.deref.call(null,sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32887);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32888);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32889);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32890);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32891);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32892);

try{return cljs.core.apply.call(null,cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32886);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32885);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32884);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32883);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32882);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32881);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq32880){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32880));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32909 = arguments.length;
var i__22083__auto___32910 = (0);
while(true){
if((i__22083__auto___32910 < len__22082__auto___32909)){
args__22092__auto__.push((arguments[i__22083__auto___32910]));

var G__32911 = (i__22083__auto___32910 + (1));
i__22083__auto___32910 = G__32911;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32897 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32898 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32899 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32900 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32901 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32902 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__32903 = cljs.core.deref.call(null,sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32904 = cljs.core.deref.call(null,sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32905 = cljs.core.deref.call(null,sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__32906 = cljs.core.deref.call(null,sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32907 = null;
var _STAR_print_newline_STAR__temp_val__32908 = cljs.core.deref.call(null,sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32903);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32904);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32905);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32906);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32907);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32908);

try{return cljs.core.apply.call(null,cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32902);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32901);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32900);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32899);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32898);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32897);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq32896){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32896));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32925 = arguments.length;
var i__22083__auto___32926 = (0);
while(true){
if((i__22083__auto___32926 < len__22082__auto___32925)){
args__22092__auto__.push((arguments[i__22083__auto___32926]));

var G__32927 = (i__22083__auto___32926 + (1));
i__22083__auto___32926 = G__32927;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32913 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32914 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32915 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32916 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32917 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32918 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__32919 = cljs.core.deref.call(null,sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32920 = cljs.core.deref.call(null,sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32921 = cljs.core.deref.call(null,sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32922 = cljs.core.deref.call(null,sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32923 = cljs.core.deref.call(null,sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32924 = cljs.core.deref.call(null,sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32919);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32920);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32921);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32922);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32923);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32924);

try{return cljs.core.apply.call(null,cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32918);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32917);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32916);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32915);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32914);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32913);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq32912){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32912));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32943 = arguments.length;
var i__22083__auto___32944 = (0);
while(true){
if((i__22083__auto___32944 < len__22082__auto___32943)){
args__22092__auto__.push((arguments[i__22083__auto___32944]));

var G__32945 = (i__22083__auto___32944 + (1));
i__22083__auto___32944 = G__32945;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((0) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__22093__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32929 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32930 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32931 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32932 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32933 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32934 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32935 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__32936 = cljs.core.deref.call(null,sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32937 = cljs.core.deref.call(null,sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32938 = cljs.core.deref.call(null,sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32939 = cljs.core.deref.call(null,sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32940 = cljs.core.deref.call(null,sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32941 = cljs.core.deref.call(null,sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32942 = cljs.core.deref.call(null,sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32936);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32937);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32938);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32939);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32940);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32941);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32942);

try{return cljs.core.apply.call(null,cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32935);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32934);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32933);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32932);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32931);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32930);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32929);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq32928){
var self__22068__auto__ = this;
return self__22068__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32928));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__22092__auto__ = [];
var len__22082__auto___32951 = arguments.length;
var i__22083__auto___32952 = (0);
while(true){
if((i__22083__auto___32952 < len__22082__auto___32951)){
args__22092__auto__.push((arguments[i__22083__auto___32952]));

var G__32953 = (i__22083__auto___32952 + (1));
i__22083__auto___32952 = G__32953;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32946__auto__","s__32946__auto__",2051430710,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32947__auto__","x__32947__auto__",-20667198,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32946__auto__","s__32946__auto__",2051430710,null),null,(1),null)),(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32947__auto__","x__32947__auto__",-20667198,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32946__auto__","s__32946__auto__",2051430710,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq32948){
var G__32949 = cljs.core.first.call(null,seq32948);
var seq32948__$1 = cljs.core.next.call(null,seq32948);
var G__32950 = cljs.core.first.call(null,seq32948__$1);
var seq32948__$2 = cljs.core.next.call(null,seq32948__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32949,G__32950,seq32948__$2);
}));

