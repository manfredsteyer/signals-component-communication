import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  template: `
    <div class="toast">
        {{ label() }}
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

`
})
export class InfoComponent {
  label = input.required<string>();
}
