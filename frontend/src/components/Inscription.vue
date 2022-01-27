<template>
    <div class="socialContainer">
      <div class="blocContainer">
        <div>
          <p class="textStyle"> Firstname </p>
          <input type="text" v-model="firstname">
          <p id="firstNameErrorMsg" v-bind:valueFN="option.value"></p>
        </div>
        <div>
          <p class="textStyle"> Lastname </p>
          <input type="text" v-model="lastname">
          <p id="lastNameErrorMsg" v-bind:valueLN="option.value"></p>
        </div>
        <div>
          <p class="textStyle"> Email </p>
          <input type="text" v-model="email">
          <p id="emailErrorMsg" v-bind:valueEmail="option.value"></p>
        </div>
        <div>
          <p class="textStyle"> Username </p>
          <input type="text" v-model="username">
          <p id="usernameErrorMsg" v-bind:valueUsername="option.value"></p>
        </div>
        <div>
          <p class="textStyle"> Mot de passe </p>
          <input type="text" class="marginBottom" v-model="password">
          <p id="passwordErrorMsg"  v-bind:valuePass="option.value"></p>
        </div>
        <div>
          <button class="btnStyle" v-on:click="creerCompte()"> Créer un compte </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Inscription',
  /*data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
    }
  },
  props: [
    valueFN,
    valueLN,
    valueUsername,
    valuePass,
    valueEmail,
  ],
  }
  methods: {
    creerCompte = function() {
      var masqueCaractere = /^[a-zA-Z0-9- ']+$/g;
      var masqueEmail = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;

      if (masqueCaractere.test(firstName) && masqueCaractere.test(lastName) && masqueCaractere.test(Username) && masqueCaractere.test(password) && masqueEmail.test(email)) {
        var contact = {
          firstName,
          lastName,
          username,
          password,
          email,
          }
        } else {
          var pErrorFirstNameMsg = valueFN;
          var pErrorLastNameMsg = valueLN;
          var pErrorUsernameMsg = valueU;
          var pErrorPasswordMsg = valuePass;
          var pErrorEmailMsg = valueEmail;

          pErrorFirstNameMsg.innerText = "Votre prénom ne doit pas contenir de caractères interdits.";
          pErrorLastNameMsg.innerText = "Votre Nom ne doit pas contenir de caractères interdits.";
          pErrorUsernameMsg.innerText = "Votre adresse ne doit pas contenir de caratères spéciaux.";
          pErrorPasswordMsg.innerText = "Votre ville ne doit pas contenir de caractères interdits.";
          pErrorEmailMsg.innerText = "Votre Email n'est pas valide.";
          return false;
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
    &:hover
    {
        box-shadow: 3px 3px 3px grey;
        &::after
        {
            opacity: 1;
        }
    }
    &::after
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
}

.marginBottom {
  margin-bottom: 40px;
}


</style>
