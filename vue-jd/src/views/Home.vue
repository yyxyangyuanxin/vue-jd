<template>
  <div class="home">
    <header>
      <my-default />
    </header>
    <main>
      <my-Fs />
      <my-seckill />
    </main>
  </div>
</template>

<script>
import myDefault from '@/layout/default.vue';
import myFs from '@/components/index/fs/index.vue';
import mySeckill from '@/components/index/seckill/index.vue';

export default {
  components: {
    myDefault,
    myFs,
    mySeckill
  },
};
</script>
<style lang='less' scoped>
.home{
  main{
    width: 990px;
    margin: 10px auto 0 auto;
  }
}
</style>
