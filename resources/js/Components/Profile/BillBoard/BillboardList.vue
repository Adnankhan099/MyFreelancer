<template>
    <div>
        <div class="w-full mb-6 text-right">
            <button @click="$emit('addNewBillboard')"
                    class="text-white bg-blue-800 px-4 py-2 rounded-md flex items-center">
                <i class="mdi mdi-plus mr-2"></i>
                Add New Billboard
            </button>
        </div>

        <div class="relative">
            <div class="grid md:grid-cols-2 md:px-[50px]">
                <div
                    class="md:col-span-1 sm:col-span-2"
                    v-for="(billBoard, index) in billBoards.data"
                    :key="index"
                    :class="{ hidden: !isVisible(index) }"
                >
                    <div class="p-4 m-2 rounded shadow-md rounded-lg" v-if="isVisible(index)">
                        <div class="bg-white">
                            <table class="min-w-full">
                                <tr>
                                    <td class="p-2 w-1/2">Date Created</td>
                                    <td class="p-2">{{ format(billBoard.created_at, 'd MMMM Y') }}</td>
                                </tr>
                                <tr class="bg-gray-100">
                                    <td class="p-2">Name</td>
                                    <td class="p-2">{{ billBoard.title }}</td>
                                </tr>
                                <tr>
                                    <td class="p-2">Keywords</td>
                                    <td class="p-2">
                                        <span v-for="(tag, index) in parseTags(billBoard.tags)" :key="index">{{
                                                tag.name
                                            }}, </span>
                                    </td>
                                </tr>
                                <tr class="bg-gray-100">
                                    <td class="p-2">Exp. Date</td>
                                    <td class="p-2">{{ format(addDays(billBoard.created_at, 60), 'd MMMM Y') }}</td>
                                </tr>
                                <tr>
                                    <td class="p-2">Days Left</td>
                                    <td class="p-2">
                                        {{ differenceInCalendarDays(addDays(billBoard.created_at, 60), new Date()) }}
                                    </td>
                                </tr>
                                <tr class="bg-gray-100">
                                    <td class="p-2">Status</td>
                                    <td class="p-2">
                                        <span v-if="billBoard.title">Live</span>
                                        <label class="relative inline-block w-12 h-6">
                                            <input type="checkbox" checked class="opacity-0 w-0 h-0"/>
                                            <span
                                                class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full"></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-2">Store</td>
                                    <td class="p-2"></td>
                                </tr>
                                <tr class="bg-gray-100">
                                    <td class="p-2">Edit</td>
                                    <td class="p-2">
                                        <Link :href="route('bill-board.edit', billBoard.id)"
                                              class="bg-blue-800 text-white px-3 rounded">Edit
                                        </Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="justify-center flex mt-3">
                            <img
                                :src="billBoard.img1? baseUrl +  billBoard.img1:'https://img.freepik.com/free-vector/paper-style-dynamic-lines-background_23-2149011157.jpg'"
                                class="h-[150px] w-full border-grey-200 rounded">
                        </div>
                    </div>
                </div>
            </div>
            <Pagination :links="billBoards.links"/>

        </div>
    </div>
    <div class="text-center min-h-[400px] items-center grid w-full">
        <h2 class="text-md">No data found kindly click to add new button to start your new journey</h2>
    </div>
</template>

<style scoped>
input:checked + span {
    background-color: #4ade80; /* Green background for checked state */
}

input:checked + span:before {
    transform: translateX(200%); /* Move the knob to the right when checked */
    background-color: white; /* White knob */
}

.cursor-pointer {
    cursor: pointer;
}

.border-2 {
    border-width: 2px;
}

.border-blue-500 {
    border-color: #3b82f6;
}

.rounded-full {
    width: 50px;
    height: 20px;
    margin-left: 18px;
}

/* Adjust the position of the knob */
input + span:before {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    width: 14px;
    height: 15px;
    background-color: white;
    border-radius: 9999px;
    transition: transform 0.3s ease;
}
</style>

<script setup>
import {defineEmits, ref} from 'vue';
import {format, addDays, differenceInCalendarDays} from 'date-fns';
import Pagination from "@/Components/pagination.vue";
import {Link} from "@inertiajs/vue3";

const emit = defineEmits(['addNewBillboard']);
const props = defineProps({
    billBoards: {
        type: Array,
        required: true
    }
});

const baseUrl = window.Laravel.baseUrl;
const currentIndex = ref(0);

const next = () => {
    if (currentIndex.value < props.billBoards.length - 1) {
        currentIndex.value++;
    }
};

const prev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
};
const reset_index = () => {

}

const isVisible = (index) => {
    return true;
    return index >= currentIndex.value && index < currentIndex.value + 2;
};

const parseTags = (tags) => {
    try {
        return JSON.parse(tags);
    } catch (e) {
        console.error('Error parsing tags:', e);
        return [];
    }
};
</script>
