import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  password!: string;

  constructor(
    public layoutService: LayoutService,
    private router: Router
  ) { }

  login() {
    localStorage.setItem("login", "true");
    this.router.navigate(['uikit/list']);
  }
}
