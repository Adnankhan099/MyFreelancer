import{l as f,o as r,c as p,w as x,b as t,e as b,p as i,v as h,A as a,f as d,q as c,F as m,t as u}from"./app-Cj-bnn6H.js";import{_ as v}from"./AdminLayout-BWaMg_e7.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css                                                               */const k={components:{AdminLayout:v},props:{countries:Array,states:Array,city:Object},data(){return{form:this.city?{...this.city}:{name:"",countries_id:"",states_id:"",status:"active"}}},methods:{submit(){this.$inertia.post(this.city?`/cities/${this.city.id}`:"/cities",this.form)}}},y={class:"col-span-6 lg:col-span-12"},w={class:"card"},C=t("div",{class:"card-header border-b-0"},[t("div",{class:"flex flex-col"},[t("h3",{class:"text-lg font-medium"},"Cities")])],-1),A={class:"checkout-detail"},S=t("h1",null,"Create City",-1),V={class:"flex flex-col gap-3 form-group"},B={class:"flex flex-col gap-1"},L=t("label",{for:"name",class:"text-xs font-medium text-primary"},"City Name",-1),U=t("label",{for:"countries_id",class:"text-xs font-medium text-primary"},"Country:",-1),M={class:"flex flex-col gap-3 form-group"},D=["value"],F=t("label",{for:"states_id",class:"text-xs font-medium text-primary"},"State:",-1),N={class:"flex flex-col gap-3 form-group"},j=["value"],q=t("label",{for:"status",class:"text-xs font-medium text-primary"},"Status:",-1),E={class:"flex flex-col gap-3 form-group"},I=t("option",{value:"active"},"Active",-1),O=t("option",{value:"inactive"},"Inactive",-1),T=[I,O],z=t("div",{class:"flex flex-wrap gap-1"},[t("button",{type:"submit",class:"text-white btn btn-primary",style:{"text-align":"right"}},"Submit")],-1);function G(H,s,l,J,o,n){const _=f("AdminLayout");return r(),p(_,null,{default:x(()=>[t("div",y,[t("div",w,[C,t("div",A,[t("form",{onSubmit:s[4]||(s[4]=b((...e)=>n.submit&&n.submit(...e),["prevent"]))},[S,t("div",V,[t("div",B,[L,i(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>o.form.name=e),type:"text",id:"name",class:"p-[11px] dark:border-border-dark dark:bg-sidebar-dark2 w-full border border-border-light rounded-5 text-xs text-content"},null,512),[[h,o.form.name]])]),U,t("div",M,[i(t("select",{"onUpdate:modelValue":s[1]||(s[1]=e=>o.form.countries_id=e),id:"countries_id",class:"dark:bg-sidebar-dark2 dark:border-border-dark p-[11px] bg-white text-title border border-border-light rounded-5 w-full text-xs"},[(r(!0),d(m,null,c(l.countries,e=>(r(),d("option",{key:e.id,value:e.id},u(e.name),9,D))),128))],512),[[a,o.form.countries_id]])]),F,t("div",N,[i(t("select",{"onUpdate:modelValue":s[2]||(s[2]=e=>o.form.states_id=e),id:"states_id",class:"dark:bg-sidebar-dark2 dark:border-border-dark p-[11px] bg-white text-title border border-border-light rounded-5 w-full text-xs"},[(r(!0),d(m,null,c(l.states,e=>(r(),d("option",{key:e.id,value:e.id},u(e.name),9,j))),128))],512),[[a,o.form.states_id]])]),q,t("div",E,[i(t("select",{"onUpdate:modelValue":s[3]||(s[3]=e=>o.form.status=e),id:"status",class:"dark:bg-sidebar-dark2 dark:border-border-dark p-[11px] bg-white text-title border border-border-light rounded-5 w-full text-xs"},T,512),[[a,o.form.status]])]),z])],32)])])])]),_:1})}const W=g(k,[["render",G]]);export{W as default};
