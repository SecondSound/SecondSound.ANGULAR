import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {User} from "../../../../shared/models/user.model";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: User;
  loading: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      this.loading = false;
    });
  }

}
