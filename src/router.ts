import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/right-angled-triangle-solver',
      name: 'rightAngledTriangleSolver',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "rightAngledTriangleSolver" */ './views/RightAngledTriangleSolver/Index.vue'),

      children: [
        {
          path: '',
          name: 'Overview',
          component: () =>
            import(/* webpackChunkName: "rightAngledTriangleSolver" */    './views/RightAngledTriangleSolver/Overview.vue'),
        },
        {
            path: 'privacy-policy',
            name: 'PrivacyPolicy',
            component: () =>
              import(/* webpackChunkName: "rightAngledTriangleSolver" */    './views/RightAngledTriangleSolver/PrivacyPolicy.vue'),
        },
        {
          path: 'terms-and-conditions',
          name: 'TermsAndConditions',
          component: () =>
            import(/* webpackChunkName: "rightAngledTriangleSolver" */    './views/RightAngledTriangleSolver/TermsAndConditions.vue'),
      },
      ],
    },
  ],
});
