<script>
import { ref, computed, reactive } from "vue";
import { useStore } from 'vuex'


export default {
  setup (){
    const store = useStore()
    const player = reactive({
                      name: null,
                      gender: "M"
                   })
    let flag = ref(false)
    const players = store.state.players
    const avatar = computed(()=>{
      return `assets/${player.gender}.png`
    })
    return {
      player,
      flag,
      players,
      avatar,
      store
    }
  },
  methods: {
    addPlayer (){
      if(this.players.length>3) return
      if(!this.player.name) return
      this.players.push( {...this.player} )
      this.reset()
    },
    changeGender (){
      this.flag=!this.flag
      if(this.flag) {
        this.player.gender = "W"
      }
      else{
        this.player.gender = "M"
      }    
    },
    reset (){
      this.player.name = null
      this.player.gender = 'M'
    },
    removePlayer (index){
      this.players.splice(index, 1)
    },
    nextScreen (){
      this.store.state.screenID = 'Settings'
    }
  }
}

</script>

<template>

<div class="page">
    <el-form>
          <p class="add-player-form">
            <img class="add-player-form__avatar player-reg" :src="avatar" @click="changeGender">
            <el-input v-model="player.name" />
            <el-button type="success" round @click="addPlayer">Добавить</el-button>    
          </p>
    </el-form>
    <div class="players-list">
        <div class="player" v-for="(playerData, index) in players">
          <p class="player__data">
            <img class="player__avatar" :src="`/assets/${playerData.gender}.png`" alt="avatar">
            <span class="player__name">{{playerData.name}}</span>
          </p>
          <span class="player__remove" @click="removePlayer(index)">
              <el-icon><CloseBold /></el-icon>
          </span>
        </div>
    </div>
    <div class="button-wrapper">
        <el-button type="success" round @click="nextScreen">Вперёд</el-button>
    </div>
</div>


</template>

<style scoped>



/*
 * @add
 */

.add-player-form__avatar{
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


/**
 * player-list
 */

.players-list{
  padding: 10px 0;
  height: 80%
}
.player{
  border: 1px dashed gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}
.player::last-child{
  margin-bottom: 0;
}
.player__data{
  display: flex;
  align-items: center;
}
.player__avatar{
  width: 40px;

}
.player__name{
  padding-left: 15px;
  font-size: 24px;
  font-weight: bold;
}

.player__remove{
  color: pink;
  cursor: pointer;

  font-size: 24px;

}
.player__remove:hover{
  color: brown;
}

.button-wrapper{
  display: flex;
  justify-content: center;
}
.button-wrapper button{
  width: 200px;
}
</style>
