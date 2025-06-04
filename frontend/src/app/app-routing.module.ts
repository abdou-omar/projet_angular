import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'search/:searchTerm',
    loadComponent: () =>
      import('./components/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'tag/:tag',
    loadComponent: () =>
      import('./components/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'food/:id',
    loadComponent: () =>
      import('./components/pages/food-page/food-page.component').then(m => m.FoodPageComponent)
  },
  {
    path: 'cart-page',
    loadComponent: () =>
      import('./components/pages/cart-page/cart-page.component').then(m => m.CartPageComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/pages/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/pages/register-page/register-page.component').then(m => m.RegisterPageComponent)
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./components/pages/checkout-page/checkout-page.component').then(m => m.CheckoutPageComponent)
  },
  {
    path: 'payment',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./components/pages/payment-page/payment-page.component').then(m => m.PaymentPageComponent)
  },
  {
    path: 'track/:orderId',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./components/pages/order-track-page/order-track-page.component').then(m => m.OrderTrackPageComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
