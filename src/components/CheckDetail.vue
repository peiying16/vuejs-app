<template>
  <div class="checks">
    <h1>Check</h1>
    {{ check.name }}
  </div>
</template>

<script>
import Checks from '../data/Checks.js'

export default {
  data () {
    return {
      check: {}
    }
  },
  mounted () {
    Checks.find(this.$route.params.id).then(check => { this.check = check })
  }
}
</script>
