<template>
  <div class="wrapper">
    <app-header />
    <main class="main">
      <app-intro />
      <app-services />
    </main>
    <footer>footer</footer>
  </div>
</template>
<script>
import appHeader from "@/components/header.vue";
import appIntro from "@/components/intro.vue";
import appServices from "@/components/services.vue";

export default {
  components: { appHeader, appServices, appIntro },
};
</script>
<style lang="sass">
@import "./_style.sass"

.wrapper
  display: flex
  flex-direction: column
  min-height: 100vh
  height: 100%
  width: 100%

html,
body
  margin: 0
  padding: 0
  color: $gray

ul,
li
  padding: 0
  margin: 0
  list-style: none

a
  color: inherit
  text-decoration: none

.main
  flex: 1 1 100%
</style>
