<template>
  <div>
    <h3 class="form-title">{{this.isNew?'新建':'编辑'}}{{resource.title}}</h3>
    <el-form :model="model" @submit.native.prevent="save" ref="form" label-width="80px">
      <el-form-item label="所属频道">
        <el-select v-model="model.channel" placeholder>
          <el-option
            v-for="channel in channels"
            :key="channel._id"
            :label="channel.name"
            :value="channel._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.banner.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" size="medium">保存</el-button>
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
        name: "banners",
        title: "频道横幅"
      },
      model: {
        banner: {
          name: "",
          items: []
        }
      },
      channels: []
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
      this.model = res.data;
    },

    async fetch() {
      const res = await this.$http.get(`/rest/channels`);
      this.channels = res.data.data;
    }
  },

  created() {
    this.id && this.fetchOne();
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
</style>