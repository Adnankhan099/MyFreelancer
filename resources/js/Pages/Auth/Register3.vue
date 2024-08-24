
<template>
<Auth>
  <div class="container mx-auto max-w-screen-lg mt-10">
   <div class="flex md:flex-row mt-10 shadow-lg rounded-lg overflow-hidden">
            <div class="hidden md:flex items-center justify-center w-full md:w-1/2 p-10 bg-primary">
                <SignUpCarousel />
            </div>
      <!-- Right Column with Form -->
    <div class="w-full md:w-1/2 bg-white p-10 flex flex-col gap-7">
        <h4 class="text-2xl text-center text-primary">Sign Up</h4>
        <RegisterBasicStep :step="step" :nextStep="nextStep" />
        <RegisterAccountTypeStep :step="step" :previousStep="previousStep" :nextStep="nextStep" />
        <RegisterVerifyEmailStep :step="step" :flash="flash" />

      </div>
    </div>
  </div>
  </Auth>
</template>


<style scoped>
.bg-primary{
  background-color: rgb(79,134,196) !important;
}
.text-primary {
    color: #007bff;
}
</style>
<script setup>
import { ref } from "vue";
import SignUpCarousel from '@/Components/Register/SignUpCarousel.vue'
import RegisterBasicStep from '@/Components/Register/Steps/RegisterBasicStep.vue'
import RegisterAccountTypeStep from '@/Components/Register/Steps/RegisterAccountTypeStep.vue'
import RegisterVerifyEmailStep from '@/Components/Register/Steps/RegisterVerifyEmailStep.vue'
import Auth from '@/Layouts/Auth.vue'

const step = ref(2);

const props = defineProps({
  flash: Object,
});

const nextStep = () => ++step.value;
const previousStep = () => --step.value;
</script>
