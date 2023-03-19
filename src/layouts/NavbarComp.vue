
<template>
    <div class="grid grid-cols-12 justify-between bg-gray-800 sticky top-0 anim">
        <div class="col-span-12 lg:col-span-4 justify-start  flex items-center p-1 text-white  ">
            <router-link to="/">
                <span class="text-xl bg-inherit  font-bold" style="font-family: 'Roboto Slab', serif;">Beniz
                    <br>
                    <span class="text-orange-500 text-2xl">Transport Company</span></span>
            </router-link>
        </div>
        <div class="col-span-12 lg:col-span-8  flex md:justify-end justify-center items-center text-white ">
            <router-link to="/" active-class="bg-orange-500 p-1 lg:p-2 rounded-lg text-white">
                <span class="p-4 text-md hover:text-orange-400 cursor-pointer"
                style="font-family: 'Roboto Slab', serif;">Home</span>
            </router-link>
            <span class="p-4 text-md hover:text-orange-400 cursor-pointer"
                style="font-family: 'Roboto Slab', serif;">About</span>
            <router-link to="/services" active-class="bg-orange-500 p-1 lg:p-2 rounded-lg text-white">
                <span class="p-4 text-md hover:text-orange-400 cursor-pointer"
                style="font-family: 'Roboto Slab', serif;">Services</span>
            </router-link>
            <span class="p-4 text-md hover:text-orange-400 cursor-pointer"
                style="font-family: 'Roboto Slab', serif;">Contact</span>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.anim {
    animation: openslide 2s;
}


@keyframes openslide {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}
</style>