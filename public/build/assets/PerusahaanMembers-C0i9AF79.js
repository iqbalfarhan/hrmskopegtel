import{r as d,j as e,$ as l}from"./app-CiWKBCyD.js";import{A as j,a as f,b as g,c as C,d as D,e as v,f as u,g as A,h as b}from"./alert-dialog-DG-DF6qL.js";import{A as k,a as w,b as N}from"./avatar-BTiELu_O.js";import{B as o}from"./badge-qjGiZVyi.js";import{B as c}from"./button-BUFxCghr.js";import{C as y,c as E,d as I,e as M,a as B}from"./card-C-ox2iht.js";import{C as S}from"./checkbox-DFT8TJ7N.js";import{D as T,a as L,b as $,c as m}from"./dropdown-menu-D2cxqs3P.js";import{a as F}from"./index-DAHdB36t.js";import{E as H}from"./external-link-CIkKGNID.js";import{E as P}from"./ellipsis-Cm3k0MCJ.js";import"./index-DA3BWaOD.js";import"./index-Yb7RgudO.js";import"./index-DldSYuJ6.js";import"./Combination-B8_ZihL5.js";import"./index-DaICLFfZ.js";import"./index-DJnL3w6n.js";import"./index-BQNoWzmF.js";import"./index-BuKdNLTx.js";import"./check-BiQjySpf.js";import"./createLucideIcon-C_pHTqs_.js";import"./index-BCxzE-zO.js";import"./index-gNT_dkD4.js";const de=({users:i})=>{const[t]=d.useState(""),[h,n]=d.useState([]),x=(a,s)=>{n(a?r=>[...r,s]:r=>r.filter(p=>p!==s))};return e.jsxs(y,{children:[e.jsxs(E,{children:[e.jsx(I,{children:"Daftar Karyawan"}),e.jsx(M,{children:"Daftar karyawan yang bekerja di perusahaan ini"})]}),e.jsx(B,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[t&&`Pencarian: ${t}`,i==null?void 0:i.filter(a=>a==null?void 0:a.name.toLowerCase().includes(t.toLowerCase())).map(a=>{var s;return e.jsxs("div",{className:"flex items-center gap-6 rounded bg-sidebar p-4 py-3 shadow-sm hover:opacity-80",children:[e.jsx("div",{className:"flex-0 mx-2 flex items-center",children:e.jsx(S,{checked:h.includes(a.id),onCheckedChange:r=>{x(r,a.id)}})}),e.jsx("div",{className:"flex flex-1 items-center",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(k,{children:[e.jsx(w,{children:F(a.name)}),e.jsx(N,{src:a.photo,alt:a.name})]}),e.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[e.jsx("span",{className:"truncate font-semibold",children:a.name}),e.jsx("span",{className:"truncate text-xs",children:a.email})]})]})}),e.jsx("div",{className:"flex-1",children:e.jsx(o,{variant:"outline",children:((s=a.roles)==null?void 0:s.length)&&a.roles[0].name})}),e.jsx("div",{className:"flex-1",children:e.jsx(o,{variant:"outline",children:a.phone})}),e.jsxs("div",{className:"flex-0 flex items-center gap-2",children:[e.jsx(c,{variant:"secondary",asChild:!0,children:e.jsxs(l,{href:route("user.show",a.id),children:["View user",e.jsx(H,{})]})}),e.jsxs(T,{children:[e.jsx(L,{asChild:!0,children:e.jsx(c,{size:"icon",variant:"ghost",children:e.jsx(P,{})})}),e.jsxs($,{align:"end",children:[e.jsx(m,{asChild:!0,children:e.jsx(l,{href:route("user.edit",a.id),children:"Edit user"})}),e.jsxs(j,{children:[e.jsx(f,{asChild:!0,children:e.jsx(m,{onSelect:r=>r.preventDefault(),children:"Delete user"})}),e.jsxs(g,{children:[e.jsxs(C,{children:[e.jsx(D,{children:"Delete user"}),e.jsx(v,{children:"User tidak akan dihapus permanen anda dapat mengembalikan kapan saja"})]}),e.jsxs(u,{children:[e.jsx(A,{children:"Cancel"}),e.jsx(b,{asChild:!0,children:e.jsx(l,{href:route("user.destroy",a.id),method:"delete",preserveScroll:!0,children:"Delete user"})})]})]})]})]})]})]})]},a.id)})]})})]})};export{de as default};
