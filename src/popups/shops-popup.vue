<template>
  <div id="shops-popup" style="display: none;">
    <div class="overlay">
      <div class="shops-popup__container">
        <h2 class="section-title">Адреса магазинов</h2>

        <div class="catalog-item__container" v-for="(items, catalogs) in catalogItems" :key="catalogs">
          <div class="catalog-item__wrapper" v-for="(item, catalogs) in items.catalog" :key="catalogs">
            <img class="images" :src="item.images">
            <div class="item-title">{{item.title}}</div>
          </div>
        </div>

        <div class="buttons" @click="showShopsPopup">
          <span>Закрыть</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shops-popup",
        data () {
            return {
                catalogItems: [
                    {
                        catalog: [
                            {
                                images: require('../assets/icons/shops.svg'),
                                title: 'г. Липецк, пр-т. Победы, 116',
                                id:'',
                            },
                            {
                                images: require('../assets/icons/shops.svg'),
                                title: 'г. Липецк, ул. Неделина, 20',
                                id:'',
                            },
                            {
                                images: require('../assets/icons/shops.svg'),
                                title: 'г. Липецк, ул. Космонавтов, 17',
                                id:'',
                            },
                            {
                                images: require('../assets/icons/shops.svg'),
                                title: 'г. Липецк, ул. Стаханова, 2',
                                id:'',
                            },
                        ]
                    }
                ]
            }
        },
        methods: {
            showShopsPopup() {
                let form = document.getElementById("shops-popup");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
  #shops-popup {
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
  .shops-popup__container {
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 21px;
  }
  .section-title {
    font-size: $additional-fontsize;
    text-align: center;
    margin: 0 0 20px 0;
  }
  .catalog-item__container {
    margin-bottom: 30px;
  }
  .catalog-item__wrapper {
    display: flex;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 1px #F0F0F0 solid;
  }
  .images {
    width: 6vw;
    margin: 0 10px 0 0;
  }
  .item {
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 1px #F0F0F0 solid;
    & span {
      padding-left: 30px;
    }
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