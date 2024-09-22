(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6fa25e3a","chunk-9f27b9e8","chunk-78a47067","chunk-f3042936"],{"1ddf":function(e,a,t){"use strict";t("a426")},"2cd2":function(e,a,t){"use strict";t.r(a);var i=t("46eb"),o=t("af15"),s=t("afc1"),n={name:"AccountManage",data:()=>({activeName:"user"}),components:{AccountAdmin:i.default,AccountUser:o.default,AccountBlacklist:s.default}},r=(t("44cd"),t("2877")),l=Object(r.a)(n,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"account-manage"},[a("el-tabs",{staticClass:"tab-group",model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"用户列表",name:"user"}},[a("AccountUser")],1),a("el-tab-pane",{attrs:{label:"管理列表",name:"admin"}},[a("AccountAdmin")],1),a("el-tab-pane",{attrs:{label:"黑名单列表",name:"blacklist"}},[a("AccountBlacklist")],1)],1)],1)}),[],!1,null,"b3588622",null);a.default=l.exports},"30d8":function(e,a,t){},4364:function(e,a,t){},"44cd":function(e,a,t){"use strict";t("4364")},"46eb":function(e,a,t){"use strict";t.r(a);var i=t("ca7f"),o=t("102f"),s=t("dc92"),n={name:"AccountAdmin",components:{TableList:i.a,DialogForm:o.a},data(){return{manages:[],tableMap:[{label:"账号",key:"id"},{label:"密码",key:"password"},{label:"权限码",key:"code"}],total:0,searchForm:{id:"",code:""},searchFormMap:[{label:"账号",type:"input",key:"id"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],show:!1,mode:"add",formMap:[{label:"账号",key:"id",type:"input",editDisabled:!0},{label:"密码",key:"password",type:"input"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],rule:{id:[{validator:Object(s.b)(["isNoEmpty::必填项","minLength:5::长度小于5","maxLength:20::长度大于20","isEmail::请输入邮箱"]),trigger:"blur"}],password:[{validator:Object(s.b)(["isNoEmpty::必填项","minLength:5::长度小于5","maxLength:50::长度大于50"]),trigger:"blur"}]},form:{id:"",password:"",code:0},pageNo:1,pageSize:10}},mounted(){this.queryManage()},methods:{queryManage(){let e=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findManageByPage(e,{notify:!1}).then(e=>{this.manages=e.data.list,this.total=e.data.total,this.cancel()})},updatePagination(e,a){this.pageNo=e,this.pageSize=a},removeManage(e,a,t,i){"admin@qq.com"!==a.id?this.API.removeManage({_id:a._id}).then(e=>{this.queryManage()}):this.$tips("warning","admin@qq.com 管理员，不允许被删除！","top-right",1200)},addManage(){this.show=!0,this.mode="add"},editManage(e,a){this.show=!0,this.mode="edit",this.$nextTick(()=>{this.form=Object.assign(this.form,a)})},paginationChange(e,a){this.queryManage()},save(){"edit"===this.mode?this.API.updateManage(this.form).then(e=>{this.queryManage()}):"add"===this.mode&&(delete this.form._id,delete this.form._v,this.API.addManage(this.form).then(e=>{this.queryManage()}))},cancel(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1}}},r=(t("1ddf"),t("2877")),l=Object(r.a)(n,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"account-admin"},[a("TableList",{attrs:{tableData:e.manages,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,showAdd:!0,total:e.total},on:{"update:formData":function(a){e.searchForm=a},"update:form-data":function(a){e.searchForm=a},edit:e.editManage,add:e.addManage,remove:e.removeManage,search:e.queryManage,paginationChange:e.paginationChange,updatePagination:e.updatePagination}}),e.show?a("DialogForm",{ref:"dialogForm",attrs:{width:"460",title:"add"==e.mode?"添加管理员":"编辑管理员",visible:e.show,mode:e.mode,"close-on-click-modal":!1,buttons:{comfirm:"确 认",cancel:"取 消"},formMap:e.formMap,formData:e.form,formRule:e.rule},on:{"update:visible":function(a){e.show=a},"update:formData":function(a){e.form=a},"update:form-data":function(a){e.form=a},comfirmForm:e.save,cancelForm:e.cancel}}):e._e()],1)}),[],!1,null,null,null);a.default=l.exports},"490c":function(e,a,t){"use strict";t("514a")},"514a":function(e,a,t){},"757e":function(e,a,t){"use strict";t("30d8")},a426:function(e,a,t){},af15:function(e,a,t){"use strict";t.r(a);var i=t("ca7f"),o=t("102f"),s=t("dc92"),n={name:"AccountUser",components:{TableList:i.a,DialogForm:o.a},data(){return{users:[],tableMap:[{label:"账号",key:"id"},{label:"密码",key:"password"},{label:"权限码",key:"code"},{label:"昵称",key:"name"},{label:"头像",key:"headImg"},{label:"收录站点",key:"records"},{label:"配置",key:"config"},{label:"是否可用",key:"enabled"}],total:0,searchForm:{id:"",name:"",code:""},searchFormMap:[{label:"账号",type:"input",key:"id"},{label:"昵称",type:"input",key:"name"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],show:!1,mode:"add",formMap:[{label:"账号",key:"id",type:"input",editDisabled:!0},{label:"密码",key:"password",type:"input"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code},{label:"昵称",key:"name",type:"input"},{label:"是否可用",key:"enabled",type:"switch"},{label:"头像",key:"headImg",type:"input"},{label:"收录站点",key:"records",type:"input"},{label:"配置",key:"config",type:"input"}],rule:{id:[{validator:Object(s.b)(["isNoEmpty::必填项","minLength:5::长度小于5","maxLength:50::长度大于50","isEmail::请输入邮箱"]),trigger:"blur"}],password:[{validator:Object(s.b)(["isNoEmpty::必填项","minLength:5::长度小于5"]),trigger:"blur"}],name:[{validator:Object(s.b)(["minLength:2::长度小于2","maxLength:20::长度大于20"]),trigger:"blur"}]},form:{id:"",password:"",code:0,name:"",headImg:"",records:"",config:"",enabled:!0},pageNo:1,pageSize:10}},mounted(){this.queryUser()},methods:{queryUser(){let e=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findUserByPage(e,{notify:!1}).then(e=>{this.users=e.data.list,this.total=e.data.total,this.cancel()})},updatePagination(e,a){this.pageNo=e,this.pageSize=a},removeUser(e,a,t,i){this.API.removeUser({_id:a._id}).then(e=>{this.queryUser()})},addUser(){this.show=!0,this.mode="add"},editUser(e,a){this.show=!0,this.mode="edit",this.$nextTick(()=>{this.form=Object.assign(this.form,a)})},paginationChange(e,a){this.queryUser()},save(){"edit"===this.mode?this.API.updateUser(this.form).then(e=>{this.queryUser()}):"add"===this.mode&&(delete this.form._id,delete this.form._v,this.API.addUser(this.form).then(e=>{this.queryUser()}))},cancel(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1}}},r=(t("757e"),t("2877")),l=Object(r.a)(n,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"account-user"},[a("TableList",{attrs:{tableData:e.users,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,showAdd:!0,total:e.total},on:{"update:formData":function(a){e.searchForm=a},"update:form-data":function(a){e.searchForm=a},edit:e.editUser,add:e.addUser,remove:e.removeUser,search:e.queryUser,paginationChange:e.paginationChange,updatePagination:e.updatePagination}}),e.show?a("DialogForm",{ref:"dialogForm",attrs:{width:"460",title:"add"==e.mode?"添加用户":"编辑用户",visible:e.show,mode:e.mode,"close-on-click-modal":!1,buttons:{comfirm:"确 认",cancel:"取 消"},formMap:e.formMap,formData:e.form,formRule:e.rule},on:{"update:visible":function(a){e.show=a},"update:formData":function(a){e.form=a},"update:form-data":function(a){e.form=a},comfirmForm:e.save,cancelForm:e.cancel}}):e._e()],1)}),[],!1,null,null,null);a.default=l.exports},afc1:function(e,a,t){"use strict";t.r(a);var i=t("ca7f"),o=t("102f"),s=t("dc92"),n={name:"AccountBlacklist",components:{TableList:i.a,DialogForm:o.a},data:()=>({blacklist:[],tableMap:[{label:"IP地址",key:"ip"}],total:0,searchForm:{ip:""},searchFormMap:[{label:"IP地址",type:"input",key:"ip"}],show:!1,mode:"add",formMap:[{label:"IP地址",key:"ip",type:"input",editDisabled:!0}],rule:{ip:[{validator:Object(s.b)(["isNoEmpty::必填项","isIp::请输入正确IP地址"]),trigger:"blur"}]},form:{ip:""},pageNo:1,pageSize:10}),mounted(){this.queryBlacklist()},methods:{queryBlacklist(){let e=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findBlacklistByPage(e,{notify:!1}).then(e=>{this.blacklist=e.data.list,this.total=e.data.total,this.cancel()})},updatePagination(e,a){this.pageNo=e,this.pageSize=a},removeBlacklist(e,a,t,i){this.API.removeBlacklist({ip:a.ip}).then(e=>{this.queryBlacklist()})},addBlacklist(){this.show=!0,this.mode="add"},editBlacklist(e,a){this.show=!0,this.mode="edit",this.$nextTick(()=>{this.form=Object.assign(this.form,a)})},paginationChange(e,a){this.queryBlacklist()},save(){"edit"===this.mode||"add"===this.mode&&this.API.addBlacklist(this.form).then(e=>{this.queryBlacklist()})},cancel(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1}}},r=(t("490c"),t("2877")),l=Object(r.a)(n,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"account-blacklist"},[a("TableList",{attrs:{tableData:e.blacklist,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,showAdd:!0,showEdit:!1,total:e.total},on:{"update:formData":function(a){e.searchForm=a},"update:form-data":function(a){e.searchForm=a},edit:e.editBlacklist,add:e.addBlacklist,remove:e.removeBlacklist,search:e.queryBlacklist,paginationChange:e.paginationChange,updatePagination:e.updatePagination}}),e.show?a("DialogForm",{ref:"dialogForm",attrs:{width:"460",title:"add"==e.mode?"添加黑名单":"编辑黑名单",visible:e.show,mode:e.mode,"close-on-click-modal":!1,buttons:{comfirm:"确 认",cancel:"取 消"},formMap:e.formMap,formData:e.form,formRule:e.rule},on:{"update:visible":function(a){e.show=a},"update:formData":function(a){e.form=a},"update:form-data":function(a){e.form=a},comfirmForm:e.save,cancelForm:e.cancel}}):e._e()],1)}),[],!1,null,null,null);a.default=l.exports}}]);