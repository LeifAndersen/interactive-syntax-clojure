// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('rewrite_clj.node.protocols');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('rewrite_clj.interop');

/**
 * Protocol for EDN/Clojure/ClojureScript nodes.
 * @interface
 */
rewrite_clj.node.protocols.Node = function(){};

var rewrite_clj$node$protocols$Node$tag$dyn_31679 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.tag[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.tag["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"Node.tag",node);
}
}
});
/**
 * Returns keyword representing type of `node`.
 */
rewrite_clj.node.protocols.tag = (function rewrite_clj$node$protocols$tag(node){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$Node$tag$arity$1 == null)))))){
return node.rewrite_clj$node$protocols$Node$tag$arity$1(node);
} else {
return rewrite_clj$node$protocols$Node$tag$dyn_31679.call(null,node);
}
});

var rewrite_clj$node$protocols$Node$node_type$dyn_31680 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.node_type[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.node_type["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"Node.node-type",node);
}
}
});
/**
 * Returns keyword representing the node type for `node`.
 *   Currently internal and used to support testing.
 */
rewrite_clj.node.protocols.node_type = (function rewrite_clj$node$protocols$node_type(node){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$Node$node_type$arity$1 == null)))))){
return node.rewrite_clj$node$protocols$Node$node_type$arity$1(node);
} else {
return rewrite_clj$node$protocols$Node$node_type$dyn_31680.call(null,node);
}
});

var rewrite_clj$node$protocols$Node$printable_only_QMARK_$dyn_31681 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"Node.printable-only?",node);
}
}
});
/**
 * Return true if `node` cannot be converted to an s-expression element.
 */
rewrite_clj.node.protocols.printable_only_QMARK_ = (function rewrite_clj$node$protocols$printable_only_QMARK_(node){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 == null)))))){
return node.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1(node);
} else {
return rewrite_clj$node$protocols$Node$printable_only_QMARK_$dyn_31681.call(null,node);
}
});

var rewrite_clj$node$protocols$Node$sexpr_STAR_$dyn_31682 = (function (node,opts){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.sexpr_STAR_[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node,opts);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.sexpr_STAR_["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node,opts);
} else {
throw cljs.core.missing_protocol.call(null,"Node.sexpr*",node);
}
}
});
/**
 * Return `node` converted to form applying `opts`. Internal, use `sexpr` instead.
 */
rewrite_clj.node.protocols.sexpr_STAR_ = (function rewrite_clj$node$protocols$sexpr_STAR_(node,opts){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 == null)))))){
return node.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2(node,opts);
} else {
return rewrite_clj$node$protocols$Node$sexpr_STAR_$dyn_31682.call(null,node,opts);
}
});

var rewrite_clj$node$protocols$Node$length$dyn_31683 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.length[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.length["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"Node.length",node);
}
}
});
/**
 * Return number of characters for the string version of `node`.
 */
rewrite_clj.node.protocols.length = (function rewrite_clj$node$protocols$length(node){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$Node$length$arity$1 == null)))))){
return node.rewrite_clj$node$protocols$Node$length$arity$1(node);
} else {
return rewrite_clj$node$protocols$Node$length$dyn_31683.call(null,node);
}
});

var rewrite_clj$node$protocols$Node$string$dyn_31684 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.string[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.string["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"Node.string",node);
}
}
});
/**
 * Return the string version of `node`.
 */
rewrite_clj.node.protocols.string = (function rewrite_clj$node$protocols$string(node){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$Node$string$arity$1 == null)))))){
return node.rewrite_clj$node$protocols$Node$string$arity$1(node);
} else {
return rewrite_clj$node$protocols$Node$string$dyn_31684.call(null,node);
}
});

(rewrite_clj.node.protocols.Node["_"] = true);

(rewrite_clj.node.protocols.tag["_"] = (function (_this){
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}));

(rewrite_clj.node.protocols.node_type["_"] = (function (_this){
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}));

(rewrite_clj.node.protocols.printable_only_QMARK_["_"] = (function (_this){
return false;
}));

