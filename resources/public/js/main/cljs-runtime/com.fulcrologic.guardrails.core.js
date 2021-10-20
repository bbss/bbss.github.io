goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__49450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_55150){
var state_val_55151 = (state_55150[(1)]);
if((state_val_55151 === (7))){
var inst_55146 = (state_55150[(2)]);
var state_55150__$1 = state_55150;
var statearr_55154_55228 = state_55150__$1;
(statearr_55154_55228[(2)] = inst_55146);

(statearr_55154_55228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55151 === (1))){
var state_55150__$1 = state_55150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55150__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_55151 === (4))){
var inst_55148 = (state_55150[(2)]);
var state_55150__$1 = state_55150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55150__$1,inst_55148);
} else {
if((state_val_55151 === (6))){
var inst_55144 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_55150__$1 = state_55150;
var statearr_55155_55229 = state_55150__$1;
(statearr_55155_55229[(2)] = inst_55144);

(statearr_55155_55229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55151 === (3))){
var inst_55127 = (state_55150[(7)]);
var state_55150__$1 = state_55150;
if(cljs.core.truth_(inst_55127)){
var statearr_55156_55230 = state_55150__$1;
(statearr_55156_55230[(1)] = (5));

} else {
var statearr_55157_55231 = state_55150__$1;
(statearr_55157_55231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55151 === (12))){
var inst_55141 = (state_55150[(2)]);
var inst_55127 = inst_55141;
var state_55150__$1 = (function (){var statearr_55159 = state_55150;
(statearr_55159[(7)] = inst_55127);

return statearr_55159;
})();
var statearr_55160_55232 = state_55150__$1;
(statearr_55160_55232[(2)] = null);

(statearr_55160_55232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55151 === (2))){
var inst_55126 = (state_55150[(2)]);
var inst_55127 = inst_55126;
var state_55150__$1 = (function (){var statearr_55161 = state_55150;
(statearr_55161[(7)] = inst_55127);

return statearr_55161;
})();
var statearr_55162_55233 = state_55150__$1;
(statearr_55162_55233[(2)] = null);

(statearr_55162_55233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55151 === (11))){
var _ = (function (){var statearr_55163 = state_55150;
(statearr_55163[(4)] = cljs.core.rest((state_55150[(4)])));

return statearr_55163;
})();
var state_55150__$1 = state_55150;
var ex55158 = (state_55150__$1[(2)]);
var statearr_55166_55235 = state_55150__$1;
(statearr_55166_55235[(5)] = ex55158);


var statearr_55167_55236 = state_55150__$1;
(statearr_55167_55236[(1)] = (10));

(statearr_55167_55236[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55151 === (9))){
var inst_55139 = (state_55150[(2)]);
var state_55150__$1 = (function (){var statearr_55168 = state_55150;
(statearr_55168[(8)] = inst_55139);

return statearr_55168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55150__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_55151 === (5))){
var state_55150__$1 = state_55150;
var statearr_55169_55237 = state_55150__$1;
(statearr_55169_55237[(2)] = null);

(statearr_55169_55237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55151 === (10))){
var inst_55130 = (state_55150[(2)]);
var state_55150__$1 = (function (){var statearr_55170 = state_55150;
(statearr_55170[(9)] = inst_55130);

return statearr_55170;
})();
var statearr_55171_55238 = state_55150__$1;
(statearr_55171_55238[(2)] = null);

(statearr_55171_55238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55151 === (8))){
var inst_55127 = (state_55150[(7)]);
var _ = (function (){var statearr_55172 = state_55150;
(statearr_55172[(4)] = cljs.core.cons((11),(state_55150[(4)])));

return statearr_55172;
})();
var inst_55136 = (inst_55127.cljs$core$IFn$_invoke$arity$0 ? inst_55127.cljs$core$IFn$_invoke$arity$0() : inst_55127.call(null));
var ___$1 = (function (){var statearr_55173 = state_55150;
(statearr_55173[(4)] = cljs.core.rest((state_55150[(4)])));

return statearr_55173;
})();
var state_55150__$1 = state_55150;
var statearr_55174_55240 = state_55150__$1;
(statearr_55174_55240[(2)] = inst_55136);

(statearr_55174_55240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__49349__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__49349__auto____0 = (function (){
var statearr_55175 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55175[(0)] = com$fulcrologic$guardrails$core$state_machine__49349__auto__);

(statearr_55175[(1)] = (1));

return statearr_55175;
});
var com$fulcrologic$guardrails$core$state_machine__49349__auto____1 = (function (state_55150){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_55150);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e55176){var ex__49352__auto__ = e55176;
var statearr_55177_55294 = state_55150;
(statearr_55177_55294[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_55150[(4)]))){
var statearr_55178_55295 = state_55150;
(statearr_55178_55295[(1)] = cljs.core.first((state_55150[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55296 = state_55150;
state_55150 = G__55296;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__49349__auto__ = function(state_55150){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__49349__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__49349__auto____1.call(this,state_55150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__49349__auto____0;
com$fulcrologic$guardrails$core$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__49349__auto____1;
return com$fulcrologic$guardrails$core$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_55181 = f__49451__auto__();
(statearr_55181[(6)] = c__49450__auto__);

return statearr_55181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));

return c__49450__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__55182 = data;
var map__55182__$1 = cljs.core.__destructure_map(map__55182);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55182__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55182__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55182__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55182__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55182__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55182__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55182__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55182__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__55183,spec,value){
var map__55184 = p__55183;
var map__55184__$1 = cljs.core.__destructure_map(map__55184);
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55184__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55184__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55184__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55184__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55184__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55184__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_55398 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__55399 = (function (){var and__4221__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return vararg_QMARK_;
} else {
return and__4221__auto__;
}
})();
var varg_55400 = (cljs.core.truth_(vargs_QMARK__55399)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_55401 = (cljs.core.truth_(vargs_QMARK__55399)?((cljs.core.map_QMARK_(varg_55400))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_55400))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_55400))):value);
var valid_exception_55402 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_55401)){
} else {
var problem_55403 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_55401,expound_opts);
var description_55404 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_55403)].join('');
if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_55402,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(description_55404,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_55401], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_55404,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = callsite;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e55185){var e_55405 = e55185;
com.fulcrologic.guardrails.utils.report_exception(e_55405,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_55406 = (com.fulcrologic.guardrails.core.now_ms() - start_55398);
if((duration_55406 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_55406),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_55402))){
throw cljs.core.deref(valid_exception_55402);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
