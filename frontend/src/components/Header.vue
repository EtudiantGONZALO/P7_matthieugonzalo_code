<template>
    <Header class="flexBetween headerColor">
      <div>
        <img alt="Vue logo" src="./assets/icon-left-font-monochrome-white.png" class="logo">
      </div>
      <nav class="flexEvenly">
        <a href="" class="textDecoration">Inscription</a>
        <a href="" class="textDecoration">Connexion</a>
      </nav>
    </Header>
</template>

<script>

export default {
  name: 'Header',
  components: {
    Header
  }
}

</script>

<style>

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