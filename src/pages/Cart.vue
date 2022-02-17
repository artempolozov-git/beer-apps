<template>
  <div class="page__container">
    <Header v-for="(header, titlePages) in headerPages" :key="titlePages" :title="header.title"></Header>

    <div class="cart-main__container">
      <div class="product-in-cart__container">

        <div class="products-quantity">Количество товаров: <span>({{quantity}})</span></div>

        <div class="products-card__container">
          <products-cart v-for="(item, cart) in productsCart"
                         :key="cart"
                         :images="item.images"
                         :sum="item.sum"
                         :names="item.names"
                         :price="item.price"
                         :bottle="item.bottle"></products-cart>
        </div>
        <div class="add-products">Добавить товар +</div>

        <div class="details__container">
          <h2 class="section-title">Детали заказа</h2>
          <div class="details__wrapper">
            <div class="address-shop__container">
              <div class="address-shop">
                <span class="subtitle">Магазин: </span>
                <span>г. Липецк, пр-т. Победы, 116</span>
              </div>
              <div class="buttons" @click="showShopsPopup">
                <span>Выбрать</span>
              </div>
            </div>
          </div>

          <div class="details__wrapper">
            <div class="subtitle">Дата и время получения заказа:</div>
            <label for="datetime"></label>
            <input class="input-date" type="datetime-local" id="datetime" name="Дата" min="2021-01-01" max="2023-12-31">
          </div>

          <div class="details__wrapper">
            <div class="subtitle">Выберите способ оплаты:</div>
            <div class="choose-payments__wrapper indent">
              <img class="images" src="@/assets/icons/cash.svg">
              <input id="cash" type="radio" name="radio" value="1" checked>
              <label for="cash">Оплата наличными</label>
            </div>
            <div class="choose-payments__wrapper indent">
              <img class="images" src="@/assets/icons/card-online.svg">
              <input id="card-online" type="radio" name="radio" value="2">
              <label for="card-online">Оплатить картой онлайн</label>
            </div>
            <div class="choose-payments__wrapper">
              <img class="images" src="@/assets/icons/card-pay.svg">
              <input id="card-pay" type="radio" name="radio" value="3">
              <label for="card-pay">Оплата картой при получении</label>
            </div>
          </div>

          <div class="details__wrapper border">
            <div class="subtitle">Добавьте комментарий к заказу:</div>
            <div class="data__container">
              <textarea name="Сообщение" placeholder="Комментарий"></textarea>
            </div>
          </div>

          <div class="total-price">Всего к оплате: <span>100р.</span></div>
          <div class="buttons">
            <span>Добавить в корзину</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/layouts/Header";
    import ProductsCart from "@/components/products-cart";
    export default {
        name: "Cart",
        components: {
            ProductsCart,
            Header,
        },
        data () {
            return {
                quantity: 1,
                headerPages: [
                    {
                        title: 'Корзина',
                    }
                ],
                productsCart: [
                    {
                        images: require('../assets/images/products/zapravskoe.webp'),
                        sum: 90,
                        names: 'Заправское светлое',
                        price: 45,
                        bottle: 10,
                    },
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
  .cart-main__container {
    padding: 30px 20px;
    box-sizing: border-box;
  }
  .products-quantity {
    font-weight: bold;
    margin-bottom: 20px;
  }
  .products-card__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-row-gap: 20px;
  }
  .add-products {
    margin: 20px 0 30px 0;
    color: $highlight-color;
    font-weight: normal;
    text-align: right;
  }
  .section-title {
    font-size: $additional-fontsize;
    margin: 0;
  }
  .details__wrapper {
    padding: 20px 0;
    border-bottom: 1px #F0F0F0 solid;
  }
  .border {
    border-bottom: 0;
  }
  .address-shop__container {
    display: flex;
    align-items: center;
    .buttons {
      margin-left: auto;
      padding: 10px 30px;
      box-sizing: border-box;
      border-radius: 21px;
      text-align: center;
      color: #ffffff;
      font-weight: bold;
      background-color: $highlight-buttons-color;
    }
  }
  .subtitle {
    font-weight: bold;
    margin-bottom: 20px;
  }
  .input-date {
    padding: 10px;
    box-sizing: border-box;
    border-radius: 21px;
    background-color: #F6F6F6;
    border: 2px solid #F6F6F6;
    cursor: pointer;
      &:focus {
        outline: none;
        background-color: #ffffff;
        border: 2px solid $highlight-buttons-color;
      }
  }
  .images {
    width: 6vw;
    margin-right: 10px;
  }
  .choose-payments__wrapper {
    display: flex;
    align-items: center;
  }
  .indent {
    margin-bottom: 20px;
  }
  .choose-payments__wrapper input[type=radio] {
    display: none;
  }
  .choose-payments__wrapper label {
    cursor: pointer;
    padding: 10px;
    border-radius: 21px;
    user-select: none;
    background: #F6F6F6;
    border: 2px solid #F6F6F6;
  }
  .choose-payments__wrapper input[type=radio]:checked + label {
    background-color: #ffffff;
    border: 2px solid $highlight-buttons-color;
  }
  .data__container > textarea {
    width: 100%;
    height: 120px;
    font-family: HelveticaNeueCyr;
    border-radius: 21px;
    padding: 20px;
    box-sizing: border-box;
    outline: none;
    border: 2px solid #F6F6F6;
    background: #F6F6F6;
    &:focus {
      background-color: #ffffff;
      border: 2px solid $highlight-buttons-color;
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