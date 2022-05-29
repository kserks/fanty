<script setup>
//import settings from './pages/settings.vue'


</script>

<template>

<nav>
      <div class="nav__item">
        <router-link to="/">auth</router-link>
      </div>
      <div class="nav__item">
        <router-link to="/players">players</router-link>
      </div>
      <div class="nav__item">
        <router-link to="/settings">settings</router-link>
      </div>
      <div class="nav__item">
        <router-link to="/levels">levels</router-link>
      </div>
      <div class="nav__item">
        <router-link to="/game">game</router-link>
      </div>
    </nav>

</template>

<style scoped>

nav{
  width: 100%;
  background-color: black;
  display: flex;
  padding: 20px;
}
.nav__item{
  margin-right: 20px;
  color: wheat;
  font-weight: bold;

}

.router-link-active{
  color: deepskyblue;
}
</style>
