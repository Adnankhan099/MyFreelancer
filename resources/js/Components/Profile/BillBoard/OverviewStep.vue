<template>
    <div class="stepper-window-item">
        <div class="card flat border flex flex-col shadow-md">
            <div class="card-item p-4">
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-3 gap-3">
                        <div class="space-y-2">
                            <h3 class="font-bold">Billboard Title</h3>
                            <p class="text-sm">
                                As your Billboard storefront, your title is the most important place to include keywords
                                that buyers would likely use to search for a service like yours.
                            </p>
                        </div>


                        <div class="col-span-2 text-right">
                            <textarea
                                v-model="form.title"
                                class="border rounded-sm p-2 w-full"
                                rows="3"
                                maxlength="80"
                                placeholder="I Will do something really good"
                            />
                            <p class="text-danger">{{ form.errors.title }}</p>
                            <span class="text-xs">{{ form.title }} / 80 max</span>
                        </div>

                        <div class="space-y-2">
                            <h3 class="font-bold">Category</h3>
                            <p class="text-sm">
                                Choose the category and sub-category most suitable for your Billboard
                            </p>
                        </div>
                        <div class="col-span-1">
                            <select class="w-full border p-2 rounded-sm" @change="fetchSubCategories"
                                    v-model="form.job_categories_id">
                                <option v-for="(category, index) in categories" :value="category.id" :key="index">
                                    {{ category.name }}
                                </option>
                            </select>
                            <p class="text-danger">{{ form.errors.job_categories_id }}</p>
                        </div>
                        <div class="col-span-1">
                            <select class="w-full border p-2 rounded-sm" v-model="form.sub_job_categories_id">
                                <option value="" disabled>Select a subcategory</option>

                                <optgroup v-for="category in sub_categories" :key="category.id" :label="category.name">
                                    <option v-for="sub_cat in category.child_categories" :key="sub_cat.id"
                                            :value="sub_cat.id">{{ sub_cat.name }}
                                    </option>
                                </optgroup>

                            </select>
                            <p class="text-danger">{{ form.errors.sub_job_categories_id }}</p>
                        </div>
                        <div class="space-y-2">
                            <h3 class="font-bold">Price</h3>
                            <p class="text-sm">
                                kindly enter a sutibale price that fits your services.
                            </p>
                        </div>

                        <div class="col-span-2">
                            <label class="flex"> <span class="text-md p-2 text-white bg-[#4f86c4] ">$</span> <input
                                v-model="form.price" type="number" class="w-full h-[40px]" step="0.01" name=""></label>
                            <p class="text-danger">{{ form.errors.job_categories_id }}</p>
                        </div>
                        <div class="space-y-2">
                            <h3 class="font-bold">Search Tags</h3>
                            <p class="text-sm">
                                Tag your Billboard with buzz words that are relevant to the services you offer. Use all
                                5 tags to get found.
                            </p>
                        </div>
                        <div class="col-span-2">
                            <div class="space-y-2">
                                <h3 class="font-bold">Positive Keywords</h3>
                                <p class="text-sm">
                                    Enter search terms you feel your buyers will use when looking for your service.
                                </p>
                                <div>
                                    <multiselect
                                        v-model="form.tags"
                                        :options="options"
                                        :multiple="true"
                                        :max="5"
                                        :taggable="true"
                                        @tag="addTag"
                                        @input="onInput"
                                        label="name"
                                        track-by="name"
                                        ref="multiselect"></multiselect>

                                    <div class="flex flex-wrap mt-2">
                                        <!-- <span
                                          v-for="(tag, index) in form.tags"
                                          :key="index"
                                          class="bg-gray-200 text-sm rounded-full px-2 py-1 mr-2 mb-2"
                                        >
                                          {{ tag }}
                                          <button
                                            class="ml-1 text-red-500"
                                            @click="removeTag(index)"
                                          >
                                            &times;
                                          </button>
                                        </span> -->
                                    </div>
                                    <span
                                        class="text-xs block -mt-3">5 tags maximum, Use letters and numbers only</span>

                                </div>

                            </div>

                        </div>
                        <div class="space-y-2"></div>
                        <div ref="container" class="w-full col-span-2 content-end"></div>
                        <div v-if="num <= 2" class="mt-4 col-span-3 text-right">
                            <button @click.prevent="appendAdditionalDetails" class="bg-primary text-white px-4 py-2 rounded">
                                <i class="fa fa-add"/>
                                Add Extra
                            </button>
                        </div>
                        <div class="mt-4 col-span-3 text-right">
                            <button type="submit" class="bg-primary text-white px-4 py-2 rounded">Save and continue
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref, onMounted, render, h} from 'vue';
import {Head, Link, useForm} from '@inertiajs/vue3';
import axios from 'axios';
import {router} from '@inertiajs/vue3';
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
import BillboardAdditionalDetails from "@/Components/BillboardAdditionalDetails.vue";
import {route} from "ziggy-js";
const container = ref();
const num = ref(0)
const options = ref([
    {name: 'Vue.js', code: 'vu'},
    {name: 'Javascript', code: 'js'},
    {name: 'Open Source', code: 'os'}
]) // Initial options can be empty or predefined
const selectedOptions = ref([])
const additionalDetails = ref([])

