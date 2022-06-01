<script setup>
import { ref } from "vue";
import { useStore } from 'vuex'
const $store = useStore()
//console.log($store.state.tasks.common)
$store.state.players[0] = 'Сергей'

</script>

<template>

<div class="page">
    <p>
      players | Роли. Мужчина женщина
    </p>
    <div>
      <input type="text">
    </div>
    <div>
      <input type="text" >
    </div>
    <div>
      <input type="text" >
    </div>
    <div>
      <input type="text" >
    </div>

</div>


</template>

<style>

</style>
