import { Component, computed, contentChildren, model } from '@angular/core';
import { TabComponent } from './tab.component';
import { outputFromObservable, toObservable } from '@angular/core/rxjs-interop';
import { scan, skip } from 'rxjs';

export type TabActivatedEvent = {
  active: number;
  previous: number;
}

@Component({
  selector: 'app-tabbed-pane',
  standalone: true,
  imports: [],
  template: `
    <div class="pane">
      <div class="nav" role="group">
          @for(tab of tabs(); track tab) {
              <button [class.secondary]="tab !== currentTab()" (click)="activate($index)">{{tab.title()}}</button>
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
  current = model(0);
  tabs = contentChildren(TabComponent);
  currentTab = computed(() => this.tabs()[this.current()]);

  tabChanged$ = toObservable(this.current).pipe(
    scan(
      (acc, active) => ({ active, previous: acc.active }),
      { active: -1, previous: -1 }
    ),
    skip(1),
  );

  tabChanged = outputFromObservable(this.tabChanged$);

  activate(active: number): void {
    this.current.set(active);
  }

}
