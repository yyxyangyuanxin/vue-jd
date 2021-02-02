<template>
  <div class="seckill-wrapper">
    <div class="seckill-list">
      <div
        class="seckill-wrapper-item"
        v-for="(seckill, index) in seckillList"
        :key="index"
      >
        <a
          target="_blank"
          class="slider_item seckill-item slider_active"
          href="#"
          v-for="children in seckill"
          :key="children.id"
          :title="seckill.seckillTit"
        >
          <div class="lazyimg lazyimg_loaded seckill-item__image">
            <img :src="children.seckillSrc" class="lazyimg_img" />
          </div>
          <h4 class="seckill-item-title">
            {{ children.seckillTit }}
          </h4>
          <div class="seckill-item__price">
            <span class="price-miaosha"
              ><i>¥</i>
              <span>
                {{ children.priceMiaosha }}
              </span>
            </span>
            <span class="price-origin"
              ><i>¥</i>
              <span>
                {{ children.priceOrigin }}
              </span>
            </span>
          </div>
        </a>
      </div>
    </div>
    <button class="btn leftBtn" @click="leftToggle()">&lt;</button>
    <button class="btn rightBtn" @click="rightToggle()">&gt;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seckillList: [
        [
          {
            id: 1,
            seckillSrc:
              "https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/163803/35/1069/117920/5ff42e24Ed15cf59b/28d25fc366015356.jpg.webp",
            seckillTit: "vivo iQOO Neo3 8G+128G 直降400",
            priceMiaosha: 198.0,
            priceOrigin: 559.0,
          },
          {
            id: 2,
            seckillSrc:
              "https://img20.360buyimg.com/seckillcms/s280x280_jfs/t1/170562/25/3410/123577/6006bee5E05997a81/b54331c98fe781d0.jpg.webp",
            seckillTit: "vivo iQOO Neo3 8G+128G 直降400",
            priceMiaosha: 198.0,
            priceOrigin: 559.0,
          },
          {
            id: 3,
            seckillSrc:
              "https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/140074/27/1407/291408/5ef32315E593545cd/b6bf0c8c19f038d9.jpg.webp",
            seckillTit: "vivo iQOO Neo3 8G+128G 直降400",
            priceMiaosha: 198.0,
            priceOrigin: 559.0,
          },
        ],
        [
          {
            id: 4,
            seckillSrc:
              "https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/140074/27/1407/291408/5ef32315E593545cd/b6bf0c8c19f038d9.jpg.webp",
            seckillTit: "vivo iQOO Neo3 8G+128G 直降400",
            priceMiaosha: 198.0,
            priceOrigin: 559.0,
          },
          {
            id: 5,
            seckillSrc:
              "https://img20.360buyimg.com/seckillcms/s280x280_jfs/t1/170562/25/3410/123577/6006bee5E05997a81/b54331c98fe781d0.jpg.webp",
            seckillTit: "vivo iQOO Neo3 8G+128G 直降400",
            priceMiaosha: 198.0,
            priceOrigin: 559.0,
          },
          {
            id: 6,
            seckillSrc:
              "https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/163803/35/1069/117920/5ff42e24Ed15cf59b/28d25fc366015356.jpg.webp",
            seckillTit: "vivo iQOO Neo3 8G+128G 直降400",
            priceMiaosha: 198.0,
            priceOrigin: 559.0,
          },
        ],
      ],
    };
  },
  mounted() {
    this.createDom();
  },
  methods: {
    createDom() {
      const wrapper = document.getElementsByClassName("seckill-list")[0];
      const children = document.getElementsByClassName("seckill-wrapper-item");
      const first = children[0],
        last = children[children.length - 1];
      let newSeckillItem = first.cloneNode(true); //深度克隆
      console.log(wrapper);
      wrapper.appendChild(newSeckillItem);
      newSeckillItem = last.cloneNode(true);
      wrapper.insertBefore(newSeckillItem, first);
      wrapper.style.width = `${children.length * 610}px`;
    },
    toggle(direction) {
      const wrapper = document.getElementsByClassName("seckill-list")[0];
      const children = document.getElementsByClassName("seckill-wrapper-item");
      if (direction === "right") {
        if (
          parseInt(getComputedStyle(wrapper).left) ==
          (children.length - 1) * -610
        ) {
          wrapper.style.transition = "none";
          wrapper.style.left = "-610px";
          console.log(getComputedStyle(wrapper).left);
          wrapper.style.transition = "left 0.5s";
          wrapper.style.left =
            parseInt(getComputedStyle(wrapper).left) - 610 + "px";
        } else {
          wrapper.style.transition = "left 0.5s";
          wrapper.style.left =
            parseInt(getComputedStyle(wrapper).left) - 610 + "px";
        }
      } else {
        if (parseInt(getComputedStyle(wrapper).left) == -610) {
          wrapper.style.transition = "none";
          wrapper.style.left = `-${(children.length - 1) * 610}px`;
          console.log(getComputedStyle(wrapper).left);
          wrapper.style.transition = "left 0.5s";
          wrapper.style.left =
            parseInt(getComputedStyle(wrapper).left) + 610 + "px";
        } else {
          wrapper.style.transition = "left 0.5s";
          wrapper.style.left =
            parseInt(getComputedStyle(wrapper).left) + 610 + "px";
        }
      }
    },
    leftToggle() {
      this.toggle("left");
    },
    rightToggle() {
      this.toggle("right");
    },
  },
};
</script>

<style lang='less' scoped>
@import url('~@/style/index/seckill/seckillList.less');
</style>