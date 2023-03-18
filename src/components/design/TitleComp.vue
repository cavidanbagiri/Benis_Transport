

<template>
    <div class=" absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <p class="text-white text-7xl first" style="font-family: 'Kanit', sans-serif;">
            <span class="text-orange-500" >Safe</span>  And <span class="text-orange-500" >Believebly</span> 
        </p>
        <p class="text-white text-7xl second" style="font-family: 'Roboto Slab', serif;">
            Services
        </p> 
        <button class="text-white bg-orange-500 py-3 px-5 rounded-lg my-5 text-lg  second" style="font-family: 'Roboto Slab', serif;">About Us</button>
    </div>
</template>

<script setup>

</script>

<style scoped>

    .first{
        animation: openslide 1s ;
    }

    .second{
        animation: openslide 1.5s ;
    }
    
    
    @keyframes openslide {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }

</style>