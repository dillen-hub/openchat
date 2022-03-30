(function(){"use strict";var t={3147:function(t,e,s){var a=s(8935),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative bg-white"},[s("app-header"),s("router-view"),s("app-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[s("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[t._m(0),s("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,a){return s("div",{key:a},["dropdown"===e.type?s("div",{staticClass:"relative"},[s("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(t){e.status=!e.status}}},[s("span",[t._v(t._s(e.name))]),s("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),s("div",{staticClass:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"item.status"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[s("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,a){return s("div",{key:a,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[s("img",{staticClass:"rounded-full",attrs:{src:e.icon,alt:e.name,width:"30",height:"30"}}),s("div",{staticClass:"ml-4"},[s("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),s("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?s("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),s("div",{staticClass:"-mr-2 -my-2 md:hidden"},[s("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.mobile_menu.status=!0}}},[s("span",{staticClass:"sr-only"},[t._v("Open menu")]),s("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mobile_menu.status,expression:"mobile_menu.status"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[s("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[s("div",{staticClass:"pt-5 pb-6 px-5"},[s("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.mobile_menu.status=!1}}},[t._m(1),s("div",{staticClass:"-mr-2"},[s("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"}},[s("span",{staticClass:"sr-only"},[t._v("Close menu")]),s("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),s("div",{staticClass:"mt-6"},[s("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,a){return s("div",{key:a},["dropdown"===e.type?s("div",{staticClass:"relative"},[s("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(t){e.status=!e.status}}},[s("span",[t._v(t._s(e.name))]),s("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 ml-auto",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),s("div",{staticClass:"absolute z-10 -ml-7 mt-3 transform px-2 w-screen max-w-md sm:px-0 sm:-ml-4 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"item.status"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[s("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,a){return s("div",{key:a,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[s("img",{staticClass:"rounded-full",attrs:{src:e.icon,alt:e.name,width:"30",height:"30"}}),s("div",{staticClass:"ml-4"},[s("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),s("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?s("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[s("img",{staticClass:"rounded-full",attrs:{src:e.icon,alt:e.name,width:"30",height:"30"}}),s("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[s("a",{attrs:{href:"/"}},[s("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 hidden sm:block"},[t._v(" Taiwan Web Technology Promotion Organization ")]),s("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" Web Tech TW ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" Web Tech TW ")])])}],l={name:"AppHeader",data:()=>({menu:[{name:"交流平台",type:"dropdown",status:!1,items:[{name:"LINE OpenChat",description:"歡迎加入",icon:"/assets/images/brands/line.svg",action:()=>location.assign("https://web-tech-tw.github.io/openchat")}]},{name:"GitHub",type:"function",icon:"/assets/images/brands/github.svg",action:()=>location.assign("https://github.com/web-tech-tw")},{name:"Discord",type:"function",icon:"/assets/images/brands/discord.svg",action:()=>location.assign("https://discord.gg/xpyuq342nX")}],mobile_menu:{status:!1}})},c=l,u=s(1001),d=(0,u.Z)(c,r,o,!1,null,null,null),m=d.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[s("div",{staticClass:"max-w-7xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"},[s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("組織資訊")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])]),s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("學習資源")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])])]),s("div",{staticClass:"flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"},[s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("就業資源")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])]),s("div",{staticClass:"lg:flex-none lg:w-1/2"},[s("h2",{staticClass:"font-semibold text-gray-900"},[t._v("社交媒體")]),s("ul",{staticClass:"mt-3 space-y-2"},[s("li",[s("a",{staticClass:"hover:text-gray-900",attrs:{href:"#"}},[t._v("尚未提供")])])])])])])]),s("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],p={name:"AppFooter"},v=p,x=(0,u.Z)(v,g,f,!1,null,null,null),h=x.exports,b={name:"App",components:{AppHeader:m,AppFooter:h},data:()=>({menu:[{name:"Social Media",type:"dropdown",status:!1,items:[{name:"Discord",description:"歡迎加入",icon:"/assets/images/brands/discord.svg",action:()=>location.assign("https://discord.gg/xpyuq342nX")},{name:"LINE OpenChat",description:"歡迎加入",icon:"/assets/images/brands/line.svg",action:()=>location.assign("https://web-tech-tw.github.io/openchat")}]},{name:"GitHub",type:"function",icon:"/assets/images/brands/github.svg",action:()=>location.assign("https://github.com/web-tech-tw")}],mobile_menu:{status:!1}})},y=b,w=(0,u.Z)(y,n,i,!1,null,null,null),C=w.exports,_=s(2809),k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bg-gray-50 py-10 lg:py-16"},[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[s("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[s("span",{staticClass:"block mb-3"},[t._v("OpenChat Hub")]),s("span",{staticClass:"block text-indigo-600"},[t._v("我們在 LINE 與你相遇")])])]),s("p",{staticClass:"text-xl text-gray-500 max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._v(" 由 臺灣網際網路技術推廣組織 所管理的 LINE社群 列表。 ")])]),s("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[s("div",{staticClass:"sm:text-center lg:text-left"},[s("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900"},[s("span",{staticClass:"block xl:inline"},[t._v("想加入我們嗎？")]),s("span",{staticClass:"block text-indigo-600 xl:inline"},[t._v("我們需要你")])]),s("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._v(" 我們正在為大眾提供一個免費且開放的網際網路技術推廣平台，讓大眾可以透過網路，了解網際網路技術，嘗試提升大眾資訊素養，並參與網路技術推廣的討論與分享。 ")]),s("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[s("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[s("a",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",attrs:{href:"https://forms.gle/4YMyFQVuUg36b1j78"}},[t._v(" 加入我們 ")])])])])])])}],O={},E=(0,u.Z)(O,k,j,!1,null,null,null),T=E.exports;a.Z.use(_.Z);const M=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:()=>s.e(443).then(s.bind(s,5830))}],N=new _.Z({routes:M});var A=N;a.Z.config.productionTip=!1,new a.Z({router:A,render:t=>t(C)}).$mount("#app")}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,i){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,n,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.060a756c.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="openchat-vue:";s.l=function(a,n,i,r){if(t[a])t[a].push(n);else{var o,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+i){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+i),o.src=a),t[a]=[n];var m=function(e,s){o.onerror=o.onload=null,clearTimeout(g);var n=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(t){return t(s)})),e)return e(s)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.f.j=function(e,a){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(s,a){n=t[e]=[s,a]}));a.push(n[2]=i);var r=s.p+s.u(e),o=new Error,l=function(a){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,n[1](o)}};s.l(r,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,r=a[0],o=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(l)var u=l(s)}for(e&&e(a);c<r.length;c++)i=r[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},a=self["webpackChunkopenchat_vue"]=self["webpackChunkopenchat_vue"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(3147)}));a=s.O(a)})();
//# sourceMappingURL=app.bae2e5e4.js.map