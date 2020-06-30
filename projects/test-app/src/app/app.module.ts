import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FunkyModule } from "funky";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FunkyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
