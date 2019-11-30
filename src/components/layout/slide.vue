<template>
  <div>
    <el-aside width="250px" height="100%">
      <el-menu default-active="chart" router   unique-opened>
        <el-menu-item class="webSiteName">后台管理系统</el-menu-item>
        <el-menu-item index="chart">
          <i class="el-icon-s-data"></i> 图表管理
        </el-menu-item>

        <el-submenu index="table">
          <template slot="title">
            <i class="el-icon-user"></i>用户管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="table">用户列表</el-menu-item>
            <el-menu-item index="addUser">添加用户</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

                <el-submenu index="order">
          <template slot="title">
            <i class="el-icon-tickets"></i>订单管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="order">用户列表</el-menu-item>
            <el-menu-item index="addUser">添加用户</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  name: "slide"
};
</script>
<style scoped>
.webSiteName {
  line-height: 56px;
  background-color: #1482ba;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 20px;
  font-family: "PingFang SC";
  text-align: center;
}
.el-menu {
  border-right: none;
}
</style>