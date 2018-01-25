import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dashboard from '@/components/Dashboard'
import Leaders from '@/components/Leaders'
import Team from '@/components/Team'
import Angels from '@/components/teams/Angels'
import Bluejays from '@/components/teams/Bluejays'
import Braves from '@/components/teams/Braves'
import Brewers from '@/components/teams/Brewers'
import Cubs from '@/components/teams/Cubs'
import Dodgers from '@/components/teams/Dodgers'
import Giants from '@/components/teams/Giants'
import Indians from '@/components/teams/Indians'
import Mariners from '@/components/teams/Mariners'
import Marlins from '@/components/teams/Marlins'
import Mets from '@/components/teams/Mets'
import Orioles from '@/components/teams/Orioles'
import Phillies from '@/components/teams/Phillies'
import Pirates from '@/components/teams/Pirates'
import Tigers from '@/components/teams/Tigers'
import Yankees from '@/components/teams/Yankees'

Vue.use(Router)
Vue.component('team-page', Team)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/leaders',
      name: 'Leaders',
      component: Leaders
    },
    {
      path: '/angels',
      name: 'Angels',
      component: Angels
    },
    {
      path: '/bluejays',
      name: 'Bluejays',
      component: Bluejays
    },
    {
      path: '/braves',
      name: 'Braves',
      component: Braves
    },
    {
      path: '/brewers',
      name: 'Brewers',
      component: Brewers
    },
    {
      path: '/cubs',
      name: 'Cubs',
      component: Cubs
    },
    {
      path: '/dodgers',
      name: 'Dodgers',
      component: Dodgers
    },
    {
      path: '/giants',
      name: 'Giants',
      component: Giants
    },
    {
      path: '/indians',
      name: 'Indians',
      component: Indians
    },
    {
      path: '/mariners',
      name: 'Mariners',
      component: Mariners
    },
    {
      path: '/marlins',
      name: 'Marlins',
      component: Marlins
    },
    {
      path: '/mets',
      name: 'Mets',
      component: Mets
    },
    {
      path: '/orioles',
      name: 'Orioles',
      component: Orioles
    },
    {
      path: '/phillies',
      name: 'Phillies',
      component: Phillies
    },
    {
      path: '/pirates',
      name: 'Pirates',
      component: Pirates
    },
    {
      path: '/tigers',
      name: 'Tigers',
      component: Tigers
    },
    {
      path: '/yankees',
      name: 'Yankees',
      component: Yankees
    }
  ]
})
