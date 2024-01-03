// Compiled by ClojureScript 1.11.99 {:target :nodejs, :nodejs-rt false, :language-out :ecmascript-next, :optimizations :simple}
goog.provide('interactive_syntax.db');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.spec.alpha');
goog.require('cognitect.transit');
goog.require('alandipert.storage_atom');
goog.require('interactive_syntax.utils');
goog.require('oops.core');
goog.require('interactive_syntax.editor');
interactive_syntax.db.node$module$isomorphic_git = require('isomorphic-git');
interactive_syntax.db.node$module$isomorphic_git$http$web = require('isomorphic-git/http/web');
interactive_syntax.db.node$module$browserfs = require('browserfs');
interactive_syntax.db.package$ = cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),"{\n  \"name\": \"interactive-syntax\",\n  \"version\": \"0.2.5\",\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"git+https://github.com/LeifAndersen/interactive-syntax-clojure.git\"\n  },\n  \"author\": \"Leif Andersen\",\n  \"license\": \"Apache-2.0\",\n  \"bugs\": {\n    \"url\": \"https://github.com/LeifAndersen/interactive-syntax-clojure/issues\"\n  },\n  \"homepage\": \"https://visr.pl\",\n  \"devDependencies\": {\n    \"@testing-library/react\": \"^14.0.0\",\n    \"@testing-library/user-event\": \"^14.4.3\",\n    \"css-loader\": \"^5.2.4\",\n    \"file-loader\": \"^6.2.0\",\n    \"git-http-mock-server\": \"^2.0.0\",\n    \"html-loader\": \"^4.2.0\",\n    \"patch-package\": \"^6.5.1\",\n    \"source-map-loader\": \"^3.0.0\",\n    \"style-loader\": \"^2.0.0\",\n    \"webpack\": \"^5.47.1\",\n    \"webpack-cli\": \"^4.7.2\",\n    \"worker-loader\": \"^3.0.8\"\n  },\n  \"dependencies\": {\n    \"@babel/core\": \"^7.13.10\",\n    \"@babel/parser\": \"^7.13.11\",\n    \"@babel/template\": \"^7.12.13\",\n    \"@babel/types\": \"^7.16.7\",\n    \"@cljs-oss/module-deps\": \"^1.1.1\",\n    \"@reduxjs/toolkit\": \"^1.7.2\",\n    \"@stopify/continuations\": \"^0.7.5\",\n    \"@stopify/continuations-runtime\": \"^0.7.3\",\n    \"@stopify/higher-order-functions\": \"^0.7.3\",\n    \"@stopify/hygiene\": \"^0.7.4\",\n    \"@stopify/stopify\": \"npm:@leifandersen/stopify-tweak@^0.7.5-2\",\n    \"@stopify/util\": \"^0.7.3\",\n    \"assert\": \"^1.5.0\",\n    \"bootstrap\": \"^5.0.2\",\n    \"browserfs\": \"^1.4.3\",\n    \"chonky\": \"^2.3.2\",\n    \"chonky-icon-fontawesome\": \"^2.3.2\",\n    \"codemirror\": \"^5.58.3\",\n    \"crypto-browserify\": \"^3.12.0\",\n    \"file-saver\": \"^2.0.5\",\n    \"highlight.js\": \"^10.4.1\",\n    \"isomorphic-git\": \"^1.10.0\",\n    \"jszip\": \"^3.7.1\",\n    \"popper.js\": \"^1.16.1\",\n    \"react\": \"^18.2.0\",\n    \"react-bootstrap\": \"^2.0.0-beta.4\",\n    \"react-codemirror2\": \"^7.2.1\",\n    \"react-dnd\": \"^14.0.2\",\n    \"react-dnd-html5-backend\": \"^14.0.0\",\n    \"react-dom\": \"^18.2.0\",\n    \"react-frame-component\": \"^5.2.6\",\n    \"react-hotkeys\": \"^2.0.0\",\n    \"react-resize-detector\": \"^9.1.0\",\n    \"react-split-pane\": \"^2.0.3\",\n    \"react-switch\": \"^7.0.0\",\n    \"react-testing-library\": \"^8.0.1\",\n    \"react-to-print\": \"^2.14.12\",\n    \"stream-browserify\": \"^2.0.2\",\n    \"styled-components\": \"^4.4.1\",\n    \"systemjs\": \"^6.12.6\",\n    \"tty-browserify\": \"*\",\n    \"util\": \"^0.11.1\"\n  },\n  \"scripts\": {\n    \"postinstall\": \"patch-package\",\n    \"fig\": \"clojure -M:fig\"\n  },\n  \"overrides\": {\n    \"react\": \"$react\"\n  }\n}\n");
interactive_syntax.db.version_short = cljs.core.get.call(null,interactive_syntax.db.package$,"version");
interactive_syntax.db.version = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(interactive_syntax.db.version_short),"-SNAPSHOT-","Wed Jan  3 03:15:29 UTC 2024\n"].join('');
interactive_syntax.db.files_root = "/files";
interactive_syntax.db.deps_root = "/deps";
interactive_syntax.db.git_root = interactive_syntax.db.files_root;
interactive_syntax.db.prompt = "> ";
interactive_syntax.db.end_prompt = "<EOF>";
interactive_syntax.db.shop_url = "https://raw.githubusercontent.com/LeifAndersen/visr-deps/main/";
interactive_syntax.db.Buffer = interactive_syntax.db.node$module$browserfs.BFSRequire("buffer").Buffer;

