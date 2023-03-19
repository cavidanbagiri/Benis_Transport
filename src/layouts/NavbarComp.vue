
<template>
    <div class="grid grid-cols-12 justify-between bg-gray-800 sticky top-0 anim">
        <div class="col-span-12  text-center lg:col-span-3 justify-start lg:justify-center flex items-center p-1 text-white  ">
            <span class="text-3xl   font-bold" style="font-family: 'Roboto Slab', serif;">Benis <span class="text-orange-500">Transport</span></span>
        </div>
        <div class="col-span-12 lg:col-span-9  flex md:justify-end justify-center items-center text-white ">
            <span class="p-4 text-md hover:text-orange-400 cursor-pointer"
                style="font-family: 'Roboto Slab', serif;">Home</span>
            <span class="p-4 text-md hover:text-orange-400 cursor-pointer"
                style="font-family: 'Roboto Slab', serif;">About</span>
            <span class="p-4 text-md hover:text-orange-400 cursor-pointer"
                style="font-family: 'Roboto Slab', serif;">Services</span>
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