import { Component, contentChildren, effect, model } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  standalone: true,
  imports: [],
  templateUrl: './tabbed-pane.component.html',
  styleUrl: './tabbed-pane.component.css'
})
export class TabbedPaneComponent {

  current = model(0);
  tabs = contentChildren(TabComponent);

  constructor() {

    // Issue 1: We need `allowSignalWrites` for updating tabs
    // Issue 2: `visible` cannot be a `input()`, because this
    //  would also prevent to write it programmatically from
    //  the *outside*. It needs to be a `signal()` or a `model()`

    effect(() => {
      this.tabs().forEach((tab, idx) => {
        tab.visible.set(idx === this.current())
      });
    }, { allowSignalWrites: true });
  }

}
