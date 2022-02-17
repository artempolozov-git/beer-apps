<template>
  <div id="product-popup" style="display: none;">
    <div class="overlay">
      <div class="product-popup__container">
        <div class="products-cart__container" v-for="(item, cart) in productsCart" :key="cart">
          <div class="products-images"><img :src="item.images"></div>
          <div class="products-information">
            <div class="product-name">{{item.names}}</div>
            <p class="text">Стоимость: <span>{{item.price}}р. / 0.5л</span></p>
            <p class="text">Стоимость тары: <span>{{item.bottle}}р.</span></p>
          </div>
          <img class="images" src="@/assets/icons/close.svg" @click="showProductPopup">
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "product-popup",
        data () {
            return {
                count: 0,
                counter:0,
                productsCart: [
                    {
                        images: require('../assets/images/products/zapravskoe.webp'),
                        names: 'Заправское светлое',
                        price: 45,
                        bottle: 10,
                    },
                ]
            }
        },
        methods: {
            showProductPopup() {
                let form = document.getElementById("product-popup");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
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
  #product-popup {
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
  .product-popup__container {
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 21px;
  }
  .products-cart__container {
    display: flex;
    margin-bottom: 30px;
    .images {
      height: 2vh;
      width: 4vw;
      margin-left: auto;
    }
  }
  .products-images > img {
    width: 21vw;
    height: auto;
    margin: 0 20px 0 0;
  }
  .product-sum {
    color: $highlight-color;
    font-size: $additional-fontsize;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .product-name {
    font-size: $additional-fontsize;
    font-weight: normal;
  }
  .text {
    color: $additional-color;
  }
  .subtitle {
    font-weight: bold;
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
    margin: 0 0 30px 0;
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
</style>