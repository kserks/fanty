import { createStore } from 'vuex'



const store = createStore({
  state () {
    return {
      players: ["", "", "", ""],
      tasks: null
    }
  }
});


export default store