import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
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
  constructor(private http: HttpClient) {
    console.log('Emp Service created');
  }

  getEmployeeList(): Employee[] {
    return this.employeeList;
  }

  addEmployee(emp: Employee) {
    return this.employeeList = [...this.employeeList, emp];
  }

  getEmployee() {
    return {
      name: 'Rakesh',
      email: 'abc@test.com',
      dob: new Date('10-Jan-2000'),
      password: '',
      confirmPassword: '',
      pastExp: [
        {
          employer: '',
          fromDate: new Date(),
          toDate: new Date(),
          designation: ''
        }
      ]
    }
  }

  addEmp(emp: Employee) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', emp);
  }

}
