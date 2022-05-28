<template>
    <div class="flex items-center justify-between border-b border-b-variant">
        <div class="w-auto h-auto pl-2 pb-2">
            <a href="#" class="text-blueMedium font-semibold mr-3">Dia</a>
            <a href="#" class="text-variant font-semibold border-l-2 pl-3">Mes</a>
        </div>
        <div class="flex items-center justify-evenly w-2/5 pb-2">
            <a href="#"> <img :src="arrowleft" alt="direccion izquierda"> </a>
            <p class="text-descrip"> 08. ABR. 2020 </p>
            <a href="#"> <img :src="arrowright" alt="direccion derecha"> </a>
        </div>        
    </div>
</template>


<script>
import ArrowLeft from '@/assets/icons/arrowBlueLeft.svg'
import ArrowRight from '@/assets/icons/arrowBlueRight.svg'

export default {
    name: 'QuoteDates',
    
    data() {
        return {
            arrowleft: ArrowLeft,
            arrowright: ArrowRight,
        }
    }
}
</script>