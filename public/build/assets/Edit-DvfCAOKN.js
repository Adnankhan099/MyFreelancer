import{T as l,Q as c,o as m,c as b,w as _,a as t,d as f,e as a,v as i,U as u}from"./app-BdUaRRxv.js";import{_ as p}from"./AdminLayout-BhHPgADY.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo2-BR_e6daD.js";/* empty css                                                               */const g={components:{AdminLayout:p},props:{jobCategory:Object},setup(s){const e=l({parent_id:s.jobCategory.parent_id,name:s.jobCategory.name,status:s.jobCategory.status});function d(){e.put(route("jobCategory.update",s.jobCategory.id))}return{form:e,submit:d}}},h={class:"col-span-6 lg:col-span-12"},v={class:"card"},y=t("div",{class:"card-header border-b-0"},[t("div",{class:"flex flex-col"},[t("h3",{class:"text-lg font-medium"},"Job Category")])],-1),k={class:"checkout-detail"},C=t("h1",null,"Edit Job Category",-1),w={class:"flex flex-col gap-3 form-group"},j={class:"flex flex-col gap-1"},A=t("label",{for:"parent_id",class:"text-xs font-medium text-primary"},"Parent Id",-1),S={class:"flex flex-col gap-1"},U=t("label",{for:"name",class:"text-xs font-medium text-primary"},"Category Name",-1),V=t("label",{for:"status",class:"text-xs font-medium text-primary"},"Status:",-1),B={class:"flex flex-col gap-3 form-group"},L=t("option",{value:"active"},"Active",-1),M=t("option",{value:"inactive"},"Inactive",-1),E=[L,M],I=t("div",{class:"flex flex-wrap gap-1"},[t("button",{type:"submit",class:"text-white btn btn-primary",style:{"text-align":"right"}},"Submit")],-1);function J(s,e,d,o,N,T){const n=c("AdminLayout");return m(),b(n,null,{default:_(()=>[t("div",h,[t("div",v,[y,t("div",k,[t("form",{onSubmit:e[3]||(e[3]=f((...r)=>o.submit&&o.submit(...r),["prevent"]))},[C,t("div",w,[t("div",j,[A,a(t("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>o.form.parent_id=r),id:"parent_id",type:"text",class:"p-[11px] dark:border-border-dark dark:bg-sidebar-dark2 w-full border border-border-light rounded-5 text-xs text-content"},null,512),[[i,o.form.parent_id]])]),t("div",S,[U,a(t("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>o.form.name=r),id:"name",type:"text",class:"p-[11px] dark:border-border-dark dark:bg-sidebar-dark2 w-full border border-border-light rounded-5 text-xs text-content"},null,512),[[i,o.form.name]])]),V,t("div",B,[a(t("select",{"onUpdate:modelValue":e[2]||(e[2]=r=>o.form.status=r),id:"status",class:"dark:bg-sidebar-dark2 dark:border-border-dark p-[11px] bg-white text-title border border-border-light rounded-5 w-full text-xs"},E,512),[[u,o.form.status]])]),I])],32)])])])]),_:1})}const z=x(g,[["render",J]]);export{z as default};
