import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { CustomLogger } from 'custom-logger-plugin';
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
  constructor(
    private _snackbar: MatSnackBar,
  ) {}
  async sendMessage(text: string) {
    const message = await CustomLogger.log({value: text});
    this._snackbar.open(message.value);
  }
}
