import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Rssservice } from '../../../../services/rssservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programas',
  standalone: true,
  imports: [RouterLink, CommonModule ],
  templateUrl: './programas.html',
  styleUrls: ['./programas.css']
})
export class Programas {

  
  ultimos: any[] = [];

    constructor(private router: Router, 
              private rssservice: Rssservice,
              private cdr: ChangeDetectorRef
    ){}

    navegaraRuta(){
      this.router.navigate(['/galeriaprogramas'])

    }

    ngOnInit(): void{
      this.rssservice.getepisodios().subscribe({
        next: (data) => {
           
            this.ultimos = data.slice(0,5);
            this.cdr.detectChanges();
           },
        
        
        error: (err) => {
              console.error('Error al obtener episodios: ', err);
      }
    });
  }
}


