<template>
  <section class="statistics">
    <div class="container">
      <section-title
        class="statistics__title"
        title="Designing Better Experience"
        subTitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
      />
      <div class="statistics__items">
        <div
          v-for="item in statistics"
          class="statistics__item item-statistics"
        >
          <img class="item-statistics__icon" :src="item.icon" />
          <h3 class="item-statistics__statistic">{{ item.statistic }}</h3>
          <div class="item-statistics__text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import icon01 from "@/assets/icon.svg";

export default {
  name: "app-statistics",
  data() {
    return {
      statistics: [
        { icon: icon01, statistic: "972 +", text: "Consumer Products" },
        { icon: icon01, statistic: "972 +", text: "Consumer Products" },
        { icon: icon01, statistic: "972 +", text: "Consumer Products" },
        { icon: icon01, statistic: "972 +", text: "Consumer Products" },
        { icon: icon01, statistic: "972 +", text: "Consumer Products" },
      ],
    };
  },
};
</script>
<style lang="sass">
@import "../_style"
.statistics
    padding: 80px 0
    &__title
        margin-bottom: 50px
    &__items
        display: grid
        gap: 38px
        width: 100%
        grid-template-columns: repeat(auto-fill, minmax(220px,1fr))

    .item-statistics
      display: flex
      flex-direction: column
      background-color: #fff
      padding: 30px 15px
      justify-content: center
      gap: 10px
      box-sizing: border-box
      transition: .2s
      box-shadow: 5px 5px 10px 10px rgba(#000,0.15)
      &:hover
        cursor: pointer
        transform: translateY(-10px)
      &__statistic
        text-align: center
        font-family: 'Montserrat'
        font-style: normal
        font-weight: 700
        font-size: 40px
        line-height: 57px
        letter-spacing: 0.2px
        color: #252B42
      &__text
        font-family: 'Montserrat'
        font-style: normal
        font-weight: 700
        font-size: 18px
        line-height: 24px
        text-align: center
        letter-spacing: 0.1px
      &__icon
        max-width: 50px
        margin: 0 auto
</style>
