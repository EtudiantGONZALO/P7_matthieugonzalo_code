import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../components/Home.vue";
import Signup from "../components/Inscription.vue";
import Login from "../components/Connexion.vue";
import PostImage from "../components/PostImage.vue";
import PostArticle from "../components/PostArticle.vue";
import Account from "../components/Account.vue";
import ToutesLesImages from "../components/ToutesLesImages.vue";
import TousLesArticles from "../components/TousLesArticles.vue"

Vue.use(VueRouter)

const routes = [
    { path: '/home', component: Home },
    { path: '/touslesarticles', component: TousLesArticles },
    { path: '/touteslesimages', component: ToutesLesImages },
    { path: '/', component: Signup },
    { path: '/login', component: Login },
    { path: '/postarticle', component: PostArticle },
    { path: '/postimage', component: PostImage },
    { path: '/account', component: Account },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

  router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });

  export default router;