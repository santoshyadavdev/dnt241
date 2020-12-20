import { Component, OnInit, SkipSelf } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/service/employee.service';

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

  constructor(@SkipSelf() private empService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList = this.empService.getEmployeeList();
  }

  addEmployee() {
    let ritesh = {
      id: 5,
      name: 'Ritesh',
      dob: new Date('10-Jun-2007'),
      email: 'Ritesh@test.com',
      salary: 8000
    }
    this.employeeList = this.empService.addEmployee(ritesh);
  }

}
