// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.reader');
goog.require('cljs.core');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader.impl.errors');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.reader_types');
goog.require('rewrite_clj.interop');
goog.require('goog.string.StringBuffer');
/**
 * Throw reader exception, including line line/column.
 */
rewrite_clj.reader.throw_reader = (function rewrite_clj$reader$throw_reader(var_args){
var args__22092__auto__ = [];
var len__22082__auto___43667 = arguments.length;
var i__22083__auto___43668 = (0);
while(true){
if((i__22083__auto___43668 < len__22082__auto___43667)){
args__22092__auto__.push((arguments[i__22083__auto___43668]));

var G__43669 = (i__22083__auto___43668 + (1));
i__22083__auto___43668 = G__43669;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic = (function (reader,fmt,data){
var c = cljs.tools.reader.reader_types.get_column_number.call(null,reader);
var l = cljs.tools.reader.reader_types.get_line_number.call(null,reader);
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,rewrite_clj.interop.simple_format,fmt,data))," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.reader.throw_reader.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.reader.throw_reader.cljs$lang$applyTo = (function (seq43664){
var G__43665 = cljs.core.first.call(null,seq43664);
var seq43664__$1 = cljs.core.next.call(null,seq43664);
var G__43666 = cljs.core.first.call(null,seq43664__$1);
var seq43664__$2 = cljs.core.next.call(null,seq43664__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43665,G__43666,seq43664__$2);
}));

/**
 * Check whether a given char is a token boundary.
 */
rewrite_clj.reader.boundary_QMARK_ = (function rewrite_clj$reader$boundary_QMARK_(c){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [null,null,"@",null,"`",null,"\"",null,"'",null,"(",null,")",null,":",null,";",null,"[",null,"{",null,"\\",null,"]",null,"}",null,"^",null,"~",null], null), null),c);
});
rewrite_clj.reader.comma_QMARK_ = (function rewrite_clj$reader$comma_QMARK_(c){
return ("," === c);
});
/**
 * Checks whether a given character is whitespace
 */
rewrite_clj.reader.whitespace_QMARK_ = (function rewrite_clj$reader$whitespace_QMARK_(c){
return rewrite_clj.interop.clojure_whitespace_QMARK_.call(null,c);
});
/**
 * Checks whether the character is a newline
 */
rewrite_clj.reader.linebreak_QMARK_ = (function rewrite_clj$reader$linebreak_QMARK_(c){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null),c);
});
/**
 * Checks whether the character is a space
 */
rewrite_clj.reader.space_QMARK_ = (function rewrite_clj$reader$space_QMARK_(c){
var and__20748__auto__ = c;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = rewrite_clj.reader.whitespace_QMARK_.call(null,c);
if(cljs.core.truth_(and__20748__auto____$1)){
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\n",null,",",null,"\r",null], null), null),c)));
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
});
rewrite_clj.reader.whitespace_or_boundary_QMARK_ = (function rewrite_clj$reader$whitespace_or_boundary_QMARK_(c){
var or__20754__auto__ = rewrite_clj.reader.whitespace_QMARK_.call(null,c);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return rewrite_clj.reader.boundary_QMARK_.call(null,c);
}
});
/**
 * Read while the chars fulfill the given condition. Ignores
 *  the unmatching char.
 */
rewrite_clj.reader.read_while = (function rewrite_clj$reader$read_while(var_args){
var G__43671 = arguments.length;
switch (G__43671) {
case 2:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2 = (function (reader,p_QMARK_){
return rewrite_clj.reader.read_while.call(null,reader,p_QMARK_,cljs.core.not.call(null,p_QMARK_.call(null,null)));
}));

(rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3 = (function (reader,p_QMARK_,eof_QMARK_){
var buf = (new goog.string.StringBuffer());
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,c))){
buf.append(c);

continue;
} else {
cljs.tools.reader.reader_types.unread.call(null,reader,c);

return buf.toString();
}
} else {
if(cljs.core.truth_(eof_QMARK_)){
return buf.toString();
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"unexpected EOF");
}
}
break;
}
}));

(rewrite_clj.reader.read_while.cljs$lang$maxFixedArity = 3);

/**
 * Read until a char fulfills the given condition. Ignores the
 * matching char.
 */
rewrite_clj.reader.read_until = (function rewrite_clj$reader$read_until(reader,p_QMARK_){
return rewrite_clj.reader.read_while.call(null,reader,cljs.core.complement.call(null,p_QMARK_),p_QMARK_.call(null,null));
});
/**
 * Read until linebreak and include it.
 */
rewrite_clj.reader.read_include_linebreak = (function rewrite_clj$reader$read_include_linebreak(reader){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.reader.read_until.call(null,reader,(function (p1__43673_SHARP_){
return (((p1__43673_SHARP_ == null)) || (rewrite_clj.reader.linebreak_QMARK_.call(null,p1__43673_SHARP_)));
}))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.read_char.call(null,reader))].join('');
});
/**
 * Convert string to EDN value.
 */
