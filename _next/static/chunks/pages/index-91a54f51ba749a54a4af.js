_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"20a2":function(e,t,n){e.exports=n("nOHt")},"2pyn":function(e,t,n){"use strict";(function(e){var r=n("nKUr"),o=(n("q1tI"),n("g4pe")),a=n.n(o),i=n("20a2"),c=function(t){var o=t.title,c=t.description,u=t.style,s=t.meta,f=t.theme,l=e.env.DEPLOY_URL;!function(e){switch(e){case"material":n.e(8).then(n.t.bind(null,"JrXc",7));break;case"ribbon":default:n.e(9).then(n.t.bind(null,"kSrM",7))}}(f);var d=Object(i.useRouter)();return console.log("==>","".concat(JSON.stringify(e.env,0,2))),Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:o}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c&&Object(r.jsx)("meta",{name:"description",content:c}),Object(r.jsx)("meta",{property:"og:url",content:d.pathname}),Object(r.jsx)("meta",{property:"og:title",content:o}),c&&Object(r.jsx)("meta",{property:"og:description",content:c}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary"}),(null===s||void 0===s?void 0:s.twitter)&&Object(r.jsx)("meta",{name:"twitter:creator",content:s.twitter}),(null===s||void 0===s?void 0:s.twitter)&&Object(r.jsx)("meta",{name:"twitter:site",content:s.twitter}),Object(r.jsx)("meta",{name:"twitter:title",content:o}),Object(r.jsx)("meta",{name:"twitter:description",content:c}),(null===s||void 0===s?void 0:s.cover)&&Object(r.jsx)("meta",{name:"twitter:image",content:l+"/"+s.cover}),Object(r.jsx)("meta",{name:"twitter:image:alt",content:o}),Object(r.jsx)("style",{children:"\n          body {\n            background-color: var(--color-grey);\n          }\n            .shower {\n              --slide-ratio: calc(16 / 9);\n            }\n          ".concat(u)})]})};c.defaultProps={title:"My Awesome Presentation"},t.a=c}).call(this,n("8oxB"))},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(l)?(p.add(l),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],f=!1,l=-1;function d(){f&&u&&(f=!1,u.length?s=u.concat(s):l=-1,s.length&&p())}function p(){if(!f){var e=c(d);f=!0;for(var t=s.length;t;){for(u=s,s=[];++l<t;)u&&u[l].run();l=-1,t=s.length}u=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||f||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FHnh:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={prop:{},eaten:""},i={defaultValue:function(){}};e.exports=function(e,t,n){var c="",u=!1,s=!1,f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i,{},n);if("function"!==typeof f.defaultValue){var l=f.defaultValue;f.defaultValue=function(){return l}}var d,p,h={},m="";void 0===t&&(t=0);var b="\n\r{}",v=function(){return t>=e.length||b.indexOf(e[t])>-1?(u&&"}"!==e[t]&&(s=!0),!0):"}"===e[t]&&u},y="",g=function(n){for(y="";t<e.length&&b.indexOf(e.charAt(t))<0&&n.indexOf(e.charAt(t))>=0;)c+=e.charAt(t),y+=e.charAt(t),t++;return v()},O=function(n){for(y="";t<e.length&&b.indexOf(e.charAt(t))<0&&n.indexOf(e.charAt(t))<0;)c+=e.charAt(t),y+=e.charAt(t),t++;return m?d=y:m=y,v()},w=function(e,n){return c+=e,t++,!n&&v()},j=function(n){return w(n,!0),function(n){if(y="",e[t]!==n){for(;t<e.length&&(n!==e[t]||"\\"===e[t-1])&&"\n"!==e[t]&&"\r"!==e[t];)c+=e.charAt(t),y+=e.charAt(t),t++;"\n"===e[t]||"\r"===e[t]||t>=e.length?s=!0:(m?d=y.replace(/\\"/g,'"'):m=y.replace(/\\"/g,'"'),v())}}(n),e.charAt(t)!==n?a:w(n)?-1:void 0},x=!1,_=function(){switch(p){case"id":x?(h.id=m,x=!1):h.id=h.id||m;break;case"class":h.class||(h.class=[]),h.class.indexOf(m)<0&&h.class.push(m);break;case"key":if(!m)return a;m in h?"class"===m&&Boolean(d)&&h.class.push(d):(h[m]=void 0===d?f.defaultValue(m):"class"===m?[d]:d,"id"===m&&(x=!0))}p=void 0,m="",d=void 0};for(g(" \t\v"),"{"===e[t]&&(w("{"),u=!0);!v()&&!g(" \t\v");){if("."===e.charAt(t)){if(p="class",w(".")){s=!0;break}}else if("#"===e.charAt(t)){if(p="id",w("#")){s=!0;break}}else p="key";if(O("=\t\b\v \xa0")||!m)break;if("="===e.charAt(t)&&"key"===p){if(w("="))break;if('"'===e.charAt(t)){var A=j('"');if(-1===A)break;if(A===a)return a}else if("'"===e.charAt(t)){var P=j("'");if(-1===P)break;if(P===a)return a}else if(O(" \t\n\r\v=}"))break}_()}if(_(),u){if(!(t<e.length&&"}"===e[t]))return a;u=!1,w("}")}return s?a:{prop:h,eaten:c}}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n("nKUr"),o=n("rePB"),a=n("q1tI"),i=n("2pyn");n("FHnh");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=!0;function f(e){var t=e.content,n=e.frontMatter,o=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=function(){return o.current.focus()};return document.getElementById("__next").setAttribute("tabindex","-1"),document.getElementById("__next").addEventListener("focus",e),document.body.className="shower",function(){document.getElementById("__next").removeEventListener("focus",e),document.body.className=""}})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,u({},n)),Object(r.jsx)("div",{className:"shower list",ref:o,tabIndex:"-1",dangerouslySetInnerHTML:{__html:t}})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);