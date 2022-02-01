<template>
<div>
    <div class="flexBetween headerColor">
      <div>
        <img alt="Vue logo" src="./assets/icon-left-font-monochrome-white.png" class="logo">
      </div>
      <div class="flexEvenly">
        <router-link to="/signup" class="textDecoration">Inscription</router-link>
        <router-link to="/login" class="textDecoration">Connexion</router-link>
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

/*------------------------Header----------------------*/

.flexBetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headerColor {
  background-color: #0065FC;
}

.flexEvenly {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
}

.textDecoration {
  text-decoration: none;
  color: white;
}

.logo {
  margin-left: 50px;
}


</style>
