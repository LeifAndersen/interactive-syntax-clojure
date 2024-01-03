// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
goog.require('goog.object');
goog.scope(function(){
oops.core.goog$module$goog$object = goog.module.get('goog.object');
});
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__29404 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__29404)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__29404)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__29404)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29404)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__29405 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__29405)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__29405)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__29405)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29405)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__22092__auto__ = [];
var len__22082__auto___29413 = arguments.length;
var i__22083__auto___29414 = (0);
while(true){
if((i__22083__auto___29414 < len__22082__auto___29413)){
args__22092__auto__.push((arguments[i__22083__auto___29414]));

var G__29415 = (i__22083__auto___29414 + (1));
i__22083__auto___29414 = G__29415;
continue;
} else {
}
break;
}

var argseq__22093__auto__ = ((((1) < args__22092__auto__.length))?(new cljs.core.IndexedSeq(args__22092__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22093__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__29408){
var vec__29409 = p__29408;
var info = cljs.core.nth.call(null,vec__29409,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__29412_29416 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__29412_29416)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__29412_29416)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__29412_29416)){
} else {
if(cljs.core._EQ_.call(null,null,G__29412_29416)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29412_29416)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq29406){
var G__29407 = cljs.core.first.call(null,seq29406);
var seq29406__$1 = cljs.core.next.call(null,seq29406);
var self__22067__auto__ = this;
return self__22067__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29407,seq29406__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.boolean_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__20748__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,oops.core.goog$module$goog$object.containsKey.call(null,obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__20748__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5722__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5722__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_29417 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_29417);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_29418 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_29418,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
}
}
} else {
return true;
}
} else {
return and__20748__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_29420 = oops.config.get_child_factory.call(null);
var child_factory_29420__$1 = (function (){var G__29421 = child_factory_29420;
var G__29421__$1 = (((G__29421 instanceof cljs.core.Keyword))?G__29421.fqn:null);
switch (G__29421__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_29420;

}
})();

var child_obj_29419 = child_factory_29420__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_29419);
} else {
}

return child_obj_29419;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_29425 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_29425);

return selector_path_29425;
} else {
var selector_path_29426 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_29426);

