import { Component, OnInit } from '@angular/core';
import { DatadisplayService } from '../datadisplay.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private dataService: DatadisplayService, private router: Router) { }

  ngOnInit(): void { }

  registerUser(data): void {
    let isUserRegister = this.dataService.postLocalData(data)

    if (isUserRegister) {
      this.router.navigate(['/comments']);
    }

  }

}
