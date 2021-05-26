import { Component, OnInit } from '@angular/core';
import { DatadisplayService } from '../datadisplay.service';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public _url : string = "\app\alldata.json"

  constructor(private dataService: DatadisplayService) { }

  ngOnInit(): void {
  //   this.dataService.getLocalData().subscribe(
  //     data => {
  //       console.log(data);


  //     }
  //   )
  // }

  // registerUser(data): void {



  //   debugger

  //   this.dataService.postLocalData(data)
  //     .subscribe((result) => {

  //       debugger
  //       console.warn("result", result)

  //     }
  //     )


  }

}