return selector_path_29426;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_29427 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_29427);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_29436 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29436,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29429 = (function (){var path_29428 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_29428,(0));

return path_29428;
})();
var len_29430 = path_29429.length;
var i_29431 = (0);
var obj_29432 = obj;
while(true){
if((i_29431 < len_29430)){
var mode_29433 = (path_29429[i_29431]);
var key_29434 = (path_29429[(i_29431 + (1))]);
var next_obj_29435 = oops.core.get_key_dynamically.call(null,obj_29432,key_29434,mode_29433);
var G__29437 = mode_29433;
switch (G__29437) {
case (0):
var G__29439 = (i_29431 + (2));
var G__29440 = next_obj_29435;
i_29431 = G__29439;
obj_29432 = G__29440;
continue;

break;
case (1):
if((!((next_obj_29435 == null)))){
var G__29441 = (i_29431 + (2));
var G__29442 = next_obj_29435;
i_29431 = G__29441;
obj_29432 = G__29442;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29435 == null)))){
var G__29443 = (i_29431 + (2));
var G__29444 = next_obj_29435;
i_29431 = G__29443;
obj_29432 = G__29444;
continue;
} else {
var G__29445 = (i_29431 + (2));
var G__29446 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29432,key_29434);
i_29431 = G__29445;
obj_29432 = G__29446;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29437)].join('')));

}
} else {
return obj_29432;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_29472 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29472,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29448 = (function (){var path_29447 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_29447,(0));

return path_29447;
})();
var len_29449 = path_29448.length;
if((len_29449 < (4))){
return [obj,(function (){var path_29451 = path_29448;
var len_29452 = path_29451.length;
var i_29453 = (0);
var obj_29454 = obj;
while(true){
if((i_29453 < len_29452)){
var mode_29455 = (path_29451[i_29453]);
var key_29456 = (path_29451[(i_29453 + (1))]);
var next_obj_29457 = oops.core.get_key_dynamically.call(null,obj_29454,key_29456,mode_29455);
var G__29473 = mode_29455;
switch (G__29473) {
case (0):
var G__29477 = (i_29453 + (2));
var G__29478 = next_obj_29457;
i_29453 = G__29477;
obj_29454 = G__29478;
continue;

break;
case (1):
if((!((next_obj_29457 == null)))){
var G__29479 = (i_29453 + (2));
var G__29480 = next_obj_29457;
i_29453 = G__29479;
obj_29454 = G__29480;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29457 == null)))){
var G__29481 = (i_29453 + (2));
var G__29482 = next_obj_29457;
i_29453 = G__29481;
obj_29454 = G__29482;
continue;
} else {
var G__29483 = (i_29453 + (2));
var G__29484 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29454,key_29456);
i_29453 = G__29483;
obj_29454 = G__29484;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29473)].join('')));

}
} else {
return obj_29454;
}
break;
}
})()];
} else {
var target_obj_29450 = (function (){var path_29458 = path_29448.slice((0),(len_29449 - (2)));
var len_29459 = path_29458.length;
var i_29460 = (0);
var obj_29461 = obj;
while(true){
if((i_29460 < len_29459)){
var mode_29462 = (path_29458[i_29460]);
var key_29463 = (path_29458[(i_29460 + (1))]);
var next_obj_29464 = oops.core.get_key_dynamically.call(null,obj_29461,key_29463,mode_29462);
var G__29474 = mode_29462;
switch (G__29474) {
case (0):
var G__29486 = (i_29460 + (2));
var G__29487 = next_obj_29464;
i_29460 = G__29486;
obj_29461 = G__29487;
continue;

break;
case (1):
if((!((next_obj_29464 == null)))){
var G__29488 = (i_29460 + (2));
var G__29489 = next_obj_29464;
i_29460 = G__29488;
obj_29461 = G__29489;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29464 == null)))){
var G__29490 = (i_29460 + (2));
var G__29491 = next_obj_29464;
i_29460 = G__29490;
obj_29461 = G__29491;
continue;
} else {
var G__29492 = (i_29460 + (2));
var G__29493 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29461,key_29463);
i_29460 = G__29492;
obj_29461 = G__29493;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29474)].join('')));

}
} else {
return obj_29461;
}
break;
}
})();
return [target_obj_29450,(function (){var path_29465 = [(path_29448[(len_29449 - (2))]),(path_29448[(len_29449 - (1))])];
var len_29466 = path_29465.length;
var i_29467 = (0);
var obj_29468 = target_obj_29450;
while(true){
if((i_29467 < len_29466)){
var mode_29469 = (path_29465[i_29467]);
var key_29470 = (path_29465[(i_29467 + (1))]);
var next_obj_29471 = oops.core.get_key_dynamically.call(null,obj_29468,key_29470,mode_29469);
var G__29475 = mode_29469;
switch (G__29475) {
case (0):
var G__29495 = (i_29467 + (2));
var G__29496 = next_obj_29471;
i_29467 = G__29495;
obj_29468 = G__29496;
continue;

break;
case (1):
if((!((next_obj_29471 == null)))){
var G__29497 = (i_29467 + (2));
var G__29498 = next_obj_29471;
i_29467 = G__29497;
obj_29468 = G__29498;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29471 == null)))){
var G__29499 = (i_29467 + (2));
var G__29500 = next_obj_29471;
i_29467 = G__29499;
obj_29468 = G__29500;
continue;
} else {
var G__29501 = (i_29467 + (2));
var G__29502 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29468,key_29470);
i_29467 = G__29501;
obj_29468 = G__29502;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29475)].join('')));

}
} else {
return obj_29468;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_29517 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29517,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29504 = (function (){var path_29503 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_29503,(1));

return path_29503;
})();
var len_29507 = path_29504.length;
var parent_obj_path_29508 = path_29504.slice((0),(len_29507 - (2)));
var key_29505 = (path_29504[(len_29507 - (1))]);
var mode_29506 = (path_29504[(len_29507 - (2))]);
var parent_obj_29509 = (function (){var path_29510 = parent_obj_path_29508;
var len_29511 = path_29510.length;
var i_29512 = (0);
var obj_29513 = obj;
while(true){
if((i_29512 < len_29511)){
var mode_29514 = (path_29510[i_29512]);
var key_29515 = (path_29510[(i_29512 + (1))]);
var next_obj_29516 = oops.core.get_key_dynamically.call(null,obj_29513,key_29515,mode_29514);
var G__29518 = mode_29514;
switch (G__29518) {
case (0):
var G__29520 = (i_29512 + (2));
var G__29521 = next_obj_29516;
i_29512 = G__29520;
obj_29513 = G__29521;
continue;

break;
case (1):
if((!((next_obj_29516 == null)))){
var G__29522 = (i_29512 + (2));
var G__29523 = next_obj_29516;
i_29512 = G__29522;
obj_29513 = G__29523;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29516 == null)))){
var G__29524 = (i_29512 + (2));
var G__29525 = next_obj_29516;
i_29512 = G__29524;
obj_29513 = G__29525;
continue;
} else {
var G__29526 = (i_29512 + (2));
var G__29527 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29513,key_29515);
i_29512 = G__29526;
obj_29513 = G__29527;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29518)].join('')));

}
} else {
return obj_29513;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_29509,key_29505,val,mode_29506);
} else {
return null;
}
});
