<template>
    <div id="app">
        <div class="socialContainer">
            <div class="blocArticleContainer">
                <div class="userStyle"> {{ Username }} </div>
                <p> {{ article }} </p>
                <div class="row">
                    <button class="btnLike" v-on:click="like()">+</button>
                    <p class="likeTxt"> Like </p>
                    <button class="btnDislike" v-on:click="dislike()">-</button>
                </div>
                <button class="btnStyle" v-on:click="publier()"> Publier </button>
            </div>
        </div>
    </div>
</template>

<script>
import { Header } from './Header.vue'

export default {
  name: 'Articles',

  components: {
    Header,
  },
}

var app = new Vue ({
    el: "#app",
    data: {
        photo: "",
    },
    methods: {
        publier: function(){

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

.blocArticleContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
  height: 100%;
}

.userStyle {
  height: 20px;
  font-size: 17px;
  color: white;
  background-color: #0065FC;
  border-bottom: 2px solid gold;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}

.likeTxt {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  color: white;
  background-color: #0065FC;
}

.btnLike {
  transition: all 400ms;
}
.btnLike:hover {
  background-color: #86fc00;
  color: white;
}

.btnDislike {
  transition: all 400ms;
}
.btnDislike:hover {
  background-color: tomato;
  color: white;
}

.finArticle {
  width: 100%;
  height: 20px;
  border-bottom: 2px solid gold;
}

.rowEvenly {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

/*---------------------------------bouton-------------------------------*/

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
