// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__57464){
var map__57465 = p__57464;
var map__57465__$1 = cljs.core.__destructure_map.call(null,map__57465);
var m = map__57465__$1;
var n = cljs.core.get.call(null,map__57465__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__57465__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__20754__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57466_57494 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57467_57495 = null;
var count__57468_57496 = (0);
var i__57469_57497 = (0);
while(true){
if((i__57469_57497 < count__57468_57496)){
var f_57498 = cljs.core._nth.call(null,chunk__57467_57495,i__57469_57497);
cljs.core.println.call(null,"  ",f_57498);


var G__57499 = seq__57466_57494;
var G__57500 = chunk__57467_57495;
var G__57501 = count__57468_57496;
var G__57502 = (i__57469_57497 + (1));
seq__57466_57494 = G__57499;
chunk__57467_57495 = G__57500;
count__57468_57496 = G__57501;
i__57469_57497 = G__57502;
continue;
} else {
var temp__5720__auto___57503 = cljs.core.seq.call(null,seq__57466_57494);
if(temp__5720__auto___57503){
var seq__57466_57504__$1 = temp__5720__auto___57503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57466_57504__$1)){
var c__21725__auto___57505 = cljs.core.chunk_first.call(null,seq__57466_57504__$1);
var G__57506 = cljs.core.chunk_rest.call(null,seq__57466_57504__$1);
var G__57507 = c__21725__auto___57505;
var G__57508 = cljs.core.count.call(null,c__21725__auto___57505);
var G__57509 = (0);
seq__57466_57494 = G__57506;
chunk__57467_57495 = G__57507;
count__57468_57496 = G__57508;
i__57469_57497 = G__57509;
continue;
} else {
var f_57510 = cljs.core.first.call(null,seq__57466_57504__$1);
cljs.core.println.call(null,"  ",f_57510);


var G__57511 = cljs.core.next.call(null,seq__57466_57504__$1);
var G__57512 = null;
var G__57513 = (0);
var G__57514 = (0);
seq__57466_57494 = G__57511;
chunk__57467_57495 = G__57512;
count__57468_57496 = G__57513;
i__57469_57497 = G__57514;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57515 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20754__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_57515);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_57515)))?cljs.core.second.call(null,arglists_57515):arglists_57515));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57470_57516 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57471_57517 = null;
var count__57472_57518 = (0);
var i__57473_57519 = (0);
while(true){
if((i__57473_57519 < count__57472_57518)){
var vec__57482_57520 = cljs.core._nth.call(null,chunk__57471_57517,i__57473_57519);
var name_57521 = cljs.core.nth.call(null,vec__57482_57520,(0),null);
var map__57485_57522 = cljs.core.nth.call(null,vec__57482_57520,(1),null);
var map__57485_57523__$1 = cljs.core.__destructure_map.call(null,map__57485_57522);
var doc_57524 = cljs.core.get.call(null,map__57485_57523__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57525 = cljs.core.get.call(null,map__57485_57523__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_57521);

cljs.core.println.call(null," ",arglists_57525);

if(cljs.core.truth_(doc_57524)){
cljs.core.println.call(null," ",doc_57524);
} else {
}


var G__57526 = seq__57470_57516;
var G__57527 = chunk__57471_57517;
var G__57528 = count__57472_57518;
var G__57529 = (i__57473_57519 + (1));
seq__57470_57516 = G__57526;
chunk__57471_57517 = G__57527;
count__57472_57518 = G__57528;
i__57473_57519 = G__57529;
continue;
} else {
var temp__5720__auto___57530 = cljs.core.seq.call(null,seq__57470_57516);
if(temp__5720__auto___57530){
var seq__57470_57531__$1 = temp__5720__auto___57530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57470_57531__$1)){
var c__21725__auto___57532 = cljs.core.chunk_first.call(null,seq__57470_57531__$1);
var G__57533 = cljs.core.chunk_rest.call(null,seq__57470_57531__$1);
var G__57534 = c__21725__auto___57532;
var G__57535 = cljs.core.count.call(null,c__21725__auto___57532);
var G__57536 = (0);
seq__57470_57516 = G__57533;
chunk__57471_57517 = G__57534;
count__57472_57518 = G__57535;
i__57473_57519 = G__57536;
continue;
} else {
var vec__57486_57537 = cljs.core.first.call(null,seq__57470_57531__$1);
var name_57538 = cljs.core.nth.call(null,vec__57486_57537,(0),null);
var map__57489_57539 = cljs.core.nth.call(null,vec__57486_57537,(1),null);
var map__57489_57540__$1 = cljs.core.__destructure_map.call(null,map__57489_57539);
var doc_57541 = cljs.core.get.call(null,map__57489_57540__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57542 = cljs.core.get.call(null,map__57489_57540__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_57538);

cljs.core.println.call(null," ",arglists_57542);

if(cljs.core.truth_(doc_57541)){
cljs.core.println.call(null," ",doc_57541);
} else {
}


var G__57543 = cljs.core.next.call(null,seq__57470_57531__$1);
var G__57544 = null;
var G__57545 = (0);
var G__57546 = (0);
seq__57470_57516 = G__57543;
chunk__57471_57517 = G__57544;
count__57472_57518 = G__57545;
i__57473_57519 = G__57546;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__57490 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__57491 = null;
var count__57492 = (0);
var i__57493 = (0);
while(true){
if((i__57493 < count__57492)){
var role = cljs.core._nth.call(null,chunk__57491,i__57493);
var temp__5720__auto___57547__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___57547__$1)){
var spec_57548 = temp__5720__auto___57547__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_57548));
} else {
}


var G__57549 = seq__57490;
var G__57550 = chunk__57491;
var G__57551 = count__57492;
var G__57552 = (i__57493 + (1));
seq__57490 = G__57549;
chunk__57491 = G__57550;
count__57492 = G__57551;
i__57493 = G__57552;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__57490);
if(temp__5720__auto____$1){
var seq__57490__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57490__$1)){
var c__21725__auto__ = cljs.core.chunk_first.call(null,seq__57490__$1);
var G__57553 = cljs.core.chunk_rest.call(null,seq__57490__$1);
var G__57554 = c__21725__auto__;
var G__57555 = cljs.core.count.call(null,c__21725__auto__);
var G__57556 = (0);
seq__57490 = G__57553;
chunk__57491 = G__57554;
count__57492 = G__57555;
i__57493 = G__57556;
continue;
} else {
var role = cljs.core.first.call(null,seq__57490__$1);
var temp__5720__auto___57557__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___57557__$2)){
var spec_57558 = temp__5720__auto___57557__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_57558));
} else {
}


