import{_ as d}from"./AdminLayout-BWaMg_e7.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{l as _,o as a,c as u,w as m,b as t,f as n,q as f,F as y,t as o}from"./app-Cj-bnn6H.js";/* empty css                                                               */const p={props:{countries:Array,states:Array,cities:Array},components:{AdminLayout:d},methods:{editCity(s){Inertia.get(route("cities.edit",s))},deleteCity(s){confirm("Are you sure you want to delete this city?")&&Inertia.delete(route("cities.destroy",s))}}},v={class:"col-span-6 lg:col-span-12"},b={class:"card"},w=t("div",{class:"card-header border-b-0"},[t("div",{class:"flex flex-col"},[t("h3",{class:"text-lg font-medium"},"Cities")])],-1),C=["href"],g={class:"card-body"},x={class:"overflow-auto custom-scroll"},k={class:"table equal-space head-table"},A=t("thead",null,[t("tr",{class:"dark:bg-sidebar-dark2"},[t("th",null,"No"),t("th",null,"City Name"),t("th",null,"Country Name"),t("th",null,"State Name"),t("th",null,"Status"),t("th",null,"Action")])],-1),N={class:"min-w-[1.25rem]"},B={class:"min-w-[8.125rem]"},L={class:"min-w-[8.125rem]"},$={class:"min-w-[8.125rem]"},I={class:"min-w-[11.125rem]"},S=["href"],q=["onClick"];function D(s,E,r,F,V,i){const l=_("AdminLayout");return a(),u(l,null,{default:m(()=>[t("div",v,[t("div",b,[w,t("div",null,[t("a",{class:"text-white btn btn-primary hover:-translate-y-1 hover:transition-all hover:ease-in-out",href:s.route("cities.create"),style:{float:"right"}},"Create City",8,C)]),t("div",g,[t("div",x,[t("table",k,[A,t("tbody",null,[(a(!0),n(y,null,f(r.cities,(e,c)=>(a(),n("tr",{key:e.id},[t("td",N,o(c+1),1),t("td",B,o(e.name),1),t("td",L,o(e.country.name),1),t("td",$,o(e.state.name),1),t("td",I,o(e.status),1),t("td",null,[t("a",{href:s.route("cities.edit",e.id),class:"text-white btn btn-warning hover:-translate-y-1 hover:transition-all hover:ease-in-out",style:{margin:"10px"}},"Edit",8,S),t("button",{onClick:j=>i.deleteCity(e.id),class:"text-white btn btn-danger hover:-translate-y-1 hover:transition-all hover:ease-in-out"},"Delete",8,q)])]))),128))])])])])])])]),_:1})}const K=h(p,[["render",D]]);export{K as default};
