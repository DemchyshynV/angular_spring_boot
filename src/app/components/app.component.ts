import {Component, OnInit} from '@angular/core';
import {UserService} from '../services';
import {IUser} from '../interfaces';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled';
  form: FormGroup;
  users: IUser[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      status: new FormControl('')
    });
  }

  create(form: FormGroup): void {
    console.log(form.getRawValue());
    this.userService.createUser(form.getRawValue()).subscribe(value => {
      this.users.push(value);
    });
  }
}
