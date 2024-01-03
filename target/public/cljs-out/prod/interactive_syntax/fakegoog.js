// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('interactive_syntax.fakegoog');
goog.require('cljs.core');
goog.require('goog.object');
goog.scope(function(){
interactive_syntax.fakegoog.goog$module$goog$object = goog.module.get('goog.object');
});
interactive_syntax.fakegoog.prov = (function interactive_syntax$fakegoog$prov(global,name){
var acc = global;
var n = name.split(".");
while(true){
if(cljs.core.empty_QMARK_.call(null,n)){
return null;
} else {
interactive_syntax.fakegoog.goog$module$goog$object.setIfUndefined.call(null,acc,cljs.core.first.call(null,n),({}));

var G__48025 = interactive_syntax.fakegoog.goog$module$goog$object.get.call(null,acc,cljs.core.first.call(null,n));
var G__48026 = cljs.core.rest.call(null,n);
acc = G__48025;
n = G__48026;
continue;
}
break;
}
});
interactive_syntax.fakegoog.req = (function interactive_syntax$fakegoog$req(global,name){
var acc = global;
var n = name.split(".");
while(true){
if(cljs.core.empty_QMARK_.call(null,n)){
return null;
} else {
interactive_syntax.fakegoog.goog$module$goog$object.setIfUndefined.call(null,acc,cljs.core.first.call(null,n),({}));

var G__48027 = interactive_syntax.fakegoog.goog$module$goog$object.get.call(null,acc,cljs.core.first.call(null,n));
var G__48028 = cljs.core.rest.call(null,n);
acc = G__48027;
n = G__48028;
continue;
}
break;
}
});
