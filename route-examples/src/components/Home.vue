<template>
  <div class="home">
    <h1>Home</h1>
    <ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/router-link">Router Link</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/router-view">Router View</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/router-dynamic">Dynamic Router</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/router-nested">Nested Router</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
