import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employee/onboarding', component: EmployeeOnboardingComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
