<template>
  <div class="bg-white">
    <nav>
      <ul
        class="nav nav-channel d-flex flex-wrap mx-15 mb-3 pt-12 bg-white text-center text-dark-2"
      >
        <li class="nav-item" v-for="(item, index) in nav" :key="index">
          <router-link class="nav-link" :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </nav>

    <div class="news news-top mx-15">
      <div class="news-item py-12">
        <div class="news-title fs-18 text-dark-6 mb-3">习近平主持的这次重要会议 强调两件大事</div>
        <div class="news-info d-flex fs-12">
          <span class="text-red">置顶</span>
          <span class="text-gray-4">央视网</span>
          <span class="text-gray-4">12分钟前</span>
        </div>
      </div>
      <div class="news-item py-12">
        <div class="news-title fs-18 text-dark-6 mb-3">习近平主持的这次重要会议 强调两件大事</div>
        <div class="news-info d-flex fs-12">
          <span class="text-red">置顶</span>
          <span class="text-gray-4">央视网</span>
          <span class="text-gray-4">12分钟前</span>
        </div>
      </div>
    </div>

    <div class="swiper">
      <swiper ref="swiper" @slideChange="change">
        <swiper-slide style="padding: 12px 28px 4px 15px" v-for="n in 5" :key="n">
          <div class="news news-swiper text-white">
            <div class="news-item mx-12 pt-12 d-flex">
              <div class="fs-16 text-dark-6 d-flex flex-column jc-between">
                <div class="news-title flex-1">习近平主持的这次重要会议 强调两件大事 强调两件大事 强调两件大事</div>
                <div class="news-info d-flex fs-12">
                  <span class="text-red">置顶</span>
                  <span class="text-gray-4">央视网</span>
                  <span class="text-gray-4">12分钟前</span>
                </div>
              </div>
              <img src="http://inews.gtimg.com/newsapp_ls/0/11380830321_294195/0" alt />
            </div>

            <div class="news-item mx-12 pt-12 d-flex">
              <div class="fs-16 text-dark-6 d-flex flex-column jc-between">
                <div class="news-title flex-1">习近平主持的这次重要会议 强调两件大事 强调两件大事 强调两件大事</div>
                <div class="news-info d-flex fs-12">
                  <span class="text-red">置顶</span>
                  <span class="text-gray-4">央视网</span>
                  <span class="text-gray-4">12分钟前</span>
                </div>
              </div>
              <img src="http://inews.gtimg.com/newsapp_ls/0/11380830321_294195/0" alt />
            </div>

            <div class="news-item mx-12 pt-12 d-flex">
              <div class="fs-16 text-dark-6 d-flex flex-column jc-between">
                <div class="news-title flex-1">习近平主持的这次重要会议 强调两件大事 强调两件大事 强调两件大事</div>
                <div class="news-info d-flex fs-12">
                  <span class="text-red">置顶</span>
                  <span class="text-gray-4">央视网</span>
                  <span class="text-gray-4">12分钟前</span>
                </div>
              </div>
              <img src="http://inews.gtimg.com/newsapp_ls/0/11380830321_294195/0" alt />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div v-for="n in 20" :key="n">1</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: new Array(18).fill({}).map(() => ({ name: "新闻", path: "/" })),
      active: 1
    };
  },

  methods: {
    change() {
      this.active + 1;
      if (this.active === 5) {
        this.active = 0;
      }
      console.log(this.swiper1.activeIndex);
    }
  },

  computed: {
    swiper1() {
      return this.$refs.swiper.swiper;
    }
  },

  mounted() {
    console.log(this.swiper1);
    console.log(this.swiper1.activeIndex);
  }
};
</script>

<style lang="scss" scoped>
@import "./../../libs/scss/helpers";
.news {
  .news-item {
    @include sep(#f0f0f0);
  }
  .news-info {
    span {
      display: inline-block;
      height: 0.32rem;
      line-height: 0.32rem;
      margin-right: 0.18rem;
    }
  }
  &.news-top {
    .news-title {
      line-height: 0.52rem;
    }
  }

  &.news-swiper {
    border-radius: 0.06rem;
    box-shadow: 0px 1px 4px 0px rgba(5, 24, 74, 0.16);
    .news-item {
      // box-sizing: content-box;
    }
    .news-title {
      margin-bottom: 0.08rem;
    }
    .news-info {
      margin-bottom: 0.24rem;
    }
    img {
      width: 1.98rem;
      height: 1.3rem;
      margin-left: 4.348%;
      border-radius: 0.06rem;
    }
  }
}

.swiper-slide-active {
  margin-right: -32px;
}

.swiper-slide:nth-of-type(5) {
  margin-right: 0;
  padding: 12px 16px 4px 15px !important;
}
</style>