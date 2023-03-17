
<template>
   
  <div class="grid grid-cols-12 justify-between bg-white dark:bg-gray-900 sticky top-0 anim">
    <div class="flex items-center col-span-3 p-5 text-white  " >
        <span class="text-4xl font-bold" style="font-family: 'Roboto Slab', serif;">Benis</span>
    </div>
    <div class="flex justify-end items-center col-span-9 text-white ">
        <span class="p-5 text-xl hover:text-orange-400 cursor-pointer" style="font-family: 'Roboto Slab', serif;">Home</span>
        <span class="p-5 text-xl hover:text-orange-400 cursor-pointer" style="font-family: 'Roboto Slab', serif;">About</span>
        <span class="p-5 text-xl hover:text-orange-400 cursor-pointer" style="font-family: 'Roboto Slab', serif;">Services</span>
        <span class="p-5 text-xl hover:text-orange-400 cursor-pointer" style="font-family: 'Roboto Slab', serif;">Contact</span>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

.anim{
        animation: openslide 2s ;
    }
    
    
    @keyframes openslide {
        from{
            transform: translateY(-1000px);
        }
        to{
            transform: translateY(0);
        }
    }

</style>