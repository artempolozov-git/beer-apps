<template>
  <div class="page__container">
    <Header v-for="(header, titlePages) in headerPages" :key="titlePages"
            :title="header.title" :show="header.show"/>

    <div class="orders-main__container">
      <tabs>
        <tab title="Все">
          <all-services-tabs></all-services-tabs>
        </tab>
        <tab title="Услуги">
          <services-tabs></services-tabs>
        </tab>
        <tab title="Товары">
          <products-tabs></products-tabs>
        </tab>
      </tabs>
    </div>

  </div>
</template>

<script>
    import { Tabs, Tab } from 'vue-slim-tabs'
    import Header from "@/layouts/Header";
    import ServicesTabs from "@/components/services-tabs";
    import ProductsTabs from "@/components/products-tabs";
    import AllServicesTabs from "@/components/all-services-tabs";
    export default {
        name: "Orders",
        components: {
            AllServicesTabs,
            ProductsTabs,
            ServicesTabs,
            Header,
            Tabs,
            Tab,
        },
        data () {
            return {
                headerPages: [
                    {
                        title: 'Заказы',
                    }
                ],
            }
        },
    }
</script>

<style lang="scss">
.orders-main__container {
  padding: 30px 20px;
  box-sizing: border-box;
}
.vue-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 13px 0;
  box-sizing: border-box;
  border-radius: 50px;
  background-color: #F6F6F6;
  margin-right: 20px;
  font-weight: normal;
}
.vue-tablist {
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
  margin: 0 0 30px 0;
  color: $additional-color;
}
.vue-tab[aria-selected="true"] {
  background-color: $highlight-buttons-color;
  color: #ffffff;
}
</style>