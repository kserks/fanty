<script setup>
import { ref } from 'vue'
import Nav from "./components/v-nav.vue";
import { useStore } from 'vuex'
const $store = useStore()


const getTasks = async ()=>{
  const res1 = await fetch('fanty/common.json')
  const common = await res1.json()
  const res2 = await fetch('fanty/man.json')
  const man = await res2.json()
  const res3 = await fetch('fanty/woman.json')
  const woman = await res3.json()
  $store.state.tasks = { common, man, woman } 
} 

getTasks()

console.log('+++TRANSITION')
/**
 * 4 уровня
 * разные категории
 * мужские | женские | общие
 */

</script>

<template>

  <Nav/>
  <div class="game-wrapper">
    <router-view></router-view>
  </div>

</template>

<style scoped>

</style>
