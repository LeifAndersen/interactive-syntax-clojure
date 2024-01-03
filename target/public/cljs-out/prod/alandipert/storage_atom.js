// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('alandipert.storage_atom');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.Timer');
goog.require('clojure.string');
alandipert.storage_atom.transit_read_handlers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
alandipert.storage_atom.transit_write_handlers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
alandipert.storage_atom.clj__GT_json = (function alandipert$storage_atom$clj__GT_json(x){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.deref.call(null,alandipert.storage_atom.transit_write_handlers)], null)),x);
});
alandipert.storage_atom.json__GT_clj = (function alandipert$storage_atom$json__GT_clj(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.deref.call(null,alandipert.storage_atom.transit_read_handlers)], null)),x);
});

/**
 * Represents a storage resource.
 * @interface
 */
alandipert.storage_atom.IStorageBackend = function(){};

var alandipert$storage_atom$IStorageBackend$_get$dyn_27578 = (function (this$,not_found){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (alandipert.storage_atom._get[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$,not_found);
} else {
var m__21501__auto__ = (alandipert.storage_atom._get["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$,not_found);
} else {
throw cljs.core.missing_protocol.call(null,"IStorageBackend.-get",this$);
}
}
});
alandipert.storage_atom._get = (function alandipert$storage_atom$_get(this$,not_found){
if((((!((this$ == null)))) && ((!((this$.alandipert$storage_atom$IStorageBackend$_get$arity$2 == null)))))){
return this$.alandipert$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else {
return alandipert$storage_atom$IStorageBackend$_get$dyn_27578.call(null,this$,not_found);
}
});

var alandipert$storage_atom$IStorageBackend$_commit_BANG_$dyn_27579 = (function (this$,value){
var x__21502__auto__ = (((this$ == null))?null:this$);
var m__21503__auto__ = (alandipert.storage_atom._commit_BANG_[goog.typeOf(x__21502__auto__)]);
if((!((m__21503__auto__ == null)))){
return m__21503__auto__.call(null,this$,value);
} else {
var m__21501__auto__ = (alandipert.storage_atom._commit_BANG_["_"]);
if((!((m__21501__auto__ == null)))){
return m__21501__auto__.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"IStorageBackend.-commit!",this$);
}
}
});
/**
 * Commit value to storage at location.
 */
alandipert.storage_atom._commit_BANG_ = (function alandipert$storage_atom$_commit_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 == null)))))){
return this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else {
return alandipert$storage_atom$IStorageBackend$_commit_BANG_$dyn_27579.call(null,this$,value);
}
});


/**
* @constructor
 * @implements {alandipert.storage_atom.IStorageBackend}
*/
alandipert.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
});
(alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$ = cljs.core.PROTOCOL_SENTINEL);

(alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = self__.store.getItem(alandipert.storage_atom.clj__GT_json.call(null,self__.key));
if(cljs.core.truth_(temp__5718__auto__)){
var existing = temp__5718__auto__;
return alandipert.storage_atom.json__GT_clj.call(null,existing);
} else {
return not_found;
}
}));

(alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.store.setItem(alandipert.storage_atom.clj__GT_json.call(null,self__.key),alandipert.storage_atom.clj__GT_json.call(null,value));
}));

(alandipert.storage_atom.StorageBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(alandipert.storage_atom.StorageBackend.cljs$lang$type = true);

(alandipert.storage_atom.StorageBackend.cljs$lang$ctorStr = "alandipert.storage-atom/StorageBackend");

(alandipert.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"alandipert.storage-atom/StorageBackend");
}));

/**
 * Positional factory function for alandipert.storage-atom/StorageBackend.
 */
alandipert.storage_atom.__GT_StorageBackend = (function alandipert$storage_atom$__GT_StorageBackend(store,key){
return (new alandipert.storage_atom.StorageBackend(store,key));
});

