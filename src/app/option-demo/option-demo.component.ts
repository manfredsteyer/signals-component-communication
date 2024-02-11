import { Component } from '@angular/core';
import { OptionComponent } from "../option/option.component";

@Component({
    selector: 'app-option-demo',
    standalone: true,
    template: `
    <app-option label="Option #1" featured="yes"></app-option>
    `,
    imports: [OptionComponent]
})
export class OptionDemoComponent {
}
