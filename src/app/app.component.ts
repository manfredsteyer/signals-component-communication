import { Component } from '@angular/core';
import { TabComponent } from "./tab/tab.component";
import { FormComponent } from "./form/form.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { OptionDemoComponent } from "./option-demo/option-demo.component";
import { TabbedPaneDemoComponent } from './tabbed-pane-demo/tabbed-pane-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TabbedPaneDemoComponent, TabComponent, FormComponent, DynamicComponent, OptionDemoComponent]
})
export class AppComponent {
}
