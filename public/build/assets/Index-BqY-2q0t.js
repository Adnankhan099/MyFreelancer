import{_ as r}from"./AdminLayout-BhHPgADY.js";import{_ as c}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{Q as h,o,c as p,w as m,a as t,b as e,s as y,F as g,t as l}from"./app-BdUaRRxv.js";import"./logo2-BR_e6daD.js";/* empty css                                                               */const k={props:{verifications:Array},components:{AdminLayout:r},methods:{getImagePath(n){return n?"/"+n:""}}},b={class:"col-span-6 lg:col-span-12"},I={class:"card"},P=t("div",{class:"card-header border-b-0"},[t("div",{class:"flex flex-col"},[t("h3",{class:"text-lg font-medium"},"Verification")])],-1),A={class:"card-body"},f={class:"overflow-auto custom-scroll"},x={class:"table equal-space head-table"},N=t("thead",null,[t("tr",{class:"dark:bg-sidebar-dark2"},[t("th",null,"No"),t("th",null," User Id"),t("th",null,"Account Type"),t("th",null," Account Info"),t("th",null,"First Name"),t("th",null,"Last Name"),t("th",null," Address"),t("th",null,"Countries"),t("th",null,"Street"),t("th",null," City/State Zip"),t("th",null,"Current photo"),t("th",null,"Govt Id Front"),t("th",null,"Govt Id Back"),t("th",null,"Govt Id Type"),t("th",null," Address Proof"),t("th",null," Address Proof Type")])],-1),B={key:0},C={key:1},L={key:0},F={key:1},T={key:0},i={key:1},w={key:0},G={key:1};function S(n,V,a,q,z,d){const _=h("AdminLayout");return o(),p(_,null,{default:m(()=>[t("div",b,[t("div",I,[P,t("div",A,[t("div",f,[t("table",x,[N,t("tbody",null,[(o(!0),e(g,null,y(a.verifications,(s,u)=>(o(),e("tr",{key:s.id},[t("td",null,l(u+1),1),t("td",null,l(s.users_id),1),t("td",null,l(s.accountType),1),t("td",null,l(s.accountInfo),1),t("td",null,l(s.first_name),1),t("td",null,l(s.last_name),1),t("td",null,l(s.address),1),t("td",null,l(s.countries_id),1),t("td",null,l(s.street),1),t("td",null,l(s.city_state_zip),1),t("td",null,[s.current_photo?(o(),e("span",B,l(d.getImagePath(s.current_photo)),1)):(o(),e("span",C," No Photo "))]),t("td",null,[s.gov_id_front?(o(),e("span",L,l(d.getImagePath(s.gov_id_front)),1)):(o(),e("span",F," No Photo "))]),t("td",null,[s.gov_id_back?(o(),e("span",T,l(d.getImagePath(s.gov_id_back)),1)):(o(),e("span",i," No Photo "))]),t("td",null,l(s.gov_id_type),1),t("td",null,[s.address_proof?(o(),e("span",w,l(d.getImagePath(s.address_proof)),1)):(o(),e("span",G," No Photo "))]),t("td",null,l(s.adreess_proof_type),1)]))),128))])])])])])])]),_:1})}const j=c(k,[["render",S]]);export{j as default};
