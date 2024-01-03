// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('sci.impl.protocols');
goog.require('cljs.core');
goog.require('sci.impl.multimethods');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.protocols.default_QMARK_ = (function sci$impl$protocols$default_QMARK_(_ctx,sym){
return ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),sym)) || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"default","default",-347290801,null),sym)));
});
sci.impl.protocols.__GT_sigs = (function sci$impl$protocols$__GT_sigs(signatures){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33016){
var vec__33017 = p__33016;
var seq__33018 = cljs.core.seq.call(null,vec__33017);
var first__33019 = cljs.core.first.call(null,seq__33018);
var seq__33018__$1 = cljs.core.next.call(null,seq__33018);
var name = first__33019;
var arglists = seq__33018__$1;
var l = cljs.core.last.call(null,arglists);
var vec__33020 = ((typeof l === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast.call(null,arglists),l], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglists,null], null));
var arglists__$1 = cljs.core.nth.call(null,vec__33020,(0),null);
var doc = cljs.core.nth.call(null,vec__33020,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null)], null);
}),signatures));
});
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__22092__auto__ = [];
var len__22082__auto___33052 = arguments.length;
var i__22083__auto___33053 = (0);
while(true){
if((i__22083__auto___33053 < len__22082__auto___33052)){
args__22092__auto__.push((arguments[i__22083__auto___33053]));

var G__33054 = (i__22083__auto___33053 + (1));
i__22083__auto___33053 = G__33054;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((4) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__22093__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__33042 = (function (){var sig = cljs.core.first.call(null,signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest.call(null,signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.call(null,vec__33042,(0),null);
var signatures__$1 = cljs.core.nth.call(null,vec__33042,(1),null);
var vec__33045 = (function (){var opt = cljs.core.first.call(null,signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second.call(null,signatures__$1)]),cljs.core.nnext.call(null,signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.call(null,vec__33045,(0),null);
var signatures__$2 = cljs.core.nth.call(null,vec__33045,(1),null);
var sigs_map = sci.impl.protocols.__GT_sigs.call(null,signatures__$2);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name.call(null));
var fq_name = cljs.core.symbol.call(null,current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"sigs","sigs",-1653119622),null,(1),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sigs_map,null,(1),null)),(2),null)),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.map.call(null,(function (p__33048){
var vec__33049 = p__33048;
var seq__33050 = cljs.core.seq.call(null,vec__33049);
var first__33051 = cljs.core.first.call(null,seq__33050);
var seq__33050__$1 = cljs.core.next.call(null,seq__33050);
var method_name = first__33051;
var ___$2 = seq__33050__$1;
var fq_name__$1 = cljs.core.symbol.call(null,current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33023__auto__","x__33023__auto__",-484191474,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33024__auto__","args__33024__auto__",-2091072678,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__33025__auto__","methods__33025__auto__",-1940078657,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33023__auto__","x__33023__auto__",-484191474,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__33026__auto__","m__33026__auto__",1863613161,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__33025__auto__","methods__33025__auto__",-1940078657,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__33026__auto__","m__33026__auto__",1863613161,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33023__auto__","x__33023__auto__",-484191474,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33024__auto__","args__33024__auto__",-2091072678,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33027__auto__","default__33027__auto__",812363030,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33027__auto__","default__33027__auto__",812363030,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33023__auto__","x__33023__auto__",-484191474,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33024__auto__","args__33024__auto__",-2091072678,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,"No method ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33023__auto__","x__33023__auto__",-484191474,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.call(null,impls,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33028__auto__","x__33028__auto__",-1416512199,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33029__auto__","args__33029__auto__",-711384363,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__33030__auto__","meta__33030__auto__",-197671584,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33028__auto__","x__33028__auto__",-1416512199,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33031__auto__","method__33031__auto__",155975323,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__33030__auto__","meta__33030__auto__",-197671584,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33031__auto__","method__33031__auto__",155975323,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33031__auto__","method__33031__auto__",155975323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33028__auto__","x__33028__auto__",-1416512199,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33029__auto__","args__33029__auto__",-711384363,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33031__auto__","method__33031__auto__",155975323,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33028__auto__","x__33028__auto__",-1416512199,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33032__auto__","default__33032__auto__",-1861330602,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33031__auto__","method__33031__auto__",155975323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33032__auto__","default__33032__auto__",-1861330602,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33031__auto__","method__33031__auto__",155975323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33028__auto__","x__33028__auto__",-1416512199,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33029__auto__","args__33029__auto__",-711384363,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),(new cljs.core.List(null,cljs.core.keyword.call(null,method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33028__auto__","x__33028__auto__",-1416512199,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))):cljs.core.conj.call(null,impls,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33033__auto__","x__33033__auto__",1797198150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33034__auto__","args__33034__auto__",-2094443540,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33035__auto__","method__33035__auto__",-231308134,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33033__auto__","x__33033__auto__",1797198150,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33036__auto__","default__33036__auto__",-760862392,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33035__auto__","method__33035__auto__",-231308134,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33036__auto__","default__33036__auto__",-760862392,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33035__auto__","method__33035__auto__",-231308134,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33033__auto__","x__33033__auto__",1797198150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33034__auto__","args__33034__auto__",-2094443540,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),(new cljs.core.List(null,cljs.core.keyword.call(null,method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33033__auto__","x__33033__auto__",1797198150,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))))),null,(1),null)))));
}),signatures__$2))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq33037){
var G__33038 = cljs.core.first.call(null,seq33037);
var seq33037__$1 = cljs.core.next.call(null,seq33037);
var G__33039 = cljs.core.first.call(null,seq33037__$1);
var seq33037__$2 = cljs.core.next.call(null,seq33037__$1);
var G__33040 = cljs.core.first.call(null,seq33037__$2);
var seq33037__$3 = cljs.core.next.call(null,seq33037__$2);
var G__33041 = cljs.core.first.call(null,seq33037__$3);
var seq33037__$4 = cljs.core.next.call(null,seq33037__$3);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33038,G__33039,G__33040,G__33041,seq33037__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__22092__auto__ = [];
var len__22082__auto___33140 = arguments.length;
var i__22083__auto___33141 = (0);
while(true){
if((i__22083__auto___33141 < len__22082__auto___33140)){
args__22092__auto__.push((arguments[i__22083__auto___33141]));

var G__33142 = (i__22083__auto___33141 + (1));
i__22083__auto___33141 = G__33142;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((2) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22093__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__33058 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),proto_PLUS_mmaps));
var chunk__33060 = null;
var count__33061 = (0);
var i__33062 = (0);
while(true){
if((i__33062 < count__33061)){
var vec__33102 = cljs.core._nth.call(null,chunk__33060,i__33062);
var proto = cljs.core.nth.call(null,vec__33102,(0),null);
var mmap = cljs.core.nth.call(null,vec__33102,(1),null);
var extend_via_metadata_33143 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_33144 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_33145 = sci.impl.vars.getName.call(null,proto_ns_33144);
var pns_str_33146 = (cljs.core.truth_(extend_via_metadata_33143)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_33145):null);
var seq__33105_33147 = cljs.core.seq.call(null,mmap);
var chunk__33106_33148 = null;
var count__33107_33149 = (0);
var i__33108_33150 = (0);
while(true){
if((i__33108_33150 < count__33107_33149)){
var vec__33115_33151 = cljs.core._nth.call(null,chunk__33106_33148,i__33108_33150);
var meth_name_33152 = cljs.core.nth.call(null,vec__33115_33151,(0),null);
var f_33153 = cljs.core.nth.call(null,vec__33115_33151,(1),null);
var meth_str_33154 = cljs.core.name.call(null,meth_name_33152);
var meth_sym_33155 = cljs.core.symbol.call(null,meth_str_33154);
var env_33156 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_33157 = cljs.core.get_in.call(null,env_33156,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_33145,meth_sym_33155], null));
var multi_method_33158 = cljs.core.deref.call(null,multi_method_var_33157);
sci.impl.multimethods.multi_fn_add_method_impl.call(null,multi_method_33158,atype,(cljs.core.truth_(extend_via_metadata_33143)?(function (){var fq = cljs.core.symbol.call(null,pns_str_33146,meth_str_33154);
return ((function (seq__33105_33147,chunk__33106_33148,count__33107_33149,i__33108_33150,seq__33058,chunk__33060,count__33061,i__33062,fq,meth_str_33154,meth_sym_33155,env_33156,multi_method_var_33157,multi_method_33158,vec__33115_33151,meth_name_33152,f_33153,extend_via_metadata_33143,proto_ns_33144,pns_33145,pns_str_33146,vec__33102,proto,mmap){
return (function() { 
var G__33159__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta.call(null,this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.call(null,m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.call(null,meth,this$,args);
} else {
return cljs.core.apply.call(null,f_33153,this$,args);
}
} else {
return cljs.core.apply.call(null,f_33153,this$,args);
}
};
var G__33159 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__33160__i = 0, G__33160__a = new Array(arguments.length -  1);
while (G__33160__i < G__33160__a.length) {G__33160__a[G__33160__i] = arguments[G__33160__i + 1]; ++G__33160__i;}
  args = new cljs.core.IndexedSeq(G__33160__a,0,null);
} 
return G__33159__delegate.call(this,this$,args);};
G__33159.cljs$lang$maxFixedArity = 1;
G__33159.cljs$lang$applyTo = (function (arglist__33161){
var this$ = cljs.core.first(arglist__33161);
var args = cljs.core.rest(arglist__33161);
return G__33159__delegate(this$,args);
});
G__33159.cljs$core$IFn$_invoke$arity$variadic = G__33159__delegate;
return G__33159;
})()
;
;})(seq__33105_33147,chunk__33106_33148,count__33107_33149,i__33108_33150,seq__33058,chunk__33060,count__33061,i__33062,fq,meth_str_33154,meth_sym_33155,env_33156,multi_method_var_33157,multi_method_33158,vec__33115_33151,meth_name_33152,f_33153,extend_via_metadata_33143,proto_ns_33144,pns_33145,pns_str_33146,vec__33102,proto,mmap))
})():f_33153));


var G__33162 = seq__33105_33147;
var G__33163 = chunk__33106_33148;
var G__33164 = count__33107_33149;
var G__33165 = (i__33108_33150 + (1));
seq__33105_33147 = G__33162;
chunk__33106_33148 = G__33163;
count__33107_33149 = G__33164;
i__33108_33150 = G__33165;
continue;
} else {
var temp__5720__auto___33166 = cljs.core.seq.call(null,seq__33105_33147);
if(temp__5720__auto___33166){
var seq__33105_33167__$1 = temp__5720__auto___33166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33105_33167__$1)){
var c__21725__auto___33168 = cljs.core.chunk_first.call(null,seq__33105_33167__$1);
var G__33169 = cljs.core.chunk_rest.call(null,seq__33105_33167__$1);
var G__33170 = c__21725__auto___33168;
var G__33171 = cljs.core.count.call(null,c__21725__auto___33168);
var G__33172 = (0);
seq__33105_33147 = G__33169;
chunk__33106_33148 = G__33170;
count__33107_33149 = G__33171;
i__33108_33150 = G__33172;
continue;
} else {
var vec__33118_33173 = cljs.core.first.call(null,seq__33105_33167__$1);
var meth_name_33174 = cljs.core.nth.call(null,vec__33118_33173,(0),null);
var f_33175 = cljs.core.nth.call(null,vec__33118_33173,(1),null);
var meth_str_33176 = cljs.core.name.call(null,meth_name_33174);
var meth_sym_33177 = cljs.core.symbol.call(null,meth_str_33176);
var env_33178 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_33179 = cljs.core.get_in.call(null,env_33178,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_33145,meth_sym_33177], null));
var multi_method_33180 = cljs.core.deref.call(null,multi_method_var_33179);
sci.impl.multimethods.multi_fn_add_method_impl.call(null,multi_method_33180,atype,(cljs.core.truth_(extend_via_metadata_33143)?(function (){var fq = cljs.core.symbol.call(null,pns_str_33146,meth_str_33176);
return ((function (seq__33105_33147,chunk__33106_33148,count__33107_33149,i__33108_33150,seq__33058,chunk__33060,count__33061,i__33062,fq,meth_str_33176,meth_sym_33177,env_33178,multi_method_var_33179,multi_method_33180,vec__33118_33173,meth_name_33174,f_33175,seq__33105_33167__$1,temp__5720__auto___33166,extend_via_metadata_33143,proto_ns_33144,pns_33145,pns_str_33146,vec__33102,proto,mmap){
return (function() { 
var G__33181__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta.call(null,this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.call(null,m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.call(null,meth,this$,args);
} else {
return cljs.core.apply.call(null,f_33175,this$,args);
}
} else {
return cljs.core.apply.call(null,f_33175,this$,args);
}
};
var G__33181 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__33182__i = 0, G__33182__a = new Array(arguments.length -  1);
while (G__33182__i < G__33182__a.length) {G__33182__a[G__33182__i] = arguments[G__33182__i + 1]; ++G__33182__i;}
  args = new cljs.core.IndexedSeq(G__33182__a,0,null);
} 
return G__33181__delegate.call(this,this$,args);};
G__33181.cljs$lang$maxFixedArity = 1;
G__33181.cljs$lang$applyTo = (function (arglist__33183){
var this$ = cljs.core.first(arglist__33183);
var args = cljs.core.rest(arglist__33183);
return G__33181__delegate(this$,args);
});
G__33181.cljs$core$IFn$_invoke$arity$variadic = G__33181__delegate;
return G__33181;
})()
;
;})(seq__33105_33147,chunk__33106_33148,count__33107_33149,i__33108_33150,seq__33058,chunk__33060,count__33061,i__33062,fq,meth_str_33176,meth_sym_33177,env_33178,multi_method_var_33179,multi_method_33180,vec__33118_33173,meth_name_33174,f_33175,seq__33105_33167__$1,temp__5720__auto___33166,extend_via_metadata_33143,proto_ns_33144,pns_33145,pns_str_33146,vec__33102,proto,mmap))
})():f_33175));


