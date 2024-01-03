// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.parser.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.reader');
/**
 * Parse as much whitespace as possible. The created node can either contain
 * only linebreaks or only space/tabs.
 */
rewrite_clj.parser.whitespace.parse_whitespace = (function rewrite_clj$parser$whitespace$parse_whitespace(reader){
var c = rewrite_clj.reader.peek.call(null,reader);
if(rewrite_clj.reader.linebreak_QMARK_.call(null,c)){
return rewrite_clj.node.whitespace.newline_node.call(null,rewrite_clj.reader.read_while.call(null,reader,rewrite_clj.reader.linebreak_QMARK_));
} else {
if(rewrite_clj.reader.comma_QMARK_.call(null,c)){
return rewrite_clj.node.whitespace.comma_node.call(null,rewrite_clj.reader.read_while.call(null,reader,rewrite_clj.reader.comma_QMARK_));
} else {
return rewrite_clj.node.whitespace.whitespace_node.call(null,rewrite_clj.reader.read_while.call(null,reader,rewrite_clj.reader.space_QMARK_));

}
}
});
