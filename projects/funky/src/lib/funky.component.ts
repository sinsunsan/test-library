import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-funky",
  template: `
    <p>
      funky works 1! with
      <lib-shared></lib-shared>
    </p>
  `,
  styles: [
    `
      p {
        background: yellow;
        font-size: 20px;
      }
    `,
  ],
})
export class FunkyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
