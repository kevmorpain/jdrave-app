(self["webpackChunkjdrave_app"]=self["webpackChunkjdrave_app"]||[]).push([[824],{3131:function(e){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"LastDrafts"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"last_drafts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"entity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"kind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture_url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:109}};t.loc.source={body:"query LastDrafts {\n  last_drafts {\n    id\n    title\n    description\n    entity\n    kind\n    picture_url\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,t)})),e.definitions&&e.definitions.forEach((function(e){n(e,t)}))}var i={};function a(e,t){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==t)return i}}function r(e,t){var n={kind:e.kind,definitions:[a(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[t]||new Set,s=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var d=l;l=new Set,d.forEach((function(e){if(!s.has(e)){s.add(e);var t=i[e]||new Set;t.forEach((function(e){l.add(e)}))}}))}return s.forEach((function(t){var i=a(e,t);i&&n.definitions.push(i)})),n}(function(){t.definitions.forEach((function(e){if(e.name){var t=new Set;n(e,t),i[e.name.value]=t}}))})(),e.exports=t,e.exports.LastDrafts=r(t,"LastDrafts")},3258:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(6252);const a={class:"bg-white rounded-lg p-5 shadow-sm"};function r(e,t){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.WI)(e.$slots,"default")])}var s=n(3744);const l={},d=(0,s.Z)(l,[["render",r]]);var o=d},9107:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var i=n(6252),a=n(3577),r=n(3258);const s={class:"font-semibold"},l={key:0},d=["src"],o={class:"text-sm text-dark-light line-clamp-3"},u={class:"mt-auto flex flex-wrap gap-2"},c={key:0};var f=(0,i.aZ)({__name:"DraftCard",props:{draftEntity:{},isClickable:{type:Boolean}},setup(e){return(e,t)=>{const n=(0,i.up)("BaseBadge");return(0,i.wg)(),(0,i.iD)("div",{class:(0,a.C_)(["border border-gray-200 rounded-lg bg-white p-4 flex flex-col gap-y-4",{"hover:bg-gray-50 transition-colors cursor-pointer":e.isClickable}])},[(0,i._)("p",s,(0,a.zw)(e.draftEntity.title),1),e.draftEntity.picture_url?((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("img",{class:"w-full h-[150px] rounded-lg object-center object-cover",src:e.draftEntity.picture_url},null,8,d)])):(0,i.kq)("",!0),(0,i._)("p",o,(0,a.zw)(e.draftEntity.description),1),(0,i._)("ul",u,[(0,i._)("li",null,[(0,i.Wm)(n,{class:"secondary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.$t(`entities.${e.draftEntity.entity}`)),1)])),_:1})]),e.draftEntity.kind?((0,i.wg)(),(0,i.iD)("li",c,[(0,i.Wm)(n,{class:"secondary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.$t(`item_kind.${e.draftEntity.kind}`)),1)])),_:1})])):(0,i.kq)("",!0)])],2)}}});const v=f;var m=v,p=n(2262),k=n(9316),g=n(7511),w=n.n(g),_=n(3131),y=n.n(_);const h={class:"font-bold text-2xl"},b={class:"flex justify-between items-center mb-4"},D={class:"flex gap-x-2 items-center font-bold text-2xl"},x=(0,i._)("p",null,"Pas de partie en cours",-1),E={class:"font-bold text-2xl mb-4"},S={key:0,class:"grid grid-cols-3 gap-x-4"},N={key:1};var z=(0,i.aZ)({__name:"DashboardPage",setup(e){const{result:t}=(0,k.aM)(w()),{result:n}=(0,k.aM)(y()),s=(0,p.iH)(""),l=(0,p.iH)([]);return(0,i.YP)((()=>t.value),(()=>{t.value?.current_user[0]&&(s.value=t.value.current_user[0].username)})),(0,i.YP)((()=>n.value),(()=>{n.value&&(l.value=n.value.last_drafts)})),(e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",null,[(0,i._)("h1",h,(0,a.zw)(e.$t("app.dashboard.title",{name:s.value})),1)]),(0,i.Wm)(r.Z,{class:"mt-4"},{default:(0,i.w5)((()=>[(0,i._)("div",b,[(0,i._)("p",D,(0,a.zw)(e.$t("app.dashboard.online.title"))+" ",1)]),x])),_:1}),(0,i.Wm)(r.Z,{class:"mt-4"},{default:(0,i.w5)((()=>[(0,i._)("p",E,(0,a.zw)(e.$t("app.dashboard.last_drafts.title")),1),l.value.length>0?((0,i.wg)(),(0,i.iD)("div",S,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.value,(e=>((0,i.wg)(),(0,i.j4)(m,{key:e.id,"draft-entity":e,"is-clickable":""},null,8,["draft-entity"])))),128))])):((0,i.wg)(),(0,i.iD)("p",N,"Pas de brouillons"))])),_:1})],64))}});const F=z;var $=F}}]);
//# sourceMappingURL=app_dashboard.3cfd5f58.js.map