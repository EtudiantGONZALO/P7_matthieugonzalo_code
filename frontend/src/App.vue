<template>
<div>
    <div class="flexBetween headerColor">
      <div>
        <img alt="Vue logo" src="./assets/icon-left-font-monochrome-white.png" class="logo">
      </div>
      <div class="flexEvenly">
        <router-link to="/inscription" class="textDecoration">Inscription</router-link>
        <router-link to="/connexion" class="textDecoration">Connexion</router-link>
      </div>
    </div>
    <!--   -->
    
    <!--   -->
    
    <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',

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
