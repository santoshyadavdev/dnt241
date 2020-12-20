import {
  AfterViewInit, Component, DoCheck,
  ElementRef, OnChanges, OnInit,
  Optional,
  QueryList, Self, ViewChild, ViewChildren
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoggerService } from '../service/logger.service';
import { Employee } from './employee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // template: `<p>employee
  //   works!</p>`,
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
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

  constructor(@Self() private empService: EmployeeService,
    @Optional() private logger: LoggerService) {
    this.hide = false;
    console.log('parent component constructor');
  }

  ngOnInit(): void {
    if (this.logger) {
      this.logger.log(this.errdiv.toString());
    }
    this.errdiv.nativeElement.innerHTML = '<b>This is error</b>';

    console.log('parent component ngoninit');
    // this.headerComponent.title = 'Employee List';

    this.employeeList = this.empService.getEmployeeList();
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
