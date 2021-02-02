<template>
  <div class="wrap">
    <div class="top-bar-wrap">
      <div class="geo">
        <geo />
      </div>
      <div class="my-nav">
        <my-nav />
      </div>
    </div>
  </div>
</template>

<script>
import geo from './geo.vue';
import myNav from './nav.vue';

export default {
  components: {
    geo,
    myNav,
  },
};
</script>

<style lang='less' scoped>
@import url("~@/style/default/header/topBar/index.less");
</style>
