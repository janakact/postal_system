import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent }      from './user-login/user-login.component';
import { HomeComponent }      from './home/home.component';
import { CheckingComponent } from './checking/checking.component';
import { DeliverComponent } from './deliver/deliver.component';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'accept',
    component: HomeComponent
  },
  {
    path: 'checking',
    component: CheckingComponent
  },
  {
    path: 'deliver',
    component: DeliverComponent
  },
  {
    path: 'success/:id',
    component: SubmitSuccessComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
