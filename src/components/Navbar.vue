;<script setup>
import { ref } from 'vue';
import logo from '../assets/img/logo.jpg';


const img = ref(logo);

</script>
<template>
      <div class="w-full h-[80px] z-10 bg-white fixed drop-shadow-lg">
        <div class='flex justify-center items-center w-full h-full md:max-w-[1240px] m-auto'>

                <div class='flex items-center'>
                    <img :src="img" alt="E.A. ADESINA & CO" class='sm:ml-10 ss:ml-10 md:ml-3 opacity-[95%] w-full h-[65px]' />
                </div>
        </div>
    
    </div>
</template>