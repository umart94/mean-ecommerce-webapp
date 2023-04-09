import { Component, OnInit } from '@angular/core';
import { AuthService } from '@eshop/users';

@Component({
  selector: 'eshop-admin-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logoutUser() {
    this.authService.logout();
  }
}
