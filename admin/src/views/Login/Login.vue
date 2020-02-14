<template>
  <div class="card">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header">
        <span>请先登录用户</span>
      </div>
      <div class="body">
        <el-form :model="model" ref="form" label-width="80px" @submit.native.prevent="login">
          <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="model.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    };
  },

  methods: {
    async login() {
      const res = await this.$http.post("/login", this.model);
      localStorage.setItem("token", res.data.token);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 30rem;
  height: 20rem;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .body {
    width: 80%;
    position: relative;
    top: 1rem;
  }
}
</style>