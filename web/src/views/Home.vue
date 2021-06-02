<template>
  <div class="home container row">
    <!-- <el-row>
      <el-col :span="16"><div class="grid-content">123</div></el-col>
      <el-col :span="8"
        ><div class="grid-content"></div
      ></el-col>
    </el-row> -->
    <span class="body-left">主页</span>
    <span class="body-right"> 新闻</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style>

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
