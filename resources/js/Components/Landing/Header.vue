
<template>
  <header class="fixed left-0 bg-red-500 right-0 z-30 px-4 lg:px-10 text-white">
    <div class="relative flex py-4 px-1 border-b border-b-gray-400 text-base lg:text-lg">
      <button class="lg:hidden" @click="openMobileMenu = !openMobileMenu">
      <img v-if="!openMobileMenu" width="20" src="@/assets/bars-solid.svg" />
      <img v-else width="20" src="@/assets/xmark-solid.svg" />
    </button>
      <p class="flex items-center py-2 space-x-3">
        <Link :href="route('/')"><img width="120" src="@/assets/logo2.png" /></Link>
      </p>
      <nav class="flex items-center ml-auto">
        <ul class="*:inline-block *:mx-2 *:px-3 *:py-1 *:cursor-pointer hidden lg:block">
           <li
            class="relative group border border-transparent hover:rounded-full"
            :class="
              animate === 4
                ? 'hover:text-white hover:bg-[#112F62]'
                : 'hover:text-blue-950 hover:bg-white'
            "
          ><Link :href="route('categories')">Browse Categories</Link>
        </li>
          <li
            class="relative group border border-transparent hover:rounded-full"
            :class="
              animate === 4
                ? 'hover:text-white hover:bg-[#112F62]'
                : 'hover:text-blue-950 hover:bg-white'
            "
          >
           <Link :href="route('all-banners')"> Find Talent</Link>
           <!--  <svg
              width="8"
              class="inline-block pb-1 fill-white group-hover:fill-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>

            <div class="group-hover:block hidden absolute top-2 left-0 py-4 z-20">
              <div class="bg-transparent h-6 w-52 "></div>
              <ul class="*:px-3 *:py-2 bg-white lg:shadow-md">
                <li class="hover:bg-slate-300 border-b border-blue-200"><a>Link 1</a></li>
                <li class="hover:bg-slate-300 border-b border-blue-200"><a>Link 2</a></li>
                <li class="hover:bg-slate-300"><a>Link 3</a></li>
              </ul>
            </div> -->
          </li>
          <li
            class="relative group border border-transparent hover:rounded-full"
            :class="
              animate === 4
                ? 'hover:text-white hover:bg-[#112F62]'
                : 'hover:text-blue-950 hover:bg-white'
            "
          >
          <Link :href="route('find-work')">  Find Work</Link>
         <!--    <svg
              width="8"
              class="inline-block pb-1 fill-white group-hover:fill-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>

            <div class="group-hover:block hidden absolute top-2 left-0 py-4 z-20">
              <div class="bg-transparent h-6 w-52"></div>
              <ul class="*:px-3 *:py-2 bg-white lg:shadow-md">
                <li class="hover:bg-slate-300 border-b border-blue-200"><a>Link 1</a></li>
                <li class="hover:bg-slate-300 border-b border-blue-200"><a>Link 2</a></li>
                <li class="hover:bg-slate-300"><a>Link 3</a></li>
              </ul>
            </div> -->
          </li>
          <li
            class="relative group border border-transparent hover:rounded-full"
            :class="
              animate === 4
                ? 'hover:text-white hover:bg-[#112F62]'
                : 'hover:text-blue-950 hover:bg-white'
            "
          >
            Why MyFreelancer
           <!--  <svg
              width="8"
              class="inline-block pb-1 fill-white group-hover:fill-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>

            <div class="group-hover:block hidden absolute top-2 left-0 py-4 z-20">
              <div class="bg-transparent h-6 w-52"></div>
              <ul class="*:px-3 *:py-2 bg-white lg:shadow-md">
                <li class="hover:bg-slate-300 border-b border-blue-200"><a>Link 1</a></li>
                <li class="hover:bg-slate-300 border-b border-blue-200"><a>Link 2</a></li>
                <li class="hover:bg-slate-300"><a>Link 3</a></li>
              </ul>
            </div> -->
          </li>
        </ul>

        <ul class="*:inline-block *:px-3 *:py-2 *:cursor-pointer hidden lg:block ml-9">
        <li><a class="bg-[rgb(29 56 100)]-500 hover:bg-[rgb(29 56 100)]-700 text-white font-bold py-2 px-4 border-whites rounded" href="https://support.myfreelancer.com/" target="_blank" style="font-family: Poppins;">Support</a></li>
          <li  v-if="!$page?.props?.auth?.user?.name"> <Link href="/login">Login</Link></li>
          <li  v-if="!$page?.props?.auth?.user?.name"> <Link href="/register">Sign Up</Link></li>
           <li  v-if="$page?.props?.auth?.user?.name"><Link href="/profile">Profile</Link></li>
        </ul>
      </nav>
    </div>

    <div
      v-if="openMobileMenu"
      class="absolute w-2/3 lg:w-1/5 top-22 left-0 z-50 bg-white text-black"
    >
      <ul class="text-base *:px-6 *:py-2">
        <li class="relative group border-b border-blue-200">
           <Link :href="route('all-banners')"> Find Talent</Link>
        </li>
        <li class="relative group border-b border-blue-200">
            <Link :href="route('find-work')">  Find Work</Link>
        </li>
        <li class="relative group border-b border-blue-200">
          <input id="drowpdown-3" class="peer hidden w-full" type="checkbox" />
          <label for="drowpdown-3">
            <div class="flex justify-between w-full">
              <span>Whye MyFreelancer</span>
              <img class="w-2 pb-1 ml-auto" width="8" src="@/assets/caret-down-solid.svg" />
            </div>
          </label>
          <div class="peer-checked:block hidden bg-white">
            <ul class="*:px-2 *:py-1">
              <li><a>-> Link 1</a></li>
              <li><a>-> Link 2</a></li>
              <li><a>-> Link 3</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <ul class="flex justify-evenly px-6 py-8">
        <li class="font-bold underline underline-offset-3"><Link href="/login">Login</Link></li>
        <li class="font-bold underline underline-offset-3"><Link href="/register">Sign Up</Link></li>
      </ul>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {Link} from "@inertiajs/vue3";
const openMobileMenu = ref(false)
const showSearchBar = ref(false)

defineProps<{
  animate: number
}>()
</script>
