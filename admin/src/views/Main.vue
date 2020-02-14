<template>
  <el-container>
    <el-aside width="180px">
      <el-menu router :default-active="$route.path" style="height: 100vh">
        <el-submenu v-for="(item, index) in menu.items" :index="`${index} + 1`" :key="index">
          <template slot="title">{{item.title}}</template>
          <el-menu-item-group
            v-for="(groupItem, groupItemIndex) in item.groupItems"
            :key="groupItemIndex"
          >
            <template slot="title">{{groupItem.title}}</template>
            <el-menu-item
              :index="subItem.path"
              v-for="(subItem, subItemIndex) in groupItem.items"
              :key="subItemIndex"
            >{{subItem.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <router-link to="/">
          <h2>{{resource.title}}</h2>
        </router-link>
        <el-button class="btn" type="primary" size="small" @click="logout">退出</el-button>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "ViewMain",
  data() {
    return {
      resource: {
        name: "main",
        title: "tx新闻后台管理系统"
      },
      menu: {
        items: [
          {
            title: "内容管理",
            groupItems: [
              {
                title: "频道",
                items: [
                  { name: "新建频道", path: "/channels/create" },
                  { name: "频道列表", path: "/channels/list" }
                ]
              },
              {
                title: "标签",
                items: [
                  { name: "新建标签", path: "/tags/create" },
                  { name: "标签列表", path: "/tags/list" }
                ]
              },
              {
                title: "banner",
                items: [
                  { name: "新建banner", path: "/banners/create" },
                  { name: "banner列表", path: "/banners/list" }
                ]
              },
              {
                title: "文章",
                items: [
                  { name: "新建文章", path: "/articles/create" },
                  { name: "文章列表", path: "/articles/list" }
                ]
              },
              {
                title: "评论",
                items: [
                  { name: "新建评论", path: "/comments/create" },
                  { name: "评论列表", path: "/comments/list" }
                ]
              }
            ]
          },
          {
            title: "账户管理",
            groupItems: [
              {
                title: "用户账户",
                items: [
                  { name: "新建账户", path: "/users/create" },
                  { name: "账户列表", path: "/users/list" }
                ]
              },
              {
                title: "作者账户",
                items: [
                  { name: "新建作者账户", path: "/authors/create" },
                  { name: "作者账户列表", path: "/authors/list" }
                ]
              },
              {
                title: "管理员账户",
                items: [
                  { name: "新建管理员账户", path: "/admin_users/create" },
                  { name: "管理员账户列表", path: "/admin_users/list" }
                ]
              }
            ]
          }
        ]
      }
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 60px !important;
  border-bottom: 1px solid #ddd;
  h2 {
    margin-top: 10px;
  }
  button {
    position: absolute;
    right: 80px;
    top: 10px;
  }
}
</style>