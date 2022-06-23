(function(){"use strict";var t={696:function(t,e,n){var s=n(8935),i=n(6166),a=n.n(i);const r={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},o=a().create(r);o.interceptors.request.use((function(t){const e=localStorage.getItem("unified_token");return e&&(t.headers["Authorization"]=`SARA ${e}`),t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return"sara-issue"in t?.headers&&localStorage.setItem("unified_token",t.headers["sara-issue"]),t}),(function(t){return Promise.reject(t)}));const l={install:t=>{t.prototype.$sara=o,t.prototype.$profile=async()=>{if(!localStorage.getItem("unified_token"))return null;try{const t=await o.get("profile");return t?.data?.profile||!1}catch(t){return 401===t?.response?.status&&(localStorage.removeItem("unified_token"),location.reload()),!1}}}};s.Z.use(l);const c={baseURL:"https://web-tech-tw.eu.org/openchat-join",timeout:6e4},u=a().create(c);u.interceptors.request.use((function(t){const e=localStorage.getItem("unified_token");return e&&(t.headers["Authorization"]=`SARA ${e}`),t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));const m={install:t=>{t.axios=u,window.axios=u,Object.defineProperties(t.prototype,{axios:{get(){return u}},$axios:{get(){return u}}})}};s.Z.use(m);var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-white"},[n("app-header"),n("router-view"),n("app-footer")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[n("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 hidden sm:block"},[t._v(" "+t._s(t.title.long)+" ")]),n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" "+t._s(t.title.short)+" ")])])],1),n("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,s){return n("div",{key:s},["dropdown"===e.type?n("div",{staticClass:"relative"},[n("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(n){return t.openMenu(e.status)}}},[n("span",[t._v(t._s(e.name))]),n("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),n("div",{staticClass:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse[e.status],expression:"menu_collapse[item.status]"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,s){return n("div",{key:s,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?n("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),n("div",{staticClass:"-mr-2 -my-2 md:hidden"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.menu_collapse.mobile_menu=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Open menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse.mobile_menu,expression:"menu_collapse.mobile_menu"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[n("div",{staticClass:"pt-5 pb-6 px-5"},[n("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.menu_collapse.mobile_menu=!1}}},[n("div",[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" "+t._s(t.title.short)+" ")])]),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),n("div",{staticClass:"mt-6"},[n("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,s){return n("div",{key:s},["dropdown"===e.type?n("div",{staticClass:"relative"},[n("button",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(n){return t.openMenu(e.status)}}},[n("span",[t._v(t._s(e.name))]),n("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),n("div",{staticClass:"absolute z-10 -ml-7 mt-3 transform px-2 w-screen max-w-md sm:px-0 sm:-ml-4 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse[e.status],expression:"menu_collapse[item.status]"}],staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(e.items,(function(e,s){return n("div",{key:s,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer",on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?n("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},g=[],h={name:"AppHeader",data:()=>({title:{short:"OpenChat Hub",long:"OpenChat Hub"},menu_collapse:{mobile_menu:!1},profile:null}),computed:{menu(){return[{name:"社群列表",type:"function",icon:n(4110),action:()=>{this.$router.push({name:"join"}),this.menu_collapse.mobile_menu=!1}},{name:"社群規範",type:"function",icon:n(8891),action:()=>{this.$router.push({name:"rule"}),this.menu_collapse.mobile_menu=!1}},{name:"社群管理",type:"function",icon:n(7113),action:()=>{this.$router.push({name:"admin"}),this.menu_collapse.mobile_menu=!1}},{name:"回首頁",type:"function",icon:n(9182),action:()=>location.assign("https://web-tech-tw.github.io")}]}},async created(){document.addEventListener("click",this.handleDocumentClick),this.profile=await this.$profile()},methods:{openMenu(t){Object.keys(this.menu_collapse).forEach((e=>{"mobile_menu"!==e&&(this.menu_collapse[e]=e===t&&!this.menu_collapse[e])}))},handleDocumentClick(t){this.$el.contains(t.target)||Object.keys(this.menu_collapse).forEach((t=>{this.menu_collapse[t]=!1}))}}},x=h,v=n(1001),b=(0,v.Z)(x,f,g,!1,null,null,null),y=b.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[n("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" 「OpenChat Hub」是利用「"),n("a",{attrs:{href:"https://line.me"}},[t._v("LINE")]),t._v("社群」作為交流平台，由「臺灣網際網路技術推廣組織」所管理的一系列群組。 ")]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700"},[n("a",{staticClass:"mr-3",attrs:{href:"https://github.com/web-tech-tw/openchat"}},[t._v("網站原始碼")]),n("a",{staticClass:"mr-3",attrs:{href:"https://web-tech-tw.github.io/#/privacy"}},[t._v("隱私權政策")])]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],C={name:"AppFooter"},k=C,j=(0,v.Z)(k,w,_,!1,null,null,null),O=j.exports,E={name:"App",components:{AppHeader:y,AppFooter:O}},$=E,A=(0,v.Z)($,d,p,!1,null,null,null),M=A.exports,P=n(2809),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-gray-50 py-10 lg:py-16"},[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._m(0),n("div",{staticClass:"mt-5 sm:mt-8 sm:flex lg:justify-start"},[n("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[n("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/join"}},[t._v(" 加入我們 ")])],1)])]),n("p",{staticClass:"text-xl text-gray-500 max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._v(" 由 臺灣網際網路技術推廣組織 所管理的 LINE社群。 ")])]),n("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[n("div",{staticClass:"sm:text-center lg:text-left"},[t._m(1),n("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._v(" 為了維護 OpenChat Hub 社群的安全及和平共處，我們制定了一系列社群規範，請務必遵守。 ")]),n("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[n("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[n("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/rule"}},[t._v(" 閱讀社群規範 ")])],1)])])])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[n("span",{staticClass:"block mb-3"},[t._v("OpenChat Hub")]),n("span",{staticClass:"block text-sky-600"},[t._v("我們在 LINE 與你相遇")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900"},[n("span",{staticClass:"block xl:inline"},[t._v("務必遵守")]),n("span",{staticClass:"block text-sky-600 xl:inline"},[t._v("社群規範")])])}],L={},Z=(0,v.Z)(L,S,T,!1,null,null,null),N=Z.exports;s.Z.use(P.Z);const I=[{path:"/",name:"home",component:N},{path:"/rule",name:"rule",component:()=>n.e(720).then(n.bind(n,720))},{path:"/join",name:"join",component:()=>n.e(635).then(n.bind(n,635))},{path:"/join/:code",name:"join-chat",component:()=>n.e(844).then(n.bind(n,844)),props:!0},{path:"/admin",name:"admin",component:()=>n.e(648).then(n.bind(n,3648))},{path:"/admin/join",name:"admin-join",component:()=>n.e(783).then(n.bind(n,2783))},{path:"/admin/room",name:"admin-room",component:()=>n.e(44).then(n.bind(n,44))},{path:"*",name:"not-found",component:()=>n.e(895).then(n.bind(n,6895))}],z=new P.Z({routes:I});var H=z;s.Z.config.productionTip=!1,new s.Z({router:H,render:t=>t(M)}).$mount("#app")},4110:function(t,e,n){t.exports=n.p+"img/collection.b799e19a.svg"},9182:function(t,e,n){t.exports=n.p+"img/home.f19e567a.svg"},8891:function(t,e,n){t.exports=n.p+"img/information-circle.ca1bc15d.svg"},7113:function(t,e,n){t.exports=n.p+"img/shield-check.c515f748.svg"}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,s,i,a){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],a=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(o=!1,a<r&&(r=a));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,s){return n.f[s](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{44:"f1636a9d",635:"0bf3c327",648:"1213b289",720:"134c972a",783:"a3d19ea9",844:"c01a8c4d",895:"4072813e"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="openchat:";n.l=function(s,i,a,r){if(t[s])t[s].push(i);else{var o,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==s||m.getAttribute("data-webpack")==e+a){o=m;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+a),o.src=s),t[s]=[i];var d=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var i=t[s];if(delete t[s],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/openchat/"}(),function(){var t={826:0};n.f.j=function(e,s){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)s.push(i[2]);else{var a=new Promise((function(n,s){i=t[e]=[n,s]}));s.push(i[2]=a);var r=n.p+n.u(e),o=new Error,l=function(s){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var a=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",o.name="ChunkLoadError",o.type=a,o.request=r,i[1](o)}};n.l(r,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,a,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var u=l(n)}for(e&&e(s);c<r.length;c++)a=r[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},s=self["webpackChunkopenchat"]=self["webpackChunkopenchat"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(696)}));s=n.O(s)})();
//# sourceMappingURL=index.d37a4170.js.map