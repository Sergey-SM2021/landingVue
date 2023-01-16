<template>
  <div class="wrapper">
    <app-header />
  </div>
</template>
<script>
import appHeader from "@/components/header.vue";
export default {
  components: { appHeader },
};
</script>
<style lang="scss">
@import "./_style.sass";

.wrapper {
  min-height: 100vh;
  height: 100vh;
  width: 100%;
}

html,
body {
  margin: 0;
  padding: 0;
  color: $gray;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
