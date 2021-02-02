<template>
  <div class="brand-wrapper">
    <div class="seckill-brand">
      <div
        class="seckill-brand-item"
        v-for="brandItem in brandList"
        :key="brandItem.id"
      >
        <a href="#">
          <img :src="brandItem.brandSrc" alt="" />
        </a>
        <div class="item-info">
          <p class="item-info-title">善存钙尔奇秒杀</p>
          <p class="item-info-promo">抢199减100神券</p>
          <div class="item-info-action">大牌闪购<i class="iconfont"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandList: [
        {
          id: 1,
          brandSrc:
            "https://img11.360buyimg.com/seckillcms/s260x260_jfs/t1/162773/38/4578/108188/60112e4bEb7b5f20c/94962468e38e2f1f.jpg.webp",
        },
        {
          id: 2,
          brandSrc:
            "https://img20.360buyimg.com/seckillcms/s260x260_jfs/t1/156238/19/8426/220913/6016ef44E974b7546/34af8c9c9215dd7c.jpg.webp",
        },
      ],
    };
  },
  mounted() {
    this.createDom();
    this.autoToggle();
  },
  methods: {
    createDom() {
      const wrapper = document.getElementsByClassName("seckill-brand")[0];
      const children = document.getElementsByClassName("seckill-brand-item");
      const first = children[0];
      let newSeckillItem = first.cloneNode(true); //深度克隆
      wrapper.appendChild(newSeckillItem);
      wrapper.style.width = `${children.length * 190}px`;
    },
    brandToggle() {
      const wrapper = document.getElementsByClassName("seckill-brand")[0];
      const children = document.getElementsByClassName("seckill-brand-item");
      if (
          parseInt(getComputedStyle(wrapper).left) ==
          (children.length - 1) * -190
        ) {
          wrapper.style.transition = "none";
          wrapper.style.left = "0px";
          console.log(getComputedStyle(wrapper).left);
          wrapper.style.transition = "left 0.5s";
          wrapper.style.left =
            parseInt(getComputedStyle(wrapper).left) - 190 + "px";
        } else {
          wrapper.style.transition = "left 0.5s";
          wrapper.style.left =
            parseInt(getComputedStyle(wrapper).left) - 190 + "px";
        }
    },
    autoToggle() {
      setInterval(() => {
        this.brandToggle();
      }, 2000);
    },
  },
};
</script>

<style lang='less' scoped>
@import url('~@/style/index/seckill/seckillBrand.less');
</style>