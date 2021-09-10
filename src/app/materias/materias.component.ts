import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  constructor(public materias: MateriasService) {
    /*   inserção das matérias estão no app component.ts
   
    this.materias.add('Tópicos Especiais em Sistemas para Internet II');
    this.materias.add('Desenvolvimento para Dispositivos Móveis II');
    this.materias.add(
      'Projeto de Trabalho de Graduação em Sistemas para Internet I'
    );
    this.materias.add('Estágio Supervisionado em Sistemas para Internet');
    */
  }

  ngOnInit() {}
}
