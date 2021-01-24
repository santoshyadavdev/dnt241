import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(name: string, args?: string): string {
    return `welcome ${name}`;
  }

}
