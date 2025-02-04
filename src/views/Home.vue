<script setup>
import store from '../store.js';
const getWordsNumber = (str) => (str.split( ' ').length)

</script>

<template>

  <div class="">

    <div class="pt-[60px] justify-center text-center text-blue-900 text-3xl">
      <h1>BLOG POSTS</h1>
    </div>
      <main class=" w-full grid  lg:grid-cols-4 md:grid-cols-2 gap-8 px-4  mx-auto pt-[40px]">
      <div class=" w-[250px] PostItem border-3 border-blue-300 mb-4 p-1 rounded-lg mx-auto  transition-all "  v-for="item, itemIndex in store.posts" :key="itemIndex" @click="$router.push(`/post/${item.id}`)">
        <h1 class="text-center text-black-500 text-xl font-bold mb-4">
             {{item.title}}
           </h1>
           <img
        :src="item.image"
        alt=""
        class="justify-center w-full object-contain"
      />
  
           <p class="text-1 text-center">{{  (item.date) }} </p>
           <p class="text-1">{{ getWordsNumber (item.descrription) }} words</p>
           <p class="text-2 text-purple-700 text-end cursor-pointer">read blog</p>
      </div>
      </main>
  </div>
 
</template>
