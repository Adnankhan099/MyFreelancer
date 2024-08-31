<template>
    <CatApp :categories="categories" :flash="flash">
        <main class="max-w-[1250px] mx-auto w-full;">
            <div class="mt-5">
                <div class="grid grid-cols-6 gap-5 relative">
                    <div class="col-span-4">
                        <h1 class="text-3xl font-bold mb-5">{{ jobDetail.title }}</h1>

                        <div>
                            <h1 class="text-xl font-bold mb-3">About the Job</h1>
                            <p v-html="jobDetail.description"></p>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class=" sticky top-5 p-0">
                            <div class="bg-[#f9f9f9] relative shadow-sm rounded-sm p-6 max-w-md mx-auto">
                                <h1 class="text-xl font-medium mb-5"><strong
                                    v-if="jobDetail.min_price && jobDetail.max_price">Budget: <span
                                    v-if="jobDetail.min_price!=0">${{ jobDetail.min_price }} - </span> <span
                                    v-else>Over </span> ${{ jobDetail.max_price }}</strong>
                                    <strong v-else>Budget: {{ jobDetail.price }}</strong></h1>

                                <div class="w-full text-center  bg-[#203964]  rounded-lg p-3 ">
                                    <a :href="route('proposal',jobDetail.slug)"
                                       class="mt-6 text-md text-white font-medium w-full">Submit Proposal</a>
                                </div>
                            </div>
                            <div class="bg-[#f9f9f9] mt-7 relative shadow-sm rounded-sm p-6 max-w-md mx-auto">
                                <h1 class="text-2xl font-medium mb-5">About Employer</h1>
                                <div class="flex flex-row items-center">
                                    <div class="w-[50%] h-50">
                                        <Link :href="route('user.public.profile', jobDetail?.user_detail?.id)">
                                            <img class="rounded-full w-[120px]"
                                                 :src="jobDetail?.user_detail?.image ? baseUrl + jobDetail?.user_detail?.image : 'https://cdn-icons-png.freepik.com/512/6322/6322558.png'"
                                                 alt="Profile Image">
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-semibold mt-4">
                                            <a :href="`/infamousteam?source=gig_page&gigs=slug%3Afixing-bugs-in-wordpress-php-django-python%2Cpckg_id%3A1`">{{
                                                    jobDetail?.user_detail?.name
                                                }}</a>
                                        </h2>
                                        <p class="text-gray-600">{{ jobDetail?.user_detail?.country }}</p>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <p class="text-gray-700 font-bold">
                                        {{ jobDetail?.user_detail?.profile_detail?.headline }}</p>
                                    <p class="text-gray-700 mt-2">{{
                                            limitText(jobDetail?.user_detail?.profile_detail?.overview ?? '', 300)
                                        }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </CatApp>
</template>

<style scoped>
.carousel__item {
    height: 500px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 0px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.carousel__icon {
    fill: white !important;
}

.tags li {
    display: inline-block;
}

.related-link {
    background-color: #efeff0;
    border-color: transparent;
    border-radius: 20px;
    color: #62646a;
    display: inline-block;
    font-size: 14px;
    line-height: 120%;
    margin: 0 7px 15px;
    padding: 10px 20px;
}

.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 1.25rem; /* Adjust based on your header height */
}
</style>

<script setup>
import {ref} from 'vue'
import CatApp from '@/Layouts/CatApp.vue'
import FaqItem from '@/Components/Landing/FaqItem.vue'
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {Link} from "@inertiajs/vue3";
import {route} from "ziggy-js";
const baseUrl = window.Laravel.baseUrl

const props = defineProps({
    categories: {
        type: Array,
    },
    jobDetail: Object,
    tags: Array,
    flash: Object
})

function limitText(text, maxLength) {
    if (typeof text === 'string' && text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    } else {
        return text;
    }
}
const isMenuOpen = ref(false)
const isDropdownOpen = ref([])
const currentSlide = ref(0)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const toggleDropdown = (index) => {
    isDropdownOpen.value[index] = !isDropdownOpen.value[index]
}
const carousel = ref(null)

// Methods to navigate the slider
const nextSlide = () => {
    carousel.value.next()
}

const prevSlide = () => {
    carousel.value.prev()
}

const slideTo = (val) => {
    currentSlide.value = val
}
</script>
