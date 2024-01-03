// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('clojure.reflect');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
clojure.reflect.evaluate_javascript = (function clojure$reflect$evaluate_javascript(block){
var result = (function (){try{return eval(block);
}catch (e48099){var e = e48099;
return console.log(e);
}})();
return result;
});
/**
 * Issues a GET to /reflect with a single query-parameter string.
 *   Calls cb with the result.
 */
clojure.reflect.query_reflection = (function clojure$reflect$query_reflection(query_param,cb){
var conn = clojure.browser.net.xhr_connection.call(null);
var url = ["/reflect?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_param)].join('');
clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"success","success",1890645906),(function (e){
var resp = e.currentTarget.getResponseText(cljs.core.List.EMPTY);
return cb.call(null,resp);
}));

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),(function (){
return cljs.core.println.call(null,"Reflection query failed.");
}));

return clojure.browser.net.transmit.call(null,conn,url);
});
/**
 * Queries the reflection api with a fully qualified symbol, then calls
 *   callback fn cb with the evaluated cljs map containing that symbol's
 *   meta information.
 */
clojure.reflect.meta = (function clojure$reflect$meta(sym,cb){
return clojure.reflect.query_reflection.call(null,["var=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)))].join(''),(function (p1__48100_SHARP_){
return cb.call(null,clojure.reflect.evaluate_javascript.call(null,p1__48100_SHARP_));
}));
});
/**
 * Queries the reflection api with a quoted macro form, then calls the
 *   callback function with the macroexpanded form, as a string.
 */
clojure.reflect.macroexpand = (function clojure$reflect$macroexpand(form){
return clojure.reflect.query_reflection.call(null,["macroform=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)))].join(''),cljs.core.println);
});
clojure.reflect.print_doc = (function clojure$reflect$print_doc(p__48101){
var map__48102 = p__48101;
var map__48102__$1 = cljs.core.__destructure_map.call(null,map__48102);
var name = cljs.core.get.call(null,map__48102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var method_params = cljs.core.get.call(null,map__48102__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var doc = cljs.core.get.call(null,map__48102__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
if(cljs.core.empty_QMARK_.call(null,name)){
return null;
} else {
cljs.core.println.call(null,name);

cljs.core.println.call(null,method_params);

return cljs.core.println.call(null,doc);
}
});
/**
 * Queries the reflection api with a fully qualified symbol, then prints
 *   documentation information at the repl.
 */
clojure.reflect.doc = (function clojure$reflect$doc(sym){
return clojure.reflect.meta.call(null,sym,clojure.reflect.print_doc);
});
