import { NgModule } from "@angular/core";
import { FunkyComponent } from "./funky.component";
import { SharedModule } from "shared";

@NgModule({
  declarations: [FunkyComponent],
  imports: [SharedModule],
  exports: [FunkyComponent],
})
export class FunkyModule {}
