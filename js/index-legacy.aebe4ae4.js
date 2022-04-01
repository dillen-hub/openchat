(function(){"use strict";var t={4020:function(t,e,s){s(6992),s(8674),s(9601),s(7727);var n=s(8935),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative bg-white"},[s("app-header"),s("router-view"),s("app-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[s("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[s("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[s("router-link",{attrs:{to:"/"}},[s("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900"},[t._v(" OpenChat Hub ")])])],1),s("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,n){return s("div",{key:n},["dropdown"===e.type?s("div",{staticClass:"relative"},[s("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(t){e.status=!e.status}}},[s("span",[t._v(t._s(e.name))]),s("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),s("div",{staticClass:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"item.status"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[s("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,n){return s("div",{key:n,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[s("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),s("div",{staticClass:"ml-4"},[s("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),s("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?s("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),s("div",{staticClass:"-mr-2 -my-2 md:hidden"},[s("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.mobile_menu.status=!0}}},[s("span",{staticClass:"sr-only"},[t._v("Open menu")]),s("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobile_menu.status,expression:"mobile_menu.status"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[s("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[s("div",{staticClass:"pt-5 pb-6 px-5"},[s("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.mobile_menu.status=!1}}},[t._m(0),s("div",{staticClass:"-mr-2"},[s("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{type:"button"}},[s("span",{staticClass:"sr-only"},[t._v("Close menu")]),s("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),s("div",{staticClass:"mt-6"},[s("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,n){return s("div",{key:n},["dropdown"===e.type?s("div",{staticClass:"relative"},[s("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 w-full",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(t){e.status=!e.status}}},[s("span",[t._v(t._s(e.name))]),s("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 ml-auto",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),s("div",{staticClass:"absolute z-10 -ml-7 mt-3 transform px-2 w-screen max-w-md sm:px-0 sm:-ml-4 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"item.status"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[s("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,n){return s("div",{key:n,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[s("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),s("div",{staticClass:"ml-4"},[s("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),s("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?s("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[s("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),s("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" OpenChat Hub ")])])}],l={name:"AppHeader",data:function(){return{mobile_menu:{status:!1}}},computed:{menu:function(){var t=this;return[{name:"社群列表",type:"function",icon:s(8586),action:function(){t.$router.push({name:"join"}),t.mobile_menu.status=!1}},{name:"社群規範",type:"function",icon:s(5214),action:function(){t.$router.push({name:"rule"}),t.mobile_menu.status=!1}},{name:"回首頁",type:"function",icon:s(6397),action:function(){return location.assign("https://web-tech-tw.github.io")}}]}}},c=l,u=s(1001),m=(0,u.Z)(c,r,o,!1,null,null,null),d=m.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[s("div",{staticClass:"max-w-7xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"},[s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("組織資訊")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])]),s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("學習資源")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])])]),s("div",{staticClass:"flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"},[s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("就業資源")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])]),s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("社交媒體")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])])])])]),s("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],g={name:"AppFooter"},x=g,v=(0,u.Z)(x,f,p,!1,null,null,null),h=v.exports,y={name:"App",components:{AppHeader:d,AppFooter:h}},b=y,C=(0,u.Z)(b,a,i,!1,null,null,null),w=C.exports,_=(s(1539),s(8783),s(3948),s(2809)),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bg-gray-50 py-10 lg:py-16"},[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._m(0),s("div",{staticClass:"mt-5 sm:mt-8 sm:flex lg:justify-start"},[s("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[s("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/join"}},[t._v(" 加入我們 ")])],1)])]),s("p",{staticClass:"text-xl text-gray-500 max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._v(" 由 臺灣網際網路技術推廣組織 所管理的 LINE社群。 ")])]),s("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[s("div",{staticClass:"sm:text-center lg:text-left"},[t._m(1),s("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"}),s("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[s("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[s("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/"}})],1)])])])])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[s("span",{staticClass:"block mb-3"},[t._v("OpenChat Hub")]),s("span",{staticClass:"block text-sky-600"},[t._v("我們在 LINE 與你相遇")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900"},[s("span",{staticClass:"block xl:inline"}),s("span",{staticClass:"block text-sky-600 xl:inline"})])}],O={},E=(0,u.Z)(O,k,j,!1,null,null,null),T=E.exports;n.Z.use(_.Z);var $=[{path:"/",name:"home",component:T},{path:"/rule",name:"rule",component:function(){return s.e(655).then(s.bind(s,3655))}},{path:"/join",name:"join",component:function(){return s.e(635).then(s.bind(s,635))}},{path:"/join/:code",name:"join-chat",component:function(){return s.e(202).then(s.bind(s,8202))},props:!0}],M=new _.Z({routes:$}),A=M;n.Z.config.productionTip=!1,new n.Z({router:A,render:function(t){return t(w)}}).$mount("#app")},5214:function(t,e,s){t.exports=s.p+"img/exclamation-circle.34bbeb3e.svg"},6397:function(t,e,s){t.exports=s.p+"img/house.a3e45882.svg"},8586:function(t,e,s){t.exports=s.p+"img/list-ul.425acfd7.svg"}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,i){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],i=t[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[l])}))?n.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"-legacy."+{202:"b0b3f5c0",635:"83110ead",655:"1c1828fe"}[t]+".js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="openchat-vue:";s.l=function(n,a,i,r){if(t[n])t[n].push(a);else{var o,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==e+i){o=m;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+i),o.src=n),t[n]=[a];var d=function(e,s){o.onerror=o.onload=null,clearTimeout(f);var a=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(t){return t(s)})),e)return e(s)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/openchat/"}(),function(){var t={826:0};s.f.j=function(e,n){var a=s.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(s,n){a=t[e]=[s,n]}));n.push(a[2]=i);var r=s.p+s.u(e),o=new Error,l=function(n){if(s.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,a[1](o)}};s.l(r,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,r=n[0],o=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var u=l(s)}for(e&&e(n);c<r.length;c++)i=r[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},n=self["webpackChunkopenchat_vue"]=self["webpackChunkopenchat_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(4020)}));n=s.O(n)})();
//# sourceMappingURL=index-legacy.aebe4ae4.js.map