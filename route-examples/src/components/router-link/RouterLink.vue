<template>
  <div id="router-link">
    <h1>Router link example</h1>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
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