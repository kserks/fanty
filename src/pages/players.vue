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

    const players = store.state.players
    const avatar = computed(()=>{
      return `assets/${player.gender}.png`
    })
    const minPlayers = computed(()=>{
      return (players.length>1)?true:false

    })
    const state = reactive({
      minPlayers
    })
    return {
      player,
      players,
      avatar,
      store,
      state
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

<div class="page players">
    <h3>Добавьте игроков</h3>
    <el-form class="pt20">
          <p class="add-player-form">
            <img class="add-player-form__avatar player-reg" :src="avatar" @click="changeGender">
            <el-input v-model="player.name" />
            <el-button class="add-player-form__btn" type="success" @click="addPlayer">+</el-button>    
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
        <el-button :class="{disable: !state.minPlayers}" type="success" round @click="nextScreen">Вперёд</el-button>
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
.pt20{
  padding-top: 20px;
}
.el-input{
  width: 200px;
  margin-left: 15px;
  flex: 1 1;
}

.add-player-form__btn{
  margin-left: 15px;
  font-weight: 600;
  font-size: 20px;
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
  height: 70%
}
.player{
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
  border-radius: 8px;
  color: var(--c-font);
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



</style>
