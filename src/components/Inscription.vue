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
