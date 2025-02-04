<script setup>
import { ref, computed } from 'vue';
import store from '../store.js';


const getWordsNumber = (str) => (str.split( ' ').length)

const postsPerPage = 7; // Max posts per page
const currentPage = ref(1);

// Compute the total number of pages
const totalPages = computed(() => Math.ceil(store.posts.length / postsPerPage));

// Compute the posts to display on the current page
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return store.posts.slice(start, end);
});

// Function to go to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Function to go to the previous page
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

</script>

<template>
  <div class="">
    <div class="pt-[60px] justify-center text-center text-blue-900 text-3xl">
      <h1>BLOG POSTS</h1>
    </div>
    <!-- Pagination Controls -->
    <div class="flex justify-end mr-4 gap-3 mt-6 mb-4 ">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="px-4 py-2  bg-[#00B86E]  text-white rounded-md disabled:opacity-50"
      >
        Prev
      </button>
  
      <span class="text-lg  font-semibold"> {{ currentPage }} of {{ totalPages }}</span>
  
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-[#00B86E]  text-white rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>

    <main class="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 mx-auto pt-[40px]">
      <div 
        v-for="(item, itemIndex) in paginatedPosts" 
        :key="itemIndex" 
        class="w-[250px] PostItem border-3 border-blue-300 mb-4 p-1 rounded-lg mx-auto transition-all"
        @click="$router.push(`/post/${item.id}`)"
      >
        <h1 class="text-center text-black-500 text-xl font-bold mb-4">
          {{ item.title }}
        </h1>
        <img
          :src="item.image"
          alt=""
          class="justify-center w-full object-contain"
        />
        <p class="text-1 text-center">{{ item.date }}</p>
        <p class="text-1">{{ getWordsNumber(item.descrription) }} words</p>
        <p class="text-2 text-purple-700 text-end cursor-pointer">Read blog</p>
      </div>
    </main>
        <!-- Pagination Controls -->
        <div class="flex justify-end mr-4 gap-3 mt-6 mb-4 ">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="px-4 py-2  bg-[#00B86E]  text-white rounded-md disabled:opacity-50"
      >
        Prev
      </button>
  
      <span class="text-lg  font-semibold"> {{ currentPage }} of {{ totalPages }}</span>
  
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-[#00B86E]  text-white rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>

  </div>
</template>
