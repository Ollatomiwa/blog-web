<script setup>
import Header from '../components/Header.vue';


const posts = [
  {
    id: 1,
    title: 'Post 1',
    descrription: "This is the first post",
    date: new Date()
  },
  {
    id: 2,
    title: 'Post 2 ',
    descrription: "This is the second post",
    date: new Date()
  },
  {
    id: 3,
    title: 'Post 3',
    descrription: "This is the third post",
    date: new Date()
  },
  {
    id: 4,
    title: 'Post 4',
    descrription: "This is the fourth post",
    date: new Date()
  },
]

</script>

<template>

    <main class=" container mx-auto">
    
    <div class="PostItem" v-for="item, itemIndex in posts" :key="itemIndex">
      <h1 class="text-amber-500 text-5xl font-bold mb-4">
           {{item.title}}
         </h1>
         <p class="text-2xl">{{ item.descrription }}</p>
    </div>
    </main>
 
</template>
