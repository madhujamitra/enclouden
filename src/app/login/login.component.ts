import { Component, OnInit } from '@angular/core';
import { DatadisplayService, LOGGED_IN_USER } from '../datadisplay.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DatadisplayService, private router: Router) { }

  ngOnInit(): void { }

  registerUser(data): void {
    let userPresent = this.dataService.login(data)
    if (userPresent) {
      localStorage.setItem(LOGGED_IN_USER, JSON.stringify(data)) //Saving logged in user
      this.router.navigate(['/comments', { userDetails: data }]);
    } else {
      this.router.navigate(['/register']);
    }
  }

}
