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

bbss.portfolio.arrow_down = (function (){var G__298940 = (function bbss$portfolio$arrow_down(props__49831__auto__,maybe_ref__49832__auto__){
var vec__298941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__49831__auto__),maybe_ref__49832__auto__], null);

return helix.core.get_react().createElement("svg",(function (){var obj298945 = ({"height":(37),"viewBox":"0 0 24 37","width":"24","xmlns":"http://www.w3.org/2000/svg"});
return obj298945;
})(),helix.core.get_react().createElement("g",(function (){var obj298947 = ({"fill":"none","fillRule":"evenodd","stroke":"#000","strokeLinecap":"square","strokeWidth":"2.8","transform":"translate(2 1)"});
return obj298947;
})(),helix.core.get_react().createElement("path",(function (){var obj298949 = ({"d":"m2.82418338 30.8044364 13.57954542-.0568182.0568182-13.5795454","transform":"matrix(.70710678 .70710678 -.70710678 .70710678 19.785027 .20723)"});
return obj298949;
})()),helix.core.get_react().createElement("path",(function (){var obj298951 = ({"d":"m9.54545455.45075758v30.65151512"});
return obj298951;
})())));
});
if(goog.DEBUG === true){
var G__298952 = G__298940;
goog.object.set(G__298952,"displayName","bbss.portfolio/arrow-down");

return G__298952;
} else {
return G__298940;
}
})();



bbss.portfolio.hamburger_video_points = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Has big searchable dictionary and example dataset",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Creates study of any Korean text or image (e.g. page of a book)",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Scans sentences, dictionary matches, grammar",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(8)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Creates interactive view to aid understanding text",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(15)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Saves words for spaced-repetition memory practice",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(42)], null)], null);
bbss.portfolio.korean_tools_tt = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Great client-server story"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"State-machines in UI where logic isn't trivial"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Inspectable normalized data on front-end"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Form-state makes server mutations minimal and unintrusive"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Intuitive data resolution from many datasources"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Fancy neuralnet tech for content and Korean grammar analysis"], null)], null);
bbss.portfolio.get_point_index = (function bbss$portfolio$get_point_index(points,at_time){
return ((function (){var or__4223__auto__ = cljs.core.some((function (p__298953){
var vec__298954 = p__298953;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298954,(0),null);
var map__298957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298954,(1),null);
var map__298957__$1 = cljs.core.__destructure_map(map__298957);
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__298957__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
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
var vec__298958 = module$node_modules$react$index.useState(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
var dims = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298958,(0),null);
var set_dims = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298958,(1),null);
module$node_modules$react$index.useEffect((function (){
var handler = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null))){
return null;
} else {
var G__298961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
return (set_dims.cljs$core$IFn$_invoke$arity$1 ? set_dims.cljs$core$IFn$_invoke$arity$1(G__298961) : set_dims.call(null,G__298961));
}
});
window.addEventListener("resize",handler);

return (function (){
return window.removeEventListener("resize",handler);
});
}),[]);

return dims;
});

