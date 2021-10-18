import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthModel } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-intranet-login',
  templateUrl: './login.component.html',
})
export class IntranetLoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  async ngOnInit(): Promise<void> {
  }

  submit() {
    const data: any = {
      user: this.form.value.user,
      password: this.form.value.password
    }
    if (data.user === "123" && data.password === "123"){
      this.editarTarjeta(data);
      this.router.navigate([`/admin/employees/index`]);
    } else {
      this.toastr.error('Usuario y/o contraseña incorrectos', 'Autentificacion Fallida');
    }
  }

  editarTarjeta(data: AuthModel) {
    data.is_login=true
    this.authService.Employee(data);
  }

}