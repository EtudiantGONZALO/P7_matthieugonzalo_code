<template>
<div class="backgroundBlack">
    <div class="headerColor">
      <div class="flexEvenly">
        <img alt="Vue logo" src="./assets/icon-left-font-monochrome-white.png" class="logo">
      </div>
      <div class="flexEvenly dore">
        <router-link to="/home" class="textDecoration color">Home</router-link>
        <router-link to="/" class="textDecoration color">Inscription</router-link>
        <router-link to="/login" class="textDecoration color">Connexion</router-link>
        <router-link to="/account" class="textDecoration color">Profil</router-link>
      </div>
    </div>
    <!--   Login, Connexion   -->
    <router-view/>
    
</div>
</template>

<script>

export default {
  name: 'App',
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
