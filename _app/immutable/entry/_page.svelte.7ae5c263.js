import{S as H,i as L,s as M,k as g,q as k,a as T,l as m,m as p,r as V,h as f,c as C,n as E,b as N,G as d,J as y,H as R,K as q,o as O,w as P}from"../chunks/index.3806aa4f.js";function W(n){let o,l,e,a,_,b,r,h,D,s,i,v,x;return{c(){o=g("main"),l=g("header"),e=g("nav"),a=g("h1"),_=k("Image Doodler"),b=T(),r=g("div"),h=g("div"),D=k("Drop image here"),s=T(),i=g("canvas"),this.h()},l(t){o=m(t,"MAIN",{});var c=p(o);l=m(c,"HEADER",{class:!0});var I=p(l);e=m(I,"NAV",{class:!0});var u=p(e);a=m(u,"H1",{});var A=p(a);_=V(A,"Image Doodler"),A.forEach(f),u.forEach(f),I.forEach(f),b=C(c),r=m(c,"DIV",{class:!0});var w=p(r);h=m(w,"DIV",{class:!0});var S=p(h);D=V(S,"Drop image here"),S.forEach(f),s=C(w),i=m(w,"CANVAS",{class:!0}),p(i).forEach(f),w.forEach(f),c.forEach(f),this.h()},h(){E(e,"class","h-full py-2 px-8 flex items-center text-white"),E(l,"class","bg-blue-900 h-12"),E(h,"class","border-2 border-gray-600 bg-gray-500 text-white p-4"),E(i,"class","border-2 border-gray-600 bg-white"),E(r,"class","p-8 flex gap-2")},m(t,c){N(t,o,c),d(o,l),d(l,e),d(e,a),d(a,_),d(o,b),d(o,r),d(r,h),d(h,D),d(r,s),d(r,i),n[4](i),v||(x=[y(h,"drop",n[3]),y(h,"dragover",X),y(i,"mousedown",n[1]),y(i,"mouseup",n[2]),y(i,"mouseleave",n[2])],v=!0)},p:R,i:R,o:R,d(t){t&&f(o),n[4](null),v=!1,q(x)}}}function X(n){n.preventDefault(),n.dataTransfer.dropEffect="copy"}function Y(n,o,l){let e,a;O(()=>{a=e.getContext("2d"),l(0,e.width=window.innerWidth-300,e),l(0,e.height=500,e),a.strokeStyle="#000000",a.lineWidth=3});function _(s){a.beginPath(),a.moveTo(s.offsetX,s.offsetY),e.addEventListener("mousemove",r)}function b(){e.removeEventListener("mousemove",r)}function r(s){a.lineTo(s.offsetX,s.offsetY),a.stroke(),console.log("drawing")}async function h(s){s.preventDefault();const i=s.dataTransfer.files[0];var v=new FileReader;v.onload=function(x){console.log("dropped");const t=new Image;t.onload=function(){const c=e.width/t.width,I=e.height/t.height,u=Math.min(c,I),A=(e.width-t.width*u)/2,w=(e.height-t.height*u)/2;a.clearRect(0,0,e.width,e.height),a.drawImage(t,0,0,t.width,t.height,A,w,t.width*u,t.height*u)},t.src=x.target.result},v.readAsDataURL(i)}function D(s){P[s?"unshift":"push"](()=>{e=s,l(0,e)})}return[e,_,b,h,D]}class F extends H{constructor(o){super(),L(this,o,Y,W,M,{})}}export{F as default};
