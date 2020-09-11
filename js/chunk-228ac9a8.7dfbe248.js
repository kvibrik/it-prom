(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-228ac9a8"],{"0229":function(e,t,n){"use strict";var a=n("25bc"),o=n.n(a);o.a},"25bc":function(e,t,n){},"3e7c":function(e,t,n){"use strict";var a=n("ae9a"),o=n.n(a);o.a},"7f82":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BContainer",[n("BRow",{staticClass:"bg-secondary p-3 mt-5 text-white"},[n("BCol",{attrs:{cols:"4"}},[e._v("Наименование")]),n("BCol",{attrs:{cols:"4"}},[e._v("Примечание")]),n("BCol",{attrs:{cols:"3"}},[e._v("Родительский отдел")]),n("BCol",{attrs:{cols:"1"}})],1),e._l(e.departments,(function(t,a,o){return n("div",{key:o},[n("Department",{attrs:{dep:t,deps:e.departments},on:{removeDep:e.onRemoveDep,openModal:e.onOpenModal}})],1)})),e.openModal?n("DepartmentModal",{attrs:{dep:e.department,deps:e.departments},on:{changeDepartment:e.onChangeDepartment,cancel:e.closeModal}}):e._e(),n("BButton",{staticClass:"mt-4",attrs:{variant:"success"},on:{click:e.onOpenModal}},[e._v("Добавить отдел")])],2)},o=[],r=(n("96cf"),n("1da1")),s=n("5530"),c=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("BRow",{staticClass:"pt-3 pb-3 border"},[n("BCol",{attrs:{cols:"4"}},[e._v(e._s(e.dep.name))]),n("BCol",{attrs:{cols:"4"}},[e._v(e._s(e.dep.note))]),n("BCol",{attrs:{cols:"3"}},[e._v(e._s(e.getParentDep))]),n("BCol",{staticClass:"h5",attrs:{cols:"1"}},[n("BIconstack",{staticClass:"pointer",attrs:{variant:"success"},on:{click:e.emitOpenModal}},[n("BIcon",{attrs:{stacked:"",icon:"pencil"}}),n("BIcon",{attrs:{stacked:"",icon:"square",scale:"1.2"}})],1),n("BIcon",{staticClass:"ml-3 pointer",attrs:{icon:"x-circle",variant:"danger"},on:{click:e.emitRemoveEvent}})],1)],1)],1)},l=[],p=(n("b0c0"),{name:"Department",props:["dep","deps"],methods:{emitRemoveEvent:function(){this.$emit("removeDep",{id:this.dep.id})},emitOpenModal:function(){this.$emit("openModal",{id:this.dep.id})}},computed:{getParentDep:function(){var e=this.dep.parentId;return e?this.deps[e].name:""}}}),d=p,m=(n("3e7c"),n("2877")),u=Object(m["a"])(d,i,l,!1,null,"25c88b98",null),f=u.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal"},[n("div",{staticClass:"modal-body"},[n("BForm",{staticClass:"modal-content",on:{submit:e.onSubmit}},[n("BFormGroup",{attrs:{"label-cols-sm":"4","label-cols-lg":"3",label:"Профессия","label-for":"user-last"}},[n("BFormInput",{attrs:{id:"user-last",required:""},model:{value:e.depInfo.name,callback:function(t){e.$set(e.depInfo,"name",t)},expression:"depInfo.name"}})],1),n("BFormGroup",{attrs:{"label-cols-sm":"4","label-cols-lg":"3",label:"Примечание","label-for":"user-note"}},[n("BFormInput",{attrs:{id:"user-note"},model:{value:e.depInfo.note,callback:function(t){e.$set(e.depInfo,"note",t)},expression:"depInfo.note"}})],1),n("BFormGroup",{attrs:{"label-cols-sm":"4","label-cols-lg":"3",label:"Родительский отдел","label-for":"user-dep"}},[n("BFormSelect",{attrs:{id:"user-dep",options:e.departments},on:{change:e.onDepartmentChange},model:{value:e.selectedDep,callback:function(t){e.selectedDep=t},expression:"selectedDep"}})],1),n("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"primary"}},[e._v("Сохранить")]),n("b-button",{attrs:{variant:"secondary"},on:{click:e.onCancel}},[e._v("Отмена")])],1)],1)])},v=[],h=(n("4de4"),n("4160"),n("d81d"),n("07ac"),n("159b"),{name:"DepartmentModal",props:{dep:{type:Object},deps:{type:Object}},data:function(){return{depInfo:{},departments:[{value:"",text:""}],selectedDep:null}},methods:{onSubmit:function(e){e.preventDefault(),this.$emit("changeDepartment",{id:this.depInfo.id,prof:this.depInfo})},onCancel:function(){this.$emit("cancel")},onDepartmentChange:function(){this.depInfo.parentId=this.selectedDep}},beforeMount:function(){var e=this,t=JSON.parse(JSON.stringify(this.dep)),n=Object.values(this.deps),a=n.map((function(e){return{value:e.id,text:e.name}})),o=a.filter((function(e){return e.value!==t.id}));this.depInfo=t,this.selectedDep=t.parentId,o.forEach((function(t){e.departments.push(t)}))}}),D=h,g=(n("0229"),Object(m["a"])(D,b,v,!1,null,"fb8f43e0",null)),C=g.exports,B={name:"Departments",components:{Department:f,DepartmentModal:C},data:function(){return{openModal:!1,department:{id:Math.random(),note:"",parentId:""}}},computed:Object(s["a"])({},Object(c["c"])("departments",["departments"])),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(c["b"])("staff",["removeUserProfession","removeUserDepartment"])),Object(c["b"])("departments",["removeDepartment","changeDepartment"])),{},{onOpenModal:function(e){var t=e.id;if(t){var n=this.departments[t];this.department=n}this.openModal=!0},onRemoveDep:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.id,n.next=3,t.$bvModal.msgBoxConfirm("Действительно удалить профессию?");case 3:o=n.sent,o&&(t.removeDepartment(a),t.removeUserDepartment(a));case 5:case"end":return n.stop()}}),n)})))()},onChangeDepartment:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.changeDepartment(e);case 2:t.closeModal();case 3:case"end":return n.stop()}}),n)})))()},closeModal:function(){this.openModal=!1,this.department={id:Math.random(),note:"",parentId:""}}})},I=B,O=Object(m["a"])(I,a,o,!1,null,"0b23382e",null);t["default"]=O.exports},ae9a:function(e,t,n){},b0c0:function(e,t,n){var a=n("83ab"),o=n("9bf2").f,r=Function.prototype,s=r.toString,c=/^\s*function ([^ (]*)/,i="name";a&&!(i in r)&&o(r,i,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(e){return""}}})},d81d:function(e,t,n){"use strict";var a=n("23e7"),o=n("b727").map,r=n("1dde"),s=n("ae40"),c=r("map"),i=s("map");a({target:"Array",proto:!0,forced:!c||!i},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-228ac9a8.7dfbe248.js.map