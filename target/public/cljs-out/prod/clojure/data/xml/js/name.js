// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('clojure.data.xml.js.name');
goog.require('cljs.core');
goog.require('clojure.data.xml.protocols');
goog.require('clojure.string');
clojure.data.xml.js.name.parse_qname = cljs.core.memoize.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/(?:\{([^}]+)\})?([^{]*)/));
clojure.data.xml.js.name.decode_uri = (function clojure$data$xml$js$name$decode_uri(ns){
return decodeURIComponent(ns);
});
clojure.data.xml.js.name.encode_uri = (function clojure$data$xml$js$name$encode_uri(uri){
return encodeURIComponent(uri);
});
(clojure.data.xml.protocols.AsQName["string"] = true);

(clojure.data.xml.protocols.qname_local["string"] = (function (s){
var vec__47419 = clojure.data.xml.js.name.parse_qname.call(null,s);
var _ = cljs.core.nth.call(null,vec__47419,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__47419,(1),null);
var local = cljs.core.nth.call(null,vec__47419,(2),null);
return local;
}));

(clojure.data.xml.protocols.qname_uri["string"] = (function (s){
var vec__47422 = clojure.data.xml.js.name.parse_qname.call(null,s);
var _ = cljs.core.nth.call(null,vec__47422,(0),null);
var uri = cljs.core.nth.call(null,vec__47422,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__47422,(2),null);
return uri;
}));
