import { Component } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(valido:AuthService, private router: Router){
    
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expira');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
}
}
