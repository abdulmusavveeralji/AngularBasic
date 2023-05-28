import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  // imgURL = 'https://picsum.photos/id/237/200/300'
  @Input() postImg = '';
  @Output() selectedImg = new EventEmitter();

  constructor() {
    console.log('constructor called', this.postImg)
  }
  ngOnInit(): void {
    console.log('ngOnInit called', this.postImg)
  }
}