var G__33184 = cljs.core.next.call(null,seq__33105_33167__$1);
var G__33185 = null;
var G__33186 = (0);
var G__33187 = (0);
seq__33105_33147 = G__33184;
chunk__33106_33148 = G__33185;
count__33107_33149 = G__33186;
i__33108_33150 = G__33187;
continue;
}
} else {
}
}
break;
}


var G__33188 = seq__33058;
var G__33189 = chunk__33060;
var G__33190 = count__33061;
var G__33191 = (i__33062 + (1));
seq__33058 = G__33188;
chunk__33060 = G__33189;
count__33061 = G__33190;
i__33062 = G__33191;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33058);
if(temp__5720__auto__){
var seq__33058__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33058__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__33058__$1);
var G__33192 = cljs.core.chunk_rest.call(null,seq__33058__$1);
var G__33193 = c__21725__auto__;
var G__33194 = cljs.core.count.call(null,c__21725__auto__);
var G__33195 = (0);
seq__33058 = G__33192;
chunk__33060 = G__33193;
count__33061 = G__33194;
i__33062 = G__33195;
continue;
} else {
var vec__33121 = cljs.core.first.call(null,seq__33058__$1);
var proto = cljs.core.nth.call(null,vec__33121,(0),null);
var mmap = cljs.core.nth.call(null,vec__33121,(1),null);
var extend_via_metadata_33196 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_33197 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_33198 = sci.impl.vars.getName.call(null,proto_ns_33197);
var pns_str_33199 = (cljs.core.truth_(extend_via_metadata_33196)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_33198):null);
var seq__33124_33200 = cljs.core.seq.call(null,mmap);
var chunk__33125_33201 = null;
var count__33126_33202 = (0);
var i__33127_33203 = (0);
while(true){
if((i__33127_33203 < count__33126_33202)){
var vec__33134_33204 = cljs.core._nth.call(null,chunk__33125_33201,i__33127_33203);
var meth_name_33205 = cljs.core.nth.call(null,vec__33134_33204,(0),null);
var f_33206 = cljs.core.nth.call(null,vec__33134_33204,(1),null);
var meth_str_33207 = cljs.core.name.call(null,meth_name_33205);
var meth_sym_33208 = cljs.core.symbol.call(null,meth_str_33207);
var env_33209 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_33210 = cljs.core.get_in.call(null,env_33209,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_33198,meth_sym_33208], null));
var multi_method_33211 = cljs.core.deref.call(null,multi_method_var_33210);
sci.impl.multimethods.multi_fn_add_method_impl.call(null,multi_method_33211,atype,(cljs.core.truth_(extend_via_metadata_33196)?(function (){var fq = cljs.core.symbol.call(null,pns_str_33199,meth_str_33207);
return ((function (seq__33124_33200,chunk__33125_33201,count__33126_33202,i__33127_33203,seq__33058,chunk__33060,count__33061,i__33062,fq,meth_str_33207,meth_sym_33208,env_33209,multi_method_var_33210,multi_method_33211,vec__33134_33204,meth_name_33205,f_33206,extend_via_metadata_33196,proto_ns_33197,pns_33198,pns_str_33199,vec__33121,proto,mmap,seq__33058__$1,temp__5720__auto__){
return (function() { 
var G__33212__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta.call(null,this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.call(null,m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.call(null,meth,this$,args);
} else {
return cljs.core.apply.call(null,f_33206,this$,args);
}
} else {
return cljs.core.apply.call(null,f_33206,this$,args);
}
};
var G__33212 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__33213__i = 0, G__33213__a = new Array(arguments.length -  1);
while (G__33213__i < G__33213__a.length) {G__33213__a[G__33213__i] = arguments[G__33213__i + 1]; ++G__33213__i;}
  args = new cljs.core.IndexedSeq(G__33213__a,0,null);
} 
return G__33212__delegate.call(this,this$,args);};
G__33212.cljs$lang$maxFixedArity = 1;
G__33212.cljs$lang$applyTo = (function (arglist__33214){
var this$ = cljs.core.first(arglist__33214);
var args = cljs.core.rest(arglist__33214);
return G__33212__delegate(this$,args);
});
G__33212.cljs$core$IFn$_invoke$arity$variadic = G__33212__delegate;
return G__33212;
})()
;
;})(seq__33124_33200,chunk__33125_33201,count__33126_33202,i__33127_33203,seq__33058,chunk__33060,count__33061,i__33062,fq,meth_str_33207,meth_sym_33208,env_33209,multi_method_var_33210,multi_method_33211,vec__33134_33204,meth_name_33205,f_33206,extend_via_metadata_33196,proto_ns_33197,pns_33198,pns_str_33199,vec__33121,proto,mmap,seq__33058__$1,temp__5720__auto__))
})():f_33206));


