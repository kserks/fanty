<script>
import { ref, computed, reactive } from 'vue'
import { useStore } from 'vuex'




export default {
  components: {},
  setup() {
    const store = useStore()
    const state = reactive({
                    value2: true
    })

    /**
     * Получаю все фанты, всех уровней
     */
    const allTasks = Object.values( store.state.levels ).flat()
    /**
     * Получаю названия категорий
     */
    const allCategories = allTasks.map(task=>{
      if(task.category===null) task.category = ['Без категории']
      return task.category  
    }).flat()
    /**
     * Получаю количество Фантов в категории
     */
    const categoriesGroup = {}
    allCategories.forEach(cat=>{
      categoriesGroup[cat] = (categoriesGroup[cat] || 0) + 1;
    })
    const categories = reactive([])
    for(let key in categoriesGroup){
      const obj = {
        name: key,
        val: categoriesGroup[key],
        max: categoriesGroup[key]
      }
      categories.push(obj)
    }

    return {
      state,
      categories,
      store
    }
  },
  methods: {
    nextScreen (){
      this.store.state.screenID = 'Game'
    }
  }
}

</script>

<template>

<div class="page settings">

    <h3>Категории</h3>
    <el-scrollbar height="400px"  class="category" :always="true">
        <p v-for="(catItem, index) in categories" :key="index" class="category__item">
              <div class="category__name">{{catItem.name}}</div>
              <div class="category__range">
                <span class="category__num">{{catItem.val}}</span>
                <el-slider v-model="catItem.val" :step="1" :min="0" :max="catItem.max" :show-tooltip="false"/>

              </div>

        </p>
   </el-scrollbar>

    <div class="button-wrapper">
        <el-button type="danger" round @click="nextScreen">Играть</el-button>
    </div>
    
</div>


</template>

<style scoped>

.settings{
  display: flex;
  flex-direction: column;
}


.category{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 10px;
  height: 400px;
  overflow: auto;
}
.category__item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 30px;

  box-shadow: 0 0 8px rgba(0,0,0,0.5);
  border-radius: 8px;
  color: var(--c-font);
  margin: 0px 20px 20px 5px;
}

.category__name{
  width: 30%;
  font-size: 18px;
  font-weight: 600;
}

.category__range{
  width: 70%;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.category__num{
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-slider{
  width: 88% !important;
}
.button-wrapper{
  padding-top: 30px;
}
</style>
