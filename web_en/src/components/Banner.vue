<template>
  <div class="banner">
    <img src="../../../src/img/banner_en1080.png" style="width:1078px" />
    <span class="img-tip">
      <span class="img-tip">
      <a :href="baseUrl">中文</a>
      <span> | </span>
      <a :href="baseUrl_en">En</a>
    </span>
  </div>
  <!-- <div class="jumbotron">
  <div class="container">
    ...
  </div>
</div> -->
</template>

<script>
export default {
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASEURL,
      baseUrl_en : process.env.VUE_APP_BASEURL || "/en/",
    };
  },
};
</script>

<style>
.img-tip {
  position: absolute;
  z-index: 2;
  right: 10px;
  padding-top: 10px;
}
</style>