var G__33215 = seq__33124_33200;
var G__33216 = chunk__33125_33201;
var G__33217 = count__33126_33202;
var G__33218 = (i__33127_33203 + (1));
seq__33124_33200 = G__33215;
chunk__33125_33201 = G__33216;
count__33126_33202 = G__33217;
i__33127_33203 = G__33218;
continue;
} else {
var temp__5720__auto___33219__$1 = cljs.core.seq.call(null,seq__33124_33200);
if(temp__5720__auto___33219__$1){
var seq__33124_33220__$1 = temp__5720__auto___33219__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33124_33220__$1)){
var c__21725__auto___33221 = cljs.core.chunk_first.call(null,seq__33124_33220__$1);
var G__33222 = cljs.core.chunk_rest.call(null,seq__33124_33220__$1);
var G__33223 = c__21725__auto___33221;
var G__33224 = cljs.core.count.call(null,c__21725__auto___33221);
var G__33225 = (0);
seq__33124_33200 = G__33222;
chunk__33125_33201 = G__33223;
count__33126_33202 = G__33224;
i__33127_33203 = G__33225;
continue;
} else {
var vec__33137_33226 = cljs.core.first.call(null,seq__33124_33220__$1);
var meth_name_33227 = cljs.core.nth.call(null,vec__33137_33226,(0),null);
var f_33228 = cljs.core.nth.call(null,vec__33137_33226,(1),null);
var meth_str_33229 = cljs.core.name.call(null,meth_name_33227);
var meth_sym_33230 = cljs.core.symbol.call(null,meth_str_33229);
var env_33231 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_33232 = cljs.core.get_in.call(null,env_33231,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_33198,meth_sym_33230], null));
var multi_method_33233 = cljs.core.deref.call(null,multi_method_var_33232);
sci.impl.multimethods.multi_fn_add_method_impl.call(null,multi_method_33233,atype,(cljs.core.truth_(extend_via_metadata_33196)?(function (){var fq = cljs.core.symbol.call(null,pns_str_33199,meth_str_33229);
return ((function (seq__33124_33200,chunk__33125_33201,count__33126_33202,i__33127_33203,seq__33058,chunk__33060,count__33061,i__33062,fq,meth_str_33229,meth_sym_33230,env_33231,multi_method_var_33232,multi_method_33233,vec__33137_33226,meth_name_33227,f_33228,seq__33124_33220__$1,temp__5720__auto___33219__$1,extend_via_metadata_33196,proto_ns_33197,pns_33198,pns_str_33199,vec__33121,proto,mmap,seq__33058__$1,temp__5720__auto__){
return (function() { 
var G__33234__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta.call(null,this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.call(null,m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.call(null,meth,this$,args);
} else {
return cljs.core.apply.call(null,f_33228,this$,args);
}
} else {
return cljs.core.apply.call(null,f_33228,this$,args);
}
};
var G__33234 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__33235__i = 0, G__33235__a = new Array(arguments.length -  1);
while (G__33235__i < G__33235__a.length) {G__33235__a[G__33235__i] = arguments[G__33235__i + 1]; ++G__33235__i;}
  args = new cljs.core.IndexedSeq(G__33235__a,0,null);
} 
return G__33234__delegate.call(this,this$,args);};
G__33234.cljs$lang$maxFixedArity = 1;
G__33234.cljs$lang$applyTo = (function (arglist__33236){
var this$ = cljs.core.first(arglist__33236);
var args = cljs.core.rest(arglist__33236);
return G__33234__delegate(this$,args);
});
G__33234.cljs$core$IFn$_invoke$arity$variadic = G__33234__delegate;
return G__33234;
})()
;
;})(seq__33124_33200,chunk__33125_33201,count__33126_33202,i__33127_33203,seq__33058,chunk__33060,count__33061,i__33062,fq,meth_str_33229,meth_sym_33230,env_33231,multi_method_var_33232,multi_method_33233,vec__33137_33226,meth_name_33227,f_33228,seq__33124_33220__$1,temp__5720__auto___33219__$1,extend_via_metadata_33196,proto_ns_33197,pns_33198,pns_str_33199,vec__33121,proto,mmap,seq__33058__$1,temp__5720__auto__))
})():f_33228));


