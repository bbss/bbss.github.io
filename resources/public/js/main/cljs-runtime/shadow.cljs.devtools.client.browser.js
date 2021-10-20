goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___58856 = arguments.length;
var i__4830__auto___58857 = (0);
while(true){
if((i__4830__auto___58857 < len__4829__auto___58856)){
args__4835__auto__.push((arguments[i__4830__auto___58857]));

var G__58858 = (i__4830__auto___58857 + (1));
i__4830__auto___58857 = G__58858;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq58623){
var G__58624 = cljs.core.first(seq58623);
var seq58623__$1 = cljs.core.next(seq58623);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58624,seq58623__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__58629 = cljs.core.seq(sources);
var chunk__58630 = null;
var count__58631 = (0);
var i__58632 = (0);
while(true){
if((i__58632 < count__58631)){
var map__58640 = chunk__58630.cljs$core$IIndexed$_nth$arity$2(null,i__58632);
var map__58640__$1 = cljs.core.__destructure_map(map__58640);
var src = map__58640__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e58641){var e_58864 = e58641;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58864);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58864.message)].join('')));
}

var G__58865 = seq__58629;
var G__58866 = chunk__58630;
var G__58867 = count__58631;
var G__58868 = (i__58632 + (1));
seq__58629 = G__58865;
chunk__58630 = G__58866;
count__58631 = G__58867;
i__58632 = G__58868;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58629);
if(temp__5753__auto__){
var seq__58629__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58629__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__58629__$1);
var G__58870 = cljs.core.chunk_rest(seq__58629__$1);
var G__58871 = c__4649__auto__;
var G__58872 = cljs.core.count(c__4649__auto__);
var G__58873 = (0);
seq__58629 = G__58870;
chunk__58630 = G__58871;
count__58631 = G__58872;
i__58632 = G__58873;
continue;
} else {
var map__58642 = cljs.core.first(seq__58629__$1);
var map__58642__$1 = cljs.core.__destructure_map(map__58642);
var src = map__58642__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e58644){var e_58875 = e58644;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58875);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58875.message)].join('')));
}

var G__58876 = cljs.core.next(seq__58629__$1);
var G__58877 = null;
var G__58878 = (0);
var G__58879 = (0);
seq__58629 = G__58876;
chunk__58630 = G__58877;
count__58631 = G__58878;
i__58632 = G__58879;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__58653 = cljs.core.seq(js_requires);
var chunk__58654 = null;
var count__58655 = (0);
var i__58656 = (0);
while(true){
if((i__58656 < count__58655)){
var js_ns = chunk__58654.cljs$core$IIndexed$_nth$arity$2(null,i__58656);
var require_str_58880 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58880);


var G__58881 = seq__58653;
var G__58882 = chunk__58654;
var G__58883 = count__58655;
var G__58884 = (i__58656 + (1));
seq__58653 = G__58881;
chunk__58654 = G__58882;
count__58655 = G__58883;
i__58656 = G__58884;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58653);
if(temp__5753__auto__){
var seq__58653__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58653__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__58653__$1);
var G__58885 = cljs.core.chunk_rest(seq__58653__$1);
var G__58886 = c__4649__auto__;
var G__58887 = cljs.core.count(c__4649__auto__);
var G__58888 = (0);
seq__58653 = G__58885;
chunk__58654 = G__58886;
count__58655 = G__58887;
i__58656 = G__58888;
continue;
} else {
var js_ns = cljs.core.first(seq__58653__$1);
var require_str_58889 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58889);


