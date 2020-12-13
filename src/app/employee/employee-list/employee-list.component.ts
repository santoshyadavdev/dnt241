import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() empList: Employee[];

  @Output() selectedEmployee = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit(): void {
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

  selectEmployee(emp:Employee) {
    this.selectedEmployee.emit(emp);
  }
}