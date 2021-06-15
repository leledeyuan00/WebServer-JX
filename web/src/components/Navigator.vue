<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="navigator"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="./">首页</el-menu-item>
      <el-menu-item index="./research">科研项目</el-menu-item>
      <el-menu-item index="./people">实验室人员</el-menu-item>
      <el-menu-item index="./course">课程</el-menu-item>
      <el-menu-item index="./position">职位</el-menu-item>
      <el-menu-item index="./pubs">发表文章</el-menu-item>
      <el-menu-item index="./contact">联系我们</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.navigator {
}
</style>
