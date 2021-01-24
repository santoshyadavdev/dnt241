import {
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnChanges, OnInit, Output, SimpleChanges
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit, OnChanges {

  @Input() empList: Employee[];

  @Input() title: string;

  @Output() selectedEmployee = new EventEmitter<Employee>();

  salary: FormControl;

  constructor() {
    console.log('child component constructor');
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.empList);
  }

  ngOnInit(): void {
    this.salary = new FormControl('0');
    console.log('child component ngoninit');
  }

  loadMoreEmployee() {
    this.empList = [
      {
        id: 1,
        name: 'Anand',
        dob: new Date('10-Feb-2000'),
        email: 'anand@test.com',
        salary: 4000
      },
      {
        id: 2,
        name: 'Ajay',
        dob: new Date('10-Mar-2000'),
        email: 'anand@test.com',
        salary: 5000
      },
      {
        id: 3,
        name: 'Amar',
        dob: new Date('10-Apr-2000'),
        email: 'anand@test.com',
        salary: 6000
      },
      {
        id: 4,
        name: 'Rony',
        dob: new Date('10-Jun-2000'),
        email: 'anand@test.com',
        salary: 7000
      },
      {
        id: 5,
        name: 'Avinash',
        dob: new Date('10-Jun-2000'),
        email: 'anand@test.com',
        salary: 7000
      },
    ]
  }

  trackbyId(index: number, employee: Employee) {
    return employee.id;
  }

  selectEmployee(emp: Employee) {
    this.selectedEmployee.emit(emp);
  }
}
