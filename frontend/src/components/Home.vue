<template>
<div>
  <div class="socialContainer">
    <div class="blocContainer flexColumn">
      <textarea type="article" class="sizeInput" placeholder="Ecrivez ce que vous voulez publier" v-model="text" rows="12"/>
      <input type="file" class="marginBottom" @change="onFileSelected">
      <div style="display:none">{{ selectedFile.name }}</div>
      <button class="btnStyle" @click="createArticle()"> Publier </button>
    </div>
  </div>
  <div v-for="(article, index) in articles" :key="index">
    <Article :text="article.text" 
             :username="article.user.username" 
             :imageUrl="article.imageUrl"
             :articleUserId="article.userId"
             :articleId="article.id"
             @deletearticle="getAllArticles()"/>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Article from '../components/Article.vue';

export default {
  name: 'Home',
  components: {
    Article,
  },
  data() {
    return {
      articles: [],
      user: String,
      text: "",
      selectedFile: "",
      isOwnerModal: false,
      articleUserId: null,
    } 
  },
  
  methods: {
    //fonction de creation de l'article    
      createArticle() {
        const user = JSON.parse(localStorage.getItem("user"));
        const myForm = new FormData();
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + user.token,
          },
        };
        myForm.append("userId", user.userId);
        myForm.append("text", this.text);
        myForm.append("imageUrl", this.selectedFile);

        axios
          .post("http://localhost:3000/api/articles", myForm, config)
          .then(() => {
            this.getAllArticles();
          })
          .catch((error) => console.log(error));
      },

      onFileSelected(event) {
        this.selectedFile = event.target.files[0];
      },
      
      getAllArticles() {
        const user = JSON.parse(localStorage.getItem("user"));
        axios({
          method: "GET",
          url: "http://localhost:3000/api/articles",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token,
          },
        })
          .then((response) => {
            response.data.forEach((item) => {
              item.createdAt = new Date(item.createdAt);
            });
            response.data =  response.data.sort((a, b) => b.createdAt - a.createdAt);
            this.articles = response.data
          })
          .catch((error) => console.log(error));
      },

      isOwnerCheck() {
        //On vérifie que l'utilisateur est propriétaire du post ou s'il est un administrateur
        const user = JSON.parse(localStorage.getItem("user"));
        this.userId = user;

        if (this.userId.userId == this.articleUserId || this.userId.isAdmin == true) {
          this.isOwnerModal = true;
        } else {
          this.isOwnerModal = false;
        }
      },
  },

  //Affichage de tous les articles
  mounted() {
    this.getAllArticles();
  },
  
}

</script>

<style>

.socialContainer {
  display: flex;  
  justify-content: center;
  width: 100%;
  background-color: grey;
}

.blocContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
}

.flexColumn {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    background: linear-gradient( maroon, tomato);
    border-radius: 20px;
    margin-bottom: 40px;
    box-shadow: 3px 3px 3px grey;
    z-index: 1;
    position: relative;
}

.btnStyle:hover
  {
    box-shadow: 3px 3px 3px grey;
  }

.btnStyle::after
  {
    opacity: 1;
  }
    
.btnStyle::after
  {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 20px;
    background: linear-gradient(darken( maroon, 8) 0%, lighten(#ff6347, 4) 100%);
    opacity: 0;
    z-index: -1;
    transition: opacity 500ms;
  }

.finArticle {
  width: 100%;
  height: 20px;
  border-bottom: 2px solid gold;
}

.textStyle {
  margin: 10px 0 10px 0;
}

.sizeInput {
  width: 70%;
  height: 50%;
  outline: none;
  margin: 10px 0;
}

.marginBottom {
  margin-bottom: 40px;
}

@media screen and (max-width: 730px) {
  .marginBottom {
    width: 200px;
  }
}

</style>