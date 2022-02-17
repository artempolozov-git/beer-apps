<template>
  <div class="page__container">
    <Header v-for="(header, titlePages) in headerPages" :key="titlePages" :title="header.title"/>

    <div class="address-main__container">
      <div class="address-shop__container">
        <div class="address-shop">
          <span class="shop">Магазин: </span>
          <span>г. Липецк, пр-т. Победы, 116</span>
        </div>
        <div class="buttons" @click="showShopsPopup">
          <span>Выбрать</span>
        </div>
      </div>
    </div>

    <div class="catalog-main__container">
      <details>
        <summary class="catalog-item__wrapper">
          <img class="images" src="@/assets/icons/beers.svg">
          <div class="item-title">Пиво в таре</div>
          <img class="images dropdown" src="@/assets/icons/dropdown.svg">
        </summary>
        <div class="items" v-for="(item, catalogs) in beersItems" :key="catalogs">
          <p class="item" v-for="(beers, catalogs) in item.beers" :key="catalogs" v-on:click="goToPage('/products')">
            <span>{{beers.names}}</span>
          </p>
        </div>
      </details>

      <div class="catalog-item__container" v-for="(items, catalogs) in catalogItems" :key="catalogs">
        <div class="catalog-item__wrapper" v-for="(item, catalogs) in items.catalog" :key="catalogs">
          <img class="images" :src="item.images">
          <div class="item-title" v-on:click="goToPage('/products')">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/layouts/Header";
    export default {
        name: "Catalog",
        components: {
            Header,
        },
        data () {
            return {
                headerPages: [
                    {
                        title: 'Каталог'
                    }
                ],
                beersItems: [
                    {
                        beers: [
                            {
                                names: 'Светлое пиво',
                            },
                            {
                                names: 'Темное пиво',
                            },
                            {
                                names: 'Пшеничное пиво',
                            },
                            {
                                names: 'Крафтовое пиво',
                            },
                            {
                                names: 'Безалкогольное пиво',
                            },
                        ],
                    }
                ],
                catalogItems: [
                    {
                        catalog: [
                            {
                                images: require('../assets/icons/drinks.svg'),
                                title: 'Безалкогольные напитки',
                                id:'',
                            },
                            {
                                images: require('../assets/icons/snacks.svg'),
                                title: 'Снеки и чипсы',
                                id:'',
                            },
                            {
                                images: require('../assets/icons/fish.svg'),
                                title: 'Рыбные закуски',
                                id:'',
                            },
                            {
                                images: require('../assets/icons/meat.svg'),
                                title: 'Мясные закуски',
                                id:'',
                            },
                        ]
                    }
                ]
            }
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            },
            showShopsPopup() {
                let form = document.getElementById("shops-popup");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
.address-main__container {
  background-color: #F6F6F6;
  padding: 20px;
  box-shadow: 0px 8px 8px -6px rgba(30, 20, 19, 0.21) inset;
}
.address-shop__container {
  display: flex;
  align-items: center;
}
.shop {
  font-weight: bold;
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
.catalog-main__container {
  padding: 10px 20px 30px 20px;
  box-sizing: border-box;
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
.catalog-item__wrapper {
  display: flex;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
  border-bottom: 1px #F0F0F0 solid;
    .item-title {
      font-weight: bold;
    }
}
.images {
  width: 6vw;
  margin: 0 10px 0 0;
}
.dropdown {
  width: 4vw;
  margin-left: auto;
}
.item {
  padding: 20px 0;
  box-sizing: border-box;
  border-bottom: 1px #F0F0F0 solid;
    & span {
      padding-left: 30px;
    }
}
</style>