/**
* @constructor
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
interactive_syntax.db.RefAtom = (function (ref){
this.ref = ref;
this.cljs$lang$protocol_mask$partition1$ = 114688;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(interactive_syntax.db.RefAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ref.current;
}));

(interactive_syntax.db.RefAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
return (self__.ref.current = new_value);
}));

(interactive_syntax.db.RefAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return (self__.ref.current = f.call(null,self__.ref.current));
}));

(interactive_syntax.db.RefAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (_,f,a){
var self__ = this;
var ___$1 = this;
return (self__.ref.current = f.call(null,self__.ref.current,a));
}));

(interactive_syntax.db.RefAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,a,b){
var self__ = this;
var ___$1 = this;
return (self__.ref.current = f.call(null,self__.ref.current,a,b));
}));

(interactive_syntax.db.RefAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,a,b,more){
var self__ = this;
var ___$1 = this;
return (self__.ref.current = cljs.core.apply.call(null,f,self__.ref.current,a,b,more));
}));

(interactive_syntax.db.RefAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ref","ref",-1364538802,null)], null);
}));

(interactive_syntax.db.RefAtom.cljs$lang$type = true);

(interactive_syntax.db.RefAtom.cljs$lang$ctorStr = "interactive-syntax.db/RefAtom");

(interactive_syntax.db.RefAtom.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"interactive-syntax.db/RefAtom");
}));

/**
 * Positional factory function for interactive-syntax.db/RefAtom.
 */
interactive_syntax.db.__GT_RefAtom = (function interactive_syntax$db$__GT_RefAtom(ref){
return (new interactive_syntax.db.RefAtom(ref));
});

interactive_syntax.db.resolve_path = (function interactive_syntax$db$resolve_path(path,db){
return cljs.core.mapcat.call(null,(function (x){
var G__29636 = x;
var G__29636__$1 = (((G__29636 instanceof cljs.core.Keyword))?G__29636.fqn:null);
switch (G__29636__$1) {
case "current":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603)], null))], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}),path);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
interactive_syntax.db.DBAtom = (function (db,path){
this.db = db;
this.path = path;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2147516416;
});
(interactive_syntax.db.DBAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.db),interactive_syntax.db.resolve_path.call(null,self__.path,cljs.core.deref.call(null,self__.db)));
}));

(interactive_syntax.db.DBAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.db,(function (d){
return cljs.core.assoc_in.call(null,d,interactive_syntax.db.resolve_path.call(null,self__.path,d),new_value);
}));
}));

(interactive_syntax.db.DBAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.db,(function (p1__29638_SHARP_){
return cljs.core.update_in.call(null,p1__29638_SHARP_,interactive_syntax.db.resolve_path.call(null,self__.path,p1__29638_SHARP_),f);
}));
}));

(interactive_syntax.db.DBAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (_,f,a){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.db,(function (p1__29639_SHARP_){
return cljs.core.update_in.call(null,p1__29639_SHARP_,interactive_syntax.db.resolve_path.call(null,self__.path,p1__29639_SHARP_),f,a);
}));
}));

(interactive_syntax.db.DBAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,a,b){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.db,(function (p1__29640_SHARP_){
return cljs.core.update_in.call(null,p1__29640_SHARP_,interactive_syntax.db.resolve_path.call(null,self__.path,p1__29640_SHARP_),f,a,b);
}));
}));

(interactive_syntax.db.DBAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,a,b,more){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.db,(function (p1__29641_SHARP_){
return cljs.core.apply.call(null,cljs.core.update_in,p1__29641_SHARP_,interactive_syntax.db.resolve_path.call(null,self__.path,p1__29641_SHARP_),a,b,more);
}));
}));

(interactive_syntax.db.DBAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(interactive_syntax.db.DBAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,key], null),(function (k,r,o,n){
var old = cljs.core.get_in.call(null,o,interactive_syntax.db.resolve_path.call(null,self__.path,o));
var new$ = cljs.core.get_in.call(null,n,interactive_syntax.db.resolve_path.call(null,self__.path,n));
return f.call(null,k,r,old,new$);
}));
}));

(interactive_syntax.db.DBAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core.remove_watch.call(null,self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,key], null));
}));

(interactive_syntax.db.DBAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
var p = interactive_syntax.db.resolve_path.call(null,self__.path,cljs.core.deref.call(null,self__.db));
cljs.core._write.call(null,writer,"#object[interactive-syntax.db.DBAtom {");

cljs.core.pr_writer.call(null,p,writer,opts);

cljs.core._write.call(null,writer,", ");

cljs.core.pr_writer.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.db),p),writer,opts);

return cljs.core._write.call(null,writer,"}]");
}));

(interactive_syntax.db.DBAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(interactive_syntax.db.DBAtom.cljs$lang$type = true);

(interactive_syntax.db.DBAtom.cljs$lang$ctorStr = "interactive-syntax.db/DBAtom");

(interactive_syntax.db.DBAtom.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"interactive-syntax.db/DBAtom");
}));

/**
 * Positional factory function for interactive-syntax.db/DBAtom.
 */
interactive_syntax.db.__GT_DBAtom = (function interactive_syntax$db$__GT_DBAtom(db,path){
return (new interactive_syntax.db.DBAtom(db,path));
});


/**
* @constructor
 * @implements {interactive_syntax.db.Object}
*/
interactive_syntax.db.FunctionHandler = (function (){
});
(interactive_syntax.db.FunctionHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "map";
}));

(interactive_syntax.db.FunctionHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
var xs = clojure.string.split.call(null,v.name,/\$/);
var name = cljs.core.last.call(null,xs);
var ns = clojure.string.join.call(null,".",cljs.core.butlast.call(null,xs));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),[ns,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"display-name","display-name",694513143),name,new cljs.core.Keyword(null,"type","type",1174270348),"js/Function",new cljs.core.Keyword(null,"fn?","fn?",180459291),true,new cljs.core.Keyword(null,"string","string",-1989541586),v.toString()], null);
}));

(interactive_syntax.db.FunctionHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return null;
}));

