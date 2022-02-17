<template>
  <div class="products-items__container">
    <div class="product-images" @click="goToPage('/products-card')"><img :src="images"></div>
    <div class="product-sum__wrapper">
      <div class="product-sum">{{sum}}р. / 0.5л</div>
      <img class="images" src="@/assets/icons/favorites.svg">
    </div>
    <div class="product-name">{{names}}</div>
    <div class="parameters__wrapper">
      <p class="product-parameters">Крепость: <span>{{strength}}</span></p>
      <p class="product-parameters">Плотность: <span>{{density}}</span></p>
    </div>
    <div class="buttons" @click="showProductPopup">
      <span>Добавить</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProductsItems",
        props: {
          images: String,
          sum: Number,
          names: String,
          strength: String,
          density: String,
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            },
            showProductPopup() {
                let form = document.getElementById("product-popup");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
.products-items__container {
  width: 100%;
  height: auto;
  padding: 30px 20px;
  box-sizing: border-box;
  border-radius: 21px;
  box-shadow: 0px 1px 6px 0px rgba(32, 33, 36, 0.2);
}
.product-images > img{
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
}
.product-sum__wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.product-sum {
  color: $highlight-color;
  font-size: $additional-fontsize;
  font-weight: bold;
}
.images {
  width: 5vw;
  margin-left: auto;
}
.product-name {
  font-size: 3vw;
  font-weight: normal;
  margin-bottom: 20px;
}
.parameters__wrapper {
  margin-bottom: 20px;
}
.product-parameters {
  color: #BCBCBC;
}
.buttons {
  width: fit-content;
  margin: auto;
  padding: 15px 40px;
  box-sizing: border-box;
  border-radius: 21px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  background-color: $highlight-buttons-color;
}
</style>