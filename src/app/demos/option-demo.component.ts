import { Component } from '@angular/core';
import { OptionComponent } from "./option.component";

@Component({
    selector: 'app-option-demo',
    standalone: true,
    template: `
        <h1>Option Demo</h1>
        <app-option label="Option #1" featured="yes"></app-option>
        <app-option label="Option #2" featured="no"></app-option>
        <app-option label="Option #3" featured="no"></app-option>
    `,
    imports: [OptionComponent]
})
export class OptionDemoComponent {
}
