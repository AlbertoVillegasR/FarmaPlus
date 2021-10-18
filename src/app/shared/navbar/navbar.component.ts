import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  login = false;
  
  constructor(
    
    private authService: AuthService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getEmployee();
    console.log("INICIO")
  }

  private async getEmployee(){
    this.authService.getEmployee().subscribe(data => {
      console.log(data)
      this.login = data.is_login
    })
  }

}
