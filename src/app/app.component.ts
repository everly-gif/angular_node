import { Component } from '@angular/core';
import { User } from './user';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angapp';

  users$!: User[];

  constructor(public employeeservice: EmployeeService) {}

  ngOnInit() {
    this.employeeservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
    

   
  }
}

