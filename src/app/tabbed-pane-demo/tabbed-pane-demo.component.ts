import { Component, signal } from '@angular/core';
import { TabbedPaneComponent } from "../tabbed-pane/tabbed-pane.component";
import { TabComponent } from "../tab/tab.component";

@Component({
    selector: 'app-tabbed-pane-demo',
    standalone: true,
    template: `
    <div class="container">

    <app-tabbed-pane [(current)]="current">
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

    </div>

    <p>
    Current: {{ current() }}
    </p>
  `,
    styles: `
    .container {
      max-width: 600px;
    }
    `,
    imports: [TabbedPaneComponent, TabComponent]
})
export class TabbedPaneDemoComponent {
  current = signal(0);
}
