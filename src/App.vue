<script setup lang="ts">
import skHeader from './components/skHeader.vue';

import router from './router';

</script>



<template>

  <v-app>
    <vMain>
      <v-col cols="10">
        <skHeader></skHeader>
        <RouterView />
      </v-col>
    </vMain>
  </v-app>

</template>


<style scoped>
.v-col {
  margin: auto;
  height: 10000px;
}
</style>
