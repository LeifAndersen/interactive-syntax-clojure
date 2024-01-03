// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.parser.core');
goog.require('cljs.core');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.fn');
goog.require('rewrite_clj.node.meta');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.quote');
goog.require('rewrite_clj.node.reader_macro');
goog.require('rewrite_clj.node.regex');
goog.require('rewrite_clj.node.seq');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.uneval');
goog.require('rewrite_clj.parser.keyword');
goog.require('rewrite_clj.parser.namespaced_map');
goog.require('rewrite_clj.parser.string');
goog.require('rewrite_clj.parser.token');
goog.require('rewrite_clj.parser.whitespace');
goog.require('rewrite_clj.reader');
rewrite_clj.parser.core._STAR_delimiter_STAR_ = null;
rewrite_clj.parser.core.dispatch = (function rewrite_clj$parser$core$dispatch(c){
if((c == null)){
return new cljs.core.Keyword(null,"eof","eof",-489063237);
} else {
if(cljs.core.truth_(rewrite_clj.reader.whitespace_QMARK_.call(null,c))){
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
} else {
if(cljs.core._EQ_.call(null,c,rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000);
} else {
return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays(["@","`","\"","#","'","(",")",":",";","[","{","]","}","^","~"],[new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"sharp","sharp",-83698408),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"unquote","unquote",1649741032)]),c,new cljs.core.Keyword(null,"token","token",-1211463215));

}
}
}
});
if((typeof rewrite_clj !== 'undefined') && (typeof rewrite_clj.parser !== 'undefined') && (typeof rewrite_clj.parser.core !== 'undefined') && (typeof rewrite_clj.parser.core.parse_next_STAR_ !== 'undefined')){
} else {
rewrite_clj.parser.core.parse_next_STAR_ = (function (){var method_table__21851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21854__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21855__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rewrite-clj.parser.core","parse-next*"),cljs.core.comp.call(null,new cljs.core.Var(function(){return rewrite_clj.parser.core.dispatch;},new cljs.core.Symbol("rewrite-clj.parser.core","dispatch","rewrite-clj.parser.core/dispatch",-1962626312,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"rewrite-clj.parser.core","rewrite-clj.parser.core",1408837387,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),"target/public/cljs-out/prod/rewrite_clj/parser/core.cljc",16,1,28,28,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null)], null)),null,(cljs.core.truth_(rewrite_clj.parser.core.dispatch)?rewrite_clj.parser.core.dispatch.cljs$lang$test:null)])),rewrite_clj.reader.peek),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21855__auto__,method_table__21851__auto__,prefer_table__21852__auto__,method_cache__21853__auto__,cached_hierarchy__21854__auto__));
})();
}
rewrite_clj.parser.core.parse_next = (function rewrite_clj$parser$core$parse_next(reader){
return rewrite_clj.reader.read_with_meta.call(null,reader,rewrite_clj.parser.core.parse_next_STAR_);
});
rewrite_clj.parser.core.parse_delim = (function rewrite_clj$parser$core$parse_delim(reader,delimiter){
rewrite_clj.reader.ignore.call(null,reader);

return rewrite_clj.reader.read_repeatedly.call(null,reader,(function (p1__44616_SHARP_){
var _STAR_delimiter_STAR__orig_val__44617 = rewrite_clj.parser.core._STAR_delimiter_STAR_;
var _STAR_delimiter_STAR__temp_val__44618 = delimiter;
(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__temp_val__44618);

try{return rewrite_clj.parser.core.parse_next.call(null,p1__44616_SHARP_);
}finally {(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__orig_val__44617);
}}));
});
rewrite_clj.parser.core.parse_printables = (function rewrite_clj$parser$core$parse_printables(var_args){
var args__22092__auto__ = [];
var len__22082__auto___44627 = arguments.length;
var i__22083__auto___44628 = (0);
while(true){
if((i__22083__auto___44628 < len__22082__auto___44627)){
args__22092__auto__.push((arguments[i__22083__auto___44628]));

var G__44629 = (i__22083__auto___44628 + (1));
i__22083__auto___44628 = G__44629;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((3) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((3)),(0),null)):null);
return rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22093__auto__);
});

(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic = (function (reader,node_tag,n,p__44623){
var vec__44624 = p__44623;
var ignore_QMARK_ = cljs.core.nth.call(null,vec__44624,(0),null);
if(cljs.core.truth_(ignore_QMARK_)){
rewrite_clj.reader.ignore.call(null,reader);
} else {
}

return rewrite_clj.reader.read_n.call(null,reader,node_tag,rewrite_clj.parser.core.parse_next,cljs.core.complement.call(null,rewrite_clj.node.protocols.printable_only_QMARK_),n);
}));

(rewrite_clj.parser.core.parse_printables.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.parser.core.parse_printables.cljs$lang$applyTo = (function (seq44619){
var G__44620 = cljs.core.first.call(null,seq44619);
var seq44619__$1 = cljs.core.next.call(null,seq44619);
var G__44621 = cljs.core.first.call(null,seq44619__$1);
var seq44619__$2 = cljs.core.next.call(null,seq44619__$1);
var G__44622 = cljs.core.first.call(null,seq44619__$2);
var seq44619__$3 = cljs.core.next.call(null,seq44619__$2);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44620,G__44621,G__44622,seq44619__$3);
}));

cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"token","token",-1211463215),(function (reader){
return rewrite_clj.parser.token.parse_token.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),(function (reader){
return rewrite_clj.reader.ignore.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),(function (reader){
return rewrite_clj.reader.throw_reader.call(null,reader,"Unmatched delimiter: %s",rewrite_clj.reader.peek.call(null,reader));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"eof","eof",-489063237),(function (reader){
if(cljs.core.truth_(rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF.");
} else {
return null;
}
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(function (reader){
return rewrite_clj.parser.whitespace.parse_whitespace.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"comment","comment",532206069),(function (reader){
rewrite_clj.reader.ignore.call(null,reader);

return rewrite_clj.node.comment.comment_node.call(null,";",rewrite_clj.reader.read_include_linebreak.call(null,reader));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (reader){
return rewrite_clj.parser.keyword.parse_keyword.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"string","string",-1989541586),(function (reader){
return rewrite_clj.parser.string.parse_string.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (reader){
rewrite_clj.reader.ignore.call(null,reader);

return rewrite_clj.node.meta.meta_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2)));
}));
rewrite_clj.parser.core.read_symbolic_value = (function rewrite_clj$parser$core$read_symbolic_value(reader){
rewrite_clj.reader.unread.call(null,reader,"#");

return rewrite_clj.parser.token.parse_token.call(null,reader);
});
rewrite_clj.parser.core.parse_shebang_comment = (function rewrite_clj$parser$core$parse_shebang_comment(reader){
rewrite_clj.reader.ignore.call(null,reader);

return rewrite_clj.node.comment.comment_node.call(null,"#!",rewrite_clj.reader.read_include_linebreak.call(null,reader));
});
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"sharp","sharp",-83698408),(function (reader){
rewrite_clj.reader.ignore.call(null,reader);

var G__44630 = rewrite_clj.reader.peek.call(null,reader);
if(cljs.core._EQ_.call(null,null,G__44630)){
return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.call(null,"!",G__44630)){
return rewrite_clj.parser.core.parse_shebang_comment.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,"\"",G__44630)){
return rewrite_clj.node.regex.regex_node.call(null,rewrite_clj.parser.string.parse_regex.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,"#",G__44630)){
return rewrite_clj.parser.core.read_symbolic_value.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,"'",G__44630)){
return rewrite_clj.node.reader_macro.var_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"var","var",-769682797),(1),true));
} else {
if(cljs.core._EQ_.call(null,"(",G__44630)){
return rewrite_clj.node.fn.fn_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,")"));
} else {
if(cljs.core._EQ_.call(null,":",G__44630)){
return rewrite_clj.parser.namespaced_map.parse_namespaced_map.call(null,reader,rewrite_clj.parser.core.parse_next);
} else {
if(cljs.core._EQ_.call(null,"{",G__44630)){
return rewrite_clj.node.seq.set_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,"}"));
} else {
if(cljs.core._EQ_.call(null,"=",G__44630)){
return rewrite_clj.node.reader_macro.eval_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"eval","eval",-1103567905),(1),true));
} else {
if(cljs.core._EQ_.call(null,"^",G__44630)){
return rewrite_clj.node.meta.raw_meta_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2),true));
} else {
if(cljs.core._EQ_.call(null,"?",G__44630)){
rewrite_clj.reader.next.call(null,reader);

return rewrite_clj.node.reader_macro.reader_macro_node.call(null,(function (){var read1 = (function (){
return rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),(1));
});
return cljs.core.cons.call(null,(function (){var G__44631 = rewrite_clj.reader.peek.call(null,reader);
switch (G__44631) {
case "(":
return rewrite_clj.node.token.token_node.call(null,cljs.core.symbol.call(null,"?"));

break;
case "@":
rewrite_clj.reader.next.call(null,reader);

return rewrite_clj.node.token.token_node.call(null,cljs.core.symbol.call(null,"?@"));

break;
default:
rewrite_clj.reader.unread.call(null,reader,"?");

return cljs.core.first.call(null,read1.call(null));

}
})(),read1.call(null));
})());
} else {
if(cljs.core._EQ_.call(null,"_",G__44630)){
return rewrite_clj.node.uneval.uneval_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"uneval","uneval",1932037707),(1),true));
} else {
return rewrite_clj.node.reader_macro.reader_macro_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),(2)));

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
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"deref","deref",-145586795),(function (reader){
return rewrite_clj.node.reader_macro.deref_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"deref","deref",-145586795),(1),true));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (reader){
return rewrite_clj.node.quote.quote_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"quote","quote",-262615245),(1),true));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),(function (reader){
return rewrite_clj.node.quote.syntax_quote_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),(1),true));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(function (reader){
rewrite_clj.reader.ignore.call(null,reader);

var c = rewrite_clj.reader.peek.call(null,reader);
if(cljs.core._EQ_.call(null,c,"@")){
return rewrite_clj.node.quote.unquote_splicing_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1),true));
} else {
return rewrite_clj.node.quote.unquote_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1)));
}
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (reader){
return rewrite_clj.node.seq.list_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,")"));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (reader){
return rewrite_clj.node.seq.vector_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,"]"));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (reader){
return rewrite_clj.node.seq.map_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,"}"));
}));
