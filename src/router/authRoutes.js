import SigInView from '@/views/auth/SigInView.vue'
import SigUpView from '@/views/auth/SigUpView.vue'
import RecoveryEmailView from '@/views/auth/RecoveryEmailView.vue'
import RecoveryCodeView from '@/views/auth/RecoveryCodeView.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const authRoutes = {
  path: '/auth',
  component: AuthLayout,
  children: [
    {
      path: 'login',
      name: 'login',
      component: SigInView,
    },
    {
      path: 'cadastre-se',
      name: 'signup',
      component: SigUpView,
    },
    {
      path: 'recovery',
      name: 'recovery',
      children: [
        {
          path: 'email',
          name: 'recovery-email',
          component: RecoveryEmailView,
        },
        {
          path: 'code',
          name: 'recovery-code',
          component: RecoveryCodeView,
        },
      ],
    },
  ],
}

export default authRoutes
