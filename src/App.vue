<script setup lang="ts">
import LinkButton from "./components/linkButton.vue"
</script>

<template>
  <div class="wrapper">
    <LinkButton title="H3" sub="(WebAR)" link="https://drumath2237.github.io/marker-ar-content/" color=#d18caa />
    <LinkButton title="H3" sub="(STYLY)"
      link="https://stylymr.page.link/?link=https://styly.cc/ja/mobile/?scene%3D885836dc-fdae-4d81-8ce1-82bdfe0006ed&apn=com.psychicvrlab.stylymr&isi=1477168256&ibi=com.psychicvrlab.stylymr"
      color="#b1c77b" />
    <LinkButton title="SLIM" sub="(WebAR)" link="https://nakamuratanakamurata.github.io/SLIM_AR/" color="#88d2d2" />
    <LinkButton title="SLIM" sub="(STYLY)"
      link="https://stylymr.page.link/?link=https://styly.cc/ja/mobile/?scene%3Defe85cbb-8046-4097-ab2e-6efac163a9f5&apn=com.psychicvrlab.stylymr&isi=1477168256&ibi=com.psychicvrlab.stylymr"
      color="#b0dbf1" />
    <LinkButton title="はやぶさ" sub="(WebAR)" link="https://nakamuratanakamurata.github.io/Hayabusa_AR/
" color="#d69fc1" />
    <LinkButton title="はやぶさ" sub="(STYLY)"
      link="https://stylymr.page.link/?link=https://styly.cc/ja/mobile/?scene%3Dec7030ab-1ec2-4fc0-98f4-ab124a9e6f45&apn=com.psychicvrlab.stylymr&isi=1477168256&ibi=com.psychicvrlab.stylymr"
      color="#d18ca3" />
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
