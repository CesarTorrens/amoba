<template>
  <div class="w-full h-16 border-t border-t-blueLight flex justify-center">
    <div class="w-[95%] h-full flex justify-between items-center">
      <img class="rounded-full" :src="patientData.img" alt="foto de paciente" />
      <p class="w-1/3 text-primary font-semibold">{{ patientData.name }}</p>
      <p class="text-descrip">{{ patientData.id }}</p>
      <div>
        <button
          class="text-variant border border-variant py-2 px-6 rounded-lg mr-4 hover:opacity-50 hover:text-descrip"
        >
          Borrar
        </button>
        <button
          class="bg-variant py-2 px-5 text-white rounded-lg hover:opacity-50"
        >
          Ver
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PerfilImage from "@/assets/images/photo2.jpg";

export default {
  props: {
    patientData: {
      type: Object,
      default: () => {},
    },
  },
  name: "PatientItem",
  data() {
    return {
      photo2: PerfilImage,
      //   patients: this.patientData,
    };
  },
};
</script>
