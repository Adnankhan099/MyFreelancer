<template>
    <App>
<div class="flex flex-col items-center w-full pb-10">
    <div class="h-[300px] bg-cover-img w-full" :style="{ backgroundImage: `url(${headerPhoto})` }" ></div>
    <div class="flex justify-center bg-yellow-400 max-w-screen-lg mx-auto">
        <div class="w-3/12 bg-white border border-black p-5 mt-10 min-w-[300px]">
            <div class="flex items-center justify-center h-44 w-44 bg-gray-200 rounded-sm mx-auto -mt-28">
                <img width="70" :src="profilePhoto" alt="User Avatar"/>
            </div>
            <div class="mt-6 space-y-1">
                <div class="flex"><span class="font-extrabold text-lg">{{ props.profileFront?.full_name }}</span> <span class="ml-auto">{{ props.profileFront?.screen_name }}</span></div>
                <div class="flex items-center space-x-2"><img width="26" src="@/assets/new/usa-flag.svg" alt="Flag"><span>{{ props.profileFront?.home_town }}</span> <span class="ml-auto">7:44 PM</span></div>
            </div>
            <div class="flex gap-x-3 justify-center mt-6">
                <img width="20" src="@/assets/shield-halved-solid.svg" alt="Shield Icon">
                <img width="20" src="@/assets/shield-halved-solid.svg" alt="Shield Icon">
                <img width="20" src="@/assets/new/chart-solid.svg" alt="Chart Icon">
                <img width="20" src="@/assets/new/chart-solid.svg" alt="Chart Icon">
            </div>
            <div class="mt-6 space-y-1 text-blue-950">
                <div class="flex"><span>Hourly Rate</span> <span class="ml-auto font-extrabold">${{ props.profileFront?.hourly_rate }}</span></div>
                <!-- <div class="flex"><span>All-Time Earnings</span> <span class="ml-auto font-extrabold">$25.500</span></div> -->
                <div class="flex"><span>Member since</span> <span class="ml-auto font-extrabold">Jun 2024</span></div>
                <div class="flex"><span>Completed Transactions</span> <span class="ml-auto font-extrabold">{{ props.profileFront?.completed_tran }}</span></div>
                <!-- <div class="flex"><span>Job Success Rates</span> <span class="ml-auto font-extrabold">100%</span></div> -->
            </div>
            <p class="text-center mt-6 font-bold">Verifications</p>
            <div class="mt-6">
             <!--    <div class="flex items-center"><span class="flex gap-x-2"><img width="16" src="@/assets/new/user-check-solid.svg" alt="User Check Icon"/>Preferred Freelancer</span> <img width="12" src="@/assets/new/check-solid.svg" class="ml-auto" alt="Check Icon"/></div> -->


                <div class="flex items-center" v-if="props.profileFront?.facebook_status"><span class="flex gap-x-2"><img width="16" src="@/assets/new/square-facebook.svg" alt="Facebook Icon"/>Facebook connected</span> <img width="12" src="@/assets/new/check-solid.svg" class="ml-auto" alt="Check Icon"/></div>
                 <div class="flex items-center" v-if="props.profileFront?.whatsapp_status"><span class="flex gap-x-2"><span class="mdi mdi-skype  text-2xl text-[green]"></span> Skype connected</span> <img width="12" src="@/assets/new/check-solid.svg" class="ml-auto" alt="Check Icon"/></div>
                <div class="flex items-center" v-if="props.profileFront?.whatsapp_status"><span class="flex gap-x-2"><span class="mdi mdi-whatsapp  text-lg text-[green]"></span>Whatsapp connected</span> <img width="12" src="@/assets/new/check-solid.svg" class="ml-auto" alt="Check Icon"/></div>
                 <div class="flex items-center" v-if="props.profileFront?.whatsapp_status"><span class="flex gap-x-2"><span class="mdi mdi-laptop-account text-lg text-[green]"></span> Zoom connected</span> <img width="12" src="@/assets/new/check-solid.svg" class="ml-auto" alt="Check Icon"/></div>
            </div>
            <div class="text-center space-y-3 mt-6">
                <p><strong>Website:</strong><br/>{{ props.profileFront?.website }}</p>
                <p><strong>Languages:</strong><br/> {{ props.profileFront?.language }}</p>