var G__33237 = cljs.core.next.call(null,seq__33124_33220__$1);
var G__33238 = null;
var G__33239 = (0);
var G__33240 = (0);
seq__33124_33200 = G__33237;
chunk__33125_33201 = G__33238;
count__33126_33202 = G__33239;
i__33127_33203 = G__33240;
continue;
}
} else {
}
}
break;
}


var G__33241 = cljs.core.next.call(null,seq__33058__$1);
var G__33242 = null;
var G__33243 = (0);
var G__33244 = (0);
seq__33058 = G__33241;
chunk__33060 = G__33242;
count__33061 = G__33243;
i__33062 = G__33244;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq33055){
var G__33056 = cljs.core.first.call(null,seq33055);
var seq33055__$1 = cljs.core.next.call(null,seq33055);
var G__33057 = cljs.core.first.call(null,seq33055__$1);
var seq33055__$2 = cljs.core.next.call(null,seq33055__$1);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33056,G__33057,seq33055__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__33252,default_method_QMARK_){
var vec__33253 = p__33252;
var seq__33254 = cljs.core.seq.call(null,vec__33253);
var first__33255 = cljs.core.first.call(null,seq__33254);
var seq__33254__$1 = cljs.core.next.call(null,seq__33254);
var args = first__33255;
var body = seq__33254__$1;
return (new cljs.core.List(null,args,(new cljs.core.List(null,(cljs.core.truth_(default_method_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33245__auto__","farg__33245__auto__",426016606,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,args),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__33246__auto__","m__33246__auto__",794145938,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33245__auto__","farg__33245__auto__",426016606,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33247__auto__","meth__33247__auto__",1747943512,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__33246__auto__","m__33246__auto__",794145938,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33247__auto__","meth__33247__auto__",1747943512,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33247__auto__","meth__33247__auto__",1747943512,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33245__auto__","farg__33245__auto__",426016606,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33248__auto__","default__33248__auto__",-1687501443,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33248__auto__","default__33248__auto__",-1687501443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33247__auto__","meth__33247__auto__",1747943512,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33247__auto__","meth__33247__auto__",1747943512,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33247__auto__","meth__33247__auto__",1747943512,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33245__auto__","farg__33245__auto__",426016606,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33248__auto__","default__33248__auto__",-1687501443,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33248__auto__","default__33248__auto__",-1687501443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33247__auto__","meth__33247__auto__",1747943512,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33247__auto__","meth__33247__auto__",1747943512,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33249__auto__","farg__33249__auto__",-67261969,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,args),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__33250__auto__","m__33250__auto__",-714750050,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33249__auto__","farg__33249__auto__",-67261969,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33251__auto__","meth__33251__auto__",-658694093,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__33250__auto__","m__33250__auto__",-714750050,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33251__auto__","meth__33251__auto__",-658694093,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(2),null));
});
sci.impl.protocols.process_single = (function sci$impl$protocols$process_single(fq,p__33259){
var vec__33260 = p__33259;
var seq__33261 = cljs.core.seq.call(null,vec__33260);
var first__33262 = cljs.core.first.call(null,seq__33261);
var seq__33261__$1 = cljs.core.next.call(null,seq__33261);
var args = first__33262;
var body = seq__33261__$1;
return (new cljs.core.List(null,args,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33256__auto__","farg__33256__auto__",-448567068,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,args),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33257__auto__","meth__33257__auto__",-400914293,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__33256__auto__","farg__33256__auto__",-448567068,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33258__auto__","default__33258__auto__",1923667862,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__33258__auto__","default__33258__auto__",1923667862,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33257__auto__","meth__33257__auto__",-400914293,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__33257__auto__","meth__33257__auto__",-400914293,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(2),null));
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(ctx,type,meths,protocol_ns,extend_via_metadata){
var default_method_QMARK_ = sci.impl.protocols.default_QMARK_.call(null,ctx,type);
return cljs.core.map.call(null,(function (p__33265){
var vec__33266 = p__33265;
var seq__33267 = cljs.core.seq.call(null,vec__33266);
var first__33268 = cljs.core.first.call(null,seq__33267);
var seq__33267__$1 = cljs.core.next.call(null,seq__33267);
var meth_name = first__33268;
var fn_body = seq__33267__$1;
var fq = cljs.core.symbol.call(null,protocol_ns,cljs.core.name.call(null,meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fn_body)))?sci.impl.protocols.process_single_extend_meta.call(null,fq,fn_body,default_method_QMARK_):cljs.core.map.call(null,(function (p1__33263_SHARP_){
return sci.impl.protocols.process_single_extend_meta.call(null,fq,p1__33263_SHARP_,default_method_QMARK_);
}),fn_body)):((default_method_QMARK_)?((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fn_body)))?sci.impl.protocols.process_single.call(null,fq,fn_body):cljs.core.map.call(null,(function (p1__33264_SHARP_){
return sci.impl.protocols.process_single.call(null,fq,p1__33264_SHARP_);
}),fn_body)):fn_body
));
if(default_method_QMARK_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),fn_body__$1)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),fn_body__$1)));
}
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__22092__auto__ = [];
var len__22082__auto___33279 = arguments.length;
var i__22083__auto___33280 = (0);
while(true){
if((i__22083__auto___33280 < len__22082__auto___33279)){
args__22092__auto__.push((arguments[i__22083__auto___33280]));

var G__33281 = (i__22083__auto___33280 + (1));
i__22083__auto___33280 = G__33281;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((4) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__22093__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when.call(null,(function (p1__33269_SHARP_){
return (!(cljs.core.seq_QMARK_.call(null,p1__33269_SHARP_)));
}),impls);
var protocol_var = cljs.core.deref.call(null,sci.impl.utils.eval_resolve_state).call(null,ctx,new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx),protocol_name);
var protocol_data = cljs.core.deref.call(null,protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName.call(null,protocol_ns));
var expansion = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (p__33275){
var vec__33276 = p__33275;
var seq__33277 = cljs.core.seq.call(null,vec__33276);
var first__33278 = cljs.core.first.call(null,seq__33277);
var seq__33277__$1 = cljs.core.next.call(null,seq__33277);
var type = first__33278;
var meths = seq__33277__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods.call(null,ctx,type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq33270){
var G__33271 = cljs.core.first.call(null,seq33270);
var seq33270__$1 = cljs.core.next.call(null,seq33270);
var G__33272 = cljs.core.first.call(null,seq33270__$1);
var seq33270__$2 = cljs.core.next.call(null,seq33270__$1);
var G__33273 = cljs.core.first.call(null,seq33270__$2);
var seq33270__$3 = cljs.core.next.call(null,seq33270__$2);
var G__33274 = cljs.core.first.call(null,seq33270__$3);
var seq33270__$4 = cljs.core.next.call(null,seq33270__$3);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33271,G__33272,G__33273,G__33274,seq33270__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__22092__auto__ = [];
var len__22082__auto___33292 = arguments.length;
var i__22083__auto___33293 = (0);
while(true){
if((i__22083__auto___33293 < len__22082__auto___33292)){
args__22092__auto__.push((arguments[i__22083__auto___33293]));

var G__33294 = (i__22083__auto___33293 + (1));
i__22083__auto___33293 = G__33294;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((4) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__22093__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when.call(null,(function (p1__33282_SHARP_){
return (!(cljs.core.seq_QMARK_.call(null,p1__33282_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (p__33288){
var vec__33289 = p__33288;
var seq__33290 = cljs.core.seq.call(null,vec__33289);
var first__33291 = cljs.core.first.call(null,seq__33290);
var seq__33290__$1 = cljs.core.next.call(null,seq__33290);
var proto = first__33291;
var meths = seq__33290__$1;
var protocol_var = cljs.core.deref.call(null,sci.impl.utils.eval_resolve_state).call(null,ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),proto);
var proto_data = cljs.core.deref.call(null,protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName.call(null,protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods.call(null,ctx,atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq33283){
var G__33284 = cljs.core.first.call(null,seq33283);
var seq33283__$1 = cljs.core.next.call(null,seq33283);
var G__33285 = cljs.core.first.call(null,seq33283__$1);
var seq33283__$2 = cljs.core.next.call(null,seq33283__$1);
var G__33286 = cljs.core.first.call(null,seq33283__$2);
var seq33283__$3 = cljs.core.next.call(null,seq33283__$2);
var G__33287 = cljs.core.first.call(null,seq33283__$3);
var seq33283__$4 = cljs.core.next.call(null,seq33283__$3);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33284,G__33285,G__33286,G__33287,seq33283__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__33295_SHARP_){
var temp__5720__auto__ = cljs.core.get_method.call(null,p1__33295_SHARP_,sci.impl.types.type_impl.call(null,obj));
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
var ms = cljs.core.methods$.call(null,p1__33295_SHARP_);
var default$ = cljs.core.get.call(null,ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_.call(null,sci.impl.types.getProtocols.call(null,obj),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__20754__auto__ = (function (){var and__20748__auto__ = p;
if(cljs.core.truth_(and__20748__auto__)){
var pred__33296 = cljs.core._EQ_;
var expr__33297 = p;
if(cljs.core.truth_(pred__33296.call(null,cljs.core.IDeref,expr__33297))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_(pred__33296.call(null,cljs.core.ISwap,expr__33297))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_(pred__33296.call(null,cljs.core.IReset,expr__33297))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33297)].join('')));
}
}
}
} else {
return and__20748__auto__;
}
})();
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method.call(null,protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__20748__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__20748__auto__){
var G__33302 = clazz;
var G__33302__$1 = (((G__33302 == null))?null:cljs.core.meta.call(null,G__33302));
if((G__33302__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__33302__$1);
}
} else {
return and__20748__auto__;
}
})())){
return cljs.core._EQ_.call(null,clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__33303_SHARP_){
return cljs.core.get_method.call(null,p1__33303_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
