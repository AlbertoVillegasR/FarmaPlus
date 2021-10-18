import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { AuthModel } from "../models/auth.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private login$ = new Subject<any>();
    constructor() { }

    getEmployee(): Observable<AuthModel> {
        return this.login$.asObservable();
    }

    Employee(data: AuthModel) {
        this.login$.next(data);
    }
}