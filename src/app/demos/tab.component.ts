import { Component, input, inject, computed, output, effect } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane.component';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  template: `
    @if(visible()) {
      <div class="tab">
        <h2>{{ title() }}</h2>
        <ng-content></ng-content>
      </div>
    }
  `,
})
export class TabComponent {
  pane = inject(TabbedPaneComponent);

  title = input.required<string>();
  visible = computed(() => this.pane.currentTab() === this)
}
