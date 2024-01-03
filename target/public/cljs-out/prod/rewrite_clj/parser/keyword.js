// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.parser.keyword');
goog.require('cljs.core');
goog.require('rewrite_clj.node.keyword');
goog.require('rewrite_clj.reader');
rewrite_clj.parser.keyword.parse_keyword = (function rewrite_clj$parser$keyword$parse_keyword(reader){
rewrite_clj.reader.ignore.call(null,reader);

var temp__5718__auto__ = rewrite_clj.reader.peek.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if(cljs.core._EQ_.call(null,c,":")){
rewrite_clj.reader.next.call(null,reader);

return rewrite_clj.node.keyword.keyword_node.call(null,rewrite_clj.reader.read_keyword.call(null,reader),true);
} else {
return rewrite_clj.node.keyword.keyword_node.call(null,rewrite_clj.reader.read_keyword.call(null,reader));
}
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"unexpected EOF while reading keyword.");
}
});
