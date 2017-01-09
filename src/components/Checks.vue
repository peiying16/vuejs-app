<template>
  <div class="checks">
    <h1>Checks</h1>
    <router-link class="btn btn-default" to="/check" role="button">Create Check</router-link>
    <ul>
      <li v-for="check in checks">
        {{ check.name }}
        <router-link :to="'check/' + check.id">View Details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Checks from '../data/Checks.js'

export default {
  data () {
    return {
      checks: []
    }
  },
  mounted () {
    Checks.all().then(checks => { this.checks = checks })
  }
}
</script>
