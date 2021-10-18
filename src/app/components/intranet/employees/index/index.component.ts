import { Component, OnInit } from '@angular/core';
import { OtherModel } from 'src/app/core/models/others.model';
import { EmployeesService } from 'src/app/core/services/employees.service';
import { OtherService } from 'src/app/core/services/other.service';

@Component({
  selector: 'app-intranet-index-employees',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class EmployeesIndexComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
