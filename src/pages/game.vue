<script>
import { ref, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import Card from '../components/v-card.vue'



export default {
  components: { Card },
  setup (){
    const store = useStore()
    const taskIndex = ref(0)
    const state = reactive({
      card_1: false,
      card_2: false
    })

    /*
    const currentTask = computed( () => {
      return store.state.currentTasks[taskIndex]
    })
*/
    const currentFants = reactive([
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
    ])

    const progress = computed(() => {
      const len = store.state.currentTasks.length-1
      const step = 100 / len
      return 90
      return step*taskIndex
    })

    return {
      state,
      progress,
      currentFants,
      store
    }
  },
  methods: {
    nextFant (){
      alert(3)
    }
  }
}


</script>

<template>

<div class="page">

  <h3> <span>Алексей</span> </h3>
  <p class="progress-wrapper">
      <el-progress :percentage="progress" status="success"> <span></span></el-progress>
  </p>
  <div class="task">

    <Card @click="state.card_1=true" :class="{flip: state.card_1}" :fant="currentFants[0]"/>
    <Card @click="state.card_2=true" :class="{flip: state.card_2}" :fant="currentFants[1]"/>
  </div>
  <div class="buttons-group">
     
      <el-button :class="{disable: !(state.card_1&&state.card_2)}" type="success" round @click="nextFant">Следующее задание</el-button>    
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
  justify-content: flex-start;
  color: var(--c-font);
}
.progress-wrapper{
  padding: 10px 0;
}
.buttons-group{
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}


</style>
