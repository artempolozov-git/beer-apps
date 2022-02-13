<template>
  <header class="header-main__container">
    <div class="page-menu__container">
      <img class="images" v-show="show" src="@/assets/icons/back-arrow.svg" v-on:click="goToPage(id)">
      <h1 class="page-title">{{title}}</h1>
      <div class="page-menu">
        <img class="images" src="@/assets/icons/favorites.svg">
        <img class="images" src="@/assets/icons/basket.svg">
      </div>
    </div>
    <div class="search">
      <img class="search-icon" src="@/assets/icons/search.svg">
      <input class="search-input" type="text" placeholder="Поиск по каталогу">
      <img class="sorting-image" src="@/assets/icons/sorting.svg">
    </div>
  </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: String,
            id: String,
            show: Boolean,
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        },
    }
</script>

<style lang="scss" scoped>
.header-main__container  {
  padding: 30px 20px;
  box-sizing: border-box;
  box-shadow: 0px 8px 8px -6px rgba(30, 20, 19, 0.21);
}
.page-menu__container {
  display: flex;
  align-items: center;
  margin: 0 0 30px;
}
.page-menu  {
  display: flex;
  align-items: center;
  margin-left: auto;
  .images {
    width: 6vw;
    margin: 0 0 0 20px;
  }
}
.images {
  width: 5vw;
  margin: 0 15px 0 0;
}
.page-title {
  font-size: $title-fontsize;
  margin: 0;
}
.search {
  display: flex;
  align-items: center;
  .search-input {
    font-family: HelveticaNeueCyr;
    font-weight: 500;
    width: 100%;
    padding: 15px 15px 15px 60px;
    border-radius: 21px;
    outline: none;
    background-color: #F6F6F6;
    border: 2px solid #F6F6F6;
    &:focus {
      background-color: #ffffff;
      border: 2px solid $highlight-buttons-color;
    }
  }
  .search-icon {
    width: 5vw;
    position: absolute;
    left: 40px;
  }
  .sorting-image {
    width: 6vw;
    margin: 0 0 0 20px;
  }
}
</style>