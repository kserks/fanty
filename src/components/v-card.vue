<script>
import { ref, computed, reactive } from 'vue'

export default {
  props: {
    fant: Object
  },
  setup (props, ctx){

    const image = computed(()=>{
      return `background-image: url(fanty/images/${props.fant.img})`
    })
    return {
      image
    }
  }
}



</script>

<template>

<div class="card">
        <div class="content">
          <div class="back"></div>
          <div class="front" :style="image">
              <div class="front__task">{{fant.task}}</div>
          </div>
        </div>
</div>


</template>

<style scoped>
/**
 * card
 */
.card {
  width: 350px;
  height: 350px;
  perspective: 3000px;

}

.content {
  position: absolute;
  width: 100%;
  height: 100%;

  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.card:not(.flip){
  cursor: pointer;
}
.card.flip .content {
  transform: rotateY( 180deg ) ;
  transition: transform 0.5s;
}

.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;

  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  backface-visibility: hidden;
}



.front {
  background: #03446A;
  color: white;
  transform: rotateY(180deg);
  /**/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}
.front::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
}

.front__task{
  color: cornsilk;
  z-index: 1000;
  text-align: left;
  line-height: 30px;
   font-size: 24px;
}
.back{
  background-image: url('/assets/card.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 101%;
}
</style>
