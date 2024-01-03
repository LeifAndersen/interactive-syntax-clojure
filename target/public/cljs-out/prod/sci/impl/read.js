// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.read');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.io');
goog.require('sci.impl.parser');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.read.eof_or_throw = (function sci$impl$read$eof_or_throw(opts,v){
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),v)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"eof","eof",-489063237).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var eof = temp__5718__auto__;
if((!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"eofthrow","eofthrow",-334166531),eof)))){
return eof;
} else {
throw cljs.core.ex_info.call(null,"EOF while reading",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci.error","parse","sci.error/parse",-264338844),new cljs.core.Keyword(null,"opts","opts",155075701),opts], null));
}
} else {
throw cljs.core.ex_info.call(null,"EOF while reading",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci.error","parse","sci.error/parse",-264338844),new cljs.core.Keyword(null,"opts","opts",155075701),opts], null));
}
} else {
return v;
}
});
sci.impl.read.with_resolver = (function sci$impl$read$with_resolver(opts){
return opts;
});
sci.impl.read.read = (function sci$impl$read$read(var_args){
var G__33307 = arguments.length;
switch (G__33307) {
case 1:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 3:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$1 = (function (sci_ctx){
return sci.impl.read.read.call(null,sci_ctx,cljs.core.deref.call(null,sci.impl.io.in$));
}));

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$2 = (function (sci_ctx,stream){
return sci.impl.read.read.call(null,sci_ctx,stream,true,null);
}));

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$4 = (function (sci_ctx,stream,eof_error_QMARK_,eof_value){
return sci.impl.read.read.call(null,sci_ctx,stream,eof_error_QMARK_,eof_value,false);
}));

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$5 = (function (sci_ctx,stream,_eof_error_QMARK_,eof_value,_recursive_QMARK_){
var v = sci.impl.parser.parse_next.call(null,sci_ctx,stream,sci.impl.read.with_resolver.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof_value], null)));
return sci.impl.read.eof_or_throw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof_value], null),v);
}));

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$3 = (function (sci_ctx,opts,stream){
var opts__$1 = sci.impl.read.with_resolver.call(null,opts);
var opts__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null),new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts__$1))):opts__$1);
var v = sci.impl.parser.parse_next.call(null,sci_ctx,stream,opts__$2);
return sci.impl.read.eof_or_throw.call(null,opts__$2,v);
}));

(sci.impl.read.read.cljs$lang$maxFixedArity = 5);

sci.impl.read.read_string = (function sci$impl$read$read_string(var_args){
var G__33310 = arguments.length;
switch (G__33310) {
case 2:
return sci.impl.read.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.read.read_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.read.read_string.cljs$core$IFn$_invoke$arity$2 = (function (sci_ctx,s){
var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
return sci.impl.read.read.call(null,sci_ctx,reader);
}));

(sci.impl.read.read_string.cljs$core$IFn$_invoke$arity$3 = (function (sci_ctx,opts,s){
var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
return sci.impl.read.read.call(null,sci_ctx,opts,reader);
}));

(sci.impl.read.read_string.cljs$lang$maxFixedArity = 3);

sci.impl.read.load_string = (function sci$impl$read$load_string(sci_ctx,s){
sci.impl.vars.push_thread_bindings.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref.call(null,sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
var ret = null;
while(true){
var x = sci.impl.parser.parse_next.call(null,sci_ctx,reader);
if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),x)){
return ret;
} else {
var G__33312 = sci.impl.utils.eval.call(null,sci_ctx,x);
ret = G__33312;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings.call(null);
}});
sci.impl.read.source_logging_reader = (function sci$impl$read$source_logging_reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader.call(null,x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.call(null,buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.source_logging_push_back_reader.call(null,pushback_reader);
});
