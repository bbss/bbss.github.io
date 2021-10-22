goog.provide('bbss.portfolio');
var module$node_modules$react_intersection_observer$react_intersection_observer=shadow.js.require("module$node_modules$react_intersection_observer$react_intersection_observer", {});
var module$node_modules$$react_spring$web$dist$react_spring_web_cjs=shadow.js.require("module$node_modules$$react_spring$web$dist$react_spring_web_cjs", {});
var module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs=shadow.js.require("module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$$material_ui$core$esm$styles$index=shadow.js.require("module$node_modules$$material_ui$core$esm$styles$index", {});
var module$node_modules$$material_ui$core$index=shadow.js.require("module$node_modules$$material_ui$core$index", {});
var module$node_modules$react_use_measure$dist$web_cjs=shadow.js.require("module$node_modules$react_use_measure$dist$web_cjs", {});
bbss.portfolio.orange = "#fadeac";
bbss.portfolio.gray = "#929EA6";
bbss.portfolio.SPA = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
bbss.portfolio.init = (function bbss$portfolio$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init"], 0));

cljs.core.reset_BANG_(bbss.portfolio.SPA,com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batch-notifications","batch-notifications",1250364860),(function (render_BANG_){
return module$node_modules$react_dom$index.unstable_batchedUpdates(render_BANG_);
})], null)));

module$node_modules$react_dom$index.render(module$node_modules$react$index.createElement(bbss.portfolio.App),document.getElementById("app"));

return com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_(cljs.core.deref(bbss.portfolio.SPA));
});
bbss.portfolio.refresh = (function bbss$portfolio$refresh(){
return module$node_modules$react_dom$index.render(module$node_modules$react$index.createElement(bbss.portfolio.App),document.getElementById("app"));
});
bbss.portfolio.pages = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"intro","intro",754440928,null),new cljs.core.Symbol(null,"korean.tools","korean.tools",1344965852,null),new cljs.core.Symbol(null,"aircraft-noise","aircraft-noise",1838063090,null),new cljs.core.Symbol(null,"cljsc2","cljsc2",-1734546000,null),new cljs.core.Symbol(null,"data.worldbank.org","data.worldbank.org",-1557972304,null)], null);

bbss.portfolio.arrow_down = (function (){var G__358475 = (function bbss$portfolio$arrow_down(props__66614__auto__,maybe_ref__66615__auto__){
var vec__358476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__66614__auto__),maybe_ref__66615__auto__], null);

return helix.core.get_react().createElement("svg",(function (){var obj358480 = ({"height":(37),"viewBox":"0 0 24 37","width":"24","xmlns":"http://www.w3.org/2000/svg"});
return obj358480;
})(),helix.core.get_react().createElement("g",(function (){var obj358482 = ({"fill":"none","fillRule":"evenodd","stroke":"#000","strokeLinecap":"square","strokeWidth":"2.8","transform":"translate(2 1)"});
return obj358482;
})(),helix.core.get_react().createElement("path",(function (){var obj358484 = ({"d":"m2.82418338 30.8044364 13.57954542-.0568182.0568182-13.5795454","transform":"matrix(.70710678 .70710678 -.70710678 .70710678 19.785027 .20723)"});
return obj358484;
})()),helix.core.get_react().createElement("path",(function (){var obj358486 = ({"d":"m9.54545455.45075758v30.65151512"});
return obj358486;
})())));
});
if(goog.DEBUG === true){
var G__358487 = G__358475;
goog.object.set(G__358487,"displayName","bbss.portfolio/arrow-down");

return G__358487;
} else {
return G__358475;
}
})();



bbss.portfolio.hamburger_video_points = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Has big searchable dictionary and example dataset",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Creates study of any Korean text or image (e.g. page of a book)",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Scans sentences, dictionary matches, grammar",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(8)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Creates interactive view to aid understanding text",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(15)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Saves words for spaced-repetition memory practice",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(42)], null)], null);
bbss.portfolio.korean_tools_tt = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Has great client-server story"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Uses explicit state-machines in the UI where logic isn't trivial"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Inspectable normalized data on front-end"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Form-state makes server mutations minimal and unintrusive"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Intuitive data resolution from many datasources"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Fancy neuralnet tech for content and Korean grammar analysis"], null)], null);
bbss.portfolio.get_point_index = (function bbss$portfolio$get_point_index(points,at_time){
return ((function (){var or__4223__auto__ = cljs.core.some((function (p__358488){
var vec__358489 = p__358488;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358489,(0),null);
var map__358492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358489,(1),null);
var map__358492__$1 = cljs.core.__destructure_map(map__358492);
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358492__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
if((at_time < starts_at)){
return index;
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,points));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.count(points);
}
})() - (1));
});
bbss.portfolio.use_window_dimensions = (function bbss$portfolio$use_window_dimensions(){
var vec__358493 = module$node_modules$react$index.useState(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
var dims = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358493,(0),null);
var set_dims = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358493,(1),null);
module$node_modules$react$index.useEffect((function (){
var handler = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null))){
return null;
} else {
var G__358496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
return (set_dims.cljs$core$IFn$_invoke$arity$1 ? set_dims.cljs$core$IFn$_invoke$arity$1(G__358496) : set_dims.call(null,G__358496));
}
});
window.addEventListener("resize",handler);

return (function (){
return window.removeEventListener("resize",handler);
});
}),[]);

return dims;
});

bbss.portfolio.KoreanTools = (function (){var G__358499 = (function bbss$portfolio$KoreanTools(props__66614__auto__,maybe_ref__66615__auto__){
var vec__358500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__66614__auto__),maybe_ref__66615__auto__], null);
var map__358503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358500,(0),null);
var map__358503__$1 = cljs.core.__destructure_map(map__358503);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358503__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var video_ref = module$node_modules$react$index.useRef();
var vec__358504 = module$node_modules$react$index.useState((0));
var highlighted_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358504,(0),null);
var set_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358504,(1),null);
var vec__358507 = module$node_modules$react$index.useState(false);
var hovered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358507,(0),null);
var set_hovered_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358507,(1),null);
var vec__358510 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358510,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358510,(1),null);
var is_mobile_QMARK_ = (function (){var ua = navigator.userAgent.toLowerCase();
var or__4223__auto__ = ua.includes("ipad");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = ua.includes("ios");
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ua.includes("android");
}
}
})();
var dims = bbss.portfolio.use_window_dimensions();
var font_size = (((cljs.core.first(dims) < (660)))?"12px":(((cljs.core.first(dims) < (780)))?"14px":"18px"
));
var left_distance = (((cljs.core.first(dims) < (660)))?"200px":(((cljs.core.first(dims) < (780)))?"240px":"280px"
));
var available_phone_width = (cljs.core.first(dims) - (((cljs.core.first(dims) < (660)))?(200):(((cljs.core.first(dims) < (780)))?(300):(450)
)));
var ratio = (cljs.core.truth_(is_mobile_QMARK_)?(function (){var x__4309__auto__ = (1);
var y__4310__auto__ = (function (){var x__4306__auto__ = 0.1;
var y__4307__auto__ = (((cljs.core.second(dims) - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(400):(500))) / (766)) - 0.2);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})():(function (){var x__4309__auto__ = 0.8;
var y__4310__auto__ = (function (){var x__4306__auto__ = 0.1;
var y__4307__auto__ = ((available_phone_width / (766)) - 0.2);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})());
var phone_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"transform": (cljs.core.truth_(hovered_QMARK_)?["skew(0deg, 0deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join(''):["skew(5deg, 5deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join('')
), "config": module$node_modules$$react_spring$web$dist$react_spring_web_cjs.config.stiff}));
var vec__358513 = module$node_modules$react_intersection_observer$react_intersection_observer.useInView(({"threshold": 0.1}));
var in_view_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358513,(0),null);
var in_view_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358513,(1),null);
module$node_modules$react$index.useEffect((function (){
var time_changed = (function (e){
var new_point_index = bbss.portfolio.get_point_index(bbss.portfolio.hamburger_video_points,e.target.currentTime);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highlighted_point,new_point_index)){
return null;
} else {
return (set_point.cljs$core$IFn$_invoke$arity$1 ? set_point.cljs$core$IFn$_invoke$arity$1(new_point_index) : set_point.call(null,new_point_index));
}
});
if(cljs.core.truth_(video_ref.current)){
video_ref.current.addEventListener("timeupdate",time_changed);
} else {
}

return (function (){
if(cljs.core.truth_(video_ref.current)){
return video_ref.current.removeEventListener("timeupdate",time_changed);
} else {
return null;
}
});
}));

