import { createRouter, createWebHistory } from 'vue-router'

//GERAL
import HomeView from '@/views/general/HomeView.vue'
import AboutView from '@/views/general/AboutView.vue'
import ContactView from '@/views/general/ContactView.vue'
import SystemsView from '@/views/general/SystemsView.vue'

//SYSTEMS
import BoneView from '@/views/systems/BoneView.vue'
import CirculatoryView from '@/views/systems/CirculatoryView.vue'
import DigestiveView from '@/views/systems/DigestiveView.vue'
import MuscleView from '@/views/systems/MuscularView.vue'
import NervousView from '@/views/systems/NervousView.vue'
import ReproductiveFemView from '@/views/systems/ReproductiveFemView.vue'
import ReproductiveMalView from '@/views/systems/ReproductiveMalView.vue'
import RespiratoryView from '@/views/systems/RespiratoryView.vue'
import UrinaryView from '@/views/systems/UrinaryView.vue'

//SING IN && SING UP
import SingInView from '@/views/singIn-and-singUp/SingInView.vue'
import SingUpView from '@/views/singIn-and-singUp/SingUpView.vue'

//MY ACCOUNT
import ProfileView from '@/views/my-account/ProfileView.vue'
import SecurityView from '@/views/my-account/SecurityView.vue'
import SupportView from '@/views/my-account/SupportView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contato',
      name: 'contact',
      component: ContactView,
    },    
    {
      path: '/cardiovascular',
      component: CirculatoryView,
    },
    {
      path: '/sistemas',
      name: 'systems',
      component: SystemsView,
      children: [
        {
          path: '/osseo',
          component: BoneView,
        },

        {
          path: '/digestivo',
          component: DigestiveView,
        },
        {
          path: '/muscular',
          component: MuscleView,
        },
        {
          path: '/nervoso',
          component: NervousView,
        },
        {
          path: '/reprodutor-feminino',
          component: ReproductiveFemView,
        },
        {
          path: '/reprodutor-masculino',
          component: ReproductiveMalView,
        },
        {
          path: '/respiratorio',
          component: RespiratoryView,
        },
        {
          path: '/urinario',
          component: UrinaryView,
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      children: [
        {
          path: '/login',
          component: SingInView,
        },
        {
          path: '/cadastre-se',
          component: SingUpView,
        },
      ],
    },
    {
      path: '/minha-conta',
      name: 'my-account',
      children: [
        {
          path: '/profile',
          component: ProfileView,
        },
        {
          path: '/seguranca',
          component: SecurityView,
        },
        {
          path: '/suporte',
          component: SupportView,
        },
      ],
    },
  ],
})

export default router
