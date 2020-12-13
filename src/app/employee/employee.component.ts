import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // template: `<p>employee
  //   works!</p>`,
  styleUrls: ['./employee.component.scss']
  // styles: []
})
export class EmployeeComponent implements OnInit {
  name = 'Amar';

  hide = false;

  employee: Employee = {
    id: 1,
    name: 'Anand',
    dob: new Date('10-Jan-2000'),
    email: 'anand@test.com',
    salary: 4000
  };

  employeeList: Employee[] = [
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hide = !this.hide;
  }

  receiveFromChild(emp: Employee) {
    this.employee = emp;
  }



}