var G__58891 = cljs.core.next(seq__58653__$1);
var G__58892 = null;
var G__58893 = (0);
var G__58894 = (0);
seq__58653 = G__58891;
chunk__58654 = G__58892;
count__58655 = G__58893;
i__58656 = G__58894;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__58667){
var map__58668 = p__58667;
var map__58668__$1 = cljs.core.__destructure_map(map__58668);
var msg = map__58668__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58671(s__58672){
return (new cljs.core.LazySeq(null,(function (){
var s__58672__$1 = s__58672;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58672__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__58680 = cljs.core.first(xs__6308__auto__);
var map__58680__$1 = cljs.core.__destructure_map(map__58680);
var src = map__58680__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58680__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58680__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__58672__$1,map__58680,map__58680__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58668,map__58668__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58671_$_iter__58673(s__58674){
return (new cljs.core.LazySeq(null,((function (s__58672__$1,map__58680,map__58680__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58668,map__58668__$1,msg,info,reload_info){
return (function (){
var s__58674__$1 = s__58674;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__58674__$1);
if(temp__5753__auto____$1){
var s__58674__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58674__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__58674__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__58676 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__58675 = (0);
while(true){
if((i__58675 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__58675);
cljs.core.chunk_append(b__58676,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58896 = (i__58675 + (1));
i__58675 = G__58896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58676),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58671_$_iter__58673(cljs.core.chunk_rest(s__58674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58676),null);
}
} else {
var warning = cljs.core.first(s__58674__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58671_$_iter__58673(cljs.core.rest(s__58674__$2)));
}
} else {
return null;
}
break;
}
});})(s__58672__$1,map__58680,map__58680__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58668,map__58668__$1,msg,info,reload_info))
,null,null));
});})(s__58672__$1,map__58680,map__58680__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58668,map__58668__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58671(cljs.core.rest(s__58672__$1)));
} else {
var G__58897 = cljs.core.rest(s__58672__$1);
s__58672__$1 = G__58897;
continue;
}
} else {
var G__58898 = cljs.core.rest(s__58672__$1);
s__58672__$1 = G__58898;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__58682_58899 = cljs.core.seq(warnings);
var chunk__58683_58900 = null;
var count__58684_58901 = (0);
var i__58685_58902 = (0);
while(true){
if((i__58685_58902 < count__58684_58901)){
var map__58688_58903 = chunk__58683_58900.cljs$core$IIndexed$_nth$arity$2(null,i__58685_58902);
var map__58688_58904__$1 = cljs.core.__destructure_map(map__58688_58903);
var w_58905 = map__58688_58904__$1;
var msg_58906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688_58904__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688_58904__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688_58904__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688_58904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58909)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58907),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58908),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58906__$1)].join(''));


var G__58916 = seq__58682_58899;
var G__58917 = chunk__58683_58900;
var G__58918 = count__58684_58901;
var G__58919 = (i__58685_58902 + (1));
seq__58682_58899 = G__58916;
chunk__58683_58900 = G__58917;
count__58684_58901 = G__58918;
i__58685_58902 = G__58919;
continue;
} else {
var temp__5753__auto___58920 = cljs.core.seq(seq__58682_58899);
if(temp__5753__auto___58920){
var seq__58682_58921__$1 = temp__5753__auto___58920;
if(cljs.core.chunked_seq_QMARK_(seq__58682_58921__$1)){
var c__4649__auto___58922 = cljs.core.chunk_first(seq__58682_58921__$1);
var G__58923 = cljs.core.chunk_rest(seq__58682_58921__$1);
var G__58924 = c__4649__auto___58922;
var G__58925 = cljs.core.count(c__4649__auto___58922);
var G__58926 = (0);
seq__58682_58899 = G__58923;
chunk__58683_58900 = G__58924;
count__58684_58901 = G__58925;
i__58685_58902 = G__58926;
continue;
} else {
var map__58689_58927 = cljs.core.first(seq__58682_58921__$1);
var map__58689_58928__$1 = cljs.core.__destructure_map(map__58689_58927);
var w_58929 = map__58689_58928__$1;
var msg_58930__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689_58928__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689_58928__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689_58928__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689_58928__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58933)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58931),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58932),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58930__$1)].join(''));


