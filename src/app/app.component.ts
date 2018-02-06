import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud';
  msg: string = '';
  employees = [
    { 'name': 'Fazt', position: 'manager', email: 'xxx' },
    { 'name': 'Juan', position: 'designer', email: 'aaa' },
    { 'name': 'Pedro', position: 'developer', email: 'bbb' }];

  model: any = {};
  model2: any = {};
  myValue;
  hideUpdate:boolean = true;

  addEmployee(): void {
    this.employees.push(this.model);
    this.msg='added';
  }

  deleteEmployee(i): void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg='this item was deleted';
    }
  }

  editEmployee(i): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
   
  }

  updateEmployee(): void {
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg='item updated';
      }
    }
  }
  closeAlert():void {
    this.msg = '';
  }
}

