// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('reagent.impl.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
reagent.impl.protocols.Compiler = function(){};

var reagent$impl$protocols$Compiler$get_id$dyn_27136 = (function (this$){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (reagent.impl.protocols.get_id[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$);
} else {
var m__21501__auto__ = (reagent.impl.protocols.get_id["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.get-id",this$);
}
}
});
reagent.impl.protocols.get_id = (function reagent$impl$protocols$get_id(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$get_id$arity$1 == null)))))){
return this$.reagent$impl$protocols$Compiler$get_id$arity$1(this$);
} else {
return reagent$impl$protocols$Compiler$get_id$dyn_27136.call(null,this$);
}
});

var reagent$impl$protocols$Compiler$parse_tag$dyn_27137 = (function (this$,tag_name,tag_value){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (reagent.impl.protocols.parse_tag[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$,tag_name,tag_value);
} else {
var m__21501__auto__ = (reagent.impl.protocols.parse_tag["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$,tag_name,tag_value);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.parse-tag",this$);
}
}
});
reagent.impl.protocols.parse_tag = (function reagent$impl$protocols$parse_tag(this$,tag_name,tag_value){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$parse_tag$arity$3 == null)))))){
return this$.reagent$impl$protocols$Compiler$parse_tag$arity$3(this$,tag_name,tag_value);
} else {
return reagent$impl$protocols$Compiler$parse_tag$dyn_27137.call(null,this$,tag_name,tag_value);
}
});

var reagent$impl$protocols$Compiler$as_element$dyn_27138 = (function (this$,x){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (reagent.impl.protocols.as_element[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$,x);
} else {
var m__21501__auto__ = (reagent.impl.protocols.as_element["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.as-element",this$);
}
}
});
reagent.impl.protocols.as_element = (function reagent$impl$protocols$as_element(this$,x){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$as_element$arity$2 == null)))))){
return this$.reagent$impl$protocols$Compiler$as_element$arity$2(this$,x);
} else {
return reagent$impl$protocols$Compiler$as_element$dyn_27138.call(null,this$,x);
}
});

var reagent$impl$protocols$Compiler$make_element$dyn_27139 = (function (this$,argv,component,jsprops,first_child){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (reagent.impl.protocols.make_element[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
var m__21501__auto__ = (reagent.impl.protocols.make_element["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.make-element",this$);
}
}
});
reagent.impl.protocols.make_element = (function reagent$impl$protocols$make_element(this$,argv,component,jsprops,first_child){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$make_element$arity$5 == null)))))){
return this$.reagent$impl$protocols$Compiler$make_element$arity$5(this$,argv,component,jsprops,first_child);
} else {
return reagent$impl$protocols$Compiler$make_element$dyn_27139.call(null,this$,argv,component,jsprops,first_child);
}
});

