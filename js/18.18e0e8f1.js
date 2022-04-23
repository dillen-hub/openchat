"use strict";(self["webpackChunkopenchat"]=self["webpackChunkopenchat"]||[]).push([[18],{4018:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap w-full justify-center bg-sky-500 py-20"},[t.access?a("div",[a("div",{staticClass:"max-w-md mx-3 my-5 py-4 px-8 bg-white shadow-lg rounded-lg"},[a("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[t._v("檢查加入代碼")]),a("p",{staticClass:"mt-2 text-gray-600"},[t._v("請輸入申請人的加入代碼：")]),a("div",{staticClass:"w-full mt-2 text-gray-600 flex rounded bg-white w-auto shadow-md"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{type:"text",placeholder:"例如：000000"},domProps:{value:t.query},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)},input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("button",{staticClass:"m-2 rounded px-4 px-4 py-2 font-semibold",on:{click:t.submit}},[a("svg",{staticClass:"mt-1 h-6 w-6",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.notice,expression:"notice"}],staticClass:"mt-2 text-red-600"},[t._v(t._s(t.notice))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.application.code,expression:"application.code"}],staticClass:"max-w-md mx-3 my-5 py-4 px-8 bg-white shadow-lg rounded-lg"},[a("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[t._v(" 加入代碼："+t._s(t.application.code)+" ")]),a("p",{staticClass:"mt-2 text-gray-600"},[t._v(" 使用者代碼："+t._s(t.application.user_agent)),a("br"),t._v(" IP 位址："+t._s(t.application.ip_address)),a("br"),t._v(" 申請時間："+t._s(new Date(1e3*t.application.created_at))+" ")]),t.application.approval_by?a("p",{staticClass:"mt-2 text-amber-600"},[t._v(" 已由 "+t._s(t.application.approval_by)+" 於 "+t._s(new Date(1e3*t.application.approval_at))+" 許可 ")]):a("div",{staticClass:"flex justify-end mt-4"},[a("button",{staticClass:"flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-1 rounded-full",on:{click:t.approval}},[t._v(" 許可 ")]),a("button",{staticClass:"flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-1 rounded-full",on:{click:t.reject}},[t._v(" 否決 ")])])])]):a("div",{staticClass:"text-white"},[t._v(" "+t._s(t.ready?"存取遭拒":"載入中...")+" ")])])},i=[],o={name:"AdminJoinView",data:()=>({access:!1,ready:!1,query:null,notice:null,application:{}}),methods:{submit(){const t={params:{code:this.query}};this.$axios.get("application",t).then((t=>{this.application=t.data,this.notice=""})).catch((t=>{this.application={},this.notice=404===t?.response?.status?"加入代碼不存在":"發生嚴重錯誤"}))},approval(){const t={params:{code:this.query}};this.$axios.patch("application",null,t).then((()=>this.submit())).catch((t=>console.error(t)))},reject(){const t={params:{code:this.query}};this.$axios.delete("application",t).then((()=>this.application={})).catch((t=>console.error(t)))}},created(){this.$profile().then((t=>{this.ready=!0,Array.isArray(t?.roles)&&t.roles.includes("openchat")?this.access=!0:console.log("forbidden")})).catch((t=>{if(this.ready=!0,401!==t?.response?.status)console.log("forbidden");else{const t="https://web-tech-tw.eu.org/openchat-join/#/admin/join",e=`https://web-tech-tw.github.io/sara.inte/?refer=${t}`;location.assign(e)}}))}},n=o,l=a(1001),r=(0,l.Z)(n,s,i,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=18.18e0e8f1.js.map