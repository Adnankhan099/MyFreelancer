<template>
  <div>
    <p class="mb-4"><b>Personal Information</b></p>
    <div class="grid grid-cols-10 gap-1 justify-evenly">
      <div class="col-span-2 border-r">
        <div class="w-56 mt-3">Full Name *</div>
        <div class="w-56 mt-8">Email Address *</div>
        <div class="mt-10">Phone Number</div>
      </div>
      <div class="col-span-8 ml-3">
        <div v-if="!showField" class="flex  w-4/4">
          <div class="w-1/10 justify-center flex items-center">
            <i class="mdi mdi-account text-white bg-[#34415e] p-2 text-2xl"></i>
          </div>
            <div class="bg-gray-100  w-80 p-3 w-9/10" style="margin-left:0px">
              {{ fullName }}
            </div>
           <!--  <button
              class="text-gray-500 ml-2"
              @click="toggleField"
            >
              <i class="mdi mdi-pencil-outline"></i> Edit
            </button> -->
          </div>
        <div v-if="showField" class="flex flex-content w-2/3">
          <input
            v-model="fullName"
            placeholder="Full Name *"
            class="border-b border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            class="text-blue-500 ml-2"
            @click="toggleField"
          >
            <i class="mdi mdi-plus-circle-outline"></i> Save
          </button>
        </div>
        <div class="flex  items-center mt-4 w-4/4">
          <div class="w-1/10">
          <i class="mdi mdi-email  text-white bg-[#34415e] p-2 text-2xl"></i>
        </div>
          <div class="bg-gray-100  w-80 p-3  w-9/10">
            {{ email }}
          </div>
          <i class="mdi mdi-check-decagram text-blue-700 ml-2"></i>
          <button @click="props.showEmailChange" class="text-gray-500 ml-2">
            Verify Different Email
          </button>
        </div>
        <div class="flex flex-col w-4/4 mt-4">
          <div class="flex justify-start items-center">
            <div class="w-1/10">
            <i class="mdi mdi-phone  text-white bg-[#34415e] p-2 text-2xl"></i>
          </div>
            <div class="bg-gray-100  w-80 p-3  w-9/10">
              {{ phone }}
            </div>
            <div class="ml-4">
              <a
                class="text-gray-500"
               :href="route('verify-mobile')"
              >
                Change | Remove
              </a>
            </div>
            <div v-if="dialog">
              <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
                <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">Edit Contact Information</p>
                    <div class="cursor-pointer z-50" @click="dialog = false">
                      <i class="mdi mdi-close text-gray-500"></i>
                    </div>
                  </div>
                  <div class="space-y-6">
                    <p class="font-bold">Enter Phone Number</p>
                    <input ref="phonen" id="phoneC" name="phonen" type="tel" class="py-2 w-full bg-white border shadow-sm text-black">
                    <div class="font-bold">
                      <p>How would you like to verify your number?<br /><span class="text-gray-500 text-sm">You will receive a 6-digit code</span></p>
                    </div>
                    <div class="border p-2">
                      <div class="flex gap-x-3 items-center">
                        <input type="radio" value="whatsup" checked />
                        <i class="mdi mdi-whatsapp text-green-500"></i><span>Whatsapp</span>
                        <div class="bg-green-800 text-white p-1 text-xs ml-auto">Recommended</div>
                      </div>
                      <p class="pl-4 pt-4">Receive security codes and enjoy a more seamless experience across MyFreelancer.com including the ability to connect with freelancers via WhatsApp</p>
                    </div>
                  </div>
                  <div class="flex justify-end pt-2">
                    <button
                      class="bg-blue-500 text-white px-4 py-2 rounded"
                      @click="dialog = false"
                    >
                      Send Code
                    </button>
                    <button
                      class="ml-2 text-gray-500"
                      @click="dialog = false"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 mt-4">
            <!-- <div>Allow Employers to connect with me on Whatsapp via Quotes and my Public</div>
            <input type="checkbox" class="toggle-checkbox" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-content {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: start;
}
.toggle-checkbox {
  appearance: none;
  width: 40px;
  height: 20px;
  background: #d1d5db;
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: background 0.3s;
}
.toggle-checkbox:checked {
  background: #4b74b4;
}
.toggle-checkbox:checked::before {
  transform: translateX(20px);
}
.toggle-checkbox::before {
  content: '';
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 9999px;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: transform 0.3s;
}
</style>


<script setup>
import { ref } from "vue";

const props = defineProps({
    userDetail: {
        type: Object,
    }, countries: {
        type: Array,
    },
    selectTab:Function,
    showEmailChange:Function,
    changeEmailAddress:Boolean
});


// console.log(props.userDetail);
const dialog = ref(false)
const phonen = ref({value:''})

// Define reactive variables using ref
const fullName = ref(props.userDetail.name);
const email = ref(props.userDetail.email);
const phone =ref(props.userDetail.phone);
const showField = ref(false);


const toggleField = () => {
// Toggle the value of showField to switch between display modes
showField.value = !showField.value;
};
</script>
