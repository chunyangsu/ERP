<template>
  <div>
    <!-- 搜索栏 -->
    <div>
      <el-button style="margin-right: 20px;" type="primary" size="mini" icon="el-icon-plus">添加</el-button>
    </div>
    <!-- 列表 -->
    <div>
      <el-table ref="proTable" :data="list" :tree-props="{children: 'children', hasChildren: 'hasChildren'}" default-expand-all row-key="id" size="mini" border style="width: 100%">
        <!-- 产品名称 -->
        <el-table-column label="产品名称" min-width="150">
          <template slot-scope="scope">
            <span :style="scope.row.style">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <!-- 产品品牌 -->
        <el-table-column label="产品品牌" min-width="150">
          <template slot-scope="scope">
            <span :style="scope.row.style">{{ scope.row.brand }}</span>
          </template>
        </el-table-column>
        <!-- 产品型号 -->
        <el-table-column label="型号" min-width="150">
          <template slot-scope="scope">
            <span :style="scope.row.style">{{ scope.row.model }}</span>
          </template>
        </el-table-column>
        <!-- 产品价格 -->
        <el-table-column label="产品价格" width="120">
          <template slot-scope="scope">
            <span :style="scope.row.style">{{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <!-- 产品备注 -->
        <el-table-column label="产品备注" width="150">
          <template slot-scope="scope">
            <span :style="scope.row.style">产品备注</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductManage', // 产品管理
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取备注(评论)组件数据
    async getData() {
      const response = await this.$http.get('/products/getProductsList')
      const { data, meta } = response.data
      if (meta.status === 200) {
        this.list = data.products
        this.list.forEach(item => {
          if (item.children && item.children.length > 0) {
            item.style = 'color: red'
            item.children.forEach(val => {
              val.style = 'color: blue'
            })
          }
        })
      }
    }
  }
}
</script>

<style>
</style>
