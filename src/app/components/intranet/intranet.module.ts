import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeesRoutingModule } from './employees/employees-routing.module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetLoginComponent } from './login/login.componen';

@NgModule({
    imports: [
        CommonModule,
        IntranetRoutingModule,
        EmployeesRoutingModule,
        ReactiveFormsModule,

    ],
    declarations:[
        IntranetLoginComponent,
    ],
    providers:[
    ]
})
export class IntranetModule { }
