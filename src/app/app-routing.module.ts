import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'etapa1',
    loadChildren: () => import('./apresentacao/etapa1/etapa1.module').then( m => m.Etapa1PageModule)
  },
  {
    path: 'etapa2',
    loadChildren: () => import('./apresentacao/etapa2/etapa2.module').then( m => m.Etapa2PageModule)
  },
  {
    path: 'etapa3',
    loadChildren: () => import('./apresentacao/etapa3/etapa3.module').then( m => m.Etapa3PageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'periodicidade',
    loadChildren: () => import('./periodicidade/periodicidade.module').then( m => m.PeriodicidadePageModule)
  },
  {
    path: 'apresentacao',
    loadChildren: () => import('./apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'grafico-exemplo',
    loadChildren: () => import('./grafico-exemplo/grafico-exemplo.module').then( m => m.GraficoExemploPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'card-exemplo',
    loadChildren: () => import('./card-exemplo/card-exemplo.module').then( m => m.CardExemploPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'cadastro-equipamentos',
    loadChildren: () => import('./cadastro-equipamentos/cadastro-equipamentos.module').then( m => m.CadastroEquipamentosPageModule)
  },
  {
    path: 'perfil-exemplo',
    loadChildren: () => import('./perfil-exemplo/perfil-exemplo.module').then( m => m.PerfilExemploPageModule)
  },

  {
    path: 'cadastro-comodo',
    loadChildren: () => import('./cadastro-comodo/cadastro-comodo.module').then( m => m.CadastroComodoPageModule)
  },
  {
    path: 'esqueceu',
    loadChildren: () => import('./esqueceu/esqueceu.module').then( m => m.EsqueceuPageModule)
  },
  {
    path: 'listarequipamento',
    loadChildren: () => import('./listarequipamento/listarequipamento.module').then( m => m.ListarequipamentoPageModule)
  },
  {
    path: 'listarcomodo',
    loadChildren: () => import('./listarcomodo/listarcomodo.module').then( m => m.ListarcomodoPageModule)
  },
  {
    path: 'cadastro-ambiente',
    loadChildren: () => import('./cadastro-ambiente/cadastro-ambiente.module').then( m => m.CadastroAmbientePageModule)
  },
  {
    path: 'listarambiente',
    loadChildren: () => import('./listarambiente/listarambiente.module').then( m => m.ListarambientePageModule)
  },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
