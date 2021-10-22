(ns bbss.portfolio
  (:require
   [com.fulcrologic.fulcro.raw.components :as raw]
   [react-intersection-observer :refer [useInView]]
   [com.fulcrologic.fulcro.algorithms.react-interop :as interop]
   [com.fulcrologic.fulcro.react.hooks :as hooks]
   ["@react-spring/web" :refer [config useSpring useSprings  useTrail useChain useTransition animated
                                useSpringRef]]
   ["@react-spring/parallax" :refer [Parallax ParallaxLayer]]
   [com.fulcrologic.fulcro.application :as app]
   [com.fulcrologic.fulcro.mutations :as m]
   [com.fulcrologic.fulcro.algorithms.form-state :as fs]
   [com.fulcrologic.fulcro.algorithms.denormalize :as fdn]
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.rendering.multiple-roots-renderer :as mroot]
   [com.fulcrologic.fulcro.ui-state-machines :as uism]
   [com.fulcrologic.fulcro.inspect.inspect-client :as inspect-client]

   [react :as react :refer [Suspense]]
   [react-dom :refer [render unstable_batchedUpdates]]
   [helix.core :as hx :refer [defnc $ <>]]
   ["@material-ui/core/styles" :refer [createTheme ThemeProvider useTheme responsiveFontSizes]]
   ["@material-ui/core/" :refer
    [Typography ButtonBase Button Paper
     Tabs Tab Slide
     useMediaQuery]]
   [react-use-measure :as useMeasure]))


(def orange "#fadeac")

(def gray "#929EA6")

(declare App)

(def SPA (atom {}))

(defn init []
  (println "init")
  (reset!
   SPA
   (app/fulcro-app
    {:batch-notifications (fn [render!] (unstable_batchedUpdates render!))}))

  (render (react/createElement App) (js/document.getElementById "app"))
  (inspect-client/app-started! @SPA))

(defn ^:dev/after-load refresh []
  (render (react/createElement App) (js/document.getElementById "app")))

(def pages
  '[intro
    korean.tools
    aircraft-noise
    cljsc2
    data.worldbank.org])

(defnc arrow-down []
  ($ :svg {:height 37 :viewBox "0 0 24 37" :width "24" :xmlns "http://www.w3.org/2000/svg"}
     ($ :g {:fill "none" :fillRule "evenodd" :stroke "#000" :strokeLinecap "square"
            :strokeWidth "2.8" :transform "translate(2 1)"}
        ($ :path {:d "m2.82418338 30.8044364 13.57954542-.0568182.0568182-13.5795454"
                  :transform "matrix(.70710678 .70710678 -.70710678 .70710678 19.785027 .20723)"})
        ($ :path {:d "m9.54545455.45075758v30.65151512"}))))

(comment
  (.-current video-ref)
  (set! (.. video-ref -current -currentTime) 0))

(def hamburger-video-points
  [{:point "Has big searchable dictionary and example dataset"
    :starts-at 0}
   {:point "Creates study of any Korean text or image (e.g. page of a book)"
    :starts-at 4}
   {:point "Scans sentences, dictionary matches, grammar"
    :starts-at 8}
   {:point "Creates interactive view to aid understanding text"
    :starts-at 15}
   {:point "Saves words for spaced-repetition memory practice"
    :starts-at 42}])

(def korean-tools-tt
  [{:tidbit "Has great client-server story"}
   {:tidbit "Uses explicit state-machines in the UI where logic isn't trivial"}
   {:tidbit "Inspectable normalized data on front-end"}
   {:tidbit "Form-state makes server mutations minimal and unintrusive"}
   {:tidbit "Intuitive data resolution from many datasources"}
   {:tidbit "Fancy neuralnet tech for content and Korean grammar analysis"}])

(defn get-point-index [points at-time]
  (dec (or (->> points
                (map-indexed vector)
                (some (fn [[index {:keys [starts-at]}]]
                        (when (< at-time starts-at) index))))
           (count points))))

