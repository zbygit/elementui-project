<template>
  <div class="box">
    <el-container>
      <slide class="slide"></slide>
      <el-main>
        <mainbody class="main"></mainbody>

        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import slide from "./slide";
import mainbody from "./mainbody";
export default {
  name: "login",

  components: {
    slide,
    mainbody
  }
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 100px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.slide {
  height: 100%;
  border-right: 1px solid #e9eef3;
}
.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: auto;
  line-height: auto;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
.main {
  width: 100%;
}
</style>

