<template>
    <div>
        <Image class="socialContainer">
            <div v-for="(image, i) in images" :key="i" class="blocArticleContainer">
                <div class="userStyle"> {{ images[i].user.username }} </div>
                <img>
                <div class="finArticle"></div>
            </div>
        </Image>
    </div>
</template>

<script>
export default {
    name: 'PostImage',
}
</script>

<style>

</style>