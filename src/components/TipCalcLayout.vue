<template>
    <div>
        <h3 class="leading-5 tracking-widest font-medium text-xl text-center text-blue-sharpe mt-20 md:mt-0"><span>SPLI</span><br><span>TTER</span></h3>

        <div class="bg-white flex flex-col md:flex-row md:items-center md:justify-between md:space-x-5 p-6 md:p-8 rounded-t-xl rounded-b-none md:rounded-xl mt-16 w-screen md:w-700 md:shadow-lg">
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