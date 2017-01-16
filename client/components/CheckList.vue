<template>
  <div class="checks">

    <div class="clearfix mb-3">
      <h2 class="float-left">System </h2>
      <router-link class="btn btn-success float-right" to="/check" role="button">Create Check</router-link>
    </div>

    <ul class="list-group">
      <li v-for="check in checks" class="list-group-item justify-content-between">
        <span>
          <h5>{{check.name}}</h5>
          <h5><span class="badge badge-success">{{check.status.text}}</span></h5>
        </span>

        <span>
          <router-link class="btn btn-secondary btn-sm" :to="'check/' + check.id">Edit</router-link>
        </span>

      </li>
    </ul>

  </div>
</template>

<script>
import Checks from '../data/Checks.js'

export default {
  data () {
    return {
      checks: Checks.all().then(checks => { this.checks = checks })
    }
  }
}
</script>
