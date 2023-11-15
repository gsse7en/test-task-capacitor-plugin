import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-task-capacitor-plugin';
  message = 'Hello World';
  constructor(private _snackbar: MatSnackBar) {}
  sendMessage(text: string) {
    this._snackbar.open(text);
  }
}
