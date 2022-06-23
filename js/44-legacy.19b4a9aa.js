(self["webpackChunkopenchat"]=self["webpackChunkopenchat"]||[]).push([[44],{44:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap w-full justify-center bg-sky-500 py-20"},[t.ready?r("div",{staticClass:"text-white"},[t._v(" 載入中... ")]):t.access?r("div",[r("div",{staticClass:"max-w-md mx-3 my-5 py-4 px-8 bg-white shadow-lg rounded-lg"},[r("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[t._v("加入管理層社群")]),r("p",{staticClass:"mt-2 text-gray-600"},[t._v("你好，"+t._s(t.profile.nickname)+"，這裡是加入密碼：")]),r("p",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"mt-2 text-red-600"},[t._v(t._s(t.status))]),r("div",{staticClass:"w-full mt-2 text-gray-600 flex rounded bg-white w-auto shadow-md"},[r("input",{staticClass:"w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{disabled:!t.ready,type:"text"},domProps:{value:t.password}}),r("button",{staticClass:"m-2 rounded px-4 px-4 py-2 font-semibold",attrs:{disabled:!t.ready},on:{click:t.copySecret}},[r("svg",{directives:[{name:"show",rawName:"v-show",value:!t.ready,expression:"!ready"}],staticClass:"animate-spin -ml-1 mr-3 h-5 w-5",attrs:{fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),r("path",{staticClass:"opacity-75",attrs:{d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"}})]),r("svg",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"h-6 w-6",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),r("div",{staticClass:"flex justify-end mt-4"},[r("a",{staticClass:"flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",attrs:{href:t.url}},[r("svg",{directives:[{name:"show",rawName:"v-show",value:!t.ready,expression:"!ready"}],staticClass:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",attrs:{fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),r("path",{staticClass:"opacity-75",attrs:{d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"}})]),t._v(" 加入連結在這裡 ")])])])]):r("div",{staticClass:"text-white"},[t._v(" "+t._s(t.status||"存取遭拒")+" ")])])},a=[],n=r(6198),o=(r(8975),r(2222),r(6699),r(2023),{name:"AdminRoomView",data:function(){return{profile:null,status:null,ready:!1,access:!1,url:null,password:null}},methods:{copySecret:function(){var t=this;navigator.clipboard?navigator.clipboard.writeText(this.password).then((function(){return t.status="已複製代碼"})).catch((function(){return t.status="無法複製代碼"})):this.status="您的瀏覽器不支援複製功能"}},created:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){var r,s,a,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$profile();case 2:if(t.profile=e.sent,t.profile){e.next=8;break}return s="".concat("https://web-tech-tw.eu.org/openchat-join","/#/admin/room"),a="".concat("https://web-tech-tw.github.io/sara.inte","/?refer=").concat(encodeURIComponent(s)),location.assign(a),e.abrupt("return");case 8:if(!Array.isArray(null===(r=t.profile)||void 0===r?void 0:r.roles)||!t.profile.roles.includes("openchat")){e.next=12;break}t.access=!0,e.next=14;break;case 12:return console.log("forbidden"),e.abrupt("return");case 14:return e.prev=14,e.next=17,t.$axios.get("/admin-room");case 17:n=e.sent,t.url=n.data.url,t.password=n.data.password,e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](14),null!==e.t0&&void 0!==e.t0&&null!==(o=e.t0.response)&&void 0!==o&&null!==(i=o.data)&&void 0!==i&&i.code||(t.status="授權伺服器發生嚴重錯誤");case 25:return e.prev=25,t.ready=!0,e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[14,22,25,28]])})))()}}),i=o,l=r(1001),c=(0,l.Z)(i,s,a,!1,null,null,null),u=c.exports},4964:function(t,e,r){var s=r(5112),a=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[a]=!1,"/./"[t](e)}catch(s){}}return!1}},3929:function(t,e,r){var s=r(7854),a=r(7850),n=s.TypeError;t.exports=function(t){if(a(t))throw n("The method doesn't accept regular expressions");return t}},6699:function(t,e,r){"use strict";var s=r(2109),a=r(1318).includes,n=r(1223);s({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},2023:function(t,e,r){"use strict";var s=r(2109),a=r(1702),n=r(3929),o=r(4488),i=r(1340),l=r(4964),c=a("".indexOf);s({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~c(i(o(this)),i(n(t)),arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=44-legacy.19b4a9aa.js.map