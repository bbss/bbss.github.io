goog.provide('com.fulcrologic.fulcro.mutations');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__61582){
return cljs.core.map_QMARK_(G__61582);
}),(function (G__61582){
return cljs.core.contains_QMARK_(G__61582,new cljs.core.Keyword(null,"app","app",-560961707));
})], null),(function (G__61582){
return ((cljs.core.map_QMARK_(G__61582)) && (cljs.core.contains_QMARK_(G__61582,new cljs.core.Keyword(null,"app","app",-560961707))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"app","app",-560961707)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Symbol("com.fulcrologic.fulcro.raw.components","component-class?","com.fulcrologic.fulcro.raw.components/component-class?",-1477501501,null),com.fulcrologic.fulcro.raw.components.component_class_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
com.fulcrologic.fulcro.mutations.Mutation = (function (sym){
this.sym = sym;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.fulcrologic.fulcro.mutations.Mutation.prototype.call = (function (unused__10787__auto__){
var self__ = this;
var self__ = this;
var G__61603 = (arguments.length - (1));
switch (G__61603) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.apply = (function (self__,args61602){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61602)));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__61609 = cljs.core.PersistentArrayMap.EMPTY;
return (this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(G__61609) : this$.call(null,G__61609));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (args){
var self__ = this;
var this$ = this;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,args,null,(1),null)),(2),null));
}));

(com.fulcrologic.fulcro.mutations.Mutation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$type = true);

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorStr = "com.fulcrologic.fulcro.mutations/Mutation");

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"com.fulcrologic.fulcro.mutations/Mutation");
}));

/**
 * Positional factory function for com.fulcrologic.fulcro.mutations/Mutation.
 */
com.fulcrologic.fulcro.mutations.__GT_Mutation = (function com$fulcrologic$fulcro$mutations$__GT_Mutation(sym){
return (new com.fulcrologic.fulcro.mutations.Mutation(sym));
});

/**
 * A handler for mutation network results that will place an error, if detected in env, on the data at `ref`.
 *   Errors are placed at `k` (defaults to `::m/mutation-error`).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Swaps against app state and returns `env`.
 */
com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_ = (function com$fulcrologic$fulcro$mutations$update_errors_on_ui_component_BANG_(var_args){
var G__61615 = arguments.length;
switch (G__61615) {
case 1:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978));
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,k){
var map__61617 = env;
var map__61617__$1 = cljs.core.__destructure_map(map__61617);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61617__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61617__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61617__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61617__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(ref)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
if(cljs.core.truth_((function (){var G__61619 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env);
return (remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(G__61619) : remote_error_QMARK_.call(null,G__61619));
})())){
return cljs.core.assoc_in(s,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,k),result);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s,ref,cljs.core.dissoc,k);
}
}));
} else {
}

return env;
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * When there is a `global-error-action` defined on the application, this function will checks for errors in the given
 *   mutation `env`. If any are found then it will call the global error action function with `env`.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Always returns `env`.
 */
com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_ = (function com$fulcrologic$fulcro$mutations$trigger_global_error_action_BANG_(env){
var map__61622 = env;
var map__61622__$1 = cljs.core.__destructure_map(map__61622);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61622__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61622__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var b2__45309__auto___61784 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
if(cljs.core.truth_(b2__45309__auto___61784)){
var global_error_action_61785 = b2__45309__auto___61784;
var b2__45309__auto___61786__$1 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(b2__45309__auto___61786__$1)){
var remote_error_QMARK__61787 = b2__45309__auto___61786__$1;
var b2__45309__auto___61788__$2 = (remote_error_QMARK__61787.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK__61787.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK__61787.call(null,result));
if(cljs.core.truth_(b2__45309__auto___61788__$2)){
var __61789 = b2__45309__auto___61788__$2;
(global_error_action_61785.cljs$core$IFn$_invoke$arity$1 ? global_error_action_61785.cljs$core$IFn$_invoke$arity$1(env) : global_error_action_61785.call(null,env));
} else {
}
} else {
}
} else {
}

return env;
});
/**
 * Looks for network mutation result in `env`, checks it against the global definition of remote errors.  If there
 *   is an error and the mutation has defined an `error-action` section, then it calls it; otherwise, if the mutation
 *   has an `ok-action` it calls that.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_ = (function com$fulcrologic$fulcro$mutations$dispatch_ok_error_actions_BANG_(env){
var map__61625 = env;
var map__61625__$1 = cljs.core.__destructure_map(map__61625);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61625__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61625__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61625__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__61626 = dispatch;
var map__61626__$1 = cljs.core.__destructure_map(map__61626);
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61626__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61626__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
if(cljs.core.truth_(error_action)){
(error_action.cljs$core$IFn$_invoke$arity$1 ? error_action.cljs$core$IFn$_invoke$arity$1(env) : error_action.call(null,env));
} else {
}
} else {
if(cljs.core.truth_(ok_action)){
(ok_action.cljs$core$IFn$_invoke$arity$1 ? ok_action.cljs$core$IFn$_invoke$arity$1(env) : ok_action.call(null,env));
} else {
}
}

return env;
});
/**
 * Rewrites tempids in state and places a tempid->realid map into env for further use by the mutation actions.
 */