(rewrite_clj.node.protocols.sexpr_STAR_["_"] = (function (this$,_opts){
return this$;
}));

(rewrite_clj.node.protocols.length["_"] = (function (this$){
return cljs.core.count.call(null,rewrite_clj.node.protocols.string.call(null,this$));
}));

(rewrite_clj.node.protocols.string["_"] = (function (this$){
return cljs.core.pr_str.call(null,this$);
}));
/**
 * Return true if [[sexpr]] is supported for `node`'s element type.
 * 
 * See [related docs in user guide](/doc/01-user-guide.adoc#not-all-clojure-is-sexpr-able)
 */
rewrite_clj.node.protocols.sexpr_able_QMARK_ = (function rewrite_clj$node$protocols$sexpr_able_QMARK_(node){
return cljs.core.not.call(null,rewrite_clj.node.protocols.printable_only_QMARK_.call(null,node));
});
/**
 * Return `node` converted to form.
 * 
 *   Optional `opts` can specify:
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.node.protocols.sexpr = (function rewrite_clj$node$protocols$sexpr(var_args){
var G__31686 = arguments.length;
switch (G__31686) {
case 1:
return rewrite_clj.node.protocols.sexpr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.protocols.sexpr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.protocols.sexpr.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.node.protocols.sexpr.call(null,node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.node.protocols.sexpr.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.node.protocols.sexpr_STAR_.call(null,node,opts);
}));

(rewrite_clj.node.protocols.sexpr.cljs$lang$maxFixedArity = 2);

/**
 * Return forms for `nodes`. Nodes that do not represent s-expression are skipped.
 * 
 *   Optional `opts` can specify:
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.node.protocols.sexprs = (function rewrite_clj$node$protocols$sexprs(var_args){
var G__31690 = arguments.length;
switch (G__31690) {
case 1:
return rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return rewrite_clj.node.protocols.sexprs.call(null,nodes,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$2 = (function (nodes,opts){
return cljs.core.map.call(null,(function (p1__31688_SHARP_){
return rewrite_clj.node.protocols.sexpr.call(null,p1__31688_SHARP_,opts);
}),cljs.core.remove.call(null,rewrite_clj.node.protocols.printable_only_QMARK_,nodes));
}));

(rewrite_clj.node.protocols.sexprs.cljs$lang$maxFixedArity = 2);

/**
 * Return total string length for `nodes`.
 */
rewrite_clj.node.protocols.sum_lengths = (function rewrite_clj$node$protocols$sum_lengths(nodes){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,rewrite_clj.node.protocols.length,nodes));
});
/**
 * Return string version of `nodes`.
 */
rewrite_clj.node.protocols.concat_strings = (function rewrite_clj$node$protocols$concat_strings(nodes){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,rewrite_clj.node.protocols.string,nodes));
});

/**
 * Protocol for non-leaf EDN/Clojure/ClojureScript nodes.
 * @interface
 */
rewrite_clj.node.protocols.InnerNode = function(){};

var rewrite_clj$node$protocols$InnerNode$inner_QMARK_$dyn_31692 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.inner_QMARK_[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.inner_QMARK_["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"InnerNode.inner?",node);
}
}
});
/**
 * Returns true if `node` can have children.
 */
rewrite_clj.node.protocols.inner_QMARK_ = (function rewrite_clj$node$protocols$inner_QMARK_(node){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 == null)))))){
return node.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1(node);
} else {
return rewrite_clj$node$protocols$InnerNode$inner_QMARK_$dyn_31692.call(null,node);
}
});

var rewrite_clj$node$protocols$InnerNode$children$dyn_31693 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.children[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.children["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"InnerNode.children",node);
}
}
});
/**
 * Returns child nodes for `node`.
 */
rewrite_clj.node.protocols.children = (function rewrite_clj$node$protocols$children(node){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$InnerNode$children$arity$1 == null)))))){
return node.rewrite_clj$node$protocols$InnerNode$children$arity$1(node);
} else {
return rewrite_clj$node$protocols$InnerNode$children$dyn_31693.call(null,node);
}
});

