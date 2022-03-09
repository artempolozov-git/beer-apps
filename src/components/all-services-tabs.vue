<template>
  <div class="all-services-main__container">
    <div class="table">
      <div class="table__container">
        <table class="table">
          <thead>
          <tr>
            <th>Тип</th>
            <th>Номер</th>
            <th>Дата</th>
            <th>Сумма</th>
            <th>Статус</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, table) in allServicesTable" :key="table" @click="goToPage('/orders-page')">
            <td><img class="images" :src="item.type"></td>
            <td v-for="(value, table) in item.value" :key="table">{{value}}</td>
            <td><img class="images" :src="item.status"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "all-services-tabs",
        data () {
            return {
                allServicesTable: [
                    {
                        type: require('@/assets/icons/orders-basket.svg'),
                        value: [
                            '#5328980',
                            '02.03.2022',
                            '100р.',
                        ],
                        status: require('@/assets/icons/paid.svg'),
                    },
                    {
                        type: require('@/assets/icons/orders-box.svg'),
                        value: [
                            '#5328980',
                            '02.03.2022',
                            '100р.',
                        ],
                        status: require('@/assets/icons/shipped.svg'),
                    },
                    {
                        type: require('@/assets/icons/orders-basket.svg'),
                        value: [
                            '#5328980',
                            '02.03.2022',
                            '100р.',
                        ],
                        status: require('@/assets/icons/accepted.svg'),
                    },
                    {
                        type: require('@/assets/icons/machine.svg'),
                        value: [
                            '#5328981',
                            '02.03.2022',
                            '100р.',
                        ],
                        status: require('@/assets/icons/paid.svg'),
                    },
                    {
                        type: require('@/assets/icons/orders-box.svg'),
                        value: [
                            '#5328982',
                            '04.03.2022',
                            '100р.',
                        ],
                        status: require('@/assets/icons/accepted.svg'),
                    },
                    {
                        type: require('@/assets/icons/orders-box.svg'),
                        value: [
                            '#5328983',
                            '05.03.2022',
                            '100р.',
                        ],
                        status: require('@/assets/icons/shipped.svg'),
                    },
                ],
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
  .all-services-main__container {

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
    text-align: center;
  }
  .table td{
    color: $additional-color;
  }
  .table tbody{
    border-radius: 21px;
    box-shadow: 0px 1px 6px 0px rgba(32, 33, 36, 0.2);
  }
</style>