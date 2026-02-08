<script setup lang="ts">

</script>


<template>

  <v-form v-model="valid">
    <v-container class="container-form" >
      <v-row>
        
        <v-col cols="12" md="4" >
          
          <v-text-field class="cols" v-model="firstname" :counter="10" :rules="nameRules" label="First name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field  class="cols" v-model="lastname" :counter="10" :rules="nameRules" label="Last name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field class="cols" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          
        </v-col>
      
      </v-row>
    </v-container>
  </v-form>

</template>


<style scoped>

.cols {
  background-color: rgb(255, 255, 255);
  border-radius: 15px;


}

.container-form { 
  margin-top: 70px;
  background-color: rgb(191, 201, 214);
  border-radius: 15px;
  padding: 50px;
  padding-bottom: 100px;

}

</style>
