(self["webpackChunkjdrave_app"]=self["webpackChunkjdrave_app"]||[]).push([[489],{3773:function(e,n,a){"use strict";a.d(n,{q:function(){return t}});a(4916),a(3123),a(3210),a(2222),a(9600);var i=a(6252),t=function(e){return(0,i.Fl)((function(){var n=e.value.trim().split(/\s+/),a=n.pop();return"".concat(n.join(" ")," <span>").concat(a,"</span>")}))}},5304:function(e,n,a){"use strict";a.d(n,{Z:function(){return s}});var i=a(6252),t={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},r=(0,i._)("path",{stroke:"#231C07","stroke-width":"2",d:"M18 17c0 4.5 0 4-6 4s-6 .5-6-4a6 6 0 0 1 12 0Z"},null,-1),d=(0,i._)("circle",{cx:"12",cy:"7",r:"4",stroke:"#231C07","stroke-width":"2"},null,-1),l=[r,d];function u(e,n,a,r,d,u){return(0,i.wg)(),(0,i.iD)("svg",t,l)}var o={name:"IcCharacter"},c=a(8118);const m=(0,c.Z)(o,[["render",u]]);var s=m},1191:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return b}});a(8309);var i=a(6252),t=(0,i._)("header",{class:"flex justify-between align-middle mb-8"},[(0,i._)("h1",{class:"page-title"},[(0,i.Uk)("Création de "),(0,i._)("span",null,"personnage")])],-1),r=(0,i.Uk)("Valider");function d(e,n,a,d,l,u){var o=(0,i.up)("BaseInput"),c=(0,i.up)("BaseTextarea"),m=(0,i.up)("BaseButton");return(0,i.wg)(),(0,i.iD)(i.HY,null,[t,(0,i._)("div",null,[(0,i.Wm)(o,{label:"Nom",modelValue:e.newCharacter.name,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.newCharacter.name=n})},null,8,["modelValue"]),(0,i.Wm)(o,{label:"PV max",type:"number",min:"0",modelValue:e.newCharacter.maxHp,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.newCharacter.maxHp=n})},null,8,["modelValue"]),(0,i.Wm)(o,{label:"PV max",type:"number",min:"0",modelValue:e.newCharacter.maxMp,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.newCharacter.maxMp=n})},null,8,["modelValue"]),(0,i.Wm)(c,{class:"col-span-full",label:"Features",modelValue:e.newCharacter.features,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.newCharacter.features=n})},null,8,["modelValue"]),(0,i.Wm)(m,{class:"primary",onClick:e.createCharacter},{default:(0,i.w5)((function(){return[r]})),_:1},8,["onClick"])])],64)}var l=a(5082),u=(a(4916),a(5306),a(2262)),o=a(7102),c=a(2119),m=a(7982),s=a.n(m),v=a(4988),f=a.n(v),k=(0,i.aZ)({name:"CharacterCreation",props:{gameId:{type:String,required:!0}},setup:function(e){var n=(0,u.qj)({name:"",features:"{}",maxHp:0,maxMp:0}),a=(0,o.Db)(s(),(function(){return{variables:(0,l.Z)({gameId:e.gameId},n),update:function(n,a){var i=a.data.createCharacter,t=n.readQuery({query:f(),variables:{gameId:e.gameId}});console.log(i),console.log(t),t.characters.push(i),n.writeQuery({query:f(),data:t})}}})),i=a.mutate,t=a.onDone,r=(0,c.tv)();return t((function(e){var n=e.data;r.replace({name:"character",params:{characterId:n.character.id}})})),{newCharacter:n,createCharacter:i}}}),p=a(8118);const h=(0,p.Z)(k,[["render",d]]);var b=h},5947:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return C}});var i=a(8534),t=(a(5666),a(8309),a(8862),a(4916),a(5306),a(6252)),r=a(2262),d=a(7102),l=a(5245),u=a.n(l),o=a(7876),c=a.n(o),m=a(5131),s=a.n(m),v=a(4714),f=a.n(v),k=a(2119),p=a(3773),h=(a(1539),function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(n){var a,i,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("file",n),a.append("upload_preset","oadh3tc2"),a.append("folder","characters"),e.next=6,fetch("https://api.cloudinary.com/v1_1/jdrave/image/upload",{method:"POST",body:a});case 6:return i=e.sent,e.next=9,null===i||void 0===i?void 0:i.json();case 9:return t=e.sent,e.abrupt("return",{url:t.url});case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),b={class:"flex justify-between align-middle mb-8"},N=["innerHTML"],g=(0,t.Uk)("Supprimer"),y={key:0},S={key:1,class:"md:border rounded-xl md:p-6 grid md:grid-cols-3 gap-y-6 md:gap-6"},w={class:"md:col-span-2 grid grid-cols-2 gap-x-6 place-content-start"},_=(0,t.Uk)(" Valider "),V={class:"text-center row-start-1 md:row-start-auto"},x=["src"],D=(0,t.Uk)(" Changer la photo "),F=(0,t.aZ)({props:{characterId:null},setup:function(e){var n=e,a=(0,r.iH)(""),l=(0,r.iH)(""),o=(0,r.iH)(0),m=(0,r.iH)(0),v=(0,r.iH)(""),F=(0,r.iH)(null),I=(0,d.aM)(u(),(function(){return{characterId:n.characterId}})),C=I.result,E=I.loading,O=(0,t.Fl)((function(){var e,n;return null!==(e=null===(n=C.value)||void 0===n?void 0:n.character)&&void 0!==e?e:{}})),j=(0,t.Fl)((function(){return""}));(0,t.m0)((function(){O.value&&(a.value=O.value.name||"",l.value=JSON.stringify(O.value.features),o.value=O.value.maxHp,m.value=O.value.currentHp,v.value=O.value.picture),j=(0,p.q)(a)}));var H=(0,d.Db)(c(),(function(){return{variables:{characterId:n.characterId,name:a.value,features:JSON.parse(l.value),currentHp:m.value,maxHp:o.value}}})),T=H.mutate,$=H.loading,M=H.onDone;M((function(){console.log("Done!")}));var U=(0,d.Db)(f(),(function(){return{variables:{characterId:n.characterId}}})),q=U.mutate,P=U.onDone,Q=(0,k.tv)();P((function(e){var n=e.data;Q.replace({name:"game",params:{gameId:n.deleteCharacter.gameId}})}));var G=(0,d.Db)(s()),W=G.mutate,A=function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(a){var i,t,r,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=null===(i=a.target.files)||void 0===i?void 0:i[0],!t){e.next=8;break}return e.next=4,h(t);case 4:return r=e.sent,d=r.url,e.next=8,W({characterId:n.characterId,pictureUrl:d});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=function(){var e;null===(e=F.value)||void 0===e||e.click()};return function(e,n){var i=(0,t.up)("BaseButton"),d=(0,t.up)("BaseInput"),u=(0,t.up)("BaseTextarea");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("header",b,[(0,t._)("h1",{class:"page-title",innerHTML:(0,r.SU)(j)},null,8,N),(0,t.Wm)(i,{class:"warning",onClick:(0,r.SU)(q)},{default:(0,t.w5)((function(){return[g]})),_:1},8,["onClick"])]),(0,r.SU)(E)?((0,t.wg)(),(0,t.iD)("p",y,"Character is loading")):((0,t.wg)(),(0,t.iD)("div",S,[(0,t._)("div",w,[(0,t.Wm)(d,{label:"Nom",modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return a.value=e})},null,8,["modelValue"]),(0,t.Wm)(d,{class:"row-start-2",label:"PV actuel",modelValue:m.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return m.value=e}),max:o.value,type:"number"},null,8,["modelValue","max"]),(0,t.Wm)(d,{class:"row-start-2",label:"PV max",modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return o.value=e}),type:"number"},null,8,["modelValue"]),(0,t.Wm)(u,{class:"col-span-full",label:"Features",modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=function(e){return l.value=e})},null,8,["modelValue"]),(0,t._)("div",null,[(0,t.Wm)(i,{class:"primary",onClick:(0,r.SU)(T),"is-loading":(0,r.SU)($)},{default:(0,t.w5)((function(){return[_]})),_:1},8,["onClick","is-loading"])])]),(0,t._)("div",V,[(0,t._)("img",{class:"rounded w-96 h-96 object-cover mb-6",src:v.value},null,8,x),(0,t.Wm)(i,{class:"primary",onClick:L},{default:(0,t.w5)((function(){return[D]})),_:1}),(0,t._)("input",{ref_key:"pictureInputRef",ref:F,class:"hidden",type:"file",onChange:A},null,544)])]))],64)}}});const I=F;var C=I},6598:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return N}});a(8309);var i=a(6252),t=a(2262),r=a(3577),d=a(4986),l=a.n(d),u=a(7102),o=a(5304),c=(0,i._)("h1",{class:"page-title mb-8"},[(0,i._)("span",null,"Personnages")],-1),m={key:0},s={key:1,class:"grid gap-14 md:grid-cols-4"},v=["onClick"],f={class:"absolute bg-secondary top-0 right-0 p-[2px] rounded-bl"},k={class:"bg-white-opacity py-1 px-4 mt-auto w-full"},p={class:"font-bold text-lg"},h=(0,i.aZ)({setup:function(e){var n=(0,u.aM)(l()),a=n.result,d=n.loading,h=(0,i.Fl)((function(){var e,n;return null!==(e=null===(n=a.value)||void 0===n?void 0:n.characters)&&void 0!==e?e:[]}));return function(e,n){var a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[c,(0,t.SU)(d)?((0,i.wg)(),(0,i.iD)("p",m,"Les personnages sont en train de charger...")):((0,i.wg)(),(0,i.iD)("ul",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,t.SU)(h),(function(e){return(0,i.wg)(),(0,i.j4)(a,{to:{name:"character",params:{characterId:e.id}},key:e.id,custom:""},{default:(0,i.w5)((function(n){var a=n.navigate;return[(0,i._)("li",{onClick:a},[(0,i._)("article",{class:"bg-white rounded shadow-md hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden min-h-[180px] flex bg-center bg-cover",style:(0,r.j5)({backgroundImage:"url(".concat(e.picture,")")})},[(0,i._)("div",f,[(0,i.Wm)(o.Z)]),(0,i._)("div",k,[(0,i._)("h1",p,(0,r.zw)(e.name),1)])],4)],8,v)]})),_:2},1032,["to"])})),128))]))],64)}}});const b=h;var N=b},6091:function(e,n,a){var i=a(6530).PROPER,t=a(7293),r=a(1361),d="​᠎";e.exports=function(e){return t((function(){return!!r[e]()||d[e]()!==d||i&&r[e].name!==e}))}},3111:function(e,n,a){var i=a(1702),t=a(4488),r=a(1340),d=a(1361),l=i("".replace),u="["+d+"]",o=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),m=function(e){return function(n){var a=r(t(n));return 1&e&&(a=l(a,o,"")),2&e&&(a=l(a,c,"")),a}};e.exports={start:m(1),end:m(2),trim:m(3)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9600:function(e,n,a){"use strict";var i=a(2109),t=a(1702),r=a(8361),d=a(5656),l=a(9341),u=t([].join),o=r!=Object,c=l("join",",");i({target:"Array",proto:!0,forced:o||!c},{join:function(e){return u(d(this),void 0===e?",":e)}})},3210:function(e,n,a){"use strict";var i=a(2109),t=a(3111).trim,r=a(6091);i({target:"String",proto:!0,forced:r("trim")},{trim:function(){return t(this)}})},7876:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CharacterMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"features"}},type:{kind:"NamedType",name:{kind:"Name",value:"jsonb"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxHp"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"currentHp"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk_columns"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"ObjectField",name:{kind:"Name",value:"features"},value:{kind:"Variable",name:{kind:"Name",value:"features"}}},{kind:"ObjectField",name:{kind:"Name",value:"max_hp"},value:{kind:"Variable",name:{kind:"Name",value:"maxHp"}}},{kind:"ObjectField",name:{kind:"Name",value:"current_hp"},value:{kind:"Variable",name:{kind:"Name",value:"currentHp"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:333}};n.loc.source={body:"mutation CharacterMutation($characterId: uuid!, $name: String, $features: jsonb, $maxHp: Int, $currentHp: Int) {\n  update_characters_by_pk(pk_columns: {id: $characterId}, _set: {name: $name, features: $features, max_hp: $maxHp, current_hp: $currentHp}) {\n    id\n    name\n    features\n    maxHp: max_hp\n    currentHp: current_hp\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.CharacterMutation=r(n,"CharacterMutation")},5245:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CharacterQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"character"},name:{kind:"Name",value:"characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:185}};n.loc.source={body:"query CharacterQuery($characterId: uuid!) {\n  character: characters_by_pk(id: $characterId) {\n    id\n    name\n    features\n    maxHp: max_hp\n    currentHp: current_hp\n    picture\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.CharacterQuery=r(n,"CharacterQuery")},5131:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CharacterPictureMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pictureUrl"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk_columns"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"picture"},value:{kind:"Variable",name:{kind:"Name",value:"pictureUrl"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:193}};n.loc.source={body:"mutation CharacterPictureMutation($characterId: uuid!, $pictureUrl: String!) {\n  update_characters_by_pk(pk_columns: {id: $characterId}, _set: {picture: $pictureUrl}) {\n    id\n    picture\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.CharacterPictureMutation=r(n,"CharacterPictureMutation")},4988:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CharactersFromGame"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"characters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"game_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"game"},name:{kind:"Name",value:"games_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:232}};n.loc.source={body:"query CharactersFromGame($gameId: uuid!) {\n  characters(where: {game_id: {_eq: $gameId}}) {\n    id\n    name\n    features\n    maxHp: max_hp\n    currentHp: current_hp\n    picture\n  }\n  game: games_by_pk(id: $gameId) {\n    title\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.CharactersFromGame=r(n,"CharactersFromGame")},4714:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MyMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"deleteCharacter"},name:{kind:"Name",value:"delete_characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"gameId"},name:{kind:"Name",value:"game_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:139}};n.loc.source={body:"mutation MyMutation($characterId: uuid!) {\n  deleteCharacter: delete_characters_by_pk(id: $characterId) {\n    gameId: game_id,\n    id\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.MyMutation=r(n,"MyMutation")},4986:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetCharactersQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"characters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:105}};n.loc.source={body:"query GetCharactersQuery ($limit: Int) {\n  characters(limit: $limit) {\n    id\n    name\n    picture\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.GetCharactersQuery=r(n,"GetCharactersQuery")},7982:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"InsertCharacter"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"features"}},type:{kind:"NamedType",name:{kind:"Name",value:"jsonb"}},defaultValue:{kind:"ObjectValue",fields:[]},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxHp"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxMp"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"character"},name:{kind:"Name",value:"insert_characters_one"},arguments:[{kind:"Argument",name:{kind:"Name",value:"object"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"game_id"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}},{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"ObjectField",name:{kind:"Name",value:"features"},value:{kind:"Variable",name:{kind:"Name",value:"features"}}},{kind:"ObjectField",name:{kind:"Name",value:"max_hp"},value:{kind:"Variable",name:{kind:"Name",value:"maxHp"}}},{kind:"ObjectField",name:{kind:"Name",value:"max_mp"},value:{kind:"Variable",name:{kind:"Name",value:"maxMp"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:277}};n.loc.source={body:"mutation InsertCharacter($gameId: uuid!, $name: String!, $features: jsonb = {}, $maxHp: Int!, $maxMp: Int!) {\n  character: insert_characters_one(object: {\n    game_id: $gameId,\n    name: $name,\n    features: $features,\n    max_hp: $maxHp,\n    max_mp: $maxMp\n  }) {\n    id\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,d=new Set,l=new Set;r.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!d.has(e)){d.add(e);var n=i[e]||new Set;n.forEach((function(e){l.add(e)}))}}))}return d.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.InsertCharacter=r(n,"InsertCharacter")}}]);
//# sourceMappingURL=characters-legacy.c399bb9f.js.map