/**
 * Return a function that will always store a future call into the
 *   same atom. If recalled before the time is elapsed, the call is
 *   replaced without being executed.
 */
alandipert.storage_atom.debounce_factory = (function alandipert$storage_atom$debounce_factory(){
var f = cljs.core.atom.call(null,null);
return (function (func,ttime){
if(cljs.core.truth_(cljs.core.deref.call(null,f))){
goog.Timer.clear(cljs.core.deref.call(null,f));
} else {
}

return cljs.core.reset_BANG_.call(null,f,goog.Timer.callOnce(func,ttime));
});
});
/**
 * Delay in ms before a change is committed to the local storage. If a
 * new change occurs before the time is elapsed, the old change is
 * discarded an only the new one is committed.
 */
alandipert.storage_atom.storage_delay = cljs.core.atom.call(null,(10));
alandipert.storage_atom._STAR_storage_delay_STAR_ = null;
alandipert.storage_atom._STAR_watch_active_STAR_ = true;
alandipert.storage_atom.store = (function alandipert$storage_atom$store(atom,backend){
var existing = alandipert.storage_atom._get.call(null,backend,new cljs.core.Keyword("alandipert.storage-atom","none","alandipert.storage-atom/none",604942529));
var debounce = alandipert.storage_atom.debounce_factory.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("alandipert.storage-atom","none","alandipert.storage-atom/none",604942529),existing)){
alandipert.storage_atom._commit_BANG_.call(null,backend,cljs.core.deref.call(null,atom));
} else {
cljs.core.reset_BANG_.call(null,atom,existing);
}

var G__27584 = atom;
cljs.core.add_watch.call(null,G__27584,new cljs.core.Keyword("alandipert.storage-atom","storage-watch","alandipert.storage-atom/storage-watch",1159565749),(function (p1__27582_SHARP_,p2__27583_SHARP_,p3__27580_SHARP_,p4__27581_SHARP_){
if(cljs.core.truth_((function (){var and__20748__auto__ = alandipert.storage_atom._STAR_watch_active_STAR_;
if(cljs.core.truth_(and__20748__auto__)){
return cljs.core.not_EQ_.call(null,p3__27580_SHARP_,p4__27581_SHARP_);
} else {
return and__20748__auto__;
}
})())){
return debounce.call(null,(function (){
return alandipert.storage_atom._commit_BANG_.call(null,backend,p4__27581_SHARP_);
}),(function (){var or__20754__auto__ = alandipert.storage_atom._STAR_storage_delay_STAR_;
if(cljs.core.truth_(or__20754__auto__)){
return or__20754__auto__;
} else {
return cljs.core.deref.call(null,alandipert.storage_atom.storage_delay);
}
})());
} else {
return null;
}
}));

return G__27584;
});
alandipert.storage_atom.maybe_update_backend = (function alandipert$storage_atom$maybe_update_backend(atom,storage,k,default$,e){
if((storage === e.storageArea)){
if(cljs.core.empty_QMARK_.call(null,e.key)){
var _STAR_watch_active_STAR__orig_val__27585 = alandipert.storage_atom._STAR_watch_active_STAR_;
var _STAR_watch_active_STAR__temp_val__27586 = false;
(alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR__temp_val__27586);

try{return cljs.core.reset_BANG_.call(null,atom,default$);
}finally {(alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR__orig_val__27585);
}} else {
try{var temp__5720__auto__ = alandipert.storage_atom.json__GT_clj.call(null,e.key);
if(cljs.core.truth_(temp__5720__auto__)){
var sk = temp__5720__auto__;
if(cljs.core._EQ_.call(null,sk,k)){
var _STAR_watch_active_STAR__orig_val__27588 = alandipert.storage_atom._STAR_watch_active_STAR_;
var _STAR_watch_active_STAR__temp_val__27589 = false;
(alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR__temp_val__27589);

try{return cljs.core.reset_BANG_.call(null,atom,(function (){var value = e.newValue;
if((!(clojure.string.blank_QMARK_.call(null,value)))){
return alandipert.storage_atom.json__GT_clj.call(null,value);
} else {
return default$;
}
})());
}finally {(alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR__orig_val__27588);
}} else {
return null;
}
} else {
return null;
}
}catch (e27587){var e__$1 = e27587;
return null;
}}
} else {
return null;
}
});
alandipert.storage_atom.link_storage = (function alandipert$storage_atom$link_storage(atom,storage,k){
var default$ = cljs.core.deref.call(null,atom);
return window.addEventListener("storage",(function (p1__27590_SHARP_){
return alandipert.storage_atom.maybe_update_backend.call(null,atom,storage,k,default$,p1__27590_SHARP_);
}));
});
/**
 * Create and dispatch a synthetic StorageEvent. Expects key to be a string.
 *   An empty key indicates that all storage is being cleared.
 */
