import { Routes } from '@angular/router';
import { TabbedPaneDemoComponent } from './demos/tabbed-pane-demo.component';
import { FormDemoComponent } from './demos/form-demo.component';
import { OptionDemoComponent } from './demos/option-demo.component';
import { ToastDemoComponent } from './demos/toast-demo.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tabbed-pane-demo'
    },
    {
        path: 'tabbed-pane-demo',
        component: TabbedPaneDemoComponent
    },
    {
        path: 'option-demo',
        component: OptionDemoComponent
    },
    {
        path: 'form-demo',
        component: FormDemoComponent
    },
    {
        path: 'toast-demo',
        component: ToastDemoComponent
    }
];