(defn use-window-dimensions []
  (let [[dims set-dims]  (react/useState [(.-innerWidth js/window) (.-innerHeight js/window)])]
    (react/useEffect (fn []
                       (let [handler (fn [] (when-not (= dims [(.-innerWidth js/window) (.-innerHeight js/window)])
                                              (set-dims [(.-innerWidth js/window) (.-innerHeight js/window)])))]
                         (.addEventListener js/window "resize"
                                            handler)
                         #(.removeEventListener js/window "resize" handler)))
                     #js [])
    dims))

(defnc KoreanTools [{:keys [to-page]}]
  (let [video-ref  (react/useRef)
        [highlighted-point set-point]   (react/useState 0)
        [hovered? set-hovered!]         (react/useState false)
        [selected-tab set-selected-tab] (react/useState "points")
        is-mobile? (let [ua (.toLowerCase (.. js/navigator -userAgent))]
                     (or
                      (.includes ua "ipad")
                      (.includes ua "ios")
                      (.includes ua "android")))
        dims (use-window-dimensions)
        font-size (cond  (< (first dims) 660) "12px"
                         (< (first dims) 780) "14px"
                         :else "18px"
                         )
        left-distance (cond  (< (first dims) 660) "200px"
                             (< (first dims) 780) "240px"
                             :else "280px"
                             )
        available-phone-width (- (first dims) (cond  (< (first dims) 660) 200
                                                     (< (first dims) 780) 300
                                                     :else 450
                                                     ))
        ratio (if is-mobile?
                (min 1
                     (max 0.1 (- (/ (- (second dims)
                                       (if (= selected-tab "points") 400 500))
                                    766)
                                 0.2)))
                (min 0.8
                     (max 0.1 (- (/ available-phone-width
                                    766)
                                 0.2))))
        phone-spring (useSpring #js {:transform
                                     (cond
                                       hovered?
                                       (str "skew(0deg, 0deg) scale(" ratio ")")
                                       :else
                                       (str "skew(5deg, 5deg) scale(" ratio ")"))
                                     :config (.-stiff config)})
        [in-view-ref in-view?] (useInView #js {:threshold 0.1})]
    (react/useEffect
     (fn []
       (let [time-changed
             (fn [e]
               (let [new-point-index (get-point-index

                                      hamburger-video-points
                                      (.. e -target -currentTime))]
                 (when-not (= highlighted-point new-point-index)
                   (set-point new-point-index))))]
         (when (.-current video-ref)
           (.addEventListener (.-current video-ref) "timeupdate" time-changed))
         (fn [] (when (.-current video-ref)
                  (.removeEventListener
                   (.-current video-ref)
                   "timeupdate" time-changed))))))
    (react/useEffect
     (fn []
       (when (and in-view? (.-current video-ref))
         (set! (.. video-ref -current -currentTime) 0)))
     #js [in-view?])
    (<> ($ ParallaxLayer
           {:offset 1
            :speed 0.5
            :style #js {:height "40px"
                        :zIndex 5}}
           ($ Typography {:variant "h1"
                          :style #js {:color "transparent"
                                      :WebkitTextStrokeWidth "2px"
                                      :WebkitTextStrokeColor "#929EA6"}} "korean.tools"))
        ($ ParallaxLayer
           {:offset 0.95
            :speed 2.9
            :style #js {:zIndex -1
                        }
            :onClick #(to-page 1)}
           ($ :img {:style {:position "relative"
                            :borderRadius "20px"
                            :left "20%"
                            :transform "rotate(10deg)"}
                    :height "100px"
                    :src "ktmain.png"}))
        ($ ParallaxLayer
           {:offset 0.95
            :speed 0.9
            :onClick #(to-page 1)}
           ($ :img {:style {:position "relative"
                            :borderRadius "2px"
                            :left "5%"
                            :top "5%"
                            :transform "rotate(-10deg)"}
                    :width "200px"
                    :src "ktstudy.png"}))
        ($ ParallaxLayer
           {:offset 0.9
            :speed 0.4
            :style #js {:zIndex -1
                        }
            :onClick #(to-page 1)}
           ($ :img {:src "clj.png"
                    :height "50px"
                    :width  "50px"
                    :style {:alignSelf "center" :margin "10px"}}))
        ($ ParallaxLayer
           {:offset 0.9
            :speed 1.9
            :style #js {:zIndex -1
                        :userSelect "none"
                        :pointerEvents "none"}}
           ($ :img {:style {:position "relative"
                            :borderRadius "20px"
                            :left "30%"
                            :top "5%"
                            :transform "rotate(-15deg)"}
                    :src "ktdebug.png"
                    :height "150px"
                    }))
        ($ ParallaxLayer
           {:offset 1
            :speed 1.2
            :style #js {:background "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)"
                        :height "110vh"}}
           ($ :div {:style {:display "flex" :position "relative" }
                    :ref in-view-ref}
              ($ :div {:style {:display "flex" :flexDirection "column"
                               :top "130px"
                               :minWidth "90vw"
                               :position "relative"
                               :margin "10px"}}
                 ($ :p {:style {:display "inline-block"
                                :fontFamily "Rubik, sans-serif"
                                :fontWeight "800"
                                :fontSize   "1rem"
                                :lineHeight 1.66
                                :letterSpacing "0.03333em"
                                :color "rgba(255,255,255,0.8)"}}
                    "A "
                    ($ :em {} "work in progress")
                    " that I've been using to help me study Korean.")
                 ($ :p {:style {:display "inline-block"
                                :fontFamily "Rubik, sans-serif"
                                :fontWeight "800"
                                :fontSize   "1rem"
                                :lineHeight 1.66
                                :letterSpacing "0.03333em"
                                :color "rgba(255,255,255,0.8)"}}
                    "I started turning it into an app because I think others might like the tool!")

                 ($ Paper {:style #js {:marginTop "50px"
                                       :minHeight "80px"
                                       :background "linear-gradient(white 60%, transparent 100%)"}
                           :elevation 3}
                    ($ Tabs {:value selected-tab
                             :onChange (fn [_ e2]
                                         (set-selected-tab e2))}
                       ($ Tab {:value "points"
                               :label "Highlights"})
                       ($ Tab {:value "tt"
                               :label "Technical Tidbits"})
                       ($ :img {:src "clj.png"
                                :title "Clojure"
                                :alt "Clojure"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src "cljs-white.svg"
                                :alt "ClojureScript"
                                :title "ClojureScript"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src "xtdb.svg"
                                :alt "xtdb"
                                :title "xtdb"
                                :height "30px"

                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src "fulcro.svg"
                                :alt "fulcro"
                                :title "fulcro"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}}))

                    ($ :div {:style {:display "flex"
                                     :flexDirection "row"
                                     :marginTop "20px"
                                     :position "relative"
                                     :left "20px"}}
                       ($ Slide {:direction "right" :in (= selected-tab "points")}
                          ($ :div {:style {:position "absolute"
                                           :display "flex"
                                           :flexDirection (if is-mobile? "row" "column")}
                                    :elevation 3}
                             (->> hamburger-video-points
                                  (map-indexed vector)
                                  (map (fn [[index {:keys [point starts-at]}]]
                                         ($ Button {:key index
                                                    :variant "outlined"
                                                    :style #js {:transform (if (= index highlighted-point) "scale(1)" "scale(0.8)")
                                                                :transition "200ms linear"}
                                                    :onClick #(set! (.. video-ref -current -currentTime) starts-at)}
                                            ($ Typography {:variant "h6"
                                                           :style #js {:fontSize font-size}
                                                           :color (if (= index highlighted-point) "secondary" "primary")} point)))))))

                       ($ Slide {:direction "left" :in (= selected-tab "tt")}
                          ($ :div {:style {:position "absolute"}}
                             (->> korean-tools-tt
                                  (map-indexed vector)
                                  (map (fn [[index {:keys [tidbit]}]]
                                         ($ Typography
                                            {:key index
                                             :variant "h6"
                                             :color "primary"}
                                            tidbit))))))))))
           ($ (.-div animated)
              {:onMouseOver #(set-hovered! true)
               :onMouseOut  #(set-hovered! false)
               :style
               (if is-mobile?
                 #js {:position "absolute"
                      :left     (str "calc(" (/ (first dims) 2) "px - " 200 "px)")
                      :top      (str "calc(" (+ (/ (second dims) 2) (if (= selected-tab "points") 180 240)) "px - 383px)")
                      :width    "375px"
                      :height   "812px"
                      :margin   "40px auto"
                      :borderRadius "40px"
                      :zIndex 5
                      :transform (.-transform phone-spring)
                      :boxShadow "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111"}
                 #js {:position "relative"
                      :left     left-distance
                      :top      "-280px"
                      :width    "375px"
                      :height   "812px"
                      :margin   "40px auto"
                      :borderRadius "40px"
                      :transform (.-transform phone-spring)
                      :boxShadow "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111"})}
              ($ :video {:autoPlay    true
                         :ref         video-ref
                         :muted       true
                         :loop        true
                         :playsInline true
                         :id          "kt"
                         :style {:borderRadius "30px"
                                 :zIndex 20}}
                 ($ :source {:src "kt-hamburger.webm"
                             :type "video/webm;codecs=\"vp8, vorbis\""})
                 ($ :source {:src "kt-hamburger.mov"
                             :type "video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""})))
           ($ ButtonBase {:style #js {:minHeight "10vh"
                                      :position "absolute"
                                      :padding "10px"
                                      :paddingRight "40px"
                                      :bottom (if is-mobile? "20vh" "10vh") :left "10px"}
                          :onClick #(to-page 2)}
              ($ Typography {:variant "caption"
                             :style #js {:fontWeight "800"
                                         :color "rgba(255,255,255,0.8)"
                                         :fontSize "20px"}} "AIRCRAFT-NOISE.ORG")
              ($ :span {:style {:position "absolute"  :left "230px"}}
                 ($ arrow-down)))))))

(def aircraft-noise-points
  [{:point "3D exploration of flight data"
    :starts-at 0}
   {:point "Client-side data processing"
    :starts-at 12}
   {:point "Different types of visualization"
    :starts-at 25}
   {:point "Live flight streaming"
    :starts-at 72}])

(def aircraft-noise-tt
  [{:tidbit "Making use of the great vis.gl GIS tool suite."}
   {:tidbit "Worked with Uber vis.gl team to squeeze out performance."}
   {:tidbit "Using WebWorkers for data fetching & processing."}
   {:tidbit "Keeping UI thread as yank-free as possible."}
   {:tidbit "Use WebSockets and defined TypedArray layouts for optimal data transfer and display."}
   {:tidbit "Use kafka for backfilling real-time flights."}])

(defnc AircraftNoise [{:keys [to-page]}]
  (let [video-ref                     (react/useRef)
        [highlighted-point set-point] (react/useState 0)
        [hovered? set-hovered!]       (react/useState false)
        [selected-tab set-selected-tab] (react/useState "points")
        is-mobile? (let [ua (.toLowerCase (.. js/navigator -userAgent))]
                     (or
                      (.includes ua "ipad")
                      (.includes ua "ios")
                      (.includes ua "android")))
        [_ window-height] (use-window-dimensions)
        ratio (min 0.8
                   (max 0.1 (- (/ (- window-height (if (= selected-tab "points") 400 500)) 766)
                               0.1)))
        tablet-spring (useSpring #js {:transform (if hovered?
                                                   (str "skew(0deg, 0deg) scale(" ratio ")")
                                                   (str "skew(5deg, 5deg) scale(" ratio ")"))
                                      :config (.-stiff config)})
        [in-view-ref in-view?] (useInView #js {:threshold 0.5})]
    (react/useEffect
     (fn []
       (let [time-changed
             (fn [e]
               (let [new-point-index (get-point-index
                                      aircraft-noise-points
                                      (.. e -target -currentTime))]
                 (when-not (= highlighted-point new-point-index)
                   (set-point new-point-index))))]
         (when (.-current video-ref)
           (.addEventListener (.-current video-ref) "timeupdate" time-changed))
         (fn []  (when (.-current video-ref)
                   (.removeEventListener
                    (.-current video-ref) "timeupdate" time-changed))))))
    (react/useEffect
     (fn []
       (when (and in-view? (.-current video-ref))
         (set! (.. video-ref -current -currentTime) 0)))
     #js [in-view?])
    (<> ($ ParallaxLayer
           {:offset 2
            :speed 0.5
            :style #js {:height "115px"
                        :zIndex 7
                        :overflow "hidden"}}
           ($ Typography {:variant "h1"
                          :style #js {:color "transparent"
                                      :zIndex 6
                                      :WebkitTextStrokeWidth "2px"
                                      :WebkitTextStrokeColor "#929EA6"}}
              "aircraft-noise.org"))
        ($ ParallaxLayer
           {:offset 1.96
            :speed 0.5
            :style #js {:zIndex -1
                        :userSelect "none"
                        :pointerEvents "none"}}
           ($ :img {:style {:position "absolute"
                            :left "70%"
                            :zIndex -1
                            :top "300px"
                            :userSelect "none"
                            :pointerEvents "none"
                            :borderRadius "20px"
                            :transform "rotate(-10deg)"}
                    :height "250px"
                    :src "acnsf.png"}))
        ($ ParallaxLayer
           {:offset 1.96
            :speed 0.4
            :style #js {:zIndex -1
                        :userSelect "none"
                        :pointerEvents "none"
                        }}
           ($ :img {:style {:position "absolute"

                            :left "40%"
                            :top "300px"
                            :borderRadius "20px"
                            :transform "rotate(5deg)"}
                    :height "250px"
                    :src "acnheatmap.png"}))
        ($ ParallaxLayer
           {:offset 1.96
            :speed 0.2
            :style #js {:zIndex -1
                        :userSelect "none"
                        :pointerEvents "none"
                        }}
           ($ :img {:style {:position "absolute"
                            :top "300px"
                            :borderRadius "20px"
                            :left "10%"
                            :transform "rotate(-5deg)"}
                    :height "250px"
                    :src "acnterrain.png"}))
        ($ ParallaxLayer
           {:offset 2
            :speed  1
            :style #js {:background "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)"
                        :height "110vh"
                        :zIndex 5}}
           ($ :div {:style {:display "flex" :position "relative"
                            :justifyContent "center"}
                    :ref in-view-ref}
              ($ :div {:style {:display "flex" :flexDirection "column"
                               :top "130px"
                               :position "relative"
                               :margin "10px"}}
                 ($ Typography {:variant "body1"
                                :style #js {:color "lightgray"}}
                    "Supporting researchers in visualizing models of aircraft noise pollution. Building visualizations and supporting tools.")
                 ($ Paper {:style #js {:marginTop "50px"
                                       :minHeight "80px"
                                       :background "linear-gradient(white 60%, transparent 100%)"}}
                    ($ Tabs {:value selected-tab
                             :onChange (fn [_ e2]
                                         (set-selected-tab e2))}
                       ($ Tab {:value "points"
                               :label "Highlights"})
                       ($ Tab {:value "tt"
                               :label "Technical Tidbits"})
                       ($ :img {:src "clj.png"
                                :title "Clojure"
                                :alt "Clojure"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src "cljs-white.svg"
                                :alt "ClojureScript"
                                :title "ClojureScript"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src "postgres.svg"
                                :alt "postgres"
                                :title "postgres"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src "kafka.svg"
                                :alt "kafka"
                                :title "kafka"
                                :height "30px"
                                :style {:alignSelf "center" :margin "10px"}}))

                    ($ :div {:style {:display "flex"
                                     :flexDirection "row"
                                     :marginTop "20px"
                                     :position "relative"
                                     :left "20px"}}
                       ($ Slide {:direction "right" :in (= selected-tab "points")}
                          ($ :div {:style {:position "absolute"
                                           :display "flex"}}
                             (->> aircraft-noise-points
                                  (map-indexed vector)
                                  (map (fn [[index {:keys [point starts-at]}]]
                                         ($ Button {:key index
                                                    :variant "outlined"
                                                    :style #js {:transform (if (= index highlighted-point) "scale(1)" "scale(0.8)")
                                                                :transition "200ms linear"}
                                                    :onClick #(set! (.. video-ref -current -currentTime) starts-at)}
                                            ($ Typography {:variant "h6"
                                                           :color (if (= index highlighted-point) "secondary" "primary")} point)))))))

                       ($ Slide {:direction "left" :in (= selected-tab "tt")}
                          ($ :div {:style {:position "absolute"}}
                             (->> aircraft-noise-tt
                                  (map-indexed vector)
                                  (map (fn [[index {:keys [tidbit]}]]
                                         ($ Typography {:key index
                                                        :variant "h6"
                                                        :color "primary"} tidbit)))))))))
              ($ (.-div animated)
                 {:onMouseOver #(set-hovered! true)
                  :onMouseOut  #(set-hovered! false)
                  :style
                  #js {:width    "1000px"
                       :height   "766px"
                       :position "absolute"
                       :left     "calc(50% - 500px)"
                       :top   (str "calc(" (+ (/ window-height 2) (if (= selected-tab "points") 180 240)) "px - 383px)")
                       :margin   "40px auto"
                       :borderRadius "40px"
                       :zIndex 5
                       :transform (.-transform tablet-spring)
                       :boxShadow "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111"}}
                 ($ :video {:autoPlay    true
                            :muted       true
                            :loop        true
                            :playsInline true
                            :ref video-ref
                            :style {:width    "1000px"
                                    :height   "766px"
                                    :zIndex 6
                                    :borderRadius "40px"}}
                    ($ :source {:src "acn.mp4"
                                :type "video/webm;codecs=\"vp8, vorbis\""})
                    ($ :source {:src "acn.mov"
                                :type "video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""}))))
           ($ ButtonBase {:style #js {:minHeight "10vh"
                                      :position "absolute"
                                      :padding "10px"
                                      :paddingRight "40px"
                                      :bottom (if is-mobile? "20vh" "10vh")
                                      :left "10px"
                                      :zIndex 10}
                          :onClick #(to-page 3)}
              ($ Typography {:variant "caption"
                             :style #js {:fontWeight "800"
                                         :color "rgba(255,255,255,0.8)"
                                         :fontSize "20px"}} "CLJSC2")
              ($ :span {:style {:position "absolute"  :left "100px"}}
                 ($ arrow-down)))))))


