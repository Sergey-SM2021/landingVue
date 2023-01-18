<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <a href="/">Relvise</a>
        </div>
        <nav class="header__menu menu">
          <ul class="menu__list">
            <li class="menu__item" v-for="link in items">
              <a :href="link" class="menu__link">{{ link }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      items: ["Home", "Product", "Pricing", "Contact"],
    };
  },
};
</script>
<style lang="sass">
@import "../_style"
.header
    background-color: rgba($white, .5) 
    z-index: 50
    position: fixed
    inset: 0
    bottom: auto
    width: 100%
    height: 112px
    display: flex
    align-items: center
    @media (max-width:$mobile)
        height: 80px
    &__inner
        width: 100%
        display: flex
    &__logo
        align-items: center
        color: $black
        flex: 0 0 200px
        display: flex
        justify-content: flex-start
        @media (max-width:$table)
            flex: 0 0 100px
        a
            font-weight: 600
.menu
  &__list
    display: flex
    gap: 21px
    flex: 1 1 auto
    flex-wrap: wrap
  &__link
    transition: .5s
    &:hover
      color: $green
</style>
