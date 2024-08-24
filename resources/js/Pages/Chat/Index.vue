<template>
    <ChatLayout>
        <div class="app">
            <div class="wrapper">
                <div class="conversation-area shadow-md">
                    <div class="search-barss">
                        <input type="text" class="border-2 border-[#f9fafb]" placeholder="Search..."/>
                    </div>
                    <div v-for="conversation in conversations" :key="conversation.id" class="msg "
                         :class="{ active: conversation.id === activeConversation.id }"
                         @click="selectConversation(conversation.id)">
                        <template v-if="conversation?.sender_id!=userId">
                            <img class="msg-profile" :src="conversation.sender.image" alt=""/>
                            <div class="msg-detail">
                                <div class="msg-username">{{ conversation?.sender?.name }}</div>
                                <div class="msg-content">
                                    <span class="msg-message">{{ conversation?.title }}</span>
                                    <span class="msg-date">{{ conversation?.created_at }}</span>
                                </div>
                            </div>
                        </template>

                        <template v-if="conversation?.receiver_id!=userId">
                            <img class="msg-profile" :src="conversation.receiver?.image" alt=""/>
                            <div class="msg-detail">
                                <div class="msg-username">{{ conversation.receiver?.name }}</div>
                                <div class="msg-content">
                                    <span class="msg-message">{{ conversation?.title }}</span>
                                    <span class="msg-date">{{ format(conversation?.created_at, 'd MMMM Y') }}</span>
                                </div>
                            </div>
                        </template>

                    </div>
                </div>
                <div class="chat-area">
                    <div class="chat-area-header bg-[#f9fafb]" v-if="activeConversation?.sender_id!=userId">
                        <div class="chat-area-title">{{ activeConversation?.title }}</div>
                        <div class="chat-area-group">
                            <img class="chat-area-profile" :src="activeConversation?.sender?.image" alt=""/>
                        </div>
                    </div>
                    <div class="chat-area-header bg-[#f9fafb]" v-if="activeConversation?.receiver_id!=userId">
                        <div class="chat-area-title">{{ activeConversation?.receiver?.name }}</div>
                        <div class="chat-area-group">
                            <img class="chat-area-profile" :src="activeConversation?.receiver?.image" alt=""/>
                        </div>
                    </div>
                    <div class="chat-area-main">
                        <div v-for="message in messages" :key="message.id" class="chat-msg"
                             :class="{ owner: message.user_id === userId }">
                            <div class="chat-msg-profile">
                                <img class="chat-msg-img" :src="message.user.image" alt=""/>
                                <div class="chat-msg-date">Message seen {{
                                        format(message.created_at, 'd MMMM Y')
                                    }}
                                </div>
                            </div>
                            <div v-if="message.attachment" class="chat-msg-content">
                                <div class="chat-msg-text">
                                    <img @error="handleImageLoadError" :src="baseUrl+message.attachment"/>
                                </div>
                            </div>
                            <div v-else-if="message.custom_offer" class="chat-msg-content">
                                <!--                                <pre>{{ message.custom_offer }}</pre>-->
                                <div class="max-w-sm mx-auto border rounded-lg shadow-md p-4">
                                    <div class="flex justify-between items-center">
                                        <h2 class="font-semibold text-lg">{{ message.custom_offer.title }}</h2>
                                        <span class="text-lg font-bold">${{ message.custom_offer.amount }}</span>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-2">{{ message.custom_offer.description }}</p>
                                    <hr class="my-4">
                                    <div class=" flex row text-sm text-gray-600">
                                        <p class="flex items-center mb-2">
                                            <svg class="mr-2" width="12" height="12" viewBox="0 0 16 16"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                                <path d="M9 4H7v5h5V7H9V4z"></path>
                                            </svg>
                                            <b class="mr-1">{{ message.custom_offer.duration_in_days }}</b> Days
                                            Delivery
                                        </p>
                                        <p v-if="message.custom_offer.job_id" class="flex items-center mb-2 mx-2 font-bold">
                                            Offer Accepted
                                        </p>
                                        <p v-else-if="moment(message.custom_offer.valid_till).isBefore(moment())" class="flex items-center mb-2 mx-2 font-bold">
                                            Offer Expired
                                        </p>
                                        <p v-else class="flex items-center mb-2 mx-2">
                                            <svg class="mr-2" width="12" height="12" viewBox="0 0 16 16"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path>
                                            </svg>
                                            Valid Till <b class="ml-1">{{ moment(message.custom_offer.valid_till).format('DD MMM YYYY')}}</b>
                                        </p>
                                    </div>
                                        <div v-if="moment(message.custom_offer.valid_till).isAfter(moment())" class="mt-6 flex justify-between">
                                            <button @click="declineOffer(message.custom_offer.id)"
                                                class="bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-lg hover:bg-gray-300">
                                                Cancel
                                            </button>
                                            <button v-if="message.custom_offer.created_by !== $page.props.auth.user.id"
                                                @click="acceptOffer(message.custom_offer.id)"
                                                class="bg-[#1e3a62] mx-2 hover:bg-gray-200 text-white font-semibold py-1 px-2 text-sm hover:text-[#1e3a62] rounded">
                                                Accept offer
                                            </button>
                                        </div>
                                </div>

                            </div>
                            <div v-else class="chat-msg-content">
                                <div v-for="text in message.content.split('\n')" class="chat-msg-text">{{ text }}</div>
                            </div>
                        </div>
                    </div>
                    <Modal @close="toggleCreateOfferAction" :show="showCreateOfferModal">
                        <div v-if="customOfferStep === 1">
                            <div class="mt-4"></div>
                            <div v-for="billboard in billBoards" @click="setBillboard(billboard.id)" class="flex items-center p-4 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer my-2">
                                <!-- Image -->
                                <img :src="billboard.img1" alt="Gig Image" class="w-20 h-20 rounded-lg object-cover">
                                <!-- Text -->
                                <span class="ml-4 text-lg font-semibold">{{ billboard.title }}</span>
                            </div>
                        </div>
                        <div v-else-if="customOfferStep === 2">
                            <!-- Heading -->
                            <h2 class="text-xl font-semibold text-gray-800">Choose how you want to get paid</h2>
                            <!-- Description -->
                            <p class="text-gray-600 mt-2">
                                Get paid in full once the project is completed, or break it into smaller chunks, called milestones, to get paid as you go.
                            </p>
                            <div class="mt-4 space-y-4">
                                <!-- Single Payment Option -->
                                <div @click="setPaymentType('single')" class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-100">
                                    <svg class="w-6 h-6 text-gray-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10l5 5m0 0l5-5m-5 5V3"></path>
                                    </svg>
                                    <div>
                                        <p class="font-semibold text-gray-800">Single payment</p>
                                        <p class="text-sm text-gray-600">Get paid in full after each order is completed.</p>
                                    </div>
                                </div>

                                <!-- Milestones Option -->
                                <div @click="setPaymentType('milestone')" class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-100">
                                    <svg class="w-6 h-6 text-gray-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                    <div>
                                        <p class="font-semibold text-gray-800">Milestones</p>
                                        <p class="text-sm text-gray-600">Work in gradual steps and get paid for each completed milestone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <!-- Offer Setup Section -->
                            <div class="mt-2">
                                <h2 class="font-semibold text-gray-700">Set up your offer</h2>
                                <p class="text-sm text-gray-500">Define the terms of your offer and what it includes.</p>
                            </div>
                            <!-- Image and Offer Description -->
                            <div class="flex space-x-4 mt-2">
                                <!-- Offer Description -->
                                <div class="flex-1">
                                    <input type="text" v-model="customOfferForm.title" placeholder="Offer Title"
                                           class="w-full !p-2 !border !rounded-lg focus:!outline-none focus:!ring-2 focus:!ring-blue-500"></input>
                                </div>
                            </div>
                            <!-- Image and Offer Description -->
                            <div class="flex space-x-4 mt-2">
                                <!-- Offer Description -->
                                <div class="flex-1">
                                    <textarea placeholder="Describe your offer" v-model="customOfferForm.description"
                                              class="w-full h-24 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                    <div class="text-right text-xs text-gray-500">Max 1500 characters</div>
                                </div>
                            </div>

                            <!-- Offer Details -->
                            <div class="mt-4 p-4 bg-gray-50 border rounded-lg">
                                <div class="flex space-x-4">
                                    <!-- Delivery -->
                                    <div class="flex-1">
                                        <label for="validity" class="block text-sm text-gray-600">Offer Validity</label>
                                        <input id="validity" v-model="customOfferForm.valid_till" type="date"
                                               class="w-full !p-2 !border !rounded-lg focus:!outline-none focus:!ring-2 focus:!ring-blue-500"></input>
                                    </div>
                                    <!-- Delivery -->
                                    <div class="flex-1">
                                        <label for="delivery" class="block text-sm text-gray-600">Delivery</label>
                                        <select id="delivery" v-model="customOfferForm.duration_in_days"
                                                class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="1">1 day</option>
                                            <option value="3">3 days</option>
                                            <option value="7">7 days</option>
                                            <option value="14">14 days</option>
                                            <option value="30">1 month</option>
                                            <option value="180">6 months</option>
                                        </select>
                                    </div>

                                    <!-- Price -->
                                    <div class="flex-1">
                                        <label for="price" class="block text-sm text-gray-600">Price</label>
                                        <input v-model="customOfferForm.amount" type="number" min="5" max="20000" id="price"
                                               placeholder="$ 20000 max"
                                               class="w-full !p-2 !border !rounded-lg focus:!outline-none focus:!ring-2 focus:!ring-blue-500">
                                    </div>
                                </div>
                            </div>
                            <!-- Action Buttons -->
                            <div class="mt-6 flex justify-between">
                                <button @click="toggleCreateOfferAction"
                                        class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Back
                                </button>
                                <button @click="submitCustomOffer"
                                        class="bg-[#1e3a62] mx-2 hover:bg-gray-200 text-white font-semibold py-1 px-2 text-sm hover:text-[#1e3a62] rounded">
                                    Send offer
                                </button>
                            </div>
                        </div>
                    </Modal>
                    <div class="chat-area-footer">
                        <!-- Add file upload input -->
                        <input type="file" @change="handleFileUpload" style="display: none;" ref="fileInput"/>
                        <button class="mx-2" @click="openFileInput"><i title="Upload File"
                                                                       class="fa fa-cloud-upload"></i></button>
                        <button @click="toggleEmojiPicker">😊</button>
                        <button @click="toggleCreateOfferAction"
                                class="bg-[#1e3a62] mx-2 hover:bg-gray-200 text-white font-semibold py-1 px-2 text-[11px] hover:text-[#1e3a62] rounded">
                            Create an Offer
                        </button>

                        <!-- Emoji Picker -->
                        <emoji-picker v-if="showEmojiPicker" @emoji-click="addEmoji"></emoji-picker>

                        <input type="text" class="border-2 border-[#f9fafb] rounded-full focus: border-[#f9fafb]"
                               placeholder="Type something here..." v-model="newMessage" @keyup.enter="sendMessage"/>
                        <!-- Existing code for other icons... -->
                    </div>
                </div>

                <div class="detail-area">
                    <div class="detail-area-header" v-if="activeConversation?.sender_id!=userId">
                        <div class="msg-profile group">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
                                 class="rounded-full">
                        </div>
                        <div class="detail-title">Miguel Cohen</div>
                        <div class="detail-subtitle">Created by Aysenur, 1 May 2020</div>

                    </div>

                    <div class="detail-area-header" v-if="activeConversation?.receiver_id!=userId">
                        <div class="msg-profile group">
                            <img :src="activeConversation?.receiver?.image" class="rounded-full">
                        </div>
                        <div class="detail-title">{{ activeConversation?.receiver?.name }}</div>
                        <div class="detail-subtitle">Created by {{ activeConversation?.sender?.name }},
                            {{ format(activeConversation.created_at, 'd MMMM Y') }}
                        </div>

                    </div>

                    <div class="detail-photos">
                        <div class="detail-photo-title flex">
                            <svg xmlns="http://www.w3.org/2000/svg" style="height:20px; width:40px" viewbox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="feather feather-image">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <path d="M21 15l-5-5L5 21"/>
                            </svg>
                            Shared Media
                        </div>

                        <div class="view-more">View More</div>
                    </div>

                </div>
            </div>
        </div>
    </ChatLayout>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';