module$node_modules$react$index.useEffect((function (){
if(cljs.core.truth_((function (){var and__4221__auto__ = in_view_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return video_ref.current;
} else {
return and__4221__auto__;
}
})())){
return (video_ref.current.currentTime = (0));
} else {
return null;
}
}),[in_view_QMARK_]);

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358517 = ({"offset":(1),"speed":0.5,"style":({"height": "40px", "zIndex": (5)})});
return obj358517;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358519 = ({"variant":"h1","style":({"color": "transparent", "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj358519;
})(),"korean.tools")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358521 = ({"offset":0.95,"speed":2.9,"style":({"zIndex": (-1)}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((1)) : to_page.call(null,(1)));
})});
return obj358521;
})(),helix.core.get_react().createElement("img",(function (){var obj358523 = ({"style":(function (){var obj358525 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("20%"),"transform":helix.impl.props.__GT_js("rotate(10deg)")});
return obj358525;
})(),"height":"100px","src":"ktmain.png"});
return obj358523;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358527 = ({"offset":0.95,"speed":0.9,"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((1)) : to_page.call(null,(1)));
})});
return obj358527;
})(),helix.core.get_react().createElement("img",(function (){var obj358529 = ({"style":(function (){var obj358531 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("2px"),"left":helix.impl.props.__GT_js("5%"),"top":helix.impl.props.__GT_js("5%"),"transform":helix.impl.props.__GT_js("rotate(-10deg)")});
return obj358531;
})(),"width":"200px","src":"ktstudy.png"});
return obj358529;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358533 = ({"offset":0.9,"speed":0.4,"style":({"zIndex": (-1)}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((1)) : to_page.call(null,(1)));
})});
return obj358533;
})(),helix.core.get_react().createElement("img",(function (){var obj358535 = ({"src":"clj.png","height":"50px","width":"50px","style":(function (){var obj358537 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358537;
})()});
return obj358535;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358539 = ({"offset":0.9,"speed":1.9,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj358539;
})(),helix.core.get_react().createElement("img",(function (){var obj358541 = ({"style":(function (){var obj358543 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("30%"),"top":helix.impl.props.__GT_js("5%"),"transform":helix.impl.props.__GT_js("rotate(-15deg)")});
return obj358543;
})(),"src":"ktdebug.png","height":"150px"});
return obj358541;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358545 = ({"offset":(1),"speed":1.2,"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "height": "110vh"})});
return obj358545;
})(),helix.core.get_react().createElement("div",(function (){var obj358547 = ({"style":(function (){var obj358549 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative")});
return obj358549;
})(),"ref":in_view_ref});
return obj358547;
})(),helix.core.get_react().createElement("div",(function (){var obj358551 = ({"style":(function (){var obj358553 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"minWidth":helix.impl.props.__GT_js("90vw"),"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("10px")});
return obj358553;
})()});
return obj358551;
})(),helix.core.get_react().createElement("p",(function (){var obj358555 = ({"style":(function (){var obj358557 = ({"display":helix.impl.props.__GT_js("inline-block"),"fontFamily":helix.impl.props.__GT_js("Rubik, sans-serif"),"fontWeight":helix.impl.props.__GT_js("800"),"fontSize":helix.impl.props.__GT_js("1rem"),"lineHeight":helix.impl.props.__GT_js(1.66),"letterSpacing":helix.impl.props.__GT_js("0.03333em"),"color":helix.impl.props.__GT_js("rgba(255,255,255,0.8)")});
return obj358557;
})()});
return obj358555;
})(),"A ",helix.core.get_react().createElement("em",({}),"work in progress")," that I've been using to help me study Korean."),helix.core.get_react().createElement("p",(function (){var obj358561 = ({"style":(function (){var obj358563 = ({"display":helix.impl.props.__GT_js("inline-block"),"fontFamily":helix.impl.props.__GT_js("Rubik, sans-serif"),"fontWeight":helix.impl.props.__GT_js("800"),"fontSize":helix.impl.props.__GT_js("1rem"),"lineHeight":helix.impl.props.__GT_js(1.66),"letterSpacing":helix.impl.props.__GT_js("0.03333em"),"color":helix.impl.props.__GT_js("rgba(255,255,255,0.8)")});
return obj358563;
})()});
return obj358561;
})(),"I started turning it into an app because I think others might like the tool!"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj358565 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"}),"elevation":(3)});
return obj358565;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj358567 = ({"value":selected_tab,"onChange":(function (_,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj358567;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj358569 = ({"value":"points","label":"Highlights"});
return obj358569;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj358571 = ({"value":"tt","label":"Technical Tidbits"});
return obj358571;
})()),helix.core.get_react().createElement("img",(function (){var obj358573 = ({"src":"clj.png","title":"Clojure","alt":"Clojure","height":"30px","width":"30px","style":(function (){var obj358575 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358575;
})()});
return obj358573;
})()),helix.core.get_react().createElement("img",(function (){var obj358577 = ({"src":"cljs-white.svg","alt":"ClojureScript","title":"ClojureScript","height":"30px","width":"30px","style":(function (){var obj358579 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358579;
})()});
return obj358577;
})()),helix.core.get_react().createElement("img",(function (){var obj358581 = ({"src":"xtdb.svg","alt":"xtdb","title":"xtdb","height":"30px","style":(function (){var obj358583 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358583;
})()});
return obj358581;
})()),helix.core.get_react().createElement("img",(function (){var obj358585 = ({"src":"fulcro.svg","alt":"fulcro","title":"fulcro","height":"30px","width":"30px","style":(function (){var obj358587 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358587;
})()});
return obj358585;
})())),helix.core.get_react().createElement("div",(function (){var obj358589 = ({"style":(function (){var obj358591 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj358591;
})()});
return obj358589;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj358593 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj358593;
})(),helix.core.get_react().createElement("div",(function (){var obj358595 = ({"style":(function (){var obj358597 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js((cljs.core.truth_(is_mobile_QMARK_)?"row":"column"))});
return obj358597;
})(),"elevation":(3)});
return obj358595;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__358598){
var vec__358599 = p__358598;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358599,(0),null);
var map__358602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358599,(1),null);
var map__358602__$1 = cljs.core.__destructure_map(map__358602);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358602__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358602__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj358604 = ({"key":index,"variant":"outlined","style":({"transform": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"scale(1)":"scale(0.8)"), "transition": "200ms linear"}),"onClick":(function (){
return (video_ref.current.currentTime = starts_at);
})});
return obj358604;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358606 = ({"variant":"h6","style":({"fontSize": font_size}),"color":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"secondary":"primary")});
return obj358606;
})(),point));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.hamburger_video_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj358608 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj358608;
})(),helix.core.get_react().createElement("div",(function (){var obj358610 = ({"style":(function (){var obj358612 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj358612;
})()});
return obj358610;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__358613){
var vec__358614 = p__358613;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358614,(0),null);
var map__358617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358614,(1),null);
var map__358617__$1 = cljs.core.__destructure_map(map__358617);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358617__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358619 = ({"key":index,"variant":"h6","color":"primary"});
return obj358619;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.korean_tools_tt)))))))),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj358621 = ({"onMouseOver":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_hovered_BANG_.call(null,true));
}),"onMouseOut":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_hovered_BANG_.call(null,false));
}),"style":(cljs.core.truth_(is_mobile_QMARK_)?({"transform": phone_spring.transform, "borderRadius": "40px", "top": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.second(dims) / (2)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(180):(240)))),"px - 383px)"].join(''), "width": "375px", "zIndex": (5), "position": "absolute", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "812px", "left": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.first(dims) / (2))),"px - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((200)),"px)"].join(''), "margin": "40px auto"}):({"transform": phone_spring.transform, "borderRadius": "40px", "top": "-280px", "width": "375px", "position": "relative", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "812px", "left": left_distance, "margin": "40px auto"}))});
return obj358621;
})(),helix.core.get_react().createElement("video",(function (){var obj358623 = ({"autoPlay":true,"ref":video_ref,"muted":true,"loop":true,"playsInline":true,"id":"kt","style":(function (){var obj358625 = ({"borderRadius":helix.impl.props.__GT_js("30px"),"zIndex":helix.impl.props.__GT_js((20))});
return obj358625;
})()});
return obj358623;
})(),helix.core.get_react().createElement("source",(function (){var obj358627 = ({"src":"kt-hamburger.webm","type":"video/webm;codecs=\"vp8, vorbis\""});
return obj358627;
})()),helix.core.get_react().createElement("source",(function (){var obj358629 = ({"src":"kt-hamburger.mov","type":"video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""});
return obj358629;
})()))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj358631 = ({"style":({"minHeight": "10vh", "position": "absolute", "padding": "10px", "paddingRight": "40px", "bottom": (cljs.core.truth_(is_mobile_QMARK_)?"20vh":"10vh"), "left": "10px"}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((2)) : to_page.call(null,(2)));
})});
return obj358631;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358633 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj358633;
})(),"AIRCRAFT-NOISE.ORG"),helix.core.get_react().createElement("span",(function (){var obj358635 = ({"style":(function (){var obj358637 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("230px")});
return obj358637;
})()});
return obj358635;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__358638 = G__358499;
goog.object.set(G__358638,"displayName","bbss.portfolio/KoreanTools");

return G__358638;
} else {
return G__358499;
}
})();



