(function(){"use strict";var e={9161:function(e,t,n){var r=n(5130),o=n(6768),i=n(144),a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGwSURBVHgBlVTLbcJAEF0bc+PgEjYduIPYFYRUkPiI+AQqQFRgAkIcoQNIBZAKoASnAw4c+eQ9a2wtZo3ESKv1zs68efNZO+qBJEmisWk57geDwaHK1rE4+57nfV2v10/HcbR5B12KbdTr9ZYPgQAS1Gq1FQHg9AvVGt90PuAcYG/i/ErA8/kcgWF6B8Q0ALJzXZdOcbfb3SqLzGazAPcrLB+2Ubvd3lPv5gYA2RAEe1QFQqEjbcDsAFYrlqIAmkwmWT2w3lutVmo64q7PZepoQ9b0QfC+yWjImuQ0ywLjO52w3gLsg2eP1KS43zYQdGisKgQ+P/BNWF+GYjcUFFY2ttRykY4qjIs2OfsVxm/Ymra70+lUDCiBUqGp1ZOC7gUCuHc5VAD5k8hPCX2YHp+OK2yW2MLpdBqWjVlQdG1d1vMV0OdyuYwyUFH69Xp9B6Uqj75N5BVwgFWn03mhLmNEahxGLJ8GEq0KJKSN2EZFmqbRfD7XYLSRwm+ZFs4cCzppqWPIujCwOcCOLSqfDGgPy52UpiwbjcY4juObf5MVKJfFYuEfj8csTQxdWn6HpvwD2h3bs23u/MsAAAAASUVORK5CYII=",s=n(4232);const u=["aria-label"],l=["src","alt","aria-hidden"],c={key:1,class:"hidden md:inline-block"};var d=(0,o.pM)({__name:"BasicButton",props:{text:{},icon:{},altIcon:{}},setup(e){const t=e,n=(0,o.EW)((()=>t.text||t.altIcon||"Przycisk bez tekstu"));return(e,t)=>((0,o.uX)(),(0,o.CE)("button",{type:"button",class:"flex items-center rounded-xl bg-primary text-white p-4 text-sm font-bold tracking-[-0.01em] md:py-3.5 md:px-5","aria-label":n.value},[e.icon?((0,o.uX)(),(0,o.CE)("img",{key:0,src:e.icon,alt:e.altIcon||"",class:"md:mr-2.5","aria-hidden":e.altIcon?"false":"true"},null,8,l)):(0,o.Q3)("",!0),e.text?((0,o.uX)(),(0,o.CE)("span",c,(0,s.v_)(e.text),1)):(0,o.Q3)("",!0)],8,u))}});const f=d;var p=f;const A=["aria-describedby"],m={key:0,id:"tooltip",role:"tooltip",class:"absolute top-full left-1/2 transform -translate-x-1/2 mt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-zinc-900 tracking-normal text-white text-xs font-medium leading-4 rounded-[10px] py-2 px-[14px] whitespace-nowrap z-50 md:left-0 md:right-auto md:transform-none md:text-[13px]"};var g=(0,o.pM)({__name:"TooltipComponent",props:{text:{type:String,required:!0}},setup(e){return(t,n)=>((0,o.uX)(),(0,o.CE)("div",{class:"relative group inline-block","aria-describedby":e.text?"tooltip":void 0},[(0,o.RG)(t.$slots,"default"),e.text?((0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("p",null,(0,s.v_)(e.text),1)])):(0,o.Q3)("",!0)],8,A))}});const v=g;var b=v;const h={class:"grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible",role:"status","aria-live":"polite"};function y(e,t){return(0,o.uX)(),(0,o.CE)("div",h,t[0]||(t[0]=[(0,o.Lk)("svg",{class:"w-16 h-16 animate-spin text-custom-gray-100",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o.Lk)("path",{d:"M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z",stroke:"currentColor","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,o.Lk)("path",{d:"M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762",stroke:"#0040E0","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round",class:"text-gray-primary"})],-1),(0,o.Lk)("p",{class:"sr-only"},"Ładowanie...",-1)]))}var w=n(1241);const k={},C=(0,w.A)(k,[["render",y]]);var x=C,E=n(4373);const B=async(e=1005)=>{try{const t=await E.A.get(`https://randomuser.me/api/?results=${e}&inc=name,email,location,picture,login,nat,registered`);return t.data.results}catch(t){throw new Error(t.response?.data?.message||"Błąd podczas pobierania danych")}};var L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABlSURBVHgB5ZHbCYAwDEVvpAM4iiM4gps4gyM4kR3BUdwgRoxQCral/WihB0JCnnADNA0zz2ILcpHhQ8yGegYUUn8BfYGKtXr1Sf3p5Tcisk9gnOTlLvw7pIxIoZMvmEh9xytuw9yz/h4V5QS0cgAAAABJRU5ErkJggg==";const j={class:"flex items-center justify-between","aria-labelledby":"header-title"},O={class:"flex items-center justify-between gap-x-4"},Q={class:"mt-4 md:mt-6"},S={key:0,"aria-busy":"true","aria-live":"polite"},Y={key:1,"aria-labelledby":"error-message"},U={key:2};var R=(0,o.pM)({__name:"App",setup(e){const t=(0,o.$V)((()=>n.e(562).then(n.bind(n,9562)))),r=(0,i.KR)([]),s=(0,i.KR)(!1),u=(0,i.KR)(null),l=async()=>{s.value=!0;try{r.value=await B()}catch(e){u.value=e instanceof Error?e.message:"Nieznany błąd."}finally{s.value=!1}};return(0,o.sV)(l),(e,n)=>((0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("header",j,[(0,o.Lk)("div",O,[n[1]||(n[1]=(0,o.Lk)("h1",{id:"header-title",class:"text-black font-semibold text-[28px] leading-[34px] md:text-[32px] md:leading-[38px]"}," Użytkownicy ",-1)),(0,o.bF)(b,{text:"Lorem Ipsum is simply dummy text"},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.Lk)("img",{src:a,alt:"Tooltip icon"},null,-1)]))),_:1})]),(0,o.bF)(p,{text:"Zaproś użytkownika",icon:(0,i.R1)(L),"alt-icon":"Plus icon"},null,8,["icon"])]),(0,o.Lk)("main",Q,[s.value?((0,o.uX)(),(0,o.CE)("section",S,[(0,o.bF)(x)])):u.value?((0,o.uX)(),(0,o.CE)("section",Y,n[2]||(n[2]=[(0,o.Lk)("p",{id:"error-message",class:"text-red-500 text-center"}," Nie udało się pobrać użytkowników. ",-1)]))):((0,o.uX)(),(0,o.CE)("section",U,[(0,o.bF)((0,i.R1)(t),{users:r.value},null,8,["users"])]))])],64))}});const F=R;var I=F;(0,r.Ef)(I).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".74fe98dc.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".4811e7b8.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="user-list:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=s,a.parentNode&&a.parentNode.removeChild(a),i(u)}};return a.onerror=a.onload=s,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={562:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var c=u(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkuser_list"]=self["webpackChunkuser_list"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(9161)}));r=n.O(r)})();
//# sourceMappingURL=app.ec5750b5.js.map