import { Component, VERSION } from '@angular/core';
import { TimerService } from './timer.service';
import {MateriasService} from './materias.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Matérias App ';


  constructor(public timer: TimerService, public materias: MateriasService) {
    this.timer.start(1000);
    this.materias.add('Tópicos Especiais em Sistemas para Internet II');
    this.materias.add('Desenvolvimento para Dispositivos Móveis II');
    this.materias.add(
      'Projeto de Trabalho de Graduação em Sistemas para Internet I'
    );
    this.materias.add('Estágio Supervisionado em Sistemas para Internet');
  }
}
