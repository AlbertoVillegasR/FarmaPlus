import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { EmployeesService } from "src/app/core/services/employees.service";
import { EmployeesEditComponent } from "./edit/edit.component";
import { EmployeesIndexComponent } from "./index/index.component";
import { EmployeesListComponent } from "./list/list.component";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        EmployeesIndexComponent,
        EmployeesListComponent,
        EmployeesEditComponent,
    ],
    providers: [
        EmployeesService
    ]
})
export class EmployeesModule { }
