import { Component, Input, OnInit } from '@angular/core';
import { Colaborador } from '../../models/colaborador.model';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.scss']
})
export class ColaboradorComponent implements OnInit {

  @Input()
  colaborador?: Colaborador;

  constructor() { }

  ngOnInit(): void {
  }

}
