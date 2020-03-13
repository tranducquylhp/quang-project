import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeLayoutComponent} from './layout/home/home-layout/home-layout.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [{ path: '', loadChildren: () => import('./layout/home/home.module').then(m => m.HomeModule) }],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
