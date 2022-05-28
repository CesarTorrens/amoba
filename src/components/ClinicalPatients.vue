<template>
  <div class="w-full h-full">
    <div class="h-[17%] flex flex-col justify-between">
      <div class="flex justify-end items-center">
        <p class="pr-4 text-descrip font-semibold">Dr. Juan Sarmiento</p>
        <button class="pr-4">
          <img :src="miniconfig" alt="configuracion" />
        </button>
        <button>
          <img :src="photo2" alt="foto de perfil" class="rounded-full" />
        </button>
      </div>
      <div class="h- flex justify-evenly items-center pb-5">
        <div>
          <a href="#" class="flex justify-center items-center">
            <img :src="usericon" alt="nuevo paciente" class="pr-4" />
            <p class="font-semibold">Nuevo paciente</p>
          </a>
        </div>
        <div>
          <a href="#" class="flex justify-center items-center">
            <img :src="listicon" alt="historias clínicas" class="pr-4" />
            <p class="text-blueMedium font-semibold">Historias clínicas</p>
          </a>
        </div>
        <div>
          <a href="#" class="flex justify-center items-center">
            <img :src="calendaricon" alt="Agenda" class="pr-4" />
            <p class="font-semibold">Agenda</p>
          </a>
        </div>
      </div>
    </div>
    <div class="h-[83%] w-full">
      <PatientsList />
    </div>
  </div>
</template>

<script>
import PatientsList from "@/components/PatientsList.vue";
import MiniConfig from "@/assets/icons/miniconfig.svg";
import Photo2 from "@/assets/images/photo2.jpg";
import User from "@/assets/icons/user.svg";
import IconList from "@/assets/icons/iconlist.svg";
import Calendar from "@/assets/icons/calendar.svg";

export default {
  name: "ClinicalPatients",
  components: {
    PatientsList,
  },
  data() {
    return {
      miniconfig: MiniConfig,
      photo2: Photo2,
      usericon: User,
      listicon: IconList,
      calendaricon: Calendar,
    };
  },
};
</script>
