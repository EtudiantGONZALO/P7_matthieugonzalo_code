<template>
    <div class="socialContainer">
        <div class="blocContainer">
            <input type="file" @change="onFileSelected" accept="image/*">
            <button v-on:click="$refs.fileInput.click()">Ajouter une photo</button>
            <div style="display: none">{{ selectedFile.name }}</div>
        </div>
    </div>
</template>

<script>
export default {

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