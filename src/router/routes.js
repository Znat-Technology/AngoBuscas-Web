const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/MainPage.vue') }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/LoginPage.vue') }
    ]
  },
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/Permission.vue') }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/dashboard/DashboardPage.vue')
      }
    ]
  },
  {
    path: '/perfil',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/ProfilePage.vue') }
    ]
  },
  {
    path: '/msg',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/MessagePage.vue') }
    ]
  },
  {
    path: '/instituicoes',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/InstituicoesPage.vue') }
    ]
  },
  {
    path: '/utilizadores',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/UtilizadoresPage.vue') }
    ]
  },
  {
    path: '/empresas',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/EmpresasPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
