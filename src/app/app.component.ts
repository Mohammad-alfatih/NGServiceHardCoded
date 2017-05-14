import { Component } from '@angular/core';

import { EmployeeService } from './services/employee.service';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'my-app',
  template: `<h1>List of Employees</h1>
              <employee-list></employee-list>`,
  providers: [ EmployeeService ]
})
export class AppComponent  { }
