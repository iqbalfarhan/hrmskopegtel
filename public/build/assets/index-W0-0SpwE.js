import{U as l,j as d,r as f}from"./app-BQiZwsOn.js";import{c as T}from"./index-DjAFWct7.js";import{u as v,S as I}from"./index-5EmUfK6y.js";import{P as O}from"./index-BdElTlul.js";function L(t){const n=t+"CollectionProvider",[E,N]=T(n),[w,u]=E(n,{collectionRef:{current:null},itemMap:new Map}),m=c=>{const{scope:e,children:i}=c,o=l.useRef(null),r=l.useRef(new Map).current;return d.jsx(w,{scope:e,itemMap:r,collectionRef:o,children:i})};m.displayName=n;const p=t+"CollectionSlot",C=l.forwardRef((c,e)=>{const{scope:i,children:o}=c,r=u(p,i),s=v(e,r.collectionRef);return d.jsx(I,{ref:s,children:o})});C.displayName=p;const x=t+"CollectionItemSlot",R="data-radix-collection-item",M=l.forwardRef((c,e)=>{const{scope:i,children:o,...r}=c,s=l.useRef(null),S=v(e,s),a=u(x,i);return l.useEffect(()=>(a.itemMap.set(s,{ref:s,...r}),()=>void a.itemMap.delete(s))),d.jsx(I,{[R]:"",ref:S,children:o})});M.displayName=x;function A(c){const e=u(t+"CollectionConsumer",c);return l.useCallback(()=>{const o=e.collectionRef.current;if(!o)return[];const r=Array.from(o.querySelectorAll(`[${R}]`));return Array.from(e.itemMap.values()).sort((a,h)=>r.indexOf(a.ref.current)-r.indexOf(h.ref.current))},[e.collectionRef,e.itemMap])}return[{Provider:m,Slot:C,ItemSlot:M},A,N]}var P=f.createContext(void 0);function V(t){const n=f.useContext(P);return t||n||"ltr"}var _="VisuallyHidden",y=f.forwardRef((t,n)=>d.jsx(O.span,{...t,ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));y.displayName=_;var H=y;export{H as R,y as V,L as c,V as u};
