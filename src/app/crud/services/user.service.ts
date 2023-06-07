import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public users: User[] = [
    {
      id: '5g2dch354f4d54j45dgjk43dgyf',
      name: 'Juan',
      password: '1234',
      password2: '1234',
      email: 'juan@gmail.com',
      offers: true,
      country: 'Qatar',
      city: 'Angola',
    },
    {
      id: 'fg6h53dfg5j46fdji5fy4j',
      name: 'Pedro',
      password: '1234',
      password2: '1234',
      email: 'pedro@gmail.com',
      offers: false,
      country: 'Qatar',
      city: 'Angola',
    },
  ];

  user!: User;

  get allUsers() {
    return this.users;
  }

  addUser(user: User) {
    if(user)
    {
      this.allUsers.push(user);
    }
  }

  getUserById(userId: string) {
    return this.users.find(user => user.id === userId);
  }




}
