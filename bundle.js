!function(e){function t(t){for(var r,c,l=t[0],i=t[1],u=t[2],f=0,p=[];f<l.length;f++)c=l[f],o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;a.push([31,1]),n()}({30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(15),c=n(5),l=n(6),i=n(7),u=function(){return o.a.createElement("div",{className:"footer-section ".concat(i.isMobile&&"footer-relative")},o.a.createElement("div",{className:"footer-nav"},o.a.createElement("a",{href:"https://github.com/jimmjy",target:"_blank",className:"footer__link"},"GitHub"),o.a.createElement("a",{href:"https://www.linkedin.com/in/james-finkelstein-09a40713a/",target:"_blank",className:"footer__link"},"Linkedin"),o.a.createElement("a",{href:"https://twitter.com/jayfink",target:"_blank",className:"footer__link"},"Twitter"),o.a.createElement("a",{href:"https://www.instagram.com/jimmjy/",target:"_blank",className:"footer__link"},"Instagram")))};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",{className:"app-content"},o.a.createElement("div",{className:"app-content-center"},o.a.createElement("h1",{className:"name"},"Web development is where art and logic collide ",String.fromCharCode(126)," ")),o.a.createElement("div",{className:"app-content-footer"},o.a.createElement("p",{className:"app-content__about"},"Hi, I'm James a Web Developer based in Toronto")),o.a.createElement(u,null))}}])&&f(n.prototype,a),c&&f(n,c),t}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return r=this,o=(e=v(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==h(o)&&"function"!=typeof o?E(r):o,j(E(n),"state",{title:"JAMES FINKELSTEIN",timeIndex:0,cycle:0,wordCycle:["INNOVATOR","WEB DEVELOPER","CREATOR","JAMES FINKELSTEIN"]}),j(E(n),"randomCodes",function(){return Math.floor(58*Math.random())+65}),j(E(n),"changeCharacters",function(){var e=n.state.title.split(""),t=setInterval(function(){var r=e.map(function(e){return"".concat(String.fromCharCode(n.randomCodes()))});n.setState(function(e){return{timeIndex:e.timeIndex+1,title:r.join("")}}),n.state.timeIndex>10&&(clearInterval(t),n.setState(function(e){return{timeIndex:0,cycle:n.state.cycle<n.state.wordCycle.length-1?e.cycle+1:0,title:"".concat(n.state.wordCycle[n.state.cycle])}}))},100)}),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;this.letterShuffle=setInterval(function(){e.changeCharacters()},2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.letterShuffle)}},{key:"render",value:function(){return o.a.createElement("div",{className:"header ".concat(i.isMobile&&"header-relative")},o.a.createElement("div",{className:"header-title"},o.a.createElement(c.b,{to:"/",className:"header__title-name"},"_> ",this.state.title)),o.a.createElement("div",{className:"header-links"},o.a.createElement(c.b,{className:"header__link",to:"/projects"},"+Projects"),o.a.createElement(c.b,{className:"header__link",to:"/about"},"About"),o.a.createElement("a",{href:"mailto:jamesfinkelstein@yahoo.com",className:"header__link",to:"/"},"Contact")))}}])&&d(n.prototype,a),l&&d(n,l),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){var e,n,r,o,a,c,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,s=new Array(u),f=0;f<u;f++)s[f]=arguments[f];return r=this,n=!(o=(e=k(t)).call.apply(e,[this].concat(s)))||"object"!==g(o)&&"function"!=typeof o?S(r):o,a=S(n),c="state",l={mobile:i.isMobile},c in a?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",{className:"projects-section"},o.a.createElement("div",{className:"project"},o.a.createElement(c.b,{className:"project__title"},"Freelance"),o.a.createElement("div",{className:"back back-freelance ".concat(this.state.mobile&&"back-opacity")})),o.a.createElement("div",{className:"project"},o.a.createElement(c.b,{className:"project__title"},"Hobby Projects"),o.a.createElement("div",{className:"back back-hobby-games ".concat(this.state.mobile&&"back-opacity")})),o.a.createElement("div",{className:"project"},o.a.createElement(c.b,{className:"project__title"},"School Projects"),o.a.createElement("div",{className:"back back-school-projects ".concat(this.state.mobile&&"back-opacity")})),o.a.createElement(u,null))}}])&&O(n.prototype,a),l&&O(n,l),t}(),C=function(){return o.a.createElement("div",{className:"about"},o.a.createElement("h1",null,"About"))},I=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Something went wrong :S"))};n(30);Object(a.render)(o.a.createElement(c.a,null,o.a.createElement(w,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:y}),o.a.createElement(l.a,{path:"/projects",component:P}),o.a.createElement(l.a,{path:"/about",component:C}),o.a.createElement(l.a,{component:I}))),document.getElementById("root"))}});