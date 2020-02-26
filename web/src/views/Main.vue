<template>
  <div>
    main
    <view-list :data="list"></view-list>
  </div>
</template>

<script>
export default {
  name: "ViewMain",
  data() {
    return {
      list: [
        {
          title: "再度暴跌！美股逢“黑色星期二”，道指两日狂泻1900点",
          cover: ["https://inews.gtimg.com/newsapp_ls/0/11374686004_294195/0"],
          author: "中新经纬",
          comment: 6000
        },
        {
          title: "再度暴跌！美股逢“黑色星期二”，道指两日狂泻1900点",
          cover: [
            "https://inews.gtimg.com/newsapp_ls/0/11374686004_294195/0",
            "https://inews.gtimg.com/newsapp_ls/0/11374686004_294195/0",
            "https://inews.gtimg.com/newsapp_ls/0/11374686004_294195/0"
          ],
          author: "中新经纬",
          comment: 6000
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
