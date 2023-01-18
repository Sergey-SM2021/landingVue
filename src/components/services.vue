<template>
  <div class="services">
    <div class="container">
      <div class="services__items">
        <div class="services__item item-services" v-for="item in services">
          <div class="item-services__icon">
            <img src="@/assets/Vector.svg" />
          </div>
          <div class="item-services__title">
            <h3>Environmental Consulting</h3>
          </div>
          <div class="item-services__text">
            <p>We focus on ergonomics and meeting you where you work.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      services: ["", "", ""],
    };
  },
};
</script>
<style lang="sass">
@import '../_style'

.services
  &__items
    position: relative
    margin-top: -100px
    display: flex
    gap: 30px
    flex-wrap: wrap
    @media (max-width:$table)
      gap: 15px
.item-services
  &:hover
    cursor: pointer
    transform: translateY(-30px)
  transition: .4s
  box-shadow: -1px 1px 10px 1px rgba($black, .5)
  background-color: $white
  box-sizing: border-box
  padding: 35px
  flex: 0 0 calc((100% - 60px) / 3)
  &__title
    color: $black
  @media (max-width:$table)
    flex: 1 0 calc((100% - 30px) / 2)
  @media (max-width:$mobile)
    flex: 1 0 calc(100% - 30px)
</style>
