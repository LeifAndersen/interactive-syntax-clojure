// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.parser.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.reader');
goog.require('goog.string.StringBuffer');
/**
 * Flush buffer and add string to the given vector.
 */
rewrite_clj.parser.string.flush_into = (function rewrite_clj$parser$string$flush_into(lines,buf){
var s = buf.toString();
buf.clear();

return cljs.core.conj.call(null,lines,s);
});
rewrite_clj.parser.string.read_string_data = (function rewrite_clj$parser$string$read_string_data(reader){
rewrite_clj.reader.ignore.call(null,reader);

var buf = (new goog.string.StringBuffer());
var escape_QMARK_ = false;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = rewrite_clj.reader.next.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if(((cljs.core.not.call(null,escape_QMARK_)) && ((c === "\"")))){
return rewrite_clj.parser.string.flush_into.call(null,lines,buf);
} else {
if((c === "\n")){
var G__44496 = escape_QMARK_;
var G__44497 = rewrite_clj.parser.string.flush_into.call(null,lines,buf);
escape_QMARK_ = G__44496;
lines = G__44497;
continue;
} else {
buf.append(c);

var G__44498 = ((cljs.core.not.call(null,escape_QMARK_)) && ((c === "\\")));
var G__44499 = lines;
escape_QMARK_ = G__44498;
lines = G__44499;
continue;

}
}
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF while reading string.");
}
break;
}
});
rewrite_clj.parser.string.parse_string = (function rewrite_clj$parser$string$parse_string(reader){
return rewrite_clj.node.stringz.string_node.call(null,rewrite_clj.parser.string.read_string_data.call(null,reader));
});
rewrite_clj.parser.string.parse_regex = (function rewrite_clj$parser$string$parse_regex(reader){
var h = rewrite_clj.parser.string.read_string_data.call(null,reader);
return clojure.string.join.call(null,"\n",h);
});
