<script setup lang="ts">
import slides from '@/objects/slides.ts'
</script>

<template>
    <v-carousel class="carousel-slides">
      <v-container v-for="slide in slides" class="product-card">
                    <v-container class="image-container">
                        <img :src="slide.image">
      </v-container>
    </v-container>
    </v-carousel>
</template>

<style>


.card-list{
    flex-wrap: wrap;

}

.product-card {

    max-width: 100%;
    max-height: 100%;

 

}

</style>