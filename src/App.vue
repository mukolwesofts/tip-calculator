<template>
  <div class="h-full md:min-h-screen bg-blue-ice flex flex-col md:flex-row items-center justify-center">
      <TipCalc></TipCalc>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TipCalc from './components/TipCalcLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    TipCalc
  }
})
</script>

<style>
#app {
  font-family: 'Space Mono', monospace;
}
</style>
