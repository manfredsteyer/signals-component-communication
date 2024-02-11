import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <header>
          <nav>
              <ul>
                  <li><strong>Signals Demo: Component Communication</strong></li>
              </ul>
              <ul>
                  <li><a routerLink="tabbed-pane-demo">Tabs</a></li>
                  <li><a routerLink="option-demo">Option</a></li>
                  <li><a routerLink="form-demo">Form</a></li>
                  <li><a routerLink="toast-demo">Toast</a></li>
                </ul>
          </nav>
      </header>
      <main>
          <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: `
    main {
      margin-top:20px;
    }
  `,
  imports: [RouterModule]
})
export class AppComponent {
}
