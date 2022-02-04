<template>
    <div class="socialContainer">
      <ToutBete :firstname="firstname">

      </ToutBete>
      <form method="get" class="blocContainer">
        <div>
          <p class="textStyle"> Firstname </p>
          <input type="text" id="firstname" v-model="firstname">
          <p id="firstNameErrorMsg"></p>
        </div>
        <div>
          <p class="textStyle"> Lastname </p>
          <input type="text" id="lastname" v-model="lastname">
          <p id="lastNameErrorMsg"></p>
        </div>
        <div>
          <p class="textStyle"> Email </p>
          <input type="email" id="email" v-model="email">
          <p id="emailErrorMsg"></p>
        </div>
        <div>
          <p class="textStyle"> Username </p>
          <input type="text" id="username" v-model="username">
          <p id="usernameErrorMsg"></p>
        </div>
        <div>
          <p class="textStyle"> Password </p>
          <input type="text" id="password" v-model="password">
          <p id="passwordErrorMsg" class="marginBottom"></p>
        </div>
        <div>
          <button type="submit" class="btnStyle" v-on:click="creerCompte()"> Créer un compte </button>
        </div>
      </form>
    </div>
</template>

<script>
import ToutBete from './ToutBete.vue';
export default {
  name: 'Inscription',
  components: { ToutBete },
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    }
  },
  
  methods: {
    
    creerCompte(){

      var firstname = document.querySelector('#firstname').value;
      var lastname = document.querySelector('#lastname').value;
      var username = document.querySelector('#username').value;
      var email = document.querySelector('#email').value;
      var password = document.querySelector('#password').value;
      
      var masqueCaractere = /^[a-zA-Z0-9- ']+$/g;
      var masqueEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+/;

      if (masqueCaractere.test(firstname) && masqueCaractere.test(lastname) && masqueCaractere.test(username) && masqueCaractere.test(password) && masqueEmail.test(email)) {

        //Constante options de la methode post
        const options = {
          method: 'POST',
          body: JSON.stringify(this.data),
          headers: {
              'Accept': 'application/json', 
              "Content-Type": "application/json", 
          },
        };

        //On interroge l'api avec la methode post
        axios.post("http://localhost:8080/groupomaniafriend/auth", options)
          .then((response) => response.json())

          .then((data) => {
            //On redirige vers la page de connexion.vue
            document.location.href = '../components/connexion.vue';
          })

          .catch(function(err) {
            // Une erreur est survenue
          });
    
        } else {
          var pErrorFirstNameMsg = document.querySelector('#firstNameErrorMsg');
          var pErrorLastNameMsg = document.querySelector('#lastNameErrorMsg');
          var pErrorUsernameMsg = document.querySelector('#usernameErrorMsg');
          var pErrorEmailMsg = document.querySelector('#emailErrorMsg');
          var pErrorPasswordMsg = document.querySelector('#passwordErrorMsg');

          pErrorFirstNameMsg.innerText = "Votre prénom ne doit pas contenir de caractères interdits.";
          pErrorLastNameMsg.innerText = "Votre Nom ne doit pas contenir de caractères interdits.";
          pErrorUsernameMsg.innerText = "Votre username ne doit pas contenir de caratères spéciaux.";
          pErrorEmailMsg.innerText = "Votre Email n'est pas valide.";
          pErrorPasswordMsg.innerText = "Votre password ne doit pas contenir de caratères spéciaux.";
          return false;
          }
    }
  },
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

#firstNameErrorMsg, #lastNameErrorMsg, #usernameErrorMsg, #passwordErrorMsg, #emailErrorMsg {
  color: red;
}

</style>
