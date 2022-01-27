import TousLesArticles from "../components/TousLesArticles.vue";
//import Articles from "../components/Articles.vue";
import Inscription from "../components/Inscription.vue";
import Connexion from "../components/Connexion.vue";
import Publier from "../components/Publier.vue";
import VueRouter from 'vue-router';

const routes = [
    { path: '/', component: TousLesArticles },
    //{ path: '/touslesarticles', component: TousLesArticles, children: { path: 'articles', component: Articles }},
    { path: '/signup', component: Inscription },
    { path: '/login', component: Connexion },
    { path: '/publier', component: Publier },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  export default router;