(interactive_syntax.db.FunctionHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(interactive_syntax.db.FunctionHandler.cljs$lang$type = true);

(interactive_syntax.db.FunctionHandler.cljs$lang$ctorStr = "interactive-syntax.db/FunctionHandler");

(interactive_syntax.db.FunctionHandler.cljs$lang$ctorPrWriter = (function (this__21431__auto__,writer__21432__auto__,opt__21433__auto__){
return cljs.core._write.call(null,writer__21432__auto__,"interactive-syntax.db/FunctionHandler");
}));

/**
 * Positional factory function for interactive-syntax.db/FunctionHandler.
 */
interactive_syntax.db.__GT_FunctionHandler = (function interactive_syntax$db$__GT_FunctionHandler(){
return (new interactive_syntax.db.FunctionHandler());
});

cljs.core.swap_BANG_.call(null,alandipert.storage_atom.transit_write_handlers,cljs.core.assoc,Function,(new interactive_syntax.db.FunctionHandler()));
interactive_syntax.db.git_init = (function interactive_syntax$db$git_init(p__29642,cb){
var map__29643 = p__29642;
var map__29643__$1 = cljs.core.__destructure_map.call(null,map__29643);
var db = map__29643__$1;
var fs = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
return cb.call(null);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","orientation","interactive-syntax.db/orientation",444635781),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"horizontal"),new cljs.core.Keyword(null,"vertical","vertical",718696748),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"vertical")),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"vertical","vertical",718696748)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"horizontal"),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"vertical")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,cljs.core._EQ_,"horizontal"),cljs.core.partial.call(null,cljs.core._EQ_,"vertical")], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","keymap","interactive-syntax.db/keymap",772701862),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"sublime","sublime",150717765),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"sublime"),new cljs.core.Keyword(null,"emacs","emacs",827504284),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"emacs"),new cljs.core.Keyword(null,"vim","vim",764723904),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"vim"),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),false)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sublime","sublime",150717765),new cljs.core.Keyword(null,"emacs","emacs",827504284),new cljs.core.Keyword(null,"vim","vim",764723904),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"sublime"),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"emacs"),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"vim"),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),false)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,cljs.core._EQ_,"sublime"),cljs.core.partial.call(null,cljs.core._EQ_,"emacs"),cljs.core.partial.call(null,cljs.core._EQ_,"vim"),cljs.core.partial.call(null,cljs.core._EQ_,false)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","tab-behavior","interactive-syntax.db/tab-behavior",-756508700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"tab","tab",-559583621),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"tab"),new cljs.core.Keyword(null,"insert","insert",1286475395),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"insert"),new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"auto")),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"tab"),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"insert"),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),"auto")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,cljs.core._EQ_,"tab"),cljs.core.partial.call(null,cljs.core._EQ_,"insert"),cljs.core.partial.call(null,cljs.core._EQ_,"auto")], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","font-size","interactive-syntax.db/font-size",-1035966140),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","theme","interactive-syntax.db/theme",1828992782),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","line-wrapping","interactive-syntax.db/line-wrapping",1885200335),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","line-numbers","interactive-syntax.db/line-numbers",-227127833),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","enable-drag-and-drop","interactive-syntax.db/enable-drag-and-drop",-1391271906),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","show-editors","interactive-syntax.db/show-editors",1343148927),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","run-functions","interactive-syntax.db/run-functions",598847831),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","autocomplete","interactive-syntax.db/autocomplete",-197635497),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","insert-close","interactive-syntax.db/insert-close",-939551547),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","visr-defaults","interactive-syntax.db/visr-defaults",-54468798),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-visr","show-visr",1978675213),new cljs.core.Keyword(null,"show-code","show-code",867098788)], null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-visr","show-visr",1978675213),new cljs.core.Keyword(null,"show-code","show-code",867098788)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-visr","show-visr",1978675213),new cljs.core.Keyword(null,"show-code","show-code",867098788)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__29644){
return cljs.core.coll_QMARK_.call(null,G__29644);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-visr","show-visr",1978675213),new cljs.core.Keyword(null,"show-code","show-code",867098788)], null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","sandbox","interactive-syntax.db/sandbox",900213964),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","options","interactive-syntax.db/options",-867566693),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","font-size","interactive-syntax.db/font-size",-1035966140),new cljs.core.Keyword("interactive-syntax.db","theme","interactive-syntax.db/theme",1828992782),new cljs.core.Keyword("interactive-syntax.db","line-wrapping","interactive-syntax.db/line-wrapping",1885200335),new cljs.core.Keyword("interactive-syntax.db","line-numbers","interactive-syntax.db/line-numbers",-227127833),new cljs.core.Keyword("interactive-syntax.db","enable-drag-and-drop","interactive-syntax.db/enable-drag-and-drop",-1391271906),new cljs.core.Keyword("interactive-syntax.db","show-editors","interactive-syntax.db/show-editors",1343148927),new cljs.core.Keyword("interactive-syntax.db","run-functions","interactive-syntax.db/run-functions",598847831),new cljs.core.Keyword("interactive-syntax.db","autocomplete","interactive-syntax.db/autocomplete",-197635497),new cljs.core.Keyword("interactive-syntax.db","insert-close","interactive-syntax.db/insert-close",-939551547),new cljs.core.Keyword("interactive-syntax.db","visr-defaults","interactive-syntax.db/visr-defaults",-54468798),new cljs.core.Keyword("interactive-syntax.db","sandbox","interactive-syntax.db/sandbox",900213964)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","font-size","interactive-syntax.db/font-size",-1035966140),new cljs.core.Keyword("interactive-syntax.db","theme","interactive-syntax.db/theme",1828992782),new cljs.core.Keyword("interactive-syntax.db","line-wrapping","interactive-syntax.db/line-wrapping",1885200335),new cljs.core.Keyword("interactive-syntax.db","line-numbers","interactive-syntax.db/line-numbers",-227127833),new cljs.core.Keyword("interactive-syntax.db","enable-drag-and-drop","interactive-syntax.db/enable-drag-and-drop",-1391271906),new cljs.core.Keyword("interactive-syntax.db","show-editors","interactive-syntax.db/show-editors",1343148927),new cljs.core.Keyword("interactive-syntax.db","run-functions","interactive-syntax.db/run-functions",598847831),new cljs.core.Keyword("interactive-syntax.db","autocomplete","interactive-syntax.db/autocomplete",-197635497),new cljs.core.Keyword("interactive-syntax.db","insert-close","interactive-syntax.db/insert-close",-939551547),new cljs.core.Keyword("interactive-syntax.db","visr-defaults","interactive-syntax.db/visr-defaults",-54468798),new cljs.core.Keyword("interactive-syntax.db","sandbox","interactive-syntax.db/sandbox",900213964)], null),null,null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29645){
return cljs.core.map_QMARK_.call(null,G__29645);
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"theme","theme",-1247880880));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"line-wrapping","line-wrapping",919045521));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"enable-drag-and-drop","enable-drag-and-drop",-675808412));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"show-editors","show-editors",-2067467327));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"run-functions","run-functions",2017743505));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"insert-close","insert-close",-19537789));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"visr-defaults","visr-defaults",1116635776));
}),(function (G__29645){
return cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402));
})], null),(function (G__29645){
return ((cljs.core.map_QMARK_.call(null,G__29645)) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"font-size","font-size",-1847940346))) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"theme","theme",-1247880880))) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"line-wrapping","line-wrapping",919045521))) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237))) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"enable-drag-and-drop","enable-drag-and-drop",-675808412))) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"show-editors","show-editors",-2067467327))) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"run-functions","run-functions",2017743505))) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913))) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"insert-close","insert-close",-19537789))) && (((cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"visr-defaults","visr-defaults",1116635776))) && (cljs.core.contains_QMARK_.call(null,G__29645,new cljs.core.Keyword(null,"sandbox","sandbox",-54636402))))))))))))))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","font-size","interactive-syntax.db/font-size",-1035966140),new cljs.core.Keyword("interactive-syntax.db","theme","interactive-syntax.db/theme",1828992782),new cljs.core.Keyword("interactive-syntax.db","line-wrapping","interactive-syntax.db/line-wrapping",1885200335),new cljs.core.Keyword("interactive-syntax.db","line-numbers","interactive-syntax.db/line-numbers",-227127833),new cljs.core.Keyword("interactive-syntax.db","enable-drag-and-drop","interactive-syntax.db/enable-drag-and-drop",-1391271906),new cljs.core.Keyword("interactive-syntax.db","show-editors","interactive-syntax.db/show-editors",1343148927),new cljs.core.Keyword("interactive-syntax.db","run-functions","interactive-syntax.db/run-functions",598847831),new cljs.core.Keyword("interactive-syntax.db","autocomplete","interactive-syntax.db/autocomplete",-197635497),new cljs.core.Keyword("interactive-syntax.db","insert-close","interactive-syntax.db/insert-close",-939551547),new cljs.core.Keyword("interactive-syntax.db","visr-defaults","interactive-syntax.db/visr-defaults",-54468798),new cljs.core.Keyword("interactive-syntax.db","sandbox","interactive-syntax.db/sandbox",900213964)], null),null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"line-wrapping","line-wrapping",919045521),new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237),new cljs.core.Keyword(null,"enable-drag-and-drop","enable-drag-and-drop",-675808412),new cljs.core.Keyword(null,"show-editors","show-editors",-2067467327),new cljs.core.Keyword(null,"run-functions","run-functions",2017743505),new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913),new cljs.core.Keyword(null,"insert-close","insert-close",-19537789),new cljs.core.Keyword(null,"visr-defaults","visr-defaults",1116635776),new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"theme","theme",-1247880880))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"line-wrapping","line-wrapping",919045521))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"enable-drag-and-drop","enable-drag-and-drop",-675808412))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"show-editors","show-editors",-2067467327))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"run-functions","run-functions",2017743505))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"insert-close","insert-close",-19537789))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"visr-defaults","visr-defaults",1116635776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","auth","interactive-syntax.db/auth",463397104),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.coll_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__29646){
return cljs.core.map_QMARK_.call(null,G__29646);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__28298__auto__,v__28299__auto__){
return cljs.core.nth.call(null,v__28299__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","name","interactive-syntax.db/name",-1350722197),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","version","interactive-syntax.db/version",-1055697316),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","url","interactive-syntax.db/url",-886713580),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","sandbox","interactive-syntax.db/sandbox",900213964),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","code","interactive-syntax.db/code",661832664),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","dep","interactive-syntax.db/dep",1073402928),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","name","interactive-syntax.db/name",-1350722197),new cljs.core.Keyword("interactive-syntax.db","version","interactive-syntax.db/version",-1055697316),new cljs.core.Keyword("interactive-syntax.db","url","interactive-syntax.db/url",-886713580),new cljs.core.Keyword("interactive-syntax.db","sandbox","interactive-syntax.db/sandbox",900213964),new cljs.core.Keyword("interactive-syntax.db","load?","interactive-syntax.db/load?",1881978734)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","name","interactive-syntax.db/name",-1350722197),new cljs.core.Keyword("interactive-syntax.db","version","interactive-syntax.db/version",-1055697316),new cljs.core.Keyword("interactive-syntax.db","url","interactive-syntax.db/url",-886713580),new cljs.core.Keyword("interactive-syntax.db","sandbox","interactive-syntax.db/sandbox",900213964),new cljs.core.Keyword("interactive-syntax.db","load?","interactive-syntax.db/load?",1881978734)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29647){
return cljs.core.map_QMARK_.call(null,G__29647);
})], null),(function (G__29647){
return cljs.core.map_QMARK_.call(null,G__29647);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),new cljs.core.Keyword(null,"load?","load?",628806320)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","name","interactive-syntax.db/name",-1350722197),new cljs.core.Keyword("interactive-syntax.db","version","interactive-syntax.db/version",-1055697316),new cljs.core.Keyword("interactive-syntax.db","url","interactive-syntax.db/url",-886713580),new cljs.core.Keyword("interactive-syntax.db","sandbox","interactive-syntax.db/sandbox",900213964),new cljs.core.Keyword("interactive-syntax.db","load?","interactive-syntax.db/load?",1881978734)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","deps","interactive-syntax.db/deps",-2095320831),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword("interactive-syntax.db","dep","interactive-syntax.db/dep",1073402928)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Keyword("interactive-syntax.db","dep","interactive-syntax.db/dep",1073402928)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword("interactive-syntax.db","dep","interactive-syntax.db/dep",1073402928)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,new cljs.core.Keyword("interactive-syntax.db","dep","interactive-syntax.db/dep",1073402928)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__29648){
return cljs.core.map_QMARK_.call(null,G__29648);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__28298__auto__,v__28299__auto__){
return cljs.core.nth.call(null,v__28299__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword("interactive-syntax.db","dep","interactive-syntax.db/dep",1073402928))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","compiler","interactive-syntax.db/compiler",616506999),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","runner","interactive-syntax.db/runner",-1180487082),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","running?","interactive-syntax.db/running?",-1229064089),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","input","interactive-syntax.db/input",2053375479),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","output","interactive-syntax.db/output",1723570639),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","folder","interactive-syntax.db/folder",372303306),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","file","interactive-syntax.db/file",-75156720),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","changed?","interactive-syntax.db/changed?",-1129748452),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","split","interactive-syntax.db/split",-1831111852),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","ns","interactive-syntax.db/ns",-1461449118),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","repl","interactive-syntax.db/repl",1111343415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","mode","interactive-syntax.db/mode",-178619479),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","buffer","interactive-syntax.db/buffer",1987906332),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","input","interactive-syntax.db/input",2053375479),new cljs.core.Keyword("interactive-syntax.db","output","interactive-syntax.db/output",1723570639),new cljs.core.Keyword("interactive-syntax.db","folder","interactive-syntax.db/folder",372303306),new cljs.core.Keyword("interactive-syntax.db","file","interactive-syntax.db/file",-75156720),new cljs.core.Keyword("interactive-syntax.db","changed?","interactive-syntax.db/changed?",-1129748452),new cljs.core.Keyword("interactive-syntax.db","split","interactive-syntax.db/split",-1831111852),new cljs.core.Keyword("interactive-syntax.db","ns","interactive-syntax.db/ns",-1461449118),new cljs.core.Keyword("interactive-syntax.db","mode","interactive-syntax.db/mode",-178619479),new cljs.core.Keyword("interactive-syntax.db","repl","interactive-syntax.db/repl",1111343415),new cljs.core.Keyword("interactive-syntax.db","app-pane","interactive-syntax.db/app-pane",1268965743)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","input","interactive-syntax.db/input",2053375479),new cljs.core.Keyword("interactive-syntax.db","output","interactive-syntax.db/output",1723570639),new cljs.core.Keyword("interactive-syntax.db","folder","interactive-syntax.db/folder",372303306),new cljs.core.Keyword("interactive-syntax.db","file","interactive-syntax.db/file",-75156720),new cljs.core.Keyword("interactive-syntax.db","changed?","interactive-syntax.db/changed?",-1129748452),new cljs.core.Keyword("interactive-syntax.db","split","interactive-syntax.db/split",-1831111852),new cljs.core.Keyword("interactive-syntax.db","ns","interactive-syntax.db/ns",-1461449118),new cljs.core.Keyword("interactive-syntax.db","mode","interactive-syntax.db/mode",-178619479),new cljs.core.Keyword("interactive-syntax.db","repl","interactive-syntax.db/repl",1111343415),new cljs.core.Keyword("interactive-syntax.db","app-pane","interactive-syntax.db/app-pane",1268965743)], null),null,null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29649){
return cljs.core.map_QMARK_.call(null,G__29649);
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"input","input",556931961));
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"output","output",-1105869043));
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"folder","folder",1515881736));
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"file","file",-1269645878));
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"split","split",-599435118));
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"ns","ns",441598760));
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"mode","mode",654403691));
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"repl","repl",-35398667));
}),(function (G__29649){
return cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"app-pane","app-pane",45757101));
})], null),(function (G__29649){
return ((cljs.core.map_QMARK_.call(null,G__29649)) && (((cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"input","input",556931961))) && (((cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"output","output",-1105869043))) && (((cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"folder","folder",1515881736))) && (((cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"file","file",-1269645878))) && (((cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"changed?","changed?",-437828330))) && (((cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"split","split",-599435118))) && (((cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"ns","ns",441598760))) && (((cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"mode","mode",654403691))) && (((cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"repl","repl",-35398667))) && (cljs.core.contains_QMARK_.call(null,G__29649,new cljs.core.Keyword(null,"app-pane","app-pane",45757101))))))))))))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","input","interactive-syntax.db/input",2053375479),new cljs.core.Keyword("interactive-syntax.db","output","interactive-syntax.db/output",1723570639),new cljs.core.Keyword("interactive-syntax.db","folder","interactive-syntax.db/folder",372303306),new cljs.core.Keyword("interactive-syntax.db","file","interactive-syntax.db/file",-75156720),new cljs.core.Keyword("interactive-syntax.db","changed?","interactive-syntax.db/changed?",-1129748452),new cljs.core.Keyword("interactive-syntax.db","split","interactive-syntax.db/split",-1831111852),new cljs.core.Keyword("interactive-syntax.db","ns","interactive-syntax.db/ns",-1461449118),new cljs.core.Keyword("interactive-syntax.db","mode","interactive-syntax.db/mode",-178619479),new cljs.core.Keyword("interactive-syntax.db","repl","interactive-syntax.db/repl",1111343415),new cljs.core.Keyword("interactive-syntax.db","app-pane","interactive-syntax.db/app-pane",1268965743)], null),null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"changed?","changed?",-437828330),new cljs.core.Keyword(null,"split","split",-599435118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"app-pane","app-pane",45757101)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"input","input",556931961))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"output","output",-1105869043))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"folder","folder",1515881736))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"file","file",-1269645878))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"changed?","changed?",-437828330))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"split","split",-599435118))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ns","ns",441598760))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"mode","mode",654403691))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"repl","repl",-35398667))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"app-pane","app-pane",45757101)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","buffers","interactive-syntax.db/buffers",-722271214),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("interactive-syntax.db","buffer","interactive-syntax.db/buffer",1987906332)),cljs.spec.alpha.rep_PLUS_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","buffer","interactive-syntax.db/buffer",1987906332),new cljs.core.Keyword("interactive-syntax.db","buffer","interactive-syntax.db/buffer",1987906332)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","current","interactive-syntax.db/current",495680631),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","menu","interactive-syntax.db/menu",1515511452),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","fs","interactive-syntax.db/fs",-896755686),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("interactive-syntax.db","database","interactive-syntax.db/database",915184657),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","version","interactive-syntax.db/version",-1055697316),new cljs.core.Keyword("interactive-syntax.db","fs","interactive-syntax.db/fs",-896755686),new cljs.core.Keyword("interactive-syntax.db","folder","interactive-syntax.db/folder",372303306),new cljs.core.Keyword("interactive-syntax.db","buffers","interactive-syntax.db/buffers",-722271214),new cljs.core.Keyword("interactive-syntax.db","current","interactive-syntax.db/current",495680631),new cljs.core.Keyword("interactive-syntax.db","options","interactive-syntax.db/options",-867566693),new cljs.core.Keyword("interactive-syntax.db","deps","interactive-syntax.db/deps",-2095320831),new cljs.core.Keyword("interactive-syntax.db","menu","interactive-syntax.db/menu",1515511452),new cljs.core.Keyword("interactive-syntax.db","cache","interactive-syntax.db/cache",-319923336),new cljs.core.Keyword("interactive-syntax.db","auth","interactive-syntax.db/auth",463397104)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","version","interactive-syntax.db/version",-1055697316),new cljs.core.Keyword("interactive-syntax.db","fs","interactive-syntax.db/fs",-896755686),new cljs.core.Keyword("interactive-syntax.db","folder","interactive-syntax.db/folder",372303306),new cljs.core.Keyword("interactive-syntax.db","buffers","interactive-syntax.db/buffers",-722271214),new cljs.core.Keyword("interactive-syntax.db","current","interactive-syntax.db/current",495680631),new cljs.core.Keyword("interactive-syntax.db","options","interactive-syntax.db/options",-867566693),new cljs.core.Keyword("interactive-syntax.db","deps","interactive-syntax.db/deps",-2095320831),new cljs.core.Keyword("interactive-syntax.db","menu","interactive-syntax.db/menu",1515511452),new cljs.core.Keyword("interactive-syntax.db","cache","interactive-syntax.db/cache",-319923336),new cljs.core.Keyword("interactive-syntax.db","auth","interactive-syntax.db/auth",463397104)], null),null,null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29650){
return cljs.core.map_QMARK_.call(null,G__29650);
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"version","version",425292698));
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"fs","fs",-2122926244));
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"folder","folder",1515881736));
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"buffers","buffers",471409492));
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"current","current",-1088038603));
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"options","options",99638489));
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"deps","deps",1883360319));
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"menu","menu",352255198));
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"cache","cache",-1237023054));
}),(function (G__29650){
return cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"auth","auth",1389754926));
})], null),(function (G__29650){
return ((cljs.core.map_QMARK_.call(null,G__29650)) && (((cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"version","version",425292698))) && (((cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"fs","fs",-2122926244))) && (((cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"folder","folder",1515881736))) && (((cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"buffers","buffers",471409492))) && (((cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"current","current",-1088038603))) && (((cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"options","options",99638489))) && (((cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"deps","deps",1883360319))) && (((cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"menu","menu",352255198))) && (((cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"cache","cache",-1237023054))) && (cljs.core.contains_QMARK_.call(null,G__29650,new cljs.core.Keyword(null,"auth","auth",1389754926))))))))))))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("interactive-syntax.db","version","interactive-syntax.db/version",-1055697316),new cljs.core.Keyword("interactive-syntax.db","fs","interactive-syntax.db/fs",-896755686),new cljs.core.Keyword("interactive-syntax.db","folder","interactive-syntax.db/folder",372303306),new cljs.core.Keyword("interactive-syntax.db","buffers","interactive-syntax.db/buffers",-722271214),new cljs.core.Keyword("interactive-syntax.db","current","interactive-syntax.db/current",495680631),new cljs.core.Keyword("interactive-syntax.db","options","interactive-syntax.db/options",-867566693),new cljs.core.Keyword("interactive-syntax.db","deps","interactive-syntax.db/deps",-2095320831),new cljs.core.Keyword("interactive-syntax.db","menu","interactive-syntax.db/menu",1515511452),new cljs.core.Keyword("interactive-syntax.db","cache","interactive-syntax.db/cache",-319923336),new cljs.core.Keyword("interactive-syntax.db","auth","interactive-syntax.db/auth",463397104)], null),null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"fs","fs",-2122926244),new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"auth","auth",1389754926)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"version","version",425292698))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"fs","fs",-2122926244))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"folder","folder",1515881736))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"buffers","buffers",471409492))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current","current",-1088038603))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"options","options",99638489))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"deps","deps",1883360319))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"menu","menu",352255198))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"cache","cache",-1237023054))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"auth","auth",1389754926)))], null),null])));
interactive_syntax.db.current_buffer = (function interactive_syntax$db$current_buffer(p__29651){
var map__29652 = p__29651;
var map__29652__$1 = cljs.core.__destructure_map.call(null,map__29652);
var db = map__29652__$1;
var buffers = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var current = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
return current.call(null,buffers);
});
interactive_syntax.db.default_options = (function interactive_syntax$db$default_options(var_args){
var G__29654 = arguments.length;
switch (G__29654) {
case 0:
return interactive_syntax.db.default_options.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return interactive_syntax.db.default_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(interactive_syntax.db.default_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return interactive_syntax.db.default_options.call(null,new cljs.core.Keyword(null,"temp","temp",1791541284));
}));

(interactive_syntax.db.default_options.cljs$core$IFn$_invoke$arity$1 = (function (mode){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"visr-defaults","visr-defaults",1116635776),new cljs.core.Keyword(null,"show-editors","show-editors",-2067467327),new cljs.core.Keyword(null,"insert-close","insert-close",-19537789),new cljs.core.Keyword(null,"enable-drag-and-drop","enable-drag-and-drop",-675808412),new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"sandbox","sandbox",-54636402),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"line-wrapping","line-wrapping",919045521),new cljs.core.Keyword(null,"run-functions","run-functions",2017743505),new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913),new cljs.core.Keyword(null,"tab-behavior","tab-behavior",-301810914)],[cljs.core.PersistentArrayMap.EMPTY,true,true,true,true,(12),"horizontal","sublime",true,"material",false,(function (){var G__29655 = mode;
var G__29655__$1 = (((G__29655 instanceof cljs.core.Keyword))?G__29655.fqn:null);
switch (G__29655__$1) {
case "local":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main"], null);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
})(),"auto","auto"]);
}));

