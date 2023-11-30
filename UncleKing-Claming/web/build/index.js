const ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}};ee();function a(){}function J(e){return e()}function M(){return Object.create(null)}function b(e){e.forEach(J)}function te(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ne(e){return Object.keys(e).length===0}function oe(e,...t){if(e==null)return a;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Y(e,t,n){e.$$.on_destroy.push(oe(t,n))}function F(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function re(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function ce(){return T(" ")}function se(){return T("")}function O(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ie(e){return Array.from(e.childNodes)}function ue(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function le(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let y;function _(e){y=e}function G(){if(!y)throw new Error("Function called outside component initialization");return y}function Q(e){G().$$.on_mount.push(e)}function fe(e){G().$$.on_destroy.push(e)}const m=[],U=[],x=[],q=[],ae=Promise.resolve();let S=!1;function de(){S||(S=!0,ae.then(R))}function C(e){x.push(e)}const N=new Set;let w=0;function R(){const e=y;do{for(;w<m.length;){const t=m[w];w++,_(t),he(t.$$)}for(_(null),m.length=0,w=0;U.length;)U.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];N.has(n)||(N.add(n),n())}x.length=0}while(m.length);for(;q.length;)q.pop()();S=!1,N.clear(),_(e)}function he(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const k=new Set;let d;function pe(){d={r:0,c:[],p:d}}function me(){d.r||b(d.c),d=d.p}function g(e,t){e&&e.i&&(k.delete(e),e.i(t))}function L(e,t,n,o){if(e&&e.o){if(k.has(e))return;k.add(e),d.c.push(()=>{k.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function _e(e){e&&e.c()}function V(e,t,n,o){const{fragment:r,on_mount:c,on_destroy:s,after_update:u}=e.$$;r&&r.m(t,n),o||C(()=>{const l=c.map(J).filter(te);s?s.push(...l):b(l),e.$$.on_mount=[]}),u.forEach(C)}function W(e,t){const n=e.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){e.$$.dirty[0]===-1&&(m.push(e),de(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,o,r,c,s,u=[-1]){const l=y;_(e);const i=e.$$={fragment:null,ctx:null,props:c,update:a,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};s&&s(i.root);let $=!1;if(i.ctx=n?n(e,t.props||{},(f,D,...P)=>{const B=P.length?P[0]:D;return i.ctx&&r(i.ctx[f],i.ctx[f]=B)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](B),$&&ge(e,f)),D}):[],i.update(),$=!0,b(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const f=ie(t.target);i.fragment&&i.fragment.l(f),f.forEach(E)}else i.fragment&&i.fragment.c();t.intro&&g(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),R()}_(l)}class Z{$destroy(){W(this,1),this.$destroy=a}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const h=[];function z(e,t=a){let n;const o=new Set;function r(u){if(j(e,u)&&(e=u,n)){const l=!h.length;for(const i of o)i[1](),h.push(i,e);if(l){for(let i=0;i<h.length;i+=2)h[i][0](h[i+1]);h.length=0}}}function c(u){r(u(e))}function s(u,l=a){const i=[u,l];return o.add(i),o.size===1&&(n=t(r)||a),u(e),()=>{o.delete(i),o.size===0&&(n(),n=null)}}return{set:r,update:c,subscribe:s}}async function ye(e,t={}){const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},o="snipe-menu";try{return await(await fetch(`https://${o}/${e}`,n)).json()}catch{}}const be=()=>{new Date().getFullYear();const e={show:z(!1),data:z({})},t={closeForm(n=null){e.show.set(!1),ye("closeMenu",n)},showForm(n){e.show.set(!0),e.data.set(n)},updateForm(n){t.showForm(n)},handleKeyUp(n){n.key=="Escape"&&t.closeForm()}};return{...e,...t}},p=be();function $e(){function e(t){switch(t.data.action){case"open":p.showForm(t.data.data);break;case"update":p.updateForm(t.data.data);break;case"forceClose":p.closeForm();break}}Q(()=>window.addEventListener("message",e)),fe(()=>window.removeEventListener("message",e))}function I(e,t,n){const o=e.slice();return o[4]=t[n],o[6]=n,o}function K(e){let t,n,o=e[4].text+"",r,c;return{c(){t=v("div"),n=v("p"),r=T(o),c=ce(),O(t,"id","child-"+e[6]),O(t,"class","inner-child"),le(t,"background-color","none")},m(s,u){A(s,t,u),F(t,n),F(n,r),F(t,c)},p(s,u){u&1&&o!==(o=s[4].text+"")&&ue(r,o)},d(s){s&&E(t)}}}function we(e){let t,n=e[0],o=[];for(let r=0;r<n.length;r+=1)o[r]=K(I(e,n,r));return{c(){t=v("div");for(let r=0;r<o.length;r+=1)o[r].c();O(t,"class","main-body")},m(r,c){A(r,t,c);for(let s=0;s<o.length;s+=1)o[s].m(t,null)},p(r,[c]){if(c&1){n=r[0];let s;for(s=0;s<n.length;s+=1){const u=I(r,n,s);o[s]?o[s].p(u,c):(o[s]=K(u),o[s].c(),o[s].m(t,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},i:a,o:a,d(r){r&&E(t),re(o,r)}}}function xe(e,t,n){let o,{data:r}=p;Y(e,r,u=>n(2,o=u));let c=[];Q(()=>{n(0,c=o.allData),s()});function s(){setTimeout(()=>{c.forEach((u,l)=>{let i="child-"+l.toString(),$=document.getElementById(i);$.style.backgroundColor=u.color})},200)}return e.$$.update=()=>{e.$$.dirty&4&&o&&setTimeout(()=>{n(0,c=o.allData),s()},200)},[c,r,o]}class ke extends Z{constructor(t){super(),X(this,t,xe,we,j,{})}}function H(e){let t,n;return t=new ke({}),{c(){_e(t.$$.fragment)},m(o,r){V(t,o,r),n=!0},i(o){n||(g(t.$$.fragment,o),n=!0)},o(o){L(t.$$.fragment,o),n=!1},d(o){W(t,o)}}}function Ee(e){let t,n,o=e[0]&&H();return{c(){o&&o.c(),t=se()},m(r,c){o&&o.m(r,c),A(r,t,c),n=!0},p(r,[c]){r[0]?o?c&1&&g(o,1):(o=H(),o.c(),g(o,1),o.m(t.parentNode,t)):o&&(pe(),L(o,1,1,()=>{o=null}),me())},i(r){n||(g(o),n=!0)},o(r){L(o),n=!1},d(r){o&&o.d(r),r&&E(t)}}}function Fe(e,t,n){let o;$e();let{show:r}=p;return Y(e,r,c=>n(0,o=c)),document.onkeyup=p.handleKeyUp,[o,r]}class Ne extends Z{constructor(t){super(),X(this,t,Fe,Ee,j,{})}}new Ne({target:document.getElementById("app")});