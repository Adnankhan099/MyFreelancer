import{p as m,s as B,o as s,f as o,a as e,j as x,c as I,w as N,b as R,g as y,F as w,d as k,v as $,$ as T,t as c,O as L,h as U,i as A,n as O,C as z,D}from"./app-B3arL9hk.js";import{d as H}from"./index-Bmv2wGZ_.js";import{_ as j}from"./FaqItem.vue_vue_type_style_index_0_scoped_25b28c96_lang-D6kGlWOE.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./carousel-CkRkCyd5.js";import"./Footer-gyJfIcU5.js";const E=["innerHTML"],P=["href"],W={__name:"ReadMore",props:{content:{type:String,required:!0},job:Object},setup(l){const r=l,a=m(!1),C=B(()=>a.value?r.content:M(r.content,50)),d=()=>{a.value=!a.value},M=(u,_)=>{const p=document.createElement("div");p.innerHTML=u;const f=(p.textContent||p.innerText||"").split(" ");return f.length<=_?u:f.slice(0,_).join(" ")+"..."};return(u,_)=>(s(),o("div",null,[e("div",{innerHTML:C.value},null,8,E),e("span",null,[a.value?x("",!0):(s(),o("a",{key:0,href:u.route("job-detail",l.job.slug)},"Read More",8,P))]),a.value?(s(),o("button",{key:0,onClick:d},"Show Less")):x("",!0)]))}},q=F(W,[["__scopeId","data-v-ec1d4f5f"]]),h=l=>(z("data-v-c7ee9bdd"),l=l(),D(),l),G={class:"max-w-[1250px] mx-auto w-full;"},J={class:"grid grid-cols-10 mt-5 s gap-10"},K={class:"col-span-3 shadow-sm"},Q={class:"sticky top-5 p-0"},X={class:"bg-[#f9f9f9] relative shadow-sm rounded-lg p-6 max-w-md mx-auto"},Y=h(()=>e("h2",{class:"text-2xl font-bold mb-4"},"Filters",-1)),Z={class:"mb-4"},ee=h(()=>e("h3",{class:"text-lg font-semibold mb-2"},"Categories",-1)),te={class:"space-y-2"},se={class:"inline-flex items-center"},oe=["value"],le={class:"ml-2"},ae={class:"mb-4"},ne=h(()=>e("h3",{class:"text-lg font-semibold mb-2"},"Price Range",-1)),re={class:"flex items-center space-x-2"},ie=h(()=>e("span",null,"-",-1)),ce={class:"mb-4"},de=h(()=>e("h3",{class:"text-lg font-semibold mb-2"},"Ratings",-1)),ue={class:"space-y-2"},_e={class:"inline-flex items-center"},pe=["value","onUpdate:modelValue"],me={class:"ml-2"},he={class:"col-span-7"},fe={class:"flex flex-col md:flex-row md:items-start"},ge={class:"flex-1 mb-4 md:mb-0"},ve={class:"text-lg font-semibold mb-2"},xe=["href"],be={class:"flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4"},ye=["href"],we={class:"mt-4"},ke={class:"flex flex-wrap text-gray-700 text-sm mb-2"},Ce={key:0,class:"mr-4"},Me={class:"flex items-center"},Se=h(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-5 h-5 mr-1"},[e("path",{d:"M12 11.9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"}),e("path",{d:"M18.4 9.4C18.4 5.9 15.6 3 12 3 8.4 3 5.6 5.9 5.6 9.4c0 1.5.6 2.9 1.5 4.1 1.3 1.8 5 7.5 5 7.5s3.6-5.7 5-7.5c.7-1.2 1.3-2.5 1.3-4.1z"})],-1)),Ue={class:"flex flex-wrap text-gray-700 text-sm mb-2"},Ve={class:"mr-4"},$e={key:0},Be={key:0},Fe={key:1},Ie={key:1},Ne={class:"flex justify-center mt-4 space-x-2"},Re={key:0},Te=["href"],Le=["href"],Ae={key:1,class:"px-3 py-1"},Oe={key:1},ze=["href"],De={__name:"FindWork",props:{categories:{type:Array},filters:{type:Object},jobs:Array,tags:Array},setup(l){var _,p,S,f;window.Laravel.baseUrl;const r=l,a=m({categories_id:((_=r.filters)==null?void 0:_.categories_id)||[],price_min:((p=r.filters)==null?void 0:p.price_min)||null,price_max:((S=r.filters)==null?void 0:S.price_max)||null,rating:((f=r.filters)==null?void 0:f.rating)||null}),C=m([{value:1,label:"1 Star & Up"},{value:2,label:"2 Stars & Up"},{value:3,label:"3 Stars & Up"},{value:4,label:"4 Stars & Up"},{value:5,label:"5 Stars"}]),d=()=>{H.Inertia.get(route("find-work"),a.value)};m(!1),m([]),m(null);const M=B(()=>{const n=[],{current_page:i,last_page:g}=r.jobs;for(let t=1;t<=g;t++)t===1||t===g||t>=i-2&&t<=i+2?n.push(t):n[n.length-1]!=="..."&&n.push("...");return n}),u=n=>`${r.jobs.path}?page=${n}`;return(n,i)=>(s(),I(j,{categories:l.categories},{default:N(()=>{var g;return[e("main",G,[e("div",J,[e("div",K,[e("div",Q,[e("div",X,[Y,e("form",{onSubmit:R(d,["prevent"])},[e("div",Z,[ee,e("ul",te,[(s(!0),o(w,null,y(l.categories,(t,v)=>(s(),o("li",{key:v},[e("label",se,[k(e("input",{onChange:d,type:"checkbox",name:"categories_id[]",value:t.id,class:"form-checkbox text-indigo-600","onUpdate:modelValue":i[0]||(i[0]=b=>a.value.categories_id=b)},null,40,oe),[[T,a.value.categories_id]]),e("span",le,c(t.name),1)])]))),128))])]),e("div",ae,[ne,e("div",re,[k(e("input",{onChange:d,type:"number",class:"w-full p-2 border border-gray-300 rounded",placeholder:"Min","onUpdate:modelValue":i[1]||(i[1]=t=>a.value.price_min=t)},null,544),[[$,a.value.price_min]]),ie,k(e("input",{onChange:d,type:"number",class:"w-full p-2 border border-gray-300 rounded",placeholder:"Max","onUpdate:modelValue":i[2]||(i[2]=t=>a.value.price_max=t)},null,544),[[$,a.value.price_max]])])]),e("div",ce,[de,e("ul",ue,[(s(!0),o(w,null,y(C.value,t=>(s(),o("li",{key:t.value},[e("label",_e,[k(e("input",{onChange:d,type:"radio",name:"rating",class:"form-radio text-indigo-600",value:t.value,"onUpdate:modelValue":v=>a.value.rating=v},null,40,pe),[[L,a.value.rating]]),e("span",me,c(t.label),1)])]))),128))])])],32)])])]),e("div",he,[(s(!0),o(w,null,y((g=l.jobs)==null?void 0:g.data,(t,v)=>{var b,V;return s(),o("div",{key:v,class:"job-tile cursor-pointer px-6 py-4 w-full bg-white shadow-sm rounded-md mb-4"},[e("div",fe,[e("div",ge,[e("h2",ve,[e("a",{href:n.route("job-detail",t.slug),class:"text-blue-600 hover:underline"},c(t.title),9,xe)])]),e("div",be,[e("a",{href:n.route("job-detail",t.slug),class:"bg-[#1e3a62] hover:bg-gray-200 text-white font-semibold py-2 px-4 rounded inline-flex items-center"}," Apply Now ",8,ye)])]),e("div",we,[e("ul",ke,[(b=t==null?void 0:t.user_detail)!=null&&b.country?(s(),o("li",Ce,[e("div",Me,[Se,U(" "+c((V=t==null?void 0:t.user_detail)==null?void 0:V.country),1)])])):x("",!0)]),e("ul",Ue,[e("li",Ve,[t.min_price&&t.max_price?(s(),o("strong",$e,[U("Budget: "),t.min_price!=0?(s(),o("span",Be,"$"+c(t.min_price)+" - ",1)):(s(),o("span",Fe,"Over ")),U(" $"+c(t.max_price),1)])):(s(),o("strong",Ie,"Budget: "+c(t.price),1))])]),A(q,{content:t.description,job:t},null,8,["content","job"])])])}),128)),e("nav",null,[e("ul",Ne,[l.jobs.prev_page_url?(s(),o("li",Re,[e("a",{href:l.jobs.prev_page_url,class:"px-3 py-1 border rounded-lg hover:bg-gray-200"}," Previous ",8,Te)])):x("",!0),(s(!0),o(w,null,y(M.value,t=>(s(),o("li",{key:t,class:O({"font-bold":t===l.jobs.current_page})},[t!=="..."?(s(),o("a",{key:0,href:u(t),class:"px-4 py-2 border rounded-full text-white bg-[#1f3a63] hover:bg-[red]"},c(t),9,Le)):(s(),o("span",Ae,"..."))],2))),128)),l.jobs.next_page_url?(s(),o("li",Oe,[e("a",{href:l.jobs.next_page_url,class:"px-3 py-1 border rounded-lg hover:bg-gray-200"}," Next ",8,ze)])):x("",!0)])])])])])]}),_:1},8,["categories"]))}},Ge=F(De,[["__scopeId","data-v-c7ee9bdd"]]);export{Ge as default};
