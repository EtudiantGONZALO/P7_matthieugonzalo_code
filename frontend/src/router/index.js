import Inscription from "../components/Inscription.vue";
import Connexion from "../components/Connexion.vue";
import Test1 from "../components/Test1.vue";
import Test2 from "../components/Test2.vue";
import VueRouter from 'vue-router';
const routes = [
    { path: '/Inscription', component: Inscription },
    { path: '/Connexion', component: Connexion },
    { path: '/test1', component: Test1 },
    { path: '/test2', component: Test2 },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  export default router;