(def cljsc2-points
  [{:point "Allows running and configuring multiple instances of SC2 games."}
   {:point "Allows interactive control of SC2 game via Clojure REPL."}
   {:point "Wraps full API for low level control."}
   {:point "Provides data-based api with game-state query capabilities for higher level control."}])

(def cljsc2-tt
  [{:tidbit "Parses API EBNF context free grammar file to generate Clojure specs."}
   {:tidbit "Provides datalog version of gamestate, and higher level rules to start playing the game."}
   {:tidbit "Integrated clojure and cljsc2 into Jupyter Notebook for interactive studies."}])


(defnc Cljsc2 [{:keys [to-page]}]
  (let [[selected-tab set-selected-tab] (react/useState "points")
        is-mobile? (let [ua (.toLowerCase (.. js/navigator -userAgent))]
                     (or
                      (.includes ua "ipad")
                      (.includes ua "ios")
                      (.includes ua "android")))
        [_ window-height]               (use-window-dimensions)]
    (<> ($ ParallaxLayer
           {:offset 3
            :speed 0.5
            :style #js {:height "40px"
                        :zIndex 5}}
           ($ Typography {:variant "h1"
                          :style #js {:color "transparent"
                                      :WebkitTextStrokeWidth "2px"
                                      :WebkitTextStrokeColor "#929EA6"}} "CLJSC2"))
        ($ ParallaxLayer
           {:offset 2.999
            :speed 0.4}
           ($ :img {:style {:position "relative"
                            :borderRadius "20px"
                            :transform "rotate(10deg)"}
                    :height "500px"
                    :src "meblizz.jpeg"}))
        ($ ParallaxLayer
           {:offset 2.9999999
            :speed 0.3}
           ($ :img {:style {:position "relative"
                            :borderRadius "20px"
                            :right "-70%"
                            :transform "rotate(3deg)"}
                    :height "400px"
                    :src "sc2notebook.png"}))
        ($ ParallaxLayer
           {:offset 2.99
            :speed 0.6}
           ($ :img {:style {:position "relative"
                            :borderRadius "20px"
                            :transform "scale(0.4) rotate(-3deg)"}
                    :src "sc2deepmind.jpeg"}))
        ($ ParallaxLayer
           {:offset 2.999
            :speed 0.1}
           ($ :img {:style {:position "relative"
                            :left "20%"
                            :transform "scale(0.6) rotate(-5deg)"}
                    :src "sc2.png"}))


        ($ ParallaxLayer
           {:offset 3
            :speed  1.2
            :style #js {:background "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)"
                        :height "110vh"
                        :zIndex 3}}
           ($ :div {:style {:display "flex" :position "relative"}}
              ($ :div {:style {:display "flex" :flexDirection "column"
                               :top "130px"
                               :position "relative"
                               :margin "10px"}}
                 ($ :div {:style {:display "inline"}}
                    ($ Typography {:variant "body1"
                                   :style #js {:color "lightgray"
                                               :display "inline"}}
                       "Wrote an ")
                    ($ :a {:href "https://github.com/bbss/cljsc2"
                           :style #js {:background "rgba(255,255,255,0.5)"}}
                       ($ Typography {:variant "body1" :style #js {:display "inline"}}
                          "open source Clojure library"))
                    ($ Typography {:variant "body1"
                                   :style #js {:color "lightgray"
                                               :display "inline"}}
                       " to the StarCraft II AI API."))
                 ($ :br)
                 ($ Typography {:variant "body1"
                                :style #js {:color "lightgray"}}
                    "When DeepMind beat the legendary Lee Sedol (이세돌) in the old Asian game of Go they announced maybe tackling StarCraft next, I got very excited..")
                 ($ Typography {:variant "body1"
                                :style #js {:color "lightgray"}}
                    "When Blizzard announced their cooperation and AI API I knew I wanted to hook up my favorite programming language to experiment with it.")
                 ($ :br)
                 ($ Typography {:varinat "body1"
                                :style #js {:color "lightgray"}}
                    "Around the time I finished my first experiments I got an invite to a workshop with StarCraft II developers and DeepMind researchers!")
                 ($ Typography {:varinat "body1"
                                :style #js {:color "lightgray"}}
                    "Super lucky to meet a lot of smart people and talk about these awesome topics.")
                 ($ Paper {:style #js {:marginTop "50px"
                                       :minHeight "80px"
                                       :background "linear-gradient(white 60%, transparent 100%)"}}
                    ($ Tabs {:value selected-tab
                             :onChange (fn [_ e2]
                                         (set-selected-tab e2))}
                       ($ Tab {:value "points"
                               :label "Highlights"})
                       ($ Tab {:value "tt"
                               :label "Technical Tidbits"})
                       ($ Tab {:value "yt"
                               :label "Meetup Talk"}))

                    ($ :div {:style {:display "flex"
                                     :flexDirection "row"
                                     :marginTop "20px"
                                     :position "relative"
                                     :left "20px"}}
                       ($ Slide {:direction "right" :in (= selected-tab "points")}
                          ($ :div {:style {:position      "absolute"
                                           :display       "flex"
                                           :flexDirection "column"}}
                             (->> cljsc2-points
                                  (map-indexed vector)
                                  (map (fn [[index {:keys [point starts-at]}]]
                                         ($ Typography {:key index
                                                        :variant "h6"
                                                        :color "primary"} point))))))

                       ($ Slide {:direction "left" :in (= selected-tab "tt")}
                          ($ :div {:style {:position "absolute"}}
                             (->> cljsc2-tt
                                  (map-indexed vector)
                                  (map (fn [[index {:keys [tidbit]}]]
                                         ($ Typography {:key index
                                                        :variant "h6"
                                                        :color "primary"} tidbit))))))
                       ($ Slide {:direction "up" :in (= selected-tab "yt")}
                          ($ :div {:style {:position "absolute"}}
                             ($ :iframe {:width 560 :height 315
                                         :src "https://www.youtube.com/embed/c5DifklnMI8"
                                         :frameBorder 0
                                         :allow "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})))))))
           ($ ButtonBase {:style #js {:minHeight "10vh"
                                      :position "absolute"
                                      :padding "10px"
                                      :paddingRight "40px"
                                      :bottom (if is-mobile? "20vh" "10vh")
                                      :left "10px"
                                      :zIndex 10}
                          :onClick #(to-page 4)}
              ($ Typography {:variant "caption"
                             :style #js {:fontWeight "800"
                                         :color "rgba(255,255,255,0.8)"
                                         :fontSize "20px"}} "DATA.WORLDBANK.ORG")
              ($ :span {:style {:position "absolute"  :left "240px"}}
                 ($ arrow-down)))))))

(def wb-points
  [{:point "Autocompletes datasets/countries regions"
    :starts-at 0}
   {:point "Has graphs and map visualizations"
    :starts-at 11}
   {:point "Recommends further related data"
    :starts-at 20}])

(def wb-tt
  [{:tidbit "Used by millions of people!"}
   {:tidbit "Early adopter of ReactJS Redux pattern."}
   {:tidbit "Wraps datasets with a falcorJS data resolution system: "}
   {:tidbit "Easy fetching, caching, batching for slow devices."}
   {:tidbit "D3.js for custom graphs + intuitive touch interactions."}])

(defnc Worldbank [{:keys [to-page]}]
  (let [video-ref (react/useRef)
        [highlighted-point set-point]   (react/useState 0)
        [hovered? set-hovered!]         (react/useState false)
        [selected-tab set-selected-tab] (react/useState "points")
        [in-view-ref in-view?] (useInView #js {:threshold 0.5})
        is-mobile? (let [ua (.toLowerCase (.. js/navigator -userAgent))]
                     (or
                      (.includes ua "ipad")
                      (.includes ua "ios")
                      (.includes ua "android")))
        dims (use-window-dimensions)
        font-size (cond  (< (first dims) 660) "12px"
                         (< (first dims) 780) "14px"
                         :else "18px"
                         )
        available-phone-width (- (first dims) (cond  (< (first dims) 660) 200
                                                     (< (first dims) 780) 300
                                                     :else 400
                                                     ))
        ratio (if is-mobile?
                (min 1
                     (max 0.1 (- (/ (- (second dims)
                                       (if (= selected-tab "points") 400 500))
                                    766)
                                 0.2)))
                (min 0.8
                     (max 0.1 (- (/ available-phone-width
                                    766)
                                 0.2))))
        phone-spring (useSpring #js {:transform
                                     (cond
                                       hovered?
                                       (str "skew(0deg, 0deg) scale(" ratio ")")
                                       :else
                                       (str "skew(5deg, 5deg) scale(" ratio ")"))
                                     :config (.-stiff config)})]
    (react/useEffect
         (fn []
           (let [time-changed
                 (fn [e]
                   (let [new-point-index (get-point-index

                                          wb-points
                                          (.. e -target -currentTime))]
                     (when-not (= highlighted-point new-point-index)
                       (set-point new-point-index))))]
             (when (.-current video-ref)
               (.addEventListener (.-current video-ref) "timeupdate" time-changed))
             (fn [] (when (.-current video-ref)
                      (.removeEventListener
                       (.-current video-ref)
                       "timeupdate" time-changed))))))
    (react/useEffect
     (fn []
       (when (and in-view? (.-current video-ref))
         (set! (.. video-ref -current -currentTime) 0)))
     #js [in-view?])
    (<> ($ ParallaxLayer
           {:offset 4
            :speed 0.5
            :style #js {:height "40px"
                        :zIndex 5}}
           ($ Typography {:variant "h1"
                          :ref in-view-ref
                          :style #js {:color "transparent"
                                      :WebkitTextStrokeWidth "2px"
                                      :WebkitTextStrokeColor "#929EA6"}} "data.worldbank.org"))
        ($ ParallaxLayer
           {:offset 3.96
            :speed 0.5}
           ($ :img {:style {:position "relative"
                            :left "800px"
                            :borderRadius "20px"
                            :transform "rotate(10deg)"}
                    :height "250px"
                    :src "wbindicators.png"}))
        ($ ParallaxLayer
           {:offset 3.96
            :speed 0.4}
           ($ :img {:style {:position "relative"
                            :left "300px"
                            :borderRadius "20px"
                            :transform "rotate(5deg)"}
                    :height "250px"
                    :src "wbmain.png"}))
        ($ ParallaxLayer
           {:offset 3.96
            :speed 0.3
            }
           ($ :img {:style {:position "relative"
                            :borderRadius "20px"
                            :left "0px"
                            :transform "rotate(-5deg)"}
                    :height "250px"
                    :src "wb2.png"}))
        ($ ParallaxLayer
           {:offset 4
            :speed  1.2
            :style #js {:background "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)"
                        :zIndex 3}}
           ($ :div {:style {:display "flex" :position "relative"}
                    :ref in-view-ref}
              ($ :div {:style {:display "flex" :flexDirection "column"
                               :top "130px"
                               :position "relative"
                               :margin "10px"}}

                 ($ Typography {:variant "body1"
                                :style #js {:color "lightgray"}}
                    "Built the mobile-first SPA for the Open Data platform of the World Bank. The Open Data platform has a big dataset of yearly indicators for all countries in the world.  The datasets are explorable in a bunch of ways and can be mixed and visualized to the user's liking.")
                 ($ :br)
                 ($ Typography {:variant "body1"
                                :style #js {:color "lightgray"}}
                    "The Open Data platform has a big dataset of yearly indicators for all countries in the world.")
                 ($ :br)
                 ($ Typography {:variant "body1"
                                :style #js {:color "lightgray"}}
                    "The datasets are explorable in a bunch of ways and can be mixed and visualized to the user's liking.")


                 ($ Paper {:style #js {:marginTop "50px"
                                       :minHeight "80px"
                                       :background "linear-gradient(white 60%, transparent 100%)"}}
                    ($ Tabs {:value selected-tab
                             :onChange (fn [_ e2]
                                         (set-selected-tab e2))}
                       ($ Tab {:value "points"
                               :label "Highlights"})
                       ($ Tab {:value "tt"
                               :label "Technical Tidbits"})
                       ($ :img {:src    "js.png"
                                :alt    "JavaScript"
                                :title  "JavaScript"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src "node.svg"
                                :alt "node.js"
                                :title "node.js"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src    "d3.svg"
                                :alt    "JavaScript"
                                :title  "JavaScript"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src    "falcor.svg"
                                :alt    "falcorJS"
                                :title  "falcorJS"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}})
                       ($ :img {:src "redis-cube.svg"
                                :alt "redis"
                                :title "redis"
                                :height "30px"
                                :width  "30px"
                                :style {:alignSelf "center" :margin "10px"}}))

                    ($ :div {:style {:display "flex"
                                     :flexDirection "row"
                                     :marginTop "20px"
                                     :position "relative"}}
                       ($ Slide {:direction "right" :in (= selected-tab "points")}
                          ($ :div {:style {:position      "absolute"
                                           :top           "5px"
                                           :display       "flex"
                                           :flexDirection "column"}}
                             (->> wb-points
                                  (map-indexed vector)
                                  (map (fn [[index {:keys [point starts-at]}]]
                                         ($ Button {:key index
                                                    :variant "outlined"
                                                    :style #js {:transform (if (= index highlighted-point) "scale(1)" "scale(0.8)")
                                                                :transition "200ms linear"}
                                                    :onClick #(set! (.. video-ref -current -currentTime) starts-at)}
                                            ($ Typography {:variant "h6"
                                                           :style #js {:fontSize font-size}
                                                           :color (if (= index highlighted-point) "secondary" "primary")} point)))))))

                       ($ Slide {:direction "left" :in (= selected-tab "tt")}
                          ($ :div {:style {:position "absolute"}}
                             (->> wb-tt
                                  (map-indexed vector)
                                  (map (fn [[index {:keys [tidbit]}]]
                                         ($ Typography {:key index
                                                        :variant "h6"
                                                        :style #js {:paddingLeft "10px"
                                                                    :fontSize font-size}
                                                        :color "primary"} tidbit)))))))))
              ($ :div {:key 0
                       :style {:margin "30px"}}
                 ($ (.-div animated)
                    {:onMouseOver #(set-hovered! true)
                     :onMouseOut  #(set-hovered! false)
                     :style
                     (if is-mobile?
                       #js {:width    "330px"
                            :height   "714px"
                            :position "absolute"
                            :top "40vh"
                            :left (- (/ (first dims) 2) 155)
                            :margin "40px auto"
                            :borderRadius "40px"
                            :transform (.-transform phone-spring)
                            :boxShadow "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111"}
                       #js {:width    "330px"
                            :height   "714px"
                            :right    (cond  (< (first dims) 660) 230
                                             (< (first dims) 780) 120
                                             :else 100
                                             )
                            :top    (cond  (< (first dims) 660) 100
                                           (< (first dims) 780) 100
                                           :else 50
                                           )
                            :position "relative"
                            :margin "40px auto"
                            :borderRadius "40px"
                            :transform (.-transform phone-spring)
                            :boxShadow "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111"})}
                    ($ :video {:autoPlay    true
                               :muted       true
                               :loop        true
                               :playsInline true
                               :ref video-ref
                               :style {:width    "330px"
                                       :height   "714px"
                                       :zIndex 6
                                       :borderRadius "40px"}}
                       ($ :source {:src "wb.mp4"
                                   :type "video/webm;codecs=\"vp8, vorbis\""})
                       ($ :source {:src "wb.mov"
                                   :type "video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""})))))
           ($ ButtonBase {:style #js {:zIndex 10 :position "absolute"
                                      :padding "20px" :bottom 0 :left "10px"}
                          :onClick #(to-page 0)}
              ($ Typography {:variant "caption"
                             :style #js {:fontWeight "800"
                                         :color "rgba(255,255,255,0.8)"
                                         :fontSize "20px"}} "TOP")
              ($ :span {:style {:transform "rotate(180deg)"
                                :position "absolute"  :left "80px"}}
                 ($ arrow-down)))))))

(def works {'korean-tools
            KoreanTools
            'aircraft-noise.org
            AircraftNoise
            'cljsc2
            Cljsc2
            'worldbank
            Worldbank})

(def theme
  (createTheme
   (clj->js {:typography
             {:fontFamily "Rubik, sans-serif"}
             :palette {:primary {:light gray
                                 :main gray
                                 :dark gray
                                 :contrastText "#fff"}
                       :secondary {:light orange
                                   :main orange
                                   :dark orange
                                   :contrastText "#fff"}}})))

(defnc Menu [{:keys [to-page]}]
  (let [pop-ref    (useSpringRef)
        reveal-ref (useSpringRef)
        [in-view-ref top-in-view?] (useInView #js {:threshold 0.5})
        dims (use-window-dimensions)
        title-font-size (cond (> (first dims) 1080) 80
                              :else 60)
        font-size (cond (> (second dims) 700) 40
                              :else 30)
        links (map-indexed vector ["korean.tools" "aircraft-noise.org" "cljsc2" "data.worldbank.org"])
        is-mobile? (let [ua (.toLowerCase (.. js/navigator -userAgent))]
                     (or
                      (.includes ua "ipad")
                      (.includes ua "ios")
                      (.includes ua "android")))
        pop-spring (useSpring #js {:ref pop-ref
                                   :transform (cond
                                                (and (< (.-innerWidth js/window) 1000)
                                                     (not is-mobile?))
                                                "scale(0)"
                                                top-in-view? "scale(1)"
                                                :else "scale(0)")})
        trail-spring (useTransition (if top-in-view? (to-array links) #js [])
                                    #js {:ref reveal-ref
                                         :reset true
                                         :trail 50
                                         :keys (comp first second)
                                         :config #js {:mass 4 :tension 2000 :friction 200}
                                         :enter #js {:opacity (if top-in-view? 1 0)
                                                     :height (if top-in-view? "100px" "0px")
                                                     :x (if top-in-view? 0 20)}
                                         :from #js {:opacity 0 :x 20 :height "100px"}})]
    (useChain (if top-in-view? #js [pop-ref reveal-ref] #js [reveal-ref pop-ref]))
    ($ (.-div animated)
       {:style #js {:display "flex"
                    #_#_:position "absolute"
                    #_#_:justifySelf "center"
                    :flexDirection "column"
                    :margin "20px"
                    :background "linear-gradient(to right, rgba(100, 100, 100, 0.15), rgba(100, 100, 100, 0.3))"
                    :padding "100px"
                    :clipPath  "polygon(0 1%, 100% 0%, 90% 95%, 10% 90%)"
                    :transform (.-transform pop-spring)}
        :ref in-view-ref}
       ($ :p {:style {:fontFamily "'Zen Tokyo Zoo', cursive"
                      :fontSize (str title-font-size "px")
                      :whiteSpace "nowrap"
                      :color "white"
                      }} "some of my work")
       (trail-spring
        (fn [props [i item] opts]
          ($ (.-div animated) {:style #js {:opacity (.-opacity props)
                                           :height (.-height props)
                                           :x (.-x props)}
                               :key item}
             ($ (.-div animated) {:style #js {#_#_:height (.-height props)}}
                ($ Button {:variant "outlined"
                           :style #js {:margin (if (> (second dims) 700) "15px" "0px")
                                       :padding (if (> (second dims) 700) "15px" "0px")
                                       :textTransform "none"}
                           :onClick #(to-page (inc i))}
                   ($ Typography {:variant "h3"
                                  :style #js {:color "transparent"
                                              :fontSize font-size
                                              :WebkitTextStrokeWidth "1px"
                                              :WebkitTextStrokeColor "white"}}
                      item)
                   ))))))))


(defnc App []
  (let [parallax-ref (react/useRef)
        to-page      #(.scrollTo (.-current parallax-ref) %)
        thin?      (useMediaQuery "(max-width: 1000px)")
        long?      (useMediaQuery "(min-height: 804px)")
        is-mobile? (let [ua (.toLowerCase (.. js/navigator -userAgent))]
                     (or
                      (.includes ua "ipad")
                      (.includes ua "ios")
                      (.includes ua "android")))]


    #_(react/useEffect (fn [] (to-page 0)
                       (fn [])))
    ($ ThemeProvider
       {:theme theme}
       ($ Parallax {:ref parallax-ref
                    :pages (inc (count works)) :style #js {:top 0 :left 0}}
          #_($ :div {:style {:borderRadius "0 0 30px 30px"
                           :height "calc(100vh - 100px)"
                           :overflow "hidden"}}
             ($ ParallaxLayer
                {:offset 0 :speed 2
                 :horizontal true
                 :style #js {:background "linear-gradient(100deg, hsl(110deg 100% 91%) 0vw, hsl(110deg 100% 91%) 55vw, hsl(110deg 100% 91% / 0%) 55.1vw, hsl(90deg 50% 57% / 0%) 100vw)"
                             :position "relative"
                             :height "100vh"
                             :width "100vw"}})
             ($ ParallaxLayer
                {:offset 0 :speed -1.5
                 :horizontal true
                 :style #js {:background "linear-gradient(80deg, hsl(233deg 100% 92% / 0%) 65vw, hsl(233deg 100% 92% / 100%) 65.1vw, hsl(233deg 100% 92% / 100%) 65.2vw, hsl(233deg 100% 92%) 100vw)"
                             :height "calc(200vh - 100px)"
                             :width  "100vw"}}))

          ($ ParallaxLayer {:offset 0}
             ($ :div {:style {:display "flex"
                              :flexDirection (if (and long? thin? is-mobile?) "column" "row")
                              :width "100vw"
                              :height "100%"}}
                ($ :div {:style {:display "flex"
                                 :flexDirection "column"
                                 :alignItems  "center"
                                 :margin "30px"}}
                   ($ :img {:style {:borderRadius "50%"
                                    :zIndex 10
                                    :minHeight "30%"
                                    :maxHeight "50%"
                                    :maxWidth "30vw"
                                    :verticalAlign "bottom"
                                    :object-fit "cover"}
                            :src    "baruch.png"})
                   ($ :div {}
                      ($ Typography {:variant "h2"
                                          :style #js {:whiteSpace "nowrap"}} "Baruch Berger")
                      ($ Typography {:variant "h3"
                                     :style #js {:whiteSpace "nowrap"}} "software engineer")
                      ($ :a {:href "https://github.com/bbss"
                             :style {:display "flex"
                                     :marginTop "20px"
                                     :justifyContent "center"}}
                         ($ :img {:style {:position "relative" :marginRight "10px"}
                                  :height "30px"
                                  :src "github.png"})
                         ($ Typography {:variant "h6"
                                        :style #js {:display "inline"
                                                    :whiteSpace "nowrap"}} "https://github.com/bbss"))
                      ($ :a {:href "mailto:baruchberger@gmail.com"
                             :style {:display "flex"
                                     :justifyContent "center"}}
                         ($ :img {:style {:position "relative" :marginLeft "7px"
                                          :marginRight "9px"
                                          :width "35px"}
                                  :src "mail.svg"})
                         ($ Typography {:variant "h6"
                                        :style #js {:display "inline"
                                                    :whiteSpace "nowrap"}}
                            "baruchberger@gmail.com"))))
                ($ Menu {:to-page to-page})

                ($ ButtonBase {:style #js {:position "absolute"
                                           :bottom "10vh"
                                           :left "430px"
                                           :flexDirection  "column"
                                           :display        "flex"
                                           :alignItems     "flex-start"
                                           :justifyContent "flex-end"}
                               :onClick #(.scrollTo (.-current parallax-ref) 1)}
                   ($ Typography {:variant "caption"
                                  :style #js {:fontWeight "800"
                                              :fontSize "20px"}} "SEE")
                   ($ Typography {:variant "caption"
                                  :style #js {:fontWeight "800"
                                              :fontSize "20px"}} "MY")
                   ($ Typography {:variant "caption"
                                  :style #js {:fontWeight "800"
                                              :fontSize "20px"}} "WORK")
                   ($ arrow-down))))
          ($ KoreanTools {:to-page to-page})
          ($ AircraftNoise {:to-page to-page})
          ($ Cljsc2 {:to-page to-page})
          ($ Worldbank {:to-page to-page}))
       ($ :div {:style {:position "static"

                        :height "100vh"
                        :width "100vw"
                        :top 0
                        :left 0
                        :background "linear-gradient(-45deg, #47C5CF, #94DABC, #FFCF54, #FAD1E2)"
                        :backgroundSize "400% 400%"
                        :animation "gradient 15s ease infinite"
                        }}
          ))))
