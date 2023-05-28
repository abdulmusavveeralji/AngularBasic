import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Hello World!</p>`
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'abdul musavveer alji'
  currentDate = new Date();
  cost = '2000'
  temparature = '25.23'

  imgURL = "https://picsum.photos/id/231/500/500";
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
