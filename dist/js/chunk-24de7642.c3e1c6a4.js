(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24de7642"],{"8acb":function(o,e,t){"use strict";t.r(e);var n=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("BContainer",[t("BRow",{staticClass:"bg-secondary p-3 mt-5 text-white"},[t("BCol",{attrs:{cols:"6"}},[o._v("Наименование")]),t("BCol",{attrs:{cols:"5"}},[o._v("Примечание")]),t("BCol",{attrs:{cols:"1"}})],1),o._l(o.professions,(function(e,n,s){return t("div",{key:s},[t("Profession",{attrs:{prof:e},on:{removeProf:o.onRemoveProf,openModal:o.onOpenModal}})],1)})),o.openModal?t("ProfModal",{attrs:{prof:o.profession},on:{changeUser:o.onChangeProfession,cancel:o.closeModal}}):o._e(),t("BButton",{staticClass:"mt-4",attrs:{variant:"success"},on:{click:o.onOpenModal}},[o._v("Добавить профессию")])],2)},s=[],r=(t("96cf"),t("1da1")),a=t("5530"),i=t("2f62"),c=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("BRow",{staticClass:"pt-3 pb-3 border"},[t("BCol",{attrs:{cols:"6"}},[o._v(o._s(o.prof.name))]),t("BCol",{attrs:{cols:"5"}},[o._v(o._s(o.prof.note))]),t("BCol",{staticClass:"h5",attrs:{cols:"1"}},[t("BIconstack",{staticClass:"pointer",attrs:{variant:"success"},on:{click:o.emitOpenModal}},[t("BIcon",{attrs:{stacked:"",icon:"pencil"}}),t("BIcon",{attrs:{stacked:"",icon:"square",scale:"1.2"}})],1),t("BIcon",{staticClass:"ml-3 pointer",attrs:{icon:"x-circle",variant:"danger"},on:{click:o.emitRemoveEvent}})],1)],1)],1)},l=[],f={name:"Profession",props:["prof"],methods:{emitRemoveEvent:function(){this.$emit("removeProf",{id:this.prof.id})},emitOpenModal:function(){this.$emit("openModal",{id:this.prof.id})}}},p=f,u=t("2877"),d=Object(u["a"])(p,c,l,!1,null,"3c8c27dd",null),m=d.exports,b=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"modal"},[t("div",{staticClass:"modal-body"},[t("BForm",{staticClass:"modal-content",on:{submit:o.onSubmit}},[t("BFormGroup",{attrs:{"label-cols-sm":"4","label-cols-lg":"3",label:"Профессия","label-for":"user-last"}},[t("BFormInput",{attrs:{id:"user-last",required:""},model:{value:o.profInfo.name,callback:function(e){o.$set(o.profInfo,"name",e)},expression:"profInfo.name"}})],1),t("BFormGroup",{attrs:{"label-cols-sm":"4","label-cols-lg":"3",label:"Примечание","label-for":"user-note"}},[t("BFormInput",{attrs:{id:"user-note"},model:{value:o.profInfo.note,callback:function(e){o.$set(o.profInfo,"note",e)},expression:"profInfo.note"}})],1),t("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"primary"}},[o._v("Сохранить")]),t("b-button",{attrs:{variant:"secondary"},on:{click:o.onCancel}},[o._v("Отмена")])],1)],1)])},v=[],h={name:"ProfModal",props:{prof:{type:Object}},data:function(){return{profInfo:{}}},methods:{onSubmit:function(o){o.preventDefault(),this.$emit("changeUser",{id:this.profInfo.id,prof:this.profInfo})},onCancel:function(){this.$emit("cancel")}},beforeMount:function(){var o=JSON.parse(JSON.stringify(this.prof));this.profInfo=o}},C=h,B=(t("aa91"),Object(u["a"])(C,b,v,!1,null,"47e41e6b",null)),M=B.exports,O={name:"Professions",components:{Profession:m,ProfModal:M},data:function(){return{openModal:!1,profession:{id:Math.random(),note:""}}},computed:Object(a["a"])({},Object(i["c"])("professions",["professions"])),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(i["b"])("professions",["removeProfession","changeProfession"])),Object(i["b"])("staff",["removeUserProfession"])),{},{onRemoveProf:function(o){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=o.id,t.next=3,e.$bvModal.msgBoxConfirm("Действительно удалить профессию?");case 3:s=t.sent,s&&(e.removeProfession(n),e.removeUserProfession(n));case 5:case"end":return t.stop()}}),t)})))()},onOpenModal:function(o){var e=o.id;if(e){var t=this.professions[e];this.profession=t}this.openModal=!0},onChangeProfession:function(o){this.changeProfession(o),this.closeModal()},closeModal:function(){this.openModal=!1,this.profession={id:Math.random(),note:""}}})},P=O,_=Object(u["a"])(P,n,s,!1,null,"b8a369bc",null);e["default"]=_.exports},aa91:function(o,e,t){"use strict";var n=t("eb7c"),s=t.n(n);s.a},eb7c:function(o,e,t){}}]);
//# sourceMappingURL=chunk-24de7642.c3e1c6a4.js.map