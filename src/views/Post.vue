<script setup>
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();

const post = store.posts.find((x) => x.id === parseInt(route.params.id));
</script>

<template>
  <p
    class="text-start text-xl lg:ml-40 sm:ml-20 md:ml-20 cursor-pointer text-gray-900 hover:text-black w-[100px] pt-[100px] mb-[20px]"
    @click="$router.push('/')"
  >
    Go Back
  </p>
  <div class="Post container text-center mx-auto w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
    <h1 class="text-black-500 text-2xl lg:text-4xl font-bold mb-2">
      {{ post.title }}
    </h1>
    <p class="text-md lg:text-xl mb-2">{{ post.date }}</p>
    <img
      :src="post.image"
      alt=""
      class="justify-end h-[149px] w-full object-contain mb-5"
    />

    <!-- Left-aligned text with proper spacing and responsive sizes -->
    <div class="text-1 flex flex-col items-start space-y-4 mx-auto">
      <p 
        v-for="(paragraph, index) in post.descrription.split('\n\n')" 
        :key="index"
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-left"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>




