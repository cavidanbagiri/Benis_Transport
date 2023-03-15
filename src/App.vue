
<template>

    <div class="m-0 p-0 relative w-screen ">

        <!-- <div class="fixed m-0 p-0 h-screen -z-10 w-screen bg-black opacity-50 " style="background-image: url('/src/assets/bodyimage.webp'); background-size: cover;">
          
        </div>   -->

        <NavbarComp></NavbarComp>

        <router-view>

        </router-view>

    </div>

</template>

<script setup>

  import NavbarComp from './layouts/NavbarComp.vue';

</script>




<style lang="">
  
</style>