var G__58934 = cljs.core.next(seq__58682_58921__$1);
var G__58935 = null;
var G__58936 = (0);
var G__58937 = (0);
seq__58682_58899 = G__58934;
chunk__58683_58900 = G__58935;
count__58684_58901 = G__58936;
i__58685_58902 = G__58937;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__58666_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__58666_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__58697){
var map__58698 = p__58697;
var map__58698__$1 = cljs.core.__destructure_map(map__58698);
var msg = map__58698__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__58699 = cljs.core.seq(updates);
var chunk__58710 = null;
var count__58711 = (0);
var i__58712 = (0);
while(true){
if((i__58712 < count__58711)){
var path = chunk__58710.cljs$core$IIndexed$_nth$arity$2(null,i__58712);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58769_58939 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58773_58940 = null;
var count__58774_58941 = (0);
var i__58775_58942 = (0);
while(true){
if((i__58775_58942 < count__58774_58941)){
var node_58943 = chunk__58773_58940.cljs$core$IIndexed$_nth$arity$2(null,i__58775_58942);
if(cljs.core.not(node_58943.shadow$old)){
var path_match_58944 = shadow.cljs.devtools.client.browser.match_paths(node_58943.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58944)){
var new_link_58945 = (function (){var G__58784 = node_58943.cloneNode(true);
G__58784.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58944),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58784;
})();
(node_58943.shadow$old = true);

(new_link_58945.onload = ((function (seq__58769_58939,chunk__58773_58940,count__58774_58941,i__58775_58942,seq__58699,chunk__58710,count__58711,i__58712,new_link_58945,path_match_58944,node_58943,path,map__58698,map__58698__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58943);
});})(seq__58769_58939,chunk__58773_58940,count__58774_58941,i__58775_58942,seq__58699,chunk__58710,count__58711,i__58712,new_link_58945,path_match_58944,node_58943,path,map__58698,map__58698__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58944], 0));

goog.dom.insertSiblingAfter(new_link_58945,node_58943);


var G__58946 = seq__58769_58939;
var G__58947 = chunk__58773_58940;
var G__58948 = count__58774_58941;
var G__58949 = (i__58775_58942 + (1));
seq__58769_58939 = G__58946;
chunk__58773_58940 = G__58947;
count__58774_58941 = G__58948;
i__58775_58942 = G__58949;
continue;
} else {
var G__58950 = seq__58769_58939;
var G__58951 = chunk__58773_58940;
var G__58952 = count__58774_58941;
var G__58953 = (i__58775_58942 + (1));
seq__58769_58939 = G__58950;
chunk__58773_58940 = G__58951;
count__58774_58941 = G__58952;
i__58775_58942 = G__58953;
continue;
}
} else {
var G__58954 = seq__58769_58939;
var G__58955 = chunk__58773_58940;
var G__58956 = count__58774_58941;
var G__58957 = (i__58775_58942 + (1));
seq__58769_58939 = G__58954;
chunk__58773_58940 = G__58955;
count__58774_58941 = G__58956;
i__58775_58942 = G__58957;
continue;
}
} else {
var temp__5753__auto___58958 = cljs.core.seq(seq__58769_58939);
if(temp__5753__auto___58958){
var seq__58769_58959__$1 = temp__5753__auto___58958;
if(cljs.core.chunked_seq_QMARK_(seq__58769_58959__$1)){
var c__4649__auto___58960 = cljs.core.chunk_first(seq__58769_58959__$1);
var G__58961 = cljs.core.chunk_rest(seq__58769_58959__$1);
var G__58962 = c__4649__auto___58960;
var G__58963 = cljs.core.count(c__4649__auto___58960);
var G__58964 = (0);
seq__58769_58939 = G__58961;
chunk__58773_58940 = G__58962;
count__58774_58941 = G__58963;
i__58775_58942 = G__58964;
continue;
} else {
var node_58965 = cljs.core.first(seq__58769_58959__$1);
if(cljs.core.not(node_58965.shadow$old)){
var path_match_58966 = shadow.cljs.devtools.client.browser.match_paths(node_58965.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58966)){
var new_link_58967 = (function (){var G__58787 = node_58965.cloneNode(true);
G__58787.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58966),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58787;
})();
(node_58965.shadow$old = true);

(new_link_58967.onload = ((function (seq__58769_58939,chunk__58773_58940,count__58774_58941,i__58775_58942,seq__58699,chunk__58710,count__58711,i__58712,new_link_58967,path_match_58966,node_58965,seq__58769_58959__$1,temp__5753__auto___58958,path,map__58698,map__58698__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58965);
});})(seq__58769_58939,chunk__58773_58940,count__58774_58941,i__58775_58942,seq__58699,chunk__58710,count__58711,i__58712,new_link_58967,path_match_58966,node_58965,seq__58769_58959__$1,temp__5753__auto___58958,path,map__58698,map__58698__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58966], 0));

goog.dom.insertSiblingAfter(new_link_58967,node_58965);


var G__58968 = cljs.core.next(seq__58769_58959__$1);
var G__58969 = null;
var G__58970 = (0);
var G__58971 = (0);
seq__58769_58939 = G__58968;
chunk__58773_58940 = G__58969;
count__58774_58941 = G__58970;
i__58775_58942 = G__58971;
continue;
} else {
var G__58972 = cljs.core.next(seq__58769_58959__$1);
var G__58973 = null;
var G__58974 = (0);
var G__58975 = (0);
seq__58769_58939 = G__58972;
chunk__58773_58940 = G__58973;
count__58774_58941 = G__58974;
i__58775_58942 = G__58975;
continue;
}
} else {
var G__58976 = cljs.core.next(seq__58769_58959__$1);
var G__58977 = null;
var G__58978 = (0);
var G__58979 = (0);
seq__58769_58939 = G__58976;
chunk__58773_58940 = G__58977;
count__58774_58941 = G__58978;
i__58775_58942 = G__58979;
continue;
}
}
} else {
}
}
break;
}


