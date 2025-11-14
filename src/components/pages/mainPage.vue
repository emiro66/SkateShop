<script setup lang="ts">

</script>


<template>
    <v-row justify="center">
        <v-col cols="9">
            <h1 style="text-align: center;">
                Каталог
            </h1>


            <v-container class="d-flex justify-center">

                <v-col cols="2">
                    <v-container class="product-card">
                        <v-container style="background-image: url(@/assets/qqq.jpg);" class="image">
                            
                        </v-container>

                        <h1> Скейт </h1>
                        <p>120$</p>
                    </v-container>
                </v-col>

            </v-container>

<!-- background-image: url(../../assets/eee.jpg); -->

        </v-col>
    </v-row>

</template>



<style>
.q{

}
.w{

}
.e{
    
}

.image {
    background-image: url(@/assets/qqq.jpg);
    width: 200px;
    height: 200px;
    background-size: cover;
}
.product-card {

    height: 250px;
    max-width: 200px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
</style>