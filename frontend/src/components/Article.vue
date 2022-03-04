<template>
    <div>
        <div class="socialContainer">
            <div class="blocArticleContainer">
                <div class="userStyle"> {{ username }} </div>
                <p> {{ text }} </p>
                <img v-if="imageUrl" class="sizeImg" :src="imageUrl" />
                <DeleteButton :userId="userId" 
                              :articleId="articleId"
                              v-show="userId === articleUserId"
                              @delete="deleteevent()"/>
                <div class="finArticle"></div>
            </div>
        </div>
    </div>
</template>

<script>
import DeleteButton from "../components/DeleteArticle.vue";

export default {
  name: 'Article',
  components: {
    DeleteButton
  },
  data() {
    return { 
      userId: undefined,
    };
  },
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
    articleUserId: {
      type: Number,
    },
    articleId: {
      type: Number,
    }  
  },
  methods: {
    deleteevent() {
      this.$emit('deletearticle');
    }
  },
  mounted() {
    this.userId = JSON.parse(localStorage.getItem("user")).userId;
  }   
}
</script>

<style>

.socialContainer {
  display: flex;  
  justify-content: center;
  width: 100%;
  background-color: grey;
  padding: 20px 0;
}

.blocArticleContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
}

.userStyle {
  height: 20px;
  font-size: 17px;
  color: white;
  background-color: maroon;
  border-bottom: 2px solid gold;
}

.sizeImg {
  height: 400px;
  width: 400px;
  object-fit: cover;
}

.flexEnd {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10px;
}

.finArticle {
  width: 100%;
  height: 20px;
  border-bottom: 2px solid gold;
}

@media screen and (max-width: 730px) {
  .sizeImg {
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
}


</style>