bbss.portfolio.KoreanTools = (function (){var G__298964 = (function bbss$portfolio$KoreanTools(props__49831__auto__,maybe_ref__49832__auto__){
var vec__298965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__49831__auto__),maybe_ref__49832__auto__], null);
var map__298968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298965,(0),null);
var map__298968__$1 = cljs.core.__destructure_map(map__298968);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__298968__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var video_ref = module$node_modules$react$index.useRef();
var vec__298969 = module$node_modules$react$index.useState((0));
var highlighted_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298969,(0),null);
var set_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298969,(1),null);
var vec__298972 = module$node_modules$react$index.useState(false);
var zoomed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298972,(0),null);
var set_zoomed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298972,(1),null);
var vec__298975 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298975,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298975,(1),null);
var vec__298978 = module$node_modules$react_use_measure$dist$web_cjs();
var top_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298978,(0),null);
var top_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298978,(1),null);
var vec__298981 = module$node_modules$react_use_measure$dist$web_cjs();
var tabs_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298981,(0),null);
var tabs_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298981,(1),null);
var vec__298984 = module$node_modules$react_use_measure$dist$web_cjs();
var buttons_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298984,(0),null);
var button_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298984,(1),null);
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
var font_size = (cljs.core.truth_(is_mobile_QMARK_)?"24px":(((cljs.core.first(dims) < (660)))?"12px":(((cljs.core.first(dims) < (780)))?"14px":"18px"
)));
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
var phone_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"transform": (cljs.core.truth_(zoomed_QMARK_)?["skew(0deg, 0deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(zoomed_QMARK_)?(cljs.core.truth_(is_mobile_QMARK_)?1.5:(ratio + 0.1)):ratio)),")"].join(''):["skew(5deg, 5deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join('')
), "config": module$node_modules$$react_spring$web$dist$react_spring_web_cjs.config.stiff}));
var vec__298987 = module$node_modules$react_intersection_observer$react_intersection_observer.useInView(({"threshold": 0.1}));
var in_view_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298987,(0),null);
var in_view_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__298987,(1),null);
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

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj298991 = ({"offset":(1),"speed":0.5,"style":({"height": "40px", "display": "flex", "justifyContent": "center", "zIndex": (5)})});
return obj298991;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj298993 = ({"variant":"h1","style":({"color": "transparent", "justifySelf": "center", "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj298993;
})(),"korean.tools")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj298995 = ({"offset":0.95,"speed":2.9,"style":({"zIndex": (-1)}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((1)) : to_page.call(null,(1)));
})});
return obj298995;
})(),helix.core.get_react().createElement("img",(function (){var obj298997 = ({"style":(function (){var obj298999 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("20%"),"transform":helix.impl.props.__GT_js("rotate(10deg)")});
return obj298999;
})(),"height":"100px","src":"ktmain.png"});
return obj298997;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299001 = ({"offset":0.95,"speed":0.9,"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((1)) : to_page.call(null,(1)));
})});
return obj299001;
})(),helix.core.get_react().createElement("img",(function (){var obj299003 = ({"style":(function (){var obj299005 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("2px"),"left":helix.impl.props.__GT_js("5%"),"top":helix.impl.props.__GT_js("5%"),"transform":helix.impl.props.__GT_js("rotate(-10deg)")});
return obj299005;
})(),"width":"200px","src":"ktstudy.png"});
return obj299003;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299007 = ({"offset":0.9,"speed":0.4,"style":({"zIndex": (-1)}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((1)) : to_page.call(null,(1)));
})});
return obj299007;
})(),helix.core.get_react().createElement("img",(function (){var obj299009 = ({"src":"clj.png","height":"50px","width":"50px","style":(function (){var obj299011 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299011;
})()});
return obj299009;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299013 = ({"offset":0.9,"speed":1.9,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj299013;
})(),helix.core.get_react().createElement("img",(function (){var obj299015 = ({"style":(function (){var obj299017 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("30%"),"top":helix.impl.props.__GT_js("5%"),"transform":helix.impl.props.__GT_js("rotate(-15deg)")});
return obj299017;
})(),"src":"ktdebug.png","height":"150px"});
return obj299015;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299019 = ({"offset":(1),"speed":1.2,"onClick":(function (){
if(cljs.core.truth_(zoomed_QMARK_)){
return (set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_zoomed_BANG_.call(null,false));
} else {
return null;
}
}),"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "height": "110vh"})});
return obj299019;
})(),helix.core.get_react().createElement("div",(function (){var obj299021 = ({"style":(function (){var obj299023 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative")});
return obj299023;
})(),"ref":in_view_ref});
return obj299021;
})(),helix.core.get_react().createElement("div",(function (){var obj299025 = ({"style":(function (){var obj299027 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"minWidth":helix.impl.props.__GT_js("90vw"),"position":helix.impl.props.__GT_js("relative"),"marginRight":helix.impl.props.__GT_js("auto"),"marginLeft":helix.impl.props.__GT_js("auto")});
return obj299027;
})(),"ref":top_ref});
return obj299025;
})(),helix.core.get_react().createElement("p",(function (){var obj299029 = ({"style":(function (){var obj299031 = ({"marginBottom":helix.impl.props.__GT_js("2.5%"),"width":helix.impl.props.__GT_js((cljs.core.truth_(is_mobile_QMARK_)?"80%":"42.5%")),"fontFamily":helix.impl.props.__GT_js("Rubik, sans-serif"),"fontWeight":helix.impl.props.__GT_js("800"),"lineHeight":helix.impl.props.__GT_js(1.66),"letterSpacing":helix.impl.props.__GT_js("0.03333em"),"fontSize":helix.impl.props.__GT_js((cljs.core.truth_(is_mobile_QMARK_)?"30px":"20px")),"marginLeft":helix.impl.props.__GT_js("7.5%"),"display":helix.impl.props.__GT_js("inline-block"),"color":helix.impl.props.__GT_js("rgba(255,255,255,0.5)"),"marginRight":helix.impl.props.__GT_js("7.5%")});
return obj299031;
})()});
return obj299029;
})(),"A ",helix.core.get_react().createElement("em",(function (){var obj299033 = ({"style":(function (){var obj299035 = ({"fontSize":helix.impl.props.__GT_js((cljs.core.truth_(is_mobile_QMARK_)?"30px":"20px"))});
return obj299035;
})()});
return obj299033;
})(),"work in progress")," that I've been using to help me study Korean."," I started turning it into an app because I think others might like the tool!"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj299037 = ({"style":({"marginTop": "20px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"}),"ref":tabs_ref,"elevation":(3)});
return obj299037;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj299039 = ({"value":selected_tab,"onChange":(function (_,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj299039;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj299041 = ({"value":"points","style":(cljs.core.truth_(is_mobile_QMARK_)?({"font-size": font_size, "margin": "20px"}):null),"label":"Highlights"});
return obj299041;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj299043 = ({"value":"tt","style":(cljs.core.truth_(is_mobile_QMARK_)?({"font-size": font_size, "margin": "20px"}):null),"label":"Technical Tidbits"});
return obj299043;
})()),helix.core.get_react().createElement("img",(function (){var obj299045 = ({"src":"clj.png","title":"Clojure","alt":"Clojure","height":"30px","width":"30px","style":(function (){var obj299047 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299047;
})()});
return obj299045;
})()),helix.core.get_react().createElement("img",(function (){var obj299049 = ({"src":"cljs-white.svg","alt":"ClojureScript","title":"ClojureScript","height":"30px","width":"30px","style":(function (){var obj299051 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299051;
})()});
return obj299049;
})()),helix.core.get_react().createElement("img",(function (){var obj299053 = ({"src":"xtdb.svg","alt":"xtdb","title":"xtdb","height":"30px","style":(function (){var obj299055 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299055;
})()});
return obj299053;
})()),helix.core.get_react().createElement("img",(function (){var obj299057 = ({"src":"fulcro.svg","alt":"fulcro","title":"fulcro","height":"30px","width":"30px","style":(function (){var obj299059 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299059;
})()});
return obj299057;
})())),helix.core.get_react().createElement("div",(function (){var obj299061 = ({"style":(function (){var obj299063 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj299063;
})()});
return obj299061;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj299065 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj299065;
})(),helix.core.get_react().createElement("div",(function (){var obj299067 = ({"style":(function (){var obj299069 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js((cljs.core.truth_(is_mobile_QMARK_)?"row":"column"))});
return obj299069;
})(),"ref":buttons_ref,"elevation":(3)});
return obj299067;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__299070){
var vec__299071 = p__299070;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299071,(0),null);
var map__299074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299071,(1),null);
var map__299074__$1 = cljs.core.__destructure_map(map__299074);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299074__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299074__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj299076 = ({"key":index,"variant":"outlined","style":({"transform": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"scale(1)":"scale(0.8)"), "textTransform": "none", "transition": "200ms linear"}),"onClick":(function (){
return (video_ref.current.currentTime = starts_at);
})});
return obj299076;
})(),helix.core.get_react().createElement("p",(function (){var obj299078 = ({"style":(function (){var obj299080 = ({"display":helix.impl.props.__GT_js("inline-block"),"fontSize":helix.impl.props.__GT_js(font_size),"backgroundImage":helix.impl.props.__GT_js(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"linear-gradient(45deg,#ff9fe1,#9d44fd 50%,#8727ff)":"linear-gradient(45deg,lightgray,gray 50%)")),"WebkitTextFillColor":helix.impl.props.__GT_js("transparent"),"textFillColor":helix.impl.props.__GT_js("transparent"),"WebkitBackgroundClip":helix.impl.props.__GT_js("text"),"backgroundClip":helix.impl.props.__GT_js("text"),"color":helix.impl.props.__GT_js(bbss.portfolio.gray)});
return obj299080;
})()});
return obj299078;
})(),point));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.hamburger_video_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj299082 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj299082;
})(),helix.core.get_react().createElement("div",(function (){var obj299084 = ({"style":(function (){var obj299086 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj299086;
})()});
return obj299084;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__299087){
var vec__299088 = p__299087;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299088,(0),null);
var map__299091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299088,(1),null);
var map__299091__$1 = cljs.core.__destructure_map(map__299091);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299091__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299093 = ({"key":index,"variant":"h6","color":"primary"});
return obj299093;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.korean_tools_tt)))))))),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj299095 = ({"onClick":(function (){
var G__299096 = cljs.core.not(zoomed_QMARK_);
return (set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1(G__299096) : set_zoomed_BANG_.call(null,G__299096));
}),"style":(cljs.core.truth_(is_mobile_QMARK_)?({"transform": phone_spring.transform, "borderRadius": "40px", "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((top_bounds.height + tabs_bounds.height) + button_bounds.height) - (cljs.core.truth_(zoomed_QMARK_)?(200):(0)))),"px"].join(''), "width": "375px", "zIndex": (5), "position": "absolute", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "812px", "left": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.first(dims) / (2))),"px - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((200)),"px)"].join(''), "margin": "40px auto"}):({"transform": phone_spring.transform, "borderRadius": "40px", "top": "-250px", "width": "375px", "position": "relative", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "812px", "left": left_distance, "margin": "40px auto"}))});
return obj299095;
})(),helix.core.get_react().createElement("video",(function (){var obj299098 = ({"autoPlay":true,"ref":video_ref,"muted":true,"loop":true,"playsInline":true,"id":"kt","style":(function (){var obj299100 = ({"borderRadius":helix.impl.props.__GT_js("30px"),"zIndex":helix.impl.props.__GT_js((20))});
return obj299100;
})()});
return obj299098;
})(),helix.core.get_react().createElement("source",(function (){var obj299102 = ({"src":"kt-hamburger.webm","type":"video/webm;codecs=\"vp8, vorbis\""});
return obj299102;
})()),helix.core.get_react().createElement("source",(function (){var obj299104 = ({"src":"kt-hamburger.mov","type":"video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""});
return obj299104;
})()))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj299106 = ({"style":({"minHeight": "10vh", "position": "absolute", "padding": "10px", "paddingRight": "40px", "borderRadius": "5px", "backgroundImage": "linear-gradient(-50deg,#fadeac,rgba(200,200,200,0.5) 50%)", "bottom": (cljs.core.truth_(is_mobile_QMARK_)?"20vh":"10vh"), "left": "10px"}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((2)) : to_page.call(null,(2)));
})});
return obj299106;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299108 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj299108;
})(),"AIRCRAFT-NOISE.ORG"),helix.core.get_react().createElement("span",(function (){var obj299110 = ({"style":(function (){var obj299112 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("230px")});
return obj299112;
})()});
return obj299110;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__299113 = G__298964;
goog.object.set(G__299113,"displayName","bbss.portfolio/KoreanTools");

return G__299113;
} else {
return G__298964;
}
})();



