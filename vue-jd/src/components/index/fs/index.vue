<template>
  <div class="wrap">
      <my-menu />
      <my-slider />
      <my-user />
  </div>
</template>

<script>
import myMenu from './menu.vue';
import mySlider from './slider.vue';
import myUser from './user.vue';
export default {
  components: {
    myMenu,
    mySlider,
    myUser
  },
};
</script>

<style lang='less' scoped>
.wrap{
    display: flex;
    justify-content: space-between;
}
</style>
