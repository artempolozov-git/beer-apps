<template>
  <div class="page__container">
    <Header v-for="(header, titlePages) in headerPages" :key="titlePages"
            :title="header.title" :show="header.show"/>

    <div class="actions-main__container">
      <div class="action-grid__container">
        <div class="actions__wrapper" v-for="(item, actions) in actionsInformation" :key="actions">
          <img class="action-banner" :src="item.banner" @click="goToPage('/actions')">
          <div class="actions-information__wrapper">
            <div class="action-text">{{item.text}}</div>
            <div class="buttons" @click="goToPage('/actions-page')">
              <span>Подробнее</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/layouts/Header";
    export default {
        name: "Actions",
        components: {
            Header,
        },
        data () {
            return {
                headerPages: [
                    {
                        title: 'Акции',
                    }
                ],
                actionsInformation: [
                    {
                        banner: require('../assets/images/actions/action-banner.webp'),
                        text: 'Второй литр пива за наш счет!'
                    },
                    {
                        banner: require('../assets/images/actions/action-banner-second.webp'),
                        text: '1+1=3'
                    },
                    {
                        banner: require('../assets/images/actions/action-banner-third.webp'),
                        text: 'Второй литр пива за наш счет!'
                    },
                ]
            }
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            },
        },
    }
</script>

<style lang="scss" scoped>
.actions-main__container {
  padding: 30px 20px;
  box-sizing: border-box;
}
.action-grid__container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-row-gap: 30px;
}
.action-banner {
  width: 100%;
  height: 190px;
  border-radius: 21px;
  object-fit: cover;
  margin-bottom: 20px;
}
.actions-information__wrapper {
  display: flex;
  align-items: center;
}
.action-text {
  color: $additional-color;
}
.buttons {
  margin-left: auto;
  padding: 15px 40px;
  box-sizing: border-box;
  border-radius: 21px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  background-color: $highlight-buttons-color;
}
</style>