bbss.portfolio.aircraft_noise_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"3D exploration of flight data",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Client-side data processing",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(12)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Different types of visualization",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(25)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Live flight streaming",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(72)], null)], null);
bbss.portfolio.aircraft_noise_tt = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Making use of the great vis.gl GIS tool suite."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Worked with Uber vis.gl team to squeeze out performance."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Using WebWorkers for data fetching & processing."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Keeping UI thread as yank-free as possible."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Use WebSockets and defined TypedArray layouts for optimal data transfer and display."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Use kafka for backfilling real-time flights."], null)], null);

bbss.portfolio.AircraftNoise = (function (){var G__358641 = (function bbss$portfolio$AircraftNoise(props__66614__auto__,maybe_ref__66615__auto__){
var vec__358642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__66614__auto__),maybe_ref__66615__auto__], null);
var map__358645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358642,(0),null);
var map__358645__$1 = cljs.core.__destructure_map(map__358645);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358645__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var video_ref = module$node_modules$react$index.useRef();
var vec__358646 = module$node_modules$react$index.useState((0));
var highlighted_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358646,(0),null);
var set_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358646,(1),null);
var vec__358649 = module$node_modules$react$index.useState(false);
var hovered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358649,(0),null);
var set_hovered_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358649,(1),null);
var vec__358652 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358652,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358652,(1),null);
var is_mobile_QMARK_ = (function (){var ua = navigator.userAgent.toLowerCase();
var or__4223__auto__ = ua.includes("ipad");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = ua.includes("ios");
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ua.includes("android");
}
}
})();
var vec__358655 = bbss.portfolio.use_window_dimensions();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358655,(0),null);
var window_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358655,(1),null);
var ratio = (function (){var x__4309__auto__ = 0.8;
var y__4310__auto__ = (function (){var x__4306__auto__ = 0.1;
var y__4307__auto__ = (((window_height - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(400):(500))) / (766)) - 0.1);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var tablet_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"transform": (cljs.core.truth_(hovered_QMARK_)?["skew(0deg, 0deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join(''):["skew(5deg, 5deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join('')), "config": module$node_modules$$react_spring$web$dist$react_spring_web_cjs.config.stiff}));
var vec__358658 = module$node_modules$react_intersection_observer$react_intersection_observer.useInView(({"threshold": 0.5}));
var in_view_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358658,(0),null);
var in_view_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358658,(1),null);
module$node_modules$react$index.useEffect((function (){
var time_changed = (function (e){
var new_point_index = bbss.portfolio.get_point_index(bbss.portfolio.aircraft_noise_points,e.target.currentTime);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highlighted_point,new_point_index)){
return null;
} else {
return (set_point.cljs$core$IFn$_invoke$arity$1 ? set_point.cljs$core$IFn$_invoke$arity$1(new_point_index) : set_point.call(null,new_point_index));
}
});
if(cljs.core.truth_(video_ref.current)){
video_ref.current.addEventListener("timeupdate",time_changed);
} else {
}

return (function (){
if(cljs.core.truth_(video_ref.current)){
return video_ref.current.removeEventListener("timeupdate",time_changed);
} else {
return null;
}
});
}));

