<template>
  <div class="news__block">
    <img :src="background">
  </div>
</template>

<script>
    export default {
        name: "News",
        props: {
            background: String,
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