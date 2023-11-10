<script setup lang="ts">
import LinkButton from "./components/linkButton.vue"
</script>

<template>
  <div class="wrapper">
    <LinkButton title="H3(WebAR)" link="https://google.com" color="#d18ca3" />
    <LinkButton title="H3(STYLY)" link="https://google.com" color="#b1c77b" />
    <LinkButton title="SLIM(WebAR)" link="https://google.com" color="#88d2d2" />
    <LinkButton title="SLIM(STYLY)" link="https://google.com" color="#b0dbf1" />
    <LinkButton title="はやぶさ(WebAR)" link="https://google.com" color="#d69fc1" />
    <LinkButton title="はやぶさ(STYLY)" link="https://google.com" color="#d18ca3" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
}
</style>
