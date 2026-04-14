import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { messageService } from '../../../../../services/message'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mensaje.html',
  styleUrls: ['./mensaje.css']
})
export class Mensaje {

  
  name = '';
  email = '';
  message = '';
  status = '';

  constructor(private messageService: messageService,
    private router:Router
  ){}

  Mensaje(){
  this.router.navigate(['mensaje']);
}


  onSubmit(form:any) {
    if(!form.valid){
      this.status = 'Por favor completa los campos.';
      return;
    }
    this.status = 'Enviando...';

    this.messageService.sendMessage({ 
      name: this.name,
      email: this.email, 
      message: this.message})
    .subscribe({
      next: (res) => this.status = 'Mensaje enviado correctamente!',
      error: (err) => this.status = 'Error al enviar'
      
      });
  }
  

}
