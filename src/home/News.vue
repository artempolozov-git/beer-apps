<template>
  <div class="news__block" :style="inlineStyle"></div>
</template>

<script>
    export default {
        name: "News",
        props: {
            background: String,
        },
        computed: {
            inlineStyle () {
                return {
                    backgroundImage: `url(${this.background})`
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
  .section-title {
    font-size: $additional-fontsize;
    margin: 0 0 20px 0;
  }
  .news__block {
    width: 100%;
    height: 150px;
    border-radius: 21px;
    background-size: cover;
    background-position: center;
  }
</style>