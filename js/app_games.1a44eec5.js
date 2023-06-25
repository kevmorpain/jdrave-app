(self["webpackChunkjdrave_app"]=self["webpackChunkjdrave_app"]||[]).push([[734],{7106:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateGame"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"description"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"insert_games_one"},arguments:[{kind:"Argument",name:{kind:"Name",value:"object"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"ObjectField",name:{kind:"Name",value:"description"},value:{kind:"Variable",name:{kind:"Name",value:"description"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dungeon_master"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:265}};n.loc.source={body:"mutation CreateGame($description: String, $title: String!) {\n  insert_games_one(object: {title: $title, description: $description}) {\n    id\n    title\n    description\n    status\n    created_at\n    updated_at\n    dungeon_master {\n      id\n      username\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&n.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,n)})),e.definitions&&e.definitions.forEach((function(e){i(e,n)}))}var a={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function d(e,n){var i={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var d=a[n]||new Set,l=new Set,r=new Set;d.forEach((function(e){r.add(e)}));while(r.size>0){var s=r;r=new Set,s.forEach((function(e){if(!l.has(e)){l.add(e);var n=a[e]||new Set;n.forEach((function(e){r.add(e)}))}}))}return l.forEach((function(n){var a=t(e,n);a&&i.definitions.push(a)})),i}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}}))})(),e.exports=n,e.exports.CreateGame=d(n,"CreateGame")},3085:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return v}});i(7658);var a=i(6252),t=i(2262),d=i(7102),l=i(2201),r=i(7106),s=i.n(r),o=i(9298);const u=(0,a._)("header",{class:"flex justify-between align-middle mb-8"},[(0,a._)("h1",{class:"page-title"},[(0,a.Uk)("Création de "),(0,a._)("span",null,"campagne")])],-1);var m=(0,a.aZ)({__name:"GameCreation",setup(e){const n=(0,t.qj)({title:"",description:""}),{mutate:i,onDone:r}=(0,d.Db)(s(),(()=>({variables:{...n},update:(e,{data:{createGame:n}})=>{const i=e.readQuery({query:o.s});i.characters.push(n),e.writeQuery({query:o.s,data:i})}}))),m=(0,l.tv)();return r((({data:e})=>{m.replace({name:"game",params:{gameId:e.game.id}})})),(e,d)=>{const l=(0,a.up)("BaseInput"),r=(0,a.up)("BaseTextarea"),s=(0,a.up)("BaseButton");return(0,a.wg)(),(0,a.iD)(a.HY,null,[u,(0,a._)("div",null,[(0,a.Wm)(l,{class:"mb-6",label:"Titre",modelValue:n.title,"onUpdate:modelValue":d[0]||(d[0]=e=>n.title=e)},null,8,["modelValue"]),(0,a.Wm)(r,{class:"col-span-full mb-6",label:"Description",modelValue:n.description,"onUpdate:modelValue":d[1]||(d[1]=e=>n.description=e)},null,8,["modelValue"]),(0,a.Wm)(s,{class:"primary circled",onClick:(0,t.SU)(i)},{default:(0,a.w5)((()=>[(0,a.Uk)("Valider")])),_:1},8,["onClick"])])],64)}}});const c=m;var v=c}}]);
//# sourceMappingURL=app_games.1a44eec5.js.map