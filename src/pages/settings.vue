<script setup>
//import settings from './pages/settings.vue'

const settings = [
  1,1,1,1,1,1,11,1,1,1

]

</script>

<template>

<div class="page">
    <div class="btn-wrapper">
        <button class="btn--red">Играть</button>
    </div>
    <div class="settings">
        <div v-for="(item, index) in settings" :key="index" class="settings__item">{{item}}</div>

    </div>
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
