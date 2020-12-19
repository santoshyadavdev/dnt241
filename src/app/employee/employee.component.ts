import {
  AfterViewInit, Component, DoCheck,
  ElementRef, OnChanges, OnInit,
  QueryList, ViewChild, ViewChildren
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // template: `<p>employee
  //   works!</p>`,
  styleUrls: ['./employee.component.scss']
  // styles: []
})
export class EmployeeComponent implements OnInit, DoCheck, AfterViewInit {
  name = 'Amar';

  hide: boolean;

  employee: Employee = {
    id: 1,
    name: 'Anand',
    dob: new Date('10-Jan-2000'),
    email: 'anand@test.com',
    salary: 4000
  };

  employeeList: Employee[];

  @ViewChildren(HeaderComponent) headerListComponent: QueryList<HeaderComponent>;

  // @ViewChild(HeaderComponent, { static: false }) headerComponent: HeaderComponent;

  @ViewChild('errorDiv', { static: true }) errdiv: ElementRef;

  constructor() {
    this.hide = false;
    console.log('parent component constructor');
  }

  ngOnInit(): void {
    console.log(this.errdiv);
    this.errdiv.nativeElement.innerHTML = '<b>This is error</b>';

    console.log('parent component ngoninit');
    // this.headerComponent.title = 'Employee List';

    this.employeeList = [
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
  }

  ngDoCheck() {
    console.log('Do check is called');
  }

  ngAfterViewInit() {

    this.headerListComponent.forEach((header) => header.title = 'Employee Component');
    this.headerListComponent.first.title = 'This is First Employee Header';
    this.headerListComponent.last.title = 'This is Last Employee Header';
    // setTimeout(() => {
    // this.headerComponent.title = 'Employee List';
    // }, 0);
  }

  toggle() {
    this.hide = !this.hide;
  }

  receiveFromChild(emp: Employee) {
    this.employee = emp;
  }
  addEmployee() {
    // this.employeeList.push(
    //   {
    //     id: 5,
    //     name: 'Ritesh',
    //     dob: new Date('10-Jun-2007'),
    //     email: 'Ritesh@test.com',
    //     salary: 8000
    //   }
    // )

    let ritesh = {
      id: 5,
      name: 'Ritesh',
      dob: new Date('10-Jun-2007'),
      email: 'Ritesh@test.com',
      salary: 8000
    }
    this.employeeList = [...this.employeeList, ritesh];
  }



}
