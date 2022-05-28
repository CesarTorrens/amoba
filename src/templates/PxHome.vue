<template>
    <div class="w-full h-screen" >
        <PxHeader />
        <section class="w-full h-[90%] bg-blueLight flex justify-center items-center">
           <HomeLogin /> 
        </section>
    </div>    
</template>

<script>
import PxHeader from '@/components/PxHeader.vue'
import HomeLogin from '@/components/HomeLogin.vue'


export default {
    name: 'PxHome',
    components: {
        PxHeader,
        HomeLogin,        
    },
}
</script>