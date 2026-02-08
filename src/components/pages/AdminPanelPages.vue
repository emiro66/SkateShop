<script setup lang="ts">
import { ref } from 'vue';
import { useProductsStore } from '@/stores/dataBase';


const productToSend = ref({
    name: "",
    image: "",
    id: 0,
    text: ""
})

const addToArray = useProductsStore().addToArray(productToSend.value)

const products = useProductsStore().SaleCard



</script>


<template>

    <v-text-field rounded variant="solo-filled" label="Название" v-model="productToSend.name" > </v-text-field>
    <v-text-field rounded variant="solo-filled" label="Описание" v-model="productToSend.text"> </v-text-field>
    <v-text-field rounded variant="solo-filled" label="Картинка" v-model="productToSend.image"> </v-text-field>
    <v-btn @click="addToArray">Отправить</v-btn><br>


    {{ products }}


</template>


<style scoped>


</style>