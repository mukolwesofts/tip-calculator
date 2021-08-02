<template>
    <div>
        <h3 class="leading-5 tracking-widest font-medium text-xl text-center text-blue-sharpe"><span>SPLI</span><br><span>TTER</span></h3>

        <div class="bg-white flex items-center justify-between space-x-5 p-8 rounded-xl mt-16 w-700">
            <Form/>

            <Details/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Details from './partials/Details.vue'
import Form from './partials/Form.vue'

export default defineComponent({
  name: 'App',
  components: {
      Details,
      Form
  }
})
</script>