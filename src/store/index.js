import { createStore } from 'vuex'



const store = createStore({
  state () {
    return {
      players: ["", "", "", ""],
      currentTasks: [
          {
            "level": 1,
            "category": "Классический секс",
            "task": "Станцуй для него эротический танец",
            "img": "776fac4884221cc69681.gif"
          }
      ],

    }
  }
});


export default store