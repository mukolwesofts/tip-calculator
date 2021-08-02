<template>
    <div>
        <h3><span>SPLI</span><br><span>TTER</span></h3>

        <div class="flex items-center justify-between space-x-5">
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