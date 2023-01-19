<template>
  <section class="statistics">
    <div class="container">
      <div class="statistics__inner">
        <div class="statistics__title">
          <h2>Designing Better Experience</h2>
        </div>
        <div class="statistics__text">
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
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
    padding-top: 80px
    background-color: rgba(#000,.05)
    &__title
        text-align: center
        color:$black
        font-family: 'Montserrat'
        font-style: normal
        font-weight: 700
        font-size: 30px
        line-height: 57px
        letter-spacing: 0.2px
        margin-bottom: 20px
    &__text
        max-width: 80%
        width: 100%
        text-align: center
        margin: 0 auto
        font-family: 'Montserrat'
        font-style: normal
        font-weight: 500
        font-size: 16px
        line-height: 20px
        text-align: center
        letter-spacing: 0.2px
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
