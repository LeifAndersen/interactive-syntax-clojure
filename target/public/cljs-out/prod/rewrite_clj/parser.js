// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.parser');
goog.require('cljs.core');
goog.require('rewrite_clj.node.forms');
goog.require('rewrite_clj.parser.core');
goog.require('rewrite_clj.reader');
/**
 * Parse next form from the given reader.
 */
rewrite_clj.parser.parse = (function rewrite_clj$parser$parse(reader){
return rewrite_clj.parser.core.parse_next.call(null,reader);
});
/**
 * Parse all forms from the given reader.
 */
rewrite_clj.parser.parse_all = (function rewrite_clj$parser$parse_all(reader){
var nodes = cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,(function (){
return rewrite_clj.parser.parse.call(null,reader);
})));
var position_meta = cljs.core.merge.call(null,cljs.core.meta.call(null,cljs.core.first.call(null,nodes)),cljs.core.select_keys.call(null,cljs.core.meta.call(null,cljs.core.last.call(null,nodes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-row","end-row",-545103581),new cljs.core.Keyword(null,"end-col","end-col",-724155879)], null)));
return cljs.core.with_meta.call(null,rewrite_clj.node.forms.forms_node.call(null,nodes),position_meta);
});
/**
 * Return a node for first source code element in string `s`.
 */
rewrite_clj.parser.parse_string = (function rewrite_clj$parser$parse_string(s){
return rewrite_clj.parser.parse.call(null,rewrite_clj.reader.string_reader.call(null,s));
});
/**
 * Return forms node for all source code elements in string `s`.
 */
rewrite_clj.parser.parse_string_all = (function rewrite_clj$parser$parse_string_all(s){
return rewrite_clj.parser.parse_all.call(null,rewrite_clj.reader.string_reader.call(null,s));
});
