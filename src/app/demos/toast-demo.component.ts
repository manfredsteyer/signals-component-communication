import { Component, ViewContainerRef, viewChild } from '@angular/core';
import { ToastComponent } from './toast.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  template: `
    <h2>Toast Demo</h2>
    <button (click)="show()">Show Toast</button>
    <ng-container #placeholder></ng-container>
  `,
  styles: `
    button {
      width: auto;
    }
  `
})
export class ToastDemoComponent {
  counter = 0;
  placeholder = viewChild.required('placeholder', { read: ViewContainerRef });

  show() {
    const ref = this.placeholder()?.createComponent(ToastComponent);
    this.counter++;
    ref?.setInput('label', 'Message #' + this.counter);
    setTimeout(() => ref?.destroy(), 2000);
  }

}