alandipert.storage_atom.dispatch_remove_event_BANG_ = (function alandipert$storage_atom$dispatch_remove_event_BANG_(storage,key){
var event = document.createEvent("StorageEvent");
event.initStorageEvent("storage",false,false,key,null,null,window.location.href,storage);

window.dispatchEvent(event);

return null;
});
alandipert.storage_atom.load_html_storage = (function alandipert$storage_atom$load_html_storage(storage,k){
return alandipert.storage_atom._get.call(null,(new alandipert.storage_atom.StorageBackend(storage,k)),null);
});
alandipert.storage_atom.load_local_storage = (function alandipert$storage_atom$load_local_storage(k){
return alandipert.storage_atom.load_html_storage.call(null,localStorage,k);
});
alandipert.storage_atom.load_session_storage = (function alandipert$storage_atom$load_session_storage(k){
return alandipert.storage_atom.load_html_storage.call(null,sessionStorage,k);
});
alandipert.storage_atom.html_storage = (function alandipert$storage_atom$html_storage(atom,storage,k){
alandipert.storage_atom.link_storage.call(null,atom,storage,k);

return alandipert.storage_atom.store.call(null,atom,(new alandipert.storage_atom.StorageBackend(storage,k)));
});
alandipert.storage_atom.local_storage = (function alandipert$storage_atom$local_storage(atom,k){
return alandipert.storage_atom.html_storage.call(null,atom,localStorage,k);
});
alandipert.storage_atom.session_storage = (function alandipert$storage_atom$session_storage(atom,k){
return alandipert.storage_atom.html_storage.call(null,atom,sessionStorage,k);
});
/**
 * Clear storage and also trigger an event on the current window
 *   so its atoms will be cleared as well.
 */
alandipert.storage_atom.clear_html_storage_BANG_ = (function alandipert$storage_atom$clear_html_storage_BANG_(storage){
storage.clear();

return alandipert.storage_atom.dispatch_remove_event_BANG_.call(null,storage,"");
});
alandipert.storage_atom.clear_local_storage_BANG_ = (function alandipert$storage_atom$clear_local_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_.call(null,localStorage);
});
alandipert.storage_atom.clear_session_storage_BANG_ = (function alandipert$storage_atom$clear_session_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_.call(null,sessionStorage);
});
/**
 * Remove key from storage and also trigger an event on the current
 *   window so its atoms will be cleared as well.
 */
alandipert.storage_atom.remove_html_storage_BANG_ = (function alandipert$storage_atom$remove_html_storage_BANG_(storage,k){
var key = alandipert.storage_atom.clj__GT_json.call(null,k);
storage.removeItem(key);

return alandipert.storage_atom.dispatch_remove_event_BANG_.call(null,storage,key);
});
alandipert.storage_atom.remove_local_storage_BANG_ = (function alandipert$storage_atom$remove_local_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_.call(null,localStorage,k);
});
alandipert.storage_atom.remove_session_storage_BANG_ = (function alandipert$storage_atom$remove_session_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_.call(null,sessionStorage,k);
});
