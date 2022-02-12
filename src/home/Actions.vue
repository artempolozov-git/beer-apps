<template>
  <div class="section-main__container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(actions, banners) in actionsBanners" :key="banners">
        <img class="actions" :src="actions.banner">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "Actions",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    loop: true,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                },
                actionsBanners: [
                    {
                        banner: require('../assets/images/actions/action-banner.webp'),
                    },
                    {
                        banner: require('../assets/images/actions/action-banner-second.webp'),
                    },
                    {
                        banner: require('../assets/images/actions/action-banner-third.webp'),
                    },
                  ],
            }
        },
    }
</script>

<style lang="scss" scoped>
.section__container {

}
.swiper-slide {
  height: 230px;
}
.actions {
  width: 100%;
  height: 190px;
  border-radius: 21px;
  object-fit: cover;
}
</style>