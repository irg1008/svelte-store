function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function u(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function s(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t,n,e,o,r,i){if(r){const c=l(n,e,o,i);t.p(c,r)}}function d(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}let h,_=!1;function m(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function p(t,n){if(_){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const t=n[u].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:m(1,r,(t=>n[e[t]].claim_order),t))-1;o[u]=e[i]+1;const c=i+1;e[c]=u,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let u=e[r]+1;0!=u;u=o[u-1]){for(i.push(n[u-1]);a>=u;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let u=0,l=0;u<c.length;u++){for(;l<i.length&&c[u].claim_order>=i[l].claim_order;)l++;const n=l<i.length?i[l]:null;t.insertBefore(c[u],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode!==t&&t.appendChild(n)}function g(t,n,e){_&&!e?p(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function x(){return y(" ")}function v(){return y("")}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t){return Array.from(t.childNodes)}function A(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function N(t,n,e,o){return A(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):b(n)))}function k(t,n){return A(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>y(n)),!0)}function S(t){return k(t," ")}function j(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function z(t,n=document.body){return Array.from(n.querySelectorAll(t))}function B(t){h=t}function C(){if(!h)throw new Error("Function called outside component initialization");return h}function T(t){C().$$.on_mount.push(t)}function q(t){C().$$.after_update.push(t)}function I(t,n){C().$$.context.set(t,n)}function M(t){return C().$$.context.get(t)}const O=[],D=[],F=[],H=[],G=Promise.resolve();let J=!1;function K(t){F.push(t)}let L=!1;const P=new Set;function W(){if(!L){L=!0;do{for(let t=0;t<O.length;t+=1){const n=O[t];B(n),Q(n.$$)}for(B(null),O.length=0;D.length;)D.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];P.has(n)||(P.add(n),n())}F.length=0}while(O.length);for(;H.length;)H.pop()();J=!1,L=!1,P.clear()}}function Q(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(K)}}const R=new Set;let U;function V(){U={r:0,c:[],p:U}}function X(){U.r||r(U.c),U=U.p}function Y(t,n){t&&t.i&&(R.delete(t),t.i(n))}function Z(t,n,e,o){if(t&&t.o){if(R.has(t))return;R.add(t),U.c.push((()=>{R.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function tt(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function nt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function ot(t,n){t&&t.l(n)}function rt(t,n,o,c){const{fragment:a,on_mount:u,on_destroy:l,after_update:s}=t.$$;a&&a.m(n,o),c||K((()=>{const n=u.map(e).filter(i);l?l.push(...n):r(n),t.$$.on_mount=[]})),s.forEach(K)}function it(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){-1===t.$$.dirty[0]&&(O.push(t),J||(J=!0,G.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(n,e,i,c,a,u,l,s=[-1]){const f=h;B(n);const d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:s,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let m=!1;if(d.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&ct(n,t)),e})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){_=!0;const t=E(e.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();e.intro&&Y(n.$$.fragment),rt(n,e.target,e.anchor,e.customElement),_=!1,W()}B(f)}class ut{$destroy(){it(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt=[];function st(n,e=t){let o;const r=new Set;function i(t){if(c(n,t)&&(n=t,o)){const t=!lt.length;for(const e of r)e[1](),lt.push(e,n);if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const u=[c,a];return r.add(u),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}export{T as A,n as B,st as C,u as D,f as E,d as F,s as G,p as H,t as I,M as J,z as K,a as L,ut as S,E as a,w as b,N as c,$ as d,b as e,g as f,k as g,j as h,at as i,et as j,x as k,v as l,ot as m,S as n,rt as o,tt as p,nt as q,V as r,c as s,y as t,Z as u,it as v,X as w,Y as x,I as y,q as z};