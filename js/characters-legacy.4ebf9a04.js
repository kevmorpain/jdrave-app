(self["webpackChunkjdrave_app"]=self["webpackChunkjdrave_app"]||[]).push([[489],{3773:function(e,n,a){"use strict";a.d(n,{q:function(){return t}});a(4916),a(3123),a(3210),a(2222),a(9600);var i=a(6252),t=function(e){return(0,i.Fl)((function(){var n=e.value.trim().split(/\s+/),a=n.pop();return"".concat(n.join(" ")," <span>").concat(a,"</span>")}))}},5304:function(e,n,a){"use strict";a.d(n,{Z:function(){return m}});var i=a(6252),t={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},r=(0,i._)("path",{stroke:"#231C07","stroke-width":"2",d:"M18 17c0 4.5 0 4-6 4s-6 .5-6-4a6 6 0 0 1 12 0Z"},null,-1),u=(0,i._)("circle",{cx:"12",cy:"7",r:"4",stroke:"#231C07","stroke-width":"2"},null,-1),d=[r,u];function l(e,n,a,r,u,l){return(0,i.wg)(),(0,i.iD)("svg",t,d)}var o={name:"IcCharacter"},c=a(8118);const s=(0,c.Z)(o,[["render",l]]);var m=s},5947:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return I}});var i=a(8534),t=(a(5666),a(8309),a(8862),a(4916),a(5306),a(6252)),r=a(2262),u=a(7102),d=a(5245),l=a.n(d),o=a(7876),c=a.n(o),s=a(5131),m=a.n(s),v=a(4714),f=a.n(v),k=a(2119),p=a(3773),h=(a(1539),function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(n){var a,i,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("file",n),a.append("upload_preset","oadh3tc2"),a.append("folder","characters"),e.next=6,fetch("https://api.cloudinary.com/v1_1/jdrave/image/upload",{method:"POST",body:a});case 6:return i=e.sent,e.next=9,null===i||void 0===i?void 0:i.json();case 9:return t=e.sent,e.abrupt("return",{url:t.url});case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),b={class:"flex justify-between align-middle mb-8"},g=["innerHTML"],N=(0,t.Uk)("Supprimer"),y={key:0},S={key:1,class:"md:border rounded-xl md:p-6 grid md:grid-cols-3 gap-y-6 md:gap-6"},w={class:"md:col-span-2 grid grid-cols-2 gap-x-6 place-content-start"},_=(0,t.Uk)(" Valider "),D={class:"text-center row-start-1 md:row-start-auto"},V=["src"],x=(0,t.Uk)(" Changer la photo "),E=(0,t.aZ)({props:{characterId:null},setup:function(e){var n=e,a=(0,r.iH)(""),d=(0,r.iH)(""),o=(0,r.iH)(0),s=(0,r.iH)(0),v=(0,r.iH)(""),E=(0,r.iH)(null),F=(0,u.aM)(l(),(function(){return{characterId:n.characterId}})),I=F.result,C=F.loading,H=(0,t.Fl)((function(){var e,n;return null!==(e=null===(n=I.value)||void 0===n?void 0:n.character)&&void 0!==e?e:{}})),O=(0,t.Fl)((function(){return""}));(0,t.m0)((function(){H.value&&(a.value=H.value.name||"",d.value=JSON.stringify(H.value.features),o.value=H.value.maxHp,s.value=H.value.currentHp,v.value=H.value.picture),O=(0,p.q)(a)}));var j=(0,u.Db)(c(),(function(){return{variables:{characterId:n.characterId,name:a.value,features:JSON.parse(d.value),currentHp:s.value,maxHp:o.value}}})),T=j.mutate,M=j.loading,$=j.onDone;$((function(){console.log("Done!")}));var U=(0,u.Db)(f(),(function(){return{variables:{characterId:n.characterId}}})),P=U.mutate,Q=U.onDone,q=(0,k.tv)();Q((function(e){var n=e.data;q.replace({name:"game",params:{gameId:n.deleteCharacter.gameId}})}));var R=(0,u.Db)(m()),G=R.mutate,L=function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(a){var i,t,r,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=null===(i=a.target.files)||void 0===i?void 0:i[0],!t){e.next=8;break}return e.next=4,h(t);case 4:return r=e.sent,u=r.url,e.next=8,G({characterId:n.characterId,pictureUrl:u});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),A=function(){var e;null===(e=E.value)||void 0===e||e.click()};return function(e,n){var i=(0,t.up)("BaseButton"),u=(0,t.up)("BaseInput"),l=(0,t.up)("BaseTextarea");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("header",b,[(0,t._)("h1",{class:"page-title",innerHTML:(0,r.SU)(O)},null,8,g),(0,t.Wm)(i,{class:"warning",onClick:(0,r.SU)(P)},{default:(0,t.w5)((function(){return[N]})),_:1},8,["onClick"])]),(0,r.SU)(C)?((0,t.wg)(),(0,t.iD)("p",y,"Character is loading")):((0,t.wg)(),(0,t.iD)("div",S,[(0,t._)("div",w,[(0,t.Wm)(u,{label:"Nom",modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return a.value=e})},null,8,["modelValue"]),(0,t.Wm)(u,{class:"row-start-2",label:"PV actuel",modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return s.value=e}),max:o.value,type:"number"},null,8,["modelValue","max"]),(0,t.Wm)(u,{class:"row-start-2",label:"PV max",modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return o.value=e}),type:"number"},null,8,["modelValue"]),(0,t.Wm)(l,{class:"col-span-full",label:"Features",modelValue:d.value,"onUpdate:modelValue":n[3]||(n[3]=function(e){return d.value=e})},null,8,["modelValue"]),(0,t._)("div",null,[(0,t.Wm)(i,{class:"primary",onClick:(0,r.SU)(T),"is-loading":(0,r.SU)(M)},{default:(0,t.w5)((function(){return[_]})),_:1},8,["onClick","is-loading"])])]),(0,t._)("div",D,[(0,t._)("img",{class:"rounded w-96 h-96 object-cover mb-6",src:v.value},null,8,V),(0,t.Wm)(i,{class:"primary",onClick:A},{default:(0,t.w5)((function(){return[x]})),_:1}),(0,t._)("input",{ref_key:"pictureInputRef",ref:E,class:"hidden",type:"file",onChange:L},null,544)])]))],64)}}});const F=E;var I=F},6598:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return g}});a(8309);var i=a(6252),t=a(2262),r=a(3577),u=a(4986),d=a.n(u),l=a(7102),o=a(5304),c=(0,i._)("h1",{class:"page-title mb-8"},[(0,i._)("span",null,"Personnages")],-1),s={key:0},m={key:1,class:"grid gap-14 md:grid-cols-4"},v=["onClick"],f={class:"absolute bg-secondary top-0 right-0 p-[2px] rounded-bl"},k={class:"bg-white-opacity py-1 px-4 mt-auto w-full"},p={class:"font-bold text-lg"},h=(0,i.aZ)({setup:function(e){var n=(0,l.aM)(d()),a=n.result,u=n.loading,h=(0,i.Fl)((function(){var e,n;return null!==(e=null===(n=a.value)||void 0===n?void 0:n.characters)&&void 0!==e?e:[]}));return function(e,n){var a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[c,(0,t.SU)(u)?((0,i.wg)(),(0,i.iD)("p",s,"Les personnages sont en train de charger...")):((0,i.wg)(),(0,i.iD)("ul",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,t.SU)(h),(function(e){return(0,i.wg)(),(0,i.j4)(a,{to:{name:"character",params:{characterId:e.id}},key:e.id,custom:""},{default:(0,i.w5)((function(n){var a=n.navigate;return[(0,i._)("li",{onClick:a},[(0,i._)("article",{class:"bg-white rounded shadow-md hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden min-h-[180px] flex bg-center bg-cover",style:(0,r.j5)({backgroundImage:"url(".concat(e.picture,")")})},[(0,i._)("div",f,[(0,i.Wm)(o.Z)]),(0,i._)("div",k,[(0,i._)("h1",p,(0,r.zw)(e.name),1)])],4)],8,v)]})),_:2},1032,["to"])})),128))]))],64)}}});const b=h;var g=b},6091:function(e,n,a){var i=a(6530).PROPER,t=a(7293),r=a(1361),u="​᠎";e.exports=function(e){return t((function(){return!!r[e]()||u[e]()!==u||i&&r[e].name!==e}))}},3111:function(e,n,a){var i=a(1702),t=a(4488),r=a(1340),u=a(1361),d=i("".replace),l="["+u+"]",o=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),s=function(e){return function(n){var a=r(t(n));return 1&e&&(a=d(a,o,"")),2&e&&(a=d(a,c,"")),a}};e.exports={start:s(1),end:s(2),trim:s(3)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9600:function(e,n,a){"use strict";var i=a(2109),t=a(1702),r=a(8361),u=a(5656),d=a(9341),l=t([].join),o=r!=Object,c=d("join",",");i({target:"Array",proto:!0,forced:o||!c},{join:function(e){return l(u(this),void 0===e?",":e)}})},3210:function(e,n,a){"use strict";var i=a(2109),t=a(3111).trim,r=a(6091);i({target:"String",proto:!0,forced:r("trim")},{trim:function(){return t(this)}})},7876:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CharacterMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"features"}},type:{kind:"NamedType",name:{kind:"Name",value:"jsonb"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxHp"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"currentHp"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk_columns"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"ObjectField",name:{kind:"Name",value:"features"},value:{kind:"Variable",name:{kind:"Name",value:"features"}}},{kind:"ObjectField",name:{kind:"Name",value:"max_hp"},value:{kind:"Variable",name:{kind:"Name",value:"maxHp"}}},{kind:"ObjectField",name:{kind:"Name",value:"current_hp"},value:{kind:"Variable",name:{kind:"Name",value:"currentHp"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:333}};n.loc.source={body:"mutation CharacterMutation($characterId: uuid!, $name: String, $features: jsonb, $maxHp: Int, $currentHp: Int) {\n  update_characters_by_pk(pk_columns: {id: $characterId}, _set: {name: $name, features: $features, max_hp: $maxHp, current_hp: $currentHp}) {\n    id\n    name\n    features\n    maxHp: max_hp\n    currentHp: current_hp\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,u=new Set,d=new Set;r.forEach((function(e){d.add(e)}));while(d.size>0){var l=d;d=new Set,l.forEach((function(e){if(!u.has(e)){u.add(e);var n=i[e]||new Set;n.forEach((function(e){d.add(e)}))}}))}return u.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.CharacterMutation=r(n,"CharacterMutation")},5245:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CharacterQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"character"},name:{kind:"Name",value:"characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:185}};n.loc.source={body:"query CharacterQuery($characterId: uuid!) {\n  character: characters_by_pk(id: $characterId) {\n    id\n    name\n    features\n    maxHp: max_hp\n    currentHp: current_hp\n    picture\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,u=new Set,d=new Set;r.forEach((function(e){d.add(e)}));while(d.size>0){var l=d;d=new Set,l.forEach((function(e){if(!u.has(e)){u.add(e);var n=i[e]||new Set;n.forEach((function(e){d.add(e)}))}}))}return u.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.CharacterQuery=r(n,"CharacterQuery")},5131:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CharacterPictureMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pictureUrl"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk_columns"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"picture"},value:{kind:"Variable",name:{kind:"Name",value:"pictureUrl"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:193}};n.loc.source={body:"mutation CharacterPictureMutation($characterId: uuid!, $pictureUrl: String!) {\n  update_characters_by_pk(pk_columns: {id: $characterId}, _set: {picture: $pictureUrl}) {\n    id\n    picture\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,u=new Set,d=new Set;r.forEach((function(e){d.add(e)}));while(d.size>0){var l=d;d=new Set,l.forEach((function(e){if(!u.has(e)){u.add(e);var n=i[e]||new Set;n.forEach((function(e){d.add(e)}))}}))}return u.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.CharacterPictureMutation=r(n,"CharacterPictureMutation")},4714:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MyMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"characterId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"deleteCharacter"},name:{kind:"Name",value:"delete_characters_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"characterId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"gameId"},name:{kind:"Name",value:"game_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:139}};n.loc.source={body:"mutation MyMutation($characterId: uuid!) {\n  deleteCharacter: delete_characters_by_pk(id: $characterId) {\n    gameId: game_id,\n    id\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,u=new Set,d=new Set;r.forEach((function(e){d.add(e)}));while(d.size>0){var l=d;d=new Set,l.forEach((function(e){if(!u.has(e)){u.add(e);var n=i[e]||new Set;n.forEach((function(e){d.add(e)}))}}))}return u.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.MyMutation=r(n,"MyMutation")},4986:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetCharactersQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"characters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:105}};n.loc.source={body:"query GetCharactersQuery ($limit: Int) {\n  characters(limit: $limit) {\n    id\n    name\n    picture\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function r(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,u=new Set,d=new Set;r.forEach((function(e){d.add(e)}));while(d.size>0){var l=d;d=new Set,l.forEach((function(e){if(!u.has(e)){u.add(e);var n=i[e]||new Set;n.forEach((function(e){d.add(e)}))}}))}return u.forEach((function(n){var i=t(e,n);i&&a.definitions.push(i)})),a}(function(){n.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=n,e.exports.GetCharactersQuery=r(n,"GetCharactersQuery")}}]);
//# sourceMappingURL=characters-legacy.4ebf9a04.js.map