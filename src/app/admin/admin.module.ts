import { Route, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth/auth.guard';

const routing: Route[] = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminComponent, canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  declarations: [AuthComponent, AdminComponent],
  providers: [AuthGuard],
  imports: [FormsModule, CommonModule, RouterModule.forChild(routing)],
})
export class AdminModule { }
