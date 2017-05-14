import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';

@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: 'employee-list.component.html'
})

export class EmployeeListComponent implements OnInit {
    employees: any;

    constructor(private _employeeService: EmployeeService) { }

    ngOnInit() {
        this.employees = this._employeeService.getEmployees();
    }
}