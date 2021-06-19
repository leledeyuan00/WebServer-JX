<template>
  <div class="banner">
    <img src="../../../src/img/banner_en1080.png" style="width:1078px" />
    <span class="img-tip">
      <router-link to="/">中文</router-link>
      <span> | </span>
      <router-link to="/en">En</router-link>
    </span>
  </div>
  <!-- <div class="jumbotron">
  <div class="container">
    ...
  </div>
</div> -->
</template>

<script>
export default {};
</script>

<style>
.img-tip {
  position: absolute;
  z-index: 2;
  right: 10px;
  padding-top: 10px;
}
</style>
