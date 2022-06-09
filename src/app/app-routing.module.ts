import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { RestGuardGuard } from './restGuard/restGuard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsPageModule)
  },

  {
    path: 'my-cart',
    loadChildren: () => import('./pages/my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./pages/Products/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/Products/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'user-interface',
    loadChildren: () => import('./pages/Users/user-interface/user-interface.module').then( m => m.UserInterfacePageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./pages/Users/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'send-request',
    loadChildren: () => import('./pages/ProductRequests/send-request/send-request.module').then( m => m.SendRequestPageModule)
  },
  {
    path: 'list-category',
    loadChildren: () => import('./pages/Categories/list-category/list-category.module').then( m => m.ListCategoryPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
