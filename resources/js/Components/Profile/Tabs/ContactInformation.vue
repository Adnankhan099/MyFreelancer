<template>


  <div class="w-full">
    <div class="border flex flex-col gap-5 shadow-sm">
      <div class="border-b bg-card-header">
        <h2 class="p-4 text-lg ">Edit Contact Information</h2>
      </div>
      <div class="p-4">
        <div class="flex flex-col gap-4">
         <div v-if="!changeEmailAddress">
            <ProfileCIPersonalInfo :userDetail="props.userDetail" :changeEmailAddress="changeEmailAddress" :selectTab="selectTab" :ChangeEmail="ChangeEmail" :showEmailChange="showEmailChange" />
          <hr class="border-t" />
          <ProfileCIAddressInfo :userDetail="props.userDetail" :countries="countries"  />
          <hr class="border-t" />
          <ProfileCIInstantMessages  :userDetail="props.userDetail" />
         </div>
          <ChangeEmail  :userDetail="props.userDetail" :changeEmailAddress="changeEmailAddress" :showProfileChange="showProfileChange" />
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>
<script setup>
import { ref } from 'vue'

import ProfileCIPersonalInfo from '@/Components/Profile/ContactInfo/ProfileCIPersonalInfo.vue'
import ProfileCIAddressInfo from '@/Components/Profile/ContactInfo/ProfileCIAddressInfo.vue'
import ProfileCIInstantMessages from '@/Components/Profile/ContactInfo/ProfileCIInstantMessages.vue'
import ChangeEmail from '@/Components/Profile/ContactInfo/ChangeEmail.vue'
import Address from '@/Components/Address.vue'

const props = defineProps({
    userDetail: {
        type: Object,
    },
    countries: {
        type: Array,
    },
    selectTab:Function
});

const showEmailChange =()=>{
  changeEmailAddress.value=(true)
}

const showProfileChange =()=>{
  changeEmailAddress.value=(false)
}
const changeEmailAddress=ref(false)
// console.log(props.userDetail)

</script>
