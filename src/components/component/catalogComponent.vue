<template>
    <v-col cols="10" class="pa-0 mt-10">
        <v-row class="justify-center pa-0">
            <v-col cols="3" v-for="card in skatesCards" class="product-card">
                <div class="image-wrapper" @mouseenter="hoverCard = card.id" @mouseleave="hoverCard = null">
                    <img :src="hoverCard === card.id ? card.image2 : card.image1" class="image-container"
                        @click="goToCard(card.id)">
                </div>
                <v-container class="product-card-text">
                    <p>{{ card.name }}</p>
                </v-container>
            </v-col>
        </v-row>
    </v-col>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import skatesCards from '@/objects/skates';
import router from '@/router';

const hoverCard = ref<number | null>(null)

function goToCard(id: number) {
    router.push("/cardInfo/" + id)
}
</script>


<style scoped>
.image-container {
    min-width: 100%;
}

.btn-catalog {
    margin-left: 100vh;
    padding: 10px;
    border-radius: 10px;

}

.btn-catalog:hover {
    cursor: pointer;
    background-color: #f1f1f1;
}



img:hover {
    cursor: pointer;
}


img {
    min-height: 24vh;
    max-width: 30vh;
    background-size: cover;
    padding: 20px;
    background-color: #ececec;
    transform: scaleX(-1);




}




.product-card-text {
    text-align: center;
    margin: 0;



}
</style>