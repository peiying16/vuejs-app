<template>
  <div class="checks">

    <form v-on:submit.stop="save">

      <div class="clearfix">
        <h2 class="float-left">{{check.name || 'New Check'}}</h2>
        <div class="float-right">
          <router-link class="btn btn-primary" to="/checks" role="button">&laquo; Back</router-link>
          <button type="submit" class="btn btn-success">Save</button>
        </div>
      </div>

      <div class="row form-inline">
        <div class="col">

          <div class="form-group row">
            <label for="checkName" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input v-model="check.name" class="form-control" id="checkName" placeholder="My Service">
            </div>
          </div>

          <div class="form-group row">
            <label for="checkDescription" class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <textarea v-model="check.description" class="form-control" id="checkDescription"/>
            </div>
          </div>

        </div>
        <div class="col-6">


        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Checks from '../data/Checks.js'

export default {
  data () {
    return {
      check: !this.$route.params.id ? Checks.model() : Checks
        .find(this.$route.params.id)
        .then((check) => { this.check = check })
    }
  },
  methods: {
    save () {
      Checks.create(this.check)
    }
  }
}
</script>
