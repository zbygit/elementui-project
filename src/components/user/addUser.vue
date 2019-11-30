<template>
  <div>
    <div class="handle-box">添加用户</div>

    <div style class="addBox">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="用户类型">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认添加</el-button>
        <el-button>取消添加</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  }
};
</script>
<style scoped>
.handle-box {
  margin: 20px;
  padding: 10px 0;
  background: #e7e7e7;
  border-left: 2px solid #cacdba;
  text-indent: 1%;
}
.addBox {
  margin: 20px;
  width: 400px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>