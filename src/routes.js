import Auth from './pages/auth.vue'
import Players from './pages/players.vue'
import Settings from './pages/settings.vue'
import Levels from './pages/levels.vue'
import Game from './pages/game.vue'
export default [
  { path: '/', component: Auth },
  { path: '/players', component: Players },
  { path: '/settings', component: Settings },
  { path: '/levels', component: Levels },
  { path: '/game', component: Game },
]