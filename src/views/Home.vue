<template>
  <div class="page__container">
  <Header v-for="(header, titlePages) in headerPages" :key="titlePages" :title="header.title"/>
  <div class="home-main__container">
    <div class="section__container">
      <bonus-card v-for="(card, bonusCard) in cardInformation"
                  :key="bonusCard"
                  :card-number="card.cardNumber"
                  :barcode="card.barcode">
      </bonus-card>
    </div>

    <div class="section__container">
      <h2 class="section-title">Акции</h2>
      <actions></actions>
    </div>

    <div class="section__container">
      <h2 class="section-title">Новости</h2>
      <div class="news-grid__container">
        <news v-for="(news, newsBanners) in newsInformation"
              :key="newsBanners"
              :background="news.background"
              :id="news.id"></news>
      </div>
    </div>

    <div class="section__container">
      <div class="buttons">
        <span>Связаться с нами</span>
      </div>
    </div>

    <div class="social-media__container">
      <h2 class="section-title media-title">Мы в соцсетях</h2>
      <div class="media-links__blocks">
        <img class="images" src="@/assets/icons/instagram.svg">
        <img class="images indent" src="@/assets/icons/vk.svg">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    import BonusCard from "@/home/BonusCard";
    import Actions from "@/home/Actions";
    import News from "@/home/News";
    import Header from "@/layouts/Header";
    export default {
        name: "Home",
        components: {
            Header,
            News,
            Actions,
            BonusCard
        },
        data () {
            return {
              headerPages: [
                  {
                      title: 'Главная'
                  }
              ],
              cardInformation: [
                  {
                      cardNumber: '1234 5678 9012 3456',
                      barcode: require('@/assets/icons/barcode.svg'),
                  },
              ],
              newsInformation: [
                  {
                      background: require('../assets/images/news/news-banner-first.webp'),
                  },
                  {
                      background: require('../assets/images/news/news-banner-second.webp'),
                  },
                  {
                      background: require('../assets/images/news/news-banner-third.webp'),
                  },
                  {
                      background: require('../assets/images/news/news-banner-fourth.webp'),
                  },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
  .home-main__container {
    padding: 30px 20px;
    box-sizing: border-box;
  }
  .section-title {
    font-size: $additional-fontsize;
    margin: 0 0 20px 0;
  }
  .section__container {
    margin-bottom: 30px;
  }
  .news-grid__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 20px;
  }
  .buttons {
    padding: 30px;
    box-sizing: border-box;
    border-radius: 21px;
    text-align: center;
    font-size: 3vw;
    color: #ffffff;
    font-weight: bold;
    background-color: $highlight-buttons-color;
  }
  .media-title {
    text-align: center;
  }
  .media-links__blocks {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .images {
    width: 12vw;
  }
  .indent {
    margin-left: 20px;
  }
</style>