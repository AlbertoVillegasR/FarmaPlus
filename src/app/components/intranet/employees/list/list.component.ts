import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { STATUS } from 'src/app/core/models/base/enums';
import { EmployeesModel } from 'src/app/core/models/employees.model';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-intranet-list-employees',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class EmployeesListComponent implements OnInit {
  status = { enabled : STATUS.enabled , disabled : STATUS.disabled}

  data: EmployeesModel[] = [];

  constructor(
    private employeesService: EmployeesService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.list();
  }

  private async list(): Promise<void>{
    (await this.employeesService.list()).subscribe(doc => {
      this.data=[];
      doc.forEach((element:any) => {
        this.data.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
        console.log(this.data);
      });
    });
  }

  editarTarjeta(data: EmployeesModel) {
    this.employeesService.Employee(data);
  }

  disabled(id:any,item: EmployeesModel){
    item.status_id = STATUS.disabled
    this.employeesService.edit(id, item)
  }

  enabled(id:any , item: EmployeesModel){
    item.status_id = STATUS.enabled
    this.employeesService.edit(id, item).then
  }

  remove(id: any) {
    this.employeesService.remove(id).then(() => {
      this.toastr.error('Usuario eliminado Correctamente','Registro Eliminado')
    }, error => {
      this.toastr.error('Opss.. ocurrio un error', 'Error');
      console.log(error);
    })
  }

  getStatus(status_id:number | null){
    switch(status_id){
      case 1 : return "Activo"
      case 2 : return "Inactivo"
      default : return "";
    }

  }

}