var rewrite_clj$node$protocols$InnerNode$replace_children$dyn_31694 = (function (node,children){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.replace_children[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node,children);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.replace_children["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node,children);
} else {
throw cljs.core.missing_protocol.call(null,"InnerNode.replace-children",node);
}
}
});
/**
 * Returns `node` replacing current children with `children`.
 */
rewrite_clj.node.protocols.replace_children = (function rewrite_clj$node$protocols$replace_children(node,children){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 == null)))))){
return node.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2(node,children);
} else {
return rewrite_clj$node$protocols$InnerNode$replace_children$dyn_31694.call(null,node,children);
}
});

var rewrite_clj$node$protocols$InnerNode$leader_length$dyn_31695 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.leader_length[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.leader_length["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"InnerNode.leader-length",node);
}
}
});
/**
 * Returns number of characters before children for `node`.
 */
rewrite_clj.node.protocols.leader_length = (function rewrite_clj$node$protocols$leader_length(node){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 == null)))))){
return node.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1(node);
} else {
return rewrite_clj$node$protocols$InnerNode$leader_length$dyn_31695.call(null,node);
}
});

(rewrite_clj.node.protocols.InnerNode["_"] = true);

(rewrite_clj.node.protocols.inner_QMARK_["_"] = (function (_this){
return false;
}));

(rewrite_clj.node.protocols.children["_"] = (function (_this){
throw cljs.core.ex_info.call(null,"unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.node.protocols.replace_children["_"] = (function (_this,_children){
throw cljs.core.ex_info.call(null,"unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.node.protocols.leader_length["_"] = (function (_this){
throw cljs.core.ex_info.call(null,"unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));
/**
 * Returns children for `node` converted to Clojure forms.
 * 
 *   Optional `opts` can specify:
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.node.protocols.child_sexprs = (function rewrite_clj$node$protocols$child_sexprs(var_args){
var G__31697 = arguments.length;
switch (G__31697) {
case 1:
return rewrite_clj.node.protocols.child_sexprs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.protocols.child_sexprs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.protocols.child_sexprs.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.node.protocols.child_sexprs.call(null,node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.node.protocols.child_sexprs.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
if(cljs.core.truth_(rewrite_clj.node.protocols.inner_QMARK_.call(null,node))){
return rewrite_clj.node.protocols.sexprs.call(null,rewrite_clj.node.protocols.children.call(null,node),opts);
} else {
return null;
}
}));

(rewrite_clj.node.protocols.child_sexprs.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if `x` is a rewrite-clj created node.
 */
rewrite_clj.node.protocols.node_QMARK_ = (function rewrite_clj$node$protocols$node_QMARK_(x){
return (((!((x == null)))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),rewrite_clj.node.protocols.tag.call(null,x))));
});
rewrite_clj.node.protocols.default_auto_resolve = (function rewrite_clj$node$protocols$default_auto_resolve(alias){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),alias)){
return new cljs.core.Symbol(null,"?_current-ns_?","?_current-ns_?",1667571229,null);
} else {
return cljs.core.symbol.call(null,["??_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),"_??"].join(''));
}
});

/**
 * Protocol for values that can be coerced to nodes.
 * @interface
 */
rewrite_clj.node.protocols.NodeCoerceable = function(){};

var rewrite_clj$node$protocols$NodeCoerceable$coerce$dyn_31699 = (function (form){
var x__21502__auto__ = (((form == null))?null:form);
var m__21503__auto__ = (rewrite_clj.node.protocols.coerce[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,form);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.coerce["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,form);
} else {
throw cljs.core.missing_protocol.call(null,"NodeCoerceable.coerce",form);
}
}
});
/**
 * Coerce `form` to node.
 */
rewrite_clj.node.protocols.coerce = (function rewrite_clj$node$protocols$coerce(form){
if((((!((form == null)))) && ((!((form.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 == null)))))){
return form.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1(form);
} else {
return rewrite_clj$node$protocols$NodeCoerceable$coerce$dyn_31699.call(null,form);
}
});


/**
 * Protocol for nodes that can be namespaced map qualified
 * @interface
 */
rewrite_clj.node.protocols.MapQualifiable = function(){};

var rewrite_clj$node$protocols$MapQualifiable$map_context_apply$dyn_31700 = (function (node,map_qualifier){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.map_context_apply[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node,map_qualifier);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.map_context_apply["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node,map_qualifier);
} else {
throw cljs.core.missing_protocol.call(null,"MapQualifiable.map-context-apply",node);
}
}
});
/**
 * Applies `map-qualifier` context to `node`
 */
rewrite_clj.node.protocols.map_context_apply = (function rewrite_clj$node$protocols$map_context_apply(node,map_qualifier){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$MapQualifiable$map_context_apply$arity$2 == null)))))){
return node.rewrite_clj$node$protocols$MapQualifiable$map_context_apply$arity$2(node,map_qualifier);
} else {
return rewrite_clj$node$protocols$MapQualifiable$map_context_apply$dyn_31700.call(null,node,map_qualifier);
}
});

