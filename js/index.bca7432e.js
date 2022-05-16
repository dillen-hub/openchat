(function(){"use strict";var t={5830:function(t,e,n){var i=n(8935),r=n(6166),s=n.n(r);const o={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},a=s().create(o);a.interceptors.request.use((function(t){const e=localStorage.getItem("unified_token");return e&&(t.headers["Authorization"]=`SARA ${e}`),t}),(function(t){return Promise.reject(t)})),a.interceptors.response.use((function(t){return"sara-issue"in t?.headers&&localStorage.setItem("unified_token",t.headers["sara-issue"]),t}),(function(t){return Promise.reject(t)}));const l={install:t=>{t.prototype.$sara=a,t.prototype.$profile=async()=>{if(!localStorage.getItem("unified_token"))return null;try{const t=await a.get("profile");return t?.data?.profile||!1}catch(t){return 401===t?.response?.status&&(localStorage.removeItem("unified_token"),location.reload()),!1}}}};i.Z.use(l);const c={baseURL:"https://web-tech-tw.eu.org/openchat-join",timeout:6e4},u=s().create(c);u.interceptors.request.use((function(t){const e=localStorage.getItem("unified_token");return e&&(t.headers["Authorization"]=`SARA ${e}`),t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));const m={install:t=>{t.axios=u,window.axios=u,Object.defineProperties(t.prototype,{axios:{get(){return u}},$axios:{get(){return u}}})}};i.Z.use(m);var p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-white"},[n("app-header"),n("router-view"),n("app-footer")],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"},[n("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900"},[t._v(" OpenChat Hub ")])])],1),n("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,i){return n("div",{key:i},["function"===e.type?n("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),n("div",{staticClass:"-mr-2 -my-2 md:hidden"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.menu_collapse.mobile_menu=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Open menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse.mobile_menu,expression:"menu_collapse.mobile_menu"}],staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[n("div",{staticClass:"pt-5 pb-6 px-5"},[n("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.menu_collapse.mobile_menu=!1}}},[t._m(0),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",attrs:{type:"button"}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),n("div",{staticClass:"mt-6"},[n("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,i){return n("div",{key:i},["function"===e.type?n("button",{staticClass:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full",attrs:{type:"button"},on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" OpenChat Hub ")])])}],x={name:"AppHeader",data:()=>({menu_collapse:{mobile_menu:!1}}),computed:{menu(){return[{name:"社群列表",type:"function",icon:n(4110),action:()=>{this.$router.push({name:"join"}),this.menu_collapse.mobile_menu=!1}},{name:"社群規範",type:"function",icon:n(8891),action:()=>{this.$router.push({name:"rule"}),this.menu_collapse.mobile_menu=!1}},{name:"社群管理",type:"function",icon:n(7113),action:()=>{this.$router.push({name:"admin"}),this.menu_collapse.mobile_menu=!1}},{name:"回首頁",type:"function",icon:n(9182),action:()=>location.assign("https://web-tech-tw.github.io")}]}}},g=x,v=n(1001),b=(0,v.Z)(g,f,h,!1,null,null,null),y=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[n("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" 「OpenChat Hub」是利用「"),n("a",{attrs:{href:"https://line.me"}},[t._v("LINE")]),t._v("社群」作為交流平台，由「臺灣網際網路技術推廣組織」所管理的一系列群組。 ")]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700"},[n("a",{staticClass:"mr-3",attrs:{href:"https://github.com/web-tech-tw/openchat"}},[t._v("網站原始碼")]),n("a",{staticClass:"mr-3",attrs:{href:"https://web-tech-tw.github.io/#/privacy"}},[t._v("隱私權政策")])]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],C={name:"AppFooter"},k=C,j=(0,v.Z)(k,_,w,!1,null,null,null),O=j.exports,E={name:"App",components:{AppHeader:y,AppFooter:O}},$=E,A=(0,v.Z)($,p,d,!1,null,null,null),P=A.exports,S=n(2809),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-gray-50 py-10 lg:py-16"},[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._m(0),n("div",{staticClass:"mt-5 sm:mt-8 sm:flex lg:justify-start"},[n("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[n("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/join"}},[t._v(" 加入我們 ")])],1)])]),n("p",{staticClass:"text-xl text-gray-500 max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},[t._v(" 由 臺灣網際網路技術推廣組織 所管理的 LINE社群。 ")])]),n("div",{staticClass:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[n("div",{staticClass:"sm:text-center lg:text-left"},[t._m(1),n("p",{staticClass:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._v(" 為了維護 OpenChat Hub 社群的安全及和平共處，我們制定了一系列社群規範，請務必遵守。 ")]),n("div",{staticClass:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[n("div",{staticClass:"mt-3 sm:mt-0 sm:ml-3"},[n("router-link",{staticClass:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10",attrs:{to:"/rule"}},[t._v(" 閱讀社群規範 ")])],1)])])])])},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[n("span",{staticClass:"block mb-3"},[t._v("OpenChat Hub")]),n("span",{staticClass:"block text-sky-600"},[t._v("我們在 LINE 與你相遇")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900"},[n("span",{staticClass:"block xl:inline"},[t._v("務必遵守")]),n("span",{staticClass:"block text-sky-600 xl:inline"},[t._v("社群規範")])])}],I={},L=(0,v.Z)(I,T,Z,!1,null,null,null),M=L.exports;i.Z.use(S.Z);const H=[{path:"/",name:"home",component:M},{path:"/rule",name:"rule",component:()=>n.e(655).then(n.bind(n,3655))},{path:"/join",name:"join",component:()=>n.e(635).then(n.bind(n,635))},{path:"/join/:code",name:"join-chat",component:()=>n.e(776).then(n.bind(n,5776)),props:!0},{path:"/admin",name:"admin",component:()=>n.e(513).then(n.bind(n,3513))},{path:"/admin/join",name:"admin-join",component:()=>n.e(887).then(n.bind(n,2336))},{path:"/admin/room",name:"admin-room",component:()=>n.e(86).then(n.bind(n,6086))},{path:"*",name:"not-found",component:()=>n.e(895).then(n.bind(n,6895))}],N=new S.Z({routes:H});var F=N;i.Z.config.productionTip=!1,new i.Z({router:F,render:t=>t(P)}).$mount("#app")},4110:function(t,e,n){t.exports=n.p+"img/collection.b799e19a.svg"},9182:function(t,e,n){t.exports=n.p+"img/home.f19e567a.svg"},8891:function(t,e,n){t.exports=n.p+"img/information-circle.ca1bc15d.svg"},7113:function(t,e,n){t.exports=n.p+"img/shield-check.c515f748.svg"}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,s){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],s=t[u][2];for(var a=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,s<o&&(o=s));if(a){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{86:"132f4ebc",513:"c031b90e",635:"0bf3c327",655:"96832453",776:"ca4921b8",887:"0553b133",895:"4072813e"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="openchat:";n.l=function(i,r,s,o){if(t[i])t[i].push(r);else{var a,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==e+s){a=m;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+s),a.src=i),t[i]=[r];var p=function(e,n){a.onerror=a.onload=null,clearTimeout(d);var r=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/openchat/"}(),function(){var t={826:0};n.f.j=function(e,i){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var s=new Promise((function(n,i){r=t[e]=[n,i]}));i.push(r[2]=s);var o=n.p+n.u(e),a=new Error,l=function(i){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,r[1](a)}};n.l(o,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,s,o=i[0],a=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var u=l(n)}for(e&&e(i);c<o.length;c++)s=o[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},i=self["webpackChunkopenchat"]=self["webpackChunkopenchat"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5830)}));i=n.O(i)})();
//# sourceMappingURL=index.bca7432e.js.map