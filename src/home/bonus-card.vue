<template>
  <div class="card-main__container">
    <div class="title__wrapper">
      <div class="card-title">Бонусная карта</div>
      <img class="images" src="@/assets/icons/info.svg">
    </div>
    <div class="card-number__wrapper">
      <div class="card-number">{{cardNumber}}</div>
      <img class="barcode" :src="barcode">
    </div>
  </div>
</template>

<script>
export default {
    name: "BonusCard",
    props:
        {
        cardNumber: String,
        barcode: String,
      },
}
</script>

<style lang="scss" scoped>
.card-main__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  padding: 40px 30px;
  box-sizing: border-box;
  border-radius: 21px;
  background: url(../assets/images/card-background.webp);
  background-size: cover;
  background-position: center;
}
.title__wrapper {
  display: flex;
  align-items: center;
    .card-title {
      color: $highlight-color;
      font-weight: bold;
      font-size: $additional-fontsize;
    }
    .images {
      width: 6vw;
      margin-left: auto;
    }
}
.card-number__wrapper {
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
    .card-number {
      color: #ffffff;
      font-weight: normal;
      font-size: $additional-fontsize;
    }
    .barcode {
      width: 20vw;
      margin-left: auto;
    }
}
</style>