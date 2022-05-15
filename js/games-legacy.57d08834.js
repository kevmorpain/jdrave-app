(self["webpackChunkjdrave_app"]=self["webpackChunkjdrave_app"]||[]).push([[903],{3773:function(e,a,n){"use strict";n.d(a,{q:function(){return t}});n(4916),n(3123),n(3210),n(2222),n(9600);var i=n(6252),t=function(e){return(0,i.Fl)((function(){var a=e.value.trim().split(/\s+/),n=a.pop();return"".concat(a.join(" ")," <span>").concat(n,"</span>")}))}},1832:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return g}});n(8309);var i=n(6252),t=(0,i._)("header",{class:"flex justify-between align-middle mb-8"},[(0,i._)("h1",{class:"page-title"},[(0,i.Uk)("Création de "),(0,i._)("span",null,"personnage")])],-1),r=(0,i.Uk)("Valider");function l(e,a,n,l,o,u){var d=(0,i.up)("BaseInput"),c=(0,i.up)("BaseTextarea"),s=(0,i.up)("BaseButton");return(0,i.wg)(),(0,i.iD)(i.HY,null,[t,(0,i._)("div",null,[(0,i.Wm)(d,{label:"Nom",modelValue:e.newCharacter.name,"onUpdate:modelValue":a[0]||(a[0]=function(a){return e.newCharacter.name=a})},null,8,["modelValue"]),(0,i.Wm)(d,{label:"PV max",type:"number",min:"0",modelValue:e.newCharacter.maxHp,"onUpdate:modelValue":a[1]||(a[1]=function(a){return e.newCharacter.maxHp=a})},null,8,["modelValue"]),(0,i.Wm)(d,{label:"PV max",type:"number",min:"0",modelValue:e.newCharacter.maxMp,"onUpdate:modelValue":a[2]||(a[2]=function(a){return e.newCharacter.maxMp=a})},null,8,["modelValue"]),(0,i.Wm)(c,{class:"col-span-full",label:"Features",modelValue:e.newCharacter.features,"onUpdate:modelValue":a[3]||(a[3]=function(a){return e.newCharacter.features=a})},null,8,["modelValue"]),(0,i.Wm)(s,{class:"primary",onClick:e.createCharacter},{default:(0,i.w5)((function(){return[r]})),_:1},8,["onClick"])])],64)}var o=n(4648),u=(n(4916),n(5306),n(2262)),d=n(7102),c=n(2119),s=n(7982),m=n.n(s),f=n(4988),v=n.n(f),p=(0,i.aZ)({name:"CharacterCreation",props:{gameId:{type:String,required:!0}},setup:function(e){var a=(0,u.qj)({name:"",features:"{}",maxHp:0,maxMp:0}),n=(0,d.Db)(m(),(function(){return{variables:(0,o.Z)({gameId:e.gameId},a),update:function(a,n){var i=n.data.createCharacter,t=a.readQuery({query:v(),variables:{gameId:e.gameId}});console.log(i),console.log(t),t.characters.push(i),a.writeQuery({query:v(),data:t})}}})),i=n.mutate,t=n.onDone,r=(0,c.tv)();return t((function(e){var a=e.data;r.replace({name:"character",params:{characterId:a.character.id}})})),{newCharacter:a,createCharacter:i}}}),h=n(8118);const k=(0,h.Z)(p,[["render",l]]);var g=k},6659:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return F}});n(8309);var i=n(6252),t=n(3577),r={class:"flex justify-between align-middle mb-8"},l=["innerHTML"],o=(0,i.Uk)(" Créer un personnage "),u={key:0},d={key:1,class:"grid gap-14 md:grid-cols-4"},c=["onClick"],s={class:"absolute bg-secondary top-0 right-0 p-[2px] rounded-bl"},m={class:"bg-white-opacity py-1 px-4 mt-auto w-full"},f={class:"font-bold text-lg"};function v(e,a,n,v,p,h){var k=(0,i.up)("BaseButton"),g=(0,i.up)("router-link"),b=(0,i.up)("IcCharacter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",r,[(0,i._)("h1",{class:"page-title",innerHTML:e.title},null,8,l),(0,i.Wm)(g,{custom:"",to:{name:"new_character",params:{gameId:e.gameId}}},{default:(0,i.w5)((function(e){var a=e.navigate;return[(0,i.Wm)(k,{class:"secondary",onClick:a},{default:(0,i.w5)((function(){return[o]})),_:2},1032,["onClick"])]})),_:1},8,["to"])]),e.loading?((0,i.wg)(),(0,i.iD)("p",u,"Characters are loading")):((0,i.wg)(),(0,i.iD)("ul",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.sortedCharacters,(function(e){return(0,i.wg)(),(0,i.j4)(g,{to:{name:"character",params:{characterId:e.id}},key:e.id,custom:""},{default:(0,i.w5)((function(a){var n=a.navigate;return[(0,i._)("li",{onClick:n},[(0,i._)("article",{class:"bg-white rounded shadow-md hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden min-h-[180px] flex bg-center bg-cover",style:(0,t.j5)({backgroundImage:"url(".concat(e.picture,")")})},[(0,i._)("div",s,[(0,i.Wm)(b)]),(0,i._)("div",m,[(0,i._)("h1",f,(0,t.zw)(e.name),1)])],4)],8,c)]})),_:2},1032,["to"])})),128))]))],64)}var p=n(5957),h=(n(2707),n(7102)),k=n(4988),g=n.n(k),b={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},w=(0,i._)("path",{stroke:"#231C07","stroke-width":"2",d:"M18 17c0 4.5 0 4-6 4s-6 .5-6-4a6 6 0 0 1 12 0Z"},null,-1),N=(0,i._)("circle",{cx:"12",cy:"7",r:"4",stroke:"#231C07","stroke-width":"2"},null,-1),y=[w,N];function x(e,a,n,t,r,l){return(0,i.wg)(),(0,i.iD)("svg",b,y)}var _={name:"IcCharacter"},C=n(8118);const V=(0,C.Z)(_,[["render",x]]);var I=V,S=n(3773),D=(0,i.aZ)({name:"GamePage",components:{IcCharacter:I},props:["gameId"],setup:function(e){var a=(0,h.aM)(g(),(function(){return{gameId:e.gameId}})),n=a.result,t=a.loading,r=(0,h.pc)(n,[],(function(e){return e.characters})),l=(0,h.pc)(n,"",(function(e){return e.game.title})),o=(0,S.q)(l),u=(0,i.Fl)((function(){return(0,p.Z)(r.value).sort((function(e,a){return e.name.localeCompare(a.name)}))}));return{loading:t,sortedCharacters:u,title:o}}});const j=(0,C.Z)(D,[["render",v]]);var F=j},4055:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return C}});n(2526),n(1817);var i=n(6252),t=n(3577),r=(0,i._)("h1",{class:"page-title mb-8"},[(0,i._)("span",null,"Jeux")],-1),l={key:0},o={key:1,class:"grid gap-14 md:grid-cols-3"},u=["onClick"],d={class:"bg-white rounded shadow-md p-3 hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden"},c={class:"absolute bg-secondary top-0 right-0 p-[2px] rounded-bl"},s={class:"font-bold text-lg"};function m(e,a,n,m,f,v){var p=(0,i.up)("IcQuest"),h=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,e.loading?((0,i.wg)(),(0,i.iD)("p",l,"Les jeux sont en train de charger...")):((0,i.wg)(),(0,i.iD)("ul",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.games,(function(e){return(0,i.wg)(),(0,i.j4)(h,{to:{name:"game",params:{gameId:e.id}},key:e.id,custom:""},{default:(0,i.w5)((function(a){var n=a.navigate;return[(0,i._)("li",{onClick:n},[(0,i._)("article",d,[(0,i._)("div",c,[(0,i.Wm)(p)]),(0,i._)("h1",s,(0,t.zw)(e.title),1),(0,i._)("p",null,(0,t.zw)(e.description),1)])],8,u)]})),_:2},1032,["to"])})),128))]))],64)}var f=n(7394),v=n(7102),p={xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"21",height:"20",viewBox:"0 0 21 20"},h=(0,i.uE)('<defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z" transform="translate(.09)"></path></clipPath></defs><g fill="#231C07" clip-path="url(#a)"><path d="M4.42 2h1a.33.33 0 0 0 0-.67h-1a.33.33 0 1 0 0 .67ZM3.09 1.33c-.76 0-1.43.52-1.62 1.25A.33.33 0 0 0 1.8 3c.15 0 .28-.1.32-.25A1 1 0 0 1 3.1 2a.33.33 0 0 0 0-.67ZM1.48 14.85c.1.15.3.2.46.1l.65-.44a.3.3 0 0 1 .33 0l.3.2c.32.22.75.22 1.07 0l.3-.2a.3.3 0 0 1 .33 0l.3.2c.32.22.75.22 1.07 0l.3-.2a.3.3 0 0 1 .33 0l.65.43a.33.33 0 0 0 .37-.55l-.65-.43a.97.97 0 0 0-1.07 0l-.3.2a.3.3 0 0 1-.33 0l-.3-.2a.97.97 0 0 0-1.07 0l-.3.2a.3.3 0 0 1-.33 0l-.3-.2a.97.97 0 0 0-1.07 0l-.65.43c-.15.1-.2.3-.1.46ZM2.6 12.28l.65-.44a.3.3 0 0 1 .34 0l.3.2c.32.22.74.22 1.07 0l.3-.2a.3.3 0 0 1 .33 0l.3.2c.32.22.74.22 1.07 0l.3-.2a.3.3 0 0 1 .33 0l.64.44a.33.33 0 1 0 .37-.56l-.64-.43a.97.97 0 0 0-1.08 0l-.3.2a.3.3 0 0 1-.33 0l-.3-.2a.97.97 0 0 0-1.07 0l-.3.2a.3.3 0 0 1-.33 0l-.3-.2a.97.97 0 0 0-1.07 0l-.64.43a.33.33 0 1 0 .37.56ZM3.6 9.94l.65-.43a.3.3 0 0 1 .34 0l.3.2c.32.22.74.22 1.07 0l.3-.2a.3.3 0 0 1 .33 0l.3.2c.32.22.74.22 1.07 0l.3-.2a.3.3 0 0 1 .33 0l.64.43a.33.33 0 0 0 .37-.55l-.64-.43a.97.97 0 0 0-1.08 0l-.3.2a.3.3 0 0 1-.33 0l-.3-.2a.97.97 0 0 0-1.07 0l-.3.2a.3.3 0 0 1-.33 0l-.3-.2a.97.97 0 0 0-1.07 0l-.64.43a.33.33 0 1 0 .37.55Z"></path><path d="M.09 15.33C.09 17.78 2.15 20 4.42 20h9.67a3.5 3.5 0 0 0 3.08-1.9c.45-.96.3-2-.45-2.91a3 3 0 0 0-2.3-1.19h-3.67c.16-.51.38-1 .65-1.47.9-.7 1.86-1.34 2.85-1.9 4.02-2.35 5.7-4.67 5.77-4.77l.02-.03a.33.33 0 0 0 .05-.15c0-.03 0-.07-.02-.1v-.04l-.02-.03a.33.33 0 0 0-.04-.06.33.33 0 0 0-.1-.07l-.03-.02a.32.32 0 0 0-.08-.02h-.04c-1.04 0-2.08.12-3.08.37.47-.82.73-1.76.74-2.7a3 3 0 0 0-3-3H3.1a3 3 0 1 0 0 6h.38c-.3.66-.66 1.31-1.05 1.93C1.32 9.78.1 11.85.1 15.34Zm16.11.28c.74.9.6 1.7.36 2.2a2.85 2.85 0 0 1-2.96 1.5l-.12-.02a4.08 4.08 0 0 1-.43-.1c-.05 0-.09-.02-.13-.03a3.97 3.97 0 0 1-.38-.13l-.06-.02c-.15-.07-.3-.14-.44-.23h-.01a3.3 3.3 0 0 1-1.33-1.45h.5a.99.99 0 0 0 .93-.78l.06-.2c.02-.07.03-.14.06-.2l.02-.04c.29-.69.88-1.2 1.6-1.37l.14-.04.19-.01.22-.02c.7.02 1.36.37 1.78.94Zm-5.64-.94h1.98a3 3 0 0 0-.97 1.42l-.03.06-.02.1-.04.16a.33.33 0 0 1-.31.25h-.68v-.02a3.6 3.6 0 0 1-.02-1.36c.02-.2.05-.4.1-.61ZM17.5 6.2a18.97 18.97 0 0 0-6.72 4.85A9.87 9.87 0 0 1 17.5 6.2Zm-3.58 3.85a25.37 25.37 0 0 0-3.17 2.15l-.03.02c1.3-1.71 3.7-4.06 7.9-5.77a22.13 22.13 0 0 1-4.7 3.6ZM.75 3A2.34 2.34 0 0 1 3.1.67h9.45-.01l-.23.21-.04.04-.17.2-.06.08c-.05.05-.09.1-.12.17l-.07.1a2.58 2.58 0 0 0-.32.76l-.03.12-.04.22-.01.1a2.98 2.98 0 0 0 1.1 2.66H3.09A2.34 2.34 0 0 1 .75 3ZM4.2 6h10.23a.33.33 0 1 0 0-.67A2.33 2.33 0 1 1 16.75 3a5.38 5.38 0 0 1-1.02 3l-.4.15c-4.74 1.93-6.22 6.74-6.51 7.87v.02l-.03.1v.02l-.02.08a.8.8 0 0 0-.01.03V14.4l.02.05.01.05.06.07c.03.04.07.07.12.08.04.02.07.02.1.02h.11l.01-.01h.01l.01-.01c.02 0 .04-.02.05-.03l.03-.01.01-.01a.3.3 0 0 0 .06-.07l.01-.01.01-.02.01-.01.03-.05.01-.01.06-.08.01-.01.1-.11v-.02l.13-.14v-.01l.45-.46a7.48 7.48 0 0 0-.3 1.12l-.04.23-.05.34-.01.19a6.96 6.96 0 0 0 0 1.01l.04.23a3.82 3.82 0 0 0 1.82 2.62H4.42c-1.88 0-3.67-1.94-3.67-4 0-3.3 1.2-5.29 2.25-7.04.46-.73.86-1.5 1.19-2.29Z"></path></g>',2),k=[h];function g(e,a,n,t,r,l){return(0,i.wg)(),(0,i.iD)("svg",p,k)}var b={name:"IcQuest"},w=n(8118);const N=(0,w.Z)(b,[["render",g]]);var y=N,x=(0,i.aZ)({name:"GamesList",components:{IcQuest:y},setup:function(){var e=(0,v.aM)(f.s),a=e.result,n=e.loading,i=(0,v.pc)(a,[],(function(e){return e.games}));return{loading:n,games:i}}});const _=(0,w.Z)(x,[["render",m]]);var C=_},4362:function(e,a,n){var i=n(1589),t=Math.floor,r=function(e,a){var n=e.length,u=t(n/2);return n<8?l(e,a):o(e,r(i(e,0,u),a),r(i(e,u),a),a)},l=function(e,a){var n,i,t=e.length,r=1;while(r<t){i=r,n=e[r];while(i&&a(e[i-1],n)>0)e[i]=e[--i];i!==r++&&(e[i]=n)}return e},o=function(e,a,n,i){var t=a.length,r=n.length,l=0,o=0;while(l<t||o<r)e[l+o]=l<t&&o<r?i(a[l],n[o])<=0?a[l++]:n[o++]:l<t?a[l++]:n[o++];return e};e.exports=r},8886:function(e,a,n){var i=n(8113),t=i.match(/firefox\/(\d+)/i);e.exports=!!t&&+t[1]},256:function(e,a,n){var i=n(8113);e.exports=/MSIE|Trident/.test(i)},8008:function(e,a,n){var i=n(8113),t=i.match(/AppleWebKit\/(\d+)\./);e.exports=!!t&&+t[1]},6091:function(e,a,n){var i=n(6530).PROPER,t=n(7293),r=n(1361),l="​᠎";e.exports=function(e){return t((function(){return!!r[e]()||l[e]()!==l||i&&r[e].name!==e}))}},3111:function(e,a,n){var i=n(1702),t=n(4488),r=n(1340),l=n(1361),o=i("".replace),u="["+l+"]",d=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),s=function(e){return function(a){var n=r(t(a));return 1&e&&(n=o(n,d,"")),2&e&&(n=o(n,c,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9600:function(e,a,n){"use strict";var i=n(2109),t=n(1702),r=n(8361),l=n(5656),o=n(9341),u=t([].join),d=r!=Object,c=o("join",",");i({target:"Array",proto:!0,forced:d||!c},{join:function(e){return u(l(this),void 0===e?",":e)}})},2707:function(e,a,n){"use strict";var i=n(2109),t=n(1702),r=n(9662),l=n(7908),o=n(6244),u=n(1340),d=n(7293),c=n(4362),s=n(9341),m=n(8886),f=n(256),v=n(7392),p=n(8008),h=[],k=t(h.sort),g=t(h.push),b=d((function(){h.sort(void 0)})),w=d((function(){h.sort(null)})),N=s("sort"),y=!d((function(){if(v)return v<70;if(!(m&&m>3)){if(f)return!0;if(p)return p<603;var e,a,n,i,t="";for(e=65;e<76;e++){switch(a=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(i=0;i<47;i++)h.push({k:a+i,v:n})}for(h.sort((function(e,a){return a.v-e.v})),i=0;i<h.length;i++)a=h[i].k.charAt(0),t.charAt(t.length-1)!==a&&(t+=a);return"DGBEFHACIJK"!==t}})),x=b||!w||!N||!y,_=function(e){return function(a,n){return void 0===n?-1:void 0===a?1:void 0!==e?+e(a,n)||0:u(a)>u(n)?1:-1}};i({target:"Array",proto:!0,forced:x},{sort:function(e){void 0!==e&&r(e);var a=l(this);if(y)return void 0===e?k(a):k(a,e);var n,i,t=[],u=o(a);for(i=0;i<u;i++)i in a&&g(t,a[i]);c(t,_(e)),n=t.length,i=0;while(i<n)a[i]=t[i++];while(i<u)delete a[i++];return a}})},3210:function(e,a,n){"use strict";var i=n(2109),t=n(3111).trim,r=n(6091);i({target:"String",proto:!0,forced:r("trim")},{trim:function(){return t(this)}})},4988:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CharactersFromGame"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"characters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"game_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"features"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"maxHp"},name:{kind:"Name",value:"max_hp"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"currentHp"},name:{kind:"Name",value:"current_hp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"game"},name:{kind:"Name",value:"games_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:232}};a.loc.source={body:"query CharactersFromGame($gameId: uuid!) {\n  characters(where: {game_id: {_eq: $gameId}}) {\n    id\n    name\n    features\n    maxHp: max_hp\n    currentHp: current_hp\n    picture\n  }\n  game: games_by_pk(id: $gameId) {\n    title\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function r(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[a]||new Set,l=new Set,o=new Set;r.forEach((function(e){o.add(e)}));while(o.size>0){var u=o;o=new Set,u.forEach((function(e){if(!l.has(e)){l.add(e);var a=i[e]||new Set;a.forEach((function(e){o.add(e)}))}}))}return l.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.CharactersFromGame=r(a,"CharactersFromGame")},7982:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"InsertCharacter"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"features"}},type:{kind:"NamedType",name:{kind:"Name",value:"jsonb"}},defaultValue:{kind:"ObjectValue",fields:[]},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxHp"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxMp"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"character"},name:{kind:"Name",value:"insert_characters_one"},arguments:[{kind:"Argument",name:{kind:"Name",value:"object"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"game_id"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}},{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"ObjectField",name:{kind:"Name",value:"features"},value:{kind:"Variable",name:{kind:"Name",value:"features"}}},{kind:"ObjectField",name:{kind:"Name",value:"max_hp"},value:{kind:"Variable",name:{kind:"Name",value:"maxHp"}}},{kind:"ObjectField",name:{kind:"Name",value:"max_mp"},value:{kind:"Variable",name:{kind:"Name",value:"maxMp"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:277}};a.loc.source={body:"mutation InsertCharacter($gameId: uuid!, $name: String!, $features: jsonb = {}, $maxHp: Int!, $maxMp: Int!) {\n  character: insert_characters_one(object: {\n    game_id: $gameId,\n    name: $name,\n    features: $features,\n    max_hp: $maxHp,\n    max_mp: $maxMp\n  }) {\n    id\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&a.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,a)})),e.definitions&&e.definitions.forEach((function(e){n(e,a)}))}var i={};function t(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function r(e,a){var n={kind:e.kind,definitions:[t(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[a]||new Set,l=new Set,o=new Set;r.forEach((function(e){o.add(e)}));while(o.size>0){var u=o;o=new Set,u.forEach((function(e){if(!l.has(e)){l.add(e);var a=i[e]||new Set;a.forEach((function(e){o.add(e)}))}}))}return l.forEach((function(a){var i=t(e,a);i&&n.definitions.push(i)})),n}(function(){a.definitions.forEach((function(e){if(e.name){var a=new Set;n(e,a),i[e.name.value]=a}}))})(),e.exports=a,e.exports.InsertCharacter=r(a,"InsertCharacter")}}]);
//# sourceMappingURL=games-legacy.57d08834.js.map