 import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule
],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

  constructor (private router: Router){}

  Inicio(){
    this.router.navigate(['/'])
  }
  
  Biografia(){
    this.router.navigate(['/biografia'])
  }  
  
  Enviarmensaje(){
    this.router.navigate(['/mensaje'])
    }

  Noticias(){
    this.router.navigate(['/noticias'])
}
}
