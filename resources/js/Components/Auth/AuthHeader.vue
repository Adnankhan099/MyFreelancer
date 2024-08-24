<template>
  <div class="bg-blue-100 p-4">
    <div class="max-w-screen-lg mx-auto ">
      <div class="flex justify-center  items-center space-x-4">
        <!-- Logo -->
        <div class="flex-grow">
          <Link :href="route('/')">
            <img
              src="@/assets/logo2.png"
              alt="Myfreelancer Logo"
              class="w-42 h-8 object-cover "
            />
          </Link>
        </div>

        <!-- SearchBar -->
        <div class="">
          <SearchBar />
        </div>

        <!-- Buttons (optional) -->
        <div class="flex space-x-2 items-center">
          <PostButton />
          <!-- <GroupMenu />
          <NotificationMenu />
          <ChatMenu /> -->
          <ProfileMenu />
        </div>
      </div>



   <!--    <div class="flex justify-center items-center space-x-4 mt-4">
        <a href="dashboard">
          <button
            class="text-gray-800 text-xs h-8 py-0 flex items-center"
          >
            <i class="mdi mdi-view-dashboard mr-2"></i>
            Dashboard
          </button>
        </a>

        <router-link to="/app/hire">
          <button
            class="text-gray-800 text-xs h-8 py-0 flex items-center"
          >
            <i class="mdi mdi-plus mr-2"></i>
            Hire
          </button>
        </router-link>

        <router-link to="/app/manage">
          <button
            class="text-gray-800 text-xs h-8 py-0 flex items-center"
          >
            <i class="mdi mdi-cog mr-2"></i>
            Manage
          </button>
        </router-link>

        <router-link to="/app/payments">
          <button
            class="text-gray-800 text-xs h-8 py-0 flex items-center"
          >
            <i class="mdi mdi-credit-card-outline mr-2"></i>
            Payments
          </button>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.btn-tonal {
  background-color: #e0e0e0;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
}

.btn-text {
  background-color: transparent;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
}
.bg-gray-100 {
  background-color: #eeeeee;
  box-shadow: 1px 2px 3px #b5b5b569;
}
</style>

<script setup>
import { useRouter } from "vue-router";
import SearchBar from '@/Components/Auth/Comp/SearchBar.vue'
import PostButton from '@/Components/Auth/Comp/PostButton.vue'
import GroupMenu from '@/Components/Auth/Comp/GroupMenu.vue'
import NotificationMenu from '@/Components/Auth/Comp/NotificationMenu.vue'
import ChatMenu from '@/Components/Auth/Comp/ChatMenu.vue'
import ProfileMenu from '@/Components/Auth/Comp/ProfileMenu.vue'
import {Link} from "@inertiajs/vue3";
const router = useRouter();
</script>
