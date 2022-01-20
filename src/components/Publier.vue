<template>
<div id="app">
    <Header></Header>
    <div class="socialContainer">
        <div class="blocContainer">
            <p class="textStyle"> Username </p>
            <textarea type="text" value="" class="sizeInput" rows="12" v-model="article"></textarea>
            <div>
                <p>Ajouter une photo</p>
                <input type="text" v-model="photo">
            </div>
            <div>
                <button class="btnStyle" v-on:click="publier()"> Publier </button>
            </div>
        </div>
        <div>
        <button class="btnStyle" v-on:click="publier()"> Publier </button>
        </div>
    </div>
</div>
</template>

<script>
import { Hearder } from './Header.vue'

var app = new Vue ({
    el: "#app",
    data: {
        article: "",
        photo: "",
})
</script>
