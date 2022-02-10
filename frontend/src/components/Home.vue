<template>
    <div class="socialContainer flexEvenly">
        <router-link to='/touslesarticles' class="blocContainer">
            Publier un Texte
        </router-link>
        <router-link to="/touteslesimages" class="blocContainer">
            Publier une image
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',

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

.flexEvenly {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
</style>