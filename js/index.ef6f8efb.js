(function(){"use strict";var t={5031:function(t,e,n){var i=n(8935),s=n(6166),r=n.n(s);const a={baseURL:"https://web-tech-tw.eu.org/openchat-join",timeout:6e4},o=r().create(a);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get(){return o}},$axios:{get(){return o}}})},i.Z.use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-white"},[n("app-header"),n("router-view"),n("app-footer")],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[n("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900"},[t._v(" OpenChat Hub ")])])],1),n("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,i){return n("div",{key:i},["function"===e.type?n("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),n("div",{staticClass:"-mr-2 -my-2 md:hidden"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.menu_collapse.mobile_menu=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Open menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse.mobile_menu,expression:"menu_collapse.mobile_menu"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[n("div",{staticClass:"pt-5 pb-6 px-5"},[n("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.menu_collapse.mobile_menu=!1}}},[t._m(0),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{type:"button"}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),n("div",{staticClass:"mt-6"},[n("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,i){return n("div",{key:i},["function"===e.type?n("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" OpenChat Hub ")])])}],d={name:"AppHeader",data:()=>({menu_collapse:{mobile_menu:!1}}),computed:{menu(){return[{name:"社群列表",type:"function",icon:n(4110),action:()=>{this.$router.push({name:"join"}),this.menu_collapse.mobile_menu=!1}},{name:"社群規範",type:"function",icon:n(8891),action:()=>{this.$router.push({name:"rule"}),this.menu_collapse.mobile_menu=!1}},{name:"回首頁",type:"function",icon:n(9182),action:()=>location.assign("https://web-tech-tw.github.io")}]}}},p=d,f=n(1001),x=(0,f.Z)(p,c,m,!1,null,null,null),v=x.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[n("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" 「OpenChat Hub」是利用「"),n("a",{attrs:{href:"https://line.me"}},[t._v("LINE")]),t._v("社群」作為交流平台，由「臺灣網際網路技術推廣組織」所管理的一系列群組。 ")]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700"},[n("a",{staticClass:"mr-3",attrs:{href:"https://github.com/web-tech-tw/openchat"}},[t._v("網站原始碼")]),n("a",{staticClass:"mr-3",attrs:{href:"https://web-tech-tw.github.io/#/privacy"}},[t._v("隱私權政策")])]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],b={name:"AppFooter"},y=b,w=(0,f.Z)(y,g,h,!1,null,null,null),_=w.exports,C={name:"App",components:{AppHeader:v,AppFooter:_}},k=C,j=(0,f.Z)(k,l,u,!1,null,null,null),O=j.exports,E=n(2809),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-gray-50 py-10 lg:py-16"},[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._m(0),n("div",{staticClass:"mt-5 sm:mt-8 sm:flex lg:justify-start"},[n("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[n("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/join"}},[t._v(" 加入我們 ")])],1)])]),n("p",{staticClass:"text-xl text-gray-500 max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._v(" 由 臺灣網際網路技術推廣組織 所管理的 LINE社群。 ")])]),n("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[n("div",{staticClass:"sm:text-center lg:text-left"},[t._m(1),n("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._v(" 為了維護 OpenChat Hub 社群的安全及和平共處，我們制定了一系列社群規範，請務必遵守。 ")]),n("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[n("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[n("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/rule"}},[t._v(" 閱讀社群規範 ")])],1)])])])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[n("span",{staticClass:"block mb-3"},[t._v("OpenChat Hub")]),n("span",{staticClass:"block text-sky-600"},[t._v("我們在 LINE 與你相遇")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900"},[n("span",{staticClass:"block xl:inline"},[t._v("務必遵守")]),n("span",{staticClass:"block text-sky-600 xl:inline"},[t._v("社群規範")])])}],$={},Z=(0,f.Z)($,P,T,!1,null,null,null),A=Z.exports;i.Z.use(E.Z);const M=[{path:"/",name:"home",component:A},{path:"/rule",name:"rule",component:()=>n.e(655).then(n.bind(n,3655))},{path:"/join",name:"join",component:()=>n.e(635).then(n.bind(n,635))},{path:"/join/:code",name:"join-chat",component:()=>n.e(865).then(n.bind(n,6865)),props:!0},{path:"/admin/join",name:"admin-join",component:()=>n.e(758).then(n.bind(n,9758))},{path:"*",name:"not-found",component:()=>n.e(895).then(n.bind(n,6895))}],H=new E.Z({routes:M});var L=H;i.Z.config.productionTip=!1,new i.Z({router:L,render:t=>t(O)}).$mount("#app")},4110:function(t,e,n){t.exports=n.p+"img/collection.b799e19a.svg"},9182:function(t,e,n){t.exports=n.p+"img/home.f19e567a.svg"},8891:function(t,e,n){t.exports=n.p+"img/information-circle.ca1bc15d.svg"}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,r){if(!i){var a=1/0;for(c=0;c<t.length;c++){i=t[c][0],s=t[c][1],r=t[c][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(o=!1,r<a&&(a=r));if(o){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,s,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{635:"290f59d0",655:"96832453",758:"700dd7c4",865:"07340503",895:"4072813e"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="openchat:";n.l=function(i,s,r,a){if(t[i])t[i].push(s);else{var o,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var m=u[c];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==e+r){o=m;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+r),o.src=i),t[i]=[s];var d=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var s=t[i];if(delete t[i],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/openchat/"}(),function(){var t={826:0};n.f.j=function(e,i){var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)i.push(s[2]);else{var r=new Promise((function(n,i){s=t[e]=[n,i]}));i.push(s[2]=r);var a=n.p+n.u(e),o=new Error,l=function(i){if(n.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,s[1](o)}};n.l(a,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,r,a=i[0],o=i[1],l=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(l)var c=l(n)}for(e&&e(i);u<a.length;u++)r=a[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkopenchat"]=self["webpackChunkopenchat"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5031)}));i=n.O(i)})();
//# sourceMappingURL=index.ef6f8efb.js.map