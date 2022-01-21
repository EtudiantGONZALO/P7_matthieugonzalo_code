import Inscription from "../components/Inscription.vue";
import Connexion from "../components/Connexion.vue";
import VueRouter from 'vue-router';
const routes = [
    { path: '/inscription', component: Inscription },
    { path: '/connexion', component: Connexion },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  export default router;