module$node_modules$react$index.useEffect((function (){
if(cljs.core.truth_((function (){var and__4221__auto__ = in_view_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return video_ref.current;
} else {
return and__4221__auto__;
}
})())){
return (video_ref.current.currentTime = (0));
} else {
return null;
}
}),[in_view_QMARK_]);

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358662 = ({"offset":(2),"speed":0.5,"style":({"height": "115px", "zIndex": (7), "overflow": "hidden"})});
return obj358662;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358664 = ({"variant":"h1","style":({"color": "transparent", "zIndex": (6), "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj358664;
})(),"aircraft-noise.org")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358666 = ({"offset":1.96,"speed":0.5,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj358666;
})(),helix.core.get_react().createElement("img",(function (){var obj358668 = ({"style":(function (){var obj358670 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("70%"),"zIndex":helix.impl.props.__GT_js((-1)),"top":helix.impl.props.__GT_js("300px"),"userSelect":helix.impl.props.__GT_js("none"),"pointerEvents":helix.impl.props.__GT_js("none"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(-10deg)")});
return obj358670;
})(),"height":"250px","src":"acnsf.png"});
return obj358668;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358672 = ({"offset":1.96,"speed":0.4,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj358672;
})(),helix.core.get_react().createElement("img",(function (){var obj358674 = ({"style":(function (){var obj358676 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("40%"),"top":helix.impl.props.__GT_js("300px"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(5deg)")});
return obj358676;
})(),"height":"250px","src":"acnheatmap.png"});
return obj358674;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358678 = ({"offset":1.96,"speed":0.2,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj358678;
})(),helix.core.get_react().createElement("img",(function (){var obj358680 = ({"style":(function (){var obj358682 = ({"position":helix.impl.props.__GT_js("absolute"),"top":helix.impl.props.__GT_js("300px"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("10%"),"transform":helix.impl.props.__GT_js("rotate(-5deg)")});
return obj358682;
})(),"height":"250px","src":"acnterrain.png"});
return obj358680;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358684 = ({"offset":(2),"speed":(1),"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "height": "110vh", "zIndex": (5)})});
return obj358684;
})(),helix.core.get_react().createElement("div",(function (){var obj358686 = ({"style":(function (){var obj358688 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative"),"justifyContent":helix.impl.props.__GT_js("center")});
return obj358688;
})(),"ref":in_view_ref});
return obj358686;
})(),helix.core.get_react().createElement("div",(function (){var obj358690 = ({"style":(function (){var obj358692 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("10px")});
return obj358692;
})()});
return obj358690;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358694 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj358694;
})(),"Supporting researchers in visualizing models of aircraft noise pollution. Building visualizations and supporting tools."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj358696 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"})});
return obj358696;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj358698 = ({"value":selected_tab,"onChange":(function (___$1,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj358698;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj358700 = ({"value":"points","label":"Highlights"});
return obj358700;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj358702 = ({"value":"tt","label":"Technical Tidbits"});
return obj358702;
})()),helix.core.get_react().createElement("img",(function (){var obj358704 = ({"src":"clj.png","title":"Clojure","alt":"Clojure","height":"30px","width":"30px","style":(function (){var obj358706 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358706;
})()});
return obj358704;
})()),helix.core.get_react().createElement("img",(function (){var obj358708 = ({"src":"cljs-white.svg","alt":"ClojureScript","title":"ClojureScript","height":"30px","width":"30px","style":(function (){var obj358710 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358710;
})()});
return obj358708;
})()),helix.core.get_react().createElement("img",(function (){var obj358712 = ({"src":"postgres.svg","alt":"postgres","title":"postgres","height":"30px","width":"30px","style":(function (){var obj358714 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358714;
})()});
return obj358712;
})()),helix.core.get_react().createElement("img",(function (){var obj358716 = ({"src":"kafka.svg","alt":"kafka","title":"kafka","height":"30px","style":(function (){var obj358718 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358718;
})()});
return obj358716;
})())),helix.core.get_react().createElement("div",(function (){var obj358720 = ({"style":(function (){var obj358722 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj358722;
})()});
return obj358720;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj358724 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj358724;
})(),helix.core.get_react().createElement("div",(function (){var obj358726 = ({"style":(function (){var obj358728 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex")});
return obj358728;
})()});
return obj358726;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__358729){
var vec__358730 = p__358729;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358730,(0),null);
var map__358733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358730,(1),null);
var map__358733__$1 = cljs.core.__destructure_map(map__358733);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358733__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358733__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj358735 = ({"key":index,"variant":"outlined","style":({"transform": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"scale(1)":"scale(0.8)"), "transition": "200ms linear"}),"onClick":(function (){
return (video_ref.current.currentTime = starts_at);
})});
return obj358735;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358737 = ({"variant":"h6","color":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"secondary":"primary")});
return obj358737;
})(),point));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.aircraft_noise_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj358739 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj358739;
})(),helix.core.get_react().createElement("div",(function (){var obj358741 = ({"style":(function (){var obj358743 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj358743;
})()});
return obj358741;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__358744){
var vec__358745 = p__358744;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358745,(0),null);
var map__358748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358745,(1),null);
var map__358748__$1 = cljs.core.__destructure_map(map__358748);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358748__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358750 = ({"key":index,"variant":"h6","color":"primary"});
return obj358750;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.aircraft_noise_tt))))))),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj358752 = ({"onMouseOver":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_hovered_BANG_.call(null,true));
}),"onMouseOut":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_hovered_BANG_.call(null,false));
}),"style":({"transform": tablet_spring.transform, "borderRadius": "40px", "top": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((window_height / (2)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(180):(240)))),"px - 383px)"].join(''), "width": "1000px", "zIndex": (5), "position": "absolute", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "766px", "left": "calc(50% - 500px)", "margin": "40px auto"})});
return obj358752;
})(),helix.core.get_react().createElement("video",(function (){var obj358754 = ({"autoPlay":true,"muted":true,"loop":true,"playsInline":true,"ref":video_ref,"style":(function (){var obj358756 = ({"width":helix.impl.props.__GT_js("1000px"),"height":helix.impl.props.__GT_js("766px"),"zIndex":helix.impl.props.__GT_js((6)),"borderRadius":helix.impl.props.__GT_js("40px")});
return obj358756;
})()});
return obj358754;
})(),helix.core.get_react().createElement("source",(function (){var obj358758 = ({"src":"acn.mp4","type":"video/webm;codecs=\"vp8, vorbis\""});
return obj358758;
})()),helix.core.get_react().createElement("source",(function (){var obj358760 = ({"src":"acn.mov","type":"video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""});
return obj358760;
})())))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj358762 = ({"style":({"minHeight": "10vh", "position": "absolute", "padding": "10px", "paddingRight": "40px", "bottom": (cljs.core.truth_(is_mobile_QMARK_)?"20vh":"10vh"), "left": "10px", "zIndex": (10)}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((3)) : to_page.call(null,(3)));
})});
return obj358762;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358764 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj358764;
})(),"CLJSC2"),helix.core.get_react().createElement("span",(function (){var obj358766 = ({"style":(function (){var obj358768 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("100px")});
return obj358768;
})()});
return obj358766;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__358769 = G__358641;
goog.object.set(G__358769,"displayName","bbss.portfolio/AircraftNoise");

return G__358769;
} else {
return G__358641;
}
})();



bbss.portfolio.cljsc2_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Allows running and configuring multiple instances of SC2 games."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Allows interactive control of SC2 game via Clojure REPL."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Wraps full API for low level control."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Provides data-based api with game-state query capabilities for higher level control."], null)], null);
bbss.portfolio.cljsc2_tt = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Parses API EBNF context free grammar file to generate Clojure specs."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Provides datalog version of gamestate, and higher level rules to start playing the game."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Integrated clojure and cljsc2 into Jupyter Notebook for interactive studies."], null)], null);