const appendAdditionalDetails = function(x=null){
    let comp = null;
    if(x){
        comp = h(BillboardAdditionalDetails, {number: num.value, data:x, onUpdateData: handle_additional_inputs});
    }else{
        comp = h(BillboardAdditionalDetails, {number: num.value, onUpdateData: handle_additional_inputs});
    }
    let newElement = document.createElement('div');
    render(comp, newElement);
    container.value.appendChild(newElement);
    num.value++;
}

const addTag = (newTag) => {
    options.value.push({name: newTag})
}


const onInput = (newValue, id) => {
    // Check if the last character is a comma
    if (newValue && newValue.slice(-1) === ',') {
        const tag = newValue.slice(0, -1).trim()
        if (tag) {
            addTag(tag)
            selectedOptions.value.push({name: tag})
        }
        // Clear the input
        multiselect.value.clearSearch()
    }
}
const props = defineProps({
    step: Number,
    setBasicInfo: Function,
    nextStep: Function,
    billBoardDraft: {
        type: Object,
    }
});

const form = useForm({
    price: props.billBoardDraft?.price ? props.billBoardDraft?.price : ref(0.00),
    title: props.billBoardDraft?.title ? props.billBoardDraft?.title : ref(null),
    sub_job_categories_id: props.billBoardDraft?.sub_job_categories_id ? props.billBoardDraft?.sub_job_categories_id : ref(null),
    job_categories_id: props.billBoardDraft?.job_categories_id ? props.billBoardDraft?.job_categories_id : ref(null),
    tags: props.billBoardDraft?.tags ? ref(JSON.parse(props.billBoardDraft?.tags)) : ref([]),
    additional_details: props.billBoardDraft?.additional_details ? ref(JSON.parse(props.billBoardDraft?.additional_details)) : ref([]),
});

const categories = ref([]);
const errors = ref({});
const sub_categories = ref([]);


const handle_additional_inputs = (data) => {
    additionalDetails.value[data.id] = {
        enabled: data.form.enabled,
        title: data.form.title,
        description: data.form.description,
        amount: data.form.amount,
        days: data.form.days
    }
}

const fetchCategories = async () => {
    try {
        const response = await axios.get(route('category-list'));
        categories.value = response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

const fetchSubCategories = async () => {
    try {
        const response = await axios.get(route('sub-category-list', form.job_categories_id));
        sub_categories.value = response.data;
    } catch (error) {
        console.error('Error fetching states:', error);
    }
};

const initAdditionalDetails = () => {
    if (props.billBoardDraft?.additional_details) {
        let data = JSON.parse(props.billBoardDraft.additional_details);
        data.forEach(function (x) {
            appendAdditionalDetails(x)
        })
    }
}

onMounted(() => {
    initAdditionalDetails();
    fetchCategories();
    fetchSubCategories();
});
const validateForm = () => {
    errors.value = {}; // Reset errors
    let isValid = true;

    if (!form.title) {
        form.errors.title = 'Title is required';
        isValid = false;
    }
    if (!form.job_categories_id) {
        form.errors.job_categories_id = 'Category is required';
        isValid = false;
    }

    if (!form.sub_job_categories_id) {
        form.errors.sub_job_categories_id = 'Sub Category is required';
        isValid = false;
    }

    // Add more validation rules as needed

    return isValid;
};

const submitForm = () => {
    console.log(form.tags)
    if (validateForm()) {
        form.additional_details = additionalDetails
        form.post(route('bill-board.store',{billBoardId: props?.billBoardDraft?.id}), {
            onSuccess: () => props.nextStep(),
        });
    }
};
</script>

<style scoped>
.card {
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
}

.card-item {
    padding: 1rem;
}

.multiselect {
    margin-bottom: 20px;
}
</style>
