<template>
  <section class="intro">
    <div class="container">
      <div class="intro__inner">
        <div class="intro__content">
          <div class="intro__title">Finance and Consultancy Solution</div>
          <div class="intro__text">
            We know how large objects will act, but things on a small scale.
          </div>
          <div class="intro__actions">
            <button class="intro__btn_orange">Get Quote Now</button>
            <button class="intro__btn_green">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    <div class="intro__background">
      <img src="../assets/cover.png" />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="sass">

@import "../_style.sass"

.intro
  height: 100vh
  &__background
    position: absolute
    inset: 0
    @media (max-width:$mobile)
      opacity: .5
    img
      width: 100%
      object-fit: cover
      height: 100%
      object-position: right
  &__inner
      position: relative
      padding: 184px 0 190px 0
      z-index: 2
      width: 100%
  &__title
      font-family: 'Montserrat'
      font-style: normal
      font-weight: 800
      font-size: 58px
      line-height: 80px
      font-weight: bold
      color: $black
      @media (max-width:$mobile)
        font-size: 38px
        line-height: 50px
  &__text
      font-family: 'Montserrat'
      font-style: normal
      font-weight: 500
      font-size: 20px
      line-height: 30px
      letter-spacing: 0.2px
      color: $gray
      @media (max-width:$table)
        color: rgba($black,.8)
  &__actions
      display: flex
      gap: 10px
      flex-wrap: wrap
  &__content
      display: flex
      gap: 35px
      justify-content: center
      flex-direction: column
      height: 100%
      max-width: 450px
      width: 100%
      @media (max-width:$mobile)
        max-width: 100%
  &__btn_orange
      background-color: $orange
      padding: 10px 36px
      border: none
      color: #fff
      border-radius: 37px
      transition: .25s
      font-family: 'Montserrat'
      font-style: normal
      font-weight: 700
      font-size: 14px
      line-height: 28px
      text-align: center
      letter-spacing: 0.2px
      @media (max-width: $mobile)
        flex: 0 1 70%
      @media (max-width: 500px)
        flex: 0 1 100%
      &:hover
          cursor: pointer
          background-color: rgba($orange, 0.9 )
          transform: translate(0,-10px)
  &__btn_green
      background-color: transparent
      padding: 10px 36px
      border: $green 1px solid
      color: $green
      border-radius: 37px
      transition: 1s
      font-family: 'Montserrat'
      font-style: normal
      font-weight: 700
      font-size: 14px
      line-height: 28px
      text-align: center
      letter-spacing: 0.2px
      @media (max-width: $mobile)
        flex: 0 1 90%
      @media (max-width: 500px)
        flex: 0 1 100%
      &:hover
        cursor: pointer
        background-color: $green
        color: $white
</style>