<template>
  <div class="header">
    <div class="wrap">
      <a class="logo"></a>
      <div class="search">
        <div class="search-box">
          <input type="text" id="search-inp" :placeholder="placeholderValue" @focus="clearHolderTimer()" @blur="continueHolderTimer()" />
          <button id="search-btn">
            <i class="iconfont">
              &#xe60c;
            </i>
          </button>
          <ul id="search-list"></ul>
        </div>
        <div class="hotwords">
          <a
            href="#"
            class="specHotWord"
            @mouseenter="clearSpecTimer()"
            @mouseleave="continueSpecTimer()"
            >{{ specHotWord }}</a
          >
          <a href="#" v-for="item in hotWordsList" :key="item.id">
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="settleUp">
        <i class="iconfont">&#xe747;</i>
        <i id="count">0</i>
        我的购物车
      </div>
      <ul class="navItems">
        <li><a href="#" class="red">秒杀</a></li>
        <li><a href="#" class="red">优惠券</a></li>
        <li><a href="#">PLUS会员</a></li>
        <li><a href="#">品牌闪购</a></li>
        <li><a href="#">拍卖</a></li>
        <li><a href="#">京东家电</a></li>
        <li><a href="#">京东超市</a></li>
        <li><a href="#">京东生鲜</a></li>
        <li><a href="#">京东国际</a></li>
        <li><a href="#">京东金融</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  搜索关键词
      placeholderValue: '',
      placeholderTimer: false,
      placeholderValueList: [
        {
          id: 1,
          text: '华硕平板电脑',
        },
        {
          id: 2,
          text: '芭比娃娃',
        },
        {
          id: 3,
          text: '魅族手机',
        },
        {
          id: 4,
          text: '美的饮水机',
        },
      ],
      // 热搜
      specHotWord: '',
      specTimer: false,
      specHotWordList: [
        {
          id: 1,
          text: '低至九块九',
        },
        {
          id: 2,
          text: '美妆送好礼',
        },
        {
          id: 3,
          text: '健康年货节',
        },
      ],
      hotWordsList: [
        {
          id: 1,
          text: '寒假阅读',
        },
        {
          id: 2,
          text: '家有宝贝',
        },
        {
          id: 3,
          text: '洗发水',
        },
        {
          id: 4,
          text: '国际好礼',
        },
        {
          id: 5,
          text: 'oled电视',
        },
        {
          id: 6,
          text: '低至9.9',
        },
        {
          id: 7,
          text: '白酒',
        },
      ],
    };
  },
  created() {
    this.specHotWordFunc();
    this.placeholderFunc();
  },
  methods: {
    // 搜索框关键词
    placeholderFunc() {
      if (!this.placeholderValue) {
        this.placeholderValue = this.placeholderValueList[0].text;
      }
      let count = 0;
      this.placeholderTimer = setInterval(() => {
        this.placeholderValue = this.placeholderValueList[++count % 4].text;
      }, 4000);
    },
    clearHolderTimer() {
      clearInterval(this.placeholderTimer);
    },
    continueHolderTimer() {
      this.placeholderFunc();
    },
    // 热搜
    specHotWordFunc() {
      if (!this.specHotWord) {
        this.specHotWord = this.specHotWordList[0].text;
      }
      let count = 0;
      this.specTimer = setInterval(() => {
        this.specHotWord = this.specHotWordList[++count % 3].text;
      }, 2000);
    },
    clearSpecTimer() {
      clearInterval(this.specTimer);
    },
    continueSpecTimer() {
      this.specHotWordFunc();
    },
  },
};
</script>

<style lang='less' scoped>
@import url("~@/style/default/header/searchBar/index.less");
</style>
