<template>
    <CatApp :categories="categories">
        <main class="max-w-[1250px] mt-5 mx-auto w-full;">
            <div class="mt-5">
                <div class="grid grid-cols-6 gap-5 relative">
                    <div class="col-span-4">
                        <h1 class="text-3xl font-medium mb-5">{{ billBoardDetail.title }}</h1>
                        <div class="relative">

                            <Carousel
                                ref="carousel"
                                :items-to-show="1"
                                v-model="currentSlide"
                                :items-to-scroll="1"
                                :loop="true"
                            >
                                <template
                                    v-for="(image, imgIndex) in [billBoardDetail.video, billBoardDetail.img1, billBoardDetail.img2, billBoardDetail.img3]"
                                    :key="imgIndex">
                                    <slide v-if="image">
                                        <template v-if="isVideo(image)">
                                            <VideoPlayer :videoUrl="(baseUrl + image)" vidoeHeight="400px"
                                                         class="h-[400px]"/>
                                        </template>
                                        <template v-else>
                                            <img :src="baseUrl + image" class="h-[400px] w-auto"
                                                 :alt="`Gig Image ${imgIndex + 1}`">
                                        </template>
                                    </slide>
                                </template>
                                <template #addons>
                                    <Navigation/>
                                    <Pagination/>
                                </template>
                            </Carousel>
                            <Carousel
                                id="thumbnails"
                                class="mx-16"
                                :items-to-show="2"
                                :wrap-around="true"
                                v-model="currentSlide"
                                ref="carousel"
                            >
                                <Slide
                                    v-for="(image, imgIndex) in [ billBoardDetail.img1, billBoardDetail.img2, billBoardDetail.img3]"
                                    :key="imgIndex">
                                    <img :src="baseUrl + image" @click="slideTo(imgIndex - 1)"
                                         class="h-[150px] w-full p-3" :alt="`Gig Image ${imgIndex + 1}`">
                                </Slide>
                            </Carousel>
                        </div>

                        <div>
                            <h1 class="text-xl font-medium mb-3 mt-5">About the Billboard</h1>
                            <p v-html="billBoardDetail.pricing_description"></p>

                            <div class="bg-[#f9f9f9] mt-5 relative shadow-sm rounded-sm p-6 w-full mx-auto">
                                <h1 class="text-xl font-medium mb-5">About Freelancer</h1>
                                <hr>
                                <div class="flex flex-row items-center">
                                    <div class="w-[50%] h-50">
                                        <Link :href="route('user.public.profile', billBoardDetail?.user_detail.id)">

                                            <img class="rounded-full w-[120px]"
                                                 :src="billBoardDetail?.user_detail?.profile_detail?.header_photo ? baseUrl + billBoardDetail?.user_detail?.profile_detail?.header_photo : 'https://cdn-icons-png.freepik.com/512/6322/6322558.png'"
                                                 alt="Profile Image">
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-semibold mt-4">
                                            <a :href="`/infamousteam?source=gig_page&gigs=slug%3Afixing-bugs-in-wordpress-php-django-python%2Cpckg_id%3A1`">{{
                                                    billBoardDetail?.user_detail?.name
                                                }}</a>
                                        </h2>
                                        <p class="text-gray-600">{{ billBoardDetail?.user_detail?.country }}</p>
                                        <p class="text-gray-600">I speak
                                            {{ billBoardDetail?.user_detail?.profile_detail?.language }}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="mt-6">
                                    <p class="text-gray-700 text-xl font-medium ">
                                        {{ billBoardDetail?.user_detail?.profile_detail?.headline }}</p>
                                    <p class="text-gray-700 mt-2 w-full">
                                        {{ limitText(billBoardDetail?.user_detail?.profile_detail?.overview, 300) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class=" top-5 p-0">
                            <div class="bg-[#f9f9f9] relative shadow-sm rounded-sm p-6 max-w-md mx-auto">
                                <h1 class="text-xl font-medium mb-5">Order in just ${{ billBoardDetail.price }}</h1>

                                <div v-if="additional_details.length === 0" class="w-full text-center  bg-[#203964] mt-4 rounded-lg p-3 ">
                                    <a :href="route('chat', { id: billBoardDetail.user_detail?.id })"
                                       class="mt-6 text-md text-white font-medium w-full">Continue to Chat</a>
                                </div>
                            </div>
                        </div>




                        <div v-if="additional_details.length > 0" class="sticky mt-5 max-w-sm mx-auto border rounded-lg shadow-md">
                            <div class="flex border-b">
                                <button v-if="additional_details.length > 0" :class="{ 'border-b-2 font-semibold text-gray-900': activePackage === 0}"  @click="setActivePackage(0)" class="w-1/3 py-2 text-center border-r text-gray-500">Basic</button>
                                <button v-if="additional_details.length > 1" :class="{ 'border-b-2 font-semibold text-gray-900': activePackage === 1}"  @click="setActivePackage(1)" class="w-1/3 py-2 text-center border-r text-gray-500">Standard</button>
                                <button v-if="additional_details.length > 2" :class="{ 'border-b-2 font-semibold text-gray-900': activePackage === 2}"  @click="setActivePackage(2)" class="w-1/3 py-2 text-center text-gray-500">Premium</button>
                            </div>
                            <div class="p-4">
                                <h2 class="text-xl font-semibold text-gray-900">{{ activeAdditionalDetail.title }}</h2>
                                <p class="text-2xl font-bold text-gray-900 mt-2">${{ activeAdditionalDetail.amount }}</p>
                                <p class="text-gray-700 mt-2">{{ activeAdditionalDetail.description }}.</p>
                                <div class="flex items-center mt-4 text-gray-700">
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg>
                                    <span class="mx-2">{{activeAdditionalDetail.days}}-day delivery</span>
                                </div>
                                <div class="flex items-center mt-2 text-gray-700">
                                    <svg :class="{'stroke-gray-300 fill-gray-300': !activeAdditionalDetail.enabled}" width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>
                                    <span class="capitalize mx-2">{{activeAdditionalDetail.enabled ? '':'un'}}available</span>
                                </div>
                                <div class="w-full text-center  bg-[#203964] mt-4 rounded-lg p-3 ">
                                    <a :href="route('chat', { id: billBoardDetail.user_detail?.id })"
                                       class="mt-6 text-md text-white font-medium w-full">Continue to Chat</a>
                                </div>
                            </div>
                        </div>









                    </div>
                </div>
                <div class="mt-5">
                    <h1 class="my-8 text-xl font-medium">People Who Viewed This Service Also Viewed </h1>
                    <RelatedBillboard :related="related"/>
                </div>
            </div>
        </main>
    </CatApp>
</template>
<style>
.vjs-tech {
    height: 400px !important;
}
</style>
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
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
import VideoPlayer from '@/Components/VideoPlayer.vue';
import RelatedBillboard from '@/Components/RelatedBillboard.vue';
import {Link} from "@inertiajs/vue3";
import {route} from "ziggy-js";

const baseUrl = window.Laravel.baseUrl
function limitText(text, maxLength) {
    if (text.length && text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    } else {
        return text;
    }
}
const props = defineProps({
    categories: {
        type: Array,
    },
    billBoardDetail: Object,
    tags: Array,
    related: Array
})
const additional_details = ref(JSON.parse(props.billBoardDetail.additional_details))
const isMenuOpen = ref(false)
const isDropdownOpen = ref([])
const currentSlide = ref(0)
const activePackage = ref(0);
const activeAdditionalDetail = ref(null)
const setActivePackage = (pkg) => {
    activePackage.value = pkg
    activeAdditionalDetail.value = additional_details.value[pkg]
}
setActivePackage(0);
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
const isVideo = (file) => {
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = file.split('.').pop();
    return videoExtensions.includes(extension);
};

const getVideoOptions = (src) => {
    return {
        autoplay: false,
        controls: true,
        sources: [
            {
                type: 'video/mp4',
                src: src
            }
        ],

        loop: true
    };
};
</script>
