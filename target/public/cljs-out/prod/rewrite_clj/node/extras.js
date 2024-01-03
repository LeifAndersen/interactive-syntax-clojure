// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.node.extras');
goog.require('cljs.core');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.whitespace');
/**
 * Check whether the given node represents whitespace or comment.
 */
rewrite_clj.node.extras.whitespace_or_comment_QMARK_ = (function rewrite_clj$node$extras$whitespace_or_comment_QMARK_(node){
return ((rewrite_clj.node.whitespace.whitespace_QMARK_.call(null,node)) || (rewrite_clj.node.comment.comment_QMARK_.call(null,node)));
});
