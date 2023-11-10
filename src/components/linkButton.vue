<script setup lang="ts">
const props = defineProps<{
  title: string,
  link: string,
  color: string
}>();
</script>

<template>
  <div class="buttonWrapper">
    <a :href="props.link">
      <button>{{ props.title }}</button>
    </a>
  </div>
</template>

<style scoped lang="scss">
.buttonWrapper {
  text-align: center;

  a {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: block;

    button {
      width: 100%;
      height: 100%;
      background-color: v-bind(color);
      font-size: 1.4em;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
  }
}
</style>