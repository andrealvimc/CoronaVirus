(this.webpackJsonpcoronavirus=this.webpackJsonpcoronavirus||[]).push([[0],{149:function(e,n,t){e.exports=t(356)},356:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(59),o=t.n(c),u=t(16),i=t.n(u),l=t(25),s=t(15),m=t(1),f=t(2);function d(){var e=Object(m.a)(['\n    html, body, #root {\n        background: #f9f9f9;\n        height: 100%;\n    }\n\n    #root {\n        font-family: "Roboto", sans-serif;\n    }\n\n    * {\n        color: #333;\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n']);return d=function(){return e},e}var p=Object(f.a)(d());function v(){var e=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  height: 300px;\n  ul {\n    width: 100%;\n  }\n"]);return v=function(){return e},e}function h(){var e=Object(m.a)(["\n  padding: 0px 1em;\n  max-width: 1020px;\n  margin: auto;\n  min-width: 300px;\n  h1 {\n    margin: 1em 0px;\n  }\n"]);return h=function(){return e},e}var b=f.b.main(h()),E=f.b.section(v());function x(){var e=Object(m.a)(["\n  h2 {\n    font-size: 28px;\n  }\n  div {\n    margin-left: 3px;\n    opacity: 0.9;\n    font-size: 14px;\n  }\n"]);return x=function(){return e},e}function g(){var e=Object(m.a)(["\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  div {\n    margin: auto;\n  }\n"]);return g=function(){return e},e}function y(){var e=Object(m.a)(["\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  padding: 1.5em;\n  border-radius: 50%;\n"]);return y=function(){return e},e}function j(){var e=Object(m.a)(["\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  display: flex;\n  margin: 1em 0px;\n  padding: 8px;\n"]);return j=function(){return e},e}var O=f.b.li(j()),w=f.b.div(y()),k=f.b.div(g()),C=f.b.div(x());var M=function(e){var n=e.name,t=Object(r.useState)(null),c=Object(s.a)(t,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,u(r[0]&&a.a.createElement("img",{src:"https://www.countryflags.io/".concat(r[0].alpha2Code,"/flat/64.png"),alt:"country"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),o||null};var S=function(e){var n=e.country;return a.a.createElement(O,null,a.a.createElement(k,null,a.a.createElement(w,null,a.a.createElement(M,{name:n.country}))),a.a.createElement(C,null,a.a.createElement("h2",null,n.country),a.a.createElement("div",null,a.a.createElement("div",null,"Casos totais: ",n.cases),a.a.createElement("div",null,"Casos por dia: ",n.todayCases),a.a.createElement("div",null,"Mortes confirmadas: ",n.deaths),a.a.createElement("div",null,"Recuperados: ",n.recovered),a.a.createElement("div",null,"Ativos: ",n.active),a.a.createElement("div",null,"Estado cr\xedtico: ",n.critical),a.a.createElement("div",null,"Casos por milh\xe3o: ",n.casesPerOneMillion))))},$=t(33),P=Object(r.createContext)({setCountry:function(e){return null},country:null});var D=function(e){var n=Object(s.a)(e.country.latlng,2),t=n[0],c=n[1],o=e.coronaCountry,u=Object(r.useContext)(P).setCountry;return a.a.createElement($.Marker,{key:"".concat(Math.random()),position:{lat:t,lng:c},onClick:function(){u(o)}})};var R=Object(r.memo)(Object($.withScriptjs)(Object($.withGoogleMap)((function(e){var n=e.countries,t=Object(r.useState)([]),c=Object(s.a)(t,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,Promise.all(n.map(function(){var e=Object(l.a)(i.a.mark((function e(n){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(n.country));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r[0]||null);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),a.a.createElement($.GoogleMap,{defaultZoom:3,defaultCenter:{lat:-34.397,lng:150.644}},o.map((function(e){return e&&a.a.createElement(D,{key:Math.random(),country:e,coronaCountry:n.filter((function(n){return n.country===e.name}))[0]||{}})})))}))));function V(){var e=Object(m.a)(["\n  width: 650px;\n  @media (max-width: 1020px) {\n    width: 100%;\n  }\n"]);return V=function(){return e},e}function z(){var e=Object(m.a)(["\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  display: flex;\n  min-height: 400px;\n  height: fit-content;\n  @media (max-width: 1020px) {\n    flex-direction: column;\n  }\n"]);return z=function(){return e},e}var Z=f.b.div(z()),A=f.b.div(V());function B(){var e=Object(m.a)(["\n  padding: 1em;\n"]);return B=function(){return e},e}var F=f.b.div(B());var G=function(){var e=Object(r.useContext)(P).country;return a.a.createElement(F,null,e?a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{name:e.country}),a.a.createElement("h2",null,e.country),a.a.createElement("div",null,a.a.createElement("div",null,"Casos totais: ",e.cases),a.a.createElement("div",null,"Casos por dia: ",e.todayCases),a.a.createElement("div",null,"Mortes confirmadas: ",e.deaths),a.a.createElement("div",null,"Recuperados: ",e.recovered),a.a.createElement("div",null,"Ativos: ",e.active),a.a.createElement("div",null,"Estado cr\xedtico: ",e.critical),a.a.createElement("div",null,"Casos por milh\xe3o: ",e.casesPerOneMillion))):a.a.createElement("h2",null,"Escolha um pa\xeds"))};var J=function(e){var n=e.children,t=Object(r.useState)(null),c=Object(s.a)(t,2),o=c[0],u=c[1];return a.a.createElement(P.Provider,{value:{country:o,setCountry:u}},a.a.createElement(Z,null,a.a.createElement(A,null,n),a.a.createElement(G,null)))};function I(){var e=Object(m.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n  > div {\n    margin: auto;\n  }\n"]);return I=function(){return e},e}var L=f.b.div(I());function U(){var e=Object(m.a)(["\n  animation: 2s ease-in-out infinite both rotate;\n  stroke-linecap: round;\n  transform-origin: 50% 50%;\n  stroke-dasharray: 75;\n  stroke: #333;\n  stroke-width: 6;\n  fill: transparent;\n\n  @keyframes rotate {\n    0%,\n    25% {\n      stroke-dashoffset: getDashValue(45, 97%);\n      transform: rotate(0);\n    }\n    50%,\n    75% {\n      stroke-dashoffset: getDashValue(45, 25%);\n      transform: rotate(45deg);\n    }\n    100% {\n      stroke-dashoffset: getDashValue(45, 97%);\n      transform: rotate(360deg);\n    }\n  }\n\n  @function getDashValue($rad, $percent) {\n    $circumference: 2 * 3.14 * $rad;\n    $decPercent: $percent / 100%;\n    @return $circumference * $decPercent;\n  }\n"]);return U=function(){return e},e}function q(){var e=Object(m.a)(["\n  animation: 2s linear infinite both rotateSvg;\n  @keyframes rotateSvg {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    100% {\n      transform: rotateZ(360deg);\n    }\n  }\n"]);return q=function(){return e},e}function H(){var e=Object(m.a)(["\n  width: 100px;\n  height: 100px;\n  /* margin: auto; */\n"]);return H=function(){return e},e}var K=f.b.div(H()),N=f.b.svg(q()),Q=f.b.circle(U());var T=function(){return a.a.createElement(K,null,a.a.createElement(N,{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement(Q,{cx:"50",cy:"50",r:"45"})))};var W=function(){return a.a.createElement(L,null,a.a.createElement(T,null))};var X=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(!0),u=Object(s.a)(o,2),m=u[0],f=u[1];Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coronavirus-19-api.herokuapp.com/countries");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,c(t),f(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var d=Object(r.useMemo)((function(){return t.map((function(e){return a.a.createElement(S,{key:e.country,country:e})}))}),[t]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null,a.a.createElement("h1",null,"Casos de Coronav\xedrus pelo mundo"),a.a.createElement(J,null,a.a.createElement(R,{countries:t,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:a.a.createElement(W,null),containerElement:a.a.createElement("div",{style:{height:"400px",width:"100%"}}),mapElement:a.a.createElement("div",{style:{height:"100%"}})})),a.a.createElement(E,null,m?a.a.createElement(W,null):a.a.createElement("ul",null,d))),a.a.createElement(p,null))};o.a.render(a.a.createElement(X,null),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.921f2ccc.chunk.js.map