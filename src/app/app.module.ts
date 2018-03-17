import { TaskService } from './app.service';
import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

//Third Party Modules
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
