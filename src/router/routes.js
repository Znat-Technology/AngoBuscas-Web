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
    path: '/arquivo',
    name: 'Arquivo',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: 'documentos', component: () => import('src/pages/dashboard/trash/documentsPage.vue') },
      { path: 'utilizadores', component: () => import('src/pages/dashboard/trash/usersPage.vue') },
      { path: 'empresas', component: () => import('src/pages/dashboard/trash/companiesPage.vue') },
      { path: 'pessoas', component: () => import('src/pages/dashboard/trash/peoplesPage.vue') },
      { path: 'anuncios', component: () => import('src/pages/dashboard/trash/advertsPage.vue') }
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
    path: '/submissao',
    name: 'Submissao',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/ItemSubmited.vue') }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/dashboard/panel/DashboardPage.vue')
      }
    ]
  },
  {
    path: '/utilizador',
    name: 'Utilizador',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/users/UsersPage.vue') },
      {
        path: 'registrar',
        component: () => import('src/pages/dashboard/users/FormUserPage.vue')
      },
      {
        path: 'actualizar',
        component: () => import('src/pages/dashboard/users/FormUserPage.vue')
      },
      { path: 'perfil', component: () => import('src/pages/dashboard/ProfilePage.vue') }
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
    path: '/instituicao',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/place/PlacesPage.vue') },
      { path: 'registrar', component: () => import('src/pages/dashboard/place/FormPlacePage.vue') },
      { path: 'actualizar', component: () => import('src/pages/dashboard/place/FormPlacePage.vue') }
    ]
  },
  {
    path: '/blog',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/blog/BlogPage.vue') },
      { path: 'registrar', component: () => import('src/pages/dashboard/blog/FormBlogPage.vue') },
      { path: 'actualizar', component: () => import('src/pages/dashboard/blog/FormBlogPage.vue') }
    ]
  },
  {
    path: '/categoria',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/category/CategoryPage.vue') },
      { path: 'registrar', component: () => import('src/pages/dashboard/category/FormCategoryPage.vue') },
      { path: 'actualizar', component: () => import('src/pages/dashboard/category/FormCategoryPage.vue') }
    ]
  },
  {
    path: '/empresa',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/company/CompaniesPage.vue') },
      { path: 'registrar', component: () => import('src/pages/dashboard/company/FormCompanyPage') },
      { path: 'actualizar', component: () => import('src/pages/dashboard/company/FormCompanyPage') }
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
