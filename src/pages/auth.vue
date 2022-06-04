<script setup>
import { ref, computed } from 'vue'


const form = ref({
  login: null,
  password: null
})
const sendData = (e)=>{
  e.preventDefault()
  
}

</script>

<template>

<div class="page">
    <div>
        <h2>Авторизация</h2>
        <el-form :model="form" label-width="120px">
            <el-form-item label="Имя пользователя">
              <el-input v-model="form.login" />
            </el-form-item>
            <el-form-item label="Пароль">
              <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-form-item>
               <el-button type="success" round @click="sendData">Войти</el-button>    
            </el-form-item>
        </el-form>

    </div>


</div>


</template>

<style>

</style>
