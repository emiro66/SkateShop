<script setup lang="ts">
import productCards from '@/objects/products.ts';
import { refAutoReset } from '@vueuse/core';
import { useRoute } from 'vue-router';

const route = useRoute()

const qqq = findObject(Number(route.params.id))

function findObject(id: number) {

    let localState = <Array<Object>>[]
    productCards.forEach(localObject => {
        if (localObject.id == id) {
            localState.push(localObject)
        }
    })

    return localState

}






</script>

<template>



    <v-container class="d-flex card-list justify-center pa-0">
        <v-container v-for="card in qqq" class="product-card">
            <v-container class="image-container">
                <img class="card-image" :src="card.image1">
            </v-container>

            <v-container class="product-card-text">
                <p>{{ card.name }}</p>

            </v-container>

        </v-container>
    </v-container>

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
