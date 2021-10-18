import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntranetLoginComponent } from './login/login.componen';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: IntranetLoginComponent,
            },
            {
                path: 'employees',
                loadChildren: () => import('./employees/employees.module').then((m) => m.EmployeesModule)
            },
        ],
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IntranetRoutingModule { }
