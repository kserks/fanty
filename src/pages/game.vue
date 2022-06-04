<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const $store = useStore()

const currentFants = [
  {
    "category": ["Классический секс"],
    "target": "M",
    "task": "Нежно и медленно проведи по ее телу рукой. Спускайся вниз от шеи, между грудей, по животику, пупку и киске. Для остроты ощущений можешь взять кусочек льда.",
    "img": "038276ac1e71fe2baf94.gif"
  },
  {
    "category": ["Классический секс"],
    "target": "W",
    "task": "Внимательно посмотри на фото. твоя задача также пострелять глазками и сексуально дышать. Озвучь немую картинку - издавай звуки в такт девушке с картинки. у тебя 1 минута.",
    "img": "0524ecea9e8e482702da.gif"
  }, 
]



let playerIndex = 0
/*
const currentPlayer = computed( ()=>{
  return $store.state.players[playerIndex]
})*/

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
  return 90
  return step*taskIndex
})

const nextTask = () => {
  alert(1)
}

let card_1 = ref(false)
let card_2 = ref(false)


const getImg_0 = computed(()=>{
  return `background-image: url(fanty/images/${currentFants[0].img})`
})
const getImg_1 = computed(()=>{
  return `background-image: url(fanty/images/${currentFants[1].img})`
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
          <div class="front" :style="getImg_0">
              <div class="front__task">{{currentFants[0].task}}</div>
          </div>
        </div>
      </div>
      <div class="card" @click="card_2=true" :class="{flip: card_2}">
        <div class="content">
          <div class="back"></div>
          <div class="front" :style="getImg_1">
              <div class="front__task">{{currentFants[1].task}}</div>
          </div>
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
  color: var(--c-font);
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

  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  backface-visibility: hidden;
}



.front {
  background: #03446A;
  color: white;
  transform: rotateY(180deg);
  /**/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}
.front::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
}

.front__task{
  color: cornsilk;
  z-index: 1000;
  text-align: left;
  line-height: 30px;
   font-size: 24px;
}
.back{
  background-image: url('assets/card.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 101%;
}
</style>
