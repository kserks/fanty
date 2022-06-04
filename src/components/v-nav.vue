<script setup>
import { useStore } from 'vuex'
const $store = useStore()

const components = [ 'Auth', 'Players', 'Settings', 'Game' ]

const handler = (id) => {
  $store.state.screenID = id
}

</script>

<template>

<nav class="navigation">

      <div class="nav__item" 
        v-for="link in components" 
        @click="handler(link)">
            {{link}}
      </div>

</nav>

</template>

<style scoped>

nav{
  width: 100%;
  background-color: black;
  display: flex;
  padding: 20px;
  position: absolute;
  top: 0;
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
