<template>
  <div>
    <div class="socialContainer">
        <div class="blocContainer">
            <input type="file">
            <button v-on:click="createArticle()">Ajouter une photo</button>
        </div>
    </div>
    <PostImage/>
  </div>
</template>

<script>
import axios from 'axios';
import PostImage from '../components/PostImage.vue';

export default {
  name: 'ToutesLesImages',
  component: {
    PostImage,
  },
  data() {
    return {
      selectedFile: "",
    }
  },
  methods:{
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

.blocContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
  height: 100%;
  padding: 50px 0;
}

</style>