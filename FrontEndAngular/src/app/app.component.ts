import { Component} from '@angular/core';
import { LlamadoService } from './llamado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id_select = '';
  id = '';
  price = '';
  description = '';
  id2 = '';
  price2 = '';
  description2 = '';

  constructor(private llamadoService: LlamadoService){
    
  }
  
  buscarUno() {
    this.id = this.llamadoService.id;
    this.price = this.llamadoService.price;
    this.description = this.llamadoService.description;
    this.llamadoService.llamarUno();  
  }
  buscarTodo() {
    this.llamadoService.id_select = this.id_select;
    this.id2 = this.llamadoService.id2;
    this.price2 = this.llamadoService.price2;
    this.description2 = this.llamadoService.description2;
    this.llamadoService.llamarTodo();  
  }
  
}