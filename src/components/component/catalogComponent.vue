<script setup lang="ts">
import skatesCards from '@/objects/skates';
import router from '@/router';

function goToCard(id: number) {
    router.push("/cardInfo/" + id)
}

function goToCatalog() {
    router.push("/catalog")
}

</script>

<template>
    <v-col cols="12">
            <v-container class="d-flex card-list justify-center pa-0">
                <v-container v-for="card in skatesCards" class="product-card">
                    <v-container class="image-container" @click="goToCard(card.id)">
                        <img :src="card.image">
                    </v-container>
                    <v-container class="product-card-text">
                        <p>{{ card.name }}</p>
                        <p>{{ card.text }}</p>

                    </v-container>

                </v-container>
            </v-container>

    </v-col>
</template>

<style scoped>


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

.product-card {
    height: fit-content;
    padding: 10px;
    width: 30vh;
    margin: 5px;



}


.product-card-text {
    text-align: center;
    margin: 0;
    padding: 5px;



}
</style>