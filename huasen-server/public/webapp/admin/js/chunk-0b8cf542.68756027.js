(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0b8cf542"],{"3fb8":function(e,t,a){},ad82:function(e,t,a){},b829:function(e,t,a){"use strict";a.r(t);var o={name:"RecordManage",components:{TableList:a("ca7f").a},data:()=>({records:[],tableMap:[{label:"索引",key:"id"},{label:"记录时间",key:"time"},{label:"日志内容",key:"log"}],total:0,searchForm:{id:"",time:""},searchFormMap:[{label:"索引",type:"input",key:"id"},{label:"存入时间",key:"time",type:"input"}],pageNo:1,pageSize:10}),mounted(){this.queryRecord()},methods:{queryRecord(){let e=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findRecordByPage(e,{notify:!1}).then(e=>{this.records=e.data.list.sort((e,t)=>t.time-e.time),this.total=e.data.total})},updatePagination(e,t){this.pageNo=e,this.pageSize=t},removeRecord(e,t,a,o){this.API.removeRecord({_id:t._id}).then(e=>{this.queryRecord()})},handleRemoveMany(e){let t=e.map(e=>e._id);this.API.removeManyRecord({_ids:t}).then(e=>{this.queryRecord()})},paginationChange(e,t){this.queryRecord()}}},n=(a("dbd1"),a("2877")),i=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"record-manage p-px-10"},[t("TableList",{attrs:{tableData:e.records,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,showAdd:!1,showEdit:!1,showCopy:!0,showSelection:!0,total:e.total},on:{"update:formData":function(t){e.searchForm=t},"update:form-data":function(t){e.searchForm=t},remove:e.removeRecord,removeMany:e.handleRemoveMany,search:e.queryRecord,paginationChange:e.paginationChange,updatePagination:e.updatePagination}})],1)}),[],!1,null,"138c4bb1",null);t.default=i.exports},ca7f:function(e,t,a){"use strict";var o={name:"TableList",props:{formData:{type:Object,default:()=>({name:"huasen"})},formMap:{type:Array,default:()=>[{span:6,label:"姓名",type:"input",key:"name"}]},tableMap:{type:Array,default:()=>[{label:"日期",key:"data"}]},tableData:{type:Array,default:()=>[{date:"1979-01-01"}]},total:{type:Number,default:0},showAdd:{type:Boolean,default:!1},showAddMany:{type:Boolean,default:!1},showRemove:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showOperate:{type:Boolean,default:!1},showCopy:{type:Boolean,default:!1},showSelection:{type:Boolean,default:!1}},computed:{showContent(){return 0!==this.tableMap.length},showHeader(){return 0!==this.formMap.length}},data:()=>({pagination:{pageNo:1,pageSize:10},showRemoveMany:!1}),watch:{pagination:{handler(e){this.$emit("updatePagination",e.pageNo,e.pageSize)},deep:!0,immediate:!0}},methods:{handleSelectionChange(){this.showRemoveMany=0!==this.$refs.table.selection.length},handlePlaceHolder:e=>"请输入"+e.label,handlePageSizeChange(e){this.pagination.pageSize=e,this.handleEmit("paginationChange",this.pagination.pageNo,e)},handlePageNoChange(e){this.pagination.pageNo=e,this.handleEmit("paginationChange",e,this.pagination.pageSize)},add(){this.$emit("add")},addMany(){this.$emit("addMany")},remove(e,t){this.handleEmit("remove",e,t,this.pagination.pageNo,this.pagination.pageSize)},removeMany(){let e=this.$refs.table.selection||[];this.handleEmit("removeMany",e)},edit(e,t){this.$emit("edit",e,t)},operate(e,t){this.$emit("operate",e,t)},copy(e,t){this.TOOL.copyTextToClip(JSON.stringify(t),"已复制到剪贴板")},search(){this.pagination={pageNo:1,pageSize:10},this.handleEmit("search",this.pagination.pageNo,this.pagination.pageSize)},handleEmit(e){this.$nextTick(()=>{let t=[...Array.from(arguments)];t.shift(),this.$emit(e,...t)})},handleCopy(e,t,a,o){this.TOOL.copyTextToClip(a.innerText,"已拷贝单元格内容")}}},n=(a("e1ce"),a("2877")),i=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-list"},[e.showHeader?t("header",[t("el-form",{ref:"searchForm",attrs:{inline:!0,model:e.formData}},[t("el-row",{attrs:{gutter:10}},[e._l(e.formMap,(function(a,o){return t("el-col",{key:o,attrs:{span:a.span||5}},[t("el-form-item",["input"==a.type?t("el-input",{attrs:{placeholder:e.handlePlaceHolder(a),clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)}},model:{value:e.formData[a.key],callback:function(t){e.$set(e.formData,a.key,t)},expression:"formData[formItem.key]"}}):e._e(),"select"==a.type?t("el-select",{attrs:{placeholder:e.handlePlaceHolder(a)},on:{change:e.search},model:{value:e.formData[a.key],callback:function(t){e.$set(e.formData,a.key,t)},expression:"formData[formItem.key]"}},[t("el-option",{attrs:{label:"全部",value:""}}),e._l(a.selectOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],2):e._e()],1)],1)})),t("el-col",{attrs:{span:8}},[t("el-form-item",[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.search}},[e._v("查询")]),e.showAdd?t("el-button",{attrs:{size:"small",type:"success"},on:{click:e.add}},[e._v("添加")]):e._e(),e.showAddMany?t("el-button",{attrs:{size:"small",type:"info"},on:{click:e.addMany}},[e._v("导入/出")]):e._e(),e.showRemoveMany?t("el-popconfirm",{staticClass:"ml-px-10",attrs:{"popper-class":"delete-popcomfirm",title:"确定删除吗？"},on:{confirm:e.removeMany}},[t("el-button",{attrs:{slot:"reference",size:"small",type:"danger"},slot:"reference"},[e._v("批量删除")])],1):e._e()],1)],1)],2)],1)],1):e._e(),e.showContent?t("main",[t("el-table",{ref:"table",attrs:{data:e.tableData,stripe:!0,border:!0,"highlight-current-row":"",height:"100%"},on:{"selection-change":e.handleSelectionChange,"cell-dblclick":e.handleCopy}},[e.showSelection?t("el-table-column",{attrs:{type:"selection",width:"48"}}):e._e(),t("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),e._l(e.tableMap,(function(a,o){return t("el-table-column",{key:o,attrs:{label:a.label,width:a.width,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(o){return["icon"===a.key?[t("div",{staticClass:"w-full h-px-30 flex items-center"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"max-w-full max-h-full",attrs:{src:o.row[a.key]}})])]:t("div",{staticClass:"text"},[e._v(e._s(e._f("emptyTip")(o.row[a.key])))])]}}],null,!0)})})),t("el-table-column",{attrs:{label:"操作",width:240},scopedSlots:e._u([{key:"default",fn:function(a){return[e.showRemove?t("el-popconfirm",{staticClass:"mr-px-10",attrs:{"popper-class":"delete-popcomfirm",title:"确定删除吗？"},on:{confirm:function(t){return e.remove(a.$index,a.row)}}},[t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删 除")])],1):e._e(),e.showCopy?t("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(t){return e.copy(a.$index,a.row)}}},[e._v("复 制")]):e._e(),e.showEdit?t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.edit(a.$index,a.row)}}},[e._v("编 辑")]):e._e(),e.showOperate?t("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(t){return e.operate(a.$index,a.row)}}},[e._v("操 作")]):e._e()]}}],null,!1,1171393652)})],2)],1):e._e(),e.showContent?t("footer",[t("el-pagination",{staticClass:"flex mt-px-28",attrs:{"current-page":e.pagination.pageNo,background:"","page-sizes":[10,20,50,100],pageSize:e.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,"popper-class":"page-size-popper"},on:{"size-change":e.handlePageSizeChange,"current-change":e.handlePageNoChange}})],1):e._e()])}),[],!1,null,"2642c78c",null);t.a=i.exports},dbd1:function(e,t,a){"use strict";a("3fb8")},e1ce:function(e,t,a){"use strict";a("ad82")}}]);