com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_ = (function com$fulcrologic$fulcro$mutations$rewrite_tempids_BANG_(env){
var map__61629 = env;
var map__61629__$1 = cljs.core.__destructure_map(map__61629);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61629__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61629__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__61630 = result;
var map__61630__$1 = cljs.core.__destructure_map(map__61630);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61630__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rid__GT_tid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(body);
com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids_BANG_(app,body);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"tempid->realid","tempid->realid",1168652437),rid__GT_tid);
});
/**
 * If there is a successful result from the remote mutation in `env` this function will merge it with app state
 *   (if there was a mutation join query), and will also rewrite any tempid remaps that were returned
 *   in all of the possible locations they might be in both app database and runtime application state (e.g. network queues).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_ = (function com$fulcrologic$fulcro$mutations$integrate_mutation_return_value_BANG_(env){
var map__61633 = env;
var map__61633__$1 = cljs.core.__destructure_map(map__61633);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var mutation_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891));
var transmitted_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690));
var map__61634 = result;
var map__61634__$1 = cljs.core.__destructure_map(map__61634);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61634__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61634__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var mark_query = (cljs.core.truth_(transmitted_ast)?com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(transmitted_ast):transaction);
var body__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = body;
if(cljs.core.truth_(and__4221__auto__)){
return mark_query;
} else {
return and__4221__auto__;
}
})())?com.fulcrologic.fulcro.algorithms.merge.mark_missing(body,mark_query):body);
var eql = (function (){var or__4223__auto__ = transaction;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (function (){var and__4221__auto__ = mutation_ast;
if(cljs.core.truth_(and__4221__auto__)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(mutation_ast,true)], null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return mark_query;
}
}
})();
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins,eql,body__$1);
}

return env;
});
/**
 * The default Fulcro result action for `defmutation`, which can be overridden when you create your `app/fulcro-app`.
 * 
 *   This function is the following composition of operations from this same namespace:
 * 
 * ```
 *   (-> env
 *  (update-errors-on-ui-component! ::mutation-error)
 *  (integrate-mutation-return-value!)
 *  (trigger-global-error-action!)
 *  (dispatch-ok-error-actions!))
 * ```
 * 
 *   This function returns `env`, so it can be used as part of the chain in your own definition of a "default"
 *   mutation result action.
 *   
 */
com.fulcrologic.fulcro.mutations.default_result_action_BANG_ = (function com$fulcrologic$fulcro$mutations$default_result_action_BANG_(env){
return com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_(com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_(com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_(com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978))))));
});
com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_ = (function com$fulcrologic$fulcro$mutations$mutation_declaration_QMARK_(expr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.mutations.Mutation,cljs.core.type(expr));
});
/**
 * Return the real symbol (for mutation dispatch) of `mutation`, which can be a symbol (this function is then identity)
 * or a mutation-declaration.
 */
