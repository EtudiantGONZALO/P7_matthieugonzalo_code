import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../components/Home.vue";
import Signup from "../components/Inscription.vue";
import Login from "../components/Connexion.vue";
import Article from "../components/Article.vue";

Vue.use(VueRouter)

const routes = [
    { path: '/home', component: Home },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/article/:id', component: Article },
    //{ path: '/account', component: Account },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  export default router;