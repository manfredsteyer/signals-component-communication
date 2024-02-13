import { Component, booleanAttribute, effect, input } from '@angular/core';

function boolTranformer(value: unknown): boolean {
  return value !== 'no';
}

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [],
  template: `
    <div class="option">
      {{ label() }} @if (featured()) { ⭐ }
    </div>
  `,
  styles: `
    .option { 
      border: 2px solid black;
      width: 200px;
      padding: 10px;
      margin: 20px 20px 0px 0px;
      display: inline-block;
    }
  `
})
export class OptionComponent {
  label = input.required<string>();
  featured = input.required({
    transform: boolTranformer // booleanAttribute
  })
}
