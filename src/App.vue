<script setup lang="ts">
import skHeader from './components/skHeader.vue';

import router from './router';

</script>


<template>
  <v-app>
    <vMain>
      <skHeader></skHeader>
      <RouterView/>
    </vMain>
  </v-app>
</template>

<style scoped>
</style>
