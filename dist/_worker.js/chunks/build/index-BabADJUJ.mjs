import{j as s,k as e}from"./server.mjs";import{b as r,U as a,w as u}from"../routes/renderer.mjs";function useHead(t,o={}){const n=o.head||s();if(n)return n.ssr?n.push(t,o):function(s,t,o={}){const n=r(!1),c=r({});a((()=>{c.value=n.value?{}:e(t)}));const m=s.push(c.value,o);return u(c,(s=>{m.patch(s)})),m}(n,t,o)}export{useHead as u};
//# sourceMappingURL=index-BabADJUJ.mjs.map
