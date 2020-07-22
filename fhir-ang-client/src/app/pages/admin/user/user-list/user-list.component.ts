import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, TableColumn } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  listOfColumns: TableColumn[] = [
    {
      name: 'Name',
      sortOrder: 'ascend',
      sortFn: (a: User, b: User) => a.username.localeCompare(b.username),
    },
    {
      name: 'First Name',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.firstname.localeCompare(b.firstname),
    },
    {
      name: 'Last Name',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.firstname.localeCompare(b.firstname),
    },
    {
      name: 'Role',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.role.localeCompare(b.role),
      filterMultiple: true,
      listOfFilter: [
        { text: 'Admin', value: 'Admin' },
        { text: 'Doctor', value: 'Doctor' },
        { text: 'User', value: 'User' },
      ],
      filterFn: (list: string[], item: User) =>
        list.some((role) => item.role.indexOf(role) !== -1),
    },
    {
      name: 'Action',
    },
  ];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
      });
  }
}
