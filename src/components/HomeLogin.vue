<template>
  <div
    class="py-10 flex flex-col items-center justify-between bgGradiant min-w-fit max-w-2xl w-1/2 h-4/5 shadow-3xl rounded-3xl"
  >
    <div class="w-auto h-auto">
      <h2 class="font-semibold text-xl text-primary">INICIAR SESIÓN</h2>
    </div>
    <div class="w-1/4 h-auto flex justify-evenly">
      <img :src="google" alt="google" />
      <img :src="linkedin" alt="linkedin" />
    </div>
    <div class="w-4/5 h-auto flex items-center justify-evenly">
      <div class="w-40 h-px bg-variant"></div>
      <p class="font-medium text-base text-descrip">o inicia con</p>
      <div class="w-40 h-px bg-variant"></div>
    </div>
    <div class="w-4/5 h-1/3 flex flex-col items-center justify-evenly">
      <InputLogin
        @changeValue="mailValue"
        :disabled="loading"
        :description="mailDescripcion"
        :typeValue="emailType"
      >
        Correo electrónico
      </InputLogin>
      <InputLogin
        @changeValue="passValue"
        :disabled="loading"
        :description="passDescripcion"
        :typeValue="passwordType"
      >
        Contraseña
      </InputLogin>
      <h1 class="text-[#dc2626]">{{ messageError }}</h1>
    </div>

    <PxButton :onClick="onLogin" :disabled="validationButton()">
      {{ this.loading ? "Cargando..." : "Siguiente" }}
    </PxButton>

    <div class="flex">
      <p class="font-semibold text-descrip">No tienes cuenta?</p>
      <a href="#" class="pl-2 font-bold text-blueMedium">Regístrate</a>
    </div>
  </div>
</template>

<script>
import PxButton from "@/components/PxButton.vue";
import InputLogin from "@/components/InputLogin.vue";
import In from "@/assets/icons/linkedin.svg";
import Google from "@/assets/icons/google.svg";
import { api } from "@/api.js";

export default {
  name: "HomeLogin",
  components: {
    PxButton,
    InputLogin,
  },
  data() {
    return {
      linkedin: In,
      google: Google,
      emailValue: "",
      passwordValue: "",
      messageError: "",
      loading: false,
      mailDescripcion: "amoba@amoba.com",
      passDescripcion: "*******",
      passwordType: "password",
      emailType: "email",
    };
  },

  beforeMount() {
    const token = localStorage.getItem("token");

    if (token) {
      this.$router.push("/ClinicalHistories");
    }
  },

  methods: {
    validationButton() {
      const regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
      console.log(regexEmail);
      if (!regexEmail.test(this.emailValue)) {
        return true;
      }
      if (this.emailValue === "" || this.passwordValue === "" || this.loading) {
        return true;
      }
    },
    mailValue(value) {
      this.emailValue = value;
    },
    passValue(value) {
      this.passwordValue = value;
    },
    async onLogin() {
      this.loading = true;
      const data = new FormData();
      data.append("grant_type", "password");
      data.append("client_id", "2");
      data.append("client_secret", "rDnLA1OfY8nHovztVBU8rcvOP9K5iH7LngUZNIzB");
      data.append("username", this.emailValue);
      data.append("password", this.passwordValue);
      try {
        const res = await api("/oauth/token", {
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data,
        });
        this.loading = false;
        localStorage.setItem("token", res.data.access_token);

        if (res.status === 200) {
          window.location.href = "http://localhost:8080/ClinicalHistories";
        }
      } catch (error) {
        this.loading = false;
        if (error && error.response && error.response.data) {
          this.error.messageError = error.response.data.message;
          return;
        }

        this.messageError = error.message;
      }
    },
  },
};
</script>