bbss.portfolio.Cljsc2 = (function (){var G__358772 = (function bbss$portfolio$Cljsc2(props__66614__auto__,maybe_ref__66615__auto__){
var vec__358773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__66614__auto__),maybe_ref__66615__auto__], null);
var map__358776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358773,(0),null);
var map__358776__$1 = cljs.core.__destructure_map(map__358776);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358776__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var vec__358777 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358777,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358777,(1),null);
var is_mobile_QMARK_ = (function (){var ua = navigator.userAgent.toLowerCase();
var or__4223__auto__ = ua.includes("ipad");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = ua.includes("ios");
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ua.includes("android");
}
}
})();
var vec__358780 = bbss.portfolio.use_window_dimensions();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358780,(0),null);
var window_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358780,(1),null);
return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358784 = ({"offset":(3),"speed":0.5,"style":({"height": "40px", "zIndex": (5)})});
return obj358784;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358786 = ({"variant":"h1","style":({"color": "transparent", "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj358786;
})(),"CLJSC2")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358788 = ({"offset":2.999,"speed":0.4});
return obj358788;
})(),helix.core.get_react().createElement("img",(function (){var obj358790 = ({"style":(function (){var obj358792 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(10deg)")});
return obj358792;
})(),"height":"500px","src":"meblizz.jpeg"});
return obj358790;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358794 = ({"offset":2.9999999,"speed":0.3});
return obj358794;
})(),helix.core.get_react().createElement("img",(function (){var obj358796 = ({"style":(function (){var obj358798 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"right":helix.impl.props.__GT_js("-70%"),"transform":helix.impl.props.__GT_js("rotate(3deg)")});
return obj358798;
})(),"height":"400px","src":"sc2notebook.png"});
return obj358796;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358800 = ({"offset":2.99,"speed":0.6});
return obj358800;
})(),helix.core.get_react().createElement("img",(function (){var obj358802 = ({"style":(function (){var obj358804 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("scale(0.4) rotate(-3deg)")});
return obj358804;
})(),"src":"sc2deepmind.jpeg"});
return obj358802;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358806 = ({"offset":2.999,"speed":0.1});
return obj358806;
})(),helix.core.get_react().createElement("img",(function (){var obj358808 = ({"style":(function (){var obj358810 = ({"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20%"),"transform":helix.impl.props.__GT_js("scale(0.6) rotate(-5deg)")});
return obj358810;
})(),"src":"sc2.png"});
return obj358808;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358812 = ({"offset":(3),"speed":1.2,"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "height": "110vh", "zIndex": (3)})});
return obj358812;
})(),helix.core.get_react().createElement("div",(function (){var obj358814 = ({"style":(function (){var obj358816 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative")});
return obj358816;
})()});
return obj358814;
})(),helix.core.get_react().createElement("div",(function (){var obj358818 = ({"style":(function (){var obj358820 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("10px")});
return obj358820;
})()});
return obj358818;
})(),helix.core.get_react().createElement("div",(function (){var obj358822 = ({"style":(function (){var obj358824 = ({"display":helix.impl.props.__GT_js("inline")});
return obj358824;
})()});
return obj358822;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358826 = ({"variant":"body1","style":({"color": "lightgray", "display": "inline"})});
return obj358826;
})(),"Wrote an "),helix.core.get_react().createElement("a",(function (){var obj358828 = ({"href":"https://github.com/bbss/cljsc2","style":helix.impl.props.native_style(({"background": "rgba(255,255,255,0.5)"}))});
return obj358828;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358830 = ({"variant":"body1","style":({"display": "inline"})});
return obj358830;
})(),"open source Clojure library")),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358832 = ({"variant":"body1","style":({"color": "lightgray", "display": "inline"})});
return obj358832;
})()," to the StarCraft II AI API.")),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358834 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj358834;
})(),"When DeepMind beat the legendary Lee Sedol (\uC774\uC138\uB3CC) in the old Asian game of Go they announced maybe tackling StarCraft next, I got very excited.."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358836 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj358836;
})(),"When Blizzard announced their cooperation and AI API I knew I wanted to hook up my favorite programming language to experiment with it."),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358838 = ({"varinat":"body1","style":({"color": "lightgray"})});
return obj358838;
})(),"Around the time I finished my first experiments I got an invite to a workshop with StarCraft II developers and DeepMind researchers!"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358840 = ({"varinat":"body1","style":({"color": "lightgray"})});
return obj358840;
})(),"Super lucky to meet a lot of smart people and talk about these awesome topics."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj358842 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"})});
return obj358842;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj358844 = ({"value":selected_tab,"onChange":(function (___$1,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj358844;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj358846 = ({"value":"points","label":"Highlights"});
return obj358846;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj358848 = ({"value":"tt","label":"Technical Tidbits"});
return obj358848;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj358850 = ({"value":"yt","label":"Meetup Talk"});
return obj358850;
})())),helix.core.get_react().createElement("div",(function (){var obj358852 = ({"style":(function (){var obj358854 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj358854;
})()});
return obj358852;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj358856 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj358856;
})(),helix.core.get_react().createElement("div",(function (){var obj358858 = ({"style":(function (){var obj358860 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column")});
return obj358860;
})()});
return obj358858;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__358861){
var vec__358862 = p__358861;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358862,(0),null);
var map__358865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358862,(1),null);
var map__358865__$1 = cljs.core.__destructure_map(map__358865);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358865__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358865__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358867 = ({"key":index,"variant":"h6","color":"primary"});
return obj358867;
})(),point);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.cljsc2_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj358869 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj358869;
})(),helix.core.get_react().createElement("div",(function (){var obj358871 = ({"style":(function (){var obj358873 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj358873;
})()});
return obj358871;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__358874){
var vec__358875 = p__358874;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358875,(0),null);
var map__358878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358875,(1),null);
var map__358878__$1 = cljs.core.__destructure_map(map__358878);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358878__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358880 = ({"key":index,"variant":"h6","color":"primary"});
return obj358880;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.cljsc2_tt)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj358882 = ({"direction":"up","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"yt")});
return obj358882;
})(),helix.core.get_react().createElement("div",(function (){var obj358884 = ({"style":(function (){var obj358886 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj358886;
})()});
return obj358884;
})(),helix.core.get_react().createElement("iframe",(function (){var obj358888 = ({"width":(560),"height":(315),"src":"https://www.youtube.com/embed/c5DifklnMI8","frameBorder":(0),"allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"});
return obj358888;
})()))))))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj358890 = ({"style":({"minHeight": "10vh", "position": "absolute", "padding": "10px", "paddingRight": "40px", "bottom": (cljs.core.truth_(is_mobile_QMARK_)?"20vh":"10vh"), "left": "10px", "zIndex": (10)}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((4)) : to_page.call(null,(4)));
})});
return obj358890;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358892 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj358892;
})(),"DATA.WORLDBANK.ORG"),helix.core.get_react().createElement("span",(function (){var obj358894 = ({"style":(function (){var obj358896 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("240px")});
return obj358896;
})()});
return obj358894;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__358897 = G__358772;
goog.object.set(G__358897,"displayName","bbss.portfolio/Cljsc2");

return G__358897;
} else {
return G__358772;
}
})();



bbss.portfolio.wb_points = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Autocompletes datasets/countries regions",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Has graphs and map visualizations",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Recommends further related data",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(20)], null)], null);
bbss.portfolio.wb_tt = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Used by millions of people!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Early adopter of ReactJS Redux pattern."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Wraps datasets with a falcorJS data resolution system: "], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Easy fetching, caching, batching for slow devices."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"D3.js for custom graphs + intuitive touch interactions."], null)], null);

