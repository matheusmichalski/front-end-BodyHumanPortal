<<<<<<< HEAD
import DashboardView from '@/views/profile/DashboardView.vue'
import SegurityView from '@/views/profile/SegurityView.vue'
import SuportView from '@/views/profile/SuportView.vue'
import MyProfileLayout from '@/layouts/MyProfileLayout.vue'

const profileRoutes = {
  path: '/minha-conta',
  component: MyProfileLayout,
=======
import MainLayout from '@/layouts/MainLayout.vue'
import DashboardView from '@/views/profile/DashboardView.vue'
import SegurityView from '@/views/profile/SegurityView.vue'
import SuportView from '@/views/profile/SuportView.vue'

const profileRoutes = {
  path: '/minha-conta',
  component: MainLayout,
>>>>>>> 456f27d (FEAT: Add profile routes and improve security page structure)
  children: [
    {
      path: 'profile',
      name: 'perfil',
      component: DashboardView,
    },
    {
<<<<<<< HEAD
      path: '/seguranca',
=======
      path: 'seguranca',
>>>>>>> 456f27d (FEAT: Add profile routes and improve security page structure)
      name: 'segurity',
      component: SegurityView,
    },
    {
<<<<<<< HEAD
      path: '/suporte',
=======
      path: 'suporte',
>>>>>>> 456f27d (FEAT: Add profile routes and improve security page structure)
      name: 'suport',
      component: SuportView,
    },
  ],
}
export default profileRoutes
