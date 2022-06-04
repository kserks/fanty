<script setup>
import { ref } from 'vue'




import { useStore } from 'vuex'
const $store = useStore()

console.log($store.state.levels)

const value1 = ref(true)
const value2 = ref(true)


</script>

<template>

<div class="page">


    <div class="settings">
    
        <el-switch v-model="value2" class="ml-2" active-color="#13ce66" inactive-color="#ff4949"/>
    </div>
    <el-button type="danger" round>Играть</el-button>
</div>


</template>

<style scoped>

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