bbss.portfolio.Worldbank = (function (){var G__358900 = (function bbss$portfolio$Worldbank(props__66614__auto__,maybe_ref__66615__auto__){
var vec__358901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__66614__auto__),maybe_ref__66615__auto__], null);
var map__358904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358901,(0),null);
var map__358904__$1 = cljs.core.__destructure_map(map__358904);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358904__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var video_ref = module$node_modules$react$index.useRef();
var vec__358905 = module$node_modules$react$index.useState((0));
var highlighted_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358905,(0),null);
var set_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358905,(1),null);
var vec__358908 = module$node_modules$react$index.useState(false);
var hovered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358908,(0),null);
var set_hovered_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358908,(1),null);
var vec__358911 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358911,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358911,(1),null);
var vec__358914 = module$node_modules$react_intersection_observer$react_intersection_observer.useInView(({"threshold": 0.5}));
var in_view_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358914,(0),null);
var in_view_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358914,(1),null);
var is_mobile_QMARK_ = (function (){var ua = navigator.userAgent.toLowerCase();
var or__4223__auto__ = ua.includes("ipad");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = ua.includes("ios");
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ua.includes("android");
}
}
})();
var dims = bbss.portfolio.use_window_dimensions();
var font_size = (((cljs.core.first(dims) < (660)))?"12px":(((cljs.core.first(dims) < (780)))?"14px":"18px"
));
var available_phone_width = (cljs.core.first(dims) - (((cljs.core.first(dims) < (660)))?(200):(((cljs.core.first(dims) < (780)))?(300):(400)
)));
var ratio = (cljs.core.truth_(is_mobile_QMARK_)?(function (){var x__4309__auto__ = (1);
var y__4310__auto__ = (function (){var x__4306__auto__ = 0.1;
var y__4307__auto__ = (((cljs.core.second(dims) - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(400):(500))) / (766)) - 0.2);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})():(function (){var x__4309__auto__ = 0.8;
var y__4310__auto__ = (function (){var x__4306__auto__ = 0.1;
var y__4307__auto__ = ((available_phone_width / (766)) - 0.2);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})());
var phone_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"transform": (cljs.core.truth_(hovered_QMARK_)?["skew(0deg, 0deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join(''):["skew(5deg, 5deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join('')
), "config": module$node_modules$$react_spring$web$dist$react_spring_web_cjs.config.stiff}));
module$node_modules$react$index.useEffect((function (){
var time_changed = (function (e){
var new_point_index = bbss.portfolio.get_point_index(bbss.portfolio.wb_points,e.target.currentTime);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highlighted_point,new_point_index)){
return null;
} else {
return (set_point.cljs$core$IFn$_invoke$arity$1 ? set_point.cljs$core$IFn$_invoke$arity$1(new_point_index) : set_point.call(null,new_point_index));
}
});
if(cljs.core.truth_(video_ref.current)){
video_ref.current.addEventListener("timeupdate",time_changed);
} else {
}

return (function (){
if(cljs.core.truth_(video_ref.current)){
return video_ref.current.removeEventListener("timeupdate",time_changed);
} else {
return null;
}
});
}));

