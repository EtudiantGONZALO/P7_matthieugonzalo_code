<template>
<div id="app">
    <Header></Header>
    <article class="socialContainer">
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
        <input type="text" value="" v-model="Password">
        <div>
          <button class="btnStyle" v-on:click="creer()"> Créer un compte </button>
        </div>
      </div>
    </article>
</div>
</template>

<script>
import { Header } from './Header.vue'

export default {
  name: 'Header',

  components: {
    Header,
  },
}

var app = new Vue ({
    el: "#app",
    data: {
        FirstName: "",
        Lastname: "",
        Email: "",
        Username: "",
        Password: "",
    },
    methods: {
        creer: function(){
            
        }
    }
})

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
  margin-top: 40px;
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

</style>
