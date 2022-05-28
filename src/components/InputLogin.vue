<template>
  <form class="w-full h-auto flex flex-col pb-5">
    <p class="font-medium text-base text-descrip pb-3 pl-4"><slot></slot></p>
    <input
      :disabled="disabled"
      @keyup="inputChange"
      v-model="inputValue"
      class="w-full h-10 outline-none pl-4 rounded-xl shadow-input placeholder:pl-4 placeholder:text-placeholdercolor"
      :type="typeValue"
      :placeholder="descriptionValue"
    />
  </form>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    typeValue: {
      type: String,
      default: "",
    },
  },
  name: "InputLogin",
  data() {
    return {
      inputValue: "",
      descriptionValue: this.description,
    };
  },

  methods: {
    inputChange({ target: { _value } }) {
      this.$emit("changeValue", _value);
    },
  },
};
</script>
