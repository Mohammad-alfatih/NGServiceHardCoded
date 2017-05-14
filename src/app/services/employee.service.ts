import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    employees: any;

    constructor() {
        this.employees = [
            {"id":0, "name":"Ahmad", "gender":"Male"},
            {"id":2, "name":"Hashim", "gender":"Male"},
            {"id":3, "name":"Sumayyah", "gender":"Female"},
            {"id":4, "name":"Zahra", "gender":"Female"},
            {"id":5, "name":"Sulaiman", "gender":"Male"}
        ];
    }

    getEmployees() {
        return this.employees;
    }
}