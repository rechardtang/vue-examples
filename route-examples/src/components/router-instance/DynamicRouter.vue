<template>
  <div>
    <ul>
      <li class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index" style="border: 1px solid #65c44d;cursor: pointer;" @click="goToDetail(data.productId)">
        <img width="30" height="30" alt="" :src="data.image" class="img-fluid">
        <p>{{data.productTitle}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'DynamicRouter',
    data () {
      return {
        title: 'DynamicRouter',
        products: [
          {
            productTitle: '1',
            image: require('@/assets/logo.png'),
            productId: 1
          },
          {
            productTitle: '2',
            image: require('@/assets/logo.png'),
            productId: 2
          },
          {
            productTitle: '3',
            image: require('@/assets/logo.png'),
            productId: 3
          },
          {
            productTitle: '4',
            image: require('@/assets/logo.png'),
            productId: 4
          },
          {
            productTitle: '5',
            image: require('@/assets/logo.png'),
            productId: 5
          },
          {
            productTitle: '6',
            image: require('@/assets/logo.png'),
            productId: 6
          }
        ]
      }
    },
    methods: {
      goToDetail (productId) {
        this.$router.push({
          name: 'details',
          params: { productId: productId }
        })
      }
    }
  }

</script>