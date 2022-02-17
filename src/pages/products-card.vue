<template>
  <div class="page__container">
    <Header v-for="(header, titlePages) in headerPages" :key="titlePages"
            :title="header.title"
            :id="header.id"
            :show="header.show"/>

    <div class="card-main__container" v-for="(item, cards) in productsCard" :key="cards">
      <div class="card-main__wrapper">
        <div class="product-card__images"><img :src="item.images"></div>

        <div class="product-sum__wrapper">
          <div class="product-sum">{{item.sum}}р. / 0.5л</div>
          <img class="images" src="@/assets/icons/favorites.svg">
        </div>

        <div class="product-name">{{item.names}}</div>

        <div class="product-description__wrapper">
          <div class="subtitle">Описание:</div>
          <p class="text">{{item.description}}</p>
          <p class="text">Крепость: <span>{{item.strength}}</span></p>
          <p class="text">Плотность: <span>{{item.density}}</span></p>
        </div>

        <div class="product-counter__wrapper">
          <div class="subtitle">Выберите объем тары:</div>
          <div class="volume__wrapper">
            <img class="images" src="@/assets/icons/liter.svg">
            <div class="text">Тара 1л <br>Стоимость тары: 10р.</div>
            <div class="counter__container">
              <button class="counter-button" @click="decrement">−</button>
              <div class="counter">{{count}}</div>
              <button class="counter-button" @click="increment">+</button>
            </div>
          </div>
          <div class="volume__wrapper">
            <img class="images" src="@/assets/icons/bottle.svg">
            <div class="text">Тара 1.5л <br>Стоимость тары: 15р.</div>
            <div class="counter__container">
              <button class="counter-button" @click="decrementCounter">−</button>
              <div class="counter">{{counter}}</div>
              <button class="counter-button" @click="incrementCounter">+</button>
            </div>
          </div>
        </div>

        <div class="total-price">Итого: <span>100р</span></div>
        <div class="buttons">
          <span>Добавить в корзину</span>
        </div>
      </div>

      <div class="popular-products__container">
        <h2 class="section-title">Популярный выбор</h2>
        <popular-products></popular-products>
      </div>
    </div>
  </div>
</template>

<script>
    import PopularProducts from "@/components/popular-products";
    import Header from "@/layouts/Header";
    export default {
        name: "products-card",
        components: {
            PopularProducts,
            Header,
        },
        data () {
            return {
                headerPages: [
                    {
                        title: 'Заправское светлое',
                        id: '/products',
                        show: true,
                    }
                ],
                productsCard: [
                    {
                        names: 'Заправское светлое',
                        images: require('../assets/images/products/zapravskoe.webp'),
                        sum: 45,
                        description: 'Пиво непастеризованное светлое. Очень легкое светлое классическое пиво с приятным вкусом и освежающим ароматом.',
                        strength: '4.0%',
                        density: '13.0%',
                    }
                ],
                count: 0,
                counter:0,
            }
        },
        methods: {
            decrement () {
                if (this.count === 0) return;
                this.count -= 1;
            },
            increment () {
                this.count += 1;
            },
            decrementCounter () {
                if (this.counter === 0) return;
                this.counter -= 1;
            },
            incrementCounter () {
                this.counter += 1;
            },
        },
    }
</script>

<style lang="scss" scoped>
  .card-main__container {
    height: fit-content;
    background-color: #ffffff;
  }
  .card-main__wrapper {
    padding: 0 50px 30px 50px;
  }
  .product-card__images > img {
    display: flex;
    margin: 0 auto 30px auto;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .product-sum__wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .product-sum {
      color: $highlight-color;
      font-size: $title-fontsize;
      font-weight: bold;
    }
    .images {
      width: 7vw;
      margin-left: auto;
    }
  }
  .product-name {
    font-size: $additional-fontsize;
    font-weight: normal;
    margin-bottom: 20px;
  }
  .product-description__wrapper {
    margin-bottom: 20px;
  }
  .subtitle {
    font-weight: bold;
  }
  .text {
    color: $additional-color;
  }
  .volume__wrapper {
    display: flex;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 1px #F0F0F0 solid;
  }
  .images {
    width: 4vw;
    margin: 0 10px 0 0;
  }
  .product-counter__wrapper {
    margin: 0 0 40px 0;
  }
  .counter__container {
    display: flex;
    align-items: center;
    margin-left: auto;
    .counter {
      margin: 0 10px;
      font-weight: bold;
      font-size: $additional-fontsize;
    }
    .counter-button {
      border: none;
      outline: none;
      background: transparent;
      font-weight: bold;
      color: $highlight-color;
      font-size: $title-fontsize;
    }
  }
  .total-price {
    font-size: $additional-fontsize;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
     & span {
       color: $highlight-color;
     }
  }
  .buttons {
    padding: 20px;
    box-sizing: border-box;
    border-radius: 21px;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    background-color: $highlight-buttons-color;
  }
  .popular-products__container {
    padding: 0 20px 30px 20px;
  }
</style>