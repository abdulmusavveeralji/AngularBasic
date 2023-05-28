import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  // imgURL = 'https://picsum.photos/id/237/200/300'
  @Input() postImg = '';
  @Output() selectedImg = new EventEmitter();

  constructor() {
    console.log('constructor called', this.postImg)
  }
  ngOnInit(): void {
    console.log('ngOnInit called', this.postImg)
  }

  ngOnChanges(): void {
    console.log('onchanges called')
  }
  ngDoCheck(): void {
    console.log('docheck called')
  }

  ngAfterContentChecked(): void {
    console.log('contentchecked called')
  }

  ngAfterContentInit(): void {
    console.log('content init called')
  }

  ngAfterViewChecked(): void {
    console.log('view Checked called')
  }

  ngAfterViewInit(): void {
    console.log('view Init called')
  }

  ngOnDestroy(): void {
    console.log('On destroy called')
  }

}
