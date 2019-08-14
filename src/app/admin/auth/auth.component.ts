import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username, this.password).subscribe(response => {
        if (response) {
          this.router.navigateByUrl('/admin/main');
        } else {
          this.errorMessage = 'Uwierzytelnienie zakończyło się niepowodzeniem';
        }
      })
    } else {
      this.errorMessage = 'Nieprawidłowe dane';
    }
  }
}
