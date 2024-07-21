import{m as te,p as s,I as _,J as y,x as ye,B as Ae,K as _e,s as O,q as K,L as me,M as h,k as m,F as Te}from"./app-DZcGkmw3.js";/**
 * Vue 3 Carousel 0.3.3
 * (c) 2024
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},pe={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function ke({config:e,slidesCount:n}){const{snapAlign:t,wrapAround:l,itemsToShow:r=1}=e;if(l)return Math.max(n-1,0);let o;switch(t){case"start":o=n-r;break;case"end":o=n-1;break;case"center":case"center-odd":o=n-Math.ceil((r-.5)/2);break;case"center-even":o=n-Math.ceil(r/2);break;default:o=0;break}return Math.max(o,0)}function Ce({config:e,slidesCount:n}){const{wrapAround:t,snapAlign:l,itemsToShow:r=1}=e;let o=0;if(t||r>n)return o;switch(l){case"start":o=0;break;case"end":o=r-1;break;case"center":case"center-odd":o=Math.floor((r-1)/2);break;case"center-even":o=Math.floor((r-2)/2);break;default:o=0;break}return o}function Q({val:e,max:n,min:t}){return n<t?e:Math.min(Math.max(e,t),n)}function Me({config:e,currentSlide:n,slidesCount:t}){const{snapAlign:l,wrapAround:r,itemsToShow:o=1}=e;let g=n;switch(l){case"center":case"center-odd":g-=(o-1)/2;break;case"center-even":g-=(o-2)/2;break;case"end":g-=o-1;break}return r?g:Q({val:g,max:t-o,min:0})}function he(e){return e?e.reduce((n,t)=>{var l;return t.type===Te?[...n,...he(t.children)]:((l=t.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?[...n,t]:n},[]):[]}function $({val:e,max:n,min:t=0}){return e>n?$({val:e-(n+1),max:n,min:t}):e<t?$({val:e+(n+1),max:n,min:t}):e}function Ne(e,n){let t;return n?function(...l){const r=this;t||(e.apply(r,l),t=!0,setTimeout(()=>t=!1,n))}:e}function Oe(e,n){let t;return function(...l){t&&clearTimeout(t),t=setTimeout(()=>{e(...l),t=null},n)}}function Se(e="",n={}){return Object.entries(n).reduce((t,[l,r])=>t.replace(`{${l}}`,String(r)),e)}var je=te({name:"ARIA",setup(){const e=m("config",_(Object.assign({},v))),n=m("currentSlide",s(0)),t=m("slidesCount",s(0));return()=>h("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Se(e.i18n.itemXofY,{currentSlide:n.value+1,slidesCount:t.value}))}}),De=te({name:"Carousel",props:pe,setup(e,{slots:n,emit:t,expose:l}){var r;const o=s(null),g=s([]),u=s(0),d=s(0),a=_(Object.assign({},v));let S=Object.assign({},v),w;const c=s((r=e.modelValue)!==null&&r!==void 0?r:0),M=s(0),I=s(0),A=s(0),j=s(0);let N,z;y("config",a),y("slidesCount",d),y("currentSlide",c),y("maxSlide",A),y("minSlide",j),y("slideWidth",u);function U(){w=Object.assign({},e.breakpoints),S=Object.assign(Object.assign(Object.assign({},S),e),{i18n:Object.assign(Object.assign({},S.i18n),e.i18n),breakpoints:void 0}),ne(S)}function D(){if(!w||!Object.keys(w).length)return;const i=Object.keys(w).map(f=>Number(f)).sort((f,x)=>+x-+f);let p=Object.assign({},S);i.some(f=>{const x=window.matchMedia(`(min-width: ${f}px)`).matches;return x&&(p=Object.assign(Object.assign({},p),w[f])),x}),ne(p)}function ne(i){Object.entries(i).forEach(([p,f])=>a[p]=f)}const ie=Oe(()=>{D(),P(),L()},16);function L(){if(!o.value)return;const i=o.value.getBoundingClientRect();u.value=i.width/a.itemsToShow}function P(){d.value<=0||(I.value=Math.ceil((d.value-1)/2),A.value=ke({config:a,slidesCount:d.value}),j.value=Ce({config:a,slidesCount:d.value}),a.wrapAround||(c.value=Q({val:c.value,max:A.value,min:j.value})))}ye(()=>{Ae(()=>L()),setTimeout(()=>L(),1e3),D(),re(),window.addEventListener("resize",ie,{passive:!0}),t("init")}),_e(()=>{z&&clearTimeout(z),N&&clearInterval(N),window.removeEventListener("resize",ie,{passive:!0})});let b=!1;const R={x:0,y:0},B={x:0,y:0},T=_({x:0,y:0}),V=s(!1),Y=s(!1),be=()=>{V.value=!0},we=()=>{V.value=!1};function ae(i){["INPUT","TEXTAREA","SELECT"].includes(i.target.tagName)||(b=i.type==="touchstart",b||i.preventDefault(),!(!b&&i.button!==0||k.value)&&(R.x=b?i.touches[0].clientX:i.clientX,R.y=b?i.touches[0].clientY:i.clientY,document.addEventListener(b?"touchmove":"mousemove",oe,!0),document.addEventListener(b?"touchend":"mouseup",le,!0)))}const oe=Ne(i=>{Y.value=!0,B.x=b?i.touches[0].clientX:i.clientX,B.y=b?i.touches[0].clientY:i.clientY;const p=B.x-R.x,f=B.y-R.y;T.y=f,T.x=p},a.throttle);function le(){const i=a.dir==="rtl"?-1:1,p=Math.sign(T.x)*.4,f=Math.round(T.x/u.value+p)*i;if(f&&!b){const x=ge=>{window.removeEventListener("click",x,!0)};window.addEventListener("click",x,!0)}C(c.value-f),T.x=0,T.y=0,Y.value=!1,document.removeEventListener(b?"touchmove":"mousemove",oe,!0),document.removeEventListener(b?"touchend":"mouseup",le,!0)}function re(){!a.autoplay||a.autoplay<=0||(N=setInterval(()=>{a.pauseAutoplayOnHover&&V.value||X()},a.autoplay))}function se(){N&&(clearInterval(N),N=null),re()}const k=s(!1);function C(i){const p=a.wrapAround?i:Q({val:i,max:A.value,min:j.value});c.value===p||k.value||(t("slide-start",{slidingToIndex:i,currentSlideIndex:c.value,prevSlideIndex:M.value,slidesCount:d.value}),k.value=!0,M.value=c.value,c.value=p,z=setTimeout(()=>{if(a.wrapAround){const f=$({val:p,max:A.value,min:0});f!==c.value&&(c.value=f,t("loop",{currentSlideIndex:c.value,slidingToIndex:i}))}t("update:modelValue",c.value),t("slide-end",{currentSlideIndex:c.value,prevSlideIndex:M.value,slidesCount:d.value}),k.value=!1,se()},a.transition))}function X(){C(c.value+a.itemsToScroll)}function H(){C(c.value-a.itemsToScroll)}const ue={slideTo:C,next:X,prev:H};y("nav",ue),y("isSliding",k);const ce=O(()=>Me({config:a,currentSlide:c.value,slidesCount:d.value}));y("slidesToScroll",ce);const xe=O(()=>{const i=a.dir==="rtl"?-1:1,p=ce.value*u.value*i;return{transform:`translateX(${T.x-p}px)`,transition:`${k.value?a.transition:0}ms`,margin:a.wrapAround?`0 -${d.value*u.value}px`:"",width:"100%"}});function de(){U(),D(),P(),L(),se()}Object.keys(pe).forEach(i=>{["modelValue"].includes(i)||K(()=>e[i],de)}),K(()=>e.modelValue,i=>{i!==c.value&&C(Number(i))}),K(d,P),t("before-init"),U();const ve={config:a,slidesCount:d,slideWidth:u,next:X,prev:H,slideTo:C,currentSlide:c,maxSlide:A,minSlide:j,middleSlide:I};l({updateBreakpointsConfigs:D,updateSlidesData:P,updateSlideWidth:L,initDefaultConfigs:U,restartCarousel:de,slideTo:C,next:X,prev:H,nav:ue,data:ve});const W=n.default||n.slides,F=n.addons,fe=_(ve);return()=>{const i=he(W==null?void 0:W(fe)),p=(F==null?void 0:F(fe))||[];i.forEach((G,q)=>G.props.index=q);let f=i;if(a.wrapAround){const G=i.map((J,E)=>me(J,{index:-i.length+E,isClone:!0,key:`clone-before-${E}`})),q=i.map((J,E)=>me(J,{index:i.length+E,isClone:!0,key:`clone-after-${E}`}));f=[...G,...i,...q]}g.value=i,d.value=Math.max(i.length,1);const x=h("ol",{class:"carousel__track",style:xe.value,onMousedownCapture:a.mouseDrag?ae:null,onTouchstartPassiveCapture:a.touchDrag?ae:null},f),ge=h("div",{class:"carousel__viewport"},x);return h("section",{ref:o,class:{carousel:!0,"is-sliding":k.value,"is-dragging":Y.value,"is-hover":V.value,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":a.i18n.ariaGallery,tabindex:"0",onMouseenter:be,onMouseleave:we},[ge,p,h(je)])}}}),Z;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(Z||(Z={}));const Le={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Ee(e){return e in Z}const ee=e=>{const n=m("config",_(Object.assign({},v))),t=String(e.name),l=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!Ee(t))return;const r=Le[t],o=h("path",{d:r}),g=n.i18n[l]||e.title||t,u=h("title",g);return h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":g},[u,o])};ee.props={name:String,title:String};const Pe=(e,{slots:n,attrs:t})=>{const{next:l,prev:r}=n||{},o=m("config",_(Object.assign({},v))),g=m("maxSlide",s(1)),u=m("minSlide",s(1)),d=m("currentSlide",s(1)),a=m("nav",{}),{dir:S,wrapAround:w,i18n:c}=o,M=S==="rtl",I=h("button",{type:"button",class:["carousel__prev",!w&&d.value<=u.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":c.ariaPreviousSlide,onClick:a.prev},(r==null?void 0:r())||h(ee,{name:M?"arrowRight":"arrowLeft"})),A=h("button",{type:"button",class:["carousel__next",!w&&d.value>=g.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":c.ariaNextSlide,onClick:a.next},(l==null?void 0:l())||h(ee,{name:M?"arrowLeft":"arrowRight"}));return[I,A]},Re=()=>{const e=m("config",_(Object.assign({},v))),n=m("maxSlide",s(1)),t=m("minSlide",s(1)),l=m("currentSlide",s(1)),r=m("nav",{}),o=u=>$({val:l.value,max:n.value,min:0})===u,g=[];for(let u=t.value;u<n.value+1;u++){const d=h("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(u)},"aria-label":Se(e.i18n.ariaNavigateToSlide,{slideNumber:u+1}),onClick:()=>r.slideTo(u)}),a=h("li",{class:"carousel__pagination-item",key:u},d);g.push(a)}return h("ol",{class:"carousel__pagination"},g)};var Be=te({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:n}){const t=m("config",_(Object.assign({},v))),l=m("currentSlide",s(0)),r=m("slidesToScroll",s(0)),o=m("isSliding",s(!1)),g=O(()=>e.index===l.value),u=O(()=>e.index===l.value-1),d=O(()=>e.index===l.value+1),a=O(()=>{const S=Math.floor(r.value),w=Math.ceil(r.value+t.itemsToShow-1);return e.index>=S&&e.index<=w});return()=>{var S;return h("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":a.value,"carousel__slide--active":g.value,"carousel__slide--prev":u.value,"carousel__slide--next":d.value,"carousel__slide--sliding":o.value},"aria-hidden":!a.value},(S=n.default)===null||S===void 0?void 0:S.call(n,{isActive:g.value,isClone:e.isClone,isPrev:u.value,isNext:d.value,isSliding:o.value,isVisible:a.value}))}}});export{De as C,Pe as N,Re as P,Be as S};
