<template>
  <div>
    <h3 class="form-title">{{this.isNew?'新建':'编辑'}}{{resource.title}}</h3>
    <el-form :model="model" @submit.native.prevent="save" ref="form" label-width="60px">
      <el-form-item label="用户">
        <el-select v-model="model.user">
          <el-option
            v-for="user in users"
            :key="user._id"
            :label="user.username"
            :value="user._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容">
        <vue-editor v-model="model.content"></vue-editor>
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
        name: "comments",
        title: "评论"
      },
      model: {
        content: ""
      },
      users: []
    };
  },

  computed: {
    isNew() {
      return this.id ? false : true;
    },
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
      const res = await this.$http.get(`/rest/${this.resource.name}/${this.id}`);
      this.model = res.data.data;
    },

    async fetchUsers() {
      const res = await this.$http.get("/rest/users");
      this.users = res.data.data;
    }
  },

  created() {
    this.id && this.fetchOne();
    this.fetchUsers();
  }
};
</script>

<style lang="scss" scoped>
</style>