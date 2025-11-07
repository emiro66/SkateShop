<script setup lang="ts">
import router from '@/router';
import { useWindowScroll } from '@vueuse/core'
import { ref } from 'vue';

const { x, y } = useWindowScroll()

function goToLike () {
  router.push("/likes")
}

function goToCart () {
  router.push("/cart")
}

function goToMain () {
  router.push("/")
}

// const skatePosition = ref()
</script>

<template>
  <!-- <v-app-bar :elevation="2" scroll-behavior="hide"> -->
  
  <v-app-bar :elevation="2">
  

    <v-app-bar-title @click="goToMain">
      Skate Shop
      <v-icon color="red" :style="`margin-left: ${y/2}px; transform: rotateZ(${y}deg)`" icon="mdi-skateboarding"></v-icon>
    </v-app-bar-title>

    <!-- <v-btn icon="mdi-skateboard"></v-btn> -->

    <template v-slot:append>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn @click="goToLike" icon="mdi-heart"></v-btn>

      <v-btn @click="goToCart" icon="mdi-cart-outline"></v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped></style>