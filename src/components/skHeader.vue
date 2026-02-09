<script setup>
import router from '@/router';
import { useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue';

const { y } = useWindowScroll()
const dynamicStyle = ref('')

// Навигационные функции
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

watch(y, (newY) => {
  const moveDistance = newY / 2
  dynamicStyle.value = `transform: translateX(${moveDistance}px) ;`
})
</script>

<template>
  <v-app-bar :elevation="0">
    <v-row class="justify-center">
      <v-col cols="9" style="justify-content: space-between;" class="d-flex pa-0 px-16">
        <v-app-bar-title>
          <v-row class="pa-0">
            <v-col cols="1">
              <p @click="goToMain" class="title">Skate Shop</p>
            </v-col>
            <v-col>
              <v-icon class="ml-1" @click="goToGiftPage" color="red" :style="dynamicStyle"
                icon="mdi-skateboarding"></v-icon>
            </v-col>
          </v-row>
        </v-app-bar-title>

        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn @click="goToLike" icon="mdi-heart"></v-btn>
        <v-btn @click="goToCart" icon="mdi-cart-outline"></v-btn>

      </v-col>
    </v-row>

  </v-app-bar>
</template>

<style scoped>
.v-app-bar {
  justify-self: center;
}

.title:hover {
  cursor: pointer;
  background-color: #e6e6e6;
  border-radius: 10px;

}

.title {
  width: fit-content;
  padding: 5px;
  margin-right: 0;
  padding-right: 0;
}


.v-icon {
  transition: transform 0.1s ease-out;
  will-change: transform;
}
</style>