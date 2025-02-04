import DashboardView from '@/views/profile/DashboardView.vue'
import SegurityView from '@/views/profile/SegurityView.vue'
import SuportView from '@/views/profile/SuportView.vue'
import MyProfileLayout from '@/layouts/MyProfileLayout.vue'

const profileRoutes = {
  path: '/minha-conta',
  component: MyProfileLayout,
  children: [
    {
      path: '',
      name: 'profile',
      component: DashboardView,
    },
    {
      path: '/seguranca',
      name: 'segurity',
      component: SegurityView,
    },
    {
      path: '/suporte',
      name: 'suport',
      component: SuportView,
    },
  ],
}
export default profileRoutes
