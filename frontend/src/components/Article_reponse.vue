<template>
    <div>
      <div class="userStyle"> Username </div>
      <p> {{ publicationrep }} </p>
      <router-link to="/publierReponse" class="btnStyle"> Répondre </router-link>
      <div class="finArticle"></div>
    </div>
</template>

<script>
import PublierReponse from './Publier_reponse.vue';

export default {
  name: 'ArticlesReponse',
  component: {
    PublierReponse,
  },
  props: [
    'publicationrep',
    'photorep',
    ],
  mounted() {
          this.$router.push({name: 'Publication'});
  }
}

</script>

<style>

.userStyle {
  height: 20px;
  font-size: 17px;
  color: white;
  background-color: #0065FC;
  border-bottom: 2px solid gold;
}

.finArticle {
  width: 100%;
  height: 20px;
  border-bottom: 2px solid gold;
}

.btnStyle
{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    margin: auto;
    color: white;
    text-decoration: none;
    background: linear-gradient( #0065FC, #083eee);
    border-radius: 20px;
    margin-bottom: 40px;
    box-shadow: 3px 3px 3px grey;
    z-index: 1;
    position: relative;
}

.btnStyle:hover
  {
    box-shadow: 3px 3px 3px grey;
  }

.btnStyle::after
  {
    opacity: 1;
  }
    
.btnStyle::after
  {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 20px;
    background: linear-gradient(darken(#0065FC, 8) 0%, lighten(#08adee, 4) 100%);
    opacity: 0;
    z-index: -1;
    transition: opacity 500ms;
  }
</style>
