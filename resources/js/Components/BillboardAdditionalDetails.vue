<script setup>

import {useForm} from "@inertiajs/vue3";

const props = defineProps({
    number: Number,
    data: {
        type: Object,
        required: false
    }
})
const emit = defineEmits(['update-data'])
const form = useForm({
    enabled: props.data.enabled ?? true,
    title: props.data.title ?? '',
    description: props.data.description ?? '',
    amount: props.data.amount ?? 0,
    days: props.data.days ?? 0
})

const handle_change = function(){
    emit("update-data", {
        id: props.number,
        form,
    })
}
</script>

<template>
    <div class="p-4 bg-gray-100 rounded-md w-full col-span-6 mx-auto mt-2">
        <div class="flex items-center mb-4">
            <input @change="handle_change" v-model="form.enabled" type="checkbox" id="extra-service" class="mr-2 h-5 w-5 text-blue-600">
            <input @change="handle_change"  v-model="form.title" type="text" placeholder="Title your extra service" maxlength="20" class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
            <textarea @change="handle_change" v-model="form.description" placeholder="I will describe your offering" class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <div class="flex items-center space-x-2">
            <span>For an extra</span>
            <input @change="handle_change" v-model="form.amount" type="number" step="1" placeholder="$" class="border border-gray-300 rounded px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span>and an additional</span>
            <select @change="handle_change" v-model="form.days" class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="0">SELECT</option>
                <option value="1">1 Day</option>
                <option value="2">2 Day</option>
                <option value="3">3 Day</option>
                <option value="4">4 Day</option>
                <option value="5">5 Day</option>
                <option value="6">6 Day</option>
                <option value="7">7 Day</option>
                <option value="8">8 Day</option>
                <option value="9">9 Day</option>
                <option value="10">10 Day</option>
                <option value="11">11 Day</option>
                <option value="12">12 Day</option>
                <option value="13">13 Day</option>
                <option value="14">14 Day</option>
            </select>
        </div>
    </div>

</template>

<style scoped>

</style>