import ChatLayout from '@/Layouts/ChatLayout.vue';
import {format} from 'date-fns';
import 'emoji-picker-element';
import Modal from "@/Components/Modal.vue";
import {route} from "ziggy-js";
import moment from "moment";

const conversations = ref([]);
const messages = ref([]);
const activeConversation = ref({});
const newMessage = ref('');
const userId = ref(null);
const showEmojiPicker = ref(false);
const baseUrl = window.Laravel.baseUrl
const billBoards = ref([]);
const props = defineProps({
    conversationProp: Object
});
const customOfferStep = ref(1);
const changeStep = function(){
    customOfferStep.value += 1
}
const acceptOffer = function(offer_id){
    axios.post(route('api.custom_offer.accept', offer_id))
    .then((res) => {
        console.log(res)
    })
    console.log('Accept', offer_id)
}
const declineOffer = function(offer_id){
    axios.post(route('api.custom_offer.decline', offer_id))
    .then((res) => {
        fetchMessages(activeConversation.value.id);
    })
}
const customOfferForm = ref({
    payment_type: '',
    billboard_id: '',
    duration_in_days: 1,
    title: '',
    description: '',
    amount: 5,
    valid_till: ''
});

const setBillboard = function(id){
    customOfferForm.value.billboard_id = id;
    changeStep();
}
const setPaymentType = function(type){
    customOfferForm.value.payment_type = type;
    changeStep();
}

