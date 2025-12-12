<script setup lang="ts">
import slides from '@/objects/slides.ts'
</script>

<template>
    <v-carousel class="carousel-slides">
      <v-carousel-item :src="slide.image" cover v-for="slide in slides">
        <p class="text-slide text-center">{{ slide.text}}</p>
        <v-btn class="button-slide " v-if="slide.button !=='' " >  {{ slide.button}}</v-btn>

      </v-carousel-item>
    </v-carousel>
</template>

<style>
  .button-slide button{
    margin: auto;
  }


.text-slide {
  font-size: 50px;
  margin-top: 50px;
}

</style>