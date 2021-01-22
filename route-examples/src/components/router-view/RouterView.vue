<template>
  <div id="router-view">
    <h1>Router view example</h1>
    <ul>
      <li class="nav-item">
        <router-link to="/Blog">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/Services">Services</router-link>
      </li>
    </ul>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    computed: {
      username () {
        // We will see what `params` is shortly
        return this.$route.params.username
      }
    },
    methods: {
      goBack () {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>