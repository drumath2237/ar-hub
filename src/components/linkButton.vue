<script setup lang="ts">
const props = defineProps<{
  title: string,
  link: string,
  color: string,
  sub: string
}>();
</script>

<template>
  <div class="buttonWrapper">
    <a :href="props.link">
      <button>
        <p class="title">{{ props.title }}</p>
        <p class="sub">{{ props.sub }}</p>
      </button>
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
      background-color: #186fb6;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: white;
      border-color: white;

      .title {
        font-size: 2em;
      }

      .sub {
        font-size: 1.5em;
      }
    }
  }
}
</style>