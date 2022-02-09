<template>
<div>
  <div class="socialContainer">
    <div class="blocContainer">
      <textarea type="article" class="sizeInput" name="article" placeholder="Ecrivez ce que vous voulez publier" v-model="text" rows="12" @input="check"/>
      <div class="marginBottom">
        <input style="display: none" type="file" name="image" @change="onFileSelected">
        <button @click="$refs.fileInput.click()">Ajouter une photo</button>
        {{ selectedFile.name }}
      </div>
      <div>
        <button class="btnStyle" v-on:click="createArticle()" type="submit" :disabled="isDisabled"> Publier </button>
      </div>
    </div>
  </div>
  <Article/>
</div>
</template>

<script>
import axios from 'axios';
import Article from '../components/Article.vue'

export default {
  name: 'Home',
  component: {
    Article
  },
  data() {
      return { 
          articles: String,
          user: String, 
          text: "",
          selectedFile: "",
          isDisabled: true,
      };
  },
  mounted() {},
  methods: {
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
          location.reload();
        })
        .catch((error) => console.log(error));
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    check() {
      if (this.text.length >= 1) {
        this.isDisabled = false;
      }
      if (this.text.length < 1) {
        this.isDisabled = true;
      }
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

.backgroundBtnPublier {
  background-color: grey;
  padding-bottom: 40px;
}

.textStyle {
  margin: 10px 0 10px 0;
}

.sizeInput {
  width: 70%;
  height: 50%;
  outline: none;
}

.marginBottom {
  margin-bottom: 40px;
}

</style>