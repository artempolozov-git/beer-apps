<template>
  <div class="news__block" @click="showNewsPopup">
    <img :src="background">
  </div>
</template>

<script>
    export default {
        name: "News",
        props: {
            background: String,
        },
        methods: {
            showNewsPopup() {
                let form = document.getElementById("news-popup");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
  .section-title {
    font-size: $additional-fontsize;
    margin: 0 0 20px 0;
  }
  .news__block > img {
    width: 100%;
    height: 150px;
    border-radius: 21px;
    object-fit: cover;
  }
</style>