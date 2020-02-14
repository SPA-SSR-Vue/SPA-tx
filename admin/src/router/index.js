import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login/Login.vue'

import ChannelEdit from './../views/Channel/ChannelEdit.vue';
import ChannelList from './../views/Channel/ChannelList.vue';

import TagEdit from './../views/Tag/TagEdit.vue';
import TagList from './../views/Tag/TagList.vue';

import BannerEdit from './../views/Banner/BannerEdit.vue';
import BannerList from './../views/Banner/BannerList.vue';

import ArticleEdit from './../views/Article/ArticleEdit.vue';
import ArticleList from './../views/Article/ArticleList.vue';

import CommentEdit from './../views/Comment/CommentEdit.vue';
import CommentList from './../views/Comment/CommentList.vue';

import UserEdit from './../views/User/UserEdit.vue';
import UserList from './../views/User/UserList.vue';

import AuthorEdit from './../views/Author/AuthorEdit.vue';
import AuthorList from './../views/Author/AuthorList.vue';

import AdminUserEdit from './../views/AdminUser/AdminUserEdit.vue';
import AdminUserList from './../views/AdminUser/AdminUserList.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login, meta: { isPublic: true } },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/channels/create', component: ChannelEdit },
      { path: '/channels/edit/:id', component: ChannelEdit, props: true },
      { path: '/channels/list', component: ChannelList },

      { path: '/tags/create', component: TagEdit },
      { path: '/tags/edit/:id', component: TagEdit, props: true },
      { path: '/tags/list', component: TagList },

      { path: '/banners/create', component: BannerEdit },
      { path: '/banners/edit/:id', component: BannerEdit, props: true },
      { path: '/banners/list', component: BannerList },

      { path: '/articles/create', component: ArticleEdit },
      { path: '/articles/edit/:id', component: ArticleEdit, props: true },
      { path: '/articles/list', component: ArticleList },

      { path: '/comments/create', component: CommentEdit },
      { path: '/comments/edit/:id', component: CommentEdit, props: true },
      { path: '/comments/list', component: CommentList },

      { path: '/users/create', component: UserEdit },
      { path: '/users/edit/:id', component: UserEdit, props: true },
      { path: '/users/list', component: UserList },

      { path: '/authors/create', component: AuthorEdit },
      { path: '/authors/edit/:id', component: AuthorEdit, props: true },
      { path: '/authors/list', component: AuthorList },

      { path: '/admin_users/create', component: AdminUserEdit },
      { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true },
      { path: '/admin_users/list', component: AdminUserList },
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    router.push('/login')
    return
  }
  next()
})

export default router
