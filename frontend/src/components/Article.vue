<template>
    <div>
        <div class="socialContainer">
            <div class="blocArticleContainer">
                <div class="userStyle"> {{ username }} </div>
                <p> {{ text }} </p>
                <img v-if="imageUrl" class="sizeImg" :src="imageUrl" />
                <div class="finArticle"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    text: {
      type: String,
    },
    username: {
      type: String,
    },
    imageUrl: {
      type: String,
    },  
  }    
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

.sizeImg {
  height: 150px;
  width: 150px;
  object-fit: cover;
}

.finArticle {
  width: 100%;
  height: 20px;
  border-bottom: 2px solid gold;
}


</style>
