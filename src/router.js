import GamesTable from './views/table.vue'
import ADDGames from './views/ADDGames.vue'
import index from './views/index.vue'

const routers = [{
  path:'/index',
   component:index,
  children:[              //子路由
    {path:'GamesTable',          
    component:GamesTable},
    {path:'ADDGames',
    component:ADDGames},
   ]
}];
export default routers;