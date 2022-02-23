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
             :imageUrl="article.imageUrl"/>
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
          .then((response) => (this.articles = response.data))
          .catch((error) => console.log(error));
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
    background: linear-gradient(darken(#0065FC, 8) 0%, lighten(#08adee, 4) 100%);
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

</style>