<template>
  <div
    class="w-full h-full bg-white rounded-2xl flex items-center justify-center"
  >
    <div class="w-[95%] h-[95%]">
      <div class="w-full h-[15%] flex items-center justify-between">
        <div class="w-3/5 flex items-center shadow-input rounded-xl">
          <div class="w-full h-auto flex px-4 py-2 justify-center items-center">
            <button
              class="w-[22%] mr-2 flex items-center text-descrip border-r-2 text-center"
            >
              Nombre <img :src="arrowdownicon" alt="nombre" class="pl-2" />
            </button>
            <input
              @keyup="inputChange"
              v-model="inputValue"
              type="text"
              class="w-[80%] outline-none pl-2"
            />
          </div>
        </div>
        <div class="h-auto flex justify-end">
          <button class="pr-5">
            <img class="w-7 h-5" :src="viewsicon" alt="views" />
          </button>
          <button><img class="w-7 h-5" :src="menuicon" alt="menu" /></button>
        </div>
      </div>
      <div class="w-full h-auto max-h-[32rem] overflow-auto">
        <div v-for="patient in patientsData" :key="patient.id">
          <PatientItem :patientData="patient" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/assets/icons/menu.svg";
import ArrowDown from "@/assets/icons/arrowdown.svg";
import Views from "@/assets/icons/views.svg";
import PatientItem from "@/components/PatientItem.vue";
import { patients } from "@/api.js";

export default {
  name: "PatientsList",
  components: {
    PatientItem,
  },
  data() {
    return {
      menuicon: Menu,
      arrowdownicon: ArrowDown,
      viewsicon: Views,
      patientsData: patients,
      inputValue: "",
    };
  },
  methods: {
    inputChange({ target: { _value } }) {
      this.inputValue = _value;
    },
  },
  watch: {
    inputValue() {
      console.log(this.inputValue);
      this.patientsData = patients.filter(
        (patient) =>
          patient.name.toLowerCase().indexOf(this.inputValue.toLowerCase()) >=
            0 || patient.id.indexOf(this.inputValue.toLowerCase()) >= 0
      );
    },
  },
};
</script>
