<script setup>
//import settings from './pages/settings.vue'

let task = "Тебе нужно посмотреть партнеру прямо в глаза и не отрывать взгляд минуту."
let currentPlayer = "Алексей"
</script>

<template>

<div class="page">
  <div class="players">Сергей Ирина Василий Настя</div>
  <div class="game">
      <h3>{{currentPlayer}}, твой ход!</h3>
      <p class="task">{{task}}</p>
      <img src="" alt=".gif">
      <p class="timer">57c</p>
      <div class="buttons-group">
          <button>Следующий уровень</button>
          <button>Следующее задание</button>
      </div>
  </div>
</div>


</template>

<style scoped>


.timer{
  color: skyblue;
}

</style>
