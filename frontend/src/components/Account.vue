<template>
<div>
    <div class="socialProfilContainer">
        <div class="blocProfilContainer">
            <h1 class="textStyle"> Email </h1>
            <p> {{ this.user.email }} </p>
            <h1 class="textStyle"> Username </h1>
            <p> {{ this.user.username }} </p>
            <div style="display: flex">
              <button class="btnStyle" v-on:click="supprimer" type="button"> Supprimer compte </button>
              <button class="btnStyle" v-on:click="deconnecter()" :emailValue="this.user.email"> Deconnexion </button>
            </div>
        </div>
    </div>
    <div class="socialProfilContainer">
        <div class="blocProfilContainer">
            <div v-for="(user, index) in users" :key="index">
              <h2 class="textStyle2"> Email </h2>
              <p> {{ user.email }} </p>
              <h2 class="textStyle2"> Username </h2>
              <p> {{ user.username }} </p>
              <div class="finArticle"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Account',
    data: function () {
        return {
        userId: String,
        user: String,
        users: [],
        };
    },

    methods: {
        //affichage de l'utilisateur
        displayUsers() {
            const user = JSON.parse(localStorage.getItem("user"));
            let header = {
                headers: {
                Authorization: "Bearer " + user.token,
                },
            };
            axios
                .get("http://localhost:3000/api/auth/users/", header)
                .then((response) => (this.users = response.data))
                .catch((error) => console.log(error));
        },

        //Suppression d'un utilisateur
        supprimer() {
          const user = JSON.parse(localStorage.getItem("user"));
          let header = {
            headers: {
              Authorization: "Bearer " + user.token,
            },
          };
          axios
            .delete("http://localhost:3000/api/auth/users/" + this.user.id, header)
            .then(() => ((location.href = "/"), localStorage.removeItem("user")))
            .catch((error) => console.log(error));
        },

        //deconnexion du compte
        deconnecter() {
              localStorage.removeItem("user");
              this.$router.push("/");
        },

        //obtenir tous les utilisateurs
        getAllUsers(user) {
          axios({
            method: "GET",
            url: "http://localhost:3000/api/auth/users",
            headers: {
            Authorization: "Bearer " + user.token,
            },
          })
            .then((response) => (this.users = response.data))
            .catch((error) => console.log(error));
        }
    },

    mounted() {
        
        //On récupère les informations de l'utilisateur actuellement connecté
        const user = JSON.parse(localStorage.getItem("user"));
        this.userId = user.token;
        axios
            .get("http://localhost:3000/api/auth/users/" + user.userId)
            .then((response) => (this.user = response.data))
            .catch((error) => console.log(error));
    
        //on appel la fonction getAllUsers et l'on met comme attribut la constante user
        this.getAllUsers(user);
    },
}
</script>

<style>

.socialProfilContainer {
  display: flex;  
  justify-content: center;
  width: 100%;
  background-color: grey;
  padding: 40px 0;
}

.blocProfilContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
}

.textStyle {
  margin: 10px 10px;
}

.textStyle2 {
  margin: 10px 10px;
  font-size: 16px;
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
  border-bottom: 2px solid black;
}

</style>