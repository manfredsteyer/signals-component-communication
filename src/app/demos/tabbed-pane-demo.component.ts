import { Component, signal } from '@angular/core';
import { TabActivatedEvent, TabbedPaneComponent } from "./tabbed-pane.component";
import { TabComponent } from "./tab.component";

@Component({
  selector: 'app-tabbed-pane-demo',
  standalone: true,
  template: `
    <h1>Tabs Demo</h1>

    <div class="pane-container">

      <app-tabbed-pane [(current)]="current" (tabActivated)="activated($event)">
        <app-tab title="1st tab">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam at quam facilis ducimus maxime
          suscipit numquam quidem quis autem? Dicta consequuntur a, laudantium iusto unde praesentium inventore fugit
          quibusdam.
        </app-tab>
        <app-tab title="2nd tab">
          Sammas ergo gemma, ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam at quam facilis ducimus
          maxime suscipit numquam quidem quis autem? Dicta consequuntur a, laudantium iusto unde praesentium inventore fugit
          quibusdam.
        </app-tab>
        <app-tab title="3nd tab">
          Gemma ham ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam at quam facilis ducimus maxime
          suscipit numquam quidem quis autem? Dicta consequuntur a, laudantium iusto unde praesentium inventore fugit
          quibusdam.
        </app-tab>
      </app-tabbed-pane>

      <p class="current-info">
        Current: {{ current() }}
      </p>

    </div>
  `,
  styles: `
    .pane-container {
      max-width: 600px;
    }
    .current-info {
      margin-top: 20px;
    }
    `,
  imports: [TabbedPaneComponent, TabComponent]
})
export class TabbedPaneDemoComponent {
  current = signal(0);

  activated(event: TabActivatedEvent) {
    console.log('activated', event);
  }
}
