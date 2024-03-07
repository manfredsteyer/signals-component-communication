import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  template: `
    <div class="toast">
        {{ label() }} <a (click)="confirm()">Ok</a>
    </div>  
`,
  styles: `

  /* taken from: https://www.w3schools.com/howto/howto_js_snackbar.asp */
  .toast {
    min-width: 250px; 
    margin-left: -125px;
    background-color: #333;
    color: #fff; 
    text-align: center; 
    border-radius: 2px; 
    padding: 16px; 
    position: fixed; 
    z-index: 1; 
    left: 50%; 
    bottom: 30px; 
  }

  .toast a {
    margin-left: 10px;
    cursor: pointer;
    color: lightsteelblue;
    text-decoration: none;
  }
`
})
export class ToastComponent {
  label = input.required<string>();
  confirmed = output<string>();

  confirm(): void {
    this.confirmed.emit(this.label());
  }
}
