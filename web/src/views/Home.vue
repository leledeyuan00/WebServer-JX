<template>
  <div class="pt-2 pl-2 pr-2">
    <el-row :gutter="20">
      <el-col :span="16"
        ><div class="grid-content ">
          <HomeContext/></div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content "><News /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import News from "./News.vue";
import HomeContext from "./HomeContext.vue";
export default {
  components: {
    News,
    HomeContext,
  },
};
</script>

<style></style>
