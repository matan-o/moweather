(this["webpackJsonpwhether-app"]=this["webpackJsonpwhether-app"]||[]).push([[0],{56:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(29),i=c.n(r),s=(c(56),c(22)),o=c(19),u=c(18),l=c(16);var d={unitToggled:function(e){return{type:"UNIT_TOGGLED",payload:{unit:e}}}},j=c(2),f=Object(l.b)((function(e){return{unit:e.unit.unit}}))((function(e){var t=e.unit,c=e.dispatch;return Object(n.useEffect)((function(){}),[t]),Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("div",{className:"navbar",children:Object(j.jsxs)("div",{className:"navbar-links",children:[Object(j.jsxs)(s.b,{to:"/",children:[Object(j.jsx)(u.a,{icon:o.b})," Main"]}),Object(j.jsxs)(s.b,{to:"/favorites",children:[Object(j.jsx)(u.a,{icon:o.a})," Favorites"]}),Object(j.jsxs)("div",{className:"unit",children:[Object(j.jsx)("span",{children:"Temp. unit"}),Object(j.jsx)("button",{className:"C"===t?"selected":"",onClick:function(){c(d.unitToggled("C"))},children:"C"}),Object(j.jsx)("button",{className:"F"===t?"selected":"",onClick:function(){c(d.unitToggled("F"))},children:"F"})]})]})})})})),b=c(7),h=c(17);var v={citySearchAsync:function(e){return{type:"CITY_SEARCH_ASYNC",payload:{term:e}}},citySearchFinished:function(e){return{type:"CITY_SEARCH_FINISHED",payload:{cities:e}}},citySetCurrent:function(e){return{type:"CITY_SET_CURRENT",payload:{city:e}}}},p=c(20),y=c(51),O=c(10),m=c(38),x="lFl4Kn6NNw0NGaPZkcmZmKiLDAAG4WqV",C="https://dataservice.accuweather.com",T=JSON.parse(localStorage.getItem("favoriteCities")||"[]"),F={Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv",Country:{ID:"IL",LocalizedName:"Israel"},AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv"}},E={favorites:T&&T||[]};var N={cities:[],currentCity:F};var S={};var g={unit:"F"};var _=Object(p.b)({city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CITY_SEARCH_FINISHED":return Object(O.a)(Object(O.a)({},e),{},{cities:t.payload.cities});case"CITY_SET_CURRENT":return Object(O.a)(Object(O.a)({},e),{},{currentCity:t.payload.city});default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return"WEATHER_FETCH_FORECAST_FINISHED"===t.type?Object(O.a)(Object(O.a)({},e),{},{currentForecast:t.payload.forecast}):e},favorite:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAVORITE_CITY_ADDED":return e.favorites.includes(t.payload.city)||localStorage.setItem("favoriteCities",JSON.stringify([].concat(Object(m.a)(e.favorites),[t.payload.city]))),Object(O.a)(Object(O.a)({},e.favorites),{},{favorites:[].concat(Object(m.a)(e.favorites),[t.payload.city])});case"FAVORITE_CITY_REMOVED":var c=e.favorites.filter((function(e){return e.Key!==t.payload.city.Key}));return localStorage.setItem("favoriteCities",JSON.stringify(c)),Object(O.a)(Object(O.a)({},e),{},{favorites:c});default:return e}},unit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return"UNIT_TOGGLED"===t.type?Object(O.a)(Object(O.a)({},e),{},{unit:t.payload.unit}):e}}),w=c(8),A=c.n(w),I=c(11),R=c(32),k=c(33),D=c(34),H=c(24),Y=c.n(H),K=function(){function e(){Object(k.a)(this,e)}return Object(D.a)(e,[{key:"findCities",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.a.get("".concat(C,"/locations/v1/cities/autocomplete?apikey=").concat(x,"&q=").concat(t));case 3:return c=e.sent,console.log(c),e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),L=new K,V=A.a.mark(M),W=A.a.mark(P);function M(e){var t;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(I.b)(L.findCities,e.payload.term);case 2:return t=c.sent,c.next=5,Object(I.c)(v.citySearchFinished(t));case 5:case"end":return c.stop()}}),V)}function P(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.e)("CITY_SEARCH_ASYNC",M);case 2:case"end":return e.stop()}}),W)}var z=function(){function e(){Object(k.a)(this,e)}return Object(D.a)(e,[{key:"fiveDayForecasts",value:function(){var e=Object(R.a)(A.a.mark((function e(t,c){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c&&null!=c||(c=!1),e.prev=1,e.next=4,Y.a.get("".concat(C,"/forecasts/v1/daily/5day/").concat(t,"?apikey=").concat(x,"&metric=").concat(c));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}()},{key:"currentConditions",value:function(e){return Y.a.get("".concat(C,"/currentconditions/v1/").concat(e,"?apikey=").concat(x))}},{key:"favoritesCondition",value:function(){var e=this,t=T.map((function(t){return e.currentConditions(t.Key).then((function(e){return e.data}))}));return Promise.all(t)}}]),e}(),U=new z;var B={weatherFetchForecastAsync:function(e){return{type:"WEATHER_FETCH_FORECAST_ASYNC",payload:{city:e}}},weatherFetchForecastFinished:function(e){return{type:"WEATHER_FETCH_FORECAST_FINISHED",payload:{forecast:e}}},weatherFetchForecastByCityKeyAsync:function(e){return{type:"WEATHER_FETCH_FORECAST_BY_CITY_KEY",payload:{cityKey:e}}}},G=A.a.mark(Z),J=A.a.mark(Q),q=A.a.mark(X);function Z(e){var t;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(I.c)(v.citySetCurrent(e.payload.city));case 2:return c.next=4,Object(I.b)(U.fiveDayForecasts,e.payload.city.Key);case 4:return t=c.sent,c.next=7,Object(I.c)(B.weatherFetchForecastFinished(t));case 7:case"end":return c.stop()}}),G)}function Q(e){var t;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(I.b)(U.fiveDayForecasts,e.payload.cityKey);case 2:return t=c.sent,c.next=5,Object(I.c)(B.weatherFetchForecastFinished(t));case 5:case"end":return c.stop()}}),J)}function X(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.e)("WEATHER_FETCH_FORECAST_ASYNC",Z);case 2:return e.next=4,Object(I.e)("WEATHER_FETCH_FORECAST_BY_CITY_KEY",Q);case 4:case"end":return e.stop()}}),q)}var $=A.a.mark(ee);function ee(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[P,X],t.next=3,Object(I.a)(e.map((function(e){return Object(I.d)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(I.b)(e);case 4:return t.abrupt("break",12);case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:t.next=0;break;case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))})));case 3:case"end":return t.stop()}}),$)}var te=Object(y.a)(),ce=Object(p.d)(_,Object(p.a)(te));te.run(ee);var ne=function(e){return Object(j.jsx)(l.a,{store:ce,children:e.children})},ae=function(e){var t=e<10?"0".concat(e):"".concat(e);return"https://developer.accuweather.com/sites/default/files/".concat(t,"-s.png")},re=Object(l.b)((function(e){return{unit:e.unit.unit}}))((function(e){var t=e.data,c=e.city,n=e.unit,a=t[0],r=Object(b.f)();return Object(j.jsxs)("div",{className:"location-item",onClick:function(){ce.dispatch(v.citySetCurrent(c)),r.push("/?key=".concat(c.Key))},children:[Object(j.jsx)("h4",{className:"city-name",children:c.LocalizedName}),Object(j.jsx)("p",{className:"Weather-text",children:a.WeatherText}),Object(j.jsx)("img",{alt:a.WeatherText,src:ae(a.WeatherIcon)}),"F"===n&&Object(j.jsxs)("p",{className:"temp",children:[a.Temperature.Imperial.Value,a.Temperature.Imperial.Unit,"\xb0"]}),"C"===n&&Object(j.jsxs)("p",{className:"temp",children:[a.Temperature.Metric.Value,a.Temperature.Metric.Unit,"\xb0"]})]})})),ie=function(){var e=Object(n.useState)(),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){U.favoritesCondition().then((function(e){return a(e)}))}),[]),Object(j.jsxs)("div",{className:"favorites",children:[Object(j.jsx)("h1",{children:"Favorites"}),Object(j.jsx)("div",{className:"favorite-cities",children:c&&c.map((function(e,t){return Object(j.jsx)(re,{data:e,city:T[t]},t)}))})]})},se=function(){var e=Object(n.useRef)(!1),t=Object(n.useState)(""),c=Object(h.a)(t,2),a=c[0],r=c[1];return Object(j.jsxs)("div",{className:"search-unit",children:[Object(j.jsx)(u.a,{className:"search-icon",icon:o.c}),Object(j.jsx)("input",{onChange:function(t){r(t.target.value),a.length<2?ce.dispatch(v.citySearchFinished([])):e.current||(e.current=!0,a&&a.length>=2&&ce.dispatch(v.citySearchAsync(a)),setTimeout((function(){e.current=!1}),150))},type:"text",className:"search-input",placeholder:"Enter city name",value:a})]})},oe=function(e){var t=e.city,c=e.onCitySelect;return Object(j.jsx)("a",{href:" ",onClick:function(e){e.preventDefault(),e.stopPropagation(),c(t)},className:"city-found-name",children:t.LocalizedName},t.LocalizedName)},ue=Object(l.b)((function(e){return{cities:e.city.cities}}))((function(e){var t=e.cities,c=e.dispatch,a=Object(n.useState)(!1),r=Object(h.a)(a,2),i=r[0],s=r[1],o=Object(n.useRef)();Object(n.useEffect)((function(){function e(e){o.current&&!o.current.contains(e.target)&&s(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),Object(n.useEffect)((function(){s(t&&t.length>0)}),[t]);var u=function(e){c(B.weatherFetchForecastAsync(e)),s(!1)};return i?Object(j.jsx)("div",{ref:o,className:"search-cities-list",children:t.map((function(e){return Object(j.jsx)(oe,{city:e,onCitySelect:u},e.Key)}))}):null})),le=function(){return Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsx)(se,{}),Object(j.jsx)(ue,{})]})},de=function(e){return["Sunday","Monday","Teusday","Wedensday","Thursday","Friday","Saturday"][new Date(e).getDay()]};function je(e){return+(5*(e-32)/9).toFixed(1)}var fe=Object(l.b)((function(e){return{unit:e.unit.unit}}))((function(e){var t=e.forecast,c=e.unit;return Object(j.jsxs)("div",{className:"forecast-item",children:[Object(j.jsx)("p",{className:"day",children:de(t.Date)}),Object(j.jsx)("img",{alt:t.Day.IconPhrase,src:ae(t.Day.Icon)}),Object(j.jsx)("label",{children:t.Day.IconPhrase}),function(){var e="F"===c?t.Temperature.Maximum.Value:je(t.Temperature.Maximum.Value),n="F"===c?t.Temperature.Minimum.Value:je(t.Temperature.Minimum.Value);return Object(j.jsxs)("p",{className:"temp",children:[n," - ",e," ",c,"\xb0"]})}()]})})),be=function(e){return ce.getState().favorite.favorites.some((function(t){return t.Key===(null===e||void 0===e?void 0:e.Key)}))};var he={favoriteCityAdded:function(e){return{type:"FAVORITE_CITY_ADDED",payload:{city:e}}},favoriteCityRemoved:function(e){return{type:"FAVORITE_CITY_REMOVED",payload:{city:e}}}},ve=Object(l.b)((function(e){return{forecasts:e.weather.currentForecast,currentCity:e.city.currentCity}}))((function(e){var t=e.forecasts,c=e.currentCity,a=Object(n.useState)(be(c)),r=Object(h.a)(a,2),i=r[0],s=r[1];Object(n.useEffect)((function(){s(be(c))}),[c]);return Object(j.jsxs)("div",{className:"forecasts ",children:[c&&Object(j.jsxs)("div",{className:"forecasts-top",children:[Object(j.jsx)("h2",{className:"city-name",children:null===c||void 0===c?void 0:c.LocalizedName}),Object(j.jsx)(u.a,{className:i?"star-favorite":"star",icon:o.d,onClick:function(){i?(s(!1),ce.dispatch(he.favoriteCityRemoved(c))):(s(!0),ce.dispatch(he.favoriteCityAdded(c)))}})]}),Object(j.jsxs)("div",{className:"forecasts-bottom",children:[Object(j.jsx)("h3",{className:"headline-text",children:null===t||void 0===t?void 0:t.Headline.Text}),Object(j.jsx)("div",{className:"fourcasts-cards",children:t&&t.DailyForecasts.map((function(e){return Object(j.jsx)(fe,{forecast:e},e.EpochDate)}))})]})]})})),pe=function(){var e=new URLSearchParams(Object(b.g)().search).get("key");return Object(n.useEffect)((function(){var t=e||F.Key;ce.dispatch(B.weatherFetchForecastByCityKeyAsync(t))}),[e]),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(le,{}),Object(j.jsx)(ve,{})]})},ye=function(){return Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{exact:!0,path:"/",children:Object(j.jsx)(pe,{})}),Object(j.jsx)(b.a,{exact:!0,path:"/favorites",children:Object(j.jsx)(ie,{})})]})},Oe=function(){return Object(j.jsx)(ne,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(ye,{})]})})},me=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(Oe,{})}),document.getElementById("root")),me()}},[[83,1,2]]]);
//# sourceMappingURL=main.53fd3af0.chunk.js.map