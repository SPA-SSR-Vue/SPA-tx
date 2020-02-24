<template>
  <div>
    <h3 class="form-title">{{this.isNew?'新建':'编辑'}}{{resource.title}}</h3>
    <el-form :model="model" @submit.native.prevent="save" ref="form" label-width="80px">
      <el-form-item label="所属频道">
        <el-select v-model="model.channels" multiple filterable>
          <el-option
            v-for="channel in channels"
            :key="channel._id"
            :label="channel.name"
            :value="channel._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属标签">
        <el-select v-model="model.tags" multiple filterable>
          <el-option v-for="tag in tags" :key="tag._id" :label="tag.name" :value="tag._id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="作者">
        <el-select v-model="model.author" filterable>
          <el-option
            v-for="author in authors"
            :key="author._id"
            :label="author.username"
            :value="author._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
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
        name: "articles",
        title: "文章"
      },
      model: {
        name: "",
        content: ""
      },
      authors: [],
      channels: [],
      tags: []
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
    },

    async fetchAuthors() {
      const res = await this.$http.get("/rest/authors");
      this.authors = res.data.data;
    },

    async fetchChannels() {
      const res = await this.$http.get("/rest/channels");
      this.channels = res.data.data;
    },

    async fetchTags() {
      const res = await this.$http.get("/rest/tags");
      this.tags = res.data.data;
    }
  },

  created() {
    this.id && this.fetchOne();
    this.fetchAuthors();
    this.fetchChannels();
    this.fetchTags();
  }
};
</script>

<style lang="scss" scoped>
</style>