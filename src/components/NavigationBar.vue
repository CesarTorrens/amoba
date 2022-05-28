<template>
    <div class="w-full h-2/5">
        <div class="w-full h-1/3 flex items-center justify-center">
        <router-link to="/">
            <a href="#">
                <img :src="iconhome" alt="home" class="m-auto" >
                <p class="text-primary font-semibold text-blueMedium pt-2">Inicio</p>
            </a>
        </router-link>
        </div>
        <div class="w-full h-1/3 flex items-center justify-center">
            <a href="#">
                <img :src="configuration" alt="home" class="m-auto" >
                <p class="text-primary font-semibold pt-2">Configurar</p>
            </a>
        </div>
        <div class="w-full h-1/3 flex items-center justify-center">
            <a href="#">
                <img :src="icon3" alt="home" class="m-auto" >
                <p class="text-primary font-semibold pt-2">Plan</p>
            </a>
        </div>
    </div>
</template>

<script>
import IconHome from '@/assets/icons/home.svg'
import Configuration from '@/assets/icons/configuration.svg'
import Icon3 from '@/assets/icons/icon3.svg'

export default {
    name: 'NavigationBar',
    data() {
        return {
            iconhome: IconHome,
            configuration: Configuration,
            icon3: Icon3,
        }
    }
}
</script>