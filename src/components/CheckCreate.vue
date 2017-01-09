<template>
  <div class="checks">
    <h1>New Check</h1>
    <form v-on:submit.stop="save">
      <div class="form-group">
        <label for="checkName">Check Name</label>
        <input v-model="check.name" class="form-control" id="checkName" placeholder="My Service to Check">
      </div>
      <button type="submit" class="btn btn-default">Create</button>
    </form>
  </div>
</template>

<script>
import Checks from '../data/Checks.js'

export default {
  data () {
    return {
      check: {
        name: ''
      }
    }
  },
  methods: {
    save () {
      Checks.create(this.$data.check)
    }
  }
}
</script>
