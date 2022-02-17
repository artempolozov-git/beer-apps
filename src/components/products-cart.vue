<template>
  <div class="products-cart__container">
    <div class="products-images"><img :src="images"></div>
    <div class="products-information">
      <div class="product-sum">{{sum}}р. / 1л</div>
      <div class="product-name">{{names}}</div>
      <p class="text">Стоимость: <span>{{price}}р. / 0.5л</span></p>
      <p class="text">Стоимость тары: <span>{{bottle}}р.</span></p>
    </div>
    <img class="images" src="@/assets/icons/favorites.svg">
  </div>
</template>

<script>
    export default {
        name: "ProductsCart",
        props: {
            images: String,
            sum: String,
            names: String,
            price: Number,
            bottle: Number,
        },
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
  .products-cart__container {
    display: flex;
    width: 100%;
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 21px;
    box-shadow: 0px 1px 6px 0px rgba(32, 33, 36, 0.2);
  }
  .products-images > img {
    width: 21vw;
    height: auto;
    margin: 0 20px 0 0;
  }
  .product-sum {
    color: $highlight-color;
    font-size: $additional-fontsize;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .images {
    height: 3vh;
    width: 6vw;
    margin-left: auto;
  }
  .product-name {
    font-size: $additional-fontsize;
    font-weight: normal;
    margin-bottom: 20px;
  }
  .text {
    color: $additional-color;
  }
</style>