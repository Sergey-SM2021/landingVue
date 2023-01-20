<template>
    <section class="who-we-are">
        <div class="container">
            <section-title class="who-we-are__header" title="Who We Are"
                subTitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics " />
            <div class="who-we-are__body">
                <div class="who-we-are__media">
                    <img src="../assets/cover.jpg" />
                </div>
                <div class="who-we-are__content content-who-we-are">
                    <h2 class="content-who-we-are__title">Most trusted in our field</h2>
                    <p class="content-who-we-are__text">Most calendars are designed for teams. Slate
                        is designed for freelancers who want a
                        simple way to plan their schedule.
                    </p>
                    <div class="content-who-we-are__items">
                        <div v-for="item in items" class="content-who-we-are__item item-who-we-are-content">
                            <div class="item-who-we-are-content__icon">
                                <img src="@/assets/icn settings .icn-md.svg" />
                            </div>
                            <div class="item-who-we-are-content__body">
                                <div class="item-who-we-are-content__title">
                                    the quick fox jumps over the lazy dog
                                </div>
                                <div class="item-who-we-are-content__text">
                                    Things on a very small scale ...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import icon1 from "@/assets/icn settings .icn-md.svg";
export default {
    name: "app-who-we-are",
    data() {
        return {
            items: [{
                icon: icon1,
                title: "the quick fox jumps over the lazy dog",
                text: "Things on a very small scale ...",
            }, {
                icon: icon1,
                title: "the quick fox jumps over the lazy dog",
                text: "Things on a very small scale ...",
            }]
        }
    }
}
</script>
<style lang="sass">

@import "../_style.sass"

.who-we-are
    &__header
        margin-bottom: 100px
    &__body
        display: flex
        gap: 120px
        @media(max-width:$table)
            gap: 20px
        @media(max-width:700px)
            flex-direction: column
    &__content
        display: flex
        flex-direction: column
        flex: 1 1 auto
    &__media
        flex: 0 0 57% 
        padding-bottom: 442px
        position: relative
        @media(max-width:700px)
            flex: 0 0 100% 
        img
            height: 100%
            width: 100%
            object-fit: cover
            position: absolute
            inset: 0

.content-who-we-are
    &__title
        font-family: 'Montserrat'
        font-style: normal
        font-weight: 700
        font-size: 40px
        line-height: 57px
        letter-spacing: 0.2px
        color: $black
        margin-bottom: 10px
    &__text
        margin-bottom: 50px
    &__items
        display: flex
        flex-direction: column
        gap: 30px

.item-who-we-are-content
    display: flex
    gap: 21px
    &__title
        font-family: 'Montserrat'
        font-style: normal
        font-weight: 700
        font-size: 16px
        line-height: 24px
        letter-spacing: 0.1px
        color: $black
</style>