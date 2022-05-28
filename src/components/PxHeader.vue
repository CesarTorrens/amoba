<template>
  <header class="m-0 w-full h-[10%] flex justify-between items-center">
    <div class="pl-12">
      <img :src="src" alt="logo-amoba" />
    </div>
    <div class="pr-12">
      <PxButton :onClick="constructionPage">Regístrate gratis</PxButton>
    </div>
  </header>
</template>

<script>
import PxButton from "@/components/PxButton.vue";
import logo from "@/assets/images/Group.png";

export default {
  name: "PxHeader",
  components: {
    PxButton,
  },
  data() {
    return {
      src: logo,
    };
  },
  methods: {
    constructionPage() {
      alert("PAGINA EN CONSTRUCCION");
    },
  },
};
</script>
