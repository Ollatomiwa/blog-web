<script setup>
import { useRoute } from 'vue-router';
import store from '../store';


const route = useRoute()


const post = store.posts.find(x => x.id === parseInt(route.params.id))


</script>

<template>
    <p class="text-start text-xl lg:ml-40 sm:ml-20 md:ml-20 cursor-pointer  text-gray-900 hover:text-black w-[100px] pt-[100px] mb-[140px]" @click="$router.push('/')">Go Back</p>
    <div class="Post container text-center mx-auto ">
      <h1 class="text-black-500 text-4xl font-bold mb-4">
           {{ post.title }}
         </h1>
         <p class="text-md mb-5">{{ post.date }}</p>
         <p class="text-1">{{ post.descrription }}</p>
    </div>
</template>


