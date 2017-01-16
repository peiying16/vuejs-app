<template>
  <div class="checks">

    <div class="clearfix mb-3">
      <h2 class="float-left">Users</h2>
      <router-link class="btn btn-success float-right" to="/check" role="button">Add User</router-link>
    </div>

    <ul class="list-group">
      <li v-for="user in users" class="list-group-item justify-content-between">
        <span>
          <span class="glyphicon glyphicon-file"></span>
          <h5>{{user.name}}</h5>
        </span>

        <span>
          <router-link class="btn btn-secondary btn-sm" :to="'user/' + user.id">Edit</router-link>
        </span>

      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'Joe Green'
        }
      ]
    }
  }
}
</script>

<style>
.asdsd {

}
</style>
