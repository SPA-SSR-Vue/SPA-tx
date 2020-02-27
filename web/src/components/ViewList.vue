<template>
  <div class="bg-white mx-15">
    <div v-for="(item, i) in data" :key="i">
      <template v-if="item.cover.length === 1">
        <div class="news d-flex py-12 sep sep-bd-b">
          <div class="d-flex flex-1 flex-column jc-between">
            <div class="news-title fs-18 text-dark-6 mb-12 text-ellipsis-3 lh-26">{{item.title}}</div>
            <div class="news-info d-flex ai-center jc-start fs-12 text-gray-4 lh-16">
              <span class="text-ellipsis mr-9">{{item.author}}</span>
              <span class="text-ellipsis mr-9">{{item.comment}}评</span>
            </div>
          </div>
          <img class="ml-15" :src="item.cover[0]" alt />
        </div>
      </template>
      <template v-else>
        <div class="news pt-9 pb-6 sep sep-bd-b">
          <div class="news-title text-ellipsis-3 mb-6 fs-18 lh-26">{{item.title}}</div>
          <div class="mb-6 d-flex jc-between ai-center">
            <img v-for="(url, index) in item.cover" :key="index" :src="url" alt />
          </div>
          <div class="news-info d-flex text-gray-4 fs-12 lh-16">
            <span class="text-ellipsis mr-9">{{item.author}}</span>
            <span class="text-ellipsis mr-9">{{item.comment}}评</span>
            <span class="text-ellipsis mr-9">11小时前</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewList",
  props: {
    data: { type: Array }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.news {
  .news-info {
    height: 0.32rem;
    span {
      display: inline-block;
      max-width: 2rem;
      height: 0.32rem;
      line-height: 0.32rem;
    }
  }

  img {
    width: 2.22rem;
    height: 1.4666rem;
    border-radius: 0.08rem;
  }
}
</style>