var G__58980 = seq__58699;
var G__58981 = chunk__58710;
var G__58982 = count__58711;
var G__58983 = (i__58712 + (1));
seq__58699 = G__58980;
chunk__58710 = G__58981;
count__58711 = G__58982;
i__58712 = G__58983;
continue;
} else {
var G__58984 = seq__58699;
var G__58985 = chunk__58710;
var G__58986 = count__58711;
var G__58987 = (i__58712 + (1));
seq__58699 = G__58984;
chunk__58710 = G__58985;
count__58711 = G__58986;
i__58712 = G__58987;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58699);
if(temp__5753__auto__){
var seq__58699__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58699__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__58699__$1);
var G__58988 = cljs.core.chunk_rest(seq__58699__$1);
var G__58989 = c__4649__auto__;
var G__58990 = cljs.core.count(c__4649__auto__);
var G__58991 = (0);
seq__58699 = G__58988;
chunk__58710 = G__58989;
count__58711 = G__58990;
i__58712 = G__58991;
continue;
} else {
var path = cljs.core.first(seq__58699__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58788_58992 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58792_58993 = null;
var count__58793_58994 = (0);
var i__58794_58995 = (0);
while(true){
if((i__58794_58995 < count__58793_58994)){
var node_58996 = chunk__58792_58993.cljs$core$IIndexed$_nth$arity$2(null,i__58794_58995);
if(cljs.core.not(node_58996.shadow$old)){
var path_match_58997 = shadow.cljs.devtools.client.browser.match_paths(node_58996.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58997)){
var new_link_58998 = (function (){var G__58805 = node_58996.cloneNode(true);
G__58805.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58997),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58805;
})();
(node_58996.shadow$old = true);

(new_link_58998.onload = ((function (seq__58788_58992,chunk__58792_58993,count__58793_58994,i__58794_58995,seq__58699,chunk__58710,count__58711,i__58712,new_link_58998,path_match_58997,node_58996,path,seq__58699__$1,temp__5753__auto__,map__58698,map__58698__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58996);
});})(seq__58788_58992,chunk__58792_58993,count__58793_58994,i__58794_58995,seq__58699,chunk__58710,count__58711,i__58712,new_link_58998,path_match_58997,node_58996,path,seq__58699__$1,temp__5753__auto__,map__58698,map__58698__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58997], 0));

goog.dom.insertSiblingAfter(new_link_58998,node_58996);


var G__58999 = seq__58788_58992;
var G__59000 = chunk__58792_58993;
var G__59001 = count__58793_58994;
var G__59002 = (i__58794_58995 + (1));
seq__58788_58992 = G__58999;
chunk__58792_58993 = G__59000;
count__58793_58994 = G__59001;
i__58794_58995 = G__59002;
continue;
} else {
var G__59003 = seq__58788_58992;
var G__59004 = chunk__58792_58993;
var G__59005 = count__58793_58994;
var G__59006 = (i__58794_58995 + (1));
seq__58788_58992 = G__59003;
chunk__58792_58993 = G__59004;
count__58793_58994 = G__59005;
i__58794_58995 = G__59006;
continue;
}
} else {
var G__59007 = seq__58788_58992;
var G__59008 = chunk__58792_58993;
var G__59009 = count__58793_58994;
var G__59010 = (i__58794_58995 + (1));
seq__58788_58992 = G__59007;
chunk__58792_58993 = G__59008;
count__58793_58994 = G__59009;
i__58794_58995 = G__59010;
continue;
}
} else {
var temp__5753__auto___59011__$1 = cljs.core.seq(seq__58788_58992);
if(temp__5753__auto___59011__$1){
var seq__58788_59012__$1 = temp__5753__auto___59011__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58788_59012__$1)){
var c__4649__auto___59013 = cljs.core.chunk_first(seq__58788_59012__$1);
var G__59014 = cljs.core.chunk_rest(seq__58788_59012__$1);
var G__59015 = c__4649__auto___59013;
var G__59016 = cljs.core.count(c__4649__auto___59013);
var G__59017 = (0);
seq__58788_58992 = G__59014;
chunk__58792_58993 = G__59015;
count__58793_58994 = G__59016;
i__58794_58995 = G__59017;
continue;
} else {
var node_59018 = cljs.core.first(seq__58788_59012__$1);
if(cljs.core.not(node_59018.shadow$old)){
var path_match_59019 = shadow.cljs.devtools.client.browser.match_paths(node_59018.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59019)){
var new_link_59020 = (function (){var G__58806 = node_59018.cloneNode(true);
G__58806.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59019),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58806;
})();
(node_59018.shadow$old = true);

(new_link_59020.onload = ((function (seq__58788_58992,chunk__58792_58993,count__58793_58994,i__58794_58995,seq__58699,chunk__58710,count__58711,i__58712,new_link_59020,path_match_59019,node_59018,seq__58788_59012__$1,temp__5753__auto___59011__$1,path,seq__58699__$1,temp__5753__auto__,map__58698,map__58698__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_59018);
});})(seq__58788_58992,chunk__58792_58993,count__58793_58994,i__58794_58995,seq__58699,chunk__58710,count__58711,i__58712,new_link_59020,path_match_59019,node_59018,seq__58788_59012__$1,temp__5753__auto___59011__$1,path,seq__58699__$1,temp__5753__auto__,map__58698,map__58698__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59019], 0));

