<script setup lang="ts">
import skatesCards from '@/objects/skates';
import Carousel from '@/components/component/CarouselPage.vue';
import CategoriesPage from '@/components/component/CategoriesPage.vue';
import CardInfoPage from './CardInfoPage.vue';
import router from '@/router';
import DiscountOffer from '../component/DiscountOffer.vue';
import catalogComponent from '../component/catalogComponent.vue';
// const int = 1
// const string = "1"
// const булкево = false
// const обьект = {"", ""}
// const массив = [{}, {}, {}]

</script>


<template>

    <v-row justify="center">
        <!-- карусель -->
        <Carousel></Carousel>
       <!-- категории -->
        <CategoriesPage></CategoriesPage>
        <DiscountOffer></DiscountOffer>

        <catalogComponent class="catalog"/>



    </v-row>

</template>



<style scoped>



.catalog{
    position: absolute;
    top: 80vh;
}




</style>