(self["webpackChunkjdrave_app"]=self["webpackChunkjdrave_app"]||[]).push([[475],{3658:function(e,n,a){"use strict";var i=a(9781),t=a(3157),l=TypeError,d=Object.getOwnPropertyDescriptor,r=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=r?function(e,n){if(t(e)&&!d(e,"length").writable)throw l("Cannot set read only .length");return e.length=n}:function(e,n){return e.length=n}},7207:function(e){var n=TypeError,a=9007199254740991;e.exports=function(e){if(e>a)throw n("Maximum allowed index exceeded");return e}},3157:function(e,n,a){var i=a(4326);e.exports=Array.isArray||function(e){return"Array"==i(e)}},7658:function(e,n,a){"use strict";var i=a(2109),t=a(7908),l=a(6244),d=a(3658),r=a(7207),s=a(7293),o=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();i({target:"Array",proto:!0,arity:1,forced:o||u},{push:function(e){var n=t(this),a=l(n),i=arguments.length;r(a+i);for(var s=0;s<i;s++)n[a]=arguments[s],a++;return d(n,a),a}})},5802:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Games"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"dungeonMasterId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},defaultValue:{kind:"NullValue"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"status"}},type:{kind:"NamedType",name:{kind:"Name",value:"statuses_enum"}},defaultValue:{kind:"NullValue"},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"games"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"dungeon_master_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"dungeonMasterId"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"status"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dungeon_master"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"dungeon_masters"},name:{kind:"Name",value:"users"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"mastered_games_aggregate"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"count"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"predicate"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_gte"},value:{kind:"IntValue",value:"1"}}]}}]}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:427}};n.loc.source={body:"query Games ($dungeonMasterId: String = null, $status: statuses_enum = null) {\n  games(where: { dungeon_master_id: { _eq: $dungeonMasterId }, status: { _eq: $status } }) {\n    id\n    title\n    description\n    status\n    created_at\n    updated_at\n    dungeon_master {\n      id\n      username\n    }\n  }\n  dungeon_masters: users(where: { mastered_games_aggregate: { count: { predicate: {_gte: 1} } } }) {\n    id\n    username\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function l(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var l=i[n]||new Set,d=new Set,r=new Set;l.forEach((function(e){r.add(e)}));while(r.size>0){var s=r;r=new Set,s.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){r.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.Games=l(n,"Games")},6696:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Objects"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"kind"}},type:{kind:"NamedType",name:{kind:"Name",value:"object_kind_enum"}},defaultValue:{kind:"NullValue"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"status"}},type:{kind:"NamedType",name:{kind:"Name",value:"statuses_enum"}},defaultValue:{kind:"NullValue"},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"objects"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"kind"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"kind"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"status"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"kind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"games"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"game"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:282}};n.loc.source={body:"query Objects ($kind: object_kind_enum = null, $status: statuses_enum = null) {\n  objects(where: {kind: {_eq: $kind}, status: {_eq: $status}}) {\n    id\n    name\n    kind\n    picture_url\n    status\n    updated_at\n    games {\n      game {\n        id\n        title\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function l(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var l=i[n]||new Set,d=new Set,r=new Set;l.forEach((function(e){r.add(e)}));while(r.size>0){var s=r;r=new Set,s.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){r.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.Objects=l(n,"Objects")},7106:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateGame"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"description"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"insert_games_one"},arguments:[{kind:"Argument",name:{kind:"Name",value:"object"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"ObjectField",name:{kind:"Name",value:"description"},value:{kind:"Variable",name:{kind:"Name",value:"description"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dungeon_master"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:265}};n.loc.source={body:"mutation CreateGame($description: String, $title: String!) {\n  insert_games_one(object: {title: $title, description: $description}) {\n    id\n    title\n    description\n    status\n    created_at\n    updated_at\n    dungeon_master {\n      id\n      username\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function l(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var l=i[n]||new Set,d=new Set,r=new Set;l.forEach((function(e){r.add(e)}));while(r.size>0){var s=r;r=new Set,s.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){r.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.CreateGame=l(n,"CreateGame")},9746:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateObject"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"object"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"objects_insert_input"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"insert_objects_one"},arguments:[{kind:"Argument",name:{kind:"Name",value:"object"},value:{kind:"Variable",name:{kind:"Name",value:"object"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"kind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"can_be_equipped"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"games"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"game"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:284}};n.loc.source={body:"mutation CreateObject($object: objects_insert_input!) {\n  insert_objects_one(object: $object) {\n    id\n    kind\n    name\n    picture_url\n    status\n    updated_at\n    created_at\n    description\n    can_be_equipped\n    games {\n      game {\n        id\n        title\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function l(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var l=i[n]||new Set,d=new Set,r=new Set;l.forEach((function(e){r.add(e)}));while(r.size>0){var s=r;r=new Set,s.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){r.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.CreateObject=l(n,"CreateObject")},4356:function(e,n,a){"use strict";a.d(n,{I:function(){return i},R:function(){return t}});const i=async e=>{const n=new FormData;n.append("file",e),n.append("upload_preset","oadh3tc2"),n.append("folder","characters");const a=await fetch("https://api.cloudinary.com/v1_1/jdrave/image/upload",{method:"POST",body:n}),i=await(a?.json());return{url:i.url}},t=()=>({uploadImage:i})},5050:function(e,n,a){"use strict";var i;a.d(n,{m:function(){return i}}),function(e){e["Weapon"]="weapon",e["Armor"]="armor",e["Usable"]="usable",e["Edible"]="edible",e["Special"]="special"}(i||(i={}))},4628:function(e,n,a){"use strict";var i;a.d(n,{o:function(){return i}}),function(e){e["Draft"]="draft",e["Published"]="published",e["Archived"]="archived"}(i||(i={}))},7096:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return pe}});var i=a(6252),t=a(3577),l=a(2262);a(7658);function d(e,n){return(0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i._)("path",{d:"M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z"})])}function r(e,n){return(0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i._)("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})])}function s(e,n){return(0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i._)("path",{"fill-rule":"evenodd",d:"M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z","clip-rule":"evenodd"})])}var o,u=a(9150);(function(e){e["Character"]="character",e["Game"]="game",e["Object"]="object"})(o||(o={}));const c={class:"flex items-center gap-x-4"},m=["onClick"];var v=(0,i.aZ)({__name:"EntityChoiceStep",props:{selectedEntity:{}},emits:["entity-select"],setup(e){const{t:n}=(0,u.QT)(),a=[{value:o.Game,name:n("app.create_modal.entities.game"),icon:d},{value:o.Character,name:n("app.create_modal.entities.character"),icon:r},{value:o.Object,name:n("app.create_modal.entities.object"),icon:s}];return(e,n)=>((0,i.wg)(),(0,i.iD)("ul",c,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(a,(n=>(0,i._)("li",{key:n.value,class:"flex-1"},[(0,i._)("div",{class:(0,t.C_)(["flex flex-col items-center gap-y-6 px-4 py-5 rounded-lg border border-gray-200 text-primary hover:bg-gray-50 transition-colors cursor-pointer",{"border-primary bg-primary-light font-semibold":e.selectedEntity===n.value}]),onClick:a=>e.$emit("entity-select",n.value)},[((0,i.wg)(),(0,i.j4)((0,i.LL)(n.icon),{class:"w-8 h-8"})),(0,i._)("p",null,(0,t.zw)(n.name),1)],10,m)]))),64))]))}});const p=v;var f=p,k=a(9316),g=a(7106),b=a.n(g),h=a(5802),_=a.n(h);const w={class:"flex flex-col gap-y-4"},y={class:"flex justify-between items-center mt-6 -mx-8 px-4"},N={inheritAttrs:!1};var S=(0,i.aZ)({...N,__name:"GameStep",emits:["cancel","entity-created"],setup(e,{emit:n}){const a=(0,l.iH)({title:"",description:""}),d=()=>{r()},{mutate:r,onDone:s}=(0,k.Db)(b(),(()=>({variables:a.value,update:(e,{data:{insert_games_one:n}})=>{let a=e.readQuery({query:_()});a={...a,games:[...a.games,n]},e.writeQuery({query:_(),data:a})}})));return s((({data:e})=>{n("entity-created")})),(e,n)=>{const l=(0,i.up)("BaseInput"),r=(0,i.up)("BaseTextarea"),s=(0,i.up)("BaseButton");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",w,[(0,i.Wm)(l,{label:e.$t("app.create_modal.steps.game.fields.title"),modelValue:a.value.title,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value.title=e)},null,8,["label","modelValue"]),(0,i.Wm)(r,{label:e.$t("app.create_modal.steps.game.fields.description"),modelValue:a.value.description,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value.description=e)},null,8,["label","modelValue"])]),(0,i._)("div",y,[(0,i.Wm)(s,{onClick:n[2]||(n[2]=n=>e.$emit("cancel"))},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(e.$t("app.create_modal.steps.game.actions.cancel")),1)])),_:1}),(0,i.Wm)(s,{class:"primary",onClick:d},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(e.$t("app.create_modal.steps.game.actions.validate")),1)])),_:1})])],64)}}});const j=S;var x=j,V=a(4356),F=a(9746),D=a.n(F),O=a(6696),A=a.n(O),C=a(5050),E=a(4628);const z={class:"flex flex-col gap-y-4"},$={class:"flex flex-col gap-y-2"},q=["src"],W={key:1,class:"rounded-lg w-40 h-40 object-cover bg-gray-50 grid place-content-center"},M={class:"flex justify-between items-center mt-6 -mx-8 px-4"},B={inheritAttrs:!1};var T=(0,i.aZ)({...B,__name:"ObjectStep",emits:["cancel","entity-created"],setup(e,{emit:n}){const{tm:a}=(0,u.QT)(),d=a("common.object_kinds"),r=a("common.statuses"),o=(0,l.iH)({name:"",description:"",kind:C.m.Usable,can_be_equipped:!1,picture_url:null,status:E.o.Draft}),{uploadImage:c}=(0,V.R)(),m=(0,l.iH)(null),v=()=>{m.value?.click()},p=async e=>{const n=e.target.files?.[0];if(n){const{url:e}=await c(n);o.value.picture_url=e}},f=()=>{g()},{mutate:g,onDone:b,loading:h}=(0,k.Db)(D(),(()=>({variables:{object:o.value},update:(e,{data:n})=>{let a=e.readQuery({query:A()});a&&n&&(a={...a,objects:[...a.objects,n.insert_objects_one]}),e.writeQuery({query:A(),data:a})}})));return b((({data:e})=>{n("entity-created",e?.insert_objects_one.id)})),(e,n)=>{const a=(0,i.up)("BaseInput"),u=(0,i.up)("BaseTextarea"),c=(0,i.up)("BaseSelect"),k=(0,i.up)("BaseCheckbox"),g=(0,i.up)("BaseButton");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",z,[(0,i.Wm)(a,{label:e.$t("app.create_modal.steps.object.fields.name"),modelValue:o.value.name,"onUpdate:modelValue":n[0]||(n[0]=e=>o.value.name=e)},null,8,["label","modelValue"]),(0,i.Wm)(u,{label:e.$t("app.create_modal.steps.object.fields.description"),modelValue:o.value.description,"onUpdate:modelValue":n[1]||(n[1]=e=>o.value.description=e)},null,8,["label","modelValue"]),(0,i.Wm)(c,{label:e.$t("app.create_modal.steps.object.fields.kind"),options:(0,l.SU)(d),modelValue:o.value.kind,"onUpdate:modelValue":n[2]||(n[2]=e=>o.value.kind=e)},null,8,["label","options","modelValue"]),(0,i.Wm)(k,{label:e.$t("app.create_modal.steps.object.fields.can_be_equipped"),modelValue:o.value.can_be_equipped,"onUpdate:modelValue":n[3]||(n[3]=e=>o.value.can_be_equipped=e)},null,8,["label","modelValue"]),(0,i.Wm)(c,{label:e.$t("app.create_modal.steps.object.fields.status"),options:(0,l.SU)(r),modelValue:o.value.status,"onUpdate:modelValue":n[4]||(n[4]=e=>o.value.status=e)},null,8,["label","options","modelValue"]),(0,i._)("div",$,[(0,i._)("p",null,(0,t.zw)(e.$t("app.create_modal.steps.object.fields.picture_url")),1),o.value.picture_url?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"rounded-lg w-40 h-40 object-cover bg-gray-100",src:o.value.picture_url},null,8,q)):((0,i.wg)(),(0,i.iD)("div",W,[(0,i.Wm)((0,l.SU)(s),{class:"w-32 h-32"})])),(0,i._)("div",null,[(0,i.Wm)(g,{class:"secondary",onClick:v},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(e.$t("app.create_modal.steps.object.fields.picture_upload_action")),1)])),_:1})]),(0,i._)("input",{ref_key:"pictureInputRef",ref:m,class:"hidden",type:"file",onChange:p},null,544)])]),(0,i._)("div",M,[(0,i.Wm)(g,{onClick:n[5]||(n[5]=n=>e.$emit("cancel"))},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(e.$t("app.create_modal.steps.object.actions.cancel")),1)])),_:1}),(0,i.Wm)(g,{class:"primary","is-loading":(0,l.SU)(h),onClick:f},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(e.$t("app.create_modal.steps.object.actions.validate")),1)])),_:1},8,["is-loading"])])],64)}}});const U=T;var G=U,L=a(2201);const I={class:"text-center text-xl font-semibold mb-10"};var H=(0,i.aZ)({__name:"CreationModal",props:{isVisible:{type:Boolean}},emits:["close"],setup(e,{emit:n}){const{t:a}=(0,u.QT)(),d=(0,l.iH)(null),r=(0,l.iH)(0),s=(0,i.Fl)((()=>{const e=[{title:a("app.create_modal.title"),component:f}];return d.value===o.Game&&e.push({title:a("app.create_modal.steps.game.title"),component:x}),d.value===o.Object&&e.push({title:a("app.create_modal.steps.object.title"),component:G}),e})),c=e=>{d.value=d.value===e?null:e},m=()=>{d.value&&r.value++},v=()=>{r.value=0,d.value=null,n("close")},p=()=>{r.value=0},k=(0,L.tv)(),g=e=>{if(e)switch(d.value){case o.Game:break;case o.Object:k.push({name:"object_page",params:{objectId:e}});break;default:break}v()};return(e,n)=>{const a=(0,i.up)("BaseModal");return(0,i.wg)(),(0,i.j4)(a,{"is-visible":e.isVisible,"modal-class":"pt-8","validate-text":e.$t("app.create_modal.validate_action"),"hide-actions":0!==r.value,"hide-cancel":0===r.value,onClose:v,onValidate:m},{default:(0,i.w5)((()=>[(0,i._)("h1",I,(0,t.zw)(s.value[r.value].title),1),((0,i.wg)(),(0,i.j4)((0,i.LL)(s.value[r.value].component),{"selected-entity":d.value,onCancel:p,onEntitySelect:c,onEntityCreated:g},null,40,["selected-entity"]))])),_:1},8,["is-visible","validate-text","hide-actions","hide-cancel"])}}});const Q=H;var Z=Q,P=a(9380),Y=(0,i.aZ)({__name:"SidebarItem",props:{name:{},icon:{type:[Function,Object]},isActive:{type:Boolean}},setup(e){return(e,n)=>((0,i.wg)(),(0,i.iD)("li",{class:(0,t.C_)(["flex items-center gap-x-3 p-2 rounded-lg font-medium cursor-pointer hover:text-primary group transition-colors",{"bg-secondary-light":e.isActive}])},[((0,i.wg)(),(0,i.j4)((0,i.LL)(e.icon),{class:"w-6 h-6 text-gray-700 group-hover:text-inherit transition-colors"})),(0,i.Uk)(" "+(0,t.zw)(e.$t(`app.nav.${e.name}`)),1)],2))}});const R=Y;var K=R;function J(e,n){return(0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i._)("path",{"fill-rule":"evenodd",d:"M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z","clip-rule":"evenodd"})])}function X(e,n){return(0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i._)("path",{d:"M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"})])}function ee(e,n){return(0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i._)("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z","clip-rule":"evenodd"})])}var ne=a(4526);function ae(e,n){return(0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i._)("path",{"fill-rule":"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z","clip-rule":"evenodd"}),(0,i._)("path",{"fill-rule":"evenodd",d:"M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z","clip-rule":"evenodd"})])}const ie={class:"bg-white pt-5 flex flex-col border-r border-gray-200 items-center gap-7"},te=["onClick"],le={class:"w-full flex flex-col gap-4 mb-auto px-3"},de={class:"w-full flex flex-col gap-4 py-6 px-3 border-t border-gray-200"};var re=(0,i.aZ)({__name:"AppSidebar",setup(e){const n=[{name:"dashboard",icon:J},{name:"campaigns",icon:d},{name:"characters",icon:X},{name:"objects_list",icon:s}],a=[{name:"profile",icon:ee}],r=(0,l.iH)(!1),o=()=>{r.value=!0},u=()=>{};return(e,d)=>{const s=(0,i.up)("RouterLink"),c=(0,i.up)("BaseButton");return(0,i.wg)(),(0,i.iD)("nav",ie,[(0,i.Wm)(s,{custom:"",to:{name:"app"}},{default:(0,i.w5)((({navigate:e})=>[(0,i._)("div",{class:"text-dark",onClick:e},[(0,i.Wm)(P.Z,{class:"w-[200px] h-[46px]"})],8,te)])),_:1}),(0,i.Wm)(c,{class:"primary circled !px-12",onClick:o},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(e.$t("app.nav.create_action"))+" ",1),(0,i.Wm)((0,l.SU)(ne.Z),{class:"w-5 h-5"})])),_:1}),(0,i.Wm)(Z,{"is-visible":r.value,onClose:d[0]||(d[0]=e=>r.value=!1)},null,8,["is-visible"]),(0,i._)("ul",le,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(n,(({name:e,icon:n})=>(0,i.Wm)(s,{key:e,custom:"",to:{name:e}},{default:(0,i.w5)((({navigate:a,isActive:t})=>[(0,i.Wm)(K,{name:e,icon:n,"is-active":t,onClick:a},null,8,["name","icon","is-active","onClick"])])),_:2},1032,["to"]))),64))]),(0,i._)("ul",de,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(a,(({name:e,icon:n})=>(0,i.Wm)(s,{key:e,custom:"",to:{name:e}},{default:(0,i.w5)((({navigate:a,isActive:t})=>[(0,i.Wm)(K,{name:e,icon:n,"is-active":t,onClick:a},null,8,["name","icon","is-active","onClick"])])),_:2},1032,["to"]))),64)),(0,i.Wm)(K,{name:"logout",icon:(0,l.SU)(ae),onClick:u},null,8,["icon"])])])}}});const se=re;var oe=se;const ue={class:"app-layout grid min-h-screen font-app"};var ce=(0,i.aZ)({__name:"AppLayout",setup(e){return(e,n)=>((0,i.wg)(),(0,i.iD)("div",ue,[(0,i.Wm)(oe),(0,i._)("section",{class:(0,t.C_)(["px-9 py-8",{"bg-white":e.$route.meta.isLayoutList}])},[(0,i.WI)(e.$slots,"default")],2)]))}}),me=a(3744);const ve=(0,me.Z)(ce,[["__scopeId","data-v-c536c614"]]);var pe=ve},4526:function(e,n,a){"use strict";a.d(n,{Z:function(){return t}});var i=a(6252);function t(e,n){return(0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,i._)("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})])}}}]);
//# sourceMappingURL=app_layout.e5bd8217.js.map