<script setup lang="ts">


import router from '@/router';
import { useProductsStore } from '@/stores/dataBase';

const products = useProductsStore().AllCard

function goToCard(id: number) {
    router.push("/cardInfo/" + id)
}
</script>

<template>
    
        
        
<v-col cols="12">
        <v-container >

 
            <v-container class="d-flex card-list justify-center pa-0">
                <v-container  v-for="card in products" class="product-card" >
                    <v-container class="image-container" @click="goToCard(card.id)">
                        <img class="card-image" :src="card.image">
                    </v-container>

                    <v-container class="product-card-text">
                        <p>{{ card.name }}</p>

                    </v-container>

                </v-container>
            </v-container>

       </v-container>

       <v-container>
        

       </v-container>
    </v-col>



   
</template>

<style scoped>


.back-row {
background-color: #ffffff;
}

.card-list {
    flex-wrap: wrap;

}

.image-container {
    padding: 0;


}

.image-container:hover {
    cursor: pointer;
}

.card-image {
    min-height: 29vh;
    max-width: 27vh;
    background-size: cover;
    box-shadow: 1px 1px 1px 1px rgba(160, 160, 160, 0.1);

}

.img-thrasher {
   padding: 10vh;
    width: 60%;

    
}

.product-card {
    height: fit-content;
    padding: 0;
    width: 30vh;
    margin: 0;


}


.product-card-text {
    text-align: center;


}
</style>