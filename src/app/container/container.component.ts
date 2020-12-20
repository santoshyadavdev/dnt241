import { AfterContentInit, Component, ContentChild, ContentChildren, Host, OnInit, QueryList } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeService } from '../employee/service/employee.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers : [EmployeeService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(DepartmentComponent, { static: true }) department: DepartmentComponent;

  @ContentChildren(EmployeeComponent) empListCompoent: QueryList<EmployeeComponent>;

  constructor(@Host() private empService: EmployeeService) { }

  ngOnInit(): void {
    console.log(this.department);
    this.empService.addEmployee(
      {
        id: 6,
        name: 'Rakesh',
        dob: new Date('10-Jun-2007'),
        email: 'Rakesh@test.com',
        salary: 89000
      }
    )
  }

  ngAfterContentInit() {
    console.log(this.empListCompoent);
  }


}
