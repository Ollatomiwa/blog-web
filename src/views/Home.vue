<script setup>
import store from '../store.js';
const getWordsNumber = (str) => (str.split( ' ').length)

</script>

<template>

    <main class=" w-full grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 container mx-auto pt-[170px]">
    
    <div class=" PostItem border border-slate-700 mb-4 p-1 rounded-lg bg-blue  transition-all "  v-for="item, itemIndex in store.posts" :key="itemIndex" @click="$router.push(`/post/${item.id}`)">
      <h1 class="text-center text-black-500 text-xl font-bold mb-4">
           {{item.title}}
         </h1>
         <img
      :src="item.image"
      alt=""
      class="justify-end w-full object-cover"
    />

         <p class="text-1 text-center">{{  (item.date) }} </p>
         <p class="text-1">{{ getWordsNumber (item.descrription) }} words</p>
         <p class="text-2 text-purple-700 text-end cursor-pointer">read blog</p>
    </div>
    </main>
 
</template>