<!--                 <p><strong>Education:</strong><br/>university of</p>
 -->            </div>
            <div class="flex justify-between pt-24 mt-6">
                <button class="flex gap-x-2 items-center"><img width="14" src="@/assets/new/share-nodes-solid.svg" alt="Share Icon"/>Share</button>
                <div class="w-[2px] h-6 bg-zinc-400"></div>
                <button class="flex gap-x-2 items-center"><img width="14" src="@/assets/new/flag-solid.svg" alt="Flag Icon"/>Share</button>
            </div>
        </div>
        <div class="w-9/12 bg-white px-10 py-8 space-y-6 min-w-[900px]">
            <div class="flex justify-between">
                <span class="text-2xl font-bold">{{ props.profileFront?.headline }}</span>
                <!-- InputSwitch component -->
            </div>
          <!--   <div class="flex items-center space-x-6">
                <div class="flex gap-x-2">
                    <img width="24" src="@/assets/new/star-solid.svg" alt="Star Icon"/>
                    <img width="24" src="@/assets/new/star-solid.svg" alt="Star Icon"/>
                    <img width="24" src="@/assets/new/star-solid.svg" alt="Star Icon"/>
                    <img width="24" src="@/assets/new/star-solid.svg" alt="Star Icon"/>
                    <img width="24" src="@/assets/new/star-solid.svg" alt="Star Icon"/>
                    <span class="text-gray-800 font-semibold">5.0 (248 reviews)</span>
                </div>
                <div class="flex items-center space-x-2">
                    <img width="26" src="@/assets/new/dollar-solid.svg" alt="Dollar Icon"/>
                    <span class="text-gray-800 font-semibold">7.7</span>
                </div>
                <div class="flex items-center space-x-2">
                    <img width="26" src="@/assets/new/handshake-solid.svg" alt="Handshake Icon"/>
                    <span class="h-5 w-12 bg-blue-800"></span>
                    <span class="text-gray-800 font-semibold">
                        100%
                    </span>
                </div>
                <button class="border-solid border-2 border-black hover:bg-gray-300 py-1 px-3 rounded-sm font-bold text-lg">
                Invite to bid
                </button>
                <img width="26" src="@/assets/new/share-nodes-solid.svg" alt="Share Icon"/>
            </div> -->
           <!--  <div class="flex gap-x-5">
                <div>
                    <input placeholder="Hi, I would like to talk to you about a project" class="w-96 py-[10px] px-2 border-2 border-black border-solid rounded-sm" type="text"/>
                    <button class="px-2 py-3 bg-[#2E75B6] hover:bg-blue-500 font-bold text-white rounded-md -ml-1">Send</button>
                </div>
                <div class="flex gap-x-6">
                    <img width="40" src="@/assets/new/whatsup-img.png" alt="WhatsApp Image"/>
                    <img width="39" src="@/assets/new/skype-img.png" alt="Skype Image"/>
                    <img width="39" src="@/assets/new/video-img.png" alt="Video Image"/>
                </div>
            </div> -->
            <div class="">
                <div class="border flex gap-x-5">
                    <button @click="selectedTab = 'one'" :class="{ 'text-blue-600 font-bold': selectedTab === 'one', 'text-gray-600': selectedTab !== 'one' }">Overview</button>
                   <!--  <button @click="selectedTab = 'two'" :class="{ 'text-blue-600 font-bold': selectedTab === 'two', 'text-gray-600': selectedTab !== 'two' }">Portfolio</button>
                    <button @click="selectedTab = 'three'" :class="{ 'text-blue-600 font-bold': selectedTab === 'three', 'text-gray-600': selectedTab !== 'three' }">Feedback</button> -->
                </div>
                <div v-show="selectedTab === 'one'">
                    {{ props.profileFront?.overview }}
                </div>
                <div v-show="selectedTab === 'two'">
                    <!-- Content for Portfolio tab -->
                </div>
                <div v-show="selectedTab === 'three'">
                    <!-- Content for Feedback tab -->
                </div>
            </div>
        </div>
    </div>
</div>
</App>
    </template>

    <script setup>
import App from '@/Layouts/App.vue'
import { ref } from 'vue'
const  baseUrl=window.Laravel.baseUrl

const props = defineProps({
    profileFront: {
        type: Object,
    },
});
const headerPhoto=props.profileFront?.header_image? baseUrl+props.profileFront?.header_image : ref('https://w7.pngwing.com/pngs/846/897/png-transparent-user-male-avatar-account-profile-web-ui-color-icon.png');
const profilePhoto=props.profileFront?.header_photo? baseUrl+props.profileFront?.header_photo : ref('https://w7.pngwing.com/pngs/846/897/png-transparent-user-male-avatar-account-profile-web-ui-color-icon.png');
const switchStatus = ref(null);
const selectedTab = ref('one');
</script>

<style scoped>
.bg-cover-img{
    background-image: url(+profilePhoto+);
    background-repeat: no-repeat, no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}
</style>
