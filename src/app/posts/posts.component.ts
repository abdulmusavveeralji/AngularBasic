import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  // imgURL = 'https://picsum.photos/id/237/200/300'
  @Input() postImg = '';
  @Output() selectedImg = new EventEmitter();
}