(interactive_syntax.db.default_options.cljs$lang$maxFixedArity = 1);

interactive_syntax.db.default_buffer = (function interactive_syntax$db$default_buffer(var_args){
var G__29659 = arguments.length;
switch (G__29659) {
case 0:
return interactive_syntax.db.default_buffer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return interactive_syntax.db.default_buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(interactive_syntax.db.default_buffer.cljs$core$IFn$_invoke$arity$0 = (function (){
return interactive_syntax.db.default_buffer.call(null,new cljs.core.Keyword(null,"temp","temp",1791541284));
}));

(interactive_syntax.db.default_buffer.cljs$core$IFn$_invoke$arity$1 = (function (mode){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"app-pane","app-pane",45757101),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"split","split",-599435118),new cljs.core.Keyword(null,"scroll","scroll",971553779),new cljs.core.Keyword(null,"changed?","changed?",-437828330),new cljs.core.Keyword(null,"input","input",556931961)],[interactive_syntax.db.files_root,null,false,null,false,"","50%",cljs.core.PersistentArrayMap.EMPTY,false,(function (){var G__29660 = mode;
var G__29660__$1 = (((G__29660 instanceof cljs.core.Keyword))?G__29660.fqn:null);
switch (G__29660__$1) {
case "local":
return "(println \"Speak With Your Heart\")";

break;
case "persist-test":
return "";

break;
case "temp":
return "";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29660__$1)].join('')));

}
})()]);
}));

