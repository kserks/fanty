import { createStore } from 'vuex'



const store = createStore({
  state () {
    return {
      screenID: 'Settings',//'Game',
      players: [],
      levels: null,
      levelIndex: 0,
      currentTasks: [
          {
            "category": null,
            "target": "C",
            "task": "",
            "img": ""
          }
      ],

    }
  }
});


export default store