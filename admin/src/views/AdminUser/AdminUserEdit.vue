<template>
  <div>
    <h3 class="form-title">{{this.isNew?'新建':'编辑'}}{{resource.title}}</h3>
    <el-form :model="model" @submit.native.prevent="save" ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :headers="getAuthHeaders()"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="res => $set(model, 'avatar', res.url)"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      resource: {
        name: "admin_users",
        title: "管理员账户"
      },
      model: {
        username: "",
        avatar: ""
      }
    };
  },

  computed: {
    isNew() {
      return this.id ? false : true;
    }
  },

  methods: {
    async save() {
      const method = this.isNew ? "POST" : "PUT";
      const url = this.isNew
        ? `/rest/${this.resource.name}`
        : `/rest/${this.resource.name}/${this.id}`;
      await this.$http({
        method,
        url,
        data: this.model
      });
      this.$router.push(`/${this.resource.name}/list`);
    },

    async fetchOne() {
      const res = await this.$http.get(
        `/rest/${this.resource.name}/${this.id}`
      );
      this.model = res.data.data;
    }
  },

  created() {
    this.id && this.fetchOne();
  }
};
</script>

<style lang="scss" scoped>
</style>