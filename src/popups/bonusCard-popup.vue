<template>
  <div id="bonus-card" style="display: none;">
    <div class="overlay">
      <div class="card-main__container">
        <div class="title__wrapper">
          <div class="card-title">Бонусная карта</div>
          <img class="images" src="@/assets/icons/close.svg" @click="showBonusCard">
        </div>
        <div class="card-number__wrapper" v-for="(card, bonusCard) in cardInformation"
             :key="bonusCard">
          <div class="accessed-bonus">Доступно бонусов: <span>{{card.accessed}}</span></div>
          <img class="barcode" :src="card.barcode">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bonusCard-popup",
        data () {
            return {
                cardInformation: [
                    {
                        accessed: '113',
                        barcode: require('@/assets/icons/barcode.svg'),
                    },
                ]
            }
        },
        methods: {
            showBonusCard() {
                let form = document.getElementById("bonus-card");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
  #bonus-card {
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
    height: 100%;
    width: 100%;
    top: 50%;
    padding: 20px;
    box-sizing: border-box;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 100;
    position: fixed;
  }
  .card-main__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 250px;
    padding: 40px 30px;
    box-sizing: border-box;
    border-radius: 21px;
    background: url(../assets/images/card-background.webp);
    background-size: cover;
    background-position: center;
  }
  .title__wrapper {
    display: flex;
    align-items: center;
    .card-title {
      color: $highlight-color;
      font-weight: bold;
      font-size: $additional-fontsize;
    }
    .images {
      width: 4vw;
      margin-left: auto;
    }
  }
  .card-number__wrapper {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    .accessed-bonus {
      color: #ffffff;
      font-weight: bold;
      font-size: $additional-fontsize;
        & span {
          color: $highlight-color;
        }
    }
    .barcode {
      width: 20vw;
      margin-left: auto;
    }
  }
</style>