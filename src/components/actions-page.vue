<template>
  <div class="page__container">
    <Header v-for="(header, titlePages) in headerPages" :key="titlePages"
            :title="header.title"
            :id="header.id"
            :show="header.show"/>

    <div class="action-page-main__container">
      <div class="actions__container" v-for="(item, actions) in actionsInformation" :key="actions">
        <img class="action-banner" :src="item.banner">
        <div class="actions-information__wrapper">
          <div class="subtitle">Акция:</div>
          <div class="action-text">{{item.text}}</div>
          <p class="action-text">Акция действует до {{item.deadline}}</p>
        </div>

        <div class="popular-products__container">
          <h2 class="section-title">Товары участвующие в акции</h2>
          <popular-products></popular-products>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/layouts/Header";
    import PopularProducts from "@/components/popular-products";
    export default {
        name: "actions-page",
        components: {
            Header,
            PopularProducts,
        },
        data () {
            return {
                headerPages: [
                    {
                        title: 'Акция',
                        id: '/actions',
                        show: true,
                    }
                ],
                actionsInformation: [
                    {
                        banner: require('../assets/images/actions/action-banner.webp'),
                        text: 'При покупке литра пива, второй литр за наш счет!',
                        deadline: '23.02.2022',
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
.action-page-main__container {
  padding: 30px 20px;
  box-sizing: border-box;
}
.action-banner {
  width: 100%;
  height: 250px;
  border-radius: 21px;
  object-fit: cover;
  margin-bottom: 20px;
}
.actions-information__wrapper {
  margin-bottom: 30px;
}
.subtitle {
  font-weight: bold;
  margin-bottom: 10px;
}
.action-text {
  color: $additional-color;
}
.section-title {
  font-size: $additional-fontsize;
  margin: 0 0 20px 0;
}
</style>