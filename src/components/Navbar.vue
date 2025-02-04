;<script setup>
import { ref } from 'vue';
import logo from '../assets/img/logo.jpg';


const img = ref(logo);

</script>
<template>
      <div class=" h-[67px] z-10 bg-white  drop-shadow-lg">
        <div class='flex  h-full md:max-w-[1200px] sm:max-w-[500px]  m-auto'>

                <div class=' '>
                    <img :src="img" alt="E.A. ADESINA & CO" class='sm:ml-10 ss:ml-10 md:ml-3 opacity-[95%] w-full h-[65px]' />
                </div>

        </div>
    
    </div>
</template>