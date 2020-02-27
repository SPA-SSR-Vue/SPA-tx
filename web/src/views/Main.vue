<template>
  <div>
    <header class="header">
      <ul class="nav nav-top d-flex ai-start pt-15 pr-12 pl-15">
        <li class="nav-item flex-1">
          <router-link class="nav-link sprite sprite-logo" to="/"></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/user">
            <img class="user mr-9" src="./../assets/images/user_default_icon.svg" alt />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/channel">
            <img
              class="more"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjE4OCAzLjc1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAgMTQuNjI1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAtNy4zMTNIMi44MTNhLjE4OC4xODggMCAwIDAtLjE4OC4xODh2MS41YzAgLjEwMy4wODQuMTg4LjE4OC4xODhoMTguMzc1YS4xODguMTg4IDAgMCAwIC4xODctLjE4OHYtMS41YS4xODguMTg4IDAgMCAwLS4xODgtLjE4OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=="
              alt="更多频道"
            />
          </router-link>
        </li>
      </ul>
    </header>
    <nav class="sticky">
      <ul class="nav nav-home d-flex ai-center jc-around fs-18 text-white bg-blue-3">
        <li
          class="nav-item"
          :class="[{active: $route.path === item.path}]"
          v-for="(item,index) in nav"
          :key="index"
        >
          <router-link class="nav-link" :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "ViewMain",
  data() {
    return {
      nav: [
        { name: "要闻", path: "/" },
        { name: "抗肺炎", path: "/v" },
        { name: "热点", path: "/hot" },
        { name: "视频", path: "/video" }
      ],

      list: [
        {
          title: "14省份下调应急响应级别，广东为何又“抢先”？",
          cover: ["https://inews.gtimg.com/newsapp_ls/0/11376917584_294195/0"],
          author: "每日经济行文",
          comment: 10
        },
        {
          title: "新冠病毒为何没在印度爆发？印度人免疫力太强？答案可能令你意外",
          cover: [
            "https://inews.gtimg.com/newsapp_ls/0/11378415555_294195/0",
            "https://inews.gtimg.com/newsapp_ls/0/11378415559_294195/0",
            "https://inews.gtimg.com/newsapp_ls/0/11378415552_294195/0"
          ],
          author: "药师方键",
          comment: 35
        },
        {
          title: "14省份下调应急响应级别，广东为何又“抢先”？",
          cover: ["https://inews.gtimg.com/newsapp_ls/0/11376917584_294195/0"],
          author: "每日经济行文",
          comment: 10
        },
        {
          title: "新冠病毒为何没在印度爆发？印度人免疫力太强？答案可能令你意外",
          cover: [
            "https://inews.gtimg.com/newsapp_ls/0/11378415555_294195/0",
            "https://inews.gtimg.com/newsapp_ls/0/11378415559_294195/0",
            "https://inews.gtimg.com/newsapp_ls/0/11378415552_294195/0"
          ],
          author: "药师方键",
          comment: 35
        },
        {
          title: "14省份下调应急响应级别，广东为何又“抢先”？",
          cover: ["https://inews.gtimg.com/newsapp_ls/0/11376917584_294195/0"],
          author: "每日经济行文",
          comment: 10
        },
        {
          title: "新冠病毒为何没在印度爆发？印度人免疫力太强？答案可能令你意外",
          cover: [
            "https://inews.gtimg.com/newsapp_ls/0/11378415555_294195/0",
            "https://inews.gtimg.com/newsapp_ls/0/11378415559_294195/0",
            "https://inews.gtimg.com/newsapp_ls/0/11378415552_294195/0"
          ],
          author: "药师方键",
          comment: 35
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./../libs/scss/helpers";
.header {
  height: 3rem;
  margin-bottom: -105px;
  background: linear-gradient(
    176deg,
    rgba(76, 126, 255, 1) 0%,
    rgba(100, 174, 252, 1) 100%
  );
}

.sep {
  &.sep-card {
    display: inline-block;
    padding-bottom: 10px;
    @include sep("", 13px, 20px, blue, 3px, 0, auto, auto, 0deg);
  }
}
</style>
