<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const $store = useStore()

let pl = $store.state.players[0]


let task = "Тебе нужно посмотреть партнеру прямо в глаза и не отрывать взгляд минуту."

let currentPlayer = pl

/*
let task = computed(()=>{
  return $store.state.tasks
})
*/

const progress = ref(70)

const nextTask = ()=>{
  alert(1)
}
const nextLevel = ()=>{
  alert(1)
}
</script>

<template>

<div class="page">
  <div class="players">Сергей Ирина Василий Настя</div>
  <div class="game">
      <h3>{{currentPlayer}}, твой ход!</h3>
      <p class="task">{{task}}</p>
      <img src="" alt=".gif">
      <p class="timer">57c</p>
      <div class="buttons-group">

          <el-button type="warning" round @click="nextLevel">Следующий уровень</el-button>    
          <el-button type="success" round @click="nextTask">Следующее задание</el-button>    
      </div>
      <p>
         <el-progress :percentage="progress" status="success" />
      </p>
  </div>
</div>


</template>

<style scoped>


.timer{
  color: skyblue;
}

</style>
