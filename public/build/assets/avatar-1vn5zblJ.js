import{r as o,j as d}from"./app-BQiZwsOn.js";import{c as h,u as I,a as v}from"./index-DjAFWct7.js";import{P as c}from"./index-BdElTlul.js";import{c as f}from"./utils-9ikzy2mT.js";var m="Avatar",[j,$]=h(m),[C,p]=j(m),A=o.forwardRef((a,e)=>{const{__scopeAvatar:t,...r}=a,[n,s]=o.useState("idle");return d.jsx(C,{scope:t,imageLoadingStatus:n,onImageLoadingStatusChange:s,children:d.jsx(c.span,{...r,ref:e})})});A.displayName=m;var x="AvatarImage",w=o.forwardRef((a,e)=>{const{__scopeAvatar:t,src:r,onLoadingStatusChange:n=()=>{},...s}=a,l=p(x,t),i=b(r,s.referrerPolicy),u=I(g=>{n(g),l.onImageLoadingStatusChange(g)});return v(()=>{i!=="idle"&&u(i)},[i,u]),i==="loaded"?d.jsx(c.img,{...s,ref:e,src:r}):null});w.displayName=x;var S="AvatarFallback",N=o.forwardRef((a,e)=>{const{__scopeAvatar:t,delayMs:r,...n}=a,s=p(S,t),[l,i]=o.useState(r===void 0);return o.useEffect(()=>{if(r!==void 0){const u=window.setTimeout(()=>i(!0),r);return()=>window.clearTimeout(u)}},[r]),l&&s.imageLoadingStatus!=="loaded"?d.jsx(c.span,{...n,ref:e}):null});N.displayName=S;function b(a,e){const[t,r]=o.useState("idle");return v(()=>{if(!a){r("error");return}let n=!0;const s=new window.Image,l=i=>()=>{n&&r(i)};return r("loading"),s.onload=l("loaded"),s.onerror=l("error"),s.src=a,e&&(s.referrerPolicy=e),()=>{n=!1}},[a,e]),t}var y=A,L=w,R=N;const _=o.forwardRef(({className:a,...e},t)=>d.jsx(y,{ref:t,className:f("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...e}));_.displayName=y.displayName;const E=o.forwardRef(({className:a,...e},t)=>d.jsx(L,{ref:t,className:f("aspect-square h-full w-full bg-primary",a),...e}));E.displayName=L.displayName;const k=o.forwardRef(({className:a,...e},t)=>d.jsx(R,{ref:t,className:f("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...e}));k.displayName=R.displayName;export{_ as A,k as a,E as b};
