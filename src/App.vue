<script setup lang="ts">
import skHeader from './components/skHeader.vue';
import Likes from './components/pages/likePage.vue';
import router from './router';
import Carousel from './components/pages/CarouselPage.vue';
</script>


<template>
  <v-app>
    <vMain>
      <skHeader></skHeader>
      <Carousel></Carousel>
      <RouterView/>
    </vMain>
  </v-app>
</template>

<style scoped>
</style>
