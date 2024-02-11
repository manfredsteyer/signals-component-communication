import { Component, ViewContainerRef, viewChild } from '@angular/core';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  template: `
    <h2>Dynamic Example</h2>
    <input type="button" value="Add" (click)="add()">
    <ng-container #placeholder></ng-container>
`,
})
export class DynamicComponent {
  counter = 0;
  placeholder = viewChild('placeholder', { read: ViewContainerRef });

  add() {
    const ref = this.placeholder()?.createComponent(InfoComponent);
    this.counter++;
    ref?.setInput('label', 'Option #' + this.counter);
    setTimeout(() => ref?.destroy(), 2000);
  }

}
