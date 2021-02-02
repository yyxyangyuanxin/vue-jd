<template>
  <div class="wrap">
    <ul class="menu-list">
      <li
        class="menu-item"
        v-for="(menuItem, index) in menuList"
        :key="menuItem.id"
        @mouseenter="addMouseenter(index)"
        @mouseleave="addMouseleave(index)"
      >
        <div
          class="menu-lk-wrap"
          v-for="(navName, index) in menuItem.navNames"
          :key="index"
        >
          <a href="#">
            {{ navName }}
          </a>
          <span v-if="index !== menuItem.navNames.length - 1">/</span>
        </div>
        <div class="menu-content" v-show="menuItem.children.isShowDetail">
          <div class="cate-part">
            <div class="tabs-wrap">
              <div
                class="tabs"
                v-for="tab in menuItem.children.tabList"
                :key="tab.id"
              >
                <a href="#">
                  {{ tab.tabName }}
                  <i class="iconfont">&#xe626;</i>
                </a>
              </div>
            </div>
            <div class="cate-detail">
              <dl
                class="cate-detail-item"
                v-for="detailItem in menuItem.children.detailList"
                :key="detailItem.id"
              >
                <dt>
                  <a href="#">
                    {{ detailItem.detailTit }}
                  </a>
                  <i class="iconfont">&#xe626;</i>
                </dt>
                <dd v-for="children in detailItem.children" :key="children.id">
                  <a href="#" target="_blank">
                    {{ children.detailName }}
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          navNames: ['家用电器'],
          children: {
            isShowDetail: false,
            tabList: [
              {
                id: 1,
                tabName: '家电馆',
              },
              {
                id: 2,
                tabName: '家电专卖店',
              },
              {
                id: 3,
                tabName: '家电服务',
              },
              {
                id: 4,
                tabName: '企业采购',
              },
              {
                id: 5,
                tabName: '商用电器',
              },
              {
                id: 6,
                tabName: '高价回收',
              },
            ],
            detailList: [
              {
                id: 1,
                detailTit: '电视',
                children: [
                  {
                    id: 1,
                    detailName: '家电馆',
                  },
                  {
                    id: 2,
                    detailName: '家电专卖店',
                  },
                  {
                    id: 3,
                    detailName: '家电服务',
                  },
                  {
                    id: 4,
                    detailName: '企业采购',
                  },
                  {
                    id: 5,
                    detailName: '商用电器',
                  },
                  {
                    id: 6,
                    detailName: '高价回收',
                  },
                ],
              },
              {
                detailTit: '手机通讯',
                children: [
                  {
                    id: 1,
                    detailName: '手机',
                  },
                  {
                    id: 2,
                    detailName: '游戏手机',
                  },
                  {
                    id: 3,
                    detailName: '5G手机',
                  },
                  {
                    id: 4,
                    detailName: '拍照手机',
                  },
                  {
                    id: 5,
                    detailName: '全面屏手机',
                  },
                  {
                    id: 6,
                    detailName: '老人机',
                  },
                  {
                    id: 7,
                    detailName: '对讲机',
                  },
                  {
                    id: 8,
                    detailName: '以旧换新',
                  },
                ],
              },
            ],
          },
        },
        {
          id: 2,
          navNames: ['手机', '运营商', '数码'],
          children: {
            isShowDetail: false,
            tabList: [
              {
                id: 1,
                tabName: '玩3C',
              },
              {
                id: 2,
                tabName: '网上频道',
              },
              {
                id: 3,
                tabName: '网上营业厅',
              },
              {
                id: 4,
                tabName: '配件频道',
              },
              {
                id: 5,
                tabName: '智能数码',
              },
              {
                id: 6,
                tabName: '影像Club',
              },
            ],
            detailList: [
              {
                detailTit: '手机通讯',
                children: [
                  {
                    id: 1,
                    detailName: '手机',
                  },
                  {
                    id: 2,
                    detailName: '游戏手机',
                  },
                  {
                    id: 3,
                    detailName: '5G手机',
                  },
                  {
                    id: 4,
                    detailName: '拍照手机',
                  },
                  {
                    id: 5,
                    detailName: '全面屏手机',
                  },
                  {
                    id: 6,
                    detailName: '老人机',
                  },
                  {
                    id: 7,
                    detailName: '对讲机',
                  },
                  {
                    id: 8,
                    detailName: '以旧换新',
                  },
                ],
              },
            ],
          },
        },
        {
          id: 3,
          navNames: ['电脑', '办公'],
          children: {
            isShowDetail: false,
            tabList: [
              {
                id: 1,
                tabName: '家电馆',
              },
              {
                id: 2,
                tabName: '家电专卖店',
              },
              {
                id: 3,
                tabName: '家电服务',
              },
              {
                id: 4,
                tabName: '企业采购',
              },
              {
                id: 5,
                tabName: '商用电器',
              },
              {
                id: 6,
                tabName: '高价回收',
              },
            ],
            detailList: [
              {
                detailTit: '电视',
                children: [
                  {
                    id: 1,
                    detailName: '家电馆',
                  },
                  {
                    id: 2,
                    detailName: '家电专卖店',
                  },
                  {
                    id: 3,
                    detailName: '家电服务',
                  },
                  {
                    id: 4,
                    detailName: '企业采购',
                  },
                  {
                    id: 5,
                    detailName: '商用电器',
                  },
                  {
                    id: 6,
                    detailName: '高价回收',
                  },
                ],
              },
              {
                detailTit: '电视',
                children: [
                  {
                    id: 1,
                    detailName: '家电馆',
                  },
                  {
                    id: 2,
                    detailName: '家电专卖店',
                  },
                  {
                    id: 3,
                    detailName: '家电服务',
                  },
                  {
                    id: 4,
                    detailName: '企业采购',
                  },
                  {
                    id: 5,
                    detailName: '商用电器',
                  },
                  {
                    id: 6,
                    detailName: '高价回收',
                  },
                ],
              },
            ],
          },
        },
        {
          id: 4,
          navNames: ['家居', '家具', '家装', '厨具'],
          children: {
            isShowDetail: false,
            tabList: [
              {
                id: 1,
                tabName: '家电馆',
              },
              {
                id: 2,
                tabName: '家电专卖店',
              },
              {
                id: 3,
                tabName: '家电服务',
              },
              {
                id: 4,
                tabName: '企业采购',
              },
              {
                id: 5,
                tabName: '商用电器',
              },
              {
                id: 6,
                tabName: '高价回收',
              },
            ],
            detailList: [
              {
                detailTit: '电视',
                children: [
                  {
                    id: 1,
                    detailName: '家电馆',
                  },
                  {
                    id: 2,
                    detailName: '家电专卖店',
                  },
                  {
                    id: 3,
                    detailName: '家电服务',
                  },
                  {
                    id: 4,
                    detailName: '企业采购',
                  },
                  {
                    id: 5,
                    detailName: '商用电器',
                  },
                  {
                    id: 6,
                    detailName: '高价回收',
                  },
                ],
              },
            ],
          },
        },
        {
          id: 5,
          navNames: ['家用电器'],
          children: {
            isShowDetail: false,
            tabList: [
              {
                id: 1,
                tabName: '家电馆',
              },
              {
                id: 2,
                tabName: '家电专卖店',
              },
              {
                id: 3,
                tabName: '家电服务',
              },
              {
                id: 4,
                tabName: '企业采购',
              },
              {
                id: 5,
                tabName: '商用电器',
              },
              {
                id: 6,
                tabName: '高价回收',
              },
            ],
            detailList: [
              {
                id: 1,
                detailTit: '电视',
                children: [
                  {
                    id: 1,
                    detailName: '家电馆',
                  },
                  {
                    id: 2,
                    detailName: '家电专卖店',
                  },
                  {
                    id: 3,
                    detailName: '家电服务',
                  },
                  {
                    id: 4,
                    detailName: '企业采购',
                  },
                  {
                    id: 5,
                    detailName: '商用电器',
                  },
                  {
                    id: 6,
                    detailName: '高价回收',
                  },
                ],
              },
              {
                detailTit: '手机通讯',
                children: [
                  {
                    id: 1,
                    detailName: '手机',
                  },
                  {
                    id: 2,
                    detailName: '游戏手机',
                  },
                  {
                    id: 3,
                    detailName: '5G手机',
                  },
                  {
                    id: 4,
                    detailName: '拍照手机',
                  },
                  {
                    id: 5,
                    detailName: '全面屏手机',
                  },
                  {
                    id: 6,
                    detailName: '老人机',
                  },
                  {
                    id: 7,
                    detailName: '对讲机',
                  },
                  {
                    id: 8,
                    detailName: '以旧换新',
                  },
                ],
              },
            ],
          },
        },
        {
          id: 6,
          navNames: ['家居', '家具', '家装', '厨具'],
          children: {
            isShowDetail: false,
            tabList: [
              {
                id: 1,
                tabName: '家电馆',
              },
              {
                id: 2,
                tabName: '家电专卖店',
              },
              {
                id: 3,
                tabName: '家电服务',
              },
              {
                id: 4,
                tabName: '企业采购',
              },
              {
                id: 5,
                tabName: '商用电器',
              },
              {
                id: 6,
                tabName: '高价回收',
              },
            ],
            detailList: [
              {
                detailTit: '电视',
                children: [
                  {
                    id: 1,
                    detailName: '家电馆',
                  },
                  {
                    id: 2,
                    detailName: '家电专卖店',
                  },
                  {
                    id: 3,
                    detailName: '家电服务',
                  },
                  {
                    id: 4,
                    detailName: '企业采购',
                  },
                  {
                    id: 5,
                    detailName: '商用电器',
                  },
                  {
                    id: 6,
                    detailName: '高价回收',
                  },
                ],
              },
            ],
          },
        },
      ],
    };
  },
  methods: {
    addMouseenter(index) {
      this.menuList[index].children.isShowDetail = true;
    },
    addMouseleave(index) {
      this.menuList[index].children.isShowDetail = false;
    }
  },
};
</script>

<style lang='less' scoped>
@import url("~@/style/index/fs/menu.less");
</style>
