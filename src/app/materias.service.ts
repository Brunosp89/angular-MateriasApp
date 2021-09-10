import { Injectable } from '@angular/core';
//import { LoggerService } from './logger.service';

interface Materia {
  title: string;
}

@Injectable()
export class MateriasService {
  list: Array<Materia> = [];

  constructor() {}

  getList() {
    return this.list;
  }

  add(title: string) {
    this.list.push({ title });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
