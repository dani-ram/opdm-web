import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rssservice } from '../../../../../services/rssservice'; 
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-galeriaprogramas',
  standalone: true,
  imports: [  
      CommonModule
      ],
  templateUrl: './galeriaprogramas.html',
  styleUrls: ['./galeriaprogramas.css']
})
export class Galeriaprogramas implements OnInit {

  episodios: any[] = [];
  currentAudio?: HTMLAudioElement;

  constructor(private router:Router,
              private rssservice: Rssservice,
              private cdr: ChangeDetectorRef
  ){}

    Navegararuta(){
      this.router.navigate(['/galeriaprogramas'])
    
  }
  ngOnInit(): void{
    this.rssservice.getepisodios().subscribe({
      next: (data) => {
        this.episodios = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error al obtener episodios: ', err)
    });
  }
    play(ep: any){
      if(this.currentAudio) this.currentAudio.pause();

      const audio = new Audio(ep.audio);
      audio.play();
      this.currentAudio = audio;
    }
  }
