import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesIndexComponent } from './index/index.component';

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild([
            {
                path: 'index',
                component: EmployeesIndexComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }
