<template>
  <div
    class="wrapper"
    @mouseenter="stopSwiperAuto()"
    @mouseleave="startSwiperAuto()"
  >
    <div class="img-list">
      <a href="#" class="item" v-for="imgItem in imgList" :key="imgItem.id">
        <img :src="imgItem.src" alt="" />
      </a>
    </div>
    <button class="btn leftBtn" @click="leftToggle()">&lt;</button>
    <button class="btn rightBtn" @click="rightToggle()">&gt;</button>
    <div class="dot-list">
      <span
        :class="{ 'dot-item': true, active: index === currentIndex }"
        v-for="(item, index) in imgLength"
        :key="index"
        @mouseenter="dotToggle(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          id: 1,
          src: "https://img10.360buyimg.com/babel/s1180x940_jfs/t1/160497/12/5142/150854/601361fdE99377b14/4e6aaec06b41b6b3.jpg.webp"
        },
        {
          id: 2,
          src: "https://img10.360buyimg.com/pop/s1180x940_jfs/t1/163492/39/160/81879/5fed568cEa5df921f/be2754d3513ed1da.jpg.webp"
        },
        {
          id: 3,
          src: "https://img11.360buyimg.com/da/s1180x940_jfs/t1/138110/18/10765/77374/5f875c28E1f34fb93/2080d855f1997288.jpg.webp"
        },
        {
          id: 4,
          src: "https://imgcps.jd.com/ling4/100011199522/57K-6Ie054mp576O5Lu35LyY/57K-5b2p5LiN5piT6ZSZ6L-H/p-5bd8253082acdd181d02f9ff/d12b5d46/cr/s/q.jpg"
        },
        {
          id: 5,
          src: "https://img12.360buyimg.com/pop/s1180x940_jfs/t1/144195/26/3653/75468/5f190a1cE55bc9d86/13a865559a7b247e.jpg.webp"
        },
        {
          id: 6,
          src: "https://img14.360buyimg.com/pop/s1180x940_jfs/t1/155688/30/6702/71434/60068c7dE07e89a65/1d66c152c14a8bef.jpg.webp"
        },
        {
          id: 7,
          src: "https://img11.360buyimg.com/da/s1180x940_jfs/t1/138110/18/10765/77374/5f875c28E1f34fb93/2080d855f1997288.jpg.webp"
        },
        {
          id: 8,
          src: "https://img10.360buyimg.com/pop/s1180x940_jfs/t1/157346/18/1636/64520/5ffd5fcaE52664b84/5faae7edd7cc86ef.jpg.webp"
        },
      ],
      timer: "",
      imgItems: document.getElementsByClassName("item"),
      count: 0,
      imgLength: 0,
      currentIndex: 0,
    };
  },
  mounted() {
    this.imgLength = +this.imgItems.length;
    this.swiperAutoToggle();
  },
  methods: {
    swiperToggle() {
      for (let i = 0; i < this.imgItems.length; i++) {
        this.imgItems[i].style.opacity = "0";
      }
      this.count = this.count % this.imgItems.length;
      this.currentIndex = this.count;
      this.imgItems[this.count].style.opacity = "1";
    },
    swiperAutoToggle() {
      this.timer = setInterval(() => {
        this.count++;
        this.swiperToggle();
      }, 2000);
    },
    stopSwiperAuto() {
      clearInterval(this.timer);
    },
    startSwiperAuto() {
      this.swiperAutoToggle();
    },
    leftToggle() {
      if (this.count !== 0) {
        this.count--;
        this.swiperToggle();
      } else {
        this.count = 3;
        this.swiperToggle();
      }
    },
    rightToggle() {
      this.count++;
      this.swiperToggle();
    },
    dotToggle(index){
        this.count = index;
        this.swiperToggle();
    }
  },
};
</script>

<style lang='less' scoped>
@import url('~@/style/index/fs/slider.less');
</style>
