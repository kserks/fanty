<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const $store = useStore()

let playerIndex = 0

const currentPlayer = computed( ()=>{
  return $store.state.players[playerIndex]
})

let taskIndex = 0
let currentTask = computed( () => {
  return $store.state.currentTasks[taskIndex]
})


const drawImage = computed(()=>{
  return `background-image: url(fanty/images/${currentTask.img});`
})


const progress = computed(() => {
  const len = $store.state.currentTasks.length-1
  let step = 100 / len
  return 59
  return step*taskIndex
})

const nextTask = () => {
  alert(1)
}
const nextLevel = () => {
  alert(1)
}
</script>

<template>

<div class="page">
  <div class="players">Сергей Ирина Василий Настя</div>
  <div class="game">
      <h3>{{currentPlayer}}, твой ход!</h3>
      <div class="task" :style="drawImage">{{currentTask.task}}</div>
      <p class="timer">57c</p>
      <div class="buttons-group">
          <el-button type="warning" round @click="nextLevel">Следующий уровень</el-button>    
          <el-button type="success" round @click="nextTask">Следующее задание</el-button>    
      </div>
      <p>
         <el-progress :percentage="progress" status="success"> <span></span></el-progress>
      </p>
  </div>
</div>

</template>

<style scoped>

.task{
  width: 100%;
  height: 80%;
}


.timer{
  color: skyblue;
}

</style>
