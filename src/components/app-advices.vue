<template>
  <section class="advices">
    <div class="container">
      <section-title
        class="advices__title"
        title="Practice Advice"
        subTitle="Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics "
      />
      <div class="advices__items">
        <div v-for="item in advices" class="advices__item item-advices">
          <div class="item-advices__content">
            <div class="item-advices__title">{{ item.title }}</div>
            <div class="item-advices__text">{{ item.text }}</div>
          </div>
          <img class="item-advices__media" :src="item.media" alt="media" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import media01 from "@/assets/cover(1).png";

export default {
  name: "app-advices",
  data() {
    return {
      advices: [
        {
          title: "A single source of truth",
          text: "Newton thought that light was made up of particles, but then it was discovered ",
          media: media01,
        },
        {
          title: "A single source of truth",
          text: "Newton thought that light was made up of particles, but then it was discovered ",
          media: media01,
        },
        {
          title: "A single source of truth",
          text: "Newton thought that light was made up of particles, but then it was discovered ",
          media: media01,
        },
        {
          title: "A single source of truth",
          text: "Newton thought that light was made up of particles, but then it was discovered ",
          media: media01,
        },
      ],
    };
  },
};
</script>
<style lang="sass">
.advices
  padding: 125px 0 80px 0
  &__title
    max-width: 470px
    margin: 0 auto
    margin-bottom: 45px
  &__items
    display: flex
    gap: 33px
    flex-wrap: wrap
    @media (max-width: 1050px)
      gap: 25px
    @media (max-width: 508px)
      gap: 33px

.item-advices
  box-sizing: border-box
  background-color: #fff
  width: calc((100% - (33px * 3)) / 4)
  @media (max-width: 1050px)
    width: calc((100% - (25px * 2)) / 3)
  @media (max-width: 764px)
    width: calc((100% - (20px * 2)) / 2)
  @media (max-width: 508px)
    width: calc(100%)
  &__content
    padding: 30px
    display: flex
    flex-direction: column
    gap: 15px
  &__title
    font-family: 'Montserrat'
    font-style: normal
    font-weight: 700
    font-size: 16px
    line-height: 24px
    letter-spacing: 0.1px
    color: #252B42
  &__text
    font-family: 'Montserrat'
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 20px
    letter-spacing: 0.2px
    color: #737373
  &__media
    max-width: 100%
    width: 100%
</style>
