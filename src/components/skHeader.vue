<script setup lang="ts">
import router from '@/router';
import { useWindowScroll } from '@vueuse/core'
import { ref } from 'vue';

const { x, y } = useWindowScroll()

function goToLike() {
  router.push("/likes")
}

function goToCart() {
  router.push("/cart")
}

function goToMain() {
  router.push("/")
}

function goToGiftPage() {
  router.push("/gift")
}


const dynamicStyle = ref()

const yy = ref(y)

function dynamicScroll(){
  if(yy.value <= 3049){
    dynamicStyle.value = `margin-left: ${y / 2}px; transform: rotateZ(${y}deg)`
  }
}



</script>

<template>
  <!-- <v-app-bar :elevation="2" scroll-behavior="hide"> -->

  <v-app-bar :elevation="2">


    <v-app-bar-title>
      <v-row>
        <v-col cols=1>
          <p @click="goToMain" class="title">Skate Shop</p>
        </v-col>
        <v-col>
          <v-icon @click="goToGiftPage" color="red" :style="dynamicStyle"
            icon="mdi-skateboarding"></v-icon>
        </v-col>
      </v-row>
    </v-app-bar-title>
    {{ y }}
    <!-- <v-btn icon="mdi-skateboard"></v-btn> -->

    <template v-slot:append>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn @click="goToLike" icon="mdi-heart"></v-btn>

      <v-btn @click="goToCart" icon="mdi-cart-outline"></v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped>
.title {
  width: fit-content;
}
</style>