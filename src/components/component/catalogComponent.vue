<script setup lang="ts">
import skatesCards from '@/objects/skates';
import router from '@/router';

function goToCard(id: number) {
    router.push("/cardInfo/" + id)
}

function goToCatalog() {
    router.push("/catalog")
}

function changeImage(first_image: string, second_image: string,) {

}

</script>

<template>
    <v-col cols="10" class="pa-0 mt-10">
        <v-row class="justify-center pa-0">
            <v-col cols="3" v-for="card in skatesCards" class="product-card">
                <img :src="card.image" class="image-container" @click="goToCard(card.id)">
                <v-container class="product-card-text">
                    <p>{{ card.name }}</p>
                    <p>{{ card.text }}</p>
                </v-container>

            </v-col>
        </v-row>

    </v-col>
</template>

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