(interactive_syntax.db.default_buffer.cljs$lang$maxFixedArity = 1);

interactive_syntax.db.bfs_config = (function interactive_syntax$db$bfs_config(mode){
var mk_fs = (function (name){
var G__29663 = mode;
var G__29663__$1 = (((G__29663 instanceof cljs.core.Keyword))?G__29663.fqn:null);
switch (G__29663__$1) {
case "local":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),"IndexedDB",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"storeName","storeName",2066810141),name], null)], null);

break;
case "persist-test":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),"IndexedDB",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"storeName","storeName",2066810141),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"test"].join('')], null)], null);

break;
case "fallback":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fs","fs",-2122926244),"LocalStorage"], null);

break;
case "temp":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fs","fs",-2122926244),"InMemory"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29663__$1)].join('')));

}
});
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),"MountableFileSystem",new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.createAsIfByAssoc([interactive_syntax.db.files_root,mk_fs.call(null,"bfs"),interactive_syntax.db.deps_root,mk_fs.call(null,"depsfs")])], null));
});
interactive_syntax.db.default_db = (function interactive_syntax$db$default_db(var_args){
var G__29668 = arguments.length;
switch (G__29668) {
case 0:
return interactive_syntax.db.default_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return interactive_syntax.db.default_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return interactive_syntax.db.default_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return interactive_syntax.db.default_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(interactive_syntax.db.default_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return interactive_syntax.db.default_db.call(null,new cljs.core.Keyword(null,"temp","temp",1791541284));
}));

(interactive_syntax.db.default_db.cljs$core$IFn$_invoke$arity$1 = (function (mode){
return interactive_syntax.db.default_db.call(null,mode,(function (){
return cljs.core.List.EMPTY;
}));
}));

(interactive_syntax.db.default_db.cljs$core$IFn$_invoke$arity$2 = (function (mode,cb){
return interactive_syntax.db.default_db.call(null,mode,cb,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"fs","fs",-2122926244),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"deps","deps",1883360319)],[interactive_syntax.db.files_root,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interactive_syntax.db.default_buffer.call(null,mode)], null),(0),interactive_syntax.db.default_options.call(null,mode),interactive_syntax.db.version,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__29669 = mode;
var G__29669__$1 = (((G__29669 instanceof cljs.core.Keyword))?G__29669.fqn:null);
switch (G__29669__$1) {
case "local":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"splash","splash",-1122760796)], null);

