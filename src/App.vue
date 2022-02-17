<template>
  <div id="app">
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <router-view name="footer"></router-view>
    <bonus-card-popup></bonus-card-popup>
    <product-popup></product-popup>
    <shops-popup></shops-popup>
    <news-popup></news-popup>
  </div>
</template>

<script>
import BonusCardPopup from "@/popups/bonusCard-popup";
import ProductPopup from "@/popups/products-popup";
import ShopsPopup from "@/popups/shops-popup";
import NewsPopup from "@/popups/news-popup";
export default {
    name: 'App',
    components: {NewsPopup, ShopsPopup, ProductPopup, BonusCardPopup},
    computed: {
        defaultViewKey: function() {
            return this.$route.name;
        }
    }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
  }
  body {
    margin: initial;
    font-family: HelveticaNeueCyr;
    font-size: $text-fontsize;
    line-height: 1;
    font-weight: 500;
    color: $main-color;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: white;
    max-width: 800px;
    margin: auto;
  }
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Bold.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Medium.ttf');
    font-weight: normal;
  }
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Roman.ttf');
    font-weight: 500;
  }
  #app-content {
    flex: 1 0 auto;
    align-self: center;
    box-sizing: border-box;
    width: 100%;
  }
</style>
