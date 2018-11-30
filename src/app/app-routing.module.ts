import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: LoginComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