const resetCustomOfferForm = () => {
    customOfferForm.value.duration_in_days = 1;
    customOfferForm.value.title = '';
    customOfferForm.value.description = '';
    customOfferForm.value.amount = 5;
    customOfferForm.value.billboard_id = null;
    customOfferForm.value.payment_type = '';
    customOfferForm.value.valid_till = '';
    customOfferStep.value = 1;
}
const submitCustomOffer = async function () {
    let data = {...customOfferForm.value};
    toggleCreateOfferAction();
    axios.post(route('api.custom_offer.store', activeConversation.value.id), data).then(res => {
        resetCustomOfferForm();
    })
    await fetchMessages(activeConversation.value.id);
}
const showCreateOfferModal = ref(false);
const toggleCreateOfferAction = () => {
    resetCustomOfferForm();
    showCreateOfferModal.value = !showCreateOfferModal.value
}
const handleImageLoadError = (e) => {
    let target = $(e.target);
    let link = target.attr('src');
    target.replaceWith(`<a class="hover:cursor-pointer" target="_blank" href=${link}><i class="fa fa-download" title="Download Attachment"></i> Attachment</a>`)
}
const fetchConversations = async () => {
    const response = await axios.get('/api/conversations');
    conversations.value = response.data;
    if (props?.conversationProp?.id) {
        selectConversation(props?.conversationProp?.id);
    } else if (conversations.value.length > 0) {
        selectConversation(conversations.value[0].id);
    }
};

