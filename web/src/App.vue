<template>
  <div id="app">
    <div class="banner border-bottom">
      <Banner />
      <Navigator />
    </div>
    <div class="body-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Navigator from "./components/Navigator.vue";
export default {
  components: {
    Banner,
    Navigator,
  },
};
</script>

<style></style>
