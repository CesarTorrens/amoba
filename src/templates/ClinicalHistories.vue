<template>
  <div class="w-full h-screen bgClinical flex items-center justify-center">
    <section
      class="w-[95%] h-[95%] bgTransparent rounded-3xl flex items-center justify-evenly"
    >
      <div class="w-[8%] h-full bg-transparent flex items-center">
        <NavigationBar />
      </div>
      <div class="w-[30%] h-[95%] bg-white rounded-2xl">
        <div class="flex py-8 pl-6">
          <QuotesQueries />
        </div>
        <div class="w-[90%] m-auto">
          <QuoteDates />
        </div>
        <div
          id="QuotesPersons"
          class="w-[90%] pr-2 h-auto max-h-[40rem] m-auto overflow-auto"
        >
          <div v-for="patientQuotes in quotes" :key="patientQuotes.id">
            <QuotesPersons :patientAppointments="patientQuotes" />
          </div>
        </div>
      </div>
      <div class="w-[57%] h-[95%] bg-transparen">
        <ClinicalPatients />
      </div>
    </section>
  </div>
</template>

<script>
import QuoteDates from "@/components/QuoteDates.vue";
import QuotesQueries from "@/components/QuotesQueries.vue";
import QuotesPersons from "@/components/QuotesPersons.vue";
import NavigationBar from "../components/NavigationBar.vue";
import ClinicalPatients from "@/components/ClinicalPatients.vue";
import { patients } from "@/api.js";

export default {
  name: "ClinicalHistories",
  components: {
    QuotesQueries,
    QuoteDates,
    QuotesPersons,
    NavigationBar,
    ClinicalPatients,
  },
  data() {
    return {
      quotes: patients,
    };
  },
  beforeMount() {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      this.$router.push("/");
    }
  },
};
</script>