var rewrite_clj$node$protocols$MapQualifiable$map_context_clear$dyn_31701 = (function (node){
var x__21502__auto__ = (((node == null))?null:node);
var m__21503__auto__ = (rewrite_clj.node.protocols.map_context_clear[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,node);
} else {
var m__21501__auto__ = (rewrite_clj.node.protocols.map_context_clear["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"MapQualifiable.map-context-clear",node);
}
}
});
/**
 * Removes map-qualifier context for `node`
 */
rewrite_clj.node.protocols.map_context_clear = (function rewrite_clj$node$protocols$map_context_clear(node){
if((((!((node == null)))) && ((!((node.rewrite_clj$node$protocols$MapQualifiable$map_context_clear$arity$1 == null)))))){
return node.rewrite_clj$node$protocols$MapQualifiable$map_context_clear$arity$1(node);
} else {
return rewrite_clj$node$protocols$MapQualifiable$map_context_clear$dyn_31701.call(null,node);
}
});

rewrite_clj.node.protocols.node__GT_string = (function rewrite_clj$node$protocols$node__GT_string(node){
var n = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(rewrite_clj.node.protocols.printable_only_QMARK_.call(null,node))?cljs.core.pr_str.call(null,rewrite_clj.node.protocols.string.call(null,node)):rewrite_clj.node.protocols.string.call(null,node)));
var n_SINGLEQUOTE_ = (cljs.core.truth_(cljs.core.re_find.call(null,/\n/,n))?rewrite_clj.interop.simple_format.call(null,"\n  %s\n",clojure.string.replace.call(null,n,/\r?\n/,"\n  ")):[" ",n].join(''));
return rewrite_clj.interop.simple_format.call(null,"<%s:%s>",cljs.core.name.call(null,rewrite_clj.node.protocols.tag.call(null,node)),n_SINGLEQUOTE_);
});
rewrite_clj.node.protocols.make_printable_cljs_BANG_ = (function rewrite_clj$node$protocols$make_printable_cljs_BANG_(obj){
(obj.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

return (obj.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_opts){
var o__$1 = this;
return cljs.core._write.call(null,writer,rewrite_clj.node.protocols.node__GT_string.call(null,o__$1));
}));
});
rewrite_clj.node.protocols.make_printable_BANG_ = (function rewrite_clj$node$protocols$make_printable_BANG_(obj){
return rewrite_clj.node.protocols.make_printable_cljs_BANG_.call(null,obj);
});
rewrite_clj.node.protocols.without_whitespace = (function rewrite_clj$node$protocols$without_whitespace(nodes){
return cljs.core.remove.call(null,rewrite_clj.node.protocols.printable_only_QMARK_,nodes);
});
rewrite_clj.node.protocols.assert_sexpr_count = (function rewrite_clj$node$protocols$assert_sexpr_count(nodes,c){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,rewrite_clj.node.protocols.without_whitespace.call(null,nodes)),c)){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.interop.simple_format.call(null,"can only contain %d non-whitespace form%s.",c,((cljs.core._EQ_.call(null,c,(1)))?"":"s"))),"\n","(= (count (without-whitespace nodes)) c)"].join('')));
}
});
rewrite_clj.node.protocols.assert_single_sexpr = (function rewrite_clj$node$protocols$assert_single_sexpr(nodes){
return rewrite_clj.node.protocols.assert_sexpr_count.call(null,nodes,(1));
});
/**
 * A node's extent is how far it moves the "cursor".
 * 
 *   Rows are simple - if we have x newlines in the string representation, we
 *   will always move the "cursor" x rows.
 * 
 *   Columns are strange.  If we have *any* newlines at all in the textual
 *   representation of a node, following nodes' column positions are not
 *   affected by our startting column position at all.  So the second number
 *   in the pair we return is interpreted as a relative column adjustment
 *   when the first number in the pair (rows) is zero, and as an absolute
 *   column position when rows is non-zero.
 */
