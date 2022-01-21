<template>
  <div id="app">
    <!------------------------------Bloc Header---------------------------------->
    <header class="flexBetween headerColor">
      <div>
        <img alt="Vue logo" src="./assets/icon-left-font-monochrome-white.png" class="logo">
      </div>
      <nav class="flexEvenly">
        <a href="" class="textDecoration">Inscription</a>
        <a href="" class="textDecoration">Connexion</a>
      </nav>
    </header>
    <!------------------------------bloc TousLesArticles------------------------------->
    <div class="socialContainer">
      <div class="blocArticleContainer">
        <div class="userStyle">
          Groupomania
        </div>
        <p> Groupomania vous souhaite la bienvenue <br/> sur son forum de discussion </p>
        <img alt="Vue logo" src="./assets/icon-above-font.png">
        <div class="row marginBottom">
          <button class="btnLike">+</button>
          <p class="likeTxt"> Like </p>
          <button class="btnDislike">-</button>
        </div>
        <button class="btnStyle" v-on:click="publier()"> Répondre </button>
        <div class="finArticle"></div>
      </div>
    </div>
    <div class="btnPublier">
      <button class="btnStyle " v-on:click="publier()"> Publier </button>
    </div>
    <!------------------------------bloc article----------------------------->
    <div class="socialContainer">
      <div class="blocArticleContainer">
        <div class="userStyle"> {{ Username }} </div>
        <div>
          {{ article }}
        </div>
        <div class="row marginBottom">
          <button class="btnLike">+</button>
          <p class="likeTxt"> Like </p>
          <button class="btnDislike">-</button>
        </div>
        <button class="btnStyle" v-on:click="publier()"> Répondre </button>
        <div class="finArticle"></div>
      </div>
    </div>
    <!------------------------------bloc Publier----------------------------->
    <div class="socialContainer">
        <div class="blocContainer">
            <p class="textStyle"> Username </p>
            <textarea type="text" value="" class="sizeInput" rows="12" v-model="article"></textarea>
            <div>
                <p>Ajouter une photo</p>
                <input type="text" v-model="photo" class="marginBottom">
            </div>
            <div>
                <button class="btnStyle" v-on:click="publier()"> Publier </button>
            </div>
        </div>
    </div>
    <!------------------------------bloc inscription------------------------------->
    <div class="socialContainer">
      <div class="blocContainer">
        <p class="textStyle"> Firstname </p>
        <input type="text" value="" v-model="Firstname">
        <p class="textStyle"> Lastname </p>
        <input type="text" value="" v-model="Lastname">
        <p class="textStyle"> Email </p>
        <input type="text" value="" v-model="Email">
        <p class="textStyle"> Username </p>
        <input type="text" value="" v-model="Username">
        <p class="textStyle"> Mot de passe </p>
        <input type="text" value="" v-model="Password" class="marginBottom">
        <div>
          <button class="btnStyle" v-on:click="creer()"> Créer un compte </button>
        </div>
      </div>
    </div>
    <!-------------------------------bloc connexion-------------------------------->
    <div class="socialContainer">
      <div class="blocContainer">
        <p class="textStyle"> Username </p>
        <input type="text" value="" v-model="username">
        <p class="textStyle"> Mot de passe </p>
        <input type="text" value="" v-model="password" class="marginBottom">
        <div>
          <button class="btnStyle" v-on:click="connecter()"> Connexion </button>
        </div>
      </div>
    </div>   
    
  </div>
</template>

<script>

/*import Articles from './components/Articles.vue'

export default {
  name: 'App',

  components: {
    Articles,
  },

  data() {
    return {
    Username: "",
    FirstName: "",
    Lastname: "",

    username: "",
    password: "",
    };
  }
}

*/
</script>

<style>
#app {
  
}

/*------------------------Header----------------------*/

.flexBetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headerColor {
  background-color: #0065FC;
}

.flexEvenly {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
}

.textDecoration {
  text-decoration: none;
  color: white;
}

.logo {
  margin-left: 50px;
}

/*---------------------Bloc article--------------------*/

.rowEvenly {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

/*---------------------BLOC REPONDRE-------------------*/

.socialContainer {
  display: flex;  
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: grey;
  padding: 10% 0;
}

.blocContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
  height: 100%;
  padding: 50px 0;
}

.sizeInput {
  width: 70%;
  height: 50%;
  outline: none;
}

/*-------------------------------text style----------------------------*/

.textStyle {
  margin: 10px 0 10px 0;
}

/*---------------------------------bouton-------------------------------*/

.btnStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  margin: auto;
  color: white;
  text-decoration: none;
  background: linear-gradient(#0065FC, #083eee);
  border-radius: 20px;
  box-shadow: 3px 3px 3px grey;
  z-index: 1;
  position: relative;
}
.btnStyle:hover {
  box-shadow: 3px 3px 3px grey;
}
.btnStyle:hover::after {
  opacity: 1;
}
.btnStyle::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 20px;
  background: linear-gradient(#0065FC 0%, #08adee 100%);
  opacity: 0;
  z-index: -1;
  transition: opacity 500ms;
}

/*---------------------------Bloc Index--------------------------*/

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

.likeTxt {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  color: white;
  background-color: #0065FC;
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

.finArticle {
  width: 100%;
  height: 20px;
  border-bottom: 2px solid gold;
}

/*-----------------------Bloc article-----------------------*/

.blocArticleContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
  height: 100%;
}

/*----------------------Btn position-------------------------*/

.btnPosition {
  position: relative;
  top: 80px;
  right: 0;
}

/*-------------------margin-------------------------*/

.marginBottom {
  margin-bottom: 40px;
}

/*-------------------btn publier-------------------*/

.btnPublier {
  padding: 20px 0;
  background-color: grey;
}


</style>
