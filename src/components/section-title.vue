<template>
  <div class="section-title">
    <h2 class="section-title__title">{{ title }}</h2>
    <p class="section-title__sub-title">{{ subTitle }}</p>
  </div>
</template>
<script>
export default {
  name: "section-title",
  props: {
    title: String,
    subTitle: String,
  },
};
</script>
<style lang="sass">
@import "../_style"
.section-title
    display: flex
    flex-direction: column
    gap: 10px
    &__title
        font-family: 'Montserrat'
        font-style: normal
        font-weight: 700
        font-size: 40px
        line-height: 57px
        letter-spacing: 0.2px
        color: $black
        text-align: center
    &__sub-title
        font-family: 'Montserrat'
        font-style: normal
        font-weight: 500
        font-size: 14px
        line-height: 20px
        text-align: center
        letter-spacing: 0.2px
</style>