module$node_modules$react$index.useEffect((function (){
if(cljs.core.truth_((function (){var and__4221__auto__ = in_view_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return video_ref.current;
} else {
return and__4221__auto__;
}
})())){
return (video_ref.current.currentTime = (0));
} else {
return null;
}
}),[in_view_QMARK_]);

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358918 = ({"offset":(4),"speed":0.5,"style":({"height": "40px", "zIndex": (5)})});
return obj358918;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358920 = ({"variant":"h1","ref":in_view_ref,"style":({"color": "transparent", "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj358920;
})(),"data.worldbank.org")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358922 = ({"offset":3.96,"speed":0.5});
return obj358922;
})(),helix.core.get_react().createElement("img",(function (){var obj358924 = ({"style":(function (){var obj358926 = ({"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("800px"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(10deg)")});
return obj358926;
})(),"height":"250px","src":"wbindicators.png"});
return obj358924;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358928 = ({"offset":3.96,"speed":0.4});
return obj358928;
})(),helix.core.get_react().createElement("img",(function (){var obj358930 = ({"style":(function (){var obj358932 = ({"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("300px"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(5deg)")});
return obj358932;
})(),"height":"250px","src":"wbmain.png"});
return obj358930;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358934 = ({"offset":3.96,"speed":0.3});
return obj358934;
})(),helix.core.get_react().createElement("img",(function (){var obj358936 = ({"style":(function (){var obj358938 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("0px"),"transform":helix.impl.props.__GT_js("rotate(-5deg)")});
return obj358938;
})(),"height":"250px","src":"wb2.png"});
return obj358936;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj358940 = ({"offset":(4),"speed":1.2,"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "zIndex": (3)})});
return obj358940;
})(),helix.core.get_react().createElement("div",(function (){var obj358942 = ({"style":(function (){var obj358944 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative")});
return obj358944;
})(),"ref":in_view_ref});
return obj358942;
})(),helix.core.get_react().createElement("div",(function (){var obj358946 = ({"style":(function (){var obj358948 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("10px")});
return obj358948;
})()});
return obj358946;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358950 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj358950;
})(),"Built the mobile-first SPA for the Open Data platform of the World Bank. The Open Data platform has a big dataset of yearly indicators for all countries in the world.  The datasets are explorable in a bunch of ways and can be mixed and visualized to the user's liking."),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358952 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj358952;
})(),"The Open Data platform has a big dataset of yearly indicators for all countries in the world."),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj358954 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj358954;
})(),"The datasets are explorable in a bunch of ways and can be mixed and visualized to the user's liking."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj358956 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"})});
return obj358956;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj358958 = ({"value":selected_tab,"onChange":(function (_,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj358958;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj358960 = ({"value":"points","label":"Highlights"});
return obj358960;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj358962 = ({"value":"tt","label":"Technical Tidbits"});
return obj358962;
})()),helix.core.get_react().createElement("img",(function (){var obj358964 = ({"src":"js.png","alt":"JavaScript","title":"JavaScript","height":"30px","width":"30px","style":(function (){var obj358966 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358966;
})()});
return obj358964;
})()),helix.core.get_react().createElement("img",(function (){var obj358968 = ({"src":"node.svg","alt":"node.js","title":"node.js","height":"30px","width":"30px","style":(function (){var obj358970 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358970;
})()});
return obj358968;
})()),helix.core.get_react().createElement("img",(function (){var obj358972 = ({"src":"d3.svg","alt":"JavaScript","title":"JavaScript","height":"30px","width":"30px","style":(function (){var obj358974 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358974;
})()});
return obj358972;
})()),helix.core.get_react().createElement("img",(function (){var obj358976 = ({"src":"falcor.svg","alt":"falcorJS","title":"falcorJS","height":"30px","width":"30px","style":(function (){var obj358978 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358978;
})()});
return obj358976;
})()),helix.core.get_react().createElement("img",(function (){var obj358980 = ({"src":"redis-cube.svg","alt":"redis","title":"redis","height":"30px","width":"30px","style":(function (){var obj358982 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj358982;
})()});
return obj358980;
})())),helix.core.get_react().createElement("div",(function (){var obj358984 = ({"style":(function (){var obj358986 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative")});
return obj358986;
})()});
return obj358984;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj358988 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj358988;
})(),helix.core.get_react().createElement("div",(function (){var obj358990 = ({"style":(function (){var obj358992 = ({"position":helix.impl.props.__GT_js("absolute"),"top":helix.impl.props.__GT_js("5px"),"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column")});
return obj358992;
})()});
return obj358990;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__358993){
var vec__358994 = p__358993;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358994,(0),null);
var map__358997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__358994,(1),null);
var map__358997__$1 = cljs.core.__destructure_map(map__358997);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358997__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__358997__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj358999 = ({"key":index,"variant":"outlined","style":({"transform": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"scale(1)":"scale(0.8)"), "transition": "200ms linear"}),"onClick":(function (){
return (video_ref.current.currentTime = starts_at);
})});
return obj358999;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359001 = ({"variant":"h6","style":({"fontSize": font_size}),"color":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"secondary":"primary")});
return obj359001;
})(),point));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.wb_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj359003 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj359003;
})(),helix.core.get_react().createElement("div",(function (){var obj359005 = ({"style":(function (){var obj359007 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj359007;
})()});
return obj359005;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__359008){
var vec__359009 = p__359008;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__359009,(0),null);
var map__359012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__359009,(1),null);
var map__359012__$1 = cljs.core.__destructure_map(map__359012);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__359012__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359014 = ({"key":index,"variant":"h6","style":({"paddingLeft": "10px", "fontSize": font_size}),"color":"primary"});
return obj359014;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.wb_tt))))))),helix.core.get_react().createElement("div",(function (){var obj359016 = ({"key":(0),"style":(function (){var obj359018 = ({"margin":helix.impl.props.__GT_js("30px")});
return obj359018;
})()});
return obj359016;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj359020 = ({"onMouseOver":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_hovered_BANG_.call(null,true));
}),"onMouseOut":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_hovered_BANG_.call(null,false));
}),"style":(cljs.core.truth_(is_mobile_QMARK_)?({"transform": phone_spring.transform, "borderRadius": "40px", "top": "40vh", "width": "330px", "position": "absolute", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "714px", "left": ((cljs.core.first(dims) / (2)) - (155)), "margin": "40px auto"}):({"transform": phone_spring.transform, "borderRadius": "40px", "top": (((cljs.core.first(dims) < (660)))?(100):(((cljs.core.first(dims) < (780)))?(100):(50)
)), "width": "330px", "right": (((cljs.core.first(dims) < (660)))?(230):(((cljs.core.first(dims) < (780)))?(120):(100)
)), "position": "relative", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "714px", "margin": "40px auto"}))});
return obj359020;
})(),helix.core.get_react().createElement("video",(function (){var obj359022 = ({"autoPlay":true,"muted":true,"loop":true,"playsInline":true,"ref":video_ref,"style":(function (){var obj359024 = ({"width":helix.impl.props.__GT_js("330px"),"height":helix.impl.props.__GT_js("714px"),"zIndex":helix.impl.props.__GT_js((6)),"borderRadius":helix.impl.props.__GT_js("40px")});
return obj359024;
})()});
return obj359022;
})(),helix.core.get_react().createElement("source",(function (){var obj359026 = ({"src":"wb.mp4","type":"video/webm;codecs=\"vp8, vorbis\""});
return obj359026;
})()),helix.core.get_react().createElement("source",(function (){var obj359028 = ({"src":"wb.mov","type":"video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""});
return obj359028;
})()))))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj359030 = ({"style":({"zIndex": (10), "position": "absolute", "padding": "20px", "bottom": (0), "left": "10px"}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((0)) : to_page.call(null,(0)));
})});
return obj359030;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359032 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj359032;
})(),"TOP"),helix.core.get_react().createElement("span",(function (){var obj359034 = ({"style":(function (){var obj359036 = ({"transform":helix.impl.props.__GT_js("rotate(180deg)"),"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("80px")});
return obj359036;
})()});
return obj359034;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__359037 = G__358900;
goog.object.set(G__359037,"displayName","bbss.portfolio/Worldbank");

return G__359037;
} else {
return G__358900;
}
})();



bbss.portfolio.works = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"korean-tools","korean-tools",1842211947,null),bbss.portfolio.KoreanTools,new cljs.core.Symbol(null,"aircraft-noise.org","aircraft-noise.org",-965640641,null),bbss.portfolio.AircraftNoise,new cljs.core.Symbol(null,"cljsc2","cljsc2",-1734546000,null),bbss.portfolio.Cljsc2,new cljs.core.Symbol(null,"worldbank","worldbank",-1267436091,null),bbss.portfolio.Worldbank], null);
bbss.portfolio.theme = module$node_modules$$material_ui$core$esm$styles$index.createTheme(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Rubik, sans-serif"], null),new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),bbss.portfolio.gray,new cljs.core.Keyword(null,"main","main",-2117802661),bbss.portfolio.gray,new cljs.core.Keyword(null,"dark","dark",1818973999),bbss.portfolio.gray,new cljs.core.Keyword(null,"contrastText","contrastText",-587910032),"#fff"], null),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),bbss.portfolio.orange,new cljs.core.Keyword(null,"main","main",-2117802661),bbss.portfolio.orange,new cljs.core.Keyword(null,"dark","dark",1818973999),bbss.portfolio.orange,new cljs.core.Keyword(null,"contrastText","contrastText",-587910032),"#fff"], null)], null)], null)));

bbss.portfolio.Menu = (function (){var G__359040 = (function bbss$portfolio$Menu(props__66614__auto__,maybe_ref__66615__auto__){
var vec__359041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__66614__auto__),maybe_ref__66615__auto__], null);
var map__359044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__359041,(0),null);
var map__359044__$1 = cljs.core.__destructure_map(map__359044);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__359044__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var pop_ref = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpringRef();
var reveal_ref = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpringRef();
var vec__359045 = module$node_modules$react_intersection_observer$react_intersection_observer.useInView(({"threshold": 0.5}));
var in_view_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__359045,(0),null);
var top_in_view_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__359045,(1),null);
var dims = bbss.portfolio.use_window_dimensions();
var title_font_size = (((cljs.core.first(dims) > (1080)))?(80):(60)
);
var font_size = (((cljs.core.second(dims) > (700)))?(40):(30)
);
var links = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["korean.tools","aircraft-noise.org","cljsc2","data.worldbank.org"], null));
var is_mobile_QMARK_ = (function (){var ua = navigator.userAgent.toLowerCase();
var or__4223__auto__ = ua.includes("ipad");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = ua.includes("ios");
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ua.includes("android");
}
}
})();
var pop_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"ref": pop_ref, "transform": (((((window.innerWidth < (1000))) && (cljs.core.not(is_mobile_QMARK_))))?"scale(0)":(cljs.core.truth_(top_in_view_QMARK_)?"scale(1)":"scale(0)"
))}));
var trail_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useTransition((cljs.core.truth_(top_in_view_QMARK_)?cljs.core.to_array(links):[]),({"ref": reveal_ref, "reset": true, "trail": (50), "keys": cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second), "config": ({"mass": (4), "tension": (2000), "friction": (200)}), "enter": ({"opacity": (cljs.core.truth_(top_in_view_QMARK_)?(1):(0)), "height": (cljs.core.truth_(top_in_view_QMARK_)?"100px":"0px"), "x": (cljs.core.truth_(top_in_view_QMARK_)?(0):(20))}), "from": ({"opacity": (0), "x": (20), "height": "100px"})}));
module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useChain((cljs.core.truth_(top_in_view_QMARK_)?[pop_ref,reveal_ref]:[reveal_ref,pop_ref]));

return helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj359049 = ({"style":({"display": "flex", "flexDirection": "column", "margin": "20px", "background": "linear-gradient(to right, rgba(100, 100, 100, 0.15), rgba(100, 100, 100, 0.3))", "padding": "100px", "clipPath": "polygon(0 1%, 100% 0%, 90% 95%, 10% 90%)", "transform": pop_spring.transform}),"ref":in_view_ref});
return obj359049;
})(),helix.core.get_react().createElement("p",(function (){var obj359051 = ({"style":(function (){var obj359053 = ({"fontFamily":helix.impl.props.__GT_js("'Zen Tokyo Zoo', cursive"),"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_font_size),"px"].join('')),"whiteSpace":helix.impl.props.__GT_js("nowrap"),"color":helix.impl.props.__GT_js("white")});
return obj359053;
})()});
return obj359051;
})(),"some of my work"),(function (){var G__359054 = (function (props,p__359055,opts){
var vec__359056 = p__359055;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__359056,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__359056,(1),null);
return helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj359060 = ({"style":({"opacity": props.opacity, "height": props.height, "x": props.x}),"key":item});
return obj359060;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj359062 = ({"style":({})});
return obj359062;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj359064 = ({"variant":"outlined","style":({"margin": (((cljs.core.second(dims) > (700)))?"15px":"0px"), "padding": (((cljs.core.second(dims) > (700)))?"15px":"0px"), "textTransform": "none"}),"onClick":(function (){
var G__359065 = (i + (1));
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1(G__359065) : to_page.call(null,G__359065));
})});
return obj359064;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359067 = ({"variant":"h3","style":({"color": "transparent", "fontSize": font_size, "WebkitTextStrokeWidth": "1px", "WebkitTextStrokeColor": "white"})});
return obj359067;
})(),item))));
});
return (trail_spring.cljs$core$IFn$_invoke$arity$1 ? trail_spring.cljs$core$IFn$_invoke$arity$1(G__359054) : trail_spring.call(null,G__359054));
})());
});
if(goog.DEBUG === true){
var G__359068 = G__359040;
goog.object.set(G__359068,"displayName","bbss.portfolio/Menu");

return G__359068;
} else {
return G__359040;
}
})();




