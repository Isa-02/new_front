<<<<<<< HEAD
!function(){"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var c=n.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e}();var e=t.p+"405f945dc822e9f43ada085dc4b68199.jpg",n=t.p+"9bb0fa3fc8047800b906d14415bc2110.jpg",c=t.p+"061bd3c40b848ae299c30c899b750272.jpg",o=t.p+"abe05dfedd9c93f954b1d4654b7e8105.jpg",a={categories:[],comments:[],news:[],names:[]},r=a,d=function(t){fetch("http://localhost:4200/comments/".concat(t)).then((function(t){return t.json()})).then((function(t){console.log(t),r.comments=t,function(){var t=document.getElementById("root");a.comments.forEach((function(e){var n=document.createElement("div");n.textContent=e.text,t.append(n),console.log(a.comments)}))}()})).catch((function(t){console.log("Ошибка, брат:",t)})),l()};var i=document.getElementById("root"),s=document.createElement("div");s.classList.add("add_news");var u=function(){if(s.textContent="",Array.isArray(r.news))r.news.forEach((function(t){var e=document.createElement("div");e.textContent=t.title,e.addEventListener("click",(function(){return e=t._id,void fetch("http://localhost:4200/news/".concat(e)).then((function(t){return t.json()})).then((function(t){r.news=t,d(e)}));var e})),s.append(e),i.append(s)}));else{i.textContent="";var t=document.createElement("h1");t.textContent=r.news.title;var e=document.createElement("div");e.textContent=r.news.body,s.append(t,e),i.append(s)}},l=u,m=function(){fetch("http://localhost:4200/news").then((function(t){return t.json()})).then((function(t){r.news=t,u()}))},f=t.p+"f141d5a9abcc1659216eacc6059f93b8.jpg";fetch("http://localhost:4200/category").then((function(t){return t.json()})).then((function(t){a.categories=t,function(){var t=document.querySelector("#root"),e=document.createElement("div");e.classList.add("add_cat");var n=document.createElement("div");n.textContent="Все новости",n.addEventListener("click",(function(){m()})),a.categories.forEach((function(n){var c=document.createElement("div");c.textContent=n.name,c.addEventListener("click",(function(){return t=n._id,console.log(1),void fetch("http://localhost:4200/news/cat/".concat(t)).then((function(t){return t.json()})).then((function(t){console.log(t),r.news=t,l()}));var t})),e.append(c),t.prepend(e)})),t.prepend(n)}()})),m(),function(){var t=document.getElementById("root"),a=document.createElement("div");a.classList.add("foot_main");var r=document.createElement("div");r.classList.add("contacts"),r.textContent="+7 (999)-999-99-99";var d=document.createElement("div");d.textContent="О нас",d.a="#";var i=document.createElement("div");i.classList.add("sait");var s=document.createElement("img");s.src=e;var u=document.createElement("img");u.src=n;var l=document.createElement("img");l.src=c;var m=document.createElement("img");m.src=o,m.a="#",i.append(s,u,l,m),a.append(d,i,r),t.after(a)}(),function(){var t=document.getElementById("root"),e=document.createElement("div");e.classList.add("header"),e.src=f;var n=document.createElement("h1");n.classList.add("time"),n.textContent="NEWS";var c=document.createElement("div");c.classList.add("join"),c.textContent="Войти",c.a="#";var o=document.createElement("div");o.classList.add("author"),o.textContent="Авторизация",e.append(n,c,o),t.before(e)}()}();
=======
!function(){"use strict";var t={389:function(t,n,e){var o=e(933),r=e.n(o),c=e(476),a=e.n(c)()(r());a.push([t.id,"#root {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  min-height: 90vh;\r\n}\r\n.add_cat {\r\n  width: 25%;\r\n}\r\n.add_news {\r\n  width: 75%;\r\n}\r\n.news_list{\r\n  border: 1px solid rgb(51, 51, 119);\r\n  margin-top: 5px;\r\n  padding: 5px;\r\n}\r\n.foot_main{\r\n  margin-top: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}",""]),n.Z=a},476:function(t){t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,c){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);o&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},933:function(t){t.exports=function(t){return t[1]}},892:function(t){var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var c={},a=[],i=0;i<t.length;i++){var s=t[i],u=o.base?s[0]+o.base:s[0],d=c[u]||0,l="".concat(u," ").concat(d);c[u]=d+1;var f=e(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=r(p,o);o.byIndex=i,n.splice(i,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var c=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<c.length;a++){var i=e(c[a]);n[i].references--}for(var s=o(t,r),u=0;u<c.length;u++){var d=e(c[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}c=s}}},311:function(t){var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},60:function(t){t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},192:function(t,n,e){t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},760:function(t){t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var c=e.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},865:function(t){t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var c=n[o]={id:o,exports:{}};return t[o](c,c.exports,e),c.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t=e(892),n=e.n(t),o=e(760),r=e.n(o),c=e(311),a=e.n(c),i=e(192),s=e.n(i),u=e(60),d=e.n(u),l=e(865),f=e.n(l),p=e(389),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var v={categories:[],comments:[],news:[],names:[]},h=v,y=function(t){fetch("http://localhost:4200/comments/".concat(t)).then((function(t){return t.json()})).then((function(t){console.log(t),h.comments=t,function(){var t=document.getElementById("root");v.comments.forEach((function(n){var e=document.createElement("div");e.textContent=n.text,t.append(e),console.log(v.comments)}))}()})).catch((function(t){console.log("Ошибка, брат:",t)})),E()};var g=document.getElementById("root"),x=document.createElement("div");x.classList.add("add_news");var w=function(){if(x.textContent="",Array.isArray(h.news))h.news.forEach((function(t){var n=document.createElement("div");n.classList.add("news_list"),n.textContent=t.title,n.addEventListener("click",(function(){return n=t._id,void fetch("http://localhost:4200/news/".concat(n)).then((function(t){return t.json()})).then((function(t){h.news=t,y(n)}));var n})),x.append(n),g.append(x)}));else{g.textContent="";var t=document.createElement("h1");t.textContent=h.news.title;var n=document.createElement("div");n.textContent=h.news.body,x.append(t,n),g.append(x)}},E=w,b=function(){fetch("http://localhost:4200/news").then((function(t){return t.json()})).then((function(t){h.news=t,w()}))};fetch("http://localhost:4200/category").then((function(t){return t.json()})).then((function(t){v.categories=t,function(){var t=document.querySelector("#root"),n=document.createElement("div");n.classList.add("add_cat");var e=document.createElement("div");e.textContent="Все новости",e.addEventListener("click",(function(){b()})),v.categories.forEach((function(e){var o=document.createElement("div");o.textContent=e.name,o.addEventListener("click",(function(){return t=e._id,console.log(1),void fetch("http://localhost:4200/news/cat/".concat(t)).then((function(t){return t.json()})).then((function(t){console.log(t),h.news=t,E()}));var t})),n.append(o),t.prepend(n)})),t.prepend(e)}()})),b(),function(){var t=document.getElementById("root"),n=document.createElement("div");n.classList.add("foot_main");var e=document.createElement("div");e.classList.add("contacts");var o=document.createElement("div");e.textContent="mor",o.textContent="О нас",n.append(e,o),t.after(n)}()}()}();
>>>>>>> 77c8e5f59cfbfa7455e1306958b23ab9724a55e7
