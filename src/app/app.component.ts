import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2 #text>{{phrase}}</h2>
    <textarea #answer
      (keydown)="timer.isRunning || timer.start()"
      (keyup)="answer.value === text.innerText && timer.stop()"
      cols="50" rows="5"></textarea>
    <div>
      <button (click)="answer.value=''; next()">Next</button>
    </div>
    <div [hidden]="answer.value !== text.innerText">
      <app-timer #timer></app-timer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private phrases: string[] = [
    'Beware the moon.',
    'We\'re gonna need a bigger boat.',
    'The first rule of project mayhem is you do not ask questions.',
    'I want you to hit me as hard as you can.',
    'I want you to deal with your problems by becoming rich!'
  ];

  private position = 0;

  next(): void {
    this.position = this.position === this.phrases.length - 1 ? 0 : this.position + 1;
  }

  get phrase(): string {
    return this.phrases[this.position];
  }
}
