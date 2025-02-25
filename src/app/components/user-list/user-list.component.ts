import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: User = { name: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe((user) => {
      this.users.push(user);
      this.newUser = { name: '', email: '' };
    });
  }
}