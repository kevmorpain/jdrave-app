if(!self.define){let e,r={};const s=(s,i)=>(s=new URL(s+".js",i).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let a={};const o=e=>s(e,l),d={module:{uri:l},exports:a,require:o};r[l]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-03ef139c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"jdrave-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/jdrave-app/404.html",revision:"87fff59c760c77ba20dc0be6083cd238"},{url:"/jdrave-app/css/app.4e150b48.css",revision:null},{url:"/jdrave-app/index.html",revision:"e59ba3b94114f75aa18d06b75e8bfd99"},{url:"/jdrave-app/js/app.f93d792d.js",revision:null},{url:"/jdrave-app/js/characters.7e6b3d09.js",revision:null},{url:"/jdrave-app/js/chunk-vendors.cb1124ce.js",revision:null},{url:"/jdrave-app/js/games.268ee63c.js",revision:null},{url:"/jdrave-app/js/home.4d1895b6.js",revision:null},{url:"/jdrave-app/js/profile.59f61432.js",revision:null},{url:"/jdrave-app/manifest.json",revision:"d9a6df92b3c79bb838904871e356b5e2"},{url:"/jdrave-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
