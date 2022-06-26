"use strict";(self["webpackChunkopenchat"]=self["webpackChunkopenchat"]||[]).push([[655],{4655:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-wrap w-full justify-center bg-sky-500 py-20"},[t.ready?t.access?s("div",[s("div",{staticClass:"max-w-md mx-3 my-5 py-4 px-8 bg-white shadow-lg rounded-lg"},[s("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[t._v("檢查加入代碼")]),s("p",{staticClass:"mt-2 text-gray-600"},[t._v("請輸入申請人的加入代碼：")]),s("div",{staticClass:"w-full mt-2 text-gray-600 flex rounded bg-white shadow-md"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{placeholder:"例如：000000",type:"text"},domProps:{value:t.query},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)},input:function(e){e.target.composing||(t.query=e.target.value)}}}),s("button",{staticClass:"m-2 rounded px-4 py-2 font-semibold",on:{click:t.submit}},[s("svg",{staticClass:"mt-1 h-6 w-6",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"mt-2 text-red-600"},[t._v(t._s(t.status))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.application.code,expression:"application.code"}],staticClass:"max-w-md mx-3 my-5 py-4 px-8 bg-white shadow-lg rounded-lg"},[s("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[t._v(" 加入代碼："+t._s(t.application.code)+" ")]),s("p",{staticClass:"mt-2 text-gray-600"},[t._v(" 使用者代碼："+t._s(t.application.user_agent)),s("br"),t._v(" IP 位址："+t._s(t.application.ip_address)),s("br"),t._v(" 申請時間："+t._s(new Date(1e3*t.application.created_at))+" ")]),t.application.approval_by?s("p",{staticClass:"mt-2 text-amber-600"},[t._v(" 已由 "+t._s(t.application.approval_by)+" 於 "+t._s(new Date(1e3*t.application.approval_at))+" 許可 ")]):s("div",{staticClass:"flex justify-end mt-4"},[s("button",{staticClass:"flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-1 rounded-full",on:{click:t.approval}},[t._v(" 許可 ")]),s("button",{staticClass:"flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-1 rounded-full",on:{click:t.reject}},[t._v(" 否決 ")])])])]):s("div",{staticClass:"text-white"},[t._v(" "+t._s(t.status||"存取遭拒")+" ")]):s("div",{staticClass:"text-white"},[t._v(" 載入中... ")])])},i=[],o={name:"AdminJoinView",data:()=>({access:!1,ready:!1,query:null,status:null,application:{}}),methods:{async submit(){if(this.status="",!this.query)return void(this.status="請輸入資料");const t={params:{code:this.query}};try{const e=await this.$axios.get("application",t);this.application=e.data,this.status=""}catch(e){if(this.application={},404!==e?.response?.status)return void(this.status="發生嚴重錯誤");this.status="加入代碼不存在"}},async approval(){const t={params:{code:this.query}};try{await this.$axios.patch("application",null,t),await this.submit()}catch(e){console.error(e)}},async reject(){const t={params:{code:this.query}};try{await this.$axios.delete("application",null,t),this.application={}}catch(e){console.error(e)}}},async created(){if(this.profile=await this.$profile(),this.profile)Array.isArray(this.profile?.roles)&&this.profile.roles.includes("openchat")?this.access=!0:console.log("forbidden"),this.ready=!0;else{const t="https://web-tech-tw.github.io/openchat/#/admin/join",e=`https://web-tech-tw.github.io/sara.inte/?refer=${encodeURIComponent(t)}`;location.assign(e)}}},n=o,l=s(1001),r=(0,l.Z)(n,a,i,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=655.cad48b3b.js.map