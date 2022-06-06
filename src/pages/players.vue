<script setup>
import { ref, computed } from "vue";
import { useStore } from 'vuex'

const $store = useStore()
//console.log($store.state.tasks.common)


let player= ref({
  name: null,
  gender: "M"
})



let flag = ref(false)
let avatar = computed(()=>{
  if(flag) {
    player.gender = "M"
  }
  else{
    player.gender = "W"
  }
  return `assets/${player.gender}.png`
})

const changeGender = ()=>{
  console.log(flag)
  console.log(avatar)
  flag=!flag
}

const regPlayer = ()=>{
  $store.state.players.push( {...player} )
}
</script>

<template>

<div class="page">



    <el-form>
              
          <p class="add-player-form">
            <img class="player player-reg" :src="avatar" @click="changeGender">
            <el-input v-model="player.name" />
            <el-button type="success" @click="regPlayer">Добавить</el-button>    
          </p>

    </el-form>
    <div v-for="player2 in $store.state.players">
      <img class="player" src="/assets/M.png" alt="man">
      <span class="player-name">{{player2.name}}</span>
    </div>
</div>


</template>

<style scoped>

.player{
  width: 40px;

}
.el-input{
  width: 200px;
}
.player-reg:hover{
  filter: brightness(120%);
  cursor: pointer;
}

.add-player-form{
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #223;
}
</style>
