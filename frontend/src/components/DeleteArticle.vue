<template>
  <button class="deleteButton" @click="deleteArticle" type="button">
    Supprimer
  </button>
</template>


<script>
import axios from "axios";
export default {
  name: "deleteButton",
  data: function () {
    return {};
  },
  props: {
    articleId: {
      type: Number,
    }
  },
  methods: {
    deleteArticle() {
      const user = JSON.parse(localStorage.getItem("user"));
      axios({
        method: "DELETE",
        url: "http://localhost:3000/api/articles/" + this.articleId,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
      })
        .then(() => {
          this.$emit('delete');
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>

.deleteButton {
  display: flex;
  background-color: #2154a2;
  color: white;
}

</style>