rewrite_clj.node.protocols.extent = (function rewrite_clj$node$protocols$extent(node){
var map__31704 = cljs.core.meta.call(null,node);
var map__31704__$1 = cljs.core.__destructure_map.call(null,map__31704);
var row = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var next_row = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"next-row","next-row",-408963777));
var next_col = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"next-col","next-col",601697889));
if(cljs.core.truth_((function (){var and__20748__auto__ = row;
if(cljs.core.truth_(and__20748__auto__)){
var and__20748__auto____$1 = col;
if(cljs.core.truth_(and__20748__auto____$1)){
var and__20748__auto____$2 = next_row;
if(cljs.core.truth_(and__20748__auto____$2)){
return next_col;
} else {
return and__20748__auto____$2;
}
} else {
return and__20748__auto____$1;
}
} else {
return and__20748__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(next_row - row),((cljs.core._EQ_.call(null,row,next_row,row))?(next_col - col):next_col)], null);
} else {
var s = rewrite_clj.node.protocols.string.call(null,node);
var rows = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,"\n"),s));
var cols = (((rows === (0)))?cljs.core.count.call(null,s):(cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.complement.call(null,cljs.core.partial.call(null,cljs.core._EQ_,"\n")),cljs.core.reverse.call(null,s))) + (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null);
}
});
rewrite_clj.node.protocols._PLUS_extent = (function rewrite_clj$node$protocols$_PLUS_extent(p__31705,p__31706){
var vec__31707 = p__31705;
var row = cljs.core.nth.call(null,vec__31707,(0),null);
var col = cljs.core.nth.call(null,vec__31707,(1),null);
var vec__31710 = p__31706;
var row_extent = cljs.core.nth.call(null,vec__31710,(0),null);
var col_extent = cljs.core.nth.call(null,vec__31710,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + row_extent),(function (){var G__31713 = col_extent;
if((row_extent === (0))){
return (G__31713 + col);
} else {
return G__31713;
}
})()], null);
});
/**
 * Same as `clojure.core/meta` but with positional metadata removed.
 *   Use when you want to omit reader generated metadata on forms.
 */
rewrite_clj.node.protocols.meta_elided = (function rewrite_clj$node$protocols$meta_elided(form){
return cljs.core.apply.call(null,cljs.core.dissoc,cljs.core.meta.call(null,form),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], null));
});
/**
 * DEPRECATED: Get first child as a pair of tag/sexpr (if inner node),
 * or just the node's own sexpr. (use explicit analysis of `children`
 * `child-sexprs` instead) 
 */
rewrite_clj.node.protocols.value = (function rewrite_clj$node$protocols$value(node){
if(cljs.core.truth_(rewrite_clj.node.protocols.inner_QMARK_.call(null,node))){
var G__31714 = rewrite_clj.node.protocols.children.call(null,node);
var G__31714__$1 = (((G__31714 == null))?null:cljs.core.first.call(null,G__31714));
if((G__31714__$1 == null)){
return null;
} else {
return cljs.core.juxt.call(null,rewrite_clj.node.protocols.tag,rewrite_clj.node.protocols.sexpr).call(null,G__31714__$1);
}
} else {
return rewrite_clj.node.protocols.sexpr.call(null,node);
}
});
