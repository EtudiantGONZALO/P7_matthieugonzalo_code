<template>
    <div class="socialConnexionContainer">
      <div class="blocConnexionContainer">
        <h1 class="textStyle"> Email </h1>
        <input type="email" id="email" name="user_email" placeholder="email@exemple.com" v-model="emailValue"/>
        <p id="pErrorEmailMsg"></p>
        <h1 class="textStyle"> Password </h1>
        <input type="text" id="password" name="user_password" placeholder="********" class="marginBottom" v-model="passwordValue">
        <div>
          <button class="btnStyle" v-on:click="connecter()"> Connexion </button>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data: function () {
    return {
      emailValue: "",
      passwordValue: "",
    };
  },
  methods: {
    connecter() {
      var masqueEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
      if (masqueEmail.test(this.emailValue)) {
        axios({
          method: "POST",
          url: "http://localhost:3000/api/auth/login",
          headers: { "Content-Type": "application/json" },
          data: { email: this.emailValue, password: this.passwordValue },
        })
        .then((response) => {
          if (response.data.token) {
            //On ajoute le token généré au localStorage
            localStorage.setItem("user", JSON.stringify(response.data));
            this.$router.push("/home");
          }
        })
        .catch((error) => console.log(error));
      } else {
         var pErrorEmailMsg = document.querySelector('#pErrorEmailMsg');
         pErrorEmailMsg.innerText = "Votre Email doit etre valide";
         return false;
      }
    },
  }, 
}


</script>

<style>

.socialConnexionContainer {
  display: flex;  
  justify-content: center;
  width: 100%;
  background-color: grey;
  padding: 10% 0;
}

.blocConnexionContainer {
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

#pErrorEmailMsg {
  color: red;
} 

</style>