<template>
    <Head title="My Profile"/>
    <AuthenticatedLayout>
        <div class="flex w-full border-b pb-2">
            <div class="w-1/2">
                <h5 class="text-xl">Edit Profile</h5>
            </div>
            <div class="w-1/2 text-end">


                <label class="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
                    <input type="checkbox" class="sr-only" @change="profileStore.switch_mode"/>
                    <span class="label flex items-center text-sm font-medium text-[#CCCCCE]" :class="{'!text-green-500': profileStore.userRole === 'Buying'}">Buying</span>
                    <span :class="{ '!bg-green-500': profileStore.userRole === 'Selling' }" class="slider mx-4 flex h-8 w-[60px] items-center rounded-full bg-[#CCCCCE] p-1 duration-200">
                      <span class="dot h-6 w-6 rounded-full bg-white duration-200" :class="{ 'translate-x-full': profileStore.userRole === 'Selling' }"></span>
                    </span>
                    <span class="label flex items-center text-sm font-medium text-[#CCCCCE]" :class="{'!text-green-500': profileStore.userRole === 'Selling'}">Selling</span>
                </label>
            </div>

            <div class="border-b pb-2"></div>
        </div>
        <div class="flex flex-wrap w-full">
            <div class="w-full sm:w-1/4 border-r">
                <div class="pr-4">
                    <div class="flex flex-col justify-center items-center my-6">
                        <label for="profile-upload" class="cursor-pointer">
                            <img :src="image" class="w-24 h-24" alt="Profile Image">
                        </label>
                        <p class="font-medium mt-4">{{ userDetail.name }}</p>
                    </div>
                    <ul class="-mb-px text-sm font-medium" id="default-styled-tab"
                        data-tabs-toggle="#default-styled-tab-content"
                        data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
                        data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                        role="tablist">
                        <li v-if="!profileStore.isEmployer" class="side-item" v-for="(tab, index) in tabs" :key="tab.value"
                            @click="selectTab(tab.value)"
                            :class="['tab-item cursor-pointer py-2 px-4', { 'active-tab text-blue-500 border-b-2 border-blue-500': selectedTab === tab.value }]">
                            <i :class="'mdi ' + tab.icon"></i>
                            <a href="#" class="ml-2 text-md">{{ tab.title }}</a>
                        </li>
                        <li v-if="profileStore.isEmployer" class="side-item" v-for="(tab, index) in employerTabs" :key="tab.value"
                            @click="selectTab(tab.value)"
                            :class="['tab-item cursor-pointer py-2 px-4', { 'active-tab text-blue-500 border-b-2 border-blue-500': selectedTab === tab.value }]">
                            <i :class="'mdi ' + tab.icon"></i>
                            <a href="#" class="ml-2 text-md">{{ tab.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-full sm:w-3/4">
                <div class="w-full p-4">
                    <div class="tabs-content mt-4">
                        <div key="contact-information" v-show="selectedTab === 'contact-information'">
                            <ContactInformation :userDetail="userDetail" :countries="countries" :selectTab="selectTab"/>
                        </div>
                        <div key="profile-front-page" v-show="selectedTab === 'profile-front-page'">
                            <ProfileFrontPage :profileFront="profileFront" :verfication="verfication"
                                              :userDetail="userDetail" :countries="countries"/>
                        </div>
                        <div key="billboard" v-show="selectedTab === 'billboard'">
                            <BillboardView :billBoards="billBoards" :billBoardDraft="billBoardDraft"/>
                        </div>
                        <div key="screen-identity" v-show="selectedTab === 'screen-identity'">
                            <ScreenIdentity :userDetail="userDetail" :flash="flash"/>
                        </div>
                        <div key="job" v-show="selectedTab === 'job'">
                            <Jobs :jobs="jobs"/>
                        </div>
                        <div key="email-preference" v-show="selectedTab === 'email-preference'">
                            <EmailPreference/>
                        </div>
                        <div key="myfreelancer-store" v-show="selectedTab === 'myfreelancer-store'">
                            <MyFreelancerStore/>
                        </div>
                        <div key="id-verification" v-show="selectedTab === 'id-verification'">
                            <IdVerification :verfication="verfication" :userDetail="userDetail" :countries="countries"/>
                        </div>
                        <div key="password" v-show="selectedTab === 'password'">
                            <Password :flash="flash"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import BillboardView from '@/Components/Profile/Tabs/BillboardView.vue';
import ContactInformation from '@/Components/Profile/Tabs/ContactInformation.vue';
import ProfileFrontPage from '@/Components/Profile/Tabs/ProfileFrontPage.vue';
import ScreenIdentity from '@/Components/Profile/Tabs/ScreenIdentity.vue';
import EmailPreference from '@/Components/Profile/Tabs/EmailPreference.vue';
import IdVerification from '@/Components/Profile/Tabs/IdVerification.vue';
import MyFreelancerStore from '@/Components/Profile/Tabs/MyFreelancerStore.vue';
import Password from '@/Components/Profile/Tabs/Password.vue';
import Jobs from '@/Components/Profile/Tabs/Jobs.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import {ref, reactive, onMounted, watch, computed} from 'vue';
import {usePage} from '@inertiajs/vue3';
import {useProfileStore} from "@/Stores/ProfileStore.js";
const profileStore = useProfileStore()
const page = usePage();
const props = defineProps({
    userDetail: {
        type: Object,
    },
    verfication: {
        type: Object,
    },
    profileFront: {
        type: Object,
    },
    countries: {
        type: Array,
    },
    billBoards: {
        type: Array,
    },
    billBoardDraft: {
        type: Object,
    },
    flash: {
        type: Object,
    },
    jobs: Array,
});

const baseUrl = window.Laravel.baseUrl;

const image = props.userDetail?.image ? `${baseUrl}${props.userDetail.image}` : ref('https://cdn-icons-png.freepik.com/512/6322/6322558.png');
const name = ref("");
const selectedTab = ref(localStorage.getItem('selectedTab') || 'contact-information'); // Initialize from localStorage
if(page.props.user.roles.includes('Employer')){
    profileStore.switch_mode()
}
const selectTab = (index) => {
    selectedTab.value = index;
    localStorage.setItem('selectedTab', index); // Save to localStorage
};

const tabs = reactive([
    {
        title: "Contact Information",
        value: "contact-information",
        icon: "mdi-account-box",
    },
    {
        title: "Dashboard",
        value: "#d",
        icon: "mdi-home",
    },
    {
        title: "Screen Identity",
        value: "screen-identity",
        icon: "mdi-camera-metering-center",
    },
    {
        title: "Email Preference",
        value: "email-preference",
        icon: "mdi-email",
    },
    {
        title: "ID Verification",
        value: "id-verification",
        icon: "mdi-face-recognition",
    },
    {
        title: "Password",
        value: "password",
        icon: "mdi-eye",
    },
    {
        title: "Billboard",
        value: "billboard",
        icon: "mdi-billboard",
    },
    {
        title: "My Freelancer Store",
        value: "myfreelancer-store",
        icon: "mdi-store",
    },
    {
        title: "Profile Page Front View",
        value: "profile-front-page",
        icon: "mdi-page-layout-sidebar-right",
    },
]);

const employerTabs = reactive([
    {
        title: "Contact Information",
        value: "contact-information",
        icon: "mdi-account-box",
    },
    {
        title: "Jobs",
        value: "job",
        icon: "mdi-sitemap-outline",
    },
    {
        title: "Screen Identity",
        value: "screen-identity",
        icon: "mdi-camera-metering-center",
    },
    {
        title: "Email Preference",
        value: "email-preference",
        icon: "mdi-email",
    },
    {
        title: "Password",
        value: "password",
        icon: "mdi-eye",
    },
]);

onMounted(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
        selectedTab.value = storedTab;
    }
});
</script>

<style scoped>
.border-r {
    border-right: 1px solid #e5e7eb;
    padding-right: 1rem;
}

.pb-2 {
    padding-bottom: 0.5rem;
}

.side-item {
    border-top: 1px solid #e5e7eb;
    padding: 14px;
    font-size: 16px;
}

.pb-2 {
    padding-bottom: 0.5rem;
}
</style>
