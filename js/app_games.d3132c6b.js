(self["webpackChunkjdrave_app"]=self["webpackChunkjdrave_app"]||[]).push([[734],{3135:function(e,a,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Games"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"game"},name:{kind:"Name",value:"games_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Game"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"npcs"},name:{kind:"Name",value:"characters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"game_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"is_npc"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"BooleanValue",value:!0}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Character"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"pcs"},name:{kind:"Name",value:"characters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"game_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"is_npc"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"BooleanValue",value:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Character"},directives:[]}]}}]}}],loc:{start:0,end:378}};i.loc.source={body:"#import '@/services/games/Game.fragment.gql'\n#import '@/services/characters/Character.fragment.gql'\n\nquery Games ($gameId: uuid!) {\n  game: games_by_pk(id: $gameId) {\n    ...Game\n  }\n  npcs: characters(where: {game_id: {_eq: $gameId}, is_npc: {_eq: true}}) {\n    ...Character\n  }\n  pcs: characters(where: {game_id: {_eq: $gameId}, is_npc: {_eq: false}}) {\n    ...Character\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function l(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))}function s(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&a.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){s(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){s(e,a)})),e.definitions&&e.definitions.forEach((function(e){s(e,a)}))}i.definitions=i.definitions.concat(l(n(3467).definitions)),i.definitions=i.definitions.concat(l(n(3631).definitions));var d={};function r(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function u(e,a){var n={kind:e.kind,definitions:[r(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var i=d[a]||new Set,t=new Set,l=new Set;i.forEach((function(e){l.add(e)}));while(l.size>0){var s=l;l=new Set,s.forEach((function(e){if(!t.has(e)){t.add(e);var a=d[e]||new Set;a.forEach((function(e){l.add(e)}))}}))}return t.forEach((function(a){var i=r(e,a);i&&n.definitions.push(i)})),n}(function(){i.definitions.forEach((function(e){if(e.name){var a=new Set;s(e,a),d[e.name.value]=a}}))})(),e.exports=i,e.exports.Games=u(i,"Games")},3631:function(e){var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Character"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"characters"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture_url"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"isNpc"},name:{kind:"Name",value:"is_npc"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"inventory"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"playerId"},name:{kind:"Name",value:"player_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bonus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"effect"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"is_equipped"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"kind"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:286}};a.loc.source={body:"fragment Character on characters {\n  id\n  name\n  description\n  features\n  maxHp: max_hp\n  currentHp: current_hp\n  picture_url\n  isNpc: is_npc\n  inventory\n  playerId: player_id\n  status\n  items {\n    id\n    name\n    bonus\n    effect\n    is_equipped\n    quantity\n    status\n    kind\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function l(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var l=i[a]||new Set,s=new Set,d=new Set;l.forEach((function(e){d.add(e)}));while(d.size>0){var r=d;d=new Set,r.forEach((function(e){if(!s.has(e)){s.add(e);var a=i[e]||new Set;a.forEach((function(e){d.add(e)}))}}))}return s.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.Character=l(a,"Character")},1963:function(e,a,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateGame"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"game"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"games_set_input"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_games_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk_columns"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"Variable",name:{kind:"Name",value:"game"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Game"},directives:[]}]}}]}}],loc:{start:0,end:183}};i.loc.source={body:"#import '@/services/games/Game.fragment.gql'\n\nmutation UpdateGame ($id: uuid!, $game: games_set_input!) {\n  update_games_by_pk(pk_columns: {id: $id}, _set: $game) {\n    ...Game\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function l(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var a=e.name.value;return!t[a]&&(t[a]=!0,!0)}))}function s(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&a.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){s(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){s(e,a)})),e.definitions&&e.definitions.forEach((function(e){s(e,a)}))}i.definitions=i.definitions.concat(l(n(3467).definitions));var d={};function r(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function u(e,a){var n={kind:e.kind,definitions:[r(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var i=d[a]||new Set,t=new Set,l=new Set;i.forEach((function(e){l.add(e)}));while(l.size>0){var s=l;l=new Set,s.forEach((function(e){if(!t.has(e)){t.add(e);var a=d[e]||new Set;a.forEach((function(e){l.add(e)}))}}))}return t.forEach((function(a){var i=r(e,a);i&&n.definitions.push(i)})),n}(function(){i.definitions.forEach((function(e){if(e.name){var a=new Set;s(e,a),d[e.name.value]=a}}))})(),e.exports=i,e.exports.UpdateGame=u(i,"UpdateGame")},1258:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return q}});n(2801),n(1295);var i=n(6252),t=n(2262),l=n(3577),s=n(3258),d=n(4526),r=n(4356),u=n(9150),o=n(9316),c=n(3135),m=n.n(c),p=n(1963),v=n.n(p),f=n(4628);const k={key:0},g={class:"flex gap-4 flex-wrap"},_={class:"flex-none max-w-[300px] w-full flex flex-col gap-2 items-center"},b=["src"],w={class:"flex-1 flex flex-col gap-4"},h={class:"flex gap-4 flex-wrap"},N={class:"flex-1"},y={class:"mt-4 flex justify-end"},x={class:"mt-4 flex items-start gap-x-4"},S={class:"flex justify-between items-center gap-x-4 mb-4"},V={class:"font-bold text-xl"},F={class:"flex flex-col gap-2"},D=["src"],j={class:"flex justify-between items-center gap-x-4 mb-4"},$={class:"font-bold text-xl"},C={class:"flex flex-col gap-2"},U=["src"];var z=(0,i.aZ)({__name:"GamePage",props:{gameId:{}},setup(e){const a=e,{t:n}=(0,u.QT)(),{onResult:c,loading:p}=(0,o.aM)(m(),(()=>({gameId:a.gameId}))),z=(0,t.iH)(void 0),O=(0,i.Fl)((()=>Object.entries(f.o).sort(((e,a)=>e[0].localeCompare(a[0]))).reduce(((e,[a,i])=>(e[i]=n(`common.statuses.${i}`),e)),{}))),q=(0,t.iH)([]),E=(0,t.iH)([]);c((e=>{e.data&&(z.value=structuredClone(e.data.game),q.value=structuredClone(e.data.npcs),E.value=structuredClone(e.data.pcs))}));const{uploadImage:I}=(0,r.Rg)(),G=(0,t.iH)(null),W=()=>{G.value?.click()},B=async e=>{const a=e.target.files?.[0];if(a&&z.value){const{url:e}=await I(a,r.nx.Games);z.value.picture_url=e}},H=()=>{T()},{mutate:T,loading:Z}=(0,o.Db)(v(),(()=>{if(z.value){const{id:e,title:a,description:n,status:i,picture_url:t}=z.value;return{variables:{id:e,game:{title:a,description:n,status:i,picture_url:t}}}}return{}}));return(e,a)=>{const n=(0,i.up)("BaseButton"),r=(0,i.up)("BaseInput"),u=(0,i.up)("BaseSelect"),o=(0,i.up)("BaseBadge"),c=(0,i.up)("BaseTextarea");return(0,t.SU)(p)?((0,i.wg)(),(0,i.iD)("div",k,"Chargement...")):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[z.value?((0,i.wg)(),(0,i.j4)(s.Z,{key:0},{default:(0,i.w5)((()=>[(0,i._)("div",g,[(0,i._)("div",_,[(0,i._)("img",{src:z.value.picture_url,class:"h-[300px] w-full rounded-lg bg-zinc-300 object-cover object-center"},null,8,b),(0,i.Wm)(n,{class:"secondary",onClick:W},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("app.game_page.update_image_action")),1)])),_:1}),(0,i._)("input",{ref_key:"pictureInputRef",ref:G,class:"hidden",type:"file",onChange:B},null,544)]),(0,i._)("div",w,[(0,i._)("div",h,[(0,i.Wm)(r,{class:"flex-1",label:e.$t("app.game_page.title"),modelValue:z.value.title,"onUpdate:modelValue":a[0]||(a[0]=e=>z.value.title=e)},null,8,["label","modelValue"]),(0,i.Wm)(u,{class:"flex-1",label:e.$t("app.game_page.status"),options:O.value,modelValue:z.value.status,"onUpdate:modelValue":a[1]||(a[1]=e=>z.value.status=e)},null,8,["label","options","modelValue"]),(0,i._)("div",N,[(0,i._)("p",null,(0,l.zw)(e.$t("app.game_page.dungeon_master")),1),(0,i.Wm)(o,{class:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(z.value.dungeon_master.username),1)])),_:1})])]),(0,i.Wm)(c,{label:e.$t("app.game_page.description"),modelValue:z.value.description,"onUpdate:modelValue":a[2]||(a[2]=e=>z.value.description=e)},null,8,["label","modelValue"])])]),(0,i._)("div",y,[(0,i.Wm)(n,{class:"primary","is-loading":(0,t.SU)(Z),onClick:H},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("app.game_page.save_action")),1)])),_:1},8,["is-loading"])])])),_:1})):(0,i.kq)("",!0),(0,i._)("div",x,[(0,i.Wm)(s.Z,{class:"flex-1"},{default:(0,i.w5)((()=>[(0,i._)("div",S,[(0,i._)("p",V,(0,l.zw)(e.$t("app.game_page.pcs.title")),1),(0,i.Wm)(n,{class:"primary small"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,t.SU)(d.Z),{class:"w-4 h-4"}),(0,i.Uk)(" "+(0,l.zw)(e.$t("app.game_page.pcs.add_action")),1)])),_:1})]),(0,i._)("ul",F,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(E.value,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id,class:"rounded-lg border border-gray-200 p-2 flex items-center gap-x-2 font-semibold"},[(0,i._)("img",{src:e.picture_url,class:"w-20 h-20 rounded object-cover object-center bg-zinc-300"},null,8,D),(0,i.Uk)(" "+(0,l.zw)(e.name),1)])))),128))])])),_:1}),(0,i.Wm)(s.Z,{class:"flex-1"},{default:(0,i.w5)((()=>[(0,i._)("div",j,[(0,i._)("p",$,(0,l.zw)(e.$t("app.game_page.npcs.title")),1),(0,i.Wm)(n,{class:"primary small"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,t.SU)(d.Z),{class:"w-4 h-4"}),(0,i.Uk)(" "+(0,l.zw)(e.$t("app.game_page.npcs.add_action")),1)])),_:1})]),(0,i._)("ul",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(q.value,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id,class:"rounded-lg border border-gray-200 p-2 flex items-center gap-x-2 font-semibold"},[(0,i._)("img",{src:e.picture_url,class:"w-20 h-20 rounded object-cover object-center bg-zinc-300"},null,8,U),(0,i.Uk)(" "+(0,l.zw)(e.name),1)])))),128))])])),_:1})])],64))}}});const O=z;var q=O},4005:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return r}});var i=n(6252);function t(e,a){const n=(0,i.up)("RouterView");return(0,i.wg)(),(0,i.j4)(n)}var l=n(3744);const s={},d=(0,l.Z)(s,[["render",t]]);var r=d},4663:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return C}});var i=n(6252),t=n(3577),l=n(2262),s=n(2450),d=n(9316),r=n(5802),u=n.n(r),o=n(4628),c=n(9150);const m=e=>((0,i.dD)("data-v-d7309bfa"),e=e(),(0,i.Cn)(),e),p={class:"mb-5"},v={class:"font-bold text-2xl mb-4"},f={class:"flex justify-between items-center gap-x-2"},k={class:"flex gap-x-4"},g={class:"-mx-9"},_={class:"list bg-gray-100 text-gray-600 uppercase font-semibold text-sm"},b={class:""},w={class:""},h={class:""},N={class:""},y=m((()=>(0,i._)("span",{class:""},null,-1))),x={class:"list border-b border-gray-200"},S={class:"font-semibold"},V={class:"text-sm text-dark-light truncate"},F={class:"ml-auto"};var D=(0,i.aZ)({__name:"GamesList",setup(e){const{t:a}=(0,c.QT)(),n=(0,l.iH)(""),r=(0,l.iH)({dungeonMasterId:null,status:null}),m=(0,l.iH)({dungeonMasters:{},statuses:Object.entries(o.o).sort(((e,a)=>e[0].localeCompare(a[0]))).reduce(((e,[n,i])=>(e[i]=a(`common.statuses.${i}`),e)),{})}),{result:D,onResult:j}=(0,d.aM)(u(),r.value),$=(0,i.Fl)((()=>D.value?.games??[]));return j((({data:e})=>{m.value.dungeonMasters=[...e.dungeon_masters].sort(((e,a)=>e.username.localeCompare(a.username))).reduce(((e,a)=>(e[a.id]=a.username,e)),{})})),(e,a)=>{const d=(0,i.up)("BaseInput"),u=(0,i.up)("BaseDropdown"),o=(0,i.up)("BaseBadge"),c=(0,i.up)("BaseButton"),D=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",p,[(0,i._)("h1",v,(0,t.zw)(e.$t("app.games_list.title")),1),(0,i._)("div",f,[(0,i.Wm)(d,{class:"w-full max-w-[400px]",type:"text",placeholder:e.$t("app.games_list.search_placeholder"),modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e)},null,8,["placeholder","modelValue"]),(0,i._)("ul",k,[(0,i._)("li",null,[(0,i.Wm)(u,{placeholder:e.$t("app.games_list.filters.dungeon_master"),options:m.value.dungeonMasters,modelValue:r.value.dungeonMasterId,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value.dungeonMasterId=e)},null,8,["placeholder","options","modelValue"])]),(0,i._)("li",null,[(0,i.Wm)(u,{placeholder:e.$t("app.games_list.filters.status"),options:m.value.statuses,modelValue:r.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>r.value.status=e)},null,8,["placeholder","options","modelValue"])])])])]),(0,i._)("ul",g,[(0,i._)("li",_,[(0,i._)("span",b,(0,t.zw)(e.$t("app.games_list.list.header.title")),1),(0,i._)("span",w,(0,t.zw)(e.$t("app.games_list.list.header.dungeon_master")),1),(0,i._)("span",h,(0,t.zw)(e.$t("app.games_list.list.header.last_game")),1),(0,i._)("span",N,(0,t.zw)(e.$t("app.games_list.list.header.status")),1),y]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)($.value,(a=>((0,i.wg)(),(0,i.j4)(D,{key:a.id,custom:"",to:{name:"game_page",params:{gameId:a.id}}},{default:(0,i.w5)((({navigate:n})=>[(0,i._)("li",x,[(0,i._)("div",null,[(0,i._)("p",S,(0,t.zw)(a.title),1),(0,i._)("p",V,(0,t.zw)(a.description),1)]),(0,i._)("span",null,(0,t.zw)(a.dungeon_master.username),1),(0,i._)("span",null,(0,t.zw)(a.updated_at&&e.$d(new Date(a.updated_at))),1),(0,i.Wm)(o,{class:"secondary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(e.$t(`common.statuses.${a.status}`)),1)])),_:2},1024),(0,i._)("div",F,[(0,i.Wm)(c,{class:"primary small",onClick:n},{default:(0,i.w5)((()=>[(0,i.Wm)((0,l.SU)(s.Z),{class:"w-4 h-4"}),(0,i.Uk)(" "+(0,t.zw)(e.$t("app.games_list.list.edit_action")),1)])),_:2},1032,["onClick"])])])])),_:2},1032,["to"])))),128))])],64)}}}),j=n(3744);const $=(0,j.Z)(D,[["__scopeId","data-v-d7309bfa"]]);var C=$},3085:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return p}});n(7658);var i=n(6252),t=n(2262),l=n(9316),s=n(2201),d=n(7106),r=n.n(d),u=n(9298);const o=(0,i._)("header",{class:"flex justify-between align-middle mb-8"},[(0,i._)("h1",{class:"page-title"},[(0,i.Uk)("Création de "),(0,i._)("span",null,"campagne")])],-1);var c=(0,i.aZ)({__name:"GameCreation",setup(e){const a=(0,t.qj)({title:"",description:""}),{mutate:n,onDone:d}=(0,l.Db)(r(),(()=>({variables:{...a},update:(e,{data:{createGame:a}})=>{const n=e.readQuery({query:u.s});n.characters.push(a),e.writeQuery({query:u.s,data:n})}}))),c=(0,s.tv)();return d((({data:e})=>{c.replace({name:"game",params:{gameId:e.game.id}})})),(e,l)=>{const s=(0,i.up)("BaseInput"),d=(0,i.up)("BaseTextarea"),r=(0,i.up)("BaseButton");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("div",null,[(0,i.Wm)(s,{class:"mb-6",label:"Titre",modelValue:a.title,"onUpdate:modelValue":l[0]||(l[0]=e=>a.title=e)},null,8,["modelValue"]),(0,i.Wm)(d,{class:"col-span-full mb-6",label:"Description",modelValue:a.description,"onUpdate:modelValue":l[1]||(l[1]=e=>a.description=e)},null,8,["modelValue"]),(0,i.Wm)(r,{class:"primary circled",onClick:(0,t.SU)(n)},{default:(0,i.w5)((()=>[(0,i.Uk)("Valider")])),_:1},8,["onClick"])])],64)}}});const m=c;var p=m},2450:function(e,a,n){"use strict";n.d(a,{Z:function(){return t}});var i=n(6252);function t(e,a){return(0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i._)("path",{d:"M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"})])}}}]);
//# sourceMappingURL=app_games.d3132c6b.js.map