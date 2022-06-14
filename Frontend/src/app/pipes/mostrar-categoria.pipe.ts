import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarCategoria',
})
export class MostrarCategoriaPipe implements PipeTransform {
  transform(value: string): string {
    if (value == 'm') return 'Menor';
    else if (value == 'j') return 'Jubilado';
    return 'Adulto';
  }
}
