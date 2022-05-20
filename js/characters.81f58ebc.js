(self["webpackChunkjdrave_app"]=self["webpackChunkjdrave_app"]||[]).push([[489],{3773:function(e,a,n){"use strict";n.d(a,{q:function(){return t}});var i=n(6252);const t=e=>(0,i.Fl)((()=>{const a=e.value.trim().split(/\s+/),n=a.pop();return`${a.join(" ")} <span>${n}</span>`}))},5304:function(e,a,n){"use strict";n.d(a,{Z:function(){return s}});var i=n(6252);const t={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},r=(0,i._)("path",{stroke:"#231C07","stroke-width":"2",d:"M18 17c0 4.5 0 4-6 4s-6 .5-6-4a6 6 0 0 1 12 0Z"},null,-1),d=(0,i._)("circle",{cx:"12",cy:"7",r:"4",stroke:"#231C07","stroke-width":"2"},null,-1),l=[r,d];function u(e,a,n,r,d,u){return(0,i.wg)(),(0,i.iD)("svg",t,l)}var c={name:"IcCharacter"},o=n(8118);const m=(0,o.Z)(c,[["render",u]]);var s=m},1191:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return h}});var i=n(6252);const t=(0,i._)("header",{class:"flex justify-between align-middle mb-8"},[(0,i._)("h1",{class:"page-title"},[(0,i.Uk)("Création de "),(0,i._)("span",null,"personnage")])],-1),r=(0,i.Uk)("Valider");function d(e,a,n,d,l,u){const c=(0,i.up)("BaseInput"),o=(0,i.up)("BaseTextarea"),m=(0,i.up)("BaseButton");return(0,i.wg)(),(0,i.iD)(i.HY,null,[t,(0,i._)("div",null,[(0,i.Wm)(c,{label:"Nom",modelValue:e.newCharacter.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.newCharacter.name=a)},null,8,["modelValue"]),(0,i.Wm)(c,{label:"PV max",type:"number",min:"0",modelValue:e.newCharacter.maxHp,"onUpdate:modelValue":a[1]||(a[1]=a=>e.newCharacter.maxHp=a)},null,8,["modelValue"]),(0,i.Wm)(c,{label:"PV max",type:"number",min:"0",modelValue:e.newCharacter.maxMp,"onUpdate:modelValue":a[2]||(a[2]=a=>e.newCharacter.maxMp=a)},null,8,["modelValue"]),(0,i.Wm)(o,{class:"col-span-full",label:"Features",modelValue:e.newCharacter.features,"onUpdate:modelValue":a[3]||(a[3]=a=>e.newCharacter.features=a)},null,8,["modelValue"]),(0,i.Wm)(m,{class:"primary",onClick:e.createCharacter},{default:(0,i.w5)((()=>[r])),_:1},8,["onClick"])])],64)}var l=n(2262),u=n(7102),c=n(2119),o=n(7982),m=n.n(o),s=n(4988),v=n.n(s),f=(0,i.aZ)({name:"CharacterCreation",props:{gameId:{type:String,required:!0}},setup(e){const a=(0,l.qj)({name:"",features:"{}",maxHp:0,maxMp:0}),{mutate:n,onDone:i}=(0,u.Db)(m(),(()=>({variables:{gameId:e.gameId,...a},update:(a,{data:{createCharacter:n}})=>{const i=a.readQuery({query:v(),variables:{gameId:e.gameId}});console.log(n),console.log(i),i.characters.push(n),a.writeQuery({query:v(),data:i})}}))),t=(0,c.tv)();return i((({data:e})=>{t.replace({name:"character",params:{characterId:e.character.id}})})),{newCharacter:a,createCharacter:n}}}),k=n(8118);const p=(0,k.Z)(f,[["render",d]]);var h=p},5947:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return I}});var i=n(6252),t=n(2262),r=n(7102),d=n(5245),l=n.n(d),u=n(7876),c=n.n(u),o=n(5131),m=n.n(o),s=n(4714),v=n.n(s),f=n(2119),k=n(3773);const p=async e=>{const a=new FormData;a.append("file",e),a.append("upload_preset","oadh3tc2"),a.append("folder","characters");const n=await fetch("https://api.cloudinary.com/v1_1/jdrave/image/upload",{method:"POST",body:a}),i=await(n?.json());return{url:i.url}},h={class:"flex justify-between align-middle mb-8"},b=["innerHTML"],N=(0,i.Uk)("Supprimer"),g={key:0},y={key:1,class:"md:border rounded-xl md:p-6 grid md:grid-cols-3 gap-y-6 md:gap-6"},S={class:"md:col-span-2 grid grid-cols-2 gap-x-6 place-content-start"},w=(0,i.Uk)(" Valider "),_={class:"text-center row-start-1 md:row-start-auto"},V=["src"],D=(0,i.Uk)(" Changer la photo ");var x=(0,i.aZ)({props:{characterId:null},setup(e){const a=e,n=(0,t.iH)(""),d=(0,t.iH)(""),u=(0,t.iH)(0),o=(0,t.iH)(0),s=(0,t.iH)(""),x=(0,t.iH)(null),{result:F,loading:I}=(0,r.aM)(l(),(()=>({characterId:a.characterId}))),C=(0,i.Fl)((()=>F.value?.character??{}));let E=(0,i.Fl)((()=>""));(0,i.m0)((()=>{C.value&&(n.value=C.value.name||"",d.value=JSON.stringify(C.value.features),u.value=C.value.maxHp,o.value=C.value.currentHp,s.value=C.value.picture),E=(0,k.q)(n)}));const{mutate:O,loading:H,onDone:j}=(0,r.Db)(c(),(()=>({variables:{characterId:a.characterId,name:n.value,features:JSON.parse(d.value),currentHp:o.value,maxHp:u.value}})));j((()=>{console.log("Done!")}));const{mutate:T,onDone:$}=(0,r.Db)(v(),(()=>({variables:{characterId:a.characterId}}))),M=(0,f.tv)();$((({data:e})=>{M.replace({name:"game",params:{gameId:e.deleteCharacter.gameId}})}));const{mutate:U}=(0,r.Db)(m()),q=async e=>{const n=e.target.files?.[0];if(n){const{url:e}=await p(n);await U({characterId:a.characterId,pictureUrl:e})}},P=()=>{x.value?.click()};return(e,a)=>{const r=(0,i.up)("BaseButton"),l=(0,i.up)("BaseInput"),c=(0,i.up)("BaseTextarea");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",h,[(0,i._)("h1",{class:"page-title",innerHTML:(0,t.SU)(E)},null,8,b),(0,i.Wm)(r,{class:"warning",onClick:(0,t.SU)(T)},{default:(0,i.w5)((()=>[N])),_:1},8,["onClick"])]),(0,t.SU)(I)?((0,i.wg)(),(0,i.iD)("p",g,"Character is loading")):((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",S,[(0,i.Wm)(l,{label:"Nom",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e)},null,8,["modelValue"]),(0,i.Wm)(l,{class:"row-start-2",label:"PV actuel",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),max:u.value,type:"number"},null,8,["modelValue","max"]),(0,i.Wm)(l,{class:"row-start-2",label:"PV max",modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=e=>u.value=e),type:"number"},null,8,["modelValue"]),(0,i.Wm)(c,{class:"col-span-full",label:"Features",modelValue:d.value,"onUpdate:modelValue":a[3]||(a[3]=e=>d.value=e)},null,8,["modelValue"]),(0,i._)("div",null,[(0,i.Wm)(r,{class:"primary",onClick:(0,t.SU)(O),"is-loading":(0,t.SU)(H)},{default:(0,i.w5)((()=>[w])),_:1},8,["onClick","is-loading"])])]),(0,i._)("div",_,[(0,i._)("img",{class:"rounded w-96 h-96 object-cover mb-6",src:s.value},null,8,V),(0,i.Wm)(r,{class:"primary",onClick:P},{default:(0,i.w5)((()=>[D])),_:1}),(0,i._)("input",{ref_key:"pictureInputRef",ref:x,class:"hidden",type:"file",onChange:q},null,544)])]))],64)}}});const F=x;var I=F},6598:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return N}});var i=n(6252),t=n(2262),r=n(3577),d=n(4986),l=n.n(d),u=n(7102),c=n(5304);const o=(0,i._)("h1",{class:"page-title mb-8"},[(0,i._)("span",null,"Personnages")],-1),m={key:0},s={key:1,class:"grid gap-14 md:grid-cols-4"},v=["onClick"],f={class:"absolute bg-secondary top-0 right-0 p-[2px] rounded-bl"},k={class:"bg-white-opacity py-1 px-4 mt-auto w-full"},p={class:"font-bold text-lg"};var h=(0,i.aZ)({setup(e){const{result:a,loading:n}=(0,u.aM)(l()),d=(0,i.Fl)((()=>a.value?.characters??[]));return(e,a)=>{const l=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,t.SU)(n)?((0,i.wg)(),(0,i.iD)("p",m,"Les personnages sont en train de charger...")):((0,i.wg)(),(0,i.iD)("ul",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,t.SU)(d),(e=>((0,i.wg)(),(0,i.j4)(l,{to:{name:"character",params:{characterId:e.id}},key:e.id,custom:""},{default:(0,i.w5)((({navigate:a})=>[(0,i._)("li",{onClick:a},[(0,i._)("article",{class:"bg-white rounded shadow-md hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden min-h-[180px] flex bg-center bg-cover",style:(0,r.j5)({backgroundImage:`url(${e.picture})`})},[(0,i._)("div",f,[(0,i.Wm)(c.Z)]),(0,i._)("div",k,[(0,i._)("h1",p,(0,r.zw)(e.name),1)])],4)],8,v)])),_:2},1032,["to"])))),128))]))],64)}}});const b=h;var N=b},7876:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CharacterMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"features"}},type:{kind:"NamedType",name:{kind:"Name",value:"jsonb"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxHp"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"currentHp"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk_columns"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"ObjectField",name:{kind:"Name",value:"features"},value:{kind:"Variable",name:{kind:"Name",value:"features"}}},{kind:"ObjectField",name:{kind:"Name",value:"max_hp"},value:{kind:"Variable",name:{kind:"Name",value:"maxHp"}}},{kind:"ObjectField",name:{kind:"Name",value:"current_hp"},value:{kind:"Variable",name:{kind:"Name",value:"currentHp"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:333}};a.loc.source={body:"mutation CharacterMutation($characterId: uuid!, $name: String, $features: jsonb, $maxHp: Int, $currentHp: Int) {\n  update_characters_by_pk(pk_columns: {id: $characterId}, _set: {name: $name, features: $features, max_hp: $maxHp, current_hp: $currentHp}) {\n    id\n    name\n    features\n    maxHp: max_hp\n    currentHp: current_hp\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function r(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[a]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var a=i[e]||new Set;a.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.CharacterMutation=r(a,"CharacterMutation")},5245:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CharacterQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"character"},name:{kind:"Name",value:"characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:185}};a.loc.source={body:"query CharacterQuery($characterId: uuid!) {\n  character: characters_by_pk(id: $characterId) {\n    id\n    name\n    features\n    maxHp: max_hp\n    currentHp: current_hp\n    picture\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function r(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[a]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var a=i[e]||new Set;a.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.CharacterQuery=r(a,"CharacterQuery")},5131:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CharacterPictureMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pictureUrl"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk_columns"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"picture"},value:{kind:"Variable",name:{kind:"Name",value:"pictureUrl"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:193}};a.loc.source={body:"mutation CharacterPictureMutation($characterId: uuid!, $pictureUrl: String!) {\n  update_characters_by_pk(pk_columns: {id: $characterId}, _set: {picture: $pictureUrl}) {\n    id\n    picture\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function r(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[a]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var a=i[e]||new Set;a.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.CharacterPictureMutation=r(a,"CharacterPictureMutation")},4988:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CharactersFromGame"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"characters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"game_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"game"},name:{kind:"Name",value:"games_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:232}};a.loc.source={body:"query CharactersFromGame($gameId: uuid!) {\n  characters(where: {game_id: {_eq: $gameId}}) {\n    id\n    name\n    features\n    maxHp: max_hp\n    currentHp: current_hp\n    picture\n  }\n  game: games_by_pk(id: $gameId) {\n    title\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function r(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[a]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var a=i[e]||new Set;a.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.CharactersFromGame=r(a,"CharactersFromGame")},4714:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MyMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"deleteCharacter"},name:{kind:"Name",value:"delete_characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"gameId"},name:{kind:"Name",value:"game_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:139}};a.loc.source={body:"mutation MyMutation($characterId: uuid!) {\n  deleteCharacter: delete_characters_by_pk(id: $characterId) {\n    gameId: game_id,\n    id\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function r(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[a]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var a=i[e]||new Set;a.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.MyMutation=r(a,"MyMutation")},4986:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetCharactersQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"characters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:105}};a.loc.source={body:"query GetCharactersQuery ($limit: Int) {\n  characters(limit: $limit) {\n    id\n    name\n    picture\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function r(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[a]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var a=i[e]||new Set;a.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.GetCharactersQuery=r(a,"GetCharactersQuery")},7982:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"InsertCharacter"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"features"}},type:{kind:"NamedType",name:{kind:"Name",value:"jsonb"}},defaultValue:{kind:"ObjectValue",fields:[]},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxHp"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxMp"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"character"},name:{kind:"Name",value:"insert_characters_one"},arguments:[{kind:"Argument",name:{kind:"Name",value:"object"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"game_id"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}},{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"ObjectField",name:{kind:"Name",value:"features"},value:{kind:"Variable",name:{kind:"Name",value:"features"}}},{kind:"ObjectField",name:{kind:"Name",value:"max_hp"},value:{kind:"Variable",name:{kind:"Name",value:"maxHp"}}},{kind:"ObjectField",name:{kind:"Name",value:"max_mp"},value:{kind:"Variable",name:{kind:"Name",value:"maxMp"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:277}};a.loc.source={body:"mutation InsertCharacter($gameId: uuid!, $name: String!, $features: jsonb = {}, $maxHp: Int!, $maxMp: Int!) {\n  character: insert_characters_one(object: {\n    game_id: $gameId,\n    name: $name,\n    features: $features,\n    max_hp: $maxHp,\n    max_mp: $maxMp\n  }) {\n    id\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function r(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[a]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var a=i[e]||new Set;a.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.InsertCharacter=r(a,"InsertCharacter")}}]);
//# sourceMappingURL=characters.81f58ebc.js.map