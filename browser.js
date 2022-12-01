// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var l=t;function c(t){return t!=t}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"";y=p&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n,o,a;if(null==t)return b.call(t);e=t[_],a=_,r=null!=(o=t)&&d.call(o,a);try{t[_]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[_]=e:delete t[_],n}:function(t){return b.call(t)};var s,v=y,m="function"==typeof Float32Array,w=Number.POSITIVE_INFINITY,A="function"==typeof Float32Array?Float32Array:null,g="function"==typeof Float32Array?Float32Array:void 0;s=function(){var t,r,e;if("function"!=typeof A)return!1;try{r=new A([1,3.14,-3.14,5e40]),e=r,t=(m&&e instanceof Float32Array||"[object Float32Array]"===v(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===w}catch(r){t=!1}return t}()?g:function(){throw new Error("not implemented")};var j,h=s,S="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,F="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var t,r,e;if("function"!=typeof N)return!1;try{r=new N(r=[1,3.14,-3.14,4294967296,4294967297]),e=r,t=(S&&e instanceof Uint32Array||"[object Uint32Array]"===v(e))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?F:function(){throw new Error("not implemented")};var O=j,T=new h(1);new O(T.buffer)[0]=4286578688;var U,E=T[0];function P(t){return 0===t&&1/t===E}function I(t,r,e){var n,o,a,i;if(t<=0)return NaN;if(1===t||0===e)return r[0];for(o=e<0?(1-t)*e:0,i=0;i<t&&(a=r[o])!=a;i++)o+=e;if(i===t)return NaN;for(n=a,i+=1;i<t;i++)c(a=r[o+=e])||(a<n||a===n&&P(a))&&(n=a);return n}return U=function(t,r,e,n){var o,a,i,u;if(t<=0)return NaN;if(1===t||0===e)return r[n];for(a=n,u=0;u<t&&(i=r[a])!=i;u++)a+=e;if(u===t)return NaN;for(o=i,u+=1;u<t;u++)c(i=r[a+=e])||(i<o||i===o&&P(i))&&(o=i);return o},l(I,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:U}),I},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).snanmin=r();
//# sourceMappingURL=browser.js.map
