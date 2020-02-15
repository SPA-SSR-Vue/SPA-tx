<template>
  <div>
    <el-button type="primary" size="small" @click="$router.push(`/${resource.name}/create`)">创建</el-button>
    <h3 class="table-title">{{this.resource.title}}列表</h3>
    <el-table :data="data" border stripe>
      <el-table-column
        v-for="(field,key) in fields"
        :prop="key"
        :key="key"
        :label="field.label"
        :width="field.width"
      ></el-table-column>
      <el-table-column prop="avatar" label="头像" width>
        <template v-slot="{row}">
          <img :src="row.avatar" alt="头像" style="height: 2rem" />
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="160">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/${resource.name}/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="changePageSize"
      @current-change="changeCurrentSize"
      :page-sizes="pagination.pageSizes"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resource: {
        name: "admin_users",
        title: "管理员账户"
      },
      data: [],
      fields: {
        _id: { label: "ID", width: "240" },
        username: { label: "用户名", width: "" }
      },
      pagination: {
        total: 0,
        pageSizes: [5, 10, 15, 20]
      },
      query: {
        skip: 0,
        limit: 5
      }
    };
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`/rest/${this.resource.name}`, {
        params: {
          query: this.query
        }
      });
      this.pagination.total = res.data.total;
      this.data = res.data.data;
    },

    async remove(id) {
      this.$confirm(
        `此操作将永久删除${this.resource.title}, 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(async () => {
          await this.$http.delete(`/rest/${this.resource.name}/${id}`);
          this.fetch();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    changePageSize(pageSize) {
      this.query.limit = pageSize;
      this.fetch();
    },

    changeCurrentSize(currentPage) {
      this.query.skip = (currentPage - 1) * this.query.limit;
      this.fetch();
    }
  },

  created() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
</style>