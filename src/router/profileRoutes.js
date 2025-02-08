import MainLayout from '@/layouts/MainLayout.vue'
import DashboardView from '@/views/profile/DashboardView.vue'
import SegurityView from '@/views/profile/SegurityView.vue'
import SuportView from '@/views/profile/SuportView.vue'

const profileRoutes = {
  path: '/minha-conta',
  component: MainLayout,
  children: [
    {
      path: 'profile',
      name: 'profile',
      component: DashboardView,
    },
    {
      path: 'seguranca',
      name: 'segurity',
      component: SegurityView,
    },
    {
      path: 'suporte',
      name: 'suport',
      component: SuportView,
    },
  ],
}
export default profileRoutes
