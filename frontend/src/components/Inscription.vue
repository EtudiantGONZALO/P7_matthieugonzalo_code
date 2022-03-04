<template>
    <div class="socialInscriptionContainer">
      <div class="blocInscriptionContainer">
        <div>
          <h1 class="textStyle"> Email </h1>
          <input type="email" id="email" placeholder="email@exemple.com" v-model="emailValue"/>
          <p id="pErrorEmailMsg"></p>
        </div>
        <div>
          <h1 class="textStyle"> Username </h1>
          <input type="text" id="username" placeholder="Utilisateur01" v-model="usernameValue"/>
          <p id="pErrorUsernameMsg"></p>
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
      var masqueChiffreCaractereUserName = /^[a-zA-Z- ']+$/g;
      var masqueEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
      if (masqueChiffreCaractereUserName.test(this.usernameValue) && masqueEmail.test(this.emailValue)) {
        axios({
          method: "POST",
          url: "http://localhost:3000/api/auth/signup",
          data: {
            username: this.usernameValue,
            email: this.emailValue,
            password: this.passwordValue,
          },
          headers: { "Content-Type": "application/json" },
        })
          .then(() => {
              this.$router.push("/login");
            
          })
          .catch((error) => (console.log(error), (this.message = true)));
      } else {
        var pErrorEmailMsg = document.querySelector('#pErrorEmailMsg');
        var pErrorUsernameMsg = document.querySelector('#pErrorUsernameMsg');

        pErrorUsernameMsg.innerText = "Votre Username ne doit pas comporter de caractère interdit";
        pErrorEmailMsg.innerText = "Votre Email doit etre valide";
        return false;
      }
    },
  }
}
</script>

<style>

.socialInscriptionContainer {
  display: flex;  
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: grey;
  padding: 10% 0;
}

.blocInscriptionContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
  padding: 10% 0;
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
    background: linear-gradient( maroon, tomato);
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
    background: linear-gradient(darken(maroon, 8) 0%, lighten(#ff6347, 4) 100%);
    opacity: 0;
    z-index: -1;
    transition: opacity 500ms;
  }

#pErrorEmailMsg, #pErrorUsernameMsg {
  color: red;
} 

#password {
  margin-bottom: 40px;
}

</style>
