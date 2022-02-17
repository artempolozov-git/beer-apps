<template>
  <div id="news-popup" style="display: none;">
    <div class="overlay">
      <div class="news-popup__container" v-for="(item, news) in newsInformation" :key="news">
        <div class="news-banner"><img :src="item.banner"></div>
        <div class="information__wrapper">
          <div class="subtitle">Новости</div>
          <div class="news-text">{{item.text}}</div>
        </div>

        <div class="buttons" @click="showNewsPopup">
          <span>Закрыть</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "news-popup",
        data () {
            return {
                newsInformation: [
                    {
                        banner: require('../assets/images/news/news-banner-first.webp'),
                        text: 'В Великобритании закрылся самый старый паб. Он проработал 1229 лет.\n' +
                            'Заведение не смогло пережить локдаун, который был введен из-за пандемии коронавируса. Паб под названием Ye Olde Fighting Cocks был открыт в 793 году. "Вместе со своей командой я сделал все возможное, чтобы паб продолжал работать, однако последние два года были беспрецедентными для индустрии гостеприимства и победили всех нас", — заявил владелец паба Христо Тофалли. Он добавил, что убит горем, ведь заведение для него было больше, чем бизнес, в то время к персоналу он относился как к родной семье.',
                    }
                ]
            }
        },
        methods: {
            showNewsPopup() {
                let form = document.getElementById("news-popup");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
  #news-popup {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  .overlay {
    top: 15%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 20px;
    z-index: 100;
    position: fixed;
  }
  .news-popup__container {
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 21px;
  }
  .news-banner > img {
    width: 100%;
    height: 200px;
    border-radius: 21px;
    margin-bottom: 20px;
    object-fit: cover;
  }
  .information__wrapper {
    margin-bottom: 20px;
  }
  .subtitle {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .news-text {
    color: $additional-color;
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