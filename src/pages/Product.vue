<template>
  <div class="page__container">
    <Header v-for="(header, titlePages) in headerPages" :key="titlePages"
            :title="header.title"
            :id="header.id"
            :show="header.show"/>

    <div class="product-main__container">
      <div class="product-grid__container">
        <products-items v-for="(products, productItem) in productsItems"
                        :key="productItem"
                        :images="products.images"
                        :sum="products.sum"
                        :name="products.name"
                        :strength="products.strength"
                        :density="products.density"></products-items>
      </div>

      <div class="popular-products__container">
        <h2 class="section-title">Популярный выбор</h2>
        <popular-products></popular-products>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/layouts/Header";
    import ProductsItems from "@/components/ProductsItems";
    import PopularProducts from "@/components/PopularProducts";
    export default {
        name: "Product",
        components: {
            PopularProducts,
            ProductsItems,
            Header,
        },
        data () {
            return {
                headerPages: [
                    {
                        title: 'Светлое пиво',
                        id: '/catalog',
                        show: true,
                    }
                ],
                productsItems: [
                    {
                        images: require('../assets/images/products/zapravskoe.webp'),
                        sum: '45р. / 0.5л',
                        name: 'Заправское светлое',
                        strength: '4.0%',
                        density: '13.0%',
                    },
                    {
                        images: require('../assets/images/products/hmelmeister.webp'),
                        sum: '50р. / 0.5л',
                        name: 'ХмельМейстер светлое',
                        strength: '4.5%',
                        density: '12.0%',
                    },
                    {
                        images: require('../assets/images/products/beerhoven.webp'),
                        sum: '55р. / 0.5л',
                        name: 'BEERHOVEN светлое',
                        strength: '4.7%',
                        density: '12.0%',
                    },
                    {
                        images: require('../assets/images/products/kansler.webp'),
                        sum: '60р. / 0.5л',
                        name: 'Канцлеръ светлое',
                        strength: '4.5%',
                        density: '13.0%',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
.product-main__container {
  padding: 30px 20px;
  box-sizing: border-box;
}
.product-grid__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin-bottom: 30px;
}
.section-title {
  font-size: $additional-fontsize;
  margin: 0 0 20px 0;
}
</style>