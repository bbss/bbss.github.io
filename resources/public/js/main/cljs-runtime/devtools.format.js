goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_40862 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._header[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._header["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_40862(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_40874 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._has_body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._has_body["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_40874(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_40877 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (devtools.format._body[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (devtools.format._body["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_40877(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o40295 = temp__5751__auto__;
var temp__5751__auto____$1 = (o40295["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o40296 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o40296["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o40297 = temp__5751__auto____$2;
return (o40297["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o40298 = temp__5751__auto__;
var temp__5751__auto____$1 = (o40298["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o40299 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o40299["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o40300 = temp__5751__auto____$2;
return (o40300["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o40301 = temp__5751__auto__;
var temp__5751__auto____$1 = (o40301["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o40302 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o40302["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o40303 = temp__5751__auto____$2;
return (o40303["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o40304 = temp__5751__auto__;
var temp__5751__auto____$1 = (o40304["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o40305 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o40305["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o40306 = temp__5751__auto____$2;
return (o40306["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o40307 = temp__5751__auto__;
var temp__5751__auto____$1 = (o40307["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o40308 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o40308["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o40309 = temp__5751__auto____$2;
return (o40309["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o40310 = temp__5751__auto__;
var temp__5751__auto____$1 = (o40310["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o40311 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o40311["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o40312 = temp__5751__auto____$2;
return (o40312["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o40313 = temp__5751__auto__;
var temp__5751__auto____$1 = (o40313["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o40314 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o40314["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o40315 = temp__5751__auto____$2;
return (o40315["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40899 = arguments.length;
var i__4830__auto___40901 = (0);
while(true){
if((i__4830__auto___40901 < len__4829__auto___40899)){
args__4835__auto__.push((arguments[i__4830__auto___40901]));

var G__40902 = (i__4830__auto___40901 + (1));
i__4830__auto___40901 = G__40902;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq40316){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40316));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40906 = arguments.length;
var i__4830__auto___40907 = (0);
while(true){
if((i__4830__auto___40907 < len__4829__auto___40906)){
args__4835__auto__.push((arguments[i__4830__auto___40907]));

var G__40908 = (i__4830__auto___40907 + (1));
i__4830__auto___40907 = G__40908;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq40317){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40317));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40911 = arguments.length;
var i__4830__auto___40913 = (0);
while(true){
if((i__4830__auto___40913 < len__4829__auto___40911)){
args__4835__auto__.push((arguments[i__4830__auto___40913]));

var G__40914 = (i__4830__auto___40913 + (1));
i__4830__auto___40913 = G__40914;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq40318){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40318));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40918 = arguments.length;
var i__4830__auto___40920 = (0);
while(true){
if((i__4830__auto___40920 < len__4829__auto___40918)){
args__4835__auto__.push((arguments[i__4830__auto___40920]));

var G__40927 = (i__4830__auto___40920 + (1));
i__4830__auto___40920 = G__40927;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq40319){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40319));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40943 = arguments.length;
var i__4830__auto___40944 = (0);
while(true){
if((i__4830__auto___40944 < len__4829__auto___40943)){
args__4835__auto__.push((arguments[i__4830__auto___40944]));

var G__40945 = (i__4830__auto___40944 + (1));
i__4830__auto___40944 = G__40945;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq40320){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40320));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40954 = arguments.length;
var i__4830__auto___40956 = (0);
while(true){
if((i__4830__auto___40956 < len__4829__auto___40954)){
args__4835__auto__.push((arguments[i__4830__auto___40956]));

var G__40959 = (i__4830__auto___40956 + (1));
i__4830__auto___40956 = G__40959;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq40321){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40321));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40961 = arguments.length;
var i__4830__auto___40962 = (0);
while(true){
if((i__4830__auto___40962 < len__4829__auto___40961)){
args__4835__auto__.push((arguments[i__4830__auto___40962]));

var G__40963 = (i__4830__auto___40962 + (1));
i__4830__auto___40962 = G__40963;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq40322){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40322));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40965 = arguments.length;
var i__4830__auto___40966 = (0);
while(true){
if((i__4830__auto___40966 < len__4829__auto___40965)){
args__4835__auto__.push((arguments[i__4830__auto___40966]));

var G__40967 = (i__4830__auto___40966 + (1));
i__4830__auto___40966 = G__40967;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40326){
var vec__40327 = p__40326;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40327,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__40323_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__40323_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq40324){
var G__40325 = cljs.core.first(seq40324);
var seq40324__$1 = cljs.core.next(seq40324);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40325,seq40324__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__40330 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__40331 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__40332 = (function (){var G__40840 = new cljs.core.Keyword(null,"li","li",723558921);
var G__40841 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__40842 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__40840,G__40841,G__40842) : devtools.format.make_template_fn.call(null,G__40840,G__40841,G__40842));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__40330,G__40331,G__40332) : devtools.format.make_template_fn.call(null,G__40330,G__40331,G__40332));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40971 = arguments.length;
var i__4830__auto___40973 = (0);
while(true){
if((i__4830__auto___40973 < len__4829__auto___40971)){
args__4835__auto__.push((arguments[i__4830__auto___40973]));

var G__40974 = (i__4830__auto___40973 + (1));
i__4830__auto___40973 = G__40974;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq40846){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40846));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40981 = arguments.length;
var i__4830__auto___40982 = (0);
while(true){
if((i__4830__auto___40982 < len__4829__auto___40981)){
args__4835__auto__.push((arguments[i__4830__auto___40982]));

var G__40984 = (i__4830__auto___40982 + (1));
i__4830__auto___40982 = G__40984;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq40852){
var G__40853 = cljs.core.first(seq40852);
var seq40852__$1 = cljs.core.next(seq40852);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40853,seq40852__$1);
}));


//# sourceMappingURL=devtools.format.js.map
