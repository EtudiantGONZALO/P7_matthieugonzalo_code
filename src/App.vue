<template>
  <div id="app">
    <!------------------------------Header---------------------------------->
    <header class="flexBetween headerColor">
      <div>
        <img alt="Vue logo" src="./assets/icon.png">
      </div>
      <nav class="flexEvenly">
        <a href="" class="textDecoration">Sign Up</a>
        <a href="" class="textDecoration">Login</a>
      </nav>
    </header>
    <!------------------------------bloc Reponse----------------------------->
    <div class="socialContainer">
      <div class="blocContainer">
        <p class="sizeUsername"> matthieu </p>
        <input type="text" class="sizeInput">
        <div>
          <button class="btnRepondre">Répondre</button>
        </div>
      </div>
    </div>
    <!------------------------------bloc signup------------------------------->
    
  </div>
</template>

<script>
/*import Articles from './components/Articles';

export default {
  name: 'App',
  components: {
    Articles,
  },
}*/


</script>

<style>
#app {
  
}

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

/*---------------------BLOC REPONDRE-------------------*/

.socialContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.blocContainer {
  border: 10px solid black;
  text-align: center;
  width: 70%;
  height: 300px;
}

.sizeUsername {
  margin: 10px 0 10px 0;
}

.sizeInput {
  width: 70%;
  height: 50%;
}

.btnRepondre {
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
  box-shadow: 3px 3px 3px silver;
  z-index: 1;
  position: relative;
}
.btnRepondre:hover {
  box-shadow: 3px 3px 3px lightgrey;
}
.btnRepondre:hover::after {
  opacity: 1;
}
.btnRepondre::after {
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
