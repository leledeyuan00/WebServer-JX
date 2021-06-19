<template>
  <div id="app" class="body">
    <Banner />
    <Navigator />

    <router-view />
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
