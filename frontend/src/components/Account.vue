<template>
    <div class="socialProfilContainer">
        <div class="blocProfilContainer">
            <h1 class="textStyle"> Email </h1>
            <p> {{ this.user.email }} </p>
            <h1 class="textStyle"> Username </h1>
            <p> {{ this.user.username }} </p>
            <button class="btnStyle" v-on:click="supprimer" type="button"> Supprimer compte </button>
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
        };
    },
    mounted() {
        
        //On récupère les informations de l'utilisateur actuellement connecté
        const user = JSON.parse(localStorage.getItem("user"));
        this.userId = user.token;
        axios
            .get("http://localhost:3000/api/auth/users/" + user.userId)
            .then((response) => (this.user = response.data))
            .catch((error) => console.log(error));
    },

    methods: {
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

        supprimer() {
          //Suppression d'un utilisateur
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
    }
}
</script>

<style>

.socialProfilContainer {
  display: flex;  
  justify-content: center;
  width: 100%;
  background-color: grey;
  padding: 10% 0;
}

.blocProfilContainer {
  background-color: lightgrey;
  border: 10px solid black;
  text-align: center;
  width: 70%;
  padding: 10% 0;
}

.textStyle {
  margin: 10px 0 10px 0;
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

</style>