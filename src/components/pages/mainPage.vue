<script setup lang="ts">

import DiscountOfferComponent from '../component/DiscountOfferComponent.vue';
import catalogComponent from '../component/catalogComponent.vue';
import ImageComponent from '../component/ImageComponent.vue';
// const int = 1
// const string = "1"
// const булкево = false
// const обьект = {"", ""}
// const массив = [{}, {}, {}]

</script>


<template>
    <v-col cols="12" class="pa-0">

        <v-row justify="center" class="back-row">

            <!-- карусель -->
            <ImageComponent></ImageComponent>

            <catalogComponent />

            <ImageComponent></ImageComponent>

            <catalogComponent />



        </v-row>
    </v-col>
</template>



<style scoped>
.back-row {
    background-color: #ffffffc2;
}
</style>