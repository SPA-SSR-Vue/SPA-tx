<template>
  <div class="bg-white">
    <div class="bg-white mx-15">
      <div v-for="(item, i) in data" :key="i">
        <div v-if="item.cover.length === 1" class="d-flex py-12 bb-1">
          <div class="d-flex flex-1 flex-column jc-between">
            <div class="fs-18 text-dark-6 mb-12 text-ellipsis-3">再度暴跌！美股逢“黑色星期二”，道指两日狂泻1900点</div>
            <div
              class="d-flex ai-center jc-start fs-12 text-gray-4 text-ellipsis-1"
              style="line-height: 16px"
            >
              <span class="mr-9" style="width: 60px">{{item.author}}</span>
              <span>{{item.comment}}评</span>
            </div>
          </div>
          <img
            class="ml-15"
            style="width:2.22rem;height:1.4666rem;border-radius: 4px"
            :src="item.cover[0]"
            alt
          />
        </div>
        <div v-else class="pt-9 pb-6 bb-1">
          <div class="mb-6 fs-18">{{item.title}}</div>
          <div class="mb-6 d-flex jc-between ai-center">
            <img
              v-for="(c, index) in item.cover"
              :key="index"
              style="width:2.22rem;height:1.4666rem;border-radius: 4px"
              :src="c"
              alt
            />
          </div>
          <div class="d-flex fs-12" style="line-height: 16px">
            <span class="mr-9">{{item.author}}</span>
            <span class="mr-9">{{item.comment}}评</span>
            <span class="mr-9">11小时前</span>
          </div>
        </div>
      </div>
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
</style>