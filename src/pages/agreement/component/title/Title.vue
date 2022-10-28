<template>
  <div class="title">
    <div class="dottle" />
    <p>{{ index }}</p>
    <p>{{ title }}</p>
    <div class="dottle" />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
@import "index";
</style>
