<template>
  <div class="wrapper">
    <div class="user">
      <div class="user-inner">
        <div class="user_avatar">
          <a href="#">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </a>
        </div>
        <div class="user_show">
          <p>Hi~欢迎逛京东！</p>
          <p>
            <a href="#">登录</a>
            <a href="#">注册</a>
          </p>
        </div>
      </div>
      <div class="user_profit">
        <a class="user_profit_lk" href="#">新人福利</a
        ><a class="user_profit_lk user_profit_lk_plus" href="#">PLUS会员</a>
      </div>
    </div>
    <div class="news">
      <div class="news2">
        <div class="news_hd" aria-label="京东快报">
          <h5 class="news_tit">京东快报</h5>
          <a href="#" class="news_more"
            >更多 <i class="iconfont">&#xe626;</i></a
          >
        </div>
        <ul class="news_list">
          <li
            class="news_item news_item__recommend"
            v-for="newsItem in newsLink"
            :key="newsItem.id"
          >
            <a href="#" class="news_link">
              <span class="news_tag">
                {{ newsItem.newsTag }}
              </span>
              {{ newsItem.newsContainer }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="service">
      <div class="service-entry">
        <ul class="J_tab_head service_list">
          <li
            :class="{'service_item': true, 'service_frame': service.isShowServicePop, 'mod_tab_head_item': true}"
            v-for="(service, index) in serviceList"
            :key="service.id"
            @mouseenter="serviceExpend(service.isShowServicePop, index)"
          >
            <a href="#" class="service_lk">
              <span class="service_corner" v-if="service.isServiceCorner">
                <i class="service_corner_txt">惠</i>
                <i class="service_corner_ico"></i>
              </span>
              <i class="service_ico service_ico_huafei">
                <img class="service_ico_img" :src="service.iconSrc" />
                <img
                  class="service_ico_img_hover"
                  :src="service.iconHoverSrc"
                />
              </i>
              <span class="service_txt">
                {{ service.serviseText }}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="service_pop">
        pop
        <div class="close" @click="closeServicePop"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsLink: [
        {
          id: 1,
          newsTag: "热评",
          newsContainer: "到底是奶粉不好还是人有问题？看这几个问题就知道！",
        },
        {
          id: 2,
          newsTag: "热评",
          newsContainer: "360°无死角吸尘，清洁力秒杀大牌渣渣",
        },
        {
          id: 3,
          newsTag: "热门",
          newsContainer: "污渍难洗？久洗不新？全新蓝月亮麻烦安排一下",
        },
        {
          id: 4,
          newsTag: "最新",
          newsContainer: "荣耀Magic 2为什么会火? 原因令人深思！",
        },
      ],
      serviceList: [
        {
          id: 1,
          iconSrc:
            "//m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "话费",
          isShowServicePop: true,
          isServiceCorner: false
        },
        {
          id: 2,
          iconSrc:
            "//m.360buyimg.com/babel/jfs/t1/36478/38/5384/2901/5cbf065aEb0c60a12/afb4399323fe3b76.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "机票",
          isShowServicePop: true,
          isServiceCorner: false
        },
        {
          id: 3,
          iconSrc:
            "//m.360buyimg.com/babel/jfs/t1/31069/34/14642/979/5cbf0665Ec7dc8223/5fee386254dd2ebc.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "酒店",
          isShowServicePop: true,
          isServiceCorner: true
        },
        {
          id: 4,
          iconSrc:
            "//m.360buyimg.com/babel/jfs/t1/32403/22/14829/3699/5cbf0674E04723693/caa83ce9b881cd24.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "游戏",
          isShowServicePop: true,
          isServiceCorner: false
        },
        {
          id: 5,
          iconSrc:
            "http://m.360buyimg.com/babel/jfs/t1/39418/35/2029/3048/5cbf06bbE9a6e2beb/6a9b204b0a4cc3d0.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "加油卡",
          isShowServicePop: false,
          isServiceCorner: false
        },
        {
          id: 6,
          iconSrc:
            "http://m.360buyimg.com/babel/jfs/t1/31847/11/14820/1581/5cbf09bdE07a1e79c/1281c9340ef15c3e.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "火车票",
          isShowServicePop: false,
          isServiceCorner: false
        },
        {
          id: 7,
          iconSrc:
            "http://m.360buyimg.com/babel/jfs/t1/33078/37/6694/1685/5cbf09d0E5cea6165/693857001bfb3b17.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "众筹",
          isShowServicePop: false,
          isServiceCorner: false
        },
        {
          id: 8,
          iconSrc:
            "http://m.360buyimg.com/babel/jfs/t1/35979/1/3099/3447/5cbf09e4E90c0b4f4/e632d50688935da6.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "理财",
          isShowServicePop: false,
          isServiceCorner: false
        },
        {
          id: 9,
          iconSrc:
            "http://m.360buyimg.com/babel/jfs/t1/35663/12/5436/1443/5cbf0a13E614f5bb0/6ab7c7eb7caa4656.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "白条",
          isShowServicePop: false,
          isServiceCorner: false
        },
        {
          id: 10,
          iconSrc:
            "http://m.360buyimg.com/babel/jfs/t1/34018/19/6744/3066/5cbf09a9Eef05e8bd/6a08fe38fa0f8143.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "电影票",
          isShowServicePop: false,
          isServiceCorner: false
        },
        {
          id: 11,
          iconSrc:
            "http://m.360buyimg.com/babel/jfs/t1/74010/31/656/1821/5cedfd1dE574a6d39/21ed5b49bcde9067.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "企业购",
          isShowServicePop: false,
          isServiceCorner: false
        },
        {
          id: 12,
          iconSrc:
            "http://m.360buyimg.com/babel/jfs/t1/35852/40/5378/815/5cbf09f9E660e7e71/18b5679ed16e6a91.png",
          iconHoverSrc:
            "//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png",
          serviseText: "礼品卡",
          isShowServicePop: false,
          isServiceCorner: false
        },
      ],
    };
  },
  methods: {
    serviceExpend(isShowServicePop, index) {
      if (!isShowServicePop) {
        return;
      }
      this.$(".service").addClass("service-expend");
      this.$(".service_frame").removeClass("service_frame_on");
      document.getElementsByClassName("service_item")[index].classList.add("service_frame_on");
      document.getElementsByClassName("service_corner")[0].style.display = "none";
    },
    closeServicePop() {
      this.$(".service").removeClass("service-expend");
      this.$(".service_frame_on").removeClass("service_frame_on");
      document.getElementsByClassName("service_corner")[0].style.display = "block";
    },
  },
};
</script>

<style lang='less' scoped>
@import url("~@/style/index/fs/user.less");
</style>