rewrite_clj.reader.string__GT_edn = (function rewrite_clj$reader$string__GT_edn(s){
return cljs.tools.reader.edn.read_string.call(null,s);
});
/**
 * Ignore the next character.
 */
rewrite_clj.reader.ignore = (function rewrite_clj$reader$ignore(reader){
cljs.tools.reader.reader_types.read_char.call(null,reader);

return null;
});
/**
 * Read next char.
 */
rewrite_clj.reader.next = (function rewrite_clj$reader$next(reader){
return cljs.tools.reader.reader_types.read_char.call(null,reader);
});
/**
 * Unreads a char. Puts the char back on the reader.
 */
rewrite_clj.reader.unread = (function rewrite_clj$reader$unread(reader,ch){
return cljs.tools.reader.reader_types.unread.call(null,reader,ch);
});
/**
 * Peek next char.
 */
rewrite_clj.reader.peek = (function rewrite_clj$reader$peek(reader){
var ch = cljs.tools.reader.reader_types.peek_char.call(null,reader);
if(("\r" === ch)){
return "\n";
} else {
return ch;
}
});
/**
 * Create map of `row-k` and `col-k` representing the current reader position.
 */
rewrite_clj.reader.position = (function rewrite_clj$reader$position(reader,row_k,col_k){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([row_k,cljs.tools.reader.reader_types.get_line_number.call(null,reader),col_k,cljs.tools.reader.reader_types.get_column_number.call(null,reader)]);
});
/**
 * Use the given function to read value, then attach row/col metadata.
 */
rewrite_clj.reader.read_with_meta = (function rewrite_clj$reader$read_with_meta(reader,read_fn){
var start_position = rewrite_clj.reader.position.call(null,reader,new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084));
var temp__5720__auto__ = read_fn.call(null,reader);
if(cljs.core.truth_(temp__5720__auto__)){
var entry = temp__5720__auto__;
return cljs.core.with_meta.call(null,entry,cljs.core.merge.call(null,start_position,rewrite_clj.reader.position.call(null,reader,new cljs.core.Keyword(null,"end-row","end-row",-545103581),new cljs.core.Keyword(null,"end-col","end-col",-724155879))));
} else {
return null;
}
});
/**
 * Call the given function on the given reader until it returns
 * a non-truthy value.
 */
rewrite_clj.reader.read_repeatedly = (function rewrite_clj$reader$read_repeatedly(reader,read_fn){
return cljs.core.doall.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,(function (){
return read_fn.call(null,reader);
}))));
});
/**
 * Call the given function on the given reader until `n` values matching `p?` have been
 * collected.
 */
rewrite_clj.reader.read_n = (function rewrite_clj$reader$read_n(reader,node_tag,read_fn,p_QMARK_,n){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var c = (0);
var vs = cljs.core.PersistentVector.EMPTY;
while(true){
if((c < n)){
var temp__5718__auto__ = read_fn.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var G__43674 = (cljs.core.truth_(p_QMARK_.call(null,v))?(c + (1)):c);
var G__43675 = cljs.core.conj.call(null,vs,v);
c = G__43674;
vs = G__43675;
continue;
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"%s node expects %d value%s.",node_tag,n,((cljs.core._EQ_.call(null,n,(1)))?"":"s"));
}
} else {
return vs;
}
break;
}
});
/**
 * This customized version of clojure.tools.reader.edn's read-keyword allows for
 *   an embedded `::` in a keyword to to support [garden-style keywords](https://github.com/noprompt/garden)
 *   like `:&::before`. This function was transcribed from clj-kondo.
 */
rewrite_clj.reader.read_keyword = (function rewrite_clj$reader$read_keyword(reader){
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if((!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)))){
var token = new cljs.core.Var(function(){return cljs.tools.reader.edn.read_token;},new cljs.core.Symbol("cljs.tools.reader.edn","read-token","cljs.tools.reader.edn/read-token",-1809266548,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-token","read-token",392624627,null),"/home/runner/.gitlibs/libs/org.clojure/tools.reader/efdbaf23247e5f7fa189f7b8691411569e7fbf8c/src/main/cljs/cljs/tools/reader/edn.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),4,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),4,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_token)?cljs.tools.reader.edn.read_token.cljs$lang$test:null)])).call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),ch);
var s = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(cljs.core.truth_((function (){var and__20748__auto__ = s;
if(cljs.core.truth_(and__20748__auto__)){
return (!((token.indexOf("::") === (0))));
} else {
return and__20748__auto__;
}
})())){
var ns = s.call(null,(0));
var name = s.call(null,(1));
if((":" === cljs.core.nth.call(null,token,(0)))){
return cljs.tools.reader.impl.errors.throw_invalid.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),token);
} else {
return cljs.core.keyword.call(null,ns,name);
}
} else {
return cljs.tools.reader.impl.errors.throw_invalid.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),token);
}
} else {
return cljs.tools.reader.impl.errors.throw_single_colon.call(null,reader);
}
});
/**
 * Create reader for strings.
 */
rewrite_clj.reader.string_reader = (function rewrite_clj$reader$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
});
