<script setup lang="ts">
import skatesCards from '@/objects/skates';
import router from '@/router';

function goToCard(id: number) {
    router.push("/cardInfo/" + id)
}

</script>

<template>
    <v-col cols="9">
        <h1 style="text-align: center">
            Каталог
        </h1>
        <v-container class="d-flex card-list justify-center">

            <v-container @click="goToCard(card.id)" v-for="card in skatesCards" class="product-card">
                <v-container class="image-container">
                    <img :src="card.image">
                </v-container>
                <v-container class="product-card-text">
                    <h3>{{ card.name }}</h3>
                    <p>{{ card.price + "$" }}</p>
                </v-container>
            </v-container>

        </v-container>


    </v-col>
</template>

<style scoped>
.card-list {
    flex-wrap: wrap;

}

.image-container {
    padding: 0;
    margin-top: 15px;
}

img {
    min-height: 220px;
    max-width: 200px;
    background-size: cover;
    max-height: 250px;


}

.product-card {
    padding: 0px 16px 16px;
    height: fit-content;
    max-width: 230px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    margin: 30px;

}

.product-card-text {
    padding: 5px 20px;
    text-align: center;
    background-color: rgb(243, 243, 243);
    margin-top: 20px;
    border-radius: 10px;

}
</style>