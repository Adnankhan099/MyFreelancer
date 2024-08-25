
<template>
  <AuthenticatedLayout>
<div class="max-w-6xl mx-auto">
  <h1 class="font-bold text-xl py-2">Post a Job</h1>
  <hr class="border-info mb-4">
  <form @submit.prevent="submitForm" class="grid gap-1 grid-cols-7 border-t border-solid py-5">
    <div class="col-span-5 space-y-8">
      <div class="space-y-3">
        <div class="font-semibold flex items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-8 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 2 2 2 2zm16 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 12c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-4 4c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm8 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 2 2zM12 16c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
          </svg>
          <span>Give your job a title</span>
        </div>
        <input type="text" v-model="form.title" placeholder="Develop Android Application" class="w-full border p-3">
        <p class="text-danger">{{ form.errors.title }}</p>
      <!--   <span class="text-xs text-blue-800 font-semibold">
         Example
        </span> -->
      </div>
      <div class="space-y-3">
        <div class="font-semibold flex items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-8 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 2 2 2 2zm16 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 12c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-4 4c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm8 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 2 2zM12 16c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
          </svg>
          <span>Describe the job in details</span>
        </div>
        <div id="editor" ref="editor"></div>
      </div>
      <div class="space-y-3">
        <div class="font-semibold flex items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-8 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 2 2 2 2zm16 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 12c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-4 4c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm8 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 16c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
          </svg>
          <span>What work do you need to get done</span>
        </div>
        <div v-if="!newCategory" class="grid gap-3 grid-cols-3">
          <label v-for="(category, index) in categories" :value="category.id" :key="index"  class="cursor-pointer text-sm font-bold border p-2 has-[:checked]:bg-blue-600 has-[:checked]:text-white">
            <input type="radio" class="hidden" name="job-category" :value="category.id" v-model="form.job_categories_id">
            {{ category.name }}
          </label>
        </div>
          <p class="text-danger">{{ form.errors.job_categories_id }}</p>
        <span v-if="!newCategory" @click="newCategory = true" class="text-xs text-blue-800 font-semibold cursor-pointer">My category is not listed</span>
        <div v-if="newCategory">
          <div class="border p-3">
            <div class="flex justify-between border-b pb-2">
              <span class="text-sm">Category - Other</span>
              <button @click="newCategory = false" class="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-3">
              <span class="font-bold">Skills</span>
              <input type="text" v-model="form.skills" class="w-full p-2 border mt-1">
            </div>
          </div>
        </div>
      </div>
      <div class="border">
        <div>
          <ul class="flex">
            <li class="flex-1 text-center py-2 border-b-2 border-primary cursor-pointer">
              <span class="pr-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-8 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm16 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 12c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-4 4c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm8 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 16c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                </svg>
                Fixed Price
              </span>
            </li>
            <!-- Uncomment below lines for additional pricing options -->
            <!--
            <li class="flex-1 text-center py-2 border-b-2 cursor-pointer">
              <span class="pr-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Hourly
              </span>
            </li>
            <li class="flex-1 text-center py-2 border-b-2 cursor-pointer">
              <span class="pr-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Not Sure
              </span>
            </li>
            -->
          </ul>
        </div>
        <div class="px-4 py-4">
          <div>
            <div class="grid grid-cols-2 px-2">
              <div class="space-y-2">
                <label class="font-semibold block space-x-2">
                  <input type="radio" name="price-range" v-model="form.price" value="under-250"><span>Under $250</span>
                </label>
                <label class="font-semibold block space-x-2">
                  <input type="radio" name="price-range" v-model="form.price" value="250-500"><span>$250 to $500</span>
                </label>
                <label class="font-semibold block space-x-2">
                  <input type="radio" name="price-range" v-model="form.price" value="500-1000"><span>$500 to $1,000</span>
                </label>
                <label class="font-semibold block space-x-2">
                  <input type="radio" name="price-range" v-model="form.price" value="1000-2500"><span>$1,000 to $2,500</span>
                </label>
                <label class="font-semibold block space-x-2">
                  <input type="radio" name="price-range" v-model="form.price" value="2500-5000"><span>$2,500 to $5,000</span>
                </label>
              </div>
              <div class="space-y-2">
                <label class="font-semibold block space-x-2">
                  <input type="radio" name="price-range" v-model="form.price" value="5000-10000"><span>$5,000 to $10,000</span>
                </label>
                <label class="font-semibold block space-x-2">
                  <input type="radio" name="price-range" v-model="form.price" value="10000-25000"><span>$10,000 to $25,000</span>
                </label>
                <label class="font-semibold block space-x-2">
                  <input type="radio" name="price-range" v-model="form.price" value="over-25000"><span>Over $25,000</span>
                </label>
                <label class="font-semibold block space-x-2">
                  <input type="radio" name="price-range" v-model="form.price" value="confidential"><span>Not sure/Confidential</span>
                </label>
              </div>
            </div>

          </div>

        </div>
      </div>
        <p class="text-danger">{{ form.errors.price }}</p>

      <div class="space-y-3">
        <div class="font-semibold flex items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-8 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 2 2 2 2zm16 0c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 12c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm-4 4c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 16c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
          </svg>
          <span>Share your preferences</span>
        </div>
        <div class="grid grid-cols-3 gap-x-3">
          <label>
            <span>Visible to:</span>
            <select  v-model="form.visible_to" class="h-10 border-b-2 border-gray-300 bg-white w-full">
              <option value="">SELECT</option>
              <option>Everyone</option>
              <option>MyFreelancer Freelancers</option>
              <option>Invite Only (on MyFreelancer)</option>
            </select>
          </label>
           <label>
            <span>Location:</span>
            <select  v-model="form.location" class="h-10 border-b-2 border-gray-300 bg-white w-full">
              <option value="">SELECT</option>
              <option>Anywhere</option>
              <option>Specific Location</option>
              <option>Specific Timezone</option>
              <!-- Add country options here dynamically -->
            </select>
          </label>
          <label v-if="form.location=='Specific Location'">
            <span>Countries:</span>
          <multiselect
      v-model="form.countries"
      :options="countries"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="name"
    >
      <template slot="option" slot-scope="props">
        <div class="option__desc">
          <span class="option__title">{{ props }}</span>
        </div>
      </template>
    </multiselect>
          </label>

          <label>
            <span>Get Quotes Till:</span>
            <input class="p-2 mt-1 border-b-2 border-gray-300 w-full" type="date">
          </label>
        </div>
      </div>
      <button class="bg-[#4B74B4] text-lg font-bold text-white py-2 px-4 mt-4 float-right">
        Submit Job
      </button>
    </div>

      <div class="col-span-2 text-sm grid justify-items-center">
        <div class="space-y-3">
          <p class="font-bold text-center text-lg">It's free to post a job</p>
          <ul class="space-y-3 pb-6 border-b border-solid font-semibold text-gray-500">
            <li class="flex items-center gap-x-3"><v-icon size="large" color="gray" icon="mdi-account-group"></v-icon>
              <span>Acess global talent post</span>
            </li>
            <li class="flex items-center gap-x-3"><v-icon size="large" color="gray"
                icon="mdi-comment-quote-outline"></v-icon>
              <span>Get Quotes within hours</span>
            </li>
            <li class="flex items-center gap-x-3"><v-icon size="large" color="gray"
                icon="mdi-file-document-edit-outline"></v-icon>
              <span>Create agreements mutually</span>
            </li>

          </ul>
          <div class="font-semibold py-4 border-b border-solid px-5">
            Have a large number of Freelancer orjobs to manage?<br />
            <span class="text-blue-700">Use MyFreelancer Enterprise</span>
          </div>
          <div class="font-semibold py-3 px-5">
            For assistance or inquiries, call us at 1-412-687-2365 between 9 AN and 6 PM EST (Monday - Friday)
          </div>
        </div>

      </div>
     </form>
  </div>
</AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { ref, watch,onMounted} from 'vue'
import Quill from 'quill'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

const tab = ref(null)
const newCategory = ref(false)
import { Head, Link, useForm } from '@inertiajs/vue3';
import axios from 'axios';
const categories = ref([]);
const errors = ref({});
const editor = ref(null)

const quillInstance = ref(null)

const fetchCategories = async () => {
  try {
    const response = await axios.get(route('category-list'));
    categories.value = response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

onMounted(fetchCategories);

const props = defineProps({
  countries: Array,
});
const form = useForm({
    title: ref(null),
    job_categories_id:ref(null),
    description: ref('dss'),
    price: ref(null),
    skills: ref(null),
    countries:ref([]),
    location: ref(null),
    visible_to: ref(null),
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

      if (!form.price) {
        form.errors.price = 'Price is required';
        isValid = false;
      }

      // Add more validation rules as needed

      return isValid;
    };

const submitForm = () => {
    if (validateForm()) {
        form.description = quillInstance.value.root.innerHTML;
    form.post(route('job.store'), {
        onSuccess: () => console.log(1),
    });
}
};
onMounted(() => {
    if (editor.value) {
        quillInstance.value = new Quill(editor.value, {
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block'],
                ],
            },
            placeholder: 'Compose an epic...',
            theme: 'snow', // or 'bubble'
        });
    }
});


</script>
<style>
.ql-editor, .ql-blank {
  height: 200px; /* Set your desired height here */
}
</style>
