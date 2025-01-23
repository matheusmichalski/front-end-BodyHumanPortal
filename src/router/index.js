import { createRouter, createWebHistory } from 'vue-router'

// GENERAL
import HomeView from '../views/general/HomeView.vue'
import ContactView from '@/views/general/ContactView.vue'

//SYSTEMS
import BoneView from '@/views/systems/BoneView.vue'
import CirculatoryView from '@/views/systems/CirculatoryView.vue'
import DigestiveView from '@/views/systems/DigestiveView.vue'
import MuscleView from '@/views/systems/MuscleView.vue'
import NervousView from '@/views/systems/NervousView.vue'
import ReproductiveFemView from '@/views/systems/ReproductiveFemView.vue'
import ReproductiveMalView from '@/views/systems/ReproductiveMalView.vue'
import RespiratoryView from '@/views/systems/RespiratoryView.vue'
import UrinaryView from '@/views/systems/UrinaryView.vue'

//PROFILE
import DashboardView from '@/views/profile/DashboardView.vue'
import SegurityView from '@/views/profile/SegurityView.vue'
import SuportView from '@/views/profile/SuportView.vue'

//AUTH
import SigInView from '@/views/auth/SigInView.vue'
import SigUpView from '@/views/auth/SigUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contato',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/sistema/',
      name: 'systems',
      children: [
        {
          path: 'osseo',
          component: BoneView,
        },
        {
          path: 'cardiovascular',
          component: CirculatoryView,
        },
        {
          path: 'digestivo',
          component: DigestiveView,
        },
        {
          path: 'muscular',
          component: MuscleView,
        },
        {
          path: 'nervoso',
          component: NervousView,
        },
        {
          path: 'reprodutor-feminino',
          component: ReproductiveFemView,
        },
        {
          path: 'reprodutor-masculino',
          component: ReproductiveMalView,
        },
        {
          path: 'respiratorio',
          component: RespiratoryView,
        },
        {
          path: 'urinario',
          component: UrinaryView,
        },
      ],
    },
    {
      path: '/minha-conta/',
      name: 'profile',
      component: DashboardView,
      children: [
        {
          path: 'seguranca',
          component: SegurityView,
        },
        {
          path: 'suporte',
          component: SuportView,
        },
      ],
    },
    {
      path: '/auth/',
      children: [
        {
          path: 'login',
          component: SigInView,
        },
        {
          path: 'cadastre-se',
          component: SigUpView,
        },
      ],
    },
  ],
})

export default router
