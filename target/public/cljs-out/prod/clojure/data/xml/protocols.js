// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('clojure.data.xml.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.data.xml.protocols.AsQName = function(){};

var clojure$data$xml$protocols$AsQName$qname_local$dyn_47411 = (function (qname){
var x__21502__auto__ = (((qname == null))?null:qname);
var m__21503__auto__ = (clojure.data.xml.protocols.qname_local[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,qname);
} else {
var m__21501__auto__ = (clojure.data.xml.protocols.qname_local["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,qname);
} else {
throw cljs.core.missing_protocol.call(null,"AsQName.qname-local",qname);
}
}
});
/**
 * Get the name for this qname
 */
clojure.data.xml.protocols.qname_local = (function clojure$data$xml$protocols$qname_local(qname){
if((((!((qname == null)))) && ((!((qname.clojure$data$xml$protocols$AsQName$qname_local$arity$1 == null)))))){
return qname.clojure$data$xml$protocols$AsQName$qname_local$arity$1(qname);
} else {
return clojure$data$xml$protocols$AsQName$qname_local$dyn_47411.call(null,qname);
}
});

var clojure$data$xml$protocols$AsQName$qname_uri$dyn_47412 = (function (qname){
var x__21502__auto__ = (((qname == null))?null:qname);
var m__21503__auto__ = (clojure.data.xml.protocols.qname_uri[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,qname);
} else {
var m__21501__auto__ = (clojure.data.xml.protocols.qname_uri["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,qname);
} else {
throw cljs.core.missing_protocol.call(null,"AsQName.qname-uri",qname);
}
}
});
/**
 * Get the namespace uri for this qname
 */
clojure.data.xml.protocols.qname_uri = (function clojure$data$xml$protocols$qname_uri(qname){
if((((!((qname == null)))) && ((!((qname.clojure$data$xml$protocols$AsQName$qname_uri$arity$1 == null)))))){
return qname.clojure$data$xml$protocols$AsQName$qname_uri$arity$1(qname);
} else {
return clojure$data$xml$protocols$AsQName$qname_uri$dyn_47412.call(null,qname);
}
});


/**
 * Protocol for generating new events based on element type
 * @interface
 */
clojure.data.xml.protocols.EventGeneration = function(){};

var clojure$data$xml$protocols$EventGeneration$gen_event$dyn_47413 = (function (item){
var x__21502__auto__ = (((item == null))?null:item);
var m__21503__auto__ = (clojure.data.xml.protocols.gen_event[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,item);
} else {
var m__21501__auto__ = (clojure.data.xml.protocols.gen_event["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,item);
} else {
throw cljs.core.missing_protocol.call(null,"EventGeneration.gen-event",item);
}
}
});
/**
 * Function to generate an event for e.
 */
clojure.data.xml.protocols.gen_event = (function clojure$data$xml$protocols$gen_event(item){
if((((!((item == null)))) && ((!((item.clojure$data$xml$protocols$EventGeneration$gen_event$arity$1 == null)))))){
return item.clojure$data$xml$protocols$EventGeneration$gen_event$arity$1(item);
} else {
return clojure$data$xml$protocols$EventGeneration$gen_event$dyn_47413.call(null,item);
}
});

var clojure$data$xml$protocols$EventGeneration$next_events$dyn_47414 = (function (item,next_items){
var x__21502__auto__ = (((item == null))?null:item);
var m__21503__auto__ = (clojure.data.xml.protocols.next_events[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,item,next_items);
} else {
var m__21501__auto__ = (clojure.data.xml.protocols.next_events["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,item,next_items);
} else {
throw cljs.core.missing_protocol.call(null,"EventGeneration.next-events",item);
}
}
});
/**
 * Returns the next set of events that should occur after e.  next-events are the
 *   events that should be generated after this one is complete.
 */
clojure.data.xml.protocols.next_events = (function clojure$data$xml$protocols$next_events(item,next_items){
if((((!((item == null)))) && ((!((item.clojure$data$xml$protocols$EventGeneration$next_events$arity$2 == null)))))){
return item.clojure$data$xml$protocols$EventGeneration$next_events$arity$2(item,next_items);
} else {
return clojure$data$xml$protocols$EventGeneration$next_events$dyn_47414.call(null,item,next_items);
}
});


/**
 * @interface
 */
clojure.data.xml.protocols.AsElements = function(){};

var clojure$data$xml$protocols$AsElements$as_elements$dyn_47415 = (function (expr){
var x__21502__auto__ = (((expr == null))?null:expr);
var m__21503__auto__ = (clojure.data.xml.protocols.as_elements[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,expr);
} else {
var m__21501__auto__ = (clojure.data.xml.protocols.as_elements["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,expr);
} else {
throw cljs.core.missing_protocol.call(null,"AsElements.as-elements",expr);
}
}
});
/**
 * Return a seq of elements represented by an expression.
 */
clojure.data.xml.protocols.as_elements = (function clojure$data$xml$protocols$as_elements(expr){
if((((!((expr == null)))) && ((!((expr.clojure$data$xml$protocols$AsElements$as_elements$arity$1 == null)))))){
return expr.clojure$data$xml$protocols$AsElements$as_elements$arity$1(expr);
} else {
return clojure$data$xml$protocols$AsElements$as_elements$dyn_47415.call(null,expr);
}
});


/**
 * @interface
 */
clojure.data.xml.protocols.AsXmlString = function(){};

var clojure$data$xml$protocols$AsXmlString$xml_str$dyn_47416 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (clojure.data.xml.protocols.xml_str[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (clojure.data.xml.protocols.xml_str["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"AsXmlString.xml-str",node);
}
}
});
/**
 * Serialize atribute value or content node
 */
clojure.data.xml.protocols.xml_str = (function clojure$data$xml$protocols$xml_str(node){
if((((!((node == null)))) && ((!((node.clojure$data$xml$protocols$AsXmlString$xml_str$arity$1 == null)))))){
return node.clojure$data$xml$protocols$AsXmlString$xml_str$arity$1(node);
} else {
return clojure$data$xml$protocols$AsXmlString$xml_str$dyn_47416.call(null,node);
}
});

