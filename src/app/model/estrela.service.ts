import { Injectable } from '@angular/core';
import { Filmes } from './filmes';

@Injectable({
  providedIn: 'root',
})
export class EstrelaService {
  getEstrela(filme: Filmes): string {
    let nota = filme.nota.toFixed(1);
    switch (parseInt(nota)) {
      case 10:
        filme.estrela =
          'https://drive.google.com/uc?id=1l21uYaSjes32jkp7huRs-zaCYwgzbPzz';
        break;
      case 9:
        filme.estrela =
          'https://drive.google.com/uc?id=14VGjZnq0XkhwiSrOeGXBhfRNW4reRKzz';
        break;
      case 8:
        filme.estrela =
          'https://drive.google.com/uc?id=1h-lwJEi2eIps-42CbD6e0GGwseX77V-R';
        break;
      case 7:
        filme.estrela =
          'https://drive.google.com/uc?id=14hoCi5kjg80ayd1C9AZxKezrcqYQg9GC';
        break;
      case 6:
        filme.estrela =
          'https://drive.google.com/uc?id=1gg0B1UiDnC9HVTLa8iST79_bjTJ2hLd7';
        break;
      default:
        filme.estrela =
          'https://drive.google.com/uc?id=1DUBpDMHv8OQqXeeZRp7cT_-KSpS0tqAp';
    }
    return filme.estrela;
  }
}
