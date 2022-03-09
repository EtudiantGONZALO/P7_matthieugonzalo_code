<template>
<div class="backgroundBlack">
    <div class="headerColor">
      <div class="flexEvenly">
        <img alt="Vue logo" src="./assets/icon-left-font-monochrome-white.png" class="logo">
      </div>
      <div class="flexEvenly dore">
        <router-link v-if="isLogged" to="/home" class="textDecoration color">Home</router-link>
        <router-link v-if="!isLogged" to="/" class="textDecoration color">Inscription</router-link>
        <router-link v-if="!isLogged" to="/login" class="textDecoration color">Connexion</router-link>
        <router-link v-if="isLogged" to="/account" class="textDecoration color">Profil</router-link>
      </div>
    </div>
    <!--   Login, Connexion   -->
    <router-view @login-success="isLogged = true" @signout="isLogged = false"/>
    
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isLogged: false,
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      this.isLogged = true;
    }
  }
}

</script>

<style>
body {
  margin: 0;
}
/*------------------------Header----------------------*/

.backgroundBlack {
  background-color: black;
}

.headerColor {
  background-color: maroon;
}

.flexEvenly {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.dore {
  background-color: #2154a2;
}

.textDecoration {
  text-decoration: none;
}

.color {
  color: white;
}

.logo {
  margin-left: 50px;
}


</style>