bbss.portfolio.aircraft_noise_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"3D exploration of flight data",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Client-side data processing",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(12)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Different types of visualization",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(25)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Live flight streaming",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(72)], null)], null);
bbss.portfolio.aircraft_noise_tt = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Making use of the great vis.gl GIS tool suite."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Worked with Uber vis.gl team to squeeze out performance."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Using WebWorkers for data fetching & processing."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Keeping UI thread as yank-free as possible."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Use WebSockets and defined TypedArray layouts for optimal data transfer and display."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Use kafka for backfilling real-time flights."], null)], null);

bbss.portfolio.AircraftNoise = (function (){var G__299116 = (function bbss$portfolio$AircraftNoise(props__49831__auto__,maybe_ref__49832__auto__){
var vec__299117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__49831__auto__),maybe_ref__49832__auto__], null);
var map__299120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299117,(0),null);
var map__299120__$1 = cljs.core.__destructure_map(map__299120);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299120__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var video_ref = module$node_modules$react$index.useRef();
var vec__299121 = module$node_modules$react$index.useState((0));
var highlighted_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299121,(0),null);
var set_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299121,(1),null);
var vec__299124 = module$node_modules$react$index.useState(false);
var zoomed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299124,(0),null);
var set_zoomed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299124,(1),null);
var vec__299127 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299127,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299127,(1),null);
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
var ratio = (cljs.core.truth_(is_mobile_QMARK_)?(cljs.core.truth_(zoomed_QMARK_)?1.05:0.8):((function (){var x__4309__auto__ = 0.8;
var y__4310__auto__ = (function (){var x__4306__auto__ = 0.1;
var y__4307__auto__ = (((cljs.core.second(dims) - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(400):(500))) / (766)) - 0.1);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})() + (cljs.core.truth_(zoomed_QMARK_)?0.2:(0))));
var tablet_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"transform": (cljs.core.truth_(zoomed_QMARK_)?["skew(0deg, 0deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join(''):["skew(5deg, 5deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join('')), "config": module$node_modules$$react_spring$web$dist$react_spring_web_cjs.config.stiff}));
var font_size = (cljs.core.truth_(is_mobile_QMARK_)?"24px":(((cljs.core.first(dims) < (660)))?"12px":(((cljs.core.first(dims) < (780)))?"14px":"18px"
)));
var vec__299130 = module$node_modules$react_intersection_observer$react_intersection_observer.useInView(({"threshold": 0.5}));
var in_view_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299130,(0),null);
var in_view_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299130,(1),null);
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

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299134 = ({"offset":(2),"speed":0.5,"style":({"height": "115px", "display": "flex", "justifyContent": "center", "zIndex": (7), "overflow": "hidden"})});
return obj299134;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299136 = ({"variant":"h1","style":({"color": "transparent", "zIndex": (6), "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj299136;
})(),"aircraft-noise.org")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299138 = ({"offset":1.96,"speed":0.5,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj299138;
})(),helix.core.get_react().createElement("img",(function (){var obj299140 = ({"style":(function (){var obj299142 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("70%"),"zIndex":helix.impl.props.__GT_js((-1)),"top":helix.impl.props.__GT_js("300px"),"userSelect":helix.impl.props.__GT_js("none"),"pointerEvents":helix.impl.props.__GT_js("none"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(-10deg)")});
return obj299142;
})(),"height":"250px","src":"acnsf.png"});
return obj299140;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299144 = ({"offset":1.96,"speed":0.4,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj299144;
})(),helix.core.get_react().createElement("img",(function (){var obj299146 = ({"style":(function (){var obj299148 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("40%"),"top":helix.impl.props.__GT_js("300px"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(5deg)")});
return obj299148;
})(),"height":"250px","src":"acnheatmap.png"});
return obj299146;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299150 = ({"offset":1.96,"speed":0.2,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj299150;
})(),helix.core.get_react().createElement("img",(function (){var obj299152 = ({"style":(function (){var obj299154 = ({"position":helix.impl.props.__GT_js("absolute"),"top":helix.impl.props.__GT_js("300px"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("10%"),"transform":helix.impl.props.__GT_js("rotate(-5deg)")});
return obj299154;
})(),"height":"250px","src":"acnterrain.png"});
return obj299152;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299156 = ({"offset":(2),"speed":(1),"onClick":(function (){
if(cljs.core.truth_(zoomed_QMARK_)){
return (set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_zoomed_BANG_.call(null,false));
} else {
return null;
}
}),"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "height": "110vh", "zIndex": (5)})});
return obj299156;
})(),helix.core.get_react().createElement("div",(function (){var obj299158 = ({"style":(function (){var obj299160 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative"),"justifyContent":helix.impl.props.__GT_js("center")});
return obj299160;
})(),"ref":in_view_ref});
return obj299158;
})(),helix.core.get_react().createElement("div",(function (){var obj299162 = ({"style":(function (){var obj299164 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("10px")});
return obj299164;
})()});
return obj299162;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299166 = ({"variant":"body1","style":({"marginLeft": "7.5%", "color": "rgba(255,255,255,0.5)", "width": "80%", "fontFamily": "Rubik, sans-serif", "letterSpacing": "0.03333em", "fontWeight": "800", "marginBottom": "2.5%", "display": "inline-block", "lineHeight": 1.66, "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"20px"), "marginRight": "7.5%"})});
return obj299166;
})(),"Supporting researchers in visualizing models of aircraft noise pollution. Building visualizations and supporting tools."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj299168 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"})});
return obj299168;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj299170 = ({"value":selected_tab,"onChange":(function (_,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj299170;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj299172 = ({"value":"points","label":"Highlights","style":(cljs.core.truth_(is_mobile_QMARK_)?({"font-size": font_size, "margin": "20px"}):null)});
return obj299172;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj299174 = ({"value":"tt","label":"Technical Tidbits","style":(cljs.core.truth_(is_mobile_QMARK_)?({"font-size": font_size, "margin": "20px"}):null)});
return obj299174;
})()),helix.core.get_react().createElement("img",(function (){var obj299176 = ({"src":"clj.png","title":"Clojure","alt":"Clojure","height":"30px","width":"30px","style":(function (){var obj299178 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299178;
})()});
return obj299176;
})()),helix.core.get_react().createElement("img",(function (){var obj299180 = ({"src":"cljs-white.svg","alt":"ClojureScript","title":"ClojureScript","height":"30px","width":"30px","style":(function (){var obj299182 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299182;
})()});
return obj299180;
})()),helix.core.get_react().createElement("img",(function (){var obj299184 = ({"src":"postgres.svg","alt":"postgres","title":"postgres","height":"30px","width":"30px","style":(function (){var obj299186 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299186;
})()});
return obj299184;
})()),helix.core.get_react().createElement("img",(function (){var obj299188 = ({"src":"kafka.svg","alt":"kafka","title":"kafka","height":"30px","style":(function (){var obj299190 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299190;
})()});
return obj299188;
})())),helix.core.get_react().createElement("div",(function (){var obj299192 = ({"style":(function (){var obj299194 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj299194;
})()});
return obj299192;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj299196 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj299196;
})(),helix.core.get_react().createElement("div",(function (){var obj299198 = ({"style":(function (){var obj299200 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex")});
return obj299200;
})()});
return obj299198;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__299201){
var vec__299202 = p__299201;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299202,(0),null);
var map__299205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299202,(1),null);
var map__299205__$1 = cljs.core.__destructure_map(map__299205);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299205__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299205__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj299207 = ({"key":index,"variant":"outlined","style":({"transform": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"scale(1)":"scale(0.8)"), "transition": "200ms linear"}),"onClick":(function (){
return (video_ref.current.currentTime = starts_at);
})});
return obj299207;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299209 = ({"variant":"h6","style":({"display": "inline-block", "fontSize": font_size, "backgroundImage": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"linear-gradient(45deg,#ff9fe1,#9d44fd 50%,#8727ff)":"linear-gradient(45deg,lightgray,gray 50%)"), "WebkitTextFillColor": "transparent", "textFillColor": "transparent", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": bbss.portfolio.gray})});
return obj299209;
})(),point));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.aircraft_noise_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj299211 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj299211;
})(),helix.core.get_react().createElement("div",(function (){var obj299213 = ({"style":(function (){var obj299215 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj299215;
})()});
return obj299213;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__299216){
var vec__299217 = p__299216;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299217,(0),null);
var map__299220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299217,(1),null);
var map__299220__$1 = cljs.core.__destructure_map(map__299220);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299220__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299222 = ({"key":index,"variant":"h6","color":"primary"});
return obj299222;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.aircraft_noise_tt))))))),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj299224 = ({"onClick":(function (){
var G__299225 = cljs.core.not(zoomed_QMARK_);
return (set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1(G__299225) : set_zoomed_BANG_.call(null,G__299225));
}),"style":({"transform": tablet_spring.transform, "borderRadius": "40px", "top": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.second(dims) / (2)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(180):(240)))),"px - 383px)"].join(''), "width": "1000px", "zIndex": (5), "position": "absolute", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "766px", "left": "calc(50% - 500px)", "margin": "40px auto"})});
return obj299224;
})(),helix.core.get_react().createElement("video",(function (){var obj299227 = ({"autoPlay":true,"muted":true,"loop":true,"playsInline":true,"ref":video_ref,"style":(function (){var obj299229 = ({"width":helix.impl.props.__GT_js("1000px"),"height":helix.impl.props.__GT_js("766px"),"zIndex":helix.impl.props.__GT_js((6)),"borderRadius":helix.impl.props.__GT_js("40px")});
return obj299229;
})()});
return obj299227;
})(),helix.core.get_react().createElement("source",(function (){var obj299231 = ({"src":"acn.mp4","type":"video/webm;codecs=\"vp8, vorbis\""});
return obj299231;
})()),helix.core.get_react().createElement("source",(function (){var obj299233 = ({"src":"acn.mov","type":"video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""});
return obj299233;
})())))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj299235 = ({"style":({"borderRadius": "5px", "bottom": (cljs.core.truth_(is_mobile_QMARK_)?"20vh":"10vh"), "paddingRight": "40px", "minWidth": "150px", "padding": "10px", "backgroundImage": "linear-gradient(-50deg,#fadeac,rgba(200,200,200,0.5) 50%)", "zIndex": (10), "position": "absolute", "minHeight": "10vh", "left": "10px"}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((3)) : to_page.call(null,(3)));
})});
return obj299235;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299237 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj299237;
})(),"CLJSC2"),helix.core.get_react().createElement("span",(function (){var obj299239 = ({"style":(function (){var obj299241 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("120px"),"top":helix.impl.props.__GT_js("22px")});
return obj299241;
})()});
return obj299239;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__299242 = G__299116;
goog.object.set(G__299242,"displayName","bbss.portfolio/AircraftNoise");

return G__299242;
} else {
return G__299116;
}
})();



