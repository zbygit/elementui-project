<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
      background-color="#F2F9FD"
      text-color="#1482BA"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">消息中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "mainbody",

  data() {
    return {
      activeIndex: "1",
      activeIndex2: "2"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-main {
  padding: 0;
}
.el-menu--horizontal > .el-menu-item {
  height: 57px;
}
</style>