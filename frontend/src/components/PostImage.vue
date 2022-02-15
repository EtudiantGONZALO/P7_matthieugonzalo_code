<template>
    <div>
        <Postimage class="socialContainer">
            <div v-for="(image, i) in images" :key="i" class="blocArticleContainer">
                <div class="userStyle"> {{ images[i].user.username }} </div>
                <img class="imageStyle">
                <div class="finArticle"></div>
            </div>
        </Postimage>
    </div>
</template>

<script>

export default {
    name: 'PostImage',
    
    mounted() {
        this.$router.push("/touteslesimages");
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

.imageStyle {
  height: 150px;
  width: 150px;
}

.finArticle {
  width: 100%;
  height: 20px;
  border-bottom: 2px solid gold;
}

</style>