bbss.portfolio.cljsc2_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Runs multiple instances of SC2 games."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Interactive control of SC2 via Clojure REPL."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Wraps full API for low level control."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Data-based api with game-state query capabilities for higher level control."], null)], null);
bbss.portfolio.cljsc2_tt = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Parses API EBNF context free grammar file to generate Clojure specs."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Datalog version of gamestate, and higher level rules to start playing the game."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Integrated clojure and cljsc2 into Jupyter Notebook for interactive studies."], null)], null);

bbss.portfolio.Cljsc2 = (function (){var G__299245 = (function bbss$portfolio$Cljsc2(props__49831__auto__,maybe_ref__49832__auto__){
var vec__299246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__49831__auto__),maybe_ref__49832__auto__], null);
var map__299249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299246,(0),null);
var map__299249__$1 = cljs.core.__destructure_map(map__299249);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299249__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var vec__299250 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299250,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299250,(1),null);
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
return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299254 = ({"offset":(3),"speed":0.5,"style":({"height": "40px", "display": "flex", "justifyContent": "center", "zIndex": (5)})});
return obj299254;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299256 = ({"variant":"h1","style":({"color": "transparent", "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj299256;
})(),"CLJSC2")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299258 = ({"offset":2.999,"speed":0.4});
return obj299258;
})(),helix.core.get_react().createElement("img",(function (){var obj299260 = ({"style":(function (){var obj299262 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(10deg)")});
return obj299262;
})(),"height":"500px","src":"meblizz.jpeg"});
return obj299260;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299264 = ({"offset":2.9999999,"speed":0.3});
return obj299264;
})(),helix.core.get_react().createElement("img",(function (){var obj299266 = ({"style":(function (){var obj299268 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"right":helix.impl.props.__GT_js("-70%"),"transform":helix.impl.props.__GT_js("rotate(3deg)")});
return obj299268;
})(),"height":"400px","src":"sc2notebook.png"});
return obj299266;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299270 = ({"offset":2.99,"speed":0.6});
return obj299270;
})(),helix.core.get_react().createElement("img",(function (){var obj299272 = ({"style":(function (){var obj299274 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("scale(0.4) rotate(-3deg)")});
return obj299274;
})(),"src":"sc2deepmind.jpeg"});
return obj299272;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299276 = ({"offset":2.999,"speed":0.1});
return obj299276;
})(),helix.core.get_react().createElement("img",(function (){var obj299278 = ({"style":(function (){var obj299280 = ({"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20%"),"transform":helix.impl.props.__GT_js("scale(0.6) rotate(-5deg)")});
return obj299280;
})(),"src":"sc2.png"});
return obj299278;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299282 = ({"offset":(3),"speed":1.2,"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "height": "110vh", "zIndex": (3)})});
return obj299282;
})(),helix.core.get_react().createElement("div",(function (){var obj299284 = ({"style":(function (){var obj299286 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative")});
return obj299286;
})()});
return obj299284;
})(),helix.core.get_react().createElement("div",(function (){var obj299288 = ({"style":(function (){var obj299290 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"position":helix.impl.props.__GT_js("relative"),"marginRight":helix.impl.props.__GT_js("7.5%"),"marginLeft":helix.impl.props.__GT_js("7.5%"),"marginBottom":helix.impl.props.__GT_js("2.5%")});
return obj299290;
})()});
return obj299288;
})(),helix.core.get_react().createElement("div",(function (){var obj299292 = ({"style":(function (){var obj299294 = ({"display":helix.impl.props.__GT_js("inline")});
return obj299294;
})()});
return obj299292;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299296 = ({"variant":"body1","style":({"display": "inline", "fontFamily": "Rubik, sans-serif", "fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "lineHeight": 1.66, "letterSpacing": "0.03333em", "color": "rgba(255,255,255,0.5)"})});
return obj299296;
})(),"Wrote an "),helix.core.get_react().createElement("a",(function (){var obj299298 = ({"href":"https://github.com/bbss/cljsc2","style":helix.impl.props.native_style(({"display": "inline", "fontFamily": "Rubik, sans-serif", "fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "lineHeight": 1.66, "letterSpacing": "0.03333em", "color": "rgba(255,255,255,0.5)"}))});
return obj299298;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299300 = ({"variant":"body1","style":({"display": "inline", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"20px")})});
return obj299300;
})(),"open source Clojure library")),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299302 = ({"variant":"body1","style":({"display": "inline", "fontFamily": "Rubik, sans-serif", "fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "lineHeight": 1.66, "letterSpacing": "0.03333em", "color": "rgba(255,255,255,0.5)"})});
return obj299302;
})()," to the StarCraft II AI API.")),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299304 = ({"variant":"body1","style":({"display": "inline-block", "fontFamily": "Rubik, sans-serif", "fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "lineHeight": 1.66, "letterSpacing": "0.03333em", "color": "rgba(255,255,255,0.5)"})});
return obj299304;
})(),"When DeepMind beat the legendary Lee Sedol (\uC774\uC138\uB3CC) in the old Asian game of Go they announced maybe tackling StarCraft next, I got very excited.."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299306 = ({"variant":"body1","style":({"display": "inline-block", "fontFamily": "Rubik, sans-serif", "fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "lineHeight": 1.66, "letterSpacing": "0.03333em", "color": "rgba(255,255,255,0.5)"})});
return obj299306;
})(),"When Blizzard announced their cooperation and AI API I knew I wanted to hook up my favorite programming language to experiment with it."),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299308 = ({"varinat":"body1","style":({"display": "inline-block", "fontFamily": "Rubik, sans-serif", "fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "lineHeight": 1.66, "letterSpacing": "0.03333em", "color": "rgba(255,255,255,0.5)"})});
return obj299308;
})(),"Around the time I finished my first experiments I got an invite to a workshop with StarCraft II developers and DeepMind researchers!"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299310 = ({"varinat":"body1","style":({"display": "inline-block", "fontFamily": "Rubik, sans-serif", "fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "lineHeight": 1.66, "letterSpacing": "0.03333em", "color": "rgba(255,255,255,0.5)"})});
return obj299310;
})(),"Super lucky to meet a lot of smart people and talk about these awesome topics."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj299312 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"})});
return obj299312;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj299314 = ({"value":selected_tab,"onChange":(function (_,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj299314;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj299316 = ({"value":"points","label":"Highlights","style":(cljs.core.truth_(is_mobile_QMARK_)?({"font-size": "24px", "margin": "20px"}):null)});
return obj299316;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj299318 = ({"value":"tt","label":"Technical Tidbits","style":(cljs.core.truth_(is_mobile_QMARK_)?({"font-size": "24px", "margin": "20px"}):null)});
return obj299318;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj299320 = ({"value":"yt","label":"Meetup Talk","style":(cljs.core.truth_(is_mobile_QMARK_)?({"font-size": "24px", "margin": "20px"}):null)});
return obj299320;
})())),helix.core.get_react().createElement("div",(function (){var obj299322 = ({"style":(function (){var obj299324 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj299324;
})()});
return obj299322;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj299326 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj299326;
})(),helix.core.get_react().createElement("div",(function (){var obj299328 = ({"style":(function (){var obj299330 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column")});
return obj299330;
})()});
return obj299328;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__299331){
var vec__299332 = p__299331;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299332,(0),null);
var map__299335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299332,(1),null);
var map__299335__$1 = cljs.core.__destructure_map(map__299335);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299335__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299337 = ({"key":index,"variant":"h6","style":({"display": "inline-block", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"24px":null), "backgroundImage": "linear-gradient(45deg,#ff9fe1,#9d44fd 50%,#8727ff)", "WebkitTextFillColor": "transparent", "textFillColor": "transparent", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": bbss.portfolio.gray})});
return obj299337;
})(),point);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.cljsc2_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj299339 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj299339;
})(),helix.core.get_react().createElement("div",(function (){var obj299341 = ({"style":(function (){var obj299343 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj299343;
})()});
return obj299341;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__299344){
var vec__299345 = p__299344;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299345,(0),null);
var map__299348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299345,(1),null);
var map__299348__$1 = cljs.core.__destructure_map(map__299348);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299348__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299350 = ({"key":index,"variant":"h6","color":"primary"});
return obj299350;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.cljsc2_tt)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj299352 = ({"direction":"up","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"yt")});
return obj299352;
})(),helix.core.get_react().createElement("div",(function (){var obj299354 = ({"style":(function (){var obj299356 = ({"position":helix.impl.props.__GT_js("absolute"),"margin":helix.impl.props.__GT_js("30px")});
return obj299356;
})()});
return obj299354;
})(),helix.core.get_react().createElement("iframe",(function (){var obj299358 = ({"width":(560),"height":(315),"src":"https://www.youtube.com/embed/c5DifklnMI8","frameBorder":(0),"allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"});
return obj299358;
})()))))))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj299360 = ({"style":({"maginRight": "50px", "marginLeft": "10px", "borderRadius": "5px", "bottom": (cljs.core.truth_(is_mobile_QMARK_)?"20vh":"10vh"), "minWidth": "170px", "padding": "25px", "backgroundImage": "linear-gradient(-50deg,#fadeac,rgba(200,200,200,0.5) 50%)", "zIndex": (10), "position": "absolute", "minHeight": "10vh"}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((4)) : to_page.call(null,(4)));
})});
return obj299360;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299362 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj299362;
})(),"DATA.WORLDBANK.ORG"),helix.core.get_react().createElement("span",(function (){var obj299364 = ({"style":(function (){var obj299366 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("255px")});
return obj299366;
})()});
return obj299364;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__299367 = G__299245;
goog.object.set(G__299367,"displayName","bbss.portfolio/Cljsc2");

return G__299367;
} else {
return G__299245;
}
})();



bbss.portfolio.wb_points = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Autocompletes datasets/countries regions",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Custom graphs and map visualizations",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Recommends further related data",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(20)], null)], null);
bbss.portfolio.wb_tt = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Used by millions of people!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Early adopter of ReactJS Redux pattern."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Wraps datasets with a falcorJS data resolution system: "], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Easy fetching, caching, batching for slow devices."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"D3.js for custom graphs + intuitive touch interactions."], null)], null);

bbss.portfolio.Worldbank = (function (){var G__299370 = (function bbss$portfolio$Worldbank(props__49831__auto__,maybe_ref__49832__auto__){
var vec__299371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__49831__auto__),maybe_ref__49832__auto__], null);
var map__299374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299371,(0),null);
var map__299374__$1 = cljs.core.__destructure_map(map__299374);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299374__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var video_ref = module$node_modules$react$index.useRef();
var vec__299375 = module$node_modules$react$index.useState((0));
var highlighted_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299375,(0),null);
var set_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299375,(1),null);
var vec__299378 = module$node_modules$react$index.useState(false);
var zoomed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299378,(0),null);
var set_zoomed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299378,(1),null);
var vec__299381 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299381,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299381,(1),null);
var vec__299384 = module$node_modules$react_intersection_observer$react_intersection_observer.useInView(({"threshold": 0.5}));
var in_view_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299384,(0),null);
var in_view_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299384,(1),null);
var vec__299387 = module$node_modules$react_use_measure$dist$web_cjs();
var top_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299387,(0),null);
var top_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299387,(1),null);
var vec__299390 = module$node_modules$react_use_measure$dist$web_cjs();
var tabs_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299390,(0),null);
var tabs_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299390,(1),null);
var vec__299393 = module$node_modules$react_use_measure$dist$web_cjs();
var buttons_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299393,(0),null);
var button_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299393,(1),null);
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
var font_size = (cljs.core.truth_(is_mobile_QMARK_)?"24px":(((cljs.core.first(dims) < (660)))?"12px":(((cljs.core.first(dims) < (780)))?"14px":"18px"
)));
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
var phone_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"transform": (cljs.core.truth_(zoomed_QMARK_)?["skew(0deg, 0deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(zoomed_QMARK_)?(cljs.core.truth_(is_mobile_QMARK_)?1.5:(ratio + 0.1)):ratio)),")"].join(''):["skew(5deg, 5deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join('')
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

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299397 = ({"offset":(4),"speed":0.5,"style":({"height": "40px", "display": "flex", "justifyContent": "center", "zIndex": (5)})});
return obj299397;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299399 = ({"variant":"h1","ref":in_view_ref,"style":({"color": "transparent", "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj299399;
})(),"data.worldbank.org")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299401 = ({"offset":3.96,"speed":0.5});
return obj299401;
})(),helix.core.get_react().createElement("img",(function (){var obj299403 = ({"style":(function (){var obj299405 = ({"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("800px"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(10deg)")});
return obj299405;
})(),"height":"250px","src":"wbindicators.png"});
return obj299403;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299407 = ({"offset":3.96,"speed":0.4});
return obj299407;
})(),helix.core.get_react().createElement("img",(function (){var obj299409 = ({"style":(function (){var obj299411 = ({"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("300px"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(5deg)")});
return obj299411;
})(),"height":"250px","src":"wbmain.png"});
return obj299409;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299413 = ({"offset":3.96,"speed":0.3});
return obj299413;
})(),helix.core.get_react().createElement("img",(function (){var obj299415 = ({"style":(function (){var obj299417 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("0px"),"transform":helix.impl.props.__GT_js("rotate(-5deg)")});
return obj299417;
})(),"height":"250px","src":"wb2.png"});
return obj299415;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299419 = ({"offset":(4),"speed":1.2,"onClick":(function (){
if(cljs.core.truth_(zoomed_QMARK_)){
return (set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_zoomed_BANG_.call(null,false));
} else {
return null;
}
}),"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "height": "100vh", "zIndex": (3)})});
return obj299419;
})(),helix.core.get_react().createElement("div",(function (){var obj299421 = ({"style":(function (){var obj299423 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative")});
return obj299423;
})(),"ref":in_view_ref});
return obj299421;
})(),helix.core.get_react().createElement("div",(function (){var obj299425 = ({"ref":top_ref,"style":(function (){var obj299427 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"minWidth":helix.impl.props.__GT_js("100vw"),"position":helix.impl.props.__GT_js("relative"),"marginRight":helix.impl.props.__GT_js("auto"),"marginLeft":helix.impl.props.__GT_js("auto")});
return obj299427;
})()});
return obj299425;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299429 = ({"variant":"body1","style":({"marginLeft": "7.5%", "color": "rgba(255,255,255,0.5)", "width": "90%", "fontFamily": "Rubik, sans-serif", "letterSpacing": "0.03333em", "fontWeight": "800", "marginBottom": "2.5%", "display": "inline-block", "lineHeight": 1.66, "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "marginRight": "7.5%"})});
return obj299429;
})(),"Built the mobile-first SPA for the Open Data platform of the World Bank."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299431 = ({"variant":"body1","style":({"marginLeft": "7.5%", "color": "rgba(255,255,255,0.5)", "width": (cljs.core.truth_(is_mobile_QMARK_)?"90%":(((cljs.core.first(dims) > (1000)))?"45%":"80%"
)), "fontFamily": "Rubik, sans-serif", "letterSpacing": "0.03333em", "fontWeight": "800", "marginBottom": "2.5%", "display": "inline-block", "lineHeight": 1.66, "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "marginRight": "7.5%"})});
return obj299431;
})(),"The Open Data platform has a lot of datasets of yearly indicators for all countries in the world."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299433 = ({"variant":"body1","style":({"marginLeft": "7.5%", "color": "rgba(255,255,255,0.5)", "width": (cljs.core.truth_(is_mobile_QMARK_)?"90%":(((cljs.core.first(dims) > (1000)))?"45%":"45.5%"
)), "fontFamily": "Rubik, sans-serif", "letterSpacing": "0.03333em", "fontWeight": "800", "marginBottom": "2.5%", "display": "inline-block", "lineHeight": 1.66, "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"30px":"16px"), "marginRight": "7.5%"})});
return obj299433;
})(),"The datasets are explorable in a bunch of ways and can be mixed and visualized to the user's liking."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj299435 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"}),"ref":tabs_ref});
return obj299435;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj299437 = ({"value":selected_tab,"onChange":(function (_,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj299437;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj299439 = ({"value":"points","label":"Highlights","style":(cljs.core.truth_(is_mobile_QMARK_)?({"font-size": "24px", "margin": "20px"}):null)});
return obj299439;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj299441 = ({"value":"tt","label":"Technical Tidbits","style":(cljs.core.truth_(is_mobile_QMARK_)?({"font-size": "24px", "margin": "20px"}):null)});
return obj299441;
})()),helix.core.get_react().createElement("img",(function (){var obj299443 = ({"src":"js.png","alt":"JavaScript","title":"JavaScript","height":"30px","width":"30px","style":(function (){var obj299445 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299445;
})()});
return obj299443;
})()),helix.core.get_react().createElement("img",(function (){var obj299447 = ({"src":"node.svg","alt":"node.js","title":"node.js","height":"30px","width":"30px","style":(function (){var obj299449 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299449;
})()});
return obj299447;
})()),helix.core.get_react().createElement("img",(function (){var obj299451 = ({"src":"d3.svg","alt":"JavaScript","title":"JavaScript","height":"30px","width":"30px","style":(function (){var obj299453 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299453;
})()});
return obj299451;
})()),helix.core.get_react().createElement("img",(function (){var obj299455 = ({"src":"falcor.svg","alt":"falcorJS","title":"falcorJS","height":"30px","width":"30px","style":(function (){var obj299457 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299457;
})()});
return obj299455;
})()),helix.core.get_react().createElement("img",(function (){var obj299459 = ({"src":"redis-cube.svg","alt":"redis","title":"redis","height":"30px","width":"30px","style":(function (){var obj299461 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj299461;
})()});
return obj299459;
})())),helix.core.get_react().createElement("div",(function (){var obj299463 = ({"style":(function (){var obj299465 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative")});
return obj299465;
})()});
return obj299463;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj299467 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj299467;
})(),helix.core.get_react().createElement("div",(function (){var obj299469 = ({"style":(function (){var obj299471 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js((cljs.core.truth_(is_mobile_QMARK_)?"row":"column"))});
return obj299471;
})()});
return obj299469;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__299472){
var vec__299473 = p__299472;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299473,(0),null);
var map__299476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299473,(1),null);
var map__299476__$1 = cljs.core.__destructure_map(map__299476);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299476__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299476__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj299478 = ({"key":index,"variant":"outlined","style":({"transform": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"scale(1)":"scale(0.8)"), "textTransform": "none", "transition": "200ms linear"}),"onClick":(function (){
return (video_ref.current.currentTime = starts_at);
})});
return obj299478;
})(),helix.core.get_react().createElement("p",(function (){var obj299480 = ({"style":(function (){var obj299482 = ({"display":helix.impl.props.__GT_js("inline-block"),"fontSize":helix.impl.props.__GT_js(font_size),"backgroundImage":helix.impl.props.__GT_js(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"linear-gradient(45deg,#ff9fe1,#9d44fd 50%,#8727ff)":"linear-gradient(45deg,lightgray,gray 50%)")),"WebkitTextFillColor":helix.impl.props.__GT_js("transparent"),"textFillColor":helix.impl.props.__GT_js("transparent"),"WebkitBackgroundClip":helix.impl.props.__GT_js("text"),"backgroundClip":helix.impl.props.__GT_js("text"),"color":helix.impl.props.__GT_js(bbss.portfolio.gray)});
return obj299482;
})()});
return obj299480;
})(),point));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.wb_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj299484 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj299484;
})(),helix.core.get_react().createElement("div",(function (){var obj299486 = ({"ref":buttons_ref,"style":(function (){var obj299488 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj299488;
})()});
return obj299486;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__299489){
var vec__299490 = p__299489;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299490,(0),null);
var map__299493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299490,(1),null);
var map__299493__$1 = cljs.core.__destructure_map(map__299493);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299493__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299495 = ({"key":index,"variant":"h6","style":({"paddingLeft": "10px", "fontSize": font_size}),"color":"primary"});
return obj299495;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.wb_tt)))))))),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj299497 = ({"onClick":(function (){
var G__299498 = cljs.core.not(zoomed_QMARK_);
return (set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_zoomed_BANG_.cljs$core$IFn$_invoke$arity$1(G__299498) : set_zoomed_BANG_.call(null,G__299498));
}),"style":(cljs.core.truth_(is_mobile_QMARK_)?({"transform": phone_spring.transform, "borderRadius": "40px", "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((top_bounds.height + tabs_bounds.height) + button_bounds.height) - (cljs.core.truth_(zoomed_QMARK_)?(200):(0)))),"px"].join(''), "width": "330px", "zIndex": (5), "position": "absolute", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "714px", "left": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.first(dims) / (2))),"px - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((200)),"px)"].join(''), "margin": "40px auto"}):({"transform": phone_spring.transform, "borderRadius": "40px", "top": "-250px", "width": "330px", "position": "relative", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "714px", "left": left_distance, "margin": "40px auto"}))});
return obj299497;
})(),helix.core.get_react().createElement("video",(function (){var obj299500 = ({"autoPlay":true,"muted":true,"loop":true,"playsInline":true,"ref":video_ref,"style":(function (){var obj299502 = ({"width":helix.impl.props.__GT_js("330px"),"height":helix.impl.props.__GT_js("714px"),"zIndex":helix.impl.props.__GT_js((6)),"borderRadius":helix.impl.props.__GT_js("40px")});
return obj299502;
})()});
return obj299500;
})(),helix.core.get_react().createElement("source",(function (){var obj299504 = ({"src":"wb.mp4","type":"video/webm;codecs=\"vp8, vorbis\""});
return obj299504;
})()),helix.core.get_react().createElement("source",(function (){var obj299506 = ({"src":"wb.mov","type":"video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""});
return obj299506;
})()))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj299508 = ({"style":({"minHeight": "10vh", "position": "absolute", "padding": "30px", "paddingRight": "40px", "borderRadius": "5px", "backgroundImage": "linear-gradient(-50deg,#fadeac,rgba(200,200,200,0.5) 50%)", "bottom": (cljs.core.truth_(is_mobile_QMARK_)?"20vh":"10vh"), "left": "10px"}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((0)) : to_page.call(null,(0)));
})});
return obj299508;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299510 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj299510;
})(),"TOP"),helix.core.get_react().createElement("span",(function (){var obj299512 = ({"style":(function (){var obj299514 = ({"transform":helix.impl.props.__GT_js("rotate(180deg)"),"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("80px")});
return obj299514;
})()});
return obj299512;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__299515 = G__299370;
goog.object.set(G__299515,"displayName","bbss.portfolio/Worldbank");

return G__299515;
} else {
return G__299370;
}
})();



bbss.portfolio.works = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"korean-tools","korean-tools",1842211947,null),bbss.portfolio.KoreanTools,new cljs.core.Symbol(null,"aircraft-noise.org","aircraft-noise.org",-965640641,null),bbss.portfolio.AircraftNoise,new cljs.core.Symbol(null,"cljsc2","cljsc2",-1734546000,null),bbss.portfolio.Cljsc2,new cljs.core.Symbol(null,"worldbank","worldbank",-1267436091,null),bbss.portfolio.Worldbank], null);
bbss.portfolio.theme = module$node_modules$$material_ui$core$esm$styles$index.createTheme(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Rubik, sans-serif"], null),new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),bbss.portfolio.gray,new cljs.core.Keyword(null,"main","main",-2117802661),bbss.portfolio.gray,new cljs.core.Keyword(null,"dark","dark",1818973999),bbss.portfolio.gray,new cljs.core.Keyword(null,"contrastText","contrastText",-587910032),"#fff"], null),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),bbss.portfolio.orange,new cljs.core.Keyword(null,"main","main",-2117802661),bbss.portfolio.orange,new cljs.core.Keyword(null,"dark","dark",1818973999),bbss.portfolio.orange,new cljs.core.Keyword(null,"contrastText","contrastText",-587910032),"#fff"], null)], null)], null)));

bbss.portfolio.Menu = (function (){var G__299518 = (function bbss$portfolio$Menu(props__49831__auto__,maybe_ref__49832__auto__){
var vec__299519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__49831__auto__),maybe_ref__49832__auto__], null);
var map__299522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299519,(0),null);
var map__299522__$1 = cljs.core.__destructure_map(map__299522);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__299522__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var pop_ref = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpringRef();
var reveal_ref = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpringRef();
var vec__299523 = module$node_modules$react_intersection_observer$react_intersection_observer.useInView(({"threshold": 0.5}));
var in_view_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299523,(0),null);
var top_in_view_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299523,(1),null);
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
var title_font_size = (cljs.core.truth_(is_mobile_QMARK_)?(120):(((cljs.core.first(dims) > (1120)))?"4em":(((cljs.core.first(dims) > (1080)))?"3.2em":"2.8em"
)));
var font_size = (cljs.core.truth_(is_mobile_QMARK_)?(80):(((((cljs.core.first(dims) > (1120))) && ((cljs.core.second(dims) > (700)))))?"3em":"2em"
));
var links = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["korean.tools","aircraft-noise.org","cljsc2","data.worldbank.org"], null));
var pop_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"ref": pop_ref, "transform": (((((cljs.core.first(dims) < (1000))) && (cljs.core.not(is_mobile_QMARK_))))?"scale(0)":(cljs.core.truth_(top_in_view_QMARK_)?"scale(1)":"scale(0)"
))}));
var trail_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useTransition((cljs.core.truth_(top_in_view_QMARK_)?cljs.core.to_array(links):[]),({"ref": reveal_ref, "reset": true, "trail": (50), "keys": cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second), "config": ({"mass": (4), "tension": (2000), "friction": (200)}), "enter": ({"opacity": (cljs.core.truth_(top_in_view_QMARK_)?(1):(0)), "height": (cljs.core.truth_(top_in_view_QMARK_)?"100px":"0px"), "x": (cljs.core.truth_(top_in_view_QMARK_)?(0):(20))}), "from": ({"opacity": (0), "x": (20), "height": "100px"})}));
module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useChain((cljs.core.truth_(top_in_view_QMARK_)?[pop_ref,reveal_ref]:[reveal_ref,pop_ref]));

return helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj299527 = ({"style":({"display": "flex", "flexDirection": "column", "margin": "20px", "background": "linear-gradient(to right, rgba(100, 100, 100, 0.15), rgba(100, 100, 100, 0.3))", "padding": "100px", "clipPath": "polygon(0 1%, 100% 0%, 90% 95%, 10% 90%)", "transform": pop_spring.transform}),"ref":in_view_ref});
return obj299527;
})(),helix.core.get_react().createElement("p",(function (){var obj299529 = ({"style":(function (){var obj299531 = ({"fontFamily":helix.impl.props.__GT_js("'Zen Tokyo Zoo', cursive"),"fontSize":helix.impl.props.__GT_js(title_font_size),"whiteSpace":helix.impl.props.__GT_js("nowrap"),"color":helix.impl.props.__GT_js("white"),"marginBottom":helix.impl.props.__GT_js(((cljs.core.not(is_mobile_QMARK_))?"20px":null))});
return obj299531;
})()});
return obj299529;
})(),"some of my work"),(function (){var G__299532 = (function (props,p__299533,opts){
var vec__299534 = p__299533;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299534,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__299534,(1),null);
return helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj299538 = ({"style":({"opacity": props.opacity, "height": props.height, "x": props.x}),"key":item});
return obj299538;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj299540 = ({"style":({})});
return obj299540;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj299542 = ({"variant":"outlined","style":({"textTransform": "none"}),"onClick":(function (){
var G__299543 = (i + (1));
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1(G__299543) : to_page.call(null,G__299543));
})});
return obj299542;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299545 = ({"variant":"h3","style":({"color": "transparent", "fontSize": font_size, "WebkitTextStrokeWidth": "1px", "WebkitTextStrokeColor": "white"})});
return obj299545;
})(),item))));
});
return (trail_spring.cljs$core$IFn$_invoke$arity$1 ? trail_spring.cljs$core$IFn$_invoke$arity$1(G__299532) : trail_spring.call(null,G__299532));
})());
});
if(goog.DEBUG === true){
var G__299546 = G__299518;
goog.object.set(G__299546,"displayName","bbss.portfolio/Menu");

return G__299546;
} else {
return G__299518;
}
})();




