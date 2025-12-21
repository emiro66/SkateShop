<script setup lang="ts">
import router from '@/router';


function goToCatalog() {
  router.push("/catalog")
}
</script>

<template>
  <v-container class="sticky-header">
    <v-app-bar class="sticky-app-bar">
 
      <v-toolbar-title class="toolbar-button" @click="goToCatalog">Джинсы</v-toolbar-title>
      <v-toolbar-title class="toolbar-button" @click="goToCatalog">Скейтборд</v-toolbar-title>
      <v-toolbar-title class="toolbar-button" @click="goToCatalog">Сумки</v-toolbar-title>
      <v-toolbar-title class="toolbar-button" @click="goToCatalog">Зипки</v-toolbar-title>


  </v-app-bar>
  </v-container>
</template>

<style scoped>
.sticky-app-bar {

  position: sticky !important;
  top: 0 !important;
  z-index: 1500 !important;


}

:deep(.v-toolbar) {
  position: sticky !important;
  top: 0 !important;
}

:deep(.v-app-bar) {
  position: sticky !important;
  top: 50px !important;
  z-index: 1000 !important;
  padding: 0;
}

.sticky-header {
  padding: 0;
  min-width: 100%;
}

.toolbar-button {
  padding-left: 9%;


}

.toolbar-button :hover {
  cursor: pointer;
}
</style>