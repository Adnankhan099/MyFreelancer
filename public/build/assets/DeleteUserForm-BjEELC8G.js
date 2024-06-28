import{o as i,f as u,m as y,p as m,T as h,h as t,w as l,a as s,U as x,i as d,u as a,W as b,n as v}from"./app-D4vXCJ9s.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $,a as C,b as D}from"./TextInput-DScwLH18.js";import{M as B}from"./Modal-BiD8QD7n.js";const U={},V={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function S(r,o){return i(),u("button",V,[y(r.$slots,"default")])}const _=k(U,[["render",S]]),A=["type"],M={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(r){return(o,n)=>(i(),u("button",{type:r.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[y(o.$slots,"default")],8,A))}},N={class:"space-y-6"},P=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),T={class:"p-6"},E=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1),F=s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),I={class:"mt-6"},K={class:"mt-6 flex justify-end"},G={__name:"DeleteUserForm",setup(r){const o=m(!1),n=m(null),e=h({password:""}),g=()=>{o.value=!0,x(()=>n.value.focus())},f=()=>{e.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>n.value.focus(),onFinish:()=>e.reset()})},c=()=>{o.value=!1,e.reset()};return(O,p)=>(i(),u("section",N,[P,t(_,{onClick:g},{default:l(()=>[d("Delete Account")]),_:1}),t(B,{show:o.value,onClose:c},{default:l(()=>[s("div",T,[E,F,s("div",I,[t($,{for:"password",value:"Password",class:"sr-only"}),t(C,{id:"password",ref_key:"passwordInput",ref:n,modelValue:a(e).password,"onUpdate:modelValue":p[0]||(p[0]=w=>a(e).password=w),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:b(f,["enter"])},null,8,["modelValue"]),t(D,{message:a(e).errors.password,class:"mt-2"},null,8,["message"])]),s("div",K,[t(M,{onClick:c},{default:l(()=>[d(" Cancel ")]),_:1}),t(_,{class:v(["ms-3",{"opacity-25":a(e).processing}]),disabled:a(e).processing,onClick:f},{default:l(()=>[d(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{G as default};
