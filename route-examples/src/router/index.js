import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/router-link',
      name: 'router-link',
      component: () => import('../components/router-link/RouterLink')
    },
    {
      path: '/router-view',
      name: 'router-view',
      component: () => import('../components/router-view/RouterView')
    },
    {
      path: '/router-dynamic',
      name: 'router-dynamic',
      component: () => import('../components/router-instance/DynamicRouter.vue')
    },
    {
      path: '/router-nested',
      name: 'router-nested',
      component: () => import('../components/router-nested/NestedRouter.vue'),
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: () => import('../components/Home.vue') },
        // ...other sub routes
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../components/Blog.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/Services.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Contact.vue')
    },
    {
      path: '/details/:productId',
      name: 'details',
      component: () => import('../components/router-instance/Details'),

      /**
       * Per-Route Guard
       */
      beforeEnter: (to, from, next) => {
        console.log(to, from, next)
      },
      beforeUpdate :(to, from, next) => {
        console.log(to, from, next)
      }
    }
  ]
})

/**
 * Global Before Guards
 *
 * @param to: Route: the target Route Object being navigated to.
 * @param from: Route: the current route being navigated away from.
 * @param next: Function: this function must be called to resolve the hook. The action depends on the arguments provided to next:
 */
router.beforeEach((to, from, next) => {
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
  console.log(to, from ,next)
})

/**
 * Global Resolve Guards
 */
router.beforeResolve()

/**
 * Global After Hooks
 */
router.afterEach((to, from)=>{
  console.log(to, from)
})


export default router

