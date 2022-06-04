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
  return 23
  return step*taskIndex
})

const nextTask = () => {
  alert(1)
}

let card_1 = ref(false)
let card_2 = ref(false)

let unlock = computed(()=>{
  return ! (card_1&&card_2)
})

</script>

<template>

<div class="page">

  <h3> <span>Алексей</span> <span>Ирина</span></h3>
  <p class="progress-wrapper">
      <el-progress :percentage="progress" status="success"> <span></span></el-progress>
  </p>
  <div class="task" :style="drawImage">
      <div class="card" @click="card_1=true" :class="{flip: card_1}">
        <div class="content">
          <div class="back"></div>
          <div class="front"> front</div>
        </div>
      </div>
      <div class="card" @click="card_2=true" :class="{flip: card_2}">
        <div class="content">
          <div class="back"></div>
          <div class="front">front</div>
        </div>
      </div>

  </div>
  <div class="buttons-group">
      <span></span>
      <el-button :class="{disable: !(card_1&&card_2)}" type="success" round @click="nextTask">Следующее задание</el-button>    
  </div>


</div>

</template>

<style scoped>

.task{
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h3{
  height: 30px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}
.progress-wrapper{
  padding: 10px 0;
}
.buttons-group{
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

/**
 * card
 */
.card {
  width: 350px;
  height: 350px;
  perspective: 3000px;

}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.card:not(.flip){
  cursor: pointer;
}
.card.flip .content {
  transform: rotateY( 180deg ) ;
  transition: transform 0.5s;
}

.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  line-height: 300px;
  color: #03446A;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
}

.front {
  background: #03446A;
  color: white;
  transform: rotateY( 180deg );
}
.back{
  background-image: url('assets/card.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 101%;
}
</style>
