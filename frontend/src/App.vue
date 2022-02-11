<template>
<div class="backgroundBlack">
    <div class="headerColor">
      <div class="flexEvenly">
        <img alt="Vue logo" src="./assets/icon-left-font-monochrome-white.png" class="logo">
      </div>
      <div class="flexEvenly dore">
        <router-link to="/home" class="textDecoration">Home</router-link>
        <router-link to="/" class="textDecoration">Inscription</router-link>
        <router-link to="/login" class="textDecoration">Connexion</router-link>
        <router-link to="/account" class="textDecoration">Profil</router-link>
      </div>
    </div>
    <!--   -->
    
    <!--   -->
    <router-view/>
    
</div>
</template>

<script>
//import publication from "./components/Publier.vue"

export default {
  name: 'App',
  //components: {
    //publication
  //}
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
  background-color: #0065FC;
}

.flexEvenly {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.dore {
  background-color: gold;
}

.textDecoration {
  text-decoration: none;
}

.logo {
  margin-left: 50px;
}


</style>
