import { Component } from '@angular/core';
import { CommentNode } from './comments/comment-tree.component'
import { DatadisplayService, LOGGED_IN_USER } from '../datadisplay.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppCommentComponent {
  comments: Array<CommentNode> = [];

  constructor(private dataService: DatadisplayService) {
    
    this.comments = [new CommentNode(this.dataService.getComment(localStorage.getItem('LOGGED_IN_USER')))]
  }
}
