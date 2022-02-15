<template>
  <div>
    <div class="socialContainer">
        <div class="blocContainer">
            <input type="file" @change="onFileSelected" accept="image/*">
            <button v-on:click="$refs.fileInput.click()">Ajouter une photo</button>
            <div style="display: none">{{ selectedFile.name }}</div>
        </div>
    </div>
    <Postimage/>
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
  methods:{
    click() {
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

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
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