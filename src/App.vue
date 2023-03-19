
<template>

    <div class="m-0  relative w-screen bg-gray-800 z-10 p-2 lg:p-5">

        <!-- <div class="fixed m-0 p-0 h-screen  w-screen bg-black -z-10  " style="background-image: url('/src/assets/bodyimage.webp'); background-size: cover;">

        </div>   -->
        <!-- <div class="container m-0 p-0"> -->
          <NavbarComp/>
  
          <router-view/>
  
          <FooterComp/>
        <!-- </div> -->

    </div>

</template>

<script setup>

  import NavbarComp from './layouts/NavbarComp.vue';
  import FooterComp from './components/design/FooterComp.vue';

</script>




<style lang="">
  
</style>