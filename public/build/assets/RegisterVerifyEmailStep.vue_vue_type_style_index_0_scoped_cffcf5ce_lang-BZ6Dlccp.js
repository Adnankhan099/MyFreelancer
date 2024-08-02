import{T as v,s as w,o as $,f as T,a as e,d as n,v as g,u as s,t as d,E as k,h as S,b as F,j as I,R as N,C as E,D as V,n as b,a1 as _}from"./app-DQ_8xrbb.js";import{u as P,r as u,e as R,c as C}from"./index-Da_VbTpJ.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=l=>(E("data-v-8563db12"),l=l(),V(),l),z=N('<div class="flex items-center" data-v-8563db12><hr class="flex-1" data-v-8563db12><p class="mx-1 min-w-max text-gray-500" data-v-8563db12>Select Social Media</p><hr class="flex-1" data-v-8563db12></div><div class="flex justify-center items-center space-x-5" data-v-8563db12><div class="cursor-pointer bg-blue-600 border text-center rounded-full p-1" data-v-8563db12><i class="mdi mdi-facebook text-white" style="font-size:30px;" data-v-8563db12></i></div><div class="cursor-pointer bg-white border text-center rounded-full p-1" data-v-8563db12><i class="mdi mdi-google text-green-500" style="font-size:30px;" data-v-8563db12></i></div></div><div class="flex items-center" data-v-8563db12><hr class="flex-1" data-v-8563db12><p class="mx-1 min-w-max text-gray-500" data-v-8563db12>OR</p><hr class="flex-1" data-v-8563db12></div>',3),A={class:"flex flex-col space-y-3"},U=h(()=>e("label",{class:"block text-gray-700",for:"name"},"Full Name *",-1)),M={class:"text-danger"},D=h(()=>e("label",{class:"block text-gray-700",for:"email"},"Email *",-1)),W={class:"text-danger"},Y={class:"flex justify-end flex-col md:flex-row"},q=["disabled"],H=h(()=>e("i",{class:"mdi mdi-step-forward ml-2"},null,-1)),O={__name:"RegisterBasicStep",props:{step:Number,setBasicInfo:Function,nextStep:Function},setup(l){v({});const t=v({email:"",name:""}),c=P({email:{required:u,email:R},name:{required:u}},t),i=w(()=>c.value.$invalid===!1),x=()=>{c.value.$touch()},f=()=>{c.value.$touch(),c.value.$invalid||t.post(route("register"),{onFinish:()=>console.log(3)})};return(B,o)=>{var m,p;return l.step===0?($(),T("form",{key:0,onSubmit:F(f,["prevent"]),novalidate:"",class:"flex flex-col space-y-7"},[z,e("div",A,[e("div",null,[U,n(e("input",{id:"name",type:"text",class:"form-input mt-1 block w-full","onUpdate:modelValue":o[0]||(o[0]=a=>s(t).name=a)},null,512),[[g,s(t).name]]),e("p",M,d(s(t).errors.name),1)]),e("div",null,[D,n(e("input",{id:"email",type:"email",class:"form-input mt-1 block w-full",onInput:x,"onUpdate:modelValue":o[1]||(o[1]=a=>s(t).email=a)},null,544),[[g,s(t).email]]),n(e("p",{class:"text-red-500"},d((p=(m=s(c))==null?void 0:m.email)!=null&&p.$error?"We don’t recognize this email address.":""),513),[[k,s(c).email.$error]]),e("p",W,d(s(t).errors.email),1)])]),e("div",Y,[e("button",{disabled:!i.value,type:"submit",class:"btn btn-primary text-lg bg-primary text-white py-2 px-4 pr-10 pl-10 rounded"},[S(" Proceed "),H],8,q)])],32)):I("",!0)}}},ve=j(O,[["__scopeId","data-v-8563db12"]]),r=l=>(E("data-v-fcca99c6"),l=l(),V(),l),Z=r(()=>e("div",{class:"flex items-center"},[e("hr",{class:"flex-1"}),e("p",{class:"mx-1 min-w-max"},"Select An Account Type"),e("hr",{class:"flex-1"})],-1)),G={class:"flex flex-col sm:flex-row justify-between space-y-5 sm:space-y-0 sm:space-x-5"},J=r(()=>e("img",{width:"70",height:"70",src:"https://www.guru.com/images/svg/Employer.svg"},null,-1)),K=r(()=>e("div",null,[e("h5",{class:"text-lg text-center"},"Employer"),e("p",{class:"text-sm text-center"},"(I want to Hire)")],-1)),L=[J,K],Q=r(()=>e("img",{width:"70",height:"70",src:"https://www.guru.com/images/svg/Freelancer.svg"},null,-1)),X=r(()=>e("div",null,[e("h5",{class:"text-lg text-center"},"Freelancer"),e("p",{class:"text-sm text-center"},"(I am looking for Work)")],-1)),ee=[Q,X],se={class:"text-center"},te=r(()=>e("div",{class:"flex items-center"},[e("hr",{class:"flex-1"}),e("p",{class:"mx-1 min-w-max"},"Set Password"),e("hr",{class:"flex-1"})],-1)),oe=r(()=>e("label",{for:"password",class:"block text-gray-700"},"Password *",-1)),le={class:"text-red-500 text-sm"},ae={class:"inline-flex items-center"},re=r(()=>e("span",{class:"ml-2 text-gray-700"},"I agree to the Privacy Policy, Terms of Service and IP Policy.",-1)),ie={class:"text-red-500 text-sm"},ce={class:"inline-flex items-center"},ne=r(()=>e("span",{class:"ml-2 text-gray-700"},"Send me useful emails to help me get the most out of myfreelancer.com",-1)),de={class:"flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 justify-right text-right"},me=["disabled"],pe=r(()=>e("i",{class:"mdi mdi-step-forward ml-2"},null,-1)),ue={__name:"RegisterAccountTypeStep",props:{step:Number,setBasicInfo:Function,nextStep:Function},setup(l){const t=v({password:"",roleType:"",agreeToTerms:!1,agreeToEmail:!1}),y=C.regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),i=P({password:{required:u,strongPassword:y},roleType:{required:u},agreeToTerms:{required:u},agreeToEmail:{}},t),x=w(()=>!i.$invalid),f=()=>{i.value.$touch(),i.value.$invalid||t.post(route("step2"),{onFinish:()=>console.log("Form submitted successfully")})};return(B,o)=>{var m,p;return l.step==1?($(),T("form",{key:0,onSubmit:F(f,["prevent"]),class:"flex flex-col space-y-7",novalidate:""},[Z,e("div",G,[e("div",{onClick:o[0]||(o[0]=a=>s(t).roleType="Employer"),class:b([{"bg-blue-500":s(t).roleType==="Employer"},"w-full h-48 overflow-auto cursor-pointer rounded-lg border border-gray-300 p-4 flex flex-col items-center justify-center space-y-2 transition-colors duration-200"])},L,2),e("div",{onClick:o[1]||(o[1]=a=>s(t).roleType="Freelancer"),class:b([{"bg-blue-500":s(t).roleType==="Freelancer"},"w-full h-48 overflow-auto cursor-pointer rounded-lg border border-gray-300 p-4 flex flex-col items-center justify-center space-y-2 transition-colors duration-200"])},ee,2)]),e("div",se,[n(e("p",{class:"px-10 text-red-500"},d((p=(m=s(i))==null?void 0:m.roleType)!=null&&p.$error?"Please select above if you are a employer looking to hire or a freelancer looking for work.":""),513),[[k,s(i).roleType.$error]])]),te,e("div",null,[oe,n(e("input",{id:"password",type:"password","onUpdate:modelValue":o[2]||(o[2]=a=>s(t).password=a),class:b([{"border-red-500":s(i).password.$error},"mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"])},null,2),[[g,s(t).password]]),e("span",le,d(s(i).password.$error?"Your password must be between 8 and 16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.":""),1)]),e("div",null,[e("label",ae,[n(e("input",{type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=a=>s(t).agreeToTerms=a),class:"form-checkbox text-blue-500"},null,512),[[_,s(t).agreeToTerms]]),re]),e("p",ie,d(s(t).agreeToTerms==!1?"You must agree to the terms":""),1)]),e("div",null,[e("label",ce,[n(e("input",{type:"checkbox","onUpdate:modelValue":o[4]||(o[4]=a=>s(t).agreeToEmail=a),class:"form-checkbox text-blue-500"},null,512),[[_,s(t).agreeToEmail]]),ne])]),e("div",de,[e("button",{disabled:!x.value,type:"submit",class:"btn btn-primary text-lg bg-primary text-white py-2 px-4 pr-10 pl-10 rounded"},[S(" Proceed "),pe],8,me)])],32)):I("",!0)}}},ge=j(ue,[["__scopeId","data-v-fcca99c6"]]);export{ve as R,ge as a};
