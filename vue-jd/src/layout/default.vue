<template>
  <div class="default-wrap">
    <header>
      <top-bar class="top-bar" />
      <search-bar />
    </header>
    <!-- <div class="main">
      <router-view />
    </div> -->
    <footer>
      <!-- <my-footer /> -->
    </footer>
  </div>
</template>

<script>
import topBar from '@/components/header/topBar/index.vue';
import searchBar from '@/components/header/searchBar/index.vue';
// import myFooter from "@/components/footer/index.vue";
export default {
  components: {
    topBar,
    searchBar,
    // myFooter
  },
};
</script>

<style lang='less'>
// .default-wrap{
//   header{
//     display: flex;
//     flex-direction: column;
//   }
// }
</style>