const fetchMessages = async (conversationId) => {
    const response = await axios.get(`/api/conversations/${conversationId}/messages`);
    messages.value = response.data;
};

const selectConversation = (conversationId) => {
    activeConversation.value = conversations.value.find(convo => convo.id === conversationId);
    fetchMessages(conversationId);
};

const sendMessage = async function () {
    if (newMessage.value.trim() === '') return;
    await axios.post('/api/messages', {conversation_id: activeConversation.value.id, content: newMessage.value});
    newMessage.value = '';
    await fetchMessages(activeConversation.value.id);
};

const handleFileUpload = async function (event) {
    const file = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('conversation_id', activeConversation.value.id);

        await axios.post('/api/files', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        await fetchMessages(activeConversation.value.id);
    }

};

const openFileInput = () => {
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.click();
};

const toggleEmojiPicker = () => {
    showEmojiPicker.value = !showEmojiPicker.value;
};

const addEmoji = (event) => {
    console.log(event.detail); // Inspect the event detail to find the correct property
    newMessage.value += event.detail.unicode; // Use the correct property for the emoji
    toggleEmojiPicker();
};
// Pusher integration for real-time updates
const setupPusher = () => {
    window.echo.channel(`conversation.${activeConversation.value.id}`)
        .listen('MessageSent', (e) => {
            messages.value.push(e.message);
        });
};

const getBillboards = async function() {
    const response = await axios.get(route('api.user.billboards'))
    billBoards.value = response.data;
}

onMounted(async () => {
    await fetchConversations();
    await getBillboards();
    userId.value = (await axios.get('/api/user')).data.id;
    setupPusher();
});
</script>

<style src="@/assets/chat/style.css"></style>
