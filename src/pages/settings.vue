<script setup>
import { ref } from 'vue'




import { useStore } from 'vuex'
const $store = useStore()
//console.log($store.state.tasks.common)
console.log('Настройки формируют список вопросов. tasks')

const value1 = ref(true)
const value2 = ref(true)
</script>

<template>

<div class="page">
    <div class="btn-wrapper">
        <button class="btn--red">Играть</button>
    </div>
    <div class="settings">
        <el-switch v-model="value1" />
        <el-switch
          v-model="value2"
          class="ml-2"
          active-color="#13ce66"
          inactive-color="#ff4949"
        />
    </div>
    <el-button type="danger" round>Danger</el-button>
</div>


</template>

<style scoped>
.btn-wrapper{
  text-align: center;
}
.btn--red{
  font-weight: 700;
  font-size: 18px;
  padding: 10px 60px;
  height: auto;
  cursor: pointer;
  border: 3px solid #982926;
  color: #fff;
  text-decoration: none;
  border-radius: 100px;
  background: linear-gradient(180deg,#bd2726 0,#982926 90.87%);

}

.settings{
  display: flex;
  flex-wrap: wrap;

}
.settings__item{
  width: 45%;
  min-height: 100px;
  background-color: rgba(0,150,150,0.3);
  margin: 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>
