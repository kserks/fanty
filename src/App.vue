<script setup>

/**
 * components
 */
import Auth from './pages/auth.vue'
import Players from './pages/players.vue'
import Settings from './pages/settings.vue'
//import Levels from './pages/levels.vue'
import Game from './pages/game.vue'
/**/

import { ref } from 'vue'
import Nav from "./components/v-nav.vue";
import { useStore } from 'vuex'
const $store = useStore()


const getLevel = async (n)=>{

    const res_1 = await fetch(`fanty/level_1.json`)
    const level_1 = await res_1.json()
    const res_2 = await fetch(`fanty/level_2.json`)
    const level_2 = await res_2.json()
    const res_3 = await fetch(`fanty/level_3.json`)
    const level_3 = await res_3.json()
    const res_4 = await fetch(`fanty/level_4.json`)
    const level_4 = await res_4.json()
    $store.state.levels = [ level_1, level_2, level_3, level_4 ]
} 

getLevel()


/**
 * 4 уровня
 * разные категории
 * мужские | женские | общие
 */
const components = { Auth, Players, Settings, Game}

</script>

<template>

  <Nav/>
  <div class="game-wrapper">

      <!--<router-view></router-view>-->

        <component :is="components[$store.state.screenID]"></component>   

  </div>

</template>

<style scoped>

</style>
