import{T as l,o as m,d as u,a as e,e as h,f as d,v as n,u as t,t as p,g as f,p as _,h as g}from"./app-Buf_fCfZ.js";import{u as w}from"./vue-router-DF1hiObG.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css                                                                       *//* empty css                                                               */const r=a=>(_("data-v-522efd4d"),a=a(),g(),a),v={class:"page-wrapper"},b={class:"page-body h-[100vh] !mt-0 bg-cover bg-no-repeat bg-[url('../../assets/images/dotsbg.jpg')]"},y={class:"!flex items-center justify-center h-full p-[.9375rem] common-animate-main ratio_asos"},k={class:"grid grid-cols-12 gap-0 mx-auto w-full max-w-[70%] xl:max-w-[50%] md:max-w-[70%] sm:max-w-[80%] 2sm:max-w-[100%] xl:flex xl:justify-center"},S={class:"relative col-span-5 bg-white 2xl:col-span-6 z-1 xl:col-span-12 rounded-xl max-w-[29.375rem] min-w-[18.75rem] sm:min-w-[22.75rem] 2sm:min-w-[18.75rem] h-max"},M=r(()=>e("h3",null,"My Freelancer Account",-1)),j=r(()=>e("p",null,"Enter your email id and password for log in to your account",-1)),B={"text-danger":""},E={class:"relative"},F={"text-danger":""},I=r(()=>e("div",{class:"password-icon"},[e("i",{class:"cursor-pointer w-4 h-4 stroke-title right-[25px] rtl:right-unset top-1/2 rtl:left-[25px] absolute -translate-y-1/2 showHidePassword","data-feather":"eye"}),e("i",{class:"cursor-pointer w-4 h-4 stroke-title right-[25px] rtl:right-unset top-1/2 rtl:left-[25px] absolute -translate-y-1/2 showHidePassword","data-feather":"eye-off"})],-1)),P=f('<div class="flex justify-between items-center gap-1" data-v-522efd4d><div class="flex items-center gap-2" data-v-522efd4d><label class="checkbox w-[1rem] h-[1rem] cursor-pointer" data-v-522efd4d><input class="peer" type="checkbox" data-v-522efd4d><span class="checkbox-indicator peer-checked:!bg-primary !border-primary" data-v-522efd4d><i data-feather="check" data-v-522efd4d></i></span></label><span data-v-522efd4d>Remember Me</span></div></div><button type="submit" class="btn btn-primary !text-white hover:drop-shadow-lg my-2" data-v-522efd4d>Sign in</button>',2),V=r(()=>e("div",{class:"col-span-7 rounded-lg 2xl:col-span-6 z-1 xl:col-span-12 xl:hidden"},[e("div",{class:"relative flex items-center justify-center"},[e("img",{class:"w-[75%] 2xl:w-full",src:"https://admin.pixelstrap.com/My Freelancer/assets/images/svg/login.svg",alt:""}),e("img",{class:"common-animate animate-ping bottom-[35%] absolute left-[25%] w-[33%] animate__animated animate__infinite animate__shakeY animate__slower",src:"https://admin.pixelstrap.com/My Freelancer/assets/images/svg/login2.svg",alt:"register vector"})])],-1)),R={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(a){w(),l({});const s=l({email:"",password:"",remember:!1}),c=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(q,o)=>(m(),u("main",v,[e("div",b,[e("div",y,[e("div",k,[e("div",S,[e("form",{class:"theme-form flex flex-col gap-3 !m-0 p-8 2sm:p-4",onSubmit:h(c,["prevent"]),novalidate:""},[M,j,e("div",null,[d(e("input",{type:"email",placeholder:"Enter your id",required:"","onUpdate:modelValue":o[0]||(o[0]=i=>t(s).email=i)},null,512),[[n,t(s).email]]),e("span",B,p(t(s).errors.email),1)]),e("div",E,[d(e("input",{type:"password",id:"password",name:"password",required:"",placeholder:"Enter your Password","onUpdate:modelValue":o[1]||(o[1]=i=>t(s).password=i)},null,512),[[n,t(s).password]]),e("span",F,p(t(s).errors.password),1),I]),P],32)]),V])])])]))}},T=x(R,[["__scopeId","data-v-522efd4d"]]);export{T as default};
