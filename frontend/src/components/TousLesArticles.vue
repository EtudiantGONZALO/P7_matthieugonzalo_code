<template>
<div>
    <div class="socialContainer">
      <div class="blocArticleContainer">
        <div class="userStyle">
          Groupomania
        </div>
        <p> Groupomania vous souhaite la bienvenue <br/> sur son forum de discussion </p>
        <img src="../assets/icon-above-font.png" alt="Vue photo">
        <div class="row marginBottom">
          <button class="btnLike" v-on:click="like()">+</button>
          <p class="likeTxt"> Like </p>
          <button class="btnDislike" v-on:click="dislike()">-</button>
        </div>
          <router-link to="/PublierReponse" class="btnStyle" v-on:click="repondre()"> Répondre </router-link>
        <div class="finArticle"></div>
        <router-link :to="{ name: 'Publication' }"></router-link>
      </div>
    </div>
    <router-link :to="{ name: 'TousLesArticles' }"></router-link>
  <div class="backgroundBtnPublier">
    <router-link to="/Publier" class="btnStyle" v-on:click="publier()"> Publier </router-link>
  </div>
</div>
</template>

<script>

import Publier from './Publier.vue';
export default {
  name: 'TousLesArticles',
  components: {
    PublierReponse,
    Publier,
  },
  //props: {
    //publicationrep,
    //photorep,
    //publication,
    //photo,
  //},
  //methods: {},
  //mounted() {
    //console.log('le composant vient dapparaitre');
    //axios.get("http://localhost:8080/groupomaniafriend/articles")
  //}
}

</script>

<style>

.socialContainer {
  display: flex;  
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: grey;
}

.blocArticleContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
  height: 100%;
}

.userStyle {
  height: 20px;
  font-size: 17px;
  color: white;
  background-color: #0065FC;
  border-bottom: 2px solid gold;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}

.btnLike {
  transition: all 400ms;
}

.btnLike:hover {
  background-color: #86fc00;
  color: white;
}

.btnDislike {
  transition: all 400ms;
}

.btnDislike:hover {
  background-color: tomato;
  color: white;
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

.finArticle {
  width: 100%;
  height: 20px;
  border-bottom: 2px solid gold;
}

.backgroundBtnPublier {
  background-color: grey;
  padding-bottom: 40px;
}

</style>