/**
 * array-future - A collection of array ponyfills prototypes as proposition for ECMAScript 7
 * @version v0.1.0
 * @link    https://github.com/Kikobeats/array-future
 * @license MIT
 */require=function t(r,n,e){function i(o,s){if(!n[o]){if(!r[o]){var f="function"==typeof require&&require;if(!s&&f)return f(o,!0);if(u)return u(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[o]={exports:{}};r[o][0].call(h.exports,function(t){var n=r[o][1][t];return i(n?n:t)},h,h.exports,t,r,n,e)}return n[o].exports}for(var u="function"==typeof require&&require,o=0;o<e.length;o++)i(e[o]);return i}({1:[function(t,r,n){"use strict";r.exports={contains:function(t){return t?-1!==this.indexOf(t):!1},first:function(){return this[0]},last:function(){return this[this.length-1]},average:function(){return this.sum()/this.length},sum:function(){return this.reduce(function(t,r){return t+=r},0)},unique:function(){return this.reverse().filter(function(t,r,n){return-1===n.indexOf(t,r+1)}).reverse()},compact:function(){return this.filter(function(t){return null!=t})},replace:function(t,r){return this.map(function(n){return n===t?r:t})},remove:function(t){if(!t)return this;var r=this.indexOf(t);return-1==r?this:(this.splice(r,1),this)},clear:function(){return this.length=0,this},shuffle:function(){for(var t,r,n=this.length;0!==n;)r=Math.floor(Math.random()*n),--n,t=this[n],this[n]=this[r],this[r]=t;return this},combination:function(t){var r,n,e,i=[],u=Math.pow(2,this.length);for(r=0;u>r;r++){e=[],n=this.length-1;do 0!==(r&1<<n)&&e.push(this[n]);while(n--);e.length>=t&&i.push(e.reverse())}return i},intersect:function(t){return this.filter(function(r){return t.contains(r)})},difference:function(t){return this.filter(function(r){return!t.contains(r)})}}},{}],"array-future":[function(t,r,n){"use strict";var e=t("./methods");r.exports=function(){Object.keys(e).forEach(function(t){Array.prototype[t]=Array.prototype[t]||e[t]})}()},{"./methods":1}]},{},[]);