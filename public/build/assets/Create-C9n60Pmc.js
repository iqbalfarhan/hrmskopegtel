import{r as c,m as u,j as e}from"./app-BQiZwsOn.js";import{F as i}from"./form-control-6GVn1LD1.js";import{B as t}from"./button-D_IoCf3i.js";import{D as d,a as h,b as g,c as x,d as j,e as f,f as C}from"./dialog-7TvXwV6R.js";import{I as n}from"./input-aiqDfr5J.js";import{P as D}from"./plus-DOBrlekg.js";import{C as P}from"./check-BMjm-cZT.js";import"./utils-9ikzy2mT.js";import"./label-Ct7DTcgm.js";import"./index-BdElTlul.js";import"./index-5EmUfK6y.js";import"./index-CVr6GsiT.js";import"./index-CwKCxxQj.js";import"./index-wdEqd1Hx.js";import"./index-DjAFWct7.js";import"./Combination-CceQxd1H.js";import"./index-CCBMe6FI.js";import"./x-DYFvLs9u.js";import"./createLucideIcon-BDS9ogiV.js";const A=()=>{const[m,o]=c.useState(!1),{data:a,setData:s,post:l}=u({group:"",name:""}),p=r=>{r.preventDefault(),l(route("permission.store"),{onSuccess:()=>{s({group:"",name:""}),o(!1)}})};return e.jsxs(d,{open:m,onOpenChange:o,children:[e.jsx(h,{asChild:!0,children:e.jsxs(t,{children:[e.jsx(D,{}),"Create permission"]})}),e.jsxs(g,{children:[e.jsxs(x,{children:[e.jsx(j,{children:"Create permission"}),e.jsx(f,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."})]}),e.jsxs("form",{onSubmit:p,className:"space-y-6",children:[e.jsxs("div",{className:"my-6 space-y-2",children:[e.jsx(i,{horizontal:!0,label:"Group Name",children:e.jsx(n,{name:"group",value:a.group,onChange:r=>s("group",r.target.value),placeholder:"Permission group",required:!0,className:"col-span-3"})}),e.jsx(i,{horizontal:!0,label:"Permit Name",children:e.jsx(n,{name:"permission",value:a.name,onChange:r=>s("name",r.target.value),placeholder:"Permission name",required:!0,className:"col-span-3"})})]}),e.jsx(C,{children:e.jsxs(t,{children:[e.jsx(P,{}),"Create"]})})]})]})]})};export{A as default};
