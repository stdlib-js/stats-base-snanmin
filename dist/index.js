"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=s(function(A,q){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-assert-is-negative-zerof/dist');function R(r,e,n,o){var u,t,i,a;if(r<=0)return NaN;if(r===1||n===0)return e[o];for(t=o,a=0;a<r&&(i=e[t],i!==i);a++)t+=n;if(a===r)return NaN;for(u=i,a+=1,a;a<r;a++)t+=n,i=e[t],!x(i)&&(i<u||i===u&&l(i))&&(u=i);return u}q.exports=R
});var c=s(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=v();function g(r,e,n){return b(r,e,n,_(r,n))}m.exports=g
});var d=s(function(C,y){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),E=v();k(p,"ndarray",E);y.exports=p
});var O=require("path").join,Z=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=d(),f,j=Z(O(__dirname,"./native.js"));h(j)?f=w:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
