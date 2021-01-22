<template>
  <div>
      Route Guard
  </div>
</template>

<script>
  export default {
    name: 'RouterGuard',
    methods: {
    },
    // In-Component Guards
    beforeRouteEnter (to, from, next) {
      next(vm => {
        console.log(vm, to, from, next)
        // access to component instance via `vm`
      })
      // called before the route that renders this component is confirmed.
      // does NOT have access to `this` component instance,
      // because it has not been created yet when this guard is called!
    },
    beforeRouteUpdate (to, from, next) {
      console.log(to, from, next)
      // called when the route that renders this component has changed.
      // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
      // For example, for a route with dynamic params `/foo/:id`, when we
      // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
      // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
      // has access to `this` component instance.
    },
    beforeRouteLeave (to, from, next) {
      console.log(to, from, next)
      // called when the route that renders this component is about to
      // be navigated away from.
      // has access to `this` component instance.
    }
  }
</script>