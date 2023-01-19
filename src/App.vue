<template>
  <div class="wrapper">
    <app-header />
    <main class="main">
      <app-intro />
      <app-services />
      <app-statistics/>
    </main>
    <footer>footer</footer>
  </div>
</template>
<script>

export default {
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
