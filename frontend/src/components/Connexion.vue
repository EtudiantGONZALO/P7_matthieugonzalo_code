<template>
    <div class="socialContainer">
      <div class="blocContainer">
        <p class="textStyle"> Email </p>
        <input type="text" id="email2" v-model="email2">
        <p class="textStyle"> Password </p>
        <input type="text" id="password2" class="marginBottom" v-model="password2">
        <div>
          <button class="btnStyle" v-on:click="connecter()"> Connexion </button>
        </div>
      </div>
    </div>
</template>

<script>
//import Inscription from "./components/Inscription.vue"

export default {
  name: 'Connexion',
  /*component: {
    Inscription,
  }
  props: [
    email2,
    password2,
  ],
  methods: {
    connecter() {

      var password2 = document.querySelector('#password2').value;
      var email2 = document.querySelector('#email2').value;

      var masqueCaractere = /^[a-zA-Z0-9- ']+$/g;
      var masqueEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+/;

      if (masqueCaractere.test(password2) && masqueEmail.test(email2) && email === email2 && password === password2) {
        document.location.href = "./components/TousLesArticles.vue";
      }
    }
  }*/
}


</script>

<style>

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

.textStyle {
  margin: 10px 0 10px 0;
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

.marginBottom {
  margin-bottom: 40px;
}

</style>