break;
case "persist-test":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309)], null);

break;
case "temp":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29669__$1)].join('')));

}
})(),cljs.core.PersistentArrayMap.EMPTY]));
}));

(interactive_syntax.db.default_db.cljs$core$IFn$_invoke$arity$3 = (function (mode,cb,base){
var fs = interactive_syntax.db.node$module$browserfs.BFSRequire("fs");
var db = reagent.core.atom.call(null,base);
var backed_db = (function (){var G__29670 = mode;
var G__29670__$1 = (((G__29670 instanceof cljs.core.Keyword))?G__29670.fqn:null);
switch (G__29670__$1) {
case "local":
return alandipert.storage_atom.local_storage.call(null,db,"state");

break;
case "persist-test":
return db;

break;
case "temp":
return db;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29670__$1)].join('')));

}
})();
var ret = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file-changed","file-changed",-339390111),new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"cm-ref","cm-ref",-329099987),new cljs.core.Keyword(null,"app-pane","app-pane",45757101),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"split","split",-599435118),new cljs.core.Keyword(null,"insert-visr!","insert-visr!",-2083896750),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"current-file","current-file",56284307),new cljs.core.Keyword(null,"scroll","scroll",971553779),new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"visr-commit!","visr-commit!",-859642538),new cljs.core.Keyword(null,"runner","runner",1945441304),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"current-folder","current-folder",1012906650),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764),new cljs.core.Keyword(null,"fs","fs",-2122926244),new cljs.core.Keyword(null,"backing","backing",-293947460),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"file-browser-folder","file-browser-folder",1519877118),new cljs.core.Keyword(null,"deps","deps",1883360319)],[interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"changed?","changed?",-437828330)], null)),reagent.core.atom.call(null,false),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)),mode,cljs.core.atom.call(null,null),cljs.core.atom.call(null,null),reagent.core.atom.call(null,false),reagent.core.atom.call(null,""),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926)], null)),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"split","split",-599435118)], null)),reagent.core.atom.call(null,null),interactive_syntax.editor.make_reset_editors_cache.call(null),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"file","file",-1269645878)], null)),cljs.core.atom.call(null,null),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492)], null)),reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY),reagent.core.atom.call(null,null),reagent.core.atom.call(null,null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21676__auto__ = (function interactive_syntax$db$iter__29671(s__29672){
return (new cljs.core.LazySeq(null,(function (){
var s__29672__$1 = s__29672;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29672__$1);
if(temp__5720__auto__){
var s__29672__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29672__$2)){
var c__21674__auto__ = cljs.core.chunk_first.call(null,s__29672__$2);
var size__21675__auto__ = cljs.core.count.call(null,c__21674__auto__);
var b__29674 = cljs.core.chunk_buffer.call(null,size__21675__auto__);
if((function (){var i__29673 = (0);
while(true){
if((i__29673 < size__21675__auto__)){
var i = cljs.core._nth.call(null,c__21674__auto__,i__29673);
cljs.core.chunk_append.call(null,b__29674,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),i], null))], null));

var G__29678 = (i__29673 + (1));
i__29673 = G__29678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29674),interactive_syntax$db$iter__29671.call(null,cljs.core.chunk_rest.call(null,s__29672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29674),null);
}
} else {
var i = cljs.core.first.call(null,s__29672__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),i], null))], null),interactive_syntax$db$iter__29671.call(null,cljs.core.rest.call(null,s__29672__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21676__auto__.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"tab-behavior","tab-behavior",-301810914),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"line-wrapping","line-wrapping",919045521),new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237),new cljs.core.Keyword(null,"enable-drag-and-drop","enable-drag-and-drop",-675808412),new cljs.core.Keyword(null,"show-editors","show-editors",-2067467327),new cljs.core.Keyword(null,"run-functions","run-functions",2017743505),new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913),new cljs.core.Keyword(null,"insert-close","insert-close",-19537789),new cljs.core.Keyword(null,"visr-defaults","visr-defaults",1116635776),new cljs.core.Keyword(null,"sandbox","sandbox",-54636402)], null));
})()),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"input","input",556931961)], null)),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"folder","folder",1515881736)], null)),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null)),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"mode","mode",654403691)], null)),fs,backed_db,interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null)),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"folder","folder",1515881736)], null)),interactive_syntax.db.__GT_DBAtom.call(null,backed_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deps","deps",1883360319)], null))]);
var cb__$1 = (function (ret__$1){
return interactive_syntax.utils.cb_thread.call(null,(function (p1__29665_SHARP_){
return interactive_syntax.db.git_init.call(null,ret__$1,p1__29665_SHARP_);
}),(function (){
return cb.call(null,ret__$1);
}));
});
interactive_syntax.utils.cb_thread.call(null,(function (p1__29666_SHARP_){
return interactive_syntax.db.node$module$browserfs.configure(interactive_syntax.db.bfs_config.call(null,mode),(function (e){
if(cljs.core.truth_(e)){
return p1__29666_SHARP_.call(null);
} else {
return cb__$1.call(null,ret);
}
}));
}),(function (){
return interactive_syntax.db.node$module$browserfs.configure(interactive_syntax.db.bfs_config.call(null,new cljs.core.Keyword(null,"fallback","fallback",761637929)),(function (e){
if(cljs.core.truth_(e)){
throw e;
} else {
return cb__$1.call(null,ret);
}
}));
}));

return ret;
}));

(interactive_syntax.db.default_db.cljs$lang$maxFixedArity = 3);

interactive_syntax.db.reset_db_BANG_ = (function interactive_syntax$db$reset_db_BANG_(p__29679){
var map__29680 = p__29679;
var map__29680__$1 = cljs.core.__destructure_map.call(null,map__29680);
var db = map__29680__$1;
var map__29681 = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__29681__$1 = cljs.core.__destructure_map.call(null,map__29681);
var theme = cljs.core.get.call(null,map__29681__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var mode = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var deps = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var auth = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
var cdeps = cljs.core.deref.call(null,deps);
var ctheme = cljs.core.deref.call(null,theme);
var cauth = cljs.core.deref.call(null,auth);
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"local","local",-1497766724))){
alandipert.storage_atom.remove_local_storage_BANG_.call(null,"state");
} else {
}

if(cljs.core.truth_(cdeps)){
cljs.core.reset_BANG_.call(null,deps,cdeps);
} else {
}

if(cljs.core.truth_(ctheme)){
cljs.core.reset_BANG_.call(null,theme,ctheme);
} else {
}

if(cljs.core.truth_(cauth)){
cljs.core.reset_BANG_.call(null,auth,cauth);
} else {
}

return db;
});
