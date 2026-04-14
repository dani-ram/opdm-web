import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [],
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css']
})
export class Noticias {

  constructor (private router:Router){}
 
  Noticias(){
  this.router.navigate(['noticias'])
  }
}
