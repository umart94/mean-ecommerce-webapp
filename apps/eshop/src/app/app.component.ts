import { Component, OnInit } from '@angular/core';
import { UsersService } from '@eshop/users';

@Component({
  selector: 'eshop-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'eshop';
  constructor(private usersService: UsersService) {
    this.usersService.initAppSession();
  }

 
  
}
