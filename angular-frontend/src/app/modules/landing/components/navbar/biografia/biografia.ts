import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biografia',
  standalone: true,
  imports: [],
  templateUrl: './biografia.html',
  styleUrls: ['./biografia.css']
})
export class Biografia {

constructor(private router:Router){}

Biografia(){

  this.router.navigate(['biografia'])
}
}
