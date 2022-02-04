import TousLesArticles from "../components/TousLesArticles.vue";
//import Articles from "../components/Articles.vue";
import Inscription from "../components/Inscription.vue";
import Connexion from "../components/Connexion.vue";
import Publier from "../components/Publier.vue";
import PublierReponse from "../components/Publier_reponse.vue";
import VueRouter from 'vue-router';
import Articles_reponse from "../components/Articles_reponse.vue";
import Articles from "../components/Articles.vue";

const routes = [
    { path: '/', component: TousLesArticles },
    { path: '/signup', component: Inscription },
    { path: '/login', component: Connexion },
    { path: '/publier', component: Publier },
    { path: '/publierReponse', component: PublierReponse },
    { path: '/article/touslesarticles', name: 'TouslesArticles', component: Articles },
    { path: '/articleReponse/touslesarticles', name: 'Publication', component: Articles_reponse },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  export default router;