f
<template>

    <div class="w-full h-screen relative">
        
        <div
            class="flex justify-between items-center h-full absolute p-0 m-0  top-0 left-0 right-0 bottom-0 opacity-30"
            style="
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/The_Long_Road_Ahead.jpg/1200px-The_Long_Road_Ahead.jpg?20100104110045');
            background-size: cover;">
        </div> 
        <InformationComp/>
    
    </div>

</template>

<script setup>

import { ref } from 'vue';


import InformationComp from './TitleComp.vue';


</script>

<style scoped>


</style>