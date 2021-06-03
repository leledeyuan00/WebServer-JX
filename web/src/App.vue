<template>
  <div id="app" class="body">
    <!-- <div class="banner bd-bottom">
      <Banner />
      <Navigator />
    </div>
    <div class="body-main"> -->

    <div el-container class="demo-box">
      <div el-aside width="200px">Aside</div>
      <div el-container direction="vertical">
        <div el-header>
          Header
          <Banner />
          <Navigator />
        </div>
        <div el-main>Main</div>
        <div el-footer>Footer</div>
      </div>
    </div>
    <router-view />
    <!-- </div> -->
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