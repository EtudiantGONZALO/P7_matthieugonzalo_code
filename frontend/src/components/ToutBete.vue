<template>
  <div @click="change()">
      {{ toto }}{{ firstname }}
  </div>
</template>

<script>
export default {
    name: "ToutBete.vue",
    data() {
        return {
            toto: 'Prénom :',
        };
    },
    props: ['firstname'],
    methods: {
        change() {
            this.toto = 'Nom : ';
        }
    }
}
</script>