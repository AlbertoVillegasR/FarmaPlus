import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { EmployeesModel } from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employee$ = new Subject<any>();
  
  constructor(private firestore: AngularFirestore) { }

  list(){
    // ref => ref.orderBy('fechaCreacion', 'asc')
    return this.firestore.collection('employees').snapshotChanges();
  }

  create(data: EmployeesModel): Promise<any>{
    return this.firestore.collection('employees').add(data);
  }

  edit(id: string, data: any): Promise<void>{
    return this.firestore.collection('employees').doc(id).update(data);
  }

  remove(id: string): Promise<any> {
    return this.firestore.collection('employees').doc(id).delete();
  }


  getEmployee(): Observable<EmployeesModel> {
    return this.employee$.asObservable();
  }

  Employee(data: EmployeesModel) {
    this.employee$.next(data);
  }
}
