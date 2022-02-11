<template>
    <div class="socialContainer">
      <div class="blocContainer">
        <div>
          <h1 class="textStyle"> Email </h1>
          <input type="email" id="email" placeholder="email@exemple.com" v-model="emailValue"/>
        </div>
        <div>
          <h1 class="textStyle"> Username </h1>
          <input type="text" id="username" placeholder="Utilisateur01" v-model="usernameValue"/>
        </div>
        <div>
          <h1 class="textStyle"> Password </h1>
          <input type="password" id="password" placeholder="********" v-model="passwordValue"/>
        </div>
        <div>
          <button class="btnStyle" v-on:click="creerCompte()"> Créer un compte </button>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Signup',
  data() {
    return {
      usernameValue: "",
      emailValue: "",
      passwordValue: "",
    }
  },
  
  methods: {

    creerCompte() {
      
      //On interroge l'api avec la methode post
      axios.post("http://localhost:3000/api/auth/signup", {
          username: this.usernameValue,
          email: this.emailValue,
          password: this.passwordValue,
        })          
        .then(() => {
        //On redirige vers la page de connexion.vue
          this.$router.push("/login");
        })
        .catch(function(err) {
            console.log(err);
        });
    },
  }
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

#password {
  margin-bottom: 40px;
}

#usernameErrorMsg, #passwordErrorMsg, #emailErrorMsg {
  color: red;
}

</style>
