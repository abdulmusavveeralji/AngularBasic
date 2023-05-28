import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Hello World!</p>`
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'world'

  imgURL = "https://picsum.photos/id/237/200/300";
  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(e: string) {
    console.log(e);
  }
}
