<template>
    <div>
      <div class="userStyle"> Username </div>
      <p> {{ publication }} </p>
      <div class="row">
        <button class="btnLike" v-on:click="like()">+</button>
        <p class="likeTxt"> Like </p>
        <button class="btnDislike" v-on:click="dislike()">-</button>
      </div>
      <button class="btnStyle" v-on:click="repondre()"> Répondre </button>
      <div class="finArticle"></div>
    </div>
</template>

<script>

export default {
  name: 'ArticlesReponse',
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
    &:hover {
      background-color: #86fc00;
      color: white;
    }
}

.btnDislike {
  transition: all 400ms;
    &:hover {
      background-color: tomato;
      color: white;
    }
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
</style>
