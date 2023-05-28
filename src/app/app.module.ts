import { NgModule } from '@angular/core'
import { BrowserModule} from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    PostsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
