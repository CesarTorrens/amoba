<template>
  <div>
    <button
      :disabled="disabled"
      @click="onClickButton"
      class="button hover:bg-opacity-80 rounded-xl px-5 py-5 bg-blueMedium w-auto h-10 flex items-center text-white font-600"
    >
      <slot></slot> <span class="pl-4"><img :src="arrow" alt="arrow" /></span>
    </button>
  </div>
</template>

<script>
import arrow from "@/assets/images/arrowRight.svg";

export default {
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: "PxButton",
  data() {
    return {
      arrow: arrow,
    };
  },
  methods: {
    onClickButton() {
      this.onClick();
    },
  },
};
</script>
