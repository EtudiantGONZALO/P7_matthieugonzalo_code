<template>
<div id="#app">
    <Header></Header>
    <div class="socialContainer">
      <div class="blocContainer">
        <p class="textStyle"> Username </p>
        <input type="text" value="" v-model="username">
        <p class="textStyle"> Mot de passe </p>
        <input type="text" value="" v-model="password">
        <div>
          <button class="btnStyle" v-on:click="connecter()"> Connexion </button>
        </div>
      </div>
    </div>
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
        username: "",
        password: "",
    },
    methods: {
        connecter: function(){
            
        }
    }

})