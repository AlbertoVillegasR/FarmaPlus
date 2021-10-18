import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { OtherModel } from "../models/others.model";

@Injectable({
    providedIn: 'root'
  })
export class OtherService {
  constructor(
      private firestore: AngularFirestore
      
  ) { }
  list(): Observable<any>{
    return this.firestore.collection('tarjetas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  async create(data: OtherModel){
    return this.firestore.collection('tarjetas').add(data);
  }

}
