<template>
    <CatApp :categories="categories" :flash="flash">

        <main class="max-w-[1250px] mx-auto w-full;">
            <div class="pt-[100px]"></div>
            <div>
                <div class="">
                    <div
                        class=" graphics-design h-[250px] w-full rounded-md flex flex-col justify-center gap-10 items-center"
                        style="background-color:#1f3a63">
                        <h1 class="  text-3xl md:text-2xl  font-bold text-white ">Browse best talent around the
                            globe</h1>
                        <div class="flex items-center px-2 font-bold border border-white">
                            <figure>
                                <img src='@/assets/images/image052.png' class="h-[40px] w-[40px]" height={40} width={40}
                                     alt=''/>
                            </figure>
                            <h2 class="text-white">How MyFreelancer Works</h2>
                        </div>
                    </div>

                </div>
                <!-- <div class="flex justify-center gap-4 mt-4">
                    <button
                    class=" next-btn rounded-full bg-gray-300 h-[40px] w-[40px] flex justify-center items-center">&#10094;</button>
                    <button
                    class="prev-btn rounded-full bg-gray-300 h-[40px] w-[40px] flex justify-center items-center">&#10095;</button>
                </div> -->
            </div>

            <div class="flex gap-10  p-7 md:p-4  flex-wrap md:flex-nowrap ">
                <div v-for="(tag, index) in tags" :key="index"
                     class="flex items-center gap-2 border-2 rounded-md border-gray-300 px-5 py-1 ">
                    <figure>
                        <img
                            :src='tag.icon?baseUrl+tag.icon:"https://atech-tc.com/wp-content/plugins/elementor/assets/images/placeholder.png"'
                            class=" h-[50px] w-[60px]" height={40} width={40} alt=''/>
                    </figure>
                    <h2 class="font-bold">{{ tag.name }}</h2>
                    <span><i class="fa-solid fa-arrow-right"></i></span>
                </div>

            </div>
            <div class="flex items-center gap-2 ">
                <h2 class="text-2xl font-bold ">Explore</h2>
            </div>
            <div class=" md:px-2 md:py-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div
                        class="bg-white rounded-sm shadow-sm overflow-hidden mb-6"
                        v-for="(billBoard, index) in billBoards?.data"
                        :key="index"
                    >
                        <!-- Gig Images Slider -->
                        <div class="relative">
                            <Carousel
                                ref="carousel"
                                :items-to-show="1"
                                :items-to-scroll="1"
                                :loop="true"
                                :navigation-enabled="false"
                            >
                                <template
                                    v-for="(image, imgIndex) in [billBoard.video, billBoard.img1, billBoard.img2, billBoard.img3]"
                                    :key="imgIndex">
                                    <slide v-if="image">
                                        <template v-if="isVideo(image)">
                                            <VideoPlayer :videoUrl="(baseUrl + image)" vidoeHeight="200px"
                                                         class="h-[200px]"/>
                                        </template>
                                        <template v-else>
                                            <img :src="baseUrl + image" class="h-[200px] w-full"
                                                 :alt="`Gig Image ${imgIndex + 1}`">
                                        </template>
                                    </slide>
                                </template>
                                <template #addons>
                                    <Navigation/>
                                    <Pagination/>
                                </template>
                            </Carousel>
                            <!-- Navigation Buttons -->

                        </div>
                        <!-- Gig Details -->
                        <div class="p-4">
                            <h2 class="text-md font-medium mb-2 min-h-[70px]">{{ billBoard.title }}</h2>
                            <p class="text-gray-700 mb-4">{{ billBoard.description }}</p>
                            <div class="flex items-center justify-between">
                                <span class="text-lg font-semibold text-green-600"
                                      v-if="billBoard.price">From ${{ billBoard.price }}</span>
                                <Link :href="route('bill-board',billBoard.id)"
                                   class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Order Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <custom-pagination :links="billBoards.links" />
                </div>
            </div>
        </main>
        <!-- <div   v-if="tags.length>0" class=" flex-wrap justify-center  md:flex-nowrap  grid  p-7 gap-4 md:gap-2" style="background-color: whitesmoke;">
             <div class="w-full mb-5 text-center">
                <h1 class=" text-4xl lg:text-3xl font-semibold leading-[55px]">Explore More {{ catDetail.name }} Services</h1>
            </div>
            <ul class="tags  max-w-[1250px] mx-auto w-full;">
                <li v-for="(tag, index) in tags" :key="index"><a href="#" class="related-link" target="">{{ tag.name }}</a></li>
            </ul>
        </div>
        <hr>
        <div v-if="faqs.length>0" class=" flex-wrap justify-center  md:flex-nowrap  grid  p-7 gap-4 md:gap-2" style="background-color: whitesmoke;">
            <div class="w-full mb-5 text-center">
                <h1 class=" text-4xl lg:text-5xl font-semibold leading-[55px]">Frequently asked questions </h1>
            </div>
            <div class=" max-w-[1250px]">
                <div  v-for="(faq, index) in faqs" :key="index">
                    <FaqItem :faq="faq" />
               </div>
            </div>
        </div> -->
    </CatApp>
</template>
<style>
.vjs-tech {
    height: 200px !important;
}
</style>
<style scoped>
.carousel__item {
    height: 200px;
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
</style>
<script setup>
import {ref} from 'vue'
import CatApp from '@/Layouts/App.vue'
import FaqItem from '@/Components/Landing/FaqItem.vue'
import {Carousel, Navigation, Slide, Pagination} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {computed} from 'vue';
import VideoPlayer from '@/Components/VideoPlayer.vue';
import customPagination from '@/Components/pagination.vue'
import {Link} from "@inertiajs/vue3";
const baseUrl = window.Laravel.baseUrl

const props = defineProps({
    categories: {
        type: Array,
    },
    billBoards: Array,
    tags: Array,
    flash: Object,

});

const isMenuOpen = ref(false);
const isDropdownOpen = ref([]);
const toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen;
}

const toggleDropdown = (index) => {
    this.$set(this.isDropdownOpen, index, !this.isDropdownOpen[index]);
}
const carousel = ref(null)

// Methods to navigate the slider
const nextSlide = () => {
    carousel.value.next()
}

const prevSlide = () => {
    carousel.value.prev()
}

const pages = computed(() => {
    const result = [];
    const {current_page, last_page} = props.billBoards;
    for (let i = 1; i <= last_page; i++) {
        if (i === 1 || i === last_page || (i >= current_page - 2 && i <= current_page + 2)) {
            result.push(i);
        } else if (result[result.length - 1] !== '...') {
            result.push('...');
        }
    }
    return result;
});

// Generate the URL for a specific page
const pageUrl = (page) => {
    return `${props.billBoards.path}?page=${page}`;
};

const isVideo = (file) => {
    if (file) {
        const videoExtensions = ['mp4', 'webm', 'ogg'];
        const extension = file.split('.').pop();
        return videoExtensions.includes(extension);
    }
};
</script>
