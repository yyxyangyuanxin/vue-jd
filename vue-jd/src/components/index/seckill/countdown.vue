<template>
  <div class="seckill-countdown">
    <a
      class="seckill-countdown"
      href="//miaosha.jd.com"
      target="_blank"
      clstag="h|keycount|core|seckill_a"
    >
      <div class="countdown-title">京东秒杀</div>
      <div>
        <div class="countdown-desc"><strong>10:00</strong>点场 倒计时</div>
        <span class="timmer countdown-main"
          ><span class="timmer__unit timmer__unit--hour">{{ hour }}</span
          ><span class="timmer__unit timmer__unit--minute">{{ minute }}</span
          ><span class="timmer__unit timmer__unit--second">{{
            second
          }}</span></span
        >
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
    };
  },
  created() {
    const seckillTime = new Date("2021-02-3 12:00:00").getTime();
    const seckillTimer = setInterval(() => {
      const newTime = new Date().getTime();
      if (seckillTime - newTime > 0) {
        this.hour = Math.floor((seckillTime - newTime) / 1000 / 60 / 60);
        this.minute = Math.floor(
          (seckillTime - newTime) / 1000 / 60 - this.hour * 60
        );
        this.second = Math.floor(
          (seckillTime - newTime) / 1000 -
            this.hour * 60 * 60 -
            this.minute * 60
        );
      } else {
        clearInterval(seckillTimer);
      }
    }, 1000);
  },
};
</script>

<style lang='less' scoped>
@import url('~@/style/index/seckill/countdown.less');
</style>