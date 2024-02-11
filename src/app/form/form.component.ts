import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  template: `
  <form>
    <input [(ngModel)]="userName" name="userName" #userNameCtrl required>
    <input [(ngModel)]="password" type="password" name="password" #passwordCtrl required>
    <button (click)="save()">Save</button>
  </form>
  `,
})
export class FormComponent {

  form = viewChild.required(NgForm);
  userNameCtrl = viewChild.required('userNameCtrl', { read: ElementRef });
  passwordCtrl = viewChild.required('passwordCtrl', { read: ElementRef });

  userName = signal('');
  password = signal('');

  save(): void {
    const form = this.form();

    if (form.controls['userName'].invalid) {
      this.userNameCtrl().nativeElement.focus();
      return;
    }
    
    if (form.controls['password'].invalid) {
      this.passwordCtrl().nativeElement.focus();
      return;
    }

    console.log('save', this.userName(), this.password())
  
  }

}
