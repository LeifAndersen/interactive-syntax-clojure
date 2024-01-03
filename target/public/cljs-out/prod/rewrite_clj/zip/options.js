// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.zip.options');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.zip.options.default_zipper_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track-position?","track-position?",1860535489),false,new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983),rewrite_clj.node.protocols.default_auto_resolve], null);
rewrite_clj.zip.options.get_opts = (function rewrite_clj$zip$options$get_opts(zloc){
return new cljs.core.Keyword("rewrite-clj.zip","opts","rewrite-clj.zip/opts",-1382883702).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,zloc));
});
rewrite_clj.zip.options.set_opts = (function rewrite_clj$zip$options$set_opts(zloc,opts){
return cljs.core.vary_meta.call(null,zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-clj.zip","opts","rewrite-clj.zip/opts",-1382883702),cljs.core.merge.call(null,rewrite_clj.zip.options.default_zipper_opts,opts));
});
