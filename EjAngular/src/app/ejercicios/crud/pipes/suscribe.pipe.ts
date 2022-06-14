import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suscribe'
})
export class SuscribePipe implements PipeTransform {

  transform(suscribe: boolean): string {

    if (suscribe) {
      return 'bi bi-check-circle'
    }
    return 'bi bi-x-circle';
  }

}
