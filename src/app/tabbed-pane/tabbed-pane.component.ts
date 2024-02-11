import { Component, computed, contentChildren, model } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  standalone: true,
  imports: [],
  template: `
    <div class="pane">
      <div class="nav">
          @for(tab of tabs(); track tab) {
              <a (click)="current.set($index)">{{tab.title()}}</a>
          }
      </div>
      <ng-content ></ng-content>
    </div>
  `,
  styles: `
    .pane .nav a {
      border-bottom: 5px solid goldenrod;
      margin-right: 5px;
      padding:5px;
      cursor: pointer;
    }

    .pane .nav {
      padding-bottom: 20px;
    }
  `
})
export class TabbedPaneComponent {
  current = model(0);
  tabs = contentChildren(TabComponent);
  currentTab = computed(() => this.tabs()[this.current()]);
}
