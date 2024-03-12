import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div>
    <div class="numberBox">
      <p class="count"> {{ count }} </p>
      <p class="reset" (click)="resetCount()">reset</p>
    </div>
    <div class="buttonBox">
      <div class="btn" (click)="incrementCount()"> + </div>
      <div class="btn" (click)="DecrementCount()"> - </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppCounter {
  title = 'Counter';
  
  count = 0;

  incrementCount() {
    this.count++;
  }

  DecrementCount() {
    this.count--;
  }

  resetCount() {
    this.count = 0;
  }
}
