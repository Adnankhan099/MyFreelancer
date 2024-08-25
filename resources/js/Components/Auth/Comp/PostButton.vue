<script setup>
import { useRouter } from "vue-router";
import {Link} from "@inertiajs/vue3";
import {useProfileStore} from "@/Stores/ProfileStore.js";
const router = useRouter();
const profileStore = useProfileStore();
const goToPostJob = () => router.push({ path: "/app/post-job" });
</script>

<template>
  <Link v-if="profileStore.isEmployer" :href="route('job.create')" style="color:white" class="py-1 text-xs btn-text" >
    <i class="mdi mdi-plus mr-2"></i>
    Post Job
  </Link>
</template>

<style scoped>
.btn-text {
  background-color: transparent;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
}
</style>
