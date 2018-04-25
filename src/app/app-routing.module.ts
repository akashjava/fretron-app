import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { SettingsComponent } from './settings';

const routes: Routes = [
  {
    path : 'login',
    loadChildren : 'app/auth/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  // {
  //   path: 'settings',
  //   component: SettingsComponent,
  //   data: {
  //     title: 'Settings'
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
