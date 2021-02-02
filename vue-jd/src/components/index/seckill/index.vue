<template>
  <div class="wrapper">
    <div class="seckill">
      <count-down />
      <seckill-list />
      <seckill-brand />
    </div>
  </div>
</template>

<script>
import countDown from './countdown';
import seckillList from './seckillList.vue';
import seckillBrand from './seckillBrand.vue';
export default {
  components: {
    countDown,
    seckillList,
    seckillBrand
  },
};
</script>

<style lang='less' scoped>
@import url('~@/style/index/seckill/index.less');
</style>