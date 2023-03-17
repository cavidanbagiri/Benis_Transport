
<template>

    <div class="m-0 p-0 relative w-screen bg-black z-10">

        <!-- <div class="fixed m-0 p-0 h-screen  w-screen bg-black -z-10  " style="background-image: url('/src/assets/bodyimage.webp'); background-size: cover;">

        </div>   -->

        <NavbarComp/>

        <router-view/>

        <FooterComp/>

    </div>

</template>

<script setup>

  import NavbarComp from './layouts/NavbarComp.vue';
  import FooterComp from './components/design/FooterComp.vue';

</script>




<style lang="">
  
</style>