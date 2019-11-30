<template>
  <div>
    <div class="handle-box">
      <el-button type="danger" icon="el-icon-delete" class="handle-del mr1">批量删除</el-button>
      <el-date-picker
        v-model="time"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <el-input placeholder="用户名" class="handle-input mr10"></el-input>

      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <el-table :data="tableData" :style="{width: '96%',marginLeft:'2%'}" border>
      <el-table-column prop="date" label="注册日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="money" label="工资" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="380"></el-table-column>

      <el-table-column label="头像" width="80">
        <template slot-scope="scope">
          <el-image class="imgb" :src="scope.row.thumb"></el-image>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="medium" type="primary" icon="el-icon-edit">编辑</el-button>
          <el-button size="medium" type="danger" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pages" background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>


<script>
import { table } from "../../api/index";
export default {
  created() {
    this.getTable();
  },
  data() {
    return {
      time: "0",
      tableData: []
    };
  },
  methods: {
    getTable() {
      table().then(res => {
        this.tableData = res.list;
      });
    }
  }
};
</script>
<style scoped>
.handle-box {
  margin: 2%;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.imgb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
.pages {
  text-align: right;
  margin-right: 2%;
  margin-top: 1%;
}
</style>