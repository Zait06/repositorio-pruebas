if(!self.define){let e,o={};const r=(r,i)=>(r=new URL(r+".js",i).href,o[r]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=o,document.head.appendChild(e)}else e=r,importScripts(r),o()})).then((()=>{let e=o[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(o[n])return;let a={};const c=e=>r(e,n),p={module:{uri:n},exports:a,require:c};o[n]=Promise.all(i.map((e=>p[e]||c(e)))).then((e=>(s(...e),a)))}}define(["./workbox-5feffd39"],(function(e){"use strict";e.setCacheNameDetails({prefix:"test_pwa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/repositorio-pruebas/css/app.31d6cfe0.css",revision:null},{url:"/repositorio-pruebas/css/vendor.04a483ec.css",revision:null},{url:"/repositorio-pruebas/favicon.ico",revision:"ed24dbb38b21e018aa67d38a734034d4"},{url:"/repositorio-pruebas/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/repositorio-pruebas/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/repositorio-pruebas/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/repositorio-pruebas/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/repositorio-pruebas/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/repositorio-pruebas/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/repositorio-pruebas/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.40fa1be9.woff",revision:null},{url:"/repositorio-pruebas/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.cf9862e8.woff2",revision:null},{url:"/repositorio-pruebas/icons/apple-icon-120x120.png",revision:"4aac6e6870a6a9ee8741d4eddc45e8dc"},{url:"/repositorio-pruebas/icons/apple-icon-152x152.png",revision:"252ce066a567280bcccd7a2d0c527caa"},{url:"/repositorio-pruebas/icons/apple-icon-167x167.png",revision:"aa7a79fc561f22c8cd456156cc0cc4b5"},{url:"/repositorio-pruebas/icons/apple-icon-180x180.png",revision:"c78072abf2a7ea6b514d7896ec5ed641"},{url:"/repositorio-pruebas/icons/apple-launch-1125x2436.png",revision:"ff9604a872fc7426d75a22692b3befcd"},{url:"/repositorio-pruebas/icons/apple-launch-1170x2532.png",revision:"13f1fac9f2a1df4851b90c716a1694f3"},{url:"/repositorio-pruebas/icons/apple-launch-1242x2208.png",revision:"d960a3f712196b0d576ecd483b0775e2"},{url:"/repositorio-pruebas/icons/apple-launch-1242x2688.png",revision:"fa01752fa5aebb2b8e4d24eb4bc48208"},{url:"/repositorio-pruebas/icons/apple-launch-1284x2778.png",revision:"f66127867513771efb80da9da3744042"},{url:"/repositorio-pruebas/icons/apple-launch-1536x2048.png",revision:"5df0697fa05e877bcc833e6ddba70931"},{url:"/repositorio-pruebas/icons/apple-launch-1620x2160.png",revision:"47ee05538013f9175f2e32effa231621"},{url:"/repositorio-pruebas/icons/apple-launch-1668x2224.png",revision:"c3761ef2df66052a9cd8cbb6c5f621eb"},{url:"/repositorio-pruebas/icons/apple-launch-1668x2388.png",revision:"e76f509a29819feb784af9262cc40a28"},{url:"/repositorio-pruebas/icons/apple-launch-2048x2732.png",revision:"9535c1ba838279e73c8a75c16bd58a05"},{url:"/repositorio-pruebas/icons/apple-launch-750x1334.png",revision:"8ae83912fdcac644c21ef6c0920de0fc"},{url:"/repositorio-pruebas/icons/apple-launch-828x1792.png",revision:"e64f81c6ec83a07c5b483d90539d10b5"},{url:"/repositorio-pruebas/icons/favicon-128x128.png",revision:"dd2b674c0943679c34dea46be9a18c2a"},{url:"/repositorio-pruebas/icons/favicon-16x16.png",revision:"1fab37abd5b0f030a2c7b55d3f4288c6"},{url:"/repositorio-pruebas/icons/favicon-32x32.png",revision:"89be1a5c7d2307c05ebdd07fa3ce96bd"},{url:"/repositorio-pruebas/icons/favicon-96x96.png",revision:"c127594f6d8bbba6322a3f27f89b2686"},{url:"/repositorio-pruebas/icons/icon-128x128.png",revision:"dd2b674c0943679c34dea46be9a18c2a"},{url:"/repositorio-pruebas/icons/icon-192x192.png",revision:"8becb2c4ac5aee5aa9ac6e27e243d14d"},{url:"/repositorio-pruebas/icons/icon-256x256.png",revision:"c6cd820a27c0e431cbbb393e48eff717"},{url:"/repositorio-pruebas/icons/icon-384x384.png",revision:"411d56ea733afa3e2969275078c6f016"},{url:"/repositorio-pruebas/icons/icon-512x512.png",revision:"e8d276c536f00565d1582db991a222b0"},{url:"/repositorio-pruebas/icons/ms-icon-144x144.png",revision:"c9ee1be507a12df852dc52a7522ed88b"},{url:"/repositorio-pruebas/icons/safari-pinned-tab.svg",revision:"8b6f28a4b16cfae3406b9ce853cf5db7"},{url:"/repositorio-pruebas/index.html",revision:"c4891b4d213bba917ac3345eadf0047c"},{url:"/repositorio-pruebas/js/193.f2db8ef7.js",revision:null},{url:"/repositorio-pruebas/js/650.8c9b62fc.js",revision:null},{url:"/repositorio-pruebas/js/811.543367ee.js",revision:null},{url:"/repositorio-pruebas/js/app.934d167e.js",revision:null},{url:"/repositorio-pruebas/js/vendor.663d11da.js",revision:null},{url:"/repositorio-pruebas/manifest.json",revision:"118318158b489a9e5b6236503ccd453e"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/repositorio-pruebas/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
