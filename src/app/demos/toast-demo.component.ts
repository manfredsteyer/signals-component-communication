import { Component, ViewContainerRef, viewChild } from '@angular/core';
import { outputToObservable } from '@angular/core/rxjs-interop';

import { ToastComponent } from './toast.component';
import { map, race, timer } from 'rxjs';

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
    const title = 'Message #' + this.counter;
    ref.setInput('label', title);

    const confirmed$ = outputToObservable(ref.instance.confirmed)
      .pipe(map(title => ({ trigger: 'confirmed', title })));

    const timer$ = timer(5000)
      .pipe(map(() => ({ trigger: 'timeout', title })));

    race(confirmed$, timer$).subscribe(action => {
      ref?.destroy();
      console.log('action', action);
    });

  }

}
