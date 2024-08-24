import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useProfileStore = defineStore('profile', () => {
    const profile = ref([]);
    const isEmployer = ref(false);
    return {
        profile,
        isEmployer,
        switch_mode: function(){
            isEmployer.value = !isEmployer.value
        },
        setProfile: function(value){
            profile.value = value;
        },
        userRole: computed(() => {
            return isEmployer.value ? 'Buying' : 'Selling';
        })
    }
})
