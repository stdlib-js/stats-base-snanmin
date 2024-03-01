"use strict";var f=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var q=f(function(A,o){
var b=require('@stdlib/math-base-assert-is-nanf/dist'),g=require('@stdlib/math-base-assert-is-negative-zerof/dist');function k(i,a,u){var v,n,e,r;if(i<=0)return NaN;if(i===1||u===0)return a[0];for(u<0?n=(1-i)*u:n=0,r=0;r<i&&(e=a[n],e!==e);r++)n+=u;if(r===i)return NaN;for(v=e,r+=1,r;r<i;r++)n+=u,e=a[n],!b(e)&&(e<v||e===v&&g(e))&&(v=e);return v}o.exports=k
});var c=f(function(B,m){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),R=require('@stdlib/math-base-assert-is-negative-zerof/dist');function Z(i,a,u,v){var n,e,r,t;if(i<=0)return NaN;if(i===1||u===0)return a[v];for(e=v,t=0;t<i&&(r=a[e],r!==r);t++)e+=u;if(t===i)return NaN;for(n=r,t+=1,t;t<i;t++)e+=u,r=a[e],!x(r)&&(r<n||r===n&&R(r))&&(n=r);return n}m.exports=Z
});var j=f(function(C,y){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),E=c();_(p,"ndarray",E);y.exports=p
});var N=require("path").join,O=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=j(),s,l=O(N(__dirname,"./native.js"));h(l)?s=w:s=l;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
