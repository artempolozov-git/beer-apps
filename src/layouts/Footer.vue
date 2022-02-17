<template>
  <footer class="footer-main__container">
    <div class="footer-navigation__container">
      <div class="footer-navigation__blocks" v-on:click="goToPage('/')">
        <img class="images" src="@/assets/icons/home.svg">
        <p class="navigation-text">Главная</p>
      </div>

      <div class="footer-navigation__blocks indent" v-on:click="goToPage('/catalog')">
        <img class="images" src="@/assets/icons/catalog.svg">
        <p class="navigation-text">Каталог</p>
      </div>

      <div class="footer-navigation__blocks indent" v-on:click="goToPage('/actions')">
        <img class="images" src="@/assets/icons/actions.svg">
        <p class="navigation-text">Акции</p>
      </div>

      <div class="footer-navigation__blocks indent" @click="showShopsPopup">
        <img class="images" src="@/assets/icons/shops.svg">
        <p class="navigation-text">Магазины</p>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            },
            showShopsPopup() {
                let form = document.getElementById("shops-popup");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
.footer-main__container {
  position: sticky;
  bottom: 0;
  padding: 10px 40px;
  box-sizing: border-box;
  background-color: $main-color;
  z-index: 9;
}
.footer-navigation__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-navigation__blocks {
  width: fit-content;
}
.indent {
  margin-left: auto;
}
.images {
  width: 6vw;
  margin: auto;
  display: flex;
}
.navigation-text {
  color: $highlight-color;
  margin: 10px 0 0 0;
}
</style>