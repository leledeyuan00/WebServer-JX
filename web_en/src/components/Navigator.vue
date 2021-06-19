<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="navigator"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="./">Home</el-menu-item>
      <el-menu-item index="./research">Research</el-menu-item>
      <el-menu-item index="./people">People</el-menu-item>
      <el-menu-item index="./course">Courses</el-menu-item>
      <el-menu-item index="./position">Position</el-menu-item>
      <el-menu-item index="./pubs">Publication</el-menu-item>
      <el-menu-item index="./contact">Contact</el-menu-item>
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
