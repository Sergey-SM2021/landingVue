<template>
    <section class="sponsors">
        <div class="container">
            <div class="sponsors__items">
                <div class="sponsors__item" v-for="item in items">
                    <img src="" alt="sponsor">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:"app-sponsors",
    data(){
        return {
            items:["","","","","","",]
        }
    }
}
</script>
<style lang="sass">
    .sponsors

</style>