var G__57559 = cljs.core.next.call(null,seq__57490__$1);
var G__57560 = null;
var G__57561 = (0);
var G__57562 = (0);
seq__57490 = G__57559;
chunk__57491 = G__57560;
count__57492 = G__57561;
i__57493 = G__57562;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__57563 = cljs.core.conj.call(null,via,t);
var G__57564 = cljs.core.ex_cause.call(null,t);
via = G__57563;
t = G__57564;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__57567 = datafied_throwable;
var map__57567__$1 = cljs.core.__destructure_map.call(null,map__57567);
var via = cljs.core.get.call(null,map__57567__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__57567__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__57567__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__57568 = cljs.core.last.call(null,via);
var map__57568__$1 = cljs.core.__destructure_map.call(null,map__57568);
var type = cljs.core.get.call(null,map__57568__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__57568__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__57568__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__57569 = data;
var map__57569__$1 = cljs.core.__destructure_map.call(null,map__57569);
var problems = cljs.core.get.call(null,map__57569__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__57569__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__57569__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__57570 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__57570__$1 = cljs.core.__destructure_map.call(null,map__57570);
var top_data = map__57570__$1;
var source = cljs.core.get.call(null,map__57570__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__57571 = phase;
var G__57571__$1 = (((G__57571 instanceof cljs.core.Keyword))?G__57571.fqn:null);
switch (G__57571__$1) {
case "read-source":
var map__57572 = data;
var map__57572__$1 = cljs.core.__destructure_map.call(null,map__57572);
var line = cljs.core.get.call(null,map__57572__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__57572__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__57573 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__57573__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__57573,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57573);
var G__57573__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__57573__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57573__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__57573__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57573__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__57574 = top_data;
var G__57574__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__57574,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57574);
var G__57574__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__57574__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57574__$1);
var G__57574__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__57574__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57574__$2);
var G__57574__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__57574__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57574__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__57574__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57574__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__57575 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__57575,(0),null);
var method = cljs.core.nth.call(null,vec__57575,(1),null);
var file = cljs.core.nth.call(null,vec__57575,(2),null);
var line = cljs.core.nth.call(null,vec__57575,(3),null);
var G__57578 = top_data;
var G__57578__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__57578,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__57578);
var G__57578__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__57578__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__57578__$1);
var G__57578__$3 = (cljs.core.truth_((function (){var and__20748__auto__ = source__$1;
if(cljs.core.truth_(and__20748__auto__)){
return method;
} else {
return and__20748__auto__;
}
})())?cljs.core.assoc.call(null,G__57578__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__57578__$2);
var G__57578__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__57578__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57578__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__57578__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57578__$4;
}