goog.dom.insertSiblingAfter(new_link_59020,node_59018);


var G__59021 = cljs.core.next(seq__58788_59012__$1);
var G__59022 = null;
var G__59023 = (0);
var G__59024 = (0);
seq__58788_58992 = G__59021;
chunk__58792_58993 = G__59022;
count__58793_58994 = G__59023;
i__58794_58995 = G__59024;
continue;
} else {
var G__59025 = cljs.core.next(seq__58788_59012__$1);
var G__59026 = null;
var G__59027 = (0);
var G__59028 = (0);
seq__58788_58992 = G__59025;
chunk__58792_58993 = G__59026;
count__58793_58994 = G__59027;
i__58794_58995 = G__59028;
continue;
}
} else {
var G__59029 = cljs.core.next(seq__58788_59012__$1);
var G__59030 = null;
var G__59031 = (0);
var G__59032 = (0);
seq__58788_58992 = G__59029;
chunk__58792_58993 = G__59030;
count__58793_58994 = G__59031;
i__58794_58995 = G__59032;
continue;
}
}
} else {
}
}
break;
}


var G__59033 = cljs.core.next(seq__58699__$1);
var G__59034 = null;
var G__59035 = (0);
var G__59036 = (0);
seq__58699 = G__59033;
chunk__58710 = G__59034;
count__58711 = G__59035;
i__58712 = G__59036;
continue;
} else {
var G__59037 = cljs.core.next(seq__58699__$1);
var G__59038 = null;
var G__59039 = (0);
var G__59040 = (0);
seq__58699 = G__59037;
chunk__58710 = G__59038;
count__58711 = G__59039;
i__58712 = G__59040;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__58808){
var map__58809 = p__58808;
var map__58809__$1 = cljs.core.__destructure_map(map__58809);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58809__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__58821){
var map__58822 = p__58821;
var map__58822__$1 = cljs.core.__destructure_map(map__58822);
var _ = map__58822__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__58823,done,error){
var map__58824 = p__58823;
var map__58824__$1 = cljs.core.__destructure_map(map__58824);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58824__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__58825,done,error){
var map__58826 = p__58825;
var map__58826__$1 = cljs.core.__destructure_map(map__58826);
var msg = map__58826__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58827){
var map__58828 = p__58827;
var map__58828__$1 = cljs.core.__destructure_map(map__58828);
var src = map__58828__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58828__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__58829 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__58829) : done.call(null,G__58829));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__58830){
var map__58831 = p__58830;
var map__58831__$1 = cljs.core.__destructure_map(map__58831);
var msg__$1 = map__58831__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58831__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e58832){var ex = e58832;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__58844){
var map__58845 = p__58844;
var map__58845__$1 = cljs.core.__destructure_map(map__58845);
var env = map__58845__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58845__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__58846){
var map__58847 = p__58846;
var map__58847__$1 = cljs.core.__destructure_map(map__58847);
var msg = map__58847__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58847__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__58848){
var map__58849 = p__58848;
var map__58849__$1 = cljs.core.__destructure_map(map__58849);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__58851){
var map__58852 = p__58851;
var map__58852__$1 = cljs.core.__destructure_map(map__58852);
var svc = map__58852__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58852__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
