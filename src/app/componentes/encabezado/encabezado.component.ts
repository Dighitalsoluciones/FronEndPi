import { Component, OnInit } from '@angular/core';
import { PrincipalPorfolioService } from 'src/app/servicios/principal-porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosPorfolio:PrincipalPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }

}
