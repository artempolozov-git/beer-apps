<template>
  <div class="page__container">
    <Header v-for="(header, titlePages) in headerPages" :key="titlePages"
            :title="header.title"
            :id="header.id"
            :show="header.show"/>

    <div class="orders-page-main__container">
      <div class="table">
        <div class="table__container">
          <table class="table">
            <thead>
            <tr>
              <th>Наименование</th>
              <th>Количество</th>
              <th>Сумма</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, table) in productsTable" :key="table">
              <td v-for="(value, table) in item.value" :key="table">{{value}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="total-price">Всего к оплате: <span>{{totalPrice}}р.</span></div>
      <div class="buttons">
        <span>Оплатить</span>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/layouts/Header";
    export default {
        name: "orders-page",
        components: {
            Header,
        },
        data () {
            return {
                totalPrice: 300,
                headerPages: [
                    {
                        title: 'Заказы',
                        id: '/orders',
                        show: true,
                    }
                ],
                productsTable: [
                    {
                        value: [
                            'Пиво Заправское светлое',
                            '1',
                            '100р.',
                        ],
                    },
                    {
                        value: [
                            'Пиво Заправское светлое',
                            '1',
                            '100р.',
                        ],
                    },
                    {
                        value: [
                            'Пиво Заправское светлое',
                            '1',
                            '100р.',
                        ],
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
.orders-page-main__container {
  padding: 30px 20px;
  box-sizing: border-box;
}
.images {
  width: 7vw;
}
.table{
  width: 100%;
}
.table__container {
  overflow-x: auto;
  width: 100%;
}
.table th, .table td{
  padding: 20px 25px;
  text-align: left;
}
.table td{
  color: $additional-color;
}
.table tbody{
  border-radius: 21px;
  box-shadow: 0px 1px 6px 0px rgba(32, 33, 36, 0.2);
}
.total-price {
  font-weight: bold;
  text-align: center;
  margin: 50px auto 20px;
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