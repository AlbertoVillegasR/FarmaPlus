import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeesModel } from 'src/app/core/models/employees.model';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-intranet-model-employees',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
    form: FormGroup;
    loading = false;
    titulo = 'Agregar Empleado';
    id: string | undefined;
  
    constructor(private fb: FormBuilder,
                private employeesService: EmployeesService,
                private toastr: ToastrService) {
      this.form = this.fb.group({
        names: ['', Validators.required],
        first_surname: [''],
        last_surname: [''],
        dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        status_id: ['']
      })
     }
  
    async ngOnInit(): Promise<void>{
      await this.getEmployee()
    }
  
    save() {
      if(this.id === undefined) {
        this.saveEmployee();
  
      } else {
        this.editEmployee(this.id);
      }
      
    }
  
    editEmployee(id: string) {
      const data: any = {
        names: this.form.value.names,
        first_surname: this.form.value.first_surname,
        last_surname: this.form.value.last_surname, 
        dni: this.form.value.dni,
        status_id: this.form.value.status_id,
      }
      this.loading = true;
      this.employeesService.edit(id, data).then(() =>{
        this.loading = false;
        this.titulo = `Editando ${data.names} ${data.first_surname} ${data.last_surname}`;
        this.form.reset();
        this.id = undefined;
        this.toastr.info('El Empleado fue actualizado con exito!', 'Registro Actualizado');
      }, error => {
        console.log(error);
      })
    }
  
    saveEmployee() {
      const data: EmployeesModel = {
        id_employees: new Date().getTime(),
        names: this.form.value.names,
        first_surname: this.form.value.first_surname,
        last_surname: this.form.value.last_surname, 
        dni: this.form.value.dni,
        status_id: 1,
      }
      this.loading = true;
      this.employeesService.create(data).then(() => {
        this.loading = false;
        this.toastr.success('El empleado fue registrada con exito!', 'Empleado Registrado')
        this.form.reset();
      }, error => {
        this.loading = false;
        this.toastr.error('Opps.. ocurrio un error', 'Error');
        console.log(error);
      })
    }

    private async getEmployee(){
      this.employeesService.getEmployee().subscribe(data => {
        this.id = data.id;
        this.titulo = `Editando ${data.names} ${data.first_surname} ${data.last_surname}`;
        this.form.patchValue({
          names: data.names,
          first_surname: data.first_surname,
          last_surname: data.last_surname,
          dni: data.dni,
          status_id: data.status_id,
        })
      })
    }
    
  
  }