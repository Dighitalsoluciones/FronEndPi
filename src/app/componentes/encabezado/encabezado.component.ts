import { Component, OnInit } from '@angular/core';
import { encabezado } from 'src/app/model/encabezado.model';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  encabezado: encabezado = new encabezado("", "", "", "");

  constructor(public encabezadoService: EncabezadoService) { }

  ngOnInit(): void {
    this.encabezadoService.obtenerEncabezado().subscribe(data => {this.encabezado = data})
    
  }

}
