import{m as d,j as a}from"./app-BQiZwsOn.js";import{F as r}from"./form-control-6GVn1LD1.js";import{A as p,a as c}from"./avatar-1vn5zblJ.js";import{B as u}from"./button-D_IoCf3i.js";import{C as h,c as x,e as j,a as b,b as v}from"./card-BIZgAz71.js";import{I as o}from"./input-aiqDfr5J.js";import{u as C}from"./use-toast-C0cd4RmE.js";import"./utils-9ikzy2mT.js";import"./label-Ct7DTcgm.js";import"./index-BdElTlul.js";import"./index-5EmUfK6y.js";import"./index-CVr6GsiT.js";import"./index-DjAFWct7.js";const L=({perusahaan:s})=>{const{toast:i}=C(),{data:l,setData:t,put:n}=d({name:s.name,phone:s.phone,address:s.address,email:s.email}),m=e=>{e.preventDefault(),n(route("perusahaan.update",s.id),{onSuccess:()=>{i({title:"Berhasil",description:"Data perusahaan berhasil diubah"})},onError:()=>{i({title:"Gagal",description:"Data perusahaan berhasil diubah",variant:"destructive"})}})};return a.jsxs(h,{children:[a.jsx(x,{children:a.jsx(j,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse id quisquam blanditiis velit, nostrum dolorem optio earum quis ipsum illum molestiae ad, sunt tempore, nemo pariatur. Explicabo, ea soluta. Quia."})}),a.jsxs("form",{onSubmit:m,children:[a.jsxs(b,{className:"space-y-4",children:[a.jsx(r,{label:"Logo perusahaan",horizontal:!0,children:a.jsxs("div",{className:"col-span-3 flex gap-2",children:[a.jsx(p,{children:a.jsx(c,{children:"DF"})}),a.jsx(o,{type:"file",placeholder:"Company name"})]})}),a.jsx(r,{label:"Nama perusahaan",horizontal:!0,children:a.jsx(o,{placeholder:"Company name",className:"col-span-3",value:l.name,onChange:e=>t("name",e.target.value)})}),a.jsx(r,{label:"Nomor telepon",horizontal:!0,children:a.jsx(o,{placeholder:"Phone number",className:"col-span-3",value:l.phone,onChange:e=>t("phone",e.target.value)})}),a.jsx(r,{label:"Alamat",horizontal:!0,children:a.jsx(o,{placeholder:"address",className:"col-span-3",value:l.address,onChange:e=>t("address",e.target.value)})}),a.jsx(r,{label:"Email address",horizontal:!0,children:a.jsx(o,{placeholder:"email address",className:"col-span-3",value:l.email,onChange:e=>t("email",e.target.value)})})]}),a.jsx(v,{children:a.jsx(r,{label:"",horizontal:!0,children:a.jsx("div",{children:a.jsx(u,{children:"Simpan"})})})})]})]})};export{L as default};
