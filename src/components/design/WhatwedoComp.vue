

<template>
    <div class="justify-between dark:bg-gray-900 text-orange-500 my-10 w-full grid grid-cols-12">
        <router-link to="/services" class="col-span-12 lg:col-span-4" >
            <div class=" m-2 p-5 col-span-12 lg:col-span-4 border-2 flex flex-col bg-white rounded-xl items-center first cursor-pointer 
        hover:scale-105 hover:duration-500 hover:bg-orange-500 hover:text-white ease-in-out transition">
            <img class="w-16 h-16 mt-2" style="color:orange" src="../../assets/passenger.png" alt="">
            <p class="text-2xl font-bold mt-5 p-2 " style="font-family: 'Poppins', sans-serif;">Passenger
                Transport</p>
            <span class="text-lg  mt-5 text-center px-5 text-gray-400" style="font-family: 'Poppins', sans-serif;">The sea
                freight service has grown conside rably in recent years. We spend timetting to know your processes
                to.</span>
        </div>
        </router-link>
        <router-link to="/services" class="col-span-12 lg:col-span-4" >
        <div class=" m-2 p-5 border-2  col-span-12  lg:col-span-4  flex flex-col bg-white rounded-xl items-center  second  cursor-pointer 
        hover:scale-105 hover:duration-500 hover:bg-orange-500 hover:text-white ease-in-out transition">
            <img class="w-16 h-16  mt-2" style="color:orange" src="../../assets/shipped.png" alt="">
            <p class="text-2xl font-bold mt-5 p-2 " style="font-family: 'Poppins', sans-serif;">Services
                Automobiles</p>
            <span class="text-lg  mt-5 text-center px-5 text-gray-400" style="font-family: 'Poppins', sans-serif;">The sea
                freight service has grown conside rably in recent years. We spend timetting to know your processes
                to.</span>
        </div>
    </router-link>
    <router-link to="/services" class="col-span-12 lg:col-span-4" >
        <div class=" m-2 p-5 border-2 col-span-12 lg:col-span-4 flex flex-col bg-white rounded-xl items-center  third  cursor-pointer 
        hover:scale-105 hover:duration-500 hover:bg-orange-500 hover:text-white ease-in-out transition">
            <img class="w-16 h-16  mt-2" style="color:orange" src="../../assets/rental-car.png" alt="">
            <p class="text-2xl font-bold mt-5 p-2 " style="font-family: 'Poppins', sans-serif;">Renting Cars
            </p>
            <span class="text-lg  mt-5 text-center px-5 text-gray-400" style="font-family: 'Poppins', sans-serif;">The sea
                freight service has grown conside rably in recent years. We spend timetting to know your processes
                to.</span>
        </div>
    </router-link>
    </div>
</template>

<script setup>

</script>

<style>

.first {
    animation: firstslide 1s;
}


@keyframes firstslide {
    from {
        transform: translateY(-200%);
    }

    to {
        transform: translateY(0);
    }
}

.second {
    animation: secondslide 1.5s;
}


@keyframes secondslide {
    from {
        transform: translateY(-200%);
    }

    to {
        transform: translateY(0);
    }
}

.third {
    animation: thirdslide 2s;
}


@keyframes thirdslide {
    from {
        transform: translateY(-200%);
    }

    to {
        transform: translateY(0);
    }
}

</style>