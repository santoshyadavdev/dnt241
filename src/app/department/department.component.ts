import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
