<script setup lang="ts">
import slides from '@/objects/slides.ts'
</script>

<template>
  <v-carousel class="carousel-slides">
    <v-carousel-item :src="slide.image" cover v-for="slide in slides">
      <v-container class="ma-0 slide-container">
        <p class="text-slide text-center">{{ slide.text }}</p>
        <v-container class="button-slide">
          {{ slide.button.text }}
        </v-container>
      </v-container>

    </v-carousel-item>
  </v-carousel>
</template>

<style>

.v-carousel-item :deep(.v-responsive__content){
   min-height: 100vh;
}
.v-responsive__content{
  min-height: 100vh;
}

.carousel-slides {
   min-height: 100vh;
}

.v-carousel-item {
  min-height: 100vh;
}

.slide-container {
  min-width: 100%;
}

.button-slide:hover {
  background-color: rgb(255, 231, 199);
}

.button-slide {
  background-color: antiquewhite;
  width: fit-content;
  border-radius: 20px;
}


.text-slide {
  font-size: 50px;
  margin-top: 50px;
}
</style>