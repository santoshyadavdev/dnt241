import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(empList: Employee[], salary: number): Employee[] {
    return empList.filter((emp)=> emp.salary > salary);
  }

}