bbss.portfolio.App = (function (){var G__299550 = (function bbss$portfolio$App(props__49831__auto__,maybe_ref__49832__auto__){
var vec__299551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__49831__auto__),maybe_ref__49832__auto__], null);

var parallax_ref = module$node_modules$react$index.useRef();
var to_page = (function (p1__299547_SHARP_){
return parallax_ref.current.scrollTo(p1__299547_SHARP_);
});
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
var title_font_size = (cljs.core.truth_(is_mobile_QMARK_)?(100):(60)
);
var font_size = (cljs.core.truth_(is_mobile_QMARK_)?(40):(20)
);
module$node_modules$react$index.useEffect((function (){
to_page((4));

return (function (){
return null;
});
}));

return helix.core.get_react().createElement(module$node_modules$$material_ui$core$esm$styles$index.ThemeProvider,(function (){var obj299555 = ({"theme":bbss.portfolio.theme});
return obj299555;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.Parallax,(function (){var obj299557 = ({"ref":parallax_ref,"pages":(cljs.core.count(bbss.portfolio.works) + (1)),"style":({"top": (0), "left": (0)})});
return obj299557;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj299559 = ({"offset":(0)});
return obj299559;
})(),helix.core.get_react().createElement("div",(function (){var obj299561 = ({"style":(function (){var obj299563 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js((cljs.core.truth_(is_mobile_QMARK_)?"column":"row")),"width":helix.impl.props.__GT_js("100vw"),"height":helix.impl.props.__GT_js("100%")});
return obj299563;
})()});
return obj299561;
})(),helix.core.get_react().createElement("div",(function (){var obj299565 = ({"style":(function (){var obj299567 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"alignItems":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("30px")});
return obj299567;
})()});
return obj299565;
})(),helix.core.get_react().createElement("img",(function (){var obj299569 = ({"style":(function (){var obj299571 = ({"borderRadius":helix.impl.props.__GT_js("50%"),"zIndex":helix.impl.props.__GT_js((10)),"minHeight":helix.impl.props.__GT_js("30%"),"maxHeight":helix.impl.props.__GT_js("50%"),"maxWidth":helix.impl.props.__GT_js("30vw"),"verticalAlign":helix.impl.props.__GT_js("bottom"),"objectFit":helix.impl.props.__GT_js("cover")});
return obj299571;
})(),"src":"baruch.png"});
return obj299569;
})()),helix.core.get_react().createElement("div",({}),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299575 = ({"variant":"h2","style":({"whiteSpace": "nowrap", "fontSize": (title_font_size + (20))})});
return obj299575;
})(),"Baruch Berger"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299577 = ({"variant":"h3","style":({"whiteSpace": "nowrap", "fontSize": title_font_size})});
return obj299577;
})(),"software engineer"),helix.core.get_react().createElement("a",(function (){var obj299579 = ({"href":"https://github.com/bbss","style":(function (){var obj299581 = ({"display":helix.impl.props.__GT_js("flex"),"marginTop":helix.impl.props.__GT_js("20px"),"justifyContent":helix.impl.props.__GT_js("center")});
return obj299581;
})()});
return obj299579;
})(),helix.core.get_react().createElement("img",(function (){var obj299583 = ({"style":(function (){var obj299585 = ({"marginRight":helix.impl.props.__GT_js("10px"),"alignSelf":helix.impl.props.__GT_js("center")});
return obj299585;
})(),"height":"30px","src":"github.png"});
return obj299583;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299587 = ({"variant":"h6","style":({"display": "inline-block", "fontSize": font_size, "whiteSpace": "nowrap"})});
return obj299587;
})(),"https://github.com/bbss")),helix.core.get_react().createElement("a",(function (){var obj299589 = ({"href":"mailto:baruchberger@gmail.com","style":(function (){var obj299591 = ({"display":helix.impl.props.__GT_js("flex"),"justifyContent":helix.impl.props.__GT_js("center")});
return obj299591;
})()});
return obj299589;
})(),helix.core.get_react().createElement("img",(function (){var obj299593 = ({"style":(function (){var obj299595 = ({"position":helix.impl.props.__GT_js("relative"),"marginLeft":helix.impl.props.__GT_js("7px"),"marginRight":helix.impl.props.__GT_js("9px"),"width":helix.impl.props.__GT_js("35px")});
return obj299595;
})(),"src":"mail.svg"});
return obj299593;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299597 = ({"variant":"h6","style":({"display": "inline", "fontSize": font_size, "whiteSpace": "nowrap"})});
return obj299597;
})(),"baruchberger@gmail.com")))),helix.core.get_react().createElement(bbss.portfolio.Menu,(function (){var obj299599 = ({"to-page":to_page});
return obj299599;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj299601 = ({"style":({"position": "absolute", "bottom": "0vh", "left": "450px", "flexDirection": "column", "display": "flex", "alignItems": "flex-start", "justifyContent": "flex-end"}),"onClick":(function (){
return parallax_ref.current.scrollTo((1));
})});
return obj299601;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299603 = ({"variant":"caption","style":({"fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"40px":"20px")})});
return obj299603;
})(),"SEE"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299605 = ({"variant":"caption","style":({"fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"40px":"20px")})});
return obj299605;
})(),"MY"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj299607 = ({"variant":"caption","style":({"fontWeight": "800", "fontSize": (cljs.core.truth_(is_mobile_QMARK_)?"40px":"20px")})});
return obj299607;
})(),"WORK"),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))),helix.core.get_react().createElement(bbss.portfolio.KoreanTools,(function (){var obj299609 = ({"to-page":to_page});
return obj299609;
})()),helix.core.get_react().createElement(bbss.portfolio.AircraftNoise,(function (){var obj299611 = ({"to-page":to_page});
return obj299611;
})()),helix.core.get_react().createElement(bbss.portfolio.Cljsc2,(function (){var obj299613 = ({"to-page":to_page});
return obj299613;
})()),helix.core.get_react().createElement(bbss.portfolio.Worldbank,(function (){var obj299615 = ({"to-page":to_page});
return obj299615;
})())),helix.core.get_react().createElement("div",(function (){var obj299617 = ({"style":(function (){var obj299619 = ({"position":helix.impl.props.__GT_js("static"),"height":helix.impl.props.__GT_js("100vh"),"width":helix.impl.props.__GT_js("100vw"),"top":helix.impl.props.__GT_js((0)),"left":helix.impl.props.__GT_js((0)),"background":helix.impl.props.__GT_js("linear-gradient(-45deg, #47C5CF, #94DABC, #FFCF54, #FAD1E2)"),"backgroundSize":helix.impl.props.__GT_js("400% 400%"),"animation":helix.impl.props.__GT_js("gradient 30s ease infinite")});
return obj299619;
})()});
return obj299617;
})()));
});
if(goog.DEBUG === true){
var G__299620 = G__299550;
goog.object.set(G__299620,"displayName","bbss.portfolio/App");

return G__299620;
} else {
return G__299550;
}
})();




//# sourceMappingURL=bbss.portfolio.js.map
