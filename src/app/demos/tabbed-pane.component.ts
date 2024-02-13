import { Component, EventEmitter, Output, computed, contentChildren, input, model, output } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabbed-pane',
  standalone: true,
  imports: [],
  template: `
    <div class="pane">
      <div class="nav" role="group">
          @for(tab of tabs(); track tab) {
              <button [class.secondary]="tab !== currentTab()" (click)="currentChange.emit($index)">{{tab.title()}}</button>
          }
      </div>
      <article>
        <ng-content ></ng-content>
      </article>
    </div>
  `,
  styles: `
    .pane .nav button {
      cursor: pointer;
      text-decoration: none;
      padding: 10px 20px;
    }

    .pane .nav {
      margin-bottom: 10px;
      width:auto;
    }
  `
})
export class TabbedPaneComponent {
  current = input(0);
  currentChange = output<number>();

  tabs = contentChildren(TabComponent);
  currentTab = computed(() => this.tabs()[this.current()]);
}
