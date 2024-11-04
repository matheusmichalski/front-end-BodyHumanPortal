import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';

//cadastro
import CadastroView from '@/views/Cadastro/CadastroView.vue';
import LoginView from '@/views/Cadastro/LoginView.vue';

//dashboard
import DashboardView from '@/views/Dashboard/DashboardView.vue';
import SegurancaView from '@/views/Dashboard/SegurancaView.vue';
import SuporteView from '@/views/Dashboard/SuporteView.vue';

//sistemas
import CardiovascularView from '../views/sistemas/CardiovascularView.vue';
import DigestorioView from '../views/sistemas/DigestorioView.vue';
import EsqueleticoView from '../views/sistemas/EsqueleticoView.vue';
import NervosoView from '../views/sistemas/NervosoView.vue';
import ReprodutorFemininoView from '../views/sistemas/Reprodutor-femininoView.vue';
import ReprodutorMasculinoView from '../views/sistemas/Reprodutor-masculinoView.vue';
import RespiratorioView from '../views/sistemas/RespiratorioView.vue';
import UrinarioView from '../views/sistemas/UrinarioView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: '/seguranca',
            name: 'seguranca',
            component: SegurancaView
        },
        {
            path: '/suporte',
            name: 'suporte',
            component: SuporteView
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: CadastroView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/cardiovascular',
            name: 'cardiovascular',
            component: CardiovascularView
        },
        {
            path: '/digestorio',
            name: 'digestorio',
            component: DigestorioView
        },
        {
            path: '/esqueletico',
            name: 'esqueletico',
            component: EsqueleticoView
        },
        {
            path: '/nervoso',
            name: 'nervoso',
            component: NervosoView
        },
        {
            path: '/reprodutor-feminino',
            name: 'reprodutor-feminino',
            component: ReprodutorFemininoView
        },
        {
            path: '/reprodutor-masculino',
            name: 'reprodutor-masculino',
            component: ReprodutorMasculinoView
        }, 
        {
            path: '/respiratorio',
            name: 'respiratorio',
            component: RespiratorioView
        }, 
        {
            path: '/urinario',
            name: 'urinario',
            component: UrinarioView
        },
    ],
});

export default router;