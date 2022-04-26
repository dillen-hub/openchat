(function(){"use strict";var t={2666:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),i=n(6198),o=(n(8975),n(1539),n(6166)),a=n.n(o),s={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},u=a().create(s);u.interceptors.request.use((function(t){var e=localStorage.getItem("unified_token");return e&&(t.headers["Authorization"]="SARA ".concat(e)),t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return"sara-issue"in(null===t||void 0===t?void 0:t.headers)&&localStorage.setItem("unified_token",t.headers["sara-issue"]),t}),(function(t){return Promise.reject(t)}));var c={install:function(t){t.prototype.$sara=u,t.prototype.$profile=(0,i.Z)(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(localStorage.getItem("unified_token")){t.next=2;break}return t.abrupt("return",null);case 2:return t.prev=2,t.next=5,u.get("profile");case 5:return n=t.sent,t.abrupt("return",(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.profile)||!1);case 9:return t.prev=9,t.t0=t["catch"](2),401===(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r?void 0:r.status)&&(localStorage.removeItem("unified_token"),location.reload()),t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))}};r.Z.use(c);var l={baseURL:"https://web-tech-tw.eu.org/openchat-join",timeout:6e4},m=a().create(l);m.interceptors.request.use((function(t){var e=localStorage.getItem("unified_token");return e&&(t.headers["Authorization"]="SARA ".concat(e)),t}),(function(t){return Promise.reject(t)})),m.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));var d={install:function(t){t.axios=m,window.axios=m,Object.defineProperties(t.prototype,{axios:{get:function(){return m}},$axios:{get:function(){return m}}})}};r.Z.use(d);var p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-white"},[n("app-header"),n("router-view"),n("app-footer")],1)},f=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[n("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900"},[t._v(" OpenChat Hub ")])])],1),n("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,r){return n("div",{key:r},["function"===e.type?n("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),n("div",{staticClass:"-mr-2 -my-2 md:hidden"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.menu_collapse.mobile_menu=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Open menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse.mobile_menu,expression:"menu_collapse.mobile_menu"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[n("div",{staticClass:"pt-5 pb-6 px-5"},[n("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.menu_collapse.mobile_menu=!1}}},[t._m(0),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{type:"button"}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),n("div",{staticClass:"mt-6"},[n("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,r){return n("div",{key:r},["function"===e.type?n("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" OpenChat Hub ")])])}],x={name:"AppHeader",data:function(){return{menu_collapse:{mobile_menu:!1}}},computed:{menu:function(){var t=this;return[{name:"社群列表",type:"function",icon:n(4110),action:function(){t.$router.push({name:"join"}),t.menu_collapse.mobile_menu=!1}},{name:"社群規範",type:"function",icon:n(8891),action:function(){t.$router.push({name:"rule"}),t.menu_collapse.mobile_menu=!1}},{name:"社群管理",type:"function",icon:n(8891),action:function(){t.$router.push({name:"admin"}),t.menu_collapse.mobile_menu=!1}},{name:"回首頁",type:"function",icon:n(9182),action:function(){return location.assign("https://web-tech-tw.github.io")}}]}}},g=x,b=n(1001),y=(0,b.Z)(g,v,h,!1,null,null,null),_=y.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[n("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" 「OpenChat Hub」是利用「"),n("a",{attrs:{href:"https://line.me"}},[t._v("LINE")]),t._v("社群」作為交流平台，由「臺灣網際網路技術推廣組織」所管理的一系列群組。 ")]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700"},[n("a",{staticClass:"mr-3",attrs:{href:"https://github.com/web-tech-tw/openchat"}},[t._v("網站原始碼")]),n("a",{staticClass:"mr-3",attrs:{href:"https://web-tech-tw.github.io/#/privacy"}},[t._v("隱私權政策")])]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],k={name:"AppFooter"},j=k,O=(0,b.Z)(j,w,C,!1,null,null,null),E=O.exports,A={name:"App",components:{AppHeader:_,AppFooter:E}},$=A,P=(0,b.Z)($,p,f,!1,null,null,null),S=P.exports,T=(n(8783),n(3948),n(2809)),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-gray-50 py-10 lg:py-16"},[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._m(0),n("div",{staticClass:"mt-5 sm:mt-8 sm:flex lg:justify-start"},[n("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[n("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/join"}},[t._v(" 加入我們 ")])],1)])]),n("p",{staticClass:"text-xl text-gray-500 max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._v(" 由 臺灣網際網路技術推廣組織 所管理的 LINE社群。 ")])]),n("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[n("div",{staticClass:"sm:text-center lg:text-left"},[t._m(1),n("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._v(" 為了維護 OpenChat Hub 社群的安全及和平共處，我們制定了一系列社群規範，請務必遵守。 ")]),n("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[n("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[n("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/rule"}},[t._v(" 閱讀社群規範 ")])],1)])])])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[n("span",{staticClass:"block mb-3"},[t._v("OpenChat Hub")]),n("span",{staticClass:"block text-sky-600"},[t._v("我們在 LINE 與你相遇")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900"},[n("span",{staticClass:"block xl:inline"},[t._v("務必遵守")]),n("span",{staticClass:"block text-sky-600 xl:inline"},[t._v("社群規範")])])}],L={},M=(0,b.Z)(L,Z,I,!1,null,null,null),H=M.exports;r.Z.use(T.Z);var N=[{path:"/",name:"home",component:H},{path:"/rule",name:"rule",component:function(){return n.e(655).then(n.bind(n,3655))}},{path:"/join",name:"join",component:function(){return n.e(635).then(n.bind(n,635))}},{path:"/join/:code",name:"join-chat",component:function(){return n.e(776).then(n.bind(n,5776))},props:!0},{path:"/admin",name:"admin",component:function(){return n.e(513).then(n.bind(n,3513))}},{path:"/admin/join",name:"admin-join",component:function(){return n.e(887).then(n.bind(n,2336))}},{path:"/admin/room",name:"admin-room",component:function(){return n.e(86).then(n.bind(n,6086))}},{path:"*",name:"not-found",component:function(){return n.e(895).then(n.bind(n,6895))}}],R=new T.Z({routes:N}),F=R;r.Z.config.productionTip=!1,new r.Z({router:F,render:function(t){return t(S)}}).$mount("#app")},4110:function(t,e,n){t.exports=n.p+"img/collection.b799e19a.svg"},9182:function(t,e,n){t.exports=n.p+"img/home.f19e567a.svg"},8891:function(t,e,n){t.exports=n.p+"img/information-circle.ca1bc15d.svg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return t[r](o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{86:"2b47c8c3",513:"c031b90e",635:"4f0bb3e3",655:"96832453",776:"f71a9393",887:"47583975",895:"4072813e"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="openchat:";n.l=function(r,i,o,a){if(t[r])t[r].push(i);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var m=c[l];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==e+o){s=m;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[i];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var i=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/openchat/"}(),function(){var t={826:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var l=u(n)}for(e&&e(r);c<a.length;c++)o=a[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkopenchat"]=self["webpackChunkopenchat"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2666)}));r=n.O(r)})();
//# sourceMappingURL=index-legacy.0fdeb934.js.map