bbss.portfolio.App = (function (){var G__359072 = (function bbss$portfolio$App(props__66614__auto__,maybe_ref__66615__auto__){
var vec__359073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__66614__auto__),maybe_ref__66615__auto__], null);

var parallax_ref = module$node_modules$react$index.useRef();
var to_page = (function (p1__359069_SHARP_){
return parallax_ref.current.scrollTo(p1__359069_SHARP_);
});
var thin_QMARK_ = module$node_modules$$material_ui$core$index.useMediaQuery("(max-width: 1000px)");
var long_QMARK_ = module$node_modules$$material_ui$core$index.useMediaQuery("(min-height: 804px)");
var is_mobile_QMARK_ = (function (){var ua = navigator.userAgent.toLowerCase();
var or__4223__auto__ = ua.includes("ipad");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = ua.includes("ios");
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ua.includes("android");
}
}
})();
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$esm$styles$index.ThemeProvider,(function (){var obj359077 = ({"theme":bbss.portfolio.theme});
return obj359077;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.Parallax,(function (){var obj359079 = ({"ref":parallax_ref,"pages":(cljs.core.count(bbss.portfolio.works) + (1)),"style":({"top": (0), "left": (0)})});
return obj359079;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj359081 = ({"offset":(0)});
return obj359081;
})(),helix.core.get_react().createElement("div",(function (){var obj359083 = ({"style":(function (){var obj359085 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js((cljs.core.truth_((function (){var and__4221__auto__ = long_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = thin_QMARK_;
if(cljs.core.truth_(and__4221__auto____$1)){
return is_mobile_QMARK_;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())?"column":"row")),"width":helix.impl.props.__GT_js("100vw"),"height":helix.impl.props.__GT_js("100%")});
return obj359085;
})()});
return obj359083;
})(),helix.core.get_react().createElement("div",(function (){var obj359087 = ({"style":(function (){var obj359089 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"alignItems":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("30px")});
return obj359089;
})()});
return obj359087;
})(),helix.core.get_react().createElement("img",(function (){var obj359091 = ({"style":(function (){var obj359093 = ({"borderRadius":helix.impl.props.__GT_js("50%"),"zIndex":helix.impl.props.__GT_js((10)),"minHeight":helix.impl.props.__GT_js("30%"),"maxHeight":helix.impl.props.__GT_js("50%"),"maxWidth":helix.impl.props.__GT_js("30vw"),"verticalAlign":helix.impl.props.__GT_js("bottom"),"objectFit":helix.impl.props.__GT_js("cover")});
return obj359093;
})(),"src":"baruch.png"});
return obj359091;
})()),helix.core.get_react().createElement("div",({}),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359097 = ({"variant":"h2","style":({"whiteSpace": "nowrap"})});
return obj359097;
})(),"Baruch Berger"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359099 = ({"variant":"h3","style":({"whiteSpace": "nowrap"})});
return obj359099;
})(),"software engineer"),helix.core.get_react().createElement("a",(function (){var obj359101 = ({"href":"https://github.com/bbss","style":(function (){var obj359103 = ({"display":helix.impl.props.__GT_js("flex"),"marginTop":helix.impl.props.__GT_js("20px"),"justifyContent":helix.impl.props.__GT_js("center")});
return obj359103;
})()});
return obj359101;
})(),helix.core.get_react().createElement("img",(function (){var obj359105 = ({"style":(function (){var obj359107 = ({"position":helix.impl.props.__GT_js("relative"),"marginRight":helix.impl.props.__GT_js("10px")});
return obj359107;
})(),"height":"30px","src":"github.png"});
return obj359105;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359109 = ({"variant":"h6","style":({"display": "inline", "whiteSpace": "nowrap"})});
return obj359109;
})(),"https://github.com/bbss")),helix.core.get_react().createElement("a",(function (){var obj359111 = ({"href":"mailto:baruchberger@gmail.com","style":(function (){var obj359113 = ({"display":helix.impl.props.__GT_js("flex"),"justifyContent":helix.impl.props.__GT_js("center")});
return obj359113;
})()});
return obj359111;
})(),helix.core.get_react().createElement("img",(function (){var obj359115 = ({"style":(function (){var obj359117 = ({"position":helix.impl.props.__GT_js("relative"),"marginLeft":helix.impl.props.__GT_js("7px"),"marginRight":helix.impl.props.__GT_js("9px"),"width":helix.impl.props.__GT_js("35px")});
return obj359117;
})(),"src":"mail.svg"});
return obj359115;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359119 = ({"variant":"h6","style":({"display": "inline", "whiteSpace": "nowrap"})});
return obj359119;
})(),"baruchberger@gmail.com")))),helix.core.get_react().createElement(bbss.portfolio.Menu,(function (){var obj359121 = ({"to-page":to_page});
return obj359121;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj359123 = ({"style":({"position": "absolute", "bottom": "10vh", "left": "430px", "flexDirection": "column", "display": "flex", "alignItems": "flex-start", "justifyContent": "flex-end"}),"onClick":(function (){
return parallax_ref.current.scrollTo((1));
})});
return obj359123;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359125 = ({"variant":"caption","style":({"fontWeight": "800", "fontSize": "20px"})});
return obj359125;
})(),"SEE"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359127 = ({"variant":"caption","style":({"fontWeight": "800", "fontSize": "20px"})});
return obj359127;
})(),"MY"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj359129 = ({"variant":"caption","style":({"fontWeight": "800", "fontSize": "20px"})});
return obj359129;
})(),"WORK"),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))),helix.core.get_react().createElement(bbss.portfolio.KoreanTools,(function (){var obj359131 = ({"to-page":to_page});
return obj359131;
})()),helix.core.get_react().createElement(bbss.portfolio.AircraftNoise,(function (){var obj359133 = ({"to-page":to_page});
return obj359133;
})()),helix.core.get_react().createElement(bbss.portfolio.Cljsc2,(function (){var obj359135 = ({"to-page":to_page});
return obj359135;
})()),helix.core.get_react().createElement(bbss.portfolio.Worldbank,(function (){var obj359137 = ({"to-page":to_page});
return obj359137;
})())),helix.core.get_react().createElement("div",(function (){var obj359139 = ({"style":(function (){var obj359141 = ({"position":helix.impl.props.__GT_js("static"),"height":helix.impl.props.__GT_js("100vh"),"width":helix.impl.props.__GT_js("100vw"),"top":helix.impl.props.__GT_js((0)),"left":helix.impl.props.__GT_js((0)),"background":helix.impl.props.__GT_js("linear-gradient(-45deg, #47C5CF, #94DABC, #FFCF54, #FAD1E2)"),"backgroundSize":helix.impl.props.__GT_js("400% 400%"),"animation":helix.impl.props.__GT_js("gradient 15s ease infinite")});
return obj359141;
})()});
return obj359139;
})()));
});
if(goog.DEBUG === true){
var G__359142 = G__359072;
goog.object.set(G__359142,"displayName","bbss.portfolio/App");

return G__359142;
} else {
return G__359072;
}
})();




//# sourceMappingURL=bbss.portfolio.js.map