com.fulcrologic.fulcro.mutations.mutation_symbol = (function com$fulcrologic$fulcro$mutations$mutation_symbol(mutation){
if(com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_(mutation)){
return cljs.core.first((mutation.cljs$core$IFn$_invoke$arity$0 ? mutation.cljs$core$IFn$_invoke$arity$0() : mutation.call(null)));
} else {
return mutation;
}
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations.mutate !== 'undefined')){
} else {
com.fulcrologic.fulcro.mutations.mutate = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61640 = cljs.core.get_global_hierarchy;
return (fexpr__61640.cljs$core$IFn$_invoke$arity$0 ? fexpr__61640.cljs$core$IFn$_invoke$arity$0() : fexpr__61640.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.mutations","mutate"),(function (env){
return new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__61645){
var map__61646 = p__61645;
var map__61646__$1 = cljs.core.__destructure_map(map__61646);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61646__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,226,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown app state mutation. Have you required the file with your mutations?",new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast),"See https://book.fulcrologic.com/#err-mut-unknown-mutation"], null);
}),null)),null,-1194163421,null);
}));
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG_(comp,field){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Like toggle!, but synchronously refreshes `comp` and nothing else.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG__BANG_(comp,field){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data). Changes made via these
 *   helpers are compressed in the history.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG_(component,field,value){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Just like set-value!, but synchronously updates `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG__BANG_(component,field,value){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
com.fulcrologic.fulcro.mutations.ensure_integer = (function com$fulcrologic$fulcro$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61801 = arguments.length;
var i__4830__auto___61802 = (0);
while(true){
if((i__4830__auto___61802 < len__4829__auto___61801)){
args__4835__auto__.push((arguments[i__4830__auto___61802]));

var G__61803 = (i__4830__auto___61802 + (1));
i__4830__auto___61802 = G__61803;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__61660){
var map__61661 = p__61660;
var map__61661__$1 = cljs.core.__destructure_map(map__61661);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61661__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61661__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var or__4223__auto__ = event;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not((function (){var and__4221__auto____$1 = event;
if(cljs.core.truth_(and__4221__auto____$1)){
return value;
} else {
return and__4221__auto____$1;
}
})());
} else {
return and__4221__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq61655){
var G__61656 = cljs.core.first(seq61655);
var seq61655__$1 = cljs.core.next(seq61655);
var G__61657 = cljs.core.first(seq61655__$1);
var seq61655__$2 = cljs.core.next(seq61655__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61656,G__61657,seq61655__$2);
}));

/**
 * Just like set-integer!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG__BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61805 = arguments.length;
var i__4830__auto___61806 = (0);
while(true){
if((i__4830__auto___61806 < len__4829__auto___61805)){
args__4835__auto__.push((arguments[i__4830__auto___61806]));

var G__61807 = (i__4830__auto___61806 + (1));
i__4830__auto___61806 = G__61807;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__61672){
var map__61673 = p__61672;
var map__61673__$1 = cljs.core.__destructure_map(map__61673);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61673__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61673__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var or__4223__auto__ = event;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not((function (){var and__4221__auto____$1 = event;
if(cljs.core.truth_(and__4221__auto____$1)){
return value;
} else {
return and__4221__auto____$1;
}
})());
} else {
return and__4221__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$applyTo = (function (seq61668){
var G__61669 = cljs.core.first(seq61668);
var seq61668__$1 = cljs.core.next(seq61668);
var G__61670 = cljs.core.first(seq61668__$1);
var seq61668__$2 = cljs.core.next(seq61668__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61669,G__61670,seq61668__$2);
}));

com.fulcrologic.fulcro.mutations.ensure_double = (function com$fulcrologic$fulcro$mutations$ensure_double(v){
var rv = parseFloat(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given double on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61809 = arguments.length;
var i__4830__auto___61810 = (0);
while(true){
if((i__4830__auto___61810 < len__4829__auto___61809)){
args__4835__auto__.push((arguments[i__4830__auto___61810]));

var G__61811 = (i__4830__auto___61810 + (1));
i__4830__auto___61810 = G__61811;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__61681){
var map__61682 = p__61681;
var map__61682__$1 = cljs.core.__destructure_map(map__61682);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61682__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61682__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var or__4223__auto__ = event;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not((function (){var and__4221__auto____$1 = event;
if(cljs.core.truth_(and__4221__auto____$1)){
return value;
} else {
return and__4221__auto____$1;
}
})());
} else {
return and__4221__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$applyTo = (function (seq61677){
var G__61678 = cljs.core.first(seq61677);
var seq61677__$1 = cljs.core.next(seq61677);
var G__61679 = cljs.core.first(seq61677__$1);
var seq61677__$2 = cljs.core.next(seq61677__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61678,G__61679,seq61677__$2);
}));

/**
 * Just like set-double!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG__BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61814 = arguments.length;
var i__4830__auto___61815 = (0);
while(true){
if((i__4830__auto___61815 < len__4829__auto___61814)){
args__4835__auto__.push((arguments[i__4830__auto___61815]));

var G__61816 = (i__4830__auto___61815 + (1));
i__4830__auto___61815 = G__61816;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__61693){
var map__61694 = p__61693;
var map__61694__$1 = cljs.core.__destructure_map(map__61694);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61694__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61694__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var or__4223__auto__ = event;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not((function (){var and__4221__auto____$1 = event;
if(cljs.core.truth_(and__4221__auto____$1)){
return value;
} else {
return and__4221__auto____$1;
}
})());
} else {
return and__4221__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$applyTo = (function (seq61689){
var G__61690 = cljs.core.first(seq61689);
var seq61689__$1 = cljs.core.next(seq61689);
var G__61691 = cljs.core.first(seq61689__$1);
var seq61689__$2 = cljs.core.next(seq61689__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61690,G__61691,seq61689__$2);
}));

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 *   Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61818 = arguments.length;
var i__4830__auto___61820 = (0);
while(true){
if((i__4830__auto___61820 < len__4829__auto___61818)){
args__4835__auto__.push((arguments[i__4830__auto___61820]));

var G__61822 = (i__4830__auto___61820 + (1));
i__4830__auto___61820 = G__61822;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__61702){
var map__61703 = p__61702;
var map__61703__$1 = cljs.core.__destructure_map(map__61703);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61703__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61703__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var or__4223__auto__ = event;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not((function (){var and__4221__auto____$1 = event;
if(cljs.core.truth_(and__4221__auto____$1)){
return value;
} else {
return and__4221__auto____$1;
}
})());
} else {
return and__4221__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq61697){
var G__61698 = cljs.core.first(seq61697);
var seq61697__$1 = cljs.core.next(seq61697);
var G__61699 = cljs.core.first(seq61697__$1);
var seq61697__$2 = cljs.core.next(seq61697__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61698,G__61699,seq61697__$2);
}));

/**
 * Just like set-string!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG__BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61826 = arguments.length;
var i__4830__auto___61827 = (0);
while(true){
if((i__4830__auto___61827 < len__4829__auto___61826)){
args__4835__auto__.push((arguments[i__4830__auto___61827]));

var G__61828 = (i__4830__auto___61827 + (1));
i__4830__auto___61827 = G__61828;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__61710){
var map__61711 = p__61710;
var map__61711__$1 = cljs.core.__destructure_map(map__61711);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61711__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61711__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var or__4223__auto__ = event;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not((function (){var and__4221__auto____$1 = event;
if(cljs.core.truth_(and__4221__auto____$1)){
return value;
} else {
return and__4221__auto____$1;
}
})());
} else {
return and__4221__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$applyTo = (function (seq61706){
var G__61707 = cljs.core.first(seq61706);
var seq61706__$1 = cljs.core.next(seq61706);
var G__61708 = cljs.core.first(seq61706__$1);
var seq61706__$2 = cljs.core.next(seq61706__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61707,G__61708,seq61706__$2);
}));

/**
 * Indicate the the remote operation will return a value of the given component type.
 * 
 *   `env` - The env of the mutation
 *   `class` - A component class that represents the return type.  You may supply a fully-qualified symbol instead of the
 *   actual class, and this method will look up the class for you (useful to avoid circular references).
 *   `opts` (optional):
 * - `query-params` - Optional parameters to add to the generated query
 * 
 *   Returns an update `env`, and is a valid return value from mutation remote sections.
 */
com.fulcrologic.fulcro.mutations.returning = (function com$fulcrologic$fulcro$mutations$returning(var_args){
var G__61717 = arguments.length;
switch (G__61717) {
case 2:
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2 = (function (env,class$){
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3(env,class$,null);
}));

(com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$3 = (function (env,class$,p__61719){
var map__61720 = p__61719;
var map__61720__$1 = cljs.core.__destructure_map(map__61720);
var opts = map__61720__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61720__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var class$__$1 = (((((class$ instanceof cljs.core.Keyword)) || ((class$ instanceof cljs.core.Symbol))))?com.fulcrologic.fulcro.raw.components.registry_key__GT_class(class$):class$);
var map__61722 = env;
var map__61722__$1 = cljs.core.__destructure_map(map__61722);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61722__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61722__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__61723 = ast;
var map__61723__$1 = cljs.core.__destructure_map(map__61723);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61723__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61723__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61723__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var component_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class$__$1,cljs.core.deref(state));
var updated_query = (function (){var G__61725 = edn_query_language.core.query__GT_ast(component_query);
var G__61725__$1 = (cljs.core.truth_(query_params)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__61725,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(0)], null),cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),query_params):G__61725);
var G__61725__$2 = edn_query_language.core.ast__GT_query(G__61725__$1)
;
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__61725__$2,(function (p1__61714_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__61714_SHARP_], 0));
}));
} else {
return G__61725__$2;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),updated_query])], null)));
}));

(com.fulcrologic.fulcro.mutations.returning.cljs$lang$maxFixedArity = 3);

/**
 * Set's a target for the return value from the mutation to be merged into. This can be combined with returning to define
 *   a path to insert the new entry.
 * 
 *   `env` - The mutation env (you can thread together `returning` and `with-target`)
 *   `target` - A vector path, or any special target defined in `data-targeting` such as `append-to`.
 * 
 *   Returns an updated env (which is a valid return value from remote sections of mutations).
 *   
 */
com.fulcrologic.fulcro.mutations.with_target = (function com$fulcrologic$fulcro$mutations$with_target(p__61728,target){
var map__61729 = p__61728;
var map__61729__$1 = cljs.core.__destructure_map(map__61729);
var env = map__61729__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61729__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__61730 = ast;
var map__61730__$1 = cljs.core.__destructure_map(map__61730);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61730__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61730__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61730__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var targeted_query = (cljs.core.truth_(query)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target):cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),targeted_query])], null)));
});
/**
 * Modify an AST containing a single mutation, changing it's parameters to those given as an argument. Overwrites
 * any existing params of the mutation.
 * 
 * `env` - the mutation environment
 * `params` - A new map to use as the mutations parameters
 * 
 * Returns an updated `env`, which can be used as the return value from a remote section of a mutation.
 */
com.fulcrologic.fulcro.mutations.with_params = (function com$fulcrologic$fulcro$mutations$with_params(env,params){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null),params);
});
/**
 * Modify the AST in env so that the request is sent such that an alternate low-level XHRIO response type is used.
 *   Only works with HTTP remotes. See goog.net.XhrIO.  Supported response types are :default, :array-buffer,
 *   :text, and :document.
 */
com.fulcrologic.fulcro.mutations.with_response_type = (function com$fulcrologic$fulcro$mutations$with_response_type(env,response_type){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)], null),response_type);
});
com.fulcrologic.fulcro.mutations.with_server_side_mutation = (function com$fulcrologic$fulcro$mutations$with_server_side_mutation(env,mutation_symbol){

return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),mutation_symbol,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mutation_symbol], 0));
});
/**
 * Mutation: A convenience helper, generally used 'bit twiddle' the data on a particular database table (using the component's ident).
 *   Specifically, merge the given `params` into the state of the database object at the component's ident.
 *   In general, it is recommended this be used for ui-only properties that have no real use outside of the component.
 *   
 */
com.fulcrologic.fulcro.mutations.set_props = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__61738){
var map__61739 = p__61738;
var map__61739__$1 = cljs.core.__destructure_map(map__61739);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61739__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61739__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__61741_61878 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__61742_61879 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__61742_61879);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,517,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m/set-props requires component to have an ident. See https://book.fulcrologic.com/#err-mut-set-props-missing-ident"], null);
}),null)),null,-470462481,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,(function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__61741_61878);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__61746 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__61747 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__61747);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__61746);
}})], null);
}));
/**
 * Mutation: A helper method that toggles the true/false nature of a component's state by ident.
 * Use for local UI data only. Use your own mutations for things that have a good abstract meaning. 
 */
com.fulcrologic.fulcro.mutations.toggle = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),(function (fulcro_mutation_env_symbol){
var map__61749 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__61749__$1 = cljs.core.__destructure_map(map__61749);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61749__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__61750){
var map__61751 = p__61750;
var map__61751__$1 = cljs.core.__destructure_map(map__61751);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61751__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61751__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__61753_61880 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__61754_61881 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__61754_61881);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,525,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m/toggle requires component to have an ident. See https://book.fulcrologic.com/#err-mut-toggle-missing-ident"], null);
}),null)),null,1003453110,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__61753_61880);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__61756 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__61757 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__61757);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__61756);
}})], null);
}));
/**
 * Run a transaction that will update the given k/v pair in the props of the database. Uses the `current-props` to
 * derive the ident of the database entry. The props must contain an ID key that can be used to derive the ident from
 * the current-props.
 * 
 * For example, `(raw-set-value! app {:person/id 42} :person/name "bob")` would have the effect of a mutation that
 * does an `(assoc-in state-db [:person/id 42 :person/name] "bob")`.
 * 
 */
com.fulcrologic.fulcro.mutations.raw_set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$raw_set_value_BANG_(app,current_props,k,v){
var ik = com.fulcrologic.fulcro.raw.components.id_key(current_props);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ik,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,ik)], null);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,ident))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,541,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot raw-set-value! because current-props could not be used to derive the ident of the component.",current_props], null);
}),null)),null,1498268635,null);
} else {
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61760 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
return (com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1(G__61760) : com.fulcrologic.fulcro.mutations.set_props.call(null,G__61760));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ident], null));
}
});
/**
 * Run a transaction that will update the given k/v pair in the props of the database. Uses the `current-props` as the basis
 * for the update, and to find the ident of the target. The `current-props` must contain an ID field that can be used to derive
 * the ident from the passed props.
 * 
 * For example, `(raw-update-value! app {:person/id 42} :person/age inc)` would have the effect of a mutation that
 * does an `(update-in state-db [:person/id 42 :person/age] inc)`.
 * 
 */
com.fulcrologic.fulcro.mutations.raw_update_value_BANG_ = (function com$fulcrologic$fulcro$mutations$raw_update_value_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61882 = arguments.length;
var i__4830__auto___61883 = (0);
while(true){
if((i__4830__auto___61883 < len__4829__auto___61882)){
args__4835__auto__.push((arguments[i__4830__auto___61883]));

var G__61884 = (i__4830__auto___61883 + (1));
i__4830__auto___61883 = G__61884;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,current_props,k,f,args){
var ik = com.fulcrologic.fulcro.raw.components.id_key(current_props);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ik,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,ik)], null);
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,k);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,old_value,args);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,ident))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,559,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot raw-update-value! because current-props could not be used to derive the ident of the component.",current_props], null);
}),null)),null,-566417125,null);
} else {
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61768 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,new_value]);
return (com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.mutations.set_props.cljs$core$IFn$_invoke$arity$1(G__61768) : com.fulcrologic.fulcro.mutations.set_props.call(null,G__61768));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ident], null));
}
}));

(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.raw_update_value_BANG_.cljs$lang$applyTo = (function (seq61761){
var G__61762 = cljs.core.first(seq61761);
var seq61761__$1 = cljs.core.next(seq61761);
var G__61763 = cljs.core.first(seq61761__$1);
var seq61761__$2 = cljs.core.next(seq61761__$1);
var G__61764 = cljs.core.first(seq61761__$2);
var seq61761__$3 = cljs.core.next(seq61761__$2);
var G__61765 = cljs.core.first(seq61761__$3);
var seq61761__$4 = cljs.core.next(seq61761__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61762,G__61763,G__61764,G__61765,seq61761__$4);
}));


//# sourceMappingURL=com.fulcrologic.fulcro.mutations.js.map
