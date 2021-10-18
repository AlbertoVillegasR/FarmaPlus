import { Component, OnInit } from '@angular/core';
import { OtherModel } from 'src/app/core/models/others.model';
import { EmployeesService } from 'src/app/core/services/employees.service';
import { OtherService } from 'src/app/core/services/other.service';

@Component({
  selector: 'app-monitoring-list',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class MonitoringIndexComponent implements OnInit {

  data: OtherModel[] = [];

  constructor(
    private monitoringService: OtherService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  private async list(): Promise<void>{
    this.monitoringService.list().subscribe(doc => {
      this.data=[];
      doc.forEach((element:any) => {
        this.data.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
    });
  }

}
