<template>
  <div class="details">
    <div class="container">
      <h1 class="text-primary text-center">{{title}}</h1>
      <h2>the product id is :{{this.$route.params.productId}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'details',
    data () {
      return {
        title: 'details'
      }
    }
  }
</script>