break;
case "execution":
var vec__57579 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__57579,(0),null);
var method = cljs.core.nth.call(null,vec__57579,(1),null);
var file = cljs.core.nth.call(null,vec__57579,(2),null);
var line = cljs.core.nth.call(null,vec__57579,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__57566_SHARP_){
var or__20754__auto__ = (p1__57566_SHARP_ == null);
if(or__20754__auto__){
return or__20754__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__57566_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__20754__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return line;
}
})();
var G__57582 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__57582__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__57582,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__57582);
var G__57582__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__57582__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57582__$1);
var G__57582__$3 = (cljs.core.truth_((function (){var or__20754__auto__ = fn;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
var and__20748__auto__ = source__$1;
if(cljs.core.truth_(and__20748__auto__)){
return method;
} else {
return and__20748__auto__;
}
}
})())?cljs.core.assoc.call(null,G__57582__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__20754__auto__ = fn;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__57582__$2);
var G__57582__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__57582__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__57582__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__57582__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57582__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57571__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__57586){
var map__57587 = p__57586;
var map__57587__$1 = cljs.core.__destructure_map.call(null,map__57587);
var triage_data = map__57587__$1;
var phase = cljs.core.get.call(null,map__57587__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__57587__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__57587__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__57587__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__57587__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__57587__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__57587__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__57587__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__20754__auto__ = source;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__20754__auto__ = line;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__20754__auto__ = class$;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__57588 = phase;
var G__57588__$1 = (((G__57588 instanceof cljs.core.Keyword))?G__57588.fqn:null);
switch (G__57588__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__21923__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57589_57598 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57590_57599 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57591_57600 = true;
var _STAR_print_fn_STAR__temp_val__57592_57601 = (function (x__21924__auto__){
return sb__21923__auto__.append(x__21924__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57591_57600);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57592_57601);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__57584_SHARP_){
return cljs.core.dissoc.call(null,p1__57584_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57590_57599);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57589_57598);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__21923__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__21923__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57593_57602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57594_57603 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57595_57604 = true;
var _STAR_print_fn_STAR__temp_val__57596_57605 = (function (x__21924__auto__){
return sb__21923__auto__.append(x__21924__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57595_57604);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57596_57605);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__57585_SHARP_){
return cljs.core.dissoc.call(null,p1__57585_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57594_57603);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57593_57602);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__21923__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57588__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});
