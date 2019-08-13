import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Injectable()
export class AuthGuard {
  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.authenticated) {
      this.router.navigateByUrl('/admin/auth');
      return false;
    }
    return true;
  }
}
