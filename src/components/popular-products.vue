<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="popular-product__container" v-for="(product, popular) in popularProducts" :key="popular">
        <div class="products-items__container">
          <div class="product-images"><img :src="product.images"></div>
          <div class="product-sum__wrapper">
            <div class="product-sum">{{product.sum}}</div>
            <img class="images" src="@/assets/icons/favorites.svg">
          </div>
          <div class="product-name">{{product.names}}</div>
          <div class="buttons">
            <span>Добавить</span>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "PopularProducts",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                popularProducts: [
                    {
                        images: require('../assets/images/products/gerrgroll.webp'),
                        sum: '45р. / 0.5л',
                        names: 'ГЕРР ГРОЛЛ',
                    },
                    {
                        images: require('../assets/images/products/shevron.webp'),
                        sum: '50р. / 0.5л',
                        names: 'SHEVRON',
                    },
                    {
                        images: require('../assets/images/products/peshkov.webp'),
                        sum: '55р. / 0.5л',
                        names: 'ПЕШКОВ',
                    },
                    {
                        images: require('../assets/images/products/zapravskoe.webp'),
                        sum: '45р. / 0.5л',
                        names: 'Заправское',
                    },
                ],
                swiperOption: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    slidesPerGroup: 2,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                }
            }
        }
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
    margin-bottom: 10px;
  }
  .product-sum {
    color: $highlight-color;
    font-size: 3.5vw;
    font-weight: bold;
  }
  .images {
    width: 5vw;
    margin-left: auto;
  }
  .product-name {
    font-weight: normal;
    margin-bottom: 20px;
  }
  .buttons {
    margin: auto;
    padding: 15px 40px;
    box-sizing: border-box;
    border-radius: 21px;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    background-color: $highlight-buttons-color;
  }
  .swiper-slide {
    height: 440px;
  }
  .swiper-container {
    padding: 10px 10px 0 10px;
  }
</style>