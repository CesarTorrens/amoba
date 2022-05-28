<template>
  <div
    class="w-[100%] h-auto pt-2 pb-2 mt-3 mb-0 flex items-center justify-between bg-container rounded-xl"
  >
    <div class="w-1/5 pl-5">
      <img
        width="40"
        height="40"
        :src="patients.img"
        :alt="patients.name"
        class="rounded-full"
      />
    </div>
    <div class="w-3/5">
      <h4 class="text-primary font-semibold">{{ patients.name }}</h4>
      <div class="h-auto pb-1 flex justify-between text-descrip">
        <div class="w-1/2 flex justify-start">
          <p>{{ patients.appointmentType }}</p>
        </div>
        <div class="w-1/2 flex justify-end">
          <p>{{ patients.appointmentTime }}</p>
        </div>
      </div>
    </div>
    <div class="w-1/5 flex">
      <button class="m-auto">
        <img :src="sum" alt="sumar" />
      </button>
    </div>
  </div>
</template>

<script>
import Person from "@/assets/images/persona.jpg";
import Sum from "@/assets/icons/sum.svg";

export default {
  props: {
    patientAppointments: {
      type: Object,
      default: () => {},
    },
  },
  name: "QuotesPersons",
  data() {
    return {
      imgPerson: Person,
      sum: Sum,
      patients: this.patientAppointments,
    };
  },
};
</script>
