f
<template>

    <div class="h-screen w-screen p-0 m-0 relative foxed">
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


import InformationComp from './InformationComp.vue';


</script>

<style scoped>


</style>