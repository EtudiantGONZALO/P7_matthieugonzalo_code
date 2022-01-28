<template>
    <div class="socialContainer">
        <div class="blocContainer">
            <p class="textStyle"> Username </p>
            <textarea type="text"  class="sizeInput" rows="12" v-model="publication"></textarea>
            <div class="marginBottom">
                <p>Ajouter une photo</p>
                <input type="text" v-model="photo">
            </div>
            <div>
                <router-link to="/articleReponse" class="btnStyle" v-on:click="editerReponse()"> Publier </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PublierReponse',
  //props: ['publication'],
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

.blocContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
  height: 100%;
  padding: 50px 0;
}

.textStyle {
  margin: 10px 0 10px 0;
}

.sizeInput {
  width: 70%;
  height: 50%;
  outline: none;
}

.btnStyle
{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    margin: auto;
    color: white;
    text-decoration: none;
    background: linear-gradient( #0065FC, #083eee);
    border-radius: 20px;
    margin-bottom: 40px;
    box-shadow: 3px 3px 3px grey;
    z-index: 1;
    position: relative;
    &:hover
    {
        box-shadow: 3px 3px 3px grey;
        &::after
        {
            opacity: 1;
        }
    }
    &::after
    {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 20px;
        background: linear-gradient(darken(#0065FC, 8) 0%, lighten(#08adee, 4) 100%);
        opacity: 0;
        z-index: -1;
        transition: opacity 500ms;
    }
}

.marginBottom {
  margin-bottom: 40px;
}


</style>
