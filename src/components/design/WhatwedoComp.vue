

<template>
    <div class="flex flex-row justify-between dark:bg-gray-900 my-10 w-full">
        <div class=" m-2 p-5 border-2 flex flex-col bg-white rounded-xl items-center first">
            <img class="w-16 h-16 mt-2" style="color:orange" src="../../assets/shipped.png" alt="">
            <p class="text-2xl font-bold mt-5 p-2 text-orange-500" style="font-family: 'Kanit', sans-serif;">Passenger
                Transport</p>
            <span class="text-lg  mt-5 text-center px-5 text-gray-400" style="font-family: 'Kanit', sans-serif;">The sea
                freight service has grown conside rably in recent years. We spend timetting to know your processes
                to.</span>
        </div>
        <div class=" m-2 p-5 border-2 flex flex-col bg-white rounded-xl items-center  second">
            <img class="w-16 h-16  mt-2" style="color:orange" src="../../assets/shipped.png" alt="">
            <p class="text-2xl font-bold mt-5 p-2 text-orange-500" style="font-family: 'Kanit', sans-serif;">Services
                Automobiles</p>
            <span class="text-lg  mt-5 text-center px-5 text-gray-400" style="font-family: 'Kanit', sans-serif;">The sea
                freight service has grown conside rably in recent years. We spend timetting to know your processes
                to.</span>
        </div>
        <div class=" m-2 p-5 border-2 flex flex-col bg-white rounded-xl items-center  third">
            <img class="w-16 h-16  mt-2" style="color:orange" src="../../assets/shipped.png" alt="">
            <p class="text-2xl font-bold mt-5 p-2 text-orange-500" style="font-family: 'Kanit', sans-serif;">Renting Cars
            </p>
            <span class="text-lg  mt-5 text-center px-5 text-gray-400" style="font-family: 'Kanit', sans-serif;">The sea
                freight service has grown conside rably in recent years. We spend timetting to know your processes
                to.</span>
        </div>
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