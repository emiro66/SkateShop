<script setup lang="ts">
import slides from '@/objects/slides.ts'
import router from '@/router';


function goToForm() {
  router.push("/form")
}

</script>

<template>
  <v-carousel  hide-delimiter-background class="carousel-slides">
    <v-carousel-item :src="slide.image" cover v-for="slide in slides">
      <v-container class="ma-0 slide-container">
        <p class="text-slide text-center">{{ slide.text }}</p>
        <v-container   v-if="slide.button !==''" class="button-slide" @click="goToForm">
        {{ slide.button.text}} 
        </v-container>
      </v-container>

    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>


.slide-container {
  min-width: 100%;
}

.button-slide:hover {
  background-color: rgb(99, 136, 255);
  cursor:pointer;
}

.button-slide {
  background-color: rgb(189, 182, 255);
  width: fit-content;
  border-radius: 20px;
  margin-top: 120px;
  padding: 10px 70px;
  font-size: 20px;

}


.text-slide {
  font-size: 50px;
  margin-top: 100px;
  color: rgb(89, 100, 255);
}
</style>