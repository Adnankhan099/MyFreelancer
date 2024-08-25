<template>
<CatApp :categories="props.categories">
<main class=" ">
    <div class="pt-[100px]"></div>
    <div class="md:mx-[50px] rounded-md" style="background-image:url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/678686c47c024e18e773c75e90aaab1c-1705999902381/hero-xl-x1.png')">
        <div class="bg-[#1e3964a6] rounded-md justify-center text-center items-center flex" style="min-height:500px">
           <div class="max-w-[700px]">
               <h1 class="text-5xl  text-white">Find the right <span class="text-[#13c379]">freelance</span> service, right away</h1>
           <h2  class="text-3xl mt-5  text-white">Browse the categories listed below to find the best talent around the world.</h2>
           </div>
        </div>

    </div>

    <div class="flex items-center gap-2 p-5 max-w-[1250px] mx-auto w-full; ">
        <h2 class="text-2xl font-bold ">Major Categories</h2>
    </div>
    <div class=" p-7  md:px-2 md:py-4 max-w-[1250px] mx-auto w-full; ">
        <div class="grid  grid-cols-1 md:grid-cols-4  gap-5">
            <div class="bg-[rgb(32 56 102 / 3%)] rounded-md" v-for="(category, index) in categories" :key="index">
                <a :href="route('category',category.slug)">
                    <figure>
                    <img :src='baseUrl+category.icon' class="h-[150px] w-full" height={40} width={40} alt='' />
                </figure>
                <ul class="p-3 text-center">
                    <p class="font-bold">{{ category.name }}</p>
                    <p class="mb-1" v-for="(subCategory, subIndex) in category.child_categories" :key="subIndex">{{ subCategory.name }}</p>

                </ul>
                </a>
            </div>



        </div>
    </div>
</main>
<div class=" flex-wrap  md:flex-nowrap  grid justify-center  p-7 gap-4 md:gap-2" style="background-color: whitesmoke;">
    <div class="w-full text-center mb-5">
        <h1 class=" text-4xl lg:text-5xl font-semibold leading-[55px]">Frequently asked questions </h1>
    </div>
    <div class="max-w-[1200px]">

       <div  v-for="(faq, index) in faqs" class="border-b" :key="index">
            <FaqItem :faq="faq" />
       </div>


    </div>
</div>
</CatApp>
    </template>
    <style scoped>
    .slider {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    }
    .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: transform 0.5s ease-in-out;
    /* Smooth transition effect */
    }
    .slide1 {

    background-image: url(@/assets/images/image158.png);
    }
    .slide2 {
    /* background-color: #2ca02c; */
    background-image: url(@/assets/images/pexels-ann-h-45017-176251.jpg);
    }
    .slide3 {
    background-color: #1f77b4;
    }
    </style>
   <script setup>
import { ref } from 'vue'
import CatApp from '@/Layouts/App.vue'
import FaqItem from '@/Components/Landing/FaqItem.vue'

const  baseUrl=window.Laravel.baseUrl

   const props = defineProps({
    categories: {
        type: Array,
    },
 faqs: {
        type: Array,
    },
 });


</script>
