import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Animacion } from "./components/hero/animacion";
import { Programas } from './components/programas/programas';
import { Galeriaprogramas } from './components/programas/galeriaprogramas/galeriaprogramas';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Navbar, Animacion, Programas
  ],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class Landing {

}
