(self["webpackChunkopenchat"]=self["webpackChunkopenchat"]||[]).push([[775],{3775:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap w-full justify-center bg-sky-500 py-20"},[t.ready?r("div",{staticClass:"text-white"},[t._v(" 載入中... ")]):t.access?r("div",[r("div",{staticClass:"max-w-md mx-3 my-5 py-4 px-8 bg-white shadow-lg rounded-lg"},[r("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[t._v("檢查加入代碼")]),r("p",{staticClass:"mt-2 text-gray-600"},[t._v("請輸入申請人的加入代碼：")]),r("div",{staticClass:"w-full mt-2 text-gray-600 flex rounded bg-white w-auto shadow-md"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{placeholder:"例如：000000",type:"text"},domProps:{value:t.query},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)},input:function(e){e.target.composing||(t.query=e.target.value)}}}),r("button",{staticClass:"m-2 rounded px-4 px-4 py-2 font-semibold",on:{click:t.submit}},[r("svg",{staticClass:"mt-1 h-6 w-6",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),r("p",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"mt-2 text-red-600"},[t._v(t._s(t.status))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.application.code,expression:"application.code"}],staticClass:"max-w-md mx-3 my-5 py-4 px-8 bg-white shadow-lg rounded-lg"},[r("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[t._v(" 加入代碼："+t._s(t.application.code)+" ")]),r("p",{staticClass:"mt-2 text-gray-600"},[t._v(" 使用者代碼："+t._s(t.application.user_agent)),r("br"),t._v(" IP 位址："+t._s(t.application.ip_address)),r("br"),t._v(" 申請時間："+t._s(new Date(1e3*t.application.created_at))+" ")]),t.application.approval_by?r("p",{staticClass:"mt-2 text-amber-600"},[t._v(" 已由 "+t._s(t.application.approval_by)+" 於 "+t._s(new Date(1e3*t.application.approval_at))+" 許可 ")]):r("div",{staticClass:"flex justify-end mt-4"},[r("button",{staticClass:"flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-1 rounded-full",on:{click:t.approval}},[t._v(" 許可 ")]),r("button",{staticClass:"flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-1 rounded-full",on:{click:t.reject}},[t._v(" 否決 ")])])])]):r("div",{staticClass:"text-white"},[t._v(" "+t._s(t.status||"存取遭拒")+" ")])])},a=[],s=r(6198),i=(r(2222),r(6699),r(2023),r(8975),{name:"AdminJoinView",data:function(){return{access:!1,ready:!1,query:null,status:null,application:{}}},methods:{submit:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.status="",t.query){e.next=4;break}return t.status="請輸入資料",e.abrupt("return");case 4:return r={params:{code:t.query}},e.prev=5,e.next=8,t.$axios.get("application",r);case 8:n=e.sent,t.application=n.data,t.status="",e.next=20;break;case 13:if(e.prev=13,e.t0=e["catch"](5),t.application={},404===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)){e.next=19;break}return t.status="發生嚴重錯誤",e.abrupt("return");case 19:t.status="加入代碼不存在";case 20:case"end":return e.stop()}}),e,null,[[5,13]])})))()},approval:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={params:{code:t.query}},e.prev=1,e.next=4,t.$axios.patch("application",null,r);case 4:return e.next=6,t.submit();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},reject:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={params:{code:t.query}},e.prev=1,e.next=4,t.$axios.delete("application",null,r);case 4:t.application={},e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()}},created:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$profile();case 2:if(t.profile=e.sent,t.profile){e.next=8;break}return n="".concat("https://web-tech-tw.eu.org/openchat-join","/#/admin/join"),a="".concat("https://web-tech-tw.github.io/sara.inte","/?refer=").concat(encodeURIComponent(n)),location.assign(a),e.abrupt("return");case 8:Array.isArray(null===(r=t.profile)||void 0===r?void 0:r.roles)&&t.profile.roles.includes("openchat")?t.access=!0:console.log("forbidden"),t.ready=!0;case 10:case"end":return e.stop()}}),e)})))()}}),o=i,c=r(1001),u=(0,c.Z)(o,n,a,!1,null,null,null),l=u.exports},4964:function(t,e,r){var n=r(5112),a=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[a]=!1,"/./"[t](e)}catch(n){}}return!1}},3929:function(t,e,r){var n=r(7854),a=r(7850),s=n.TypeError;t.exports=function(t){if(a(t))throw s("The method doesn't accept regular expressions");return t}},6699:function(t,e,r){"use strict";var n=r(2109),a=r(1318).includes,s=r(1223);n({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},2023:function(t,e,r){"use strict";var n=r(2109),a=r(1702),s=r(3929),i=r(4488),o=r(1340),c=r(4964),u=a("".indexOf);n({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~u(o(i(this)),o(s(t)),arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=775-legacy.ca442060.js.map