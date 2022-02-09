<template>
  <div class="touslesarticles">
      message de bienvenu
      <article v-for="article in articles" :msg="article.msg" :like="article.like"/>
  </div>
</template>

<script>
export default {
    name: "ToutBete.vue",
    data() {
        return {
            toto: 'Prénom :',
            articles: undefined,
        };
    },
    props: ['firstname'],
    methods: {
        change() {
            this.toto = 'Nom : ';
        }
    },
    mounted() {
        axios.get(touslesarticles).then(data => this.articles = data);
    }
}
</script>