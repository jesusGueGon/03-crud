import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  public users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.users = [...this.userService.users];
  }


  get allUsersService() {
    return this.userService.allUsers;
  }

  redirectId(userId: string) {
    this.router.navigate(['/crud/edit', userId]);
  }

  // setUser(userEnviar: User) {
  //   this.userService.setUser(userEnviar);
  // }

}
