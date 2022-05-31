<script setup>
import { ref, computed } from 'vue'

const login = ref(null)

</script>

<template>

<div class="page">
    <div>
        <h2>Авторизация</h2>
        <form>
            <label>Логин</label>
            <input  type="text"  v-model="login" placeholder="login" >
        </form>
    </div>


</div>


</template>

<style scoped>

input[type="text"]{
  background-color: #223;
  padding: 5px 10px;
  border-radius: 4px;
}

</style>
