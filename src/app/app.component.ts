import { Component } from '@angular/core';
import { USER_COMMENTS } from "./datadisplay.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comments';
  constructor() {
    const mockJson = [
      {
        "userName": 'test',
        comments: {
          question: 'Why earth is not flat ?',
          reply: ''
        }
      }
    ]

    localStorage.setItem(USER_COMMENTS, JSON.stringify(mockJson))
  }
}
