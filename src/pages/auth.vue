<script setup>
import { ref, computed } from 'vue'

const login = ref(null)
const password = ref(null)

const sendData = (e)=>{
  e.preventDefault()
  console.log(login , password)
}

</script>

<template>

<div class="page">
    <div>
        <h2>Авторизация</h2>
        <form>
            <p class="form__item">
              <label>Логин</label>
              <input  type="text"  v-model="login" placeholder="login" >
            </p>
            <p class="form__item">
              <label>Пароль</label>
              <input  type="password"  v-model="password" placeholder="login" >
            </p>
            <p>
             <el-button type="success" round @click="sendData">Войти</el-button>    

            </p>
        </form>
    </div>


</div>


</template>

<style>

input[type="text"]{
  background-color: #ccc;
  padding: 5px 10px;
  border-radius: 4px;
  color: wheat;
}

</style>
