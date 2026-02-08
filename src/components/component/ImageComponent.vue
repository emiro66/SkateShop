<script setup lang="ts">
import router from '@/router';


function goToForm() {
  router.push("/form")
}

</script>

<template>

  <v-col cols="15" class="pa-0">

    <v-container class="imeg-container position-relative pa-0 d-flex justify-center align-center" >
      <img src="@/assets/skaters1.jpg" class="img-sale">
           <div class="button-container position-absolute">
            <h1 class="text-container">Cкидка на первый заказ 25%</h1>
        <v-container class="button-slide" @click="goToForm">
          К заказам
        </v-container>
      </div>
      </v-container>
  </v-col>

</template>

<style scoped>
img{
  min-width: 100%;
  height: 100%;
}


.img-sale {
  filter: brightness(0.7);
  height: 65vh;
   object-fit: cover;
}


.button-slide:hover {
  background-color: rgba(233, 233, 233, 0.897);
  cursor: pointer;
}

.button-container  {
  justify-self: center;
}
.text-container {
  color: rgb(255, 255, 255);
}

.button-slide {
  background-color: rgba(233, 233, 233, 0.548);
  width: fit-content;
  border-radius: 20px;
  margin-top: 120px;
  padding: 10px 70px;
  font-size: 20px;


}

</style>